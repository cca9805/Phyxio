// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const config = {
  componentName: "InterpretacionProbabilisticaGraphsCoord",
  question: {
    es: "Probabilidad de macroestado frente a multiplicidad",
    en: "Macrostate probability versus multiplicity",
  },
  controlVariable: "multiplicidad",
  starMagnitude: "probabilidad_macroestado",
  formulaText: "P_M = Omega_M / Omega_total",
  formulaLatex: "P_M = \\frac{\\Omega_M}{\\Omega_{\\text{total}}}",
  slopeLatex: "P_M \\propto \\Omega_M",
  slopeMeaning: {
    es: "La probabilidad de un macroestado es proporcional a su multiplicidad.",
    en: "The probability of a macrostate is proportional to its multiplicity.",
  },
  relation: {
    es: "Macroestados con más microestados compatibles son más probables.",
    en: "Macrostates with more compatible microstates are more probable.",
  },
  physicalReading: {
    es: "El macroestado de mayor multiplicidad es el más probable y corresponde al equilibrio.",
    en: "The macrostate with the largest multiplicity is the most probable and corresponds to equilibrium.",
  },
  domainMeaning: {
    es: "Ω_M ≥ 1, Ω_total ≥ Ω_M.",
    en: "Ω_M ≥ 1, Ω_total ≥ Ω_M.",
  },
  title: {
    es: "Probabilidad de macroestado frente a multiplicidad",
    en: "Macrostate probability versus multiplicity",
  },
  formulaCaption: {
    es: " Interpretación probabilística",
    en: " Probabilistic interpretation",
  },
  xAxis: { es: "Multiplicidad Ω_M", en: "Multiplicity Ω_M" },
  yAxis: { es: "Probabilidad P_M", en: "Probability P_M" },
  curveName: { es: "P_M(Ω_M)", en: "P_M(Ω_M)" },
  pointUnit: "",
  pointPrecision: 6,
  xPrecision: 0,
  yPrecision: 6,
  schema: [
    { key: "OmegaM", aliases: ["OmegaM", "omegaM", "multiplicidad"], default: 50, min: 1, max: 5000, labelLatex: "\\Omega_M", label_es: "Ω_M", label_en: "Ω_M", width: 90, precision: 0 },
    { key: "OmegaTotal", aliases: ["OmegaTotal", "omegaTotal"], default: 1000, min: 1, max: 10000, labelLatex: "\\Omega_{\\text{total}}", label_es: "Ω_total", label_en: "Ω_total", width: 90, precision: 0 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.OmegaM = clamp(toNum(ep.OmegaM, 50), 1, 5000); },
    ({ clamp, toNum, ep }, out) => { out.OmegaTotal = clamp(toNum(ep.OmegaTotal, 1000), Math.max(1, out.OmegaM), 10000); },
  ],
  seriesArgs: ["OmegaM", "OmegaTotal"],
  buildSeries: ({ OmegaM, OmegaTotal }) => {
    const out = [];
    const maxM = Math.min(OmegaTotal, OmegaM * 2);
    for (let i = 0; i <= 40; i++) {
      const W = 1 + (maxM - 1) * (i / 40);
      const P = Math.min(1, W / OmegaTotal);
      out.push({ x: W, y: P });
    }
    return out;
  },
  buildPoint: ({ OmegaM, OmegaTotal }) => {
    const P = Math.min(1, OmegaM / OmegaTotal);
    return { x: OmegaM, y: P };
  },
};

const InterpretacionProbabilisticaGraphsCoord = createTermoCoordGraph(config);
export default InterpretacionProbabilisticaGraphsCoord;
