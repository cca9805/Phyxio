import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: XAxis, YAxis, createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function FlujoMagneticoGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="flujo-magnetico"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Flujo magnetico",
      en: "Magnetic flux",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo depende el flujo magnetico del campo, del area y de la orientacion de la superficie?",
      en: "How does magnetic flux depend on field, area, and surface orientation?",
    },
    magnitud_estrella: "Phi_B",
    magnitud_secundaria: "B",
    variable_control: "cos_theta",
    tipo_lectura: "cuantitativa",
  },
  axes: {
    x: "B",
    y: "Phi_B",
  },
  formula: "Phi_B = B * A * cos_theta",
};

const axes = {
  x: "B",
  y: "Phi_B",
};

const formula = "Phi_B = B * A * cos_theta";

FlujoMagneticoGraphsCoordView.graphContract = graphContract;
FlujoMagneticoGraphsCoordView.graph_identity = graphContract.graph_identity;
FlujoMagneticoGraphsCoordView.axes = axes;
FlujoMagneticoGraphsCoordView.formula = formula;

const FlujoMagneticoGraphsCoordContract = createCoordGraph({
  Component: FlujoMagneticoGraphsCoordView,
  displayName: "FlujoMagneticoGraphsCoordContract",
});

FlujoMagneticoGraphsCoordContract.graphContract = graphContract;
FlujoMagneticoGraphsCoordContract.graph_identity = graphContract.graph_identity;
FlujoMagneticoGraphsCoordContract.axes = axes;
FlujoMagneticoGraphsCoordContract.formula = formula;

export default FlujoMagneticoGraphsCoordContract;
