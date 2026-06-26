import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = distancia entre cargas r_12 (m) | YAxis = energía potencial eléctrica U_e (J)
const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function EnergiaPotencialElectricaGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="energia-potencial-electrica"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Energía potencial eléctrica",
      en: "Electric Potential Energy",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cuánta energía almacena un sistema de cargas eléctricas en función de su geometría, y cómo cambia cuando una carga se mueve dentro del campo?",
      en: "How much energy does a system of electric charges store depending on its geometry, and how does it change when a charge moves within the field?",
    },
    magnitud_estrella: "U_e",
    variable_control: "r_12",
  },
  axes: {
    x: "distancia entre cargas r_12 (m)",
    y: "energía potencial eléctrica U_e (J)",
  },
  formula: "U_e = k_e * q_1 * q_2 / r_12",
};

const axes = {
  x: "distancia entre cargas r_12 (m)",
  y: "energía potencial eléctrica U_e (J)",
};

const formula = "U_e = k_e * q_1 * q_2 / r_12";

EnergiaPotencialElectricaGraphsCoordView.graphContract = graphContract;
EnergiaPotencialElectricaGraphsCoordView.graph_identity = graphContract.graph_identity;
EnergiaPotencialElectricaGraphsCoordView.axes = axes;
EnergiaPotencialElectricaGraphsCoordView.formula = formula;

const EnergiaPotencialElectricaGraphsCoordContract = createCoordGraph({
  Component: EnergiaPotencialElectricaGraphsCoordView,
  displayName: "EnergiaPotencialElectricaGraphsCoordContract",
});

EnergiaPotencialElectricaGraphsCoordContract.graphContract = graphContract;
EnergiaPotencialElectricaGraphsCoordContract.graph_identity = graphContract.graph_identity;
EnergiaPotencialElectricaGraphsCoordContract.axes = axes;
EnergiaPotencialElectricaGraphsCoordContract.formula = formula;

export default EnergiaPotencialElectricaGraphsCoordContract;
