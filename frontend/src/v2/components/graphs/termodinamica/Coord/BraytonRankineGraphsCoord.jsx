import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía el rendimiento térmico del ciclo Brayton con la relación de presiones?",
    en: "How does the thermal efficiency of the Brayton cycle vary with the pressure ratio?",
  },
  variable_control: "r_p",
  magnitud_estrella: "eta_th",
  formula: "eta_th = 1 - r_p^((1-gamma)/gamma)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "BraytonRankineGraphsCoord",
  title: {
    es: "Diagrama η_th – r_p (ciclo Brayton)",
    en: "η_th – r_p diagram (Brayton cycle)",
  },
  defaultParams: {
    gamma: 1.4,
    r_p_min: 1,
    r_p_max: 40,
  },
  controls: [
    { id: "gamma",    label: { es: "Índice adiabático γ", en: "Adiabatic index γ" }, min: 1.1, max: 1.67, step: 0.01 },
    { id: "r_p_min", label: { es: "r_p mínimo",          en: "r_p minimum" },        min: 1,   max: 10,   step: 1 },
    { id: "r_p_max", label: { es: "r_p máximo",          en: "r_p maximum" },        min: 5,   max: 100,  step: 5 },
  ],
  compute: (pNum) => {
    const gamma   = Number.isFinite(pNum.gamma)   ? pNum.gamma   : 1.4;
    const r_p_min = Number.isFinite(pNum.r_p_min) ? pNum.r_p_min : 1;
    const r_p_max = Number.isFinite(pNum.r_p_max) ? pNum.r_p_max : 40;

    const exp = (1 - gamma) / gamma;
    const steps = 40;
    const data  = [];
    for (let i = 0; i <= steps; i++) {
      const r_p  = r_p_min + (i / steps) * (r_p_max - r_p_min);
      if (r_p <= 1) { data.push({ r_p, eta_th: 0 }); continue; }
      const eta_th = 1 - Math.pow(r_p, exp);
      data.push({ r_p, eta_th });
    }

    const r_p_mid  = (r_p_min + r_p_max) / 2;
    const eta_mid  = r_p_mid > 1 ? 1 - Math.pow(r_p_mid, exp) : 0;

    return {
      data,
      extra: {
        interpretationTarget: "eta_th",
        interpretationValue: eta_mid,
        graphState: { gamma, r_p_min, r_p_max, r_p_mid, eta_mid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const gamma   = Number.isFinite(pNum.gamma)   ? pNum.gamma   : 1.4;
    const r_p_min = Number.isFinite(pNum.r_p_min) ? pNum.r_p_min : 1;
    const r_p_max = Number.isFinite(pNum.r_p_max) ? pNum.r_p_max : 40;

    const exp = (1 - gamma) / gamma;
    const r_p_mid = (r_p_min + r_p_max) / 2;
    const eta_mid = r_p_mid > 1 ? 1 - Math.pow(r_p_mid, exp) : 0;

    const eta_values = data.map((d) => d.eta_th).filter(Number.isFinite);
    const eta_min_val = Math.max(0, Math.min(...eta_values));
    const eta_max_val = Math.min(1, Math.max(...eta_values));

    const W = 320, H = 240;
    const padL = 55, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (r)   => padL + ((r   - r_p_min)   / (r_p_max   - r_p_min))   * cW;
    const yOf = (eta) => padT + cH - ((eta - eta_min_val) / (Math.max(eta_max_val - eta_min_val, 0.01))) * cH;

    const pathD = data
      .filter((d) => Number.isFinite(d.eta_th))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.r_p).toFixed(1)} ${yOf(pt.eta_th).toFixed(1)}`)
      .join(" ");

    const fmt = (v, d = 2) => v.toFixed(d);
    const pct = (v) => `${(v * 100).toFixed(1)} %`;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama η_th – r_p: ciclo Brayton", "η_th – r_p diagram: Brayton cycle")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(`γ = ${fmt(gamma)}`, `γ = ${fmt(gamma)}`)}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Diagrama eta-rp ciclo Brayton", "Brayton cycle eta-rp diagram")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#eff6ff" stroke="#93c5fd" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          <path d={pathD} fill="none" stroke="#2563eb" strokeWidth="2.5" />

          <circle cx={xOf(r_p_mid)} cy={yOf(eta_mid)} r="5" fill="#f97316" />

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Relación de presiones r_p", "Pressure ratio r_p")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("η_th", "η_th")}
          </text>

          <text x={padL - 4} y={padT + cH}  fontSize="9" fill="#64748b" textAnchor="end">{pct(eta_min_val)}</text>
          <text x={padL - 4} y={padT + 8}   fontSize="9" fill="#64748b" textAnchor="end">{pct(eta_max_val)}</text>
          <text x={padL}     y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(r_p_min, 0)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(r_p_max, 0)}</text>

          <text x={xOf(r_p_mid) + 8} y={yOf(eta_mid) - 6} fontSize="10" fill="#2563eb">
            {t(`η ≈ ${pct(eta_mid)}`, `η ≈ ${pct(eta_mid)}`)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `η_th crece con r_p siguiendo una ley de potencia sublineal`,
            `η_th grows with r_p following a sub-linear power law`
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
