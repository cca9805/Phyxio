// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Convergencia del error de Monte Carlo", en: "Monte Carlo error convergence" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "MetodoDeMontecarloGraphsCoord",
  question: {
    es: "Convergencia del error de Monte Carlo",
    en: "Monte Carlo error convergence",
  },
  controlVariable: "numero_muestras",
  starMagnitude: "error_estadistico",
  formulaText: "δ_MC ≈ σ / √N",
  formulaLatex: "\\delta_{MC} \\approx \\frac{\\sigma}{\\sqrt{N}}",
  slopeLatex: "\\frac{d\\delta_{MC}}{dN} = -\\frac{\\sigma}{2 N^{3/2}}",
  slopeMeaning: {
    es: "El error Monte Carlo decrece lentamente con N: se necesitan cuatro veces más muestras para reducirlo a la mitad.",
    en: "Monte Carlo error decreases slowly with N: four times more samples are needed to halve it.",
  },
  relation: {
    es: "La precisión de Monte Carlo mejora como el inverso de la raíz cuadrada del número de muestras.",
    en: "Monte Carlo precision improves as the inverse square root of the number of samples.",
  },
  physicalReading: {
    es: "La curva ilustra la ley de convergencia 1/√N propia del muestreo aleatorio.",
    en: "The curve illustrates the 1/√N convergence law of random sampling.",
  },
  domainMeaning: {
    es: "N ≥ 1. σ > 0.",
    en: "N ≥ 1. σ > 0.",
  },
  title: {
    es: "Convergencia del error Monte Carlo",
    en: "Monte Carlo error convergence",
  },
  formulaCaption: {
    es: " Muestreo aleatorio con varianza finita",
    en: " Random sampling with finite variance",
  },
  xAxis: { es: "Número de muestras N", en: "Number of samples N" },
  yAxis: { es: "δ_MC", en: "δ_MC" },
  curveName: { es: "δ_MC(N)", en: "δ_MC(N)" },
  pointUnit: "",
  pointPrecision: 4,
  xPrecision: 0,
  yPrecision: 4,
  schema: [
    { key: "N0", aliases: ["N0", "numeroMuestras", "N"], default: 1000, min: 1, max: 1000000, labelLatex: "N", label_es: "N", label_en: "N", width: 90, precision: 0 },
    { key: "sigma", aliases: ["sigma", "desviacion"], default: 1.0, min: 0.001, max: 100, labelLatex: "\\sigma", label_es: "σ", label_en: "σ", width: 80, precision: 2 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.N0 = clamp(toNum(ep.N0, 1000), 1, 1000000); },
    ({ clamp, toNum, ep }, out) => { out.sigma = clamp(toNum(ep.sigma, 1.0), 0.001, 100); },
  ],
  seriesArgs: ["N0", "sigma"],
  buildSeries: ({ N0, sigma }) => { const out = []; for (let i = 0; i <= 40; i++) { const N = 1 + Math.exp((i / 40) * Math.log(1000000)); out.push({ x: N, y: sigma / Math.sqrt(N) }); } return out; },
  buildPoint: ({ N0, sigma }) => ({ x: N0, y: sigma / Math.sqrt(N0) }),
};

const MetodoDeMontecarloGraphsCoord = createTermoCoordGraph(config);
export default MetodoDeMontecarloGraphsCoord;
