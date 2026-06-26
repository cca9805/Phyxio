// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Cambio de entropía clásica frente a temperatura", en: "Classical entropy change versus temperature" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const config = {
  componentName: "RelacionConEntropiaClasicaGraphsCoord",
  question: {
    es: "Cambio de entropía clásica frente a temperatura",
    en: "Classical entropy change versus temperature",
  },
  controlVariable: "temperatura",
  starMagnitude: "delta_entropia",
  formulaText: "Delta S = Q_rev / T",
  formulaLatex: "\\Delta S = \\frac{Q_{\\text{rev}}}{T}",
  slopeLatex: "\\frac{d(\\Delta S)}{dT} = -\\frac{Q_{\\text{rev}}}{T^2}",
  slopeMeaning: {
    es: "A menor temperatura, el mismo calor reversible produce más entropía.",
    en: "At lower temperature, the same reversible heat produces more entropy.",
  },
  relation: {
    es: "La entropía clásica medida por calor reversible coincide con el cambio de entropía estadística.",
    en: "Classical entropy measured by reversible heat coincides with the change in statistical entropy.",
  },
  physicalReading: {
    es: "La curva hiperbólica muestra que el calor reversible añade menos entropía cuando el sistema ya está caliente.",
    en: "The hyperbolic curve shows that reversible heat adds less entropy when the system is already hot.",
  },
  domainMeaning: {
    es: "T > 0 K. Q_rev constante.",
    en: "T > 0 K. Q_rev constant.",
  },
  title: {
    es: "Cambio de entropía clásica frente a temperatura",
    en: "Classical entropy change versus temperature",
  },
  formulaCaption: {
    es: " Calor reversible constante",
    en: " Constant reversible heat",
  },
  xAxis: { es: "Temperatura T (K)", en: "Temperature T (K)" },
  yAxis: { es: "ΔS (J/K)", en: "ΔS (J/K)" },
  curveName: { es: "ΔS(T)", en: "ΔS(T)" },
  pointUnit: "J/K",
  pointPrecision: 24,
  xPrecision: 0,
  yPrecision: 24,
  schema: [
    { key: "T0", aliases: ["T0", "temperatura", "T"], default: 300, min: 10, max: 2000, labelLatex: "T", label_es: "T", label_en: "T", width: 74, precision: 0 },
    { key: "Q", aliases: ["Q", "calor"], default: 100, min: 1, max: 10000, labelLatex: "Q_{\\text{rev}}", label_es: "Q_rev", label_en: "Q_rev", width: 90, precision: 0 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.T0 = clamp(toNum(ep.T0, 300), 10, 2000); },
    ({ clamp, toNum, ep }, out) => { out.Q = clamp(toNum(ep.Q, 100), 1, 10000); },
  ],
  seriesArgs: ["T0", "Q"],
  buildSeries: ({ T0, Q }) => {
    const out = [];
    for (let i = 0; i <= 40; i++) {
      const T = 10 + (i / 40) * 1990;
      const dS = Q / T;
      out.push({ x: T, y: dS });
    }
    return out;
  },
  buildPoint: ({ T0, Q }) => {
    const dS = Q / T0;
    return { x: T0, y: dS };
  },
};

const RelacionConEntropiaClasicaGraphsCoord = createTermoCoordGraph(config);
export default RelacionConEntropiaClasicaGraphsCoord;
