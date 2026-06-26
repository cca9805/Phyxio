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

export default function CoordGraphRenderer({
  children,
  graphId,
  title,
  leafId,
  xAxis = null,
  yAxis = null,
  readingFocus = "leer ejes, pendiente, tendencia, signos y relación entre magnitudes",
  onGraphStateChange,
}) {
  const { publishActiveGraphContext, clearActiveGraphContext } = useGraphContext();

  const graphContext = useMemo(
    () => ({
      type: "Coord",
      graphType: "Coord",
      id: graphId || "coord_graph",
      title: title || "Gráfica de coordenadas",
      leafId: leafId || null,
      xAxis,
      yAxis,
      readingFocus,
      forces: [],
      hiddenForces: [],
      graphWarnings: [],
      equilibriumHints: [],
      source: "CoordGraphRenderer",
    }),
    [graphId, title, leafId, xAxis, yAxis, readingFocus]
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