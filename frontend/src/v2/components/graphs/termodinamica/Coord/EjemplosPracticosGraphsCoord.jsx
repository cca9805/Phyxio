import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo se compara el COP real de un sistema con el límite de Carnot a diferentes temperaturas del foco frío?",
    en: "How does the real COP of a system compare with the Carnot limit at different cold reservoir temperatures?",
  },
  variable_control: "T_C",
  magnitud_estrella: "COP_real",
  formula: "COP_real = eta_Carnot * T_C / (T_H - T_C)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "EjemplosPracticosGraphsCoord",
  title: {
    es: "Diagrama COP real vs COP Carnot – T_C",
    en: "Real COP vs Carnot COP – T_C diagram",
  },
  defaultParams: {
    T_H: 308,
    T_C_min: 200,
    T_C_max: 300,
    eta_pct: 50,
  },
  controls: [
    { id: "T_H",     label: { es: "Temperatura foco caliente T_H (K)", en: "Hot reservoir T_H (K)" }, min: 280, max: 400, step: 5 },
    { id: "T_C_min", label: { es: "T_C mínimo (K)",                    en: "T_C minimum (K)" },       min: 100, max: 280, step: 10 },
    { id: "T_C_max", label: { es: "T_C máximo (K)",                    en: "T_C maximum (K)" },       min: 250, max: 380, step: 10 },
    { id: "eta_pct", label: { es: "Fracción de Carnot η (%)",          en: "Carnot fraction η (%)" }, min: 10,  max: 80,  step: 5  },
  ],
  compute: (pNum) => {
    const T_H     = Number.isFinite(pNum.T_H)     ? pNum.T_H     : 308;
    const T_C_min = Number.isFinite(pNum.T_C_min) ? pNum.T_C_min : 200;
    const T_C_max = Number.isFinite(pNum.T_C_max) ? pNum.T_C_max : 300;
    const eta_pct = Number.isFinite(pNum.eta_pct) ? pNum.eta_pct : 50;
    const eta = eta_pct / 100;

    const steps = 40;
    const data  = [];
    for (let i = 0; i <= steps; i++) {
      const T_C = T_C_min + (i / steps) * (T_C_max - T_C_min);
      const diff = T_H - T_C;
      const COP_Carnot = diff > 0 ? T_C / diff : 0;
      const COP_real   = COP_Carnot * eta;
      data.push({ T_C, COP_Carnot, COP_real });
    }

    const T_C_mid  = (T_C_min + T_C_max) / 2;
    const diff_mid = T_H - T_C_mid;
    const cop_carnot_mid = diff_mid > 0 ? T_C_mid / diff_mid : 0;
    const cop_real_mid   = cop_carnot_mid * eta;

    return {
      data,
      extra: {
        interpretationTarget: "COP_real",
        interpretationValue: cop_real_mid,
        graphState: { T_H, T_C_min, T_C_max, eta_pct, T_C_mid, cop_carnot_mid, cop_real_mid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const T_H     = Number.isFinite(pNum.T_H)     ? pNum.T_H     : 308;
    const T_C_min = Number.isFinite(pNum.T_C_min) ? pNum.T_C_min : 200;
    const T_C_max = Number.isFinite(pNum.T_C_max) ? pNum.T_C_max : 300;
    const eta_pct = Number.isFinite(pNum.eta_pct) ? pNum.eta_pct : 50;
    const eta = eta_pct / 100;

    const T_C_mid  = (T_C_min + T_C_max) / 2;
    const diff_mid = T_H - T_C_mid;
    const cop_carnot_mid = diff_mid > 0 ? T_C_mid / diff_mid : 0;
    const cop_real_mid   = cop_carnot_mid * eta;

    const all_cop = data.flatMap((d) => [d.COP_Carnot, d.COP_real]).filter(Number.isFinite);
    const cop_min_val = 0;
    const cop_max_val = Math.min(30, Math.max(...all_cop, 1));

    const W = 320, H = 240;
    const padL = 55, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (tc)  => padL + ((tc - T_C_min) / (Math.max(T_C_max - T_C_min, 1))) * cW;
    const yOf = (cop) => padT + cH - ((cop - cop_min_val) / (Math.max(cop_max_val - cop_min_val, 0.01))) * cH;

    const pathCarnot = data
      .filter((d) => Number.isFinite(d.COP_Carnot))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T_C).toFixed(1)} ${yOf(pt.COP_Carnot).toFixed(1)}`)
      .join(" ");

    const pathReal = data
      .filter((d) => Number.isFinite(d.COP_real))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T_C).toFixed(1)} ${yOf(pt.COP_real).toFixed(1)}`)
      .join(" ");

    const fillArea = data
      .filter((d) => Number.isFinite(d.COP_Carnot) && Number.isFinite(d.COP_real))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T_C).toFixed(1)} ${yOf(pt.COP_Carnot).toFixed(1)}`)
      .join(" ")
      + " " + data
        .filter((d) => Number.isFinite(d.COP_real))
        .reverse()
        .map((pt) => `L ${xOf(pt.T_C).toFixed(1)} ${yOf(pt.COP_real).toFixed(1)}`)
        .join(" ")
      + " Z";

    const fmt = (v, d = 0) => v.toFixed(d);
    const fmtCop = (v) => v.toFixed(2);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("COP real vs Carnot – T_C", "Real COP vs Carnot – T_C")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(`T_H = ${fmt(T_H)} K  ·  η = ${fmt(eta_pct)} %`, `T_H = ${fmt(T_H)} K  ·  η = ${fmt(eta_pct)} %`)}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Diagrama COP real vs Carnot", "Real COP vs Carnot diagram")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#eff6ff" stroke="#93c5fd" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          <path d={fillArea} fill="#fde68a" fillOpacity="0.35" stroke="none" />

          <path d={pathCarnot} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 3" />
          <path d={pathReal}   fill="none" stroke="#2563eb" strokeWidth="2.5" />

          <circle cx={xOf(T_C_mid)} cy={yOf(cop_carnot_mid)} r="4" fill="#94a3b8" />
          <circle cx={xOf(T_C_mid)} cy={yOf(cop_real_mid)}   r="5" fill="#f97316" />

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Temperatura foco frío T_C (K)", "Cold reservoir temperature T_C (K)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("COP", "COP")}
          </text>

          <text x={padL - 4} y={padT + cH}  fontSize="9" fill="#64748b" textAnchor="end">{fmt(cop_min_val)}</text>
          <text x={padL - 4} y={padT + 8}   fontSize="9" fill="#64748b" textAnchor="end">{fmt(cop_max_val)}</text>
          <text x={padL}     y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(T_C_min)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(T_C_max)}</text>

          <text x={xOf(T_C_mid) + 8} y={yOf(cop_real_mid) - 6} fontSize="10" fill="#2563eb">
            {t(`COP real ≈ ${fmtCop(cop_real_mid)}`, `Real COP ≈ ${fmtCop(cop_real_mid)}`)}
          </text>
          <text x={xOf(T_C_mid) + 8} y={yOf(cop_carnot_mid) - 6} fontSize="10" fill="#64748b">
            {t(`COP Carnot ≈ ${fmtCop(cop_carnot_mid)}`, `Carnot COP ≈ ${fmtCop(cop_carnot_mid)}`)}
          </text>

          <text x={padL + cW - 5} y={padT + 14} fontSize="9" fill="#2563eb" textAnchor="end">
            {t("— COP real", "— Real COP")}
          </text>
          <text x={padL + cW - 5} y={padT + 26} fontSize="9" fill="#94a3b8" textAnchor="end">
            {t("--- COP Carnot", "--- Carnot COP")}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `La zona sombreada muestra la brecha entre el COP de Carnot (gris discontinuo) y el COP real (azul). La fracción de Carnot es ${fmt(eta_pct)} %.`,
            `The shaded area shows the gap between the Carnot COP (dashed gray) and the real COP (blue). The Carnot fraction is ${fmt(eta_pct)} %.`
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
