import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = constante dieléctrica ε_r (adim) | YAxis = capacitancia C_d (F)

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function DielectricosGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="dielectricos"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Dieléctricos",
      en: "Dielectrics",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Por qué la presencia de un dieléctrico entre las placas de un condensador aumenta su capacidad y qué ocurre microscópicamente con el campo eléctrico?",
      en: "Why does placing a dielectric between capacitor plates increase its capacitance and what happens microscopically to the electric field?",
    },
    magnitud_estrella: "epsilon_r",
    variable_control: "sharedParams",
  },
  axes: {
    x: "constante dieléctrica ε_r (adim)",
    y: "capacitancia C_d (F)",
  },
  formula: "C_d = ε_r · C_0  y  E_d = E_ext / ε_r",
};

const axes = {
  x: "constante dieléctrica ε_r (adim)",
  y: "capacitancia C_d (F)",
};

const formula = "C_d = ε_r · C_0  y  E_d = E_ext / ε_r";

DielectricosGraphsCoordView.graphContract = graphContract;
DielectricosGraphsCoordView.graph_identity = graphContract.graph_identity;
DielectricosGraphsCoordView.axes = axes;
DielectricosGraphsCoordView.formula = formula;

const DielectricosGraphsCoordContract = createCoordGraph({
  Component: DielectricosGraphsCoordView,
  displayName: "DielectricosGraphsCoordContract",
});

DielectricosGraphsCoordContract.graphContract = graphContract;
DielectricosGraphsCoordContract.graph_identity = graphContract.graph_identity;
DielectricosGraphsCoordContract.axes = axes;
DielectricosGraphsCoordContract.formula = formula;

export default DielectricosGraphsCoordContract;
