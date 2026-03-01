const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, cb);
    else if (e.isFile() && e.name === 'teoria.jsx') cb(full);
  }
}

const withImport = [];
const withoutImport = [];
const allESO = [];

walk(src, (file) => {
  const txt = fs.readFileSync(file, 'utf8');
  if (!/educationLevel\s*:\s*["']ESO["']/.test(txt)) return;
  allESO.push(path.relative(root, file));
  if (/components\/TheoryV2\.jsx/.test(txt) || /\.\.{1,}\/components\/TheoryV2\.jsx/.test(txt)) {
    withImport.push(path.relative(root, file));
  } else {
    withoutImport.push(path.relative(root, file));
  }
});

console.log('Total ESO teoria.jsx files:', allESO.length);
console.log('\nFiles WITH TheoryV2 import:');
withImport.forEach(f => console.log(' -', f));
console.log('\nFiles WITHOUT TheoryV2 import:');
withoutImport.forEach(f => console.log(' -', f));

// Also write to a report file
const report = { total: allESO.length, withImport, withoutImport };
fs.writeFileSync(path.join(root, 'patch-reports', 'eso-theoryv2-report.json'), JSON.stringify(report, null, 2));
console.log('\nReport saved to patch-reports/eso-theoryv2-report.json');
