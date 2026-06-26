import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = posición espacial x (m) | YAxis = posición espacial y (m)

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function LineasDeCampoGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="lineas-de-campo"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Líneas de campo eléctrico",
      en: "Electric field lines",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo representan las líneas de campo la dirección, el sentido y la intensidad del campo eléctrico E en el espacio?",
      en: "How do field lines represent the direction, sense, and intensity of the electric field E in space?",
    },
    magnitud_estrella: "E",
    variable_control: "sharedParams",
  },
  axes: {
    x: "posición espacial x (m)",
    y: "posición espacial y (m)",
  },
  formula: "Φ_E = E·A·cos(θ)  |  ρ_L = k·E",
};

const axes = {
  x: "posición espacial x (m)",
  y: "posición espacial y (m)",
};

const formula = "Φ_E = E·A·cos(θ)  |  ρ_L = k·E";

LineasDeCampoGraphsCoordView.graphContract = graphContract;
LineasDeCampoGraphsCoordView.graph_identity = graphContract.graph_identity;
LineasDeCampoGraphsCoordView.axes = axes;
LineasDeCampoGraphsCoordView.formula = formula;

const LineasDeCampoGraphsCoordContract = createCoordGraph({
  Component: LineasDeCampoGraphsCoordView,
  displayName: "LineasDeCampoGraphsCoordContract",
});

LineasDeCampoGraphsCoordContract.graphContract = graphContract;
LineasDeCampoGraphsCoordContract.graph_identity = graphContract.graph_identity;
LineasDeCampoGraphsCoordContract.axes = axes;
LineasDeCampoGraphsCoordContract.formula = formula;

export default LineasDeCampoGraphsCoordContract;
