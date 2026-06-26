import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo cambia la energía interna de un gas ideal con la temperatura?",
    en: "How does the internal energy of an ideal gas change with temperature?",
  },
  variable_control: "T",
  magnitud_estrella: "U",
  formula: "U = (f/2) * n * R * T",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "EnergiaInternaGraphsCoord",
  title: {
    es: "Energía interna — U frente a T",
    en: "Internal energy — U versus T",
  },
  defaultParams: {
    n: 1,
    f: 3,
    Tmin: 200,
    Tmax: 600,
  },
  controls: [
    { id: "n",    label: { es: "n (mol)",         en: "n (mol)" },         min: 0.1, max: 5,    step: 0.1 },
    { id: "f",    label: { es: "f (grados lib.)", en: "f (dof)" },         min: 3,   max: 5,    step: 2   },
    { id: "Tmin", label: { es: "T mín (K)",        en: "T min (K)" },      min: 50,  max: 400,  step: 50  },
    { id: "Tmax", label: { es: "T máx (K)",        en: "T max (K)" },      min: 200, max: 1500, step: 50  },
  ],
  compute: (pNum) => {
    const R    = 8.314;
    const n    = Number.isFinite(pNum.n)    ? pNum.n    : 1;
    const f    = Number.isFinite(pNum.f)    ? pNum.f    : 3;
    const Tmin = Number.isFinite(pNum.Tmin) ? pNum.Tmin : 200;
    const Tmax = Number.isFinite(pNum.Tmax) ? pNum.Tmax : 600;

    const steps = 40;
    const data = [];
    for (let i = 0; i <= steps; i++) {
      const T = Tmin + (i / steps) * (Tmax - Tmin);
      const U = (f / 2) * n * R * T;
      data.push({ T, U });
    }

    const Tmid = (Tmin + Tmax) / 2;
    const Umid = (f / 2) * n * R * Tmid;

    return {
      data,
      extra: {
        interpretationTarget: "energia_interna",
        interpretationValue: Umid,
        graphState: { n, f, R, Tmin, Tmax, Tmid, Umid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const R    = 8.314;
    const n    = Number.isFinite(pNum.n)    ? pNum.n    : 1;
    const f    = Number.isFinite(pNum.f)    ? pNum.f    : 3;
    const Tmin = Number.isFinite(pNum.Tmin) ? pNum.Tmin : 200;
    const Tmax = Number.isFinite(pNum.Tmax) ? pNum.Tmax : 600;

    const Umin = (f / 2) * n * R * Tmin;
    const Umax = (f / 2) * n * R * Tmax;
    const Tmid = (Tmin + Tmax) / 2;
    const Umid = (f / 2) * n * R * Tmid;

    const W = 320;
    const H = 240;
    const padL = 62, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (T) => padL + ((T - Tmin) / Math.max(Tmax - Tmin, 1)) * cW;
    const yOf = (U) => padT + cH - ((U - Umin) / Math.max(Umax - Umin, 1)) * cH;

    const pathD = data
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T).toFixed(1)} ${yOf(pt.U).toFixed(1)}`)
      .join(" ");

    const fmtU = (v) =>
      v >= 1e6 ? `${(v / 1e6).toFixed(2)} MJ` : v >= 1000 ? `${(v / 1000).toFixed(1)} kJ` : `${v.toFixed(0)} J`;
    const fmt = (v, d = 1) => v.toFixed(d);
    const gasLabel = f === 3 ? t("monoatómico", "monatomic") : t("diatómico", "diatomic");

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t(`Energía interna U = (f/2)nRT  [${gasLabel}]`, `Internal energy U = (f/2)nRT  [${gasLabel}]`)}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `n = ${fmt(n)} mol,  f = ${f},  Cv = ${fmt((f / 2) * R, 1)} J/(mol·K)`,
            `n = ${fmt(n)} mol,  f = ${f},  Cv = ${fmt((f / 2) * R, 1)} J/(mol·K)`,
          )}
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={t("Energía interna frente a temperatura", "Internal energy versus temperature")}
        >
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f0fdf4" stroke="#bbf7d0" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <path d={pathD} fill="none" stroke="#16a34a" strokeWidth="2.5" />
          <circle cx={xOf(Tmid)} cy={yOf(Umid)} r="5" fill="#0369a1" />

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Temperatura T (K)", "Temperature T (K)")}
          </text>
          <text
            x="12"
            y={padT + cH / 2}
            fontSize="11"
            fill="#475569"
            textAnchor="middle"
            transform={`rotate(-90,12,${padT + cH / 2})`}
          >
            {t("Energía interna U", "Internal energy U")}
          </text>

          <text x={padL - 4} y={padT + cH} fontSize="9" fill="#64748b" textAnchor="end">
            {fmtU(Umin)}
          </text>
          <text x={padL - 4} y={padT + 8} fontSize="9" fill="#64748b" textAnchor="end">
            {fmtU(Umax)}
          </text>
          <text x={padL} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">
            {fmt(Tmin, 0)} K
          </text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">
            {fmt(Tmax, 0)} K
          </text>

          <text x={xOf(Tmid) + 8} y={yOf(Umid) - 6} fontSize="10" fill="#16a34a">
            {fmtU(Umid)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `U proporcional a T: recta de pendiente n·Cv = ${fmt((f / 2) * n * R, 1)} J/K`,
            `U proportional to T: line with slope n·Cv = ${fmt((f / 2) * n * R, 1)} J/K`,
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
