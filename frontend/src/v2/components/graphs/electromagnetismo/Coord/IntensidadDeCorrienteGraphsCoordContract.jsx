import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function IntensidadDeCorrienteGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="intensidad-de-corriente"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Intensidad de corriente",
      en: "Electric current",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se relacionan carga, tiempo y seccion para interpretar la intensidad y la densidad de corriente?",
      en: "How are charge, time, and area linked to interpret current intensity and current density?",
    },
    magnitud_estrella: "I",
    variable_control: "sharedParams",
  },
  axes: {
    x: "tiempo de observacion o area de seccion",
    y: "intensidad de corriente y densidad de corriente",
  },
  formula: "I = q/t y J = I/A",
};

const axes = {
  x: "tiempo de observacion o area de seccion",
  y: "intensidad de corriente y densidad de corriente",
};

const formula = "I = q/t y J = I/A";

IntensidadDeCorrienteGraphsCoordView.graphContract = graphContract;
IntensidadDeCorrienteGraphsCoordView.graph_identity = graphContract.graph_identity;
IntensidadDeCorrienteGraphsCoordView.axes = axes;
IntensidadDeCorrienteGraphsCoordView.formula = formula;

const IntensidadDeCorrienteGraphsCoordContract = createCoordGraph({
  Component: IntensidadDeCorrienteGraphsCoordView,
  displayName: "IntensidadDeCorrienteGraphsCoordContract",
});

IntensidadDeCorrienteGraphsCoordContract.graphContract = graphContract;
IntensidadDeCorrienteGraphsCoordContract.graph_identity = graphContract.graph_identity;
IntensidadDeCorrienteGraphsCoordContract.axes = axes;
IntensidadDeCorrienteGraphsCoordContract.formula = formula;

export default IntensidadDeCorrienteGraphsCoordContract;
