import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Qué cantidad de calor fluye espontáneamente desde el foco caliente al foco frío según la diferencia de temperatura?",
    en: "How much heat flows spontaneously from the hot to the cold reservoir according to the temperature difference?",
  },
  variable_control: "DeltaT",
  magnitud_estrella: "Q",
  formula: "Q_flujo ∝ DeltaT (direccion Th → Tc)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "FormulacionDeClauisiusGraphsCoord",
  title: { es: "Clausius — flujo de calor y diferencia de temperatura", en: "Clausius — heat flow and temperature difference" },
  defaultParams: { k: 10, Tcold: 300, dTmin: 0, dTmax: 300 },
  controls: [
    { id: "k",     label: { es: "k (W/K)",     en: "k (W/K)" },    min: 1,  max: 100, step: 1  },
    { id: "Tcold", label: { es: "T fría (K)",   en: "T cold (K)" }, min: 200, max: 500, step: 10 },
    { id: "dTmax", label: { es: "ΔT máx (K)",  en: "ΔT max (K)" }, min: 10,  max: 1000, step: 10 },
  ],
  compute: (p) => {
    const k    = Number.isFinite(p.k)    ? p.k    : 10;
    const dTmax = Number.isFinite(p.dTmax) ? p.dTmax : 300;
    const steps = 40;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const dT = (i / steps) * dTmax;
      return { dT, Q: k * dT };
    });
    return { data, extra: { interpretationTarget: "Q", interpretationValue: k * dTmax / 2 } };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const k     = Number.isFinite(pNum.k)     ? pNum.k     : 10;
    const Tcold = Number.isFinite(pNum.Tcold) ? pNum.Tcold : 300;
    const dTmax = Number.isFinite(pNum.dTmax) ? pNum.dTmax : 300;

    const Qmax = k * dTmax;
    const W = 320, H = 240, padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR, cH = H - padT - padB;
    const xOf = (dT) => padL + (dT / Math.max(dTmax, 1)) * cW;
    const yOf = (Q)  => padT + cH - (Q / Math.max(Qmax, 1e-10)) * cH;
    const pathD = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.dT).toFixed(1)} ${yOf(pt.Q).toFixed(1)}`).join(" ");
    const fmt = (v, d = 0) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("Calor desde foco caliente al frío (Q ∝ ΔT)", "Heat from hot to cold reservoir (Q ∝ ΔT)")}</div>
        <div className="muted" style={{ fontSize: 12 }}>{t(`T_fría = ${Tcold} K · k = ${k} W/K`, `T_cold = ${Tcold} K · k = ${k} W/K`)}</div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#fef2f2" stroke="#fecaca" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <path d={pathD} fill="none" stroke="#dc2626" strokeWidth="2.5" />
          <circle cx={xOf(0)} cy={yOf(0)} r="5" fill="#475569" />
          <text x={xOf(0) + 8} y={yOf(0) - 5} fontSize="9" fill="#475569">{t("ΔT=0 → Q=0", "ΔT=0 → Q=0")}</text>
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">{t("Th − Tc = ΔT (K)", "Th − Tc = ΔT (K)")}</text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle" transform={`rotate(-90,10,${padT + cH / 2})`}>{t("Q (W)", "Q (W)")}</text>
          <text x={padL - 4} y={padT + 8}  fontSize="8" fill="#64748b" textAnchor="end">{fmt(Qmax)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">0</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(dTmax)}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>{t("El calor solo fluye espontáneamente de caliente a frío (Clausius)", "Heat only flows spontaneously from hot to cold (Clausius)")}</div>
        {!linked && <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>{t("Cargar desde calculadora", "Load from calculator")}</button>}
      </div>
    );
  },
});
