import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function LeyDeBiotSavartGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="ley-de-biot-savart"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: { es: "Ley de Biot Savart", en: "Biot-Savart Law" },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo calcula la ley de Biot Savart el campo magnetico sumando contribuciones de corriente?",
      en: "How does the Biot-Savart law calculate magnetic field by adding current contributions?",
    },
    magnitud_estrella: "B",
    variable_control: "r",
  },
  axes: {
    x: "distancia r (m)",
    y: "campo magnetico B (T)",
  },
  formula: "B = mu0 * I / (2 * pi * r)",
};

const axes = { x: "distancia r (m)", y: "campo magnetico B (T)" };
const formula = "B = mu0 * I / (2 * pi * r)";

LeyDeBiotSavartGraphsCoordView.graphContract = graphContract;
LeyDeBiotSavartGraphsCoordView.graph_identity = graphContract.graph_identity;
LeyDeBiotSavartGraphsCoordView.axes = axes;
LeyDeBiotSavartGraphsCoordView.formula = formula;

const LeyDeBiotSavartGraphsCoordContract = createCoordGraph({
  Component: LeyDeBiotSavartGraphsCoordView,
  displayName: "LeyDeBiotSavartGraphsCoordContract",
});

LeyDeBiotSavartGraphsCoordContract.graphContract = graphContract;
LeyDeBiotSavartGraphsCoordContract.graph_identity = graphContract.graph_identity;
LeyDeBiotSavartGraphsCoordContract.axes = axes;
LeyDeBiotSavartGraphsCoordContract.formula = formula;

export default LeyDeBiotSavartGraphsCoordContract;
