import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function AutoinduccionGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="autoinduccion"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Autoinduccion",
      en: "Self-Inductance",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina la autoinduccion la fem que se opone a un cambio de corriente en una bobina?",
      en: "How does self-inductance determine the emf that opposes a current change in a coil?",
    },
    magnitud_estrella: "L",
    variable_control: "I",
  },
  axes: {
    x: "corriente I (A)",
    y: "flujo enlazado lambda_B (Wb)",
  },
  formula: "lambda_B = L * I",
};

const axes = {
  x: "corriente I (A)",
  y: "flujo enlazado lambda_B (Wb)",
};

const formula = "lambda_B = L * I";

AutoinduccionGraphsCoordView.graphContract = graphContract;
AutoinduccionGraphsCoordView.graph_identity = graphContract.graph_identity;
AutoinduccionGraphsCoordView.axes = axes;
AutoinduccionGraphsCoordView.formula = formula;

const AutoinduccionGraphsCoordContract = createCoordGraph({
  Component: AutoinduccionGraphsCoordView,
  displayName: "AutoinduccionGraphsCoordContract",
});

AutoinduccionGraphsCoordContract.graphContract = graphContract;
AutoinduccionGraphsCoordContract.graph_identity = graphContract.graph_identity;
AutoinduccionGraphsCoordContract.axes = axes;
AutoinduccionGraphsCoordContract.formula = formula;

export default AutoinduccionGraphsCoordContract;
