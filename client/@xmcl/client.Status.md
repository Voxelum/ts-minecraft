# Interface Status

The json format for Minecraft server handshake status query response
## 🏷️ Properties

### description

```ts
description: string | TextComponent
```
The motd of server, which might be the raw TextComponent string or structurelized TextComponent JSON
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/status.ts#L68" target="_blank" rel="noreferrer">packages/client/status.ts:68</a>
</p>


### favicon

```ts
favicon: string
```
The base 64 favicon data
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/status.ts#L72" target="_blank" rel="noreferrer">packages/client/status.ts:72</a>
</p>


### modinfo <Badge type="info" text="optional" />

```ts
modinfo: { modList: ForgeModIdentity[]; type: string }
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/status.ts#L73" target="_blank" rel="noreferrer">packages/client/status.ts:73</a>
</p>


### ping

```ts
ping: number
```
The ping from server
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/status.ts#L80" target="_blank" rel="noreferrer">packages/client/status.ts:80</a>
</p>


### players

```ts
players: { max: number; online: number; sample?: GameProfile[] }
```
The player info in server
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/status.ts#L51" target="_blank" rel="noreferrer">packages/client/status.ts:51</a>
</p>


### version

```ts
version: { name: string; protocol: number }
```
The version info of the server
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/client/status.ts#L37" target="_blank" rel="noreferrer">packages/client/status.ts:37</a>
</p>


