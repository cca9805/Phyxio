#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const ROOT = path.resolve(process.cwd(), "src", "data_v2");
const MAP_PATH = path.resolve(process.cwd(), "src", "v2", "map", "phyxio-map.yaml");

const MAP_BY_ROUTE = (() => {
  try {
    const raw = fs.readFileSync(MAP_PATH, "utf8");
    const map = yaml.load(raw) || {};
    const entries = [];

    const walk = (node) => {
      if (!node || typeof node !== "object") return;
      if (node.ruta_relativa) entries.push(node);
      if (Array.isArray(node.children)) {
        for (const child of node.children) walk(child);
      }
    };

    walk(map?.root);
    return new Map(entries.map((entry) => [String(entry.ruta_relativa || "").replace(/^\/+|\/+$/g, ""), entry]));
  } catch (err) {
    console.warn("[WARN] No se pudo cargar phyxio-map.yaml para completar metas:", err.message);
    return new Map();
  }
})();

function getMapDataByRoute(rel) {
  if (!rel) return null;
  return MAP_BY_ROUTE.get(String(rel).replace(/^\/+|\/+$/g, "")) || null;
}

function normalizeList(value, fallback = []) {
  return Array.isArray(value) && value.length ? value : fallback;
}

function normalizePhysicalRole(value) {
  return value && typeof value === "object"
    ? value
    : { es: "", en: "" };
}

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
  const mapData = getMapDataByRoute(rel);

  ensure(meta, "version", 1);
  ensure(meta, "id", id);
  ensure(meta, "nombre", humanize(id));
  ensure(meta, "area", area || "fisica-clasica");
  ensure(meta, "bloque", bloque || "general");
  ensure(meta, "subbloque", subbloque || "general");
  ensure(meta, "ruta_relativa", rel);

  if (mapData) {
    if (meta.niveles == null || !Array.isArray(meta.niveles) || meta.niveles.length === 0) {
      meta.niveles = normalizeList(mapData.niveles, ["ESO", "Bachillerato"]);
    }
    if (meta.prerequisitos == null || !Array.isArray(meta.prerequisitos) || meta.prerequisitos.length === 0) {
      meta.prerequisitos = normalizeList(mapData.prerequisitos, []);
    }
    if (meta.tags == null || !Array.isArray(meta.tags) || meta.tags.length === 0) {
      meta.tags = normalizeList(mapData.tags, []);
    }
    if (meta.graficos == null || !Array.isArray(meta.graficos) || meta.graficos.length === 0) {
      meta.graficos = normalizeList(mapData.graficos, []);
    }
    if (meta.icon == null) meta.icon = mapData.icon || "";
    if (meta.physical_role == null) meta.physical_role = normalizePhysicalRole(mapData.physical_role);
    if (meta.dificultad == null && mapData.dificultad != null) {
      meta.dificultad = mapData.dificultad;
    }
    if (meta.tiempo_estimado_min == null && mapData.tiempo_estimado_min != null) {
      meta.tiempo_estimado_min = mapData.tiempo_estimado_min;
    }
  } else {
    ensure(meta, "niveles", ["ESO", "Bachillerato"]);
    ensure(meta, "prerequisitos", []);
    ensure(meta, "tags", []);
    ensure(meta, "graficos", []);
    ensure(meta, "descripcion", "(Pendiente)");
    ensure(meta, "description_en", "");
    ensure(meta, "physical_role", { es: "", en: "" });
    if (meta.dificultad == null) meta.dificultad = "";
    if (meta.tiempo_estimado_min == null) meta.tiempo_estimado_min = null;
  }

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
