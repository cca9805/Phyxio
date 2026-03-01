#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT = path.resolve(process.cwd(), "src", "data_v2", "contenido");
const WRITE_REPORT = process.argv.includes("--report");
const STRICT = process.argv.includes("--strict"); // falla con exit code 1 si hay errores

const REQUIRED_FILES = [
  "meta.yaml",
  "formulas.yaml",
  "magnitudes.yaml",
  "teoria.md",
  "modelos.md",
  "errores.md",
  "ejemplos.md",
];

function walkDirs(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      acc.push(full);
      walkDirs(full, acc);
    }
  }
  return acc;
}

function readYaml(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  return yaml.load(raw);
}

function isSubtopicDir(dir) {
  // lo consideramos subtema si tiene meta.yaml
  return fs.existsSync(path.join(dir, "meta.yaml"));
}

function listMissingFiles(dir) {
  return REQUIRED_FILES.filter(f => !fs.existsSync(path.join(dir, f)));
}

function validateFormulasVsMagnitudes(formulasDoc, magsDoc) {
  const errors = [];
  const warnings = [];

  const mags = magsDoc?.magnitudes || [];
  const magIds = new Set(mags.map(m => m.id));

  const sets = formulasDoc?.sets || [];
  const seenFormulaIds = new Set();

  for (const set of sets) {
    const formulas = set?.formulas || [];
    for (const f of formulas) {
      if (!f?.id) {
        errors.push(`Fórmula sin id en set "${set?.id || "?"}"`);
        continue;
      }
      if (seenFormulaIds.has(f.id)) {
        errors.push(`Fórmula duplicada id="${f.id}"`);
      }
      seenFormulaIds.add(f.id);

      if (!f.equation || typeof f.equation !== "string" || !f.equation.includes("=")) {
        errors.push(`Fórmula "${f.id}" equation inválida o sin '='`);
      }

      const symbols = f.symbols || {};
      for (const sym of Object.keys(symbols)) {
        const mag = symbols[sym]?.magnitude;
        if (!mag) {
          errors.push(`Fórmula "${f.id}" símbolo "${sym}" sin magnitude`);
          continue;
        }
        if (!magIds.has(mag)) {
          errors.push(`Fórmula "${f.id}" símbolo "${sym}" referencia magnitude inexistente: "${mag}"`);
        }
      }

      // solve_for
      if (Array.isArray(f.solve_for) && f.solve_for.length) {
        for (const s of f.solve_for) {
          if (!(s in symbols)) {
            warnings.push(`Fórmula "${f.id}" solve_for incluye "${s}" pero no está en symbols`);
          }
        }
      } else {
        warnings.push(`Fórmula "${f.id}" no tiene solve_for (recomendado).`);
      }
    }
  }

  return { errors, warnings };
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error("[ABORT] No existe:", ROOT);
    process.exit(1);
  }

  const allDirs = walkDirs(ROOT);
  const subtopics = allDirs.filter(isSubtopicDir);

  const report = {
    root: ROOT,
    scanned_dirs: allDirs.length,
    subtopics: [],
    totals: { ok: 0, errors: 0, warnings: 0, missing_files: 0 },
  };

  for (const dir of subtopics) {
    const rel = path.relative(ROOT, dir).replace(/\\/g, "/");
    const entry = { path: rel, errors: [], warnings: [], missing: [] };

    // archivos obligatorios
    entry.missing = listMissingFiles(dir);
    if (entry.missing.length) {
      entry.errors.push(`Faltan archivos: ${entry.missing.join(", ")}`);
      report.totals.missing_files += entry.missing.length;
    }

    // YAML parse
    let meta, formulasDoc, magsDoc;
    try {
      meta = readYaml(path.join(dir, "meta.yaml"));
    } catch (e) {
      entry.errors.push(`meta.yaml inválido: ${e.message}`);
    }

    try {
      formulasDoc = readYaml(path.join(dir, "formulas.yaml"));
    } catch (e) {
      entry.errors.push(`formulas.yaml inválido: ${e.message}`);
    }

    try {
      magsDoc = readYaml(path.join(dir, "magnitudes.yaml"));
    } catch (e) {
      entry.errors.push(`magnitudes.yaml inválido: ${e.message}`);
    }

    // validaciones cruzadas
    if (formulasDoc && magsDoc) {
      const { errors, warnings } = validateFormulasVsMagnitudes(formulasDoc, magsDoc);
      entry.errors.push(...errors);
      entry.warnings.push(...warnings);
    }

    // opcional: coherencia meta.id vs carpeta
    if (meta?.id) {
      const folder = path.basename(dir);
      if (meta.id !== folder) {
        entry.warnings.push(`meta.id="${meta.id}" no coincide con carpeta="${folder}"`);
      }
    } else {
      entry.warnings.push("meta.yaml sin id (recomendado).");
    }

    const ecount = entry.errors.length;
    const wcount = entry.warnings.length;

    report.totals.errors += ecount;
    report.totals.warnings += wcount;
    if (!ecount) report.totals.ok += 1;

    report.subtopics.push(entry);
  }

  // imprimir resumen
  console.log(`\n[V2 VALIDATE] Subtemas detectados: ${subtopics.length}`);
  console.log(`[V2 VALIDATE] OK: ${report.totals.ok}`);
  console.log(`[V2 VALIDATE] Errores: ${report.totals.errors}`);
  console.log(`[V2 VALIDATE] Warnings: ${report.totals.warnings}`);

  // imprimir errores/warnings por subtema (solo si hay)
  for (const s of report.subtopics) {
    if (s.errors.length || s.warnings.length) {
      console.log(`\n- ${s.path}`);
      for (const e of s.errors) console.log(`  [E] ${e}`);
      for (const w of s.warnings) console.log(`  [W] ${w}`);
    }
  }

  // reporte
  if (WRITE_REPORT) {
    const outPath = path.resolve(process.cwd(), "v2-validate-report.json");
    fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
    console.log(`\n[REPORT] Guardado en: ${outPath}`);
  }

  if (STRICT && report.totals.errors > 0) process.exit(1);
}

main();
