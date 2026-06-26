import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = posicion en la pantalla y (m) | YAxis = intensidad relativa I/I_max

function InterferenciaDeLaLuzGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="interferencia-de-la-luz"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Interferencia de la luz",
      en: "Interference of Light",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina la diferencia de camino optico entre dos rendijas la posicion de las franjas de interferencia en la pantalla?",
      en: "How does the optical path difference between two slits determine the position of interference fringes on the screen?",
    },
    magnitud_estrella: "y_m",
    variable_control: "d",
  },
  axes: {
    x: "posicion en la pantalla y (m)",
    y: "intensidad relativa I/I_max",
  },
  formula: "y_m = m * lambda * L / d",
};

const axes = {
  x: "posicion en la pantalla y (m)",
  y: "intensidad relativa I/I_max",
};

const formula = "y_m = m * lambda * L / d";

InterferenciaDeLaLuzGraphsCoordView.graphContract = graphContract;
InterferenciaDeLaLuzGraphsCoordView.graph_identity = graphContract.graph_identity;
InterferenciaDeLaLuzGraphsCoordView.axes = axes;
InterferenciaDeLaLuzGraphsCoordView.formula = formula;

const InterferenciaDeLaLuzGraphsCoordContract = createCoordGraph({
  Component: InterferenciaDeLaLuzGraphsCoordView,
  displayName: "InterferenciaDeLaLuzGraphsCoordContract",
});

InterferenciaDeLaLuzGraphsCoordContract.graphContract = graphContract;
InterferenciaDeLaLuzGraphsCoordContract.graph_identity = graphContract.graph_identity;
InterferenciaDeLaLuzGraphsCoordContract.axes = axes;
InterferenciaDeLaLuzGraphsCoordContract.formula = formula;

export default InterferenciaDeLaLuzGraphsCoordContract;
