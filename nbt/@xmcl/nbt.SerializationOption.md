# Interface SerializationOption

## 🏷️ Properties

### compressed <Badge type="info" text="optional" />

```ts
compressed: true | "deflate" | "gzip"
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nbt/index.ts#L374" target="_blank" rel="noreferrer">packages/nbt/index.ts:374</a>
</p>


### filename <Badge type="info" text="optional" />

```ts
filename: string
```
Used for serialize function. Assign the filename for it.
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nbt/index.ts#L383" target="_blank" rel="noreferrer">packages/nbt/index.ts:383</a>
</p>


### io <Badge type="info" text="optional" />

```ts
io: (tagType: number) => TagCoder
```
IO override for serialization
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/nbt/index.ts#L378" target="_blank" rel="noreferrer">packages/nbt/index.ts:378</a>
</p>


