import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./CinematicaRotacionalGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Cinematica rotacional",
      en: "Rotational Kinematics",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo se escriben y se interpretan las ecuaciones angulares an\u00e1logas al MRU y al MRUA?",
      en: "How are the angular equations analogous to uniform and uniformly accelerated motion written and interpreted?",
    },
    magnitud_estrella: "posicion-angular",
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
  displayName: "CinematicaRotacionalGraphsCoordContract",
});
