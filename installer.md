# Installer Module

[![npm version](https://img.shields.io/npm/v/@xmcl/installer.svg)](https://www.npmjs.com/package/@xmcl/installer)
[![Downloads](https://img.shields.io/npm/dm/@xmcl/installer.svg)](https://npmjs.com/@xmcl/installer)
[![Install size](https://packagephobia.now.sh/badge?p=@xmcl/installer)](https://packagephobia.now.sh/result?p=@xmcl/installer)
[![npm](https://img.shields.io/npm/l/@xmcl/minecraft-launcher-core.svg)](https://github.com/voxelum/minecraft-launcher-core-node/blob/master/LICENSE)
[![Build Status](https://github.com/voxelum/minecraft-launcher-core-node/workflows/Build/badge.svg)](https://github.com/Voxelum/minecraft-launcher-core-node/actions?query=workflow%3ABuild)

Provide functions to install Minecraft client, libraries, and assets.

## Usage

### Install Minecraft

Fully install vanilla minecraft client including assets and libs.

```ts
import { getVersionList, MinecraftVersion, install } from "@xmcl/installer";
import { MinecraftLocation } from "@xmcl/core";

const minecraft: MinecraftLocation;
const list: MinecraftVersion[] = (await getVersionList()).versions;
const aVersion: MinecraftVersion = list[0]; // i just pick the first version in list here
await install(aVersion, minecraft);
```

Just install libraries:

```ts
import { installLibraries } from "@xmcl/installer";
import { ResolvedVersion, MinecraftLocation, Version } from "@xmcl/core";

const minecraft: MinecraftLocation;
const version: string; // version string like 1.13
const resolvedVersion: ResolvedVersion = await Version.parse(minecraft, version);
await installLibraries(resolvedVersion);
```

Just install assets:

```ts
import { installAssets } from "@xmcl/installer";
import { MinecraftLocation, ResolvedVersion, Version } from "@xmcl/core";

const minecraft: MinecraftLocation;
const version: string; // version string like 1.13
const resolvedVersion: ResolvedVersion = await Version.parse(minecraft, version);
await installAssets(resolvedVersion);
```

Just ensure all assets and libraries are installed:

```ts
import { installDependencies } from "@xmcl/installer";
import { MinecraftLocation, ResolvedVersion, Version } from "@xmcl/core";

const minecraft: MinecraftLocation;
const version: string; // version string like 1.13
const resolvedVersion: ResolvedVersion = await Version.parse(minecraft, version);
await installDependencies(resolvedVersion);
```

### Limit the concurrency of installation

The library is using undici as the backbone of http request. It's a very fast http client. But it's also very aggressive. It will create a lot of connections to the server. If you want to limit the concurrency of the installation, you want to create your own undici `Dispatcher` to handle the request.

```ts
import { Dispatcher, Agent } from "undici";

const agent = new Agent({
    connection: 16 // only 16 connection (socket) we should create at most
    // you can have other control here.
});

await installAssets(resolvedVersion, { 
  agent: { // notice this is the DownloadAgent from `@xmcl/file-transfer`
    dispatcher: agent // this is the undici Dispatcher option
  }
});
```

There are other type of `Dispatcher`, like `Pool`, `Client`, `ProxyAgent`. You can read undici document for more information.

### Progress Moniting on Installation

Most install function has a corresponding task function. For example, `install` function has the function name `installTask` which is the task version monitor the progress of install.

Here is the example of just moniting the install task overall progress: 

```ts
// suppose you have define such functions to update UI
declare function updateTaskProgress(task: Task<any>, progress: number, total: number): void;
declare function setTaskToFail(task: Task<any>): void;
declare function setTaskToSuccess(task: Task<any>): void;
declare function trackTask(task: Task<any>): void;

const installAllTask: Task<ResolvedVersion> = installTask(versionMetadata, mcLocation);
await installAllTask.startAndWait({
    onStart(task: Task<any>) {
        // a task start
        // task.path show the path
        // task.name is the name
        trackTask(task)
    },
    onUpdate(task: Task<any>, chunkSize: number) {
        // a task update
        // the chunk size usually the buffer size
        // you can use this to track download speed

        // you can track this specific task progress
        updateTaskProgress(task, task.progress, task.total);

        // or you can update the root task by
        updateTaskProgress(task, installAllTask.progress, installAllTask.total);
    },
    onFailed(task: Task<any>, error: any) {
        // on a task fail
        setTaskToFail(task);
    },
    onSucceed(task: Task<any>, result: any) {
        // on task success
        setTaskToSuccess(task);
    },
    // on task is paused/resumed/cancelled
    onPaused(task: Task<any>) {
    },
    onResumed(task: Task<any>) {
    },
    onCancelled(task: Task<any>) {
    },
});

```

The task is designed to organize the all the works in a tree like structure.

The `installTask` has such parent/child structure

- install
  - version
    - json
    - jar
  - dependencies
    - assets
      - assetsJson
      - asset
    - libraries
      - library

To generally display this tree in UI. You can identify the task by its `path`.

```ts
function updateTaskUI(task: Task<any>, progress: number, total: number) {
    // you can use task.path as identifier
    // and update the task on UI
    const path = task.path;
    // the path can be something like `install.version.json`
}
```

Or you can use your own identifier like uuid:

```ts
// you customize function to make task to a user reacable string to display in UI
declare function getTaskName(task: Task<any>): string;

function runTask(rootTask: Task<any>) {
    // your own id for this root task
    const uid = uuid();
    await rootTask.startAndWait({
        onStart(task: Task<any>) {
            // tell ui that a task with such name started
            // the task id is a number id from 0
            trackTask(`${uid}.${task.id}`, getTaskName(task));
        },
        onUpdate(task: Task<any>, chunkSize: number) {
            // update the total progress 
            updateTaskProgress(`${uid}.${task.id}`, installAllTask.progress, installAllTask.total);
        },
        onStart(task: Task<any>) {
            // tell ui this task ended
            endTask(`${uid}.${task.id}`);
        },
    });
}

```

### Install Library/Assets with Customized Host

To swap the library to your self-host or other customized host, you can assign the `libraryHost` field in options.

For example, if you want to download the library `commons-io:commons-io:2.5` from your self hosted server, you can have

```ts
// the example for call `installLibraries`
// this option will also work for other functions involving libraries like `install`, `installDependencies`.
await installLibraries(resolvedVersion, {
    libraryHost(library: ResolvedLibrary) {
        if (library.name === "commons-io:commons-io:2.5") {
            // the downloader will first try the first url in the array
            // if this failed, it will try the 2nd.
            // if it's still failed, it will try original url
            return ["https://your-host.org/the/path/to/the/jar", "your-sencodary-url"];
            // if you just have one url
            // just return a string here...
        }
        // return undefined if you don't want to change lib url
        return undefined;
    },
    mavenHost: ['https://www.your-other-maven.org'], // you still can use this to add other maven
});

// it will first try you libraryHost url and then try mavenHost url.
```

To swap the assets host, you can just assign the assets host url to the options

```ts
await installAssets(resolvedVersion, {
    assetsHost: "https://www.your-url/assets"
});
```

The assets host should accept the get asset request like `GET https://www.your-url/assets/<hash-head>/<hash>`, where `hash-head` is the first two char in `<hash>`. The `<hash>` is the sha1 of the asset. 

### Install Forge

Get the forge version info and install forge from it. 

```ts
import { installForge, getForgeVersionList, ForgeVersionList, ForgeVersion } from "@xmcl/installer";
import { MinecraftLocation } from "@xmcl/core";

const list: ForgeVersionList = await getForgeVersionList();
const minecraftLocation: MinecraftLocation;
const mcversion = page.mcversion; // mc version
const firstVersionOnPage: ForgeVersion = page.versions[0];
await installForge(firstVersionOnPage, minecraftLocation);
```

If you know forge version and minecraft version. You can directly do such:

```ts
import { installForge } from "@xmcl/installer";

const forgeVersion = 'a-forge-version'; // like 31.1.27
await installForge({ version: forgeVersion, mcversion: '1.15.2' }, minecraftLocation);
```

Notice that this installation doesn't ensure full libraries installation.
Please run `installDependencies` afther that.

The new 1.13 forge installation process requires java to run. 
Either you have `java` executable in your environment variable PATH,
or you can assign java location by `installForge(forgeVersionMeta, minecraftLocation, { java: yourJavaExecutablePath });`.

If you use this auto installation process to install forge, please checkout [Lex's Patreon](https://www.patreon.com/LexManos).
Consider support him to maintains forge.

### Install Fabric

Fetch the new fabric version list.

```ts
import { installFabric, FabricArtifactVersion } from "@xmcl/installer";

const versionList: FabricArtifactVersion[] = await getFabricArtifactList();
```

Install fabric to the client. This installation process doesn't ensure the minecraft libraries.

```ts
const minecraftLocation: MinecraftLocation;
await installFabric(versionList[0], minecraftLocation);
```

Please run `Installer.installDependencies` after that to install fully.

## New Forge Installing process

The module have three stage for installing new forge *(mcversion >= 1.13)*

1. Deploy forge installer jar
   1. Download installer jar
   2. Extract forge universal jar files in installer jar into `.minecraft/libraries`
   3. Extract `version.json` into target version folder, `.minecraft/versions/<ver>/<ver>.json`
   4. Extract `installer_profile.json` into target version folder, `.minecraft/versions/<ver>/installer_profile.json`
2. Download Dependencies
   1. Merge libraires in `installer_profile.json` and `<ver>.json`
   2. Download them
3. Post processing forge jar
   1. Parse `installer_profile.json`
   2. Get the processors info and execute all of them.

The `installForge` will do all of them.

The `installByProfile` will do 2 and 3.

### Install Java 8 From Mojang Source

Scan java installation path from the disk. (Require a lzma unpacker, like [7zip-bin](https://www.npmjs.com/package/7zip-bin) or [lzma-native](https://www.npmjs.com/package/lzma-native))

```ts
import { installJreFromMojang } from "@xmcl/installer";

// this require a unpackLZMA util to work
// you can use `7zip-bin`
// or `lzma-native` for this
const unpackLZMA: (src: string, dest: string) => Promise<void>;

await installJreFromMojang({
    destination: "your/java/home",
    unpackLZMA,
});
```

## 🧾 Classes

<div class="definition-grid class"><a href="installer/@xmcl/installer.BadForgeInstallerJarError">BadForgeInstallerJarError</a><a href="installer/@xmcl/installer.BadOptifineJarError">BadOptifineJarError</a><a href="installer/@xmcl/installer.DownloadForgeInstallerTask">DownloadForgeInstallerTask</a><a href="installer/@xmcl/installer.DownloadJRETask">DownloadJRETask</a><a href="installer/@xmcl/installer.DownloadMultipleTask">DownloadMultipleTask</a><a href="installer/@xmcl/installer.DownloadNeoForgedInstallerTask">DownloadNeoForgedInstallerTask</a><a href="installer/@xmcl/installer.DownloadTask">DownloadTask</a><a href="installer/@xmcl/installer.InstallAssetIndexTask">InstallAssetIndexTask</a><a href="installer/@xmcl/installer.InstallAssetTask">InstallAssetTask</a><a href="installer/@xmcl/installer.InstallJarTask">InstallJarTask</a><a href="installer/@xmcl/installer.InstallJsonTask">InstallJsonTask</a><a href="installer/@xmcl/installer.InstallLibraryTask">InstallLibraryTask</a><a href="installer/@xmcl/installer.MissingVersionJsonError">MissingVersionJsonError</a><a href="installer/@xmcl/installer.ParseJavaVersionError">ParseJavaVersionError</a><a href="installer/@xmcl/installer.PostProcessBadJarError">PostProcessBadJarError</a><a href="installer/@xmcl/installer.PostProcessFailedError">PostProcessFailedError</a><a href="installer/@xmcl/installer.PostProcessingTask">PostProcessingTask</a><a href="installer/@xmcl/installer.PostProcessNoMainClassError">PostProcessNoMainClassError</a><a href="installer/@xmcl/installer.UnzipTask">UnzipTask</a></div>

## 🤝 Interfaces

<div class="definition-grid interface"><a href="installer/@xmcl/installer.AssetInfo">AssetInfo</a><a href="installer/@xmcl/installer.AssetsOptions">AssetsOptions</a><a href="installer/@xmcl/installer.DirectoryEntry">DirectoryEntry</a><a href="installer/@xmcl/installer.DownloadInfo">DownloadInfo</a><a href="installer/@xmcl/installer.Entry">Entry</a><a href="installer/@xmcl/installer.EntryResolver">EntryResolver</a><a href="installer/@xmcl/installer.FabricArtifacts">FabricArtifacts</a><a href="installer/@xmcl/installer.FabricArtifactVersion">FabricArtifactVersion</a><a href="installer/@xmcl/installer.FabricInstallOptions">FabricInstallOptions</a><a href="installer/@xmcl/installer.FabricLoaderArtifact">FabricLoaderArtifact</a><a href="installer/@xmcl/installer.FetchJavaRuntimeManifestOptions">FetchJavaRuntimeManifestOptions</a><a href="installer/@xmcl/installer.FileEntry">FileEntry</a><a href="installer/@xmcl/installer.ForgeInstallerEntries">ForgeInstallerEntries</a><a href="installer/@xmcl/installer.ForgeVersion">ForgeVersion</a><a href="installer/@xmcl/installer.ForgeVersionList">ForgeVersionList</a><a href="installer/@xmcl/installer.GetQuiltOptions">GetQuiltOptions</a><a href="installer/@xmcl/installer.InstallFabricVersionOptions">InstallFabricVersionOptions</a><a href="installer/@xmcl/installer.InstallForgeOptions">InstallForgeOptions</a><a href="installer/@xmcl/installer.InstallJavaOptions">InstallJavaOptions</a><a href="installer/@xmcl/installer.InstallJavaRuntimeOptions">InstallJavaRuntimeOptions</a><a href="installer/@xmcl/installer.InstallLabyModOptions">InstallLabyModOptions</a><a href="installer/@xmcl/installer.InstallOptifineOptions">InstallOptifineOptions</a><a href="installer/@xmcl/installer.InstallOptions">InstallOptions</a><a href="installer/@xmcl/installer.InstallProfile">InstallProfile</a><a href="installer/@xmcl/installer.InstallProfileIssueReport">InstallProfileIssueReport</a><a href="installer/@xmcl/installer.InstallProfileOption">InstallProfileOption</a><a href="installer/@xmcl/installer.InstallQuiltVersionOptions">InstallQuiltVersionOptions</a><a href="installer/@xmcl/installer.InstallSideOption">InstallSideOption</a><a href="installer/@xmcl/installer.JarOption">JarOption</a><a href="installer/@xmcl/installer.JavaInfo">JavaInfo</a><a href="installer/@xmcl/installer.JavaRuntimeManifest">JavaRuntimeManifest</a><a href="installer/@xmcl/installer.JavaRuntimes">JavaRuntimes</a><a href="installer/@xmcl/installer.JavaRuntimeTarget">JavaRuntimeTarget</a><a href="installer/@xmcl/installer.JavaRuntimeTargets">JavaRuntimeTargets</a><a href="installer/@xmcl/installer.LabyModManifest">LabyModManifest</a><a href="installer/@xmcl/installer.LibraryOptions">LibraryOptions</a><a href="installer/@xmcl/installer.LinkEntry">LinkEntry</a><a href="installer/@xmcl/installer.LiteloaderVersion">LiteloaderVersion</a><a href="installer/@xmcl/installer.LiteloaderVersionList">LiteloaderVersionList</a><a href="installer/@xmcl/installer.MinecraftVersion">MinecraftVersion</a><a href="installer/@xmcl/installer.MinecraftVersionBaseInfo">MinecraftVersionBaseInfo</a><a href="installer/@xmcl/installer.MinecraftVersionList">MinecraftVersionList</a><a href="installer/@xmcl/installer.PostProcessOptions">PostProcessOptions</a><a href="installer/@xmcl/installer.PostProcessor">PostProcessor</a><a href="installer/@xmcl/installer.ProcessorIssue">ProcessorIssue</a><a href="installer/@xmcl/installer.QuiltLoaderArtifact">QuiltLoaderArtifact</a></div>

## 🗃️ Namespaces

<div class="definition-grid namespace"><a href="installer/@xmcl/installer.LiteloaderVersionList">LiteloaderVersionList</a></div>

## 🏳️ Enums

<div class="definition-grid enum"><a href="installer/@xmcl/installer.JavaRuntimeTargetType">JavaRuntimeTargetType</a></div>

## 🏭 Functions

### diagnoseInstall

```ts
diagnoseInstall(installProfile: InstallProfile, minecraftLocation: MinecraftLocation, side: "server" | "client"= 'client'): Promise<InstallProfileIssueReport>
```
Diagnose a install profile status. Check if it processor output correctly processed.

This can be used for check if forge correctly installed when minecraft &gt;= 1.13
#### Parameters

- **installProfile**: `InstallProfile`
The install profile.
- **minecraftLocation**: `MinecraftLocation`
The minecraft location
- **side**: `"server" | "client"`
#### Return Type

- `Promise<InstallProfileIssueReport>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/diagnose.ts#L33" target="_blank" rel="noreferrer">packages/installer/diagnose.ts:33</a>
</p>


### fetchJavaRuntimeManifest

```ts
fetchJavaRuntimeManifest(options: FetchJavaRuntimeManifestOptions= {}): Promise<JavaRuntimeManifest>
```
Fetch java runtime manifest. It should be able to resolve to your platform, or you can assign the platform.

Also, you should assign the target to download, or it will use the latest java 16.
#### Parameters

- **options**: `FetchJavaRuntimeManifestOptions`
The options of fetch runtime manifest
#### Return Type

- `Promise<JavaRuntimeManifest>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java-runtime.ts#L199" target="_blank" rel="noreferrer">packages/installer/java-runtime.ts:199</a>
</p>


### generateOptifineVersion

```ts
generateOptifineVersion(editionRelease: string, minecraftVersion: string, launchWrapperVersion: string, options: InstallOptifineOptions= {}): Version
```
Generate the optifine version json from provided info.
#### Parameters

- **editionRelease**: `string`
The edition + release with _
- **minecraftVersion**: `string`
The minecraft version
- **launchWrapperVersion**: `string`
The launch wrapper version
- **options**: `InstallOptifineOptions`
The install options
 Might be changed and don't break the major version
#### Return Type

- `Version`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/optifine.ts#L25" target="_blank" rel="noreferrer">packages/installer/optifine.ts:25</a>
</p>


### getDefaultEntryResolver

```ts
getDefaultEntryResolver(): EntryResolver
```
#### Return Type

- `EntryResolver`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L14" target="_blank" rel="noreferrer">packages/installer/unzip.ts:14</a>
</p>


### getFabricGames

```ts
getFabricGames(options: FetchOptions): Promise<string[]>
```
Get supported fabric game versions
#### Parameters

- **options**: `FetchOptions`
#### Return Type

- `Promise<string[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/fabric.ts#L40" target="_blank" rel="noreferrer">packages/installer/fabric.ts:40</a>
</p>


### getFabricLoaderArtifact

```ts
getFabricLoaderArtifact(minecraft: string, loader: string, options: FetchOptions): Promise<FabricLoaderArtifact>
```
Get fabric-loader artifact list by Minecraft version
#### Parameters

- **minecraft**: `string`
The minecraft version
- **loader**: `string`
The yarn-loader version
- **options**: `FetchOptions`
#### Return Type

- `Promise<FabricLoaderArtifact>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/fabric.ts#L69" target="_blank" rel="noreferrer">packages/installer/fabric.ts:69</a>
</p>


### getFabricLoaders

```ts
getFabricLoaders(options: FetchOptions): Promise<FabricArtifactVersion[]>
```
Get fabric-loader artifact list
#### Parameters

- **options**: `FetchOptions`
#### Return Type

- `Promise<FabricArtifactVersion[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/fabric.ts#L49" target="_blank" rel="noreferrer">packages/installer/fabric.ts:49</a>
</p>


### getForgeVersionList

```ts
getForgeVersionList(options: { dispatcher?: Dispatcher; minecraft?: string }= {}): Promise<ForgeVersionList>
```
Query the webpage content from files.minecraftforge.net.

You can put the last query result to the fallback option. It will check if your old result is up-to-date.
It will request a new page only when the fallback option is outdated.
#### Parameters

- **options**: `{ dispatcher?: Dispatcher; minecraft?: string }`
#### Return Type

- `Promise<ForgeVersionList>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L559" target="_blank" rel="noreferrer">packages/installer/forge.ts:559</a>
</p>


### getLabyModManifest

```ts
getLabyModManifest(env: string= 'production', options: { dispatcher?: Dispatcher }): Promise<LabyModManifest>
```
#### Parameters

- **env**: `string`
- **options**: `{ dispatcher?: Dispatcher }`
#### Return Type

- `Promise<LabyModManifest>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/labymod.ts#L42" target="_blank" rel="noreferrer">packages/installer/labymod.ts:42</a>
</p>


### getLiteloaderVersionList

```ts
getLiteloaderVersionList(options: { dispatcher?: Dispatcher }= {}): Promise<LiteloaderVersionList>
```
Get or update the LiteLoader version list.

This will request liteloader offical json by default. You can replace the request by assigning the remote option.
#### Parameters

- **options**: `{ dispatcher?: Dispatcher }`
#### Return Type

- `Promise<LiteloaderVersionList>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/liteloader.ts#L112" target="_blank" rel="noreferrer">packages/installer/liteloader.ts:112</a>
</p>


### getLoaderArtifactListFor

```ts
getLoaderArtifactListFor(minecraft: string, options: FetchOptions): Promise<FabricLoaderArtifact[]>
```
Get fabric-loader artifact list by Minecraft version
#### Parameters

- **minecraft**: `string`
The minecraft version
- **options**: `FetchOptions`
#### Return Type

- `Promise<FabricLoaderArtifact[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/fabric.ts#L59" target="_blank" rel="noreferrer">packages/installer/fabric.ts:59</a>
</p>


### getPotentialJavaLocations

```ts
getPotentialJavaLocations(): Promise<string[]>
```
Get all potential java locations for Minecraft.

On mac/linux, it will perform ``which java``. On win32, it will perform ``where java``
#### Return Type

- `Promise<string[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java.ts#L208" target="_blank" rel="noreferrer">packages/installer/java.ts:208</a>
</p>


### getQuiltGames

```ts
getQuiltGames(options: FetchOptions): Promise<string[]>
```
Get supported fabric game versions
#### Parameters

- **options**: `FetchOptions`
#### Return Type

- `Promise<string[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/quilt.ts#L19" target="_blank" rel="noreferrer">packages/installer/quilt.ts:19</a>
</p>


### getQuiltLoaders

```ts
getQuiltLoaders(options: FetchOptions): Promise<FabricArtifactVersion[]>
```
Get quilt-loader artifact list
#### Parameters

- **options**: `FetchOptions`
#### Return Type

- `Promise<FabricArtifactVersion[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/quilt.ts#L28" target="_blank" rel="noreferrer">packages/installer/quilt.ts:28</a>
</p>


### getQuiltLoaderVersionsByMinecraft

```ts
getQuiltLoaderVersionsByMinecraft(options: GetQuiltOptions): Promise<QuiltLoaderArtifact[]>
```
Get quilt loader versions list for a specific minecraft version
#### Parameters

- **options**: `GetQuiltOptions`
#### Return Type

- `Promise<QuiltLoaderArtifact[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/quilt.ts#L37" target="_blank" rel="noreferrer">packages/installer/quilt.ts:37</a>
</p>


### getVersionJsonFromLoaderArtifact

```ts
getVersionJsonFromLoaderArtifact(loader: FabricLoaderArtifact, side: "server" | "client", options: FabricInstallOptions= {}): { arguments: { game: never[]; jvm: never[] }; id: string; inheritsFrom: string; libraries: { name: string; url: string }[]; mainClass: string; releaseTime: string; time: string }
```
Generate fabric version json from loader artifact.
#### Parameters

- **loader**: `FabricLoaderArtifact`
The fabric loader artifact
- **side**: `"server" | "client"`
The side of the fabric
- **options**: `FabricInstallOptions`

#### Return Type

- `{ arguments: { game: never[]; jvm: never[] }; id: string; inheritsFrom: string; libraries: { name: string; url: string }[]; mainClass: string; releaseTime: string; time: string }`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/fabric.ts#L86" target="_blank" rel="noreferrer">packages/installer/fabric.ts:86</a>
</p>


### getVersionList

```ts
getVersionList(options: { fetch?: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> }= {}): Promise<MinecraftVersionList>
```
Get and update the version list.
This try to send http GET request to offical Minecraft metadata endpoint by default.
You can swap the endpoint by passing url on ``remote`` in option.
#### Parameters

- **options**: `{ fetch?: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response> }`
#### Return Type

- `Promise<MinecraftVersionList>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L88" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:88</a>
</p>


### install

```ts
install(versionMeta: MinecraftVersionBaseInfo, minecraft: MinecraftLocation, option: Options= {}): Promise<ResolvedVersion>
```
Install the Minecraft game to a location by version metadata.

This will install version json, version jar, and all dependencies (assets, libraries)
#### Parameters

- **versionMeta**: `MinecraftVersionBaseInfo`
The version metadata
- **minecraft**: `MinecraftLocation`
The Minecraft location
- **option**: `Options`

#### Return Type

- `Promise<ResolvedVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L206" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:206</a>
</p>


### installAssets

```ts
installAssets(version: ResolvedVersion, options: AssetsOptions= {}): Promise<ResolvedVersion>
```
Install or check the assets to resolved version
#### Parameters

- **version**: `ResolvedVersion`
The target version
- **options**: `AssetsOptions`
The option to replace assets host url
#### Return Type

- `Promise<ResolvedVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L236" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:236</a>
</p>


### installAssetsTask

```ts
installAssetsTask(version: ResolvedVersion, options: AssetsOptions= {}): Task<ResolvedVersion>
```
Install or check the assets to resolved version
#### Parameters

- **version**: `ResolvedVersion`
The target version
- **options**: `AssetsOptions`
The option to replace assets host url
#### Return Type

- `Task<ResolvedVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L338" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:338</a>
</p>


### installByInstallerTask

```ts
installByInstallerTask(version: RequiredVersion, minecraft: MinecraftLocation, options: InstallForgeOptions): TaskRoutine<string>
```
#### Parameters

- **version**: `RequiredVersion`
- **minecraft**: `MinecraftLocation`
- **options**: `InstallForgeOptions`
#### Return Type

- `TaskRoutine<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L482" target="_blank" rel="noreferrer">packages/installer/forge.ts:482</a>
</p>


### installByProfile

```ts
installByProfile(installProfile: InstallProfile, minecraft: MinecraftLocation, options: InstallProfileOption= {}): Promise<void>
```
Install by install profile. The install profile usually contains some preprocess should run before installing dependencies.
#### Parameters

- **installProfile**: `InstallProfile`
The install profile
- **minecraft**: `MinecraftLocation`
The minecraft location
- **options**: `InstallProfileOption`
The options to install
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L182" target="_blank" rel="noreferrer">packages/installer/profile.ts:182</a>
</p>


### installByProfileTask

```ts
installByProfileTask(installProfile: InstallProfile, minecraft: MinecraftLocation, options: InstallProfileOption= {}): TaskRoutine<void>
```
Install by install profile. The install profile usually contains some preprocess should run before installing dependencies.
#### Parameters

- **installProfile**: `InstallProfile`
The install profile
- **minecraft**: `MinecraftLocation`
The minecraft location
- **options**: `InstallProfileOption`
The options to install
#### Return Type

- `TaskRoutine<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L193" target="_blank" rel="noreferrer">packages/installer/profile.ts:193</a>
</p>


### installDependencies

```ts
installDependencies(version: ResolvedVersion, options: Options): Promise<ResolvedVersion>
```
Install the completeness of the Minecraft game assets and libraries on a existed version.
#### Parameters

- **version**: `ResolvedVersion`
The resolved version produced by Version.parse
- **options**: `Options`
#### Return Type

- `Promise<ResolvedVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L226" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:226</a>
</p>


### installDependenciesTask

```ts
installDependenciesTask(version: ResolvedVersion, options: Options= {}): Task<ResolvedVersion>
```
Install the completeness of the Minecraft game assets and libraries on a existed version.
#### Parameters

- **version**: `ResolvedVersion`
The resolved version produced by Version.parse
- **options**: `Options`
#### Return Type

- `Task<ResolvedVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L322" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:322</a>
</p>


### installFabric

```ts
installFabric(options: InstallFabricVersionOptions): Promise<string>
```
#### Parameters

- **options**: `InstallFabricVersionOptions`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/fabric.ts#L141" target="_blank" rel="noreferrer">packages/installer/fabric.ts:141</a>
</p>


### installFabricByLoaderArtifact

```ts
installFabricByLoaderArtifact(loader: FabricLoaderArtifact, minecraft: MinecraftLocation, options: FabricInstallOptions= {}): Promise<string>
```
Install fabric version json.

If side is ``server``, it requires the Minecraft version json to be installed.
#### Parameters

- **loader**: `FabricLoaderArtifact`
- **minecraft**: `MinecraftLocation`
- **options**: `FabricInstallOptions`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/fabric.ts#L119" target="_blank" rel="noreferrer">packages/installer/fabric.ts:119</a>
</p>


### installForge

```ts
installForge(version: RequiredVersion, minecraft: MinecraftLocation, options: InstallForgeOptions): Promise<string>
```
Install forge to target location.
Installation task for forge with mcversion &gt;= 1.13 requires java installed on your pc.
#### Parameters

- **version**: `RequiredVersion`
The forge version meta
- **minecraft**: `MinecraftLocation`
- **options**: `InstallForgeOptions`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L536" target="_blank" rel="noreferrer">packages/installer/forge.ts:536</a>
</p>


### installForgeTask

```ts
installForgeTask(version: RequiredVersion, minecraft: MinecraftLocation, options: InstallForgeOptions= {}): Task<string>
```
Install forge to target location.
Installation task for forge with mcversion &gt;= 1.13 requires java installed on your pc.
#### Parameters

- **version**: `RequiredVersion`
The forge version meta
- **minecraft**: `MinecraftLocation`
- **options**: `InstallForgeOptions`
#### Return Type

- `Task<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L547" target="_blank" rel="noreferrer">packages/installer/forge.ts:547</a>
</p>


### installJavaRuntimeTask

```ts
installJavaRuntimeTask(options: InstallJavaRuntimeOptions): Task<void>
```
Install java runtime from java runtime manifest
#### Parameters

- **options**: `InstallJavaRuntimeOptions`
The options to install java runtime
#### Return Type

- `Task<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java-runtime.ts#L282" target="_blank" rel="noreferrer">packages/installer/java-runtime.ts:282</a>
</p>


### installJreFromMojang

```ts
installJreFromMojang(options: InstallJavaOptions): Promise<void>
```
Install JRE from Mojang offical resource. It should install jdk 8.
#### Parameters

- **options**: `InstallJavaOptions`
The install options
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java.ts#L126" target="_blank" rel="noreferrer">packages/installer/java.ts:126</a>
</p>


### installJreFromMojangTask

```ts
installJreFromMojangTask(options: InstallJavaOptions): TaskRoutine<void>
```
Install JRE from Mojang offical resource. It should install jdk 8.
#### Parameters

- **options**: `InstallJavaOptions`
The install options
#### Return Type

- `TaskRoutine<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java.ts#L83" target="_blank" rel="noreferrer">packages/installer/java.ts:83</a>
</p>


### installLaby4Mod

```ts
installLaby4Mod(manifest: LabyModManifest, tag: string, minecraft: MinecraftLocation, options: InstallLabyModOptions): Promise<string>
```
#### Parameters

- **manifest**: `LabyModManifest`
- **tag**: `string`
- **minecraft**: `MinecraftLocation`
- **options**: `InstallLabyModOptions`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/labymod.ts#L164" target="_blank" rel="noreferrer">packages/installer/labymod.ts:164</a>
</p>


### installLabyMod4Task

```ts
installLabyMod4Task(manifest: LabyModManifest, tag: string, minecraft: MinecraftLocation, options: InstallLabyModOptions): Task<string>
```
#### Parameters

- **manifest**: `LabyModManifest`
- **tag**: `string`
- **minecraft**: `MinecraftLocation`
- **options**: `InstallLabyModOptions`
#### Return Type

- `Task<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/labymod.ts#L141" target="_blank" rel="noreferrer">packages/installer/labymod.ts:141</a>
</p>


### installLibraries

```ts
installLibraries(version: ResolvedVersion, options: LibraryOptions= {}): Promise<void>
```
Install all the libraries of providing version
#### Parameters

- **version**: `ResolvedVersion`
The target version
- **options**: `LibraryOptions`
The library host swap option
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L245" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:245</a>
</p>


### installLibrariesTask

```ts
installLibrariesTask(version: InstallLibraryVersion, options: LibraryOptions= {}): Task<void>
```
Install all the libraries of providing version
#### Parameters

- **version**: `InstallLibraryVersion`
The target version
- **options**: `LibraryOptions`
The library host swap option
#### Return Type

- `Task<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L407" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:407</a>
</p>


### installLiteloader

```ts
installLiteloader(versionMeta: LiteloaderVersion, location: MinecraftLocation, options: InstallOptions): Promise<string>
```
Install the liteloader to specific minecraft location.

This will install the liteloader amount on the corresponded Minecraft version by default.
If you want to install over the forge. You should first install forge and pass the installed forge version id to the third param,
like ``1.12-forge-xxxx``
#### Parameters

- **versionMeta**: `LiteloaderVersion`
The liteloader version metadata.
- **location**: `MinecraftLocation`
The minecraft location you want to install
- **options**: `InstallOptions`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/liteloader.ts#L135" target="_blank" rel="noreferrer">packages/installer/liteloader.ts:135</a>
</p>


### installLiteloaderTask

```ts
installLiteloaderTask(versionMeta: LiteloaderVersion, location: MinecraftLocation, options: InstallOptions= {}): Task<string>
```
Install the liteloader to specific minecraft location.

This will install the liteloader amount on the corresponded Minecraft version by default.
If you want to install over the forge. You should first install forge and pass the installed forge version id to the third param,
like ``1.12-forge-xxxx``
#### Parameters

- **versionMeta**: `LiteloaderVersion`
The liteloader version metadata.
- **location**: `MinecraftLocation`
The minecraft location you want to install
- **options**: `InstallOptions`
#### Return Type

- `Task<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/liteloader.ts#L183" target="_blank" rel="noreferrer">packages/installer/liteloader.ts:183</a>
</p>


### installNeoForged

```ts
installNeoForged(project: "forge" | "neoforge", version: string, minecraft: MinecraftLocation, options: InstallForgeOptions): Promise<string>
```
#### Parameters

- **project**: `"forge" | "neoforge"`
- **version**: `string`
- **minecraft**: `MinecraftLocation`
- **options**: `InstallForgeOptions`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/neoForged.ts#L48" target="_blank" rel="noreferrer">packages/installer/neoForged.ts:48</a>
</p>


### installNeoForgedTask

```ts
installNeoForgedTask(project: "forge" | "neoforge", version: string, minecraft: MinecraftLocation, options: InstallForgeOptions): Task<string>
```
#### Parameters

- **project**: `"forge" | "neoforge"`
- **version**: `string`
- **minecraft**: `MinecraftLocation`
- **options**: `InstallForgeOptions`
#### Return Type

- `Task<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/neoForged.ts#L52" target="_blank" rel="noreferrer">packages/installer/neoForged.ts:52</a>
</p>


### installOptifine

```ts
installOptifine(installer: string, minecraft: MinecraftLocation, options: InstallOptifineOptions): Promise<string>
```
Install optifine by optifine installer
#### Parameters

- **installer**: `string`
The installer jar file path
- **minecraft**: `MinecraftLocation`
The minecraft location
- **options**: `InstallOptifineOptions`
The option to install
 Might be changed and don't break the major version
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/optifine.ts#L60" target="_blank" rel="noreferrer">packages/installer/optifine.ts:60</a>
</p>


### installOptifineTask

```ts
installOptifineTask(installer: string, minecraft: MinecraftLocation, options: InstallOptifineOptions= {}): TaskRoutine<string>
```
Install optifine by optifine installer task
#### Parameters

- **installer**: `string`
The installer jar file path
- **minecraft**: `MinecraftLocation`
The minecraft location
- **options**: `InstallOptifineOptions`
The option to install
 Might be changed and don't break the major version
#### Return Type

- `TaskRoutine<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/optifine.ts#L87" target="_blank" rel="noreferrer">packages/installer/optifine.ts:87</a>
</p>


### installQuiltVersion

```ts
installQuiltVersion(options: InstallQuiltVersionOptions): Promise<string>
```
Install quilt version via profile API
#### Parameters

- **options**: `InstallQuiltVersionOptions`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/quilt.ts#L53" target="_blank" rel="noreferrer">packages/installer/quilt.ts:53</a>
</p>


### installResolvedAssetsTask

```ts
installResolvedAssetsTask(assets: AssetInfo[], folder: MinecraftFolder, options: AssetsOptions= {}): TaskRoutine<void>
```
Only install several resolved assets.
#### Parameters

- **assets**: `AssetInfo[]`
The assets to install
- **folder**: `MinecraftFolder`
The minecraft folder
- **options**: `AssetsOptions`
The asset option
#### Return Type

- `TaskRoutine<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L428" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:428</a>
</p>


### installResolvedLibraries

```ts
installResolvedLibraries(libraries: ResolvedLibrary[], minecraft: MinecraftLocation, option: LibraryOptions): Promise<void>
```
Only install several resolved libraries
#### Parameters

- **libraries**: `ResolvedLibrary[]`
The resolved libraries
- **minecraft**: `MinecraftLocation`
The minecraft location
- **option**: `LibraryOptions`
The install option
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L255" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:255</a>
</p>


### installResolvedLibrariesTask

```ts
installResolvedLibrariesTask(libraries: ResolvedLibrary[], minecraft: MinecraftLocation, option: LibraryOptions): Task<void>
```
Only install several resolved libraries
#### Parameters

- **libraries**: `ResolvedLibrary[]`
The resolved libraries
- **minecraft**: `MinecraftLocation`
The minecraft location
- **option**: `LibraryOptions`
The install option
#### Return Type

- `Task<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L418" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:418</a>
</p>


### installTask

```ts
installTask(versionMeta: MinecraftVersionBaseInfo, minecraft: MinecraftLocation, options: Options= {}): Task<ResolvedVersion>
```
Install the Minecraft game to a location by version metadata.

This will install version json, version jar, and all dependencies (assets, libraries)
#### Parameters

- **versionMeta**: `MinecraftVersionBaseInfo`
The version metadata
- **minecraft**: `MinecraftLocation`
The Minecraft location
- **options**: `Options`

#### Return Type

- `Task<ResolvedVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L269" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:269</a>
</p>


### installVersion

```ts
installVersion(versionMeta: MinecraftVersionBaseInfo, minecraft: MinecraftLocation, options: JarOption= {}): Promise<ResolvedVersion>
```
Only install the json/jar. Do not install dependencies.
#### Parameters

- **versionMeta**: `MinecraftVersionBaseInfo`
the version metadata; get from updateVersionMeta
- **minecraft**: `MinecraftLocation`
minecraft location
- **options**: `JarOption`
#### Return Type

- `Promise<ResolvedVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L216" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:216</a>
</p>


### installVersionTask

```ts
installVersionTask(versionMeta: MinecraftVersionBaseInfo, minecraft: MinecraftLocation, options: JarOption= {}): Task<ResolvedVersion>
```
Only install the json/jar. Do not install dependencies.
#### Parameters

- **versionMeta**: `MinecraftVersionBaseInfo`
the version metadata; get from updateVersionMeta
- **minecraft**: `MinecraftLocation`
minecraft location
- **options**: `JarOption`
#### Return Type

- `Task<ResolvedVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L285" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:285</a>
</p>


### isForgeInstallerEntries

```ts
isForgeInstallerEntries(entries: ForgeInstallerEntries): entries is ForgeInstallerEntriesPattern
```
#### Parameters

- **entries**: `ForgeInstallerEntries`
#### Return Type

- `entries is ForgeInstallerEntriesPattern`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L429" target="_blank" rel="noreferrer">packages/installer/forge.ts:429</a>
</p>


### isLegacyForgeInstallerEntries

```ts
isLegacyForgeInstallerEntries(entries: ForgeInstallerEntries): entries is Required<Pick<ForgeInstallerEntries, "installProfileJson" | "legacyUniversalJar">>
```
#### Parameters

- **entries**: `ForgeInstallerEntries`
#### Return Type

- `entries is Required<Pick<ForgeInstallerEntries, "installProfileJson" | "legacyUniversalJar">>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L425" target="_blank" rel="noreferrer">packages/installer/forge.ts:425</a>
</p>


### parseJavaVersion

```ts
parseJavaVersion(versionText: string): { majorVersion: number; patch: number; version: string } | undefined
```
Parse version string and major version number from stderr of java process.
#### Parameters

- **versionText**: `string`
The stderr for ``java -version``
#### Return Type

- `{ majorVersion: number; patch: number; version: string } | undefined`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java.ts#L164" target="_blank" rel="noreferrer">packages/installer/java.ts:164</a>
</p>


### postProcess

```ts
postProcess(processors: PostProcessor[], minecraft: MinecraftFolder, options: PostProcessOptions): Promise<void>
```
Post process the post processors from ``InstallProfile``.
#### Parameters

- **processors**: `PostProcessor[]`
The processor info
- **minecraft**: `MinecraftFolder`
The minecraft location
- **options**: `PostProcessOptions`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L170" target="_blank" rel="noreferrer">packages/installer/profile.ts:170</a>
</p>


### resolveJava

```ts
resolveJava(path: string): Promise<JavaInfo | undefined>
```
Try to resolve a java info at this path. This will call ``java -version``
#### Parameters

- **path**: `string`
The java exectuable path.
#### Return Type

- `Promise<JavaInfo | undefined>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java.ts#L134" target="_blank" rel="noreferrer">packages/installer/java.ts:134</a>
</p>


### resolveLibraryDownloadUrls

```ts
resolveLibraryDownloadUrls(library: ResolvedLibrary, libraryOptions: LibraryOptions): string[]
```
Resolve a library download urls with fallback.
#### Parameters

- **library**: `ResolvedLibrary`
The resolved library
- **libraryOptions**: `LibraryOptions`
The library install options
#### Return Type

- `string[]`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L567" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:567</a>
</p>


### resolveProcessors

```ts
resolveProcessors(side: "server" | "client", installProfile: InstallProfile, minecraft: MinecraftFolder): { args: string[]; classpath: string[]; jar: string; outputs: (key: string) => string; sides?: ("server" | "client")[] }[]
```
Resolve processors in install profile
#### Parameters

- **side**: `"server" | "client"`
- **installProfile**: `InstallProfile`
- **minecraft**: `MinecraftFolder`
#### Return Type

- `{ args: string[]; classpath: string[]; jar: string; outputs: (key: string) => string; sides?: ("server" | "client")[] }[]`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L85" target="_blank" rel="noreferrer">packages/installer/profile.ts:85</a>
</p>


### scanLocalJava

```ts
scanLocalJava(locations: string[]): Promise<JavaInfo[]>
```
Scan local java version on the disk.

It will check if the passed ``locations`` are the home of java.
Notice that the locations should not be the executable, but the path of java installation, like JAVA_HOME.

This will call ``getPotentialJavaLocations`` and then ``resolveJava``
#### Parameters

- **locations**: `string[]`
The location (like java_home) want to check.
#### Return Type

- `Promise<JavaInfo[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java.ts#L281" target="_blank" rel="noreferrer">packages/installer/java.ts:281</a>
</p>


### unpackForgeInstaller

```ts
unpackForgeInstaller(zip: ZipFile, entries: ForgeInstallerEntriesPattern, profile: InstallProfile, mc: MinecraftFolder, jarPath: string, options: InstallForgeOptions): Promise<string>
```
Unpack forge installer jar file content to the version library artifact directory.
#### Parameters

- **zip**: `ZipFile`
The forge jar file
- **entries**: `ForgeInstallerEntriesPattern`
The entries
- **profile**: `InstallProfile`
The forge install profile
- **mc**: `MinecraftFolder`
The minecraft location
- **jarPath**: `string`
- **options**: `InstallForgeOptions`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L342" target="_blank" rel="noreferrer">packages/installer/forge.ts:342</a>
</p>


### walkForgeInstallerEntries

```ts
walkForgeInstallerEntries(zip: ZipFile, forgeVersion: string): Promise<ForgeInstallerEntries>
```
Walk the forge installer file to find key entries
#### Parameters

- **zip**: `ZipFile`
THe forge instal
- **forgeVersion**: `string`
Forge version to install
#### Return Type

- `Promise<ForgeInstallerEntries>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L438" target="_blank" rel="noreferrer">packages/installer/forge.ts:438</a>
</p>



## 🏷️ Variables

### DEFAULT_FORGE_MAVEN <Badge type="tip" text="const" />

```ts
DEFAULT_FORGE_MAVEN: "http://files.minecraftforge.net/maven" = 'http://files.minecraftforge.net/maven'
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L138" target="_blank" rel="noreferrer">packages/installer/forge.ts:138</a>
</p>


### DEFAULT_META_URL_FABRIC <Badge type="tip" text="const" />

```ts
DEFAULT_META_URL_FABRIC: "https://meta.fabricmc.net" = 'https://meta.fabricmc.net'
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/fabric.ts#L139" target="_blank" rel="noreferrer">packages/installer/fabric.ts:139</a>
</p>


### DEFAULT_META_URL_QUILT <Badge type="tip" text="const" />

```ts
DEFAULT_META_URL_QUILT: "https://meta.quiltmc.org" = 'https://meta.quiltmc.org'
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/quilt.ts#L6" target="_blank" rel="noreferrer">packages/installer/quilt.ts:6</a>
</p>


### DEFAULT_RESOURCE_ROOT_URL <Badge type="tip" text="const" />

```ts
DEFAULT_RESOURCE_ROOT_URL: "https://resources.download.minecraft.net" = 'https://resources.download.minecraft.net'
```
Default resource/assets url root
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L79" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:79</a>
</p>


### DEFAULT_RUNTIME_ALL_URL <Badge type="tip" text="const" />

```ts
DEFAULT_RUNTIME_ALL_URL: "https://launchermeta.mojang.com/v1/products/java-runtime/2ec0cc96c44e5a76b9c8b7c39df7210883d12871/all.json" = 'https://launchermeta.mojang.com/v1/products/java-runtime/2ec0cc96c44e5a76b9c8b7c39df7210883d12871/all.json'
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java-runtime.ts#L136" target="_blank" rel="noreferrer">packages/installer/java-runtime.ts:136</a>
</p>


### DEFAULT_VERSION_MANIFEST <Badge type="tip" text="const" />

```ts
DEFAULT_VERSION_MANIFEST: "http://dl.liteloader.com/versions/versions.json" = 'http://dl.liteloader.com/versions/versions.json'
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/liteloader.ts#L8" target="_blank" rel="noreferrer">packages/installer/liteloader.ts:8</a>
</p>


### DEFAULT_VERSION_MANIFEST_URL <Badge type="tip" text="const" />

```ts
DEFAULT_VERSION_MANIFEST_URL: "https://launchermeta.mojang.com/mc/game/version_manifest.json" = 'https://launchermeta.mojang.com/mc/game/version_manifest.json'
```
Default minecraft version manifest url.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L75" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:75</a>
</p>



## ⏩ Type Aliases

### AnyEntry

```ts
AnyEntry: FileEntry | DirectoryEntry | LinkEntry
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java-runtime.ts#L121" target="_blank" rel="noreferrer">packages/installer/java-runtime.ts:121</a>
</p>


### ForgeInstallerEntriesPattern

```ts
ForgeInstallerEntriesPattern: ForgeInstallerEntries & Required<Pick<ForgeInstallerEntries, "versionJson" | "installProfileJson">>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L112" target="_blank" rel="noreferrer">packages/installer/forge.ts:112</a>
</p>


### ForgeLegacyInstallerEntriesPattern

```ts
ForgeLegacyInstallerEntriesPattern: Required<Pick<ForgeInstallerEntries, "installProfileJson" | "legacyUniversalJar">>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/forge.ts#L113" target="_blank" rel="noreferrer">packages/installer/forge.ts:113</a>
</p>


### InstallIssues

```ts
InstallIssues: ProcessorIssue | LibraryIssue
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/diagnose.ts#L4" target="_blank" rel="noreferrer">packages/installer/diagnose.ts:4</a>
</p>


### InstallLibraryVersion

```ts
InstallLibraryVersion: Pick<ResolvedVersion, "libraries" | "minecraftDirectory">
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L154" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:154</a>
</p>


### LibraryHost

```ts
LibraryHost: (library: ResolvedLibrary) => string | string[] | undefined
```
The function to swap library host.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L16" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:16</a>
</p>


### Options

```ts
Options: DownloadBaseOptions & ParallelTaskOptions & AssetsOptions & JarOption & LibraryOptions & InstallSideOption
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L195" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:195</a>
</p>


### UnpackLZMAFunction

```ts
UnpackLZMAFunction: (src: string, dest: string) => Promise<void> | (src: string, dest: string) => Task<void>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java.ts#L52" target="_blank" rel="noreferrer">packages/installer/java.ts:52</a>
</p>



