import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cuánta entropía genera el universo cuando el calor fluye irreversiblemente entre cuerpos a distintas temperaturas?",
    en: "How much entropy does the universe generate when heat flows irreversibly between bodies at different temperatures?",
  },
  variable_control: "Th",
  magnitud_estrella: "DeltaS_univ",
  formula: "DeltaS_univ = Q*(1/Tc - 1/Th)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "ProcesosIrreversiblesGraphsCoord",
  title: { es: "Generación de entropía en proceso irreversible", en: "Entropy generation in irreversible process" },
  defaultParams: { Tc: 300, Thmin: 305, Thmax: 800, Q: 1000 },
  controls: [
    { id: "Tc",    label: { es: "T fría (K)",  en: "T cold (K)" },  min: 200, max: 500,  step: 10  },
    { id: "Q",     label: { es: "Q (J)",        en: "Q (J)" },       min: 100, max: 5000, step: 100 },
    { id: "Thmin", label: { es: "Th mín (K)",  en: "Th min (K)" },  min: 200, max: 600,  step: 10  },
    { id: "Thmax", label: { es: "Th máx (K)",  en: "Th max (K)" },  min: 400, max: 2000, step: 50  },
  ],
  compute: (p) => {
    const Tc    = Number.isFinite(p.Tc)    ? p.Tc    : 300;
    const Q     = Number.isFinite(p.Q)     ? p.Q     : 1000;
    const Thmin = Number.isFinite(p.Thmin) ? Math.max(p.Thmin, Tc + 1) : 305;
    const Thmax = Number.isFinite(p.Thmax) ? p.Thmax : 800;
    const steps = 40;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const Th = Thmin + (i / steps) * (Thmax - Thmin);
      return { Th, DS: Q * (1 / Tc - 1 / Th) };
    });
    return { data, extra: { interpretationTarget: "DeltaS_univ", interpretationValue: Q * (1 / Tc - 1 / ((Thmin + Thmax) / 2)) } };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const Tc    = Number.isFinite(pNum.Tc)    ? pNum.Tc    : 300;
    const Q     = Number.isFinite(pNum.Q)     ? pNum.Q     : 1000;
    const Thmin = Number.isFinite(pNum.Thmin) ? Math.max(pNum.Thmin, Tc + 1) : 305;
    const Thmax = Number.isFinite(pNum.Thmax) ? pNum.Thmax : 800;

    const DSmax = Q * (1 / Tc - 1 / Thmin);
    const DSmin = Q * (1 / Tc - 1 / Thmax);
    const W = 320, H = 240, padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR, cH = H - padT - padB;
    const xOf = (Th) => padL + ((Th - Thmin) / Math.max(Thmax - Thmin, 1)) * cW;
    const yOf = (DS) => padT + cH - ((DS - DSmin) / Math.max(DSmax - DSmin, 1e-10)) * cH;
    const pathD = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Th).toFixed(1)} ${yOf(pt.DS).toFixed(1)}`).join(" ");
    const fmt = (v, d = 2) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("ΔS_univ = Q(1/Tc − 1/Th) ≥ 0", "ΔS_univ = Q(1/Tc − 1/Th) ≥ 0")}</div>
        <div className="muted" style={{ fontSize: 12 }}>{t(`Tc = ${Tc} K, Q = ${Q} J (fijo)`, `Tc = ${Tc} K, Q = ${Q} J (fixed)`)}</div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#fff7ed" stroke="#fed7aa" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <path d={pathD} fill="none" stroke="#ea580c" strokeWidth="2.5" />
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">{t("Th (K)", "Th (K)")}</text>
          <text x="8" y={padT + cH / 2} fontSize="9" fill="#475569" textAnchor="middle" transform={`rotate(-90,8,${padT + cH / 2})`}>{t("ΔS_univ (J/K)", "ΔS_univ (J/K)")}</text>
          <text x={padL - 4} y={padT + 8}  fontSize="8" fill="#64748b" textAnchor="end">{fmt(DSmax)}</text>
          <text x={padL - 4} y={padT + cH} fontSize="8" fill="#64748b" textAnchor="end">{fmt(DSmin)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{Math.round(Thmin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{Math.round(Thmax)}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>{t("Mayor ΔT → mayor ΔS_univ → mayor irreversibilidad", "Larger ΔT → larger ΔS_univ → greater irreversibility")}</div>
        {!linked && <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>{t("Cargar desde calculadora", "Load from calculator")}</button>}
      </div>
    );
  },
});
