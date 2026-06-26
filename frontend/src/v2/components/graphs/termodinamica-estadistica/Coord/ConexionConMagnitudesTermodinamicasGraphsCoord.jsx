// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Energía libre de Helmholtz frente a temperatura", en: "Helmholtz free energy versus temperature" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "ConexionConMagnitudesTermodinamicasGraphsCoord",
  question: {
    es: "Energía libre de Helmholtz frente a temperatura",
    en: "Helmholtz free energy versus temperature",
  },
  controlVariable: "temperatura",
  starMagnitude: "energia_libre_helmholtz",
  formulaText: "F = -k_B T ln Z",
  formulaLatex: "F = -k_B T \\ln Z",
  slopeLatex: "\\frac{dF}{dT} = -k_B \\ln Z - \\frac{k_B T}{Z} \\frac{dZ}{dT}",
  slopeMeaning: {
    es: "La pendiente combina la contribución entrópica y la sensibilidad térmica de la función de partición.",
    en: "The slope combines the entropic contribution and the thermal sensitivity of the partition function.",
  },
  relation: {
    es: "La energía libre de Helmholtz decrece con la temperatura porque el sistema accede a más microestados; Z gobierna la pendiente.",
    en: "Helmholtz free energy decreases with temperature because the system accesses more microstates; Z governs the slope.",
  },
  physicalReading: {
    es: "A mayor temperatura, F es más negativo porque la entropía (vía Z) crece; el punto marca una temperatura de referencia.",
    en: "At higher temperature, F is more negative because entropy (via Z) grows; the point marks a reference temperature.",
  },
  domainMeaning: {
    es: "T > 0 K. Z > 1 para sistemas con microestados accesibles.",
    en: "T > 0 K. Z > 1 for systems with accessible microstates.",
  },
  title: {
    es: "Energía libre de Helmholtz frente a temperatura",
    en: "Helmholtz free energy versus temperature",
  },
  formulaCaption: {
    es: " Función de partición con dos niveles: Z = 1 + e^{-\\Delta\\varepsilon/k_B T}",
    en: " Partition function with two levels: Z = 1 + e^{-\\Delta\\varepsilon/k_B T}",
  },
  xAxis: { es: "Temperatura T (K)", en: "Temperature T (K)" },
  yAxis: { es: "Energía libre F (J)", en: "Free energy F (J)" },
  curveName: { es: "F(T)", en: "F(T)" },
  pointUnit: "J",
  pointPrecision: 24,
  xPrecision: 0,
  yPrecision: 24,
  schema: [
    { key: "T0", aliases: ["T0", "temperatura", "T"], default: 300, min: 10, max: 2000, labelLatex: "T_0", label_es: "T", label_en: "T", width: 74, precision: 0 },
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
      const F = -kB * T * Math.log(Z);
      out.push({ x: T, y: F });
    }
    return out;
  },
  buildPoint: ({ T0, deltaE }) => {
    const Z = 1 + Math.exp(-deltaE / (kB * T0));
    const F = -kB * T0 * Math.log(Z);
    return { x: T0, y: F };
  },
};

const ConexionConMagnitudesTermodinamicasGraphsCoord = createTermoCoordGraph(config);
export default ConexionConMagnitudesTermodinamicasGraphsCoord;
