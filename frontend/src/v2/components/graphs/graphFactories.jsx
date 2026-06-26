import React from "react";
import { useGraphContext } from "../../agent/GraphContextProvider.jsx";
import CoordGraphRenderer from "../Coord/CoordGraphRenderer.jsx";
import SvgProfileRenderer from "../SVG/SvgProfileRenderer.jsx";
import DclRenderer from "../DCL/DclRenderer.jsx";
import GraphPageV2 from "./GraphPageV2.jsx";

function pickLocalizedText(value, lang = "es", fallback = "") {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    return value?.[lang] || value?.es || value?.en || fallback;
  }
  return fallback;
}

function normalizeGraphProps(props = {}) {
  const lang = props.lang === "en" ? "en" : "es";
  const params = props.params ?? props.sharedParams ?? props.paramsIn ?? null;
  const sharedParams = props.sharedParams ?? props.params ?? props.paramsIn ?? null;
  const paramsIn = props.paramsIn ?? props.sharedParams ?? props.params ?? null;

  return {
    ...props,
    lang,
    title: props.title || "",
    params,
    sharedParams,
    paramsIn,
    meta: props.meta || null,
    leafRelPath: props.leafRelPath || props.meta?.ruta_relativa || "",
    interpretationDoc: props.interpretationDoc ?? null,
    onGraphStateChange: props.onGraphStateChange ?? null,
    onInterpretationContextChange: props.onInterpretationContextChange ?? null,
    onSharedParamsChange:
      props.onSharedParamsChange ?? props.onApplyToCalculator ?? null,
  };
}

function GraphContractFailure({ lang, kind, componentName, error }) {
  const title =
    lang === "en" ? "Graph rendering error" : "Error al renderizar el gráfico";
  const summary =
    lang === "en"
      ? "The common graph contract prevented the page from breaking. Review the component or its profile."
      : "El contrato común de gráficos evitó que la página se rompiera. Revisa el componente o su profile.";
  const kindLabel =
    kind === "svg"
      ? "SVG"
      : kind === "dcl"
        ? "DCL"
        : kind === "coord"
          ? "Coord"
          : "Graph";

  return (
    <div className="v2-card" style={{ display: "grid", gap: 10 }}>
      <div className="v2-card-title">{title}</div>
      <div className="muted">{summary}</div>
      <div style={{ fontSize: 13, opacity: 0.88 }}>
        <strong>{kindLabel}</strong>
        {" · "}
        <span>{componentName || (lang === "en" ? "Unnamed component" : "Componente sin nombre")}</span>
      </div>
      {error?.message ? (
        <pre
          style={{
            margin: 0,
            whiteSpace: "pre-wrap",
            overflowWrap: "anywhere",
            padding: 12,
            borderRadius: 12,
            background: "rgba(15,23,42,0.7)",
            color: "#f8fafc",
            fontSize: 12,
          }}
        >
          {error.message}
        </pre>
      ) : null}
    </div>
  );
}

class GraphContractBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("[graphFactories] graph render failed", {
      error,
      info,
      kind: this.props.kind,
      componentName: this.props.componentName,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <GraphContractFailure
          lang={this.props.lang}
          kind={this.props.kind}
          componentName={this.props.componentName}
          error={this.state.error}
        />
      );
    }
    return this.props.children;
  }
}

function mergeParamSources(...sources) {
  return sources.reduce((acc, source) => {
    if (!source || typeof source !== "object") return acc;
    return {
      ...acc,
      ...source,
    };
  }, {});
}

export function createSvgGraph({ profile, mapProfile, displayName, Renderer, Component }) {
  function CreatedSvgGraph(props) {
    const normalized = normalizeGraphProps(props);
    const mergedSharedParams = mergeParamSources(
      normalized.paramsIn,
      normalized.params,
      normalized.sharedParams
    );
    const resolvedProfile =
      typeof mapProfile === "function"
        ? mapProfile(profile, normalized)
        : profile;

    return (
      <GraphContractBoundary
        lang={normalized.lang}
        kind="svg"
        componentName={displayName}
      >
        {Component ? (
          <Component
            {...props}
            lang={normalized.lang}
            params={normalized.params}
            sharedParams={mergedSharedParams}
            paramsIn={normalized.paramsIn}
            interpretationDoc={normalized.interpretationDoc}
            onGraphStateChange={normalized.onGraphStateChange}
            onInterpretationContextChange={normalized.onInterpretationContextChange}
            onSharedParamsChange={normalized.onSharedParamsChange}
            leafRelPath={normalized.leafRelPath}
            meta={normalized.meta}
          />
        ) : (
          <SvgProfileRenderer
            profile={resolvedProfile}
            Renderer={Renderer}
            lang={normalized.lang}
            sharedParams={mergedSharedParams}
            interpretationDoc={normalized.interpretationDoc}
            onGraphStateChange={normalized.onGraphStateChange}
            onInterpretationContextChange={normalized.onInterpretationContextChange}
            onApplyToCalculator={normalized.onSharedParamsChange}
          />
        )}
      </GraphContractBoundary>
    );
  }

  CreatedSvgGraph.displayName =
    displayName || Component?.displayName || Component?.name || profile?.meta?.id || "CreatedSvgGraph";
  return CreatedSvgGraph;
}

export function createDclGraph({ profile, mapProfile, displayName }) {
  function CreatedDclGraph(props) {
    const normalized = normalizeGraphProps(props);
    const resolvedProfile =
      typeof mapProfile === "function"
        ? mapProfile(profile, normalized)
        : profile;

    return (
      <GraphContractBoundary
        lang={normalized.lang}
        kind="dcl"
        componentName={displayName}
      >
        <DclRenderer
          profile={resolvedProfile}
          lang={normalized.lang}
          sharedParams={normalized.sharedParams}
          paramsIn={normalized.paramsIn}
          interpretationDoc={normalized.interpretationDoc}
          onGraphStateChange={normalized.onGraphStateChange}
          onInterpretationContextChange={normalized.onInterpretationContextChange}
        />
      </GraphContractBoundary>
    );
  }

  CreatedDclGraph.displayName = displayName || profile?.meta?.id || "CreatedDclGraph";
  return CreatedDclGraph;
}

export function createCoordGraph({ Component, displayName }) {
  function CreatedCoordGraph(props) {
    const normalized = normalizeGraphProps(props);

    return (
      <GraphContractBoundary
        lang={normalized.lang}
        kind="coord"
        componentName={displayName}
      >
        <CoordGraphRenderer
          graphId={
            normalized.meta?.id ||
            normalized.leafRelPath ||
            displayName ||
            Component?.name ||
            "coord_graph"
          }
          title={
            normalized.title ||
            normalized.meta?.titulo ||
            normalized.meta?.title ||
            displayName ||
            "Gráfica de coordenadas"
          }
          leafId={normalized.meta?.id || normalized.meta?.leaf_id || null}
          xAxis={normalized.meta?.xAxis || normalized.meta?.x_axis || null}
          yAxis={normalized.meta?.yAxis || normalized.meta?.y_axis || null}
          onGraphStateChange={normalized.onGraphStateChange}
        >
          <Component
            {...props}
            lang={normalized.lang}
            title={normalized.title}
            params={normalized.params}
            sharedParams={normalized.sharedParams}
            paramsIn={normalized.paramsIn}
            interpretationDoc={normalized.interpretationDoc}
            onGraphStateChange={normalized.onGraphStateChange}
            onInterpretationContextChange={normalized.onInterpretationContextChange}
            onSharedParamsChange={normalized.onSharedParamsChange}
            leafRelPath={normalized.leafRelPath}
            meta={normalized.meta}
          />
        </CoordGraphRenderer>
      </GraphContractBoundary>
    );
  }

  CreatedCoordGraph.displayName = displayName || Component?.name || "CreatedCoordGraph";
  return CreatedCoordGraph;
}

export function createCoordGraphPage({
  displayName,
  title,
  defaultParams,
  controls = [],
  compute,
  render,
}) {
  function CoordGraphPage(props) {
    const localizedTitle = props.title || pickLocalizedText(title, props.lang, "Graph");
    const localizedControls = React.useMemo(
      () => controls.map((control) => ({
        ...control,
        label: pickLocalizedText(control.label, props.lang, control.id),
      })),
      [props.lang]
    );

    return (
      <GraphPageV2
        title={localizedTitle}
        params={props.params}
        paramsFromCalculator={props.paramsIn}
        sharedParams={props.sharedParams}
        interpretationDoc={props.interpretationDoc}
        meta={props.meta || (props.leafRelPath ? { ruta_relativa: props.leafRelPath } : null)}
        lang={props.lang}
        onGraphStateChange={props.onGraphStateChange}
        onInterpretationContextChange={props.onInterpretationContextChange}
        defaultParams={defaultParams}
        controls={localizedControls}
        compute={compute}
      >
        {render}
      </GraphPageV2>
    );
  }

  return createCoordGraph({ Component: CoordGraphPage, displayName });
}

export { normalizeGraphProps, pickLocalizedText };
