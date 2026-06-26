import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraph(
const uiLang = "es";
const tt = (es, en, lang = uiLang) => (lang === "en" ? en : es);

export const graphContract = {
  type: "Coord",
  title: {
    es: "Sistema cerrado: balance de energia interna",
    en: "Closed system: internal-energy balance",
  },
  graph_identity: {
    graph_type: "Coord",
    pregunta_principal: {
      es: "Como cambia la energia interna de un sistema cerrado cuando intercambia calor y trabajo con su entorno a traves de una frontera impermeable a la materia?",
      en: "How does the internal energy of a closed system change when it exchanges heat and work with its surroundings through a boundary impermeable to matter?",
    },
    keywords: [
      "energia",
      "interna",
      "sistema",
      "cerrado",
      "calor",
      "trabajo",
      "entorno",
      "frontera",
      "materia",
      "energy",
      "internal",
      "closed",
      "heat",
      "work",
      "surroundings",
      "boundary",
      "matter",
    ],
    magnitud_estrella: "DeltaU",
    variable_control: "Q",
    target_interpretable: true,
  },
  interpretation_binding: {
    paramsIn: ["Q", "W"],
    stateOut: ["DeltaU", "U"],
  },
  equation: "DeltaU = Q + W",
  axes: { x: "calor Q", y: "DeltaU" },
};

const fmt = (value, digits = 1, lang = "es") => {
  if (!Number.isFinite(value)) return "-";
  const text = value.toFixed(digits);
  return lang === "en" ? text : text.replace(".", ",");
};

const SistemaCerradoGraphsCoord = createCoordGraphPage({
  displayName: "SistemaCerradoGraphsCoord",
  title: {
    es: "Sistema cerrado: DeltaU = Q + W",
    en: "Closed system: DeltaU = Q + W",
  },
  defaultParams: {
    W: 250,
    qMin: -800,
    qMax: 800,
    U0: 1200,
  },
  controls: [
    { id: "W", label: { es: "Trabajo recibido W (J)", en: "Work received W (J)" }, min: -1000, max: 1000, step: 50 },
    { id: "qMin", label: { es: "Q minimo (J)", en: "Minimum Q (J)" }, min: -2000, max: 0, step: 100 },
    { id: "qMax", label: { es: "Q maximo (J)", en: "Maximum Q (J)" }, min: 0, max: 2000, step: 100 },
    { id: "U0", label: { es: "U inicial (J)", en: "Initial U (J)" }, min: 0, max: 5000, step: 100 },
  ],
  compute: (pNum) => {
    const W = Number.isFinite(pNum.W) ? pNum.W : 250;
    const rawMin = Number.isFinite(pNum.qMin) ? pNum.qMin : -800;
    const rawMax = Number.isFinite(pNum.qMax) ? pNum.qMax : 800;
    const qMin = Math.min(rawMin, rawMax - 100);
    const qMax = Math.max(rawMax, rawMin + 100);
    const U0 = Number.isFinite(pNum.U0) ? pNum.U0 : 1200;
    const data = Array.from({ length: 41 }, (_, index) => {
      const Q = qMin + (index / 40) * (qMax - qMin);
      const DeltaU = Q + W;
      return { x: Q, Q, W, DeltaU, U: U0 + DeltaU };
    });
    const sampleQ = Math.max(qMin, Math.min(qMax, 400));
    const sampleDeltaU = sampleQ + W;

    return {
      data,
      extra: {
        interpretationTarget: "DeltaU",
        interpretationValue: sampleDeltaU,
        graphState: {
          Q: sampleQ,
          W,
          DeltaU: sampleDeltaU,
          U: U0 + sampleDeltaU,
        },
      },
    };
  },
  render: ({ data, pNum, lang = "es", linked, loadFromCalculator }) => {
    const W = Number.isFinite(pNum.W) ? pNum.W : 250;
    const U0 = Number.isFinite(pNum.U0) ? pNum.U0 : 1200;
    const qValues = data.map((d) => d.Q);
    const duValues = data.map((d) => d.DeltaU);
    const qMin = Math.min(...qValues);
    const qMax = Math.max(...qValues);
    const duMin = Math.min(...duValues, 0);
    const duMax = Math.max(...duValues, 0);
    const xScale = (q) => 70 + ((q - qMin) / Math.max(qMax - qMin, 1)) * 420;
    const yScale = (du) => 310 - ((du - duMin) / Math.max(duMax - duMin, 1)) * 220;
    const points = data.map((d) => `${xScale(d.Q)},${yScale(d.DeltaU)}`).join(" ");
    const zeroY = yScale(0);
    const zeroQX = qMin <= 0 && qMax >= 0 ? xScale(0) : 70;
    const balanceQ = Math.max(qMin, Math.min(qMax, -W));
    const balanceX = xScale(balanceQ);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 12 }}>
        <div className="v2-card-title">
          {tt("Sistema cerrado: calor y trabajo cambian la energia interna", "Closed system: heat and work change internal energy", lang)}
        </div>
        <svg viewBox="0 0 560 390" role="img" aria-label="Sistema cerrado balance energia interna">
          <rect x="0" y="0" width="560" height="390" rx="12" fill="#f8fafc" />
          <text x="280" y="34" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="800">
            {tt("Balance energetico de un sistema cerrado", "Energy balance of a closed system", lang)}
          </text>
          <line x1="70" y1={zeroY} x2="500" y2={zeroY} stroke="#94a3b8" strokeWidth="1.5" />
          <line x1={zeroQX} y1="70" x2={zeroQX} y2="320" stroke="#94a3b8" strokeWidth="1.5" />
          <polyline points={points} fill="none" stroke="#2563eb" strokeWidth="4" />
          <line x1={balanceX} y1="70" x2={balanceX} y2="320" stroke="#f97316" strokeWidth="2" strokeDasharray="7,5" />
          <circle cx={balanceX} cy={yScale(0)} r="5" fill="#f97316" />
          <text x="78" y="64" fill="#0f172a" fontSize="13" fontWeight="700">DeltaU (J)</text>
          <text x="420" y={Math.min(350, zeroY + 28)} fill="#0f172a" fontSize="13" fontWeight="700">Q (J)</text>
          <text x="110" y="356" fill="#2563eb" fontSize="14" fontWeight="800">
            DeltaU = Q + W
          </text>
          <text x="300" y="78" fill="#f97316" fontSize="13" fontWeight="800">
            {tt("DeltaU = 0 cuando Q = -W", "DeltaU = 0 when Q = -W", lang)}
          </text>
          <rect x="82" y="92" width="226" height="88" rx="10" fill="#e0f2fe" />
          <text x="98" y="118" fill="#0f172a" fontSize="13" fontWeight="700">
            {tt("Frontera cerrada a materia", "Boundary closed to matter", lang)}
          </text>
          <text x="98" y="142" fill="#334155" fontSize="12">
            {tt("Entran/salen Q y W; no cruza masa.", "Q and W cross; mass does not.", lang)}
          </text>
          <text x="98" y="164" fill="#334155" fontSize="12">
            W = {fmt(W, 0, lang)} J; U0 = {fmt(U0, 0, lang)} J
          </text>
        </svg>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          {tt("Modo", "Mode", lang)}: <strong>{linked ? "calculator" : "experiment"}</strong>
          {" · "}
          {tt("lectura clave", "key reading", lang)}: <strong>{tt("la pendiente es 1 y el intercepto es W", "slope is 1 and intercept is W", lang)}</strong>
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

SistemaCerradoGraphsCoord.graph_identity = graphContract.graph_identity;
SistemaCerradoGraphsCoord.pregunta_principal = graphContract.graph_identity.pregunta_principal;
SistemaCerradoGraphsCoord.magnitud_estrella = graphContract.graph_identity.magnitud_estrella;

export default SistemaCerradoGraphsCoord;
