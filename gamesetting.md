# Gamesetting Module

[![npm version](https://img.shields.io/npm/v/@xmcl/gamesetting.svg)](https://www.npmjs.com/package/@xmcl/gamesetting)
[![Downloads](https://img.shields.io/npm/dm/@xmcl/gamesetting.svg)](https://npmjs.com/@xmcl/gamesetting)
[![Install size](https://packagephobia.now.sh/badge?p=@xmcl/gamesetting)](https://packagephobia.now.sh/result?p=@xmcl/gamesetting)
[![npm](https://img.shields.io/npm/l/@xmcl/minecraft-launcher-core.svg)](https://github.com/voxelum/minecraft-launcher-core-node/blob/master/LICENSE)
[![Build Status](https://github.com/voxelum/minecraft-launcher-core-node/workflows/Build/badge.svg)](https://github.com/Voxelum/minecraft-launcher-core-node/actions?query=workflow%3ABuild)

Provide function to parse Minecraft game settings

## Usage 

### Parse GameSetting (options.txt)

Serialize/Deserialize the minecraft game setting string.

```ts
import { GameSetting } from '@xmcl/gamesetting'
const settingString;
const setting: GameSetting = GameSetting.parse(settingString);
const string: string = GameSetting.stringify(setting);
```

## 🏳️ Enums

<div class="definition-grid enum"><a href="gamesetting/@xmcl/gamesetting.AmbientOcclusion">AmbientOcclusion</a><a href="gamesetting/@xmcl/gamesetting.Difficulty">Difficulty</a><a href="gamesetting/@xmcl/gamesetting.KeyCode">KeyCode</a><a href="gamesetting/@xmcl/gamesetting.Particles">Particles</a></div>

## 🏭 Functions

### getDefaultFrame

```ts
getDefaultFrame(): FullFrame
```
Get the default values in options.txt.
#### Return Type

- `FullFrame`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L278" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:278</a>
</p>


### parse

```ts
parse(str: string, strict: boolean): GameSetting | Frame
```
Parse raw game setting options.txt content
#### Parameters

- **str**: `string`
the options.txt content
- **strict**: `boolean`
strictly follow the current version of options format (outdate version might cause problem. If your options.txt is new one with new fields, don't turn on this)
#### Return Type

- `GameSetting | Frame`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L346" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:346</a>
</p>


### stringify

```ts
stringify(setting: any, original: string, eol: string= '\n'): string
```
Generate text format game setting for options.txt file.
#### Parameters

- **setting**: `any`
The game setting object
- **original**: `string`

- **eol**: `string`
The end of line character, default is ``\n``
#### Return Type

- `string`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L423" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:423</a>
</p>



## 🏷️ Variables

### Graphics <Badge type="tip" text="const" />

```ts
Graphics: Readonly<{ Fancy: true; Fast: false }> = ...
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L30" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:30</a>
</p>


### RenderClouds <Badge type="tip" text="const" />

```ts
RenderClouds: Readonly<{ Fancy: true; Fast: "fast"; Off: false }> = ...
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L32" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:32</a>
</p>


### RenderDistances <Badge type="tip" text="const" />

```ts
RenderDistances: Readonly<{ Extreme: 32; Far: 16; Normal: 8; Short: 4; Tiny: 2 }> = ...
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L29" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:29</a>
</p>



## ⏩ Type Aliases

### Frame

```ts
Frame: Partial<FullFrame>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L273" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:273</a>
</p>


### FullFrame

```ts
FullFrame: typeof DEFAULT_FRAME
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L272" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:272</a>
</p>


### GameSetting

```ts
GameSetting: ReturnType<typeof getDefaultFrame>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L442" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:442</a>
</p>


### Graphic

```ts
Graphic: boolean
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L31" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:31</a>
</p>


### HotKeys

```ts
HotKeys: "attack" | "use" | "forward" | "left" | "back" | "right" | "jump" | "sneak" | "sprint" | "drop" | "inventory" | "chat" | "playerlist" | "pickItem" | "command" | "screenshot" | "togglePerspective" | "smoothCamera" | "fullscreen" | "spectatorOutlines" | "swapHands" | "saveToolbarActivator" | "loadToolbarActivator" | "advancements" | "hotbar.1" | "hotbar.2" | "hotbar.3" | "hotbar.4" | "hotbar.5" | "hotbar.6" | "hotbar.7" | "hotbar.8" | "hotbar.9"
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L306" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:306</a>
</p>


### MipmapLevel

```ts
MipmapLevel: 0 | 1 | 2 | 3 | 4
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L27" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:27</a>
</p>


### ModelPart

```ts
ModelPart: "cape" | "jacket" | "left_sleeve" | "right_sleeve" | "left_pants_leg" | "right_pants_leg" | "hat"
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L285" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:285</a>
</p>


### RenderCloud

```ts
RenderCloud: true | false | "fast"
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L33" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:33</a>
</p>


### RenderDistance

```ts
RenderDistance: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L28" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:28</a>
</p>


### SoundCategories

```ts
SoundCategories: "master" | "music" | "record" | "weather" | "block" | "hostile" | "neutral" | "player" | "ambient" | "voice"
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/gamesetting/index.ts#L294" target="_blank" rel="noreferrer">packages/gamesetting/index.ts:294</a>
</p>



