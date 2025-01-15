# Class YggdrasilThirdPartyClient

## 🏭 Constructors

### constructor

```ts
YggdrasilThirdPartyClient(api: string, options: YggdrasilClientOptions): YggdrasilThirdPartyClient
```
Create thirdparty (authlib-injector) style client
#### Parameters

- **api**: `string`
The api url following https://github.com/yushijinhun/authlib-injector/wiki/Yggdrasil-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E6%8A%80%E6%9C%AF%E8%A7%84%E8%8C%83
- **options**: `YggdrasilClientOptions`
#### Return Type

- `YggdrasilThirdPartyClient`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L237" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:237</a>
</p>


## 🏷️ Properties

### api <Badge type="tip" text="public" />

```ts
api: string
```
The official-like api endpoint
*Inherited from: `YggdrasilClient.api`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L106" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:106</a>
</p>


### fetch <Badge type="warning" text="protected" />

```ts
fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>
```
*Inherited from: `YggdrasilClient.fetch`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L98" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:98</a>
</p>


### File <Badge type="warning" text="protected" />

```ts
File: (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag) => File
```
*Inherited from: `YggdrasilClient.File`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L100" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:100</a>
</p>


### FormData <Badge type="warning" text="protected" />

```ts
FormData: (form?: HTMLFormElement, submitter?: null | HTMLElement) => FormData
```
*Inherited from: `YggdrasilClient.FormData`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L99" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:99</a>
</p>


### headers <Badge type="warning" text="protected" />

```ts
headers: Record<string, string>
```
*Inherited from: `YggdrasilClient.headers`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L97" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:97</a>
</p>


### profileApi <Badge type="tip" text="public" />

```ts
profileApi: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L229" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:229</a>
</p>


### textureApi <Badge type="tip" text="public" />

```ts
textureApi: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L230" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:230</a>
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

*Inherited from: `YggdrasilClient.invalidate`*

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

*Inherited from: `YggdrasilClient.login`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L138" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:138</a>
</p>


### lookup

```ts
lookup(uuid: string, unsigned: boolean= true, signal: AbortSignal): Promise<GameProfileWithProperties>
```
#### Parameters

- **uuid**: `string`
- **unsigned**: `boolean`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<GameProfileWithProperties>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L249" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:249</a>
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

*Inherited from: `YggdrasilClient.refresh`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L164" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:164</a>
</p>


### setTexture

```ts
setTexture(options: SetTextureOption, signal: AbortSignal): Promise<void>
```
#### Parameters

- **options**: `SetTextureOption`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L278" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:278</a>
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

*Inherited from: `YggdrasilClient.validate`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L113" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:113</a>
</p>


