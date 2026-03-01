// frontend/scripts/copy_definitions_to_v2.cjs
const fs = require("fs");
const path = require("path");

const SRC_ROOT = path.resolve(process.cwd(), "src");
const V1_DATA = path.join(SRC_ROOT, "data");
const V2_DATA = path.join(SRC_ROOT, "data_v2", "contenido");

const DRY_RUN = process.argv.includes("--dry");
const OVERWRITE = process.argv.includes("--overwrite");

function inferKindFromV1Path() {
  return "fisica-clasica";
}

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function transformContent(content) {
  if (content.includes("export const definitions")) {
    return content + "\n\n// Alias V2\nexport const calculadoras = definitions;\n";
  }
  return content;
}

function main() {
  if (!fs.existsSync(V1_DATA)) {
    console.error(`[ABORT] No existe: ${V1_DATA}`);
    process.exit(1);
  }

  const allFiles = walk(V1_DATA);
  const defs = allFiles.filter(f => f.endsWith(path.join(path.sep, "definitions.js")));

  console.log(`[INFO] Encontrados ${defs.length} definitions.js`);

  let copied = 0;
  let skipped = 0;

  for (const absSrc of defs) {
    const relFromV1 = path.relative(V1_DATA, absSrc);
    const relDir = path.dirname(relFromV1);

    const kindFolder = inferKindFromV1Path(relFromV1);
    const absDstDir = path.join(V2_DATA, kindFolder, relDir);
    const absDst = path.join(absDstDir, "calculadoras.js");

    if (fs.existsSync(absDst) && !OVERWRITE) {
      skipped++;
      continue;
    }

    const srcContent = fs.readFileSync(absSrc, "utf8");
    const dstContent = transformContent(srcContent);

    if (DRY_RUN) {
      console.log(`[DRY] ${absSrc} -> ${absDst}`);
      continue;
    }

    ensureDir(absDstDir);
    fs.writeFileSync(absDst, dstContent, "utf8");
    copied++;
  }

  console.log(`[OK] Copiados: ${copied}, omitidos: ${skipped}`);
  if (DRY_RUN) console.log(`[INFO] Ejecuta sin --dry para escribir archivos.`);
}

main();
