// frontend/scripts/v2-seed-all-leaves.cjs
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT = path.resolve(__dirname, "../src/data_v2/contenido");

const argv = process.argv.slice(2);
const OVERWRITE = argv.includes("--overwrite");

const LEAF_FILES = [
  "teoria.md",
  "formulas.yaml",
  "errores.md",
  "ejemplos.md",
  "aplicaciones.md",
  "historia.md",
  "modelos.md",
  "magnitudes.yaml",
];

function exists(p) {
  try { fs.accessSync(p); return true; } catch { return false; }
}

function readText(p) {
  return fs.readFileSync(p, "utf8");
}

function writeText(p, s) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, s, "utf8");
}

function walkDirs(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    out.push(d);
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) stack.push(path.join(d, e.name));
    }
  }
  return out;
}

function loadMeta(dir) {
  const p = path.join(dir, "meta.yaml");
  if (!exists(p)) return null;
  try {
    return yaml.load(readText(p)) || {};
  } catch {
    return {};
  }
}

function isLeaf(dir) {
  return exists(path.join(dir, "meta.yaml"));
}

function normalizeSubtitle(meta) {
  // Si meta.subtitle no existe, intentamos extraer acrónimo de nombre: "... (MRU)"
  if (meta.subtitle) return meta.subtitle;
  const name = meta.nombre || meta.title || "";
  const m = /\(([^)]+)\)\s*$/.exec(name);
  return m ? m[1].trim() : "";
}

function leafTemplateMarkdown(meta, kind) {
  const nombre = meta.nombre || meta.title || meta.id || "Subtema";
  const subtitle = normalizeSubtitle(meta);
  const header = subtitle ? `# ${nombre}\n\n> **${subtitle}**\n\n` : `# ${nombre}\n\n`;
  if (kind === "teoria") {
    return header + [
      "## Idea clave",
      "- (Escribe aquí una frase corta que el alumno pueda repetir).",
      "",
      "## Conceptos",
      "- **Definición 1:** ...",
      "- **Definición 2:** ...",
      "",
      "## Fórmulas",
      "> Las fórmulas se muestran en la pestaña **Calculadoras** (formulas.yaml), aquí solo explicamos su significado.",
      "",
      "## Interpretación gráfica",
      "- Qué representa x(t), v(t), a(t) en este tema.",
      "",
      "## Unidades y magnitudes",
      "- Lista de magnitudes (x, v, t, …) y unidades SI.",
      "",
      "## Checklist",
      "- [ ] Sé identificar las variables.",
      "- [ ] Sé elegir la fórmula adecuada.",
      "- [ ] Sé comprobar unidades.",
      "",
    ].join("\n");
  }
  if (kind === "errores") {
    return header + [
      "## Errores comunes",
      "### 1) Error típico",
      "- **Qué se suele hacer mal:** ...",
      "- **Por qué está mal:** ...",
      "- **Cómo evitarlo:** ...",
      "",
      "### 2) Signos / unidades",
      "- ...",
      "",
    ].join("\n");
  }
  if (kind === "ejemplos") {
    return header + [
      "## Ejemplos resueltos",
      "### Ejemplo 1",
      "- **Enunciado:** ...",
      "- **Datos:** ...",
      "",
      "**Fórmula:** ...",
      "",
      "**Sustitución:** ...",
      "",
      "**Resultado:** ...",
      "",
      "**Comprobación rápida (unidades / sentido físico):** ...",
      "",
    ].join("\n");
  }
  if (kind === "aplicaciones") {
    return header + [
      "## Aplicaciones en la vida real",
      "- Aplicación 1: ...",
      "- Aplicación 2: ...",
      "",
      "## Conexión con tecnología / ingeniería",
      "- ...",
      "",
    ].join("\n");
  }
  if (kind === "historia") {
    return header + [
      "## Historia y anécdotas",
      "- Científico/a o hito: ...",
      "- Curiosidad: ...",
      "",
    ].join("\n");
  }
  if (kind === "modelos") {
    return header + [
      "## Modelo y supuestos",
      "- Supuesto 1: ...",
      "- Supuesto 2: ...",
      "",
      "## Validez del modelo",
      "- Cuándo funciona bien:",
      "- Cuándo falla:",
      "",
    ].join("\n");
  }
  return header + "Contenido pendiente.\n";
}

function leafTemplateFormulasYaml(meta) {
  const id = meta.id || path.basename(meta.ruta_relativa || "") || "tema";
  const title = meta.nombre || meta.title || id;

  return yaml.dump({
    version: 1,
    topic: { id, title: String(title) },
    variables: [],
    formulas: [],
    ui: {
      default_formula: null,
      groups: [{ title: "Básicas", items: [] }],
    },
  }, { lineWidth: 120 });
}

function leafTemplateMagnitudesYaml() {
  return yaml.dump({
    version: 1,
    magnitudes: [],
  }, { lineWidth: 120 });
}

function findLeafById(targetId) {
  for (const d of walkDirs(ROOT)) {
    if (!isLeaf(d)) continue;
    const meta = loadMeta(d);
    if ((meta && meta.id) === targetId) return d;
  }
  return null;
}

function readLeafTemplatesFrom(dir) {
  const out = {};
  for (const f of LEAF_FILES) {
    const p = path.join(dir, f);
    if (exists(p)) out[f] = readText(p);
  }
  return out;
}

function seedLeaf(dir, templatesByFile) {
  const meta = loadMeta(dir) || {};
  const rel = path.relative(ROOT, dir).replace(/\\/g, "/");

  for (const f of LEAF_FILES) {
    const dst = path.join(dir, f);
    if (exists(dst) && !OVERWRITE) continue;

    // Si tenemos plantilla específica por archivo (MRU/MRUA), úsala
    if (templatesByFile && templatesByFile[f]) {
      writeText(dst, templatesByFile[f]);
      continue;
    }

    // Si no, usa plantillas genéricas
    if (f === "formulas.yaml") writeText(dst, leafTemplateFormulasYaml(meta));
    else if (f === "magnitudes.yaml") writeText(dst, leafTemplateMagnitudesYaml());
    else if (f === "teoria.md") writeText(dst, leafTemplateMarkdown(meta, "teoria"));
    else if (f === "errores.md") writeText(dst, leafTemplateMarkdown(meta, "errores"));
    else if (f === "ejemplos.md") writeText(dst, leafTemplateMarkdown(meta, "ejemplos"));
    else if (f === "aplicaciones.md") writeText(dst, leafTemplateMarkdown(meta, "aplicaciones"));
    else if (f === "historia.md") writeText(dst, leafTemplateMarkdown(meta, "historia"));
    else if (f === "modelos.md") writeText(dst, leafTemplateMarkdown(meta, "modelos"));
  }

  console.log("[V2 SEED LEAF]", rel);
}

(function main() {
  if (!exists(ROOT)) {
    console.error("No existe ROOT:", ROOT);
    process.exit(1);
  }

  const mruDir = findLeafById("mru");
  const mruaDir = findLeafById("mrua");

  const MRU_TPL = mruDir ? readLeafTemplatesFrom(mruDir) : null;
  const MRUA_TPL = mruaDir ? readLeafTemplatesFrom(mruaDir) : null;

  const leaves = walkDirs(ROOT).filter(isLeaf);
  console.log("[V2 SEED] Hojas detectadas:", leaves.length);

  for (const d of leaves) {
    const meta = loadMeta(d) || {};
    const id = meta.id;

    if (id === "mru" && MRU_TPL) seedLeaf(d, MRU_TPL);
    else if (id === "mrua" && MRUA_TPL) seedLeaf(d, MRUA_TPL);
    else seedLeaf(d, null);
  }

  console.log("[V2 SEED] OK");
})();
