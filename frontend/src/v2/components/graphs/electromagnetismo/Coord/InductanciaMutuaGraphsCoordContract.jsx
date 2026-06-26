import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function InductanciaMutuaGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="inductancia-mutua"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Inductancia mutua",
      en: "Mutual Inductance",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina la inductancia mutua la fem inducida en una bobina por cambios de corriente en otra?",
      en: "How does mutual inductance determine the emf induced in one coil by current changes in another?",
    },
    magnitud_estrella: "M",
    variable_control: "I1",
  },
  axes: {
    x: "corriente primaria I1 (A)",
    y: "flujo enlazado lambda_21 (Wb)",
  },
  formula: "lambda_21 = M * I1",
};

const axes = {
  x: "corriente primaria I1 (A)",
  y: "flujo enlazado lambda_21 (Wb)",
};

const formula = "lambda_21 = M * I1";

InductanciaMutuaGraphsCoordView.graphContract = graphContract;
InductanciaMutuaGraphsCoordView.graph_identity = graphContract.graph_identity;
InductanciaMutuaGraphsCoordView.axes = axes;
InductanciaMutuaGraphsCoordView.formula = formula;

const InductanciaMutuaGraphsCoordContract = createCoordGraph({
  Component: InductanciaMutuaGraphsCoordView,
  displayName: "InductanciaMutuaGraphsCoordContract",
});

InductanciaMutuaGraphsCoordContract.graphContract = graphContract;
InductanciaMutuaGraphsCoordContract.graph_identity = graphContract.graph_identity;
InductanciaMutuaGraphsCoordContract.axes = axes;
InductanciaMutuaGraphsCoordContract.formula = formula;

export default InductanciaMutuaGraphsCoordContract;
