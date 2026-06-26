import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraph(
const uiLang = "es";
const tt = (es, en, lang = uiLang) => (lang === "en" ? en : es);

export const graphContract = {
  type: "Coord",
  title: {
    es: "Variables intensivas: invariancia al escalar",
    en: "Intensive variables: invariance under scaling",
  },
  graph_identity: {
    graph_type: "Coord",
    pregunta_principal: {
      es: "Como reconocemos que una variable termodinamica permanece igual al escalar el sistema?",
      en: "How do we recognize that a thermodynamic variable remains unchanged when the system is scaled?",
    },
    keywords: [
      "variable",
      "termodinamica",
      "permanece",
      "igual",
      "escalar",
      "sistema",
      "intensiva",
      "temperatura",
      "presion",
      "densidad",
      "thermodynamic",
      "variable",
      "unchanged",
      "scaled",
      "system",
      "intensive",
      "temperature",
      "pressure",
      "density",
    ],
    magnitud_estrella: "X_int",
    variable_control: "lambda_escala",
    target_interpretable: true,
  },
  interpretation_binding: {
    paramsIn: ["lambda_escala", "X_int"],
    stateOut: ["X_int", "T", "P", "rho"],
  },
  equation: "X_int(lambda_escala sistema) = X_int(sistema)",
  axes: { x: "lambda_escala", y: "X_int" },
};

const fmt = (value, digits = 1, lang = "es") => {
  if (!Number.isFinite(value)) return "-";
  const text = value.toFixed(digits);
  return lang === "en" ? text : text.replace(".", ",");
};

const IntensivasGraphsCoord = createCoordGraphPage({
  displayName: "IntensivasGraphsCoord",
  title: {
    es: "Intensivas: escalar no cambia X_int",
    en: "Intensive variables: scaling does not change X_int",
  },
  defaultParams: {
    Xint: 300,
    lambdaMax: 5,
    XextBase: 100,
  },
  controls: [
    { id: "Xint", label: { es: "X_int / T de referencia", en: "Reference X_int / T" }, min: 1, max: 1000, step: 10 },
    { id: "lambdaMax", label: { es: "factor maximo", en: "maximum factor" }, min: 1, max: 10, step: 1 },
    { id: "XextBase", label: { es: "extensiva base", en: "base extensive" }, min: 10, max: 1000, step: 10 },
  ],
  compute: (pNum) => {
    const Xint = Number.isFinite(pNum.Xint) ? pNum.Xint : 300;
    const lambdaMax = Number.isFinite(pNum.lambdaMax) ? Math.max(1, Math.round(pNum.lambdaMax)) : 5;
    const XextBase = Number.isFinite(pNum.XextBase) ? pNum.XextBase : 100;
    const data = Array.from({ length: lambdaMax * 10 + 1 }, (_, index) => {
      const lambda = 1 + (index / (lambdaMax * 10)) * (lambdaMax - 1);
      return {
        x: lambda,
        lambda_escala: lambda,
        X_int: Xint,
        T: Xint,
        P: Xint,
        rho: Xint,
        X_ext_ref: lambda * XextBase,
      };
    });

    return {
      data,
      extra: {
        interpretationTarget: "X_int",
        interpretationValue: Xint,
        graphState: {
          lambda_escala: Math.min(2, lambdaMax),
          X_int: Xint,
          T: Xint,
          P: Xint,
          rho: Xint,
        },
      },
    };
  },
  render: ({ data, pNum, lang = "es", linked, loadFromCalculator }) => {
    const Xint = Number.isFinite(pNum.Xint) ? pNum.Xint : 300;
    const lambdaMax = Number.isFinite(pNum.lambdaMax) ? Math.max(1, Math.round(pNum.lambdaMax)) : 5;
    const XextBase = Number.isFinite(pNum.XextBase) ? pNum.XextBase : 100;
    const maxY = Math.max(Xint * 1.2, lambdaMax * XextBase, 1);
    const xScale = (lambda) => 70 + ((lambda - 1) / Math.max(lambdaMax - 1, 1)) * 420;
    const yScale = (value) => 310 - (value / maxY) * 220;
    const pointsInt = data.map((d) => `${xScale(d.lambda_escala)},${yScale(d.X_int)}`).join(" ");
    const pointsExt = data.map((d) => `${xScale(d.lambda_escala)},${yScale(d.X_ext_ref)}`).join(" ");

    return (
      <div className="v2-card" style={{ display: "grid", gap: 12 }}>
        <div className="v2-card-title">
          {tt("Test de intensividad: escalar el sistema no cambia el estado local", "Intensivity test: scaling the system does not change local state", lang)}
        </div>
        <svg viewBox="0 0 560 390" role="img" aria-label="Variables intensivas frente a factor de escala">
          <rect x="0" y="0" width="560" height="390" rx="12" fill="#f8fafc" />
          <text x="280" y="34" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="800">
            {tt("X_int permanece constante al aumentar lambda", "X_int stays constant as lambda grows", lang)}
          </text>
          <line x1="70" y1="310" x2="500" y2="310" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="70" y1="70" x2="70" y2="320" stroke="#94a3b8" strokeWidth="1.5" />
          <polyline points={pointsExt} fill="none" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8,5" />
          <polyline points={pointsInt} fill="none" stroke="#f97316" strokeWidth="4" />
          <text x="82" y="64" fill="#0f172a" fontSize="13" fontWeight="700">X</text>
          <text x="396" y="334" fill="#0f172a" fontSize="13" fontWeight="700">lambda_escala</text>
          <text x="98" y={Math.max(88, yScale(Xint) - 12)} fill="#f97316" fontSize="14" fontWeight="800">
            X_int(lambda) = X_int
          </text>
          <text x="306" y={Math.max(92, yScale(lambdaMax * XextBase) + 18)} fill="#64748b" fontSize="13" fontWeight="700">
            {tt("referencia extensiva: si escala", "extensive reference: scales", lang)}
          </text>
          <rect x="88" y="222" width="334" height="58" rx="10" fill="#ffedd5" />
          <text x="104" y="246" fill="#0f172a" fontSize="13" fontWeight="700">
            {tt("Si juntas 2 copias iguales:", "If you join 2 equal copies:", lang)}
          </text>
          <text x="104" y="266" fill="#334155" fontSize="12">
            X_int = {fmt(Xint, 0, lang)}; T/P/rho {tt("no se duplican", "do not double", lang)}
          </text>
        </svg>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          {tt("Modo", "Mode", lang)}: <strong>{linked ? "calculator" : "experiment"}</strong>
          {" · "}
          {tt("criterio", "criterion", lang)}: <strong>{tt("la curva horizontal identifica una variable intensiva", "the horizontal curve identifies an intensive variable", lang)}</strong>
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

IntensivasGraphsCoord.graph_identity = graphContract.graph_identity;
IntensivasGraphsCoord.pregunta_principal = graphContract.graph_identity.pregunta_principal;
IntensivasGraphsCoord.magnitud_estrella = graphContract.graph_identity.magnitud_estrella;

export default IntensivasGraphsCoord;
