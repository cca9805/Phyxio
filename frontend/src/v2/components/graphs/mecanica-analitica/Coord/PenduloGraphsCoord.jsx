/**
 * createCoordGraph(
 *   leaf: "pendulo",
 *   pregunta_principal: "¿Como fijan longitud y gravedad el ritmo del pendulo y como cambia el torque con el angulo?",
 *   formula: "omega = sqrt(g / L)",
 *   XAxis: "Parametro del sistema: [[L]] o [[g]]",
 *   YAxis: "Respuesta temporal: [[omega]] y [[Tper]]",
 *   axes: { x: "[[L]] / [[g]]", y: "[[omega]]" },
 *   target: "[[omega]]",
 *   paramsIn: ["[[L]]", "[[g]]", "[[m]]"],
 *   stateOut: ["[[omega]]", "[[Tper]]", "[[tau]]"],
 *   sharedParams: { __calc: "omega" }
 * )
 */
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

export { default } from "./MecanicaAnaliticaGraphsCoord.jsx";