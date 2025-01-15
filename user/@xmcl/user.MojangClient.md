# Class MojangClient

The mojang api client. Please referece https://wiki.vg/Mojang_API.

All the apis need user to authenticate the access token from microsoft.
## 🏭 Constructors

### constructor

```ts
MojangClient(options: MojangClientOptions): MojangClient
```
#### Parameters

- **options**: `MojangClientOptions`
#### Return Type

- `MojangClient`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L218" target="_blank" rel="noreferrer">packages/user/mojang.ts:218</a>
</p>


## 🔧 Methods

### checkGameOwnership

```ts
checkGameOwnership(token: string, signal: AbortSignal): Promise<MinecraftOwnershipResponse>
```
Return the owner ship list of the player with those token.
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MinecraftOwnershipResponse>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L412" target="_blank" rel="noreferrer">packages/user/mojang.ts:412</a>
</p>


### checkNameAvailability

```ts
checkNameAvailability(name: string, token: string, signal: AbortSignal): Promise<NameAvailability>
```
#### Parameters

- **name**: `string`
- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<NameAvailability>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L251" target="_blank" rel="noreferrer">packages/user/mojang.ts:251</a>
</p>


### getNameChangeInformation

```ts
getNameChangeInformation(token: string): Promise<NameChangeInformation>
```
#### Parameters

- **token**: `string`
#### Return Type

- `Promise<NameChangeInformation>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L241" target="_blank" rel="noreferrer">packages/user/mojang.ts:241</a>
</p>


### getProfile

```ts
getProfile(token: string, signal: AbortSignal): Promise<MicrosoftMinecraftProfile>
```
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MicrosoftMinecraftProfile>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L263" target="_blank" rel="noreferrer">packages/user/mojang.ts:263</a>
</p>


### getSecurityChallenges

```ts
getSecurityChallenges(token: string): Promise<MojangChallenge[]>
```
#### Parameters

- **token**: `string`
#### Return Type

- `Promise<MojangChallenge[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L376" target="_blank" rel="noreferrer">packages/user/mojang.ts:376</a>
</p>


### hideCape

```ts
hideCape(token: string, signal: AbortSignal): Promise<void>
```
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L328" target="_blank" rel="noreferrer">packages/user/mojang.ts:328</a>
</p>


### resetSkin

```ts
resetSkin(token: string, signal: AbortSignal): Promise<void>
```
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L315" target="_blank" rel="noreferrer">packages/user/mojang.ts:315</a>
</p>


### setName

```ts
setName(name: string, token: string, signal: AbortSignal): Promise<MicrosoftMinecraftProfile>
```
#### Parameters

- **name**: `string`
- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MicrosoftMinecraftProfile>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L222" target="_blank" rel="noreferrer">packages/user/mojang.ts:222</a>
</p>


### setSkin

```ts
setSkin(fileName: string, skin: string | Buffer, variant: "slim" | "classic", token: string, signal: AbortSignal): Promise<MinecraftProfileResponse>
```
#### Parameters

- **fileName**: `string`
- **skin**: `string | Buffer`
- **variant**: `"slim" | "classic"`
- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MinecraftProfileResponse>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L285" target="_blank" rel="noreferrer">packages/user/mojang.ts:285</a>
</p>


### showCape

```ts
showCape(capeId: string, token: string, signal: AbortSignal): Promise<MicrosoftMinecraftProfile>
```
#### Parameters

- **capeId**: `string`
- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MicrosoftMinecraftProfile>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L341" target="_blank" rel="noreferrer">packages/user/mojang.ts:341</a>
</p>


### submitSecurityChallenges

```ts
submitSecurityChallenges(answers: MojangChallengeResponse[], token: string): Promise<void>
```
#### Parameters

- **answers**: `MojangChallengeResponse[]`
- **token**: `string`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L390" target="_blank" rel="noreferrer">packages/user/mojang.ts:390</a>
</p>


### verifySecurityLocation

```ts
verifySecurityLocation(token: string, signal: AbortSignal): Promise<boolean>
```
#### Parameters

- **token**: `string`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<boolean>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/mojang.ts#L361" target="_blank" rel="noreferrer">packages/user/mojang.ts:361</a>
</p>


