# Class TaskRoutine

## 🏭 Constructors

### constructor

```ts
TaskRoutine(name: string, executor: TaskExecutor<T>, param: object= {}): TaskRoutine<T>
```
#### Parameters

- **name**: `string`
- **executor**: `TaskExecutor<T>`
- **param**: `object`
#### Return Type

- `TaskRoutine<T>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L365" target="_blank" rel="noreferrer">packages/task/index.ts:365</a>
</p>


## 🏷️ Properties

### _from <Badge type="warning" text="protected" />

```ts
_from: undefined | string
```
*Inherited from: `TaskGroup._from`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L80" target="_blank" rel="noreferrer">packages/task/index.ts:80</a>
</p>


### _id <Badge type="warning" text="protected" />

```ts
_id: number = 0
```
*Inherited from: `TaskGroup._id`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L85" target="_blank" rel="noreferrer">packages/task/index.ts:85</a>
</p>


### _path <Badge type="warning" text="protected" />

```ts
_path: string = ''
```
*Inherited from: `TaskGroup._path`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L84" target="_blank" rel="noreferrer">packages/task/index.ts:84</a>
</p>


### _progress <Badge type="warning" text="protected" />

```ts
_progress: number = 0
```
*Inherited from: `TaskGroup._progress`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L82" target="_blank" rel="noreferrer">packages/task/index.ts:82</a>
</p>


### _promise <Badge type="warning" text="protected" />

```ts
_promise: Promise<T>
```
*Inherited from: `TaskGroup._promise`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L75" target="_blank" rel="noreferrer">packages/task/index.ts:75</a>
</p>


### _state <Badge type="warning" text="protected" />

```ts
_state: TaskState = TaskState.Idle
```
*Inherited from: `TaskGroup._state`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L74" target="_blank" rel="noreferrer">packages/task/index.ts:74</a>
</p>


### _to <Badge type="warning" text="protected" />

```ts
_to: undefined | string
```
*Inherited from: `TaskGroup._to`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L81" target="_blank" rel="noreferrer">packages/task/index.ts:81</a>
</p>


### _total <Badge type="warning" text="protected" />

```ts
_total: number = -1
```
*Inherited from: `TaskGroup._total`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L83" target="_blank" rel="noreferrer">packages/task/index.ts:83</a>
</p>


### children <Badge type="warning" text="protected" />

```ts
children: Task[] = []
```
*Inherited from: `TaskGroup.children`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L285" target="_blank" rel="noreferrer">packages/task/index.ts:285</a>
</p>


### context

```ts
context: TaskContext = {}
```
*Inherited from: `TaskGroup.context`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L88" target="_blank" rel="noreferrer">packages/task/index.ts:88</a>
</p>


### executor <Badge type="tip" text="readonly" />

```ts
executor: TaskExecutor<T>
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L365" target="_blank" rel="noreferrer">packages/task/index.ts:365</a>
</p>


### name

```ts
name: string = ''
```
*Inherited from: `TaskGroup.name`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L90" target="_blank" rel="noreferrer">packages/task/index.ts:90</a>
</p>


### param

```ts
param: object = {}
```
*Inherited from: `TaskGroup.param`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L91" target="_blank" rel="noreferrer">packages/task/index.ts:91</a>
</p>


### parent

```ts
parent: undefined | Task
```
*Inherited from: `TaskGroup.parent`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L87" target="_blank" rel="noreferrer">packages/task/index.ts:87</a>
</p>


### reject <Badge type="warning" text="protected" />

```ts
reject: (err: any) => void
```
*Inherited from: `TaskGroup.reject`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L78" target="_blank" rel="noreferrer">packages/task/index.ts:78</a>
</p>


### resolve <Badge type="warning" text="protected" />

```ts
resolve: (value: T) => void
```
*Inherited from: `TaskGroup.resolve`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L77" target="_blank" rel="noreferrer">packages/task/index.ts:77</a>
</p>


### resultOrError <Badge type="warning" text="protected" />

```ts
resultOrError: any
```
*Inherited from: `TaskGroup.resultOrError`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L93" target="_blank" rel="noreferrer">packages/task/index.ts:93</a>
</p>


## 🔑 Accessors

### from

*Inherited from: `TaskGroup.from`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L121" target="_blank" rel="noreferrer">packages/task/index.ts:121</a>
</p>


### id

*Inherited from: `TaskGroup.id`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L116" target="_blank" rel="noreferrer">packages/task/index.ts:116</a>
</p>


### isCancelled

*Inherited from: `TaskGroup.isCancelled`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L124" target="_blank" rel="noreferrer">packages/task/index.ts:124</a>
</p>


### isDone

*Inherited from: `TaskGroup.isDone`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L126" target="_blank" rel="noreferrer">packages/task/index.ts:126</a>
</p>


### isPaused

*Inherited from: `TaskGroup.isPaused`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L125" target="_blank" rel="noreferrer">packages/task/index.ts:125</a>
</p>


### isRunning

*Inherited from: `TaskGroup.isRunning`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L127" target="_blank" rel="noreferrer">packages/task/index.ts:127</a>
</p>


### path

*Inherited from: `TaskGroup.path`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L117" target="_blank" rel="noreferrer">packages/task/index.ts:117</a>
</p>


### progress

*Inherited from: `TaskGroup.progress`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L118" target="_blank" rel="noreferrer">packages/task/index.ts:118</a>
</p>


### state

*Inherited from: `TaskGroup.state`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L122" target="_blank" rel="noreferrer">packages/task/index.ts:122</a>
</p>


### to

*Inherited from: `TaskGroup.to`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L120" target="_blank" rel="noreferrer">packages/task/index.ts:120</a>
</p>


### total

*Inherited from: `TaskGroup.total`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L119" target="_blank" rel="noreferrer">packages/task/index.ts:119</a>
</p>


## 🔧 Methods

### all

```ts
all(tasks: Iterable<T>, __namedParameters: { getErrorMessage?: (errors: any[]) => string; throwErrorImmediately?: boolean }= ...): Promise<(T extends Task<R> ? R : never)[]>
```
#### Parameters

- **tasks**: `Iterable<T>`
- **__namedParameters**: `{ getErrorMessage?: (errors: any[]) => string; throwErrorImmediately?: boolean }`
#### Return Type

- `Promise<(T extends Task<R> ? R : never)[]>`

*Inherited from: `TaskGroup.all`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L311" target="_blank" rel="noreferrer">packages/task/index.ts:311</a>
</p>


### cancel

```ts
cancel(timeout: number): Promise<void>
```
#### Parameters

- **timeout**: `number`
#### Return Type

- `Promise<void>`

*Inherited from: `TaskGroup.cancel`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L145" target="_blank" rel="noreferrer">packages/task/index.ts:145</a>
</p>


### cancelTask <Badge type="warning" text="protected" />

```ts
cancelTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `TaskGroup.cancelTask`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L299" target="_blank" rel="noreferrer">packages/task/index.ts:299</a>
</p>


### concat

```ts
concat(task: TaskRoutine<T>): Promise<T>
```
#### Parameters

- **task**: `TaskRoutine<T>`
#### Return Type

- `Promise<T>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L370" target="_blank" rel="noreferrer">packages/task/index.ts:370</a>
</p>


### get

```ts
get(): void | T
```
#### Return Type

- `void | T`

*Inherited from: `TaskGroup.get`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L108" target="_blank" rel="noreferrer">packages/task/index.ts:108</a>
</p>


### map

```ts
map(transform: Transform<TaskRoutine<T>, N>): Task<N extends Promise<R> ? R : N>
```
#### Parameters

- **transform**: `Transform<TaskRoutine<T>, N>`
#### Return Type

- `Task<N extends Promise<R> ? R : N>`

*Inherited from: `TaskGroup.map`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L212" target="_blank" rel="noreferrer">packages/task/index.ts:212</a>
</p>


### onChildUpdate

```ts
onChildUpdate(chunkSize: number): void
```
#### Parameters

- **chunkSize**: `number`
#### Return Type

- `void`

*Inherited from: `TaskGroup.onChildUpdate`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L287" target="_blank" rel="noreferrer">packages/task/index.ts:287</a>
</p>


### pause

```ts
pause(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `TaskGroup.pause`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L129" target="_blank" rel="noreferrer">packages/task/index.ts:129</a>
</p>


### pauseTask <Badge type="warning" text="protected" />

```ts
pauseTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `TaskGroup.pauseTask`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L303" target="_blank" rel="noreferrer">packages/task/index.ts:303</a>
</p>


### resume

```ts
resume(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `TaskGroup.resume`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L137" target="_blank" rel="noreferrer">packages/task/index.ts:137</a>
</p>


### resumeTask <Badge type="warning" text="protected" />

```ts
resumeTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `TaskGroup.resumeTask`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L307" target="_blank" rel="noreferrer">packages/task/index.ts:307</a>
</p>


### runTask <Badge type="warning" text="protected" />

```ts
runTask(): Promise<T>
```
#### Return Type

- `Promise<T>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L393" target="_blank" rel="noreferrer">packages/task/index.ts:393</a>
</p>


### setName

```ts
setName(name: string, param: object): TaskRoutine<T>
```
#### Parameters

- **name**: `string`
- **param**: `object`
#### Return Type

- `TaskRoutine<T>`

*Inherited from: `TaskGroup.setName`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L102" target="_blank" rel="noreferrer">packages/task/index.ts:102</a>
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

*Inherited from: `TaskGroup.start`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L164" target="_blank" rel="noreferrer">packages/task/index.ts:164</a>
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

*Inherited from: `TaskGroup.startAndWait`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L195" target="_blank" rel="noreferrer">packages/task/index.ts:195</a>
</p>


### update <Badge type="warning" text="protected" />

```ts
update(chunkSize: number): void
```
#### Parameters

- **chunkSize**: `number`
#### Return Type

- `void`

*Inherited from: `TaskGroup.update`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L200" target="_blank" rel="noreferrer">packages/task/index.ts:200</a>
</p>


### wait

```ts
wait(): Promise<T>
```
#### Return Type

- `Promise<T>`

*Inherited from: `TaskGroup.wait`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L160" target="_blank" rel="noreferrer">packages/task/index.ts:160</a>
</p>


### yield

```ts
yield(task: Task<T>): Promise<T>
```
Yield a new child task to this routine
#### Parameters

- **task**: `Task<T>`
#### Return Type

- `Promise<T>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L385" target="_blank" rel="noreferrer">packages/task/index.ts:385</a>
</p>


