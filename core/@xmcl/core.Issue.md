# Interface Issue

Represent a issue for your diagnosed minecraft client.
## 🏷️ Properties

### expectedChecksum

```ts
expectedChecksum: string
```
The expected checksum of the file. Can be an empty string if this file is missing or not check checksum at all!
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L29" target="_blank" rel="noreferrer">packages/core/diagnose.ts:29</a>
</p>


### file

```ts
file: string
```
The path of the problematic file.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L21" target="_blank" rel="noreferrer">packages/core/diagnose.ts:21</a>
</p>


### hint

```ts
hint: string
```
The useful hint to fix this issue. This should be a human readable string.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L25" target="_blank" rel="noreferrer">packages/core/diagnose.ts:25</a>
</p>


### receivedChecksum

```ts
receivedChecksum: string
```
The actual checksum of the file. Can be an empty string if this file is missing or not check checksum at all!
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L33" target="_blank" rel="noreferrer">packages/core/diagnose.ts:33</a>
</p>


### role

```ts
role: string
```
The role of the file in Minecraft.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L17" target="_blank" rel="noreferrer">packages/core/diagnose.ts:17</a>
</p>


### type

```ts
type: "missing" | "corrupted"
```
The type of the issue.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/diagnose.ts#L13" target="_blank" rel="noreferrer">packages/core/diagnose.ts:13</a>
</p>


