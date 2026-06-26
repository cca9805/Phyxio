import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const R = 8.314;

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la presión de un gas ideal con la temperatura a volumen constante?",
    en: "How does the pressure of an ideal gas vary with temperature at constant volume?",
  },
  variable_control: "T",
  magnitud_estrella: "P",
  formula: "P = nRT/V",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "GasIdealGraphsCoord",
  title: {
    es: "Diagrama P–T del gas ideal (proceso isocórico)",
    en: "Ideal gas P–T diagram (isochoric process)",
  },
  defaultParams: {
    n: 1,
    V: 0.025,
    Tmin: 200,
    Tmax: 600,
  },
  controls: [
    { id: "n",    label: { es: "n (mol)",    en: "n (mol)" },    min: 0.1, max: 5,     step: 0.1   },
    { id: "V",    label: { es: "V (m³)",     en: "V (m³)" },     min: 0.001, max: 0.1, step: 0.001 },
    { id: "Tmin", label: { es: "T mín (K)",  en: "T min (K)" },  min: 50,  max: 500,   step: 10    },
    { id: "Tmax", label: { es: "T máx (K)",  en: "T max (K)" },  min: 200, max: 1200,  step: 10    },
  ],
  compute: (pNum) => {
    const n    = Number.isFinite(pNum.n)    ? pNum.n    : 1;
    const V    = Number.isFinite(pNum.V)    ? pNum.V    : 0.025;
    const Tmin = Number.isFinite(pNum.Tmin) ? pNum.Tmin : 200;
    const Tmax = Number.isFinite(pNum.Tmax) ? pNum.Tmax : 600;

    const steps = 40;
    const data = [];
    for (let i = 0; i <= steps; i++) {
      const T = Tmin + (i / steps) * (Tmax - Tmin);
      const P = (n * R * T) / V;
      data.push({ T, P });
    }

    const Tmid = (Tmin + Tmax) / 2;
    const Pmid = (n * R * Tmid) / V;

    return {
      data,
      extra: {
        interpretationTarget: "P",
        interpretationValue: Pmid,
        graphState: { n, V, Tmin, Tmax, Tmid, Pmid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const n    = Number.isFinite(pNum.n)    ? pNum.n    : 1;
    const V    = Number.isFinite(pNum.V)    ? pNum.V    : 0.025;
    const Tmin = Number.isFinite(pNum.Tmin) ? pNum.Tmin : 200;
    const Tmax = Number.isFinite(pNum.Tmax) ? pNum.Tmax : 600;

    const Pmin = (n * R * Tmin) / V;
    const Pmax = (n * R * Tmax) / V;
    const Tmid = (Tmin + Tmax) / 2;
    const Pmid = (n * R * Tmid) / V;

    const W = 320;
    const H = 240;
    const padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (T) => padL + ((T - Tmin) / (Tmax - Tmin)) * cW;
    const yOf = (P) => padT + cH - ((P - Pmin) / (Pmax - Pmin)) * cH;

    const pathD = data
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T).toFixed(1)} ${yOf(pt.P).toFixed(1)}`)
      .join(" ");

    const fmt = (v, d = 0) => v.toFixed(d);
    const fmtP = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(2)} MPa` : `${fmt(v / 1000, 1)} kPa`;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama P–T del gas ideal", "Ideal gas P–T diagram")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `n = ${fmt(n, 1)} mol,  V = ${fmt(V * 1000, 1)} L`,
            `n = ${fmt(n, 1)} mol,  V = ${fmt(V * 1000, 1)} L`
          )}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Diagrama P-T del gas ideal", "Ideal gas P-T diagram")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f0f9ff" stroke="#bae6fd" />

          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          <path d={pathD} fill="none" stroke="#0369a1" strokeWidth="2.5" />

          <circle cx={xOf(Tmid)} cy={yOf(Pmid)} r="5" fill="#f97316" />

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Temperatura T (K)", "Temperature T (K)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Presión P", "Pressure P")}
          </text>

          <text x={padL - 4} y={padT + cH}  fontSize="9" fill="#64748b" textAnchor="end">{fmtP(Pmin)}</text>
          <text x={padL - 4} y={padT + 8}   fontSize="9" fill="#64748b" textAnchor="end">{fmtP(Pmax)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tmin, 0)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tmax, 0)}</text>

          <text x={xOf(Tmid) + 8} y={yOf(Pmid) - 6} fontSize="10" fill="#0369a1">
            {t(`P ≈ ${fmtP(Pmid)}`, `P ≈ ${fmtP(Pmid)}`)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `P proporcional a T: la recta pasa por el origen (gas ideal)`,
            `P proportional to T: the line passes through the origin (ideal gas)`
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
