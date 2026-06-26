import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./RelacionLinealAngularGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Relacion lineal angular",
      en: "Relationships Between Linear and Angular Quantities",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo conecta el radio las magnitudes lineales y angulares de un movimiento curvil\u00edneo?",
      en: "How does the radius connect linear and angular quantities in curvilinear motion?",
    },
    magnitud_estrella: "velocidad-tangencial",
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
  displayName: "RelacionLinealAngularGraphsCoordContract",
});
