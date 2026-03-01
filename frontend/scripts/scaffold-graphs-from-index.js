import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ajusta esto si tu estructura cambia.
// Si el script vive en frontend/scripts/, entonces repoRoot = frontend/
const repoRoot = path.resolve(__dirname, "..");

// Rutas objetivo reales (SIN duplicar src/v2)
const targets = [
  path.join(repoRoot, "src/v2/components/graphs/cinematica/index.js"),
  path.join(repoRoot, "src/v2/components/graphs/dinamica/index.js"),
];

const templatesDir = path.join(repoRoot, "src/v2/components/graphs/_templates");

const templateByType = {
  Coord: path.join(templatesDir, "GraphsCoord.template.jsx"),
  Svg: path.join(templatesDir, "GraphsSvg.template.jsx"),
  Dcl: path.join(templatesDir, "GraphsDcl.template.jsx"),
};

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readFile(p) {
  return fs.readFileSync(p, "utf-8");
}

function writeFile(p, content) {
  fs.writeFileSync(p, content, "utf-8");
}

function parseImports(indexContent) {
  // import X from "./Y";
  const re = /import\s+([A-Za-z0-9_]+)\s+from\s+"\.\/([A-Za-z0-9_]+)";/g;
  const out = [];
  let m;
  while ((m = re.exec(indexContent))) {
    out.push({ componentName: m[1], fileBase: m[2] });
  }
  return out;
}

function inferTypeFromFileBase(fileBase) {
  if (fileBase.endsWith("GraphsCoord")) return "Coord";
  if (fileBase.endsWith("GraphsSvg")) return "Svg";
  if (fileBase.endsWith("GraphsDcl")) return "Dcl";
  return null;
}

function makeComponentFromTemplate(templateContent, componentName, typeLabel) {
  return templateContent
    .replace(/export default function [A-Za-z0-9_]+\(/, `export default function ${componentName}(`)
    .replace(/title\s=\s"[^"]+"/, `title = "${componentName.replace(/Graphs(Coord|Svg|Dcl)$/, "")} (${typeLabel})"`);
}

function scaffoldForIndex(indexPath) {
  const dir = path.dirname(indexPath);
  const indexContent = readFile(indexPath);
  const imports = parseImports(indexContent);

  let created = 0;

  for (const { componentName, fileBase } of imports) {
    const type = inferTypeFromFileBase(fileBase);
    if (!type) continue;

    const outFile = path.join(dir, `${fileBase}.jsx`);
    if (fs.existsSync(outFile)) continue;

    const tplPath = templateByType[type];
    if (!fs.existsSync(tplPath)) {
      throw new Error(`Falta plantilla ${type}: ${tplPath}`);
    }

    const tpl = readFile(tplPath);
    const content = makeComponentFromTemplate(tpl, componentName, type);
    writeFile(outFile, content);
    created++;
  }

  return created;
}

function main() {
  console.log("Repo root:", repoRoot);
  console.log("Templates dir:", templatesDir);

  ensureDir(templatesDir);

  // sanity check: avisa si faltan plantillas
  for (const [k, p] of Object.entries(templateByType)) {
    if (!fs.existsSync(p)) console.warn(`Falta plantilla ${k}: ${p}`);
  }

  let total = 0;
  for (const idx of targets) {
    if (!fs.existsSync(idx)) {
      console.warn(`No encuentro index: ${idx}`);
      continue;
    }
    const n = scaffoldForIndex(idx);
    console.log(`[OK] ${path.relative(repoRoot, idx)} -> creados ${n}`);
    total += n;
  }
  console.log(`Total creados: ${total}`);
}

main();
