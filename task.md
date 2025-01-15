# Task Module

[![npm version](https://img.shields.io/npm/v/@xmcl/task.svg)](https://www.npmjs.com/package/@xmcl/task)
[![Downloads](https://img.shields.io/npm/dm/@xmcl/task.svg)](https://npmjs.com/@xmcl/task)
[![Install size](https://packagephobia.now.sh/badge?p=@xmcl/task)](https://packagephobia.now.sh/result?p=@xmcl/task)
[![npm](https://img.shields.io/npm/l/@xmcl/minecraft-launcher-core.svg)](https://github.com/voxelum/minecraft-launcher-core-node/blob/master/LICENSE)
[![Build Status](https://github.com/voxelum/minecraft-launcher-core-node/workflows/Build/badge.svg)](https://github.com/Voxelum/minecraft-launcher-core-node/actions?query=workflow%3ABuild)

This is a helper module for Minecraft Launcher. See the github home page for more information.

## Usage

### Progress Moniting

You can use `@xmcl/task` model to track the progress of a task. *In the launcher, they are majorly download task.*

This module implements a basic object model for task with progress. The task can be paused or cancelled.

```ts
    import { Task, TaskBase, task } from "@xmcl/task";

    class ATask extends TaskBase {
        // implement a task
    }

    class BTask extends TaskBase {
        // implement a task
    }

    // suppose you have such task
    const myTask = task("hello", function() {
        await this.yield(new ATask().setName("world"));
        await this.yield(new BTask().setName("xmcl"));
    });

    // start a task
    const result = await task.startAndWait({
        onStart(task: Task<any>) {
            // the task path is the task name joined by dot (.)
            const path = task.path;
            console.log(`${path} started!`);
        },
        onUpdate(task: Task<any>, chunkSize: number) {
            // a task update
        },
        onFailed(task: Task<any>, error: any) {
            // on a task fail
        },
        onSucceed(task: Task<any>, result: any) {
            // on task success
            const path = task.path;
            console.log(`${path} ended!`);
        },
        // on task is paused/resumed/cancelled
        onPaused(task: Task<any>) { },
        onResumed(task: Task<any>) { },
        onCancelled(task: Task<any>) { },
    });
    // the result will print like
    // hello started!
    // hello.world started!
    // hello.world ended!
    // hello.xmcl started!
    // hello.xmcl ended!
    // hello ended!
```

## 🧾 Classes

<div class="definition-grid class"><a href="task/@xmcl/task.AbortableTask">AbortableTask</a><a href="task/@xmcl/task.BaseTask">BaseTask</a><a href="task/@xmcl/task.CancelledError">CancelledError</a><a href="task/@xmcl/task.TaskGroup">TaskGroup</a><a href="task/@xmcl/task.TaskRoutine">TaskRoutine</a></div>

## 🤝 Interfaces

<div class="definition-grid interface"><a href="task/@xmcl/task.Task">Task</a><a href="task/@xmcl/task.TaskContext">TaskContext</a><a href="task/@xmcl/task.Transform">Transform</a></div>

## 🏳️ Enums

<div class="definition-grid enum"><a href="task/@xmcl/task.TaskState">TaskState</a></div>

## 🏭 Functions

### createFork

```ts
createFork(): TaskContext["fork"]
```
#### Return Type

- `TaskContext["fork"]`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L68" target="_blank" rel="noreferrer">packages/task/index.ts:68</a>
</p>


### task

```ts
task(name: string, executor: TaskExecutor<T>, param: object= {}): TaskRoutine<T>
```
#### Parameters

- **name**: `string`
- **executor**: `TaskExecutor<T>`
- **param**: `object`
#### Return Type

- `TaskRoutine<T>`

<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L406" target="_blank" rel="noreferrer">packages/task/index.ts:406</a>
</p>



## ⏩ Type Aliases

### TaskExecutor

```ts
TaskExecutor: (this: TaskRoutine<any>) => Promise<T> | T
```
<p style="font-size: 14px; color: var(--vp-c-text-2)">
<strong>Defined in:</strong> <a href="https://github.com/voxelum/minecraft-launcher-core-node/blob/master/packages/task/index.ts#L363" target="_blank" rel="noreferrer">packages/task/index.ts:363</a>
</p>



