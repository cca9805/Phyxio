import yaml from "js-yaml";
import { getUiLanguage, normalizeUiLanguage } from "./uiLanguage";

function mergeGlobMaps(...maps) {
  return Object.assign({}, ...maps);
}

const yamlModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2_i18n/**/*.yaml", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2_i18n/**/*.yaml", { query: "?raw", import: "default" })
);

const mdModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2_i18n/**/*.md", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2_i18n/**/*.md", { query: "?raw", import: "default" })
);

function normalizePath(p) {
  return String(p || "")
    .replace(/\\/g, "/")
    .replace(/\/+/g, "/")
    .replace(/^\/+|\/+$/g, "");
}

function resolveImporter(map, fullPath) {
  if (!map || !fullPath) return null;
  if (map[fullPath]) return map[fullPath];

  const target = normalizePath(fullPath);
  const targetSuffix = `/${target}`;

  for (const key of Object.keys(map)) {
    const nKey = normalizePath(key);
    if (nKey === target || nKey.endsWith(targetSuffix)) return map[key];
  }

  return null;
}

async function loadRaw(map, key) {
  const importer = resolveImporter(map, key);
  if (!importer) return null;

  try {
    return await importer();
  } catch {
    return null;
  }
}

function isLangMap(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const hasEs = Object.prototype.hasOwnProperty.call(value, "es");
  const hasEn = Object.prototype.hasOwnProperty.call(value, "en");
  if (!hasEs && !hasEn) return false;
  const keys = Object.keys(value);
  return keys.every((k) => k === "es" || k === "en");
}

function localizeDeep(value, lang) {
  if (Array.isArray(value)) return value.map((item) => localizeDeep(item, lang));

  if (value && typeof value === "object") {
    if (isLangMap(value)) {
      const selected = value[lang] ?? value.es ?? value.en ?? "";
      return localizeDeep(selected, lang);
    }

    const out = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = localizeDeep(v, lang);
    }
    return out;
  }

  return value;
}

function getPreferredLang(langOverride) {
  if (langOverride) return normalizeUiLanguage(langOverride);
  return getUiLanguage();
}

function buildBaseCandidates(relPath) {
  const clean = relPath ? String(relPath).replace(/^\/+|\/+$/g, "") : "";
  return [
    { base: `/src/data_v2_i18n/${clean}`.replace(/\/+$/, ""), i18n: true },
  ];
}

function humanize(id) {
  return String(id || "")
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

function isSlugLike(text) {
  return /^[a-z0-9]+(?:[-_][a-z0-9]+)*$/.test(String(text || "").trim());
}

function pickReadableTitle(rawTitle, fallbackId) {
  const title = String(rawTitle || "").trim();
  const id = String(fallbackId || "").trim();
  if (!title) return humanize(id);
  if (title === id || isSlugLike(title)) return humanize(title);
  return title;
}

async function loadIndexWithFallback(baseCandidates) {
  for (const candidate of baseCandidates) {
    const p = `${candidate.base}/index.yaml`;
    const raw = await loadRaw(yamlModules, p);
    if (raw != null) return { raw, resolvedPath: p };
  }
  return { raw: null, resolvedPath: null };
}

async function loadIndexDocWithFallback(baseCandidates, lang) {
  for (const candidate of baseCandidates) {
    const p = `${candidate.base}/index.yaml`;
    const raw = await loadRaw(yamlModules, p);
    if (raw == null) continue;

    try {
      const parsed = yaml.load(raw) || {};
      return { doc: localizeDeep(parsed, lang), resolvedPath: p };
    } catch (error) {
      console.warn(`[indexLoaderV2] Invalid YAML in ${p}:`, error?.message || error);
    }
  }

  return { doc: null, resolvedPath: null };
}

async function loadOverviewWithFallback(baseCandidates, lang) {
  for (const candidate of baseCandidates) {
    const tries = [];

    if (candidate.i18n) {
      if (lang === "en") tries.push(`${candidate.base}/overview.en.md`);
      tries.push(`${candidate.base}/overview.md`);
    } else {
      tries.push(`${candidate.base}/overview.md`);
    }

    for (const p of tries) {
      const raw = await loadRaw(mdModules, p);
      if (raw != null) return raw;
    }
  }
  return null;
}

export async function loadV2Overview(relPath, options = {}) {
  const lang = getPreferredLang(options?.lang);
  const bases = buildBaseCandidates(relPath);
  return await loadOverviewWithFallback(bases, lang);
}

export async function loadV2IndexNode(relPath, options = {}) {
  const lang = getPreferredLang(options?.lang);
  const bases = buildBaseCandidates(relPath);

  console.log(`[loadV2IndexNode] Trying node: "${relPath}" (lang="${lang}")`);
  console.log("[loadV2IndexNode] Candidate bases:", bases.map((b) => b.base));

  const indexResult = await loadIndexDocWithFallback(bases, lang);
  if (!indexResult.doc) {
    console.log("[loadV2IndexNode] No index.yaml found for any candidate base");
    console.log("[loadV2IndexNode] Sample YAML keys:", Object.keys(yamlModules).slice(0, 10));
    return null;
  }

  const doc = indexResult.doc;
  const overview = (await loadOverviewWithFallback(bases, lang)) || "";

  let children = [];

  if (Array.isArray(doc.items)) {
    children = doc.items
      .filter((it) => it && (it.id || it.path))
      .map((it) => ({
        id: it.id || it.path,
        title: it.title || humanize(it.id || it.path),
        subtitle: it.subtitle || humanize(it.id || it.path),
        description: it.description || "",
        path: it.path || it.id,
        icon: it.icon || "",
        orden: it.orden,
        niveles: it.niveles || [],
      }))
      .sort((a, b) => (a.orden ?? 99999) - (b.orden ?? 99999));
  } else if (Array.isArray(doc.children)) {
    children = doc.children
      .filter((x) => x && (typeof x === "string" || (typeof x === "object" && x.id)))
      .map((child) => {
        if (typeof child === "string") {
          return {
            id: child,
            title: humanize(child),
            subtitle: humanize(child),
            path: child,
            description: "",
            icon: "",
            orden: 99999,
            niveles: [],
          };
        }

        return {
          id: child.id,
          title: pickReadableTitle(child.titulo, child.id),
          subtitle: child.subtitle || "",
          description: child.descripcion || "",
          path: child.id,
          icon: child.icon || "",
          orden: child.orden || 99999,
          niveles: child.niveles || [],
        };
      })
      .sort((a, b) => (a.orden ?? 99999) - (b.orden ?? 99999));
  }

  return {
    id: doc.id || relPath.split("/").filter(Boolean).pop(),
    title:
      pickReadableTitle(doc.title || doc.titulo, doc.id || relPath.split("/").filter(Boolean).pop()) ||
      humanize(doc.id || relPath.split("/").filter(Boolean).pop() || "Contenido"),
    description: overview || doc.description || "",
    children,
    _resolvedPath: indexResult.resolvedPath || "",
  };
}
