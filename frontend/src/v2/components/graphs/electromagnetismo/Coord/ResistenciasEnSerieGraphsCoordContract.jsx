import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function ResistenciasEnSerieGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="resistencias-en-serie"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Resistencias en serie",
      en: "Resistors in series",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se reparte la tension y como se obtiene la resistencia equivalente en un circuito de resistencias en serie?",
      en: "How is voltage distributed and how is equivalent resistance obtained in a series resistor circuit?",
    },
    magnitud_estrella: "Req",
    variable_control: "sharedParams",
  },
  axes: {
    x: "configuracion serie",
    y: "reparto de tension y respuesta equivalente",
  },
  formula: "Req por suma de resistencias y reparto de Vt en caidas Vi",
};

const axes = {
  x: "configuracion serie",
  y: "reparto de tension y respuesta equivalente",
};

const formula = "Req por suma de resistencias y reparto de Vt en caidas Vi";

ResistenciasEnSerieGraphsCoordView.graphContract = graphContract;
ResistenciasEnSerieGraphsCoordView.graph_identity = graphContract.graph_identity;
ResistenciasEnSerieGraphsCoordView.axes = axes;
ResistenciasEnSerieGraphsCoordView.formula = formula;

const ResistenciasEnSerieGraphsCoordContract = createCoordGraph({
  Component: ResistenciasEnSerieGraphsCoordView,
  displayName: "ResistenciasEnSerieGraphsCoordContract",
});

ResistenciasEnSerieGraphsCoordContract.graphContract = graphContract;
ResistenciasEnSerieGraphsCoordContract.graph_identity = graphContract.graph_identity;
ResistenciasEnSerieGraphsCoordContract.axes = axes;
ResistenciasEnSerieGraphsCoordContract.formula = formula;

export default ResistenciasEnSerieGraphsCoordContract;
