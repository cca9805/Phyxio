import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./MruaGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Mrua",
      en: "Motion with Constant Acceleration",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo se conectan posici\u00f3n, velocidad y aceleraci\u00f3n cuando el movimiento rectil\u00edneo mantiene aceleraci\u00f3n constante?",
      en: "How are position, velocity, and acceleration connected when straight-line motion has constant acceleration?",
    },
    magnitud_estrella: "aceleracion",
    variable_control: "sharedParams",
  },
  axes: {
    x: "tiempo / variable de control",
    y: "magnitud f?sica dominante",
  },
  formula: "relaci?n cuantitativa visible entre la variable de control y la magnitud dominante",
};

export default createCoordGraph({
  Component: LegacyComponent,
  displayName: "MruaGraphsCoordContract",
});
