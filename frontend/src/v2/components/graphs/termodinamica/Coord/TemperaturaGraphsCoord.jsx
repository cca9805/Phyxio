import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo se relacionan las escalas de temperatura Celsius, Kelvin y Fahrenheit entre sí?",
    en: "How do the Celsius, Kelvin, and Fahrenheit temperature scales relate to each other?",
  },
  variable_control: "T_C",
  magnitud_estrella: "T_K",
  formula: "T_K = T_C + 273.15",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "TemperaturaGraphsCoord",
  title: {
    es: "Conversión de escalas de temperatura",
    en: "Temperature scale conversion",
  },
  defaultParams: { Tcmin: -50, Tcmax: 150 },
  controls: [
    { id: "Tcmin", label: { es: "T_C mín (°C)", en: "T_C min (°C)" }, min: -273, max: 0,   step: 10 },
    { id: "Tcmax", label: { es: "T_C máx (°C)", en: "T_C max (°C)" }, min: 50,  max: 1000, step: 10 },
  ],
  compute: (pNum) => {
    const Tcmin = Number.isFinite(pNum.Tcmin) ? pNum.Tcmin : -50;
    const Tcmax = Number.isFinite(pNum.Tcmax) ? pNum.Tcmax : 150;
    const steps = 40;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const Tc = Tcmin + (i / steps) * (Tcmax - Tcmin);
      return { Tc, Tk: Tc + 273.15, Tf: Tc * 9 / 5 + 32 };
    });
    const Tcmid = (Tcmin + Tcmax) / 2;
    return { data, extra: { interpretationTarget: "T_K", interpretationValue: Tcmid + 273.15, graphState: { Tcmin, Tcmax } } };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const Tcmin = Number.isFinite(pNum.Tcmin) ? pNum.Tcmin : -50;
    const Tcmax = Number.isFinite(pNum.Tcmax) ? pNum.Tcmax : 150;

    const Tkmin = Tcmin + 273.15;
    const Tkmax = Tcmax + 273.15;
    const Tfmin = Tcmin * 9 / 5 + 32;
    const Tfmax = Tcmax * 9 / 5 + 32;

    const W = 320, H = 240;
    const padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR, cH = H - padT - padB;

    // Y axis: show Kelvin scale
    const Ymin = Tkmin - 5;
    const Ymax = Tkmax + 5;

    const xOf = (Tc) => padL + ((Tc - Tcmin) / Math.max(Tcmax - Tcmin, 0.001)) * cW;
    const yOf = (Tk) => padT + cH - ((Tk - Ymin) / Math.max(Ymax - Ymin, 0.001)) * cH;

    const pathK = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Tc).toFixed(1)} ${yOf(pt.Tk).toFixed(1)}`).join(" ");
    // Fahrenheit normalized to Kelvin scale for second line
    const pathF = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Tc).toFixed(1)} ${yOf(pt.Tf + 273.15 - 32 * 5 / 9 + 32 * 5 / 9).toFixed(1)}`).join(" ");

    const fmt = (v, d = 1) => v.toFixed(d);

    // Key reference points
    const refPoints = [
      { Tc: 0,     label: t("0°C = 273 K = 32°F",  "0°C = 273 K = 32°F")  },
      { Tc: 100,   label: t("100°C = 373 K = 212°F", "100°C = 373 K = 212°F") },
      { Tc: -273.15, label: t("0 K (cero abs.)", "0 K (abs. zero)") },
    ].filter(p => p.Tc >= Tcmin && p.Tc <= Tcmax);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("Escalas Celsius ↔ Kelvin ↔ Fahrenheit", "Celsius ↔ Kelvin ↔ Fahrenheit scales")}</div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t("Conversión de escalas de temperatura", "Temperature scale conversion")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#fef9c3" stroke="#fef08a" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* Kelvin line */}
          <path d={pathK} fill="none" stroke="#0369a1" strokeWidth="2.5" />

          {/* Celsius = Kelvin guide: offset line showing T_C line in K space */}
          <path d={data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Tc).toFixed(1)} ${yOf(pt.Tc).toFixed(1)}`).join(" ")}
                fill="none" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="5 3" />

          {refPoints.map(rp => (
            <g key={rp.Tc}>
              <line x1={xOf(rp.Tc)} y1={padT} x2={xOf(rp.Tc)} y2={padT + cH} stroke="#64748b" strokeWidth="0.8" strokeDasharray="3 3" />
              <text x={xOf(rp.Tc) + 3} y={yOf(rp.Tc + 273.15) - 4} fontSize="8" fill="#475569">{rp.label}</text>
            </g>
          ))}

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">{t("T Celsius (°C)", "T Celsius (°C)")}</text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#0369a1" textAnchor="middle" transform={`rotate(-90,10,${padT + cH / 2})`}>K</text>
          <text x={padL - 4} y={padT + 8} fontSize="9" fill="#64748b" textAnchor="end">{fmt(Tkmax, 0)} K</text>
          <text x={padL - 4} y={padT + cH} fontSize="9" fill="#64748b" textAnchor="end">{fmt(Tkmin, 0)} K</text>
          <text x={padL} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tcmin, 0)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tcmax, 0)}</text>

          <text x={padL + cW - 4} y={padT + 14} fontSize="9" fill="#0369a1" textAnchor="end">{t("Kelvin (azul)", "Kelvin (blue)")}</text>
          <text x={padL + cW - 4} y={padT + 24} fontSize="9" fill="#dc2626" textAnchor="end">{t("Celsius (rojo)", "Celsius (red)")}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>{t("T_K = T_C + 273.15 · T_F = 9/5·T_C + 32", "T_K = T_C + 273.15 · T_F = 9/5·T_C + 32")}</div>
        {!linked && <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>{t("Cargar desde calculadora", "Load from calculator")}</button>}
      </div>
    );
  },
});
