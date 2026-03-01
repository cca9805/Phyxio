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

function hasLevels(content) {
  const metaRangeMatch = content.match(/export\s+const\s+metadata\s*=\s*\{([\s\S]*?)\}/);
  if (!metaRangeMatch) return false;
  const metaText = metaRangeMatch[1];
  return /\blevels\s*:\s*\[/m.test(metaText);
}

function main() {
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    console.error('src/data not found');
    process.exit(1);
  }
  const files = findTeoriaFiles(dataDir);
  const missing = [];
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    if (!hasLevels(content)) missing.push(path.relative(process.cwd(), f));
  }
  console.log(`Scanned ${files.length} teoria.jsx files`);
  if (missing.length === 0) {
    console.log('All teoria.jsx have levels metadata.');
  } else {
    console.log('Files missing levels metadata:');
    missing.forEach(m => console.log(' - ' + m));
  }
}

main();
