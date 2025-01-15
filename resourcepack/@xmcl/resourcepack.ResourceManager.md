# Class ResourceManager

The resource manager just like Minecraft. Design to be able to use in both nodejs and browser environment.
## 🏭 Constructors

### constructor

```ts
ResourceManager(list: ResourcePackWrapper[]= []): ResourceManager<T>
```
#### Parameters

- **list**: `ResourcePackWrapper[]`
The list order is just like the order in options.txt. The last element is the highest priority one.
The resource will load from the last one to the first one.
#### Return Type

- `ResourceManager<T>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourceManager.ts#L22" target="_blank" rel="noreferrer">packages/resourcepack/resourceManager.ts:22</a>
</p>


## 🏷️ Properties

### list <Badge type="tip" text="public" />

```ts
list: ResourcePackWrapper[] = []
```
The list order is just like the order in options.txt. The last element is the highest priority one.
The resource will load from the last one to the first one.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourceManager.ts#L27" target="_blank" rel="noreferrer">packages/resourcepack/resourceManager.ts:27</a>
</p>


## 🔑 Accessors

### allResourcePacks

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourceManager.ts#L29" target="_blank" rel="noreferrer">packages/resourcepack/resourceManager.ts:29</a>
</p>


## 🔧 Methods

### addResourcePack

```ts
addResourcePack(resourcePack: ResourcePack): Promise<{ domains: string[]; info: Pack; source: ResourcePack }>
```
Add a new resource source as the first priority of the resource list.
#### Parameters

- **resourcePack**: `ResourcePack`
#### Return Type

- `Promise<{ domains: string[]; info: Pack; source: ResourcePack }>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourceManager.ts#L34" target="_blank" rel="noreferrer">packages/resourcepack/resourceManager.ts:34</a>
</p>


### clear

```ts
clear(): ResourcePackWrapper[]
```
Clear all resource packs in this manager
#### Return Type

- `ResourcePackWrapper[]`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourceManager.ts#L56" target="_blank" rel="noreferrer">packages/resourcepack/resourceManager.ts:56</a>
</p>


### get

```ts
get(location: ResourceLocation): Promise<undefined | Resource>
```
Get the resource in that location. This will walk through current resource source list to load the resource.
#### Parameters

- **location**: `ResourceLocation`
The resource location
#### Return Type

- `Promise<undefined | Resource>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourceManager.ts#L77" target="_blank" rel="noreferrer">packages/resourcepack/resourceManager.ts:77</a>
</p>


### remove

```ts
remove(index: number): ResourcePackWrapper
```
#### Parameters

- **index**: `number`
#### Return Type

- `ResourcePackWrapper`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourceManager.ts#L49" target="_blank" rel="noreferrer">packages/resourcepack/resourceManager.ts:49</a>
</p>


### swap

```ts
swap(first: number, second: number): void
```
Swap the resource source priority.
#### Parameters

- **first**: `number`
- **second**: `number`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourceManager.ts#L63" target="_blank" rel="noreferrer">packages/resourcepack/resourceManager.ts:63</a>
</p>


