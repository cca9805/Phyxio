import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./MruGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Mru",
      en: "Uniform Rectilinear Motion",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo se obtiene la posici\u00f3n de un m\u00f3vil cuando su velocidad permanece constante en una trayectoria rectil\u00ednea?",
      en: "How can the position of an object be obtained when its velocity stays constant along a straight path?",
    },
    magnitud_estrella: "posicion",
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
  displayName: "MruGraphsCoordContract",
});
