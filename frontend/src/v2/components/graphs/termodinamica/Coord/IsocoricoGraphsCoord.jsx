import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const R = 8.314;

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo cambia la energía interna de un gas cuando se calienta en un recipiente rígido?",
    en: "How does the internal energy of a gas change when heated in a rigid container?",
  },
  variable_control: "T",
  magnitud_estrella: "DeltaU",
  formula: "DeltaU = n * Cv * DeltaT",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "IsocoricoGraphsCoord",
  title: {
    es: "Diagrama p–T del proceso isocórico",
    en: "Isochoric process p–T diagram",
  },
  defaultParams: {
    n: 1,
    V: 0.025,
    T1: 300,
    T2: 600,
    Cv: 20.8,
  },
  controls: [
    { id: "n",  label: { es: "n (mol)",       en: "n (mol)" },       min: 0.1, max: 5,     step: 0.1  },
    { id: "V",  label: { es: "V (m³)",        en: "V (m³)" },        min: 0.001, max: 0.1, step: 0.001 },
    { id: "T1", label: { es: "T₁ (K)",        en: "T₁ (K)" },        min: 100, max: 800,   step: 10   },
    { id: "T2", label: { es: "T₂ (K)",        en: "T₂ (K)" },        min: 200, max: 1200,  step: 10   },
    { id: "Cv", label: { es: "Cᵥ (J/mol·K)", en: "Cᵥ (J/mol·K)" }, min: 10, max: 35,     step: 0.1  },
  ],
  compute: (pNum) => {
    const n  = Number.isFinite(pNum.n)  ? pNum.n  : 1;
    const V  = Number.isFinite(pNum.V)  ? pNum.V  : 0.025;
    const T1 = Number.isFinite(pNum.T1) ? pNum.T1 : 300;
    const T2 = Number.isFinite(pNum.T2) ? pNum.T2 : 600;
    const Cv = Number.isFinite(pNum.Cv) ? pNum.Cv : 20.8;

    const p1 = (n * R * T1) / V;
    const p2 = (n * R * T2) / V;
    const DeltaT = T2 - T1;
    const DeltaU = n * Cv * DeltaT;
    const W = 0;
    const Q = DeltaU;

    const data = [
      { T: T1, p: p1 },
      { T: T2, p: p2 },
    ];

    return {
      data,
      extra: {
        interpretationTarget: "DeltaU",
        interpretationValue: DeltaU,
        graphState: { n, V, T1, T2, Cv, p1, p2, DeltaT, DeltaU, W, Q },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const n  = Number.isFinite(pNum.n)  ? pNum.n  : 1;
    const V  = Number.isFinite(pNum.V)  ? pNum.V  : 0.025;
    const T1 = Number.isFinite(pNum.T1) ? pNum.T1 : 300;
    const T2 = Number.isFinite(pNum.T2) ? pNum.T2 : 600;
    const Cv = Number.isFinite(pNum.Cv) ? pNum.Cv : 20.8;

    const p1 = (n * R * T1) / V;
    const p2 = (n * R * T2) / V;
    const DeltaT = T2 - T1;
    const DeltaU = n * Cv * DeltaT;

    const W_WIDTH = 320;
    const W_HEIGHT = 240;
    const padL = 65, padR = 20, padT = 20, padB = 40;
    const cW = W_WIDTH - padL - padR;
    const cH = W_HEIGHT - padT - padB;

    const Tmin = Math.min(T1, T2) * 0.7;
    const Tmax = Math.max(T1, T2) * 1.2;
    const pAll = [p1, p2, 0];
    const pMin = 0;
    const pMax = Math.max(p1, p2) * 1.25;

    const xOf = (Tv) => padL + ((Tv - Tmin) / (Tmax - Tmin)) * cW;
    const yOf = (pv) => padT + cH - ((pv - pMin) / (pMax - pMin)) * cH;

    const xT1 = xOf(T1);
    const xT2 = xOf(T2);
    const yP1 = yOf(p1);
    const yP2 = yOf(p2);
    const yBase = yOf(0);

    const fmt = (v, d = 2) => v.toFixed(d);
    const fmtP = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(2)} MPa` : `${(v / 1000).toFixed(1)} kPa`;
    const fmtE = (v) => Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(2)} kJ` : `${fmt(v, 1)} J`;

    const heating = T2 >= T1;

    const originT = Tmin;
    const originP = pMin;
    const slopeX = xOf(T1 + (Tmax - Tmin) * 0.05) - xOf(Tmin);
    const slopeRatio = (p2 - p1) / (T2 - T1);

    const lineExtT1 = Tmin;
    const lineExtT2 = Tmax;
    const lineExtP1 = slopeRatio * (lineExtT1 - T1) + p1;
    const lineExtP2 = slopeRatio * (lineExtT2 - T1) + p1;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama p–T proceso isocórico", "Isochoric process p–T diagram")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `V = ${(V * 1000).toFixed(1)} L,  n = ${fmt(n, 1)} mol`,
            `V = ${(V * 1000).toFixed(1)} L,  n = ${fmt(n, 1)} mol`
          )}
        </div>

        <svg viewBox={`0 0 ${W_WIDTH} ${W_HEIGHT}`} role="img"
             aria-label={t("Diagrama pT proceso isocórico", "Isochoric pT diagram")}>

          {/* Isochoric line extended faintly */}
          <line
            x1={xOf(lineExtT1)} y1={yOf(Math.max(lineExtP1, 0))}
            x2={xOf(lineExtT2)} y2={yOf(Math.max(lineExtP2, 0))}
            stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3"
          />

          {/* Shaded area between state points and x-axis (proportional to DeltaU) */}
          <polygon
            points={`${xT1},${yP1} ${xT2},${yP2} ${xT2},${yBase} ${xT1},${yBase}`}
            fill={heating ? "#bbf7d0" : "#fecaca"} opacity="0.45"
          />

          {/* Axes */}
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* Isochoric segment (bold) */}
          <line x1={xT1} y1={yP1} x2={xT2} y2={yP2} stroke="#0369a1" strokeWidth="2.5" />

          {/* State points */}
          <circle cx={xT1} cy={yP1} r="5" fill="#0369a1" />
          <circle cx={xT2} cy={yP2} r="5" fill="#f97316" />

          {/* Arrow */}
          {heating
            ? <polygon points={`${xT2},${yP2} ${xT2 - 9},${yP2 + 5} ${xT2 - 5},${yP2 - 4}`} fill="#0369a1" />
            : <polygon points={`${xT2},${yP2} ${xT2 + 9},${yP2 - 5} ${xT2 + 5},${yP2 + 4}`} fill="#f97316" />
          }

          {/* p axis tick labels */}
          <text x={padL - 4} y={yP1 + 4} fontSize="9" fill="#0369a1" textAnchor="end">
            {fmtP(p1)}
          </text>
          <text x={padL - 4} y={yP2 + 4} fontSize="9" fill="#f97316" textAnchor="end">
            {fmtP(p2)}
          </text>

          {/* T axis tick labels */}
          <text x={xT1} y={padT + cH + 14} fontSize="9" fill="#0369a1" textAnchor="middle">
            {`${T1} K`}
          </text>
          <text x={xT2} y={padT + cH + 14} fontSize="9" fill="#f97316" textAnchor="middle">
            {`${T2} K`}
          </text>

          {/* Axis titles */}
          <text x={padL + cW / 2} y={W_HEIGHT - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Temperatura T (K)", "Temperature T (K)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Presión p", "Pressure p")}
          </text>

          {/* DeltaU label */}
          <text
            x={(xT1 + xT2) / 2}
            y={(yP1 + yP2) / 2 - 10}
            fontSize="10" fill="#15803d" textAnchor="middle"
          >
            {t(`ΔU = ${fmtE(DeltaU)}`, `ΔU = ${fmtE(DeltaU)}`)}
          </text>

          {/* W = 0 label */}
          <text x={padL + cW - 10} y={padT + 14} fontSize="9" fill="#64748b" textAnchor="end">
            {t("W = 0", "W = 0")}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `ΔT = ${fmt(DeltaT, 0)} K  ·  ΔU = Q = ${fmtE(DeltaU)}  ·  W = 0`,
            `ΔT = ${fmt(DeltaT, 0)} K  ·  ΔU = Q = ${fmtE(DeltaU)}  ·  W = 0`
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
