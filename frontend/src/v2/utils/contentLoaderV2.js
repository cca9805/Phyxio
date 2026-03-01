import yaml from "js-yaml";

function mergeGlobMaps(...maps) {
  return Object.assign({}, ...maps);
}

const metaModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2/**/meta.yaml", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2/**/meta.yaml", { query: "?raw", import: "default" })
);
const theoryModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2/**/teoria.md", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2/**/teoria.md", { query: "?raw", import: "default" })
);
const modelModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2/**/modelos.md", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2/**/modelos.md", { query: "?raw", import: "default" })
);
const errorsModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2/**/errores.md", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2/**/errores.md", { query: "?raw", import: "default" })
);
const examplesModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2/**/ejemplos.md", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2/**/ejemplos.md", { query: "?raw", import: "default" })
);
const formulasModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2/**/formulas.yaml", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2/**/formulas.yaml", { query: "?raw", import: "default" })
);
const magsModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2/**/magnitudes.yaml", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2/**/magnitudes.yaml", { query: "?raw", import: "default" })
);
const apliModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2/**/aplicaciones.md", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2/**/aplicaciones.md", { query: "?raw", import: "default" })
);
const histModules = mergeGlobMaps(
  import.meta.glob("/src/data_v2/**/historia.md", { query: "?raw", import: "default" }),
  import.meta.glob("../../data_v2/**/historia.md", { query: "?raw", import: "default" })
);

async function loadRaw(map, fullPath) {
  const importer = resolveImporter(map, fullPath);
  if (!importer) return null;
  try {
    return await importer();
  } catch {
    return null;
  }
}

function normalizePath(p) {
  return String(p || "")
    .replace(/\\/g, "/")
    .replace(/\/+/g, "/")
    .replace(/^\/+|\/+$/g, "");
}

function resolveImporter(map, fullPath) {
  if (!map || !fullPath) return null;

  if (map[fullPath]) return map[fullPath];

  // Fallback robusto: compara por sufijo normalizado para evitar
  // desajustes puntuales de clave en import.meta.glob.
  const target = normalizePath(fullPath);
  const targetSuffix = `/${target}`;

  for (const key of Object.keys(map)) {
    const nKey = normalizePath(key);
    if (nKey === target || nKey.endsWith(targetSuffix)) return map[key];
  }

  return null;
}

// fullPath esperado: "fisica-clasica/mecanica/cinematica/mru"
function basePath(fullPath) {
  const clean = String(fullPath || "").replace(/^\/+|\/+$/g, "");
  return `/src/data_v2/${clean}`;
}

// kind se deja por compatibilidad, pero no es necesario
export async function getSubtopicV2(kind, fullPath) {
  const base = basePath(fullPath);
  console.log(`[getSubtopicV2] Intentando cargar hoja: "${fullPath}" -> "${base}/meta.yaml"`);

  const [metaRaw, teoriaMd, modelosMd, erroresMd, ejemplosMd, formulasRaw, magsRaw, aplicacionesMd, historiaMd] =
    await Promise.all([
      loadRaw(metaModules, `${base}/meta.yaml`),
      loadRaw(theoryModules, `${base}/teoria.md`),
      loadRaw(modelModules, `${base}/modelos.md`),
      loadRaw(errorsModules, `${base}/errores.md`),
      loadRaw(examplesModules, `${base}/ejemplos.md`),
      loadRaw(formulasModules, `${base}/formulas.yaml`),
      loadRaw(magsModules, `${base}/magnitudes.yaml`),
      loadRaw(apliModules, `${base}/aplicaciones.md`),
      loadRaw(histModules, `${base}/historia.md`),
    ]);

  if (!metaRaw) {
    console.log(`[getSubtopicV2] No se encontró meta.yaml para: "${base}/meta.yaml"`);
    console.log(`[getSubtopicV2] Claves disponibles en metaModules:`, Object.keys(metaModules).slice(0, 10));
    return null;
  }

  console.log(`[getSubtopicV2] ✅ Encontrado meta.yaml para: "${fullPath}"`);
  console.log(`[getSubtopicV2] Archivos cargados:`, {
    meta: !!metaRaw,
    teoria: !!teoriaMd,
    modelos: !!modelosMd,
    errores: !!erroresMd,
    ejemplos: !!ejemplosMd,
    formulas: !!formulasRaw,
    magnitudes: !!magsRaw,
    aplicaciones: !!aplicacionesMd,
    historia: !!historiaMd,
  });

  const meta = metaRaw ? yaml.load(metaRaw) : null;
  const formulasDoc = formulasRaw ? yaml.load(formulasRaw) : null;
  const magnitudesDoc = magsRaw ? yaml.load(magsRaw) : null;

  return {
    meta,
    teoria: teoriaMd || "",
    modelos: modelosMd || "",
    errores: erroresMd || "",
    ejemplos: ejemplosMd || "",
    aplicaciones: aplicacionesMd || "",
    historia: historiaMd || "",
    formulasDoc,
    magnitudesDoc,
  };
}
