// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "DefinicionBoltzmannGraphsCoord",
  question: {
    es: "Entropía de Boltzmann frente a microestados accesibles",
    en: "Boltzmann entropy versus accessible microstates",
  },
  controlVariable: "microestados",
  starMagnitude: "entropia",
  formulaText: "S = k_B ln Omega",
  formulaLatex: "S = k_B \\ln \\Omega",
  slopeLatex: "\\frac{dS}{d\\Omega} = \\frac{k_B}{\\Omega}",
  slopeMeaning: {
    es: "La entropía crece logarítmicamente con el número de microestados.",
    en: "Entropy grows logarithmically with the number of microstates.",
  },
  relation: {
    es: "La entropía estadística de Boltzmann mide el número de microestados compatibles con un macroestado.",
    en: "Boltzmann statistical entropy measures the number of microstates compatible with a macrostate.",
  },
  physicalReading: {
    es: "Duplicar el número de microestados añade k_B ln 2 a la entropía.",
    en: "Doubling the number of microstates adds k_B ln 2 to the entropy.",
  },
  domainMeaning: {
    es: "Ω ≥ 1. S = 0 cuando Ω = 1.",
    en: "Ω ≥ 1. S = 0 when Ω = 1.",
  },
  title: {
    es: "Entropía de Boltzmann frente a microestados",
    en: "Boltzmann entropy versus microstates",
  },
  formulaCaption: {
    es: " Entropía estadística",
    en: " Statistical entropy",
  },
  xAxis: { es: "Microestados Ω", en: "Microstates Ω" },
  yAxis: { es: "Entropía S (J/K)", en: "Entropy S (J/K)" },
  curveName: { es: "S(Ω)", en: "S(Ω)" },
  pointUnit: "J/K",
  pointPrecision: 24,
  xPrecision: 0,
  yPrecision: 24,
  schema: [
    { key: "Omega", aliases: ["Omega", "omega", "microestados"], default: 1000, min: 1, max: 1e7, labelLatex: "\\Omega", label_es: "Ω", label_en: "Ω", width: 90, precision: 0 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.Omega = clamp(toNum(ep.Omega, 1000), 1, 1e7); },
  ],
  seriesArgs: ["Omega"],
  buildSeries: ({ Omega }) => {
    const out = [];
    const omegaMin = Math.max(1, Omega / 100);
    const omegaMax = Omega * 10;
    for (let i = 0; i <= 40; i++) {
      const W = omegaMin * Math.pow(omegaMax / omegaMin, i / 40);
      const S = kB * Math.log(W);
      out.push({ x: W, y: S });
    }
    return out;
  },
  buildPoint: ({ Omega }) => {
    const S = kB * Math.log(Math.max(1, Omega));
    return { x: Omega, y: S };
  },
};

const DefinicionBoltzmannGraphsCoord = createTermoCoordGraph(config);
export default DefinicionBoltzmannGraphsCoord;
