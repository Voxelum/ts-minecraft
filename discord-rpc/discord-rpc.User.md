# Class User

## 🏭 Constructors

### constructor

```ts
User(client: Client, props: Record<string, any>): User
```
#### Parameters

- **client**: `Client`
- **props**: `Record<string, any>`
#### Return Type

- `User`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L47" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:47</a>
</p>


## 🏷️ Properties

### avatar

```ts
avatar: null | string
```
the user's [avatar hash](https://discord.com/developers/docs/reference#image-formatting)
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L21" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:21</a>
</p>


### avatar_decoration <Badge type="info" text="optional" />

```ts
avatar_decoration: null | string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L45" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:45</a>
</p>


### client

```ts
client: Client
```
the client instance
*Inherited from: `Base.client`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/Base.ts#L7" target="_blank" rel="noreferrer">packages/discord-rpc/structures/Base.ts:7</a>
</p>


### discriminator

```ts
discriminator: string
```
the user's 4-digit discord-tag
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L17" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:17</a>
</p>


### flags <Badge type="info" text="optional" />

```ts
flags: UserFlags
```
the [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L25" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:25</a>
</p>


### id

```ts
id: string
```
the user's id
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L9" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:9</a>
</p>


### premium_type <Badge type="info" text="optional" />

```ts
premium_type: UserPremiumType
```
the [type of Nitro subscription](https://discord.com/developers/docs/resources/user#user-object-premium-types) on a user's account
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L29" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:29</a>
</p>


### presence <Badge type="info" text="optional" />

```ts
presence: { activities?: GatewayActivity[]; status?: PresenceUpdateStatus }
```
user's rich presence
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L38" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:38</a>
</p>


### public_flags <Badge type="info" text="optional" />

```ts
public_flags: UserFlags
```
the public [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L33" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:33</a>
</p>


### username

```ts
username: string
```
the user's username, not unique across the platform
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L13" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:13</a>
</p>


## 🔑 Accessors

### avatarUrl

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L61" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:61</a>
</p>


### defaultAvatarUrl

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L71" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:71</a>
</p>


### tag

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L78" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:78</a>
</p>


