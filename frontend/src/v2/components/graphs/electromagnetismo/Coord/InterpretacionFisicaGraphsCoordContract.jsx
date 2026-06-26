import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

function InterpretacionFisicaGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="interpretacion-fisica"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Unificación de Maxwell",
      en: "Maxwell Unification",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se unifican la luz, la electricidad y el magnetismo en un solo marco conceptual?",
      en: "How are light, electricity, and magnetism unified in a single conceptual framework?",
    },
    magnitud_estrella: "c",
    variable_control: "sharedParams",
  },
  axes: {
    x: "permitividad (epsilon)",
    y: "velocidad de la luz (c)",
  },
  formula: "c = 1 / sqrt(epsilon * mu)",
};

const axes = {
  x: "permitividad (epsilon)",
  y: "velocidad de la luz (c)",
};

const formula = "c = 1 / sqrt(epsilon * mu)";

InterpretacionFisicaGraphsCoordView.graphContract = graphContract;
InterpretacionFisicaGraphsCoordView.graph_identity = graphContract.graph_identity;
InterpretacionFisicaGraphsCoordView.axes = axes;
InterpretacionFisicaGraphsCoordView.formula = formula;

const InterpretacionFisicaGraphsCoordContract = createCoordGraph({
  Component: InterpretacionFisicaGraphsCoordView,
  displayName: "InterpretacionFisicaGraphsCoordContract",
});

InterpretacionFisicaGraphsCoordContract.graphContract = graphContract;
InterpretacionFisicaGraphsCoordContract.graph_identity = graphContract.graph_identity;
InterpretacionFisicaGraphsCoordContract.axes = axes;
InterpretacionFisicaGraphsCoordContract.formula = formula;
InterpretacionFisicaGraphsCoordContract.uiLang = uiLang;
InterpretacionFisicaGraphsCoordContract.t = t;

export default InterpretacionFisicaGraphsCoordContract;
