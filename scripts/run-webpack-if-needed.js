'use strict';

/**
 * Run webpack for scratch-blocks only when inputs are newer than dist outputs.
 * Set BLOCKS_BUILD_FORCE=1 to always rebuild.
 */
const {spawnSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

const OUTPUTS = [
    'dist/vertical.js',
    'dist/horizontal.js',
    'dist/web/vertical.js',
    'dist/web/horizontal.js'
];

const INPUT_ROOTS = [
    'blockly_compressed_vertical.js',
    'blockly_compressed_horizontal.js',
    'blocks_compressed_vertical.js',
    'blocks_compressed_horizontal.js',
    'blocks_compressed.js',
    'msg/scratch_msgs.js',
    'msg/messages.js',
    'webpack.config.js',
    'shim'
];

function buildForceEnabled () {
    return process.env.BLOCKS_BUILD_FORCE === '1';
}

function collectFiles (entryPath) {
    const abs = path.join(root, entryPath);
    if (!fs.existsSync(abs)) {
        return [];
    }
    const stat = fs.statSync(abs);
    if (stat.isFile()) {
        return [abs];
    }
    const files = [];
    for (const name of fs.readdirSync(abs)) {
        const child = path.join(entryPath, name);
        if (fs.statSync(path.join(root, child)).isDirectory() || child.endsWith('.js')) {
            files.push(...collectFiles(child));
        }
    }
    return files;
}

function newestMtime (paths) {
    let newest = 0;
    for (const filePath of paths) {
        const mtime = fs.statSync(filePath).mtimeMs;
        if (mtime > newest) {
            newest = mtime;
        }
    }
    return newest;
}

function oldestMtime (paths) {
    let oldest = Infinity;
    for (const filePath of paths) {
        if (!fs.existsSync(filePath)) {
            return 0;
        }
        const mtime = fs.statSync(filePath).mtimeMs;
        if (mtime < oldest) {
            oldest = mtime;
        }
    }
    return oldest;
}

const scriptMtime = fs.statSync(__filename).mtimeMs;
const inputFiles = [];
for (const entry of INPUT_ROOTS) {
    inputFiles.push(...collectFiles(entry));
}
inputFiles.push(path.join(root, 'build.py'));

const outputFiles = OUTPUTS.map(f => path.join(root, f));
const missingOutput = outputFiles.some(f => !fs.existsSync(f));

let needsRebuild = buildForceEnabled() || missingOutput;
if (!needsRebuild) {
    const srcNewest = Math.max(newestMtime(inputFiles), scriptMtime);
    const outOldest = oldestMtime(outputFiles);
    needsRebuild = srcNewest > outOldest;
}

if (!needsRebuild) {
    process.stdout.write('SKIP (up to date): webpack dist/*.js\n');
    process.exit(0);
}

const webpackBin = path.join(root, 'node_modules', 'webpack', 'bin', 'webpack.js');
const nodeMajor = parseInt(process.version.slice(1).split('.')[0], 10);
const nodeArgs = nodeMajor >= 17 ?
    ['--openssl-legacy-provider', webpackBin] :
    [webpackBin];
const result = spawnSync(process.execPath, nodeArgs, {
    stdio: 'inherit',
    cwd: root
});

const code = result.status;
process.exit(code === null || code === undefined ? 1 : code);
