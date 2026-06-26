import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function LeyDeAmpereGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="ley-de-ampere"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: { es: "Ley de Ampere", en: "Ampere's Law" },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo relaciona la ley de Ampere la circulación del campo magnetico con la corriente encerrada por una curva cerrada?",
      en: "How does Ampere's law relate magnetic-field circulation to the current enclosed by a closed curve?",
    },
    magnitud_estrella: "B",
    variable_control: "r",
  },
  axes: {
    x: "radio r (m)",
    y: "campo magnetico B (T)",
  },
  formula: "B = mu0 * I / (2 * pi * r)",
};

const axes = { x: "radio r (m)", y: "campo magnetico B (T)" };
const formula = "B = mu0 * I / (2 * pi * r)";

LeyDeAmpereGraphsCoordView.graphContract = graphContract;
LeyDeAmpereGraphsCoordView.graph_identity = graphContract.graph_identity;
LeyDeAmpereGraphsCoordView.axes = axes;
LeyDeAmpereGraphsCoordView.formula = formula;

const LeyDeAmpereGraphsCoordContract = createCoordGraph({
  Component: LeyDeAmpereGraphsCoordView,
  displayName: "LeyDeAmpereGraphsCoordContract",
});

LeyDeAmpereGraphsCoordContract.graphContract = graphContract;
LeyDeAmpereGraphsCoordContract.graph_identity = graphContract.graph_identity;
LeyDeAmpereGraphsCoordContract.axes = axes;
LeyDeAmpereGraphsCoordContract.formula = formula;

export default LeyDeAmpereGraphsCoordContract;
