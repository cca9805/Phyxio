import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraph(
const uiLang = "es";
const tt = (es, en, lang = uiLang) => (lang === "en" ? en : es);

export const graphContract = {
  type: "Coord",
  title: {
    es: "Energia interna y entropia en sistema aislado",
    en: "Internal energy and entropy in an isolated system",
  },
  graph_identity: {
    graph_type: "Coord",
    pregunta_principal: {
      es: "Que sucede con la energia interna y la entropia de un sistema cuando su frontera impide todo intercambio con el entorno?",
      en: "What happens to the internal energy and entropy of a system when its boundary prevents all exchange with the surroundings?",
    },
    keywords: ["energia", "entropia", "aislado", "frontera", "equilibrio", "irreversibilidad", "energy", "entropy", "isolated", "boundary", "equilibrium"],
    magnitud_estrella: "DeltaU",
    variable_control: "DeltaU",
    target_interpretable: true,
  },
  interpretation_binding: {
    paramsIn: ["DeltaU", "S_ais", "Q_ais", "W_ais"],
    stateOut: ["U", "S_ais"],
  },
  equation: "DeltaU = 0; S_ais >= 0",
  axes: { x: "proceso", y: "magnitud" },
};

const fmt = (value, digits = 1, lang = "es") => {
  if (!Number.isFinite(value)) return "-";
  const text = value.toFixed(digits);
  return lang === "en" ? text : text.replace(".", ",");
};

const SistemaAisladoGraphsCoord = createCoordGraphPage({
  displayName: "SistemaAisladoGraphsCoord",
  title: {
    es: "Sistema aislado: energia interna y entropia",
    en: "Isolated system: internal energy and entropy",
  },
  defaultParams: {
    U0: 5000,
    DS: 120,
    nPasos: 10,
  },
  controls: [
    { id: "U0", label: { es: "U inicial (J)", en: "Initial U (J)" }, min: 100, max: 20000, step: 100 },
    { id: "DS", label: { es: "Delta S por paso (J/K)", en: "Delta S per step (J/K)" }, min: 0, max: 500, step: 10 },
    { id: "nPasos", label: { es: "Numero de pasos", en: "Number of steps" }, min: 2, max: 20, step: 1 },
  ],
  compute: (pNum) => {
    const U0 = Number.isFinite(pNum.U0) ? pNum.U0 : 5000;
    const DS = Number.isFinite(pNum.DS) ? pNum.DS : 120;
    const nPasos = Number.isFinite(pNum.nPasos) ? Math.round(pNum.nPasos) : 10;
    const data = Array.from({ length: nPasos + 1 }, (_, i) => ({
      x: i,
      U: U0,
      S: i * DS,
    }));

    return {
      data,
      extra: {
        interpretationTarget: "DeltaU",
        interpretationValue: 0,
        graphState: {
          DeltaU: 0,
          U: U0,
          S_ais: nPasos * DS,
          Q_ais: 0,
          W_ais: 0,
        },
      },
    };
  },
  render: ({ data, pNum, lang = "es", linked, loadFromCalculator }) => {
    const U0 = Number.isFinite(pNum.U0) ? pNum.U0 : 5000;
    const DS = Number.isFinite(pNum.DS) ? pNum.DS : 120;
    const nPasos = Number.isFinite(pNum.nPasos) ? Math.round(pNum.nPasos) : 10;
    const maxS = nPasos * DS;
    const pointsU = data.map((d, i) => `${70 + i * (440 / nPasos)},${150}`).join(" ");
    const pointsS = data.map((d, i) => `${70 + i * (440 / nPasos)},${340 - (d.S / Math.max(maxS, 1)) * 80}`).join(" ");

    return (
      <div className="v2-card" style={{ display: "grid", gap: 12 }}>
        <div className="v2-card-title">
          {tt("Sistema aislado: frontera que prohíbe todo intercambio", "Isolated system: boundary forbidding all exchange", lang)}
        </div>
        <svg viewBox="0 0 560 400" role="img" aria-label="Sistema aislado energia entropia">
          <rect x="0" y="0" width="560" height="400" rx="12" fill="#f8fafc" />
          <text x="280" y="30" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="800">
            {tt("Energia interna y entropia del sistema aislado", "Internal energy and entropy of isolated system", lang)}
          </text>
          <line x1="70" y1="150" x2="520" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="70" y1="90" x2="70" y2="210" stroke="#94a3b8" strokeWidth="1.5" />
          <polyline points={pointsU} fill="none" stroke="#0ea5e9" strokeWidth="4" strokeDasharray="8,4" />
          <text x="82" y="86" fill="#0f172a" fontSize="12" fontWeight="700">U (J)</text>
          <text x="380" y="108" fill="#0ea5e9" fontSize="13" fontWeight="800">
            U = {fmt(U0, 0, lang)} J {tt("(constante)", "(constant)", lang)}
          </text>
          <line x1="70" y1="340" x2="520" y2="340" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="70" y1="260" x2="70" y2="380" stroke="#94a3b8" strokeWidth="1.5" />
          <polyline points={pointsS} fill="none" stroke="#f97316" strokeWidth="4" />
          <text x="82" y="256" fill="#0f172a" fontSize="12" fontWeight="700">S (J/K)</text>
          <text x="360" y="272" fill="#f97316" fontSize="13" fontWeight="800">
            S = {fmt(maxS, 0, lang)} J/K {tt("(maxima)", "(maximum)", lang)}
          </text>
          <rect x="76" y="176" width="394" height="30" rx="8" fill="#dcfce7" />
          <text x="92" y="196" fill="#166534" fontSize="12" fontWeight="600">
            {tt("DeltaU = 0 (primer principio); DeltaS >= 0 (segundo principio)", "DeltaU = 0 (first law); DeltaS >= 0 (second law)", lang)}
          </text>
        </svg>
        <div style={{ fontSize: 13, opacity: 0.9 }}>
          {tt("Modo", "Mode", lang)}: <strong>{linked ? "calculator" : "experiment"}</strong>
          {" · "}
          {tt("pasos internos", "internal steps", lang)}: <strong>{nPasos}</strong>
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

SistemaAisladoGraphsCoord.graph_identity = graphContract.graph_identity;
SistemaAisladoGraphsCoord.pregunta_principal = graphContract.graph_identity.pregunta_principal;
SistemaAisladoGraphsCoord.magnitud_estrella = graphContract.graph_identity.magnitud_estrella;

export default SistemaAisladoGraphsCoord;
