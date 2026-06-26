import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = distancia focal f (m) | YAxis = aumento angular M_angular (adimensional)

function InstrumentosOpticosGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="instrumentos-opticos"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Instrumentos opticos",
      en: "Optical Instruments",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determina la combinacion de lentes de un instrumento optico el aumento angular y la posicion de la imagen final observada por el ojo?",
      en: "How does the lens combination in an optical instrument determine the angular magnification and the position of the final image observed by the eye?",
    },
    magnitud_estrella: "M_angular",
    variable_control: "f_lupa",
  },
  axes: {
    x: "distancia focal f (m)",
    y: "aumento angular M_angular (adimensional)",
  },
  formula: "M_angular = d_pp / f_lupa",
};

const axes = {
  x: "distancia focal f (m)",
  y: "aumento angular M_angular (adimensional)",
};

const formula = "M_angular = d_pp / f_lupa";

InstrumentosOpticosGraphsCoordView.graphContract = graphContract;
InstrumentosOpticosGraphsCoordView.graph_identity = graphContract.graph_identity;
InstrumentosOpticosGraphsCoordView.axes = axes;
InstrumentosOpticosGraphsCoordView.formula = formula;

const InstrumentosOpticosGraphsCoordContract = createCoordGraph({
  Component: InstrumentosOpticosGraphsCoordView,
  displayName: "InstrumentosOpticosGraphsCoordContract",
});

InstrumentosOpticosGraphsCoordContract.graphContract = graphContract;
InstrumentosOpticosGraphsCoordContract.graph_identity = graphContract.graph_identity;
InstrumentosOpticosGraphsCoordContract.axes = axes;
InstrumentosOpticosGraphsCoordContract.formula = formula;

export default InstrumentosOpticosGraphsCoordContract;
