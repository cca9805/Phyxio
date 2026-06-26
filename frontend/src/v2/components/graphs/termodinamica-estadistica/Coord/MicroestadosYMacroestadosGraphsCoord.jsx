import { createCoordGraph } from "../../graphFactories.jsx";
import createTermoCoordGraph from "./TermoCoordGraphBase.jsx";

const uiLang = "es";
const tt = (es, en) => (uiLang === "en" ? en : es);

const factorial = (n) => {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
};

const config = {
  componentName: "MicroestadosYMacroestadosGraphsCoord",
  question: {
    es: "Multiplicidad de un macroestado frente a configuración",
    en: "Macrostate multiplicity versus configuration",
  },
  controlVariable: "configuracion",
  starMagnitude: "multiplicidad_macroestado",
  formulaText: "Omega(k) = N! / (k! (N-k)!)",
  formulaLatex: "\\Omega(k) = \\frac{N!}{k!(N-k)!}",
  slopeLatex: "\\frac{\\Delta\\Omega}{\\Delta k} = \\Omega(k) \\frac{N-2k}{k(N-k)}",
  slopeMeaning: {
    es: "La multiplicidad es máxima cuando el macroestado está equilibrado.",
    en: "Multiplicity is maximum when the macrostate is balanced.",
  },
  relation: {
    es: "Para N partículas con dos estados, la multiplicidad sigue una distribución binomial.",
    en: "For N particles with two states, multiplicity follows a binomial distribution.",
  },
  physicalReading: {
    es: "El macroestado más probable es k ≈ N/2, con la mayor multiplicidad.",
    en: "The most probable macrostate is k ≈ N/2, with the largest multiplicity.",
  },
  domainMeaning: {
    es: "N ≥ 1, 0 ≤ k ≤ N.",
    en: "N ≥ 1, 0 ≤ k ≤ N.",
  },
  title: {
    es: "Multiplicidad de un macroestado binomial",
    en: "Multiplicity of a binomial macrostate",
  },
  formulaCaption: {
    es: " N partículas con k en un estado",
    en: " N particles with k in one state",
  },
  xAxis: { es: "k (partículas en un estado)", en: "k (particles in one state)" },
  yAxis: { es: "Multiplicidad Ω(k)", en: "Multiplicity Ω(k)" },
  curveName: { es: "Ω(k)", en: "Ω(k)" },
  pointUnit: "",
  pointPrecision: 0,
  xPrecision: 0,
  yPrecision: 0,
  schema: [
    { key: "N", aliases: ["N", "particulas"], default: 20, min: 2, max: 100, labelLatex: "N", label_es: "N", label_en: "N", width: 74, precision: 0 },
    { key: "k0", aliases: ["k0", "k"], default: 10, min: 0, max: 100, labelLatex: "k", label_es: "k", label_en: "k", width: 74, precision: 0 },
    { key: "showCurve", aliases: ["mostrarCurva"], default: true },
    { key: "showPoint", aliases: ["mostrarPunto"], default: true },
  ],
  paramClamps: [
    ({ clamp, toNum, ep }, out) => { out.N = Math.floor(clamp(toNum(ep.N, 20), 2, 100)); },
    ({ clamp, toNum, ep }, out) => { out.k0 = Math.floor(clamp(toNum(ep.k0, 10), 0, out.N)); },
  ],
  seriesArgs: ["N", "k0"],
  buildSeries: ({ N, k0 }) => {
    const out = [];
    for (let k = 0; k <= N; k++) {
      const W = factorial(N) / (factorial(k) * factorial(N - k));
      out.push({ x: k, y: W });
    }
    return out;
  },
  buildPoint: ({ N, k0 }) => {
    const W = factorial(N) / (factorial(k0) * factorial(N - k0));
    return { x: k0, y: W };
  },
};

const graph_identity = {
  pregunta_principal: {
    es: "Multiplicidad de un macroestado frente a configuración",
    en: "Macrostate multiplicity versus configuration",
  },
  variable_control: "configuracion",
  magnitud_estrella: "multiplicidad_macroestado",
  formula: "Omega(k) = N! / (k! (N-k)!)",
  target_interpretable: true,
};

const axes = {
  x: { key: "x", label: config.xAxis },
  y: { key: "y", label: config.yAxis },
};

const formula = {
  latex: config.formulaLatex,
  slopeLatex: config.slopeLatex,
  slopeMeaning: config.slopeMeaning,
};

const profile = {
  graph_identity,
  axes,
  formula,
  relation: config.relation,
  physicalReading: config.physicalReading,
  domainMeaning: config.domainMeaning,
};

const MicroestadosYMacroestadosGraphsCoordView = createTermoCoordGraph(config);
const MicroestadosYMacroestadosGraphsCoord = createCoordGraph({
  Component: MicroestadosYMacroestadosGraphsCoordView,
  displayName: "MicroestadosYMacroestadosGraphsCoord",
});

MicroestadosYMacroestadosGraphsCoord.graph_identity = graph_identity;
MicroestadosYMacroestadosGraphsCoord.graphIdentity = graph_identity;
MicroestadosYMacroestadosGraphsCoord.axes = axes;
MicroestadosYMacroestadosGraphsCoord.formula = formula;
MicroestadosYMacroestadosGraphsCoord.profile = profile;
MicroestadosYMacroestadosGraphsCoord.pregunta_principal = graph_identity.pregunta_principal;
MicroestadosYMacroestadosGraphsCoord.magnitud_estrella = graph_identity.magnitud_estrella;

export default MicroestadosYMacroestadosGraphsCoord;
