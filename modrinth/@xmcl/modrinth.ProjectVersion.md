# Interface ProjectVersion

## 🏷️ Properties

### author_id

```ts
author_id: string
```
The ID of the author who published this version
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L181" target="_blank" rel="noreferrer">packages/modrinth/types.ts:181</a>
</p>


### changelog <Badge type="info" text="optional" />

```ts
changelog: string
```
The changelog for this version of the mod.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L197" target="_blank" rel="noreferrer">packages/modrinth/types.ts:197</a>
</p>


### changelog_url <Badge type="info" text="optional" />

```ts
changelog_url: string
```
DEPRECATED A link to the changelog for this version of the mod
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L201" target="_blank" rel="noreferrer">packages/modrinth/types.ts:201</a>
</p>


### date_published

```ts
date_published: string
```
The date that this version was published
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L205" target="_blank" rel="noreferrer">packages/modrinth/types.ts:205</a>
</p>


### dependencies

```ts
dependencies: { dependency_type: "required" | "optional" | "incompatible" | "embedded"; project_id: string; version_id: null | string }[]
```
A list of specific versions of mods that this version depends on
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L221" target="_blank" rel="noreferrer">packages/modrinth/types.ts:221</a>
</p>


### downloads

```ts
downloads: number
```
The number of downloads this specific version has
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L209" target="_blank" rel="noreferrer">packages/modrinth/types.ts:209</a>
</p>


### featured

```ts
featured: boolean
```
Whether the version is featured or not
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L185" target="_blank" rel="noreferrer">packages/modrinth/types.ts:185</a>
</p>


### files

```ts
files: ModVersionFile[]
```
A list of files available for download for this version
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L217" target="_blank" rel="noreferrer">packages/modrinth/types.ts:217</a>
</p>


### game_versions

```ts
game_versions: string[]
```
A list of versions of Minecraft that this version of the mod supports
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L225" target="_blank" rel="noreferrer">packages/modrinth/types.ts:225</a>
</p>


### id

```ts
id: string
```
The ID of the version, encoded as a base62 string
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L173" target="_blank" rel="noreferrer">packages/modrinth/types.ts:173</a>
</p>


### loaders

```ts
loaders: string[]
```
The mod loaders that this version supports
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L229" target="_blank" rel="noreferrer">packages/modrinth/types.ts:229</a>
</p>


### name

```ts
name: string
```
The name of this version
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L189" target="_blank" rel="noreferrer">packages/modrinth/types.ts:189</a>
</p>


### project_id

```ts
project_id: string
```
The ID of the project this version is for
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L177" target="_blank" rel="noreferrer">packages/modrinth/types.ts:177</a>
</p>


### version_number

```ts
version_number: string
```
The version number. Ideally will follow semantic versioning
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L193" target="_blank" rel="noreferrer">packages/modrinth/types.ts:193</a>
</p>


### version_type

```ts
version_type: string
```
The type of the release - alpha, beta, or release
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L213" target="_blank" rel="noreferrer">packages/modrinth/types.ts:213</a>
</p>


