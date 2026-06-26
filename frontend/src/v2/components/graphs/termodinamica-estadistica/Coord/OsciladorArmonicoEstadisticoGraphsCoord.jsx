// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Energía media del oscilador armónico cuántico frente a temperatura", en: "Mean energy of the quantum harmonic oscillator versus temperature" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "OsciladorArmonicoEstadisticoGraphsCoord",
  question: {
    es: "Energía media del oscilador armónico cuántico frente a temperatura",
    en: "Mean energy of the quantum harmonic oscillator versus temperature",
  },
  controlVariable: "temperatura",
  starMagnitude: "energia_media",
  formulaText: "⟨E⟩ = ℏω (1/2 + 1/(e^{ℏω/k_B T} - 1))",
  formulaLatex: "\\langle E \\rangle = \\hbar\\omega \\left(\\frac{1}{2} + \\frac{1}{e^{\\hbar\\omega/k_B T} - 1}\\right)",
  slopeLatex: "\\frac{d\\langle E \\rangle}{dT} = k_B \\left(\\frac{\\hbar\\omega}{k_B T}\\right)^2 \\frac{e^{\\hbar\\omega/k_B T}}{(e^{\\hbar\\omega/k_B T} - 1)^2}",
  slopeMeaning: {
    es: "A baja temperatura la energía se satura en el punto cero ℏω/2; a alta temperatura crece linealmente con T.",
    en: "At low temperature energy saturates at the zero-point ℏω/2; at high temperature it grows linearly with T.",
  },
  relation: {
    es: "La energía media del oscilador cuántico evoluciona desde el punto cero hasta el límite clásico k_B T.",
    en: "The quantum oscillator mean energy evolves from zero-point to the classical limit k_B T.",
  },
  physicalReading: {
    es: "La meseta inicial y la recta asintótica separan el régimen cuántico del clásico.",
    en: "The initial plateau and asymptotic line separate the quantum and classical regimes.",
  },
  domainMeaning: {
    es: "T > 0 K. ℏω > 0.",
    en: "T > 0 K. ℏω > 0.",
  },
  title: {
    es: "Energía media del oscilador armónico cuántico",
    en: "Mean energy of the quantum harmonic oscillator",
  },
  formulaCaption: {
    es: " Oscilador armónico cuántico de frecuencia ℏω",
    en: " Quantum harmonic oscillator with frequency ℏω",
  },
  xAxis: { es: "Temperatura T (K)", en: "Temperature T (K)" },
  yAxis: { es: "⟨E⟩ (10⁻²¹ J)", en: "⟨E⟩ (10⁻²¹ J)" },
  curveName: { es: "⟨E⟩(T)", en: "⟨E⟩(T)" },
  pointUnit: "10⁻²¹ J",
  pointPrecision: 3,
  xPrecision: 0,
  yPrecision: 3,
  schema: [
    { key: "T0", aliases: ["T0", "temperatura", "T"], default: 300, min: 1, max: 2000, labelLatex: "T", label_es: "T", label_en: "T", width: 74, precision: 0 },
    { key: "hbarOmega", aliases: ["hbarOmega", "omega"], default: 1e-21, min: 1e-23, max: 1e-19, labelLatex: "\\hbar\\omega", label_es: "ℏω", label_en: "ℏω", width: 90, precision: 2 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.T0 = clamp(toNum(ep.T0, 300), 1, 2000); },
    ({ clamp, toNum, ep }, out) => { out.hbarOmega = clamp(toNum(ep.hbarOmega, 1e-21), 1e-23, 1e-19); },
  ],
  seriesArgs: ["T0", "hbarOmega"],
  buildSeries: ({ T0, hbarOmega }) => { const out = []; for (let i = 0; i <= 40; i++) { const T = 1 + (i / 40) * 1999; const x = hbarOmega / (kB * T); const E = hbarOmega * (0.5 + 1 / (Math.exp(x) - 1)); out.push({ x: T, y: E * 1e21 }); } return out; },
  buildPoint: ({ T0, hbarOmega }) => { const x = hbarOmega / (kB * T0); const E = hbarOmega * (0.5 + 1 / (Math.exp(x) - 1)); return { x: T0, y: E * 1e21 }; },
};

const OsciladorArmonicoEstadisticoGraphsCoord = createTermoCoordGraph(config);
export default OsciladorArmonicoEstadisticoGraphsCoord;
