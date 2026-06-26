// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Probabilidad de microestados compatibles en un ensemble de sistemas", en: "Probability of compatible microstates in an ensemble of systems" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const config = {
  componentName: "ProbabilidadYEnsemblesGraphsCoord",
  question: {
    es: "Probabilidad normalizada de microestados en un ensemble",
    en: "Normalized probability of microstates in an ensemble",
  },
  controlVariable: "estado",
  starMagnitude: "probabilidad_estado",
  formulaText: "P_i = 1 / Omega",
  formulaLatex: "P_i = \\frac{1}{\\Omega}",
  slopeLatex: "P_i = \\text{constante}",
  slopeMeaning: {
    es: "En un ensemble microcanónico todos los microestados accesibles tienen la misma probabilidad.",
    en: "In a microcanonical ensemble all accessible microstates have the same probability.",
  },
  relation: {
    es: "La normalización exige que la suma de probabilidades sea 1.",
    en: "Normalization requires the sum of probabilities to be 1.",
  },
  physicalReading: {
    es: "Cada microestado accesible contribuye igualmente al promedio del ensemble.",
    en: "Each accessible microstate contributes equally to the ensemble average.",
  },
  domainMeaning: {
    es: "Ω ≥ 1. P_i ∈ (0, 1].",
    en: "Ω ≥ 1. P_i ∈ (0, 1].",
  },
  title: {
    es: "Probabilidad uniforme en ensemble microcanónico",
    en: "Uniform probability in a microcanonical ensemble",
  },
  formulaCaption: {
    es: " Normalización del ensemble",
    en: " Ensemble normalization",
  },
  xAxis: { es: "Estado i", en: "State i" },
  yAxis: { es: "Probabilidad P_i", en: "Probability P_i" },
  curveName: { es: "P_i", en: "P_i" },
  pointUnit: "",
  pointPrecision: 6,
  xPrecision: 0,
  yPrecision: 6,
  schema: [
    { key: "Omega", aliases: ["Omega", "omega", "estados"], default: 100, min: 1, max: 1000, labelLatex: "\\Omega", label_es: "Ω", label_en: "Ω", width: 90, precision: 0 },
    { key: "i0", aliases: ["i0", "i", "estado"], default: 1, min: 1, max: 1000, labelLatex: "i", label_es: "i", label_en: "i", width: 74, precision: 0 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.Omega = clamp(toNum(ep.Omega, 100), 1, 1000); },
    ({ clamp, toNum, ep }, out) => { out.i0 = Math.floor(clamp(toNum(ep.i0, 1), 1, out.Omega)); },
  ],
  seriesArgs: ["Omega", "i0"],
  buildSeries: ({ Omega, i0 }) => {
    const out = [];
    for (let i = 1; i <= Omega; i++) {
      out.push({ x: i, y: 1 / Omega });
    }
    return out;
  },
  buildPoint: ({ Omega, i0 }) => {
    return { x: i0, y: 1 / Omega };
  },
};

const ProbabilidadYEnsemblesGraphsCoord = createTermoCoordGraph(config);
export default ProbabilidadYEnsemblesGraphsCoord;
