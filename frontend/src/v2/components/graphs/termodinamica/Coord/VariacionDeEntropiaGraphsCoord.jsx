import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la entropía del sistema en procesos termodinámicos isotérmicos según el calor intercambiado?",
    en: "How does the system entropy change in isothermal thermodynamic processes according to the exchanged heat?",
  },
  variable_control: "Q",
  magnitud_estrella: "DeltaS",
  formula: "DeltaS = Q / T",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "VariacionDeEntropiaGraphsCoord",
  title: { es: "Variación de entropía ΔS = Q/T", en: "Entropy change ΔS = Q/T" },
  defaultParams: { T: 300, Qmin: -2000, Qmax: 2000 },
  controls: [
    { id: "T",    label: { es: "T (K)",      en: "T (K)" },      min: 100, max: 1000, step: 10   },
    { id: "Qmin", label: { es: "Q mín (J)",  en: "Q min (J)" },  min: -5000, max: 0, step: 100  },
    { id: "Qmax", label: { es: "Q máx (J)",  en: "Q max (J)" },  min: 0, max: 5000,  step: 100  },
  ],
  compute: (p) => {
    const T    = Number.isFinite(p.T)    ? p.T    : 300;
    const Qmin = Number.isFinite(p.Qmin) ? p.Qmin : -2000;
    const Qmax = Number.isFinite(p.Qmax) ? p.Qmax : 2000;
    const steps = 40;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const Q = Qmin + (i / steps) * (Qmax - Qmin);
      return { Q, DS: Q / T };
    });
    return { data, extra: { interpretationTarget: "DeltaS", interpretationValue: 0 } };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const T    = Number.isFinite(pNum.T)    ? pNum.T    : 300;
    const Qmin = Number.isFinite(pNum.Qmin) ? pNum.Qmin : -2000;
    const Qmax = Number.isFinite(pNum.Qmax) ? pNum.Qmax : 2000;

    const DSmin = Qmin / T, DSmax = Qmax / T;
    const W = 320, H = 240, padL = 58, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR, cH = H - padT - padB;
    const xOf = (Q)  => padL + ((Q - Qmin) / Math.max(Qmax - Qmin, 1)) * cW;
    const yOf = (DS) => padT + cH - ((DS - DSmin) / Math.max(DSmax - DSmin, 1e-10)) * cH;
    const pathD = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Q).toFixed(1)} ${yOf(pt.DS).toFixed(1)}`).join(" ");
    const yZero = yOf(0);
    const fmt = (v, d = 2) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("ΔS frente a Q (proceso isotérmico)", "ΔS versus Q (isothermal process)")}</div>
        <div className="muted" style={{ fontSize: 12 }}>{t(`T = ${T} K`, `T = ${T} K`)}</div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#ecfdf5" stroke="#a7f3d0" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          {yZero >= padT && yZero <= padT + cH && (
            <line x1={padL} y1={yZero} x2={padL + cW} y2={yZero} stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="4 3" />
          )}
          <path d={pathD} fill="none" stroke="#059669" strokeWidth="2.5" />
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">{t("Q (J)", "Q (J)")}</text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle" transform={`rotate(-90,10,${padT + cH / 2})`}>{t("ΔS (J/K)", "ΔS (J/K)")}</text>
          <text x={padL - 4} y={padT + 8}  fontSize="8" fill="#64748b" textAnchor="end">{fmt(DSmax)}</text>
          <text x={padL - 4} y={padT + cH} fontSize="8" fill="#64748b" textAnchor="end">{fmt(DSmin)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{Qmin}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{Qmax}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>{t("Pendiente = 1/T: mayor T → menor variación de entropía por julio", "Slope = 1/T: higher T → smaller entropy change per joule")}</div>
        {!linked && <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>{t("Cargar desde calculadora", "Load from calculator")}</button>}
      </div>
    );
  },
});
