#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT = path.resolve(process.cwd(), "src", "data_v2", "contenido");

function walk(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

function humanize(id) {
  return id
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function ensure(obj, key, value) {
  if (obj[key] === undefined || obj[key] === null) {
    obj[key] = value;
  }
}

function fillMeta(metaPath) {
  const dir = path.dirname(metaPath);
  const rel = path.relative(ROOT, dir).replace(/\\/g, "/");
  const parts = rel.split("/");

  const [area, bloque, subbloque] = parts;

  const meta = yaml.load(fs.readFileSync(metaPath, "utf8")) || {};

  const id = path.basename(dir);

  ensure(meta, "version", 1);
  ensure(meta, "id", id);
  ensure(meta, "nombre", humanize(id));
  ensure(meta, "area", area || "fisica-clasica");
  ensure(meta, "bloque", bloque || "general");
  ensure(meta, "subbloque", subbloque || "general");
  ensure(meta, "ruta_relativa", rel);

  ensure(meta, "niveles", ["ESO", "Bachillerato"]);
  ensure(meta, "prerequisitos", []);
  ensure(meta, "tags", []);
  ensure(meta, "objetivos", []);
  ensure(meta, "suposiciones", []);

  fs.writeFileSync(metaPath, yaml.dump(meta, { lineWidth: 120 }), "utf8");
  console.log("[META]", rel);
}

function main() {
  console.log("[V2] Poblando meta.yaml…");
  walk(ROOT, file => {
    if (file.endsWith("meta.yaml")) {
      fillMeta(file);
    }
  });
  console.log("[V2] Meta completados.");
}

main();
