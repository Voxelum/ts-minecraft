# Class ModrinthV2Client


## 🏭 Constructors

### constructor

```ts
ModrinthV2Client(options: ModrinthClientOptions): ModrinthV2Client
```
#### Parameters

- **options**: `ModrinthClientOptions`
#### Return Type

- `ModrinthV2Client`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L185" target="_blank" rel="noreferrer">packages/modrinth/index.ts:185</a>
</p>


## 🏷️ Properties

### headers

```ts
headers: Record<string, string>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L183" target="_blank" rel="noreferrer">packages/modrinth/index.ts:183</a>
</p>


## 🔧 Methods

### getCategoryTags

```ts
getCategoryTags(signal: AbortSignal): Promise<Category[]>
```

#### Parameters

- **signal**: `AbortSignal`
#### Return Type

- `Promise<Category[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L387" target="_blank" rel="noreferrer">packages/modrinth/index.ts:387</a>
</p>


### getGameVersionTags

```ts
getGameVersionTags(signal: AbortSignal): Promise<GameVersion[]>
```

#### Parameters

- **signal**: `AbortSignal`
#### Return Type

- `Promise<GameVersion[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L403" target="_blank" rel="noreferrer">packages/modrinth/index.ts:403</a>
</p>


### getLatestProjectVersion

```ts
getLatestProjectVersion(sha1: string, __namedParameters: { algorithm?: string; gameVersions?: string[]; loaders?: string[] }= {}, signal: AbortSignal): Promise<ProjectVersion>
```

#### Parameters

- **sha1**: `string`
- **__namedParameters**: `{ algorithm?: string; gameVersions?: string[]; loaders?: string[] }`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<ProjectVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L349" target="_blank" rel="noreferrer">packages/modrinth/index.ts:349</a>
</p>


### getLatestVersionsFromHashes

```ts
getLatestVersionsFromHashes(hashes: string[], __namedParameters: { algorithm?: string; gameVersions?: string[]; loaders?: string[] }= {}, signal: AbortSignal): Promise<Record<string, ProjectVersion>>
```

#### Parameters

- **hashes**: `string[]`
- **__namedParameters**: `{ algorithm?: string; gameVersions?: string[]; loaders?: string[] }`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Record<string, ProjectVersion>>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L326" target="_blank" rel="noreferrer">packages/modrinth/index.ts:326</a>
</p>


### getLicenseTags

```ts
getLicenseTags(signal: AbortSignal): Promise<License[]>
```

#### Parameters

- **signal**: `AbortSignal`
#### Return Type

- `Promise<License[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L371" target="_blank" rel="noreferrer">packages/modrinth/index.ts:371</a>
</p>


### getLoaderTags

```ts
getLoaderTags(signal: AbortSignal): Promise<Loader[]>
```

#### Parameters

- **signal**: `AbortSignal`
#### Return Type

- `Promise<Loader[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L419" target="_blank" rel="noreferrer">packages/modrinth/index.ts:419</a>
</p>


### getProject

```ts
getProject(projectId: string, signal: AbortSignal): Promise<Project>
```

#### Parameters

- **projectId**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Project>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L216" target="_blank" rel="noreferrer">packages/modrinth/index.ts:216</a>
</p>


### getProjects

```ts
getProjects(projectIds: string[], signal: AbortSignal): Promise<Project[]>
```

#### Parameters

- **projectIds**: `string[]`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Project[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L233" target="_blank" rel="noreferrer">packages/modrinth/index.ts:233</a>
</p>


### getProjectTeamMembers

```ts
getProjectTeamMembers(projectId: string, signal: AbortSignal): Promise<TeamMember[]>
```

#### Parameters

- **projectId**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<TeamMember[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L435" target="_blank" rel="noreferrer">packages/modrinth/index.ts:435</a>
</p>


### getProjectVersion

```ts
getProjectVersion(versionId: string, signal: AbortSignal): Promise<ProjectVersion>
```

#### Parameters

- **versionId**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<ProjectVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L269" target="_blank" rel="noreferrer">packages/modrinth/index.ts:269</a>
</p>


### getProjectVersions

```ts
getProjectVersions(projectId: string, __namedParameters: { featured?: boolean; gameVersions?: string[]; loaders?: string[] }= {}, signal: AbortSignal): Promise<ProjectVersion[]>
```

#### Parameters

- **projectId**: `string`
- **__namedParameters**: `{ featured?: boolean; gameVersions?: string[]; loaders?: string[] }`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<ProjectVersion[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L250" target="_blank" rel="noreferrer">packages/modrinth/index.ts:250</a>
</p>


### getProjectVersionsByHash

```ts
getProjectVersionsByHash(hashes: string[], algorithm: string= 'sha1', signal: AbortSignal): Promise<Record<string, ProjectVersion>>
```

#### Parameters

- **hashes**: `string[]`
- **algorithm**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Record<string, ProjectVersion>>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L302" target="_blank" rel="noreferrer">packages/modrinth/index.ts:302</a>
</p>


### getProjectVersionsById

```ts
getProjectVersionsById(ids: string[], signal: AbortSignal): Promise<ProjectVersion[]>
```

#### Parameters

- **ids**: `string[]`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<ProjectVersion[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L285" target="_blank" rel="noreferrer">packages/modrinth/index.ts:285</a>
</p>


### getUser

```ts
getUser(id: string, signal: AbortSignal): Promise<User>
```

#### Parameters

- **id**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<User>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L451" target="_blank" rel="noreferrer">packages/modrinth/index.ts:451</a>
</p>


### getUserProjects

```ts
getUserProjects(id: string, signal: AbortSignal): Promise<Project[]>
```

#### Parameters

- **id**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<Project[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L467" target="_blank" rel="noreferrer">packages/modrinth/index.ts:467</a>
</p>


### searchProjects

```ts
searchProjects(options: SearchProjectOptions, signal: AbortSignal): Promise<SearchResult>
```

#### Parameters

- **options**: `SearchProjectOptions`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<SearchResult>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/index.ts#L194" target="_blank" rel="noreferrer">packages/modrinth/index.ts:194</a>
</p>


