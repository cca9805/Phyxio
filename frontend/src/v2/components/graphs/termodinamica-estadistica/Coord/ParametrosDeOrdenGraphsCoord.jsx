// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Parámetro de orden frente a temperatura reducida", en: "Order parameter versus reduced temperature" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "ParametrosDeOrdenGraphsCoord",
  question: {
    es: "Parámetro de orden frente a temperatura reducida",
    en: "Order parameter versus reduced temperature",
  },
  controlVariable: "temperatura_reducida",
  starMagnitude: "parametro_de_orden",
  formulaText: "Φ = Φ_0 (1 - T/T_c)^β para T < T_c",
  formulaLatex: "\\Phi = \\Phi_0 \\left(1 - \\frac{T}{T_c}\\right)^\\beta \\quad (T < T_c)",
  slopeLatex: "\\frac{d\\Phi}{dT} = -\\beta \\Phi_0 T_c^{-1} (1 - T/T_c)^{\\beta-1}",
  slopeMeaning: {
    es: "El parámetro de orden cae a cero en T_c y se anula por encima de la temperatura crítica.",
    en: "The order parameter falls to zero at T_c and vanishes above the critical temperature.",
  },
  relation: {
    es: "La fase ordenada se distingue de la desordenada por el valor no nulo del parámetro de orden.",
    en: "The ordered phase is distinguished from the disordered phase by a nonzero order parameter.",
  },
  physicalReading: {
    es: "La discontinuidad o caída en T/T_c = 1 separa la fase ordenada de la desordenada.",
    en: "The discontinuity or drop at T/T_c = 1 separates the ordered from the disordered phase.",
  },
  domainMeaning: {
    es: "0 ≤ T/T_c ≤ 2. β > 0.",
    en: "0 ≤ T/T_c ≤ 2. β > 0.",
  },
  title: {
    es: "Parámetro de orden frente a temperatura reducida",
    en: "Order parameter versus reduced temperature",
  },
  formulaCaption: {
    es: " Transición de fase con exponente crítico β",
    en: " Phase transition with critical exponent β",
  },
  xAxis: { es: "T/T_c", en: "T/T_c" },
  yAxis: { es: "Φ/Φ_0", en: "Φ/Φ_0" },
  curveName: { es: "Φ/Φ_0", en: "Φ/Φ_0" },
  pointUnit: "",
  pointPrecision: 3,
  xPrecision: 2,
  yPrecision: 3,
  schema: [
    { key: "tRatio", aliases: ["tRatio", "T"], default: 0.8, min: 0.0, max: 2.0, labelLatex: "T/T_c", label_es: "T/T_c", label_en: "T/T_c", width: 80, precision: 2 },
    { key: "beta", aliases: ["beta", "exponente"], default: 0.326, min: 0.05, max: 1.0, labelLatex: "\\beta", label_es: "β", label_en: "β", width: 74, precision: 3 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.tRatio = clamp(toNum(ep.tRatio, 0.8), 0.0, 2.0); },
    ({ clamp, toNum, ep }, out) => { out.beta = clamp(toNum(ep.beta, 0.326), 0.05, 1.0); },
  ],
  seriesArgs: ["tRatio", "beta"],
  buildSeries: ({ tRatio, beta }) => { const out = []; for (let i = 0; i <= 40; i++) { const x = (i / 40) * 2.0; const y = x < 1 ? Math.pow(1 - x, beta) : 0; out.push({ x, y }); } return out; },
  buildPoint: ({ tRatio, beta }) => ({ x: tRatio, y: tRatio < 1 ? Math.pow(1 - tRatio, beta) : 0 }),
};

const ParametrosDeOrdenGraphsCoord = createTermoCoordGraph(config);
export default ParametrosDeOrdenGraphsCoord;
