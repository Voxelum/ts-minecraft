# Class BlockModelFactory

## 🏭 Constructors

### constructor

```ts
BlockModelFactory(textureManager: TextureManager, option: { clipUVs?: boolean; modelOnly?: boolean }= {}): BlockModelFactory
```
#### Parameters

- **textureManager**: `TextureManager`
- **option**: `{ clipUVs?: boolean; modelOnly?: boolean }`
#### Return Type

- `BlockModelFactory`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/block.ts#L167" target="_blank" rel="noreferrer">packages/model/block.ts:167</a>
</p>


## 🏷️ Properties

### option <Badge type="tip" text="readonly" />

```ts
option: { clipUVs?: boolean; modelOnly?: boolean } = {}
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/block.ts#L167" target="_blank" rel="noreferrer">packages/model/block.ts:167</a>
</p>


### textureManager <Badge type="tip" text="readonly" />

```ts
textureManager: TextureManager
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/block.ts#L167" target="_blank" rel="noreferrer">packages/model/block.ts:167</a>
</p>


### TRANSPARENT_MATERIAL <Badge type="warning" text="static" />

```ts
TRANSPARENT_MATERIAL: MeshBasicMaterial = ...
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/block.ts#L163" target="_blank" rel="noreferrer">packages/model/block.ts:163</a>
</p>


## 🔧 Methods

### getObject

```ts
getObject(model: Resolved, options: { uvlock?: boolean; x?: number; y?: number }= {}, fix: number= 0.001): BlockModelObject
```
Get threejs ``Object3D`` for that block model.
#### Parameters

- **model**: `Resolved`
- **options**: `{ uvlock?: boolean; x?: number; y?: number }`
- **fix**: `number`
#### Return Type

- `BlockModelObject`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/block.ts#L172" target="_blank" rel="noreferrer">packages/model/block.ts:172</a>
</p>


