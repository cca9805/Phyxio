const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT = path.resolve(process.cwd(), "src", "data_v2", "contenido");

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      acc.push(full);
      walk(full, acc);
    }
  }
  return acc;
}

function main() {
  const dirs = walk(ROOT);
  let updated = 0;

  for (const dir of dirs) {
    const metaPath = path.join(dir, "meta.yaml");
    if (!fs.existsSync(metaPath)) continue;

    const raw = fs.readFileSync(metaPath, "utf8");
    const doc = yaml.load(raw) || {};

    if (doc.id) continue;

    const id = path.basename(dir);
    doc.id = id;

    const out = yaml.dump(doc, { lineWidth: -1 });
    fs.writeFileSync(metaPath, out, "utf8");
    updated++;
  }

  console.log(`[OK] meta.id añadido en ${updated} archivos.`);
}

main();
