import { createTermoCoordGraph } from "./TermoCoordGraphBase.jsx";

const kB = 1.38e-23;

const config = {
  componentName: "EquilibrioEstadisticoGraphsCoord",
  question: {
    es: "Equilibrio estadístico: población de dos niveles frente a temperatura",
    en: "Statistical equilibrium: two-level population versus temperature",
  },
  controlVariable: "temperatura",
  starMagnitude: "probabilidad_estado",
  formulaText: "p_i = e^{-E_i/k_B T} / \\sum_j e^{-E_j/k_B T}",
  formulaLatex: "p_i = \\frac{e^{-E_i/k_B T}}{\\sum_j e^{-E_j/k_B T}}",
  slopeLatex: "\\frac{dp_i}{dT} = \\frac{E_i - \\langle E \\rangle}{k_B T^2} p_i",
  slopeMeaning: {
    es: "A baja temperatura la población del nivel superior es casi nula; crece hacia 1/2 al aumentar T.",
    en: "At low temperature the upper-level population is almost zero; it grows toward 1/2 as T increases.",
  },
  relation: {
    es: "La fracción de sistemas en el nivel superior depende del factor de Boltzmann relativo.",
    en: "The fraction of systems in the upper level depends on the relative Boltzmann factor.",
  },
  physicalReading: {
    es: "El equilibrio térmico se alcanza cuando la población se ajusta a la temperatura del baño.",
    en: "Thermal equilibrium is reached when the population adjusts to the bath temperature.",
  },
  domainMeaning: {
    es: "T > 0 K. \\Delta\\varepsilon > 0.",
    en: "T > 0 K. \\Delta\\varepsilon > 0.",
  },
  title: {
    es: "Probabilidad de estado en equilibrio térmico",
    en: "State probability at thermal equilibrium",
  },
  formulaCaption: {
    es: " Equilibrio estadístico de dos niveles (E_0 = 0, E_1 = \\Delta\\varepsilon)",
    en: " Two-level statistical equilibrium (E_0 = 0, E_1 = \\Delta\\varepsilon)",
  },
  xAxis: { es: "Temperatura T (K)", en: "Temperature T (K)" },
  yAxis: { es: "p_i", en: "p_i" },
  curveName: { es: "p_i(T)", en: "p_i(T)" },
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
      const x = Math.exp(-deltaE / (kB * T));
      const p1 = x / (1 + x);
      out.push({ x: T, y: p1 });
    }
    return out;
  },
  buildPoint: ({ T0, deltaE }) => {
    const x = Math.exp(-deltaE / (kB * T0));
    const p1 = x / (1 + x);
    return { x: T0, y: p1 };
  },
};

const EquilibrioEstadisticoGraphsCoord = createTermoCoordGraph(config);
export default EquilibrioEstadisticoGraphsCoord;
