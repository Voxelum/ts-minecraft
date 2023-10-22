import { getPlatform, Platform } from '@xmcl/core'
import { Task, task } from '@xmcl/task'
import { exec } from 'child_process'
import { unlink } from 'fs/promises'
import { arch, EOL, platform, tmpdir } from 'os'
import { basename, join, resolve } from 'path'
import { Dispatcher, request } from 'undici'
import { DownloadTask } from './downloadTask'
import { DownloadBaseOptions } from '@xmcl/file-transfer'
import { ensureDir, missing } from './utils'

export interface JavaInfo {
  /**
     * Full java executable path
     */
  path: string
  /**
     * Java version string
     */
  version: string
  /**
     * Major version of java
     */
  majorVersion: number
}

export interface InstallJavaOptions extends DownloadBaseOptions {
  /**
     * The destination of this installation
     */
  destination: string
  /**
     * The cached directory which compressed java lzma will be download to.
     * @default os.tempdir()
     */
  cacheDir?: string
  /**
     * The platform to install. It will be auto-resolved by default.
     * @default currentPlatform
     */
  platform?: Platform
  /**
     * Unpack lzma function. It must present, else it will not be able to unpack mojang provided LZMA.
     */
  unpackLZMA: UnpackLZMAFunction
  /**
     * The dispatcher for API
     */
  dispatcher?: Dispatcher
}

export type UnpackLZMAFunction =
    ((src: string, dest: string) => Promise<void>) |
    ((src: string, dest: string) => Task<void>)

export class DownloadJRETask extends DownloadTask {
  constructor(jre: DownloadInfo, dir: string, options: InstallJavaOptions) {
    const { sha1, url } = jre
    const filename = basename(url)
    const downloadDestination = resolve(dir, filename)

    super({
      url,
      destination: downloadDestination,
      validator: {
        algorithm: 'sha1',
        hash: sha1,
      },
      agent: options.agent,
      headers: options.headers,
    })

    this.name = 'downloadJre'
    this.param = jre
  }
}

interface DownloadInfo { sha1: string; url: string; version: string }

/**
 * Install JRE from Mojang offical resource. It should install jdk 8.
 * @param options The install options
 */
export function installJreFromMojangTask(options: InstallJavaOptions) {
  const {
    destination,
    unpackLZMA,
    cacheDir = tmpdir(),
    platform = getPlatform(),
  } = options
  return task('installJreFromMojang', async function () {
    const info =
            await this.yield(task('fetchInfo', async () => {
              const response = await request('https://launchermeta.mojang.com/mc/launcher.json', { dispatcher: options.dispatcher, throwOnError: true })
              return await response.body.json() as  { [system: string]: { [arch: string]: { jre: DownloadInfo } } }
            }))
    const system = platform.name
    function resolveArch() {
      switch (platform.arch) {
        case 'x86':
        case 'x32': return '32'
        case 'x64': return '64'
        default: return '32'
      }
    }
    const currentArch = resolveArch()

    if (!info[system] || !info[system][currentArch] || !info[system][currentArch].jre) {
      throw new Error('No Java package available for your platform')
    }
    const lzmaPath = await this.yield(new DownloadJRETask(info[system][currentArch].jre, cacheDir, options).map(function () { return this.to! }))
    const result = unpackLZMA(lzmaPath, destination)
    await ensureDir(destination)
    if (result instanceof Promise) {
      await this.yield(task('decompress', () => result))
    } else {
      await this.yield(result)
    }
    await this.yield(task('cleanup', () => unlink(lzmaPath)))
  })
}

/**
 * Install JRE from Mojang offical resource. It should install jdk 8.
 * @param options The install options
 */
export function installJreFromMojang(options: InstallJavaOptions) {
  return installJreFromMojangTask(options).startAndWait()
}

/**
 * Try to resolve a java info at this path. This will call `java -version`
 * @param path The java exectuable path.
 */
export async function resolveJava(path: string): Promise<JavaInfo | undefined> {
  if (await missing(path)) { return undefined }

  return new Promise((resolve) => {
    exec(`"${path}" -version`, (_err, _sout, serr) => {
      if (serr) {
        const ver = parseJavaVersion(serr)
        if (ver) {
          resolve({ path, ...ver })
        } else {
          resolve(undefined)
        }
      } else {
        resolve(undefined)
      }
    })
  })
}

export class ParseJavaVersionError extends Error {
  name = 'ParseJavaVersionError'

  constructor(message: string) { super(message) }
}

/**
 * Parse version string and major version number from stderr of java process.
 *
 * @param versionText The stderr for `java -version`
 */
export function parseJavaVersion(versionText: string): { version: string; majorVersion: number; patch: number } | undefined {
  const getVersion = (str?: string) => {
    if (!str) { return undefined }
    const match = /(\d+)\.(\d)+\.(\d+)(_\d+)?/.exec(str)
    if (match === null) { return undefined }
    if (match[1] === '1') {
      return {
        version: match[0],
        majorVersion: Number.parseInt(match[2]),
        patch: Number.parseInt(match[4].substring(1) ?? '-1'),
      }
    }
    return {
      version: match[0],
      majorVersion: Number.parseInt(match[1]),
      patch: Number.parseInt(match[3]),
    }
  }
  try {
    const javaVersion = getVersion(versionText)
    if (!javaVersion) { return undefined }
    return javaVersion
  } catch (e) {
    throw new ParseJavaVersionError(`Fail to parse java version [${versionText}]: ${(e as any).message}`)
  }
}

/**
 * Get all potential java locations for Minecraft.
 *
 * On mac/linux, it will perform `which java`. On win32, it will perform `where java`
 *
 * @returns The absolute java locations path
 */
export async function getPotentialJavaLocations(): Promise<string[]> {
  const unchecked = new Set<string>()
  const currentPlatform = platform()
  const javaFile = currentPlatform === 'win32' ? 'javaw.exe' : 'java'

  if (process.env.JAVA_HOME) {
    unchecked.add(join(process.env.JAVA_HOME, 'bin', javaFile))
  }

  const which = () => new Promise<string>((resolve) => {
    exec('which java', (_error, stdout) => {
      resolve(stdout.replace('\n', ''))
    })
  })
  const where = () => new Promise<string[]>((resolve) => {
    exec('where java', (_error, stdout) => {
      resolve(stdout.split('\r\n'))
    })
  })

  if (currentPlatform === 'win32') {
    const out = await new Promise<string[]>((resolve) => {
      exec('REG QUERY HKEY_LOCAL_MACHINE\\Software\\JavaSoft\\ /s /v JavaHome', (_error, stdout) => {
        if (!stdout) { resolve([]) }
        resolve(stdout.split(EOL).map((item) => item.replace(/[\r\n]/g, ''))
          .filter((item) => item != null && item !== undefined)
          .filter((item) => item[0] === ' ')
          .map((item) => `${item.split('    ')[3]}\\bin\\javaw.exe`))
      })
    })
    for (const o of [...out, ...await where()]) {
      unchecked.add(o)
    }
    const currentArch = arch()
    unchecked.add('C:\\Program Files (x86)\\Minecraft Launcher\\runtime\\jre-x64/X86')
    unchecked.add(`C:\\Program Files (x86)\\Minecraft Launcher\\runtime\\jre-legacy\\windows-${currentArch}\\jre-legacy`)
  } else if (currentPlatform === 'darwin') {
    unchecked.add('/Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home/bin/java')
    unchecked.add(await which())
  } else {
    unchecked.add(await which())
  }

  const checkingList = Array.from(unchecked).filter((jPath) => typeof jPath === 'string').filter((p) => p !== '')

  return checkingList
}

/**
 * Scan local java version on the disk.
 *
 * It will check if the passed `locations` are the home of java.
 * Notice that the locations should not be the executable, but the path of java installation, like JAVA_HOME.
 *
 * This will call `getPotentialJavaLocations` and then `resolveJava`
 *
 * @param locations The location (like java_home) want to check.
 * @returns All validate java info
 */
export async function scanLocalJava(locations: string[]): Promise<JavaInfo[]> {
  const unchecked = new Set(locations)
  const potential = await getPotentialJavaLocations()
  potential.forEach((p) => unchecked.add(p))

  const checkingList = [...unchecked].filter((jPath) => typeof jPath === 'string').filter((p) => p !== '')

  const javas = await Promise.all(checkingList.map((jPath) => resolveJava(jPath)))
  return javas.filter(((j) => j !== undefined) as (j?: JavaInfo) => j is JavaInfo)
}
