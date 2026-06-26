/**
 * createCoordGraph(
 *   leaf: "oscilador-armonico",
 *   pregunta_principal: "¿Como fijan masa, rigidez y amplitud el ritmo y la energia del oscilador armonico?",
 *   formula: "omega = sqrt(k / m)",
 *   XAxis: "Parametro del sistema: [[m]] o [[k]]",
 *   YAxis: "Respuesta temporal: [[omega]] y [[Tper]]",
 *   axes: { x: "[[m]] / [[k]]", y: "[[omega]]" },
 *   target: "[[omega]]",
 *   paramsIn: ["[[m]]", "[[k]]", "[[A]]"],
 *   stateOut: ["[[omega]]", "[[Tper]]", "[[E]]"],
 *   sharedParams: { __calc: "omega" }
 * )
 */
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

export { default } from "./MecanicaAnaliticaGraphsCoord.jsx";
