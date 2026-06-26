import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage

function CargaElectricaGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="carga-electrica"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Carga eléctrica",
      en: "Electric Charge",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué propiedad fundamental de la materia determina su interacción electromagnética y cuál es el mínimo indivisible de esa propiedad observable en partículas libres?",
      en: "What fundamental property of matter determines its electromagnetic interaction, and what is the smallest indivisible amount of that property observable in free particles?",
    },
    magnitud_estrella: "q",
    variable_control: "n",
  },
  axes: {
    x: "número de cargas elementales n",
    y: "carga eléctrica q (C)",
  },
  formula: "q = n * e",
};

const axes = {
  x: "número de cargas elementales n",
  y: "carga eléctrica q (C)",
};

const formula = "q = n * e";

CargaElectricaGraphsCoordView.graphContract = graphContract;
CargaElectricaGraphsCoordView.graph_identity = graphContract.graph_identity;
CargaElectricaGraphsCoordView.axes = axes;
CargaElectricaGraphsCoordView.formula = formula;

const CargaElectricaGraphsCoordContract = createCoordGraph({
  Component: CargaElectricaGraphsCoordView,
  displayName: "CargaElectricaGraphsCoordContract",
});

CargaElectricaGraphsCoordContract.graphContract = graphContract;
CargaElectricaGraphsCoordContract.graph_identity = graphContract.graph_identity;
CargaElectricaGraphsCoordContract.axes = axes;
CargaElectricaGraphsCoordContract.formula = formula;

export default CargaElectricaGraphsCoordContract;
