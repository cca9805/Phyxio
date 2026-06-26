import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = indice n (1) | YAxis = velocidad en medio v_m (m/s)

function PropagacionEnMediosGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="propagacion-en-medios"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Propagacion en medios",
      en: "Propagation in Media",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como cambia la propagacion de una onda electromagnetica al entrar en un medio material?",
      en: "How does electromagnetic-wave propagation change when entering a material medium?",
    },
    magnitud_estrella: "v_m",
    variable_control: "indice_de_refraccion_efectivo",
  },
  axes: {
    x: "indice n (1)",
    y: "velocidad en medio v_m (m/s)",
  },
  formula: "v_m = c / n",
};

const axes = {
  x: "indice n (1)",
  y: "velocidad en medio v_m (m/s)",
};

const formula = "v_m = c / n";

PropagacionEnMediosGraphsCoordView.graphContract = graphContract;
PropagacionEnMediosGraphsCoordView.graph_identity = graphContract.graph_identity;
PropagacionEnMediosGraphsCoordView.axes = axes;
PropagacionEnMediosGraphsCoordView.formula = formula;

const PropagacionEnMediosGraphsCoordContract = createCoordGraph({
  Component: PropagacionEnMediosGraphsCoordView,
  displayName: "PropagacionEnMediosGraphsCoordContract",
});

PropagacionEnMediosGraphsCoordContract.graphContract = graphContract;
PropagacionEnMediosGraphsCoordContract.graph_identity = graphContract.graph_identity;
PropagacionEnMediosGraphsCoordContract.axes = axes;
PropagacionEnMediosGraphsCoordContract.formula = formula;

export default PropagacionEnMediosGraphsCoordContract;
