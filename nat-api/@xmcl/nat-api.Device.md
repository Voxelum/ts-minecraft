# Class Device

## 🏭 Constructors

### constructor

```ts
Device(url: string): Device
```
#### Parameters

- **url**: `string`
#### Return Type

- `Device`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/device.ts#L75" target="_blank" rel="noreferrer">packages/nat-api/lib/device.ts:75</a>
</p>


## 🏷️ Properties

### services

```ts
services: string[]
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/device.ts#L67" target="_blank" rel="noreferrer">packages/nat-api/lib/device.ts:67</a>
</p>


### url <Badge type="tip" text="readonly" />

```ts
url: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/device.ts#L75" target="_blank" rel="noreferrer">packages/nat-api/lib/device.ts:75</a>
</p>


## 🔧 Methods

### connectDevice

```ts
connectDevice(): Promise<DeviceInfo>
```
#### Return Type

- `Promise<DeviceInfo>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/device.ts#L84" target="_blank" rel="noreferrer">packages/nat-api/lib/device.ts:84</a>
</p>


### run

```ts
run(action: string, args: Record<string, undefined | string | number>): Promise<any>
```
#### Parameters

- **action**: `string`
- **args**: `Record<string, undefined | string | number>`
#### Return Type

- `Promise<any>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nat-api/lib/device.ts#L115" target="_blank" rel="noreferrer">packages/nat-api/lib/device.ts:115</a>
</p>


