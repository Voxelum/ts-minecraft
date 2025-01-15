# Class PacketDecoder

## 🏭 Constructors

### constructor

```ts
PacketDecoder(client: PacketRegistry): PacketDecoder
```
#### Parameters

- **client**: `PacketRegistry`
#### Return Type

- `PacketDecoder`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L255" target="_blank" rel="noreferrer">packages/client/channel.ts:255</a>
</p>


## 🔧 Methods

### _transform

```ts
_transform(chunk: Buffer, encoding: string, callback: TransformCallback): void
```
#### Parameters

- **chunk**: `Buffer`
- **encoding**: `string`
- **callback**: `TransformCallback`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L261" target="_blank" rel="noreferrer">packages/client/channel.ts:261</a>
</p>


### readPacketId <Badge type="warning" text="abstract" />

```ts
readPacketId(message: ByteBuffer): number
```
#### Parameters

- **message**: `ByteBuffer`
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/channel.ts#L259" target="_blank" rel="noreferrer">packages/client/channel.ts:259</a>
</p>


