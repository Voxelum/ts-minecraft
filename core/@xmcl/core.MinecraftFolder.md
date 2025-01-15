# Class MinecraftFolder

The Minecraft folder structure. All method will return the path related to a minecraft root like ``.minecraft``.
## 🏭 Constructors

### constructor

```ts
MinecraftFolder(root: string): MinecraftFolder
```
#### Parameters

- **root**: `string`
#### Return Type

- `MinecraftFolder`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L22" target="_blank" rel="noreferrer">packages/core/folder.ts:22</a>
</p>


## 🏷️ Properties

### root <Badge type="tip" text="readonly" />

```ts
root: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L4" target="_blank" rel="noreferrer">packages/core/folder.ts:4</a>, <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L22" target="_blank" rel="noreferrer">packages/core/folder.ts:22</a>
</p>


## 🔑 Accessors

### assets

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L26" target="_blank" rel="noreferrer">packages/core/folder.ts:26</a>
</p>


### lastestLog

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L32" target="_blank" rel="noreferrer">packages/core/folder.ts:32</a>
</p>


### launcherProfile

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L31" target="_blank" rel="noreferrer">packages/core/folder.ts:31</a>
</p>


### libraries

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L27" target="_blank" rel="noreferrer">packages/core/folder.ts:27</a>
</p>


### logs

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L29" target="_blank" rel="noreferrer">packages/core/folder.ts:29</a>
</p>


### maps

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L33" target="_blank" rel="noreferrer">packages/core/folder.ts:33</a>
</p>


### mods

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L24" target="_blank" rel="noreferrer">packages/core/folder.ts:24</a>
</p>


### options

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L30" target="_blank" rel="noreferrer">packages/core/folder.ts:30</a>
</p>


### resourcepacks

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L25" target="_blank" rel="noreferrer">packages/core/folder.ts:25</a>
</p>


### saves

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L34" target="_blank" rel="noreferrer">packages/core/folder.ts:34</a>
</p>


### screenshots

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L35" target="_blank" rel="noreferrer">packages/core/folder.ts:35</a>
</p>


### versions

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L28" target="_blank" rel="noreferrer">packages/core/folder.ts:28</a>
</p>


## 🔧 Methods

### getAsset

```ts
getAsset(hash: string): string
```
#### Parameters

- **hash**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L64" target="_blank" rel="noreferrer">packages/core/folder.ts:64</a>
</p>


### getAssetsIndex

```ts
getAssetsIndex(versionAssets: string): string
```
#### Parameters

- **versionAssets**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L63" target="_blank" rel="noreferrer">packages/core/folder.ts:63</a>
</p>


### getLibraryByPath

```ts
getLibraryByPath(libraryPath: string): string
```
#### Parameters

- **libraryPath**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L59" target="_blank" rel="noreferrer">packages/core/folder.ts:59</a>
</p>


### getLog

```ts
getLog(fileName: string): string
```
#### Parameters

- **fileName**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L56" target="_blank" rel="noreferrer">packages/core/folder.ts:56</a>
</p>


### getLogConfig

```ts
getLogConfig(file: string): string
```
#### Parameters

- **file**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L65" target="_blank" rel="noreferrer">packages/core/folder.ts:65</a>
</p>


### getMapIcon

```ts
getMapIcon(map: string): string
```
#### Parameters

- **map**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L58" target="_blank" rel="noreferrer">packages/core/folder.ts:58</a>
</p>


### getMapInfo

```ts
getMapInfo(map: string): string
```
#### Parameters

- **map**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L57" target="_blank" rel="noreferrer">packages/core/folder.ts:57</a>
</p>


### getMod

```ts
getMod(fileName: string): string
```
#### Parameters

- **fileName**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L55" target="_blank" rel="noreferrer">packages/core/folder.ts:55</a>
</p>


### getNativesRoot

```ts
getNativesRoot(version: string): string
```
#### Parameters

- **version**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L37" target="_blank" rel="noreferrer">packages/core/folder.ts:37</a>
</p>


### getPath

```ts
getPath(path: string[]): string
```
#### Parameters

- **path**: `string[]`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L66" target="_blank" rel="noreferrer">packages/core/folder.ts:66</a>
</p>


### getResourcePack

```ts
getResourcePack(fileName: string): string
```
#### Parameters

- **fileName**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L54" target="_blank" rel="noreferrer">packages/core/folder.ts:54</a>
</p>


### getVersionAll

```ts
getVersionAll(version: string): string[]
```
#### Parameters

- **version**: `string`
#### Return Type

- `string[]`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L47" target="_blank" rel="noreferrer">packages/core/folder.ts:47</a>
</p>


### getVersionJar

```ts
getVersionJar(version: string, type: string): string
```
#### Parameters

- **version**: `string`
- **type**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L41" target="_blank" rel="noreferrer">packages/core/folder.ts:41</a>
</p>


### getVersionJson

```ts
getVersionJson(version: string): string
```
#### Parameters

- **version**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L39" target="_blank" rel="noreferrer">packages/core/folder.ts:39</a>
</p>


### getVersionRoot

```ts
getVersionRoot(version: string): string
```
#### Parameters

- **version**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L38" target="_blank" rel="noreferrer">packages/core/folder.ts:38</a>
</p>


### getVersionServerJson

```ts
getVersionServerJson(version: string): string
```
#### Parameters

- **version**: `string`
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L40" target="_blank" rel="noreferrer">packages/core/folder.ts:40</a>
</p>


### from <Badge type="warning" text="static" />

```ts
from(location: MinecraftLocation): MinecraftFolder
```
Normal a Minecraft folder from a folder or string
#### Parameters

- **location**: `MinecraftLocation`
#### Return Type

- `MinecraftFolder`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/folder.ts#L14" target="_blank" rel="noreferrer">packages/core/folder.ts:14</a>
</p>


