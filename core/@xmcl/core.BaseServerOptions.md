# Interface BaseServerOptions

## 🏷️ Properties

### extraExecOption <Badge type="info" text="optional" />

```ts
extraExecOption: SpawnOptions
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L411" target="_blank" rel="noreferrer">packages/core/launch.ts:411</a>
</p>


### extraJVMArgs <Badge type="info" text="optional" />

```ts
extraJVMArgs: string[]
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L409" target="_blank" rel="noreferrer">packages/core/launch.ts:409</a>
</p>


### extraMCArgs <Badge type="info" text="optional" />

```ts
extraMCArgs: string[]
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L410" target="_blank" rel="noreferrer">packages/core/launch.ts:410</a>
</p>


### javaPath

```ts
javaPath: string
```
Java executable.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L402" target="_blank" rel="noreferrer">packages/core/launch.ts:402</a>
</p>


### maxMemory <Badge type="info" text="optional" />

```ts
maxMemory: number
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L408" target="_blank" rel="noreferrer">packages/core/launch.ts:408</a>
</p>


### minMemory <Badge type="info" text="optional" />

```ts
minMemory: number
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L407" target="_blank" rel="noreferrer">packages/core/launch.ts:407</a>
</p>


### nogui <Badge type="info" text="optional" />

```ts
nogui: boolean
```
No gui for the server launch
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L406" target="_blank" rel="noreferrer">packages/core/launch.ts:406</a>
</p>


### prependCommand <Badge type="info" text="optional" />

```ts
prependCommand: string | string[]
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L413" target="_blank" rel="noreferrer">packages/core/launch.ts:413</a>
</p>


### spawn <Badge type="info" text="optional" />

```ts
spawn: (command: string, args?: readonly string[], options?: SpawnOptions) => ChildProcess
```
The spawn process function. Used for spawn the java process at the end. By default, it will be the spawn function from "child_process" module. You can use this option to change the 3rd party spawn like [cross-spawn](https://www.npmjs.com/package/cross-spawn)
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L418" target="_blank" rel="noreferrer">packages/core/launch.ts:418</a>
</p>


