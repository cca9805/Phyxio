import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía el rendimiento térmico del ciclo Otto con la relación de compresión?",
    en: "How does the thermal efficiency of the Otto cycle vary with the compression ratio?",
  },
  variable_control: "r",
  magnitud_estrella: "eta_O",
  formula: "eta_O = 1 - 1 / r^(gamma - 1)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "OttoGraphsCoord",
  title: {
    es: "Diagrama η_O – r (ciclo Otto)",
    en: "η_O – r diagram (Otto cycle)",
  },
  defaultParams: {
    gamma: 1.4,
    r_min: 4,
    r_max: 16,
  },
  controls: [
    { id: "gamma", label: { es: "Índice adiabático γ", en: "Adiabatic index γ" }, min: 1.1, max: 1.67, step: 0.01 },
    { id: "r_min", label: { es: "r mínimo",              en: "r minimum" },         min: 2,   max: 6,    step: 1 },
    { id: "r_max", label: { es: "r máximo",              en: "r maximum" },         min: 10,  max: 30,   step: 1 },
  ],
  compute: (pNum) => {
    const gamma = Number.isFinite(pNum.gamma) ? pNum.gamma : 1.4;
    const r_min = Number.isFinite(pNum.r_min) ? pNum.r_min : 4;
    const r_max = Number.isFinite(pNum.r_max) ? pNum.r_max : 16;

    const steps = 40;
    const data = [];
    for (let i = 0; i <= steps; i++) {
      const r = r_min + (i / steps) * (r_max - r_min);
      if (r <= 1) { data.push({ r, eta_O: 0 }); continue; }
      const eta_O = 1 - 1 / Math.pow(r, gamma - 1);
      data.push({ r, eta_O });
    }

    const r_mid = (r_min + r_max) / 2;
    const eta_mid = r_mid > 1 ? 1 - 1 / Math.pow(r_mid, gamma - 1) : 0;

    return {
      data,
      extra: {
        interpretationTarget: "eta_O",
        interpretationValue: eta_mid,
        graphState: { gamma, r_min, r_max, r_mid, eta_mid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const gamma = Number.isFinite(pNum.gamma) ? pNum.gamma : 1.4;
    const r_min = Number.isFinite(pNum.r_min) ? pNum.r_min : 4;
    const r_max = Number.isFinite(pNum.r_max) ? pNum.r_max : 16;

    const r_mid = (r_min + r_max) / 2;
    const eta_mid = r_mid > 1 ? 1 - 1 / Math.pow(r_mid, gamma - 1) : 0;

    const eta_values = data.map((d) => d.eta_O).filter(Number.isFinite);
    const eta_min_val = Math.max(0, Math.min(...eta_values));
    const eta_max_val = Math.min(1, Math.max(...eta_values));

    const W = 320, H = 240;
    const padL = 55, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (rv)  => padL + ((rv  - r_min)      / (r_max      - r_min))      * cW;
    const yOf = (eta) => padT + cH - ((eta - eta_min_val) / (Math.max(eta_max_val - eta_min_val, 0.01))) * cH;

    const pathD = data
      .filter((d) => Number.isFinite(d.eta_O))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.r).toFixed(1)} ${yOf(pt.eta_O).toFixed(1)}`)
      .join(" ");

    const fmt = (v, d = 2) => v.toFixed(d);
    const pct = (v) => `${(v * 100).toFixed(1)} %`;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama η_O – r: ciclo Otto", "η_O – r diagram: Otto cycle")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(`γ = ${fmt(gamma)}`, `γ = ${fmt(gamma)}`)}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Diagrama eta-r ciclo Otto", "Otto cycle eta-r diagram")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#eff6ff" stroke="#93c5fd" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          <path d={pathD} fill="none" stroke="#2563eb" strokeWidth="2.5" />

          <circle cx={xOf(r_mid)} cy={yOf(eta_mid)} r="5" fill="#f97316" />

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Relación de compresión r", "Compression ratio r")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("η_O", "η_O")}
          </text>

          <text x={padL - 4} y={padT + cH}  fontSize="9" fill="#64748b" textAnchor="end">{pct(eta_min_val)}</text>
          <text x={padL - 4} y={padT + 8}   fontSize="9" fill="#64748b" textAnchor="end">{pct(eta_max_val)}</text>
          <text x={padL}     y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(r_min, 0)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(r_max, 0)}</text>

          <text x={xOf(r_mid) + 8} y={yOf(eta_mid) - 6} fontSize="10" fill="#2563eb">
            {t(`η_O ≈ ${pct(eta_mid)}`, `η_O ≈ ${pct(eta_mid)}`)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `η_O crece con r siguiendo una curva cóncava; solo depende de r y γ`,
            `η_O grows with r following a concave curve; depends only on r and γ`
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
