import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function FuerzaElectricaGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="fuerza-electrica"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Fuerza eléctrica",
      en: "Electric Force",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo depende la fuerza eléctrica entre dos cargas puntuales de la distancia que las separa y del valor de cada carga?",
      en: "How does the electric force between two point charges depend on the distance separating them and on the value of each charge?",
    },
    magnitud_estrella: "F_C",
    variable_control: "r",
  },
  axes: {
    x: "distancia r (m)",
    y: "fuerza eléctrica F_C (N)",
  },
  formula: "F_C = k_e * q1 * q2 / r^2",
};

const axes = {
  x: "distancia r (m)",
  y: "fuerza eléctrica F_C (N)",
};

const formula = "F_C = k_e * q1 * q2 / r^2";

FuerzaElectricaGraphsCoordView.graphContract = graphContract;
FuerzaElectricaGraphsCoordView.graph_identity = graphContract.graph_identity;
FuerzaElectricaGraphsCoordView.axes = axes;
FuerzaElectricaGraphsCoordView.formula = formula;

const FuerzaElectricaGraphsCoordContract = createCoordGraph({
  Component: FuerzaElectricaGraphsCoordView,
  displayName: "FuerzaElectricaGraphsCoordContract",
});

FuerzaElectricaGraphsCoordContract.graphContract = graphContract;
FuerzaElectricaGraphsCoordContract.graph_identity = graphContract.graph_identity;
FuerzaElectricaGraphsCoordContract.axes = axes;
FuerzaElectricaGraphsCoordContract.formula = formula;

export default FuerzaElectricaGraphsCoordContract;
