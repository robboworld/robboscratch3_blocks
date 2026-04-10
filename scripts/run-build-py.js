'use strict';

/**
 * Запускает build.py под Python 3. На Windows нет команды python3 в PATH (код 9009) —
 * пробуем py -3, python, python3; на Unix — python3, python.
 */
const { spawnSync } = require('child_process');
const path = require('path');

const root = path.join(__dirname, '..');

function run(cmd, args) {
    return spawnSync(cmd, args, {
        stdio: 'inherit',
        cwd: root,
        shell: process.platform === 'win32',
    });
}

const attempts =
    process.platform === 'win32'
        ? [
              ['py', ['-3', 'build.py']],
              ['python', ['build.py']],
              ['python3', ['build.py']],
          ]
        : [
              ['python3', ['build.py']],
              ['python', ['build.py']],
          ];

for (const [cmd, args] of attempts) {
    const r = run(cmd, args);
    if (r.error && r.error.code === 'ENOENT') {
        continue;
    }
    const code = r.status;
    process.exit(code === null || code === undefined ? 1 : code);
}

process.stderr.write(
    'run-build-py.js: не найден Python 3 (пробовали: ' +
        attempts.map((a) => a.join(' ')).join(', ') +
        ').\n',
);
process.exit(9009);
