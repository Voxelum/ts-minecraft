# Interface InstallJavaRuntimeOptions

## 🏷️ Properties

### apiHost <Badge type="info" text="optional" />

```ts
apiHost: string | string[]
```
The alternative download host for the file
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java-runtime.ts#L259" target="_blank" rel="noreferrer">packages/installer/java-runtime.ts:259</a>
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
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java-runtime.ts#L275" target="_blank" rel="noreferrer">packages/installer/java-runtime.ts:275</a>
</p>


### destination

```ts
destination: string
```
The destination of this installation
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java-runtime.ts#L263" target="_blank" rel="noreferrer">packages/installer/java-runtime.ts:263</a>
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


### headers <Badge type="info" text="optional" />

```ts
headers: Record<string, any>
```
The header of the request
*Inherited from: `DownloadBaseOptions.headers`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L40" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:40</a>
</p>


### lzma <Badge type="info" text="optional" />

```ts
lzma: boolean | (compressedFilePath: string, targetPath: string) => Promise<void>
```
Download lzma compressed version instead of raw version.
- If ``true``, it will just download lzma file version, you need to decompress by youself!
- If ``Function``, it will use that function to decompress the file!
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java-runtime.ts#L273" target="_blank" rel="noreferrer">packages/installer/java-runtime.ts:273</a>
</p>


### manifest

```ts
manifest: JavaRuntimeManifest
```
The actual manfiest to install.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/java-runtime.ts#L267" target="_blank" rel="noreferrer">packages/installer/java-runtime.ts:267</a>
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


