# Interface VersionJsonIssue

The minecraft jar issue represents a corrupted or missing version jar.

This means your version is totally broken, and you should reinstall this version.

- If this is just a Minecraft version, you will need to use ``Installer.install`` to re-install Minecraft.
- If this is a Forge version, you will need to use ``ForgeInstaller.install`` to re-install.
- Others are the same, just re-install
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
role: "versionJson"
```
The role of the file in Minecraft.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L72" target="_blank" rel="noreferrer">packages/core/diagnose.ts:72</a>
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
The version of version json that has problem.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L77" target="_blank" rel="noreferrer">packages/core/diagnose.ts:77</a>
</p>


