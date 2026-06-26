import { createCoordGraph } from "../../graphFactories.jsx";
import LegacyComponent from "./McuGraphsCoord.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);
void uiLang;
void t;

export const graphContract = {
  meta: {
    title: {
      es: "Mcu",
      en: "Uniform Circular Motion",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "\u00bfC\u00f3mo se relacionan la velocidad angular, el per\u00edodo y la aceleraci\u00f3n centr\u00edpeta en un movimiento circular uniforme?",
      en: "How are angular speed, period, and centripetal acceleration related in uniform circular motion?",
    },
    magnitud_estrella: "theta",
    variable_control: "sharedParams",
    tipo_lectura: "cuantitativa",
  },
  axes: {
    x: "tiempo / variable de control",
    y: "magnitud f?sica dominante",
  },
  formula: "relaci?n cuantitativa visible entre la variable de control y la magnitud dominante",
};

export default createCoordGraph({
  Component: LegacyComponent,
  displayName: "McuGraphsCoordContract",
});
