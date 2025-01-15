# Class ClientUser

## 🏭 Constructors

### constructor

```ts
ClientUser(client: Client, props: Record<string, any>): ClientUser
```
#### Parameters

- **client**: `Client`
- **props**: `Record<string, any>`
#### Return Type

- `ClientUser`

*Inherited from: `User.constructor`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L47" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:47</a>
</p>


## 🏷️ Properties

### avatar

```ts
avatar: null | string
```
the user's [avatar hash](https://discord.com/developers/docs/reference#image-formatting)
*Inherited from: `User.avatar`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L21" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:21</a>
</p>


### avatar_decoration <Badge type="info" text="optional" />

```ts
avatar_decoration: null | string
```
*Inherited from: `User.avatar_decoration`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L45" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:45</a>
</p>


### client

```ts
client: Client
```
the client instance
*Inherited from: `User.client`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/Base.ts#L7" target="_blank" rel="noreferrer">packages/discord-rpc/structures/Base.ts:7</a>
</p>


### discriminator

```ts
discriminator: string
```
the user's 4-digit discord-tag
*Inherited from: `User.discriminator`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L17" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:17</a>
</p>


### flags <Badge type="info" text="optional" />

```ts
flags: UserFlags
```
the [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
*Inherited from: `User.flags`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L25" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:25</a>
</p>


### id

```ts
id: string
```
the user's id
*Inherited from: `User.id`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L9" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:9</a>
</p>


### premium_type <Badge type="info" text="optional" />

```ts
premium_type: UserPremiumType
```
the [type of Nitro subscription](https://discord.com/developers/docs/resources/user#user-object-premium-types) on a user's account
*Inherited from: `User.premium_type`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L29" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:29</a>
</p>


### presence <Badge type="info" text="optional" />

```ts
presence: { activities?: GatewayActivity[]; status?: PresenceUpdateStatus }
```
user's rich presence
*Inherited from: `User.presence`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L38" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:38</a>
</p>


### public_flags <Badge type="info" text="optional" />

```ts
public_flags: UserFlags
```
the public [flags](https://discord.com/developers/docs/resources/user#user-object-user-flags) on a user's account
*Inherited from: `User.public_flags`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L33" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:33</a>
</p>


### username

```ts
username: string
```
the user's username, not unique across the platform
*Inherited from: `User.username`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L13" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:13</a>
</p>


## 🔑 Accessors

### avatarUrl

*Inherited from: `User.avatarUrl`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L61" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:61</a>
</p>


### defaultAvatarUrl

*Inherited from: `User.defaultAvatarUrl`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L71" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:71</a>
</p>


### tag

*Inherited from: `User.tag`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/User.ts#L78" target="_blank" rel="noreferrer">packages/discord-rpc/structures/User.ts:78</a>
</p>


## 🔧 Methods

### clearActivity

```ts
clearActivity(pid: number): Promise<void>
```
Used to clear a user's Rich Presence.
#### Parameters

- **pid**: `number`
the application's process id
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L274" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:274</a>
</p>


### closeJoinRequest

```ts
closeJoinRequest(userId: string): Promise<void>
```
Used to reject an Ask to Join request.
#### Parameters

- **userId**: `string`
the id of the requesting user
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L169" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:169</a>
</p>


### connectToLobby

```ts
connectToLobby(lobbyId: string, secret: string): Promise<Lobby>
```
Used to join a new lobby.
#### Parameters

- **lobbyId**: `string`
the id of the lobby to join
- **secret**: `string`
the secret of the lobby to join
#### Return Type

- `Promise<Lobby>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L302" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:302</a>
</p>


### createLobby

```ts
createLobby(type: LobbyType, capacity: number, locked: boolean, metadata: any): Promise<Lobby>
```
Create a new lobby
#### Parameters

- **type**: `LobbyType`
lobby type
- **capacity**: `number`
lobby size
- **locked**: `boolean`
is lobby locked
- **metadata**: `any`
additional data?
#### Return Type

- `Promise<Lobby>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L289" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:289</a>
</p>


### fetchChannel

```ts
fetchChannel(channelId: string): Promise<Channel>
```
Used to get a channel the client is in.
#### Parameters

- **channelId**: `string`
id of the channel to get
#### Return Type

- `Promise<Channel>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L74" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:74</a>
</p>


### fetchChannels

```ts
fetchChannels(guildId: string): Promise<Channel>
```
Used to get a guild's channels the client is in.
#### Parameters

- **guildId**: `string`
id of the guild to get channels for
#### Return Type

- `Promise<Channel>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L83" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:83</a>
</p>


### fetchGuild

```ts
fetchGuild(guildId: string, timeout: number): Promise<Guild>
```
Used to get a guild the client is in.
#### Parameters

- **guildId**: `string`
id of the guild to get
- **timeout**: `number`
asynchronously get guild with time to wait before timing out
#### Return Type

- `Promise<Guild>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L55" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:55</a>
</p>


### fetchGuilds

```ts
fetchGuilds(): Promise<Guild[]>
```
Used to get a list of guilds the client is in.
#### Return Type

- `Promise<Guild[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L63" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:63</a>
</p>


### fetchUser

```ts
fetchUser(userId: string): Promise<User>
```
#### Parameters

- **userId**: `string`
#### Return Type

- `Promise<User>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L44" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:44</a>
</p>


### getImage

```ts
getImage(userId: string, format: "png" | "webp" | "jpg"= 'png', size: 16 | 32 | 64 | 128 | 256 | 512 | 1024= 1024): Promise<string>
```
Used to get a user's avatar
#### Parameters

- **userId**: `string`
id of the user to get the avatar of
- **format**: `"png" | "webp" | "jpg"`
image format
- **size**: `16 | 32 | 64 | 128 | 256 | 512 | 1024`
image size
#### Return Type

- `Promise<string>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L323" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:323</a>
</p>


### getRelationships

```ts
getRelationships(): Promise<User[]>
```
#### Return Type

- `Promise<User[]>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L194" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:194</a>
</p>


### getSelectedVoiceChannel

```ts
getSelectedVoiceChannel(): Promise<null | Channel>
```
Used to get the client's current voice channel. There are no arguments for this command. Returns the [Get Channel](https://discord.com/developers/docs/topics/rpc#getchannel) response, or ``null`` if none.
#### Return Type

- `Promise<null | Channel>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L93" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:93</a>
</p>


### getVoiceSettings

```ts
getVoiceSettings(): Promise<VoiceSettings>
```
Used to get current client's voice settings
#### Return Type

- `Promise<VoiceSettings>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L135" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:135</a>
</p>


### leaveTextChannel

```ts
leaveTextChannel(timeout: number): Promise<void>
```
Used to leave text channels, group dms, or dms.
#### Parameters

- **timeout**: `number`
asynchronously join channel with time to wait before timing out
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L190" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:190</a>
</p>


### leaveVoiceChannel

```ts
leaveVoiceChannel(timeout: number, force: boolean): Promise<void>
```
Used to leave voice channels, group dms, or dms
#### Parameters

- **timeout**: `number`
asynchronously join channel with time to wait before timing out
- **force**: `boolean`
forces a user to join a voice channel
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L123" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:123</a>
</p>


### selectTextChannel

```ts
selectTextChannel(channelId: string, timeout: number): Promise<null | Channel>
```
Used to join text channels, group dms, or dms. Returns the [Get Channel](https://discord.com/developers/docs/topics/rpc#getchannel) response, or ``null`` if none.
#### Parameters

- **channelId**: `string`
channel id to join
- **timeout**: `number`
asynchronously join channel with time to wait before timing out
#### Return Type

- `Promise<null | Channel>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L179" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:179</a>
</p>


### selectVoiceChannel

```ts
selectVoiceChannel(channelId: string, timeout: number, force: boolean): Promise<Channel>
```
Used to join voice channels, group dms, or dms. Returns the [Get Channel](https://discord.com/developers/docs/topics/rpc#getchannel) response, ``null`` if none.
#### Parameters

- **channelId**: `string`
channel id to join
- **timeout**: `number`
asynchronously join channel with time to wait before timing out
- **force**: `boolean`
forces a user to join a voice channel
#### Return Type

- `Promise<Channel>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L105" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:105</a>
</p>


### sendJoinInvite

```ts
sendJoinInvite(userId: string): Promise<void>
```
Used to accept an Ask to Join request.
#### Parameters

- **userId**: `string`
the id of the requesting user
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L161" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:161</a>
</p>


### sendToLobby

```ts
sendToLobby(lobbyId: string, data: string): Promise<Lobby>
```
Used to join a new lobby.
#### Parameters

- **lobbyId**: `string`
the id of the lobby to join
- **data**: `string`
additional data to send to lobby
#### Return Type

- `Promise<Lobby>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L312" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:312</a>
</p>


### setActivity

```ts
setActivity(activity: SetActivity, pid: number): Promise<SetActivityResponse>
```
Used to update a user's Rich Presence.
#### Parameters

- **activity**: `SetActivity`
the rich presence to assign to the user
- **pid**: `number`
the application's process id
#### Return Type

- `Promise<SetActivityResponse>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L207" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:207</a>
</p>


### setCeritfiedDevices

```ts
setCeritfiedDevices(devices: CertifiedDevice[]): Promise<void>
```
Used by hardware manufacturers to send information about the current state of their certified devices that are connected to Discord.
#### Parameters

- **devices**: `CertifiedDevice[]`
a list of devices for your manufacturer, in order of priority
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L153" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:153</a>
</p>


### setVoiceSettings

```ts
setVoiceSettings(voiceSettings: Partial<VoiceSettings>): Promise<VoiceSettings>
```
Used to change voice settings of users in voice channels
#### Parameters

- **voiceSettings**: `Partial<VoiceSettings>`
the settings
#### Return Type

- `Promise<VoiceSettings>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/structures/ClientUser.ts#L144" target="_blank" rel="noreferrer">packages/discord-rpc/structures/ClientUser.ts:144</a>
</p>


