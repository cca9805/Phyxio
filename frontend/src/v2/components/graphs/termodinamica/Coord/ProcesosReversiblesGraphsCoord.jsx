import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cuál es la eficiencia máxima de un proceso reversible (ciclo de Carnot) según las temperaturas de los focos?",
    en: "What is the maximum efficiency of a reversible process (Carnot cycle) as a function of reservoir temperatures?",
  },
  variable_control: "Tc",
  magnitud_estrella: "eta",
  formula: "eta = 1 - Tc / Th",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "ProcesosReversiblesGraphsCoord",
  title: { es: "Eficiencia de Carnot η = 1 − Tc/Th", en: "Carnot efficiency η = 1 − Tc/Th" },
  defaultParams: { Th: 600, Tcmin: 100, Tcmax: 580 },
  controls: [
    { id: "Th",    label: { es: "Th (K)",      en: "Th (K)" },      min: 300, max: 2000, step: 50 },
    { id: "Tcmin", label: { es: "Tc mín (K)",  en: "Tc min (K)" },  min: 50,  max: 400,  step: 10 },
    { id: "Tcmax", label: { es: "Tc máx (K)",  en: "Tc max (K)" },  min: 200, max: 1800, step: 50 },
  ],
  compute: (p) => {
    const Th    = Number.isFinite(p.Th)    ? p.Th    : 600;
    const Tcmin = Number.isFinite(p.Tcmin) ? p.Tcmin : 100;
    const Tcmax = Number.isFinite(p.Tcmax) ? Math.min(p.Tcmax, Th - 1) : 580;
    const steps = 40;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const Tc = Tcmin + (i / steps) * (Tcmax - Tcmin);
      return { Tc, eta: 1 - Tc / Th };
    });
    return { data, extra: { interpretationTarget: "eta", interpretationValue: 1 - ((Tcmin + Tcmax) / 2) / Th } };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const Th    = Number.isFinite(pNum.Th)    ? pNum.Th    : 600;
    const Tcmin = Number.isFinite(pNum.Tcmin) ? pNum.Tcmin : 100;
    const Tcmax = Number.isFinite(pNum.Tcmax) ? Math.min(pNum.Tcmax, Th - 1) : 580;

    const etaMax = 1 - Tcmin / Th;
    const etaMin = 1 - Tcmax / Th;
    const W = 320, H = 240, padL = 55, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR, cH = H - padT - padB;
    const xOf  = (Tc)  => padL + ((Tc - Tcmin) / Math.max(Tcmax - Tcmin, 1)) * cW;
    const yOf  = (eta) => padT + cH - ((eta - etaMin) / Math.max(etaMax - etaMin, 1e-10)) * cH;
    const pathD = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Tc).toFixed(1)} ${yOf(pt.eta).toFixed(1)}`).join(" ");
    const fmt = (v, d = 2) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("Eficiencia de Carnot vs temperatura fría", "Carnot efficiency vs cold temperature")}</div>
        <div className="muted" style={{ fontSize: 12 }}>{t(`Th = ${Th} K (foco caliente)`, `Th = ${Th} K (hot reservoir)`)}</div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f0fdf4" stroke="#bbf7d0" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <path d={pathD} fill="none" stroke="#059669" strokeWidth="2.5" />
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">{t("Tc (K)", "Tc (K)")}</text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle" transform={`rotate(-90,10,${padT + cH / 2})`}>{t("η", "η")}</text>
          <text x={padL - 4} y={padT + 8}  fontSize="8" fill="#64748b" textAnchor="end">{fmt(etaMax)}</text>
          <text x={padL - 4} y={padT + cH} fontSize="8" fill="#64748b" textAnchor="end">{fmt(etaMin)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{Math.round(Tcmin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{Math.round(Tcmax)}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>{t("η → 1 cuando Tc → 0; η → 0 cuando Tc → Th", "η → 1 as Tc → 0; η → 0 as Tc → Th")}</div>
        {!linked && <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>{t("Cargar desde calculadora", "Load from calculator")}</button>}
      </div>
    );
  },
});
