# Class UpnpClient

## 🏭 Constructors

### constructor

```ts
UpnpClient(ssdp: Ssdp): UpnpClient
```
#### Parameters

- **ssdp**: `Ssdp`
#### Return Type

- `UpnpClient`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/upnp.ts#L72" target="_blank" rel="noreferrer">packages/nat-api/lib/upnp.ts:72</a>
</p>


## 🏷️ Properties

### timeout <Badge type="tip" text="readonly" />

```ts
timeout: number
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/upnp.ts#L64" target="_blank" rel="noreferrer">packages/nat-api/lib/upnp.ts:64</a>
</p>


## 🔧 Methods

### destroy

```ts
destroy(): void
```
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/upnp.ts#L264" target="_blank" rel="noreferrer">packages/nat-api/lib/upnp.ts:264</a>
</p>


### externalIp

```ts
externalIp(): Promise<string>
```
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/upnp.ts#L201" target="_blank" rel="noreferrer">packages/nat-api/lib/upnp.ts:201</a>
</p>


### findGateway

```ts
findGateway(): Promise<{ address: AddressInfo; device: Device }>
```
#### Return Type

- `Promise<{ address: AddressInfo; device: Device }>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/upnp.ts#L220" target="_blank" rel="noreferrer">packages/nat-api/lib/upnp.ts:220</a>
</p>


### getMappings

```ts
getMappings(options: GetMappingOptions= {}): Promise<MappingInfo[]>
```
#### Parameters

- **options**: `GetMappingOptions`
#### Return Type

- `Promise<MappingInfo[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/upnp.ts#L139" target="_blank" rel="noreferrer">packages/nat-api/lib/upnp.ts:139</a>
</p>


### map

```ts
map(options: UpnpMapOptions): Promise<void>
```
#### Parameters

- **options**: `UpnpMapOptions`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/upnp.ts#L77" target="_blank" rel="noreferrer">packages/nat-api/lib/upnp.ts:77</a>
</p>


### unmap

```ts
unmap(options: UpnpUnmapOptions): Promise<boolean>
```
#### Parameters

- **options**: `UpnpUnmapOptions`
#### Return Type

- `Promise<boolean>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/upnp.ts#L109" target="_blank" rel="noreferrer">packages/nat-api/lib/upnp.ts:109</a>
</p>


