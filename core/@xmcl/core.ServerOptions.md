# Interface ServerOptions

This is the case you provide the server jar execution path.
## 🏷️ Properties

### classPath <Badge type="info" text="optional" />

```ts
classPath: string[]
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L434" target="_blank" rel="noreferrer">packages/core/launch.ts:434</a>
</p>


### extraExecOption <Badge type="info" text="optional" />

```ts
extraExecOption: SpawnOptions
```
*Inherited from: `BaseServerOptions.extraExecOption`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L411" target="_blank" rel="noreferrer">packages/core/launch.ts:411</a>
</p>


### extraJVMArgs <Badge type="info" text="optional" />

```ts
extraJVMArgs: string[]
```
*Inherited from: `BaseServerOptions.extraJVMArgs`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L409" target="_blank" rel="noreferrer">packages/core/launch.ts:409</a>
</p>


### extraMCArgs <Badge type="info" text="optional" />

```ts
extraMCArgs: string[]
```
*Inherited from: `BaseServerOptions.extraMCArgs`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L410" target="_blank" rel="noreferrer">packages/core/launch.ts:410</a>
</p>


### javaPath

```ts
javaPath: string
```
Java executable.
*Inherited from: `BaseServerOptions.javaPath`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L402" target="_blank" rel="noreferrer">packages/core/launch.ts:402</a>
</p>


### mainClass <Badge type="info" text="optional" />

```ts
mainClass: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L432" target="_blank" rel="noreferrer">packages/core/launch.ts:432</a>
</p>


### maxMemory <Badge type="info" text="optional" />

```ts
maxMemory: number
```
*Inherited from: `BaseServerOptions.maxMemory`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L408" target="_blank" rel="noreferrer">packages/core/launch.ts:408</a>
</p>


### minMemory <Badge type="info" text="optional" />

```ts
minMemory: number
```
*Inherited from: `BaseServerOptions.minMemory`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L407" target="_blank" rel="noreferrer">packages/core/launch.ts:407</a>
</p>


### nogui <Badge type="info" text="optional" />

```ts
nogui: boolean
```
No gui for the server launch
*Inherited from: `BaseServerOptions.nogui`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L406" target="_blank" rel="noreferrer">packages/core/launch.ts:406</a>
</p>


### prependCommand <Badge type="info" text="optional" />

```ts
prependCommand: string | string[]
```
*Inherited from: `BaseServerOptions.prependCommand`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L413" target="_blank" rel="noreferrer">packages/core/launch.ts:413</a>
</p>


### serverExectuableJarPath <Badge type="info" text="optional" />

```ts
serverExectuableJarPath: string
```
The minecraft server exectuable jar file.

This is the case like you are launching forge server.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L430" target="_blank" rel="noreferrer">packages/core/launch.ts:430</a>
</p>


### spawn <Badge type="info" text="optional" />

```ts
spawn: (command: string, args?: readonly string[], options?: SpawnOptions) => ChildProcess
```
The spawn process function. Used for spawn the java process at the end. By default, it will be the spawn function from "child_process" module. You can use this option to change the 3rd party spawn like [cross-spawn](https://www.npmjs.com/package/cross-spawn)
*Inherited from: `BaseServerOptions.spawn`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/launch.ts#L418" target="_blank" rel="noreferrer">packages/core/launch.ts:418</a>
</p>


