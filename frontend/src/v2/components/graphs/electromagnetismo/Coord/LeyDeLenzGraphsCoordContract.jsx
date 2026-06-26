import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function LeyDeLenzGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="ley-de-lenz"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Ley de lenz",
      en: "Lenz's Law",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como fija la ley de Lenz el sentido de la fem inducida frente a un cambio de flujo?",
      en: "How does Lenz's law set the direction of induced emf against a flux change?",
    },
    magnitud_estrella: "epsilon_ind",
    variable_control: "r_Phi",
  },
  axes: {
    x: "rapidez de cambio de flujo r_Phi (Wb/s)",
    y: "fem inducida epsilon_ind (V)",
  },
  formula: "epsilon_ind = -N * r_Phi",
};

const axes = {
  x: "rapidez de cambio de flujo r_Phi (Wb/s)",
  y: "fem inducida epsilon_ind (V)",
};

const formula = "epsilon_ind = -N * r_Phi";

LeyDeLenzGraphsCoordView.graphContract = graphContract;
LeyDeLenzGraphsCoordView.graph_identity = graphContract.graph_identity;
LeyDeLenzGraphsCoordView.axes = axes;
LeyDeLenzGraphsCoordView.formula = formula;

const LeyDeLenzGraphsCoordContract = createCoordGraph({
  Component: LeyDeLenzGraphsCoordView,
  displayName: "LeyDeLenzGraphsCoordContract",
});

LeyDeLenzGraphsCoordContract.graphContract = graphContract;
LeyDeLenzGraphsCoordContract.graph_identity = graphContract.graph_identity;
LeyDeLenzGraphsCoordContract.axes = axes;
LeyDeLenzGraphsCoordContract.formula = formula;

export default LeyDeLenzGraphsCoordContract;
