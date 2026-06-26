import React, { useEffect, useMemo, useRef } from "react";
import { useGraphContext } from "../../../agent/GraphContextProvider.jsx";
import { getUiLanguage } from "../../../utils/uiLanguage";

const GRAPH_CONTEXT_EVENT = "phyxio:active-graph-context";

function normalizeGraphType(type) {
  const value = String(type || "").trim().toLowerCase();

  if (value === "coord") return "Coord";
  if (value === "dcl") return "Dcl";
  if (value === "svg") return "Svg";

  if (value.includes("coord")) return "Coord";
  if (value.includes("dcl")) return "Dcl";
  if (value.includes("svg")) return "Svg";

  return null;
}

function dispatchActiveGraphContext(context) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent(GRAPH_CONTEXT_EVENT, {
      detail: context || null,
    })
  );
}

function getGraphTitle({ graph, graphType, props }) {
  const graphMeta = props?.graphMeta || {};
  const graphContract = props?.graphContract || {};

  return (
    graphMeta.title ||
    graphContract.title ||
    graphMeta.label ||
    graphContract.label ||
    graphContract.titulo ||
    graphContract.name ||
    graph?.title ||
    graph?.titulo ||
    graph?.label ||
    graph?.name ||
    props?.title ||
    props?.meta?.titulo ||
    props?.meta?.title ||
    `Gráfica ${graphType}`
  );
}

function buildGraphContext({ graph, graphType, props }) {
  const normalizedType = normalizeGraphType(graphType);

  if (!normalizedType) return null;

  const graphMeta =
    props?.graphMeta && typeof props.graphMeta === "object"
      ? props.graphMeta
      : {};

  const graphContract =
    props?.graphContract && typeof props.graphContract === "object"
      ? props.graphContract
      : {};

  const graphObject =
    graph && typeof graph === "object"
      ? {
          ...graph,
          ...graphContract,
          ...graphMeta,
        }
      : {
          ...graphContract,
          ...graphMeta,
        };

  return {
    type: normalizedType,
    graphType: normalizedType,

    id:
      graphObject.graphId ||
      graphObject.graph_id ||
      graphObject.id ||
      graphObject.key ||
      props?.graphMeta?.graphId ||
      props?.graphMeta?.id ||
      props?.graphContract?.graphId ||
      props?.graphContract?.id ||
      props?.graphId ||
      props?.id ||
      props?.meta?.id ||
      `${normalizedType.toLowerCase()}_graph`,

    graphId:
      graphObject.graphId ||
      graphObject.graph_id ||
      graphObject.id ||
      graphObject.key ||
      props?.graphMeta?.graphId ||
      props?.graphMeta?.id ||
      props?.graphContract?.graphId ||
      props?.graphContract?.id ||
      props?.graphId ||
      props?.id ||
      props?.meta?.id ||
      `${normalizedType.toLowerCase()}_graph`,

    title: getGraphTitle({
      graph: graphObject,
      graphType: normalizedType,
      props,
    }),

    description:
      graphObject.description ||
      graphObject.descripcion ||
      props?.graphMeta?.description ||
      props?.graphContract?.description ||
      props?.graphContract?.descripcion ||
      "",

    leafId:
      graphObject.leafId ||
      graphObject.leaf_id ||
      props?.leafId ||
      props?.leaf_id ||
      props?.meta?.id ||
      props?.meta?.leaf_id ||
      null,

    leafTitle:
      graphObject.leafTitle ||
      graphObject.leaf_title ||
      props?.leafTitle ||
      props?.meta?.titulo ||
      props?.meta?.title ||
      null,

    xAxis:
      graphObject.xAxis ||
      graphObject.x_axis ||
      props?.xAxis ||
      props?.x_axis ||
      props?.meta?.xAxis ||
      props?.meta?.x_axis ||
      null,

    yAxis:
      graphObject.yAxis ||
      graphObject.y_axis ||
      props?.yAxis ||
      props?.y_axis ||
      props?.meta?.yAxis ||
      props?.meta?.y_axis ||
      null,

    xMagnitude:
      graphObject.xMagnitude ||
      graphObject.x_magnitude ||
      props?.xMagnitude ||
      props?.x_magnitude ||
      null,

    yMagnitude:
      graphObject.yMagnitude ||
      graphObject.y_magnitude ||
      props?.yMagnitude ||
      props?.y_magnitude ||
      null,

    readingFocus:
      graphObject.readingFocus ||
      graphObject.reading_focus ||
      props?.readingFocus ||
      props?.reading_focus ||
      (normalizedType === "Coord"
        ? "leer ejes, pendiente, tendencia, signos y relación entre magnitudes"
        : normalizedType === "Dcl"
          ? "leer fuerzas, direcciones, sentidos, resultante y equilibrio"
          : "identificar escena, objetos, posiciones y relaciones geométricas"),

    relation:
      graphObject.relation ||
      graphObject.physicalRelation ||
      graphObject.physical_relation ||
      props?.relation ||
      props?.physicalRelation ||
      props?.physical_relation ||
      null,

    physicalReading:
      graphObject.physicalReading ||
      graphObject.physical_reading ||
      props?.physicalReading ||
      props?.physical_reading ||
      null,

    slopeMeaning:
      graphObject.slopeMeaning ||
      graphObject.slope_meaning ||
      props?.slopeMeaning ||
      props?.slope_meaning ||
      null,

    interceptMeaning:
      graphObject.interceptMeaning ||
      graphObject.intercept_meaning ||
      props?.interceptMeaning ||
      props?.intercept_meaning ||
      null,

    curvatureMeaning:
      graphObject.curvatureMeaning ||
      graphObject.curvature_meaning ||
      props?.curvatureMeaning ||
      props?.curvature_meaning ||
      null,

    signMeaning:
      graphObject.signMeaning ||
      graphObject.sign_meaning ||
      props?.signMeaning ||
      props?.sign_meaning ||
      null,

    areaMeaning:
      graphObject.areaMeaning ||
      graphObject.area_meaning ||
      props?.areaMeaning ||
      props?.area_meaning ||
      null,

    domainMeaning:
      graphObject.domainMeaning ||
      graphObject.domain_meaning ||
      props?.domainMeaning ||
      props?.domain_meaning ||
      null,

    sceneId: graphObject.sceneId || graphObject.scene_id || props?.sceneId || props?.scene_id || null,
    sceneLabel: graphObject.sceneLabel || graphObject.scene_label || props?.sceneLabel || props?.scene_label || null,
    selectedObject: graphObject.selectedObject || graphObject.selected_object || props?.selectedObject || props?.selected_object || null,
    selectedObjectId: graphObject.selectedObjectId || graphObject.selected_object_id || props?.selectedObjectId || props?.selected_object_id || null,
    selectedVector: graphObject.selectedVector || graphObject.selected_vector || props?.selectedVector || props?.selected_vector || null,

    forces: graphObject.forces || graphObject.visibleForces || graphObject.visible_forces || props?.forces || props?.visibleForces || [],
    visibleForces: graphObject.visibleForces || graphObject.visible_forces || graphObject.forces || props?.visibleForces || props?.visible_forces || props?.forces || [],
    hiddenForces: graphObject.hiddenForces || graphObject.hidden_forces || props?.hiddenForces || props?.hidden_forces || [],
    components: graphObject.components || props?.components || [],
    resultant: graphObject.resultant || props?.resultant || null,
    axisConvention: graphObject.axisConvention || graphObject.axis_convention || props?.axisConvention || props?.axis_convention || null,
    positiveDirection: graphObject.positiveDirection || graphObject.positive_direction || props?.positiveDirection || props?.positive_direction || null,
    forceBalanceReading: graphObject.forceBalanceReading || graphObject.force_balance_reading || props?.forceBalanceReading || props?.force_balance_reading || null,
    equilibriumHints: graphObject.equilibriumHints || graphObject.equilibrium_hints || props?.equilibriumHints || props?.equilibrium_hints || [],

    objects: graphObject.objects || props?.objects || [],
    mainObject: graphObject.mainObject || graphObject.main_object || props?.mainObject || props?.main_object || null,
    referenceFrame: graphObject.referenceFrame || graphObject.reference_frame || props?.referenceFrame || props?.reference_frame || null,
    geometry: graphObject.geometry || props?.geometry || null,
    interactions: graphObject.interactions || props?.interactions || null,
    modelElements: graphObject.modelElements || graphObject.model_elements || props?.modelElements || props?.model_elements || [],
    visualCues: graphObject.visualCues || graphObject.visual_cues || props?.visualCues || props?.visual_cues || [],
    scaleMeaning: graphObject.scaleMeaning || graphObject.scale_meaning || props?.scaleMeaning || props?.scale_meaning || null,

    modelConnection: graphObject.modelConnection || graphObject.model_connection || props?.modelConnection || props?.model_connection || null,
    formulaConnection: graphObject.formulaConnection || graphObject.formula_connection || props?.formulaConnection || props?.formula_connection || null,
    agentHints: graphObject.agentHints || graphObject.agent_hints || props?.agentHints || props?.agent_hints || [],
    commonMistakes: graphObject.commonMistakes || graphObject.common_mistakes || props?.commonMistakes || props?.common_mistakes || [],
    graphWarnings: graphObject.graphWarnings || graphObject.graph_warnings || props?.graphWarnings || props?.graph_warnings || [],
    recommendedTab: graphObject.recommendedTab || graphObject.recommended_tab || props?.recommendedTab || props?.recommended_tab || "graficas",
    currentStep: graphObject.currentStep || graphObject.current_step || props?.currentStep || props?.current_step || null,

    contract: props?.graphContract || graphObject || null,
    source: "withGraphContext",
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

export function GraphContextBridge({
  graph,
  graphType,
  children,
  onGraphStateChange,
  ...props
}) {
  const { publishActiveGraphContext } = useGraphContext();

const lastPublishedSignatureRef = useRef("");
const lastDispatchedSignatureRef = useRef("");

const metaId = props?.meta?.id || null;
const metaLeafId = props?.meta?.leaf_id || null;
const metaTitle = props?.meta?.title || null;
const metaTitulo = props?.meta?.titulo || null;
const metaXAxis = props?.meta?.xAxis || props?.meta?.x_axis || null;
const metaYAxis = props?.meta?.yAxis || props?.meta?.y_axis || null;

const graphObject =
  graph && typeof graph === "object"
    ? graph
    : {};

const graphId =
  graphObject.graphId ||
  graphObject.graph_id ||
  graphObject.id ||
  graphObject.key ||
  props.graphId ||
  props.id ||
  null;

const graphTitle =
  graphObject.title ||
  graphObject.titulo ||
  graphObject.label ||
  graphObject.name ||
  props.title ||
  props.label ||
  null;

const graphLeafId =
  graphObject.leafId ||
  graphObject.leaf_id ||
  props.leafId ||
  props.leaf_id ||
  metaId ||
  metaLeafId ||
  null;

const graphTypeResolved =
  graphType ||
  graphObject.graphType ||
  graphObject.type ||
  props.graphType ||
  props.type ||
  null;

const uiLang = getUiLanguage(props.lang || props.language || props.locale);

const graphContext = useMemo(
  () =>
    buildGraphContext({
      graph:
        graph && typeof graph === "object"
          ? {
              ...graph,

              id: graphId,
              graphId,

              type: graphTypeResolved,
              graphType: graphTypeResolved,
              lang: uiLang,
              language: uiLang,
              locale: uiLang,

              title: graphTitle,
              label: graphObject.label || graphTitle,

              leafId: graphLeafId,
              leaf_id: graphLeafId,

              // Coord
              xAxis:
                graphObject.xAxis ||
                graphObject.x_axis ||
                props.xAxis ||
                props.x_axis ||
                metaXAxis ||
                null,

              yAxis:
                graphObject.yAxis ||
                graphObject.y_axis ||
                props.yAxis ||
                props.y_axis ||
                metaYAxis ||
                null,

              xMagnitude:
                graphObject.xMagnitude ||
                graphObject.x_magnitude ||
                props.xMagnitude ||
                props.x_magnitude ||
                null,

              yMagnitude:
                graphObject.yMagnitude ||
                graphObject.y_magnitude ||
                props.yMagnitude ||
                props.y_magnitude ||
                null,

              relation:
                graphObject.relation ||
                graphObject.physicalRelation ||
                graphObject.physical_relation ||
                props.relation ||
                props.physicalRelation ||
                props.physical_relation ||
                null,

              physicalReading:
                graphObject.physicalReading ||
                graphObject.physical_reading ||
                props.physicalReading ||
                props.physical_reading ||
                null,

              slopeMeaning:
                graphObject.slopeMeaning ||
                graphObject.slope_meaning ||
                props.slopeMeaning ||
                props.slope_meaning ||
                null,

              interceptMeaning:
                graphObject.interceptMeaning ||
                graphObject.intercept_meaning ||
                props.interceptMeaning ||
                props.intercept_meaning ||
                null,

              curvatureMeaning:
                graphObject.curvatureMeaning ||
                graphObject.curvature_meaning ||
                props.curvatureMeaning ||
                props.curvature_meaning ||
                null,

              signMeaning:
                graphObject.signMeaning ||
                graphObject.sign_meaning ||
                props.signMeaning ||
                props.sign_meaning ||
                null,

              areaMeaning:
                graphObject.areaMeaning ||
                graphObject.area_meaning ||
                props.areaMeaning ||
                props.area_meaning ||
                null,

              domainMeaning:
                graphObject.domainMeaning ||
                graphObject.domain_meaning ||
                props.domainMeaning ||
                props.domain_meaning ||
                null,

              // DCL
              sceneId:
                graphObject.sceneId ||
                graphObject.scene_id ||
                props.sceneId ||
                props.scene_id ||
                null,

              sceneLabel:
                graphObject.sceneLabel ||
                graphObject.scene_label ||
                props.sceneLabel ||
                props.scene_label ||
                null,

              selectedObject:
                graphObject.selectedObject ||
                graphObject.selected_object ||
                props.selectedObject ||
                props.selected_object ||
                null,

              selectedObjectId:
                graphObject.selectedObjectId ||
                graphObject.selected_object_id ||
                props.selectedObjectId ||
                props.selected_object_id ||
                null,

              selectedVector:
                graphObject.selectedVector ||
                graphObject.selected_vector ||
                props.selectedVector ||
                props.selected_vector ||
                null,

              forces:
                graphObject.forces ||
                props.forces ||
                [],

              visibleForces:
                graphObject.visibleForces ||
                graphObject.visible_forces ||
                props.visibleForces ||
                props.visible_forces ||
                graphObject.forces ||
                props.forces ||
                [],

              hiddenForces:
                graphObject.hiddenForces ||
                graphObject.hidden_forces ||
                props.hiddenForces ||
                props.hidden_forces ||
                [],

              components:
                graphObject.components ||
                props.components ||
                [],

              resultant:
                graphObject.resultant ||
                props.resultant ||
                null,

              axisConvention:
                graphObject.axisConvention ||
                graphObject.axis_convention ||
                props.axisConvention ||
                props.axis_convention ||
                null,

              positiveDirection:
                graphObject.positiveDirection ||
                graphObject.positive_direction ||
                props.positiveDirection ||
                props.positive_direction ||
                null,

              forceBalanceReading:
                graphObject.forceBalanceReading ||
                graphObject.force_balance_reading ||
                props.forceBalanceReading ||
                props.force_balance_reading ||
                null,

              equilibriumHints:
                graphObject.equilibriumHints ||
                graphObject.equilibrium_hints ||
                props.equilibriumHints ||
                props.equilibrium_hints ||
                [],

              // SVG
              objects:
                graphObject.objects ||
                props.objects ||
                [],

              mainObject:
                graphObject.mainObject ||
                graphObject.main_object ||
                props.mainObject ||
                props.main_object ||
                null,

              referenceFrame:
                graphObject.referenceFrame ||
                graphObject.reference_frame ||
                props.referenceFrame ||
                props.reference_frame ||
                null,

              geometry:
                graphObject.geometry ||
                props.geometry ||
                null,

              interactions:
                graphObject.interactions ||
                props.interactions ||
                null,

              modelElements:
                graphObject.modelElements ||
                graphObject.model_elements ||
                props.modelElements ||
                props.model_elements ||
                [],

              visualCues:
                graphObject.visualCues ||
                graphObject.visual_cues ||
                props.visualCues ||
                props.visual_cues ||
                [],

              scaleMeaning:
                graphObject.scaleMeaning ||
                graphObject.scale_meaning ||
                props.scaleMeaning ||
                props.scale_meaning ||
                null,

              // Comunes
              modelConnection:
                graphObject.modelConnection ||
                graphObject.model_connection ||
                props.modelConnection ||
                props.model_connection ||
                null,

              formulaConnection:
                graphObject.formulaConnection ||
                graphObject.formula_connection ||
                props.formulaConnection ||
                props.formula_connection ||
                null,

              readingFocus:
                graphObject.readingFocus ||
                graphObject.reading_focus ||
                props.readingFocus ||
                props.reading_focus ||
                null,

              agentHints:
                graphObject.agentHints ||
                graphObject.agent_hints ||
                props.agentHints ||
                props.agent_hints ||
                [],

              commonMistakes:
                graphObject.commonMistakes ||
                graphObject.common_mistakes ||
                props.commonMistakes ||
                props.common_mistakes ||
                [],

              recommendedTab:
                graphObject.recommendedTab ||
                graphObject.recommended_tab ||
                props.recommendedTab ||
                props.recommended_tab ||
                "graficas",

              graphWarnings:
                graphObject.graphWarnings ||
                graphObject.graph_warnings ||
                props.graphWarnings ||
                props.graph_warnings ||
                [],

              currentStep:
                graphObject.currentStep ||
                graphObject.current_step ||
                props.currentStep ||
                props.current_step ||
                null,

              source:
                graphObject.source ||
                "withGraphContext",
            }
          : graph,

      graphType: graphTypeResolved,

      props: {
        graphMeta: props.graphMeta,
        graphContract: props.graphContract,

        graphId,
        id: graphId,

        type: graphTypeResolved,
        graphType: graphTypeResolved,

        title: graphTitle,
        label: props.label,

        leafId: graphLeafId,
        leaf_id: graphLeafId,
        leafTitle: props.leafTitle,

        // Coord
        xAxis: props.xAxis,
        x_axis: props.x_axis,
        yAxis: props.yAxis,
        y_axis: props.y_axis,
        xMagnitude: props.xMagnitude,
        x_magnitude: props.x_magnitude,
        yMagnitude: props.yMagnitude,
        y_magnitude: props.y_magnitude,

        relation: props.relation,
        physicalRelation: props.physicalRelation,
        physical_relation: props.physical_relation,
        physicalReading: props.physicalReading,
        physical_reading: props.physical_reading,
        slopeMeaning: props.slopeMeaning,
        slope_meaning: props.slope_meaning,
        interceptMeaning: props.interceptMeaning,
        intercept_meaning: props.intercept_meaning,
        curvatureMeaning: props.curvatureMeaning,
        curvature_meaning: props.curvature_meaning,
        signMeaning: props.signMeaning,
        sign_meaning: props.sign_meaning,
        areaMeaning: props.areaMeaning,
        area_meaning: props.area_meaning,
        domainMeaning: props.domainMeaning,
        domain_meaning: props.domain_meaning,

        // DCL
        sceneId: props.sceneId,
        scene_id: props.scene_id,
        sceneLabel: props.sceneLabel,
        scene_label: props.scene_label,
        selectedObject: props.selectedObject,
        selected_object: props.selected_object,
        selectedObjectId: props.selectedObjectId,
        selected_object_id: props.selected_object_id,
        selectedVector: props.selectedVector,
        selected_vector: props.selected_vector,
        forces: props.forces,
        visibleForces: props.visibleForces,
        visible_forces: props.visible_forces,
        hiddenForces: props.hiddenForces,
        hidden_forces: props.hidden_forces,
        components: props.components,
        resultant: props.resultant,
        axisConvention: props.axisConvention,
        axis_convention: props.axis_convention,
        positiveDirection: props.positiveDirection,
        positive_direction: props.positive_direction,
        forceBalanceReading: props.forceBalanceReading,
        force_balance_reading: props.force_balance_reading,
        equilibriumHints: props.equilibriumHints,
        equilibrium_hints: props.equilibrium_hints,

        // SVG
        objects: props.objects,
        mainObject: props.mainObject,
        main_object: props.main_object,
        referenceFrame: props.referenceFrame,
        reference_frame: props.reference_frame,
        geometry: props.geometry,
        interactions: props.interactions,
        modelElements: props.modelElements,
        model_elements: props.model_elements,
        visualCues: props.visualCues,
        visual_cues: props.visual_cues,
        scaleMeaning: props.scaleMeaning,
        scale_meaning: props.scale_meaning,

        // Comunes
        modelConnection: props.modelConnection,
        model_connection: props.model_connection,
        formulaConnection: props.formulaConnection,
        formula_connection: props.formula_connection,
        readingFocus: props.readingFocus,
        reading_focus: props.reading_focus,
        agentHints: props.agentHints,
        agent_hints: props.agent_hints,
        commonMistakes: props.commonMistakes,
        common_mistakes: props.common_mistakes,
        recommendedTab: props.recommendedTab,
        recommended_tab: props.recommended_tab,
        graphWarnings: props.graphWarnings,
        graph_warnings: props.graph_warnings,
        currentStep: props.currentStep,
        current_step: props.current_step,

        meta: {
          id: metaId,
          leaf_id: metaLeafId,
          title: metaTitle,
          titulo: metaTitulo,
          xAxis: metaXAxis,
          yAxis: metaYAxis,
        },
      },
    }),
  [
    graph,
    graphType,
    graphTypeResolved,
    graphObject,
    graphId,
    graphTitle,
    graphLeafId,
    metaId,
    metaLeafId,
    metaTitle,
    metaTitulo,
    metaXAxis,
    metaYAxis,

    props.graphMeta,
    props.graphContract,
    props.graphId,
    props.id,
    props.type,
    props.graphType,
    props.title,
    props.label,
    props.leafId,
    props.leaf_id,
    props.leafTitle,

    props.xAxis,
    props.x_axis,
    props.yAxis,
    props.y_axis,
    props.xMagnitude,
    props.x_magnitude,
    props.yMagnitude,
    props.y_magnitude,

    props.relation,
    props.physicalRelation,
    props.physical_relation,
    props.physicalReading,
    props.physical_reading,
    props.slopeMeaning,
    props.slope_meaning,
    props.interceptMeaning,
    props.intercept_meaning,
    props.curvatureMeaning,
    props.curvature_meaning,
    props.signMeaning,
    props.sign_meaning,
    props.areaMeaning,
    props.area_meaning,
    props.domainMeaning,
    props.domain_meaning,

    props.sceneId,
    props.scene_id,
    props.sceneLabel,
    props.scene_label,
    props.selectedObject,
    props.selected_object,
    props.selectedObjectId,
    props.selected_object_id,
    props.selectedVector,
    props.selected_vector,
    props.forces,
    props.visibleForces,
    props.visible_forces,
    props.hiddenForces,
    props.hidden_forces,
    props.components,
    props.resultant,
    props.axisConvention,
    props.axis_convention,
    props.positiveDirection,
    props.positive_direction,
    props.forceBalanceReading,
    props.force_balance_reading,
    props.equilibriumHints,
    props.equilibrium_hints,

    props.objects,
    props.mainObject,
    props.main_object,
    props.referenceFrame,
    props.reference_frame,
    props.geometry,
    props.interactions,
    props.modelElements,
    props.model_elements,
    props.visualCues,
    props.visual_cues,
    props.scaleMeaning,
    props.scale_meaning,

    props.modelConnection,
    props.model_connection,
    props.formulaConnection,
    props.formula_connection,
    props.readingFocus,
    props.reading_focus,
    props.agentHints,
    props.agent_hints,
    props.commonMistakes,
    props.common_mistakes,
    props.recommendedTab,
    props.recommended_tab,
    props.graphWarnings,
    props.graph_warnings,
    props.currentStep,
    props.current_step,
    uiLang,
  ]
);

useEffect(() => {
  if (!graphContext) return;

  const nextSignature = getGraphContextSignature(graphContext);

  if (lastPublishedSignatureRef.current !== nextSignature) {
    lastPublishedSignatureRef.current = nextSignature;

    publishActiveGraphContext?.(graphContext, {
      forceActive: true,
      source: graphContext.source || "withGraphContext",
    });
  }

  if (lastDispatchedSignatureRef.current !== nextSignature) {
    lastDispatchedSignatureRef.current = nextSignature;
    onGraphStateChange?.(graphContext);
    dispatchActiveGraphContext(graphContext);
  }
}, [graphContext, publishActiveGraphContext, onGraphStateChange]);

return children;
}

export function withGraphContext(Component, graphType, graph = null) {
  function WrappedGraphContextComponent(props) {
    return (
      <GraphContextBridge
        graph={graph}
        graphType={graphType}
        onGraphStateChange={props.onGraphStateChange}
        {...props}
      >
        <Component {...props} />
      </GraphContextBridge>
    );
  }

  WrappedGraphContextComponent.displayName = `WithGraphContext(${
    Component.displayName || Component.name || graphType || "Graph"
  })`;

  return WrappedGraphContextComponent;
}

export function withGraphContextRegistry(registry) {
  if (!registry || typeof registry !== "object") return registry;

  return Object.fromEntries(
    Object.entries(registry).map(([leafId, graphSet]) => {
      if (!graphSet || typeof graphSet !== "object") {
        return [leafId, graphSet];
      }

      const wrappedGraphSet = Object.fromEntries(
        Object.entries(graphSet).map(([graphType, graphEntry]) => {
          const normalizedType = normalizeGraphType(graphType);

          if (!normalizedType) {
            return [graphType, graphEntry];
          }

          if (typeof graphEntry === "function") {
            return [
              graphType,
              withGraphContext(graphEntry, normalizedType, {
                id: `${leafId}-${normalizedType}`,
                title: `Gráfica ${normalizedType}`,
                leafId,
              }),
            ];
          }

          if (
            graphEntry &&
            typeof graphEntry === "object" &&
            typeof graphEntry.component === "function"
          ) {
            return [
              graphType,
              {
                ...graphEntry,
                component: withGraphContext(
                  graphEntry.component,
                  normalizedType,
                  {
                    ...graphEntry,
                    leafId,
                  }
                ),
              },
            ];
          }

          return [graphType, graphEntry];
        })
      );

      return [leafId, wrappedGraphSet];
    })
  );
}
