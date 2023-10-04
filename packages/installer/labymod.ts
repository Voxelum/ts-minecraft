import { MinecraftFolder, MinecraftLocation } from '@xmcl/core'
import { DownloadBaseOptions } from '@xmcl/file-transfer'
import { Task, task, AbortableTask, CancelledError } from '@xmcl/task'
import { writeFile } from 'fs/promises'
import { dirname } from 'path'
import { Dispatcher, request } from 'undici'
import { DownloadTask } from './downloadTask'
import { ensureDir } from './utils'
import { version } from 'os'

export interface LabyModManifest {
  labyModVersion: string
  commitReference: string
  sha1: string
  releaseTime: number
  size: number

  assets: {
    shader: string
    common: string
    fonts: string
    'vanilla-theme': string
    'fancy-theme': string
    i18n: string
  }

  minecraftVersions: MinecraftVersion[]
}

export interface MinecraftVersion {
  tag: string
  version: string
  index: number
  type: string
  runtime: {
    name: string
    version: number
  }
  customManifestUrl: string
}

export async function getLabyModManifest(env = 'production', options?: { dispatcher?: Dispatcher }): Promise<LabyModManifest> {
  const url = `https://laby-releases.s3.de.io.cloud.ovh.net/api/v1/manifest/${env}/latest.json`
  const res = await request(url, options)
  return await res.body.json()
}

export interface InstallLabyModOptions extends DownloadBaseOptions {
  dispatcher?: Dispatcher
  environment?: string
}

class JsonTask extends AbortableTask<string> {
  private controller = new AbortController()

  constructor(private manifest: LabyModManifest, private tag: string, private folder: MinecraftFolder, private environment: string, private dispatcher?: Dispatcher) {
    super()
    this.name = 'json'
    this.param = { version: tag }
  }

  protected async process(): Promise<string> {
    this.controller = new AbortController()
    const librariesUrl = `https://laby-releases.s3.de.io.cloud.ovh.net/api/v1/libraries/${this.environment}.json`
    const versionInfo = this.manifest.minecraftVersions.find((v) => v.tag === this.tag)!

    // Get version json and merge with libraries
    const libraries = await request(librariesUrl, { dispatcher: this.dispatcher, signal: this.controller.signal }).then((res) => res.body.json())
    const versionJson = await request(versionInfo.customManifestUrl, { dispatcher: this.dispatcher, signal: this.controller.signal }).then((res) => res.body.json())
    versionJson.libraries.push(...libraries, {
      name: 'net.labymod:LabyMod:4',
      downloads: {
        artifact: {
          path: 'net/labymod/LabyMod/4/LabyMod-4.jar',
          sha1: this.manifest.sha1,
          size: this.manifest.size,
          url: `https://laby-releases.s3.de.io.cloud.ovh.net/api/v1/download/labymod4/${this.environment}/${this.manifest.commitReference}.jar`,
        },
      },
    })
    versionJson.id = `LabyMod-4-${this.tag}-${this.manifest.commitReference}`

    // write json to file
    const versionPath = this.folder.getPath('versions', versionJson.id, `${versionJson.id}.json`)
    await ensureDir(dirname(versionPath))
    await writeFile(versionPath, JSON.stringify(versionJson))

    return versionJson.id
  }

  protected abort(isCancelled: boolean): void {
    this.controller.abort(new CancelledError())
  }

  protected isAbortedError(e: any): boolean {
    return e instanceof CancelledError
  }
}

export function installLabyMod4Task(manifest: LabyModManifest, tag: string, minecraft: MinecraftLocation, options?: InstallLabyModOptions): Task<string> {
  return task('installLabyMod', async function () {
    const folder = MinecraftFolder.from(minecraft)
    const environment = options?.environment ?? 'production'

    const versionId = await this.yield(new JsonTask(manifest, tag, folder, environment, options?.dispatcher))

    // Download assets
    for (const [name, hash] of Object.entries(manifest.assets)) {
      const url = `https://laby-releases.s3.de.io.cloud.ovh.net/api/v1/download/assets/labymod4/${environment}/${manifest.commitReference}/${name}/${hash}.jar`
      const destination = folder.getPath('labymod-neo', 'assets', `${name}.jar`)
      await this.yield(new DownloadTask({
        url,
        destination,
        validator: { algorithm: 'sha1', hash },
        agent: options?.agent,
        headers: options?.headers,
      }).setName('asset', { name }))
    }

    return versionId
  })
}

export function installLaby4Mod(manifest: LabyModManifest, tag: string, minecraft: MinecraftLocation, options?: InstallLabyModOptions): Promise<string> {
  return installLabyMod4Task(manifest, tag, minecraft, options).startAndWait()
}
