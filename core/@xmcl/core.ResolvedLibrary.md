# Class ResolvedLibrary

A resolved library for launcher. It can by parsed from ``LibraryInfo``.
## 🏭 Constructors

### constructor

```ts
ResolvedLibrary(name: string, info: LibraryInfo, download: Artifact, isNative: boolean= false, checksums: string[], serverreq: boolean, clientreq: boolean, extractExclude: string[]): ResolvedLibrary
```
#### Parameters

- **name**: `string`
- **info**: `LibraryInfo`
- **download**: `Artifact`
- **isNative**: `boolean`
- **checksums**: `string[]`
- **serverreq**: `boolean`
- **clientreq**: `boolean`
- **extractExclude**: `string[]`
#### Return Type

- `ResolvedLibrary`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L226" target="_blank" rel="noreferrer">packages/core/version.ts:226</a>
</p>


## 🏷️ Properties

### artifactId <Badge type="tip" text="readonly" />

```ts
artifactId: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L220" target="_blank" rel="noreferrer">packages/core/version.ts:220</a>
</p>


### checksums <Badge type="info" text="optional" /> <Badge type="tip" text="readonly" />

```ts
checksums: string[]
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L231" target="_blank" rel="noreferrer">packages/core/version.ts:231</a>
</p>


### classifier <Badge type="tip" text="readonly" />

```ts
classifier: string
```
The classifier. Normally, this is empty. For forge, it can be like ``universal``, ``installer``.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L224" target="_blank" rel="noreferrer">packages/core/version.ts:224</a>
</p>


### clientreq <Badge type="info" text="optional" /> <Badge type="tip" text="readonly" />

```ts
clientreq: boolean
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L233" target="_blank" rel="noreferrer">packages/core/version.ts:233</a>
</p>


### download <Badge type="tip" text="readonly" />

```ts
download: Artifact
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L229" target="_blank" rel="noreferrer">packages/core/version.ts:229</a>
</p>


### extractExclude <Badge type="info" text="optional" /> <Badge type="tip" text="readonly" />

```ts
extractExclude: string[]
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L234" target="_blank" rel="noreferrer">packages/core/version.ts:234</a>
</p>


### groupId <Badge type="tip" text="readonly" />

```ts
groupId: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L219" target="_blank" rel="noreferrer">packages/core/version.ts:219</a>
</p>


### isNative <Badge type="tip" text="readonly" />

```ts
isNative: boolean = false
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L230" target="_blank" rel="noreferrer">packages/core/version.ts:230</a>
</p>


### isSnapshot <Badge type="tip" text="readonly" />

```ts
isSnapshot: boolean
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L222" target="_blank" rel="noreferrer">packages/core/version.ts:222</a>
</p>


### name <Badge type="tip" text="readonly" />

```ts
name: string
```
The original maven name of this library
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L227" target="_blank" rel="noreferrer">packages/core/version.ts:227</a>
</p>


### path <Badge type="tip" text="readonly" />

```ts
path: string
```
The maven path.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L225" target="_blank" rel="noreferrer">packages/core/version.ts:225</a>
</p>


### serverreq <Badge type="info" text="optional" /> <Badge type="tip" text="readonly" />

```ts
serverreq: boolean
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L232" target="_blank" rel="noreferrer">packages/core/version.ts:232</a>
</p>


### type <Badge type="tip" text="readonly" />

```ts
type: string
```
The file extension. Default is ``jar``. Some files in forge are ``zip``.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L223" target="_blank" rel="noreferrer">packages/core/version.ts:223</a>
</p>


### version <Badge type="tip" text="readonly" />

```ts
version: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L221" target="_blank" rel="noreferrer">packages/core/version.ts:221</a>
</p>


