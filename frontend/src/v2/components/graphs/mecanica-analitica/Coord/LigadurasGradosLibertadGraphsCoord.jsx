/**
 * createCoordGraph(
 *   leaf: "ligaduras-y-grados-de-libertad",
 *   pregunta_principal: "¿Cómo determinan las ligaduras independientes el número de grados de libertad y la elección de coordenadas generalizadas?",
 *   formula: "f = 3*n - C",
 *   XAxis: "Restricciones independientes: [[C]]",
 *   YAxis: "Grados de libertad efectivos: [[f]]",
 *   axes: { x: "[[C]]", y: "[[f]]" },
 *   target: "[[f]]",
 *   paramsIn: ["[[n]]", "[[C]]"],
 *   stateOut: ["[[f]]"],
 *   sharedParams: { __calc: "f" }
 * )
 */
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);
import profile from "./LigadurasGradosLibertadGraphsCoord.profile.js";

void profile;

export { default } from "./MecanicaAnaliticaGraphsCoord.jsx";
