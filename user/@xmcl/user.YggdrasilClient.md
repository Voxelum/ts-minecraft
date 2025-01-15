# Class YggdrasilClient

## 🏭 Constructors

### constructor

```ts
YggdrasilClient(api: string, options: YggdrasilClientOptions): YggdrasilClient
```
Create client for official-like api endpoint
#### Parameters

- **api**: `string`
The official-like api endpoint
- **options**: `YggdrasilClientOptions`
#### Return Type

- `YggdrasilClient`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L106" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:106</a>
</p>


## 🏷️ Properties

### api <Badge type="tip" text="public" />

```ts
api: string
```
The official-like api endpoint
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L106" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:106</a>
</p>


### fetch <Badge type="warning" text="protected" />

```ts
fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L98" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:98</a>
</p>


### File <Badge type="warning" text="protected" />

```ts
File: (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag) => File
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L100" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:100</a>
</p>


### FormData <Badge type="warning" text="protected" />

```ts
FormData: (form?: HTMLFormElement, submitter?: null | HTMLElement) => FormData
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L99" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:99</a>
</p>


### headers <Badge type="warning" text="protected" />

```ts
headers: Record<string, string>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L97" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:97</a>
</p>


## 🔧 Methods

### invalidate

```ts
invalidate(accessToken: string, clientToken: string, signal: AbortSignal): Promise<boolean>
```
#### Parameters

- **accessToken**: `string`
- **clientToken**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<boolean>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L126" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:126</a>
</p>


### login

```ts
login(__namedParameters: { clientToken: string; password: string; requestUser?: boolean; username: string }, signal: AbortSignal): Promise<YggrasilAuthentication>
```
#### Parameters

- **__namedParameters**: `{ clientToken: string; password: string; requestUser?: boolean; username: string }`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<YggrasilAuthentication>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L138" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:138</a>
</p>


### refresh

```ts
refresh(__namedParameters: { accessToken: string; clientToken: string; requestUser?: boolean }, signal: AbortSignal): Promise<YggrasilAuthentication>
```
#### Parameters

- **__namedParameters**: `{ accessToken: string; clientToken: string; requestUser?: boolean }`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<YggrasilAuthentication>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L164" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:164</a>
</p>


### validate

```ts
validate(accessToken: string, clientToken: string, signal: AbortSignal): Promise<boolean>
```
#### Parameters

- **accessToken**: `string`
- **clientToken**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<boolean>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L113" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:113</a>
</p>


