import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function CircuitosRcGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="circuitos-rc"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Circuitos RC",
      en: "RC Circuits",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se predicen la tension del capacitor y la corriente transitoria en carga y descarga de un circuito RC?",
      en: "How are capacitor voltage and transient current predicted during RC charging and discharging?",
    },
    magnitud_estrella: "Vc",
    variable_control: "sharedParams",
  },
  axes: {
    x: "tiempo normalizado",
    y: "estado y corriente normalizados",
  },
  formula: "respuesta exponencial de primer orden en tension y corriente",
};

const axes = {
  x: "tiempo normalizado",
  y: "estado y corriente normalizados",
};

const formula = "respuesta exponencial de primer orden en tension y corriente";

CircuitosRcGraphsCoordView.graphContract = graphContract;
CircuitosRcGraphsCoordView.graph_identity = graphContract.graph_identity;
CircuitosRcGraphsCoordView.axes = axes;
CircuitosRcGraphsCoordView.formula = formula;

const CircuitosRcGraphsCoordContract = createCoordGraph({
  Component: CircuitosRcGraphsCoordView,
  displayName: "CircuitosRcGraphsCoordContract",
});

CircuitosRcGraphsCoordContract.graphContract = graphContract;
CircuitosRcGraphsCoordContract.graph_identity = graphContract.graph_identity;
CircuitosRcGraphsCoordContract.axes = axes;
CircuitosRcGraphsCoordContract.formula = formula;

export default CircuitosRcGraphsCoordContract;
