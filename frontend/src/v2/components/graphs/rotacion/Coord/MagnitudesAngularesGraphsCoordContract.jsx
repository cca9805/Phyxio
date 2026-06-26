import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./MagnitudesAngularesGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Magnitudes angulares",
      en: "Angular Quantities",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfQu\u00e9 magnitudes angulares son necesarias para describir cuantitativamente un sistema en rotaci\u00f3n?",
      en: "Which angular quantities are needed to describe a rotating system quantitatively?",
    },
    magnitud_estrella: "velocidad-angular",
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
  displayName: "MagnitudesAngularesGraphsCoordContract",
});
