# Interface TeamMember

## 🏷️ Properties

### accept

```ts
accept: boolean
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L334" target="_blank" rel="noreferrer">packages/modrinth/types.ts:334</a>
</p>


### permissions

```ts
permissions: number
```
The user's permissions in bitfield format (requires authorization to view)

In order from first to eighth bit, the bits are:

- UPLOAD_VERSION
- DELETE_VERSION
- EDIT_DETAILS
- EDIT_BODY
- MANAGE_INVITES
- REMOVE_MEMBER
- EDIT_MEMBER
- DELETE_PROJECT
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L333" target="_blank" rel="noreferrer">packages/modrinth/types.ts:333</a>
</p>


### role

```ts
role: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L318" target="_blank" rel="noreferrer">packages/modrinth/types.ts:318</a>
</p>


### team_id

```ts
team_id: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L279" target="_blank" rel="noreferrer">packages/modrinth/types.ts:279</a>
</p>


### user

```ts
user: { avatar_url: string; bio: string; created: string; email?: string; github_id?: number; id: string; name?: string; role: "admin" | "moderator" | "developer"; username: string }
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/modrinth/types.ts#L280" target="_blank" rel="noreferrer">packages/modrinth/types.ts:280</a>
</p>


