/**
 * graficosLoader.js
 *
 * Carga `graficos.yaml` de un leaf y fusiona los metadatos semánticos
 * con las entradas del graph registry (que solo contienen wiring React).
 *
 * El registry mantiene: { type, graphType, component }
 * El YAML aporta:        { title, xAxis, yAxis, relation, physicalReading, ... }
 * El resultado fusionado es el objeto de gráfico completo que consume la UI.
 */

import yaml from "js-yaml";

const graficosRawModules = import.meta.glob(
  "/src/data_v2_i18n/**/graficos.yaml",
  { query: "?raw", import: "default" }
);

const cache = new Map();

/**
 * Carga e interpreta graficos.yaml desde la ruta relativa del leaf.
 * @param {string} leafRelPath  e.g. "fisica-clasica/mecanica/cantidad-de-movimiento/fundamentos/impulso"
 * @returns {Promise<object>}   Contenido parseado del graficos.yaml, o {} si no existe.
 */
export async function loadGraficosYaml(leafRelPath) {
  if (!leafRelPath) return {};
  if (cache.has(leafRelPath)) return cache.get(leafRelPath);

  const promise = (async () => {
    const key = `/src/data_v2_i18n/${leafRelPath}/graficos.yaml`;
    const loader = graficosRawModules[key];
    if (!loader) return {};
    try {
      const raw = await loader();
      return yaml.load(raw) ?? {};
    } catch {
      return {};
    }
  })();

  cache.set(leafRelPath, promise);
  return promise;
}

/**
 * Dada una entrada del registry (wiring puro) y los metadatos del graficos.yaml,
 * devuelve el objeto de gráfico fusionado que espera la UI.
 *
 * Los campos del registry tienen prioridad sobre el YAML para las claves de control
 * (component, type, graphType, id, graphId).
 * El YAML aporta todos los campos semánticos.
 *
 * @param {string}  leafId        e.g. "momento-lineal"
 * @param {string}  graphType     "Coord" | "Svg" | "Dcl"
 * @param {object}  registryEntry { type, graphType, component, ... }
 * @param {object}  graficosYaml  Contenido completo del graficos.yaml
 * @returns {object}
 */
export function mergeGraphEntry(leafId, graphType, registryEntry, graficosYaml) {
  const typeKey = graphType.toLowerCase(); // "coord" | "svg" | "dcl"
  const yamlSection = graficosYaml?.[typeKey] ?? {};

  // El YAML aporta semántica; el wiring aporta component/type/id.
  // Los campos de control del wiring tienen prioridad sobre el YAML,
  // pero los campos semánticos del YAML tienen prioridad sobre el wiring.
  const {
    component, Component, comp, view,
    type: wiringType,
    graphType: wiringGraphType,
    id: wiringId,
    graphId: wiringGraphId,
    ...wiringRest
  } = registryEntry ?? {};

  return {
    id: wiringId || `${leafId}-${graphType}`,
    graphId: wiringGraphId || `${leafId}-${graphType}`,
    recommendedTab: "graficas",
    ...wiringRest,
    ...yamlSection,
    component: component ?? Component ?? comp ?? view ?? undefined,
    type: wiringType || graphType,
    graphType: wiringGraphType || graphType,
  };
}

/**
 * Enriquece todas las entradas de un bloque de graficos (rawWiring) con los
 * metadatos del graficos.yaml del leaf correspondiente.
 *
 * Uso típico en graphRegistryLoader al hidratar el registry bajo demanda.
 *
 * @param {string} leafId
 * @param {string} leafRelPath
 * @param {object} rawWiring   { Coord?: {...}, Svg?: {...}, Dcl?: {...} }
 * @returns {Promise<object>}  Objeto enriquecido con los mismos tipos de clave
 */
export async function enrichGraphEntry(leafId, leafRelPath, rawWiring) {
  const graficosYaml = await loadGraficosYaml(leafRelPath);
  const result = {};
  for (const [graphType, entry] of Object.entries(rawWiring)) {
    result[graphType] = mergeGraphEntry(leafId, graphType, entry, graficosYaml);
  }
  return result;
}
