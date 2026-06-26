import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const R = 8.314;

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo cambia el volumen de un gas ideal al calentarse a presión constante?",
    en: "How does the volume of an ideal gas change when heated at constant pressure?",
  },
  variable_control: "T",
  magnitud_estrella: "V",
  formula: "V = nRT/p",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "IsobaricoGraphsCoord",
  title: {
    es: "Diagrama p–V del proceso isobárico",
    en: "Isobaric process p–V diagram",
  },
  defaultParams: {
    n: 1,
    p: 101325,
    T1: 300,
    T2: 600,
  },
  controls: [
    { id: "n",  label: { es: "n (mol)",    en: "n (mol)" },    min: 0.1, max: 5,      step: 0.1    },
    { id: "p",  label: { es: "p (Pa)",     en: "p (Pa)" },     min: 10000, max: 500000, step: 10000 },
    { id: "T1", label: { es: "T₁ (K)",     en: "T₁ (K)" },     min: 100, max: 800,    step: 10     },
    { id: "T2", label: { es: "T₂ (K)",     en: "T₂ (K)" },     min: 200, max: 1200,   step: 10     },
  ],
  compute: (pNum) => {
    const n  = Number.isFinite(pNum.n)  ? pNum.n  : 1;
    const p  = Number.isFinite(pNum.p)  ? pNum.p  : 101325;
    const T1 = Number.isFinite(pNum.T1) ? pNum.T1 : 300;
    const T2 = Number.isFinite(pNum.T2) ? pNum.T2 : 600;

    const V1 = (n * R * T1) / p;
    const V2 = (n * R * T2) / p;
    const DeltaV = V2 - V1;
    const W = p * DeltaV;

    const data = [
      { V: V1, p },
      { V: V2, p },
    ];

    return {
      data,
      extra: {
        interpretationTarget: "W",
        interpretationValue: W,
        graphState: { n, p, T1, T2, V1, V2, DeltaV, W },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const n  = Number.isFinite(pNum.n)  ? pNum.n  : 1;
    const p  = Number.isFinite(pNum.p)  ? pNum.p  : 101325;
    const T1 = Number.isFinite(pNum.T1) ? pNum.T1 : 300;
    const T2 = Number.isFinite(pNum.T2) ? pNum.T2 : 600;

    const V1 = (n * R * T1) / p;
    const V2 = (n * R * T2) / p;
    const DeltaV = V2 - V1;
    const W = p * DeltaV;

    const W_WIDTH = 320;
    const W_HEIGHT = 240;
    const padL = 60, padR = 20, padT = 20, padB = 40;
    const cW = W_WIDTH - padL - padR;
    const cH = W_HEIGHT - padT - padB;

    const Vmin = Math.min(V1, V2) * 0.85;
    const Vmax = Math.max(V1, V2) * 1.1;
    const pDisplay = p;
    const pMin = pDisplay * 0.3;
    const pMax = pDisplay * 1.5;

    const xOf = (V) => padL + ((V - Vmin) / (Vmax - Vmin)) * cW;
    const yOf = (pv) => padT + cH - ((pv - pMin) / (pMax - pMin)) * cH;

    const x1 = xOf(V1);
    const x2 = xOf(V2);
    const yp = yOf(pDisplay);
    const yBase = yOf(pMin);

    const fmt = (v, d = 2) => v.toFixed(d);
    const fmtP = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(2)} MPa` : `${(v / 1000).toFixed(1)} kPa`;
    const fmtV = (v) => v < 0.01 ? `${(v * 1000).toFixed(1)} L` : `${fmt(v, 3)} m³`;
    const fmtW = (v) => Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(2)} kJ` : `${fmt(v, 1)} J`;

    const expansion = V2 >= V1;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama p–V proceso isobárico", "Isobaric process p–V diagram")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `p = ${fmtP(p)},  n = ${fmt(n, 1)} mol`,
            `p = ${fmtP(p)},  n = ${fmt(n, 1)} mol`
          )}
        </div>

        <svg viewBox={`0 0 ${W_WIDTH} ${W_HEIGHT}`} role="img"
             aria-label={t("Diagrama pV proceso isobárico", "Isobaric pV diagram")}>
          {/* Area under isobaric line = work */}
          <rect
            x={Math.min(x1, x2)} y={yp}
            width={Math.abs(x2 - x1)} height={yBase - yp}
            fill={expansion ? "#bbf7d0" : "#fecaca"} opacity="0.5"
          />

          {/* Axes */}
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* Isobaric line */}
          <line x1={x1} y1={yp} x2={x2} y2={yp} stroke="#0369a1" strokeWidth="2.5" />

          {/* State points */}
          <circle cx={x1} cy={yp} r="5" fill="#0369a1" />
          <circle cx={x2} cy={yp} r="5" fill="#f97316" />

          {/* Arrow direction */}
          {expansion
            ? <polygon points={`${x2},${yp} ${x2 - 8},${yp - 5} ${x2 - 8},${yp + 5}`} fill="#0369a1" />
            : <polygon points={`${x2},${yp} ${x2 + 8},${yp - 5} ${x2 + 8},${yp + 5}`} fill="#f97316" />
          }

          {/* p axis label */}
          <text x={padL - 4} y={yp + 4} fontSize="9" fill="#64748b" textAnchor="end">
            {fmtP(pDisplay)}
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

          {/* W label inside area */}
          <text
            x={(Math.min(x1, x2) + Math.max(x1, x2)) / 2}
            y={(yp + yBase) / 2 + 4}
            fontSize="10" fill="#15803d" textAnchor="middle"
          >
            {t(`W = ${fmtW(W)}`, `W = ${fmtW(W)}`)}
          </text>

          {/* State labels */}
          <text x={x1} y={yp - 8} fontSize="9" fill="#0369a1" textAnchor="middle">
            {t(`T₁=${T1}K`, `T₁=${T1}K`)}
          </text>
          <text x={x2} y={yp - 8} fontSize="9" fill="#f97316" textAnchor="middle">
            {t(`T₂=${T2}K`, `T₂=${T2}K`)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `ΔV = ${fmtV(DeltaV)}  ·  W = ${fmtW(W)}  (área del rectángulo)`,
            `ΔV = ${fmtV(DeltaV)}  ·  W = ${fmtW(W)}  (rectangular area)`
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
