import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = número de onda k (rad/m) | YAxis = frecuencia angular ω (rad/s)

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function EcuacionDeOndaElectromagneticaGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="ecuacion-de-onda-electromagnetica"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Ecuación de onda electromagnética",
      en: "Electromagnetic Wave Equation",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo predice el electromagnetismo de Maxwell la existencia de ondas que se propagan a la velocidad de la luz?",
      en: "How does Maxwell's electromagnetism predict the existence of waves that propagate at the speed of light?",
    },
    magnitud_estrella: "c",
    variable_control: "sharedParams",
  },
  axes: {
    x: "número de onda k (rad/m)",
    y: "frecuencia angular ω (rad/s)",
  },
  formula: "omega = c * k  con  c = 1/sqrt(mu0 * epsilon0)",
};

const axes = {
  x: "número de onda k (rad/m)",
  y: "frecuencia angular ω (rad/s)",
};

const formula = "omega = c * k  con  c = 1/sqrt(mu0 * epsilon0)";

EcuacionDeOndaElectromagneticaGraphsCoordView.graphContract = graphContract;
EcuacionDeOndaElectromagneticaGraphsCoordView.graph_identity = graphContract.graph_identity;
EcuacionDeOndaElectromagneticaGraphsCoordView.axes = axes;
EcuacionDeOndaElectromagneticaGraphsCoordView.formula = formula;

const EcuacionDeOndaElectromagneticaGraphsCoordContract = createCoordGraph({
  Component: EcuacionDeOndaElectromagneticaGraphsCoordView,
  displayName: "EcuacionDeOndaElectromagneticaGraphsCoordContract",
});

EcuacionDeOndaElectromagneticaGraphsCoordContract.graphContract = graphContract;
EcuacionDeOndaElectromagneticaGraphsCoordContract.graph_identity = graphContract.graph_identity;
EcuacionDeOndaElectromagneticaGraphsCoordContract.axes = axes;
EcuacionDeOndaElectromagneticaGraphsCoordContract.formula = formula;

export default EcuacionDeOndaElectromagneticaGraphsCoordContract;
