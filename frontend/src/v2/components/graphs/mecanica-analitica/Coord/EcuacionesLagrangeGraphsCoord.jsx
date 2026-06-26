/**
 * createCoordGraph(
 *   leaf: "ecuaciones-de-lagrange",
 *   pregunta_principal: "¿Como permiten las ecuaciones de Lagrange obtener la evolucion dinamica en coordenadas generalizadas sin trabajar componente a componente en fuerzas cartesianas?",
 *   formula: "a_q = (Q_i - k*q_i)/m",
 *   XAxis: "Coordenada generalizada: [[qi]]",
 *   YAxis: "Aceleracion generalizada: [[qddi]]",
 *   axes: { x: "[[qi]]", y: "[[qddi]]" },
 *   target: "[[qddi]]",
 *   paramsIn: ["[[m]]", "[[k]]", "[[Qi]]"],
 *   stateOut: ["[[qddi]]"],
 *   sharedParams: { __calc: "qddi" }
 * )
 */
const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);
import profile from "./EcuacionesLagrangeGraphsCoord.profile.js";

void profile;

export { default } from "./MecanicaAnaliticaGraphsCoord.jsx";
