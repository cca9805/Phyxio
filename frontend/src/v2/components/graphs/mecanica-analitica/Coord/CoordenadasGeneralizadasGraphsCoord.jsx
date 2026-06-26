/**
 * createCoordGraph(
 *   leaf: "coordenadas-generalizadas",
 *   pregunta_principal: "¿Cómo simplifican las coordenadas generalizadas la descripción de sistemas con ligaduras y grados de libertad reducidos?",
 *   formula: "f = n - C",
 *   XAxis: "Coordenada generalizada representativa: [[q]]",
 *   YAxis: "Grados de libertad efectivos: [[f]]",
 *   axes: { x: "[[q]]", y: "[[f]]" },
 *   target: "[[f]]",
 *   paramsIn: ["[[n]]", "[[C]]"],
 *   stateOut: ["[[f]]"],
 *   sharedParams: { __calc: "coordenadas_generalizadas" }
 * )
 */
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);
import profile from "./MecanicaAnaliticaGraphsCoord.profile.js";

void profile;
void tt;

export { default } from "./MecanicaAnaliticaGraphsCoord.jsx";
