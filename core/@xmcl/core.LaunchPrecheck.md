# Namespace LaunchPrecheck

## 🏭 Functions

### checkLibraries

```ts
checkLibraries(resource: MinecraftFolder, version: ResolvedVersion, option: LaunchOption): Promise<void>
```
Quick check if there are missed libraries.
#### Parameters

- **resource**: `MinecraftFolder`
- **version**: `ResolvedVersion`
- **option**: `LaunchOption`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L282" target="_blank" rel="noreferrer">packages/core/launch.ts:282</a>
</p>


### checkNatives

```ts
checkNatives(resource: MinecraftFolder, version: ResolvedVersion, option: LaunchOption): Promise<void>
```
Ensure the native are correctly extracted in place.

It will check native root located in [LaunchOption.nativeRoot](#@xmcl/core.LaunchOption.nativeRoot) if it's presented.
Or, it will use the ``<version-id>-native`` under version folder as native root to check.

This will automatically extract native if there is not native extracted.
#### Parameters

- **resource**: `MinecraftFolder`
The minecraft directory to extract native
- **version**: `ResolvedVersion`
- **option**: `LaunchOption`
If the native root presented here, it will use the root here.
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L306" target="_blank" rel="noreferrer">packages/core/launch.ts:306</a>
</p>


### checkVersion

```ts
checkVersion(resource: MinecraftFolder, version: ResolvedVersion, option: LaunchOption): Promise<void>
```
Quick check if Minecraft version jar is corrupted
#### Parameters

- **resource**: `MinecraftFolder`
- **version**: `ResolvedVersion`
- **option**: `LaunchOption`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L267" target="_blank" rel="noreferrer">packages/core/launch.ts:267</a>
</p>


### linkAssets

```ts
linkAssets(resource: MinecraftFolder, version: ResolvedVersion, option: LaunchOption): Promise<void>
```
Link assets to the assets/virtual/legacy.
#### Parameters

- **resource**: `MinecraftFolder`
- **version**: `ResolvedVersion`
- **option**: `LaunchOption`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L239" target="_blank" rel="noreferrer">packages/core/launch.ts:239</a>
</p>


## 🏷️ Variables

### Default <Badge type="tip" text="const" />

```ts
Default: readonly LaunchPrecheck[] = LaunchPrecheck.DEFAULT_PRECHECKS
```

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L234" target="_blank" rel="noreferrer">packages/core/launch.ts:234</a>
</p>


### DEFAULT_PRECHECKS <Badge type="tip" text="const" />

```ts
DEFAULT_PRECHECKS: readonly LaunchPrecheck[] = ...
```
The default launch precheck. It will check version jar, libraries and natives.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L229" target="_blank" rel="noreferrer">packages/core/launch.ts:229</a>
</p>


