// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Energía media de un sistema de dos niveles frente a temperatura", en: "Mean energy of a two-level system versus temperature" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "EnergiaMediaDeParticionGraphsCoord",
  question: {
    es: "Energía media de un sistema de dos niveles frente a temperatura",
    en: "Mean energy of a two-level system versus temperature",
  },
  controlVariable: "temperatura",
  starMagnitude: "energia_media",
  formulaText: "U = \\Delta\\varepsilon / (1 + e^{\\Delta\\varepsilon/k_B T})",
  formulaLatex: "U = \\frac{\\Delta\\varepsilon}{1 + e^{\\Delta\\varepsilon/k_B T}}",
  slopeLatex: "\\frac{dU}{dT} = \\frac{k_B (\\Delta\\varepsilon/k_B T)^2 e^{\\Delta\\varepsilon/k_B T}}{(1 + e^{\\Delta\\varepsilon/k_B T})^2}",
  slopeMeaning: {
    es: "La capacidad calorífica es proporcional a la pendiente de U(T).",
    en: "Heat capacity is proportional to the slope of U(T).",
  },
  relation: {
    es: "La energía media crece desde 0 hasta \\Delta\\varepsilon cuando la temperatura activa el nivel superior.",
    en: "Mean energy rises from 0 to \\Delta\\varepsilon as temperature activates the upper level.",
  },
  physicalReading: {
    es: "A baja temperatura casi todos los sistemas están en el estado fundamental; a alta temperatura se reparten equitativamente.",
    en: "At low temperature almost all systems are in the ground state; at high temperature they are evenly distributed.",
  },
  domainMeaning: {
    es: "T > 0 K. \\Delta\\varepsilon > 0.",
    en: "T > 0 K. \\Delta\\varepsilon > 0.",
  },
  title: {
    es: "Energía media de un sistema de dos niveles",
    en: "Mean energy of a two-level system",
  },
  formulaCaption: {
    es: " Energía media desde la función de partición",
    en: " Mean energy from the partition function",
  },
  xAxis: { es: "Temperatura T (K)", en: "Temperature T (K)" },
  yAxis: { es: "Energía media U (J)", en: "Mean energy U (J)" },
  curveName: { es: "U(T)", en: "U(T)" },
  pointUnit: "J",
  pointPrecision: 24,
  xPrecision: 0,
  yPrecision: 24,
  schema: [
    { key: "T0", aliases: ["T0", "temperatura", "T"], default: 300, min: 10, max: 2000, labelLatex: "T", label_es: "T", label_en: "T", width: 74, precision: 0 },
    { key: "deltaE", aliases: ["deltaE", "epsilon"], default: 1e-21, min: 1e-23, max: 1e-19, labelLatex: "\\Delta\\varepsilon", label_es: "Δε", label_en: "Δε", width: 90, precision: 2 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.T0 = clamp(toNum(ep.T0, 300), 10, 2000); },
    ({ clamp, toNum, ep }, out) => { out.deltaE = clamp(toNum(ep.deltaE, 1e-21), 1e-23, 1e-19); },
  ],
  seriesArgs: ["T0", "deltaE"],
  buildSeries: ({ T0, deltaE }) => {
    const out = [];
    for (let i = 0; i <= 40; i++) {
      const T = 10 + (i / 40) * 1990;
      const x = Math.exp(deltaE / (kB * T));
      const U = deltaE / (1 + x);
      out.push({ x: T, y: U });
    }
    return out;
  },
  buildPoint: ({ T0, deltaE }) => {
    const x = Math.exp(deltaE / (kB * T0));
    const U = deltaE / (1 + x);
    return { x: T0, y: U };
  },
};

const EnergiaMediaDeParticionGraphsCoord = createTermoCoordGraph(config);
export default EnergiaMediaDeParticionGraphsCoord;
