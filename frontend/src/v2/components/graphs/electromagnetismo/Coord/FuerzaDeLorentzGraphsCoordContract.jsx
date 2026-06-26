import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function FuerzaDeLorentzGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="fuerza-de-lorentz"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Fuerza de Lorentz",
      en: "Lorentz Force",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cuál es la fuerza total que experimentan las cargas eléctricas cuando se mueven en presencia simultánea de un campo eléctrico y un campo magnético?",
      en: "What is the total force experienced by electric charges when they move in the simultaneous presence of an electric field and a magnetic field?",
    },
    magnitud_estrella: "F_L",
    variable_control: "v",
  },
  axes: {
    x: "velocidad de la partícula v (m/s)",
    y: "fuerza de Lorentz F_L (N)",
  },
  formula: "F_L = q * E + q * v * B * sin_theta",
};

const axes = {
  x: "velocidad de la partícula v (m/s)",
  y: "fuerza de Lorentz F_L (N)",
};

const formula = "F_L = q * E + q * v * B * sin_theta";

FuerzaDeLorentzGraphsCoordView.graphContract = graphContract;
FuerzaDeLorentzGraphsCoordView.graph_identity = graphContract.graph_identity;
FuerzaDeLorentzGraphsCoordView.axes = axes;
FuerzaDeLorentzGraphsCoordView.formula = formula;

const FuerzaDeLorentzGraphsCoordContract = createCoordGraph({
  Component: FuerzaDeLorentzGraphsCoordView,
  displayName: "FuerzaDeLorentzGraphsCoordContract",
});

FuerzaDeLorentzGraphsCoordContract.graphContract = graphContract;
FuerzaDeLorentzGraphsCoordContract.graph_identity = graphContract.graph_identity;
FuerzaDeLorentzGraphsCoordContract.axes = axes;
FuerzaDeLorentzGraphsCoordContract.formula = formula;

export default FuerzaDeLorentzGraphsCoordContract;
