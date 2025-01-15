# Class PmpClient

## 🏭 Constructors

### constructor

```ts
PmpClient(gateway: string, socket: Socket): PmpClient
```
#### Parameters

- **gateway**: `string`
- **socket**: `Socket`
#### Return Type

- `PmpClient`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/pmp.ts#L56" target="_blank" rel="noreferrer">packages/nat-api/lib/pmp.ts:56</a>
</p>


## 🏷️ Properties

### gateway <Badge type="tip" text="readonly" />

```ts
gateway: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/pmp.ts#L56" target="_blank" rel="noreferrer">packages/nat-api/lib/pmp.ts:56</a>
</p>


### socket <Badge type="tip" text="readonly" />

```ts
socket: Socket
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/pmp.ts#L56" target="_blank" rel="noreferrer">packages/nat-api/lib/pmp.ts:56</a>
</p>


## 🔧 Methods

### close

```ts
close(): void
```
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/pmp.ts#L87" target="_blank" rel="noreferrer">packages/nat-api/lib/pmp.ts:87</a>
</p>


### externalIp

```ts
externalIp(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/pmp.ts#L82" target="_blank" rel="noreferrer">packages/nat-api/lib/pmp.ts:82</a>
</p>


### map

```ts
map(opts: PmpMapOptions): Promise<void>
```
#### Parameters

- **opts**: `PmpMapOptions`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/pmp.ts#L60" target="_blank" rel="noreferrer">packages/nat-api/lib/pmp.ts:60</a>
</p>


### unmap

```ts
unmap(opts: PmpMapOptions): Promise<void>
```
#### Parameters

- **opts**: `PmpMapOptions`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/pmp.ts#L76" target="_blank" rel="noreferrer">packages/nat-api/lib/pmp.ts:76</a>
</p>


