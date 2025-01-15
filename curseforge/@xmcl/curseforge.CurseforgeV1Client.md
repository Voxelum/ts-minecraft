# Class CurseforgeV1Client

Reference the https://docs.curseforge.com/#curseforge-core-api-mods
## 🏭 Constructors

### constructor

```ts
CurseforgeV1Client(apiKey: string, options: CurseforgeClientOptions): CurseforgeV1Client
```
#### Parameters

- **apiKey**: `string`
- **options**: `CurseforgeClientOptions`
#### Return Type

- `CurseforgeV1Client`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L573" target="_blank" rel="noreferrer">packages/curseforge/index.ts:573</a>
</p>


## 🏷️ Properties

### headers

```ts
headers: Record<string, string>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L569" target="_blank" rel="noreferrer">packages/curseforge/index.ts:569</a>
</p>


## 🔧 Methods

### getCategories

```ts
getCategories(signal: AbortSignal): Promise<ModCategory[]>
```

#### Parameters

- **signal**: `AbortSignal`
#### Return Type

- `Promise<ModCategory[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L585" target="_blank" rel="noreferrer">packages/curseforge/index.ts:585</a>
</p>


### getFiles

```ts
getFiles(fileIds: number[], signal: AbortSignal): Promise<File[]>
```

#### Parameters

- **fileIds**: `number[]`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<File[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L713" target="_blank" rel="noreferrer">packages/curseforge/index.ts:713</a>
</p>


### getFingerprintsFuzzyMatchesByGameId

```ts
getFingerprintsFuzzyMatchesByGameId(gameId: number, fingerprints: number[], signal: AbortSignal): Promise<{ fuzzyMatches: FingerprintFuzzyMatch[] }>
```
#### Parameters

- **gameId**: `number`
- **fingerprints**: `number[]`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<{ fuzzyMatches: FingerprintFuzzyMatch[] }>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L802" target="_blank" rel="noreferrer">packages/curseforge/index.ts:802</a>
</p>


### getFingerprintsMatchesByGameId

```ts
getFingerprintsMatchesByGameId(gameId: number, fingerprints: number[], signal: AbortSignal): Promise<{ exactFingerprints: number[]; exactMatches: FingerprintMatch[]; isCacheBuilt: boolean; partialFingerprints: object; partialMatches: FingerprintMatch[]; unmatchedFingerprints: number[] }>
```
#### Parameters

- **gameId**: `number`
- **fingerprints**: `number[]`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<{ exactFingerprints: number[]; exactMatches: FingerprintMatch[]; isCacheBuilt: boolean; partialFingerprints: object; partialMatches: FingerprintMatch[]; unmatchedFingerprints: number[] }>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L783" target="_blank" rel="noreferrer">packages/curseforge/index.ts:783</a>
</p>


### getMod

```ts
getMod(modId: number, signal: AbortSignal): Promise<Mod>
```
Get the mod by mod Id.
#### Parameters

- **modId**: `number`
The id of mod
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Mod>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L608" target="_blank" rel="noreferrer">packages/curseforge/index.ts:608</a>
</p>


### getModDescription

```ts
getModDescription(modId: number, signal: AbortSignal): Promise<string>
```

#### Parameters

- **modId**: `number`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L627" target="_blank" rel="noreferrer">packages/curseforge/index.ts:627</a>
</p>


### getModFile

```ts
getModFile(modId: number, fileId: number, signal: AbortSignal): Promise<File>
```

#### Parameters

- **modId**: `number`
- **fileId**: `number`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<File>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L672" target="_blank" rel="noreferrer">packages/curseforge/index.ts:672</a>
</p>


### getModFileChangelog

```ts
getModFileChangelog(modId: number, fileId: number, signal: AbortSignal): Promise<string>
```
https://docs.curseforge.com/#get-mod-file-changelog
#### Parameters

- **modId**: `number`
- **fileId**: `number`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L767" target="_blank" rel="noreferrer">packages/curseforge/index.ts:767</a>
</p>


### getModFiles

```ts
getModFiles(options: GetModFilesOptions, signal: AbortSignal): Promise<{ data: File[]; pagination: Pagination }>
```

#### Parameters

- **options**: `GetModFilesOptions`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<{ data: File[]; pagination: Pagination }>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L646" target="_blank" rel="noreferrer">packages/curseforge/index.ts:646</a>
</p>


### getMods

```ts
getMods(modIds: number[], signal: AbortSignal): Promise<Mod[]>
```

#### Parameters

- **modIds**: `number[]`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Mod[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L691" target="_blank" rel="noreferrer">packages/curseforge/index.ts:691</a>
</p>


### searchMods

```ts
searchMods(options: SearchOptions, signal: AbortSignal): Promise<{ data: Mod[]; pagination: Pagination }>
```

#### Parameters

- **options**: `SearchOptions`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<{ data: Mod[]; pagination: Pagination }>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L735" target="_blank" rel="noreferrer">packages/curseforge/index.ts:735</a>
</p>


