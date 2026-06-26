import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la entropía cuando un sistema intercambia calor en procesos reversibles a distintas temperaturas?",
    en: "How does entropy change when a system exchanges heat in reversible processes at different temperatures?",
  },
  variable_control: "Q",
  magnitud_estrella: "DeltaS",
  formula: "DeltaS = Q / T",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "DefinicionEntropiaGraphsCoord",
  title: { es: "Definición de entropía — ΔS = Q/T", en: "Entropy definition — ΔS = Q/T" },
  defaultParams: { Tmin: 200, Tmax: 600, Q: 1000 },
  controls: [
    { id: "Tmin", label: { es: "T mín (K)", en: "T min (K)" }, min: 100, max: 400, step: 10 },
    { id: "Tmax", label: { es: "T máx (K)", en: "T max (K)" }, min: 300, max: 1000, step: 10 },
    { id: "Q",    label: { es: "Q (J)",      en: "Q (J)" },     min: 100, max: 10000, step: 100 },
  ],
  compute: (p) => {
    const Tmin = Number.isFinite(p.Tmin) ? p.Tmin : 200;
    const Tmax = Number.isFinite(p.Tmax) ? p.Tmax : 600;
    const Q    = Number.isFinite(p.Q)    ? p.Q    : 1000;
    const steps = 40;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const T = Tmin + (i / steps) * (Tmax - Tmin);
      return { T, DS: Q / T };
    });
    return { data, extra: { interpretationTarget: "DeltaS", interpretationValue: Q / ((Tmin + Tmax) / 2) } };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const Tmin = Number.isFinite(pNum.Tmin) ? pNum.Tmin : 200;
    const Tmax = Number.isFinite(pNum.Tmax) ? pNum.Tmax : 600;
    const Q    = Number.isFinite(pNum.Q)    ? pNum.Q    : 1000;

    const DSmax = Q / Tmin, DSmin = Q / Tmax;
    const W = 320, H = 240, padL = 58, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR, cH = H - padT - padB;
    const xOf = (T)  => padL + ((T - Tmin) / Math.max(Tmax - Tmin, 1)) * cW;
    const yOf = (DS) => padT + cH - ((DS - DSmin) / Math.max(DSmax - DSmin, 1e-10)) * cH;
    const pathD = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T).toFixed(1)} ${yOf(pt.DS).toFixed(1)}`).join(" ");
    const fmt = (v, d = 1) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("Entropía ΔS = Q/T frente a T", "Entropy ΔS = Q/T versus T")}</div>
        <div className="muted" style={{ fontSize: 12 }}>{t(`Q fijo = ${Q} J`, `Fixed Q = ${Q} J`)}</div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f5f3ff" stroke="#ddd6fe" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <path d={pathD} fill="none" stroke="#7c3aed" strokeWidth="2.5" />
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">{t("T (K)", "T (K)")}</text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle" transform={`rotate(-90,10,${padT + cH / 2})`}>{t("ΔS (J/K)", "ΔS (J/K)")}</text>
          <text x={padL - 4} y={padT + 8}  fontSize="8" fill="#64748b" textAnchor="end">{fmt(DSmax, 2)}</text>
          <text x={padL - 4} y={padT + cH} fontSize="8" fill="#64748b" textAnchor="end">{fmt(DSmin, 2)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tmin, 0)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tmax, 0)}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>{t("A mayor T, menor ΔS para el mismo calor intercambiado", "Higher T → smaller ΔS for the same heat exchanged")}</div>
        {!linked && <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>{t("Cargar desde calculadora", "Load from calculator")}</button>}
      </div>
    );
  },
});
