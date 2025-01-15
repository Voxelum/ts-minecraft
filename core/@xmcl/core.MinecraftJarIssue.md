# Interface MinecraftJarIssue

The minecraft jar issue represents a corrupted or missing minecraft jar.
You can use ``Installer.installVersion`` to fix this.
## 🏷️ Properties

### expectedChecksum

```ts
expectedChecksum: string
```
The expected checksum of the file. Can be an empty string if this file is missing or not check checksum at all!
*Inherited from: `Issue.expectedChecksum`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L29" target="_blank" rel="noreferrer">packages/core/diagnose.ts:29</a>
</p>


### file

```ts
file: string
```
The path of the problematic file.
*Inherited from: `Issue.file`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L21" target="_blank" rel="noreferrer">packages/core/diagnose.ts:21</a>
</p>


### hint

```ts
hint: string
```
The useful hint to fix this issue. This should be a human readable string.
*Inherited from: `Issue.hint`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L25" target="_blank" rel="noreferrer">packages/core/diagnose.ts:25</a>
</p>


### receivedChecksum

```ts
receivedChecksum: string
```
The actual checksum of the file. Can be an empty string if this file is missing or not check checksum at all!
*Inherited from: `Issue.receivedChecksum`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L33" target="_blank" rel="noreferrer">packages/core/diagnose.ts:33</a>
</p>


### role

```ts
role: "minecraftJar"
```
The role of the file in Minecraft.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L55" target="_blank" rel="noreferrer">packages/core/diagnose.ts:55</a>
</p>


### type

```ts
type: "missing" | "corrupted"
```
The type of the issue.
*Inherited from: `Issue.type`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L13" target="_blank" rel="noreferrer">packages/core/diagnose.ts:13</a>
</p>


### version

```ts
version: string
```
The minecraft version for that jar
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L60" target="_blank" rel="noreferrer">packages/core/diagnose.ts:60</a>
</p>


