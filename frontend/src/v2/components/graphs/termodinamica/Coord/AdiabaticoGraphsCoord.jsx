import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const R = 8.314;

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo cambia la temperatura del gas cuando realiza trabajo sin intercambiar calor?",
    en: "How does the gas temperature change when it performs work without exchanging heat?",
  },
  variable_control: "V",
  magnitud_estrella: "T2",
  formula: "T2 = T1 * (V1/V2)^(gamma - 1)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "AdiabaticoGraphsCoord",
  title: {
    es: "Diagrama p–V del proceso adiabático",
    en: "Adiabatic process p–V diagram",
  },
  defaultParams: {
    n: 1,
    p1: 200000,
    T1: 300,
    gamma: 1.4,
    V2ratio: 2,
  },
  controls: [
    { id: "n",      label: { es: "n (mol)",         en: "n (mol)" },        min: 0.1, max: 5,    step: 0.1  },
    { id: "p1",     label: { es: "p₁ (Pa)",          en: "p₁ (Pa)" },        min: 10000, max: 1000000, step: 10000 },
    { id: "T1",     label: { es: "T₁ (K)",           en: "T₁ (K)" },         min: 100, max: 1000, step: 10   },
    { id: "gamma",  label: { es: "γ (coef. adiab.)", en: "γ (adiab. coef.)" }, min: 1.1, max: 1.8, step: 0.01 },
    { id: "V2ratio",label: { es: "V₂/V₁",           en: "V₂/V₁" },          min: 0.2, max: 5,    step: 0.1  },
  ],
  compute: (pNum) => {
    const n      = Number.isFinite(pNum.n)       ? pNum.n       : 1;
    const p1     = Number.isFinite(pNum.p1)      ? pNum.p1      : 200000;
    const T1     = Number.isFinite(pNum.T1)      ? pNum.T1      : 300;
    const gamma  = Number.isFinite(pNum.gamma)   ? pNum.gamma   : 1.4;
    const V2r    = Number.isFinite(pNum.V2ratio) ? pNum.V2ratio : 2;

    const V1 = (n * R * T1) / p1;
    const V2 = V1 * V2r;
    const p2 = p1 * Math.pow(V1 / V2, gamma);
    const T2 = T1 * Math.pow(V1 / V2, gamma - 1);
    const W  = (p1 * V1 - p2 * V2) / (gamma - 1);

    const POINTS = 60;
    const data = [];
    for (let i = 0; i <= POINTS; i++) {
      const V = V1 + (V2 - V1) * (i / POINTS);
      const p = p1 * Math.pow(V1 / V, gamma);
      data.push({ V, p });
    }

    return {
      data,
      extra: {
        interpretationTarget: "T2",
        interpretationValue: T2,
        graphState: { n, p1, p2, T1, T2, V1, V2, gamma, W, DeltaU: -W, DeltaT_ad: T2 - T1 },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const n      = Number.isFinite(pNum.n)       ? pNum.n       : 1;
    const p1     = Number.isFinite(pNum.p1)      ? pNum.p1      : 200000;
    const T1     = Number.isFinite(pNum.T1)      ? pNum.T1      : 300;
    const gamma  = Number.isFinite(pNum.gamma)   ? pNum.gamma   : 1.4;
    const V2r    = Number.isFinite(pNum.V2ratio) ? pNum.V2ratio : 2;

    const V1 = (n * R * T1) / p1;
    const V2 = V1 * V2r;
    const p2 = p1 * Math.pow(V1 / V2, gamma);
    const T2 = T1 * Math.pow(V1 / V2, gamma - 1);
    const W  = (p1 * V1 - p2 * V2) / (gamma - 1);

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
      const pv = p1 * Math.pow(V1 / V, gamma);
      curvePoints.push(`${xOf(V)},${yOf(pv)}`);
    }

    const areaPoints = [
      `${xOf(V1)},${yOf(pMin)}`,
      ...curvePoints,
      `${xOf(V2)},${yOf(pMin)}`,
    ].join(" ");

    const expansion = V2 >= V1;

    const fmt   = (v, d = 2) => v.toFixed(d);
    const fmtP  = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(2)} MPa` : `${(v / 1000).toFixed(1)} kPa`;
    const fmtV  = (v) => v < 0.01 ? `${(v * 1000).toFixed(1)} L` : `${fmt(v, 3)} m³`;
    const fmtW  = (v) => Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(2)} kJ` : `${fmt(v, 1)} J`;

    const x1 = xOf(V1);
    const x2 = xOf(V2);
    const y1 = yOf(p1);
    const y2 = yOf(p2);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama p–V proceso adiabático", "Adiabatic process p–V diagram")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `γ = ${fmt(gamma, 2)},  n = ${fmt(n, 1)} mol`,
            `γ = ${fmt(gamma, 2)},  n = ${fmt(n, 1)} mol`
          )}
        </div>

        <svg viewBox={`0 0 ${W_WIDTH} ${W_HEIGHT}`} role="img"
             aria-label={t("Diagrama pV proceso adiabático", "Adiabatic pV diagram")}>
          {/* Area under adiabat = work */}
          <polygon
            points={areaPoints}
            fill={expansion ? "#bbf7d0" : "#fecaca"} opacity="0.4"
          />

          {/* Axes */}
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* Adiabatic curve */}
          <polyline
            points={curvePoints.join(" ")}
            fill="none" stroke="#7c3aed" strokeWidth="2.5"
          />

          {/* State points */}
          <circle cx={x1} cy={y1} r="5" fill="#0369a1" />
          <circle cx={x2} cy={y2} r="5" fill="#f97316" />

          {/* p axis labels */}
          <text x={padL - 4} y={y1 + 4} fontSize="9" fill="#0369a1" textAnchor="end">
            {fmtP(p1)}
          </text>
          <text x={padL - 4} y={y2 + 4} fontSize="9" fill="#f97316" textAnchor="end">
            {fmtP(p2)}
          </text>

          {/* V axis labels */}
          <text x={x1} y={padT + cH + 14} fontSize="9" fill="#0369a1" textAnchor="middle">
            {fmtV(V1)}
          </text>
          <text x={x2} y={padT + cH + 14} fontSize="9" fill="#f97316" textAnchor="middle">
            {fmtV(V2)}
          </text>

          {/* Axis titles */}
          <text x={padL + cW / 2} y={W_HEIGHT - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Volumen V (m³)", "Volume V (m³)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Presión p", "Pressure p")}
          </text>

          {/* W label */}
          <text
            x={(x1 + x2) / 2}
            y={padT + cH - 8}
            fontSize="10" fill="#15803d" textAnchor="middle"
          >
            {t(`W = ${fmtW(W)}`, `W = ${fmtW(W)}`)}
          </text>

          {/* State temperature labels */}
          <text x={x1} y={y1 - 8} fontSize="9" fill="#0369a1" textAnchor="middle">
            {t(`T₁=${T1}K`, `T₁=${T1}K`)}
          </text>
          <text x={x2} y={y2 - 8} fontSize="9" fill="#f97316" textAnchor="middle">
            {t(`T₂=${fmt(T2, 0)}K`, `T₂=${fmt(T2, 0)}K`)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `T₁=${T1} K → T₂=${fmt(T2, 1)} K  ·  W = ${fmtW(W)}`,
            `T₁=${T1} K → T₂=${fmt(T2, 1)} K  ·  W = ${fmtW(W)}`
          )}
        </div>

        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {t("Cargar desde calculadora", "Load from calculator")}
          </button>
        ) : null}
      </div>
    );
  },
});
