# Interface YggdrasilClientOptions

## 🏷️ Properties

### fetch <Badge type="info" text="optional" />

```ts
fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L52" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:52</a>
</p>


### File <Badge type="info" text="optional" />

```ts
File: (fileBits: BlobPart[], fileName: string, options?: FilePropertyBag) => File
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L54" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:54</a>
</p>


### FormData <Badge type="info" text="optional" />

```ts
FormData: (form?: HTMLFormElement, submitter?: null | HTMLElement) => FormData
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L53" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:53</a>
</p>


### headers <Badge type="info" text="optional" />

```ts
headers: Record<string, string>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/user/yggdrasil.ts#L51" target="_blank" rel="noreferrer">packages/user/yggdrasil.ts:51</a>
</p>


