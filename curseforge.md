# Curseforge API

[![npm version](https://img.shields.io/npm/v/@xmcl/curseforge.svg)](https://www.npmjs.com/package/@xmcl/curseforge)
[![Downloads](https://img.shields.io/npm/dm/@xmcl/curseforge.svg)](https://npmjs.com/@xmcl/curseforge)
[![Install size](https://packagephobia.now.sh/badge?p=@xmcl/curseforge)](https://packagephobia.now.sh/result?p=@xmcl/curseforge)
[![npm](https://img.shields.io/npm/l/@xmcl/minecraft-launcher-core.svg)](https://github.com/voxelum/minecraft-launcher-core-node/blob/master/LICENSE)
[![Build Status](https://github.com/voxelum/minecraft-launcher-core-node/workflows/Build/badge.svg)](https://github.com/Voxelum/minecraft-launcher-core-node/actions?query=workflow%3ABuild)

Provide the curseforge API wrapper in https://docs.curseforge.com/

## Usage

This package is depending on undici for HTTP in nodejs, and the browser version will use browser `fetch` instead of undici.

### Find Curseforge Mods by search keyword

You can search curseforge mods by keyword

```ts
import { CurseforgeV1Client, SearchOptions } from '@xmcl/curseforge'

const api = new CurseforgeV1Client(process.env.CURSEFORGE_API_KEY)
const searchOptions: SearchOptions = {
   categoryId: 6, // 6 is mod,
   searchFilter: 'search-keyword',
};
const result = await api.searchMods(searchOptions)
const pageSize = result.pagination.pageSize
const total = result.pagination.total
const totalPages = Math.ceil(total / pageSize)
const mods: Mod[] = result.data // mod details
```

### The Mod detail

You can get the mod detail by mod id

```ts
import { CurseforgeV1Client } from '@xmcl/curseforge'
const api = new CurseforgeV1Client(process.env.CURSEFORGE_API_KEY)
const mod = await api.getMod(123)
console.log(mod.id) // 123
console.log(mod.name) // The mod name
console.log(mod.authors) // [{ id: 123, name: 'The author name' }]
console.log(mod.summary) // The mod summary
```

### Get Mod File List

```ts
// sample code for get file list for a mod
const api = new CurseforgeV1Client(process.env.CURSEFORGE_API_KEY)
const { data: files, pagination } = await api.getModFiles({
   modId: 1, // your mod id
   gameVersion: '1.16.5', // support minecraft 1.16.5, optional
   modLoaderType: FileModLoaderType.Fabric, // only fabric, optional
})
const pageSize = pagination.pageSize
const index = pagination.index
const total = pagination.total // total count
const pages = Math.ceil(total / pageSize) // total pages
const firstFile = files[0]
```

## 🧾 Classes

<div class="definition-grid class"><a href="curseforge/@xmcl/curseforge.CurseforgeApiError">CurseforgeApiError</a><a href="curseforge/@xmcl/curseforge.CurseforgeV1Client">CurseforgeV1Client</a></div>

## 🤝 Interfaces

<div class="definition-grid interface"><a href="curseforge/@xmcl/curseforge.Author">Author</a><a href="curseforge/@xmcl/curseforge.CategorySection">CategorySection</a><a href="curseforge/@xmcl/curseforge.CurseforgeClientOptions">CurseforgeClientOptions</a><a href="curseforge/@xmcl/curseforge.File">File</a><a href="curseforge/@xmcl/curseforge.FileDependency">FileDependency</a><a href="curseforge/@xmcl/curseforge.FileHash">FileHash</a><a href="curseforge/@xmcl/curseforge.FileIndex">FileIndex</a><a href="curseforge/@xmcl/curseforge.FingerprintFuzzyMatch">FingerprintFuzzyMatch</a><a href="curseforge/@xmcl/curseforge.FingerprintFuzzyMatchResult">FingerprintFuzzyMatchResult</a><a href="curseforge/@xmcl/curseforge.FingerprintMatch">FingerprintMatch</a><a href="curseforge/@xmcl/curseforge.FingerprintsMatchesResult">FingerprintsMatchesResult</a><a href="curseforge/@xmcl/curseforge.GameVersionLatestFile">GameVersionLatestFile</a><a href="curseforge/@xmcl/curseforge.GetModFilesOptions">GetModFilesOptions</a><a href="curseforge/@xmcl/curseforge.Mod">Mod</a><a href="curseforge/@xmcl/curseforge.ModAsset">ModAsset</a><a href="curseforge/@xmcl/curseforge.ModCategory">ModCategory</a><a href="curseforge/@xmcl/curseforge.Module">Module</a><a href="curseforge/@xmcl/curseforge.Pagination">Pagination</a><a href="curseforge/@xmcl/curseforge.QueryOption">QueryOption</a><a href="curseforge/@xmcl/curseforge.SearchOptions">SearchOptions</a><a href="curseforge/@xmcl/curseforge.SortableGameVersion">SortableGameVersion</a></div>

## 🏳️ Enums

<div class="definition-grid enum"><a href="curseforge/@xmcl/curseforge.FileModLoaderType">FileModLoaderType</a><a href="curseforge/@xmcl/curseforge.FileRelationType">FileRelationType</a><a href="curseforge/@xmcl/curseforge.FileReleaseType">FileReleaseType</a><a href="curseforge/@xmcl/curseforge.FileStatus">FileStatus</a><a href="curseforge/@xmcl/curseforge.HashAlgo">HashAlgo</a><a href="curseforge/@xmcl/curseforge.ModsSearchSortField">ModsSearchSortField</a><a href="curseforge/@xmcl/curseforge.ModStatus">ModStatus</a></div>

