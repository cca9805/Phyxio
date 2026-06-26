// frontend/src/v2/components/agent/normalizeLeafContext.js

export function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function firstArray(...values) {
  return values.find((value) => Array.isArray(value)) || [];
}

function getFirstDefined(...values) {
  return values.find((value) => value !== undefined && value !== null);
}

export function pickValue(...values) {
  return values.find(
    (value) => value !== undefined && value !== null && value !== ""
  );
}

export function resolveLocalizedValue(value, lang = "es") {
  if (value == null) return value;

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveLocalizedValue(item, lang));
  }

  if (typeof value === "object") {
    const hasI18nKeys =
      Object.prototype.hasOwnProperty.call(value, "es") ||
      Object.prototype.hasOwnProperty.call(value, "en");

    if (hasI18nKeys) {
      const primary = lang === "en" ? value.en : value.es;
      const fallback = lang === "en" ? value.es : value.en;
      return resolveLocalizedValue(primary ?? fallback ?? "", lang);
    }
  }

  return value;
}

export function pickLocalizedValue(lang, ...values) {
  return pickValue(...values.map((value) => resolveLocalizedValue(value, lang)));
}

function pickFormula(formula) {
  if (!formula || typeof formula !== "object") return null;

  return {
    id: formula.id || null,
    nombre: formula.nombre || formula.name || formula.title || null,
    latex: formula.latex || formula.equation || formula.expression || null,
    descripcion: formula.descripcion || formula.description || null,
    variables:
      formula.variables ||
      formula.magnitudes ||
      formula.inputs ||
      formula.related_magnitudes ||
      [],
    result_semantics: formula.result_semantics || null,
  };
}

function pickMagnitude(magnitude) {
  if (!magnitude || typeof magnitude !== "object") return null;

  return {
    id: magnitude.id || null,
    symbol: magnitude.symbol || magnitude.simbolo || null,
    nombre: magnitude.nombre || magnitude.name || magnitude.title || null,
    descripcion: magnitude.descripcion || magnitude.description || null,
    unidad_si: magnitude.unidad_si || magnitude.si_unit || magnitude.unit || null,
    dimension: magnitude.dimension || null,
    is_vector: magnitude.is_vector ?? null,
    physical_role: magnitude.physical_role || null,
  };
}

function getRawFormulas(rawLeafContext) {
  return firstArray(
    rawLeafContext.formulas,
    rawLeafContext.formulas?.formulas,
    rawLeafContext.formulasYaml?.formulas,
    rawLeafContext.formulas_yaml?.formulas,
    rawLeafContext.formulasData?.formulas,
    rawLeafContext.formulas_data?.formulas,
    rawLeafContext.yaml?.formulas,
    rawLeafContext.data?.formulas
  );
}

function getRawMagnitudes(rawLeafContext) {
  return firstArray(
    rawLeafContext.magnitudes,
    rawLeafContext.magnitudes?.magnitudes,
    rawLeafContext.magnitudesYaml?.magnitudes,
    rawLeafContext.magnitudes_yaml?.magnitudes,
    rawLeafContext.magnitudesData?.magnitudes,
    rawLeafContext.magnitudes_data?.magnitudes,
    rawLeafContext.yaml?.magnitudes,
    rawLeafContext.data?.magnitudes
  );
}

function getRawGraphs(rawLeafContext) {
  return firstArray(
    rawLeafContext.graphsDoc,
    rawLeafContext.graficosDoc,
    rawLeafContext.graphs,
    rawLeafContext.graficos,
    rawLeafContext.meta?.graphs,
    rawLeafContext.meta?.graficos,
    rawLeafContext.data?.graphsDoc,
    rawLeafContext.data?.graficosDoc,
    rawLeafContext.data?.graphs,
    rawLeafContext.data?.graficos
  );
}

function pickGraph(graph) {
  if (!graph || typeof graph !== "object") return null;

  return {
    id: graph.id || graph.graphId || graph.graph_id || null,
    graphId: graph.graphId || graph.graph_id || graph.id || null,
    type: graph.type || graph.graphType || graph.tipo || null,
    graphType: graph.graphType || graph.type || graph.tipo || null,
    title: graph.title || graph.titulo || graph.nombre || null,
    description: graph.description || graph.descripcion || null,
    component: graph.component || graph.componente || null,
    related_formulas: graph.related_formulas || graph.formulas || [],
    related_magnitudes: graph.related_magnitudes || graph.magnitudes || [],
  };
}

function normalizeGraphs(rawGraphs) {
  if (!Array.isArray(rawGraphs)) return [];

  return rawGraphs
    .map((graph) => {
      if (typeof graph === "string") {
        const type = graph;

        if (type === "Coord") {
          return {
            type,
            graphType: type,
            role: "coordinate_graph",
            description: "Gráfica de coordenadas o evolución de magnitudes.",
          };
        }

        if (type === "Dcl") {
          return {
            type,
            graphType: type,
            role: "free_body_diagram",
            description: "Diagrama de cuerpo libre para interpretar fuerzas.",
          };
        }

        if (type === "Svg") {
          return {
            type,
            graphType: type,
            role: "scene_graph",
            description: "Representación visual de la escena física.",
          };
        }

        return {
          type,
          graphType: type,
          role: "unknown_graph",
          description: "Gráfica asociada al leaf.",
        };
      }

      if (graph && typeof graph === "object") {
        return {
          type: graph.type || graph.graphType || graph.id || graph.name || "unknown",
          graphType: graph.graphType || graph.type || graph.id || graph.name || "unknown",
          role: graph.role || graph.graph_role || "unknown_graph",
          description:
            graph.description ||
            graph.descripcion ||
            "Gráfica asociada al leaf.",
          ...pickGraph(graph),
          ...graph,
        };
      }

      return null;
    })
    .filter(Boolean);
}

function hasContent(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "string") return value.trim().length > 0;
  return Boolean(value);
}

function buildAvailableTabs(rawLeafContext, normalizedGraphs) {
  const tabs = rawLeafContext.available_tabs || rawLeafContext.availableTabs || {};

  return {
    teoria: Boolean(
      tabs.teoria ??
        tabs.theory ??
        rawLeafContext.theory_excerpt ??
        rawLeafContext.teoria_excerpt
    ),
    magnitudes: true,
    calculadora: Boolean(
      tabs.calculadora ??
        tabs.calculator ??
        rawLeafContext.calculator_available ??
        rawLeafContext.calculadora_available ??
        true
    ),
    interpretacion: Boolean(
      tabs.interpretacion ??
        tabs.interpretation ??
        rawLeafContext.interpretation ??
        rawLeafContext.interpretacion
    ),
    modelos: Boolean(
      tabs.modelos ??
        tabs.models ??
        rawLeafContext.model_validity ??
        rawLeafContext.modelos ??
        rawLeafContext.models
    ),
    errores: Boolean(
      tabs.errores ??
        tabs.errors ??
        rawLeafContext.common_errors ??
        rawLeafContext.errores ??
        rawLeafContext.errors
    ),
    ejemplos: Boolean(
      tabs.ejemplos ??
        tabs.examples ??
        rawLeafContext.examples_available ??
        rawLeafContext.ejemplos ??
        rawLeafContext.examples
    ),
    aplicaciones: Boolean(
      tabs.aplicaciones ??
        tabs.applications ??
        rawLeafContext.applications_available ??
        rawLeafContext.aplicaciones ??
        rawLeafContext.applications
    ),
    historia: Boolean(
      tabs.historia ??
        tabs.history ??
        rawLeafContext.history_available ??
        rawLeafContext.historia ??
        rawLeafContext.history
    ),
    graficas: normalizedGraphs.length > 0,
    practica: Boolean(
      tabs.practica ??
        tabs.practice ??
        rawLeafContext.practice_available ??
        rawLeafContext.practica_available
    ),
  };
}

export function normalizeStringArray(value, lang = "es") {
  const resolved = resolveLocalizedValue(value, lang);
  const array = Array.isArray(resolved)
    ? resolved
    : resolved === undefined || resolved === null || resolved === ""
      ? []
      : [resolved];

  return array
    .map((item) => resolveLocalizedValue(item, lang))
    .filter((item) => item !== undefined && item !== null && item !== "");
}

export function sanitizeGraphContext(activeGraphContext, lang = "es") {
  if (!activeGraphContext || typeof activeGraphContext !== "object") {
    return null;
  }

  return {
    // Identidad
    id: pickValue(
      activeGraphContext.id,
      activeGraphContext.graphId,
      activeGraphContext.graph_id,
      null
    ),

    graphId: pickValue(
      activeGraphContext.graphId,
      activeGraphContext.graph_id,
      activeGraphContext.id,
      null
    ),

    type: pickValue(
      activeGraphContext.type,
      activeGraphContext.graphType,
      activeGraphContext.graph_type,
      null
    ),

    graphType: pickValue(
      activeGraphContext.graphType,
      activeGraphContext.graph_type,
      activeGraphContext.type,
      null
    ),

    title: pickLocalizedValue(
      lang,
      activeGraphContext.title,
      activeGraphContext.titulo,
      activeGraphContext.label,
      activeGraphContext.name,
      null
    ),

    label: pickLocalizedValue(
      lang,
      activeGraphContext.label,
      activeGraphContext.title,
      activeGraphContext.titulo,
      activeGraphContext.name,
      null
    ),

    description: pickLocalizedValue(
      lang,
      activeGraphContext.description,
      activeGraphContext.descripcion,
      null
    ),

    leafId: pickValue(
      activeGraphContext.leafId,
      activeGraphContext.leaf_id,
      null
    ),

    // Coord
    xAxis: pickLocalizedValue(
      lang,
      activeGraphContext.xAxis,
      activeGraphContext.x_axis,
      null
    ),

    yAxis: pickLocalizedValue(
      lang,
      activeGraphContext.yAxis,
      activeGraphContext.y_axis,
      null
    ),

    xMagnitude: pickValue(
      activeGraphContext.xMagnitude,
      activeGraphContext.x_magnitude,
      null
    ),

    yMagnitude: pickValue(
      activeGraphContext.yMagnitude,
      activeGraphContext.y_magnitude,
      null
    ),

    relation: pickLocalizedValue(
      lang,
      activeGraphContext.relation,
      activeGraphContext.physicalRelation,
      activeGraphContext.physical_relation,
      null
    ),

    physicalReading: pickLocalizedValue(
      lang,
      activeGraphContext.physicalReading,
      activeGraphContext.physical_reading,
      null
    ),

    slopeMeaning: pickLocalizedValue(
      lang,
      activeGraphContext.slopeMeaning,
      activeGraphContext.slope_meaning,
      null
    ),

    interceptMeaning: pickLocalizedValue(
      lang,
      activeGraphContext.interceptMeaning,
      activeGraphContext.intercept_meaning,
      null
    ),

    curvatureMeaning: pickLocalizedValue(
      lang,
      activeGraphContext.curvatureMeaning,
      activeGraphContext.curvature_meaning,
      null
    ),

    signMeaning: pickLocalizedValue(
      lang,
      activeGraphContext.signMeaning,
      activeGraphContext.sign_meaning,
      null
    ),

    areaMeaning: pickLocalizedValue(
      lang,
      activeGraphContext.areaMeaning,
      activeGraphContext.area_meaning,
      null
    ),

    domainMeaning: pickLocalizedValue(
      lang,
      activeGraphContext.domainMeaning,
      activeGraphContext.domain_meaning,
      null
    ),

    // DCL
    sceneId: pickValue(
      activeGraphContext.sceneId,
      activeGraphContext.scene_id,
      null
    ),

    sceneLabel: pickLocalizedValue(
      lang,
      activeGraphContext.sceneLabel,
      activeGraphContext.scene_label,
      null
    ),

    selectedObject: pickValue(
      activeGraphContext.selectedObject,
      activeGraphContext.selected_object,
      null
    ),

    selectedObjectId: pickValue(
      activeGraphContext.selectedObjectId,
      activeGraphContext.selected_object_id,
      null
    ),

    selectedVector: pickValue(
      activeGraphContext.selectedVector,
      activeGraphContext.selected_vector,
      null
    ),

    forces: normalizeStringArray(activeGraphContext.forces, lang),
    visibleForces: normalizeStringArray(
      activeGraphContext.visibleForces || activeGraphContext.visible_forces,
      lang
    ),
    hiddenForces: normalizeStringArray(
      activeGraphContext.hiddenForces || activeGraphContext.hidden_forces,
      lang
    ),
    components: normalizeStringArray(activeGraphContext.components, lang),

    resultant: pickValue(
      activeGraphContext.resultant,
      null
    ),

    axisConvention: pickValue(
      activeGraphContext.axisConvention,
      activeGraphContext.axis_convention,
      null
    ),

    positiveDirection: pickValue(
      activeGraphContext.positiveDirection,
      activeGraphContext.positive_direction,
      null
    ),

    forceBalanceReading: pickLocalizedValue(
      lang,
      activeGraphContext.forceBalanceReading,
      activeGraphContext.force_balance_reading,
      null
    ),

    equilibriumHints: normalizeStringArray(
      activeGraphContext.equilibriumHints || activeGraphContext.equilibrium_hints,
      lang
    ),

    // SVG
    objects: normalizeStringArray(activeGraphContext.objects, lang),

    mainObject: pickLocalizedValue(
      lang,
      activeGraphContext.mainObject,
      activeGraphContext.main_object,
      null
    ),

    referenceFrame: pickLocalizedValue(
      lang,
      activeGraphContext.referenceFrame,
      activeGraphContext.reference_frame,
      null
    ),

    geometry: pickLocalizedValue(
      lang,
      activeGraphContext.geometry,
      null
    ),

    interactions: pickLocalizedValue(
      lang,
      activeGraphContext.interactions,
      null
    ),

    modelElements: normalizeStringArray(
      activeGraphContext.modelElements || activeGraphContext.model_elements,
      lang
    ),

    visualCues: normalizeStringArray(
      activeGraphContext.visualCues || activeGraphContext.visual_cues,
      lang
    ),

    scaleMeaning: pickLocalizedValue(
      lang,
      activeGraphContext.scaleMeaning,
      activeGraphContext.scale_meaning,
      null
    ),

    // Comunes
    modelConnection: pickLocalizedValue(
      lang,
      activeGraphContext.modelConnection,
      activeGraphContext.model_connection,
      null
    ),

    formulaConnection: pickLocalizedValue(
      lang,
      activeGraphContext.formulaConnection,
      activeGraphContext.formula_connection,
      null
    ),

    readingFocus: pickLocalizedValue(
      lang,
      activeGraphContext.readingFocus,
      activeGraphContext.reading_focus,
      null
    ),

    agentHints: normalizeStringArray(
      activeGraphContext.agentHints || activeGraphContext.agent_hints,
      lang
    ),

    commonMistakes: normalizeStringArray(
      activeGraphContext.commonMistakes || activeGraphContext.common_mistakes,
      lang
    ),

    graphWarnings: normalizeStringArray(
      activeGraphContext.graphWarnings || activeGraphContext.graph_warnings,
      lang
    ),

    recommendedTab: pickValue(
      activeGraphContext.recommendedTab,
      activeGraphContext.recommended_tab,
      "graficas"
    ),

    currentStep: pickValue(
      activeGraphContext.currentStep,
      activeGraphContext.current_step,
      null
    ),

    source: pickValue(
      activeGraphContext.source,
      null
    ),
  };
}

export function normalizeLeafContext(rawLeafContext) {
  if (!rawLeafContext || typeof rawLeafContext !== "object") {
    return {
      id: null,
      title: null,
      route: null,
      formulas: [],
      magnitudes: [],
      interpretation: null,
      theory_excerpt: null,
      active_graph_context: null,
    };
  }

  const rawFormulas = getRawFormulas(rawLeafContext);
  const rawMagnitudes = getRawMagnitudes(rawLeafContext);
  const rawGraphs = getRawGraphs(rawLeafContext);
  const language =
    rawLeafContext.language ||
    rawLeafContext.locale ||
    rawLeafContext.lang ||
    "es";

  const formulas = asArray(rawFormulas)
    .map(pickFormula)
    .filter(Boolean)
    .filter((formula) => formula.id);

  const magnitudes = asArray(rawMagnitudes)
    .map(pickMagnitude)
    .filter(Boolean)
    .filter((magnitude) => magnitude.id);

  const normalizedGraphs = normalizeGraphs(rawGraphs);

  const availableTabs = buildAvailableTabs(rawLeafContext, normalizedGraphs);

  const rawActiveGraphContext = getFirstDefined(
    rawLeafContext.active_graph_context,
    rawLeafContext.activeGraphContext,
    rawLeafContext.graphContext,
    rawLeafContext.graph_context,
    null
  );

  const activeGraphContext = sanitizeGraphContext(rawActiveGraphContext, language);

  return {
    id: rawLeafContext.id || rawLeafContext.leaf_id || null,

    title:
      rawLeafContext.title ||
      rawLeafContext.titulo ||
      rawLeafContext.nombre ||
      rawLeafContext.name ||
      null,

    route:
      rawLeafContext.route ||
      rawLeafContext.ruta_relativa ||
      rawLeafContext.path ||
      null,

    level:
      rawLeafContext.level ||
      rawLeafContext.nivel ||
      null,

    language,

    active_tab:
      rawLeafContext.active_tab ||
      rawLeafContext.activeTab ||
      null,

    active_tool:
      rawLeafContext.active_tool ||
      rawLeafContext.activeTool ||
      null,

    formulas,
    magnitudes,
    graphs: normalizedGraphs,
    graficos: normalizedGraphs,
    graphsDoc: normalizedGraphs,

    hasGraphs: normalizedGraphs.length > 0,
    graphsCount: normalizedGraphs.length,

    active_graph_context: activeGraphContext,

    interpretation:
      rawLeafContext.interpretation ||
      rawLeafContext.interpretacion ||
      null,

    theory:
      rawLeafContext.theory ||
      rawLeafContext.teoria ||
      rawLeafContext.theory_excerpt ||
      rawLeafContext.teoria_excerpt ||
      null,

    model_validity:
      rawLeafContext.model_validity ||
      rawLeafContext.modelo_validez ||
      rawLeafContext.modelos ||
      null,

    common_errors:
      rawLeafContext.common_errors ||
      rawLeafContext.errores ||
      null,

    examples:
      rawLeafContext.examples ||
      rawLeafContext.ejemplos ||
      null,

    applications:
      rawLeafContext.applications ||
      rawLeafContext.aplicaciones ||
      rawLeafContext.aplicaciones_fisicas ||
      null,

    history:
      rawLeafContext.history ||
      rawLeafContext.historia ||
      null,

    procedure:
      rawLeafContext.procedure ||
      rawLeafContext.procedimiento ||
      null,

    available_tabs: availableTabs,
    calculator_available: availableTabs.calculadora,
    practice_available: availableTabs.practica,
    examples_available: availableTabs.ejemplos,
    applications_available: availableTabs.aplicaciones,
    history_available: availableTabs.historia,

    theory_excerpt:
      rawLeafContext.theory_excerpt ||
      rawLeafContext.teoria_excerpt ||
      rawLeafContext.summary ||
      rawLeafContext.descripcion ||
      null,
  };
}
