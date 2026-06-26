// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Peso de Boltzmann frente a energía del microestado", en: "Boltzmann weight versus microstate energy" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "DefinicionYSignificadoGraphsCoord",
  question: {
    es: "Peso de Boltzmann frente a energía del microestado",
    en: "Boltzmann weight versus microstate energy",
  },
  controlVariable: "energia_microestado",
  starMagnitude: "peso_boltzmann",
  formulaText: "w_i = exp(-E_i / k_B T)",
  formulaLatex: "w_i = e^{-E_i / k_B T}",
  slopeLatex: "\\frac{dw_i}{dE_i} = -\\frac{1}{k_B T} e^{-E_i/k_B T}",
  slopeMeaning: {
    es: "La pendiente es negativa: microestados de mayor energía tienen menor peso estadístico.",
    en: "The slope is negative: higher-energy microstates have lower statistical weight.",
  },
  relation: {
    es: "El peso de Boltzmann decae exponencialmente con la energía a temperatura fija.",
    en: "The Boltzmann weight decays exponentially with energy at fixed temperature.",
  },
  physicalReading: {
    es: "A energías altas el peso es despreciable; el estado fundamental domina la suma.",
    en: "At high energies the weight is negligible; the ground state dominates the sum.",
  },
  domainMeaning: {
    es: "E_i ≥ 0. T > 0 K.",
    en: "E_i ≥ 0. T > 0 K.",
  },
  title: {
    es: "Peso de Boltzmann frente a energía",
    en: "Boltzmann weight versus energy",
  },
  formulaCaption: {
    es: " Peso estadístico",
    en: " Statistical weight",
  },
  xAxis: { es: "Energía E_i (J)", en: "Energy E_i (J)" },
  yAxis: { es: "Peso w_i", en: "Weight w_i" },
  curveName: { es: "w_i(E_i)", en: "w_i(E_i)" },
  pointUnit: "",
  pointPrecision: 6,
  xPrecision: 24,
  yPrecision: 6,
  schema: [
    { key: "E0", aliases: ["E0", "energia", "E"], default: 1e-21, min: 0, max: 1e-19, labelLatex: "E_i", label_es: "E", label_en: "E", width: 90, precision: 2 },
    { key: "T", aliases: ["T", "temperatura"], default: 300, min: 10, max: 5000, labelLatex: "T", label_es: "T", label_en: "T", width: 74, precision: 0 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.E0 = clamp(toNum(ep.E0, 1e-21), 0, 1e-19); },
    ({ clamp, toNum, ep }, out) => { out.T = clamp(toNum(ep.T, 300), 10, 5000); },
  ],
  seriesArgs: ["E0", "T"],
  buildSeries: ({ E0, T }) => {
    const out = [];
    for (let i = 0; i <= 40; i++) {
      const E = (i / 40) * 5e-20;
      const w = Math.exp(-E / (kB * T));
      out.push({ x: E, y: w });
    }
    return out;
  },
  buildPoint: ({ E0, T }) => {
    const w = Math.exp(-E0 / (kB * T));
    return { x: E0, y: w };
  },
};

const DefinicionYSignificadoGraphsCoord = createTermoCoordGraph(config);
export default DefinicionYSignificadoGraphsCoord;
