# Class PlayerModel

## 🏭 Constructors

### constructor

```ts
PlayerModel(): PlayerModel
```
#### Return Type

- `PlayerModel`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L217" target="_blank" rel="noreferrer">packages/model/player.ts:217</a>
</p>


## 🏷️ Properties

### materialCape <Badge type="tip" text="readonly" />

```ts
materialCape: MeshBasicMaterial
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L213" target="_blank" rel="noreferrer">packages/model/player.ts:213</a>
</p>


### materialPlayer <Badge type="tip" text="readonly" />

```ts
materialPlayer: MeshBasicMaterial
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L211" target="_blank" rel="noreferrer">packages/model/player.ts:211</a>
</p>


### materialTransparent <Badge type="tip" text="readonly" />

```ts
materialTransparent: MeshBasicMaterial
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L212" target="_blank" rel="noreferrer">packages/model/player.ts:212</a>
</p>


### playerObject3d <Badge type="tip" text="readonly" />

```ts
playerObject3d: PlayerObject3D
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L210" target="_blank" rel="noreferrer">packages/model/player.ts:210</a>
</p>


### textureCape <Badge type="tip" text="readonly" />

```ts
textureCape: CanvasTexture
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L214" target="_blank" rel="noreferrer">packages/model/player.ts:214</a>
</p>


### texturePlayer <Badge type="tip" text="readonly" />

```ts
texturePlayer: CanvasTexture
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L215" target="_blank" rel="noreferrer">packages/model/player.ts:215</a>
</p>


## 🔧 Methods

### setCape

```ts
setCape(cape: undefined | TextureSource): Promise<void>
```
#### Parameters

- **cape**: `undefined | TextureSource`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L275" target="_blank" rel="noreferrer">packages/model/player.ts:275</a>
</p>


### setSkin

```ts
setSkin(skin: TextureSource, isSlim: boolean= false): Promise<void>
```

#### Parameters

- **skin**: `TextureSource`
The skin texture source. Should be url string, URL object, or a Image HTML element
- **isSlim**: `boolean`
Is this skin slim
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L256" target="_blank" rel="noreferrer">packages/model/player.ts:256</a>
</p>


### create <Badge type="warning" text="static" />

```ts
create(): PlayerModel
```
#### Return Type

- `PlayerModel`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/model/player.ts#L208" target="_blank" rel="noreferrer">packages/model/player.ts:208</a>
</p>


