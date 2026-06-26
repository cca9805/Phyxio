import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function SobreConductoresGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="sobre-conductores"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Fuerza magnetica sobre conductores",
      en: "Magnetic force on conductors",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como cambia la fuerza magnetica sobre un conductor al variar la corriente?",
      en: "How does magnetic force on a conductor change when current varies?",
    },
    magnitud_estrella: "F_B",
    variable_control: "I",
  },
  axes: {
    x: "corriente I (A)",
    y: "fuerza magnetica F_B (N)",
  },
  formula: "F_B = I * L * B * s_theta",
};

const axes = {
  x: "corriente I (A)",
  y: "fuerza magnetica F_B (N)",
};
const formula = "F_B = I * L * B * s_theta";

SobreConductoresGraphsCoordView.graphContract = graphContract;
SobreConductoresGraphsCoordView.graph_identity = graphContract.graph_identity;
SobreConductoresGraphsCoordView.axes = axes;
SobreConductoresGraphsCoordView.formula = formula;

const SobreConductoresGraphsCoordContract = createCoordGraph({
  Component: SobreConductoresGraphsCoordView,
  displayName: "SobreConductoresGraphsCoordContract",
});

SobreConductoresGraphsCoordContract.graphContract = graphContract;
SobreConductoresGraphsCoordContract.graph_identity = graphContract.graph_identity;
SobreConductoresGraphsCoordContract.axes = axes;
SobreConductoresGraphsCoordContract.formula = formula;

export default SobreConductoresGraphsCoordContract;
