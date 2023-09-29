/**
 * @module @xmcl/task
 */
export class CancelledError extends Error {
  constructor() {
    super('Cancelled')
    this.name = 'CancelledError'
  }
}

export enum TaskState {
  Idle,
  Running,
  Cancelled,
  Paused,
  Succeed,
  Failed,
}

export interface Task<T = any> {
  readonly id: number
  readonly name: string
  readonly param: Record<string, any>
  readonly progress: number
  readonly total: number
  readonly from: string | undefined
  readonly to: string | undefined

  readonly path: string
  readonly isCancelled: boolean
  readonly isPaused: boolean
  readonly isDone: boolean
  readonly isRunning: boolean
  readonly state: TaskState

  readonly context: TaskContext | undefined
  readonly parent: Task<any> | undefined

  pause(): Promise<void>
  resume(): Promise<void>
  cancel(): Promise<void>
  start(context?: TaskContext, parent?: Task<any>): void
  wait(): Promise<T>
  startAndWait(context?: TaskContext, parent?: Task<any>): Promise<T>

  onChildUpdate(chunkSize: number): void

  map<N>(transform: Transform<this, N>): Task<N extends Promise<infer R> ? R : N>

  setName(name: string, param?: Record<string, any>): this
}

export interface Transform<T, N> {
  (this: T, value: T): N
}

export interface TaskContext {
  fork?(task: Task<any>): number
  onStart?(task: Task<any>): void
  onUpdate?(task: Task<any>, chunkSize: number): void
  onFailed?(task: Task<any>, error: any): void
  onSucceed?(task: Task<any>, result: any): void
  onPaused?(task: Task<any>): void
  onResumed?(task: Task<any>): void
  onCancelled?(task: Task<any>): void
}

export function createFork(): TaskContext['fork'] {
  let id = 0
  return () => id++
}

export abstract class BaseTask<T> implements Task<T> {
  protected _state: TaskState = TaskState.Idle
  protected _promise: Promise<T>

  protected resolve!: (value: T) => void
  protected reject!: (err: any) => void

  protected _from: string | undefined
  protected _to: string | undefined
  protected _progress = 0
  protected _total = -1
  protected _path = ''
  protected _id = 0

  parent: Task<any> | undefined
  context: TaskContext = {}

  name = ''
  param: object = {}

  protected resultOrError: T | any

  constructor() {
    this._promise = new Promise((resolve, reject) => {
      this.resolve = resolve
      this.reject = reject
    })
  }

  setName(name: string, param?: object) {
    this.name = name
    this.param = param || this.param
    return this
  }

  get(): T | void {
    if (this.state === TaskState.Succeed) {
      return this.resultOrError
    } else if (this.state === TaskState.Failed) {
      throw this.resultOrError
    }
  }

  get id() { return this._id }
  get path() { return this._path }
  get progress() { return this._progress }
  get total() { return this._total }
  get to() { return this._to }
  get from() { return this._from }
  get state() { return this._state }

  get isCancelled() { return this._state === TaskState.Cancelled }
  get isPaused() { return this._state === TaskState.Paused }
  get isDone() { return this._state === TaskState.Succeed }
  get isRunning() { return this._state === TaskState.Running }

  async pause() {
    if (this._state !== TaskState.Running) { return }
    this._state = TaskState.Paused
    await this.pauseTask().then(() => {
      this.context.onPaused?.(this)
    })
  }

  async resume() {
    if (this._state !== TaskState.Paused) { return }
    this._state = TaskState.Running
    await this.resumeTask().then(() => {
      this.context.onResumed?.(this)
    })
  }

  async cancel() {
    if (this.state !== TaskState.Running && this.state !== TaskState.Idle) { return }
    this._state = TaskState.Cancelled
    this.reject(new CancelledError())
    await this.cancelTask().then(() => {
      this.context.onCancelled?.(this)
    })
  }

  wait() {
    return this._promise
  }

  start(context?: TaskContext, parent?: Task<any>) {
    if (this._state === TaskState.Cancelled) {
      throw new CancelledError()
    }
    if (this._state !== TaskState.Idle) {
      return
    }
    if (context) {
      Object.assign(this.context, context)
    }
    if (!this.context.fork) { this.context.fork = createFork() }
    this.parent = parent
    this._state = TaskState.Running
    this._id = this.context.fork!(this)
    this._path = parent ? `${parent.path}.${this.name}` : this.name
    this.context.onStart?.(this)
    this.runTask().then((value) => {
      this.resolve(value)
      this._state = TaskState.Succeed
      this.resultOrError = value
      this.context.onSucceed?.(this, value)
    }, (error) => {
      this.reject(error)
      this.resultOrError = error
      if (this.state !== TaskState.Cancelled) {
        this._state = TaskState.Failed
        this.context.onFailed?.(this, error)
      }
    })
  }

  startAndWait(context?: TaskContext, parent?: Task<any>) {
    this.start(context, parent)
    return this.wait()
  }

  protected update(chunkSize: number) {
    this.context.onUpdate?.(this, chunkSize)
    this.parent?.onChildUpdate(chunkSize)
  }

  onChildUpdate(chunkSize: number) { }

  protected abstract runTask(): Promise<T>
  protected abstract cancelTask(): Promise<void>
  protected abstract pauseTask(): Promise<void>
  protected abstract resumeTask(): Promise<void>

  map<N>(transform: Transform<this, N>): Task<N extends Promise<infer R> ? R : N> {
    const copy = Object.create(this)
    const wait = copy.wait
    copy.wait = function (this: typeof copy) {
      // @ts-expect-error
      return wait.bind(this)().then((r) => transform.bind(this)(r))
    }
    return copy
  }
}

export abstract class AbortableTask<T> extends BaseTask<T> {
  protected _pausing: Promise<void> = Promise.resolve()
  protected _unpause = () => { }
  protected _onAborted = () => { }
  protected _onResume = () => { }

  protected abstract process(): Promise<T>
  protected abstract abort(isCancelled: boolean): void
  protected abstract isAbortedError(e: any): boolean

  protected cancelTask(): Promise<void> {
    this.abort(true)
    return new Promise((resolve) => {
      this._onAborted = resolve
    })
  }

  protected pauseTask(): Promise<void> {
    this._pausing = new Promise((resolve) => {
      this._unpause = resolve
    })
    this.abort(false)
    return new Promise((resolve) => {
      this._onAborted = resolve
    })
  }

  protected resumeTask(): Promise<void> {
    this._unpause()
    return new Promise((resolve) => {
      this._onResume = resolve
    })
  }

  protected async runTask() {
    while (true) {
      try {
        if (this.state === TaskState.Cancelled) {
          throw new CancelledError()
        }
        await this._pausing
        // notify resume task method
        this._onResume()
        const result = await this.process()
        return result
      } catch (e) {
        if (this._state === TaskState.Paused && this.isAbortedError(e)) {
          // notify pauseTask method
          this._onAborted()
          continue
        }
        if (this._state === TaskState.Cancelled) {
          // notify cancelTask method
          this._onAborted()
        }
        throw e
      }
    }
  }
}

export abstract class TaskGroup<T> extends BaseTask<T> {
  protected children: Task<any>[] = []

  onChildUpdate(chunkSize: number) {
    let total = 0
    let progress = 0
    for (const task of this.children) {
      progress += task.progress
      total += task.total
    }
    this._total = total
    this._progress = progress
    this.update(chunkSize)
  }

  protected async cancelTask(): Promise<void> {
    await Promise.all(this.children.map((task) => task.cancel()))
  }

  protected async pauseTask(): Promise<void> {
    await Promise.all(this.children.map((task) => task.pause()))
  }

  protected async resumeTask(): Promise<void> {
    await Promise.all(this.children.map((task) => task.resume()))
  }

  async all<T extends Task<any>>(tasks: Iterable<T>, { throwErrorImmediately, getErrorMessage }: { throwErrorImmediately?: boolean; getErrorMessage?: (errors: any[]) => string } = { throwErrorImmediately: true, getErrorMessage: (errors: any[]) => '' }): Promise<(T extends Task<infer R> ? R : never)[]> {
    const errors: unknown[] = []
    const promises: Promise<any | void>[] = []
    for (const task of tasks) {
      this.children.push(task)
      const promise = task.startAndWait(this.context, this).catch((error) => {
        if (throwErrorImmediately || error instanceof CancelledError) {
          throw error
        }
        errors.push(error)
      })
      promises.push(promise)
    }
    try {
      const result = await Promise.all(promises)
      // if not throwErrorImmediately, we still need to check if other task failed
      if (errors.length > 0) {
        throw new AggregateError(errors, getErrorMessage?.(errors))
      }
      return result
    } catch (e) {
      // if throwErrorImmediately
      // force cancel all other tasks
      if (throwErrorImmediately) {
        for (const task of tasks) {
          if (task.isRunning) {
            task.cancel().catch((e) => {
              errors.push(e)
            })
          }
        }
      }
      throw e
    }
  }
}

export type TaskExecutor<T> = (this: TaskRoutine<any>) => Promise<T> | T
export class TaskRoutine<T> extends TaskGroup<T> {
  constructor(name: string, readonly executor: TaskExecutor<T>, param: object = {}) {
    super()
    this.setName(name, param)
  }

  concat<T>(task: TaskRoutine<T>): Promise<T> {
    try {
      const result = task.executor.bind(this)()
      if (result instanceof Promise) {
        return result
      }
      return Promise.resolve(result)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  /**
     * Yield a new child task to this routine
     */
  yield<T>(task: Task<T>): Promise<T> {
    if (this.state !== TaskState.Running) {
      throw new Error('IllegalState')
    }
    this.children.push(task)
    return task.startAndWait(this.context, this)
  }

  protected runTask(): Promise<T> {
    try {
      const result = this.executor.bind(this)()
      if (result instanceof Promise) {
        return result
      }
      return Promise.resolve(result)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export function task<T>(name: string, executor: TaskExecutor<T>, param: object = {}): TaskRoutine<T> {
  return new TaskRoutine<T>(name, executor, param)
}
