/**
 * createCoordGraph(
 *   leaf: "problemas-con-ligaduras",
 *   pregunta_principal: "¿Como fijan las ligaduras la aceleracion comun y la tension interna en sistemas acoplados?",
 *   formula: "a = ((m2 - m1) g) / (m1 + m2)",
 *   XAxis: "Contraste de masas: [[m2]] frente a [[m1]]",
 *   YAxis: "Respuesta dinamica compartida: [[a]] y [[T]]",
 *   axes: { x: "[[m2]] - [[m1]]", y: "[[a]]" },
 *   target: "[[a]]",
 *   paramsIn: ["[[m1]]", "[[m2]]", "[[g]]"],
 *   stateOut: ["[[a]]", "[[T]]"],
 *   sharedParams: { __calc: "a" }
 * )
 */
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

export { default } from "./MecanicaAnaliticaGraphsCoord.jsx";
