# Interface Resource

The resource in the resource pack on a ``ResourceLocation``
## 🏷️ Properties

### location <Badge type="tip" text="readonly" />

```ts
location: ResourceLocation
```
The absolute location of the resource
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L97" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:97</a>
</p>


### url <Badge type="tip" text="readonly" />

```ts
url: string
```
The real resource url which is used for reading the content of it.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L101" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:101</a>
</p>


## 🔧 Methods

### read

```ts
read(): Promise<Uint8Array>
```
Read the resource content
#### Return Type

- `Promise<Uint8Array>`

```ts
read(encoding: undefined): Promise<Uint8Array>
```
#### Parameters

- **encoding**: `undefined`
#### Return Type

- `Promise<Uint8Array>`

```ts
read(encoding: "utf-8" | "base64"): Promise<string>
```
#### Parameters

- **encoding**: `"utf-8" | "base64"`
#### Return Type

- `Promise<string>`

```ts
read(encoding: "utf-8" | "base64"): Promise<string | Uint8Array>
```
#### Parameters

- **encoding**: `"utf-8" | "base64"`
#### Return Type

- `Promise<string | Uint8Array>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L105" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:105</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L106" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:106</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L107" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:107</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L108" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:108</a>
</p>


### readMetadata

```ts
readMetadata(): Promise<PackMeta>
```
Read the metadata of the resource
#### Return Type

- `Promise<PackMeta>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L112" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:112</a>
</p>


