#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT = path.resolve(process.cwd(), "src", "data_v2", "contenido");

function arg(name, def = null) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) return def;
  return process.argv[i + 1] ?? def;
}

const FROM = arg("from");
const TO = arg("to");
const NEW_ID = arg("id");
const NEW_NAME = arg("name");
const FORCE = process.argv.includes("--force");

if (!FROM || !TO || !NEW_ID || !NEW_NAME) {
  console.error("Uso:");
  console.error("  node scripts/v2-clone-topic.cjs --from <rel> --to <rel> --id <id> --name <nombre> [--force]");
  process.exit(1);
}

const fromDir = path.join(ROOT, FROM);
const toDir = path.join(ROOT, TO);

if (!fs.existsSync(fromDir)) {
  console.error("[ERROR] No existe origen:", fromDir);
  process.exit(1);
}

if (fs.existsSync(toDir) && !FORCE) {
  console.error("[ABORT] Ya existe destino:", toDir, "(usa --force para sobrescribir)");
  process.exit(1);
}

fs.mkdirSync(toDir, { recursive: true });

const files = [
  "meta.yaml",
  "teoria.md",
  "modelos.md",
  "errores.md",
  "ejemplos.md",
  "magnitudes.yaml",
  "formulas.yaml",
];

for (const f of files) {
  const src = path.join(fromDir, f);
  const dst = path.join(toDir, f);
  if (!fs.existsSync(src)) continue;
  fs.copyFileSync(src, dst);
}

// Ajuste meta.yaml
const metaPath = path.join(toDir, "meta.yaml");
const meta = yaml.load(fs.readFileSync(metaPath, "utf8")) || {};
meta.id = NEW_ID;
meta.nombre = NEW_NAME;
meta.ruta_relativa = TO.replace(/\\/g, "/");
// Vacía objetivos/suposiciones si quieres reescribirlos (opcional)
meta.objetivos = meta.objetivos || [];
meta.suposiciones = meta.suposiciones || [];
fs.writeFileSync(metaPath, yaml.dump(meta, { lineWidth: 120 }), "utf8");

// Ajuste formulas.yaml
const formulasPath = path.join(toDir, "formulas.yaml");
const fd = yaml.load(fs.readFileSync(formulasPath, "utf8")) || {};
fd.topic = fd.topic || {};
fd.topic.id = NEW_ID;
fd.topic.title = NEW_NAME;

// cambia ids internos para no colisionar (prefijo)
if (Array.isArray(fd.formulas)) {
  fd.formulas = fd.formulas.map(form => ({
    ...form,
    id: `${NEW_ID}_${String(form.id || "formula").replace(/^mru_/, "")}`,
  }));
}
if (fd.ui?.default_formula) {
  fd.ui.default_formula = `${NEW_ID}_${String(fd.ui.default_formula).replace(/^mru_/, "")}`;
}
if (Array.isArray(fd.ui?.groups)) {
  fd.ui.groups = fd.ui.groups.map(g => ({
    ...g,
    items: Array.isArray(g.items)
      ? g.items.map(it => `${NEW_ID}_${String(it).replace(/^mru_/, "")}`)
      : g.items,
  }));
}

fs.writeFileSync(formulasPath, yaml.dump(fd, { lineWidth: 120 }), "utf8");

console.log("[OK] Clonado:", FROM, "→", TO);
console.log("[TIP] Ejecuta: node scripts/v2-auto-meta-fields.cjs --force");
