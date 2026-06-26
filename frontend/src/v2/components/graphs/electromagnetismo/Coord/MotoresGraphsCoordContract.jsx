import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function MotoresGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="motores"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Motores",
      en: "Motors",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo varía el par motor con la velocidad angular en un motor de CC?",
      en: "How does motor torque vary with angular speed in a DC motor?",
    },
    magnitud_estrella: "tau_m",
    magnitud_secundaria: "P_mec",
    variable_control: "omega",
    tipo_lectura: "cuantitativa",
  },
  axes: {
    x: "omega",
    y: "tau_m",
  },
  formula: "tau_m = N_c * I * L_c * B * r_a * sin_theta",
};

const axes = {
  x: "omega",
  y: "tau_m",
};

const formula = "tau_m = N_c * I * L_c * B * r_a * sin_theta";

MotoresGraphsCoordView.graphContract = graphContract;
MotoresGraphsCoordView.graph_identity = graphContract.graph_identity;
MotoresGraphsCoordView.axes = axes;
MotoresGraphsCoordView.formula = formula;

const MotoresGraphsCoordContract = createCoordGraph({
  Component: MotoresGraphsCoordView,
  displayName: "MotoresGraphsCoordContract",
});

MotoresGraphsCoordContract.graphContract = graphContract;
MotoresGraphsCoordContract.graph_identity = graphContract.graph_identity;
MotoresGraphsCoordContract.axes = axes;
MotoresGraphsCoordContract.formula = formula;

export default MotoresGraphsCoordContract;
