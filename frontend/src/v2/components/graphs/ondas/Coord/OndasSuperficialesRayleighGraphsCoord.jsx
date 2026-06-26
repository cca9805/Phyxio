import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Por que las ondas de Rayleigh se propagan mas lento que las ondas de cuerpo y por que su amplitud decae exponencialmente con la profundidad?",
    en: "Why do Rayleigh waves travel slower than body waves and why does their amplitude decay exponentially with depth?",
  },
  variable_control: "nuPoisson",
  magnitud_estrella: "v_R",
  formula: "v_R = v_s * (0.862 + 1.14*nu) / (1 + nu)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "OndasSuperficialesRayleighGraphsCoord",
  title: {
    es: "Velocidad de Rayleigh vs Poisson",
    en: "Rayleigh velocity vs Poisson ratio",
  },
  defaultParams: {
    vS: 3000,
    nuPoisson: 0.25,
  },
  controls: [
    { id: "vS", label: { es: "v_s m/s", en: "v_s m/s" }, min: 100, max: 5000, step: 100 },
    { id: "nuPoisson", label: { es: "nu Poisson", en: "nu Poisson" }, min: 0.0, max: 0.49, step: 0.01 },
  ],
  compute: (pNum) => {
    const vS = Number.isFinite(pNum.vS) ? pNum.vS : 3000;
    const nuInput = Number.isFinite(pNum.nuPoisson) ? pNum.nuPoisson : 0.25;
    const data = Array.from({ length: 50 }, (_, i) => {
      const nu = i / 49 * 0.49;
      const eta = (0.862 + 1.14 * nu) / (1 + nu);
      return {
        x: nu,
        y: eta,
        vR: eta * vS,
      };
    });
    const etaCurrent = (0.862 + 1.14 * nuInput) / (1 + nuInput);
    return {
      data,
      extra: {
        interpretationTarget: "v_R",
        interpretationValue: etaCurrent * vS,
        graphState: { vS, nuPoisson: nuInput },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    const nuInput = Number.isFinite(pNum.nuPoisson) ? pNum.nuPoisson : 0.25;
    const width = 720;
    const height = 320;
    const left = 58;
    const top = 24;
    const plotW = 604;
    const plotH = 230;
    const xOf = (x) => left + (x / 0.5) * plotW;
    const yOf = (y) => top + plotH - ((y - 0.85) / 0.15) * plotH;
    const path = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.y)}`).join(" ");
    const etaCurrent = (0.862 + 1.14 * nuInput) / (1 + nuInput);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("v_R / v_s vs coeficiente de Poisson", "v_R / v_s vs Poisson ratio")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={t("Curva eta vs nu", "eta vs nu curve")}>
          <line x1={left} y1={top + plotH} x2={left + plotW} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={top} x2={left} y2={top + plotH} stroke="#64748b" />
          <path d={path} fill="none" stroke="#2563eb" strokeWidth="3" />
          <circle cx={xOf(nuInput)} cy={yOf(etaCurrent)} r="6" fill="#f97316" />
          <text x={left + plotW / 2} y="302" textAnchor="middle" fontSize="12" fill="#475569">
            nu_poisson
          </text>
          <text x="18" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + plotH / 2})`}>
            eta_R
          </text>
          <text x={left + plotW - 60} y={top + 16} fontSize="11" fill="#64748b">
            {t("rango 0.87–0.96", "range 0.87–0.96")}
          </text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Lectura", "Reading")}: <strong>{t("v_R/v_s crece monotonamente con nu", "v_R/v_s increases monotonically with nu")}</strong>
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


