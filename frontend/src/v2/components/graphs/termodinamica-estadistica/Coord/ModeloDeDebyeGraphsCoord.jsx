// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Calor específico reducido en el modelo de Debye", en: "Reduced heat capacity in the Debye model" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "ModeloDeDebyeGraphsCoord",
  question: {
    es: "Calor específico reducido en el modelo de Debye",
    en: "Reduced heat capacity in the Debye model",
  },
  controlVariable: "temperatura_reducida",
  starMagnitude: "calor_especifico",
  formulaText: "C_Vm ≈ 3R f_D(θ_D/T)",
  formulaLatex: "\\frac{C_{Vm}}{3R} \\approx f_D(\\theta_D/T)",
  slopeLatex: "\\frac{d(C_{Vm}/3R)}{d(T/\\theta_D)} \\propto \\left(\\frac{T}{\\theta_D}\\right)^2",
  slopeMeaning: {
    es: "A baja temperatura el calor específico crece como T^3; a alta temperatura tiende a la meseta 3R.",
    en: "At low temperature heat capacity grows as T^3; at high temperature it tends to the 3R plateau.",
  },
  relation: {
    es: "El calor específico de Debye interpola entre el régimen cuántico T^3 y el límite clásico de Dulong-Petit.",
    en: "Debye heat capacity interpolates between the quantum T^3 regime and the classical Dulong-Petit limit.",
  },
  physicalReading: {
    es: "La temperatura de Debye θ_D marca el cambio de curvatura entre los regímenes bajo y alto.",
    en: "The Debye temperature θ_D marks the curvature change between low and high temperature regimes.",
  },
  domainMeaning: {
    es: "T/θ_D > 0.",
    en: "T/θ_D > 0.",
  },
  title: {
    es: "Calor específico reducido en el modelo de Debye",
    en: "Reduced heat capacity in the Debye model",
  },
  formulaCaption: {
    es: " Aproximación de Debye para fonones acústicos",
    en: " Debye approximation for acoustic phonons",
  },
  xAxis: { es: "T/θ_D", en: "T/θ_D" },
  yAxis: { es: "C_Vm / (3R)", en: "C_Vm / (3R)" },
  curveName: { es: "C_Vm/(3R)", en: "C_Vm/(3R)" },
  pointUnit: "",
  pointPrecision: 3,
  xPrecision: 2,
  yPrecision: 3,
  schema: [
    { key: "tRatio", aliases: ["tRatio", "T"], default: 1.0, min: 0.05, max: 3.0, labelLatex: "T/\\theta_D", label_es: "T/θ_D", label_en: "T/θ_D", width: 80, precision: 2 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.tRatio = clamp(toNum(ep.tRatio, 1.0), 0.05, 3.0); },
  ],
  seriesArgs: ["tRatio"],
  buildSeries: ({ tRatio }) => { const out = []; for (let i = 0; i <= 40; i++) { const x = 0.05 + (i / 40) * 2.95; const y = x < 0.3 ? 2.855 * (x ** 3) : 1 - 0.05 / (x ** 2); out.push({ x, y: Math.min(1, Math.max(0, y)) }); } return out; },
  buildPoint: ({ tRatio }) => { const y = tRatio < 0.3 ? 2.855 * (tRatio ** 3) : 1 - 0.05 / (tRatio ** 2); return { x: tRatio, y: Math.min(1, Math.max(0, y)) }; },
};

const ModeloDeDebyeGraphsCoord = createTermoCoordGraph(config);
export default ModeloDeDebyeGraphsCoord;
