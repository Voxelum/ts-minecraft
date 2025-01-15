# Namespace LibraryInfo

## 🏭 Functions

### resolve

```ts
resolve(lib: string | Library | ResolvedLibrary): LibraryInfo
```
Get the base info of the library from its name
#### Parameters

- **lib**: `string | Library | ResolvedLibrary`
The name of library or the library itself
#### Return Type

- `LibraryInfo`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L191" target="_blank" rel="noreferrer">packages/core/version.ts:191</a>
</p>


### resolveFromPath

```ts
resolveFromPath(path: string): LibraryInfo
```
Resolve the library info from the maven path.
#### Parameters

- **path**: `string`
The library path. It should look like ``net/minecraftforge/forge/1.0/forge-1.0.jar``
#### Return Type

- `LibraryInfo`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/version.ts#L148" target="_blank" rel="noreferrer">packages/core/version.ts:148</a>
</p>


