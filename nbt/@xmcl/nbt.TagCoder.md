# Interface TagCoder

## 🔧 Methods

### read

```ts
read(buf: ByteBuffer, value: any, context: WriteContext): void
```
#### Parameters

- **buf**: `ByteBuffer`
- **value**: `any`
- **context**: `WriteContext`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nbt/index.ts#L183" target="_blank" rel="noreferrer">packages/nbt/index.ts:183</a>
</p>


### write

```ts
write(buf: ByteBuffer, context: ReadContext): any
```
#### Parameters

- **buf**: `ByteBuffer`
- **context**: `ReadContext`
#### Return Type

- `any`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nbt/index.ts#L182" target="_blank" rel="noreferrer">packages/nbt/index.ts:182</a>
</p>


