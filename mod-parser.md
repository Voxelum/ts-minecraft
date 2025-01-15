# Mod Parser

[![npm version](https://img.shields.io/npm/v/@xmcl/mod-parser.svg)](https://www.npmjs.com/package/@xmcl/mod-parser)
[![Downloads](https://img.shields.io/npm/dm/@xmcl/mod-parser.svg)](https://npmjs.com/@xmcl/mod-parser)
[![Install size](https://packagephobia.now.sh/badge?p=@xmcl/mod-parser)](https://packagephobia.now.sh/result?p=@xmcl/mod-parser)
[![npm](https://img.shields.io/npm/l/@xmcl/minecraft-launcher-core.svg)](https://github.com/voxelum/minecraft-launcher-core-node/blob/master/LICENSE)
[![Build Status](https://github.com/voxelum/minecraft-launcher-core-node/workflows/Build/badge.svg)](https://github.com/Voxelum/minecraft-launcher-core-node/actions?query=workflow%3ABuild)

## Usage

### Parse Fabric Mod Metadata

```ts
import { readFabricMod, FabricModMetadata } from "@xmcl/mods";
const modJarBinary = fs.readFileSync("your-fabric.jar");
const metadata: FabricModMetadata = await readFabricMod(modJarBinary);

// or directly read from path
const sameMetadata: FabricModMetadata = await readFabricMod("your-fabric.jar");
```

### Parse Forge Mod/Config

Read the forge mod metadata, including `@Mod` annotation, mcmods.info, and toml metadata.

```ts
import { readForgeMod, ForgeModMetadata } from "@xmcl/mods";
const forgeModJarBuff: Buffer;
const metadata: ForgeModMetadata[] = await readForgeMod(forgeModJarBuff);
const modid = metadata[0].modid; // get modid of first mods
```

If you don't want to read that much (as it will transverse all the file in jar), you can try to use them separately:

```ts
import { resolveFileSystem } from "@xmcl/system";
import { readForgeModJson, readForgeModManifest, readForgeModToml, ForgeModMetadata, readForgeModAsm } from "@xmcl/mods";
const forgeModJarBuff: Buffer;
const fs = await resolveFileSystem(forgeModJarBuff);
// read json
// if this is new mod, this will be empty record {}
const metadata: Record<string, ForgeModMetadata> = await readForgeModJson(fs);
// or read `META-INF/MANIFEST.MF`
const manifest: Record<string, string> = await readForgeModManifest(fs, metadata /* this is optional, to fill the modmetadata if found */);
// read new toml
await readForgeModToml(fs, metadata /* it will fill mods into this param & return it */, manifest /* this is optional */);
// optional step, if the mod is really unstandard, not have mcmod.info and toml, you can use this
// this can identify optifine and in some case, might detect some coremod
// this will go over all file in your jar, it might hit your perf.
await readForgeModAsm(fs, metadata, { manifest });
```


Read the forge mod config file (.cfg)

```ts
import { ForgeConfig } from "@xmcl/mods";
const modConfigString: string;
const config: ForgeConfig = ForgeConfig.parse(modConfigString);
const serializedBack: string = ForgeConfig.stringify(config);
```

### Parse Liteloader Mod

Read .litemod metadata:

```ts
import { LiteloaderModMetadata, readLiteloaderMod } from "@xmcl/mods";
const metadata: LiteloaderModMetadata = await readLiteloaderMod(`${mock}/mods/sample-mod.litemod`);
```

## 🧾 Classes

<div class="definition-grid class"><a href="mod-parser/@xmcl/mod-parser.CorruptedForgeConfigError">CorruptedForgeConfigError</a><a href="mod-parser/@xmcl/mod-parser.ForgeModParseFailedError">ForgeModParseFailedError</a></div>

## 🤝 Interfaces

<div class="definition-grid interface"><a href="mod-parser/@xmcl/mod-parser.DependencyObject">DependencyObject</a><a href="mod-parser/@xmcl/mod-parser.FabricModMetadata">FabricModMetadata</a><a href="mod-parser/@xmcl/mod-parser.ForgeConfig">ForgeConfig</a><a href="mod-parser/@xmcl/mod-parser.ForgeModAnnotationData">ForgeModAnnotationData</a><a href="mod-parser/@xmcl/mod-parser.ForgeModASMData">ForgeModASMData</a><a href="mod-parser/@xmcl/mod-parser.ForgeModMcmodInfo">ForgeModMcmodInfo</a><a href="mod-parser/@xmcl/mod-parser.ForgeModMetadata">ForgeModMetadata</a><a href="mod-parser/@xmcl/mod-parser.ForgeModTOMLData">ForgeModTOMLData</a><a href="mod-parser/@xmcl/mod-parser.LiteloaderModMetadata">LiteloaderModMetadata</a><a href="mod-parser/@xmcl/mod-parser.ManifestMetadata">ManifestMetadata</a><a href="mod-parser/@xmcl/mod-parser.QuiltLoaderData">QuiltLoaderData</a><a href="mod-parser/@xmcl/mod-parser.QuiltModMetadata">QuiltModMetadata</a></div>

## 🗃️ Namespaces

<div class="definition-grid namespace"><a href="mod-parser/@xmcl/mod-parser.ForgeConfig">ForgeConfig</a></div>

## 🏭 Functions

### readFabricMod

```ts
readFabricMod(file: string | Uint8Array | FileSystem): Promise<FabricModMetadata>
```
Read fabric mod metadata json from a jar file or a directory
#### Parameters

- **file**: `string | Uint8Array | FileSystem`
The jar file or directory path. I can also be the binary content of the jar if you have already read the jar.
#### Return Type

- `Promise<FabricModMetadata>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/fabric.ts#L193" target="_blank" rel="noreferrer">packages/mod-parser/fabric.ts:193</a>
</p>


### readForgeMod

```ts
readForgeMod(mod: ForgeModInput): Promise<ForgeModMetadata>
```
Read metadata of the input mod.

This will scan the mcmod.info file, all class file for ``@Mod`` & coremod ``DummyModContainer`` class.
This will also scan the manifest file on ``META-INF/MANIFEST.MF`` for tweak mod.

If the input is totally not a mod. It will throw [NonForgeModFileError].
#### Parameters

- **mod**: `ForgeModInput`
The mod path or data
#### Return Type

- `Promise<ForgeModMetadata>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L685" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:685</a>
</p>


### readForgeModAsm

```ts
readForgeModAsm(mod: ForgeModInput, manifest: Record<string, string>= {}): Promise<ForgeModASMData>
```
Use asm to scan all the class files of the mod. This might take long time to read.
#### Parameters

- **mod**: `ForgeModInput`
- **manifest**: `Record<string, string>`
#### Return Type

- `Promise<ForgeModASMData>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L516" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:516</a>
</p>


### readForgeModJson

```ts
readForgeModJson(mod: ForgeModInput): Promise<ForgeModMcmodInfo[]>
```
Read ``mcmod.info``, ``cccmod.info``, and ``neimod.info`` json file
#### Parameters

- **mod**: `ForgeModInput`
The mod path or buffer or opened file system.
#### Return Type

- `Promise<ForgeModMcmodInfo[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L565" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:565</a>
</p>


### readForgeModManifest

```ts
readForgeModManifest(mod: ForgeModInput, manifestStore: Record<string, any>= {}): Promise<ManifestMetadata | undefined>
```
Read the mod info from ``META-INF/MANIFEST.MF``
#### Parameters

- **mod**: `ForgeModInput`
- **manifestStore**: `Record<string, any>`
#### Return Type

- `Promise<ManifestMetadata | undefined>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L414" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:414</a>
</p>


### readForgeModToml

```ts
readForgeModToml(mod: ForgeModInput, manifest: Record<string, string>, fileName: string= 'mods.toml'): Promise<ForgeModTOMLData[]>
```
Read mod metadata from new toml metadata file.
#### Parameters

- **mod**: `ForgeModInput`
- **manifest**: `Record<string, string>`
- **fileName**: `string`
#### Return Type

- `Promise<ForgeModTOMLData[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/forge.ts#L472" target="_blank" rel="noreferrer">packages/mod-parser/forge.ts:472</a>
</p>


### readLiteloaderMod

```ts
readLiteloaderMod(mod: string | Uint8Array | FileSystem): Promise<LiteloaderModMetadata>
```
#### Parameters

- **mod**: `string | Uint8Array | FileSystem`
#### Return Type

- `Promise<LiteloaderModMetadata>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/liteloader.ts#L20" target="_blank" rel="noreferrer">packages/mod-parser/liteloader.ts:20</a>
</p>


### readQuiltMod

```ts
readQuiltMod(file: string | Uint8Array | FileSystem): Promise<QuiltModMetadata>
```
Read fabric mod metadata json from a jar file or a directory
#### Parameters

- **file**: `string | Uint8Array | FileSystem`
The jar file or directory path. I can also be the binary content of the jar if you have already read the jar.
#### Return Type

- `Promise<QuiltModMetadata>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/mod-parser/quilt.ts#L265" target="_blank" rel="noreferrer">packages/mod-parser/quilt.ts:265</a>
</p>



