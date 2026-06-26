// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Magnetización media en el modelo de Ising", en: "Mean magnetization in the Ising model" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "ModeloDeIsingGraphsCoord",
  question: {
    es: "Magnetización media en el modelo de Ising",
    en: "Mean magnetization in the Ising model",
  },
  controlVariable: "temperatura_reducida",
  starMagnitude: "magnetizacion",
  formulaText: "M/M_0 ≈ (1 - T/T_c)^β",
  formulaLatex: "\\frac{M}{M_0} \\approx \\left(1 - \\frac{T}{T_c}\\right)^\\beta",
  slopeLatex: "\\frac{d(M/M_0)}{dT} = -\\beta M_0^{-1} (1 - T/T_c)^{\\beta-1}",
  slopeMeaning: {
    es: "La magnetización cae a cero en T_c con el exponente crítico β; por encima de T_c el orden desaparece.",
    en: "Magnetization falls to zero at T_c with critical exponent β; above T_c order disappears.",
  },
  relation: {
    es: "La magnetización espontánea es el parámetro de orden del modelo de Ising; se anula en la temperatura crítica.",
    en: "Spontaneous magnetization is the order parameter of the Ising model; it vanishes at the critical temperature.",
  },
  physicalReading: {
    es: "La caída abrupta cerca de T/T_c = 1 indica la transición de fase de segundo orden.",
    en: "The steep drop near T/T_c = 1 indicates the second-order phase transition.",
  },
  domainMeaning: {
    es: "0 ≤ T/T_c ≤ 1.5. β > 0.",
    en: "0 ≤ T/T_c ≤ 1.5. β > 0.",
  },
  title: {
    es: "Magnetización media frente a temperatura reducida",
    en: "Mean magnetization versus reduced temperature",
  },
  formulaCaption: {
    es: " Aproximación de campo medio cerca de T_c",
    en: " Mean-field approximation near T_c",
  },
  xAxis: { es: "T/T_c", en: "T/T_c" },
  yAxis: { es: "M/M_0", en: "M/M_0" },
  curveName: { es: "M/M_0", en: "M/M_0" },
  pointUnit: "",
  pointPrecision: 3,
  xPrecision: 2,
  yPrecision: 3,
  schema: [
    { key: "tRatio", aliases: ["tRatio", "T"], default: 0.8, min: 0.0, max: 1.5, labelLatex: "T/T_c", label_es: "T/T_c", label_en: "T/T_c", width: 80, precision: 2 },
    { key: "beta", aliases: ["beta", "exponente"], default: 0.125, min: 0.05, max: 0.5, labelLatex: "\\beta", label_es: "β", label_en: "β", width: 74, precision: 3 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.tRatio = clamp(toNum(ep.tRatio, 0.8), 0.0, 1.5); },
    ({ clamp, toNum, ep }, out) => { out.beta = clamp(toNum(ep.beta, 0.125), 0.05, 0.5); },
  ],
  seriesArgs: ["tRatio", "beta"],
  buildSeries: ({ tRatio, beta }) => { const out = []; for (let i = 0; i <= 40; i++) { const x = (i / 40) * 1.5; const y = x < 1 ? Math.pow(1 - x, beta) : 0; out.push({ x, y }); } return out; },
  buildPoint: ({ tRatio, beta }) => ({ x: tRatio, y: tRatio < 1 ? Math.pow(1 - tRatio, beta) : 0 }),
};

const ModeloDeIsingGraphsCoord = createTermoCoordGraph(config);
export default ModeloDeIsingGraphsCoord;
