# Namespace BlockModel

## 🤝 Interfaces

<div class="definition-grid interface"><a href="resourcepack/@xmcl/resourcepack.BlockModel/@xmcl/resourcepack.BlockModel.Display">Display</a><a href="resourcepack/@xmcl/resourcepack.BlockModel/@xmcl/resourcepack.BlockModel.Element">Element</a><a href="resourcepack/@xmcl/resourcepack.BlockModel/@xmcl/resourcepack.BlockModel.Face">Face</a><a href="resourcepack/@xmcl/resourcepack.BlockModel/@xmcl/resourcepack.BlockModel.Transform">Transform</a></div>

## ⏩ Type Aliases

### Direction

```ts
Direction: "up" | "down" | "north" | "south" | "west" | "east"
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/format.ts#L148" target="_blank" rel="noreferrer">packages/resourcepack/format.ts:148</a>
</p>


### Resolved

```ts
Resolved: Omit<Required<BlockModel>, "parent" | "override" | "elements"> & { elements: (Omit<Element, "faces"> & { faces: { down?: Face; east?: Face; north?: Face; south?: Face; up?: Face; west?: Face } })[]; overrides?: BlockModel["overrides"] }
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/resourcepack/format.ts#L248" target="_blank" rel="noreferrer">packages/resourcepack/format.ts:248</a>
</p>


