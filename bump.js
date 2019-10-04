const fs = require('fs');
const convBump = require('conventional-recommended-bump');
const semver = require('semver');
const { execSync } = require('child_process');


function scanPackages() {
    function readPackageJson(package) {
        let packageJSON;
        try {
            packageJSON = JSON.parse(fs.readFileSync(`packages/${package}/package.json`).toString());
        } catch (e) {
            if (e.code === 'ENOTDIR')
                return undefined;
            throw e;
        }
        return packageJSON;
    }
    const affectedMapping = {};
    // scan all packages and filter out useless folder like .DS_Store
    const packages = fs.readdirSync('packages')
        .map(name => ({ package: readPackageJson(name), name }))
        .filter(pack => pack.package !== undefined);
    // create dependencies mapping
    packages.forEach(pack => {
        const packageJSON = pack.package;
        if (packageJSON.dependencies) {
            for (const dep of Object.values(packageJSON.dependencies)) {
                const name = dep.substring(dep.indexOf('/') + 1);
                affectedMapping[name] = affectedMapping[name] || [];
                affectedMapping[name].push(pack);
            }
        }
    });

    return [affectedMapping, packages];
}

async function bumpPackages(packages) {
    async function getBumpSuggestion(package) {
        const result = await new Promise((resolve, reject) => {
            convBump({
                path: `packages/${package}`,
                lernaPackage: '@xmcl/minecraft-launcher-core',
                whatBump(comments) {
                    if (comments.some(c => c.header.startsWith('BREAKING CHANGE:'))) {
                        return { level: 0 }; // major
                    } else if (comments.some(c => c.type === 'feat')) {
                        return { level: 1 }; // minor
                    } else if (comments.some(c => c.type === 'fix')) {
                        return { level: 2 }; // patch
                    }
                }
            }, function (err, result) {
                if (err) reject(err);
                else resolve(result);
            });
        });
        return result;
    }
    for (const package of packages) {
        const packageJSON = package.package;
        const result = await getBumpSuggestion(package.name);
        // bump version according to the release type 'major', 'minor' or 'patch'
        if (result.releaseType) {
            const newVersion = semver.inc(packageJSON.version, result.releaseType);
            console.log(`${packageJSON.name}: ${packageJSON.version} -> ${newVersion}`);
            package.newVersion = newVersion;
            package.releaseType = result.releaseType;
        }
    }
}

function bumpDependenciesPackage(affectedMapping, packages) {
    for (const package of packages) {
        // only major & minor change affect the dependents packages update
        if (package.newVersion && (package.releaseType === 'minor' || package.releaseType === 'major')) {
            const allAffectedPackages = affectedMapping[package.name];
            for (const affectedPackage of allAffectedPackages) {
                if (affectedPackage.newVersion) continue;
                const affectedPackageJSON = affectedPackage.package;
                const newVersion = semver.inc(affectedPackageJSON.version, 'patch');
                console.log(`${affectedPackageJSON.name}: ${affectedPackageJSON.version} -> ${newVersion}`);
                affectedPackage.newVersion = newVersion;
            }
        }
    }
}

function writeAllNewVersionsToPackageJson(packages) {
    for (const package of packages) {
        fs.writeFileSync(`packages/${package}/package.json`, JSON.stringify({ ...package.package, version: newVersion }, null, 2))
    }
}

async function main(dry) {
    const [affectedMapping, packages] = scanPackages();
    await bumpPackages(packages);
    bumpDependenciesPackage(affectedMapping, packages);
    if (!dry) {
        writeAllNewVersionsToPackageJson(packages);
    }
    const newVersion = packages.find(pack => pack.package.name === '@xmcl/minecraft-launcher-core')
        .newVersion
    const exec = dry ? console.log : execSync;
    exec(`git tag -f @xmcl/minecraft-launcher-core@${newVersion}`);
    exec(`git push -f tag @xmcl/minecraft-launcher-core@${newVersion}`);
    
    fs.writeFileSync('tag.log', `@xmcl/minecraft-launcher-core@${newVersion}`);
    fs.writeFileSync('tag.log', `@xmcl/minecraft-launcher-core@${newVersion}`);
}

main(!process.env.CI);