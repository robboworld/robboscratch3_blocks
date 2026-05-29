#!/usr/bin/env node
/**
 * Merge Robbo block translations into scratch_msgs.js for es and es-419.
 * Run from robboscratch3_blocks: node i18n/apply-es-robbo-blocks.js
 */
const fs = require('fs');
const path = require('path');

const SCRATCH_MSGS = path.join(__dirname, '../msg/scratch_msgs.js');
const TRANSLATIONS = require('./es-robbo-translations.json');

function extractLocaleBlock(content, locale) {
    const escaped = locale.replace(/-/g, '\\-');
    const re = new RegExp(
        `(Blockly\\.ScratchMsgs\\.locales\\["${escaped}"\\]\\s*=\\s*\\{)([\\s\\S]*?)(\\n\\};)`,
        'm'
    );
    const match = content.match(re);
    if (!match) {
        throw new Error(`Locale block not found: ${locale}`);
    }
    return {re, match, prefix: match[1], body: match[2], suffix: match[3]};
}

function parseEntries(body) {
    const entries = {};
    const re = /"([^"]+)"\s*:\s*"((?:\\.|[^"\\])*)"/g;
    let m;
    while ((m = re.exec(body)) !== null) {
        entries[m[1]] = m[2];
    }
    return entries;
}

function formatEntry(key, value) {
    const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    return `"${key}": "${escaped}"`;
}

function mergeLocale(content, locale) {
    const block = extractLocaleBlock(content, locale);
    const entries = parseEntries(block.body);
    for (const [key, value] of Object.entries(TRANSLATIONS)) {
        entries[key] = value;
    }
    const lines = Object.entries(entries).map(([k, v]) => `    ${formatEntry(k, v)}`);
    const newBody = '\n' + lines.join(',\n') + '\n';
    return content.replace(block.re, `${block.prefix}${newBody}${block.suffix}`);
}

let content = fs.readFileSync(SCRATCH_MSGS, 'utf8');
for (const locale of ['es', 'es-419']) {
    content = mergeLocale(content, locale);
}
fs.writeFileSync(SCRATCH_MSGS, content);
console.log('Updated scratch_msgs.js for es and es-419 with', Object.keys(TRANSLATIONS).length, 'Robbo keys');
