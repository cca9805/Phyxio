import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo determina la igualdad del potencial químico µ entre fases el equilibrio termodinámico?",
    en: "How does equality of chemical potential µ between phases determine thermodynamic equilibrium?",
  },
  variable_control: "T",
  magnitud_estrella: "mu",
  formula: "mu = mu_std + R * T * ln(a)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "PotencialQuimicoGraphsCoord",
  title: { es: "Potencial químico µ vs temperatura T", en: "Chemical potential µ vs temperature T" },
  defaultParams: { mu_std: -228600, a: 0.5, Tmin: 200, Tmax: 500 },
  controls: [
    { id: "mu_std", label: { es: "µ° (J/mol)",     en: "µ° (J/mol)" },     min: -600000, max: 50000,  step: 1000 },
    { id: "a",      label: { es: "actividad a",    en: "activity a" },      min: 0.001,   max: 10,     step: 0.001 },
    { id: "Tmin",   label: { es: "T mín (K)",       en: "T min (K)" },       min: 100,     max: 400,    step: 10 },
    { id: "Tmax",   label: { es: "T máx (K)",       en: "T max (K)" },       max: 2000,    min: 200,    step: 50 },
  ],
  compute: (p) => {
    const mu_std = Number.isFinite(p.mu_std) ? p.mu_std : -228600;
    const a      = Number.isFinite(p.a) && p.a > 0 ? p.a : 0.5;
    const Tmin   = Number.isFinite(p.Tmin) ? p.Tmin : 200;
    const Tmax   = Number.isFinite(p.Tmax) ? p.Tmax : 500;
    const R      = 8.314;
    const steps  = 60;
    const data   = Array.from({ length: steps + 1 }, (_, i) => {
      const T  = Tmin + (i / steps) * (Tmax - Tmin);
      const mu = mu_std + R * T * Math.log(a);
      return { T, mu };
    });
    const mu298  = mu_std + R * 298.15 * Math.log(a);
    return {
      data,
      extra: { mu298, a, interpretationTarget: "mu", interpretationValue: mu298 },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator, extra }) => {
    const mu_std = Number.isFinite(pNum.mu_std) ? pNum.mu_std : -228600;
    const a      = Number.isFinite(pNum.a) && pNum.a > 0 ? pNum.a : 0.5;
    const Tmin   = Number.isFinite(pNum.Tmin) ? pNum.Tmin : 200;
    const Tmax   = Number.isFinite(pNum.Tmax) ? pNum.Tmax : 500;
    const R      = 8.314;

    const muVals  = data.map((d) => d.mu);
    const muMin   = Math.min(...muVals);
    const muMax   = Math.max(...muVals);
    const muRange = Math.max(muMax - muMin, 1);
    const mu298   = extra?.mu298 ?? (mu_std + R * 298.15 * Math.log(a));

    const W = 340, H = 250, padL = 72, padR = 20, padT = 20, padB = 38;
    const cW = W - padL - padR, cH = H - padT - padB;
    const xOf = (T)  => padL + ((T - Tmin) / Math.max(Tmax - Tmin, 1)) * cW;
    const yOf = (mu) => padT + cH - ((mu - muMin) / muRange) * cH;

    const lnA     = Math.log(a);
    const slopePositive = lnA > 0;
    const lineColor     = slopePositive ? "#dc2626" : "#2563eb";
    const pathD         = data.map((pt, i) =>
      `${i === 0 ? "M" : "L"} ${xOf(pt.T).toFixed(1)} ${yOf(pt.mu).toFixed(1)}`
    ).join(" ");

    const x298 = xOf(298.15);
    const show298 = x298 >= padL && x298 <= padL + cW;
    const fmtT = (v) => v.toFixed(0);
    const fmtMu = (v) => (v / 1000).toFixed(1);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">{t("Potencial químico µ frente a temperatura T", "Chemical potential µ versus temperature T")}</div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `µ° = ${fmtMu(mu_std)} kJ/mol  ·  a = ${a.toFixed(3)}  ·  pendiente = R·ln(a) = ${(R * Math.log(a) / 1000).toFixed(4)} kJ/(mol·K)`,
            `µ° = ${fmtMu(mu_std)} kJ/mol  ·  a = ${a.toFixed(3)}  ·  slope = R·ln(a) = ${(R * Math.log(a) / 1000).toFixed(4)} kJ/(mol·K)`
          )}
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} role="img">
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f8fafc" stroke="#e2e8f0" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <path d={pathD} fill="none" stroke={lineColor} strokeWidth="2.5" />
          {show298 && (
            <>
              <line x1={x298} y1={padT} x2={x298} y2={padT + cH}
                    stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" />
              <text x={x298 + 3} y={padT + 12} fontSize="9" fill="#b45309">298 K</text>
              <circle cx={x298} cy={yOf(mu298)} r="3.5" fill="#f59e0b" />
            </>
          )}
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("T (K)", "T (K)")}
          </text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,10,${padT + cH / 2})`}>
            {t("µ (kJ/mol)", "µ (kJ/mol)")}
          </text>
          <text x={padL - 4} y={padT + 8}  fontSize="8" fill="#64748b" textAnchor="end">{fmtMu(muMax)}</text>
          <text x={padL - 4} y={padT + cH} fontSize="8" fill="#64748b" textAnchor="end">{fmtMu(muMin)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmtT(Tmin)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmtT(Tmax)}</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `µ(298 K) ≈ ${fmtMu(mu298)} kJ/mol · ${lnA < 0 ? "Pendiente negativa: a < 1 (µ decrece con T)" : "Pendiente positiva: a > 1 (µ crece con T)"}`,
            `µ(298 K) ≈ ${fmtMu(mu298)} kJ/mol · ${lnA < 0 ? "Negative slope: a < 1 (µ decreases with T)" : "Positive slope: a > 1 (µ increases with T)"}`
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
