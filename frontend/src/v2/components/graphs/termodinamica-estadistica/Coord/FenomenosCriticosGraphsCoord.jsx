// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Parámetro de orden cerca de la temperatura crítica", en: "Order parameter near the critical temperature" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "FenomenosCriticosGraphsCoord",
  question: {
    es: "Parámetro de orden cerca de la temperatura crítica",
    en: "Order parameter near the critical temperature",
  },
  controlVariable: "temperatura_reducida",
  starMagnitude: "parametro_de_orden",
  formulaText: "Φ ≈ Φ_0 |t|^β",
  formulaLatex: "\\Phi \\approx \\Phi_0 \\left|\\frac{T - T_c}{T_c}\\right|^\\beta",
  slopeLatex: "\\frac{d\\Phi}{dT} = -\\beta \\Phi_0 T_c^{-1} |t|^{\\beta-1}",
  slopeMeaning: {
    es: "El parámetro de orden crece desde cero en T_c con la potencia crítica β.",
    en: "The order parameter grows from zero at T_c with the critical power β.",
  },
  relation: {
    es: "Cerca de la temperatura crítica el parámetro de orden varía como una potencia del parámetro reducido.",
    en: "Near the critical temperature the order parameter varies as a power of the reduced parameter.",
  },
  physicalReading: {
    es: "La curva muestra la aparición de orden a medida que T se aleja por debajo de T_c.",
    en: "The curve shows the onset of order as T moves below T_c.",
  },
  domainMeaning: {
    es: "|T - T_c|/T_c ≥ 0. β > 0.",
    en: "|T - T_c|/T_c ≥ 0. β > 0.",
  },
  title: {
    es: "Parámetro de orden cerca de T_c",
    en: "Order parameter near T_c",
  },
  formulaCaption: {
    es: " Comportamiento crítico con exponente β",
    en: " Critical behavior with exponent β",
  },
  xAxis: { es: "|T - T_c|/T_c", en: "|T - T_c|/T_c" },
  yAxis: { es: "Φ/Φ_0", en: "Φ/Φ_0" },
  curveName: { es: "Φ/Φ_0", en: "Φ/Φ_0" },
  pointUnit: "",
  pointPrecision: 3,
  xPrecision: 2,
  yPrecision: 3,
  schema: [
    { key: "tDistance", aliases: ["tDistance", "t"], default: 0.1, min: 0.001, max: 1.0, labelLatex: "|t|", label_es: "|t|", label_en: "|t|", width: 74, precision: 3 },
    { key: "beta", aliases: ["beta", "exponente"], default: 0.326, min: 0.05, max: 1.0, labelLatex: "\\beta", label_es: "β", label_en: "β", width: 74, precision: 3 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.tDistance = clamp(toNum(ep.tDistance, 0.1), 0.001, 1.0); },
    ({ clamp, toNum, ep }, out) => { out.beta = clamp(toNum(ep.beta, 0.326), 0.05, 1.0); },
  ],
  seriesArgs: ["tDistance", "beta"],
  buildSeries: ({ tDistance, beta }) => { const out = []; for (let i = 0; i <= 40; i++) { const x = 0.001 + (i / 40) * 0.999; out.push({ x, y: Math.pow(x, beta) }); } return out; },
  buildPoint: ({ tDistance, beta }) => ({ x: tDistance, y: Math.pow(tDistance, beta) }),
};

const FenomenosCriticosGraphsCoord = createTermoCoordGraph(config);
export default FenomenosCriticosGraphsCoord;
