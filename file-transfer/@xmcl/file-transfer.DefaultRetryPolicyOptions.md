# Interface DefaultRetryPolicyOptions

## 🏷️ Properties

### maxRetryCount <Badge type="info" text="optional" />

```ts
maxRetryCount: number
```
The max retry count
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/retry.ts#L28" target="_blank" rel="noreferrer">packages/file-transfer/retry.ts:28</a>
</p>


### shouldRetry <Badge type="info" text="optional" />

```ts
shouldRetry: (e: any) => boolean
```
Should we retry on the error
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/file-transfer/retry.ts#L32" target="_blank" rel="noreferrer">packages/file-transfer/retry.ts:32</a>
</p>


