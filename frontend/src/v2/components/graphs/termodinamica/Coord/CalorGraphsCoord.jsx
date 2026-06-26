import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cuánta energía se transfiere como calor cuando la temperatura de un cuerpo cambia?",
    en: "How much energy is transferred as heat when the temperature of a body changes?",
  },
  variable_control: "DeltaT",
  magnitud_estrella: "Q",
  formula: "Q = m * c * DeltaT",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "CalorGraphsCoord",
  title: {
    es: "Calor sensible — Q frente a ΔT",
    en: "Sensible heat — Q versus ΔT",
  },
  defaultParams: {
    m: 1,
    c: 4186,
    deltaTmin: 0,
    deltaTmax: 100,
  },
  controls: [
    { id: "m",         label: { es: "m (kg)",       en: "m (kg)" },       min: 0.1, max: 10,   step: 0.1   },
    { id: "c",         label: { es: "c (J/kg·K)",   en: "c (J/kg·K)" },   min: 100, max: 5000, step: 100   },
    { id: "deltaTmin", label: { es: "ΔT mín (K)",   en: "ΔT min (K)" },   min: 0,   max: 50,   step: 5     },
    { id: "deltaTmax", label: { es: "ΔT máx (K)",   en: "ΔT max (K)" },   min: 10,  max: 500,  step: 10    },
  ],
  compute: (pNum) => {
    const m        = Number.isFinite(pNum.m)         ? pNum.m         : 1;
    const c        = Number.isFinite(pNum.c)         ? pNum.c         : 4186;
    const dtMin    = Number.isFinite(pNum.deltaTmin) ? pNum.deltaTmin : 0;
    const dtMax    = Number.isFinite(pNum.deltaTmax) ? pNum.deltaTmax : 100;

    const steps = 40;
    const data = [];
    for (let i = 0; i <= steps; i++) {
      const dT = dtMin + (i / steps) * (dtMax - dtMin);
      const Q  = m * c * dT;
      data.push({ dT, Q });
    }

    const dTmid = (dtMin + dtMax) / 2;
    const Qmid  = m * c * dTmid;

    return {
      data,
      extra: {
        interpretationTarget: "Q",
        interpretationValue: Qmid,
        graphState: { m, c, dtMin, dtMax, dTmid, Qmid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const m     = Number.isFinite(pNum.m)         ? pNum.m         : 1;
    const c     = Number.isFinite(pNum.c)         ? pNum.c         : 4186;
    const dtMin = Number.isFinite(pNum.deltaTmin) ? pNum.deltaTmin : 0;
    const dtMax = Number.isFinite(pNum.deltaTmax) ? pNum.deltaTmax : 100;

    const Qmin  = m * c * dtMin;
    const Qmax  = m * c * dtMax;
    const dTmid = (dtMin + dtMax) / 2;
    const Qmid  = m * c * dTmid;

    const W = 320;
    const H = 240;
    const padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (dT) => padL + ((dT - dtMin) / Math.max(dtMax - dtMin, 0.001)) * cW;
    const yOf = (Q)  => padT + cH - ((Q - Qmin) / Math.max(Qmax - Qmin, 0.001)) * cH;

    const pathD = data
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.dT).toFixed(1)} ${yOf(pt.Q).toFixed(1)}`)
      .join(" ");

    const fmtQ = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(2)} MJ` : v >= 1000 ? `${(v / 1000).toFixed(1)} kJ` : `${v.toFixed(0)} J`;
    const fmt  = (v, d = 1) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Calor sensible Q = m·c·ΔT", "Sensible heat Q = m·c·ΔT")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `m = ${fmt(m)} kg,  c = ${fmt(c, 0)} J/(kg·K)`,
            `m = ${fmt(m)} kg,  c = ${fmt(c, 0)} J/(kg·K)`
          )}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Calor frente a variación de temperatura", "Heat versus temperature change")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#fff7ed" stroke="#fed7aa" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <path d={pathD} fill="none" stroke="#ea580c" strokeWidth="2.5" />
          <circle cx={xOf(dTmid)} cy={yOf(Qmid)} r="5" fill="#0369a1" />

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("ΔT (K)", "ΔT (K)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Calor Q", "Heat Q")}
          </text>

          <text x={padL - 4} y={padT + cH} fontSize="9" fill="#64748b" textAnchor="end">{fmtQ(Qmin)}</text>
          <text x={padL - 4} y={padT + 8}  fontSize="9" fill="#64748b" textAnchor="end">{fmtQ(Qmax)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(dtMin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(dtMax)}</text>

          <text x={xOf(dTmid) + 8} y={yOf(Qmid) - 6} fontSize="10" fill="#ea580c">
            {fmtQ(Qmid)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `Q proporcional a ΔT: la recta pasa por el origen (calor sensible)`,
            `Q proportional to ΔT: line through the origin (sensible heat)`
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
