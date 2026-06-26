import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cuál es la temperatura de equilibrio final cuando dos cuerpos a diferentes temperaturas intercambian calor en un sistema aislado?",
    en: "What is the final equilibrium temperature when two bodies at different temperatures exchange heat in an isolated system?",
  },
  variable_control: "T1",
  magnitud_estrella: "Tf",
  formula: "Tf = (m1*c1*T1 + m2*c2*T2) / (m1*c1 + m2*c2)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "CalorimetriaGraphsCoord",
  title: {
    es: "Calorimetría — temperatura de equilibrio",
    en: "Calorimetry — equilibrium temperature",
  },
  defaultParams: {
    m1: 1,
    c1: 4186,
    T2: 20,
    m2: 1,
    c2: 897,
    T1min: 20,
    T1max: 100,
  },
  controls: [
    { id: "m1",   label: { es: "m₁ (kg)",      en: "m₁ (kg)" },       min: 0.1, max: 10,   step: 0.1 },
    { id: "c1",   label: { es: "c₁ (J/kg·K)", en: "c₁ (J/kg·K)" },   min: 100, max: 5000, step: 100 },
    { id: "m2",   label: { es: "m₂ (kg)",      en: "m₂ (kg)" },       min: 0.1, max: 10,   step: 0.1 },
    { id: "c2",   label: { es: "c₂ (J/kg·K)", en: "c₂ (J/kg·K)" },   min: 100, max: 5000, step: 100 },
    { id: "T2",   label: { es: "T₂ inicial (K)", en: "T₂ initial (K)" }, min: 200, max: 400, step: 5 },
    { id: "T1min",label: { es: "T₁ mín (K)", en: "T₁ min (K)" },      min: 200, max: 400, step: 5  },
    { id: "T1max",label: { es: "T₁ máx (K)", en: "T₁ max (K)" },      min: 250, max: 600, step: 5  },
  ],
  compute: (pNum) => {
    const m1    = Number.isFinite(pNum.m1)    ? pNum.m1    : 1;
    const c1    = Number.isFinite(pNum.c1)    ? pNum.c1    : 4186;
    const m2    = Number.isFinite(pNum.m2)    ? pNum.m2    : 1;
    const c2    = Number.isFinite(pNum.c2)    ? pNum.c2    : 897;
    const T2    = Number.isFinite(pNum.T2)    ? pNum.T2    : 293;
    const T1min = Number.isFinite(pNum.T1min) ? pNum.T1min : 293;
    const T1max = Number.isFinite(pNum.T1max) ? pNum.T1max : 373;

    const denom = m1 * c1 + m2 * c2;
    const steps = 40;
    const data = [];
    for (let i = 0; i <= steps; i++) {
      const T1 = T1min + (i / steps) * (T1max - T1min);
      const Tf = (m1 * c1 * T1 + m2 * c2 * T2) / denom;
      data.push({ T1, Tf });
    }

    const T1mid = (T1min + T1max) / 2;
    const Tfmid = (m1 * c1 * T1mid + m2 * c2 * T2) / denom;

    return {
      data,
      extra: {
        interpretationTarget: "Tf",
        interpretationValue: Tfmid,
        graphState: { m1, c1, m2, c2, T2, T1min, T1max, T1mid, Tfmid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const m1    = Number.isFinite(pNum.m1)    ? pNum.m1    : 1;
    const c1    = Number.isFinite(pNum.c1)    ? pNum.c1    : 4186;
    const m2    = Number.isFinite(pNum.m2)    ? pNum.m2    : 1;
    const c2    = Number.isFinite(pNum.c2)    ? pNum.c2    : 897;
    const T2    = Number.isFinite(pNum.T2)    ? pNum.T2    : 293;
    const T1min = Number.isFinite(pNum.T1min) ? pNum.T1min : 293;
    const T1max = Number.isFinite(pNum.T1max) ? pNum.T1max : 373;

    const denom = m1 * c1 + m2 * c2;
    const Tfmin = (m1 * c1 * T1min + m2 * c2 * T2) / denom;
    const Tfmax = (m1 * c1 * T1max + m2 * c2 * T2) / denom;
    const T1mid = (T1min + T1max) / 2;
    const Tfmid = (m1 * c1 * T1mid + m2 * c2 * T2) / denom;

    const W = 320;
    const H = 240;
    const padL = 55, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const Ymin = Math.min(Tfmin, T2) - 2;
    const Ymax = Math.max(Tfmax, T1max) + 2;

    const xOf = (T1) => padL + ((T1 - T1min) / Math.max(T1max - T1min, 0.001)) * cW;
    const yOf = (Tf) => padT + cH - ((Tf - Ymin) / Math.max(Ymax - Ymin, 0.001)) * cH;

    const pathD = data
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T1).toFixed(1)} ${yOf(pt.Tf).toFixed(1)}`)
      .join(" ");

    const fmt = (v, d = 1) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Temperatura de equilibrio Tf frente a T₁", "Equilibrium temperature Tf versus T₁")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `m₁=${fmt(m1)} kg, c₁=${fmt(c1, 0)} J/kg·K | m₂=${fmt(m2)} kg, c₂=${fmt(c2, 0)} J/kg·K, T₂=${fmt(T2, 0)} K`,
            `m₁=${fmt(m1)} kg, c₁=${fmt(c1, 0)} J/kg·K | m₂=${fmt(m2)} kg, c₂=${fmt(c2, 0)} J/kg·K, T₂=${fmt(T2, 0)} K`
          )}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Temperatura de equilibrio en calorimetría", "Equilibrium temperature in calorimetry")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f0fdf4" stroke="#bbf7d0" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* diagonal reference: Tf = T1 (if both bodies identical) */}
          <line x1={xOf(T1min)} y1={yOf(T1min)} x2={xOf(T1max)} y2={yOf(T1max)}
                stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />

          <path d={pathD} fill="none" stroke="#059669" strokeWidth="2.5" />
          <circle cx={xOf(T1mid)} cy={yOf(Tfmid)} r="5" fill="#f97316" />

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("T₁ inicial (K)", "T₁ initial (K)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Tf (K)", "Tf (K)")}
          </text>

          <text x={padL - 4} y={yOf(Ymin)} fontSize="9" fill="#64748b" textAnchor="end">{fmt(Ymin, 0)}</text>
          <text x={padL - 4} y={yOf(Ymax) + 8} fontSize="9" fill="#64748b" textAnchor="end">{fmt(Ymax, 0)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(T1min, 0)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(T1max, 0)}</text>

          <text x={xOf(T1mid) + 8} y={yOf(Tfmid) - 6} fontSize="10" fill="#059669">
            {`Tf ≈ ${fmt(Tfmid, 1)} K`}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            "T₂ fija (línea discontinua = Tf si los cuerpos fueran idénticos)",
            "T₂ fixed (dashed line = Tf if bodies were identical)"
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
