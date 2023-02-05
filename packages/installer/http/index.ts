import { FileHandle, mkdir, open, unlink } from 'fs/promises'
import { constants } from 'fs'
import { dirname } from 'path'
import { errors } from 'undici'
import { DownloadAgent, resolveAgent } from './agent'
import { DownloadAbortError, DownloadAggregateError, DownloadFileSystemError } from './error'
import { Segment } from './segmentPolicy'
import { AbortSignal } from './abort'
import { resolveStatusController, StatusController } from './status'
import { ChecksumValidatorOptions, resolveValidator, ValidationError, Validator } from './validator'
import assert from 'assert'

export interface DownloadBaseOptions {
  /**
   * The header of the request
   */
  headers?: Record<string, any>
  /**
   * The download agent
   */
  agent?: DownloadAgent
}

export interface DownloadOptions extends DownloadBaseOptions {
  /**
   * The url or urls (fallback) of the resource
   */
  url: string | string[]
  /**
   * The header of the request
   */
  headers?: Record<string, any>
  /**
   * If the download is aborted, and want to recover, you can use this option to recover the download
   */
  segments?: Segment[]
  /**
   * Where the file will be downloaded to
   */
  destination: string
  /**
   * The status controller. If you want to track download progress, you should use this.
   */
  statusController?: StatusController
  /**
   * The validator, or the options to create a validator based on checksum.
   */
  validator?: Validator | ChecksumValidatorOptions
  /**
   * The user abort signal to abort the download
   */
  abortSignal?: AbortSignal
  /**
   * Re-validate the file after download success
   * @default true
   */
  strict?: boolean
}

/**
 * Download url or urls to a file path. This process is abortable, it's compatible with the dom like `AbortSignal`.
 */
export async function download(options: DownloadOptions) {
  const urls = typeof options.url === 'string' ? [options.url] : options.url
  const headers = options.headers || {}
  const destination = options.destination
  const statusController = resolveStatusController(options.statusController)
  const validator = resolveValidator(options.validator)
  const abortSignal = options.abortSignal
  const agent = resolveAgent(options.agent)
  const strict = options.strict ?? true

  let fd = undefined as FileHandle | undefined

  // Access file handle
  try {
    await mkdir(dirname(destination), { recursive: true }).catch(() => { })
    // use O_RDWR for read write which won't be truncated
    fd = await open(destination, constants.O_RDWR | constants.O_CREAT)

    // pre-validate the file
    const size = (await fd.stat()).size
    if (size !== 0) {
      const error = await validator.validate(fd, destination, urls[0]).catch((e) => e)
      // if the file size is not 0 and checksum matched, we just don't process the file
      if (!error) {
        await fd?.close().catch(() => { })
        return
      }
    }
  } catch (e) {
    await fd?.close().catch(() => { })
    throw new DownloadFileSystemError(`Failed to get access on ${destination}`, urls, headers, destination, e)
  }

  // Start to download

  try {
    // File descriptor scope
    try {
      let aggregated: { url: string }[] = []
      for (const url of urls) {
        try {
          await agent.dispatch(new URL(url), 'GET', headers, destination, fd, statusController, abortSignal)
          await fd.sync()
          await fd.datasync()
          if (strict) {
            await validator.validate(fd, destination, url)
          }
          // Dismiss all errors
          aggregated = []
          break
        } catch (e) {
          if (e instanceof errors.RequestAbortedError) {
            // User abortion during HEAD
            throw new DownloadAbortError(`Download is aborted by user.`, urls, headers, destination, [])
          }
          if (e instanceof DownloadAbortError) {
            // User abortion should throw anyway
            throw e
          }

          aggregated.push(Object.assign((e as any), {
            url,
          }))
        }
      }

      if (aggregated.length > 0) {
        throw aggregated
      }
    } finally {
      await fd.close().catch((e) => {
      })
    }
  } catch (e) {
    if (e instanceof DownloadAbortError) {
      e.urls = urls
      throw e
    }

    assert(e instanceof Array)

    if (e[e.length - 1] instanceof ValidationError) {
      // Last download corrupted...
      await unlink(destination).catch(() => { })
    }

    throw new DownloadAggregateError(`Some errors occurred during download process: ${urls.join(', ')}. ${JSON.stringify(e)}`, urls, headers, destination, e as any)
  }
}
