import { useEffect, useMemo } from "react";
import { useGraphContext } from "../../agent/GraphContextProvider.jsx";

function dispatchActiveGraphContext(context) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("phyxio:active-graph-context", {
      detail: context || null,
    })
  );
}

export default function SvgGraphRenderer({
  children,
  graphId,
  title,
  leafId,
  sceneId = null,
  sceneLabel = null,
  readingFocus = "identificar escena, objetos, posiciones y relaciones geométricas",
  onGraphStateChange,
}) {
  const { publishActiveGraphContext, clearActiveGraphContext } = useGraphContext();

  const graphContext = useMemo(
    () => ({
      type: "Svg",
      graphType: "Svg",
      id: graphId || "svg_graph",
      title: title || "Representación visual",
      leafId: leafId || null,
      sceneId,
      sceneLabel,
      readingFocus,
      forces: [],
      hiddenForces: [],
      graphWarnings: [],
      equilibriumHints: [],
      source: "SvgGraphRenderer",
    }),
    [graphId, title, leafId, sceneId, sceneLabel, readingFocus]
  );

  useEffect(() => {
    publishActiveGraphContext?.(graphContext);
    onGraphStateChange?.(graphContext);
    dispatchActiveGraphContext(graphContext);

    return () => {
      clearActiveGraphContext?.();
      onGraphStateChange?.(null);
      dispatchActiveGraphContext(null);
    };
  }, [
    graphContext,
    publishActiveGraphContext,
    clearActiveGraphContext,
    onGraphStateChange,
  ]);

  return children;
}
