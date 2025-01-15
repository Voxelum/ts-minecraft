# Interface ClientOptions

## 🏷️ Properties

### clientId

```ts
clientId: string
```
application id
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/Client.ts#L26" target="_blank" rel="noreferrer">packages/discord-rpc/Client.ts:26</a>
</p>


### clientSecret <Badge type="info" text="optional" />

```ts
clientSecret: string
```
application secret
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/Client.ts#L30" target="_blank" rel="noreferrer">packages/discord-rpc/Client.ts:30</a>
</p>


### dispatcher <Badge type="info" text="optional" />

```ts
dispatcher: Dispatcher
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/Client.ts#L49" target="_blank" rel="noreferrer">packages/discord-rpc/Client.ts:49</a>
</p>


### pipeId <Badge type="info" text="optional" />

```ts
pipeId: number
```
pipe id
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/Client.ts#L34" target="_blank" rel="noreferrer">packages/discord-rpc/Client.ts:34</a>
</p>


### transport <Badge type="info" text="optional" />

```ts
transport: { pathList?: FormatFunction[]; type?: "ipc" | (options: TransportOptions) => Transport | "websocket" }
```
transport configs
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/discord-rpc/Client.ts#L38" target="_blank" rel="noreferrer">packages/discord-rpc/Client.ts:38</a>
</p>


