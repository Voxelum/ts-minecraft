# Class ResourcePack

The Minecraft resource pack. Providing the loading resource from ``ResourceLocation`` function.
It's a wrap of ``FileSystem`` which provides cross node/browser accssing.
## 🏭 Constructors

### constructor

```ts
ResourcePack(fs: FileSystem): ResourcePack
```
#### Parameters

- **fs**: `FileSystem`
#### Return Type

- `ResourcePack`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L123" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:123</a>
</p>


## 🏷️ Properties

### fs <Badge type="tip" text="readonly" />

```ts
fs: FileSystem
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L123" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:123</a>
</p>


## 🔧 Methods

### domains

```ts
domains(): Promise<string[]>
```
The owned domain. You can think about the modids.
#### Return Type

- `Promise<string[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L186" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:186</a>
</p>


### get

```ts
get(location: ResourceLocation): Promise<undefined | Resource>
```
Get the resource on the resource location.

It can be undefined if there is no resource at that location.
#### Parameters

- **location**: `ResourceLocation`
THe resource location
#### Return Type

- `Promise<undefined | Resource>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L165" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:165</a>
</p>


### getUrl

```ts
getUrl(location: ResourceLocation): string
```
Get the url of the resource location.
Please notice that this is depended on ``FileSystem`` implementation of the ``getUrl``.
#### Parameters

- **location**: `ResourceLocation`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L154" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:154</a>
</p>


### has

```ts
has(location: ResourceLocation): Promise<boolean>
```
Does the resource pack has the resource
#### Parameters

- **location**: `ResourceLocation`
#### Return Type

- `Promise<boolean>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L179" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:179</a>
</p>


### icon

```ts
icon(): Promise<Uint8Array>
```
The icon of the resource pack
#### Return Type

- `Promise<Uint8Array>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L213" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:213</a>
</p>


### info

```ts
info(): Promise<Pack>
```
The pack info, just like resource pack
#### Return Type

- `Promise<Pack>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L200" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:200</a>
</p>


### load

```ts
load(location: ResourceLocation, type: "utf-8" | "base64"): Promise<undefined | string | Uint8Array>
```
Load the resource content
#### Parameters

- **location**: `ResourceLocation`
The resource location
- **type**: `"utf-8" | "base64"`
The output type of the resource
#### Return Type

- `Promise<undefined | string | Uint8Array>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L129" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:129</a>
</p>


### loadMetadata

```ts
loadMetadata(location: ResourceLocation): Promise<any>
```
Load the resource metadata which is localted at &lt;resource-path&gt;.mcmeta
#### Parameters

- **location**: `ResourceLocation`
#### Return Type

- `Promise<any>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L140" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:140</a>
</p>


### open <Badge type="warning" text="static" />

```ts
open(resourcePack: string | Uint8Array | FileSystem): Promise<ResourcePack>
```
#### Parameters

- **resourcePack**: `string | Uint8Array | FileSystem`
#### Return Type

- `Promise<ResourcePack>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L221" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:221</a>
</p>


