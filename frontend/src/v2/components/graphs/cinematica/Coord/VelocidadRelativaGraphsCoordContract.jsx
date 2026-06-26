import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./VelocidadRelativaGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Velocidad relativa",
      en: "Relative Velocity",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo se compone la velocidad observada cuando dos sistemas inerciales se mueven entre s\u00ed?",
      en: "How is observed velocity composed when two inertial frames move with respect to each other?",
    },
    magnitud_estrella: "velocidad-relativa",
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
  displayName: "VelocidadRelativaGraphsCoordContract",
});
