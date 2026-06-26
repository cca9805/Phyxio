import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = ancho de la rendija a (m) | YAxis = ancho del patron de difraccion w (m)

function DifraccionDeLaLuzGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="difraccion-de-la-luz"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Difraccion de la luz",
      en: "Diffraction of Light",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como influyen el ancho de la rendija y la longitud de onda de la luz en el tamano del patron de difraccion?",
      en: "How do the slit width and the wavelength of light influence the size of the diffraction pattern?",
    },
    magnitud_estrella: "w",
    variable_control: "a",
  },
  axes: {
    x: "ancho de la rendija a (m)",
    y: "ancho del patron de difraccion w (m)",
  },
  formula: "w = 2 * lambda * L / a",
};

const axes = {
  x: "ancho de la rendija a (m)",
  y: "ancho del patron de difraccion w (m)",
};

const formula = "w = 2 * lambda * L / a";

DifraccionDeLaLuzGraphsCoordView.graphContract = graphContract;
DifraccionDeLaLuzGraphsCoordView.graph_identity = graphContract.graph_identity;
DifraccionDeLaLuzGraphsCoordView.axes = axes;
DifraccionDeLaLuzGraphsCoordView.formula = formula;

const DifraccionDeLaLuzGraphsCoordContract = createCoordGraph({
  Component: DifraccionDeLaLuzGraphsCoordView,
  displayName: "DifraccionDeLaLuzGraphsCoordContract",
});

DifraccionDeLaLuzGraphsCoordContract.graphContract = graphContract;
DifraccionDeLaLuzGraphsCoordContract.graph_identity = graphContract.graph_identity;
DifraccionDeLaLuzGraphsCoordContract.axes = axes;
DifraccionDeLaLuzGraphsCoordContract.formula = formula;

export default DifraccionDeLaLuzGraphsCoordContract;
