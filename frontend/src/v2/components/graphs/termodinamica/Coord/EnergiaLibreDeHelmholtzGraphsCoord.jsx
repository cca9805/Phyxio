import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo determina la variación de energía libre de Helmholtz si un proceso ocurre espontáneamente a volumen y temperatura constantes?",
    en: "How does the change in Helmholtz free energy determine whether a process occurs spontaneously at constant volume and temperature?",
  },
  variable_control: "T",
  magnitud_estrella: "DeltaA",
  formula: "DeltaA = DeltaU - T * DeltaS",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "EnergiaLibreDeHelmholtzGraphsCoord",
  title: { es: "Energía libre de Helmholtz — ΔA vs T", en: "Helmholtz Free Energy — ΔA vs T" },
  defaultParams: { DeltaU: -50000, DeltaS: -100, Tmin: 100, Tmax: 800 },
  controls: [
    { id: "DeltaU", label: { es: "ΔU (J/mol)", en: "ΔU (J/mol)" }, min: -500000, max: 500000, step: 1000 },
    { id: "DeltaS", label: { es: "ΔS (J/mol·K)", en: "ΔS (J/mol·K)" }, min: -500, max: 500, step: 1 },
    { id: "Tmin",   label: { es: "T mín (K)",    en: "T min (K)" },    min: 50,   max: 800,    step: 10 },
    { id: "Tmax",   label: { es: "T máx (K)",    en: "T max (K)" },    min: 200,  max: 3000,   step: 50 },
  ],
  compute: (p) => {
    const DeltaU = Number.isFinite(p.DeltaU) ? p.DeltaU : -50000;
    const DeltaS = Number.isFinite(p.DeltaS) ? p.DeltaS : -100;
    const Tmin   = Number.isFinite(p.Tmin)   ? p.Tmin   : 100;
    const Tmax   = Number.isFinite(p.Tmax)   ? p.Tmax   : 800;
    const steps  = 60;
    const data   = Array.from({ length: steps + 1 }, (_, i) => {
      const T  = Tmin + (i / steps) * (Tmax - Tmin);
      const DA = DeltaU - T * DeltaS;
      return { T, DA };
    });
    const Tinv   = DeltaS !== 0 ? DeltaU / DeltaS : null;
    const DAat298 = DeltaU - 298 * DeltaS;
    return {
      data,
      extra: { Tinv, DAat298, interpretationTarget: "DeltaA", interpretationValue: DAat298 },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator, extra }) => {
    const DeltaU = Number.isFinite(pNum.DeltaU) ? pNum.DeltaU : -50000;
    const DeltaS = Number.isFinite(pNum.DeltaS) ? pNum.DeltaS : -100;
    const Tmin   = Number.isFinite(pNum.Tmin)   ? pNum.Tmin   : 100;
    const Tmax   = Number.isFinite(pNum.Tmax)   ? pNum.Tmax   : 800;

    const DAvals  = data.map((d) => d.DA);
    const DAmin   = Math.min(...DAvals);
    const DAmax   = Math.max(...DAvals);
    const DArange = Math.max(DAmax - DAmin, 1);

    const Tinv    = extra?.Tinv ?? null;
    const DAat298 = extra?.DAat298 ?? (DeltaU - 298 * DeltaS);

    const W = 340, H = 250, padL = 64, padR = 20, padT = 20, padB = 38;
    const cW = W - padL - padR, cH = H - padT - padB;
    const xOf = (T)  => padL + ((T - Tmin) / Math.max(Tmax - Tmin, 1)) * cW;
    const yOf = (DA) => padT + cH - ((DA - DAmin) / DArange) * cH;

    const pathSpont    = [];
    const pathNonSpont = [];
    data.forEach((pt, i) => {
      const cmd = i === 0 ? "M" : "L";
      const px  = xOf(pt.T).toFixed(1);
      const py  = yOf(pt.DA).toFixed(1);
      if (pt.DA <= 0) pathSpont.push(`${cmd} ${px} ${py}`);
      else            pathNonSpont.push(`${cmd} ${px} ${py}`);
    });

    const yZero        = yOf(0);
    const showZeroLine = yZero > padT && yZero < padT + cH;
    const fmtT = (v) => v.toFixed(0);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("ΔA de Helmholtz frente a temperatura T", "Helmholtz ΔA versus temperature T")}</div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(`ΔU = ${(DeltaU / 1000).toFixed(1)} kJ/mol  ·  ΔS = ${DeltaS.toFixed(1)} J/(mol·K)`,
             `ΔU = ${(DeltaU / 1000).toFixed(1)} kJ/mol  ·  ΔS = ${DeltaS.toFixed(1)} J/(mol·K)`)}
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#eff6ff" stroke="#bfdbfe" />
          {showZeroLine && (
            <line x1={padL} y1={yZero} x2={padL + cW} y2={yZero}
                  stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
          )}
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          {pathSpont.length > 1 && (
            <path d={pathSpont.join(" ")} fill="none" stroke="#1d4ed8" strokeWidth="2.5" />
          )}
          {pathNonSpont.length > 1 && (
            <path d={pathNonSpont.join(" ")} fill="none" stroke="#dc2626" strokeWidth="2.5" />
          )}
          {Tinv !== null && Tinv >= Tmin && Tinv <= Tmax && (
            <>
              <line x1={xOf(Tinv)} y1={padT} x2={xOf(Tinv)} y2={padT + cH}
                    stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" />
              <text x={xOf(Tinv) + 3} y={padT + 12} fontSize="9" fill="#b45309">
                {t(`T_inv=${fmtT(Tinv)} K`, `T_inv=${fmtT(Tinv)} K`)}
              </text>
            </>
          )}
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("T (K)", "T (K)")}
          </text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,10,${padT + cH / 2})`}>
            {t("ΔA (kJ/mol)", "ΔA (kJ/mol)")}
          </text>
          <text x={padL - 4} y={padT + 8}  fontSize="8" fill="#64748b" textAnchor="end">
            {(DAmax / 1000).toFixed(1)}
          </text>
          <text x={padL - 4} y={padT + cH} fontSize="8" fill="#64748b" textAnchor="end">
            {(DAmin / 1000).toFixed(1)}
          </text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmtT(Tmin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmtT(Tmax)}</text>
          {showZeroLine && (
            <text x={padL - 4} y={yZero + 4} fontSize="8" fill="#94a3b8" textAnchor="end">0</text>
          )}
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `ΔA a 298 K ≈ ${(DAat298 / 1000).toFixed(1)} kJ/mol · Azul: espontáneo (ΔA < 0) · Rojo: no espontáneo`,
            `ΔA at 298 K ≈ ${(DAat298 / 1000).toFixed(1)} kJ/mol · Blue: spontaneous (ΔA < 0) · Red: non-spontaneous`
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
