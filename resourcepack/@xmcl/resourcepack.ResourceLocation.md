# Class ResourceLocation

The Minecraft used object to map the game resource location.
## 🏭 Constructors

### constructor

```ts
ResourceLocation(domain: string, path: string): ResourceLocation
```
#### Parameters

- **domain**: `string`
- **path**: `string`
#### Return Type

- `ResourceLocation`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L82" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:82</a>
</p>


## 🏷️ Properties

### domain <Badge type="tip" text="readonly" />

```ts
domain: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L83" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:83</a>
</p>


### path <Badge type="tip" text="readonly" />

```ts
path: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L84" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:84</a>
</p>


## 🔧 Methods

### toString

```ts
toString(): string
```
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L86" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:86</a>
</p>


### deconstruct <Badge type="warning" text="static" />

```ts
deconstruct(path: string, appendPath: string= ''): ResourceLocation
```
#### Parameters

- **path**: `string`
- **appendPath**: `string`
#### Return Type

- `ResourceLocation`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L18" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:18</a>
</p>


### fromPath <Badge type="warning" text="static" />

```ts
fromPath(location: string | ResourceLocation): ResourceLocation
```
from absoluted path
#### Parameters

- **location**: `string | ResourceLocation`
#### Return Type

- `ResourceLocation`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L73" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:73</a>
</p>


### getAssetsPath <Badge type="warning" text="static" />

```ts
getAssetsPath(location: string | ResourceLocation): string
```
#### Parameters

- **location**: `string | ResourceLocation`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L77" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:77</a>
</p>


### ofBlockModelPath <Badge type="warning" text="static" />

```ts
ofBlockModelPath(location: string | ResourceLocation): ResourceLocation
```
build from model path
#### Parameters

- **location**: `string | ResourceLocation`
#### Return Type

- `ResourceLocation`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L47" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:47</a>
</p>


### ofBlockStatePath <Badge type="warning" text="static" />

```ts
ofBlockStatePath(location: string | ResourceLocation): ResourceLocation
```
build from block state path
#### Parameters

- **location**: `string | ResourceLocation`
#### Return Type

- `ResourceLocation`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L65" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:65</a>
</p>


### ofItemModelPath <Badge type="warning" text="static" />

```ts
ofItemModelPath(location: string | ResourceLocation): ResourceLocation
```
#### Parameters

- **location**: `string | ResourceLocation`
#### Return Type

- `ResourceLocation`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L52" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:52</a>
</p>


### ofModelPath <Badge type="warning" text="static" />

```ts
ofModelPath(location: string | ResourceLocation): ResourceLocation
```
#### Parameters

- **location**: `string | ResourceLocation`
#### Return Type

- `ResourceLocation`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L57" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:57</a>
</p>


### ofTexturePath <Badge type="warning" text="static" />

```ts
ofTexturePath(location: string | ResourceLocation): ResourceLocation
```
build from texture path
#### Parameters

- **location**: `string | ResourceLocation`
#### Return Type

- `ResourceLocation`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourcePack.ts#L39" target="_blank" rel="noreferrer">packages/resourcepack/resourcePack.ts:39</a>
</p>


