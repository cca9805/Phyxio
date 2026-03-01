const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..'); // frontend
const srcData = path.join(root, 'src');
const componentsDir = path.join(srcData, 'components');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name === 'teoria.jsx') processFile(full);
  }
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  if (!/educationLevel\s*:\s*["']ESO["']/.test(content)) return;
  if (/components\/TheoryV2\.jsx/.test(content)) return; // already imports

  // compute relative import path from file dir to components dir
  const rel = path.relative(path.dirname(filePath), componentsDir).replace(/\\/g, '/');
  let importPath = rel.startsWith('.') ? rel : './' + rel;
  importPath = importPath + '/TheoryV2.jsx';

  const importLine = `import { TheorySection, Concept, Important, Example, Formula } from '${importPath}';\n`;

  // find first import React line
  const lines = content.split(/\r?\n/);
  let insertIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (/import\s+React/.test(lines[i])) { insertIndex = i + 1; break; }
  }
  if (insertIndex === -1) insertIndex = 0;

  lines.splice(insertIndex, 0, importLine);
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
  console.log('Patched:', path.relative(root, filePath));
}

console.log('Scanning for teoria.jsx files under', path.relative(process.cwd(), srcData));
walk(srcData);
console.log('Done.');
