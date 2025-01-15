# Class UnzipTask

## 🏭 Constructors

### constructor

```ts
UnzipTask(zipFile: ZipFile, entries: Entry[], destination: string, resolver: EntryResolver= ..., interpreter: (input: Readable, file: string) => void= ...): UnzipTask
```
#### Parameters

- **zipFile**: `ZipFile`
- **entries**: `Entry[]`
- **destination**: `string`
- **resolver**: `EntryResolver`
- **interpreter**: `(input: Readable, file: string) => void`
#### Return Type

- `UnzipTask`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L22" target="_blank" rel="noreferrer">packages/installer/unzip.ts:22</a>
</p>


## 🏷️ Properties

### _from <Badge type="warning" text="protected" />

```ts
_from: undefined | string
```
*Inherited from: `BaseTask._from`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L80" target="_blank" rel="noreferrer">packages/task/index.ts:80</a>
</p>


### _id <Badge type="warning" text="protected" />

```ts
_id: number = 0
```
*Inherited from: `BaseTask._id`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L85" target="_blank" rel="noreferrer">packages/task/index.ts:85</a>
</p>


### _path <Badge type="warning" text="protected" />

```ts
_path: string = ''
```
*Inherited from: `BaseTask._path`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L84" target="_blank" rel="noreferrer">packages/task/index.ts:84</a>
</p>


### _progress <Badge type="warning" text="protected" />

```ts
_progress: number = 0
```
*Inherited from: `BaseTask._progress`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L82" target="_blank" rel="noreferrer">packages/task/index.ts:82</a>
</p>


### _promise <Badge type="warning" text="protected" />

```ts
_promise: Promise<void>
```
*Inherited from: `BaseTask._promise`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L75" target="_blank" rel="noreferrer">packages/task/index.ts:75</a>
</p>


### _state <Badge type="warning" text="protected" />

```ts
_state: TaskState = TaskState.Idle
```
*Inherited from: `BaseTask._state`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L74" target="_blank" rel="noreferrer">packages/task/index.ts:74</a>
</p>


### _to <Badge type="warning" text="protected" />

```ts
_to: undefined | string
```
*Inherited from: `BaseTask._to`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L81" target="_blank" rel="noreferrer">packages/task/index.ts:81</a>
</p>


### _total <Badge type="warning" text="protected" />

```ts
_total: number = -1
```
*Inherited from: `BaseTask._total`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L83" target="_blank" rel="noreferrer">packages/task/index.ts:83</a>
</p>


### context

```ts
context: TaskContext = {}
```
*Inherited from: `BaseTask.context`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L88" target="_blank" rel="noreferrer">packages/task/index.ts:88</a>
</p>


### entries <Badge type="tip" text="readonly" />

```ts
entries: Entry[]
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L22" target="_blank" rel="noreferrer">packages/installer/unzip.ts:22</a>
</p>


### interpreter <Badge type="tip" text="readonly" />

```ts
interpreter: (input: Readable, file: string) => void = ...
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L22" target="_blank" rel="noreferrer">packages/installer/unzip.ts:22</a>
</p>


### name

```ts
name: string = ''
```
*Inherited from: `BaseTask.name`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L90" target="_blank" rel="noreferrer">packages/task/index.ts:90</a>
</p>


### param

```ts
param: object = {}
```
*Inherited from: `BaseTask.param`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L91" target="_blank" rel="noreferrer">packages/task/index.ts:91</a>
</p>


### parent

```ts
parent: undefined | Task
```
*Inherited from: `BaseTask.parent`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L87" target="_blank" rel="noreferrer">packages/task/index.ts:87</a>
</p>


### reject <Badge type="warning" text="protected" />

```ts
reject: (err: any) => void
```
*Inherited from: `BaseTask.reject`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L78" target="_blank" rel="noreferrer">packages/task/index.ts:78</a>
</p>


### resolve <Badge type="warning" text="protected" />

```ts
resolve: (value: void) => void
```
*Inherited from: `BaseTask.resolve`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L77" target="_blank" rel="noreferrer">packages/task/index.ts:77</a>
</p>


### resolver <Badge type="tip" text="readonly" />

```ts
resolver: EntryResolver = ...
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L22" target="_blank" rel="noreferrer">packages/installer/unzip.ts:22</a>
</p>


### resultOrError <Badge type="warning" text="protected" />

```ts
resultOrError: any
```
*Inherited from: `BaseTask.resultOrError`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L93" target="_blank" rel="noreferrer">packages/task/index.ts:93</a>
</p>


### zipFile <Badge type="tip" text="readonly" />

```ts
zipFile: ZipFile
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L22" target="_blank" rel="noreferrer">packages/installer/unzip.ts:22</a>
</p>


## 🔑 Accessors

### from

*Inherited from: `BaseTask.from`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L121" target="_blank" rel="noreferrer">packages/task/index.ts:121</a>
</p>


### id

*Inherited from: `BaseTask.id`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L116" target="_blank" rel="noreferrer">packages/task/index.ts:116</a>
</p>


### isCancelled

*Inherited from: `BaseTask.isCancelled`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L124" target="_blank" rel="noreferrer">packages/task/index.ts:124</a>
</p>


### isDone

*Inherited from: `BaseTask.isDone`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L126" target="_blank" rel="noreferrer">packages/task/index.ts:126</a>
</p>


### isPaused

*Inherited from: `BaseTask.isPaused`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L125" target="_blank" rel="noreferrer">packages/task/index.ts:125</a>
</p>


### isRunning

*Inherited from: `BaseTask.isRunning`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L127" target="_blank" rel="noreferrer">packages/task/index.ts:127</a>
</p>


### path

*Inherited from: `BaseTask.path`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L117" target="_blank" rel="noreferrer">packages/task/index.ts:117</a>
</p>


### progress

*Inherited from: `BaseTask.progress`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L118" target="_blank" rel="noreferrer">packages/task/index.ts:118</a>
</p>


### state

*Inherited from: `BaseTask.state`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L122" target="_blank" rel="noreferrer">packages/task/index.ts:122</a>
</p>


### to

*Inherited from: `BaseTask.to`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L120" target="_blank" rel="noreferrer">packages/task/index.ts:120</a>
</p>


### total

*Inherited from: `BaseTask.total`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L119" target="_blank" rel="noreferrer">packages/task/index.ts:119</a>
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

*Inherited from: `BaseTask.cancel`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L145" target="_blank" rel="noreferrer">packages/task/index.ts:145</a>
</p>


### cancelTask <Badge type="warning" text="protected" />

```ts
cancelTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L76" target="_blank" rel="noreferrer">packages/installer/unzip.ts:76</a>
</p>


### get

```ts
get(): void
```
#### Return Type

- `void`

*Inherited from: `BaseTask.get`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L108" target="_blank" rel="noreferrer">packages/task/index.ts:108</a>
</p>


### handleEntry <Badge type="warning" text="protected" />

```ts
handleEntry(entry: Entry, relativePath: string): Promise<void>
```
#### Parameters

- **entry**: `Entry`
- **relativePath**: `string`
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L27" target="_blank" rel="noreferrer">packages/installer/unzip.ts:27</a>
</p>


### map

```ts
map(transform: Transform<UnzipTask, N>): Task<N extends Promise<R> ? R : N>
```
#### Parameters

- **transform**: `Transform<UnzipTask, N>`
#### Return Type

- `Task<N extends Promise<R> ? R : N>`

*Inherited from: `BaseTask.map`*

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

*Inherited from: `BaseTask.onChildUpdate`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L205" target="_blank" rel="noreferrer">packages/task/index.ts:205</a>
</p>


### pause

```ts
pause(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `BaseTask.pause`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L129" target="_blank" rel="noreferrer">packages/task/index.ts:129</a>
</p>


### pauseTask <Badge type="warning" text="protected" />

```ts
pauseTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L88" target="_blank" rel="noreferrer">packages/installer/unzip.ts:88</a>
</p>


### resume

```ts
resume(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `BaseTask.resume`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L137" target="_blank" rel="noreferrer">packages/task/index.ts:137</a>
</p>


### resumeTask <Badge type="warning" text="protected" />

```ts
resumeTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L97" target="_blank" rel="noreferrer">packages/installer/unzip.ts:97</a>
</p>


### runTask <Badge type="warning" text="protected" />

```ts
runTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/unzip.ts#L52" target="_blank" rel="noreferrer">packages/installer/unzip.ts:52</a>
</p>


### setName

```ts
setName(name: string, param: object): UnzipTask
```
#### Parameters

- **name**: `string`
- **param**: `object`
#### Return Type

- `UnzipTask`

*Inherited from: `BaseTask.setName`*

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

*Inherited from: `BaseTask.start`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L164" target="_blank" rel="noreferrer">packages/task/index.ts:164</a>
</p>


### startAndWait

```ts
startAndWait(context: TaskContext, parent: Task): Promise<void>
```
#### Parameters

- **context**: `TaskContext`
- **parent**: `Task`
#### Return Type

- `Promise<void>`

*Inherited from: `BaseTask.startAndWait`*

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

*Inherited from: `BaseTask.update`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L200" target="_blank" rel="noreferrer">packages/task/index.ts:200</a>
</p>


### wait

```ts
wait(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `BaseTask.wait`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L160" target="_blank" rel="noreferrer">packages/task/index.ts:160</a>
</p>


