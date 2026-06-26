import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cuánto se alarga una barra según su temperatura y el coeficiente de dilatación del material?",
    en: "By how much does a rod elongate depending on temperature change and the material expansion coefficient?",
  },
  variable_control: "DeltaT",
  magnitud_estrella: "alpha",
  formula: "DeltaL = alpha * L0 * DeltaT",
  target_interpretable: true,
};

const MATERIALS = [
  { label: { es: "Acero (12·10⁻⁶)", en: "Steel (12·10⁻⁶)" }, alpha: 12e-6, color: "#475569" },
  { label: { es: "Aluminio (23·10⁻⁶)", en: "Aluminium (23·10⁻⁶)" }, alpha: 23e-6, color: "#7c3aed" },
  { label: { es: "Cobre (17·10⁻⁶)", en: "Copper (17·10⁻⁶)" }, alpha: 17e-6, color: "#b45309" },
];

export default createCoordGraphPage({
  displayName: "DilatacionGraphsCoord",
  title: {
    es: "Dilatación lineal — ΔL frente a ΔT",
    en: "Linear expansion — ΔL versus ΔT",
  },
  defaultParams: { L0: 1, deltaTmin: 0, deltaTmax: 100 },
  controls: [
    { id: "L0",       label: { es: "L₀ (m)",      en: "L₀ (m)" },      min: 0.1, max: 10,  step: 0.1 },
    { id: "deltaTmin",label: { es: "ΔT mín (K)",  en: "ΔT min (K)" },  min: 0,   max: 50,  step: 5   },
    { id: "deltaTmax",label: { es: "ΔT máx (K)",  en: "ΔT max (K)" },  min: 10,  max: 500, step: 10  },
  ],
  compute: (pNum) => {
    const L0    = Number.isFinite(pNum.L0)        ? pNum.L0        : 1;
    const dtMin = Number.isFinite(pNum.deltaTmin) ? pNum.deltaTmin : 0;
    const dtMax = Number.isFinite(pNum.deltaTmax) ? pNum.deltaTmax : 100;
    const steps = 40;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const dT = dtMin + (i / steps) * (dtMax - dtMin);
      return { dT, dL: MATERIALS[1].alpha * L0 * dT };
    });
    return { data, extra: { interpretationTarget: "alpha", interpretationValue: MATERIALS[1].alpha, graphState: { L0, dtMin, dtMax } } };
  },
  render: ({ pNum, linked, loadFromCalculator }) => {
    const L0    = Number.isFinite(pNum.L0)        ? pNum.L0        : 1;
    const dtMin = Number.isFinite(pNum.deltaTmin) ? pNum.deltaTmin : 0;
    const dtMax = Number.isFinite(pNum.deltaTmax) ? pNum.deltaTmax : 100;
    const steps = 40;

    const series = MATERIALS.map(m => ({
      ...m,
      data: Array.from({ length: steps + 1 }, (_, i) => {
        const dT = dtMin + (i / steps) * (dtMax - dtMin);
        return { dT, dL: m.alpha * L0 * dT };
      }),
    }));

    const dLmax = MATERIALS[1].alpha * L0 * dtMax;
    const W = 320, H = 240;
    const padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR, cH = H - padT - padB;

    const xOf = (dT) => padL + ((dT - dtMin) / Math.max(dtMax - dtMin, 0.001)) * cW;
    const yOf = (dL) => padT + cH - (dL / Math.max(dLmax * 1.05, 1e-12)) * cH;
    const fmtL = (v) => v < 0.001 ? `${(v * 1000).toFixed(2)} mm` : `${v.toFixed(4)} m`;
    const fmt  = (v, d = 0) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("Dilatación lineal ΔL = α·L₀·ΔT", "Linear expansion ΔL = α·L₀·ΔT")}</div>
        <div className="muted" style={{ fontSize: 12 }}>{t(`L₀ = ${L0} m`, `L₀ = ${L0} m`)}</div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f0fdf4" stroke="#bbf7d0" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          {series.map(m => (
            <path key={m.alpha} d={m.data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.dT).toFixed(1)} ${yOf(pt.dL).toFixed(1)}`).join(" ")}
                  fill="none" stroke={m.color} strokeWidth="2" />
          ))}
          {series.map(m => (
            <text key={m.alpha} x={padL + cW - 4} y={yOf(m.alpha * L0 * dtMax) - 3} fontSize="8" fill={m.color} textAnchor="end">
              {t(m.label.es, m.label.en)}
            </text>
          ))}
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">{t("ΔT (K)", "ΔT (K)")}</text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle" transform={`rotate(-90,10,${padT + cH / 2})`}>{t("ΔL (m)", "ΔL (m)")}</text>
          <text x={padL - 4} y={padT + 8} fontSize="8" fill="#64748b" textAnchor="end">{fmtL(dLmax)}</text>
          <text x={padL} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(dtMin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(dtMax)}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>{t("Mayor α → mayor alargamiento por kelvin", "Higher α → greater elongation per kelvin")}</div>
        {!linked && <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>{t("Cargar desde calculadora", "Load from calculator")}</button>}
      </div>
    );
  },
});
