# Interface ForgeModTOMLData

This file defines the metadata of your mod. Its information may be viewed by users from the main screen of the game through the Mods button. A single info file can describe several mods.

The mods.toml file is formatted as TOML, the example mods.toml file in the MDK provides comments explaining the contents of the file. It should be stored as src/main/resources/META-INF/mods.toml. A basic mods.toml, describing one mod, may look like this:
## 🏷️ Properties

### authors

```ts
authors: string
```
The authors to this mod
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L176" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:176</a>
</p>


### credits

```ts
credits: string
```
A string that contains any acknowledgements you want to mention
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L172" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:172</a>
</p>


### dependencies

```ts
dependencies: { mandatory: boolean; modId: string; ordering: "NONE" | "BEFORE" | "AFTER"; side: "BOTH" | "CLIENT" | "SERVER"; versionRange: string }[]
```
A list of dependencies of this mod
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L184" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:184</a>
</p>


### description

```ts
description: string
```
A description of this mod
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L180" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:180</a>
</p>


### displayName

```ts
displayName: string
```
The user - friendly name of this mod
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L156" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:156</a>
</p>


### displayURL

```ts
displayURL: string
```
A link to the mod’s homepage
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L164" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:164</a>
</p>


### issueTrackerURL

```ts
issueTrackerURL: string
```
A URL to refer people to when problems occur with this mod
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L196" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:196</a>
</p>


### loaderVersion

```ts
loaderVersion: string
```
A version range to match for said mod loader - for regular FML
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L192" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:192</a>
</p>


### logoFile

```ts
logoFile: string
```
The filename of the mod’s logo.It must be placed in the root resource folder, not in a subfolder
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L168" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:168</a>
</p>


### modid

```ts
modid: string
```
The modid this file is linked to
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L148" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:148</a>
</p>


### modLoader

```ts
modLoader: string
```
The name of the mod loader type to load - for regular FML
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L188" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:188</a>
</p>


### updateJSONURL

```ts
updateJSONURL: string
```
The URL to a version JSON
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L160" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:160</a>
</p>


### version

```ts
version: string
```
The version of the mod.It should be just numbers seperated by dots, ideally conforming to Semantic Versioning
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L152" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:152</a>
</p>


