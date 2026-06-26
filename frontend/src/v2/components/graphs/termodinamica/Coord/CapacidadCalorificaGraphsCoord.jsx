import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo depende la energía absorbida por un cuerpo de su capacidad calorífica y del cambio de temperatura?",
    en: "How does the energy absorbed by a body depend on its heat capacity and temperature change?",
  },
  variable_control: "DeltaT",
  magnitud_estrella: "C",
  formula: "Q = C * DeltaT",
  target_interpretable: true,
};

const BODIES = [
  { label: { es: "C = 5000 J/K", en: "C = 5000 J/K" }, C: 5000, color: "#0369a1" },
  { label: { es: "C = 2000 J/K", en: "C = 2000 J/K" }, C: 2000, color: "#7c3aed" },
  { label: { es: "C = 500 J/K",  en: "C = 500 J/K"  }, C: 500,  color: "#b45309" },
];

export default createCoordGraphPage({
  displayName: "CapacidadCalorificaGraphsCoord",
  title: {
    es: "Capacidad calorífica — Q frente a ΔT",
    en: "Heat capacity — Q versus ΔT",
  },
  defaultParams: { deltaTmin: 0, deltaTmax: 50 },
  controls: [
    { id: "deltaTmin", label: { es: "ΔT mín (K)", en: "ΔT min (K)" }, min: 0,  max: 20, step: 5  },
    { id: "deltaTmax", label: { es: "ΔT máx (K)", en: "ΔT max (K)" }, min: 10, max: 200, step: 10 },
  ],
  compute: (pNum) => {
    const dtMin = Number.isFinite(pNum.deltaTmin) ? pNum.deltaTmin : 0;
    const dtMax = Number.isFinite(pNum.deltaTmax) ? pNum.deltaTmax : 50;
    const steps = 40;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const dT = dtMin + (i / steps) * (dtMax - dtMin);
      return { dT, Q: BODIES[0].C * dT };
    });
    return { data, extra: { interpretationTarget: "C", interpretationValue: BODIES[0].C, graphState: { dtMin, dtMax } } };
  },
  render: ({ pNum, linked, loadFromCalculator }) => {
    const dtMin = Number.isFinite(pNum.deltaTmin) ? pNum.deltaTmin : 0;
    const dtMax = Number.isFinite(pNum.deltaTmax) ? pNum.deltaTmax : 50;
    const steps = 40;

    const series = BODIES.map(b => ({
      ...b,
      data: Array.from({ length: steps + 1 }, (_, i) => {
        const dT = dtMin + (i / steps) * (dtMax - dtMin);
        return { dT, Q: b.C * dT };
      }),
    }));

    const Qmax = BODIES[0].C * dtMax;
    const W = 320, H = 240;
    const padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR, cH = H - padT - padB;

    const xOf = (dT) => padL + ((dT - dtMin) / Math.max(dtMax - dtMin, 0.001)) * cW;
    const yOf = (Q)  => padT + cH - (Q / Math.max(Qmax, 1)) * cH;
    const fmtQ = (v) => v >= 1000 ? `${(v / 1000).toFixed(0)} kJ` : `${v.toFixed(0)} J`;
    const fmt  = (v, d = 1) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("Energía absorbida Q = C·ΔT", "Energy absorbed Q = C·ΔT")}</div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f0f9ff" stroke="#bae6fd" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          {series.map(b => (
            <path key={b.C} d={b.data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.dT).toFixed(1)} ${yOf(pt.Q).toFixed(1)}`).join(" ")}
                  fill="none" stroke={b.color} strokeWidth="2" />
          ))}
          {series.map(b => (
            <text key={b.C} x={padL + cW - 4} y={yOf(b.C * dtMax) - 3} fontSize="8" fill={b.color} textAnchor="end">
              {t(b.label.es, b.label.en)}
            </text>
          ))}
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">{t("ΔT (K)", "ΔT (K)")}</text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle" transform={`rotate(-90,12,${padT + cH / 2})`}>{t("Q (J)", "Q (J)")}</text>
          <text x={padL - 4} y={padT + 8} fontSize="9" fill="#64748b" textAnchor="end">{fmtQ(Qmax)}</text>
          <text x={padL - 4} y={padT + cH} fontSize="9" fill="#64748b" textAnchor="end">0</text>
          <text x={padL} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(dtMin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(dtMax)}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>{t("Mayor C → mayor pendiente → más energía por kelvin", "Higher C → steeper slope → more energy per kelvin")}</div>
        {!linked && <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>{t("Cargar desde calculadora", "Load from calculator")}</button>}
      </div>
    );
  },
});
