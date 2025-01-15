# Download Core

[![npm version](https://img.shields.io/npm/v/@xmcl/file-transfer.svg)](https://www.npmjs.com/package/@xmcl/file-transfer)
[![Downloads](https://img.shields.io/npm/dm/@xmcl/file-transfer.svg)](https://npmjs.com/@xmcl/file-transfer)
[![Install size](https://packagephobia.now.sh/badge?p=@xmcl/file-transfer)](https://packagephobia.now.sh/result?p=@xmcl/file-transfer)
[![npm](https://img.shields.io/npm/l/@xmcl/minecraft-launcher-core.svg)](https://github.com/voxelum/minecraft-launcher-core-node/blob/master/LICENSE)
[![Build Status](https://github.com/voxelum/minecraft-launcher-core-node/workflows/Build/badge.svg)](https://github.com/Voxelum/minecraft-launcher-core-node/actions?query=workflow%3ABuild)

Provide a high performance download file function based on [undici](https://github.com/nodejs/undici).

- Support download by range request
  - Customize the range size
- Support validating the checksum
  - If the validation matched, it won't download the file.
  - Also support customize validation.
- Support download and fallback to another url
- Support AbortSignal
- Fully customizable retry logic

## Usage

Download the file by url

```ts
import { download } from '@xmcl/file-transfer'

await download({
  url: 'http://example.com/file.zip', // required
  destination: 'file.zip', // required
  headers: { // optional
    'customized': 'header'
  },
  abortSignal: new AbortController().signal, // optional
  progressController: (url, chunkSize, progress, total) => { // optional
    console.log(url)
    console.log(chunkSize)
    console.log(progress)
    console.log(total)
  },
  // use validator to validate the file
  validator: { // optional
    algorithm: 'sha1',
    hash: '1234567890abcdef1234567890abcdef12345678',
  }
})
```

Download with fallback url

```ts
import { download } from '@xmcl/file-transfer'

await download({
  // using array to fallback
  url: ['http://example.com/file.zip', 'http://example.com/fallback.zip'],
  destination: 'file.zip',
})
```

## 🧾 Classes

<div class="definition-grid class"><a href="file-transfer/@xmcl/file-transfer.ChecksumNotMatchError">ChecksumNotMatchError</a><a href="file-transfer/@xmcl/file-transfer.ChecksumValidator">ChecksumValidator</a><a href="file-transfer/@xmcl/file-transfer.DefaultRangePolicy">DefaultRangePolicy</a><a href="file-transfer/@xmcl/file-transfer.DownloadError">DownloadError</a><a href="file-transfer/@xmcl/file-transfer.DownloadFileSystemError">DownloadFileSystemError</a><a href="file-transfer/@xmcl/file-transfer.JsonValidator">JsonValidator</a><a href="file-transfer/@xmcl/file-transfer.ValidationError">ValidationError</a></div>

## 🤝 Interfaces

<div class="definition-grid interface"><a href="file-transfer/@xmcl/file-transfer.ChecksumValidatorOptions">ChecksumValidatorOptions</a><a href="file-transfer/@xmcl/file-transfer.DefaultRangePolicyOptions">DefaultRangePolicyOptions</a><a href="file-transfer/@xmcl/file-transfer.DefaultRetryPolicyOptions">DefaultRetryPolicyOptions</a><a href="file-transfer/@xmcl/file-transfer.DownloadBaseOptions">DownloadBaseOptions</a><a href="file-transfer/@xmcl/file-transfer.DownloadOptions">DownloadOptions</a><a href="file-transfer/@xmcl/file-transfer.ProgressController">ProgressController</a><a href="file-transfer/@xmcl/file-transfer.Range">Range</a><a href="file-transfer/@xmcl/file-transfer.RangePolicy">RangePolicy</a><a href="file-transfer/@xmcl/file-transfer.RetryPolicy">RetryPolicy</a><a href="file-transfer/@xmcl/file-transfer.Validator">Validator</a></div>

## 🏭 Functions

### createDefaultRetryHandler

```ts
createDefaultRetryHandler(maxRetryCount: number= 3): RetryPolicy
```
#### Parameters

- **maxRetryCount**: `number`
#### Return Type

- `RetryPolicy`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/retry.ts#L46" target="_blank" rel="noreferrer">packages/file-transfer/retry.ts:46</a>
</p>


### createProgressController

```ts
createProgressController(onProgress: ProgressController): ProgressController
```
#### Parameters

- **onProgress**: `ProgressController`
#### Return Type

- `ProgressController`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/progress.ts#L8" target="_blank" rel="noreferrer">packages/file-transfer/progress.ts:8</a>
</p>


### createRedirectInterceptor

```ts
createRedirectInterceptor(defaultMaxRedirections: number): Dispatcher.DispatchInterceptor
```
#### Parameters

- **defaultMaxRedirections**: `number`
#### Return Type

- `Dispatcher.DispatchInterceptor`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/agent.ts#L43" target="_blank" rel="noreferrer">packages/file-transfer/agent.ts:43</a>
</p>


### createRetryInterceptor

```ts
createRetryInterceptor(retry: RetryOptions): Dispatcher.DispatchInterceptor
```
#### Parameters

- **retry**: `RetryOptions`
#### Return Type

- `Dispatcher.DispatchInterceptor`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/agent.ts#L32" target="_blank" rel="noreferrer">packages/file-transfer/agent.ts:32</a>
</p>


### download

```ts
download(options: DownloadOptions): Promise<void>
```
Download url or urls to a file path. This process is abortable, it's compatible with the dom like ``AbortSignal``.
#### Parameters

- **options**: `DownloadOptions`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L239" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:239</a>
</p>


### getDefaultAgentOptions

```ts
getDefaultAgentOptions(retry: RetryOptions, defaultMaxRedirections: number= 5): { connections: number; interceptors: { Agent: DispatchInterceptor[]; Client: DispatchInterceptor[] } }
```
#### Parameters

- **retry**: `RetryOptions`
- **defaultMaxRedirections**: `number`
#### Return Type

- `{ connections: number; interceptors: { Agent: DispatchInterceptor[]; Client: DispatchInterceptor[] } }`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/agent.ts#L16" target="_blank" rel="noreferrer">packages/file-transfer/agent.ts:16</a>
</p>


### getDownloadBaseOptions

```ts
getDownloadBaseOptions(options: T): DownloadBaseOptions
```
#### Parameters

- **options**: `T`
#### Return Type

- `DownloadBaseOptions`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/download.ts#L23" target="_blank" rel="noreferrer">packages/file-transfer/download.ts:23</a>
</p>


### isRangePolicy

```ts
isRangePolicy(rangeOptions: RangePolicy | DefaultRangePolicyOptions): rangeOptions is RangePolicy
```
#### Parameters

- **rangeOptions**: `RangePolicy | DefaultRangePolicyOptions`
#### Return Type

- `rangeOptions is RangePolicy`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/rangePolicy.ts#L10" target="_blank" rel="noreferrer">packages/file-transfer/rangePolicy.ts:10</a>
</p>


### isRetryHandler

```ts
isRetryHandler(options: RetryPolicy | DefaultRetryPolicyOptions): options is RetryPolicy
```
#### Parameters

- **options**: `RetryPolicy | DefaultRetryPolicyOptions`
#### Return Type

- `options is RetryPolicy`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/retry.ts#L35" target="_blank" rel="noreferrer">packages/file-transfer/retry.ts:35</a>
</p>


### isValidator

```ts
isValidator(options: Validator | ChecksumValidatorOptions): options is Validator
```
#### Parameters

- **options**: `Validator | ChecksumValidatorOptions`
#### Return Type

- `options is Validator`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/validator.ts#L38" target="_blank" rel="noreferrer">packages/file-transfer/validator.ts:38</a>
</p>


### resolveProgressController

```ts
resolveProgressController(controller: ProgressController): ProgressController
```
#### Parameters

- **controller**: `ProgressController`
#### Return Type

- `ProgressController`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/progress.ts#L15" target="_blank" rel="noreferrer">packages/file-transfer/progress.ts:15</a>
</p>


### resolveRangePolicy

```ts
resolveRangePolicy(rangeOptions: RangePolicy | DefaultRangePolicyOptions): RangePolicy
```
#### Parameters

- **rangeOptions**: `RangePolicy | DefaultRangePolicyOptions`
#### Return Type

- `RangePolicy`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/rangePolicy.ts#L15" target="_blank" rel="noreferrer">packages/file-transfer/rangePolicy.ts:15</a>
</p>


### resolveRetryHandler

```ts
resolveRetryHandler(options: RetryPolicy | DefaultRetryPolicyOptions): RetryPolicy
```
#### Parameters

- **options**: `RetryPolicy | DefaultRetryPolicyOptions`
#### Return Type

- `RetryPolicy`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/retry.ts#L40" target="_blank" rel="noreferrer">packages/file-transfer/retry.ts:40</a>
</p>


### resolveValidator

```ts
resolveValidator(options: Validator | ChecksumValidatorOptions): Validator | undefined
```
#### Parameters

- **options**: `Validator | ChecksumValidatorOptions`
#### Return Type

- `Validator | undefined`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/validator.ts#L43" target="_blank" rel="noreferrer">packages/file-transfer/validator.ts:43</a>
</p>



