import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = tensión V (V) | YAxis = carga Q (C)

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function CondensadoresGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="condensadores"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Condensadores",
      en: "Capacitors",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cuánta energía almacena un condensador y de qué factores físicos depende su capacidad?",
      en: "How much energy can a capacitor store and on which physical factors does its capacitance depend?",
    },
    magnitud_estrella: "C",
    variable_control: "sharedParams",
  },
  axes: {
    x: "tensión V (V)",
    y: "carga Q (C)",
  },
  formula: "Q = C·V  y  E_cap = (1/2)·C·V²",
};

const axes = {
  x: "tensión V (V)",
  y: "carga Q (C)",
};

const formula = "Q = C·V  y  E_cap = (1/2)·C·V²";

CondensadoresGraphsCoordView.graphContract = graphContract;
CondensadoresGraphsCoordView.graph_identity = graphContract.graph_identity;
CondensadoresGraphsCoordView.axes = axes;
CondensadoresGraphsCoordView.formula = formula;

const CondensadoresGraphsCoordContract = createCoordGraph({
  Component: CondensadoresGraphsCoordView,
  displayName: "CondensadoresGraphsCoordContract",
});

CondensadoresGraphsCoordContract.graphContract = graphContract;
CondensadoresGraphsCoordContract.graph_identity = graphContract.graph_identity;
CondensadoresGraphsCoordContract.axes = axes;
CondensadoresGraphsCoordContract.formula = formula;

export default CondensadoresGraphsCoordContract;
