import React from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import ElectromagnetismCoordGraph from "./ElectromagnetismCoordGraph.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = angulo de incidencia theta_1 (deg) | YAxis = angulo de refraccion theta_2 (deg)

function LeyDeSnellGraphsCoordView(props) {
  return (
    <ElectromagnetismCoordGraph
      {...props}
      leafId="ley-de-snell"
      graphContract={graphContract}
    />
  );
}

export const graphContract = {
  meta: {
    title: {
      es: "Ley de Snell",
      en: "Snell's Law",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como relaciona la ley de Snell los angulos de incidencia y refraccion con los indices de refraccion de dos medios?",
      en: "How does Snell's law relate the angles of incidence and refraction to the refractive indices of two media?",
    },
    magnitud_estrella: "theta_2",
    variable_control: "theta_1",
  },
  axes: {
    x: "angulo de incidencia theta_1 (deg)",
    y: "angulo de refraccion theta_2 (deg)",
  },
  formula: "theta_2 = asin(n1 * sin(theta_1) / n2)",
};

const axes = {
  x: "angulo de incidencia theta_1 (deg)",
  y: "angulo de refraccion theta_2 (deg)",
};

const formula = "theta_2 = asin(n1 * sin(theta_1) / n2)";

LeyDeSnellGraphsCoordView.graphContract = graphContract;
LeyDeSnellGraphsCoordView.graph_identity = graphContract.graph_identity;
LeyDeSnellGraphsCoordView.axes = axes;
LeyDeSnellGraphsCoordView.formula = formula;

const LeyDeSnellGraphsCoordContract = createCoordGraph({
  Component: LeyDeSnellGraphsCoordView,
  displayName: "LeyDeSnellGraphsCoordContract",
});

LeyDeSnellGraphsCoordContract.graphContract = graphContract;
LeyDeSnellGraphsCoordContract.graph_identity = graphContract.graph_identity;
LeyDeSnellGraphsCoordContract.axes = axes;
LeyDeSnellGraphsCoordContract.formula = formula;

export default LeyDeSnellGraphsCoordContract;
