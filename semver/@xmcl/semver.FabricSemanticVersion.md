# Class FabricSemanticVersion

## 🏭 Constructors

### constructor

```ts
FabricSemanticVersion(version: string, storeX: boolean= false): FabricSemanticVersion
```
#### Parameters

- **version**: `string`
- **storeX**: `boolean`
#### Return Type

- `FabricSemanticVersion`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L27" target="_blank" rel="noreferrer">packages/semver/semver.ts:27</a>
</p>


## 🔧 Methods

### compareTo <Badge type="tip" text="public" />

```ts
compareTo(other: FabricComparableVersion): number
```
#### Parameters

- **other**: `FabricComparableVersion`
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L187" target="_blank" rel="noreferrer">packages/semver/semver.ts:187</a>
</p>


### equals <Badge type="tip" text="public" />

```ts
equals(o: any): boolean
```
#### Parameters

- **o**: `any`
#### Return Type

- `boolean`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L157" target="_blank" rel="noreferrer">packages/semver/semver.ts:157</a>
</p>


### equalsComponentsExactly <Badge type="tip" text="public" />

```ts
equalsComponentsExactly(other: FabricSemanticVersion): boolean
```
#### Parameters

- **other**: `FabricSemanticVersion`
#### Return Type

- `boolean`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L177" target="_blank" rel="noreferrer">packages/semver/semver.ts:177</a>
</p>


### getBuildKey <Badge type="tip" text="public" />

```ts
getBuildKey(): undefined | string
```
#### Return Type

- `undefined | string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L149" target="_blank" rel="noreferrer">packages/semver/semver.ts:149</a>
</p>


### getFriendlyString <Badge type="tip" text="public" />

```ts
getFriendlyString(): string
```
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L153" target="_blank" rel="noreferrer">packages/semver/semver.ts:153</a>
</p>


### getPrereleaseKey <Badge type="tip" text="public" />

```ts
getPrereleaseKey(): undefined | string
```
#### Return Type

- `undefined | string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L145" target="_blank" rel="noreferrer">packages/semver/semver.ts:145</a>
</p>


### getVersionComponent <Badge type="tip" text="public" />

```ts
getVersionComponent(pos: number): number
```
#### Parameters

- **pos**: `number`
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L129" target="_blank" rel="noreferrer">packages/semver/semver.ts:129</a>
</p>


### getVersionComponentCount <Badge type="tip" text="public" />

```ts
getVersionComponentCount(): number
```
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L125" target="_blank" rel="noreferrer">packages/semver/semver.ts:125</a>
</p>


### getVersionComponents <Badge type="tip" text="public" />

```ts
getVersionComponents(): number[]
```
#### Return Type

- `number[]`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L141" target="_blank" rel="noreferrer">packages/semver/semver.ts:141</a>
</p>


### hasWildcard <Badge type="tip" text="public" />

```ts
hasWildcard(): boolean
```
#### Return Type

- `boolean`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L173" target="_blank" rel="noreferrer">packages/semver/semver.ts:173</a>
</p>


### toString <Badge type="tip" text="public" />

```ts
toString(): string
```
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/semver/semver.ts#L169" target="_blank" rel="noreferrer">packages/semver/semver.ts:169</a>
</p>


