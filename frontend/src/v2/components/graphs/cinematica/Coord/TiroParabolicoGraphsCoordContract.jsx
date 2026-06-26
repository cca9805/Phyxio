import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./TiroParabolicoGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Tiro parabolico",
      en: "Projectile Motion",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo determinan la velocidad inicial y el \u00e1ngulo de lanzamiento la trayectoria, el alcance y la altura m\u00e1xima?",
      en: "How do initial speed and launch angle determine the trajectory, range, and maximum height?",
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
  displayName: "TiroParabolicoGraphsCoordContract",
});
