const GRAPH_REGISTRY_LOADERS = {
  aplicaciones: () => import("./aplicaciones/index.js"),
  "cantidad-de-movimiento": () => import("./cantidad-de-movimiento/index.js"),
  cinematica: () => import("./cinematica/index.js"),
  dinamica: () => import("./dinamica/index.js"),
  electromagnetismo: () => import("./electromagnetismo/index.js"),
  fluidos: () => import("./fluidos/index.js"),
  gravitacion: () => import("./gravitacion/index.js"),
  "mecanica-analitica": () => import("./mecanica-analitica/index.js"),
  ondas: () => import("./ondas/index.js"),
  oscilaciones: () => import("./oscilaciones/index.js"),
  rotacion: () => import("./rotacion/index.js"),
  termodinamica: () => import("./termodinamica/index.js"),
  "trabajo-y-energia": () => import("./trabajo-y-energia/index.js"),
  "termodinamica-estadistica": () => import("./termodinamica-estadistica/index.js"),
};

const GRAPH_CATEGORY_ORDER = Object.keys(GRAPH_REGISTRY_LOADERS);
const graphRegistryCache = new Map();

function normalizeRoutePart(value) {
  return String(value || "").trim().replace(/^\/+|\/+$/g, "");
}

export function inferGraphCategoryFromRoute(...values) {
  const haystack = values
    .map(normalizeRoutePart)
    .filter(Boolean)
    .join("/")
    .toLowerCase();

  if (!haystack) return null;

  return (
    GRAPH_CATEGORY_ORDER.find((category) =>
      haystack.split("/").includes(category)
    ) || null
  );
}

function pickGraphsExport(module) {
  return (
    module?.graphs ||
    module?.termodinamicaGraphs ||
    module?.default ||
    {}
  );
}

export async function loadGraphRegistryCategory(category) {
  const normalizedCategory = normalizeRoutePart(category).toLowerCase();
  const loader = GRAPH_REGISTRY_LOADERS[normalizedCategory];
  if (!loader) return {};

  if (!graphRegistryCache.has(normalizedCategory)) {
    graphRegistryCache.set(
      normalizedCategory,
      loader().then(pickGraphsExport).catch((error) => {
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.error(`Unable to load graph registry: ${normalizedCategory}`, error);
        }
        return {};
      })
    );
  }

  return graphRegistryCache.get(normalizedCategory);
}

export async function loadGraphRegistryForRoute(...values) {
  const category = inferGraphCategoryFromRoute(...values);
  if (!category) return {};
  return loadGraphRegistryCategory(category);
}

export async function loadAllGraphRegistries() {
  const registries = await Promise.all(
    GRAPH_CATEGORY_ORDER.map((category) => loadGraphRegistryCategory(category))
  );
  return Object.assign({}, ...registries);
}
