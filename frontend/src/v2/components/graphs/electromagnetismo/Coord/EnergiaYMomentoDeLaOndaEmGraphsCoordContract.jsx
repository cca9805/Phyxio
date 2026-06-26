import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = densidad de energia u_EM (J/m3) | YAxis = intensidad media S_med (W/m2)

function EnergiaYMomentoDeLaOndaEmGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="energia-y-momento-de-la-onda-em"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Energia y momento de la onda EM",
      en: "Energy and Momentum of an EM Wave",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como transporta una onda electromagnetica energia y momento mediante su intensidad?",
      en: "How does an electromagnetic wave transport energy and momentum through its intensity?",
    },
    magnitud_estrella: "intensidad_media_de_poynting",
    variable_control: "densidad_media_de_energia_electromagnetica",
  },
  axes: {
    x: "densidad de energia u_EM (J/m3)",
    y: "intensidad media S_med (W/m2)",
  },
  formula: "S_med = c * u_EM",
};

const axes = {
  x: "densidad de energia u_EM (J/m3)",
  y: "intensidad media S_med (W/m2)",
};

const formula = "S_med = c * u_EM";

EnergiaYMomentoDeLaOndaEmGraphsCoordView.graphContract = graphContract;
EnergiaYMomentoDeLaOndaEmGraphsCoordView.graph_identity = graphContract.graph_identity;
EnergiaYMomentoDeLaOndaEmGraphsCoordView.axes = axes;
EnergiaYMomentoDeLaOndaEmGraphsCoordView.formula = formula;

const EnergiaYMomentoDeLaOndaEmGraphsCoordContract = createCoordGraph({
  Component: EnergiaYMomentoDeLaOndaEmGraphsCoordView,
  displayName: "EnergiaYMomentoDeLaOndaEmGraphsCoordContract",
});

EnergiaYMomentoDeLaOndaEmGraphsCoordContract.graphContract = graphContract;
EnergiaYMomentoDeLaOndaEmGraphsCoordContract.graph_identity = graphContract.graph_identity;
EnergiaYMomentoDeLaOndaEmGraphsCoordContract.axes = axes;
EnergiaYMomentoDeLaOndaEmGraphsCoordContract.formula = formula;

export default EnergiaYMomentoDeLaOndaEmGraphsCoordContract;
