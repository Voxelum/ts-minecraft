# Interface TaskContext

## 🔧 Methods

### fork <Badge type="info" text="optional" />

```ts
fork(task: Task): number
```
#### Parameters

- **task**: `Task`
#### Return Type

- `number`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L58" target="_blank" rel="noreferrer">packages/task/index.ts:58</a>
</p>


### onCancelled <Badge type="info" text="optional" />

```ts
onCancelled(task: Task): void
```
#### Parameters

- **task**: `Task`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L65" target="_blank" rel="noreferrer">packages/task/index.ts:65</a>
</p>


### onFailed <Badge type="info" text="optional" />

```ts
onFailed(task: Task, error: any): void
```
#### Parameters

- **task**: `Task`
- **error**: `any`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L61" target="_blank" rel="noreferrer">packages/task/index.ts:61</a>
</p>


### onPaused <Badge type="info" text="optional" />

```ts
onPaused(task: Task): void
```
#### Parameters

- **task**: `Task`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L63" target="_blank" rel="noreferrer">packages/task/index.ts:63</a>
</p>


### onResumed <Badge type="info" text="optional" />

```ts
onResumed(task: Task): void
```
#### Parameters

- **task**: `Task`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L64" target="_blank" rel="noreferrer">packages/task/index.ts:64</a>
</p>


### onStart <Badge type="info" text="optional" />

```ts
onStart(task: Task): void
```
#### Parameters

- **task**: `Task`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L59" target="_blank" rel="noreferrer">packages/task/index.ts:59</a>
</p>


### onSucceed <Badge type="info" text="optional" />

```ts
onSucceed(task: Task, result: any): void
```
#### Parameters

- **task**: `Task`
- **result**: `any`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L62" target="_blank" rel="noreferrer">packages/task/index.ts:62</a>
</p>


### onUpdate <Badge type="info" text="optional" />

```ts
onUpdate(task: Task, chunkSize: number): void
```
#### Parameters

- **task**: `Task`
- **chunkSize**: `number`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L60" target="_blank" rel="noreferrer">packages/task/index.ts:60</a>
</p>


