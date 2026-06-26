import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cuánta energía absorbe una sustancia por cada kelvin de aumento de temperatura según su calor específico?",
    en: "How much energy does a substance absorb per kelvin of temperature rise according to its specific heat capacity?",
  },
  variable_control: "DeltaT",
  magnitud_estrella: "c",
  formula: "Q = m * c * DeltaT",
  target_interpretable: true,
};

// Reference specific heat values in J/(kg·K)
const MATERIALS = [
  { label: { es: "Agua (4186)", en: "Water (4186)" }, c: 4186, color: "#0369a1" },
  { label: { es: "Aluminio (897)", en: "Aluminium (897)" }, c: 897, color: "#7c3aed" },
  { label: { es: "Hierro (449)", en: "Iron (449)" }, c: 449, color: "#b45309" },
];

export default createCoordGraphPage({
  displayName: "CalorEspecificoGraphsCoord",
  title: {
    es: "Calor específico — Q frente a ΔT por material",
    en: "Specific heat — Q versus ΔT by material",
  },
  defaultParams: {
    m: 1,
    deltaTmin: 0,
    deltaTmax: 100,
  },
  controls: [
    { id: "m",         label: { es: "m (kg)",     en: "m (kg)" },    min: 0.1, max: 10,  step: 0.1 },
    { id: "deltaTmin", label: { es: "ΔT mín (K)", en: "ΔT min (K)" }, min: 0,  max: 50,  step: 5   },
    { id: "deltaTmax", label: { es: "ΔT máx (K)", en: "ΔT max (K)" }, min: 10, max: 500, step: 10  },
  ],
  compute: (pNum) => {
    const m     = Number.isFinite(pNum.m)         ? pNum.m         : 1;
    const dtMin = Number.isFinite(pNum.deltaTmin) ? pNum.deltaTmin : 0;
    const dtMax = Number.isFinite(pNum.deltaTmax) ? pNum.deltaTmax : 100;

    const steps = 40;
    const series = MATERIALS.map(mat => ({
      ...mat,
      data: Array.from({ length: steps + 1 }, (_, i) => {
        const dT = dtMin + (i / steps) * (dtMax - dtMin);
        return { dT, Q: m * mat.c * dT };
      }),
    }));

    const dTmid = (dtMin + dtMax) / 2;
    const Qmid  = m * MATERIALS[0].c * dTmid;

    return {
      data: series[0].data,
      extra: {
        interpretationTarget: "c",
        interpretationValue: MATERIALS[0].c,
        graphState: { m, dtMin, dtMax, series },
      },
    };
  },
  render: ({ data, pNum, extra, linked, loadFromCalculator }) => {
    const m     = Number.isFinite(pNum.m)         ? pNum.m         : 1;
    const dtMin = Number.isFinite(pNum.deltaTmin) ? pNum.deltaTmin : 0;
    const dtMax = Number.isFinite(pNum.deltaTmax) ? pNum.deltaTmax : 100;

    const Qmax = m * MATERIALS[0].c * dtMax;
    const Qmin = 0;

    const W = 320;
    const H = 240;
    const padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (dT) => padL + ((dT - dtMin) / Math.max(dtMax - dtMin, 0.001)) * cW;
    const yOf = (Q)  => padT + cH - ((Q - Qmin) / Math.max(Qmax - Qmin, 0.001)) * cH;

    const fmtQ = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(2)} MJ` : v >= 1000 ? `${(v / 1000).toFixed(1)} kJ` : `${v.toFixed(0)} J`;
    const fmt  = (v, d = 1) => v.toFixed(d);

    const series = extra?.graphState?.series || MATERIALS.map(mat => ({
      ...mat,
      data: Array.from({ length: 41 }, (_, i) => {
        const dT = dtMin + (i / 40) * (dtMax - dtMin);
        return { dT, Q: m * mat.c * dT };
      }),
    }));

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Calor absorbido por sustancia (m = 1 kg)", "Heat absorbed by substance (m = 1 kg)")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(`m = ${fmt(m)} kg`, `m = ${fmt(m)} kg`)}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Q frente a ΔT para distintos materiales", "Q versus ΔT for different materials")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#fefce8" stroke="#fef08a" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {series.map((mat) => {
            const pathD = mat.data
              .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.dT).toFixed(1)} ${yOf(pt.Q).toFixed(1)}`)
              .join(" ");
            return <path key={mat.c} d={pathD} fill="none" stroke={mat.color} strokeWidth="2" />;
          })}

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("ΔT (K)", "ΔT (K)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Calor Q", "Heat Q")}
          </text>

          <text x={padL - 4} y={padT + cH} fontSize="9" fill="#64748b" textAnchor="end">0</text>
          <text x={padL - 4} y={padT + 8}  fontSize="9" fill="#64748b" textAnchor="end">{fmtQ(Qmax)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(dtMin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(dtMax)}</text>

          {series.map((mat, idx) => (
            <text key={mat.c} x={padL + cW - 4} y={yOf(m * mat.c * dtMax) - 4}
                  fontSize="9" fill={mat.color} textAnchor="end">
              {t(mat.label.es, mat.label.en)}
            </text>
          ))}
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            "Mayor calor específico → mayor pendiente → más energía por kelvin",
            "Higher specific heat → steeper slope → more energy per kelvin"
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
