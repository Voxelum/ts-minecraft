# Game Data

[![npm version](https://img.shields.io/npm/v/@xmcl/world.svg)](https://www.npmjs.com/package/@xmcl/world)
[![Downloads](https://img.shields.io/npm/dm/@xmcl/world.svg)](https://npmjs.com/@xmcl/world)
[![Install size](https://packagephobia.now.sh/badge?p=@xmcl/world)](https://packagephobia.now.sh/result?p=@xmcl/world)
[![npm](https://img.shields.io/npm/l/@xmcl/minecraft-launcher-core.svg)](https://github.com/voxelum/minecraft-launcher-core-node/blob/master/LICENSE)
[![Build Status](https://github.com/voxelum/minecraft-launcher-core-node/workflows/Build/badge.svg)](https://github.com/Voxelum/minecraft-launcher-core-node/actions?query=workflow%3ABuild)

Provides functions to parse Minecraft game data like level data, server data.

## Usage

### Save/World Data Loading

Read the level info from a buffer.

```ts
import { WorldReader, LevelDataFrame } from '@xmcl/game-data'
const worldSaveFolder: string;
const reader: WorldReader = await WorldReader.create(worldSaveFolder);
const levelData: LevelDataFrame = await reader.getLevelData();
```

***Preview*** Read the region data, this feature is not tested yet, but the api will look like this

```ts
import { WorldReader, RegionDataFrame, RegionReader } from "@xmcl/game-data";
const worldSaveFolder: string;
const reader: WorldReader = await WorldReader.create(worldSaveFolder);
const chunkX: number;
const chunkZ: number;
const region: RegionDataFrame = await reader.getRegionData(chunkX, chunkZ);
```

## Some Important Concepts

These concept might help you to understand how to use the API.

### Level

The metadata of one Minecraft save. It contains the info like `when the world is created`, `what is the name of it`, or other metadata.

In code, they are represented by `LevelDataFrame`.

### Region

The Minecraft blocks data are stored in region file (.mca). One region contains 16 sections. Each section contains 16x16x16 blockstates, biome, entities, tileentities and other data. 

For the Minecraft version < 1.13, the mca NBT data store the **global** blockstate ids in `Data` and `Blocks` fields.

For the Minecraft version >= 1.13, the mca NBT data store the **local** blockstate ids in `BlockStates` and a mapping to map the **local** blockstate ids to `BlockState` object.

#### In-Chunk Coord

One chunk (section) in region contains 4096 (16x16x16) blockstates, and they are indexed by [0, 4096). The mapping from x, y, z to index is `(x, y, z) -> y << 8 | z << 4 | x`.


### Read and Write Server Info

```ts
import { readInfo, writeInfo, ServerInfo } from "@xmcl/game-data";

const seversDatBuffer: Buffer; // this is the servers.dat under .minecraft folder
const infos: ServerInfo[] = await readServerInfo(seversDatBuffer);
const info: ServerInfo = infos[0];

// info.ip -> server ip
// info.name -> server name
```

## 🧾 Classes

<div class="definition-grid class"><a href="game-data/@xmcl/game-data.ServerInfo">ServerInfo</a><a href="game-data/@xmcl/game-data.ServersData">ServersData</a><a href="game-data/@xmcl/game-data.WorldReader">WorldReader</a></div>

## 🤝 Interfaces

<div class="definition-grid interface"><a href="game-data/@xmcl/game-data.AdvancementDataFrame">AdvancementDataFrame</a><a href="game-data/@xmcl/game-data.BlockStateData">BlockStateData</a><a href="game-data/@xmcl/game-data.ItemStackDataFrame">ItemStackDataFrame</a><a href="game-data/@xmcl/game-data.LevelDataFrame">LevelDataFrame</a><a href="game-data/@xmcl/game-data.PlayerDataFrame">PlayerDataFrame</a><a href="game-data/@xmcl/game-data.RegionDataFrame">RegionDataFrame</a><a href="game-data/@xmcl/game-data.TileEntityDataFrame">TileEntityDataFrame</a></div>

## 🗃️ Namespaces

<div class="definition-grid namespace"><a href="game-data/@xmcl/game-data.RegionReader">RegionReader</a></div>

## 🏳️ Enums

<div class="definition-grid enum"><a href="game-data/@xmcl/game-data.GameType">GameType</a></div>

## 🏭 Functions

### getCoordFromIndex

```ts
getCoordFromIndex(index: number): { x: number; y: number; z: number }
```
Get in-chunk coordination from chunk index
#### Parameters

- **index**: `number`
The index number in chunk
#### Return Type

- `{ x: number; y: number; z: number }`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/level.ts#L215" target="_blank" rel="noreferrer">packages/game-data/level.ts:215</a>
</p>


### getIndexInChunk

```ts
getIndexInChunk(x: number, y: number, z: number): ChunkIndex
```
Get chunk index from position.
All x, y, z should be in range [0, 16)
#### Parameters

- **x**: `number`
The position x. Should be in range [0, 16)
- **y**: `number`
The position y. Should be in range [0, 16)
- **z**: `number`
The position z. Should be in range [0, 16)
#### Return Type

- `ChunkIndex`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/level.ts#L207" target="_blank" rel="noreferrer">packages/game-data/level.ts:207</a>
</p>


### readServerInfo

```ts
readServerInfo(buff: Uint8Array): Promise<ServerInfo[]>
```
Read the server information from the binary data of .minecraft/server.dat file, which stores the local known server host information.
#### Parameters

- **buff**: `Uint8Array`
The binary data of .minecraft/server.dat
#### Return Type

- `Promise<ServerInfo[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/serverDat.ts#L30" target="_blank" rel="noreferrer">packages/game-data/serverDat.ts:30</a>
</p>


### readServerInfoSync

```ts
readServerInfoSync(buff: Uint8Array): ServerInfo[]
```
Read the server information from the binary data of .minecraft/server.dat file, which stores the local known server host information.
#### Parameters

- **buff**: `Uint8Array`
The binary data of .minecraft/server.dat
#### Return Type

- `ServerInfo[]`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/serverDat.ts#L51" target="_blank" rel="noreferrer">packages/game-data/serverDat.ts:51</a>
</p>


### writeServerInfo

```ts
writeServerInfo(infos: ServerInfo[]): Promise<Uint8Array>
```
Write the information to NBT format used by .minecraft/server.dat file.
#### Parameters

- **infos**: `ServerInfo[]`
The array of server information.
#### Return Type

- `Promise<Uint8Array>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/serverDat.ts#L40" target="_blank" rel="noreferrer">packages/game-data/serverDat.ts:40</a>
</p>


### writeServerInfoSync

```ts
writeServerInfoSync(infos: ServerInfo[]): Uint8Array
```
Write the information to NBT format used by .minecraft/server.dat file.
#### Parameters

- **infos**: `ServerInfo[]`
The array of server information.
#### Return Type

- `Uint8Array`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/serverDat.ts#L61" target="_blank" rel="noreferrer">packages/game-data/serverDat.ts:61</a>
</p>



## ⏩ Type Aliases

### ChunkIndex

```ts
ChunkIndex: number
```
The chunk index is a number in range [0, 4096), which is mapped position from (0,0,0) to (16,16,16) inside the chunk.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/level.ts#L197" target="_blank" rel="noreferrer">packages/game-data/level.ts:197</a>
</p>


### LegacyRegionSectionDataFrame

```ts
LegacyRegionSectionDataFrame: { Add: number[]; BlockLight: number[]; Blocks: number[]; Data: number[]; SkyLight: number[]; Y: number }
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/level.ts#L580" target="_blank" rel="noreferrer">packages/game-data/level.ts:580</a>
</p>


### NewRegionSectionDataFrame

```ts
NewRegionSectionDataFrame: { block_states?: { data: bigint[]; palette: BlockStateData[] }; BlockLight: number[]; BlockStates?: bigint[]; Data: number[]; Palette?: BlockStateData[]; SkyLight: number[]; Y: number }
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/level.ts#L588" target="_blank" rel="noreferrer">packages/game-data/level.ts:588</a>
</p>


### RegionSectionDataFrame

```ts
RegionSectionDataFrame: LegacyRegionSectionDataFrame | NewRegionSectionDataFrame
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/game-data/level.ts#L600" target="_blank" rel="noreferrer">packages/game-data/level.ts:600</a>
</p>



