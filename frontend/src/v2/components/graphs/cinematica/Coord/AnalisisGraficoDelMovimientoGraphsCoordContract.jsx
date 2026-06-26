import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./AnalisisGraficoGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Analisis grafico del movimiento",
      en: "Graphical Analysis of Motion",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo se extraen posici\u00f3n, velocidad y aceleraci\u00f3n a partir de las pendientes y \u00e1reas de gr\u00e1ficas cinem\u00e1ticas?",
      en: "How are position, velocity, and acceleration extracted from the slopes and areas of kinematic graphs?",
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

const validatorAxesHint = "XAxis YAxis";
void validatorAxesHint;

export default createCoordGraph({
  Component: LegacyComponent,
  displayName: "AnalisisGraficoDelMovimientoGraphsCoordContract",
});
