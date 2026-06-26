import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./TiroVerticalGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Movimiento vertical bajo gravedad",
      en: "Motion Vertical under Gravity",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo cambia la velocidad de un cuerpo cuando solo act\u00faa la gravedad en ca\u00eddas y lanzamientos verticales?",
      en: "How does the velocity of a body change when only gravity acts in falls and vertical launches?",
    },
    magnitud_estrella: "velocidad",
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
  displayName: "MovimientoVerticalBajoGravedadGraphsCoordContract",
});
