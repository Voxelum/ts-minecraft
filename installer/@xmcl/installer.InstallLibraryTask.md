# Class InstallLibraryTask

## 🏭 Constructors

### constructor

```ts
InstallLibraryTask(libs: ResolvedLibrary[], folder: MinecraftFolder, options: LibraryOptions): InstallLibraryTask
```
#### Parameters

- **libs**: `ResolvedLibrary[]`
- **folder**: `MinecraftFolder`
- **options**: `LibraryOptions`
#### Return Type

- `InstallLibraryTask`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/minecraft.ts#L498" target="_blank" rel="noreferrer">packages/installer/minecraft.ts:498</a>
</p>


## 🏷️ Properties

### _from <Badge type="warning" text="protected" />

```ts
_from: undefined | string
```
*Inherited from: `DownloadMultipleTask._from`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L80" target="_blank" rel="noreferrer">packages/task/index.ts:80</a>
</p>


### _id <Badge type="warning" text="protected" />

```ts
_id: number = 0
```
*Inherited from: `DownloadMultipleTask._id`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L85" target="_blank" rel="noreferrer">packages/task/index.ts:85</a>
</p>


### _path <Badge type="warning" text="protected" />

```ts
_path: string = ''
```
*Inherited from: `DownloadMultipleTask._path`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L84" target="_blank" rel="noreferrer">packages/task/index.ts:84</a>
</p>


### _pausing <Badge type="warning" text="protected" />

```ts
_pausing: Promise<void> = ...
```
*Inherited from: `DownloadMultipleTask._pausing`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L224" target="_blank" rel="noreferrer">packages/task/index.ts:224</a>
</p>


### _progress <Badge type="warning" text="protected" />

```ts
_progress: number = 0
```
*Inherited from: `DownloadMultipleTask._progress`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L82" target="_blank" rel="noreferrer">packages/task/index.ts:82</a>
</p>


### _promise <Badge type="warning" text="protected" />

```ts
_promise: Promise<void>
```
*Inherited from: `DownloadMultipleTask._promise`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L75" target="_blank" rel="noreferrer">packages/task/index.ts:75</a>
</p>


### _state <Badge type="warning" text="protected" />

```ts
_state: TaskState = TaskState.Idle
```
*Inherited from: `DownloadMultipleTask._state`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L74" target="_blank" rel="noreferrer">packages/task/index.ts:74</a>
</p>


### _to <Badge type="warning" text="protected" />

```ts
_to: undefined | string
```
*Inherited from: `DownloadMultipleTask._to`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L81" target="_blank" rel="noreferrer">packages/task/index.ts:81</a>
</p>


### _total <Badge type="warning" text="protected" />

```ts
_total: number = -1
```
*Inherited from: `DownloadMultipleTask._total`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L83" target="_blank" rel="noreferrer">packages/task/index.ts:83</a>
</p>


### context

```ts
context: TaskContext = {}
```
*Inherited from: `DownloadMultipleTask.context`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L88" target="_blank" rel="noreferrer">packages/task/index.ts:88</a>
</p>


### controller <Badge type="warning" text="protected" />

```ts
controller: undefined | AbortController
```
*Inherited from: `DownloadMultipleTask.controller`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L44" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:44</a>
</p>


### name

```ts
name: string = ''
```
*Inherited from: `DownloadMultipleTask.name`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L90" target="_blank" rel="noreferrer">packages/task/index.ts:90</a>
</p>


### onFinished <Badge type="warning" text="protected" /> <Badge type="info" text="optional" />

```ts
onFinished: (index: number) => void
```
*Inherited from: `DownloadMultipleTask.onFinished`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L68" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:68</a>
</p>


### options <Badge type="warning" text="protected" />

```ts
options: DownloadOptions[]
```
*Inherited from: `DownloadMultipleTask.options`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L48" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:48</a>
</p>


### param

```ts
param: object = {}
```
*Inherited from: `DownloadMultipleTask.param`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L91" target="_blank" rel="noreferrer">packages/task/index.ts:91</a>
</p>


### parent

```ts
parent: undefined | Task
```
*Inherited from: `DownloadMultipleTask.parent`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L87" target="_blank" rel="noreferrer">packages/task/index.ts:87</a>
</p>


### progresses <Badge type="warning" text="protected" />

```ts
progresses: number[] = []
```
*Inherited from: `DownloadMultipleTask.progresses`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L45" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:45</a>
</p>


### reject <Badge type="warning" text="protected" />

```ts
reject: (err: any) => void
```
*Inherited from: `DownloadMultipleTask.reject`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L78" target="_blank" rel="noreferrer">packages/task/index.ts:78</a>
</p>


### resolve <Badge type="warning" text="protected" />

```ts
resolve: (value: void) => void
```
*Inherited from: `DownloadMultipleTask.resolve`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L77" target="_blank" rel="noreferrer">packages/task/index.ts:77</a>
</p>


### resultOrError <Badge type="warning" text="protected" />

```ts
resultOrError: any
```
*Inherited from: `DownloadMultipleTask.resultOrError`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L93" target="_blank" rel="noreferrer">packages/task/index.ts:93</a>
</p>


### totals <Badge type="warning" text="protected" />

```ts
totals: number[] = []
```
*Inherited from: `DownloadMultipleTask.totals`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L46" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:46</a>
</p>


## 🔑 Accessors

### from

*Inherited from: `DownloadMultipleTask.from`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L121" target="_blank" rel="noreferrer">packages/task/index.ts:121</a>
</p>


### id

*Inherited from: `DownloadMultipleTask.id`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L116" target="_blank" rel="noreferrer">packages/task/index.ts:116</a>
</p>


### isCancelled

*Inherited from: `DownloadMultipleTask.isCancelled`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L124" target="_blank" rel="noreferrer">packages/task/index.ts:124</a>
</p>


### isDone

*Inherited from: `DownloadMultipleTask.isDone`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L126" target="_blank" rel="noreferrer">packages/task/index.ts:126</a>
</p>


### isPaused

*Inherited from: `DownloadMultipleTask.isPaused`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L125" target="_blank" rel="noreferrer">packages/task/index.ts:125</a>
</p>


### isRunning

*Inherited from: `DownloadMultipleTask.isRunning`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L127" target="_blank" rel="noreferrer">packages/task/index.ts:127</a>
</p>


### path

*Inherited from: `DownloadMultipleTask.path`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L117" target="_blank" rel="noreferrer">packages/task/index.ts:117</a>
</p>


### progress

*Inherited from: `DownloadMultipleTask.progress`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L61" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:61</a>
</p>


### state

*Inherited from: `DownloadMultipleTask.state`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L122" target="_blank" rel="noreferrer">packages/task/index.ts:122</a>
</p>


### to

*Inherited from: `DownloadMultipleTask.to`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L120" target="_blank" rel="noreferrer">packages/task/index.ts:120</a>
</p>


### total

*Inherited from: `DownloadMultipleTask.total`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L54" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:54</a>
</p>


## 🔧 Methods

### _onAborted <Badge type="warning" text="protected" />

```ts
_onAborted(): void
```
#### Return Type

- `void`

*Inherited from: `DownloadMultipleTask._onAborted`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L226" target="_blank" rel="noreferrer">packages/task/index.ts:226</a>
</p>


### _onResume <Badge type="warning" text="protected" />

```ts
_onResume(): void
```
#### Return Type

- `void`

*Inherited from: `DownloadMultipleTask._onResume`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L227" target="_blank" rel="noreferrer">packages/task/index.ts:227</a>
</p>


### _unpause <Badge type="warning" text="protected" />

```ts
_unpause(): void
```
#### Return Type

- `void`

*Inherited from: `DownloadMultipleTask._unpause`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L225" target="_blank" rel="noreferrer">packages/task/index.ts:225</a>
</p>


### abort <Badge type="warning" text="protected" />

```ts
abort(isCancelled: boolean): void
```
#### Parameters

- **isCancelled**: `boolean`
#### Return Type

- `void`

*Inherited from: `DownloadMultipleTask.abort`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L102" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:102</a>
</p>


### cancel

```ts
cancel(timeout: number): Promise<void>
```
#### Parameters

- **timeout**: `number`
#### Return Type

- `Promise<void>`

*Inherited from: `DownloadMultipleTask.cancel`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L145" target="_blank" rel="noreferrer">packages/task/index.ts:145</a>
</p>


### cancelTask <Badge type="warning" text="protected" />

```ts
cancelTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `DownloadMultipleTask.cancelTask`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L233" target="_blank" rel="noreferrer">packages/task/index.ts:233</a>
</p>


### get

```ts
get(): void
```
#### Return Type

- `void`

*Inherited from: `DownloadMultipleTask.get`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L108" target="_blank" rel="noreferrer">packages/task/index.ts:108</a>
</p>


### isAbortedError <Badge type="warning" text="protected" />

```ts
isAbortedError(e: any): boolean
```
#### Parameters

- **e**: `any`
#### Return Type

- `boolean`

*Inherited from: `DownloadMultipleTask.isAbortedError`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L108" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:108</a>
</p>


### map

```ts
map(transform: Transform<InstallLibraryTask, N>): Task<N extends Promise<R> ? R : N>
```
#### Parameters

- **transform**: `Transform<InstallLibraryTask, N>`
#### Return Type

- `Task<N extends Promise<R> ? R : N>`

*Inherited from: `DownloadMultipleTask.map`*

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

*Inherited from: `DownloadMultipleTask.onChildUpdate`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L205" target="_blank" rel="noreferrer">packages/task/index.ts:205</a>
</p>


### pause

```ts
pause(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `DownloadMultipleTask.pause`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L129" target="_blank" rel="noreferrer">packages/task/index.ts:129</a>
</p>


### pauseTask <Badge type="warning" text="protected" />

```ts
pauseTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `DownloadMultipleTask.pauseTask`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L240" target="_blank" rel="noreferrer">packages/task/index.ts:240</a>
</p>


### process <Badge type="warning" text="protected" />

```ts
process(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `DownloadMultipleTask.process`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/installer/downloadTask.ts#L70" target="_blank" rel="noreferrer">packages/installer/downloadTask.ts:70</a>
</p>


### resume

```ts
resume(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `DownloadMultipleTask.resume`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L137" target="_blank" rel="noreferrer">packages/task/index.ts:137</a>
</p>


### resumeTask <Badge type="warning" text="protected" />

```ts
resumeTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `DownloadMultipleTask.resumeTask`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L250" target="_blank" rel="noreferrer">packages/task/index.ts:250</a>
</p>


### runTask <Badge type="warning" text="protected" />

```ts
runTask(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `DownloadMultipleTask.runTask`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L257" target="_blank" rel="noreferrer">packages/task/index.ts:257</a>
</p>


### setName

```ts
setName(name: string, param: object): InstallLibraryTask
```
#### Parameters

- **name**: `string`
- **param**: `object`
#### Return Type

- `InstallLibraryTask`

*Inherited from: `DownloadMultipleTask.setName`*

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

*Inherited from: `DownloadMultipleTask.start`*

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

*Inherited from: `DownloadMultipleTask.startAndWait`*

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

*Inherited from: `DownloadMultipleTask.update`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L200" target="_blank" rel="noreferrer">packages/task/index.ts:200</a>
</p>


### wait

```ts
wait(): Promise<void>
```
#### Return Type

- `Promise<void>`

*Inherited from: `DownloadMultipleTask.wait`*

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L160" target="_blank" rel="noreferrer">packages/task/index.ts:160</a>
</p>


