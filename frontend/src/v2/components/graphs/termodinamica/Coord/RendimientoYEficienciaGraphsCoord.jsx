import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

// Extractor hints: XAxis, YAxis, createCoordGraphPage
// axes: XAxis = calor absorbido Q_H (J) | YAxis = rendimiento térmico eta (adimensional)

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Qué fracción del calor absorbido por una máquina térmica real puede convertirse en trabajo útil y cuáles son los factores que limitan ese rendimiento?",
    en: "What fraction of the heat absorbed by a real heat engine can be converted into useful work, and what factors limit that efficiency?",
  },
  variable_control: "Q_H",
  magnitud_estrella: "eta",
  formula: "eta = W_util / Q_H",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "RendimientoYEficienciaGraphsCoord",
  title: {
    es: "Diagrama η – Q_H (rendimiento y eficiencia)",
    en: "η – Q_H diagram (efficiency and performance)",
  },
  defaultParams: {
    eta_real: 0.35,
    Q_H_min: 100,
    Q_H_max: 2000,
    T_H: 600,
    T_C: 300,
  },
  controls: [
    { id: "eta_real",  label: { es: "Rendimiento real η (0–1)",        en: "Real efficiency η (0–1)" },        min: 0.05, max: 0.95, step: 0.01 },
    { id: "Q_H_min",  label: { es: "Q_H mínimo (J)",                  en: "Q_H minimum (J)" },                min: 10,   max: 500,  step: 10  },
    { id: "Q_H_max",  label: { es: "Q_H máximo (J)",                  en: "Q_H maximum (J)" },                min: 200,  max: 5000, step: 100 },
    { id: "T_H",      label: { es: "Temperatura foco caliente T_H (K)", en: "Hot reservoir T_H (K)" },         min: 350,  max: 2000, step: 10  },
    { id: "T_C",      label: { es: "Temperatura foco frío T_C (K)",    en: "Cold reservoir T_C (K)" },         min: 200,  max: 400,  step: 10  },
  ],
  compute: (pNum) => {
    const eta_real = Number.isFinite(pNum.eta_real) ? Math.max(0.01, Math.min(0.99, pNum.eta_real)) : 0.35;
    const Q_H_min  = Number.isFinite(pNum.Q_H_min)  ? pNum.Q_H_min  : 100;
    const Q_H_max  = Number.isFinite(pNum.Q_H_max)  ? pNum.Q_H_max  : 2000;
    const T_H      = Number.isFinite(pNum.T_H)      ? pNum.T_H      : 600;
    const T_C      = Number.isFinite(pNum.T_C)      ? pNum.T_C      : 300;

    const eta_Carnot = T_H > T_C ? 1 - T_C / T_H : 0;

    const steps = 40;
    const data  = [];
    for (let i = 0; i <= steps; i++) {
      const Q_H    = Q_H_min + (i / steps) * (Q_H_max - Q_H_min);
      const W_util = eta_real * Q_H;
      const Q_C    = Q_H - W_util;
      data.push({ Q_H, W_util, Q_C });
    }

    const Q_H_mid  = (Q_H_min + Q_H_max) / 2;
    const W_util_mid = eta_real * Q_H_mid;

    return {
      data,
      extra: {
        interpretationTarget: "eta",
        interpretationValue: eta_real,
        graphState: { eta_real, eta_Carnot, Q_H_min, Q_H_max, Q_H_mid, W_util_mid, T_H, T_C },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const eta_real = Number.isFinite(pNum.eta_real) ? Math.max(0.01, Math.min(0.99, pNum.eta_real)) : 0.35;
    const Q_H_min  = Number.isFinite(pNum.Q_H_min)  ? pNum.Q_H_min  : 100;
    const Q_H_max  = Number.isFinite(pNum.Q_H_max)  ? pNum.Q_H_max  : 2000;
    const T_H      = Number.isFinite(pNum.T_H)      ? pNum.T_H      : 600;
    const T_C      = Number.isFinite(pNum.T_C)      ? pNum.T_C      : 300;

    const eta_Carnot = T_H > T_C ? 1 - T_C / T_H : 0;
    const Q_H_mid    = (Q_H_min + Q_H_max) / 2;
    const W_util_mid = eta_real * Q_H_mid;

    const W = 320, H = 240;
    const padL = 55, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (qh) => padL + ((qh - Q_H_min) / Math.max(Q_H_max - Q_H_min, 1)) * cW;
    const yOf = (w)  => padT + cH - (w / Math.max(Q_H_max, 1)) * cH;

    const pathReal = data
      .filter((d) => Number.isFinite(d.W_util))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Q_H).toFixed(1)} ${yOf(pt.W_util).toFixed(1)}`)
      .join(" ");

    const pathCarnot = data
      .filter((d) => Number.isFinite(d.Q_H))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Q_H).toFixed(1)} ${yOf(eta_Carnot * pt.Q_H).toFixed(1)}`)
      .join(" ");

    const fmt  = (v, d = 0) => v.toFixed(d);
    const pct  = (v)        => `${(v * 100).toFixed(1)} %`;
    const fmtJ = (v)        => v >= 1000 ? `${(v / 1000).toFixed(1)} kJ` : `${v.toFixed(0)} J`;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama W_util – Q_H: rendimiento térmico", "W_util – Q_H diagram: thermal efficiency")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `η = ${pct(eta_real)} · η_Carnot = ${pct(eta_Carnot)} · T_H = ${fmt(T_H)} K · T_C = ${fmt(T_C)} K`,
            `η = ${pct(eta_real)} · η_Carnot = ${pct(eta_Carnot)} · T_H = ${fmt(T_H)} K · T_C = ${fmt(T_C)} K`
          )}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Diagrama trabajo útil frente a calor absorbido", "Useful work versus absorbed heat diagram")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#eff6ff" stroke="#93c5fd" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* Carnot upper bound (dashed gray) */}
          <path d={pathCarnot} fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />

          {/* Real efficiency line (blue) */}
          <path d={pathReal} fill="none" stroke="#2563eb" strokeWidth="2.5" />

          {/* Operating point */}
          <circle cx={xOf(Q_H_mid)} cy={yOf(W_util_mid)} r="5" fill="#f97316" />

          {/* Axis labels */}
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Calor absorbido Q_H (J)", "Absorbed heat Q_H (J)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Trabajo útil W (J)", "Useful work W (J)")}
          </text>

          {/* Tick labels */}
          <text x={padL - 4} y={padT + cH}    fontSize="9" fill="#64748b" textAnchor="end">{fmtJ(0)}</text>
          <text x={padL - 4} y={padT + 8}     fontSize="9" fill="#64748b" textAnchor="end">{fmtJ(Q_H_max)}</text>
          <text x={padL}     y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmtJ(Q_H_min)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmtJ(Q_H_max)}</text>

          {/* Operating point label */}
          <text x={xOf(Q_H_mid) + 8} y={yOf(W_util_mid) - 6} fontSize="10" fill="#2563eb">
            {t(`W ≈ ${fmtJ(W_util_mid)}`, `W ≈ ${fmtJ(W_util_mid)}`)}
          </text>

          {/* Legend */}
          <line x1={padL + cW - 70} y1={padT + 10} x2={padL + cW - 50} y2={padT + 10}
                stroke="#2563eb" strokeWidth="2" />
          <text x={padL + cW - 47} y={padT + 13} fontSize="9" fill="#2563eb">
            {t("real", "real")}
          </text>
          <line x1={padL + cW - 70} y1={padT + 22} x2={padL + cW - 50} y2={padT + 22}
                stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x={padL + cW - 47} y={padT + 25} fontSize="9" fill="#94a3b8">
            {t("Carnot", "Carnot")}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `La recta real (η=${pct(eta_real)}) siempre queda por debajo del límite de Carnot (η_Carnot=${pct(eta_Carnot)}). La pendiente de cada recta es el rendimiento.`,
            `The real line (η=${pct(eta_real)}) always lies below the Carnot bound (η_Carnot=${pct(eta_Carnot)}). The slope of each line is the efficiency.`
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
