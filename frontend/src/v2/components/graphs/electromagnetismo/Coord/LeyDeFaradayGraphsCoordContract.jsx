import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function LeyDeFaradayGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="ley-de-faraday"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Ley de faraday",
      en: "Faraday's Law",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina la rapidez de cambio del flujo magnetico la fem inducida en un circuito?",
      en: "How does the rate of change of magnetic flux determine the emf induced in a circuit?",
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

LeyDeFaradayGraphsCoordView.graphContract = graphContract;
LeyDeFaradayGraphsCoordView.graph_identity = graphContract.graph_identity;
LeyDeFaradayGraphsCoordView.axes = axes;
LeyDeFaradayGraphsCoordView.formula = formula;

const LeyDeFaradayGraphsCoordContract = createCoordGraph({
  Component: LeyDeFaradayGraphsCoordView,
  displayName: "LeyDeFaradayGraphsCoordContract",
});

LeyDeFaradayGraphsCoordContract.graphContract = graphContract;
LeyDeFaradayGraphsCoordContract.graph_identity = graphContract.graph_identity;
LeyDeFaradayGraphsCoordContract.axes = axes;
LeyDeFaradayGraphsCoordContract.formula = formula;

export default LeyDeFaradayGraphsCoordContract;
