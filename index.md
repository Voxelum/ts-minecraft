# Minecraft Launcher Core

[![npm](https://img.shields.io/npm/l/@xmcl/core.svg)](https://github.com/voxelum/minecraft-launcher-core-node/blob/master/LICENSE)
[![Build Status](https://github.com/voxelum/minecraft-launcher-core-node/workflows/Build/badge.svg)](https://github.com/Voxelum/minecraft-launcher-core-node/actions?query=workflow%3ABuild)
[![Convensional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org)
[![Discord](https://discord.com/api/guilds/405213567118213121/widget.png)](https://discord.gg/W5XVwYY7GQ)

Provide several useful functions to build a Minecraft Launcher.

Most packages are targeting the [Electron](https://electronjs.org) environment. Feel free to report issues related to it.

### Looking for C# Launcher Core?

Introduce the awesome .net framework launcher core, [ProjBobcat](https://github.com/Corona-Studio/ProjBobcat).

It's the next generation Minecraft launcher core written in C# providing the freest, fastest and the most complete experience. https://corona.studio

### Featured Launcher

- [x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher): An launcher provides general electron api related to minecraft launching (in renderer side), making other developers can easily create new launcher view.
- [PureLauncher](https://github.com/Apisium/PureLauncher): An awesome Minecraft Launcher using React to build beautiful UI.


## Getting Started

You can see [Active Packages](#active-packages) section to quickly find a package you need.

Go [our document website](https://docs.xmcl.app/en/core) to find more detail usage.

### Active Packages

| Name                    | Usage                                                                                     | Version                                                                                                                           | Location                                                  | Runtime Envrionment |
| ----------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------- |
| @xmcl/core              | Launch Minecraft                                                                          | [![npm version](https://img.shields.io/npm/v/@xmcl/core.svg)](https://www.npmjs.com/package/@xmcl/core)                           | [packages/core             ](/packages/core)              | Node                |
| @xmcl/installer         | Install Minecraft                                                                         | [![npm version](https://img.shields.io/npm/v/@xmcl/installer.svg)](https://www.npmjs.com/package/@xmcl/installer)                 | [packages/installer        ](/packages/installer)         | Node                |
| @xmcl/user              | User Authentication and skin                                                              | [![npm version](https://img.shields.io/npm/v/@xmcl/user.svg)](https://www.npmjs.com/package/@xmcl/user)                           | [packages/user             ](/packages/user)              | Node/Browser        |
| @xmcl/mod-parser        | Parse forge/liteloader/fabric mod                                                         | [![npm version](https://img.shields.io/npm/v/@xmcl/mod-parser.svg)](https://www.npmjs.com/package/@xmcl/mod-parser)               | [packages/mod-parser       ](/packages/mod-parser)        | Node/Browser        |
| @xmcl/curseforge        | Provide Curseforge API                                                                    | [![npm version](https://img.shields.io/npm/v/@xmcl/curseforge.svg)](https://www.npmjs.com/package/@xmcl/curseforge)               | [packages/curseforge         ](/packages/curseforge)      | Node/Browser        |
| @xmcl/modrinth          | Provide Modrinth API                                                                      | [![npm version](https://img.shields.io/npm/v/@xmcl/modrinth.svg)](https://www.npmjs.com/package/@xmcl/modrinth)                   | [packages/modrinth         ](/packages/modrinth)          | Node/Browser        |
| @xmcl/forge-site-parser | Parse forge website                                                                       | [![npm version](https://img.shields.io/npm/v/@xmcl/forge-site-parser.svg)](https://www.npmjs.com/package/@xmcl/forge-site-parser) | [packages/forge-site-parser](/packages/forge-site-parser) | Node/Browser        |
| @xmcl/client            | Utilities of Minecraft client network. Ping Minecraft Server                              | [![npm version](https://img.shields.io/npm/v/@xmcl/client.svg)](https://www.npmjs.com/package/@xmcl/client)                       | [packages/client           ](/packages/client)            | Node                |
| @xmcl/model             | Display player/block model                                                                | [![npm version](https://img.shields.io/npm/v/@xmcl/model.svg)](https://www.npmjs.com/package/@xmcl/model)                         | [packages/model            ](/packages/model)             | Browser             |
| @xmcl/gamesetting       | Parse game setting                                                                        | [![npm version](https://img.shields.io/npm/v/@xmcl/gamesetting.svg)](https://www.npmjs.com/package/@xmcl/gamesetting)             | [packages/gamesetting      ](/packages/gamesetting)       | Node/Browser        |
| @xmcl/nbt               | Parse NBT                                                                                 | [![npm version](https://img.shields.io/npm/v/@xmcl/nbt.svg)](https://www.npmjs.com/package/@xmcl/nbt)                             | [packages/nbt              ](/packages/nbt)               | Node/Browser        |
| @xmcl/text-component    | Parse and render Minecraft text                                                           | [![npm version](https://img.shields.io/npm/v/@xmcl/text-component.svg)](https://www.npmjs.com/package/@xmcl/text-component   )    | [packages/text-component   ](/packages/text-component)    | Node/Browser        |
| @xmcl/game-data         | Load level data or servers.dat                                                            | [![npm version](https://img.shields.io/npm/v/@xmcl/game-data.svg)](https://www.npmjs.com/package/@xmcl/game-data)                 | [packages/game-data        ](/packages/game-data)         | Node/Browser        |
| @xmcl/resourcepack      | Parse resource pack                                                                       | [![npm version](https://img.shields.io/npm/v/@xmcl/resourcepack.svg)](https://www.npmjs.com/package/@xmcl/resourcepack)           | [packages/resourcepack     ](/packages/resourcepack)      | Node/Browser        |
| @xmcl/task              | Util package to create task                                                               | [![npm version](https://img.shields.io/npm/v/@xmcl/task.svg)](https://www.npmjs.com/package/@xmcl/task)                           | [packages/task             ](/packages/task)              | Node/Browser        |
| @xmcl/system            | A fs middleware for browser/node                                                          | [![npm version](https://img.shields.io/npm/v/@xmcl/system.svg)](https://www.npmjs.com/package/@xmcl/system)                       | [packages/system           ](/packages/system)            | Node/Browser        |
| @xmcl/semver            | The special semver format using by fabricmc.                                              | [![npm version](https://img.shields.io/npm/v/@xmcl/semver.svg)](https://www.npmjs.com/package/@xmcl/semver)                       | [packages/semver           ](/packages/semver)            | Node/Browser        |
| @xmcl/unzip             | yauzl unzip wrapper                                                                       | [![npm version](https://img.shields.io/npm/v/@xmcl/unzip.svg)](https://www.npmjs.com/package/@xmcl/unzip)                         | [packages/unzip            ](/packages/unzip)             | Node                |
| @xmcl/file-transfer     | High performance undici file download implementation                                      | [![npm version](https://img.shields.io/npm/v/@xmcl/file-transfer.svg)](https://www.npmjs.com/package/@xmcl/file-transfer)         | [packages/file-transfer    ](/packages/file-transfer)     | Node                |
| @xmcl/nat-api           | Port mapping with UPnP and NAT-PMP                                                        | [![npm version](https://img.shields.io/npm/v/@xmcl/nat-api.svg)](https://www.npmjs.com/package/@xmcl/nat-api)                     | [packages/nat-api          ](/packages/nat-api)           | Node                |
| @xmcl/bytebuffer        | The bytebuffer module port from [bytebuffer.js](https://www.npmjs.com/package/bytebuffer) | [![npm version](https://img.shields.io/npm/v/@xmcl/bytebuffer.svg)](https://www.npmjs.com/package/@xmcl/bytebuffer)               | [packages/bytebuffer       ](/packages/bytebuffer)        | Node/Browser        |

### Comsuming the Packages with bundlers

The whole project use typescript and esbuild to build. It will build both `esm` and `commonjs` version js files. Some modules can be used in browser, and they will have browser version built.

Nowaday, the bundler should all support reading the `module` field in package.json and use the esm version. If you are using webpack, you can use the `resolve.mainFields` option to specify which field to use.

From [my experience](https://github.com/Voxelum/x-minecraft-launcher), the [esbuild](https://esbuild.github.io/) and [vite](https://vitejs.dev/) works pretty fine with current `package.json`.

## Contribute

See [Contribute.md](/CONTRIBUTE.md)

## Special Thanks

[yushijinhun](https://github.com/yushijinhun), the author of [JMCCC](https://github.com/to2mbn/JMCCC) which inspire this library.

[Indexyz](https://github.com/Indexyz), helped me a lot on Minecraft launching, authing.

And all of contributors of this repo!
