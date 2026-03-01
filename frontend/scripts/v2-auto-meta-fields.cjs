#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT = path.resolve(process.cwd(), "src", "data_v2", "contenido");

// Flags
const DRY = process.argv.includes("--dry");
const FORCE = process.argv.includes("--force"); // <-- sobrescribe orden/dificultad
const VERBOSE = process.argv.includes("--verbose");

// ---------------------------
// CONFIG CANÓNICA
// ---------------------------
const BLOCK_ORDER = {
  "fisica-clasica": 1000,
  "fisica-moderna": 2000,
  "matematicas": 3000,
  "herramientas": 4000,
  "sostenibilidad-energia": 5000,
};

const SUBBLOCK_ORDER = {
  // Mecánica
  "fundamentos": 10,
  "cinematica": 20,
  "dinamica": 30,
  "trabajo-energia": 40,
  "cantidad-movimiento": 50,
  "rotacion": 60,
  "gravitacion": 70,
  "fluidos": 80,
  "oscilaciones": 90,
  "mecanica-analitica": 100,

  // Ondas / óptica
  "ondas": 200,
  "optica": 210,

  // Termodinámica
  "termodinamica-clasica": 300,
  "termodinamica-estadistica": 320,

  // Electromagnetismo
  "electrostatica": 400,
  "corriente-continua": 410,
  "corriente-alterna": 420,
  "circuitos": 430,
  "magnetismo": 440,
  "induccion": 450,
  "electronica": 460,

  // Física moderna
  "relatividad": 600,
  "cuantica": 620,
  "atomica-y-molecular": 640,
  "estado-solido": 660,
  "nuclear-y-particulas": 680,
  "astrofisica-y-cosmologia": 700,

  // Herramientas
  "herramientas": 800,
  "laboratorio": 820,
  "uso-calculadora": 830,

  // Energía / sostenibilidad
  "sistemas-energeticos": 900,
  "energias-renovables": 920,
  "almacenamiento": 940,
  "red-electrica-y-apagones": 960,
  "energia-nuclear": 980,
  "impacto-y-decision": 1000,
  "movilidad": 1020,
};

const SUBBLOCK_DIFFICULTY = {
  // Mecánica
  "fundamentos": 1,
  "cinematica": 2,
  "dinamica": 3,
  "trabajo-energia": 3,
  "cantidad-movimiento": 3,
  "rotacion": 4,
  "gravitacion": 4,
  "fluidos": 3,
  "oscilaciones": 3,
  "mecanica-analitica": 5,

  // Ondas / óptica
  "ondas": 3,
  "optica": 3,

  // Termodinámica
  "termodinamica-clasica": 3,
  "termodinamica-estadistica": 4,

  // Electromagnetismo
  "electrostatica": 3,
  "corriente-continua": 3,
  "corriente-alterna": 4,
  "circuitos": 4,
  "magnetismo": 4,
  "induccion": 4,
  "electronica": 4,

  // Física moderna
  "relatividad": 5,
  "cuantica": 5,
  "atomica-y-molecular": 4,
  "estado-solido": 4,
  "nuclear-y-particulas": 4,
  "astrofisica-y-cosmologia": 4,

  // Herramientas
  "herramientas": 1,
  "laboratorio": 2,
  "uso-calculadora": 1,

  // Energía
  "sistemas-energeticos": 2,
  "energias-renovables": 2,
  "almacenamiento": 3,
  "red-electrica-y-apagones": 3,
  "energia-nuclear": 4,
  "impacto-y-decision": 2,
  "movilidad": 2,
};

// ---------------------------
// Utils
// ---------------------------
function walk(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

function compute(area, subbloque) {
  const base = BLOCK_ORDER[area] ?? 9000;
  const sub = (subbloque && SUBBLOCK_ORDER[subbloque] != null) ? SUBBLOCK_ORDER[subbloque] : 500;
  const diff = (subbloque && SUBBLOCK_DIFFICULTY[subbloque] != null) ? SUBBLOCK_DIFFICULTY[subbloque] : 3;
  return { orden: base + sub, dificultad: diff };
}

function fillMeta(metaPath) {
  const dir = path.dirname(metaPath);
  const rel = path.relative(ROOT, dir).replace(/\\/g, "/");
  const parts = rel.split("/");

  const meta = yaml.load(fs.readFileSync(metaPath, "utf8")) || {};

  const area = parts[0];
  // parts[1]=bloque (no lo usamos para orden base, solo por si lo necesitas luego)
  const subbloque = parts.length >= 3 ? parts[2] : null;

  const { orden, dificultad } = compute(area, subbloque);

  const willSetOrden = FORCE || meta.orden == null;
  const willSetDificultad = FORCE || meta.dificultad == null;

  if (willSetOrden) meta.orden = orden;
  if (willSetDificultad) meta.dificultad = dificultad;

  if (DRY) {
    if (VERBOSE) {
      console.log("[DRY ]", rel, "=>", { orden: meta.orden, dificultad: meta.dificultad }, FORCE ? "(force)" : "");
    }
    return;
  }

  fs.writeFileSync(metaPath, yaml.dump(meta, { lineWidth: 120 }), "utf8");
  if (VERBOSE) {
    console.log("[WRITE]", rel, FORCE ? "(force)" : "");
  }
}

// ---------------------------
// Main
// ---------------------------
function main() {
  if (!fs.existsSync(ROOT)) {
    console.error("[ABORT] No existe:", ROOT);
    process.exit(1);
  }

  console.log("[V2] Asignando orden y dificultad...", FORCE ? "(--force)" : "");
  walk(ROOT, file => {
    if (file.endsWith("meta.yaml")) fillMeta(file);
  });
  console.log("[V2] Hecho.");
  console.log("  - Ejecuta validación: node scripts/v2-validate.cjs");
}

main();
