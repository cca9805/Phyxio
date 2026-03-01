const fs = require('fs');
const path = require('path');

function findTeoriaFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTeoriaFiles(fullPath, files);
    } else if (item === 'teoria.jsx') {
      files.push(fullPath);
    }
  }
  return files;
}

function extractMetadataRange(content) {
  const startIndex = content.indexOf('export const metadata');
  if (startIndex === -1) return null;
  const braceIndex = content.indexOf('{', startIndex);
  if (braceIndex === -1) return null;
  let i = braceIndex;
  let depth = 0;
  for (; i < content.length; i++) {
    const ch = content[i];
    if (ch === '{') depth++;
    else if (ch === '}') depth--;
    if (depth === 0) break;
  }
  if (depth !== 0) return null;
  // include closing brace
  return { start: braceIndex, end: i };
}

function hasLevels(metadataText) {
  return /\blevels\s*:\s*\[/m.test(metadataText);
}

function getEducationLevel(metadataText) {
  const m = metadataText.match(/educationLevel\s*:\s*['\"]([^'\"]+)['\"]/);
  if (m) return m[1];
  // try legacy keys (educationlevel lowercase)
  const m2 = metadataText.match(/educationlevel\s*:\s*['\"]([^'\"]+)['\"]/i);
  if (m2) return m2[1];
  return null;
}

function insertLevels(content, range, level) {
  // place before the closing brace of metadata
  const before = content.slice(0, range.end);
  const after = content.slice(range.end);
  // figure out indentation by looking backwards for last newline before end
  const newlineIndex = before.lastIndexOf('\n', range.end - 1);
  const lineStart = newlineIndex === -1 ? 0 : newlineIndex + 1;
  const indentMatch = before.slice(lineStart).match(/^\s*/);
  const indent = indentMatch ? indentMatch[0] : '  ';
  const insertion = `\n${indent}levels: ['${level}'],`;
  const newContent = before + insertion + after;
  return newContent;
}

function processFile(filePath, dryRun = false) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const metaRange = extractMetadataRange(raw);
  if (!metaRange) return { updated: false, reason: 'no-metadata' };
  const metadataText = raw.slice(metaRange.start, metaRange.end + 1);
  if (hasLevels(metadataText)) return { updated: false, reason: 'already-has-levels' };
  const edu = getEducationLevel(metadataText);
  if (!edu) return { updated: false, reason: 'no-educationLevel' };
  const normalized = edu.trim().toUpperCase();
  const newContent = insertLevels(raw, metaRange, normalized);
  if (!dryRun) fs.writeFileSync(filePath, newContent, 'utf8');
  return { updated: true, level: normalized };
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    console.error('src/data not found');
    process.exit(1);
  }
  const files = findTeoriaFiles(dataDir);
  console.log(`Found ${files.length} teoria.jsx files`);
  const summary = { processed: 0, skipped: 0, errors: 0, byLevel: {} };
  for (const f of files) {
    try {
      const res = processFile(f, dryRun);
      if (res.updated) {
        summary.processed++;
        summary.byLevel[res.level] = (summary.byLevel[res.level] || 0) + 1;
        console.log(`Updated: ${path.relative(process.cwd(), f)} -> levels: ['${res.level}']`);
      } else {
        summary.skipped++;
        console.log(`Skipped: ${path.relative(process.cwd(), f)} (${res.reason})`);
      }
    } catch (err) {
      summary.errors++;
      console.error(`Error processing ${f}: ${err.message}`);
    }
  }
  console.log('\nSummary:');
  console.log(summary);
  if (dryRun) console.log('\nDry-run mode: no files were modified.');
}

main();
