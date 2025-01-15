# Interface DownloadOptions

## 🏷️ Properties

### abortSignal <Badge type="info" text="optional" />

```ts
abortSignal: AbortSignal
```
The user abort signal to abort the download
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L85" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:85</a>
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


### destination

```ts
destination: string
```
Where the file will be downloaded to
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L73" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:73</a>
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
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L69" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:69</a>
</p>


### pendingFile <Badge type="info" text="optional" />

```ts
pendingFile: string
```
Will first download to pending file and then rename to actual file
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L89" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:89</a>
</p>


### progressController <Badge type="info" text="optional" />

```ts
progressController: ProgressController
```
The progress controller. If you want to track download progress, you should use this.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L77" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:77</a>
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


### url

```ts
url: string | string[]
```
The url or urls (fallback) of the resource
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L65" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:65</a>
</p>


### validator <Badge type="info" text="optional" />

```ts
validator: Validator | ChecksumValidatorOptions
```
The validator, or the options to create a validator based on checksum.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L81" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:81</a>
</p>


