// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Fluctuaciones de energía de un sistema de dos niveles frente a temperatura", en: "Energy fluctuations of a two-level system versus temperature" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "FluctuacionesGraphsCoord",
  question: {
    es: "Fluctuaciones de energía de un sistema de dos niveles frente a temperatura",
    en: "Energy fluctuations of a two-level system versus temperature",
  },
  controlVariable: "temperatura",
  starMagnitude: "varianza_energia",
  formulaText: "sigma_E^2 = k_B T^2 C_V",
  formulaLatex: "\\sigma_E^2 = k_B T^2 C_V",
  slopeLatex: "\\frac{d\\sigma_E^2}{dT} = k_B (2T C_V + T^2 \\frac{dC_V}{dT})",
  slopeMeaning: {
    es: "Las fluctuaciones dependen de la temperatura y de la capacidad calorífica.",
    en: "Fluctuations depend on temperature and heat capacity.",
  },
  relation: {
    es: "Para un sistema de dos niveles, la varianza de energía es máxima cuando ambos niveles están igualmente poblados.",
    en: "For a two-level system, the energy variance is maximum when both levels are equally populated.",
  },
  physicalReading: {
    es: "El pico de fluctuaciones indica la temperatura característica \\Delta\\varepsilon/k_B.",
    en: "The fluctuation peak indicates the characteristic temperature \\Delta\\varepsilon/k_B.",
  },
  domainMeaning: {
    es: "T > 0 K.",
    en: "T > 0 K.",
  },
  title: {
    es: "Fluctuaciones de energía frente a temperatura",
    en: "Energy fluctuations versus temperature",
  },
  formulaCaption: {
    es: " Varianza de energía",
    en: " Energy variance",
  },
  xAxis: { es: "Temperatura T (K)", en: "Temperature T (K)" },
  yAxis: { es: "Varianza σ_E² (J²)", en: "Variance σ_E² (J²)" },
  curveName: { es: "σ_E²(T)", en: "σ_E²(T)" },
  pointUnit: "J²",
  pointPrecision: 45,
  xPrecision: 0,
  yPrecision: 45,
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
      const betaDE = deltaE / (kB * T);
      const e = Math.exp(betaDE);
      const p1 = e / (1 + e);
      const U = p1 * deltaE;
      const U2 = p1 * deltaE * deltaE;
      const varE = U2 - U * U;
      out.push({ x: T, y: varE });
    }
    return out;
  },
  buildPoint: ({ T0, deltaE }) => {
    const T = T0;
    const betaDE = deltaE / (kB * T);
    const e = Math.exp(betaDE);
    const p1 = e / (1 + e);
    const U = p1 * deltaE;
    const U2 = p1 * deltaE * deltaE;
    const varE = U2 - U * U;
    return { x: T, y: varE };
  },
};

const FluctuacionesGraphsCoord = createTermoCoordGraph(config);
export default FluctuacionesGraphsCoord;
