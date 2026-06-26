import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./McuaGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Mcua",
      en: "Uniformly Accelerated Circular Motion",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo evoluciona la velocidad angular cuando una trayectoria circular mantiene aceleraci\u00f3n angular constante?",
      en: "How does angular velocity evolve when circular motion has constant angular acceleration?",
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
  displayName: "McuaGraphsCoordContract",
});
