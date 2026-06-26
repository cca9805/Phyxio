import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./SistemasReferenciaGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Sistemas referencia",
      en: "Reference Frames",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo cambia la descripci\u00f3n del movimiento cuando se cambia de observador o de sistema de referencia?",
      en: "How does the description of motion change when the observer or reference frame changes?",
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
  displayName: "SistemasReferenciaGraphsCoordContract",
});
