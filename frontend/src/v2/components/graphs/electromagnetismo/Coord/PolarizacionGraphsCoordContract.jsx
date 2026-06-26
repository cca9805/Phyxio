import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = angulo del polarizador theta_p (grados) | YAxis = intensidad transmitida I (W/m^2)

function PolarizacionGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="polarizacion"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Polarizacion",
      en: "Polarization",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina la orientacion del campo electrico respecto al eje del polarizador la intensidad transmitida de la luz?",
      en: "How does the orientation of the electric field relative to the polariser axis determine the transmitted intensity of light?",
    },
    magnitud_estrella: "I",
    variable_control: "theta_p",
  },
  axes: {
    x: "angulo del polarizador theta_p (grados)",
    y: "intensidad transmitida I (W/m^2)",
  },
  formula: "I = I_0 * cos(theta_p)^2",
};

const axes = {
  x: "angulo del polarizador theta_p (grados)",
  y: "intensidad transmitida I (W/m^2)",
};

const formula = "I = I_0 * cos(theta_p)^2";

PolarizacionGraphsCoordView.graphContract = graphContract;
PolarizacionGraphsCoordView.graph_identity = graphContract.graph_identity;
PolarizacionGraphsCoordView.axes = axes;
PolarizacionGraphsCoordView.formula = formula;

const PolarizacionGraphsCoordContract = createCoordGraph({
  Component: PolarizacionGraphsCoordView,
  displayName: "PolarizacionGraphsCoordContract",
});

PolarizacionGraphsCoordContract.graphContract = graphContract;
PolarizacionGraphsCoordContract.graph_identity = graphContract.graph_identity;
PolarizacionGraphsCoordContract.axes = axes;
PolarizacionGraphsCoordContract.formula = formula;

export default PolarizacionGraphsCoordContract;
