# Interface Task

## 🏷️ Properties

### context <Badge type="tip" text="readonly" />

```ts
context: undefined | TaskContext
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L36" target="_blank" rel="noreferrer">packages/task/index.ts:36</a>
</p>


### from <Badge type="tip" text="readonly" />

```ts
from: undefined | string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L26" target="_blank" rel="noreferrer">packages/task/index.ts:26</a>
</p>


### id <Badge type="tip" text="readonly" />

```ts
id: number
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L21" target="_blank" rel="noreferrer">packages/task/index.ts:21</a>
</p>


### isCancelled <Badge type="tip" text="readonly" />

```ts
isCancelled: boolean
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L30" target="_blank" rel="noreferrer">packages/task/index.ts:30</a>
</p>


### isDone <Badge type="tip" text="readonly" />

```ts
isDone: boolean
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L32" target="_blank" rel="noreferrer">packages/task/index.ts:32</a>
</p>


### isPaused <Badge type="tip" text="readonly" />

```ts
isPaused: boolean
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L31" target="_blank" rel="noreferrer">packages/task/index.ts:31</a>
</p>


### isRunning <Badge type="tip" text="readonly" />

```ts
isRunning: boolean
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L33" target="_blank" rel="noreferrer">packages/task/index.ts:33</a>
</p>


### name <Badge type="tip" text="readonly" />

```ts
name: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L22" target="_blank" rel="noreferrer">packages/task/index.ts:22</a>
</p>


### param <Badge type="tip" text="readonly" />

```ts
param: Record<string, any>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L23" target="_blank" rel="noreferrer">packages/task/index.ts:23</a>
</p>


### parent <Badge type="tip" text="readonly" />

```ts
parent: undefined | Task
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L37" target="_blank" rel="noreferrer">packages/task/index.ts:37</a>
</p>


### path <Badge type="tip" text="readonly" />

```ts
path: string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L29" target="_blank" rel="noreferrer">packages/task/index.ts:29</a>
</p>


### progress <Badge type="tip" text="readonly" />

```ts
progress: number
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L24" target="_blank" rel="noreferrer">packages/task/index.ts:24</a>
</p>


### state <Badge type="tip" text="readonly" />

```ts
state: TaskState
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L34" target="_blank" rel="noreferrer">packages/task/index.ts:34</a>
</p>


### to <Badge type="tip" text="readonly" />

```ts
to: undefined | string
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L27" target="_blank" rel="noreferrer">packages/task/index.ts:27</a>
</p>


### total <Badge type="tip" text="readonly" />

```ts
total: number
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L25" target="_blank" rel="noreferrer">packages/task/index.ts:25</a>
</p>


## 🔧 Methods

### cancel

```ts
cancel(timeout: number): Promise<void>
```
#### Parameters

- **timeout**: `number`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L41" target="_blank" rel="noreferrer">packages/task/index.ts:41</a>
</p>


### map

```ts
map(transform: Transform<Task<T>, N>): Task<N extends Promise<R> ? R : N>
```
#### Parameters

- **transform**: `Transform<Task<T>, N>`
#### Return Type

- `Task<N extends Promise<R> ? R : N>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L48" target="_blank" rel="noreferrer">packages/task/index.ts:48</a>
</p>


### onChildUpdate

```ts
onChildUpdate(chunkSize: number): void
```
#### Parameters

- **chunkSize**: `number`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L46" target="_blank" rel="noreferrer">packages/task/index.ts:46</a>
</p>


### pause

```ts
pause(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L39" target="_blank" rel="noreferrer">packages/task/index.ts:39</a>
</p>


### resume

```ts
resume(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L40" target="_blank" rel="noreferrer">packages/task/index.ts:40</a>
</p>


### setName

```ts
setName(name: string, param: Record<string, any>): this
```
#### Parameters

- **name**: `string`
- **param**: `Record<string, any>`
#### Return Type

- `this`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L50" target="_blank" rel="noreferrer">packages/task/index.ts:50</a>
</p>


### start

```ts
start(context: TaskContext, parent: Task): void
```
#### Parameters

- **context**: `TaskContext`
- **parent**: `Task`
#### Return Type

- `void`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L42" target="_blank" rel="noreferrer">packages/task/index.ts:42</a>
</p>


### startAndWait

```ts
startAndWait(context: TaskContext, parent: Task): Promise<T>
```
#### Parameters

- **context**: `TaskContext`
- **parent**: `Task`
#### Return Type

- `Promise<T>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L44" target="_blank" rel="noreferrer">packages/task/index.ts:44</a>
</p>


### wait

```ts
wait(): Promise<T>
```
#### Return Type

- `Promise<T>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L43" target="_blank" rel="noreferrer">packages/task/index.ts:43</a>
</p>


