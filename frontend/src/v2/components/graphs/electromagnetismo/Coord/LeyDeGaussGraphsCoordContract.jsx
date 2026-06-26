import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = carga encerrada Q_enc (C) | YAxis = flujo electrico Phi_E (N m^2/C)

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function LeyDeGaussGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="ley-de-gauss"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Ley de Gauss",
      en: "Gauss's Law",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo determina la carga encerrada el flujo eléctrico total a través de cualquier superficie cerrada?",
      en: "How does the enclosed charge determine the total electric flux through any closed surface?",
    },
    magnitud_estrella: "Phi_E",
    variable_control: "Q_enc",
  },
  axes: {
    x: "carga encerrada Q_enc (C)",
    y: "flujo electrico Phi_E (N m^2/C)",
  },
  formula: "Phi_E = Q_enc / epsilon_0",
};

const axes = {
  x: "carga encerrada Q_enc (C)",
  y: "flujo electrico Phi_E (N m^2/C)",
};

const formula = "Phi_E = Q_enc / epsilon_0";

LeyDeGaussGraphsCoordView.graphContract = graphContract;
LeyDeGaussGraphsCoordView.graph_identity = graphContract.graph_identity;
LeyDeGaussGraphsCoordView.axes = axes;
LeyDeGaussGraphsCoordView.formula = formula;

const LeyDeGaussGraphsCoordContract = createCoordGraph({
  Component: LeyDeGaussGraphsCoordView,
  displayName: "LeyDeGaussGraphsCoordContract",
});

LeyDeGaussGraphsCoordContract.graphContract = graphContract;
LeyDeGaussGraphsCoordContract.graph_identity = graphContract.graph_identity;
LeyDeGaussGraphsCoordContract.axes = axes;
LeyDeGaussGraphsCoordContract.formula = formula;

export default LeyDeGaussGraphsCoordContract;
