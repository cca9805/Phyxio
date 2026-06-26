import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Qué fracción del calor de un foco caliente puede convertirse en trabajo útil según Kelvin-Planck y Carnot?",
    en: "What fraction of heat from a hot reservoir can be converted into useful work according to Kelvin-Planck and Carnot?",
  },
  variable_control: "Tc",
  magnitud_estrella: "W_max",
  formula: "W_max = Qh * (1 - Tc/Th)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "FormulacionDeKelvinPlanckGraphsCoord",
  title: { es: "Kelvin-Planck — trabajo máximo de una máquina térmica", en: "Kelvin-Planck — maximum work of a heat engine" },
  defaultParams: { Th: 800, Qh: 1000, Tcmin: 100, Tcmax: 750 },
  controls: [
    { id: "Th",    label: { es: "Th (K)",       en: "Th (K)" },      min: 400, max: 2000, step: 50  },
    { id: "Qh",    label: { es: "Qh (J)",        en: "Qh (J)" },      min: 100, max: 10000, step: 100 },
    { id: "Tcmin", label: { es: "Tc mín (K)",   en: "Tc min (K)" },  min: 50,  max: 500,  step: 10  },
    { id: "Tcmax", label: { es: "Tc máx (K)",   en: "Tc max (K)" },  min: 200, max: 1800, step: 50  },
  ],
  compute: (p) => {
    const Th    = Number.isFinite(p.Th)    ? p.Th    : 800;
    const Qh    = Number.isFinite(p.Qh)    ? p.Qh    : 1000;
    const Tcmin = Number.isFinite(p.Tcmin) ? p.Tcmin : 100;
    const Tcmax = Number.isFinite(p.Tcmax) ? Math.min(p.Tcmax, Th - 1) : 750;
    const steps = 40;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const Tc = Tcmin + (i / steps) * (Tcmax - Tcmin);
      return { Tc, W: Qh * (1 - Tc / Th) };
    });
    return { data, extra: { interpretationTarget: "W_max", interpretationValue: Qh * (1 - ((Tcmin + Tcmax) / 2) / Th) } };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const Th    = Number.isFinite(pNum.Th)    ? pNum.Th    : 800;
    const Qh    = Number.isFinite(pNum.Qh)    ? pNum.Qh    : 1000;
    const Tcmin = Number.isFinite(pNum.Tcmin) ? pNum.Tcmin : 100;
    const Tcmax = Number.isFinite(pNum.Tcmax) ? Math.min(pNum.Tcmax, Th - 1) : 750;

    const Wmax = Qh * (1 - Tcmin / Th);
    const Wmin = Qh * (1 - Tcmax / Th);
    const W = 320, H = 240, padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR, cH = H - padT - padB;
    const xOf = (Tc) => padL + ((Tc - Tcmin) / Math.max(Tcmax - Tcmin, 1)) * cW;
    const yOf = (Wv) => padT + cH - ((Wv - Wmin) / Math.max(Wmax - Wmin, 1e-10)) * cH;
    const pathD = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Tc).toFixed(1)} ${yOf(pt.W).toFixed(1)}`).join(" ");
    const fmtJ = (v) => v >= 1000 ? `${(v / 1000).toFixed(1)} kJ` : `${v.toFixed(0)} J`;
    const fmt  = (v, d = 0) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("Trabajo máximo W = Qh(1 − Tc/Th)", "Maximum work W = Qh(1 − Tc/Th)")}</div>
        <div className="muted" style={{ fontSize: 12 }}>{t(`Th = ${Th} K, Qh = ${fmtJ(Qh)}`, `Th = ${Th} K, Qh = ${fmtJ(Qh)}`)}</div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#fefce8" stroke="#fef08a" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <path d={pathD} fill="none" stroke="#ca8a04" strokeWidth="2.5" />
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">{t("Tc (K)", "Tc (K)")}</text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle" transform={`rotate(-90,10,${padT + cH / 2})`}>{t("W_max (J)", "W_max (J)")}</text>
          <text x={padL - 4} y={padT + 8}  fontSize="8" fill="#64748b" textAnchor="end">{fmtJ(Wmax)}</text>
          <text x={padL - 4} y={padT + cH} fontSize="8" fill="#64748b" textAnchor="end">{fmtJ(Wmin)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tcmin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tcmax)}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>{t("W=0 cuando Tc=Th: imposible extraer trabajo de un único foco", "W=0 when Tc=Th: impossible to extract work from a single reservoir")}</div>
        {!linked && <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>{t("Cargar desde calculadora", "Load from calculator")}</button>}
      </div>
    );
  },
});
