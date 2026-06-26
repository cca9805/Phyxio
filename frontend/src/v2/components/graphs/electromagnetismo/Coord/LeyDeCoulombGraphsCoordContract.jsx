import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function LeyDeCoulombGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="ley-de-coulomb"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Ley de Coulomb",
      en: "Coulomb's Law",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿De qué depende la fuerza entre dos cargas puntuales y cómo varía con la distancia?",
      en: "What determines the force between two point charges and how does it vary with distance?",
    },
    magnitud_estrella: "F_C",
    variable_control: "sharedParams",
  },
  axes: {
    x: "distancia r12 o carga q",
    y: "fuerza de Coulomb F_C",
  },
  formula: "F_C = k_e * q1 * q2 / r12^2",
};

const axes = {
  x: "distancia r12 o carga q",
  y: "fuerza de Coulomb F_C",
};

const formula = "F_C = k_e * q1 * q2 / r12^2";

LeyDeCoulombGraphsCoordView.graphContract = graphContract;
LeyDeCoulombGraphsCoordView.graph_identity = graphContract.graph_identity;
LeyDeCoulombGraphsCoordView.axes = axes;
LeyDeCoulombGraphsCoordView.formula = formula;

const LeyDeCoulombGraphsCoordContract = createCoordGraph({
  Component: LeyDeCoulombGraphsCoordView,
  displayName: "LeyDeCoulombGraphsCoordContract",
});

LeyDeCoulombGraphsCoordContract.graphContract = graphContract;
LeyDeCoulombGraphsCoordContract.graph_identity = graphContract.graph_identity;
LeyDeCoulombGraphsCoordContract.axes = axes;
LeyDeCoulombGraphsCoordContract.formula = formula;

export default LeyDeCoulombGraphsCoordContract;
