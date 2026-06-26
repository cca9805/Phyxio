import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = campo electrico uniforme E_unif (N/C) | YAxis = diferencia de potencial V_AB (V)

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function DiferenciadePotencialGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="diferencia-de-potencial"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Diferencia de potencial",
      en: "Potential Difference",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cuánto trabajo por unidad de carga se necesita para mover una carga entre dos puntos del campo eléctrico?",
      en: "How much work per unit charge is needed to move a charge between two points of the electric field?",
    },
    magnitud_estrella: "V_AB",
    variable_control: "E_unif",
  },
  axes: {
    x: "campo electrico uniforme E_unif (N/C)",
    y: "diferencia de potencial V_AB (V)",
  },
  formula: "V_AB = E_unif * d_AB",
};

const axes = {
  x: "campo electrico uniforme E_unif (N/C)",
  y: "diferencia de potencial V_AB (V)",
};

const formula = "V_AB = E_unif * d_AB";

DiferenciadePotencialGraphsCoordView.graphContract = graphContract;
DiferenciadePotencialGraphsCoordView.graph_identity = graphContract.graph_identity;
DiferenciadePotencialGraphsCoordView.axes = axes;
DiferenciadePotencialGraphsCoordView.formula = formula;

const DiferenciadePotencialGraphsCoordContract = createCoordGraph({
  Component: DiferenciadePotencialGraphsCoordView,
  displayName: "DiferenciadePotencialGraphsCoordContract",
});

DiferenciadePotencialGraphsCoordContract.graphContract = graphContract;
DiferenciadePotencialGraphsCoordContract.graph_identity = graphContract.graph_identity;
DiferenciadePotencialGraphsCoordContract.axes = axes;
DiferenciadePotencialGraphsCoordContract.formula = formula;

export default DiferenciadePotencialGraphsCoordContract;
