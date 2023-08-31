/**
 * @module @xmcl/modrinth
 */

import { Dispatcher, fetch } from 'undici'
import { Category, GameVersion, License, Loader, Project, ProjectVersion, TeamMember, User } from './types'

export * from './types'

/* eslint-disable camelcase */
export interface SearchResultHit {
  /**
   * The slug of project, e.g. "my_project"
   */
  slug: string
  /**
   * The id of the project; prefixed with local-
   */
  project_id: string
  /**
   * The project type of the project.
   * @enum "mod" "modpack"
   * */
  project_type: string
  /**
   * The username of the author of the project
   */
  author: string
  /**
   * The name of the project.
   */
  title: string
  /**
   * A short description of the project
   */
  description: string
  /**
   * A list of the categories the project is in.
   */
  categories: Array<string>
  /**
     * A list of the minecraft versions supported by the project.
     */
  versions: Array<string>
  /**
     * The total number of downloads for the project
     */
  downloads: number

  follows: number
  /**
     * A link to the project's main page; */
  page_url: string
  /**
     * The url of the project's icon */
  icon_url: string
  /**
     * The url of the project's author */
  author_url: string
  /**
     * The date that the project was originally created
     */
  date_created: string
  /**
     * The date that the project was last modified
     */
  date_modified: string
  /**
     * The latest version of minecraft that this project supports */
  latest_version: string
  /**
     * The id of the license this project follows */
  license: string
  /**
     * The side type id that this project is on the client */
  client_side: string
  /**
     * The side type id that this project is on the server */
  server_side: string
  /**
     * The host that this project is from, always modrinth */
  host: string
}

export interface SearchProjectOptions {
  /**
     * The query to search
     */
  query?: string
  /**
     * The recommended way of filtering search results. [Learn more about using facets](https://docs.modrinth.com/docs/tutorials/search).
     *
     * @enum "categories" "versions" "license" "project_type"
     * @example [["categories:forge"],["versions:1.17.1"],["project_type:mod"]]
     */
  facets?: string
  /**
     * A list of filters relating to the properties of a project. Use filters when there isn't an available facet for your needs. [More information](https://docs.meilisearch.com/reference/features/filtering.html)
     *
     * @example filter=categories="fabric" AND (categories="technology" OR categories="utility")
     */
  filter?: string
  /**
     * What the results are sorted by
     *
     * @enum "relevance" "downloads" "follows" "newest" "updated"
     * @example "downloads"
     * @default relevance
     */
  index?: string
  /**
     * The offset into the search; skips this number of results
     * @default 0
     */
  offset?: number
  /**
     * The number of mods returned by the search
     * @default 10
     */
  limit?: number
}

export interface SearchResult {
  /**
     * The list of results
     */
  hits: Array<SearchResultHit>
  /**
     * The number of results that were skipped by the query
     */
  offset: number
  /**
     * The number of mods returned by the query
     */
  limit: number
  /**
     * The total number of mods that the query found
     */
  total_hits: number
}

export interface GetProjectVersionsOptions {
  id: string
  loaders?: Array<string>
  /**
     * Minecraft version filtering
     */
  game_versions?: Array<string>
  featured?: boolean
}

export class ModerinthApiError extends Error {
  constructor(readonly url: string, readonly status: number, readonly body: string) {
    super(`Fail to fetch modrinth api ${url}. Status=${status}. ${body}`)
    this.name = 'ModerinthApiError'
  }
}

export interface ModrinthClientOptions {
  baseUrl?: string
  /**
   * The extra headers
   */
  headers?: Record<string, string>
  /**
   * The dispatcher for undici
   */
  dispatcher?: Dispatcher
}

/**
 * @see https://docs.modrinth.com/api-spec
 */
export class ModrinthV2Client {
  private baseUrl: string
  private dispatcher?: Dispatcher
  private headers: Record<string, string>

  constructor(options?: ModrinthClientOptions) {
    this.baseUrl = options?.baseUrl ?? 'https://api.modrinth.com'
    this.dispatcher = options?.dispatcher
    this.headers = options?.headers || {}
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/projects/operation/searchProjects
   */
  async searchProjects(options: SearchProjectOptions, signal?: AbortSignal): Promise<SearchResult> {
    const url = new URL('/v2/search', this.baseUrl)
    url.searchParams.append('query', options.query || '')
    url.searchParams.append('filter', options.filter || '')
    url.searchParams.append('index', options.index || 'relevance')
    url.searchParams.append('offset', options.offset?.toString() ?? '0')
    url.searchParams.append('limit', options.limit?.toString() ?? '10')
    if (options.facets) { url.searchParams.append('facets', options.facets) }
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      signal,
      headers: this.headers,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const result = await response.json() as SearchResult
    return result
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/projects/operation/getProject
   */
  async getProject(projectId: string, signal?: AbortSignal): Promise<Project> {
    if (projectId.startsWith('local-')) { projectId = projectId.slice('local-'.length) }
    const url = new URL(`/v2/project/${projectId}`, this.baseUrl)
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      signal,
      headers: this.headers,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const project = await response.json() as Project
    return project
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/versions/operation/getProjectVersions
   */
  async getProjectVersions(projectId: string, { loaders, gameVersions, featured }: { loaders?: string[]; gameVersions?: string[]; featured?: boolean } = {}, signal?: AbortSignal): Promise<ProjectVersion[]> {
    const url = new URL(`/v2/project/${projectId}/version`, this.baseUrl)
    if (loaders) { url.searchParams.append('loaders', JSON.stringify(loaders)) }
    if (gameVersions) { url.searchParams.append('game_versions', JSON.stringify(gameVersions)) }
    if (featured !== undefined) { url.searchParams.append('featured', featured ? 'true' : 'false') }
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      signal,
      headers: this.headers,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const versions = await response.json() as ProjectVersion[]
    return versions
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/versions/operation/getVersion
   */
  async getProjectVersion(versionId: string, signal?: AbortSignal): Promise<ProjectVersion> {
    const url = new URL(`/v2/version/${versionId}`, this.baseUrl)
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      signal,
      headers: this.headers,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const version = await response.json() as ProjectVersion
    return version
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/versions/operation/getVersions
   */
  async getProjectVersionsById(ids: string[], signal?: AbortSignal) {
    const url = new URL('/v2/versions', this.baseUrl)
    url.searchParams.append('ids', JSON.stringify(ids))
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      signal,
      headers: this.headers,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const versions = await response.json() as ProjectVersion[]
    return versions
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/version-files/operation/versionsFromHashes
   */
  async getProjectVersionsByHash(hashes: string[], algorithm = 'sha1', signal?: AbortSignal) {
    const url = new URL('/v2/version_files', this.baseUrl)
    const response = await fetch(url, {
      method: 'POST',
      dispatcher: this.dispatcher,
      body: JSON.stringify({
        hashes,
        algorithm,
      }),
      headers: {
        ...this.headers,
        'content-type': 'application/json',
      },
      signal,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const versions = await response.json() as Record<string, ProjectVersion>
    return versions
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/version-files/operation/getLatestVersionFromHash
   */
  async getLatestProjectVersion(sha1: string, { algorithm, loaders = [], gameVersions = [] }: { algorithm?: string; loaders?: string[]; gameVersions?: string[] } = {}, signal?: AbortSignal): Promise<ProjectVersion> {
    const url = new URL(`/v2/version_file/${sha1}/update`, this.baseUrl)
    url.searchParams.append('algorithm', algorithm ?? 'sha1')
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        loaders,
        game_versions: gameVersions,
      }),
      headers: { ...this.headers, 'content-type': 'application/json' },
      dispatcher: this.dispatcher,
      signal,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const version = await response.json() as ProjectVersion
    return version
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/tags/operation/licenseList
   */
  async getLicenseTags(signal?: AbortSignal) {
    const url = new URL('/v2/tag/license', this.baseUrl)
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      headers: this.headers,
      signal,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const result = await response.json() as License[]
    return result
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/tags/operation/categoryList
   */
  async getCategoryTags(signal?: AbortSignal) {
    const url = new URL('/v2/tag/category', this.baseUrl)
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      headers: this.headers,
      signal,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const result = await response.json() as Category[]
    return result
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/tags/operation/versionList
   */
  async getGameVersionTags(signal?: AbortSignal) {
    const url = new URL('/v2/tag/game_version', this.baseUrl)
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      headers: this.headers,
      signal,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const result = await response.json() as GameVersion[]
    return result
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/tags/operation/loaderList
   */
  async getLoaderTags(signal?: AbortSignal) {
    const url = new URL('/v2/tag/loader', this.baseUrl)
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      headers: this.headers,
      signal,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const result = await response.json() as Loader[]
    return result
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/teams/operation/getProjectTeamMembers
   */
  async getProjectTeamMembers(projectId: string, signal?: AbortSignal) {
    const url = new URL(`/v2/project/${projectId}/members`, this.baseUrl)
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      headers: this.headers,
      signal,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const result = await response.json() as TeamMember[]
    return result
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/users/operation/getUser
   */
  async getUser(id: string, signal?: AbortSignal) {
    const url = new URL(`/v2/user/${id}`, this.baseUrl)
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      headers: this.headers,
      signal,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const result = await response.json() as User
    return result
  }

  /**
   * @see https://docs.modrinth.com/api-spec/#tag/users/operation/getUserProjects
   */
  async getUserProjects(id: string, signal?: AbortSignal) {
    const url = new URL(`/v2/user/${id}/projects`, this.baseUrl)
    const response = await fetch(url, {
      dispatcher: this.dispatcher,
      headers: this.headers,
      signal,
    })
    if (response.status !== 200) {
      throw new ModerinthApiError(url.toString(), response.status, await response.text())
    }
    const result = await response.json() as Project[]
    return result
  }
}
