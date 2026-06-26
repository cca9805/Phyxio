import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function TransformadoresGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="transformadores"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Transformadores",
      en: "Transformers",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo cambia el nivel de tensión en un transformador ideal según la relación de espiras?",
      en: "How does the voltage level change in an ideal transformer according to the turns ratio?",
    },
    magnitud_estrella: "V_2",
    magnitud_secundaria: "V_1",
    variable_control: "N_1",
    tipo_lectura: "cuantitativa",
  },
  axes: {
    x: "V_1",
    y: "V_2",
  },
  formula: "V_2 = V_1 * N_2 / N_1",
};

const axes = {
  x: "V_1",
  y: "V_2",
};

const formula = "V_2 = V_1 * N_2 / N_1";

TransformadoresGraphsCoordView.graphContract = graphContract;
TransformadoresGraphsCoordView.graph_identity = graphContract.graph_identity;
TransformadoresGraphsCoordView.axes = axes;
TransformadoresGraphsCoordView.formula = formula;

const TransformadoresGraphsCoordContract = createCoordGraph({
  Component: TransformadoresGraphsCoordView,
  displayName: "TransformadoresGraphsCoordContract",
});

TransformadoresGraphsCoordContract.graphContract = graphContract;
TransformadoresGraphsCoordContract.graph_identity = graphContract.graph_identity;
TransformadoresGraphsCoordContract.axes = axes;
TransformadoresGraphsCoordContract.formula = formula;

export default TransformadoresGraphsCoordContract;
