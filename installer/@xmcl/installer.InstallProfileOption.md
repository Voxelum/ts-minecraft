# Interface InstallProfileOption

Change the library host url
## 🏷️ Properties

### checkpointHandler <Badge type="info" text="optional" />

```ts
checkpointHandler: CheckpointHandler
```
The checkpoint handler to save & restore the download progress
*Inherited from: `LibraryOptions.checkpointHandler`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L52" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:52</a>
</p>


### checksumValidatorResolver <Badge type="info" text="optional" />

```ts
checksumValidatorResolver: (checksum: ChecksumValidatorOptions) => Validator
```
*Inherited from: `LibraryOptions.checksumValidatorResolver`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L119" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:119</a>
</p>


### dispatcher <Badge type="info" text="optional" />

```ts
dispatcher: Dispatcher
```
The undici dispatcher
*Inherited from: `LibraryOptions.dispatcher`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L48" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:48</a>
</p>


### handler <Badge type="info" text="optional" />

```ts
handler: (postProcessor: PostProcessor) => Promise<boolean>
```
Custom handlers to handle the post processor
*Inherited from: `PostProcessOptions.handler`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L72" target="_blank" rel="noreferrer">packages/installer/profile.ts:72</a>
</p>


### headers <Badge type="info" text="optional" />

```ts
headers: Record<string, any>
```
The header of the request
*Inherited from: `LibraryOptions.headers`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L40" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:40</a>
</p>


### java <Badge type="info" text="optional" />

```ts
java: string
```
New forge (&gt;=1.13) require java to install. Can be a executor or java executable path.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L79" target="_blank" rel="noreferrer">packages/installer/profile.ts:79</a>
</p>


### librariesDownloadConcurrency <Badge type="info" text="optional" />

```ts
librariesDownloadConcurrency: number
```
Control how many libraries download task should run at the same time.
It will override the ``maxConcurrencyOption`` if this is presented.

This will be ignored if you have your own downloader assigned.
*Inherited from: `LibraryOptions.librariesDownloadConcurrency`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L117" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:117</a>
</p>


### libraryHost <Badge type="info" text="optional" />

```ts
libraryHost: LibraryHost
```
A more flexiable way to control library download url.
*Inherited from: `LibraryOptions.libraryHost`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L106" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:106</a>
</p>


### mavenHost <Badge type="info" text="optional" />

```ts
mavenHost: string | string[]
```
The alterative maven host to download library. It will try to use these host from the ``[0]`` to the ``[maven.length - 1]``
*Inherited from: `LibraryOptions.mavenHost`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L110" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:110</a>
</p>


### rangePolicy <Badge type="info" text="optional" />

```ts
rangePolicy: RangePolicy
```
The range policy to compute the ranges to download
*Inherited from: `LibraryOptions.rangePolicy`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L44" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:44</a>
</p>


### side <Badge type="info" text="optional" />

```ts
side: "server" | "client"
```
The installation side
*Inherited from: `InstallSideOption.side`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L192" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:192</a>
</p>


### skipHead <Badge type="info" text="optional" />

```ts
skipHead: boolean
```
*Inherited from: `LibraryOptions.skipHead`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L54" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:54</a>
</p>


### skipPrevalidate <Badge type="info" text="optional" />

```ts
skipPrevalidate: boolean
```
*Inherited from: `LibraryOptions.skipPrevalidate`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L58" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:58</a>
</p>


### skipRevalidate <Badge type="info" text="optional" />

```ts
skipRevalidate: boolean
```
*Inherited from: `LibraryOptions.skipRevalidate`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L56" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:56</a>
</p>


### spawn <Badge type="info" text="optional" />

```ts
spawn: (command: string, args?: readonly string[], options?: SpawnOptions) => ChildProcess
```
The spawn process function. Used for spawn the java process at the end.

By default, it will be the spawn function from "child_process" module. You can use this option to change the 3rd party spawn like [cross-spawn](https://www.npmjs.com/package/cross-spawn)
*Inherited from: `PostProcessOptions.spawn`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/utils.ts#L50" target="_blank" rel="noreferrer">packages/installer/utils.ts:50</a>
</p>


### throwErrorImmediately <Badge type="info" text="optional" />

```ts
throwErrorImmediately: boolean
```
*Inherited from: `LibraryOptions.throwErrorImmediately`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/utils.ts#L97" target="_blank" rel="noreferrer">packages/installer/utils.ts:97</a>
</p>


