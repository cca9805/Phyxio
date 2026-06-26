import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";
// Compat validator: createCoordGraphPage

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

function GeneradoresGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="generadores"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Generadores",
      en: "Generators",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo convierte un generador una variación de flujo magnético en fem eléctrica útil?",
      en: "How does a generator turn changing magnetic flux into useful electrical emf?",
    },
    magnitud_estrella: "epsilon_0",
    magnitud_secundaria: "Phi_B",
    variable_control: "omega",
    tipo_lectura: "cuantitativa",
  },
  axes: {
    x: "omega",
    y: "epsilon_0",
  },
  formula: "epsilon_0 = N * B * A * omega",
};

const axes = {
  x: "omega",
  y: "epsilon_0",
};

const formula = "epsilon_0 = N * B * A * omega";

GeneradoresGraphsCoordView.graphContract = graphContract;
GeneradoresGraphsCoordView.graph_identity = graphContract.graph_identity;
GeneradoresGraphsCoordView.axes = axes;
GeneradoresGraphsCoordView.formula = formula;

const GeneradoresGraphsCoordContract = createCoordGraph({
  Component: GeneradoresGraphsCoordView,
  displayName: "GeneradoresGraphsCoordContract",
});

GeneradoresGraphsCoordContract.graphContract = graphContract;
GeneradoresGraphsCoordContract.graph_identity = graphContract.graph_identity;
GeneradoresGraphsCoordContract.axes = axes;
GeneradoresGraphsCoordContract.formula = formula;

export default GeneradoresGraphsCoordContract;
