# Class PacketEncoder

## 🏭 Constructors

### constructor

```ts
PacketEncoder(client: PacketRegistry): PacketEncoder
```
#### Parameters

- **client**: `PacketRegistry`
#### Return Type

- `PacketEncoder`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L293" target="_blank" rel="noreferrer">packages/client/channel.ts:293</a>
</p>


## 🔧 Methods

### _transform

```ts
_transform(message: any, encoding: string, callback: TransformCallback): void
```
#### Parameters

- **message**: `any`
- **encoding**: `string`
- **callback**: `TransformCallback`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L299" target="_blank" rel="noreferrer">packages/client/channel.ts:299</a>
</p>


### writePacketId <Badge type="warning" text="protected" /> <Badge type="warning" text="abstract" />

```ts
writePacketId(bb: ByteBuffer, id: number): void
```
#### Parameters

- **bb**: `ByteBuffer`
- **id**: `number`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L297" target="_blank" rel="noreferrer">packages/client/channel.ts:297</a>
</p>


