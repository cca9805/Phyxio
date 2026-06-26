import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./CinematicaLeafGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Magnitudes cinematicas",
      en: "Kinematic Quantities",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfQu\u00e9 magnitudes permiten describir de forma completa la posici\u00f3n y la evoluci\u00f3n temporal de un movimiento?",
      en: "Which quantities allow a complete description of position and the time evolution of motion?",
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
  displayName: "MagnitudesCinematicasGraphsCoordContract",
});
