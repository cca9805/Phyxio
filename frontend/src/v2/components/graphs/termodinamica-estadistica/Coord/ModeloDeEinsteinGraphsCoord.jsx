// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Calor específico molar en el modelo de Einstein", en: "Molar heat capacity in the Einstein model" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "ModeloDeEinsteinGraphsCoord",
  question: {
    es: "Calor específico molar en el modelo de Einstein",
    en: "Molar heat capacity in the Einstein model",
  },
  controlVariable: "temperatura",
  starMagnitude: "calor_especifico",
  formulaText: "C_Vm = 3R (θ_E/T)^2 e^{θ_E/T} / (e^{θ_E/T} - 1)^2",
  formulaLatex: "C_{Vm} = 3R \\left(\\frac{\\theta_E}{T}\\right)^2 \\frac{e^{\\theta_E/T}}{(e^{\\theta_E/T} - 1)^2}",
  slopeLatex: "\\frac{dC_{Vm}}{dT} = \\frac{3R}{T^2} \\left(\\frac{\\theta_E}{T}\\right)^2 \\frac{e^{\\theta_E/T}(e^{\\theta_E/T} + 1)}{(e^{\\theta_E/T} - 1)^3}",
  slopeMeaning: {
    es: "El calor específico crece desde cero a baja T hasta la meseta clásica 3R a alta T.",
    en: "Heat capacity rises from zero at low T to the classical 3R plateau at high T.",
  },
  relation: {
    es: "El calor específico depende de la relación entre la temperatura y la temperatura característica de Einstein.",
    en: "Heat capacity depends on the ratio between temperature and the Einstein characteristic temperature.",
  },
  physicalReading: {
    es: "Cuando T supera θ_E, los osciladores se activan térmicamente y C_Vm tiende a 3R.",
    en: "When T exceeds θ_E, oscillators thermally activate and C_Vm tends to 3R.",
  },
  domainMeaning: {
    es: "T > 0 K. θ_E > 0.",
    en: "T > 0 K. θ_E > 0.",
  },
  title: {
    es: "Calor específico molar en el modelo de Einstein",
    en: "Molar heat capacity in the Einstein model",
  },
  formulaCaption: {
    es: " Sólido con 3N osciladores idénticos",
    en: " Solid with 3N identical oscillators",
  },
  xAxis: { es: "T/θ_E", en: "T/θ_E" },
  yAxis: { es: "C_Vm / (3R)", en: "C_Vm / (3R)" },
  curveName: { es: "C_Vm/(3R)", en: "C_Vm/(3R)" },
  pointUnit: "",
  pointPrecision: 3,
  xPrecision: 2,
  yPrecision: 3,
  schema: [
    { key: "tRatio", aliases: ["tRatio", "T"], default: 1.0, min: 0.05, max: 5.0, labelLatex: "T/\\theta_E", label_es: "T/θ_E", label_en: "T/θ_E", width: 80, precision: 2 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.tRatio = clamp(toNum(ep.tRatio, 1.0), 0.05, 5.0); },
  ],
  seriesArgs: ["tRatio"],
  buildSeries: ({ tRatio }) => { const out = []; for (let i = 0; i <= 40; i++) { const x = 0.05 + (i / 40) * 4.95; const u = 1 / x; const y = (u * u * Math.exp(u)) / ((Math.exp(u) - 1) ** 2); out.push({ x, y }); } return out; },
  buildPoint: ({ tRatio }) => { const u = 1 / tRatio; const y = (u * u * Math.exp(u)) / ((Math.exp(u) - 1) ** 2); return { x: tRatio, y }; },
};

const ModeloDeEinsteinGraphsCoord = createTermoCoordGraph(config);
export default ModeloDeEinsteinGraphsCoord;
