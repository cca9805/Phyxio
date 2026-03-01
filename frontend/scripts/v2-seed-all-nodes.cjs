// frontend/scripts/v2-seed-all-nodes.cjs
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT = path.resolve(__dirname, "../src/data_v2/contenido");
const argv = process.argv.slice(2);
const OVERWRITE = argv.includes("--overwrite");

function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }
function readText(p) { return fs.readFileSync(p, "utf8"); }
function writeText(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s, "utf8"); }

function humanize(id) {
  return String(id || "")
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map(w => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function walkDirs(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const d = stack.pop();
    out.push(d);
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) if (e.isDirectory()) stack.push(path.join(d, e.name));
  }
  return out;
}

function isLeaf(dir) {
  return exists(path.join(dir, "meta.yaml"));
}

function isNode(dir) {
  if (isLeaf(dir)) return false;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.some(e => e.isDirectory());
}

function extractSubtitle(title) {
  const m = /\(([^)]+)\)\s*$/.exec(String(title || ""));
  return m ? m[1].trim() : "";
}

function seedNode(dir) {
  const rel = path.relative(ROOT, dir).replace(/\\/g, "/");
  const id = rel.split("/").filter(Boolean).pop() || "fisica";
  const indexPath = path.join(dir, "index.yaml");
  const overviewPath = path.join(dir, "overview.md");

  // index.yaml
  if (!exists(indexPath) || OVERWRITE) {
    let doc = null;

    if (exists(indexPath)) {
      try { doc = yaml.load(readText(indexPath)) || {}; } catch { doc = {}; }
    } else {
      doc = {};
    }

    doc.id = doc.id || id;
    doc.title = doc.title || humanize(id);
    doc.subtitle = doc.subtitle ?? extractSubtitle(doc.title) ?? "";
    doc.description = doc.description || "";

    doc.items = Array.isArray(doc.items) ? doc.items : [];

    writeText(indexPath, yaml.dump(doc, { lineWidth: 120 }));
    console.log("[V2 SEED NODE] index.yaml", rel);
  } else {
    // si existe, al menos garantizar subtitle si falta
    try {
      const doc = yaml.load(readText(indexPath)) || {};
      if (doc.subtitle == null) {
        doc.subtitle = extractSubtitle(doc.title || "") || "";
        writeText(indexPath, yaml.dump(doc, { lineWidth: 120 }));
        console.log("[V2 SEED NODE] subtitle añadido", rel);
      }
    } catch {}
  }

  // overview.md
  if (!exists(overviewPath) || OVERWRITE) {
    const title = (() => {
      try {
        const doc = yaml.load(readText(indexPath)) || {};
        return doc.title || humanize(id);
      } catch {
        return humanize(id);
      }
    })();

    const md = [
      `# ${title}`,
      "",
      "Describe aquí (2–6 líneas) qué abarca este bloque y qué aprenderá el alumno.",
      "",
      "## Qué encontrarás aquí",
      "- …",
      "- …",
      "",
    ].join("\n");

    writeText(overviewPath, md);
    console.log("[V2 SEED NODE] overview.md", rel);
  }
}

(function main() {
  if (!exists(ROOT)) {
    console.error("No existe ROOT:", ROOT);
    process.exit(1);
  }

  const dirs = walkDirs(ROOT).filter(isNode);
  console.log("[V2 SEED] Nodos detectados:", dirs.length);

  for (const d of dirs) seedNode(d);

  console.log("[V2 SEED] OK");
})();
