import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraph(
const uiLang = "es";
const tt = (es, en, lang = uiLang) => (lang === "en" ? en : es);

export const graphContract = {
  type: "Coord",
  title: {
    es: "Variables extensivas: escalado con el sistema",
    en: "Extensive variables: scaling with system size",
  },
  graph_identity: {
    graph_type: "Coord",
    pregunta_principal: {
      es: "Como reconocemos que una magnitud termodinamica aumenta al juntar copias del sistema?",
      en: "How do we recognize that a thermodynamic magnitude increases when copies of the system are joined?",
    },
    keywords: [
      "magnitud",
      "termodinamica",
      "aumenta",
      "juntar",
      "copias",
      "sistema",
      "extensiva",
      "escala",
      "masa",
      "volumen",
      "energia",
      "thermodynamic",
      "magnitude",
      "increases",
      "copies",
      "system",
      "extensive",
      "scaling",
      "mass",
      "volume",
      "energy",
    ],
    magnitud_estrella: "X_ext",
    variable_control: "lambda_escala",
    target_interpretable: true,
  },
  interpretation_binding: {
    paramsIn: ["lambda_escala", "X_base"],
    stateOut: ["X_ext", "m", "V", "U"],
  },
  equation: "X_ext(lambda_escala sistema) = lambda_escala X_ext(sistema)",
  axes: { x: "lambda_escala", y: "X_ext" },
};

const fmt = (value, digits = 1, lang = "es") => {
  if (!Number.isFinite(value)) return "-";
  const text = value.toFixed(digits);
  return lang === "en" ? text : text.replace(".", ",");
};

const ExtensivasGraphsCoord = createCoordGraphPage({
  displayName: "ExtensivasGraphsCoord",
  title: {
    es: "Extensivas: duplicar sistema duplica X",
    en: "Extensive variables: doubling the system doubles X",
  },
  defaultParams: {
    Xbase: 100,
    lambdaMax: 5,
    rho: 2,
  },
  controls: [
    { id: "Xbase", label: { es: "X de una copia", en: "X for one copy" }, min: 10, max: 1000, step: 10 },
    { id: "lambdaMax", label: { es: "numero de copias", en: "number of copies" }, min: 1, max: 10, step: 1 },
    { id: "rho", label: { es: "densidad/intensiva de referencia", en: "reference density/intensive value" }, min: 0.5, max: 10, step: 0.5 },
  ],
  compute: (pNum) => {
    const Xbase = Number.isFinite(pNum.Xbase) ? pNum.Xbase : 100;
    const lambdaMax = Number.isFinite(pNum.lambdaMax) ? Math.max(1, Math.round(pNum.lambdaMax)) : 5;
    const rho = Number.isFinite(pNum.rho) ? pNum.rho : 2;
    const data = Array.from({ length: lambdaMax * 10 + 1 }, (_, index) => {
      const lambda = 1 + (index / (lambdaMax * 10)) * (lambdaMax - 1);
      return {
        x: lambda,
        lambda_escala: lambda,
        X_ext: lambda * Xbase,
        m: lambda * Xbase,
        V: (lambda * Xbase) / rho,
        U: lambda * Xbase,
        rho,
      };
    });
    const lambdaSample = Math.min(2, lambdaMax);
    const Xsample = lambdaSample * Xbase;

    return {
      data,
      extra: {
        interpretationTarget: "X_ext",
        interpretationValue: Xsample,
        graphState: {
          lambda_escala: lambdaSample,
          X_ext: Xsample,
          m: Xsample,
          V: Xsample / rho,
          U: Xsample,
          rho,
        },
      },
    };
  },
  render: ({ data, pNum, lang = "es", linked, loadFromCalculator }) => {
    const Xbase = Number.isFinite(pNum.Xbase) ? pNum.Xbase : 100;
    const lambdaMax = Number.isFinite(pNum.lambdaMax) ? Math.max(1, Math.round(pNum.lambdaMax)) : 5;
    const rho = Number.isFinite(pNum.rho) ? pNum.rho : 2;
    const maxX = Math.max(...data.map((d) => d.X_ext), 1);
    const xScale = (lambda) => 70 + ((lambda - 1) / Math.max(lambdaMax - 1, 1)) * 420;
    const yScale = (value) => 310 - (value / maxX) * 220;
    const points = data.map((d) => `${xScale(d.lambda_escala)},${yScale(d.X_ext)}`).join(" ");
    const lambda2X = xScale(Math.min(2, lambdaMax));
    const lambda2Y = yScale(Math.min(2, lambdaMax) * Xbase);
    const intensiveY = yScale(Xbase);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 12 }}>
        <div className="v2-card-title">
          {tt("Test de extensividad: juntar copias escala la cantidad total", "Extensivity test: joining copies scales the total amount", lang)}
        </div>
        <svg viewBox="0 0 560 390" role="img" aria-label="Variables extensivas frente a factor de escala">
          <rect x="0" y="0" width="560" height="390" rx="12" fill="#f8fafc" />
          <text x="280" y="34" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="800">
            {tt("X extensiva crece con el tamano del sistema", "Extensive X grows with system size", lang)}
          </text>
          <line x1="70" y1="310" x2="500" y2="310" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="70" y1="70" x2="70" y2="320" stroke="#94a3b8" strokeWidth="1.5" />
          <polyline points={points} fill="none" stroke="#2563eb" strokeWidth="4" />
          <line x1="70" y1={intensiveY} x2="500" y2={intensiveY} stroke="#f97316" strokeWidth="3" strokeDasharray="8,5" />
          <circle cx={lambda2X} cy={lambda2Y} r="6" fill="#2563eb" />
          <text x="82" y="64" fill="#0f172a" fontSize="13" fontWeight="700">X_ext</text>
          <text x="396" y="334" fill="#0f172a" fontSize="13" fontWeight="700">lambda_escala</text>
          <text x="102" y="92" fill="#2563eb" fontSize="14" fontWeight="800">
            X_ext = lambda * X_base
          </text>
          <text x="292" y={Math.max(92, intensiveY - 10)} fill="#f97316" fontSize="13" fontWeight="800">
            {tt("intensiva normalizada: constante", "normalized intensive: constant", lang)}
          </text>
          <rect x="88" y="220" width="316" height="58" rx="10" fill="#e0f2fe" />
          <text x="104" y="244" fill="#0f172a" fontSize="13" fontWeight="700">
            {tt("Si juntas 2 copias iguales:", "If you join 2 equal copies:", lang)}
          </text>
          <text x="104" y="264" fill="#334155" fontSize="12">
            X = {fmt(2 * Xbase, 0, lang)}; V = {fmt((2 * Xbase) / rho, 1, lang)}; rho = {fmt(rho, 1, lang)}
          </text>
        </svg>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          {tt("Modo", "Mode", lang)}: <strong>{linked ? "calculator" : "experiment"}</strong>
          {" · "}
          {tt("criterio", "criterion", lang)}: <strong>{tt("duplicar sistema duplica X_ext, pero no rho", "doubling the system doubles X_ext, but not rho", lang)}</strong>
        </div>
        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {tt("Cargar desde calculadora", "Load from calculator", lang)}
          </button>
        ) : null}
      </div>
    );
  },
});

ExtensivasGraphsCoord.graph_identity = graphContract.graph_identity;
ExtensivasGraphsCoord.pregunta_principal = graphContract.graph_identity.pregunta_principal;
ExtensivasGraphsCoord.magnitud_estrella = graphContract.graph_identity.magnitud_estrella;

export default ExtensivasGraphsCoord;
