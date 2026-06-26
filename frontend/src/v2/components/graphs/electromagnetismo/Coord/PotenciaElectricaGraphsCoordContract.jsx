import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function PotenciaElectricaGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="potencia-electrica"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Potencia electrica",
      en: "Electric power",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se relacionan tension, corriente, resistencia y tiempo para interpretar potencia y energia en sistemas electricos reales?",
      en: "How are voltage, current, resistance, and time linked to interpret power and energy in real electrical systems?",
    },
    magnitud_estrella: "P",
    variable_control: "sharedParams",
  },
  axes: {
    x: "tiempo de observacion",
    y: "potencia electrica instantanea",
  },
  formula: "P = V I, P = I^2 R, P = V^2 / R, E = P t",
};

const axes = {
  x: "tiempo de observacion",
  y: "potencia electrica instantanea",
};

const formula = "P = V I, P = I^2 R, P = V^2 / R, E = P t";

PotenciaElectricaGraphsCoordView.graphContract = graphContract;
PotenciaElectricaGraphsCoordView.graph_identity = graphContract.graph_identity;
PotenciaElectricaGraphsCoordView.axes = axes;
PotenciaElectricaGraphsCoordView.formula = formula;

const PotenciaElectricaGraphsCoordContract = createCoordGraph({
  Component: PotenciaElectricaGraphsCoordView,
  displayName: "PotenciaElectricaGraphsCoordContract",
});

PotenciaElectricaGraphsCoordContract.graphContract = graphContract;
PotenciaElectricaGraphsCoordContract.graph_identity = graphContract.graph_identity;
PotenciaElectricaGraphsCoordContract.axes = axes;
PotenciaElectricaGraphsCoordContract.formula = formula;

export default PotenciaElectricaGraphsCoordContract;