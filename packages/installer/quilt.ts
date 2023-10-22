import { MinecraftFolder, MinecraftLocation, Version } from '@xmcl/core'
import { writeFile } from 'fs/promises'
import { Dispatcher, request } from 'undici'
import { ensureFile } from './utils'

export const DEFAULT_META_URL = 'https://meta.quiltmc.org'

export interface InstallQuiltVersionOptions {
  minecraftVersion: string
  version: string
  minecraft: MinecraftLocation

  dispatcher?: Dispatcher
}

export async function installQuiltVersion(options: InstallQuiltVersionOptions) {
  const url = `${DEFAULT_META_URL}/v3/versions/loader/${options.minecraftVersion}/${options.version}/profile/json`
  const response = await request(url, { dispatcher: options.dispatcher })
  const content = await response.body.json() as Version

  const minecraft = MinecraftFolder.from(options.minecraft)
  const versionName = content.id

  const jsonPath = minecraft.getVersionJson(versionName)

  const hashed = content.libraries.find((l) => l.name.startsWith('org.quiltmc:hashed'))
  if (hashed) {
    hashed.name = hashed.name.replace('org.quiltmc:hashed', 'net.fabricmc:intermediary')
    if ('url' in hashed) {
      hashed.url = 'https://maven.fabricmc.net/'
    }
  }

  await ensureFile(jsonPath)
  await writeFile(jsonPath, JSON.stringify(content))

  return versionName
}

export interface GetQuiltOptions {
  dispatcher?: Dispatcher
}

export interface QuiltArtifactVersion {
  separator: string
  build: number
  /**
   * e.g. "org.quiltmc:quilt-loader:0.16.1",
   */
  maven: string
  version: string
}

export async function getQuiltVersionsList(options?: GetQuiltOptions): Promise<QuiltArtifactVersion[]> {
  const response = await request(`${DEFAULT_META_URL}/v3/versions/loader`, { dispatcher: options?.dispatcher, throwOnError: true })
  const content = await response.body.json() as QuiltArtifactVersion[]
  return content
}
