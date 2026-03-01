#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT = path.resolve(
  process.cwd(),
  "src",
  "data_v2",
  "contenido",
  "fisica-clasica",
  "mecanica",
  "cinematica"
);

const DRY = process.argv.includes("--dry");

function writeYaml(filePath, obj) {
  const out = yaml.dump(obj, { lineWidth: -1 });
  if (DRY) {
    console.log("[DRY ]", filePath);
    return;
  }
  fs.writeFileSync(filePath, out, "utf8");
  console.log("[WRITE]", filePath);
}

function seedMRU(dir) {
  writeYaml(path.join(dir, "magnitudes.yaml"), {
    version: 1,
    magnitudes: [
      { id: "posicion", symbol: "x", label: "Posición", kind: "scalar", si_unit: "m" },
      { id: "posicion_inicial", symbol: "x0", label: "Posición inicial", kind: "scalar", si_unit: "m" },
      { id: "velocidad", symbol: "v", label: "Velocidad", kind: "scalar", si_unit: "m/s" },
      { id: "tiempo", symbol: "t", label: "Tiempo", kind: "scalar", si_unit: "s" }
    ]
  });

  writeYaml(path.join(dir, "formulas.yaml"), {
    version: 1,
    topic: { id: "mru", title: "Movimiento Rectilíneo Uniforme" },
    sets: [
      {
        id: "base",
        title: "Ecuaciones básicas",
        assumptions: ["movimiento_1d", "velocidad_constante", "aceleracion_cero"],
        formulas: [
          {
            id: "posicion_tiempo",
            title: "Posición en función del tiempo",
            equation: "x = x0 + v * t",
            symbols: {
              x: { magnitude: "posicion" },
              x0: { magnitude: "posicion_inicial" },
              v: { magnitude: "velocidad" },
              t: { magnitude: "tiempo" }
            },
            solve_for: ["x", "x0", "v", "t"],
            constraints: [{ expr: "t >= 0", message: "El tiempo debe ser ≥ 0." }],
            ui: { group: "MRU", difficulty: 1 }
          }
        ]
      }
    ]
  });
}

function seedMRUA(dir) {
  writeYaml(path.join(dir, "magnitudes.yaml"), {
    version: 1,
    magnitudes: [
      { id: "posicion", symbol: "x", label: "Posición", kind: "scalar", si_unit: "m" },
      { id: "posicion_inicial", symbol: "x0", label: "Posición inicial", kind: "scalar", si_unit: "m" },
      { id: "velocidad", symbol: "v", label: "Velocidad", kind: "scalar", si_unit: "m/s" },
      { id: "velocidad_inicial", symbol: "v0", label: "Velocidad inicial", kind: "scalar", si_unit: "m/s" },
      { id: "aceleracion", symbol: "a", label: "Aceleración", kind: "scalar", si_unit: "m/s^2" },
      { id: "tiempo", symbol: "t", label: "Tiempo", kind: "scalar", si_unit: "s" }
    ]
  });

  writeYaml(path.join(dir, "formulas.yaml"), {
    version: 1,
    topic: { id: "mrua", title: "Movimiento Rectilíneo Uniformemente Acelerado" },
    sets: [
      {
        id: "base",
        title: "Ecuaciones del MRUA",
        assumptions: ["movimiento_1d", "aceleracion_constante"],
        formulas: [
          {
            id: "velocidad_tiempo",
            title: "Velocidad en función del tiempo",
            equation: "v = v0 + a * t",
            symbols: {
              v: { magnitude: "velocidad" },
              v0: { magnitude: "velocidad_inicial" },
              a: { magnitude: "aceleracion" },
              t: { magnitude: "tiempo" }
            },
            solve_for: ["v", "v0", "a", "t"],
            constraints: [{ expr: "t >= 0" }],
            ui: { group: "MRUA", difficulty: 1 }
          },
          {
            id: "posicion_tiempo",
            title: "Posición en función del tiempo",
            equation: "x = x0 + v0*t + 0.5*a*t^2",
            symbols: {
              x: { magnitude: "posicion" },
              x0: { magnitude: "posicion_inicial" },
              v0: { magnitude: "velocidad_inicial" },
              a: { magnitude: "aceleracion" },
              t: { magnitude: "tiempo" }
            },
            solve_for: ["x", "x0", "v0", "a", "t"],
            constraints: [{ expr: "t >= 0" }],
            ui: { group: "MRUA", difficulty: 2 }
          }
        ]
      }
    ]
  });
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error("[ABORT] No existe:", ROOT);
    process.exit(1);
  }

  const dirs = fs.readdirSync(ROOT, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  console.log("[INFO] Cinemática detectada:", dirs.join(", "));

  for (const d of dirs) {
    const full = path.join(ROOT, d);
    if (d === "mru") seedMRU(full);
    if (d === "mrua") seedMRUA(full);
  }

  console.log("\n[OK] Seed de cinemática completado.");
}

main();
