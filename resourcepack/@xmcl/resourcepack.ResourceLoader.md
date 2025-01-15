# Interface ResourceLoader

## 🔧 Methods

### get

```ts
get(location: ResourceLocation): Promise<undefined | Resource>
```
Get the resource in that location. This will walk through current resource source list to load the resource.
#### Parameters

- **location**: `ResourceLocation`
The resource location
#### Return Type

- `Promise<undefined | Resource>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/resourceManager.ts#L15" target="_blank" rel="noreferrer">packages/resourcepack/resourceManager.ts:15</a>
</p>


