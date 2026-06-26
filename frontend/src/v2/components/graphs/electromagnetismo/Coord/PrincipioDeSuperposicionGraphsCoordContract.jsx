import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function PrincipioDeSuperposicionGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="principio-de-superposicion"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Principio de superposicion",
      en: "Superposition Principle",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se combina la acción de múltiples cargas sobre una carga de prueba para determinar la fuerza eléctrica y el campo eléctrico resultantes?",
      en: "How does the action of multiple charges on a test charge combine to determine the resulting electric force and electric field?",
    },
    magnitud_estrella: "F_total",
    variable_control: "r_i",
  },
  axes: {
    x: "distancia r_i (m)",
    y: "fuerza total F_total (N)",
  },
  formula: "F_total = k_e * q_i * N_cargas / r_i^2",
};

const axes = {
  x: "distancia r_i (m)",
  y: "fuerza total F_total (N)",
};

const formula = "F_total = k_e * q_i * N_cargas / r_i^2";

PrincipioDeSuperposicionGraphsCoordView.graphContract = graphContract;
PrincipioDeSuperposicionGraphsCoordView.graph_identity = graphContract.graph_identity;
PrincipioDeSuperposicionGraphsCoordView.axes = axes;
PrincipioDeSuperposicionGraphsCoordView.formula = formula;

const PrincipioDeSuperposicionGraphsCoordContract = createCoordGraph({
  Component: PrincipioDeSuperposicionGraphsCoordView,
  displayName: "PrincipioDeSuperposicionGraphsCoordContract",
});

PrincipioDeSuperposicionGraphsCoordContract.graphContract = graphContract;
PrincipioDeSuperposicionGraphsCoordContract.graph_identity = graphContract.graph_identity;
PrincipioDeSuperposicionGraphsCoordContract.axes = axes;
PrincipioDeSuperposicionGraphsCoordContract.formula = formula;

export default PrincipioDeSuperposicionGraphsCoordContract;
