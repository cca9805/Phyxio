// Coord contract (delegated to createTermoCoordGraph, which calls createCoordGraph() internally):
// View reads props.params ?? props.sharedParams ?? {}
// const uiLang = lang === "en" ? "en" : "es"
// const tt = (es, en) => uiLang === "en" ? en : es; renders XAxis YAxis from recharts
// pregunta_principal: { es: "Energía cinética media de una molécula de gas ideal frente a temperatura", en: "Mean kinetic energy of an ideal gas molecule versus temperature" }
import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "GasIdealMicroscopicoGraphsCoord",
  question: {
    es: "Energía cinética media de una molécula de gas ideal frente a temperatura",
    en: "Mean kinetic energy of an ideal gas molecule versus temperature",
  },
  controlVariable: "temperatura",
  starMagnitude: "energia_cinetica_media",
  formulaText: "⟨E_k⟩ = (3/2) k_B T",
  formulaLatex: "\\langle E_k \\rangle = \\frac{3}{2} k_B T",
  slopeLatex: "\\frac{d\\langle E_k \\rangle}{dT} = \\frac{3}{2} k_B",
  slopeMeaning: {
    es: "La pendiente es constante e igual a (3/2)k_B: cada grado Kelvin añade la misma energía térmica.",
    en: "The slope is constant and equal to (3/2)k_B: each Kelvin adds the same thermal energy.",
  },
  relation: {
    es: "La energía cinética media es directamente proporcional a la temperatura absoluta.",
    en: "Mean kinetic energy is directly proportional to absolute temperature.",
  },
  physicalReading: {
    es: "Una recta por el origen indica que la temperatura es la medida de la energía cinética media.",
    en: "A line through the origin indicates that temperature measures mean kinetic energy.",
  },
  domainMeaning: {
    es: "T > 0 K. Válido para gases diluidos en equilibrio térmico.",
    en: "T > 0 K. Valid for dilute gases in thermal equilibrium.",
  },
  title: {
    es: "Energía cinética media frente a temperatura",
    en: "Mean kinetic energy versus temperature",
  },
  formulaCaption: {
    es: " Gas ideal monoatómico",
    en: " Monatomic ideal gas",
  },
  xAxis: { es: "Temperatura T (K)", en: "Temperature T (K)" },
  yAxis: { es: "⟨E_k⟩ (10⁻²¹ J)", en: "⟨E_k⟩ (10⁻²¹ J)" },
  curveName: { es: "⟨E_k⟩(T)", en: "⟨E_k⟩(T)" },
  pointUnit: "10⁻²¹ J",
  pointPrecision: 3,
  xPrecision: 0,
  yPrecision: 3,
  schema: [
    { key: "T0", aliases: ["T0", "temperatura", "T"], default: 300, min: 10, max: 2000, labelLatex: "T", label_es: "T", label_en: "T", width: 74, precision: 0 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.T0 = clamp(toNum(ep.T0, 300), 10, 2000); },
  ],
  seriesArgs: ["T0"],
  buildSeries: ({ T0 }) => { const out = []; for (let i = 0; i <= 40; i++) { const T = 10 + (i / 40) * 1990; out.push({ x: T, y: 1.5 * kB * T * 1e21 }); } return out; },
  buildPoint: ({ T0 }) => ({ x: T0, y: 1.5 * kB * T0 * 1e21 }),
};

const GasIdealMicroscopicoGraphsCoord = createTermoCoordGraph(config);
export default GasIdealMicroscopicoGraphsCoord;
