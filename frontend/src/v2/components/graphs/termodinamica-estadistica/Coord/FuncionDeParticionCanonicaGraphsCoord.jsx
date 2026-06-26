// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Función de partición canónica frente a temperatura", en: "Canonical partition function versus temperature" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "FuncionDeParticionCanonicaGraphsCoord",
  question: {
    es: "Función de partición canónica frente a temperatura",
    en: "Canonical partition function versus temperature",
  },
  controlVariable: "temperatura",
  starMagnitude: "funcion_particion",
  formulaText: "Z = sum_i e^{-E_i/k_B T}",
  formulaLatex: "Z = \\sum_i e^{-E_i/k_B T}",
  slopeLatex: "\\frac{dZ}{dT} = \\sum_i \\frac{E_i}{k_B T^2} e^{-E_i/k_B T}",
  slopeMeaning: {
    es: "La pendiente es positiva: aumentar la temperatura hace accesibles más microestados.",
    en: "The slope is positive: raising temperature makes more microstates accessible.",
  },
  relation: {
    es: "Z resume todos los microestados ponderados por el factor de Boltzmann.",
    en: "Z sums all microstates weighted by the Boltzmann factor.",
  },
  physicalReading: {
    es: "A baja temperatura Z tiende a 1 (solo el fundamental); a alta temperatura crece con T.",
    en: "At low temperature Z tends to 1 (only ground state); at high temperature it grows with T.",
  },
  domainMeaning: {
    es: "T > 0 K. Z ≥ 1.",
    en: "T > 0 K. Z ≥ 1.",
  },
  title: {
    es: "Función de partición canónica frente a temperatura",
    en: "Canonical partition function versus temperature",
  },
  formulaCaption: {
    es: " Suma de pesos de Boltzmann",
    en: " Sum of Boltzmann weights",
  },
  xAxis: { es: "Temperatura T (K)", en: "Temperature T (K)" },
  yAxis: { es: "Z", en: "Z" },
  curveName: { es: "Z(T)", en: "Z(T)" },
  pointUnit: "",
  pointPrecision: 4,
  xPrecision: 0,
  yPrecision: 4,
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
      const Z = 1 + Math.exp(-deltaE / (kB * T));
      out.push({ x: T, y: Z });
    }
    return out;
  },
  buildPoint: ({ T0, deltaE }) => {
    const Z = 1 + Math.exp(-deltaE / (kB * T0));
    return { x: T0, y: Z };
  },
};

const FuncionDeParticionCanonicaGraphsCoord = createTermoCoordGraph(config);
export default FuncionDeParticionCanonicaGraphsCoord;
