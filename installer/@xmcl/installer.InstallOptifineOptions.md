# Interface InstallOptifineOptions

Shared install options
## 🏷️ Properties

### inheritsFrom <Badge type="info" text="optional" />

```ts
inheritsFrom: string
```
When you want to install a version over another one.

Like, you want to install liteloader over a forge version.
You should fill this with that forge version id.
*Inherited from: `InstallOptions.inheritsFrom`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/utils.ts#L109" target="_blank" rel="noreferrer">packages/installer/utils.ts:109</a>
</p>


### java <Badge type="info" text="optional" />

```ts
java: string
```
The java exectable path. It will use ``java`` by default.
*Inherited from: `SpawnJavaOptions.java`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/utils.ts#L43" target="_blank" rel="noreferrer">packages/installer/utils.ts:43</a>
</p>


### spawn <Badge type="info" text="optional" />

```ts
spawn: (command: string, args?: readonly string[], options?: SpawnOptions) => ChildProcess
```
The spawn process function. Used for spawn the java process at the end.

By default, it will be the spawn function from "child_process" module. You can use this option to change the 3rd party spawn like [cross-spawn](https://www.npmjs.com/package/cross-spawn)
*Inherited from: `SpawnJavaOptions.spawn`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/utils.ts#L50" target="_blank" rel="noreferrer">packages/installer/utils.ts:50</a>
</p>


### useForgeTweaker <Badge type="info" text="optional" />

```ts
useForgeTweaker: boolean
```
Use "optifine.OptiFineForgeTweaker" instead of "optifine.OptiFineTweaker" for tweakClass.

If you want to install upon forge, you should use this.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/optifine.ts#L14" target="_blank" rel="noreferrer">packages/installer/optifine.ts:14</a>
</p>


### versionId <Badge type="info" text="optional" />

```ts
versionId: string
```
Override the newly installed version id.

If this is absent, the installed version id will be either generated or provided by installer.
*Inherited from: `InstallOptions.versionId`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/utils.ts#L116" target="_blank" rel="noreferrer">packages/installer/utils.ts:116</a>
</p>


