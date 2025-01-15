# Namespace Version

## 🤝 Interfaces

<div class="definition-grid interface"><a href="core/@xmcl/core.Version/@xmcl/core.Version.Artifact">Artifact</a><a href="core/@xmcl/core.Version/@xmcl/core.Version.AssetIndex">AssetIndex</a><a href="core/@xmcl/core.Version/@xmcl/core.Version.Download">Download</a><a href="core/@xmcl/core.Version/@xmcl/core.Version.LegacyLibrary">LegacyLibrary</a><a href="core/@xmcl/core.Version/@xmcl/core.Version.LoggingFile">LoggingFile</a><a href="core/@xmcl/core.Version/@xmcl/core.Version.NativeLibrary">NativeLibrary</a><a href="core/@xmcl/core.Version/@xmcl/core.Version.NormalLibrary">NormalLibrary</a><a href="core/@xmcl/core.Version/@xmcl/core.Version.PlatformSpecificLibrary">PlatformSpecificLibrary</a><a href="core/@xmcl/core.Version/@xmcl/core.Version.Rule">Rule</a></div>

## 🏭 Functions

### checkAllowed

```ts
checkAllowed(rules: Rule[], platform: Platform= ..., features: string[]= []): boolean
```
Check if all the rules in ``Rule[]`` are acceptable in certain OS ``platform`` and features.
#### Parameters

- **rules**: `Rule[]`
The rules usually comes from ``Library`` or ``LaunchArgument``
- **platform**: `Platform`
The platform, leave it absent will use the ``currentPlatform``
- **features**: `string[]`
The features, used by game launch argument ``arguments.game``
#### Return Type

- `boolean`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L319" target="_blank" rel="noreferrer">packages/core/version.ts:319</a>
</p>


### inherits

```ts
inherits(id: string, parent: Version, version: Version): Version
```
Simply extends the version (actaully mixin)

The result version will have the union of two version's libs. If one lib in two versions has different version, it will take the extra version one.
It will also mixin the launchArgument if it could.

This function can be used for mixin forge and liteloader version.

This function will throw an Error if two version have different assets. It doesn't care about the detail version though.
#### Parameters

- **id**: `string`
The new version id
- **parent**: `Version`
The parent version will be inherited
- **version**: `Version`
The version info which will overlap some parent information
#### Return Type

- `Version`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L519" target="_blank" rel="noreferrer">packages/core/version.ts:519</a>
</p>


### mixinArgumentString

```ts
mixinArgumentString(hi: string, lo: string): string
```
Mixin the string arguments
#### Parameters

- **hi**: `string`
Higher priority argument
- **lo**: `string`
Lower priority argument
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L559" target="_blank" rel="noreferrer">packages/core/version.ts:559</a>
</p>


### normalizeVersionJson

```ts
normalizeVersionJson(versionString: string, root: string, platform: Platform= ...): PartialResolvedVersion
```
Normalize a single version json.

This function will force legacy version format into new format.
It will convert ``minecraftArguments`` into ``arguments.game`` and generate a default ``arguments.jvm``

This will pre-process the libraries according to the rules fields and current platform.
Non-matched libraries will be filtered out.

This will also pre-process the jvm arguments according to the platform (os) info it provided.
#### Parameters

- **versionString**: `string`
The version json string
- **root**: `string`
The root of the version
- **platform**: `Platform`
#### Return Type

- `PartialResolvedVersion`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L726" target="_blank" rel="noreferrer">packages/core/version.ts:726</a>
</p>


### parse

```ts
parse(minecraftPath: MinecraftLocation, version: string, platofrm: Platform= ...): Promise<ResolvedVersion>
```
Recursively parse the version JSON.

This function requires that the id in version.json is identical to the directory name of that version.

e.g. .minecraft/&lt;version-a&gt;/&lt;version-a.json&gt; and in &lt;version-a.json&gt;:
````
{ "id": "<version-a>", ... }
````
The function might throw multiple parsing errors. You can handle them with type by this:
````ts
try {
  await Version.parse(mcPath, version);
} catch (e) {
  let err = e as VersionParseError;
  switch (err.error) {
    case "BadVersionJson": // do things...
    // handle other cases
    default: // this means this is not a VersionParseError, handle error normally.
  }
}
````
#### Parameters

- **minecraftPath**: `MinecraftLocation`
The .minecraft path
- **version**: `string`
The vesion id.
- **platofrm**: `Platform`
#### Return Type

- `Promise<ResolvedVersion>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L384" target="_blank" rel="noreferrer">packages/core/version.ts:384</a>
</p>


### resolve

```ts
resolve(minecraftPath: MinecraftLocation, hierarchy: PartialResolvedVersion[]): ResolvedVersion
```
Resolve the given version hierarchy into ``ResolvedVersion``.

Some launcher has non-standard version json format to handle hierarchy,
and if you want to handle them, you can use this function to parse.
#### Parameters

- **minecraftPath**: `MinecraftLocation`
The path of the Minecraft folder
- **hierarchy**: `PartialResolvedVersion[]`
The version hierarchy, which can be produced by ``normalizeVersionJson``
#### Return Type

- `ResolvedVersion`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L405" target="_blank" rel="noreferrer">packages/core/version.ts:405</a>
</p>


### resolveDependency

```ts
resolveDependency(path: MinecraftLocation, version: string, platform: Platform= ...): Promise<PartialResolvedVersion[]>
```
Resolve the dependencies of a minecraft version
#### Parameters

- **path**: `MinecraftLocation`
The path of minecraft
- **version**: `string`
The version id
- **platform**: `Platform`
#### Return Type

- `Promise<PartialResolvedVersion[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L598" target="_blank" rel="noreferrer">packages/core/version.ts:598</a>
</p>


### resolveLibraries

```ts
resolveLibraries(libs: Library[], platform: Platform= ...): ResolvedLibrary[]
```
Resolve all these library and filter out os specific libs
#### Parameters

- **libs**: `Library[]`
All raw lib
- **platform**: `Platform`
The platform
#### Return Type

- `ResolvedLibrary[]`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L708" target="_blank" rel="noreferrer">packages/core/version.ts:708</a>
</p>


### resolveLibrary

```ts
resolveLibrary(lib: Library, platform: Platform= ...): ResolvedLibrary | undefined
```
#### Parameters

- **lib**: `Library`
- **platform**: `Platform`
#### Return Type

- `ResolvedLibrary | undefined`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L649" target="_blank" rel="noreferrer">packages/core/version.ts:649</a>
</p>


## ⏩ Type Aliases

### LaunchArgument

```ts
LaunchArgument: string | { rules?: Rule[]; value: string | string[] }
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L308" target="_blank" rel="noreferrer">packages/core/version.ts:308</a>
</p>


### Library

```ts
Library: NormalLibrary | NativeLibrary | PlatformSpecificLibrary | LegacyLibrary
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L306" target="_blank" rel="noreferrer">packages/core/version.ts:306</a>
</p>


