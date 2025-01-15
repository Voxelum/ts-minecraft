# Interface Platform

The platform information related to current operating system.
## 🏷️ Properties

### arch

```ts
arch: string
```
The direct output of ``os.arch()``. Should look like x86 or x64.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/platform.ts#L18" target="_blank" rel="noreferrer">packages/core/platform.ts:18</a>
</p>


### name

```ts
name: "osx" | "linux" | "windows" | "unknown"
```
The system name of the platform. This name is majorly used for download.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/platform.ts#L10" target="_blank" rel="noreferrer">packages/core/platform.ts:10</a>
</p>


### version

```ts
version: string
```
The version of the os. It should be the value of ``os.release()``.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/core/platform.ts#L14" target="_blank" rel="noreferrer">packages/core/platform.ts:14</a>
</p>


