/**
 * createCoordGraph(
 *   leaf: "simetrias-y-conservaciones",
 *   pregunta_principal: "Como se traduce una simetria continua del lagrangiano en una cantidad conservada util para analizar la dinamica?",
 *   formula: "P = m*v, J = r*P",
 *   XAxis: "Velocidad traslacional: [[v]]",
 *   YAxis: "Cantidad conservada: [[P]], [[J]]",
 *   axes: { x: "[[v]]", y: "[[P]] / [[J]]" },
 *   target: "[[Q]]",
 *   paramsIn: ["[[m]]", "[[r]]"],
 *   stateOut: ["[[P]]", "[[J]]", "[[Q]]"],
 *   sharedParams: { __calc: "noether" }
 * )
 */
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);
import profile from "./SimetriasConservacionesGraphsCoord.profile.js";

void profile;

export { default } from "./MecanicaAnaliticaGraphsCoord.jsx";
