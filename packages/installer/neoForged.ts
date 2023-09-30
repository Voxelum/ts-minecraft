import { MinecraftFolder, MinecraftLocation, Version as VersionJson } from '@xmcl/core'
import { open, readEntry } from '@xmcl/unzip'
import { DownloadTask } from './downloadTask'
import { BadForgeInstallerJarError, InstallForgeOptions, isForgeInstallerEntries, unpackForgeInstaller, walkForgeInstallerEntries } from './forge'
import { resolveLibraryDownloadUrls } from './minecraft'
import { InstallProfile, installByProfileTask } from './profile'
import { normalizeArray } from './utils'
import { ZipValidator } from './zipValdiator'
import { Task, task } from '@xmcl/task'

export class DownloadNeoForgedInstallerTask extends DownloadTask {
  readonly installJarPath: string

  constructor(version: string, minecraft: MinecraftFolder, options: InstallForgeOptions) {
    const url = `https://maven.neoforged.net/releases/net/neoforged/forge/${version}/forge-${version}-installer.jar`

    const library = VersionJson.resolveLibrary({
      name: `net.neoforged:forge:${version}:installer`,
      downloads: {
        artifact: {
          url,
          path: `net/neoforged/forge/${version}/forge-${version}-installer.jar`,
          size: -1,
          sha1: '',
        },
      },
    })!
    const mavenHost = options.mavenHost ? normalizeArray(options.mavenHost) : []

    const urls = resolveLibraryDownloadUrls(library, { ...options, mavenHost })

    const installJarPath = minecraft.getLibraryByPath(library.path)

    super({
      url: urls,
      destination: installJarPath,
      validator: new ZipValidator(),
      agent: options.agent,
      skipPrevalidate: options.skipPrevalidate,
      skipRevalidate: options.skipRevalidate,
    })

    this.installJarPath = installJarPath
    this.name = 'downloadInstaller'
    this.param = { version }
  }
}

export async function installNeoForged(version: string, minecraft: MinecraftLocation, options: InstallForgeOptions): Promise<string> {
  return installNeoForgedTask(version, minecraft, options).startAndWait()
}

export function installNeoForgedTask(version: string, minecraft: MinecraftLocation, options: InstallForgeOptions): Task<string> {
  return task('installForge', async function () {
    const [_, forgeVersion] = version.split('-')
    const mc = MinecraftFolder.from(minecraft)
    const jarPath = await this.yield(new DownloadNeoForgedInstallerTask(version, mc, options)
      .map(function () { return this.installJarPath }))

    const zip = await open(jarPath, { lazyEntries: true, autoClose: false })
    const entries = await walkForgeInstallerEntries(zip, forgeVersion)

    if (!entries.installProfileJson) {
      throw new BadForgeInstallerJarError(jarPath, 'install_profile.json')
    }
    const profile: InstallProfile = await readEntry(zip, entries.installProfileJson).then((b) => b.toString()).then(JSON.parse)
    if (isForgeInstallerEntries(entries)) {
      // new forge
      const versionId = await unpackForgeInstaller(zip, entries, forgeVersion, profile, mc, jarPath, options)
      await this.concat(installByProfileTask(profile, minecraft, options))
      return versionId
    } else {
      // bad forge
      throw new BadForgeInstallerJarError(jarPath)
    }
  })
}
