import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía el rendimiento máximo de Carnot con la temperatura del foco caliente?",
    en: "How does the maximum Carnot efficiency vary with the hot reservoir temperature?",
  },
  variable_control: "T_H",
  magnitud_estrella: "eta_C",
  formula: "eta_C = 1 - T_C / T_H",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "CarnotGraphsCoord",
  title: {
    es: "Diagrama η_C – T_H (ciclo de Carnot)",
    en: "η_C – T_H diagram (Carnot cycle)",
  },
  defaultParams: {
    T_C: 300,
    T_H_min: 350,
    T_H_max: 2000,
  },
  controls: [
    { id: "T_C",     label: { es: "Temperatura foco frío T_C (K)", en: "Cold reservoir T_C (K)" }, min: 200, max: 400, step: 10 },
    { id: "T_H_min", label: { es: "T_H mínimo (K)",               en: "T_H minimum (K)" },        min: 300, max: 600, step: 50 },
    { id: "T_H_max", label: { es: "T_H máximo (K)",               en: "T_H maximum (K)" },        min: 500, max: 3000, step: 100 },
  ],
  compute: (pNum) => {
    const T_C     = Number.isFinite(pNum.T_C)     ? pNum.T_C     : 300;
    const T_H_min = Number.isFinite(pNum.T_H_min) ? pNum.T_H_min : 350;
    const T_H_max = Number.isFinite(pNum.T_H_max) ? pNum.T_H_max : 2000;

    const steps = 40;
    const data  = [];
    for (let i = 0; i <= steps; i++) {
      const T_H = T_H_min + (i / steps) * (T_H_max - T_H_min);
      const eta_C = T_H > T_C ? 1 - T_C / T_H : 0;
      data.push({ T_H, eta_C });
    }

    const T_H_mid = (T_H_min + T_H_max) / 2;
    const eta_mid = T_H_mid > T_C ? 1 - T_C / T_H_mid : 0;

    return {
      data,
      extra: {
        interpretationTarget: "eta_C",
        interpretationValue: eta_mid,
        graphState: { T_C, T_H_min, T_H_max, T_H_mid, eta_mid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const T_C     = Number.isFinite(pNum.T_C)     ? pNum.T_C     : 300;
    const T_H_min = Number.isFinite(pNum.T_H_min) ? pNum.T_H_min : 350;
    const T_H_max = Number.isFinite(pNum.T_H_max) ? pNum.T_H_max : 2000;

    const T_H_mid = (T_H_min + T_H_max) / 2;
    const eta_mid = T_H_mid > T_C ? 1 - T_C / T_H_mid : 0;

    const eta_values = data.map((d) => d.eta_C).filter(Number.isFinite);
    const eta_min_val = Math.max(0, Math.min(...eta_values));
    const eta_max_val = Math.min(1, Math.max(...eta_values));

    const W = 320, H = 240;
    const padL = 55, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (th)  => padL + ((th  - T_H_min)   / (T_H_max   - T_H_min))   * cW;
    const yOf = (eta) => padT + cH - ((eta - eta_min_val) / (Math.max(eta_max_val - eta_min_val, 0.01))) * cH;

    const pathD = data
      .filter((d) => Number.isFinite(d.eta_C))
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T_H).toFixed(1)} ${yOf(pt.eta_C).toFixed(1)}`)
      .join(" ");

    const fmt = (v, d = 0) => v.toFixed(d);
    const pct = (v) => `${(v * 100).toFixed(1)} %`;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama η_C – T_H: ciclo de Carnot", "η_C – T_H diagram: Carnot cycle")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(`T_C = ${fmt(T_C)} K`, `T_C = ${fmt(T_C)} K`)}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Diagrama eta-TH ciclo Carnot", "Carnot cycle eta-TH diagram")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#eff6ff" stroke="#93c5fd" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          <path d={pathD} fill="none" stroke="#2563eb" strokeWidth="2.5" />

          <circle cx={xOf(T_H_mid)} cy={yOf(eta_mid)} r="5" fill="#f97316" />

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Temperatura foco caliente T_H (K)", "Hot reservoir temperature T_H (K)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("η_C", "η_C")}
          </text>

          <text x={padL - 4} y={padT + cH}  fontSize="9" fill="#64748b" textAnchor="end">{pct(eta_min_val)}</text>
          <text x={padL - 4} y={padT + 8}   fontSize="9" fill="#64748b" textAnchor="end">{pct(eta_max_val)}</text>
          <text x={padL}     y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(T_H_min)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(T_H_max)}</text>

          <text x={xOf(T_H_mid) + 8} y={yOf(eta_mid) - 6} fontSize="10" fill="#2563eb">
            {t(`η_C ≈ ${pct(eta_mid)}`, `η_C ≈ ${pct(eta_mid)}`)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `η_C crece con T_H siguiendo una curva hiperbólica que se aproxima asintóticamente a 1`,
            `η_C grows with T_H following a hyperbolic curve that asymptotically approaches 1`
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
