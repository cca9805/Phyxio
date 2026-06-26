import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía el COP de refrigeración y de bomba de calor con la temperatura del foco frío?",
    en: "How do the refrigeration and heat pump COPs vary with the cold reservoir temperature?",
  },
  variable_control: "T_C",
  magnitud_estrella: "COP_ref",
  formula: "COP_ref = T_C / (T_H - T_C)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "CoeficienteDeRendimientoGraphsCoord",
  title: {
    es: "Diagrama COP – T_C (Carnot)",
    en: "COP – T_C diagram (Carnot)",
  },
  defaultParams: {
    T_H: 308,
    T_C_min: 200,
    T_C_max: 300,
  },
  controls: [
    { id: "T_H",     label: { es: "Temperatura foco caliente T_H (K)", en: "Hot reservoir T_H (K)" }, min: 280, max: 400, step: 5 },
    { id: "T_C_min", label: { es: "T_C mínimo (K)",                    en: "T_C minimum (K)" },       min: 100, max: 280, step: 10 },
    { id: "T_C_max", label: { es: "T_C máximo (K)",                    en: "T_C maximum (K)" },       min: 250, max: 380, step: 10 },
  ],
  compute: (pNum) => {
    const T_H     = Number.isFinite(pNum.T_H)     ? pNum.T_H     : 308;
    const T_C_min = Number.isFinite(pNum.T_C_min) ? pNum.T_C_min : 200;
    const T_C_max = Number.isFinite(pNum.T_C_max) ? pNum.T_C_max : 300;

    const steps = 40;
    const data  = [];
    for (let i = 0; i <= steps; i++) {
      const T_C = T_C_min + (i / steps) * (T_C_max - T_C_min);
      const diff = T_H - T_C;
      const COP_ref = diff > 0 ? T_C / diff : 0;
      const COP_bc  = diff > 0 ? T_H / diff : 0;
      data.push({ T_C, COP_ref, COP_bc });
    }

    const T_C_mid  = (T_C_min + T_C_max) / 2;
    const diff_mid = T_H - T_C_mid;
    const cop_mid  = diff_mid > 0 ? T_C_mid / diff_mid : 0;

    return {
      data,
      extra: {
        interpretationTarget: "COP_ref",
        interpretationValue: cop_mid,
        graphState: { T_H, T_C_min, T_C_max, T_C_mid, cop_mid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const T_H     = Number.isFinite(pNum.T_H)     ? pNum.T_H     : 308;
    const T_C_min = Number.isFinite(pNum.T_C_min) ? pNum.T_C_min : 200;
    const T_C_max = Number.isFinite(pNum.T_C_max) ? pNum.T_C_max : 300;

    const T_C_mid  = (T_C_min + T_C_max) / 2;
    const diff_mid = T_H - T_C_mid;
    const cop_ref_mid = diff_mid > 0 ? T_C_mid / diff_mid : 0;
    const cop_bc_mid  = diff_mid > 0 ? T_H / diff_mid : 0;

    const all_cop = data.flatMap((d) => [d.COP_ref, d.COP_bc]).filter(Number.isFinite);
    const cop_min_val = 0;
    const cop_max_val = Math.min(30, Math.max(...all_cop, 1));

    const W = 320, H = 240;
    const padL = 55, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (tc)  => padL + ((tc - T_C_min) / (Math.max(T_C_max - T_C_min, 1))) * cW;
    const yOf = (cop) => padT + cH - ((cop - cop_min_val) / (Math.max(cop_max_val - cop_min_val, 0.01))) * cH;

    const pathRef = data
      .filter((d) => Number.isFinite(d.COP_ref))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T_C).toFixed(1)} ${yOf(pt.COP_ref).toFixed(1)}`)
      .join(" ");

    const pathBc = data
      .filter((d) => Number.isFinite(d.COP_bc))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T_C).toFixed(1)} ${yOf(pt.COP_bc).toFixed(1)}`)
      .join(" ");

    const fmt = (v, d = 0) => v.toFixed(d);
    const fmtCop = (v) => v.toFixed(2);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama COP – T_C: Carnot", "COP – T_C diagram: Carnot")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(`T_H = ${fmt(T_H)} K`, `T_H = ${fmt(T_H)} K`)}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Diagrama COP vs T_C Carnot", "Carnot COP vs T_C diagram")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#eff6ff" stroke="#93c5fd" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          <path d={pathRef} fill="none" stroke="#2563eb" strokeWidth="2.5" />
          <path d={pathBc}  fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 3" />

          <circle cx={xOf(T_C_mid)} cy={yOf(cop_ref_mid)} r="5" fill="#f97316" />
          <circle cx={xOf(T_C_mid)} cy={yOf(cop_bc_mid)}  r="4" fill="#dc2626" />

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

          <text x={xOf(T_C_mid) + 8} y={yOf(cop_ref_mid) - 6} fontSize="10" fill="#2563eb">
            {t(`COP_ref ≈ ${fmtCop(cop_ref_mid)}`, `COP_ref ≈ ${fmtCop(cop_ref_mid)}`)}
          </text>
          <text x={xOf(T_C_mid) + 8} y={yOf(cop_bc_mid) - 6} fontSize="10" fill="#dc2626">
            {t(`COP_bc ≈ ${fmtCop(cop_bc_mid)}`, `COP_bc ≈ ${fmtCop(cop_bc_mid)}`)}
          </text>

          <text x={padL + cW - 5} y={padT + 14} fontSize="9" fill="#2563eb" textAnchor="end">
            {t("— COP ref", "— COP ref")}
          </text>
          <text x={padL + cW - 5} y={padT + 26} fontSize="9" fill="#dc2626" textAnchor="end">
            {t("--- COP bc", "--- COP hp")}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `COP de refrigeración (azul) y bomba de calor (rojo discontinuo) crecen al acercar T_C a T_H; separación vertical constante de 1`,
            `Refrigeration COP (blue) and heat pump COP (dashed red) grow as T_C approaches T_H; constant vertical separation of 1`
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
