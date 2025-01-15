# Interface RetryPolicy

The handler that decide whether
## 🔧 Methods

### retry

```ts
retry(url: URL, attempt: number, error: ValidationError): boolean | Promise<boolean>
```
#### Parameters

- **url**: `URL`
- **attempt**: `number`
- **error**: `ValidationError`
#### Return Type

- `boolean | Promise<boolean>`

```ts
retry(url: URL, attempt: number, error: DownloadError): boolean | Promise<boolean>
```
#### Parameters

- **url**: `URL`
- **attempt**: `number`
- **error**: `DownloadError`
#### Return Type

- `boolean | Promise<boolean>`

```ts
retry(url: URL, attempt: number, error: any): boolean | Promise<boolean>
```
You should decide whether we should retry the download again?
#### Parameters

- **url**: `URL`
The current downloading url
- **attempt**: `number`
How many time it try to retry download? The first retry will be ``1``.
- **error**: `any`
The error object thrown during this download. It can be [DownloadError](@xmcl/file-transfer.DownloadError) or $[ValidationError](@xmcl/file-transfer.ValidationError).
#### Return Type

- `boolean | Promise<boolean>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/retry.ts#L11" target="_blank" rel="noreferrer">packages/file-transfer/retry.ts:11</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/retry.ts#L12" target="_blank" rel="noreferrer">packages/file-transfer/retry.ts:12</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/retry.ts#L21" target="_blank" rel="noreferrer">packages/file-transfer/retry.ts:21</a>
</p>


