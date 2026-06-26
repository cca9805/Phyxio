import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function CampoMagneticoGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="campo-magnetico"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Campo magnético",
      en: "Magnetic Field",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo varía la magnitud del campo magnético con la distancia a la corriente fuente?",
      en: "How does the magnetic field magnitude vary with the distance from the source current?",
    },
    magnitud_estrella: "B",
    variable_control: "r",
  },
  axes: {
    x: "distancia r (m)",
    y: "campo magnético B (T)",
  },
  formula: "B = mu_0 * I / (2 * pi * r)",
};

const axes = {
  x: "distancia r (m)",
  y: "campo magnético B (T)",
};

const formula = "B = mu_0 * I / (2 * pi * r)";

CampoMagneticoGraphsCoordView.graphContract = graphContract;
CampoMagneticoGraphsCoordView.graph_identity = graphContract.graph_identity;
CampoMagneticoGraphsCoordView.axes = axes;
CampoMagneticoGraphsCoordView.formula = formula;

const CampoMagneticoGraphsCoordContract = createCoordGraph({
  Component: CampoMagneticoGraphsCoordView,
  displayName: "CampoMagneticoGraphsCoordContract",
});

CampoMagneticoGraphsCoordContract.graphContract = graphContract;
CampoMagneticoGraphsCoordContract.graph_identity = graphContract.graph_identity;
CampoMagneticoGraphsCoordContract.axes = axes;
CampoMagneticoGraphsCoordContract.formula = formula;

export default CampoMagneticoGraphsCoordContract;
