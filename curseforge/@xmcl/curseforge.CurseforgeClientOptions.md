# Interface CurseforgeClientOptions

## 🏷️ Properties

### baseUrl <Badge type="info" text="optional" />

```ts
baseUrl: string
```
The base url, the default is ``https://api.curseforge.com``
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L519" target="_blank" rel="noreferrer">packages/curseforge/index.ts:519</a>
</p>


### fetch <Badge type="info" text="optional" />

```ts
fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>
```
The fetch function to use. The default is ``fetch``
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L523" target="_blank" rel="noreferrer">packages/curseforge/index.ts:523</a>
</p>


### headers <Badge type="info" text="optional" />

```ts
headers: Record<string, string>
```
Extra headers
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/curseforge/index.ts#L515" target="_blank" rel="noreferrer">packages/curseforge/index.ts:515</a>
</p>


