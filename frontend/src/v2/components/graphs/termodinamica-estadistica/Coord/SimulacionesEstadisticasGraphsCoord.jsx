// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Error estadístico frente al número de muestras", en: "Statistical error versus number of samples" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "SimulacionesEstadisticasGraphsCoord",
  question: {
    es: "Error estadístico frente al número de muestras",
    en: "Statistical error versus number of samples",
  },
  controlVariable: "numero_muestras",
  starMagnitude: "error_estadistico",
  formulaText: "δ_X ≈ σ_0 / √N",
  formulaLatex: "\\delta_X \\approx \\frac{\\sigma_0}{\\sqrt{N}}",
  slopeLatex: "\\frac{d\\delta_X}{dN} = -\\frac{\\sigma_0}{2 N^{3/2}}",
  slopeMeaning: {
    es: "El error decrece al aumentar N; cuadruplicar N reduce el error a la mitad.",
    en: "Error decreases as N increases; quadrupling N halves the error.",
  },
  relation: {
    es: "La incertidumbre estadística de la media escala como el inverso de la raíz cuadrada del número de muestras.",
    en: "Statistical uncertainty of the mean scales as the inverse square root of the number of samples.",
  },
  physicalReading: {
    es: "La curva muestra la convergencia típica de una estimación Monte Carlo.",
    en: "The curve shows the typical convergence of a Monte Carlo estimate.",
  },
  domainMeaning: {
    es: "N ≥ 1. σ_0 > 0.",
    en: "N ≥ 1. σ_0 > 0.",
  },
  title: {
    es: "Error estadístico frente al número de muestras",
    en: "Statistical error versus number of samples",
  },
  formulaCaption: {
    es: " Estimación de media con varianza finita",
    en: " Finite-variance mean estimate",
  },
  xAxis: { es: "Número de muestras N", en: "Number of samples N" },
  yAxis: { es: "δ_X", en: "δ_X" },
  curveName: { es: "δ_X(N)", en: "δ_X(N)" },
  pointUnit: "",
  pointPrecision: 4,
  xPrecision: 0,
  yPrecision: 4,
  schema: [
    { key: "N0", aliases: ["N0", "numeroMuestras", "N"], default: 100, min: 1, max: 100000, labelLatex: "N", label_es: "N", label_en: "N", width: 80, precision: 0 },
    { key: "sigma0", aliases: ["sigma0", "sigma"], default: 1.0, min: 0.001, max: 100, labelLatex: "\\sigma_0", label_es: "σ₀", label_en: "σ₀", width: 80, precision: 2 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.N0 = clamp(toNum(ep.N0, 100), 1, 100000); },
    ({ clamp, toNum, ep }, out) => { out.sigma0 = clamp(toNum(ep.sigma0, 1.0), 0.001, 100); },
  ],
  seriesArgs: ["N0", "sigma0"],
  buildSeries: ({ N0, sigma0 }) => { const out = []; for (let i = 0; i <= 40; i++) { const N = 1 + Math.exp((i / 40) * Math.log(100000)); out.push({ x: N, y: sigma0 / Math.sqrt(N) }); } return out; },
  buildPoint: ({ N0, sigma0 }) => ({ x: N0, y: sigma0 / Math.sqrt(N0) }),
};

const SimulacionesEstadisticasGraphsCoord = createTermoCoordGraph(config);
export default SimulacionesEstadisticasGraphsCoord;
