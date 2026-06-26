import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function CampoElectricoGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="campo-electrico"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Campo eléctrico",
      en: "Electric Field",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo varía la magnitud del campo eléctrico con la distancia a la carga fuente?",
      en: "How does the electric field magnitude vary with the distance from the source charge?",
    },
    magnitud_estrella: "E",
    variable_control: "r",
  },
  axes: {
    x: "distancia r (m)",
    y: "campo eléctrico E (N/C)",
  },
  formula: "E = k_e * q_fuente / r^2",
};

const axes = {
  x: "distancia r (m)",
  y: "campo eléctrico E (N/C)",
};

const formula = "E = k_e * q_fuente / r^2";

CampoElectricoGraphsCoordView.graphContract = graphContract;
CampoElectricoGraphsCoordView.graph_identity = graphContract.graph_identity;
CampoElectricoGraphsCoordView.axes = axes;
CampoElectricoGraphsCoordView.formula = formula;

const CampoElectricoGraphsCoordContract = createCoordGraph({
  Component: CampoElectricoGraphsCoordView,
  displayName: "CampoElectricoGraphsCoordContract",
});

CampoElectricoGraphsCoordContract.graphContract = graphContract;
CampoElectricoGraphsCoordContract.graph_identity = graphContract.graph_identity;
CampoElectricoGraphsCoordContract.axes = axes;
CampoElectricoGraphsCoordContract.formula = formula;

export default CampoElectricoGraphsCoordContract;
