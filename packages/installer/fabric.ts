import { MinecraftFolder, MinecraftLocation, Version } from '@xmcl/core'
import { writeFile } from 'fs/promises'
import { Dispatcher, request } from 'undici'
import { ensureFile, InstallOptions } from './utils'

export const YARN_MAVEN_URL = 'https://maven.fabricmc.net/net/fabricmc/yarn/maven-metadata.xml'
export const LOADER_MAVEN_URL = 'https://maven.fabricmc.net/net/fabricmc/fabric-loader/maven-metadata.xml'

export interface FabricArtifactVersion {
  gameVersion?: string // "20w10a",
  separator?: string
  build?: number
  maven: string // "net.fabricmc:yarn:20w10a+build.7",
  version: string // "20w10a+build.7",
  stable: boolean
}

export interface FabricArtifacts {
  mappings: FabricArtifactVersion[]
  loader: FabricArtifactVersion[]
}

export interface FabricLoaderArtifact {
  loader: FabricArtifactVersion
  intermediary: FabricArtifactVersion
  launcherMeta: {
    version: number
    libraries: {
      client: { name: string; url: string }[]
      common: { name: string; url: string }[]
      server: { name: string; url: string }[]
    }
    mainClass: {
      client: string
      server: string
    }
  }
}

export interface FabricOptions {
  dispatcher?: Dispatcher
}

/**
 * Get all the artifacts provided by fabric
 * @param remote The fabric API host
 * @beta
 */
export async function getFabricArtifacts(options?: FabricOptions): Promise<FabricArtifacts> {
  const response = await request('https://meta.fabricmc.net/v2/versions', { throwOnError: true, dispatcher: options?.dispatcher })
  const body = await response.body.json() as FabricArtifacts
  return body
}
/**
 * Get fabric-yarn artifact list
 * @param remote The fabric API host
 * @beta
 */
export async function getYarnArtifactList(options?: FabricOptions): Promise<FabricArtifactVersion[]> {
  const response = await request('https://meta.fabricmc.net/v2/versions/yarn', { throwOnError: true, dispatcher: options?.dispatcher })
  const body = await response.body.json() as FabricArtifactVersion[]
  return body
}
/**
 * Get fabric-yarn artifact list by Minecraft version
 * @param minecraft The Minecraft version
 * @param remote The fabric API host
 * @beta
 */
export async function getYarnArtifactListFor(minecraft: string, options?: FabricOptions): Promise<FabricArtifactVersion[]> {
  const response = await request('https://meta.fabricmc.net/v2/versions/yarn/' + minecraft, { throwOnError: true, dispatcher: options?.dispatcher })
  const body = await response.body.json() as FabricArtifactVersion[]
  return body
}
/**
 * Get fabric-loader artifact list
 * @param remote The fabric API host
 * @beta
 */
export async function getLoaderArtifactList(options?: FabricOptions): Promise<FabricArtifactVersion[]> {
  const response = await request('https://meta.fabricmc.net/v2/versions/loader', { throwOnError: true, dispatcher: options?.dispatcher })
  const body = await response.body.json() as FabricArtifactVersion[]
  return body
}
/**
 * Get fabric-loader artifact list by Minecraft version
 * @param minecraft The minecraft version
 * @param remote The fabric API host
 * @beta
 */
export async function getLoaderArtifactListFor(minecraft: string, options?: FabricOptions): Promise<FabricLoaderArtifact[]> {
  const response = await request('https://meta.fabricmc.net/v2/versions/loader/' + minecraft, { throwOnError: true, dispatcher: options?.dispatcher })
  const body = await response.body.json() as FabricLoaderArtifact[]
  return body
}
/**
 * Get fabric-loader artifact list by Minecraft version
 * @param minecraft The minecraft version
 * @param loader The yarn-loader version
 * @param remote The fabric API host
 * @beta
 */
export async function getFabricLoaderArtifact(minecraft: string, loader: string, options?: FabricOptions): Promise<FabricLoaderArtifact> {
  const response = await request('https://meta.fabricmc.net/v2/versions/loader/' + minecraft + '/' + loader, { throwOnError: true, dispatcher: options?.dispatcher })
  const body = await response.body.json() as FabricLoaderArtifact
  return body
}

/**
 * Install the fabric to the client. Notice that this will only install the json.
 * You need to call `Installer.installDependencies` to get a full client.
 * @param yarnVersion The yarn version
 * @param loaderVersion The fabric loader version
 * @param minecraft The minecraft location
 * @returns The installed version id
 */
// export async function installFabricYarnAndLoader(yarnVersion: string, loaderVersion: string, minecraft: MinecraftLocation, options: InstallOptions = {}) {
//     const folder = MinecraftFolder.from(minecraft);
//     const mcversion = yarnVersion.split("+")[0];
//     const id = options.versionId || `${mcversion}-fabric${yarnVersion}-${loaderVersion}`;

//     const jsonFile = folder.getVersionJson(id);

//     const body: Version = constr esponse = await request(`https://fabricmc.net/download/technic/?yarn=${encodeURIComponent(yarnVersion)}&loader=${encodeURIComponent(loaderVersion)}`, { throwOnError: true, dispatcher: options?.dispatcher });
//     const body = response.body.json();
//     return body;
//     body.id = id;
//     if (typeof options.inheritsFrom === "string") {
//         body.inheritsFrom = options.inheritsFrom;
//     }
//     await ensureFile(jsonFile);
//     await writeFile(jsonFile, JSON.stringify(body));

//     return id;
// }

export interface FabricInstallOptions extends InstallOptions {
  side?: 'client' | 'server'
  yarnVersion?: string | FabricArtifactVersion
}

/**
 * Generate fabric version json to the disk according to yarn and loader
 * @param side Client or server
 * @param yarnVersion The yarn version string or artifact
 * @param loader The loader artifact
 * @param minecraft The Minecraft Location
 * @param options The options
 * @beta
 */
export async function installFabric(loader: FabricLoaderArtifact, minecraft: MinecraftLocation, options: FabricInstallOptions = {}) {
  const folder = MinecraftFolder.from(minecraft)

  let yarn: string | undefined
  const side = options.side ?? 'client'
  let id = options.versionId
  let mcversion: string
  if (options.yarnVersion) {
    const yarnVersion = options.yarnVersion
    if (typeof yarnVersion === 'string') {
      yarn = yarnVersion
      mcversion = yarn.split('+')[0]
    } else {
      yarn = yarnVersion.version
      mcversion = yarnVersion.gameVersion || yarn.split('+')[0]
    }
  } else {
    mcversion = loader.intermediary.version
  }

  if (!id) {
    id = mcversion
    if (yarn) {
      id += `-fabric${yarn}-loader${loader.loader.version}`
    } else {
      id += `-fabric${loader.loader.version}`
    }
  }
  const libraries = [
    { name: loader.loader.maven, url: 'https://maven.fabricmc.net/' },
    { name: loader.intermediary.maven, url: 'https://maven.fabricmc.net/' },
    ...(options.yarnVersion
      ? [{ name: `net.fabricmc:yarn:${yarn}`, url: 'https://maven.fabricmc.net/' }]
      : []),
    ...loader.launcherMeta.libraries.common,
    ...loader.launcherMeta.libraries[side],
  ]
  const mainClass = loader.launcherMeta.mainClass[side]
  const inheritsFrom = options.inheritsFrom || mcversion

  const jsonFile = folder.getVersionJson(id)

  await ensureFile(jsonFile)
  await writeFile(jsonFile, JSON.stringify({
    id,
    inheritsFrom,
    mainClass,
    libraries,
    arguments: {
      game: [],
      jvm: [],
    },
    releaseTime: new Date().toJSON(),
    time: new Date().toJSON(),
  }))

  return id
}
