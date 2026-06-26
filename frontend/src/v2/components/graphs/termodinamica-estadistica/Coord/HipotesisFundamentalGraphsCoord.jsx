// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Equiprobabilidad de microestados accesibles", en: "Equiprobability of accessible microstates" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const config = {
  componentName: "HipotesisFundamentalGraphsCoord",
  question: {
    es: "Equiprobabilidad de microestados accesibles",
    en: "Equiprobability of accessible microstates",
  },
  controlVariable: "microestados",
  starMagnitude: "probabilidad_microestado",
  formulaText: "P_i = 1 / Omega",
  formulaLatex: "P_i = \\frac{1}{\\Omega}",
  slopeLatex: "\\frac{dP_i}{d\\Omega} = -\\frac{1}{\\Omega^2}",
  slopeMeaning: {
    es: "La probabilidad de cada microestado decrece inversamente con Ω.",
    en: "The probability of each microstate decreases inversely with Ω.",
  },
  relation: {
    es: "La hipótesis fundamental asigna la misma probabilidad a todos los microestados accesibles.",
    en: "The fundamental hypothesis assigns equal probability to all accessible microstates.",
  },
  physicalReading: {
    es: "Si hay Ω microestados accesibles, cada uno tiene probabilidad 1/Ω.",
    en: "If there are Ω accessible microstates, each has probability 1/Ω.",
  },
  domainMeaning: {
    es: "Ω ≥ 1. P_i ∈ (0, 1].",
    en: "Ω ≥ 1. P_i ∈ (0, 1].",
  },
  title: {
    es: "Equiprobabilidad de microestados",
    en: "Equiprobability of microstates",
  },
  formulaCaption: {
    es: " Probabilidad uniforme",
    en: " Uniform probability",
  },
  xAxis: { es: "Microestados accesibles Ω", en: "Accessible microstates Ω" },
  yAxis: { es: "Probabilidad P_i", en: "Probability P_i" },
  curveName: { es: "P_i(Ω)", en: "P_i(Ω)" },
  pointUnit: "",
  pointPrecision: 6,
  xPrecision: 0,
  yPrecision: 6,
  schema: [
    { key: "Omega", aliases: ["Omega", "omega", "microestados"], default: 100, min: 1, max: 10000, labelLatex: "\\Omega", label_es: "Ω", label_en: "Ω", width: 90, precision: 0 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.Omega = clamp(toNum(ep.Omega, 100), 1, 10000); },
  ],
  seriesArgs: ["Omega"],
  buildSeries: ({ Omega }) => {
    const out = [];
    const omegaMin = Math.max(1, Omega / 100);
    const omegaMax = Omega * 10;
    for (let i = 0; i <= 40; i++) {
      const W = Math.floor(omegaMin * Math.pow(omegaMax / omegaMin, i / 40));
      const P = 1 / W;
      out.push({ x: W, y: P });
    }
    return out;
  },
  buildPoint: ({ Omega }) => {
    return { x: Omega, y: 1 / Omega };
  },
};

const HipotesisFundamentalGraphsCoord = createTermoCoordGraph(config);
export default HipotesisFundamentalGraphsCoord;
