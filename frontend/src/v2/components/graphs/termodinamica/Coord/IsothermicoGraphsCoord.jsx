import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage

const uiLang = "es";
const tt = (es, en, lang = uiLang) => (lang === "en" ? en : es);

const R = 8.314;

export const graphContract = {
  type: "Coord",
  graph_identity: {
    graph_type: "Coord",
    pregunta_principal: {
      es: "¿Como cambia la presion de un gas cuando su volumen varia manteniendo constante la temperatura?",
      en: "How does the pressure of a gas change when its volume varies while keeping temperature constant?",
    },
    keywords: ["presion", "volumen", "isotermico", "hiperbola", "boyle", "trabajo", "pressure", "volume", "isothermal", "hyperbola", "work"],
    magnitud_estrella: "p2",
    variable_control: "V",
    target_interpretable: true,
  },
  interpretation_binding: {
    paramsIn: ["p1", "V1", "V2", "T", "n"],
    stateOut: ["p2", "W", "Q_iso"],
  },
  equation: "p2 = p1 * V1 / V2",
  axes: { x: "V (m³)", y: "p (Pa)" },
};

const fmt = (value, digits = 2, lang = "es") => {
  if (!Number.isFinite(value)) return "-";
  const text = value.toFixed(digits);
  return lang === "en" ? text : text.replace(".", ",");
};

const IsothermicoGraphsCoord = createCoordGraphPage({
  displayName: "IsothermicoGraphsCoord",
  title: {
    es: "Diagrama p–V del proceso isotérmico",
    en: "Isothermal process p–V diagram",
  },
  defaultParams: {
    n: 1,
    p1: 200000,
    T: 300,
    V2ratio: 2,
  },
  controls: [
    { id: "n",       label: { es: "n (mol)",  en: "n (mol)" },  min: 0.1, max: 5,       step: 0.1   },
    { id: "p1",      label: { es: "p₁ (Pa)",  en: "p₁ (Pa)" },  min: 10000, max: 1000000, step: 10000 },
    { id: "T",       label: { es: "T (K)",     en: "T (K)" },    min: 100, max: 1000,    step: 10    },
    { id: "V2ratio", label: { es: "V₂/V₁",    en: "V₂/V₁" },    min: 0.2, max: 5,       step: 0.1   },
  ],
  compute: (pNum) => {
    const n   = Number.isFinite(pNum.n)       ? pNum.n       : 1;
    const p1  = Number.isFinite(pNum.p1)      ? pNum.p1      : 200000;
    const T   = Number.isFinite(pNum.T)       ? pNum.T       : 300;
    const V2r = Number.isFinite(pNum.V2ratio) ? pNum.V2ratio : 2;

    const V1    = (n * R * T) / p1;
    const V2    = V1 * V2r;
    const p2    = (n * R * T) / V2;
    const W     = n * R * T * Math.log(V2 / V1);
    const Q_iso = W;

    const POINTS = 60;
    const data = [];
    for (let i = 0; i <= POINTS; i++) {
      const V = V1 + (V2 - V1) * (i / POINTS);
      const p = (n * R * T) / V;
      data.push({ V, p });
    }

    return {
      data,
      extra: {
        interpretationTarget: "p2",
        interpretationValue: p2,
        graphState: { n, p1, p2, V1, V2, T, W, Q_iso },
      },
    };
  },
  render: ({ data, pNum, lang = "es", linked, loadFromCalculator }) => {
    const n   = Number.isFinite(pNum.n)       ? pNum.n       : 1;
    const p1  = Number.isFinite(pNum.p1)      ? pNum.p1      : 200000;
    const T   = Number.isFinite(pNum.T)       ? pNum.T       : 300;
    const V2r = Number.isFinite(pNum.V2ratio) ? pNum.V2ratio : 2;

    const V1 = (n * R * T) / p1;
    const V2 = V1 * V2r;
    const p2 = (n * R * T) / V2;
    const W  = n * R * T * Math.log(V2 / V1);

    const W_WIDTH = 320;
    const W_HEIGHT = 240;
    const padL = 60, padR = 20, padT = 20, padB = 40;
    const cW = W_WIDTH - padL - padR;
    const cH = W_HEIGHT - padT - padB;

    const Vmin = Math.min(V1, V2) * 0.85;
    const Vmax = Math.max(V1, V2) * 1.1;
    const pMin = Math.min(p1, p2) * 0.6;
    const pMax = Math.max(p1, p2) * 1.25;

    const xOf = (V) => padL + ((V - Vmin) / (Vmax - Vmin)) * cW;
    const yOf = (pv) => padT + cH - ((pv - pMin) / (pMax - pMin)) * cH;

    const CURVE_POINTS = 60;
    const curvePoints = [];
    for (let i = 0; i <= CURVE_POINTS; i++) {
      const V = V1 + (V2 - V1) * (i / CURVE_POINTS);
      const pv = (n * R * T) / V;
      curvePoints.push(`${xOf(V)},${yOf(pv)}`);
    }

    const areaPoints = [
      `${xOf(V1)},${yOf(pMin)}`,
      ...curvePoints,
      `${xOf(V2)},${yOf(pMin)}`,
    ].join(" ");

    const expansion = V2 >= V1;

    const fmtP = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(2)} MPa` : `${(v / 1000).toFixed(1)} kPa`;
    const fmtV = (v) => v < 0.01 ? `${(v * 1000).toFixed(1)} L` : `${v.toFixed(3)} m³`;
    const fmtW = (v) => Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(2)} kJ` : `${v.toFixed(1)} J`;

    const x1 = xOf(V1);
    const x2 = xOf(V2);
    const y1 = yOf(p1);
    const y2 = yOf(p2);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {tt("Diagrama p–V proceso isotérmico", "Isothermal process p–V diagram", lang)}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {tt(`T = ${T} K,  n = ${fmt(n, 1, lang)} mol`, `T = ${T} K,  n = ${fmt(n, 1, lang)} mol`, lang)}
        </div>

        <svg viewBox={`0 0 ${W_WIDTH} ${W_HEIGHT}`} role="img"
             aria-label={tt("Diagrama pV isotérmico", "Isothermal pV diagram", lang)}>
          <polygon points={areaPoints} fill={expansion ? "#bbf7d0" : "#fecaca"} opacity="0.4" />

          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          <polyline points={curvePoints.join(" ")} fill="none" stroke="#0284c7" strokeWidth="2.5" />

          <circle cx={x1} cy={y1} r="5" fill="#0369a1" />
          <circle cx={x2} cy={y2} r="5" fill="#f97316" />

          <text x={padL - 4} y={y1 + 4} fontSize="9" fill="#0369a1" textAnchor="end">{fmtP(p1)}</text>
          <text x={padL - 4} y={y2 + 4} fontSize="9" fill="#f97316" textAnchor="end">{fmtP(p2)}</text>

          <text x={x1} y={padT + cH + 14} fontSize="9" fill="#0369a1" textAnchor="middle">{fmtV(V1)}</text>
          <text x={x2} y={padT + cH + 14} fontSize="9" fill="#f97316" textAnchor="middle">{fmtV(V2)}</text>

          <text x={padL + cW / 2} y={W_HEIGHT - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {tt("Volumen V (m³)", "Volume V (m³)", lang)}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {tt("Presión p", "Pressure p", lang)}
          </text>

          <text x={(x1 + x2) / 2} y={yOf((p1 + p2) / 2) - 10} fontSize="9" fill="#0284c7" textAnchor="middle">
            {`T = ${T} K`}
          </text>

          <text x={(x1 + x2) / 2} y={padT + cH - 8} fontSize="10" fill="#15803d" textAnchor="middle">
            {`W = ${fmtW(W)}`}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {tt(
            `p₁=${fmtP(p1)} → p₂=${fmtP(p2)}  ·  W = ${fmtW(W)}`,
            `p₁=${fmtP(p1)} → p₂=${fmtP(p2)}  ·  W = ${fmtW(W)}`,
            lang
          )}
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

IsothermicoGraphsCoord.graph_identity = graphContract.graph_identity;
IsothermicoGraphsCoord.pregunta_principal = graphContract.graph_identity.pregunta_principal;
IsothermicoGraphsCoord.magnitud_estrella = graphContract.graph_identity.magnitud_estrella;

export default IsothermicoGraphsCoord;
