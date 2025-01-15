# Interface DeserializationOption

## 🏷️ Properties

### compressed <Badge type="info" text="optional" />

```ts
compressed: true | "deflate" | "gzip"
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nbt/index.ts#L387" target="_blank" rel="noreferrer">packages/nbt/index.ts:387</a>
</p>


### io <Badge type="info" text="optional" />

```ts
io: (tagType: number) => TagCoder
```
IO override for serialization
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nbt/index.ts#L391" target="_blank" rel="noreferrer">packages/nbt/index.ts:391</a>
</p>


### type <Badge type="info" text="optional" />

```ts
type: Constructor<T>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nbt/index.ts#L393" target="_blank" rel="noreferrer">packages/nbt/index.ts:393</a>
</p>


