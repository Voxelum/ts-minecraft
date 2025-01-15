# Class MicrosoftAuthenticator

The microsoft authenticator for Minecraft (Xbox) account.
## 🏭 Constructors

### constructor

```ts
MicrosoftAuthenticator(options: MicrosoftAuthenticatorOptions): MicrosoftAuthenticator
```
#### Parameters

- **options**: `MicrosoftAuthenticatorOptions`
#### Return Type

- `MicrosoftAuthenticator`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/microsoft.ts#L57" target="_blank" rel="noreferrer">packages/user/microsoft.ts:57</a>
</p>


## 🏷️ Properties

### fetch

```ts
fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/microsoft.ts#L55" target="_blank" rel="noreferrer">packages/user/microsoft.ts:55</a>
</p>


## 🔧 Methods

### acquireXBoxToken

```ts
acquireXBoxToken(oauthAccessToken: string, signal: AbortSignal): Promise<{ liveXstsResponse: XBoxResponse; minecraftXstsResponse: XBoxResponse }>
```
Acquire both Minecraft and xbox token and xbox game profile.
You can use the xbox token to login Minecraft by [loginMinecraftWithXBox](#@xmcl/user.MicrosoftAuthenticator.loginMinecraftWithXBox).

This method is the composition of calling
- [authenticateXboxLive](#@xmcl/user.MicrosoftAuthenticator.authenticateXboxLive)
- [authorizeXboxLive](#@xmcl/user.MicrosoftAuthenticator.authorizeXboxLive) to ``rp://api.minecraftservices.com/``
- [authorizeXboxLive](#@xmcl/user.MicrosoftAuthenticator.authorizeXboxLive) to ``http://xboxlive.com``
- [getXboxGameProfile](#@xmcl/user.MicrosoftAuthenticator.getXboxGameProfile)

You can call them individually if you want a more detailed control.
#### Parameters

- **oauthAccessToken**: `string`
The microsoft access token
- **signal**: `AbortSignal`
The abort signal
#### Return Type

- `Promise<{ liveXstsResponse: XBoxResponse; minecraftXstsResponse: XBoxResponse }>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/microsoft.ts#L168" target="_blank" rel="noreferrer">packages/user/microsoft.ts:168</a>
</p>


### authenticateXboxLive

```ts
authenticateXboxLive(oauthAccessToken: string, signal: AbortSignal): Promise<XBoxResponse>
```
Authenticate with xbox live by ms oauth access token
#### Parameters

- **oauthAccessToken**: `string`
The oauth access token
- **signal**: `AbortSignal`
#### Return Type

- `Promise<XBoxResponse>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/microsoft.ts#L65" target="_blank" rel="noreferrer">packages/user/microsoft.ts:65</a>
</p>


### authorizeXboxLive

```ts
authorizeXboxLive(xblResponseToken: string, relyingParty: "rp://api.minecraftservices.com/" | "http://xboxlive.com"= 'rp://api.minecraftservices.com/', signal: AbortSignal): Promise<XBoxResponse>
```
Authorize the xbox live. It will get the xsts token in response.
#### Parameters

- **xblResponseToken**: `string`
The [XBoxResponse.Token](#@xmcl/user.XBoxResponse.Token)
- **relyingParty**: `"rp://api.minecraftservices.com/" | "http://xboxlive.com"`
- **signal**: `AbortSignal`
#### Return Type

- `Promise<XBoxResponse>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/microsoft.ts#L96" target="_blank" rel="noreferrer">packages/user/microsoft.ts:96</a>
</p>


### getXboxGameProfile

```ts
getXboxGameProfile(xuid: string, uhs: string, xstsToken: string, signal: AbortSignal): Promise<XBoxGameProfileResponse>
```
Get xbox user profile, including **username** and **avatar**.

You can find the parameters from the [XBoxResponse](@xmcl/user.XBoxResponse).
#### Parameters

- **xuid**: `string`
The ``xuid`` in a [XBoxResponse.DisplayClaims](#@xmcl/user.XBoxResponse.DisplayClaims)
- **uhs**: `string`
The ``uhs`` in a [XBoxResponse.DisplayClaims](#@xmcl/user.XBoxResponse.DisplayClaims)
- **xstsToken**: `string`
The [XBoxResponse.Token](#@xmcl/user.XBoxResponse.Token)
- **signal**: `AbortSignal`
#### Return Type

- `Promise<XBoxGameProfileResponse>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/microsoft.ts#L132" target="_blank" rel="noreferrer">packages/user/microsoft.ts:132</a>
</p>


### loginMinecraftWithXBox

```ts
loginMinecraftWithXBox(uhs: string, xstsToken: string, signal: AbortSignal): Promise<MinecraftAuthResponse>
```
This will return the response with Minecraft access token!

This access token allows us to launch the game, but, we haven't actually checked if the account owns the game. Everything until here works with a normal Microsoft account!
#### Parameters

- **uhs**: `string`
uhs from [XBoxResponse](@xmcl/user.XBoxResponse) of [acquireXBoxToken](#@xmcl/user.MicrosoftAuthenticator.acquireXBoxToken)
- **xstsToken**: `string`
You need to get this token from [acquireXBoxToken](#@xmcl/user.MicrosoftAuthenticator.acquireXBoxToken)
- **signal**: `AbortSignal`
#### Return Type

- `Promise<MinecraftAuthResponse>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/microsoft.ts#L184" target="_blank" rel="noreferrer">packages/user/microsoft.ts:184</a>
</p>


