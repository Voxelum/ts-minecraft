# Interface AssetsOptions

Change the host url of assets download
## 🏷️ Properties

### assetsDownloadConcurrency <Badge type="info" text="optional" />

```ts
assetsDownloadConcurrency: number
```
Control how many assets download task should run at the same time.
It will override the ``maxConcurrencyOption`` if this is presented.

This will be ignored if you have your own downloader assigned.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L135" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:135</a>
</p>


### assetsHost <Badge type="info" text="optional" />

```ts
assetsHost: string | string[]
```
The alternative assets host to download asset. It will try to use these host from the ``[0]`` to the ``[assetsHost.length - 1]``
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L128" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:128</a>
</p>


### assetsIndexUrl <Badge type="info" text="optional" />

```ts
assetsIndexUrl: string | string[] | (version: ResolvedVersion) => string | string[]
```
The assets index download or url replacement
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L143" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:143</a>
</p>


### checkpointHandler <Badge type="info" text="optional" />

```ts
checkpointHandler: CheckpointHandler
```
The checkpoint handler to save & restore the download progress
*Inherited from: `DownloadBaseOptions.checkpointHandler`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L52" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:52</a>
</p>


### checksumValidatorResolver <Badge type="info" text="optional" />

```ts
checksumValidatorResolver: (checksum: ChecksumValidatorOptions) => Validator
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L147" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:147</a>
</p>


### dispatcher <Badge type="info" text="optional" />

```ts
dispatcher: Dispatcher
```
The undici dispatcher
*Inherited from: `DownloadBaseOptions.dispatcher`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L48" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:48</a>
</p>


### fetch <Badge type="info" text="optional" />

```ts
fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L145" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:145</a>
</p>


### headers <Badge type="info" text="optional" />

```ts
headers: Record<string, any>
```
The header of the request
*Inherited from: `DownloadBaseOptions.headers`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L40" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:40</a>
</p>


### prevalidSizeOnly <Badge type="info" text="optional" />

```ts
prevalidSizeOnly: boolean
```
Only precheck the size of the assets. Do not check the hash.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L151" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:151</a>
</p>


### rangePolicy <Badge type="info" text="optional" />

```ts
rangePolicy: RangePolicy
```
The range policy to compute the ranges to download
*Inherited from: `DownloadBaseOptions.rangePolicy`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L44" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:44</a>
</p>


### skipHead <Badge type="info" text="optional" />

```ts
skipHead: boolean
```
*Inherited from: `DownloadBaseOptions.skipHead`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L54" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:54</a>
</p>


### skipPrevalidate <Badge type="info" text="optional" />

```ts
skipPrevalidate: boolean
```
*Inherited from: `DownloadBaseOptions.skipPrevalidate`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L58" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:58</a>
</p>


### skipRevalidate <Badge type="info" text="optional" />

```ts
skipRevalidate: boolean
```
*Inherited from: `DownloadBaseOptions.skipRevalidate`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L56" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:56</a>
</p>


### throwErrorImmediately <Badge type="info" text="optional" />

```ts
throwErrorImmediately: boolean
```
*Inherited from: `ParallelTaskOptions.throwErrorImmediately`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/utils.ts#L97" target="_blank" rel="noreferrer">packages/installer/utils.ts:97</a>
</p>


### useHashForAssetsIndex <Badge type="info" text="optional" />

```ts
useHashForAssetsIndex: boolean
```
Use hash as the assets index file name. Default is ``false``
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L139" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:139</a>
</p>


