# Class MinecraftLanDiscover

## 🏭 Constructors

### constructor

```ts
MinecraftLanDiscover(type: "udp4" | "udp6"= 'udp4'): MinecraftLanDiscover
```
#### Parameters

- **type**: `"udp4" | "udp6"`
#### Return Type

- `MinecraftLanDiscover`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L25" target="_blank" rel="noreferrer">packages/client/lan.ts:25</a>
</p>


## 🏷️ Properties

### socket <Badge type="tip" text="readonly" />

```ts
socket: Socket
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L16" target="_blank" rel="noreferrer">packages/client/lan.ts:16</a>
</p>


## 🔑 Accessors

### isReady

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L21" target="_blank" rel="noreferrer">packages/client/lan.ts:21</a>
</p>


## 🔧 Methods

### addListener

```ts
addListener(channel: "discover", listener: (event: LanServerInfo & { remote: RemoteInfo }) => void): this
```
#### Parameters

- **channel**: `"discover"`
- **listener**: `(event: LanServerInfo & { remote: RemoteInfo }) => void`
#### Return Type

- `this`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L11" target="_blank" rel="noreferrer">packages/client/lan.ts:11</a>
</p>


### bind

```ts
bind(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L67" target="_blank" rel="noreferrer">packages/client/lan.ts:67</a>
</p>


### broadcast

```ts
broadcast(inf: LanServerInfo): Promise<number>
```
#### Parameters

- **inf**: `LanServerInfo`
#### Return Type

- `Promise<number>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L58" target="_blank" rel="noreferrer">packages/client/lan.ts:58</a>
</p>


### destroy

```ts
destroy(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L77" target="_blank" rel="noreferrer">packages/client/lan.ts:77</a>
</p>


### on

```ts
on(channel: "discover", listener: (event: LanServerInfo & { remote: RemoteInfo }) => void): this
```
#### Parameters

- **channel**: `"discover"`
- **listener**: `(event: LanServerInfo & { remote: RemoteInfo }) => void`
#### Return Type

- `this`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L9" target="_blank" rel="noreferrer">packages/client/lan.ts:9</a>
</p>


### once

```ts
once(channel: "discover", listener: (event: LanServerInfo & { remote: RemoteInfo }) => void): this
```
#### Parameters

- **channel**: `"discover"`
- **listener**: `(event: LanServerInfo & { remote: RemoteInfo }) => void`
#### Return Type

- `this`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L10" target="_blank" rel="noreferrer">packages/client/lan.ts:10</a>
</p>


### removeListener

```ts
removeListener(channel: "discover", listener: (event: LanServerInfo & { remote: RemoteInfo }) => void): this
```
#### Parameters

- **channel**: `"discover"`
- **listener**: `(event: LanServerInfo & { remote: RemoteInfo }) => void`
#### Return Type

- `this`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/lan.ts#L12" target="_blank" rel="noreferrer">packages/client/lan.ts:12</a>
</p>


