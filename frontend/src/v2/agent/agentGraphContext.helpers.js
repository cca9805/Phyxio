import { loadGraphRegistryForRoute } from "../components/graphs/graphRegistryLoader.js";
import {
  normalizeStringArray,
  pickValue,
  resolveLocalizedValue,
} from "./normalizeLeafContext";

const AGENT_MOTION_ID_ALIASES = {
  "rodadura-cinematica-sin-deslizamiento": "rodadura-sin-deslizamiento",
  "diagramas-decuerpo-libre": "diagramas-cuerpo-libre",
};

export function graphContextMatchesSelection(
  activeGraphContext,
  selectedGraphType
) {
  if (!activeGraphContext || !selectedGraphType) return false;

  const activeType = String(
    activeGraphContext.type ||
      activeGraphContext.graphType ||
      activeGraphContext.id ||
      ""
  ).toLowerCase();

  const selectedType = String(selectedGraphType || "").toLowerCase();

  return activeType === selectedType;
}

export function normalizeAgentGraphType(value) {
  const normalized = String(value || "")
    .trim()
    .toLowerCase();

  if (!normalized) return null;

  if (
    normalized === "coord" ||
    normalized.includes("coord") ||
    normalized.includes("coordenada")
  ) {
    return "Coord";
  }

  if (
    normalized === "dcl" ||
    normalized.includes("dcl") ||
    normalized.includes("diagrama de cuerpo libre") ||
    normalized.includes("cuerpo libre")
  ) {
    return "Dcl";
  }

  if (
    normalized === "svg" ||
    normalized.includes("svg") ||
    normalized.includes("escena")
  ) {
    return "Svg";
  }

  return null;
}

export function getGraphTypeFromGraph(graph) {
  if (!graph) return null;

  if (typeof graph === "string") {
    return normalizeAgentGraphType(graph);
  }

  return normalizeAgentGraphType(
    graph.type ||
      graph.graphType ||
      graph.kind ||
      graph.renderer ||
      graph.component ||
      graph.id ||
      graph.title ||
      graph.name ||
      graph.label
  );
}

export function getGraphTypeFromSearch(search) {
  const params = new URLSearchParams(search || "");

  return normalizeAgentGraphType(
    params.get("graph") ||
      params.get("graphType") ||
      params.get("graph_type") ||
      params.get("selectedGraphType") ||
      params.get("selected_graph_type") ||
      params.get("activeGraphType") ||
      params.get("active_graph_type") ||
      params.get("tool") ||
      params.get("active_tool") ||
      params.get("view") ||
      params.get("type")
  );
}

export function getGraphTypeFromLeafContext(context) {
  if (!context || typeof context !== "object") return null;

  const activeGraphContext =
    context.activeGraphContext || context.active_graph_context || null;

  return (
    normalizeAgentGraphType(
      activeGraphContext?.type ||
        activeGraphContext?.graphType ||
        activeGraphContext?.id
    ) ||
    normalizeAgentGraphType(
      context.selectedGraphType || context.selected_graph_type
    ) ||
    normalizeAgentGraphType(
      context.activeGraphType || context.active_graph_type
    ) ||
    normalizeAgentGraphType(context.active_tool || context.activeTool) ||
    null
  );
}

export function isGraphTabActive(location, context) {
  const params = new URLSearchParams(location?.search || "");

  const tab = String(
    params.get("tab") || context?.active_tab || context?.activeTab || ""
  ).toLowerCase();

  return tab.includes("graf") || tab.includes("graph");
}

export function buildFallbackGraphContextFromType(graphType, leafId) {
  const normalizedType = normalizeAgentGraphType(graphType);

  if (!normalizedType) return null;

  return {
    type: normalizedType,
    graphType: normalizedType,
    title:
      normalizedType === "Dcl"
        ? "Diagrama de cuerpo libre"
        : normalizedType === "Coord"
          ? "Grafica de coordenadas"
          : normalizedType === "Svg"
            ? "Representacion visual"
            : "Grafica del leaf",
    leafId,
    readingFocus:
      normalizedType === "Dcl"
        ? "forces"
        : normalizedType === "Coord"
          ? "leer ejes, pendiente, tendencia, signos y relacion entre magnitudes"
          : normalizedType === "Svg"
            ? "scene"
            : "general",
    forces: [],
    hiddenForces: [],
    graphWarnings: [],
    equilibriumHints: [],
    source: "PhyxioAgentPanel:auto-fallback",
  };
}

function pickContextValue(context, camelKey, snakeKey = null, fallback = null) {
  return (
    context?.[camelKey] ?? (snakeKey ? context?.[snakeKey] : undefined) ?? fallback
  );
}

function asContextArray(value) {
  return normalizeStringArray(value);
}

export function toAgentDisplayText(value, fallback = "", lang = "es") {
  const resolved = resolveLocalizedValue(value, lang);

  if (resolved === undefined || resolved === null || resolved === "") {
    return fallback;
  }

  if (typeof resolved === "string") return resolved;
  if (typeof resolved === "number" || typeof resolved === "boolean") {
    return String(resolved);
  }

  if (Array.isArray(resolved)) {
    return (
      resolved
        .map((item) => toAgentDisplayText(item, "", lang))
        .filter(Boolean)
        .join(", ") || fallback
    );
  }

  return fallback || "";
}

export function findGraphContextCandidate(graphs, graphType) {
  const normalizedGraphType = normalizeAgentGraphType(graphType);
  if (!normalizedGraphType || !Array.isArray(graphs)) return null;

  return (
    graphs.find((graph) => getGraphTypeFromGraph(graph) === normalizedGraphType) ||
    null
  );
}

export function mergeGraphContextWithContract(activeContext, contractContext) {
  if (!activeContext) return contractContext || null;
  if (!contractContext) return activeContext;

  const activeType = getGraphTypeFromGraph(activeContext);
  const contractType = getGraphTypeFromGraph(contractContext);

  if (activeType && contractType && activeType !== contractType) {
    return activeContext;
  }

  return {
    ...activeContext,
    ...contractContext,
    source: activeContext.source || contractContext.source,
  };
}

function normalizeGraphRegistryKey(value) {
  return String(value ?? "").trim().replace(/^\/+|\/+$/g, "");
}

function getLeafGraphKeyCandidates({
  leafId,
  leafContext,
  normalizedLeafContext,
}) {
  const candidates = [];
  const push = (value) => {
    const normalized = normalizeGraphRegistryKey(value);
    if (!normalized || candidates.includes(normalized)) return;
    candidates.push(normalized);
  };

  const route =
    leafContext?.route ||
    leafContext?.ruta_relativa ||
    leafContext?.path ||
    leafContext?.meta?.ruta_relativa ||
    normalizedLeafContext?.route ||
    null;

  push(route);
  push(leafId);
  push(normalizedLeafContext?.id);
  push(leafContext?.id);
  push(leafContext?.leaf_id);

  for (const value of [
    route,
    leafId,
    normalizedLeafContext?.id,
    leafContext?.id,
  ]) {
    const last = normalizeGraphRegistryKey(value).split("/").filter(Boolean).pop();
    push(last);
    push(AGENT_MOTION_ID_ALIASES[last]);
  }

  return candidates;
}

export async function resolveRegisteredGraphsForLeaf({
  leafId,
  leafContext,
  normalizedLeafContext,
}) {
  const candidates = getLeafGraphKeyCandidates({
    leafId,
    leafContext,
    normalizedLeafContext,
  });
  const graphRegistry = await loadGraphRegistryForRoute(...candidates);

  const graphEntry = candidates
    .map((candidate) => graphRegistry[candidate])
    .find((entry) => entry && typeof entry === "object");

  if (!graphEntry) return [];

  return ["Coord", "Svg", "Dcl"]
    .map((type) => {
      const graph =
        graphEntry[type] ||
        graphEntry[type.toLowerCase()] ||
        graphEntry[type.toUpperCase()];

      if (!graph || typeof graph !== "object") return null;

      return {
        ...graph,
        type: graph.type || graph.graphType || type,
        graphType: graph.graphType || graph.type || type,
      };
    })
    .filter(Boolean);
}

function getGraphIdentityKey(graph, index) {
  if (!graph || typeof graph !== "object") {
    return `primitive:${String(graph)}:${index}`;
  }

  const type = getGraphTypeFromGraph(graph) || "unknown";
  const id = toAgentDisplayText(
    graph.graphId ||
      graph.graph_id ||
      graph.id ||
      graph.title ||
      graph.name ||
      graph.label,
    index
  );

  return `${type}:${id}`;
}

export function mergeGraphListsByPriority(...graphLists) {
  const merged = [];
  const seen = new Set();
  const seenTypes = new Set();

  graphLists.forEach((graphList) => {
    if (!Array.isArray(graphList)) return;

    graphList.forEach((graph, index) => {
      if (!graph) return;

      const type = getGraphTypeFromGraph(graph);
      if (type && seenTypes.has(type)) return;

      const key = getGraphIdentityKey(graph, index);
      if (seen.has(key)) return;

      seen.add(key);
      if (type) seenTypes.add(type);
      merged.push(graph);
    });
  });

  return merged;
}

export function buildActiveGraphContextForAgent(
  rawContext,
  resolvedGraphTypeForAgent,
  leafId
) {
  if (!rawContext || typeof rawContext !== "object") return null;

  const type =
    normalizeAgentGraphType(
      rawContext.type ||
        rawContext.graphType ||
        rawContext.graph_type ||
        rawContext.id ||
        resolvedGraphTypeForAgent
    ) || null;

  return {
    type,
    graphType:
      normalizeAgentGraphType(
        rawContext.graphType ||
          rawContext.graph_type ||
          rawContext.type ||
          rawContext.id ||
          resolvedGraphTypeForAgent
      ) || type,

    id: rawContext.id || rawContext.graphId || rawContext.graph_id || null,
    graphId: rawContext.graphId || rawContext.graph_id || rawContext.id || null,
    title:
      rawContext.title ||
      rawContext.label ||
      rawContext.name ||
      (type ? `Grafica ${type}` : null),
    description: rawContext.description || rawContext.descripcion || null,
    leafId: rawContext.leafId || rawContext.leaf_id || leafId || null,

    xAxis: pickContextValue(rawContext, "xAxis", "x_axis"),
    yAxis: pickContextValue(rawContext, "yAxis", "y_axis"),
    xMagnitude: pickContextValue(rawContext, "xMagnitude", "x_magnitude"),
    yMagnitude: pickContextValue(rawContext, "yMagnitude", "y_magnitude"),
    relation:
      rawContext.relation ||
      rawContext.physicalRelation ||
      rawContext.physical_relation ||
      null,
    physicalReading: pickContextValue(
      rawContext,
      "physicalReading",
      "physical_reading"
    ),
    slopeMeaning: pickContextValue(rawContext, "slopeMeaning", "slope_meaning"),
    interceptMeaning: pickContextValue(
      rawContext,
      "interceptMeaning",
      "intercept_meaning"
    ),
    curvatureMeaning: pickContextValue(
      rawContext,
      "curvatureMeaning",
      "curvature_meaning"
    ),
    signMeaning: pickContextValue(rawContext, "signMeaning", "sign_meaning"),
    areaMeaning: pickContextValue(rawContext, "areaMeaning", "area_meaning"),
    domainMeaning: pickContextValue(
      rawContext,
      "domainMeaning",
      "domain_meaning"
    ),

    sceneId: pickContextValue(rawContext, "sceneId", "scene_id"),
    sceneLabel: pickContextValue(rawContext, "sceneLabel", "scene_label"),
    selectedObject: pickContextValue(
      rawContext,
      "selectedObject",
      "selected_object"
    ),
    selectedObjectId: pickContextValue(
      rawContext,
      "selectedObjectId",
      "selected_object_id"
    ),
    selectedVector: pickContextValue(
      rawContext,
      "selectedVector",
      "selected_vector"
    ),
    objects: asContextArray(rawContext.objects),
    mainObject: pickContextValue(rawContext, "mainObject", "main_object"),
    referenceFrame: pickContextValue(
      rawContext,
      "referenceFrame",
      "reference_frame"
    ),
    geometry: rawContext.geometry || null,
    interactions: rawContext.interactions || null,
    modelElements: asContextArray(
      rawContext.modelElements || rawContext.model_elements
    ),
    visualCues: asContextArray(rawContext.visualCues || rawContext.visual_cues),
    scaleMeaning: pickContextValue(rawContext, "scaleMeaning", "scale_meaning"),

    forces: asContextArray(rawContext.forces),
    visibleForces: asContextArray(
      rawContext.visibleForces || rawContext.visible_forces || rawContext.forces
    ),
    hiddenForces: asContextArray(
      rawContext.hiddenForces || rawContext.hidden_forces
    ),
    components: asContextArray(rawContext.components),
    resultant: rawContext.resultant ?? null,
    axisConvention: pickContextValue(
      rawContext,
      "axisConvention",
      "axis_convention"
    ),
    positiveDirection: pickContextValue(
      rawContext,
      "positiveDirection",
      "positive_direction"
    ),
    forceBalanceReading: pickContextValue(
      rawContext,
      "forceBalanceReading",
      "force_balance_reading"
    ),
    equilibriumHints: asContextArray(
      rawContext.equilibriumHints || rawContext.equilibrium_hints
    ),

    modelConnection: pickContextValue(
      rawContext,
      "modelConnection",
      "model_connection"
    ),
    formulaConnection: pickContextValue(
      rawContext,
      "formulaConnection",
      "formula_connection"
    ),
    readingFocus: pickContextValue(rawContext, "readingFocus", "reading_focus"),
    agentHints: asContextArray(rawContext.agentHints || rawContext.agent_hints),
    commonMistakes: asContextArray(
      rawContext.commonMistakes || rawContext.common_mistakes
    ),
    graphWarnings: asContextArray(
      rawContext.graphWarnings || rawContext.graph_warnings
    ),
    recommendedTab: pickValue(
      rawContext.recommendedTab,
      rawContext.recommended_tab,
      "graficas"
    ),
    currentStep: pickContextValue(rawContext, "currentStep", "current_step"),
    source: rawContext.source || "GraphContextProvider",
  };
}
