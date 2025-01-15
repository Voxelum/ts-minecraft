# Interface InstallProfile

## 🏷️ Properties

### data <Badge type="info" text="optional" />

```ts
data: (key: string) => { client: string; server: string }
```
The processor shared variables. The key is the name of variable to replace.

The value of client/server is the value of the variable.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L53" target="_blank" rel="noreferrer">packages/installer/profile.ts:53</a>
</p>


### json

```ts
json: string
```
The version json path
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L39" target="_blank" rel="noreferrer">packages/installer/profile.ts:39</a>
</p>


### libraries

```ts
libraries: NormalLibrary[]
```
The required install profile libraries
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L61" target="_blank" rel="noreferrer">packages/installer/profile.ts:61</a>
</p>


### minecraft

```ts
minecraft: string
```
The minecraft version
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L47" target="_blank" rel="noreferrer">packages/installer/profile.ts:47</a>
</p>


### path

```ts
path: string
```
The maven artifact name: ``<org>:<artifact-id>:<version>``
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L43" target="_blank" rel="noreferrer">packages/installer/profile.ts:43</a>
</p>


### processors <Badge type="info" text="optional" />

```ts
processors: PostProcessor[]
```
The post processor. Which require java to run.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L57" target="_blank" rel="noreferrer">packages/installer/profile.ts:57</a>
</p>


### profile

```ts
profile: string
```
The type of this installation, like "forge"
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L31" target="_blank" rel="noreferrer">packages/installer/profile.ts:31</a>
</p>


### spec <Badge type="info" text="optional" />

```ts
spec: number
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L27" target="_blank" rel="noreferrer">packages/installer/profile.ts:27</a>
</p>


### version

```ts
version: string
```
The version of this installation
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L35" target="_blank" rel="noreferrer">packages/installer/profile.ts:35</a>
</p>


### versionInfo <Badge type="info" text="optional" />

```ts
versionInfo: Version
```
Legacy format
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/profile.ts#L65" target="_blank" rel="noreferrer">packages/installer/profile.ts:65</a>
</p>


