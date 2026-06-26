import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./TiroHorizontalGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Tiro horizontal",
      en: "Horizontal Projectile Motion",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo se combinan la ca\u00edda vertical y el avance horizontal para fijar el alcance y el tiempo de vuelo?",
      en: "How do vertical fall and horizontal advance combine to determine range and flight time?",
    },
    magnitud_estrella: "alcance",
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
  displayName: "TiroHorizontalGraphsCoordContract",
});
