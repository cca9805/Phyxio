import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./EncuentrosYPersecucionesGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Encuentros y persecuciones",
      en: "Pursuit and Interception Problems",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfQu\u00e9 condici\u00f3n cinem\u00e1tica permite predecir el instante y la posici\u00f3n de encuentro entre m\u00f3viles distintos?",
      en: "Which kinematic condition predicts the meeting time and position between different moving bodies?",
    },
    magnitud_estrella: "tiempo",
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
  displayName: "EncuentrosYPersecucionesGraphsCoordContract",
});
