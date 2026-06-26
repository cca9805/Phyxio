import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

import { getGraphMetadataForLeaf } from "./graphMetadataRegistry";
import { getGraphTypeDefaults } from "./graphTypeDefaults";
import {
  normalizeStringArray,
  pickValue,
  resolveLocalizedValue,
} from "./normalizeLeafContext";
import { getUiLanguage } from "../utils/uiLanguage";

const GraphContext = createContext(null);

function normalizeGraphType(type) {
  const normalized = String(type || "")
    .trim()
    .toLowerCase();

  if (!normalized) return null;

  if (normalized === "dcl") return "Dcl";
  if (normalized === "coord") return "Coord";
  if (normalized === "svg") return "Svg";

  if (normalized.includes("dcl")) return "Dcl";
  if (normalized.includes("diagrama de cuerpo libre")) return "Dcl";
  if (normalized.includes("free body")) return "Dcl";

  if (normalized.includes("coord")) return "Coord";
  if (normalized.includes("coordenada")) return "Coord";
  if (normalized.includes("ejes")) return "Coord";

  if (normalized.includes("svg")) return "Svg";
  if (normalized.includes("escena")) return "Svg";

  return null;
}

function asArray(value, lang = "es") {
  return normalizeStringArray(value, lang);
}

function uniqueArray(values = []) {
  return [...new Set(values.filter(Boolean))];
}

function getDefaultReadingFocus(type) {
  if (type === "Coord") {
    return "leer ejes, pendiente, tendencia, signos y relación entre magnitudes";
  }

  if (type === "Dcl") {
    return "identificar fuerzas, direcciones, sentidos, resultante y equilibrio";
  }

  if (type === "Svg") {
    return "identificar escena, objetos, posiciones y relaciones geométricas";
  }

  return "lectura visual del leaf";
}

function getDefaultTitle(type) {
  if (type === "Coord") return "Gráfica de coordenadas";
  if (type === "Dcl") return "Diagrama de cuerpo libre";
  if (type === "Svg") return "Representación visual";

  return "Gráfica del leaf";
}

function buildMinimalGraphContext(graphContextOrType, extraContext = {}) {
  const rawContext =
    graphContextOrType && typeof graphContextOrType === "object"
      ? graphContextOrType
      : { type: graphContextOrType };

  const type = normalizeGraphType(
    rawContext.type ||
      rawContext.graphType ||
      rawContext.kind ||
      rawContext.renderer ||
      rawContext.id ||
      extraContext.type ||
      extraContext.graphType ||
      extraContext.kind ||
      extraContext.renderer
  );

  if (!type) return null;

  const typeDefaults = getGraphTypeDefaults(type) || {};

  const leafId = pickValue(
    rawContext.leafId,
    rawContext.leaf_id,
    extraContext.leafId,
    extraContext.leaf_id,
    typeDefaults.leafId,
    typeDefaults.leaf_id,
    null
  );

  const graphId = pickValue(
    rawContext.graphId,
    rawContext.graph_id,
    rawContext.id,
    extraContext.graphId,
    extraContext.graph_id,
    extraContext.id,
    typeDefaults.graphId,
    typeDefaults.graph_id,
    typeDefaults.id,
    type
  );

  const registeredMetadata =
    getGraphMetadataForLeaf({
      leafId,
      graphType: type,
      graphId,
    }) || {};

  /*
    Orden de prioridad:
    1. Defaults genéricos por tipo: Coord / Dcl / Svg.
    2. Registry opcional: legacy, excepciones o metadata generada.
    3. rawContext: normalmente activeView del index.
    4. extraContext: datos explícitos al publicar contexto.

    Lo último gana.
  */
  const graphMetadata = {
    ...typeDefaults,
    ...registeredMetadata,
    ...rawContext,
    ...extraContext,
  };

  const lang = pickValue(
    graphMetadata.lang,
    graphMetadata.language,
    graphMetadata.locale,
    extraContext.lang,
    extraContext.language,
    extraContext.locale,
    rawContext.lang,
    rawContext.language,
    rawContext.locale,
    getUiLanguage()
  );

  const title = pickValue(
    graphMetadata.title,
    graphMetadata.name,
    graphMetadata.label,
    getDefaultTitle(type)
  );

  const semanticRole = pickValue(
    graphMetadata.semanticRole,
    graphMetadata.semantic_role,
    typeDefaults.semanticRole,
    typeDefaults.semantic_role,
    registeredMetadata.semanticRole,
    registeredMetadata.semantic_role,
    type === "Coord"
      ? "law_relationship"
      : type === "Dcl"
        ? "force_balance"
        : type === "Svg"
          ? "physical_scene"
          : "graph_context"
  );

  const readingMode = pickValue(
    graphMetadata.readingMode,
    graphMetadata.reading_mode,
    typeDefaults.readingMode,
    typeDefaults.reading_mode,
    registeredMetadata.readingMode,
    registeredMetadata.reading_mode,
    type === "Coord"
      ? "axes_slope_trend"
      : type === "Dcl"
        ? "forces_body_resultant"
        : type === "Svg"
          ? "scene_geometry_model"
          : "visual_reading"
  );

  const forces = uniqueArray([
    ...asArray(typeDefaults.forces, lang),
    ...asArray(typeDefaults.visibleForces, lang),
    ...asArray(registeredMetadata.forces, lang),
    ...asArray(registeredMetadata.visibleForces, lang),
    ...asArray(rawContext.forces, lang),
    ...asArray(rawContext.visibleForces, lang),
    ...asArray(extraContext.forces, lang),
    ...asArray(extraContext.visibleForces, lang),
  ]);

  const components = uniqueArray([
    ...asArray(typeDefaults.components, lang),
    ...asArray(registeredMetadata.components, lang),
    ...asArray(rawContext.components, lang),
    ...asArray(extraContext.components, lang),
  ]);

  const visibleMagnitudes = uniqueArray([
    ...asArray(typeDefaults.visibleMagnitudes, lang),
    ...asArray(typeDefaults.magnitudes, lang),
    ...asArray(registeredMetadata.visibleMagnitudes, lang),
    ...asArray(registeredMetadata.magnitudes, lang),
    ...asArray(rawContext.visibleMagnitudes, lang),
    ...asArray(rawContext.magnitudes, lang),
    ...asArray(extraContext.visibleMagnitudes, lang),
    ...asArray(extraContext.magnitudes, lang),
    ...forces,
    ...components,
  ]);

  const agentHints = uniqueArray([
    ...asArray(typeDefaults.agentHints, lang),
    ...asArray(registeredMetadata.agentHints, lang),
    ...asArray(rawContext.agentHints, lang),
    ...asArray(extraContext.agentHints, lang),
  ]);

  const commonMistakes = uniqueArray([
    ...asArray(typeDefaults.commonMistakes, lang),
    ...asArray(registeredMetadata.commonMistakes, lang),
    ...asArray(rawContext.commonMistakes, lang),
    ...asArray(extraContext.commonMistakes, lang),
  ]);

  return {
    type,
    graphType: type,

    id: graphId,
    graphId,

    title: resolveLocalizedValue(title, lang),

    subtitle: pickValue(
      resolveLocalizedValue(graphMetadata.subtitle, lang),
      resolveLocalizedValue(graphMetadata.subTitle, lang),
      resolveLocalizedValue(graphMetadata.sub_title, lang),
      null
    ),

    leafId,

    semanticRole,
    readingMode,

    sceneId: pickValue(
      graphMetadata.sceneId,
      graphMetadata.scene_id,
      null
    ),

    sceneLabel: pickValue(
      resolveLocalizedValue(graphMetadata.sceneLabel, lang),
      resolveLocalizedValue(graphMetadata.scene_label, lang),
      null
    ),

    selectedObject: pickValue(
      graphMetadata.selectedObject,
      graphMetadata.selected_object,
      null
    ),

    selectedObjectId: pickValue(
      graphMetadata.selectedObjectId,
      graphMetadata.selected_object_id,
      null
    ),

    selectedVector: pickValue(
      graphMetadata.selectedVector,
      graphMetadata.selected_vector,
      null
    ),

    xAxis: pickValue(
      resolveLocalizedValue(graphMetadata.xAxis, lang),
      resolveLocalizedValue(graphMetadata.x_axis, lang),
      null
    ),

    yAxis: pickValue(
      resolveLocalizedValue(graphMetadata.yAxis, lang),
      resolveLocalizedValue(graphMetadata.y_axis, lang),
      null
    ),

    xMagnitude: pickValue(
      graphMetadata.xMagnitude,
      graphMetadata.x_magnitude,
      null
    ),

    yMagnitude: pickValue(
      graphMetadata.yMagnitude,
      graphMetadata.y_magnitude,
      null
    ),

    relation: pickValue(
      resolveLocalizedValue(graphMetadata.relation, lang),
      null
    ),

    physicalReading: pickValue(
      resolveLocalizedValue(graphMetadata.physicalReading, lang),
      resolveLocalizedValue(graphMetadata.physical_reading, lang),
      null
    ),

    slopeMeaning: pickValue(
      resolveLocalizedValue(graphMetadata.slopeMeaning, lang),
      resolveLocalizedValue(graphMetadata.slope_meaning, lang),
      null
    ),

    interceptMeaning: pickValue(
      resolveLocalizedValue(graphMetadata.interceptMeaning, lang),
      resolveLocalizedValue(graphMetadata.intercept_meaning, lang),
      null
    ),

    curvatureMeaning: pickValue(
      resolveLocalizedValue(graphMetadata.curvatureMeaning, lang),
      resolveLocalizedValue(graphMetadata.curvature_meaning, lang),
      null
    ),

    signMeaning: pickValue(
      resolveLocalizedValue(graphMetadata.signMeaning, lang),
      resolveLocalizedValue(graphMetadata.sign_meaning, lang),
      null
    ),

    areaMeaning: pickValue(
      resolveLocalizedValue(graphMetadata.areaMeaning, lang),
      resolveLocalizedValue(graphMetadata.area_meaning, lang),
      null
    ),

    domainMeaning: pickValue(
      resolveLocalizedValue(graphMetadata.domainMeaning, lang),
      resolveLocalizedValue(graphMetadata.domain_meaning, lang),
      null
    ),

    modelConnection: pickValue(
      resolveLocalizedValue(graphMetadata.modelConnection, lang),
      resolveLocalizedValue(graphMetadata.model_connection, lang),
      null
    ),

    formulaConnection: pickValue(
      resolveLocalizedValue(graphMetadata.formulaConnection, lang),
      resolveLocalizedValue(graphMetadata.formula_connection, lang),
      null
    ),

    readingFocus: pickValue(
      resolveLocalizedValue(graphMetadata.readingFocus, lang),
      resolveLocalizedValue(graphMetadata.reading_focus, lang),
      getDefaultReadingFocus(type)
    ),

    recommendedTab: pickValue(
      graphMetadata.recommendedTab,
      graphMetadata.recommended_tab,
      "graficas"
    ),

    currentStep: pickValue(
      graphMetadata.currentStep,
      graphMetadata.current_step,
      null
    ),

    forces,
    visibleForces: forces,

    components,
    visibleMagnitudes,

    hiddenForces: uniqueArray([
      ...asArray(typeDefaults.hiddenForces, lang),
      ...asArray(registeredMetadata.hiddenForces, lang),
      ...asArray(rawContext.hiddenForces, lang),
      ...asArray(extraContext.hiddenForces, lang),
    ]),

    resultant: pickValue(
      graphMetadata.resultant,
      null
    ),

    axisConvention: pickValue(
      graphMetadata.axisConvention,
      graphMetadata.axis_convention,
      null
    ),

    positiveDirection: pickValue(
      graphMetadata.positiveDirection,
      graphMetadata.positive_direction,
      null
    ),

    forceBalanceReading: pickValue(
      graphMetadata.forceBalanceReading,
      graphMetadata.force_balance_reading,
      null
    ),

    graphWarnings: uniqueArray([
      ...asArray(typeDefaults.graphWarnings, lang),
      ...asArray(registeredMetadata.graphWarnings, lang),
      ...asArray(rawContext.graphWarnings, lang),
      ...asArray(extraContext.graphWarnings, lang),
    ]),

    equilibriumHints: uniqueArray([
      ...asArray(typeDefaults.equilibriumHints, lang),
      ...asArray(registeredMetadata.equilibriumHints, lang),
      ...asArray(rawContext.equilibriumHints, lang),
      ...asArray(extraContext.equilibriumHints, lang),
    ]),

    agentHints,
    commonMistakes,

    objects: uniqueArray([
      ...asArray(typeDefaults.objects, lang),
      ...asArray(registeredMetadata.objects, lang),
      ...asArray(rawContext.objects, lang),
      ...asArray(extraContext.objects, lang),
    ]),

    mainObject: pickValue(
      resolveLocalizedValue(graphMetadata.mainObject, lang),
      resolveLocalizedValue(graphMetadata.main_object, lang),
      null
    ),

    referenceFrame: pickValue(
      resolveLocalizedValue(graphMetadata.referenceFrame, lang),
      resolveLocalizedValue(graphMetadata.reference_frame, lang),
      null
    ),

    geometry: pickValue(
      resolveLocalizedValue(graphMetadata.geometry, lang),
      null
    ),

    interactions: pickValue(
      resolveLocalizedValue(graphMetadata.interactions, lang),
      null
    ),

    modelElements: uniqueArray([
      ...asArray(typeDefaults.modelElements, lang),
      ...asArray(typeDefaults.model_elements, lang),
      ...asArray(registeredMetadata.modelElements, lang),
      ...asArray(registeredMetadata.model_elements, lang),
      ...asArray(rawContext.modelElements, lang),
      ...asArray(rawContext.model_elements, lang),
      ...asArray(extraContext.modelElements, lang),
      ...asArray(extraContext.model_elements, lang),
    ]),

    visualCues: uniqueArray([
      ...asArray(typeDefaults.visualCues, lang),
      ...asArray(typeDefaults.visual_cues, lang),
      ...asArray(registeredMetadata.visualCues, lang),
      ...asArray(registeredMetadata.visual_cues, lang),
      ...asArray(rawContext.visualCues, lang),
      ...asArray(rawContext.visual_cues, lang),
      ...asArray(extraContext.visualCues, lang),
      ...asArray(extraContext.visual_cues, lang),
    ]),

    scaleMeaning: pickValue(
      resolveLocalizedValue(graphMetadata.scaleMeaning, lang),
      resolveLocalizedValue(graphMetadata.scale_meaning, lang),
      null
    ),

    source: pickValue(
      graphMetadata.source,
      "GraphContextProvider"
    ),
  };
}

function sortGraphContextValue(value) {
  if (Array.isArray(value)) {
    return value.map(sortGraphContextValue);
  }

  if (value && typeof value === "object") {
    return Object.keys(value)
      .sort()
      .reduce((acc, key) => {
        /*
          Evitamos meter componentes React o funciones en la firma.
          El contexto semántico debe firmarse por datos, no por referencias.
        */
        if (typeof value[key] === "function") return acc;
        acc[key] = sortGraphContextValue(value[key]);
        return acc;
      }, {});
  }

  return value;
}

function getGraphContextSignature(graphContext) {
  if (!graphContext) return "";

  try {
    return JSON.stringify(sortGraphContextValue(graphContext));
  } catch {
    return String(graphContext);
  }
}

function getGraphContextIdentitySignature(graphContext) {
  if (!graphContext) return "";

  const identity = {
    type: graphContext.type || graphContext.graphType || null,
    graphType: graphContext.graphType || graphContext.type || null,
    graphId: graphContext.graphId || graphContext.id || null,
    leafId: graphContext.leafId || null,
    sceneId: graphContext.sceneId || null,
    selectedObjectId: graphContext.selectedObjectId || null,
    selectedVector: graphContext.selectedVector || null,
  };

  return getGraphContextSignature(identity);
}

function areSameGraphContext(previousGraphContext, nextGraphContext) {
  if (previousGraphContext === nextGraphContext) return true;
  if (!previousGraphContext || !nextGraphContext) return false;

  return (
    getGraphContextSignature(previousGraphContext) ===
    getGraphContextSignature(nextGraphContext)
  );
}

export function GraphContextProvider({ children }) {
  const [activeGraphContext, setActiveGraphContextState] = useState(null);

  const activeGraphContextRef = useRef(null);
  const activeGraphSignatureRef = useRef("");
  const activeGraphIdentitySignatureRef = useRef("");

  const commitActiveGraphContext = useCallback(
    (nextGraphContext, options = {}) => {
      if (!nextGraphContext) return null;

      const { allowReplace = true, forceActive = false } = options;

      const nextSignature = getGraphContextSignature(nextGraphContext);
      const nextIdentitySignature =
        getGraphContextIdentitySignature(nextGraphContext);

      const currentGraphContext = activeGraphContextRef.current;
      const currentSignature = activeGraphSignatureRef.current;
      const currentIdentitySignature =
        activeGraphIdentitySignatureRef.current;

      if (currentSignature && currentSignature === nextSignature) {
        return currentGraphContext;
      }

      if (
        currentGraphContext &&
        !forceActive &&
        !allowReplace &&
        currentIdentitySignature &&
        currentIdentitySignature !== nextIdentitySignature
      ) {
        return currentGraphContext;
      }

      activeGraphContextRef.current = nextGraphContext;
      activeGraphSignatureRef.current = nextSignature;
      activeGraphIdentitySignatureRef.current = nextIdentitySignature;

      setActiveGraphContextState((prevGraphContext) => {
        if (areSameGraphContext(prevGraphContext, nextGraphContext)) {
          return prevGraphContext;
        }

        return nextGraphContext;
      });

      return nextGraphContext;
    },
    []
  );

  const setActiveGraphContext = useCallback(
    (graphContextOrType, extraContext = {}) => {
      const nextGraphContext = buildMinimalGraphContext(
        graphContextOrType,
        extraContext
      );

      return commitActiveGraphContext(nextGraphContext, {
        allowReplace: true,
        forceActive: Boolean(extraContext.forceActive),
      });
    },
    [commitActiveGraphContext]
  );

  const publishActiveGraphContext = useCallback(
    (graphContextOrType, extraContext = {}) => {
      const nextGraphContext = buildMinimalGraphContext(graphContextOrType, {
        ...extraContext,
        source: extraContext.source || "publishActiveGraphContext",
      });

      return commitActiveGraphContext(nextGraphContext, {
        allowReplace: false,
        forceActive: Boolean(extraContext.forceActive),
      });
    },
    [commitActiveGraphContext]
  );

  const clearActiveGraphContext = useCallback(() => {
    activeGraphContextRef.current = null;
    activeGraphSignatureRef.current = "";
    activeGraphIdentitySignatureRef.current = "";

    setActiveGraphContextState((prevGraphContext) => {
      if (prevGraphContext === null) return prevGraphContext;
      return null;
    });
  }, []);

  const activeGraphType = useMemo(() => {
    return normalizeGraphType(
      activeGraphContext?.type || activeGraphContext?.graphType
    );
  }, [activeGraphContext]);

  const value = useMemo(
    () => ({
      graphContext: activeGraphContext,
      activeGraphContext,
      activeGraphType,
      selectedGraphType: activeGraphType,
      setActiveGraphContext,
      publishActiveGraphContext,
      clearActiveGraphContext,
    }),
    [
      activeGraphContext,
      activeGraphType,
      setActiveGraphContext,
      publishActiveGraphContext,
      clearActiveGraphContext,
    ]
  );

  return (
    <GraphContext.Provider value={value}>
      {children}
    </GraphContext.Provider>
  );
}

export function useGraphContext() {
  const context = useContext(GraphContext);

  if (!context) {
    return {
      graphContext: null,
      activeGraphContext: null,
      activeGraphType: null,
      selectedGraphType: null,
      setActiveGraphContext: () => null,
      publishActiveGraphContext: () => null,
      clearActiveGraphContext: () => {},
    };
  }

  return context;
}
