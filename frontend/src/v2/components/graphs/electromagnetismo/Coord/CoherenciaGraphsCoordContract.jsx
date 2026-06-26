import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = diferencia de camino Delta_L (m) | YAxis = coherencia relativa C_rel (1)

function CoherenciaGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="coherencia"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Coherencia",
      en: "Coherence",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina la coherencia si una fuente mantiene franjas de interferencia observables?",
      en: "How does coherence determine whether a source maintains observable interference fringes?",
    },
    magnitud_estrella: "C_rel",
    variable_control: "Delta_L",
  },
  axes: {
    x: "diferencia de camino Delta_L (m)",
    y: "coherencia relativa C_rel (1)",
  },
  formula: "C_rel = L_c / (L_c + Delta_L)",
};

const axes = {
  x: "diferencia de camino Delta_L (m)",
  y: "coherencia relativa C_rel (1)",
};

const formula = "C_rel = L_c / (L_c + Delta_L)";

CoherenciaGraphsCoordView.graphContract = graphContract;
CoherenciaGraphsCoordView.graph_identity = graphContract.graph_identity;
CoherenciaGraphsCoordView.axes = axes;
CoherenciaGraphsCoordView.formula = formula;

const CoherenciaGraphsCoordContract = createCoordGraph({
  Component: CoherenciaGraphsCoordView,
  displayName: "CoherenciaGraphsCoordContract",
});

CoherenciaGraphsCoordContract.graphContract = graphContract;
CoherenciaGraphsCoordContract.graph_identity = graphContract.graph_identity;
CoherenciaGraphsCoordContract.axes = axes;
CoherenciaGraphsCoordContract.formula = formula;

export default CoherenciaGraphsCoordContract;
