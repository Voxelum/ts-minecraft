# Changelog

## 7.8.0
### @xmcl/semver@0.1.0
#### Features

- feat: Add the fabric semver as package ([1af4026fed9301ede09e7b141e25230e865dc7c3](https://github.com/voxelum/minecraft-launcher-core-node/commit/1af4026fed9301ede09e7b141e25230e865dc7c3))


## 7.7.0
### @xmcl/client@3.2.0
#### Features

- feat: Support packet splitting ([3a7c38368cc369f338ed02d7c168c2ae8555340a](https://github.com/voxelum/minecraft-launcher-core-node/commit/3a7c38368cc369f338ed02d7c168c2ae8555340a))
#### Bug Fixes

- fix: Wrong ipv6 address for fake lan server ([b48d5f5735efc37fe4eda514d6e4b0ecb2da19c9](https://github.com/voxelum/minecraft-launcher-core-node/commit/b48d5f5735efc37fe4eda514d6e4b0ecb2da19c9))
### @xmcl/core@2.14.0
#### Features

- feat: Allow override sep for cmd gen ([ae6f2a5b2a5a5cdb8acfe5d83c7cc8bad66f7182](https://github.com/voxelum/minecraft-launcher-core-node/commit/ae6f2a5b2a5a5cdb8acfe5d83c7cc8bad66f7182))
- feat: Support prepend multiple commands ([fe995cdd83cbc2784d4d130d38067142f08090ad](https://github.com/voxelum/minecraft-launcher-core-node/commit/fe995cdd83cbc2784d4d130d38067142f08090ad))
- feat: Support use hash instead of id to download assets index ([defd2049fd44e527526238942d7b2745ffcdc4a7](https://github.com/voxelum/minecraft-launcher-core-node/commit/defd2049fd44e527526238942d7b2745ffcdc4a7))
- feat: Support prepend command ([1011163eaa772b7d200362ccac4aaac92bd8796f](https://github.com/voxelum/minecraft-launcher-core-node/commit/1011163eaa772b7d200362ccac4aaac92bd8796f))
- feat: add version server json getter ([e90eebfe37655c4635ba2e2b134be71d3adef4b5](https://github.com/voxelum/minecraft-launcher-core-node/commit/e90eebfe37655c4635ba2e2b134be71d3adef4b5))
#### Bug Fixes

- fix: Handle more stat fs error ([b6a3bc7d834805ee9b22d43a7021bbf5f5623208](https://github.com/voxelum/minecraft-launcher-core-node/commit/b6a3bc7d834805ee9b22d43a7021bbf5f5623208))
- fix: Correctly link the legacy assets ([67593d1468b97d5e2b4881d4731ea4ffbb3f0d94](https://github.com/voxelum/minecraft-launcher-core-node/commit/67593d1468b97d5e2b4881d4731ea4ffbb3f0d94))
- fix: Ensure the resolved library path ([1b0263c991ebd6e7c286e32ed846b4dcca20ab6c](https://github.com/voxelum/minecraft-launcher-core-node/commit/1b0263c991ebd6e7c286e32ed846b4dcca20ab6c))
- fix: Should not assign default memory for server launch ([f50dd793edf3d1f853fa324d11a05129f4057da8](https://github.com/voxelum/minecraft-launcher-core-node/commit/f50dd793edf3d1f853fa324d11a05129f4057da8))
- fix: Use msa user to launch by default ([06bb7b47d077fe23be1bbe721bb8d4abb01432fd](https://github.com/voxelum/minecraft-launcher-core-node/commit/06bb7b47d077fe23be1bbe721bb8d4abb01432fd))
- fix: Should detect some special modpack logs ([3129d0a02deb1dc0da183e8e3f6eb400879c7c3a](https://github.com/voxelum/minecraft-launcher-core-node/commit/3129d0a02deb1dc0da183e8e3f6eb400879c7c3a))
- fix: Should raise issue if file size is 0 ([b22eab2b799021950ae2295e6e93bebb095a1144](https://github.com/voxelum/minecraft-launcher-core-node/commit/b22eab2b799021950ae2295e6e93bebb095a1144))
- fix: Avoid conflict of DlibraryDirectory arg ([c9988bf778b6c6b10458ef6b418c6bb817077407](https://github.com/voxelum/minecraft-launcher-core-node/commit/c9988bf778b6c6b10458ef6b418c6bb817077407))
- fix: Forge launch fail due to missing DlibraryDirectory & some assets decompression ([4c530615a5ab56f39bb9d9a6110123ffb0a838f0](https://github.com/voxelum/minecraft-launcher-core-node/commit/4c530615a5ab56f39bb9d9a6110123ffb0a838f0))
- fix: Correct the natives filter algorithm. Should not parse new natives as common native libraries. ([3cd7d1901e18d9331a5b0e48406657c1907e201e](https://github.com/voxelum/minecraft-launcher-core-node/commit/3cd7d1901e18d9331a5b0e48406657c1907e201e))
### @xmcl/curseforge@2.2.0
#### Features

- feat: Support neoforge search type ([61d94b759076f88219e5d243cc91f6eab3a761f9](https://github.com/voxelum/minecraft-launcher-core-node/commit/61d94b759076f88219e5d243cc91f6eab3a761f9))
#### Bug Fixes

- fix: Adjust curseforge fingerprint interface ([8b4eb88ee8b22df80c8065d4f2d875289e13767f](https://github.com/voxelum/minecraft-launcher-core-node/commit/8b4eb88ee8b22df80c8065d4f2d875289e13767f))
### @xmcl/file-transfer@2.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: new download impl ([11e5ea1284e6c2063c6ff3f8b779b43921d8bf13](https://github.com/voxelum/minecraft-launcher-core-node/commit/11e5ea1284e6c2063c6ff3f8b779b43921d8bf13))
#### Bug Fixes

- fix: Wrongly install neoforge/forge client/server ([10fa7885c8b0d39e3a48386867a0ba12b5e6d45d](https://github.com/voxelum/minecraft-launcher-core-node/commit/10fa7885c8b0d39e3a48386867a0ba12b5e6d45d))
- fix: wrong download url with querystring ([b9c7d7f1c282a8b7f8c44bf60db3a9ce85a67985](https://github.com/voxelum/minecraft-launcher-core-node/commit/b9c7d7f1c282a8b7f8c44bf60db3a9ce85a67985))
- fix: Some server does not follow range protocol. Add fallback behavior for range download ([3ee268e570f2fae387bf08001ddbf7b40a84bfbc](https://github.com/voxelum/minecraft-launcher-core-node/commit/3ee268e570f2fae387bf08001ddbf7b40a84bfbc))
- fix: Ensure data is synced before validate ([005bed96ff2eb4636aab51e38a4533e195fe6701](https://github.com/voxelum/minecraft-launcher-core-node/commit/005bed96ff2eb4636aab51e38a4533e195fe6701))
- fix: validator should not block download ([90f91e0ae4e6fabc82eceb6363bdfd503093c40e](https://github.com/voxelum/minecraft-launcher-core-node/commit/90f91e0ae4e6fabc82eceb6363bdfd503093c40e))
- fix(file-transfer): Deny the 203 status code ([1d6f450245f3c8ea363b3e3a7ab00c11e9532258](https://github.com/voxelum/minecraft-launcher-core-node/commit/1d6f450245f3c8ea363b3e3a7ab00c11e9532258))
- fix: The partial download does not work ([77ed295765108ebc7fafcb473624d5fd3fc895dc](https://github.com/voxelum/minecraft-launcher-core-node/commit/77ed295765108ebc7fafcb473624d5fd3fc895dc))
- fix: Try to avoid fail on false positive rename error ([542cc59a5794c6be8eff6704d030709151326b2a](https://github.com/voxelum/minecraft-launcher-core-node/commit/542cc59a5794c6be8eff6704d030709151326b2a))
### @xmcl/system@2.2.8
#### Bug Fixes

- fix: Should use fs instead fs/promises ([31f70b67572bc9c462ac270475a1e3a265796f10](https://github.com/voxelum/minecraft-launcher-core-node/commit/31f70b67572bc9c462ac270475a1e3a265796f10))
- fix: The wrong browser release config ([91707d524a72601e4e5cdb0641c4e152b345d2f7](https://github.com/voxelum/minecraft-launcher-core-node/commit/91707d524a72601e4e5cdb0641c4e152b345d2f7))
### @xmcl/gamesetting@3.0.3
#### Bug Fixes

- fix: Should parse the resource pack with name comma ([4668601281b1f121135f3463bf0c46d82d01ff90](https://github.com/voxelum/minecraft-launcher-core-node/commit/4668601281b1f121135f3463bf0c46d82d01ff90))
### @xmcl/task@4.1.1
#### Bug Fixes

- fix: Correctly detect abort error ([71631e0a01a93118964a8cf25c229abc63986de2](https://github.com/voxelum/minecraft-launcher-core-node/commit/71631e0a01a93118964a8cf25c229abc63986de2))
### @xmcl/modrinth@2.3.2
#### Bug Fixes

- fix: Should use downloads instead of relevance for modrinth by default ([68dcfc84b5bb91063b53b6cde16d552a6fa328e3](https://github.com/voxelum/minecraft-launcher-core-node/commit/68dcfc84b5bb91063b53b6cde16d552a6fa328e3))
- fix: Update project type ([490599b6107dbce08575688a2739c869653cdde1](https://github.com/voxelum/minecraft-launcher-core-node/commit/490599b6107dbce08575688a2739c869653cdde1))
### @xmcl/game-data@1.2.5
- Dependency @xmcl/system bump **patch**
### @xmcl/installer@6.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: make install libraries a multi-download task ([9377c6cbe12477ee0f66b13e9f871dd99cae7186](https://github.com/voxelum/minecraft-launcher-core-node/commit/9377c6cbe12477ee0f66b13e9f871dd99cae7186))
#### Features

- feat: Support use hash instead of id to download assets index ([defd2049fd44e527526238942d7b2745ffcdc4a7](https://github.com/voxelum/minecraft-launcher-core-node/commit/defd2049fd44e527526238942d7b2745ffcdc4a7))
- feat: Support custom handler for post processin ([057c1bd312a57e7b72b8d025a55bc760ca0e1124](https://github.com/voxelum/minecraft-launcher-core-node/commit/057c1bd312a57e7b72b8d025a55bc760ca0e1124))
- feat: Support install server for fabric and forge ([4d0e81ec86a5dfb0f365b7becf0876faf55aa411](https://github.com/voxelum/minecraft-launcher-core-node/commit/4d0e81ec86a5dfb0f365b7becf0876faf55aa411))
#### Bug Fixes

- fix: Correctly handle the java exec error ([901edb65a8b0907ba3b45b1aa8233e921488d5d1](https://github.com/voxelum/minecraft-launcher-core-node/commit/901edb65a8b0907ba3b45b1aa8233e921488d5d1))
- fix: Wrongly install neoforge/forge client/server ([10fa7885c8b0d39e3a48386867a0ba12b5e6d45d](https://github.com/voxelum/minecraft-launcher-core-node/commit/10fa7885c8b0d39e3a48386867a0ba12b5e6d45d))
- fix: Adapt neoforge install script ([c85430741fd8b7644fd5daffc0e05f7ac96578ad](https://github.com/voxelum/minecraft-launcher-core-node/commit/c85430741fd8b7644fd5daffc0e05f7ac96578ad))
- fix: Add the fetch option to redownload the assets index ([2dc1477d475c938cc684fc863e963511390f513f](https://github.com/voxelum/minecraft-launcher-core-node/commit/2dc1477d475c938cc684fc863e963511390f513f))
- fix: Wrong install asset path ([2dbf6e890f3b6c0128db601147309ae9144e5e27](https://github.com/voxelum/minecraft-launcher-core-node/commit/2dbf6e890f3b6c0128db601147309ae9144e5e27))
- fix: Avoid duplicated java exe ([a0e8ec73d28226c278d871e0e8f1177e1cdfef58](https://github.com/voxelum/minecraft-launcher-core-node/commit/a0e8ec73d28226c278d871e0e8f1177e1cdfef58))
- fix: quilt and fabric version id is mismatched ([3a769999caffb6f1c7c926f1872a0769dc592394](https://github.com/voxelum/minecraft-launcher-core-node/commit/3a769999caffb6f1c7c926f1872a0769dc592394))
- fix: Add the more java runtime types ([a29534029dabd290021840f9d43b9481d8e6b2a6](https://github.com/voxelum/minecraft-launcher-core-node/commit/a29534029dabd290021840f9d43b9481d8e6b2a6))
- fix: Force post processing without validate ([3f00ecd3502b6806f2ac1516617108994d42b2dd](https://github.com/voxelum/minecraft-launcher-core-node/commit/3f00ecd3502b6806f2ac1516617108994d42b2dd))
- fix: Support fabric/forge/neoforge/quilt server ([3abc0e5363f52f5a68e2817e61f9a8fcb37b3a32](https://github.com/voxelum/minecraft-launcher-core-node/commit/3abc0e5363f52f5a68e2817e61f9a8fcb37b3a32))
- fix: Should parse openjdk 1.8 version also ([b24151782ea8a6a3901561635106c4345578beb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/b24151782ea8a6a3901561635106c4345578beb5))
- fix: Parse openjdk version ([5f86c178777d11d38296221e1550df0f7599ec04](https://github.com/voxelum/minecraft-launcher-core-node/commit/5f86c178777d11d38296221e1550df0f7599ec04))
- fix: Wrong maven replacement ([749bc847508948127072bfee63e3c094af873724](https://github.com/voxelum/minecraft-launcher-core-node/commit/749bc847508948127072bfee63e3c094af873724))
- fix: Should only respect the libraries host resolved result ([718f18094d6851f57592a7702017e701ac07db05](https://github.com/voxelum/minecraft-launcher-core-node/commit/718f18094d6851f57592a7702017e701ac07db05))
- fix: Revert javaw change due to some incompatible situation ([e9069dd6a97ca7d82b9e3e7a63d66bdaccc30d57](https://github.com/voxelum/minecraft-launcher-core-node/commit/e9069dd6a97ca7d82b9e3e7a63d66bdaccc30d57))
- fix: Use javaw instead of java ([4a6d6e8250eb0df6609ff884aae44c964050af14](https://github.com/voxelum/minecraft-launcher-core-node/commit/4a6d6e8250eb0df6609ff884aae44c964050af14))
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/file-transfer bump **patch**
- Dependency @xmcl/task bump **patch**
### @xmcl/mod-parser@3.4.0
#### Features

- feat: Support switch filename to parse neoforge ([3aaaf6e9a1e7485232f2b75c258bc26ff7d34f82](https://github.com/voxelum/minecraft-launcher-core-node/commit/3aaaf6e9a1e7485232f2b75c258bc26ff7d34f82))
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.2.4
- Dependency @xmcl/system bump **patch**
### @xmcl/model@2.0.4
- Dependency @xmcl/resourcepack bump **patch**


## 7.6.0
### @xmcl/core@2.13.0
#### Features

- feat: Support diagnose server jar ([11c4d4572026b419cd22e6f7032a93f47801218a](https://github.com/voxelum/minecraft-launcher-core-node/commit/11c4d4572026b419cd22e6f7032a93f47801218a))
#### Bug Fixes

- fix: Should not replace the arugments if no minecraftArguments provided ([ddcfe62a0d194d518eb812170688e2c37def09c0](https://github.com/voxelum/minecraft-launcher-core-node/commit/ddcfe62a0d194d518eb812170688e2c37def09c0))
- fix: Support 1.4.7 forge installation ([4fc4eb76d41da5122db6f748dbdd4cb9d8732544](https://github.com/voxelum/minecraft-launcher-core-node/commit/4fc4eb76d41da5122db6f748dbdd4cb9d8732544))
### @xmcl/file-transfer@1.0.6
#### Bug Fixes

- fix: Should correctly handle range download n+1 issue ([333b7183fbfe65c19a050ed1739f7f8de1f3a1c7](https://github.com/voxelum/minecraft-launcher-core-node/commit/333b7183fbfe65c19a050ed1739f7f8de1f3a1c7))
### @xmcl/user@4.2.0
#### Features

- feat: Support commom offline player algorithm ([53255fad6c6d1e1511616e6c8ba2cc849d73dfc6](https://github.com/voxelum/minecraft-launcher-core-node/commit/53255fad6c6d1e1511616e6c8ba2cc849d73dfc6))
### user-offline-uuid@0.1.0
#### Features

- feat: Support commom offline player algorithm ([53255fad6c6d1e1511616e6c8ba2cc849d73dfc6](https://github.com/voxelum/minecraft-launcher-core-node/commit/53255fad6c6d1e1511616e6c8ba2cc849d73dfc6))
### @xmcl/installer@5.4.0
#### Features

- feat: Support side for forge install & diagnose ([6f6ea268bce06a75906310e5ae9bc6a04b6a0a61](https://github.com/voxelum/minecraft-launcher-core-node/commit/6f6ea268bce06a75906310e5ae9bc6a04b6a0a61))
#### Bug Fixes

- fix: forge profile installation post processing failed ([eeed4a2cbd55f8b290e11a4340d6ce29b58273f4](https://github.com/voxelum/minecraft-launcher-core-node/commit/eeed4a2cbd55f8b290e11a4340d6ce29b58273f4))
- fix: Support 1.4.7 forge installation ([4fc4eb76d41da5122db6f748dbdd4cb9d8732544](https://github.com/voxelum/minecraft-launcher-core-node/commit/4fc4eb76d41da5122db6f748dbdd4cb9d8732544))
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/file-transfer bump **patch**


## 7.5.0
### @xmcl/nbt@3.0.2
#### Bug Fixes

- fix: correct the build ([12a1b6cc5cb7b47581d6a3b5156edae6031b6823](https://github.com/voxelum/minecraft-launcher-core-node/commit/12a1b6cc5cb7b47581d6a3b5156edae6031b6823))
### @xmcl/curseforge@2.1.1
#### Bug Fixes

- fix: Update undici version ([f78e1b3fe5e24c2dccf910129ef8e25d7f164e83](https://github.com/voxelum/minecraft-launcher-core-node/commit/f78e1b3fe5e24c2dccf910129ef8e25d7f164e83))
- fix: Curseforge should respect the modLoaderTypes ([6759abf611f1a5475a72a90110c8fa2c12c592c9](https://github.com/voxelum/minecraft-launcher-core-node/commit/6759abf611f1a5475a72a90110c8fa2c12c592c9))
### @xmcl/discord-rpc@1.1.2
#### Bug Fixes

- fix: Update undici version ([f78e1b3fe5e24c2dccf910129ef8e25d7f164e83](https://github.com/voxelum/minecraft-launcher-core-node/commit/f78e1b3fe5e24c2dccf910129ef8e25d7f164e83))
### @xmcl/file-transfer@1.0.5
#### Bug Fixes

- fix: Correctly retry and handle the redirect in range ([1565e64b7c83f50867d1ba9663f035ade475875b](https://github.com/voxelum/minecraft-launcher-core-node/commit/1565e64b7c83f50867d1ba9663f035ade475875b))
- fix: Should failed if the request is failed ([524c044ac4c27cdbaa7fa06b2b94e4e08ddb8b51](https://github.com/voxelum/minecraft-launcher-core-node/commit/524c044ac4c27cdbaa7fa06b2b94e4e08ddb8b51))
- fix: Update undici version ([f78e1b3fe5e24c2dccf910129ef8e25d7f164e83](https://github.com/voxelum/minecraft-launcher-core-node/commit/f78e1b3fe5e24c2dccf910129ef8e25d7f164e83))
### @xmcl/system@2.2.7
#### Bug Fixes

- fix: correct the build ([12a1b6cc5cb7b47581d6a3b5156edae6031b6823](https://github.com/voxelum/minecraft-launcher-core-node/commit/12a1b6cc5cb7b47581d6a3b5156edae6031b6823))
### @xmcl/gamesetting@3.0.2
#### Bug Fixes

- fix(gamesetting): correctly parse string ([0522ddff5ccde139cd77621275b2d0238b0c2550](https://github.com/voxelum/minecraft-launcher-core-node/commit/0522ddff5ccde139cd77621275b2d0238b0c2550))
- fix: Correctly parse resourcepacks ([d3490a2c93a5389808c4670c2a825de5bc558758](https://github.com/voxelum/minecraft-launcher-core-node/commit/d3490a2c93a5389808c4670c2a825de5bc558758))
- fix: Should correct parse with resourcepack with : ([87a5aebde47c547e0be5abc23683dd4bf1a60a68](https://github.com/voxelum/minecraft-launcher-core-node/commit/87a5aebde47c547e0be5abc23683dd4bf1a60a68))
### @xmcl/modrinth@2.3.1
#### Bug Fixes

- fix: Update undici version ([f78e1b3fe5e24c2dccf910129ef8e25d7f164e83](https://github.com/voxelum/minecraft-launcher-core-node/commit/f78e1b3fe5e24c2dccf910129ef8e25d7f164e83))
- fix: Curseforge should respect the modLoaderTypes ([6759abf611f1a5475a72a90110c8fa2c12c592c9](https://github.com/voxelum/minecraft-launcher-core-node/commit/6759abf611f1a5475a72a90110c8fa2c12c592c9))
### @xmcl/nat-api@0.4.3
#### Bug Fixes

- fix: Update undici version ([f78e1b3fe5e24c2dccf910129ef8e25d7f164e83](https://github.com/voxelum/minecraft-launcher-core-node/commit/f78e1b3fe5e24c2dccf910129ef8e25d7f164e83))
### @xmcl/user@4.1.0
#### Features

- feat: Add more exception to getProfile ([c74c353483d7d67a53281fa6cdf979c4e6dcd286](https://github.com/voxelum/minecraft-launcher-core-node/commit/c74c353483d7d67a53281fa6cdf979c4e6dcd286))
#### Bug Fixes

- fix: Correctly handle yggdrasil error ([dc77fb3f4ec17c785262c553ba48ce867000dfb2](https://github.com/voxelum/minecraft-launcher-core-node/commit/dc77fb3f4ec17c785262c553ba48ce867000dfb2))
- fix: Update undici version ([f78e1b3fe5e24c2dccf910129ef8e25d7f164e83](https://github.com/voxelum/minecraft-launcher-core-node/commit/f78e1b3fe5e24c2dccf910129ef8e25d7f164e83))
### @xmcl/client@3.1.1
- Dependency @xmcl/nbt bump **patch**
### @xmcl/game-data@1.2.4
- Dependency @xmcl/nbt bump **patch**
- Dependency @xmcl/system bump **patch**
### @xmcl/installer@5.3.0
#### Features

- feat: Support new neoforge download ([14261148672c8434a0b9aa5ab2b5c2f5b4febc15](https://github.com/voxelum/minecraft-launcher-core-node/commit/14261148672c8434a0b9aa5ab2b5c2f5b4febc15))
#### Bug Fixes

- fix: Avoid uncaught excpetion on detecting java ([9d47f43f5be79deca4524e339ea81c26df22ab51](https://github.com/voxelum/minecraft-launcher-core-node/commit/9d47f43f5be79deca4524e339ea81c26df22ab51))
- fix: Install new forge by 2 steps ([2cab21159fc95b17448e25180cdc17f28228db1f](https://github.com/voxelum/minecraft-launcher-core-node/commit/2cab21159fc95b17448e25180cdc17f28228db1f))
- fix: Cannot install 1.20.4 forge ([efaf4ecf0cf82ea1dd09a2639f3528f519ef5210](https://github.com/voxelum/minecraft-launcher-core-node/commit/efaf4ecf0cf82ea1dd09a2639f3528f519ef5210))
- fix: Should also verify non sha1 output ([b4acbd3f819cd177f36ae729ba7292e20564b5f5](https://github.com/voxelum/minecraft-launcher-core-node/commit/b4acbd3f819cd177f36ae729ba7292e20564b5f5))
- fix: Update undici version ([f78e1b3fe5e24c2dccf910129ef8e25d7f164e83](https://github.com/voxelum/minecraft-launcher-core-node/commit/f78e1b3fe5e24c2dccf910129ef8e25d7f164e83))
- Dependency @xmcl/file-transfer bump **patch**
### @xmcl/mod-parser@3.3.5
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.2.3
#### Bug Fixes

- fix: correct the build ([12a1b6cc5cb7b47581d6a3b5156edae6031b6823](https://github.com/voxelum/minecraft-launcher-core-node/commit/12a1b6cc5cb7b47581d6a3b5156edae6031b6823))
- Dependency @xmcl/system bump **patch**
### @xmcl/model@2.0.3
- Dependency @xmcl/resourcepack bump **patch**


## 7.4.0
### @xmcl/client@3.1.0
#### Features

- feat: Add udp6 support ([98075aad7af9ef0e41de0c4ce35bd1be9d727197](https://github.com/voxelum/minecraft-launcher-core-node/commit/98075aad7af9ef0e41de0c4ce35bd1be9d727197))
### @xmcl/modrinth@2.3.0
#### Features

- feat: Update search result ([d62330472071db1d06ce42dbb723efb132430246](https://github.com/voxelum/minecraft-launcher-core-node/commit/d62330472071db1d06ce42dbb723efb132430246))
- feat: Add getProjects for modrinth ([33950d1612279108ff39b6cc1a00ff512c52e82f](https://github.com/voxelum/minecraft-launcher-core-node/commit/33950d1612279108ff39b6cc1a00ff512c52e82f))
### @xmcl/user@4.0.1
#### Bug Fixes

- fix: Throw error if the request is failed ([89d0d11d1f7b5b455ddf7e864a47a5cad496910c](https://github.com/voxelum/minecraft-launcher-core-node/commit/89d0d11d1f7b5b455ddf7e864a47a5cad496910c))


## 7.3.0
### @xmcl/text-component@2.1.3
#### Bug Fixes

- fix: fix dark_green casing color (#280) ([02bd1995a25266b52e9390203bc153e17250ecb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/02bd1995a25266b52e9390203bc153e17250ecb5))
### @xmcl/core@2.12.1
#### Bug Fixes

- fix: Should also parse non-standard minecraft version ([698df29ede3916f5b45008a735cfdcae19d2b754](https://github.com/voxelum/minecraft-launcher-core-node/commit/698df29ede3916f5b45008a735cfdcae19d2b754))
### @xmcl/curseforge@2.1.0
#### Features

- feat: Add support for searching mods by multiple mod loaders ([ef8ca12b39db179075dbad9735014c7d3c911123](https://github.com/voxelum/minecraft-launcher-core-node/commit/ef8ca12b39db179075dbad9735014c7d3c911123))
#### Bug Fixes

- fix: Make modLoaderType option for getModfiles ([a807e8c2850faa2682cde1496c4f40e3a33bcbf9](https://github.com/voxelum/minecraft-launcher-core-node/commit/a807e8c2850faa2682cde1496c4f40e3a33bcbf9))
- fix: modrinth & curseforge json structure ([2abafd59100e085a7224e174706c48462285f374](https://github.com/voxelum/minecraft-launcher-core-node/commit/2abafd59100e085a7224e174706c48462285f374))
- fix: Update undici ([a9f7034d867746b531b485fb100be380f9752189](https://github.com/voxelum/minecraft-launcher-core-node/commit/a9f7034d867746b531b485fb100be380f9752189))
### @xmcl/discord-rpc@1.1.1
#### Bug Fixes

- fix: Update undici ([a9f7034d867746b531b485fb100be380f9752189](https://github.com/voxelum/minecraft-launcher-core-node/commit/a9f7034d867746b531b485fb100be380f9752189))
### @xmcl/file-transfer@1.0.4
#### Bug Fixes

- fix: Update undici ([a9f7034d867746b531b485fb100be380f9752189](https://github.com/voxelum/minecraft-launcher-core-node/commit/a9f7034d867746b531b485fb100be380f9752189))
### @xmcl/task@4.1.0
#### Features

- feat: Add cancel timeout option ([14167e9186af8df83bd5e82f75889b0f2f92148e](https://github.com/voxelum/minecraft-launcher-core-node/commit/14167e9186af8df83bd5e82f75889b0f2f92148e))
#### Bug Fixes

- fix: fix the map type ([5dbe564977932f8292a7b1537a0dd419c2a2698f](https://github.com/voxelum/minecraft-launcher-core-node/commit/5dbe564977932f8292a7b1537a0dd419c2a2698f))
### @xmcl/mod-parser@3.3.4
#### Bug Fixes

- fix: Align fabric mod metadata ([dbb0167e555221bc52055b713bfee874662a0e0a](https://github.com/voxelum/minecraft-launcher-core-node/commit/dbb0167e555221bc52055b713bfee874662a0e0a))
### @xmcl/modrinth@2.2.0
#### Features

- feat: Add get versions from hash and version file primary type ([18cdd57e6520abd0b3228bd8bdfe4f039cb33378](https://github.com/voxelum/minecraft-launcher-core-node/commit/18cdd57e6520abd0b3228bd8bdfe4f039cb33378))
#### Bug Fixes

- fix: modrinth & curseforge json structure ([2abafd59100e085a7224e174706c48462285f374](https://github.com/voxelum/minecraft-launcher-core-node/commit/2abafd59100e085a7224e174706c48462285f374))
- fix: Add loaders to modrinth project ([a9510ba70f1b38c3ba95721786aad03dcaf8c324](https://github.com/voxelum/minecraft-launcher-core-node/commit/a9510ba70f1b38c3ba95721786aad03dcaf8c324))
- fix: Update undici ([a9f7034d867746b531b485fb100be380f9752189](https://github.com/voxelum/minecraft-launcher-core-node/commit/a9f7034d867746b531b485fb100be380f9752189))
### @xmcl/nat-api@0.4.2
#### Bug Fixes

- fix: Add nat error capture ([90548218dcea4fb10ae229036de22a5f4b28e28d](https://github.com/voxelum/minecraft-launcher-core-node/commit/90548218dcea4fb10ae229036de22a5f4b28e28d))
- fix: Update undici ([a9f7034d867746b531b485fb100be380f9752189](https://github.com/voxelum/minecraft-launcher-core-node/commit/a9f7034d867746b531b485fb100be380f9752189))
### @xmcl/user@4.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: Change the acquireXboxToken API interface to make the api call more reasonable ([0e397ba20715ef3031c1ec5d60ce0dd073381545](https://github.com/voxelum/minecraft-launcher-core-node/commit/0e397ba20715ef3031c1ec5d60ce0dd073381545))
#### Bug Fixes

- fix: Update undici ([a9f7034d867746b531b485fb100be380f9752189](https://github.com/voxelum/minecraft-launcher-core-node/commit/a9f7034d867746b531b485fb100be380f9752189))
### @xmcl/client@3.0.2
- Dependency @xmcl/text-component bump **patch**
### @xmcl/installer@5.2.0
#### Features

- feat: Support labymod ([6b9eb45a2b52aed06c07d92e3adc03f46fd91a89](https://github.com/voxelum/minecraft-launcher-core-node/commit/6b9eb45a2b52aed06c07d92e3adc03f46fd91a89))
- feat: support option to skip asset hash ([d3f32c31a56d16baf7cb203e27376c87f2102665](https://github.com/voxelum/minecraft-launcher-core-node/commit/d3f32c31a56d16baf7cb203e27376c87f2102665))
- feat: support neoforge ([a48bcd469c78b73398b87d84386e716d3ab29bc6](https://github.com/voxelum/minecraft-launcher-core-node/commit/a48bcd469c78b73398b87d84386e716d3ab29bc6))
#### Bug Fixes

- fix: Correctly install labymod libraries ([dd661752a02e9c77b30d6ee8154eee741de47f4b](https://github.com/voxelum/minecraft-launcher-core-node/commit/dd661752a02e9c77b30d6ee8154eee741de47f4b))
- fix: Fix the type ambiguity ([8c913c42502f0ed314daf69673ab1a9cc1b6e0a5](https://github.com/voxelum/minecraft-launcher-core-node/commit/8c913c42502f0ed314daf69673ab1a9cc1b6e0a5))
- fix: Support new legacy forge jar format ([55c77b2151ed3eb337d433c2b49c3e170a77af12](https://github.com/voxelum/minecraft-launcher-core-node/commit/55c77b2151ed3eb337d433c2b49c3e170a77af12))
- fix: Update undici ([a9f7034d867746b531b485fb100be380f9752189](https://github.com/voxelum/minecraft-launcher-core-node/commit/a9f7034d867746b531b485fb100be380f9752189))
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/file-transfer bump **patch**
- Dependency @xmcl/task bump **patch**


## 7.2.0
### @xmcl/core@2.12.0
#### Features

- feat: Add abort signal to diagnose ([167eb5efc74edfb23dcfa4116838a70b577e1c23](https://github.com/voxelum/minecraft-launcher-core-node/commit/167eb5efc74edfb23dcfa4116838a70b577e1c23))
#### Bug Fixes

- fix: Handle the case that the rules are undefined ([aec6c21ddcfa71be49a9a9d270b2ad619b4b3731](https://github.com/voxelum/minecraft-launcher-core-node/commit/aec6c21ddcfa71be49a9a9d270b2ad619b4b3731))
- fix: Raise error before the path.join ([5430dd914825ed457599d0a48e480b47ddded14f](https://github.com/voxelum/minecraft-launcher-core-node/commit/5430dd914825ed457599d0a48e480b47ddded14f))
### @xmcl/curseforge@2.0.3
#### Bug Fixes

- fix: Fix the curseforge url concat ([3e5ca1adfdc5c53db77fe3e1195aa52f6cc5dfe3](https://github.com/voxelum/minecraft-launcher-core-node/commit/3e5ca1adfdc5c53db77fe3e1195aa52f6cc5dfe3))
- fix: build modrinth types, close #266 ([567cc16844b39996687623dd093f4af425386f9e](https://github.com/voxelum/minecraft-launcher-core-node/commit/567cc16844b39996687623dd093f4af425386f9e))
### @xmcl/discord-rpc@1.1.0
#### Features

- feat: Add discord rpc ([c89b71faacee23396097e702a2a8fb2c9a3e17ba](https://github.com/voxelum/minecraft-launcher-core-node/commit/c89b71faacee23396097e702a2a8fb2c9a3e17ba))
#### Bug Fixes

- fix: Uncaught discord exception ([4ec7f7ed57bf526865a7d33d7e04c5f2be5a09c5](https://github.com/voxelum/minecraft-launcher-core-node/commit/4ec7f7ed57bf526865a7d33d7e04c5f2be5a09c5))
### @xmcl/file-transfer@1.0.3
#### Bug Fixes

- fix: Try to truncate the file accordingly ([616b5ddbd3754da8a273d8bb239796eaf17321e0](https://github.com/voxelum/minecraft-launcher-core-node/commit/616b5ddbd3754da8a273d8bb239796eaf17321e0))
- fix: wrong checksum when data is not synced ([aa3c64ecd0e90cc27133c3354289dedaecd63f75](https://github.com/voxelum/minecraft-launcher-core-node/commit/aa3c64ecd0e90cc27133c3354289dedaecd63f75))
### @xmcl/task@4.0.6
#### Bug Fixes

- fix: Use AggregateError ([a89b28cdbcc7a7f971ad40f7f952a1b22329ed33](https://github.com/voxelum/minecraft-launcher-core-node/commit/a89b28cdbcc7a7f971ad40f7f952a1b22329ed33))
### @xmcl/modrinth@2.1.0
#### Features

- feat: Add the new header field to modrinth category ([eb2794eea5423e1aa539c843c05b1cfe8b9f3b7d](https://github.com/voxelum/minecraft-launcher-core-node/commit/eb2794eea5423e1aa539c843c05b1cfe8b9f3b7d))
### @xmcl/user@3.0.3
#### Bug Fixes

- fix: Wrong api for validate and get game profile ([7107cad830d8de513ce282d6c0552c170d183e89](https://github.com/voxelum/minecraft-launcher-core-node/commit/7107cad830d8de513ce282d6c0552c170d183e89))
### @xmcl/installer@5.1.0
#### Features

- feat: Throw error if parse failed ([99ff29b98926afc1a5afb8fabe6580c29e9192a5](https://github.com/voxelum/minecraft-launcher-core-node/commit/99ff29b98926afc1a5afb8fabe6580c29e9192a5))
#### Bug Fixes

- fix: Add fallback to download asset index ([752863120d94b38b11b95d407ceea0ad7099683e](https://github.com/voxelum/minecraft-launcher-core-node/commit/752863120d94b38b11b95d407ceea0ad7099683e))
- fix: The validator is missed for validator refactor ([a05d427de6e7f5647215f2957894c5f1fa16a286](https://github.com/voxelum/minecraft-launcher-core-node/commit/a05d427de6e7f5647215f2957894c5f1fa16a286))
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/file-transfer bump **patch**
- Dependency @xmcl/task bump **patch**


## 7.1.4
### @xmcl/curseforge@2.0.2
#### Bug Fixes

- fix: Try to bump to fix shim ([42e22d1f173126f2ff05f674f926a71670ef894d](https://github.com/voxelum/minecraft-launcher-core-node/commit/42e22d1f173126f2ff05f674f926a71670ef894d))
### @xmcl/modrinth@2.0.2
#### Bug Fixes

- fix: correctly handle optional params ([0bf2f7c5734fdecf34bda2363eed2e38616c83f0](https://github.com/voxelum/minecraft-launcher-core-node/commit/0bf2f7c5734fdecf34bda2363eed2e38616c83f0))
### undici-shim@0.0.2
#### Bug Fixes

- fix: Try to bump to fix shim ([42e22d1f173126f2ff05f674f926a71670ef894d](https://github.com/voxelum/minecraft-launcher-core-node/commit/42e22d1f173126f2ff05f674f926a71670ef894d))
### @xmcl/user@3.0.2
#### Bug Fixes

- fix: make api public for runtime change ([6e3044ef73fab0bcd08b1be9893ed31456e1797c](https://github.com/voxelum/minecraft-launcher-core-node/commit/6e3044ef73fab0bcd08b1be9893ed31456e1797c))


## 7.1.3
### @xmcl/asm@1.0.1
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/bytebuffer@0.1.1
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/text-component@2.1.2
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/unzip@2.1.2
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/curseforge@2.0.1
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/file-transfer@1.0.2
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/forge-site-parser@2.0.9
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/gamesetting@3.0.1
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/task@4.0.5
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/modrinth@2.0.1
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/nat-api@0.4.1
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/user@3.0.1
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
### @xmcl/nbt@3.0.1
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
- Dependency @xmcl/bytebuffer bump **patch**
### @xmcl/client@3.0.1
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
- Dependency @xmcl/bytebuffer bump **patch**
- Dependency @xmcl/nbt bump **patch**
- Dependency @xmcl/text-component bump **patch**
### @xmcl/core@2.11.2
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/system@2.2.6
#### Bug Fixes

- fix: browser build for system ([4e56e4486208e72d550eaebb687b4f558fac1a80](https://github.com/voxelum/minecraft-launcher-core-node/commit/4e56e4486208e72d550eaebb687b4f558fac1a80))
- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/game-data@1.2.3
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
- Dependency @xmcl/nbt bump **patch**
- Dependency @xmcl/system bump **patch**
### @xmcl/installer@5.0.3
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
- Dependency @xmcl/asm bump **patch**
- Dependency @xmcl/unzip bump **patch**
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/file-transfer bump **patch**
- Dependency @xmcl/forge-site-parser bump **patch**
- Dependency @xmcl/task bump **patch**
### @xmcl/mod-parser@3.3.3
#### Bug Fixes

- fix: Should not close the fs if it's not created in scope ([d3818ac2df1973f4912cbd076799733ab8aa422c](https://github.com/voxelum/minecraft-launcher-core-node/commit/d3818ac2df1973f4912cbd076799733ab8aa422c))
- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
- Dependency @xmcl/asm bump **patch**
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.2.2
#### Bug Fixes

- fix: Should not close the fs if it's not created in scope ([d3818ac2df1973f4912cbd076799733ab8aa422c](https://github.com/voxelum/minecraft-launcher-core-node/commit/d3818ac2df1973f4912cbd076799733ab8aa422c))
- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
- Dependency @xmcl/system bump **patch**
### @xmcl/model@2.0.2
#### Bug Fixes

- fix: adjust package info to bump new esm release ([d09b152d7bf3a8c515a797c8adaa46e98950c642](https://github.com/voxelum/minecraft-launcher-core-node/commit/d09b152d7bf3a8c515a797c8adaa46e98950c642))
- Dependency @xmcl/resourcepack bump **patch**


## 7.1.2
### @xmcl/unzip@2.1.1
#### Bug Fixes

- fix: #259 The messed unzip dependencies ([1225de3114f8dabac63ffbfbb6da0b974a5e41be](https://github.com/voxelum/minecraft-launcher-core-node/commit/1225de3114f8dabac63ffbfbb6da0b974a5e41be))
### @xmcl/core@2.11.1
- Dependency @xmcl/unzip bump **patch**
### @xmcl/system@2.2.5
- Dependency @xmcl/unzip bump **patch**
### @xmcl/game-data@1.2.2
- Dependency @xmcl/system bump **patch**
### @xmcl/installer@5.0.2
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/unzip bump **patch**
### @xmcl/mod-parser@3.3.2
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.2.1
- Dependency @xmcl/system bump **patch**
### @xmcl/model@2.0.1
- Dependency @xmcl/resourcepack bump **patch**


## 7.1.1
### @xmcl/file-transfer@1.0.1
#### Bug Fixes

- fix: rename package to correctly publish ([ee1a9d13373e17378192ab33f8ac4af49b1d3a73](https://github.com/voxelum/minecraft-launcher-core-node/commit/ee1a9d13373e17378192ab33f8ac4af49b1d3a73))
### @xmcl/installer@5.0.1
#### Bug Fixes

- fix: rename package to correctly publish ([ee1a9d13373e17378192ab33f8ac4af49b1d3a73](https://github.com/voxelum/minecraft-launcher-core-node/commit/ee1a9d13373e17378192ab33f8ac4af49b1d3a73))


## 7.1.0
### @xmcl/asm@1.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: remove the usage of long ([b6c98c552c242d95edac90e248231a873ab380a4](https://github.com/voxelum/minecraft-launcher-core-node/commit/b6c98c552c242d95edac90e248231a873ab380a4))
### @xmcl/bytebuffer@0.1.0
#### Features

- feat: Add bytebuffer package ([8d99df59f6bb28d1e1cfb2bdc3a1230b3c6491a2](https://github.com/voxelum/minecraft-launcher-core-node/commit/8d99df59f6bb28d1e1cfb2bdc3a1230b3c6491a2))
### @xmcl/unzip@2.1.0
#### Features

- feat: Support filtering entries in a flexiable way ([7e989573442e467e0d2ec1d2f59826e89136ca95](https://github.com/voxelum/minecraft-launcher-core-node/commit/7e989573442e467e0d2ec1d2f59826e89136ca95))
### @xmcl/curseforge@2.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: New API with undici ([57976a96a431468e691cbf867a36a727127ee143](https://github.com/voxelum/minecraft-launcher-core-node/commit/57976a96a431468e691cbf867a36a727127ee143))
#### Bug Fixes

- fix: Correct the curseforge typing ([717486d60a2b3e4695c967e2399b8209b7627c0e](https://github.com/voxelum/minecraft-launcher-core-node/commit/717486d60a2b3e4695c967e2399b8209b7627c0e))
- fix: Correct curseforge downloadUrl ([8542538f1b452f25f840a418013e26183aa261cb](https://github.com/voxelum/minecraft-launcher-core-node/commit/8542538f1b452f25f840a418013e26183aa261cb))
### @xmcl/download-core@1.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: split package into download-core package ([22ab04785234968d2c99e9e09fbc91621d4ba782](https://github.com/voxelum/minecraft-launcher-core-node/commit/22ab04785234968d2c99e9e09fbc91621d4ba782))
#### Bug Fixes

- fix: typo ([a7dbd69cbe1683101fb4893d4762bb011f34885f](https://github.com/voxelum/minecraft-launcher-core-node/commit/a7dbd69cbe1683101fb4893d4762bb011f34885f))
### @xmcl/gamesetting@3.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: Adjust API name and code style ([0061e5a8bc95922c197e5169720c3fdb3714d361](https://github.com/voxelum/minecraft-launcher-core-node/commit/0061e5a8bc95922c197e5169720c3fdb3714d361))
### @xmcl/task@4.0.4
#### Bug Fixes

- fix(task): Ensure the task can be cancelled immediately ([9670b5311bc3e21aa6b806aaadd123697c04e473](https://github.com/voxelum/minecraft-launcher-core-node/commit/9670b5311bc3e21aa6b806aaadd123697c04e473))
### @xmcl/modrinth@2.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: New API with undici ([57976a96a431468e691cbf867a36a727127ee143](https://github.com/voxelum/minecraft-launcher-core-node/commit/57976a96a431468e691cbf867a36a727127ee143))
### @xmcl/nat-api@0.4.0
#### Features

- feat: Add nat-api ([22a954e4a716ada01b2a77adda73b4ffeeb7f7d9](https://github.com/voxelum/minecraft-launcher-core-node/commit/22a954e4a716ada01b2a77adda73b4ffeeb7f7d9))
### @xmcl/user@3.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: use undici and re-design the API ([fad9fc09035b30cd4db9fcd787bb1611b5f84eb1](https://github.com/voxelum/minecraft-launcher-core-node/commit/fad9fc09035b30cd4db9fcd787bb1611b5f84eb1))
#### Features

- feat: Support setting offline uuid for user ([587a2698d459d277f0ce1223fea8e13ec6de6f94](https://github.com/voxelum/minecraft-launcher-core-node/commit/587a2698d459d277f0ce1223fea8e13ec6de6f94))
### @xmcl/nbt@3.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: remove the usage of long ([b6c98c552c242d95edac90e248231a873ab380a4](https://github.com/voxelum/minecraft-launcher-core-node/commit/b6c98c552c242d95edac90e248231a873ab380a4))
- Dependency @xmcl/bytebuffer bump **patch**
### @xmcl/client@3.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: remove the usage of long ([b6c98c552c242d95edac90e248231a873ab380a4](https://github.com/voxelum/minecraft-launcher-core-node/commit/b6c98c552c242d95edac90e248231a873ab380a4))
- Dependency @xmcl/bytebuffer bump **patch**
- Dependency @xmcl/nbt bump **patch**
### @xmcl/core@2.11.0
#### Features

- feat: allow to change checksum function ([47fc495ba7518b9a635f3d1c37eda4f91ebb71f8](https://github.com/voxelum/minecraft-launcher-core-node/commit/47fc495ba7518b9a635f3d1c37eda4f91ebb71f8))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/system@2.2.4
- Dependency @xmcl/unzip bump **patch**
### @xmcl/game-data@1.2.1
- Dependency @xmcl/nbt bump **patch**
- Dependency @xmcl/system bump **patch**
### @xmcl/installer@5.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: split package into download-core package ([22ab04785234968d2c99e9e09fbc91621d4ba782](https://github.com/voxelum/minecraft-launcher-core-node/commit/22ab04785234968d2c99e9e09fbc91621d4ba782))
#### Features

- feat: add options to interpret ([88900aa812baccaa1774ffc9a4ec8ba48267d8a9](https://github.com/voxelum/minecraft-launcher-core-node/commit/88900aa812baccaa1774ffc9a4ec8ba48267d8a9))
#### Bug Fixes

- fix: Cannot parse new legacy forge installer zip ([70dc903aa29865ef16ba080198734077cb6306d5](https://github.com/voxelum/minecraft-launcher-core-node/commit/70dc903aa29865ef16ba080198734077cb6306d5))
- fix: correctly propagate reset ([5e68e4b8d6de9535c0ac981d7e3dee35206920bb](https://github.com/voxelum/minecraft-launcher-core-node/commit/5e68e4b8d6de9535c0ac981d7e3dee35206920bb))
- fix: Allow to cancel post processing ([36d705f36ab182e682fe8ddf898f9abddb0a2400](https://github.com/voxelum/minecraft-launcher-core-node/commit/36d705f36ab182e682fe8ddf898f9abddb0a2400))
- fix: Prevent the http error close the fd ([2d8084dc8781f4f610239ffe57fae624bef04bc1](https://github.com/voxelum/minecraft-launcher-core-node/commit/2d8084dc8781f4f610239ffe57fae624bef04bc1))
- fix: add 10 sec timeout ([9654f72547817c073bf24238939597f671170b3e](https://github.com/voxelum/minecraft-launcher-core-node/commit/9654f72547817c073bf24238939597f671170b3e))
- fix: Don't download file if the content is empty ([d48c487b867cd3b7ab4ca118b1db6ec14351f694](https://github.com/voxelum/minecraft-launcher-core-node/commit/d48c487b867cd3b7ab4ca118b1db6ec14351f694))
- fix: Custom host should allow the reoreder of vanilla host ([a679dbbc8a7684691b56d81fc9eedd7fa522c7dd](https://github.com/voxelum/minecraft-launcher-core-node/commit/a679dbbc8a7684691b56d81fc9eedd7fa522c7dd))
- fix: Prevent duplicated mc version prefix during install forge ([e1f87bd0e982f1d11dde05e9140ef3bd6b2626ea](https://github.com/voxelum/minecraft-launcher-core-node/commit/e1f87bd0e982f1d11dde05e9140ef3bd6b2626ea))
- fix: Abort the request in proper way ([7816b8002fada53e665a114958b0d78e3d73674b](https://github.com/voxelum/minecraft-launcher-core-node/commit/7816b8002fada53e665a114958b0d78e3d73674b))
- fix: Should catpure url from download error ([386705537ae518fab91e9890ff513a24def3d196](https://github.com/voxelum/minecraft-launcher-core-node/commit/386705537ae518fab91e9890ff513a24def3d196))
- fix: Should capture request error ([1d86856904d244a266404b6b64179c43f4035778](https://github.com/voxelum/minecraft-launcher-core-node/commit/1d86856904d244a266404b6b64179c43f4035778))
- Dependency @xmcl/asm bump **patch**
- Dependency @xmcl/unzip bump **patch**
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/download-core bump **patch**
- Dependency @xmcl/task bump **patch**
### @xmcl/mod-parser@3.3.1
- Dependency @xmcl/asm bump **patch**
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.2.0
#### Features

- feat: @xmcl/resourcepack - New features (including a "minor" breaking change) (#252) ([c23bf872447127759cbdfba8280ecfeebfe22847](https://github.com/voxelum/minecraft-launcher-core-node/commit/c23bf872447127759cbdfba8280ecfeebfe22847))
- Dependency @xmcl/system bump **patch**
### @xmcl/model@2.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: @xmcl/model - [Breaking change] New TextureManager interface (#251) ([c76559dbc9dcdbb4dfc21906ee21a8bef5db19c9](https://github.com/voxelum/minecraft-launcher-core-node/commit/c76559dbc9dcdbb4dfc21906ee21a8bef5db19c9))
#### Features

- feat: Expanding BlockModelFactory.getObject() (#248) ([47ad92b40874938e29979feb29a925f7078a3d45](https://github.com/voxelum/minecraft-launcher-core-node/commit/47ad92b40874938e29979feb29a925f7078a3d45))
- Dependency @xmcl/resourcepack bump **patch**


## 7.0.0
### @xmcl/client@2.1.3
#### Bug Fixes

- fix: wrong listen multicast addr ([0dc9d85c6bc38b87d606ba450e916d811d01b84d](https://github.com/voxelum/minecraft-launcher-core-node/commit/0dc9d85c6bc38b87d606ba450e916d811d01b84d))
### @xmcl/core@2.10.1
#### Bug Fixes

- fix: compatible with unofficial version json ([5cc7e3bdfb7255c3ed6fef6546cf31f054bb69de](https://github.com/voxelum/minecraft-launcher-core-node/commit/5cc7e3bdfb7255c3ed6fef6546cf31f054bb69de))
- fix(core): correct override lib & extract natives ([c5f742fd3845d3c815c57d69129bb34e3c5cc90a](https://github.com/voxelum/minecraft-launcher-core-node/commit/c5f742fd3845d3c815c57d69129bb34e3c5cc90a))
- fix(core): new native format ([c3b64dac1ee393027e75212b6a3bb018f4a41034](https://github.com/voxelum/minecraft-launcher-core-node/commit/c3b64dac1ee393027e75212b6a3bb018f4a41034))
- fix: decorate error ([05bdd84e60fcb40b31951b61dc4ba676c9cb25b5](https://github.com/voxelum/minecraft-launcher-core-node/commit/05bdd84e60fcb40b31951b61dc4ba676c9cb25b5))
### @xmcl/curseforge@1.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: update curseforge api ([77b2ccdcac3b3b0d2e4a5d8234e97a3d45d46445](https://github.com/voxelum/minecraft-launcher-core-node/commit/77b2ccdcac3b3b0d2e4a5d8234e97a3d45d46445))
#### Bug Fixes

- fix: adjust curseforge type ([a511a755c4b1500c22dd21c44da2b94b45bd75c8](https://github.com/voxelum/minecraft-launcher-core-node/commit/a511a755c4b1500c22dd21c44da2b94b45bd75c8))
- fix: correct the curseforge type ([9e5de6eb8cca7ad8f04b0ec7968ffb7b6b75fa49](https://github.com/voxelum/minecraft-launcher-core-node/commit/9e5de6eb8cca7ad8f04b0ec7968ffb7b6b75fa49))
- fix: the module import of dev ([5b5d34b5bca14ce181a6b298c6c604200f2dfc38](https://github.com/voxelum/minecraft-launcher-core-node/commit/5b5d34b5bca14ce181a6b298c6c604200f2dfc38))
### @xmcl/mod-parser@3.3.0
#### Features

- feat: Add quilt mod parser ([242515c2e4ed02e7a79d0c160a4541614f4f2397](https://github.com/voxelum/minecraft-launcher-core-node/commit/242515c2e4ed02e7a79d0c160a4541614f4f2397))
- feat(mod-parser): add plugin info to the output ([f6c76b3e1d7b179a9c6bba33575900ad99d4b828](https://github.com/voxelum/minecraft-launcher-core-node/commit/f6c76b3e1d7b179a9c6bba33575900ad99d4b828))
#### Bug Fixes

- fix(mod-parser): ensure parse fabric mod even if the metadata is invalid json ([ea5cea07e1cf10ca1418ad90215693ceb9a59d98](https://github.com/voxelum/minecraft-launcher-core-node/commit/ea5cea07e1cf10ca1418ad90215693ceb9a59d98))
### @xmcl/model@1.0.22
#### Bug Fixes

- fix: Fix the wrong UV for irregular cube ([6917a7759731944af08c95b4e39a170fb07f9843](https://github.com/voxelum/minecraft-launcher-core-node/commit/6917a7759731944af08c95b4e39a170fb07f9843))
### @xmcl/modrinth@1.1.0
#### Features

- feat(modrinth): update modrinth schema ([4d03fa430c87c467bc50d7724f58f8a26f526687](https://github.com/voxelum/minecraft-launcher-core-node/commit/4d03fa430c87c467bc50d7724f58f8a26f526687))
- feat(modrinth): add project type field ([2920f7cd778a0ba2c43c6860b4d14166f21eb518](https://github.com/voxelum/minecraft-launcher-core-node/commit/2920f7cd778a0ba2c43c6860b4d14166f21eb518))
#### Bug Fixes

- fix: the module import of dev ([5b5d34b5bca14ce181a6b298c6c604200f2dfc38](https://github.com/voxelum/minecraft-launcher-core-node/commit/5b5d34b5bca14ce181a6b298c6c604200f2dfc38))
### @xmcl/world@1.2.0
#### Features

- feat: Adds 'getEntityData' to WorldReader (#240) ([8bb4b4d978e6a0e799cdc9475bb874268138ca22](https://github.com/voxelum/minecraft-launcher-core-node/commit/8bb4b4d978e6a0e799cdc9475bb874268138ca22))
### @xmcl/installer@4.4.0
#### Features

- feat(installer): add quilt ([f832f28b6d6db7b68508e048a5327b94e9067db7](https://github.com/voxelum/minecraft-launcher-core-node/commit/f832f28b6d6db7b68508e048a5327b94e9067db7))
- feat: support parse patch version ([6889509a08d54f1a23ece1b829cbfb3242da20b1](https://github.com/voxelum/minecraft-launcher-core-node/commit/6889509a08d54f1a23ece1b829cbfb3242da20b1))
#### Bug Fixes

- fix: Should not return long java version after parse ([1d562f602efa0da7282f3856258121ddeda80d4d](https://github.com/voxelum/minecraft-launcher-core-node/commit/1d562f602efa0da7282f3856258121ddeda80d4d))
- fix: compatible with unofficial version json ([5cc7e3bdfb7255c3ed6fef6546cf31f054bb69de](https://github.com/voxelum/minecraft-launcher-core-node/commit/5cc7e3bdfb7255c3ed6fef6546cf31f054bb69de))
- fix: add enoent to common error ([c9ad601a71ec6d696660670bc6819f02e9bcfb4a](https://github.com/voxelum/minecraft-launcher-core-node/commit/c9ad601a71ec6d696660670bc6819f02e9bcfb4a))
- fix: prevent link failed to cause install failed ([0ff8d0073da1a0cb39fdbda7f38665855bf756d4](https://github.com/voxelum/minecraft-launcher-core-node/commit/0ff8d0073da1a0cb39fdbda7f38665855bf756d4))
- fix: return java full version ([4a9587c5033ea8fa649afec2e58210781af2b335](https://github.com/voxelum/minecraft-launcher-core-node/commit/4a9587c5033ea8fa649afec2e58210781af2b335))
- Dependency @xmcl/core bump **patch**


## 6.0.0
### @xmcl/asm@0.1.4
#### Bug Fixes

- fix(asm): don't check max version ([b5a5e6b5ef9a18af728e47d326a9767e00713263](https://github.com/voxelum/minecraft-launcher-core-node/commit/b5a5e6b5ef9a18af728e47d326a9767e00713263))
### @xmcl/core@2.10.0
#### Features

- feat(core): compatible with some thirdparty launcher version json ([c49fd5675a75d3c8d22a76c4074bee44eb063a9f](https://github.com/voxelum/minecraft-launcher-core-node/commit/c49fd5675a75d3c8d22a76c4074bee44eb063a9f))
- feat: add log config to launch arg ([241a759a28dd45a32cb88fbd1e3dd7e1f6bc9860](https://github.com/voxelum/minecraft-launcher-core-node/commit/241a759a28dd45a32cb88fbd1e3dd7e1f6bc9860))
- feat(core): add circular dependencies error ([281bf04a6ca9ed6b104b648020eedbc68ba90140](https://github.com/voxelum/minecraft-launcher-core-node/commit/281bf04a6ca9ed6b104b648020eedbc68ba90140))
### @xmcl/curseforge@0.2.0
#### Features

- feat: Support modrinth (#227) ([11c6b551d076e2059b609f6efbee8ff91542e17d](https://github.com/voxelum/minecraft-launcher-core-node/commit/11c6b551d076e2059b609f6efbee8ff91542e17d))
### @xmcl/task@4.0.3
#### Bug Fixes

- fix: don't transform twice ([d694000df969abc3fe51e323af8bf2336da04d43](https://github.com/voxelum/minecraft-launcher-core-node/commit/d694000df969abc3fe51e323af8bf2336da04d43))
### @xmcl/model@1.0.21
#### Bug Fixes

- fix: model image load cros error ([366b80c85f4776c38ab030650502b73bcea9cd92](https://github.com/voxelum/minecraft-launcher-core-node/commit/366b80c85f4776c38ab030650502b73bcea9cd92))
### @xmcl/modrinth@1.0.0
#### BREAKING CHANGES

- BREAKING CHANGE(modrinth): modrinth v2 api ([d7d5190825898f61c8a52001f13bd7c652abe22f](https://github.com/voxelum/minecraft-launcher-core-node/commit/d7d5190825898f61c8a52001f13bd7c652abe22f))
#### Features

- feat: support agent ([ff82d5a912abb199ff6d3d9b092e607eff7948c5](https://github.com/voxelum/minecraft-launcher-core-node/commit/ff82d5a912abb199ff6d3d9b092e607eff7948c5))
- feat: Support modrinth (#227) ([11c6b551d076e2059b609f6efbee8ff91542e17d](https://github.com/voxelum/minecraft-launcher-core-node/commit/11c6b551d076e2059b609f6efbee8ff91542e17d))
#### Bug Fixes

- fix(modrinth): the type of the response date ([b16c12dfe4cf5377b569db3ffc4144941aedf212](https://github.com/voxelum/minecraft-launcher-core-node/commit/b16c12dfe4cf5377b569db3ffc4144941aedf212))
- fix: should pass facets ([62c111005a26615b13e652ff6b47ed240462f079](https://github.com/voxelum/minecraft-launcher-core-node/commit/62c111005a26615b13e652ff6b47ed240462f079))
- fix(modrinth): fallback to relevance if index is empty ([7a3da01d55c7234dc7dd6f1360d5c8f59457318e](https://github.com/voxelum/minecraft-launcher-core-node/commit/7a3da01d55c7234dc7dd6f1360d5c8f59457318e))
- fix: add missing licenses cat ([621ecef4a0677737f4750c5df24192c360be9c5f](https://github.com/voxelum/minecraft-launcher-core-node/commit/621ecef4a0677737f4750c5df24192c360be9c5f))
### @xmcl/user@2.1.8
#### Bug Fixes

- fix(user): invalid uuid format ([41dee2f53b3059100524548a12f9409ea8515f96](https://github.com/voxelum/minecraft-launcher-core-node/commit/41dee2f53b3059100524548a12f9409ea8515f96))
- fix(user): correctly propagate error ([82418b2692fce2447c746410f4fadbf0483bf685](https://github.com/voxelum/minecraft-launcher-core-node/commit/82418b2692fce2447c746410f4fadbf0483bf685))
### @xmcl/installer@4.3.0
#### Features

- feat: download log config during download assets ([794ecc38c76285b879510c22be188b9471741263](https://github.com/voxelum/minecraft-launcher-core-node/commit/794ecc38c76285b879510c22be188b9471741263))
- feat(installer): correctly propagate download url ([ffef59fc362dfa83cb70999baadbfc43fb22f7cd](https://github.com/voxelum/minecraft-launcher-core-node/commit/ffef59fc362dfa83cb70999baadbfc43fb22f7cd))
#### Bug Fixes

- fix: correctly assign url ([1c3cfaa8419407d8f3c88bdfaea019540af9cfd3](https://github.com/voxelum/minecraft-launcher-core-node/commit/1c3cfaa8419407d8f3c88bdfaea019540af9cfd3))
- fix: allow agent to prevent cf request overflow ([aafe85f4bac16b27431f0b9a8dd9983d9d51ea84](https://github.com/voxelum/minecraft-launcher-core-node/commit/aafe85f4bac16b27431f0b9a8dd9983d9d51ea84))
- fix: propagate the url at first ([2b60486747a188cbe75a5844d95bc0c2b61042c1](https://github.com/voxelum/minecraft-launcher-core-node/commit/2b60486747a188cbe75a5844d95bc0c2b61042c1))
- fix: should switch method to fetch metadata ([00c82834a20e1be9ce3048fee4ccc2c577dc23fc](https://github.com/voxelum/minecraft-launcher-core-node/commit/00c82834a20e1be9ce3048fee4ccc2c577dc23fc))
- fix(installer): correctly link java ([daf601bf54e715c726382345b786ca9333d1261d](https://github.com/voxelum/minecraft-launcher-core-node/commit/daf601bf54e715c726382345b786ca9333d1261d))
- fix(installer): not abortable during fetching ([2595cceb90cc1d8b94ad326fb389d497e5293864](https://github.com/voxelum/minecraft-launcher-core-node/commit/2595cceb90cc1d8b94ad326fb389d497e5293864))
- Dependency @xmcl/asm bump **patch**
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/task bump **patch**
### @xmcl/mod-parser@3.2.1
#### Bug Fixes

- fix: change toml lib to parse malform toml mod ([c7b5b1ddc106d997fd9e74c3667f0239a286aa5f](https://github.com/voxelum/minecraft-launcher-core-node/commit/c7b5b1ddc106d997fd9e74c3667f0239a286aa5f))
- fix(mod-parser): don't crash if the bytecode parsing failed ([c1b10f24c49897a9fe0f3e7ad3a458de91346785](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b10f24c49897a9fe0f3e7ad3a458de91346785))
- Dependency @xmcl/asm bump **patch**


## 5.3.0
### @xmcl/core@2.9.0
#### Features

- feat: add options API for spawn function ([990fd7cd21d92020271f2c667e3cf3b8c6c1f40e](https://github.com/voxelum/minecraft-launcher-core-node/commit/990fd7cd21d92020271f2c667e3cf3b8c6c1f40e))
### @xmcl/installer@4.2.0
#### Features

- feat: add options API for spawn function ([990fd7cd21d92020271f2c667e3cf3b8c6c1f40e](https://github.com/voxelum/minecraft-launcher-core-node/commit/990fd7cd21d92020271f2c667e3cf3b8c6c1f40e))
- Dependency @xmcl/core bump **patch**


## 5.2.0
### @xmcl/installer@4.1.0
#### Features

- feat(installer): support forge 1.18 (#224) ([1cd283144e6b4b6a8c07ae7556a5df016a248fc1](https://github.com/voxelum/minecraft-launcher-core-node/commit/1cd283144e6b4b6a8c07ae7556a5df016a248fc1))
### @xmcl/resourcepack@1.1.3
#### Bug Fixes

- fix(resourcepack): optimize error msg ([64e4d0cf85dcade6edfa1cedc38dc14d58fc3e2f](https://github.com/voxelum/minecraft-launcher-core-node/commit/64e4d0cf85dcade6edfa1cedc38dc14d58fc3e2f))
### @xmcl/user@2.1.7
#### Bug Fixes

- fix(user): v5 uuid namespace ([dce694a48cdf5dd47d4675d7f7556f8d6712bdc6](https://github.com/voxelum/minecraft-launcher-core-node/commit/dce694a48cdf5dd47d4675d7f7556f8d6712bdc6))
- fix(user): fix the uuid gen ([6ac31c6d77b16bb920fe32a13a5ce7d5290cbc65](https://github.com/voxelum/minecraft-launcher-core-node/commit/6ac31c6d77b16bb920fe32a13a5ce7d5290cbc65))
### @xmcl/model@1.0.20
- Dependency @xmcl/resourcepack bump **patch**


## 5.1.0
### @xmcl/client@2.1.2
#### Bug Fixes

- fix(client): use 1.14.4 protocol as default ([5cdfe3a9749921c9ac648bc99f918e11ec1d76c1](https://github.com/voxelum/minecraft-launcher-core-node/commit/5cdfe3a9749921c9ac648bc99f918e11ec1d76c1))
- fix(client): should not destroy sock for reconnect ([ae5d771cdb11c1871989b9fb3d476ee7a00d266b](https://github.com/voxelum/minecraft-launcher-core-node/commit/ae5d771cdb11c1871989b9fb3d476ee7a00d266b))
### @xmcl/core@2.8.0
#### Features

- feat(core): support parse javaVersion in version json ([9271499d2c64e17ab4c3e0f4f7eb0ceb9ccd2738](https://github.com/voxelum/minecraft-launcher-core-node/commit/9271499d2c64e17ab4c3e0f4f7eb0ceb9ccd2738))
#### Bug Fixes

- fix: options.maxMemory overwrite bug #221 (#222) ([3072f875d500dec67ae1925482b3097f7f4065a0](https://github.com/voxelum/minecraft-launcher-core-node/commit/3072f875d500dec67ae1925482b3097f7f4065a0))
### @xmcl/task@4.0.2
#### Bug Fixes

- fix(task): typo & task.map ([21875229eeae19670c2b6f062bded2a9e556108c](https://github.com/voxelum/minecraft-launcher-core-node/commit/21875229eeae19670c2b6f062bded2a9e556108c))
### @xmcl/mod-parser@3.2.0
#### Features

- feat(mod-parser): try to parse all .info files in root ([5241cea867da011ac5da1aa4c12a684a71272573](https://github.com/voxelum/minecraft-launcher-core-node/commit/5241cea867da011ac5da1aa4c12a684a71272573))
#### Bug Fixes

- fix: support optifine new version ([9e28696c1e820c5c31ae5fd189ae1fb74772ba17](https://github.com/voxelum/minecraft-launcher-core-node/commit/9e28696c1e820c5c31ae5fd189ae1fb74772ba17))
### @xmcl/installer@4.0.2
#### Bug Fixes

- fix(installer): curseforge unpack task name ([5c4ec33cf7fc262d1427b713c180a68ef4a08c70](https://github.com/voxelum/minecraft-launcher-core-node/commit/5c4ec33cf7fc262d1427b713c180a68ef4a08c70))
- fix: correctly propagate abort/pause ([788234944486d90c1f79f4f10aeb01800cf985e1](https://github.com/voxelum/minecraft-launcher-core-node/commit/788234944486d90c1f79f4f10aeb01800cf985e1))
- fix(installer): not restrict jre runtime target ([1a907bf7ba891301e65dd14a6cb6653d2ac9642a](https://github.com/voxelum/minecraft-launcher-core-node/commit/1a907bf7ba891301e65dd14a6cb6653d2ac9642a))
- fix: support optifine new version ([9e28696c1e820c5c31ae5fd189ae1fb74772ba17](https://github.com/voxelum/minecraft-launcher-core-node/commit/9e28696c1e820c5c31ae5fd189ae1fb74772ba17))
- fix(installer): readable fabric version id ([e824d0ef90d2ccf4b9cf0e17174e39d04ed4ac9f](https://github.com/voxelum/minecraft-launcher-core-node/commit/e824d0ef90d2ccf4b9cf0e17174e39d04ed4ac9f))
- fix(installer): not fail during fallback ([c4e436e911d7fe7e70e019d8ca6fafe19c8caffb](https://github.com/voxelum/minecraft-launcher-core-node/commit/c4e436e911d7fe7e70e019d8ca6fafe19c8caffb))
- fix(installer): handle redirect 3xx ([67bd82e194a0a8f551192a2e4a53ef9fbea735b3](https://github.com/voxelum/minecraft-launcher-core-node/commit/67bd82e194a0a8f551192a2e4a53ef9fbea735b3))
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/task bump **patch**


## 5.0.2
### @xmcl/user@2.1.6
#### Bug Fixes

- fix: bundle uuid v35 into dist to fix build fail issue ([7b5403b9bd72ba66708637ca975707dcb82f2f83](https://github.com/voxelum/minecraft-launcher-core-node/commit/7b5403b9bd72ba66708637ca975707dcb82f2f83))


## 5.0.0
### @xmcl/asm@0.1.2
#### Bug Fixes

- fix: add missing dependencies ([17fed11b194ac4a325ef19e9cbf1babbac3b263e](https://github.com/voxelum/minecraft-launcher-core-node/commit/17fed11b194ac4a325ef19e9cbf1babbac3b263e))
### @xmcl/client@2.1.0
#### Features

- feat(client): add lan client/server ([75ed2efde78f584e56d22135fa896c48e90bf3b4](https://github.com/voxelum/minecraft-launcher-core-node/commit/75ed2efde78f584e56d22135fa896c48e90bf3b4))
### @xmcl/core@2.7.0
#### Features

- feat(launch): support forge 1.17 jvm args ([440462f593c20f8a7f677f3f8e0ce060888e4967](https://github.com/voxelum/minecraft-launcher-core-node/commit/440462f593c20f8a7f677f3f8e0ce060888e4967))
### @xmcl/task@4.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: minify the task API ([3fff63c463397aa0d3838f11d8cb2cacdb0fd68f](https://github.com/voxelum/minecraft-launcher-core-node/commit/3fff63c463397aa0d3838f11d8cb2cacdb0fd68f))
### @xmcl/system@2.2.2
#### Bug Fixes

- fix(system): cannot identify buffer in njs ([9ed6080693b7b3a88c7fdf3335b9bc189b51166c](https://github.com/voxelum/minecraft-launcher-core-node/commit/9ed6080693b7b3a88c7fdf3335b9bc189b51166c))
### @xmcl/installer@4.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: refactor API and rework on download ([a7d31f4d514f1e80612f48250edb527e4184f19a](https://github.com/voxelum/minecraft-launcher-core-node/commit/a7d31f4d514f1e80612f48250edb527e4184f19a))
#### Features

- feat(installer): support forge 1.17 ([32cfa5071086171e6f8f3e001f93f2dd828072fb](https://github.com/voxelum/minecraft-launcher-core-node/commit/32cfa5071086171e6f8f3e001f93f2dd828072fb))
- feat(installer): support new java runtime ([85a169ba5542c984d48951d0fd4ab2d6c64b884f](https://github.com/voxelum/minecraft-launcher-core-node/commit/85a169ba5542c984d48951d0fd4ab2d6c64b884f))
#### Bug Fixes

- fix(installer): support 308 redirect ([bb4e158b63d959b8f088dd10bb12ce704292a3c4](https://github.com/voxelum/minecraft-launcher-core-node/commit/bb4e158b63d959b8f088dd10bb12ce704292a3c4))
- fix(installer): correctly install intermediary for fabric ([1209e3b15d796394e4a0a4c912a8e93b1c45241c](https://github.com/voxelum/minecraft-launcher-core-node/commit/1209e3b15d796394e4a0a4c912a8e93b1c45241c))
- Dependency @xmcl/asm bump **patch**
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/task bump **patch**
### @xmcl/mod-parser@3.1.1
- Dependency @xmcl/asm bump **patch**
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.1.1
- Dependency @xmcl/system bump **patch**
### @xmcl/model@1.0.18
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/world@1.1.5
#### Bug Fixes

- fix: add missing dependencies ([17fed11b194ac4a325ef19e9cbf1babbac3b263e](https://github.com/voxelum/minecraft-launcher-core-node/commit/17fed11b194ac4a325ef19e9cbf1babbac3b263e))
- Dependency @xmcl/system bump **patch**


## 4.3.2
### @xmcl/core@2.6.2
#### Bug Fixes

- fix(core): should not fail gen cmd if there is no assets ([b7515545778db58dd7c6f58b0efb85e48ce7eb08](https://github.com/voxelum/minecraft-launcher-core-node/commit/b7515545778db58dd7c6f58b0efb85e48ce7eb08))
### @xmcl/server-info@2.0.4
#### Bug Fixes

- fix: force refresh server info esm package ([0a990a5984dc3aa44a11ebab859866e84e81e0da](https://github.com/voxelum/minecraft-launcher-core-node/commit/0a990a5984dc3aa44a11ebab859866e84e81e0da))
### @xmcl/installer@3.2.2
#### Bug Fixes

- fix(forge): correct error stack for installer ([60deba32f324da901c11b2f851a88895b013ccba](https://github.com/voxelum/minecraft-launcher-core-node/commit/60deba32f324da901c11b2f851a88895b013ccba))
- fix(installer): installResolvedLibraries not return promise ([09cef121eb50f1bfe483f9590f2c7b9ef9b3f6ae](https://github.com/voxelum/minecraft-launcher-core-node/commit/09cef121eb50f1bfe483f9590f2c7b9ef9b3f6ae))
- fix(installer): enrich checksum not match error ([af31290f21c571302ed11e7653ca82caa99d3a78](https://github.com/voxelum/minecraft-launcher-core-node/commit/af31290f21c571302ed11e7653ca82caa99d3a78))
- fix(installer): emit the error message on multi-error ([15adbabda4fc3f2d6a44f0f0a3c62cd41b21b511](https://github.com/voxelum/minecraft-launcher-core-node/commit/15adbabda4fc3f2d6a44f0f0a3c62cd41b21b511))
- Dependency @xmcl/core bump **patch**


## 4.3.1
### @xmcl/forge-site-parser@2.0.8
#### Bug Fixes

- fix(forge-site-parser): wrong type on Version object ([dfcb76139e3c228fcecf41975d07fc3e76cd0136](https://github.com/voxelum/minecraft-launcher-core-node/commit/dfcb76139e3c228fcecf41975d07fc3e76cd0136))
### @xmcl/model@1.0.17
#### Bug Fixes

- fix: new threejs model format ([7f3c3a4facbd6ca35dc9db3a701b303129e3e3b3](https://github.com/voxelum/minecraft-launcher-core-node/commit/7f3c3a4facbd6ca35dc9db3a701b303129e3e3b3))
- fix(model): correct the setSkin input url useage ([327f7c4b29bb98e2e8a95e5ffdc83c44d11abe88](https://github.com/voxelum/minecraft-launcher-core-node/commit/327f7c4b29bb98e2e8a95e5ffdc83c44d11abe88))
### @xmcl/installer@3.2.1
- Dependency @xmcl/forge-site-parser bump **patch**


## 4.3.0
### @xmcl/installer@3.2.0
#### Features

- feat(installer): add retry option ([4663a44bb824fa01e9efea7f43bfafdef23e01c1](https://github.com/voxelum/minecraft-launcher-core-node/commit/4663a44bb824fa01e9efea7f43bfafdef23e01c1))


## 4.2.3
### @xmcl/forge-site-parser@2.0.7
#### Bug Fixes

- fix(forge-site-parser): correct the type ([ad1fde8be46d5d625c7000416dc39b9e658b7e92](https://github.com/voxelum/minecraft-launcher-core-node/commit/ad1fde8be46d5d625c7000416dc39b9e658b7e92))
### @xmcl/installer@3.1.3
#### Bug Fixes

- fix(installer): close & handle fd properly ([09f71df32c29aaab8a9a8a13b621a665ba6e7bf0](https://github.com/voxelum/minecraft-launcher-core-node/commit/09f71df32c29aaab8a9a8a13b621a665ba6e7bf0))
- Dependency @xmcl/forge-site-parser bump **patch**


## 4.2.2
### @xmcl/core@2.6.1
#### Bug Fixes

- fix(core): be able to resolve mixed verion inherit ([47861a72bcc53bb32e08b32881f5d210b1d15217](https://github.com/voxelum/minecraft-launcher-core-node/commit/47861a72bcc53bb32e08b32881f5d210b1d15217))
### @xmcl/forge-site-parser@2.0.6
#### Bug Fixes

- fix(forge-site-parser): parse new forge page ([0d64120b5501228cd8b533bd06cad9add9972ee0](https://github.com/voxelum/minecraft-launcher-core-node/commit/0d64120b5501228cd8b533bd06cad9add9972ee0))
### @xmcl/installer@3.1.2
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/forge-site-parser bump **patch**


## 4.2.1
### @xmcl/installer@3.1.1
#### Bug Fixes

- fix(installer): correctly extract/assign launchwrapper ([eedd92615ad3e5e2b0fff0563e18590a8d6faf8b](https://github.com/voxelum/minecraft-launcher-core-node/commit/eedd92615ad3e5e2b0fff0563e18590a8d6faf8b))


## 4.2.0
### @xmcl/core@2.6.0
#### Features

- feat(core): support extra classpath to launch client ([5c9c966356d0bd27e812dfd76dba211695102f97](https://github.com/voxelum/minecraft-launcher-core-node/commit/5c9c966356d0bd27e812dfd76dba211695102f97))
### @xmcl/installer@3.1.0
#### Features

- feat(installer): add ops to install optifine upon forge ([291847313169f81c361e2ceab3ddedfd3d347f91](https://github.com/voxelum/minecraft-launcher-core-node/commit/291847313169f81c361e2ceab3ddedfd3d347f91))
#### Bug Fixes

- fix: don't fail if optifine dont have launchwrapper ([7699c397f12e49c649ac6bd0468832f7008113c4](https://github.com/voxelum/minecraft-launcher-core-node/commit/7699c397f12e49c649ac6bd0468832f7008113c4))
- Dependency @xmcl/core bump **patch**


## 4.1.0
### @xmcl/mod-parser@3.1.0
#### Features

- feat: read the toml root info & not crash on no-deps ([bb3a1c885f10c1ea3861d1b1a66c115d3dcb4391](https://github.com/voxelum/minecraft-launcher-core-node/commit/bb3a1c885f10c1ea3861d1b1a66c115d3dcb4391))


## 4.0.0
### @xmcl/asm@0.1.0
#### Features

- feat(asm): add asm to the lib ([3b77a03ea297ab850e61b4d37ae12dcb8f9634be](https://github.com/voxelum/minecraft-launcher-core-node/commit/3b77a03ea297ab850e61b4d37ae12dcb8f9634be))
### @xmcl/unzip@2.0.0
#### BREAKING CHANGES

- BREAKING CHANGE(unzip): rewrite module into more lightweight form ([03a6e319f826a7de23bf0359d06dc928c67b993b](https://github.com/voxelum/minecraft-launcher-core-node/commit/03a6e319f826a7de23bf0359d06dc928c67b993b))
### @xmcl/task@3.0.0
#### BREAKING CHANGES

- BREAKING CHANGE(task): rewrite into class style ([53dee95e25ba5d64d31c563024e534e81bda0609](https://github.com/voxelum/minecraft-launcher-core-node/commit/53dee95e25ba5d64d31c563024e534e81bda0609))
### @xmcl/user@2.1.4
#### Bug Fixes

- fix(user): make the auth module build uuid correctly ([0859f0abf00dc8e5b936ff817b4fd8600a66b97b](https://github.com/voxelum/minecraft-launcher-core-node/commit/0859f0abf00dc8e5b936ff817b4fd8600a66b97b))
### @xmcl/core@2.5.0
#### Features

- feat(core): add diagnose to the core module ([40f6ee3f0e87298013c17a27eae48aa4b27d460f](https://github.com/voxelum/minecraft-launcher-core-node/commit/40f6ee3f0e87298013c17a27eae48aa4b27d460f))
#### Bug Fixes

- fix: adapt to the new task and unzip module ([94ed7f360ab92d79a3c580a05fc6018ac93de88d](https://github.com/voxelum/minecraft-launcher-core-node/commit/94ed7f360ab92d79a3c580a05fc6018ac93de88d))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/installer@3.0.0
#### BREAKING CHANGES

- BREAKING CHANGE(installer): rewrite to make it easy treeshaking ([650433f8a0aac42272017aaf34e0516d724ca9d7](https://github.com/voxelum/minecraft-launcher-core-node/commit/650433f8a0aac42272017aaf34e0516d724ca9d7))
- Dependency @xmcl/asm bump **patch**
- Dependency @xmcl/unzip bump **patch**
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/task bump **patch**
### @xmcl/system@2.2.1
#### Bug Fixes

- fix: adapt to the new task and unzip module ([94ed7f360ab92d79a3c580a05fc6018ac93de88d](https://github.com/voxelum/minecraft-launcher-core-node/commit/94ed7f360ab92d79a3c580a05fc6018ac93de88d))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/mod-parser@3.0.0
#### BREAKING CHANGES

- BREAKING CHANGE(mod-parser): flat the module for treeshaking ([6f53e57e6384f90e1155ee4467a34716415ba7e4](https://github.com/voxelum/minecraft-launcher-core-node/commit/6f53e57e6384f90e1155ee4467a34716415ba7e4))
#### Bug Fixes

- fix(mod-parser): don't guess fabric mod as forge mod ([c99531c1799517930752706d4d2dd623c1d99342](https://github.com/voxelum/minecraft-launcher-core-node/commit/c99531c1799517930752706d4d2dd623c1d99342))
- fix: adapt to new asm module location ([d29074865dfca28605e86acdeeea4d7140f5f297](https://github.com/voxelum/minecraft-launcher-core-node/commit/d29074865dfca28605e86acdeeea4d7140f5f297))
- Dependency @xmcl/asm bump **patch**
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.1.0
#### Features

- feat: add the model loader & resource manager ([210f381ed44dcc476d6c2c1ddd47257263650740](https://github.com/voxelum/minecraft-launcher-core-node/commit/210f381ed44dcc476d6c2c1ddd47257263650740))
- feat: merge resource-manager to resourcepack ([7f0460738e31794cbf60f52852de90080286042f](https://github.com/voxelum/minecraft-launcher-core-node/commit/7f0460738e31794cbf60f52852de90080286042f))
- Dependency @xmcl/system bump **patch**
### @xmcl/world@1.1.4
- Dependency @xmcl/system bump **patch**


## 3.6.3
### @xmcl/mod-parser@2.0.11
#### Bug Fixes

- fix: identify the nei and ccc mod (#187) ([cdcb8b8036bcad246edc1e91896fa1fd960d62aa](https://github.com/voxelum/minecraft-launcher-core-node/commit/cdcb8b8036bcad246edc1e91896fa1fd960d62aa))


## 3.6.2
### @xmcl/client@2.0.6
#### Bug Fixes

- fix: capture the socket error after connect ([a5bdd3ce1f4610ac83b1b7a91d880f9e3337ab8e](https://github.com/voxelum/minecraft-launcher-core-node/commit/a5bdd3ce1f4610ac83b1b7a91d880f9e3337ab8e))
### @xmcl/resourcepack@1.0.16
#### Bug Fixes

- fix: compatible with minecraft 1.12 model location ([d47b4c6a7d9b870b54dcc104064aee8b6563a218](https://github.com/voxelum/minecraft-launcher-core-node/commit/d47b4c6a7d9b870b54dcc104064aee8b6563a218))
### @xmcl/model@1.0.16
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@2.1.2
#### Bug Fixes

- fix: compatible with minecraft 1.12 model location ([d47b4c6a7d9b870b54dcc104064aee8b6563a218](https://github.com/voxelum/minecraft-launcher-core-node/commit/d47b4c6a7d9b870b54dcc104064aee8b6563a218))
- Dependency @xmcl/resourcepack bump **patch**


## 3.6.1
### @xmcl/resourcepack@1.0.15
#### Bug Fixes

- fix: not await the ResourcePack#has to get ([220c666d86f4cfcb7cc9812cdc2f11f711c2174c](https://github.com/voxelum/minecraft-launcher-core-node/commit/220c666d86f4cfcb7cc9812cdc2f11f711c2174c))
### @xmcl/model@1.0.15
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@2.1.1
#### Bug Fixes

- fix: make the model loader not directly depend on resource manager ([bc93ad71e9f28a6769dcd630939b2f978862ca12](https://github.com/voxelum/minecraft-launcher-core-node/commit/bc93ad71e9f28a6769dcd630939b2f978862ca12))
- fix: align the load order to the order of resourcePacks in options.txt ([2065843ba1013519ea49ef7d183f7de994f7c231](https://github.com/voxelum/minecraft-launcher-core-node/commit/2065843ba1013519ea49ef7d183f7de994f7c231))
- Dependency @xmcl/resourcepack bump **patch**


## 3.6.0
### @xmcl/gamesetting@2.0.2
#### Bug Fixes

- fix: should not serailize undefined to options.txt ([ce6dd4b847a51b6c60c2ccf93bcc9874fe7d2dce](https://github.com/voxelum/minecraft-launcher-core-node/commit/ce6dd4b847a51b6c60c2ccf93bcc9874fe7d2dce))
### @xmcl/installer@2.9.8
#### Bug Fixes

- fix: correctly handle the http code ([4a70756c6cd4e4dee848635bcc00a248a0163f61](https://github.com/voxelum/minecraft-launcher-core-node/commit/4a70756c6cd4e4dee848635bcc00a248a0163f61))
### @xmcl/system@2.2.0
#### Features

- feat: add close API to close fs ([40b1f08a63870f9d39678c8ff1e80d8951e75109](https://github.com/voxelum/minecraft-launcher-core-node/commit/40b1f08a63870f9d39678c8ff1e80d8951e75109))
### @xmcl/mod-parser@2.0.10
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.0.14
- Dependency @xmcl/system bump **patch**
### @xmcl/model@1.0.14
#### Bug Fixes

- fix: wrong material index computing ([c87ed412bf14e77db9c10cd55c8c83e4d7fa6255](https://github.com/voxelum/minecraft-launcher-core-node/commit/c87ed412bf14e77db9c10cd55c8c83e4d7fa6255))
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@2.1.0
#### Features

- feat: expose more api to make it more flexible ([d853ccbf4983ad5b8cb4f02fbdf99314fbdfedfa](https://github.com/voxelum/minecraft-launcher-core-node/commit/d853ccbf4983ad5b8cb4f02fbdf99314fbdfedfa))
- Dependency @xmcl/system bump **patch**
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/world@1.1.3
- Dependency @xmcl/system bump **patch**


## 3.5.6
### @xmcl/installer@2.9.7
#### Bug Fixes

- fix: add checksum not match error info (#177) ([d48af1802d4003e6497d2d6723f3ae46be851f22](https://github.com/voxelum/minecraft-launcher-core-node/commit/d48af1802d4003e6497d2d6723f3ae46be851f22))
- fix: reset download progress if failed ([dffdb616adc4025fc8ebc768c5587579267ae1e1](https://github.com/voxelum/minecraft-launcher-core-node/commit/dffdb616adc4025fc8ebc768c5587579267ae1e1))


## 3.5.5
### @xmcl/installer@2.9.6
#### Bug Fixes

- fix: print err message to batch task ([79be25eef5e85804d989a500f1f5af35be6627c4](https://github.com/voxelum/minecraft-launcher-core-node/commit/79be25eef5e85804d989a500f1f5af35be6627c4))
- fix: retry next src for checksum not matched ([3560c9dd231e55779856c363a3e4c5f544687025](https://github.com/voxelum/minecraft-launcher-core-node/commit/3560c9dd231e55779856c363a3e4c5f544687025))


## 3.5.4
### @xmcl/installer@2.9.5
#### Bug Fixes

- fix: ensure the file closed for download ([2a9d62373acecf8f16e21f5c39e502906c545593](https://github.com/voxelum/minecraft-launcher-core-node/commit/2a9d62373acecf8f16e21f5c39e502906c545593))


## 3.5.3
### @xmcl/installer@2.9.4
#### Bug Fixes

- fix: ensure the download stream and write end (#170) ([5fba3b037d627c175067d81563703a0e512ff458](https://github.com/voxelum/minecraft-launcher-core-node/commit/5fba3b037d627c175067d81563703a0e512ff458))


## 3.5.2
### @xmcl/installer@2.9.3
#### Bug Fixes

- fix: append new url on front of urls array ([485fda80d068a58858be8540a92f2262aa06a638](https://github.com/voxelum/minecraft-launcher-core-node/commit/485fda80d068a58858be8540a92f2262aa06a638))
### @xmcl/mod-parser@2.0.9
#### Bug Fixes

- fix: correctly type the fabric metadata ([1a1d9e4907f094820fcba3127f49b4f751831b0f](https://github.com/voxelum/minecraft-launcher-core-node/commit/1a1d9e4907f094820fcba3127f49b4f751831b0f))


## 3.5.1
### @xmcl/mod-parser@2.0.8
#### Bug Fixes

- fix: ignore empty modid during parsing mod ([91ae8a63e3ccdb6676aef0a7b3746948a562cddd](https://github.com/voxelum/minecraft-launcher-core-node/commit/91ae8a63e3ccdb6676aef0a7b3746948a562cddd))


## 3.5.0
### @xmcl/core@2.4.0
#### Features

- feat: custom launch server executable option ([0df6c44e85cb98e41ecd33f06e4a1bb5faf6d145](https://github.com/voxelum/minecraft-launcher-core-node/commit/0df6c44e85cb98e41ecd33f06e4a1bb5faf6d145))
#### Bug Fixes

- fix: crashReport location should not contain nextline ([ce5069457ffffe69919a8bd9187cbbee7bfae915](https://github.com/voxelum/minecraft-launcher-core-node/commit/ce5069457ffffe69919a8bd9187cbbee7bfae915))
### @xmcl/system@2.1.0
#### Features

- feat: add cd for file system ([bdd0bb8e06d20371558d41f5be940b28b3bace35](https://github.com/voxelum/minecraft-launcher-core-node/commit/bdd0bb8e06d20371558d41f5be940b28b3bace35))
### @xmcl/installer@2.9.2
#### Bug Fixes

- fix: allow retry on EPROTO & ECANCELED ([f4a103cf43f4dd84e1e2bbb91d8dd67905b5e289](https://github.com/voxelum/minecraft-launcher-core-node/commit/f4a103cf43f4dd84e1e2bbb91d8dd67905b5e289))
- fix: just install jar for server ([9f63f2f987baa3c4a75fb2ad9c32998e3072745b](https://github.com/voxelum/minecraft-launcher-core-node/commit/9f63f2f987baa3c4a75fb2ad9c32998e3072745b))
- Dependency @xmcl/core bump **patch**
### @xmcl/mod-parser@2.0.7
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.0.13
- Dependency @xmcl/system bump **patch**
### @xmcl/model@1.0.13
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@2.0.2
- Dependency @xmcl/system bump **patch**
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/world@1.1.2
- Dependency @xmcl/system bump **patch**


## 3.4.1
### @xmcl/core@2.3.1
#### Bug Fixes

- fix: wrong native sha validation ([2ca1a3c6a8653a2a90495f895f4838edc0a1209a](https://github.com/voxelum/minecraft-launcher-core-node/commit/2ca1a3c6a8653a2a90495f895f4838edc0a1209a))
### @xmcl/installer@2.9.1
- Dependency @xmcl/core bump **patch**


## 3.4.0
### @xmcl/task@2.2.0
#### Features

- feat: support passing cancel outside ([f8f50503d387a85ba91232801a7dd46e01367802](https://github.com/voxelum/minecraft-launcher-core-node/commit/f8f50503d387a85ba91232801a7dd46e01367802))
#### Bug Fixes

- fix: emit pause whatever the case ([c6d6b4e3a42f9edb5e7d130672fb983547a8c7b4](https://github.com/voxelum/minecraft-launcher-core-node/commit/c6d6b4e3a42f9edb5e7d130672fb983547a8c7b4))
### @xmcl/installer@2.9.0
#### Features

- feat: add support install from loader version ([d03dd862d7d43fb8d9a45b7fec74545aa9351c2a](https://github.com/voxelum/minecraft-launcher-core-node/commit/d03dd862d7d43fb8d9a45b7fec74545aa9351c2a))
#### Bug Fixes

- fix: download cancel handle ([02af0af0e8a8c3b4faced57c57cc2c953dd4825e](https://github.com/voxelum/minecraft-launcher-core-node/commit/02af0af0e8a8c3b4faced57c57cc2c953dd4825e))
- fix: downloader not work for url without eTag ([554703f3b3a84e4a7361d238f21816359cfa23c1](https://github.com/voxelum/minecraft-launcher-core-node/commit/554703f3b3a84e4a7361d238f21816359cfa23c1))
- fix: add more robust check to Java installer (#160) ([a8d2ee6bacd3c2049e386e448015dd401fa6ccfb](https://github.com/voxelum/minecraft-launcher-core-node/commit/a8d2ee6bacd3c2049e386e448015dd401fa6ccfb))
- Dependency @xmcl/task bump **patch**


## 3.3.0
### @xmcl/core@2.3.0
#### Features

- feat(core): support `resolve` for non-standard version json ([2ed83ab62d5a12261460e57de74cb119982388b2](https://github.com/voxelum/minecraft-launcher-core-node/commit/2ed83ab62d5a12261460e57de74cb119982388b2))
### @xmcl/curseforge@0.1.2
#### Bug Fixes

- fix: guard the get with the http code ([d831e5882115497445410156738fa262c0cd7af5](https://github.com/voxelum/minecraft-launcher-core-node/commit/d831e5882115497445410156738fa262c0cd7af5))
### @xmcl/forge-site-parser@2.0.5
#### Bug Fixes

- fix: change the fast-html-parser to node-html-parser ([961bad778566f6193542acff675a10fe3d81810a](https://github.com/voxelum/minecraft-launcher-core-node/commit/961bad778566f6193542acff675a10fe3d81810a))
### @xmcl/task@2.1.8
#### Bug Fixes

- fix: wait pause correctly & typo on pause event ([607688870924888cc49605e9c14b9eee910d370a](https://github.com/voxelum/minecraft-launcher-core-node/commit/607688870924888cc49605e9c14b9eee910d370a))
### @xmcl/installer@2.8.2
#### Bug Fixes

- fix: return the installed optifine version ([95c681a26c2e9ab174005468d045586e0c37f310](https://github.com/voxelum/minecraft-launcher-core-node/commit/95c681a26c2e9ab174005468d045586e0c37f310))
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/forge-site-parser bump **patch**
- Dependency @xmcl/task bump **patch**


## 3.2.1
### @xmcl/installer@2.8.1
#### Bug Fixes

- fix: correctly find Config.class on old version of Optifine (#155) ([66489b19a4416485e9727f57d704bc819a3f744b](https://github.com/voxelum/minecraft-launcher-core-node/commit/66489b19a4416485e9727f57d704bc819a3f744b))


## 3.2.0
### @xmcl/task@2.1.7
#### Bug Fixes

- fix: wrong pause dispatch ([df8e7364b1a9281e5acfd0ce9cd5ebb2af637fb9](https://github.com/voxelum/minecraft-launcher-core-node/commit/df8e7364b1a9281e5acfd0ce9cd5ebb2af637fb9))
### @xmcl/installer@2.8.0
#### Features

- feat: support more options to swap urls src ([c064074773c1be0887f0e73ffa52aa506ea44995](https://github.com/voxelum/minecraft-launcher-core-node/commit/c064074773c1be0887f0e73ffa52aa506ea44995))
- Dependency @xmcl/task bump **patch**


## 3.1.3
### @xmcl/installer@2.7.3
#### Bug Fixes

- fix: correctly reset state ([db73d6f9870e158bd8b22d8c613811a1a2091581](https://github.com/voxelum/minecraft-launcher-core-node/commit/db73d6f9870e158bd8b22d8c613811a1a2091581))
- fix: caught the error during fetch & checksum to ensure result (#149) ([b3950d9db367815a3b0faec2cdf73c4ce9fdcb2d](https://github.com/voxelum/minecraft-launcher-core-node/commit/b3950d9db367815a3b0faec2cdf73c4ce9fdcb2d))


## 3.1.2
### @xmcl/installer@2.7.2
#### Bug Fixes

- fix: support real pause and resume (in-memory) and handle event correctly (#146) ([0d35b742ad0ec04aa7b907dc5fbdfa98be064212](https://github.com/voxelum/minecraft-launcher-core-node/commit/0d35b742ad0ec04aa7b907dc5fbdfa98be064212))


## 3.1.1
### @xmcl/installer@2.7.1
#### Bug Fixes

- fix: phantom reference of the gotjs ([4c5d9daaae2a61e2c1f2725b0a342fd5e35aed88](https://github.com/voxelum/minecraft-launcher-core-node/commit/4c5d9daaae2a61e2c1f2725b0a342fd5e35aed88))


## 3.1.0
### @xmcl/core@2.2.0
#### Features

- feat: support legacy Minecraft assets link ([783daa03310f59b2847cc47ba855b6843c11a13e](https://github.com/voxelum/minecraft-launcher-core-node/commit/783daa03310f59b2847cc47ba855b6843c11a13e))
- feat: remove got from @xmcl/installer and support segment download ([667cd78b491f7073a12e44d1f8d32f6e89108be8](https://github.com/voxelum/minecraft-launcher-core-node/commit/667cd78b491f7073a12e44d1f8d32f6e89108be8))
### @xmcl/installer@2.7.0
#### Features

- feat: remove got from @xmcl/installer and support segment download ([667cd78b491f7073a12e44d1f8d32f6e89108be8](https://github.com/voxelum/minecraft-launcher-core-node/commit/667cd78b491f7073a12e44d1f8d32f6e89108be8))
- feat: adjust the fabric get version list API ([4a966a1084620490223c499752ab195e647d80db](https://github.com/voxelum/minecraft-launcher-core-node/commit/4a966a1084620490223c499752ab195e647d80db))
- Dependency @xmcl/core bump **patch**


## 3.0.3
### @xmcl/curseforge@0.1.1
#### Bug Fixes

- fix: correct the usage of the API ([bbd383e236321c4d8dc32539ba622708b9656de9](https://github.com/voxelum/minecraft-launcher-core-node/commit/bbd383e236321c4d8dc32539ba622708b9656de9))


## 3.0.2
### @xmcl/task@2.1.6
#### Bug Fixes

- fix: nest task propagation ([b8b5a2ed156e0cc796316202086a87c91d76468c](https://github.com/voxelum/minecraft-launcher-core-node/commit/b8b5a2ed156e0cc796316202086a87c91d76468c))
### @xmcl/installer@2.6.8
- Dependency @xmcl/task bump **patch**


## 3.0.1
### @xmcl/core@2.1.3
#### Bug Fixes

- fix: inverted validation result ([01b9866964f90aed9eb55d53fec178c464aacf23](https://github.com/voxelum/minecraft-launcher-core-node/commit/01b9866964f90aed9eb55d53fec178c464aacf23))
### @xmcl/resourcepack@1.0.12
#### Bug Fixes

- fix: wrong resourcepack info return ([a9b1359bccf436f73d96a4a09622970360df6c07](https://github.com/voxelum/minecraft-launcher-core-node/commit/a9b1359bccf436f73d96a4a09622970360df6c07))
### @xmcl/installer@2.6.7
- Dependency @xmcl/core bump **patch**
### @xmcl/model@1.0.12
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@2.0.1
- Dependency @xmcl/resourcepack bump **patch**


## 3.0.0
### @xmcl/nbt@2.0.3
#### Bug Fixes

- fix: unify the error thrown ([6d3d5c79518305685316e81bf7f30cb0a0134972](https://github.com/voxelum/minecraft-launcher-core-node/commit/6d3d5c79518305685316e81bf7f30cb0a0134972))
### @xmcl/unzip@1.2.0
#### Features

- feat: add find entry ([0c509e151ba3c3a2af4924a76891dc0674402ead](https://github.com/voxelum/minecraft-launcher-core-node/commit/0c509e151ba3c3a2af4924a76891dc0674402ead))
### @xmcl/client@2.0.5
- Dependency @xmcl/nbt bump **patch**
### @xmcl/core@2.1.2
#### Bug Fixes

- fix: clear fs deps on core and installer modules ([ff78d9bc8743fd39a7c0b08a794e9ec5adcf3af5](https://github.com/voxelum/minecraft-launcher-core-node/commit/ff78d9bc8743fd39a7c0b08a794e9ec5adcf3af5))
- fix: correct parse of snapshot version ([fdf5600325546309b79e74e4699cbac3702125eb](https://github.com/voxelum/minecraft-launcher-core-node/commit/fdf5600325546309b79e74e4699cbac3702125eb))
- fix: unify the error thrown ([6d3d5c79518305685316e81bf7f30cb0a0134972](https://github.com/voxelum/minecraft-launcher-core-node/commit/6d3d5c79518305685316e81bf7f30cb0a0134972))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/installer@2.6.6
#### Bug Fixes

- fix: forge 1.12 new pipeline #136 ([a131b7e0f9968b66b1273f16ea1b369b88bd883f](https://github.com/voxelum/minecraft-launcher-core-node/commit/a131b7e0f9968b66b1273f16ea1b369b88bd883f))
- fix: clear fs deps on core and installer modules ([ff78d9bc8743fd39a7c0b08a794e9ec5adcf3af5](https://github.com/voxelum/minecraft-launcher-core-node/commit/ff78d9bc8743fd39a7c0b08a794e9ec5adcf3af5))
- fix: wrong platform to install jre #135 ([78d538d365a19256b27c07f891ec0488193dd3f3](https://github.com/voxelum/minecraft-launcher-core-node/commit/78d538d365a19256b27c07f891ec0488193dd3f3))
- fix: unify the error thrown ([6d3d5c79518305685316e81bf7f30cb0a0134972](https://github.com/voxelum/minecraft-launcher-core-node/commit/6d3d5c79518305685316e81bf7f30cb0a0134972))
- Dependency @xmcl/core bump **patch**
### @xmcl/system@2.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: simplify API of resource-manager and system ([2ec473b35d8c7c14cbdf5971fc811f14fbb4eff0](https://github.com/voxelum/minecraft-launcher-core-node/commit/2ec473b35d8c7c14cbdf5971fc811f14fbb4eff0))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/mod-parser@2.0.6
#### Bug Fixes

- fix: use new system API ([b796688089f9697d833ccea76647c6fba802839a](https://github.com/voxelum/minecraft-launcher-core-node/commit/b796688089f9697d833ccea76647c6fba802839a))
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.0.11
#### Bug Fixes

- fix: clear fs deps on core and installer modules ([ff78d9bc8743fd39a7c0b08a794e9ec5adcf3af5](https://github.com/voxelum/minecraft-launcher-core-node/commit/ff78d9bc8743fd39a7c0b08a794e9ec5adcf3af5))
- fix: use new system API ([b796688089f9697d833ccea76647c6fba802839a](https://github.com/voxelum/minecraft-launcher-core-node/commit/b796688089f9697d833ccea76647c6fba802839a))
- Dependency @xmcl/system bump **patch**
### @xmcl/model@1.0.11
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@2.0.0
#### BREAKING CHANGES

- BREAKING CHANGE: simplify API of resource-manager and system ([2ec473b35d8c7c14cbdf5971fc811f14fbb4eff0](https://github.com/voxelum/minecraft-launcher-core-node/commit/2ec473b35d8c7c14cbdf5971fc811f14fbb4eff0))
- Dependency @xmcl/system bump **patch**
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/server-info@2.0.3
- Dependency @xmcl/nbt bump **patch**
### @xmcl/world@1.1.1
#### Bug Fixes

- fix: use new system API ([b796688089f9697d833ccea76647c6fba802839a](https://github.com/voxelum/minecraft-launcher-core-node/commit/b796688089f9697d833ccea76647c6fba802839a))
- fix: remove bytebuffer dep ([54179fbe564c454a7c2d90cabc38a9d8d144ef7c](https://github.com/voxelum/minecraft-launcher-core-node/commit/54179fbe564c454a7c2d90cabc38a9d8d144ef7c))
- Dependency @xmcl/nbt bump **patch**
- Dependency @xmcl/system bump **patch**


## 2.8.0
### @xmcl/nbt@2.0.2
#### Bug Fixes

- fix: prevent losing stacktrace by throwing actual Error ([005ecb3d55cb4419b16ed24dfb8d01d91f12d9d8](https://github.com/voxelum/minecraft-launcher-core-node/commit/005ecb3d55cb4419b16ed24dfb8d01d91f12d9d8))
- fix: rollback file-type & long ([f7f963b0fe50f46280dc604ac86e9483f168837e](https://github.com/voxelum/minecraft-launcher-core-node/commit/f7f963b0fe50f46280dc604ac86e9483f168837e))
### @xmcl/core@2.1.1
#### Bug Fixes

- fix: correct the uuid usage for new version ([d33ad313eecb95393d8ba710b34f9f9058425bf0](https://github.com/voxelum/minecraft-launcher-core-node/commit/d33ad313eecb95393d8ba710b34f9f9058425bf0))
### @xmcl/user@2.1.3
#### Bug Fixes

- fix: correct the uuid usage for new version ([d33ad313eecb95393d8ba710b34f9f9058425bf0](https://github.com/voxelum/minecraft-launcher-core-node/commit/d33ad313eecb95393d8ba710b34f9f9058425bf0))
### @xmcl/client@2.0.4
#### Bug Fixes

- fix: rollback file-type & long ([f7f963b0fe50f46280dc604ac86e9483f168837e](https://github.com/voxelum/minecraft-launcher-core-node/commit/f7f963b0fe50f46280dc604ac86e9483f168837e))
- Dependency @xmcl/nbt bump **patch**
### @xmcl/installer@2.6.5
- Dependency @xmcl/core bump **patch**
### @xmcl/server-info@2.0.2
- Dependency @xmcl/nbt bump **patch**
### @xmcl/world@1.1.0
#### Features

- feat: parse blockstates in chunk ([b493b0ed81e2e520281347fafc0c27ecff0dee5f](https://github.com/voxelum/minecraft-launcher-core-node/commit/b493b0ed81e2e520281347fafc0c27ecff0dee5f))
- Dependency @xmcl/nbt bump **patch**


## 2.7.0
### @xmcl/core@2.1.0
#### Features

- feat: add resolveFromPath ([890f70aa4f492d97e5e7513afcfc71b424962bf2](https://github.com/voxelum/minecraft-launcher-core-node/commit/890f70aa4f492d97e5e7513afcfc71b424962bf2))
### @xmcl/curseforge@0.1.0
#### Features

- feat: curseforge support ([922948df3987fad92299af3c5dd5f02d06c97d76](https://github.com/voxelum/minecraft-launcher-core-node/commit/922948df3987fad92299af3c5dd5f02d06c97d76))
### @xmcl/installer@2.6.4
#### Bug Fixes

- fix: remove redundent check ([9ee553dd5e04f7fbdd89274d1c4d2dbc19973114](https://github.com/voxelum/minecraft-launcher-core-node/commit/9ee553dd5e04f7fbdd89274d1c4d2dbc19973114))
- fix: correct the task name ([408d35d5f77bc6da558d45ac74e308014f8802ae](https://github.com/voxelum/minecraft-launcher-core-node/commit/408d35d5f77bc6da558d45ac74e308014f8802ae))
- fix: expose error to outer ([5c5a0fa89605b1a0babe2fc5e681134cd749bf4f](https://github.com/voxelum/minecraft-launcher-core-node/commit/5c5a0fa89605b1a0babe2fc5e681134cd749bf4f))
- fix: expose post postProcess task ([2933d576feff0c4e0aa66b4a242903ea20b45d7e](https://github.com/voxelum/minecraft-launcher-core-node/commit/2933d576feff0c4e0aa66b4a242903ea20b45d7e))
- Dependency @xmcl/core bump **patch**


## 2.6.3
### @xmcl/installer@2.6.3
#### Bug Fixes

- fix: diagnose libraries for install profile ([f4df3752c6781fff43de562419063477fa85e39c](https://github.com/voxelum/minecraft-launcher-core-node/commit/f4df3752c6781fff43de562419063477fa85e39c))
- fix: wrong forge installer maven path ([d5babfdbf18fc3c384b09f65e3d02e21ab0c0c44](https://github.com/voxelum/minecraft-launcher-core-node/commit/d5babfdbf18fc3c384b09f65e3d02e21ab0c0c44))
- fix: catch the error in sync code ([bb9942988be2e66a2a09373052d200d6571a4ef3](https://github.com/voxelum/minecraft-launcher-core-node/commit/bb9942988be2e66a2a09373052d200d6571a4ef3))
- fix: ensure forge url normalized ([b7240061d41733d83cad79994dfc265df42d288f](https://github.com/voxelum/minecraft-launcher-core-node/commit/b7240061d41733d83cad79994dfc265df42d288f))


## 2.6.2
### @xmcl/installer@2.6.2
#### Bug Fixes

- fix: wrong error catching ([8c1900e8c1d1e6e70a575b84d29e35164b7ce429](https://github.com/voxelum/minecraft-launcher-core-node/commit/8c1900e8c1d1e6e70a575b84d29e35164b7ce429))
- fix: expose the resolved assets install task ([4fa88ba6a3bb51921055d1ae36613d58741adc8f](https://github.com/voxelum/minecraft-launcher-core-node/commit/4fa88ba6a3bb51921055d1ae36613d58741adc8f))


## 2.6.1
### @xmcl/task@2.1.5
#### Bug Fixes

- fix: wrong parent event emitted ([3833ba08c05b93e2a3c0c8d848e33d4d0cdf23ca](https://github.com/voxelum/minecraft-launcher-core-node/commit/3833ba08c05b93e2a3c0c8d848e33d4d0cdf23ca))
### @xmcl/installer@2.6.1
#### Bug Fixes

- fix: rewrite the diagnose and mark beta ([f66ca038a6578032505d30421d8fdb4a784ea0e2](https://github.com/voxelum/minecraft-launcher-core-node/commit/f66ca038a6578032505d30421d8fdb4a784ea0e2))
- fix: enable jsonUrl replacement ([54674b3e6bb48761c3402abf40556855800157b1](https://github.com/voxelum/minecraft-launcher-core-node/commit/54674b3e6bb48761c3402abf40556855800157b1))
- fix: simplify the install version requirement ([e3ace2626a37e9859252ce4a2e80112dc90dfe5f](https://github.com/voxelum/minecraft-launcher-core-node/commit/e3ace2626a37e9859252ce4a2e80112dc90dfe5f))
- Dependency @xmcl/task bump **patch**


## 2.6.0
### @xmcl/unzip@1.1.3
#### Bug Fixes

- fix: remove dead code & force bump ([8b1a4122b021f51fff8482d2705efdbc60b06d65](https://github.com/voxelum/minecraft-launcher-core-node/commit/8b1a4122b021f51fff8482d2705efdbc60b06d65))
### @xmcl/task@2.1.4
#### Bug Fixes

- fix: shorten the name and use correct export ([b40af8a46cbf316883491445d10493ea9ec6ef1b](https://github.com/voxelum/minecraft-launcher-core-node/commit/b40af8a46cbf316883491445d10493ea9ec6ef1b))
### @xmcl/core@2.0.7
- Dependency @xmcl/unzip bump **patch**
### @xmcl/installer@2.6.0
#### Features

- feat: include java installer ([5bcce2320d48f3a11a01e568f9207540d7d73d91](https://github.com/voxelum/minecraft-launcher-core-node/commit/5bcce2320d48f3a11a01e568f9207540d7d73d91))
#### Bug Fixes

- fix: add progress status and mark beta ([4d6dbe96397b3e16b179343954c8b8928c6cc358](https://github.com/voxelum/minecraft-launcher-core-node/commit/4d6dbe96397b3e16b179343954c8b8928c6cc358))
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/task bump **patch**
### @xmcl/system@1.0.9
- Dependency @xmcl/unzip bump **patch**
### @xmcl/mod-parser@2.0.5
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.0.10
- Dependency @xmcl/system bump **patch**
### @xmcl/model@1.0.10
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@1.0.10
- Dependency @xmcl/system bump **patch**
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/world@1.0.9
- Dependency @xmcl/system bump **patch**


## 2.5.0
### @xmcl/nbt@2.0.1
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
### @xmcl/text-component@2.1.1
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
### @xmcl/unzip@1.1.2
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
### @xmcl/forge-site-parser@2.0.4
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
### @xmcl/gamesetting@2.0.1
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
### @xmcl/task@2.1.3
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
### @xmcl/user@2.1.2
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
### @xmcl/client@2.0.3
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- Dependency @xmcl/nbt bump **patch**
- Dependency @xmcl/text-component bump **patch**
### @xmcl/core@2.0.6
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/installer@2.5.0
#### Features

- feat: file name resolver ([3834a7b8d244cdc1fa67e8979a7531208700c25a](https://github.com/voxelum/minecraft-launcher-core-node/commit/3834a7b8d244cdc1fa67e8979a7531208700c25a))
- feat: optifine installer ([e00536155f81c770435528c15cc4466df4e5f8d3](https://github.com/voxelum/minecraft-launcher-core-node/commit/e00536155f81c770435528c15cc4466df4e5f8d3))
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- fix: correctly overwrite ([84559efd2a3047e732a1c70b74a52aef853cf004](https://github.com/voxelum/minecraft-launcher-core-node/commit/84559efd2a3047e732a1c70b74a52aef853cf004))
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/forge-site-parser bump **patch**
- Dependency @xmcl/task bump **patch**
### @xmcl/java-installer@0.1.4
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- fix: wrong platform check and remove redundent check ([e08131ddd505c0065a82b86154d741200ca8f134](https://github.com/voxelum/minecraft-launcher-core-node/commit/e08131ddd505c0065a82b86154d741200ca8f134))
- Dependency @xmcl/task bump **patch**
### @xmcl/system@1.0.8
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- fix: compatible with old njs ([16cc85c0c8456649d275d4080ef5d27572ff3f76](https://github.com/voxelum/minecraft-launcher-core-node/commit/16cc85c0c8456649d275d4080ef5d27572ff3f76))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/mod-parser@2.0.4
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.0.9
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- Dependency @xmcl/system bump **patch**
### @xmcl/model@1.0.9
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@1.0.9
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- Dependency @xmcl/system bump **patch**
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/server-info@2.0.1
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- Dependency @xmcl/nbt bump **patch**
### @xmcl/world@1.0.8
#### Bug Fixes

- fix: use rollup to build and fix wrong import module ([c1b5582ecafc4cdfe96481b305013850d9e13cb5](https://github.com/voxelum/minecraft-launcher-core-node/commit/c1b5582ecafc4cdfe96481b305013850d9e13cb5))
- Dependency @xmcl/nbt bump **patch**
- Dependency @xmcl/system bump **patch**


## 2.4.1
### @xmcl/core@2.0.5
#### Bug Fixes

- fix: authlib-injector not correctly work ([d1b117a0cb36102151ead8bdb9d0ec66b1c94e5f](https://github.com/voxelum/minecraft-launcher-core-node/commit/d1b117a0cb36102151ead8bdb9d0ec66b1c94e5f))
### @xmcl/installer@2.4.1
#### Bug Fixes

- fix: use agent on curseforge query ([b7dc132c2223a9835dfec98328ab9ecf6e36ee6a](https://github.com/voxelum/minecraft-launcher-core-node/commit/b7dc132c2223a9835dfec98328ab9ecf6e36ee6a))
- fix: batch the query url for curseforge ([3d5e4079bfb9adbf0c1cc7a32899b35da7b1c4cb](https://github.com/voxelum/minecraft-launcher-core-node/commit/3d5e4079bfb9adbf0c1cc7a32899b35da7b1c4cb))
- fix: normalize the downloader option ([e18b5df61287b171c63382725851ef69bfd0bb75](https://github.com/voxelum/minecraft-launcher-core-node/commit/e18b5df61287b171c63382725851ef69bfd0bb75))
- Dependency @xmcl/core bump **patch**


## 2.4.0
### @xmcl/unzip@1.1.1
#### Bug Fixes

- fix: skip dir for lazy unzip ([e027bd4fe99d35008a88f07fb938bdd07f8423e7](https://github.com/voxelum/minecraft-launcher-core-node/commit/e027bd4fe99d35008a88f07fb938bdd07f8423e7))
### @xmcl/user@2.1.1
#### Bug Fixes

- fix: remove got ([a8702a16cb14b74b44cb24ef63fe83a99ad1c63b](https://github.com/voxelum/minecraft-launcher-core-node/commit/a8702a16cb14b74b44cb24ef63fe83a99ad1c63b))
### @xmcl/core@2.0.4
#### Bug Fixes

- fix: extract the resolveLibrary api ([1bc71ef4594af92d82bbd991c634ef19c67d430d](https://github.com/voxelum/minecraft-launcher-core-node/commit/1bc71ef4594af92d82bbd991c634ef19c67d430d))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/installer@2.4.0
#### Features

- feat: install by installer profile function and refactor ([13dc9ba3b99d7e852fd0f0c9730660fb2578761d](https://github.com/voxelum/minecraft-launcher-core-node/commit/13dc9ba3b99d7e852fd0f0c9730660fb2578761d))
- feat: support fabric meta api ([b62d6586a9a4cec018dd83b4b96fefaa6e187fc4](https://github.com/voxelum/minecraft-launcher-core-node/commit/b62d6586a9a4cec018dd83b4b96fefaa6e187fc4))
- feat: library support concurrency ([5bd91fdd48ac7b77af5abbee8ebb719375e70b0e](https://github.com/voxelum/minecraft-launcher-core-node/commit/5bd91fdd48ac7b77af5abbee8ebb719375e70b0e))
#### Bug Fixes

- fix: wrong forge maven assigning ([74a931d4c3416a77ce5ac85a9b40f680c5ad6aef](https://github.com/voxelum/minecraft-launcher-core-node/commit/74a931d4c3416a77ce5ac85a9b40f680c5ad6aef))
- Dependency @xmcl/core bump **patch**
### @xmcl/system@1.0.7
- Dependency @xmcl/unzip bump **patch**
### @xmcl/mod-parser@2.0.3
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.0.8
- Dependency @xmcl/system bump **patch**
### @xmcl/model@1.0.8
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@1.0.8
- Dependency @xmcl/system bump **patch**
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/world@1.0.7
- Dependency @xmcl/system bump **patch**


## 2.3.3
### @xmcl/forge-site-parser@2.0.3
#### Bug Fixes

- fix: add doc and trigger build to release ([a7bd52614bcb094279c2cb043888edb9f32afe29](https://github.com/voxelum/minecraft-launcher-core-node/commit/a7bd52614bcb094279c2cb043888edb9f32afe29))
### @xmcl/installer@2.3.3
- Dependency @xmcl/forge-site-parser bump **patch**


## 2.3.2
### @xmcl/forge-site-parser@2.0.2
#### Bug Fixes

- fix: add doc and trigger build to release ([a7bd52614bcb094279c2cb043888edb9f32afe29](https://github.com/voxelum/minecraft-launcher-core-node/commit/a7bd52614bcb094279c2cb043888edb9f32afe29))
### @xmcl/installer@2.3.2
- Dependency @xmcl/forge-site-parser bump **patch**


## 2.3.1
### @xmcl/task@2.1.2
#### Bug Fixes

- fix(task): wrong entry point ([cd086fcc318c679a48576ca8ab7a4e25f1cda461](https://github.com/voxelum/minecraft-launcher-core-node/commit/cd086fcc318c679a48576ca8ab7a4e25f1cda461))
### @xmcl/installer@2.3.1
- Dependency @xmcl/task bump **patch**
### @xmcl/java-installer@0.1.3
- Dependency @xmcl/task bump **patch**


## 2.3.0
### @xmcl/unzip@1.1.0
#### Features

- feat: add option to hook and replace to extract ([907741f728584b2045b879344edd48e6d59deb84](https://github.com/voxelum/minecraft-launcher-core-node/commit/907741f728584b2045b879344edd48e6d59deb84))
### @xmcl/task@2.1.1
#### Bug Fixes

- fix(task): stupid uncaught error ([eafd11f0b9226b585c48f919d104ef346d17cc0d](https://github.com/voxelum/minecraft-launcher-core-node/commit/eafd11f0b9226b585c48f919d104ef346d17cc0d))
### @xmcl/core@2.0.3
#### Bug Fixes

- fix: wrong import from other packages ([e4716cbd8bebf03c1526018bed60e34aae3b64c5](https://github.com/voxelum/minecraft-launcher-core-node/commit/e4716cbd8bebf03c1526018bed60e34aae3b64c5))
- fix: make it compatible with older electron ([196f3dcaea53ddd8c7068eec6fdd09ac4336d678](https://github.com/voxelum/minecraft-launcher-core-node/commit/196f3dcaea53ddd8c7068eec6fdd09ac4336d678))
- fix: adapt to new unzip api ([24ad2801dcd3ff0c67aa294e965437f45f80597c](https://github.com/voxelum/minecraft-launcher-core-node/commit/24ad2801dcd3ff0c67aa294e965437f45f80597c))
- Dependency @xmcl/unzip bump **patch**
### @xmcl/installer@2.3.0
#### Features

- feat: forge support the downloader in option ([b499e28f2b1025bfe732498762ebbbd06b26ac6a](https://github.com/voxelum/minecraft-launcher-core-node/commit/b499e28f2b1025bfe732498762ebbbd06b26ac6a))
- feat: support install curseforge modpack ([b331f9636df4fa0ab626a8756f83647cf3b06cd7](https://github.com/voxelum/minecraft-launcher-core-node/commit/b331f9636df4fa0ab626a8756f83647cf3b06cd7))
- feat(installer): add flag to throw immediately ([e909fe6904cfea8fb2a682eecb8a16a6e6c71175](https://github.com/voxelum/minecraft-launcher-core-node/commit/e909fe6904cfea8fb2a682eecb8a16a6e6c71175))
#### Bug Fixes

- fix: wrong import from other packages ([e4716cbd8bebf03c1526018bed60e34aae3b64c5](https://github.com/voxelum/minecraft-launcher-core-node/commit/e4716cbd8bebf03c1526018bed60e34aae3b64c5))
- fix: simplify the default downloader ([a4699e6388dfcdee1521104e38c587ec8f433f6e](https://github.com/voxelum/minecraft-launcher-core-node/commit/a4699e6388dfcdee1521104e38c587ec8f433f6e))
- Dependency @xmcl/core bump **patch**
- Dependency @xmcl/task bump **patch**
### @xmcl/java-installer@0.1.2
#### Bug Fixes

- fix: make it compatible with older electron ([196f3dcaea53ddd8c7068eec6fdd09ac4336d678](https://github.com/voxelum/minecraft-launcher-core-node/commit/196f3dcaea53ddd8c7068eec6fdd09ac4336d678))
- Dependency @xmcl/task bump **patch**
### @xmcl/system@1.0.6
- Dependency @xmcl/unzip bump **patch**
### @xmcl/mod-parser@2.0.2
- Dependency @xmcl/system bump **patch**
### @xmcl/resourcepack@1.0.7
- Dependency @xmcl/system bump **patch**
### @xmcl/model@1.0.7
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@1.0.7
- Dependency @xmcl/system bump **patch**
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/world@1.0.6
- Dependency @xmcl/system bump **patch**


## 2.2.2
### @xmcl/installer@2.2.3
#### Bug Fixes

- fix: wrong track for download chunk size ([11803bb0caf9e3b4f1a36f75b28069b8c5255920](https://github.com/voxelum/minecraft-launcher-core-node/commit/11803bb0caf9e3b4f1a36f75b28069b8c5255920))


## 2.2.1
### @xmcl/installer@2.2.2
#### Bug Fixes

- fix: (interal breaking change) add chunkLength for download ([dab5c65950386820a48b245023646b65f9fcb21a](https://github.com/voxelum/minecraft-launcher-core-node/commit/dab5c65950386820a48b245023646b65f9fcb21a))


## 2.2.0
### @xmcl/task@2.1.0
#### Features

- feat(task): support parent/child progress propagation ([261d4f2b0949193cb6d96e45f736780ab0f13215](https://github.com/voxelum/minecraft-launcher-core-node/commit/261d4f2b0949193cb6d96e45f736780ab0f13215))
### @xmcl/installer@2.2.1
#### Bug Fixes

- fix(installer): support progress for more tasks ([d8225b622754893af603da12fae3c78585061288](https://github.com/voxelum/minecraft-launcher-core-node/commit/d8225b622754893af603da12fae3c78585061288))
- Dependency @xmcl/task bump **patch**
### @xmcl/java-installer@0.1.1
- Dependency @xmcl/task bump **patch**


## 2.1.0
### @xmcl/installer@2.2.0
#### Features

- feat: add option to control concurrency and add keepalive agent (#84) ([c20904e52732cba3a0f947b20739990da05a86ab](https://github.com/voxelum/minecraft-launcher-core-node/commit/c20904e52732cba3a0f947b20739990da05a86ab))
### @xmcl/java-installer@0.1.0
#### Features

- feat: add option to control concurrency and add keepalive agent (#84) ([c20904e52732cba3a0f947b20739990da05a86ab](https://github.com/voxelum/minecraft-launcher-core-node/commit/c20904e52732cba3a0f947b20739990da05a86ab))
### @xmcl/user@2.1.0
#### Features

- feat: add option to control concurrency and add keepalive agent (#84) ([c20904e52732cba3a0f947b20739990da05a86ab](https://github.com/voxelum/minecraft-launcher-core-node/commit/c20904e52732cba3a0f947b20739990da05a86ab))


## 2.0.1
### @xmcl/text-component@2.1.0
#### Features

- feat: use style object instead of stream to release ([f2c5d951c6f6752801afc9bb79c5d9804d3d735a](https://github.com/voxelum/minecraft-launcher-core-node/commit/f2c5d951c6f6752801afc9bb79c5d9804d3d735a))
### @xmcl/core@2.0.2
#### Bug Fixes

- fix: the wrong native metadata ([8789ca204cd895d612c743566b5b9792f3d42bdb](https://github.com/voxelum/minecraft-launcher-core-node/commit/8789ca204cd895d612c743566b5b9792f3d42bdb))
- fix: support 1.15 launch log ([112188a084b3a337bf9a706954386d7b779ade2f](https://github.com/voxelum/minecraft-launcher-core-node/commit/112188a084b3a337bf9a706954386d7b779ade2f))
- fix: make undefined bypass ([36d086752c5256aa39a033ec1e5d233912adc051](https://github.com/voxelum/minecraft-launcher-core-node/commit/36d086752c5256aa39a033ec1e5d233912adc051))
### @xmcl/client@2.0.2
- Dependency @xmcl/text-component bump **patch**
### @xmcl/installer@2.1.0
#### Features

- feat: extract the downloader strategy ([b9cdcccb6e59205c4dd89bd2fb241188f4798827](https://github.com/voxelum/minecraft-launcher-core-node/commit/b9cdcccb6e59205c4dd89bd2fb241188f4798827))
#### Bug Fixes

- fix: support listen total library progress ([bdb238a5cf567dae1852b1d2543e2492cd3d1cd1](https://github.com/voxelum/minecraft-launcher-core-node/commit/bdb238a5cf567dae1852b1d2543e2492cd3d1cd1))
- fix: minimize the required version ([9aa4cef104976adfa4a9236737d9da9c20cc4dac](https://github.com/voxelum/minecraft-launcher-core-node/commit/9aa4cef104976adfa4a9236737d9da9c20cc4dac))
- fix: not force install provide full info ([27023065e31404b149cd34c928a1a3ec68dd6d89](https://github.com/voxelum/minecraft-launcher-core-node/commit/27023065e31404b149cd34c928a1a3ec68dd6d89))
- fix: extract the default downloader ([6146bf80e4950a57d809dcf12a5633f569b4dcfd](https://github.com/voxelum/minecraft-launcher-core-node/commit/6146bf80e4950a57d809dcf12a5633f569b4dcfd))
- Dependency @xmcl/core bump **patch**


## 2.0.0
### @xmcl/client@2.0.1
#### Bug Fixes

- fix(client): fetch server status return wrong value (#77) ([e51a2bd32ee9b22f04093e1cf4983e85b782a96c](https://github.com/voxelum/minecraft-launcher-core-node/commit/e51a2bd32ee9b22f04093e1cf4983e85b782a96c))
### @xmcl/core@2.0.1
#### Bug Fixes

- fix: remove the deprecated field ([09c942bf9b72018595bfb4b98561eeb82dea49a1](https://github.com/voxelum/minecraft-launcher-core-node/commit/09c942bf9b72018595bfb4b98561eeb82dea49a1))
- fix(launch): fix the launch natives check (#76) ([8e959d9efe271f22da8b69f0019f9cb25df1dfa6](https://github.com/voxelum/minecraft-launcher-core-node/commit/8e959d9efe271f22da8b69f0019f9cb25df1dfa6))
- fix(launch): fix cannot launch on shell mode ([2f75478082c57ddb00d160229dbc77f55dbef63b](https://github.com/voxelum/minecraft-launcher-core-node/commit/2f75478082c57ddb00d160229dbc77f55dbef63b))
### @xmcl/mod-parser@2.0.1
#### Bug Fixes

- fix: strip bom whenever json.parse ([e3233a94274f256f940dab346d8cb8ba805d123d](https://github.com/voxelum/minecraft-launcher-core-node/commit/e3233a94274f256f940dab346d8cb8ba805d123d))
### @xmcl/resourcepack@1.0.6
#### Bug Fixes

- fix: strip bom whenever json.parse ([e3233a94274f256f940dab346d8cb8ba805d123d](https://github.com/voxelum/minecraft-launcher-core-node/commit/e3233a94274f256f940dab346d8cb8ba805d123d))
### @xmcl/user@2.0.1
#### Bug Fixes

- fix: align the doc and user id of offline ([63560a0d71d743d5413b2096788fb3042b9dd511](https://github.com/voxelum/minecraft-launcher-core-node/commit/63560a0d71d743d5413b2096788fb3042b9dd511))
### @xmcl/installer@2.0.2
#### Bug Fixes

- fix: remove the deprecated field ([09c942bf9b72018595bfb4b98561eeb82dea49a1](https://github.com/voxelum/minecraft-launcher-core-node/commit/09c942bf9b72018595bfb4b98561eeb82dea49a1))
- Dependency @xmcl/core bump **patch**
### @xmcl/model@1.0.6
- Dependency @xmcl/resourcepack bump **patch**
### @xmcl/resource-manager@1.0.6
- Dependency @xmcl/resourcepack bump **patch**

