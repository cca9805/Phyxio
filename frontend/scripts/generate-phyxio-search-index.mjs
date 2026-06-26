import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";

const ROOT = path.resolve(process.cwd());
const MAP_PATH = path.join(ROOT, "src", "v2", "map", "phyxio-map.yaml");
const DATA_ROOT = path.join(ROOT, "src", "data_v2_i18n");
const OUT_DIR = path.join(ROOT, "src", "v2", "search");
const OUT_PATH = path.join(OUT_DIR, "phyxioSearchIndex.generated.json");

function readYaml(filePath, fallback = null) {
  try {
    if (!fs.existsSync(filePath)) return fallback;
    return yaml.load(fs.readFileSync(filePath, "utf8")) ?? fallback;
  } catch {
    return fallback;
  }
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function listFromDoc(doc, keys = []) {
  if (Array.isArray(doc)) return doc;
  if (!doc || typeof doc !== "object") return [];

  for (const key of keys) {
    if (Array.isArray(doc[key])) return doc[key];
  }

  if (doc.default && typeof doc.default === "object") {
    return listFromDoc(doc.default, keys);
  }

  return [];
}

function textValue(value, lang = "es") {
  if (value == null) return "";
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map((item) => textValue(item, lang)).filter(Boolean).join(" ");
  if (typeof value === "object") {
    return (
      textValue(value[lang], lang) ||
      textValue(value.es, lang) ||
      textValue(value.en, lang) ||
      ""
    );
  }
  return "";
}

function cleanRelPath(value) {
  return String(value || "").replace(/^\/+|\/+$/g, "");
}

function labelFromId(id) {
  return String(id || "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function walkMap(node, parentPath = "", ancestors = [], out = []) {
  if (!node || typeof node !== "object") return out;

  const relPath = cleanRelPath(node.ruta_relativa || node.path || parentPath);
  const id = node.id || relPath.split("/").pop() || "phyxio";
  const current = {
    id,
    type: node.type || (asArray(node.children).length ? "node" : "leaf"),
    route: relPath,
    title: {
      es: textValue(node.titulo || node.title || node.nombre || id, "es") || labelFromId(id),
      en: textValue(node.titulo_en || node.title_en || node.title || node.titulo || node.nombre || id, "en") || labelFromId(id),
    },
    description: {
      es: textValue(node.descripcion || node.description, "es"),
      en: textValue(node.description_en || node.description || node.descripcion, "en"),
    },
    icon: node.icon || node.emoji || "",
    levels: node.niveles || {},
    graphTypes: asArray(node.graficos),
    physicalRole: {
      es: textValue(node.physical_role, "es"),
      en: textValue(node.physical_role, "en"),
    },
    ancestors,
    order: Number(node.orden || 0),
  };

  if (relPath || current.type === "root") out.push(current);

  const nextAncestors = relPath
    ? [...ancestors, { id, route: relPath, title: current.title }]
    : ancestors;

  for (const child of asArray(node.children)) {
    const childPath = cleanRelPath(child.ruta_relativa || child.path || child.id);
    const resolvedChildPath = childPath.includes("/") ? childPath : cleanRelPath([relPath, childPath].filter(Boolean).join("/"));
    walkMap({ ...child, ruta_relativa: child.ruta_relativa || resolvedChildPath }, resolvedChildPath, nextAncestors, out);
  }

  return out;
}

function loadLeafData(route) {
  const base = path.join(DATA_ROOT, ...route.split("/"));
  const meta = readYaml(path.join(base, "meta.yaml"), {});
  const formulasDoc = readYaml(path.join(base, "formulas.yaml"), {});
  const magnitudesDoc = readYaml(path.join(base, "magnitudes.yaml"), {});
  const formulas = listFromDoc(formulasDoc, ["formulas", "formulae", "items"]);
  const magnitudes = listFromDoc(magnitudesDoc, ["magnitudes", "quantities", "variables", "items"]);
  return { meta, formulas, magnitudes };
}

function compactFormula(formula) {
  return {
    id: formula.id || "",
    title: {
      es: textValue(formula.title || formula.nombre || formula.name, "es"),
      en: textValue(formula.title || formula.nombre || formula.name, "en"),
    },
    equation: formula.equation || formula.expression || "",
    latex: formula.latex || "",
    variables: asArray(formula.variables || formula.magnitudes || formula.inputs || formula.outputs).map((item) =>
      typeof item === "string" ? item : item?.id || item?.symbol || item?.magnitude_id || ""
    ).filter(Boolean),
    tags: asArray(formula.interpretation_tags || formula.tags),
  };
}

function compactMagnitude(magnitude) {
  return {
    id: magnitude.id || "",
    symbol: magnitude.symbol || magnitude.simbolo || magnitude.latex || "",
    title: {
      es: textValue(magnitude.nombre || magnitude.name || magnitude.title, "es"),
      en: textValue(magnitude.nombre || magnitude.name || magnitude.title, "en"),
    },
    unit: magnitude.unidad_si || magnitude.si_unit || magnitude.unit_si || magnitude.unit || "",
    dimension: magnitude.dimension || magnitude.dimension_si || "",
  };
}

function unique(values) {
  return Array.from(new Set(values.map((value) => String(value || "").trim()).filter(Boolean)));
}

function buildSearchText(entry, lang) {
  const formulas = entry.formulas.flatMap((formula) => [
    formula.id,
    formula.title?.[lang],
    formula.equation,
    formula.latex,
    ...formula.variables,
    ...formula.tags,
  ]);
  const magnitudes = entry.magnitudes.flatMap((magnitude) => [
    magnitude.id,
    magnitude.symbol,
    magnitude.title?.[lang],
    magnitude.unit,
    magnitude.dimension,
  ]);
  const ancestors = entry.ancestors.map((ancestor) => ancestor.title?.[lang] || ancestor.id);
  return unique([
    entry.id,
    entry.route,
    entry.title?.[lang],
    entry.description?.[lang],
    entry.physicalRole?.[lang],
    ...entry.tags?.[lang] || [],
    ...entry.graphTypes || [],
    ...ancestors,
    ...formulas,
    ...magnitudes,
  ]).join(" ");
}

function enrichNode(node) {
  if (node.type !== "leaf" || !node.route) {
    return {
      ...node,
      tags: { es: [], en: [] },
      prerequisites: [],
      formulas: [],
      magnitudes: [],
      searchText: {
        es: buildSearchText({ ...node, tags: { es: [], en: [] }, formulas: [], magnitudes: [] }, "es"),
        en: buildSearchText({ ...node, tags: { es: [], en: [] }, formulas: [], magnitudes: [] }, "en"),
      },
    };
  }

  const { meta, formulas, magnitudes } = loadLeafData(node.route);
  const tags = {
    es: unique([...(asArray(meta?.tags?.es)), ...(asArray(meta?.tags).filter((tag) => typeof tag === "string"))]),
    en: unique([...(asArray(meta?.tags?.en)), ...(asArray(meta?.tags).filter((tag) => typeof tag === "string"))]),
  };
  const entry = {
    ...node,
    title: {
      es: textValue(meta?.nombre || meta?.title || meta?.titulo, "es") || node.title.es,
      en: textValue(meta?.nombre || meta?.title || meta?.titulo || meta?.title_en, "en") || node.title.en,
    },
    description: {
      es: textValue(meta?.descripcion || meta?.description, "es") || node.description.es,
      en: textValue(meta?.description_en || meta?.description || meta?.descripcion, "en") || node.description.en,
    },
    tags,
    prerequisites: asArray(meta?.prerequisitos || meta?.prerequisites).map(cleanRelPath),
    graphTypes: asArray(meta?.graficos || meta?.graphs || node.graphTypes),
    formulas: formulas.map(compactFormula).filter((formula) => formula.id),
    magnitudes: magnitudes.map(compactMagnitude).filter((magnitude) => magnitude.id),
  };

  return {
    ...entry,
    searchText: {
      es: buildSearchText(entry, "es"),
      en: buildSearchText(entry, "en"),
    },
  };
}

const map = readYaml(MAP_PATH, {});
const root = Array.isArray(map?.root)
  ? { id: "phyxio", type: "root", ruta_relativa: "", children: map.root }
  : map?.root;
const entries = walkMap(root).map(enrichNode);
const leafCount = entries.filter((entry) => entry.type === "leaf").length;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(
  OUT_PATH,
  `${JSON.stringify({
    version: 1,
    generatedAt: new Date().toISOString(),
    source: "phyxio-map.yaml + data_v2_i18n",
    stats: {
      entries: entries.length,
      leafs: leafCount,
    },
    entries,
  }, null, 2)}\n`,
  "utf8"
);

console.log(`Generated ${path.relative(ROOT, OUT_PATH)} (${entries.length} entries, ${leafCount} leafs).`);
