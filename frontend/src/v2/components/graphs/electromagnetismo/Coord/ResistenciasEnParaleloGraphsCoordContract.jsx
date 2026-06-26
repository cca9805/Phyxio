import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function ResistenciasEnParaleloGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="resistencias-en-paralelo"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Resistencias en paralelo",
      en: "Resistors in Parallel",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo determina una conexión en paralelo el valor de la resistencia equivalente y el reparto de corriente entre ramas con la misma tensión?",
      en: "How does a parallel connection determine equivalent resistance and current sharing among branches under the same voltage?",
    },
    magnitud_estrella: "Req",
    variable_control: "sharedParams",
  },
  axes: {
    x: "configuracion de ramas",
    y: "respuesta equivalente de la red",
  },
  formula: "Req y corrientes de rama en topologia paralela",
};

const axes = {
  x: "configuracion de ramas",
  y: "respuesta equivalente de la red",
};

const formula = "Req y corrientes de rama en topologia paralela";

ResistenciasEnParaleloGraphsCoordView.graphContract = graphContract;
ResistenciasEnParaleloGraphsCoordView.graph_identity = graphContract.graph_identity;
ResistenciasEnParaleloGraphsCoordView.axes = axes;
ResistenciasEnParaleloGraphsCoordView.formula = formula;

const ResistenciasEnParaleloGraphsCoordContract = createCoordGraph({
  Component: ResistenciasEnParaleloGraphsCoordView,
  displayName: "ResistenciasEnParaleloGraphsCoordContract",
});

ResistenciasEnParaleloGraphsCoordContract.graphContract = graphContract;
ResistenciasEnParaleloGraphsCoordContract.graph_identity = graphContract.graph_identity;
ResistenciasEnParaleloGraphsCoordContract.axes = axes;
ResistenciasEnParaleloGraphsCoordContract.formula = formula;

export default ResistenciasEnParaleloGraphsCoordContract;