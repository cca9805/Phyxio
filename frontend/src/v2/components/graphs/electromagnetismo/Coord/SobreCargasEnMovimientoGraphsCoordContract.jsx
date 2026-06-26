import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function SobreCargasEnMovimientoGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="sobre-cargas-en-movimiento"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Fuerza magnetica sobre carga movil",
      en: "Magnetic force on a moving charge",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como cambia la fuerza magnetica cuando aumenta la rapidez de una carga en movimiento?",
      en: "How does magnetic force change when the speed of a moving charge increases?",
    },
    magnitud_estrella: "fuerza_magnetica",
    variable_control: "rapidez",
  },
  axes: {
    x: "rapidez v (m/s)",
    y: "fuerza magnetica F_B (N)",
  },
  formula: "F_B = q * v * B * s_theta",
};

const axes = {
  x: "rapidez v (m/s)",
  y: "fuerza magnetica F_B (N)",
};
const formula = "F_B = q * v * B * s_theta";

SobreCargasEnMovimientoGraphsCoordView.graphContract = graphContract;
SobreCargasEnMovimientoGraphsCoordView.graph_identity = graphContract.graph_identity;
SobreCargasEnMovimientoGraphsCoordView.axes = axes;
SobreCargasEnMovimientoGraphsCoordView.formula = formula;

const SobreCargasEnMovimientoGraphsCoordContract = createCoordGraph({
  Component: SobreCargasEnMovimientoGraphsCoordView,
  displayName: "SobreCargasEnMovimientoGraphsCoordContract",
});

SobreCargasEnMovimientoGraphsCoordContract.graphContract = graphContract;
SobreCargasEnMovimientoGraphsCoordContract.graph_identity = graphContract.graph_identity;
SobreCargasEnMovimientoGraphsCoordContract.axes = axes;
SobreCargasEnMovimientoGraphsCoordContract.formula = formula;

export default SobreCargasEnMovimientoGraphsCoordContract;
