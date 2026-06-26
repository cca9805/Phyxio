import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./RodaduraCinematicaSinDeslizamientoGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Rodadura cinematica sin deslizamiento",
      en: "Rolling Kinematics Without Slipping",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfQu\u00e9 relaci\u00f3n impone la rodadura sin deslizamiento entre la traslaci\u00f3n del centro de masas y la rotaci\u00f3n?",
      en: "Which relation does rolling without slipping impose between center-of-mass translation and rotation?",
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
  displayName: "RodaduraCinematicaSinDeslizamientoGraphsCoordContract",
});
