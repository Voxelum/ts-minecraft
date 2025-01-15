# Resourcepack Module

[![npm version](https://img.shields.io/npm/v/@xmcl/resourcepack.svg)](https://www.npmjs.com/package/@xmcl/resourcepack)
[![Downloads](https://img.shields.io/npm/dm/@xmcl/resourcepack.svg)](https://npmjs.com/@xmcl/resourcepack)
[![Install size](https://packagephobia.now.sh/badge?p=@xmcl/resourcepack)](https://packagephobia.now.sh/result?p=@xmcl/resourcepack)
[![npm](https://img.shields.io/npm/l/@xmcl/minecraft-launcher-core.svg)](https://github.com/voxelum/minecraft-launcher-core-node/blob/master/LICENSE)
[![Build Status](https://github.com/voxelum/minecraft-launcher-core-node/workflows/Build/badge.svg)](https://github.com/Voxelum/minecraft-launcher-core-node/actions?query=workflow%3ABuild)

Provide function to read resource pack.

## Usage

### Parse ResourcePack Basic Info

Read pack metadata from file:

```ts
import { ResourcePack, PackMeta } from "@xmcl/resourcepack"
const fileFullPath = "path/to/pack/some-pack.zip";
const pack: PackMeta.Pack = await ResourcePack.readPackMeta(fileFullPath);
// or you want read from folder, same function call
const dirFullPath = "path/to/pack/some-pack";
const fromFolder: PackMeta.Pack = await ResourcePack.readPackMeta(dirFullPath);

// if you have already read the file, don't want to reopen the file
// the file path will be only used for resource pack name
const fileContentBuffer: Buffer;
const fromBuff: PackMeta.Pack = await ResourcePack.readPackMeta(fileFullPath, fileContentBuffer);
```

Read pack icon:

```ts
import { ResourcePack, PackMeta } from "@xmcl/resourcepack"
const fileFullPath = "path/to/pack/some-pack.zip";
const pack: Uint8Array = await ResourcePack.readIcon(fileFullPath);
```

Put them together in efficent way (don't open resource pack again and again):

```ts
import { ResourcePack, PackMeta } from "@xmcl/resourcepack"
const fileFullPath = "path/to/pack/some-pack.zip";
const res = await ResourcePack.open(fileFullPath);
const pack: PackMeta.Pack = await ResourcePack.readPackMeta(res);
const icon: Uint8Array = await ResourcePack.readIcon(res);

// or

const pack: PackMeta.Pack = await res.info();
const icon: Uint8Array = await res.icon();
```

### Read ResourcePack Content

You can read resource pack content just like Minecraft:

```ts
import { ResourcePack, ResourceLocation } from "@xmcl/resourcepack"
const fileFullPath = "path/to/pack/some-pack.zip";
const pack: ResourcePack = await ResourcePack.open(fileFullPath);

// this is almost the same with original Minecraft
// this get the dirt texture png -> minecraft:textures/block/dirt.png
const resLocation: ResourceLocation = ResourceLocation.ofTexturePath("block/dirt");

console.log(resLocation); // minecraft:textures/block/dirt.png

const resource: Resource | undefined = await pack.get(resLocation);
if (resource) {
    const binaryContent: Uint8Array = await resource.read();
    // this is the metadata for resource, like animated texture metadata.
    const metadata: PackMeta = await resource.readMetadata();
}
```

### Load Minecraft Block Model

You can use this to load Minecraft block model and texture just like Minecraft.

```ts
import { ResourcePack, Resource, BlockModel,ResourceManager, ModelLoader } from "@xmcl/resourcepack"; 
import { openFileSystem } from "@xmcl/system";

const man = new ResourceManager();
const resourcePack = new ResourcePack(await openFileSystem("/path/to/resource-pack.zip"));
// setup resource pack
man.addResourcePack(resourcePack);

const loader = new ModelLoader(man);

await loader.loadModel("block/grass"); // load grass model
await loader.loadModel("block/stone"); // load stone model
// ... load whatever you want model

const textures: Record<string, Resource> = loader.textures;
const models: Record<string, BlockModel.Resolved> = loader.models;

const resolvedModel: BlockModel.Resolved = models["block/grass"];
```

### Load Minecraft Resource

You can use this module in nodejs/electron:

```ts
import { openFileSystem } from "@xmcl/system"; 
import { ResourcePack, Resource, ResourceManager, ResourceLocation  } from "@xmcl/resourcepack"; 
const manager: ResourceManager = new ResourceManager();

// add a resource source which load resource from file
await manager.addResourcePack(new ResourcePack(await openFileSystem('/base/path')));

// load grass block model resource; it will load file at `assets/${location.domain}/${location.path}`
// which is '/base/path/assets/minecraft/models/block/grass.json'
// same logic with minecraft
const resource = await manager.get(ResourceLocation.ofModelPath('block/grass'));

const content: string = await resource.read("utf-8"); // your resource content
const modelJSON = JSON.parse(content);
```

The resource manager will do the simplest cache for same resource location.

You can clear the cache by:

```ts
manager.clearCache();
```

## 🧾 Classes

<div class="definition-grid class"><a href="resourcepack/@xmcl/resourcepack.ModelLoader">ModelLoader</a><a href="resourcepack/@xmcl/resourcepack.ResourceLocation">ResourceLocation</a><a href="resourcepack/@xmcl/resourcepack.ResourceManager">ResourceManager</a><a href="resourcepack/@xmcl/resourcepack.ResourcePack">ResourcePack</a></div>

## 🤝 Interfaces

<div class="definition-grid interface"><a href="resourcepack/@xmcl/resourcepack.BlockModel">BlockModel</a><a href="resourcepack/@xmcl/resourcepack.PackMeta">PackMeta</a><a href="resourcepack/@xmcl/resourcepack.Resource">Resource</a><a href="resourcepack/@xmcl/resourcepack.ResourceLoader">ResourceLoader</a><a href="resourcepack/@xmcl/resourcepack.ResourcePackWrapper">ResourcePackWrapper</a></div>

## 🗃️ Namespaces

<div class="definition-grid namespace"><a href="resourcepack/@xmcl/resourcepack.BlockModel">BlockModel</a><a href="resourcepack/@xmcl/resourcepack.PackMeta">PackMeta</a></div>

## 🏭 Functions

### readIcon

```ts
readIcon(resourcePack: string | Uint8Array | FileSystem): Promise<Uint8Array>
```
Read the resource pack icon png binary.
#### Parameters

- **resourcePack**: `string | Uint8Array | FileSystem`
The absolute path of the resource pack file, or a buffer, or a opened resource pack.
#### Return Type

- `Promise<Uint8Array>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/index.ts#L47" target="_blank" rel="noreferrer">packages/resourcepack/index.ts:47</a>
</p>


### readPackMeta

```ts
readPackMeta(resourcePack: string | Uint8Array | FileSystem): Promise<Pack>
```
Read the resource pack metadata from zip file or directory.

If you have already read the data of the zip file, you can pass it as the second parameter. The second parameter will be ignored on reading directory.
#### Parameters

- **resourcePack**: `string | Uint8Array | FileSystem`
The absolute path of the resource pack file, or a buffer, or a opened resource pack.
#### Return Type

- `Promise<Pack>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/index.ts#L27" target="_blank" rel="noreferrer">packages/resourcepack/index.ts:27</a>
</p>


### readPackMetaAndIcon

```ts
readPackMetaAndIcon(resourcePack: string | Uint8Array | FileSystem): Promise<{ icon: undefined | Uint8Array; metadata: Pack }>
```
Read both metadata and icon
#### Parameters

- **resourcePack**: `string | Uint8Array | FileSystem`
#### Return Type

- `Promise<{ icon: undefined | Uint8Array; metadata: Pack }>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/index.ts#L62" target="_blank" rel="noreferrer">packages/resourcepack/index.ts:62</a>
</p>



