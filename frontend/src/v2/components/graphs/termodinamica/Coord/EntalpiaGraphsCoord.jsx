import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo cuantifica la variación de entalpía el calor intercambiado en un proceso a presión constante?",
    en: "How does the enthalpy change quantify the heat exchanged in a constant-pressure process?",
  },
  variable_control: "T",
  magnitud_estrella: "DeltaH",
  formula: "DeltaH = DeltaH_ref",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "EntalpiaGraphsCoord",
  title: { es: "Entalpía — ΔH vs T (ley de Kirchhoff)", en: "Enthalpy — ΔH vs T (Kirchhoff's law)" },
  defaultParams: { DeltaH_ref: -890000, DeltaCp: 0, Tmin: 200, Tmax: 1000, T_ref: 298 },
  controls: [
    { id: "DeltaH_ref", label: { es: "ΔH a T_ref (J/mol)", en: "ΔH at T_ref (J/mol)" }, min: -2000000, max: 500000, step: 1000 },
    { id: "DeltaCp",   label: { es: "ΔCp (J/mol·K)",       en: "ΔCp (J/mol·K)" },          min: -200,     max: 200,    step: 1 },
    { id: "T_ref",     label: { es: "T referencia (K)",     en: "Reference T (K)" },          min: 200,      max: 500,    step: 1 },
    { id: "Tmin",      label: { es: "T mín (K)",            en: "T min (K)" },                min: 100,      max: 500,    step: 10 },
    { id: "Tmax",      label: { es: "T máx (K)",            en: "T max (K)" },                min: 300,      max: 3000,   step: 50 },
  ],
  compute: (p) => {
    const DeltaH_ref = Number.isFinite(p.DeltaH_ref) ? p.DeltaH_ref : -890000;
    const DeltaCp    = Number.isFinite(p.DeltaCp)    ? p.DeltaCp    : 0;
    const T_ref      = Number.isFinite(p.T_ref)      ? p.T_ref      : 298;
    const Tmin       = Number.isFinite(p.Tmin)        ? p.Tmin       : 200;
    const Tmax       = Number.isFinite(p.Tmax)        ? p.Tmax       : 1000;
    const steps      = 60;
    const data = Array.from({ length: steps + 1 }, (_, i) => {
      const T  = Tmin + (i / steps) * (Tmax - Tmin);
      const DH = DeltaH_ref + DeltaCp * (T - T_ref);
      return { T, DH };
    });
    const DHat298 = DeltaH_ref + DeltaCp * (298 - T_ref);
    return {
      data,
      extra: { DHat298, T_ref, interpretationTarget: "DeltaH", interpretationValue: DHat298 },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator, extra }) => {
    const DeltaH_ref = Number.isFinite(pNum.DeltaH_ref) ? pNum.DeltaH_ref : -890000;
    const DeltaCp    = Number.isFinite(pNum.DeltaCp)    ? pNum.DeltaCp    : 0;
    const T_ref      = Number.isFinite(pNum.T_ref)      ? pNum.T_ref      : 298;
    const Tmin       = Number.isFinite(pNum.Tmin)        ? pNum.Tmin       : 200;
    const Tmax       = Number.isFinite(pNum.Tmax)        ? pNum.Tmax       : 1000;

    const DHvals  = data.map((d) => d.DH);
    const DHmin   = Math.min(...DHvals);
    const DHmax   = Math.max(...DHvals);
    const DHrange = Math.max(DHmax - DHmin, 1);
    const DHat298 = extra?.DHat298 ?? (DeltaH_ref + DeltaCp * (298 - T_ref));

    const W = 340, H = 250, padL = 68, padR = 20, padT = 20, padB = 38;
    const cW = W - padL - padR, cH = H - padT - padB;
    const xOf = (T)  => padL + ((T - Tmin) / Math.max(Tmax - Tmin, 1)) * cW;
    const yOf = (DH) => padT + cH - ((DH - DHmin) / DHrange) * cH;

    const pathExo = [], pathEndo = [];
    data.forEach((pt, i) => {
      const cmd = i === 0 ? "M" : "L";
      const px  = xOf(pt.T).toFixed(1);
      const py  = yOf(pt.DH).toFixed(1);
      if (pt.DH <= 0) pathExo.push(`${cmd} ${px} ${py}`);
      else            pathEndo.push(`${cmd} ${px} ${py}`);
    });

    const yZero        = yOf(0);
    const showZeroLine = yZero > padT && yZero < padT + cH;
    const fmtT = (v) => v.toFixed(0);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("ΔH de entalpía frente a temperatura T", "Enthalpy ΔH versus temperature T")}</div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `ΔH(${T_ref} K) = ${(DeltaH_ref / 1000).toFixed(1)} kJ/mol  ·  ΔCp = ${DeltaCp.toFixed(1)} J/(mol·K)`,
            `ΔH(${T_ref} K) = ${(DeltaH_ref / 1000).toFixed(1)} kJ/mol  ·  ΔCp = ${DeltaCp.toFixed(1)} J/(mol·K)`
          )}
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f0fdf4" stroke="#bbf7d0" />
          {showZeroLine && (
            <line x1={padL} y1={yZero} x2={padL + cW} y2={yZero}
                  stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
          )}
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          {pathExo.length > 1 && (
            <path d={pathExo.join(" ")} fill="none" stroke="#15803d" strokeWidth="2.5" />
          )}
          {pathEndo.length > 1 && (
            <path d={pathEndo.join(" ")} fill="none" stroke="#dc2626" strokeWidth="2.5" />
          )}
          {xOf(T_ref) >= padL && xOf(T_ref) <= padL + cW && (
            <>
              <line x1={xOf(T_ref)} y1={padT} x2={xOf(T_ref)} y2={padT + cH}
                    stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" />
              <text x={xOf(T_ref) + 3} y={padT + 12} fontSize="9" fill="#b45309">
                {t(`T_ref=${fmtT(T_ref)} K`, `T_ref=${fmtT(T_ref)} K`)}
              </text>
            </>
          )}
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("T (K)", "T (K)")}
          </text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,10,${padT + cH / 2})`}>
            {t("ΔH (kJ/mol)", "ΔH (kJ/mol)")}
          </text>
          <text x={padL - 4} y={padT + 8}  fontSize="8" fill="#64748b" textAnchor="end">
            {(DHmax / 1000).toFixed(1)}
          </text>
          <text x={padL - 4} y={padT + cH} fontSize="8" fill="#64748b" textAnchor="end">
            {(DHmin / 1000).toFixed(1)}
          </text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmtT(Tmin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmtT(Tmax)}</text>
          {showZeroLine && (
            <text x={padL - 4} y={yZero + 4} fontSize="8" fill="#94a3b8" textAnchor="end">0</text>
          )}
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `ΔH a 298 K ≈ ${(DHat298 / 1000).toFixed(1)} kJ/mol · Verde: exotérmico (ΔH < 0) · Rojo: endotérmico`,
            `ΔH at 298 K ≈ ${(DHat298 / 1000).toFixed(1)} kJ/mol · Green: exothermic (ΔH < 0) · Red: endothermic`
          )}
        </div>
        {!linked && (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {t("Cargar desde calculadora", "Load from calculator")}
          </button>
        )}
      </div>
    );
  },
});
