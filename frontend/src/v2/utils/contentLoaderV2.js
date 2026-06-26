import yaml from "js-yaml";
import { getUiLanguage, normalizeUiLanguage } from "./uiLanguage";

const yamlModules = import.meta.glob("/src/data_v2_i18n/**/*.yaml", { query: "?raw", import: "default" });

const mdModules = import.meta.glob("/src/data_v2_i18n/**/*.md", { query: "?raw", import: "default" });

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

function buildBaseCandidates(fullPath) {
  const clean = String(fullPath || "").replace(/^\/+|\/+$/g, "");
  return [
    { base: `/src/data_v2_i18n/${clean}`, i18n: true },
  ];
}

function normalizePath(p) {
  return String(p || "")
    .replace(/\\/g, "/")
    .replace(/\/+/g, "/")
    .replace(/^\/+|\/+$/g, "");
}

function resolveImporter(map, fullPath) {
  if (!map || !fullPath) return null;
  const target = normalizePath(fullPath);

  // 1. Exact match
  for (const key of Object.keys(map)) {
    if (normalizePath(key) === target) return map[key];
  }

  // 2. Suffix match (fallback with strict prefix boundary)
  const targetSuffix = `/${target}`;
  for (const key of Object.keys(map)) {
    if (normalizePath(key).endsWith(targetSuffix)) return map[key];
  }

  return null;
}

async function loadRaw(map, fullPath) {
  const importer = resolveImporter(map, fullPath);
  if (!importer) return null;

  try {
    return await importer();
  } catch {
    return null;
  }
}

async function loadYamlWithFallback(baseCandidates, fileName) {
  for (const candidate of baseCandidates) {
    const raw = await loadRaw(yamlModules, `${candidate.base}/${fileName}.yaml`);
    if (raw != null) return { raw, resolvedPath: `${candidate.base}/${fileName}.yaml` };
  }
  return { raw: null, resolvedPath: null };
}

async function loadYamlDocWithFallback(baseCandidates, fileName, lang) {
  for (const candidate of baseCandidates) {
    const fullPath = `${candidate.base}/${fileName}.yaml`;
    const raw = await loadRaw(yamlModules, fullPath);
    
    if (raw == null) continue;

    try {
      const parsed = yaml.load(raw);
      return { doc: localizeDeep(parsed, lang), resolvedPath: fullPath };
    } catch (error) {
      console.warn(`[contentLoaderV2] Invalid YAML in ${fullPath}:`, error?.message || error);
    }
  }

  return { doc: null, resolvedPath: null };
}

async function loadMarkdownWithFallback(baseCandidates, fileName, lang) {
  for (const candidate of baseCandidates) {
    const tries = [];

    if (candidate.i18n) {
      if (lang === "en") tries.push(`${candidate.base}/${fileName}.en.md`);
      tries.push(`${candidate.base}/${fileName}.md`);
    } else {
      tries.push(`${candidate.base}/${fileName}.md`);
    }

    for (const p of tries) {
      const raw = await loadRaw(mdModules, p);
      if (raw != null) return { raw, resolvedPath: p };
    }
  }

  return { raw: null, resolvedPath: null };
}

export async function getLeafMetaV2(fullPath, options = {}) {
  const lang = getPreferredLang(options?.lang);
  const baseCandidates = buildBaseCandidates(fullPath);
  const metaResult = await loadYamlDocWithFallback(baseCandidates, "meta", lang);
  if (!metaResult.doc) return null;
  if (metaResult.doc && typeof metaResult.doc === "object" && !Array.isArray(metaResult.doc)) {
    return {
      ...metaResult.doc,
      _resolvedPath: metaResult.resolvedPath || "",
    };
  }
  return metaResult.doc;
}

// kind is kept for compatibility.
export async function getSubtopicV2(kind, fullPath, options = {}) {
  const lang = getPreferredLang(options?.lang);
  const baseCandidates = buildBaseCandidates(fullPath);


  const [
    metaResult,
    teoriaResult,
    procedimientoResult,
    modelosResult,
    erroresResult,
    ejemplosResult,
    formulasResult,
    magsResult,
    interpretacionResult,
    aplicacionesResult,
    aplicacionesFisicasResult,
    practicaResult,
    historiaResult,
  ] = await Promise.all([
    loadYamlDocWithFallback(baseCandidates, "meta", lang),
    loadMarkdownWithFallback(baseCandidates, "teoria", lang),
    loadMarkdownWithFallback(baseCandidates, "procedimiento", lang),
    loadMarkdownWithFallback(baseCandidates, "modelos", lang),
    loadMarkdownWithFallback(baseCandidates, "errores", lang),
    loadMarkdownWithFallback(baseCandidates, "ejemplos", lang),
    loadYamlDocWithFallback(baseCandidates, "formulas", lang),
    loadYamlDocWithFallback(baseCandidates, "magnitudes", lang),
    loadYamlDocWithFallback(baseCandidates, "interpretacion", lang),
    loadMarkdownWithFallback(baseCandidates, "aplicaciones", lang),
    loadMarkdownWithFallback(baseCandidates, "aplicaciones_fisicas", lang),
    loadMarkdownWithFallback(baseCandidates, "practica", lang),
    loadMarkdownWithFallback(baseCandidates, "historia", lang),
  ]);

  const interpretationDoc = interpretacionResult.doc || null;

  if (!metaResult.doc) return null;

  const meta =
    metaResult.doc && typeof metaResult.doc === "object" && !Array.isArray(metaResult.doc)
      ? { ...metaResult.doc, _resolvedPath: metaResult.resolvedPath || "" }
      : metaResult.doc || null;
  const formulasDoc = formulasResult.doc || null;
  const magnitudesDoc = magsResult.doc || null;

  return {
    meta,
    teoria: teoriaResult.raw || "",
    procedimiento: procedimientoResult.raw || "",
    modelos: modelosResult.raw || "",
    errores: erroresResult.raw || "",
    ejemplos: ejemplosResult.raw || "",
    aplicaciones: aplicacionesResult.raw || aplicacionesFisicasResult.raw || "",
    aplicaciones_fisicas: aplicacionesFisicasResult.raw || "",
    practica: practicaResult.raw || "",
    historia: historiaResult.raw || "",
    formulasDoc,
    magnitudesDoc,
    interpretationDoc,
    _resolvedLanguage: lang,
    _resolvedMetaPath: metaResult.resolvedPath,
  };
}
