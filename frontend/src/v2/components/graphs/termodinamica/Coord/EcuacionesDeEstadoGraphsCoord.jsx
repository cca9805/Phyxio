import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const R = 8.314;

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la presión de un gas con su volumen a temperatura constante?",
    en: "How does the pressure of a gas vary with its volume at constant temperature?",
  },
  variable_control: "V",
  magnitud_estrella: "P",
  formula: "P = nRT/V",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "EcuacionesDeEstadoGraphsCoord",
  title: {
    es: "Isotermas del gas ideal (diagrama P-V)",
    en: "Ideal gas isotherms (P-V diagram)",
  },
  defaultParams: {
    n: 1,
    T: 300,
    Vmin: 0.005,
    Vmax: 0.05,
  },
  controls: [
    { id: "n",    label: { es: "n (mol)",  en: "n (mol)" },  min: 0.1,  max: 5,     step: 0.1  },
    { id: "T",    label: { es: "T (K)",    en: "T (K)" },    min: 100,  max: 1000,  step: 10   },
    { id: "Vmin", label: { es: "V mín (m³)", en: "V min (m³)" }, min: 0.001, max: 0.02, step: 0.001 },
    { id: "Vmax", label: { es: "V máx (m³)", en: "V max (m³)" }, min: 0.01,  max: 0.2,  step: 0.005 },
  ],
  compute: (pNum) => {
    const n    = Number.isFinite(pNum.n)    ? pNum.n    : 1;
    const T    = Number.isFinite(pNum.T)    ? pNum.T    : 300;
    const Vmin = Number.isFinite(pNum.Vmin) ? pNum.Vmin : 0.005;
    const Vmax = Number.isFinite(pNum.Vmax) ? pNum.Vmax : 0.05;

    const steps = 40;
    const data = [];
    for (let i = 0; i <= steps; i++) {
      const V = Vmin + (i / steps) * (Vmax - Vmin);
      const P = (n * R * T) / V;
      data.push({ V, P });
    }

    const Pmid = (n * R * T) / ((Vmin + Vmax) / 2);

    return {
      data,
      extra: {
        interpretationTarget: "P",
        interpretationValue: Pmid,
        graphState: { n, T, Vmin, Vmax, Pmid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const n    = Number.isFinite(pNum.n)    ? pNum.n    : 1;
    const T    = Number.isFinite(pNum.T)    ? pNum.T    : 300;
    const Vmin = Number.isFinite(pNum.Vmin) ? pNum.Vmin : 0.005;
    const Vmax = Number.isFinite(pNum.Vmax) ? pNum.Vmax : 0.05;

    const Pmax = (n * R * T) / Vmin;
    const Pmin = (n * R * T) / Vmax;

    const W = 320;
    const H = 240;
    const padL = 55, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (V) => padL + ((V - Vmin) / (Vmax - Vmin)) * cW;
    const yOf = (P) => padT + cH - ((P - Pmin) / (Pmax - Pmin)) * cH;

    const pathD = data
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.V).toFixed(1)} ${yOf(pt.P).toFixed(1)}`)
      .join(" ");

    const Pmid = (n * R * T) / ((Vmin + Vmax) / 2);
    const Vmid = (Vmin + Vmax) / 2;

    const fmt = (v, d = 0) => v.toFixed(d);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Isoterma del gas ideal", "Ideal gas isotherm")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(`n = ${fmt(n, 1)} mol,  T = ${fmt(T, 0)} K`, `n = ${fmt(n, 1)} mol,  T = ${fmt(T, 0)} K`)}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Diagrama P-V del gas ideal", "Ideal gas P-V diagram")}>
          {/* background */}
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f0fdf4" stroke="#d1fae5" />

          {/* axes */}
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* isotherm curve */}
          <path d={pathD} fill="none" stroke="#0d9488" strokeWidth="2.5" />

          {/* midpoint dot */}
          <circle cx={xOf(Vmid)} cy={yOf(Pmid)} r="5" fill="#f97316" />

          {/* axis labels */}
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Volumen V (m³)", "Volume V (m³)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Presión P (Pa)", "Pressure P (Pa)")}
          </text>

          {/* tick values */}
          <text x={padL - 4} y={padT + cH} fontSize="9" fill="#64748b" textAnchor="end">{fmt(Pmin, 0)}</text>
          <text x={padL - 4} y={padT + 8}  fontSize="9" fill="#64748b" textAnchor="end">{fmt(Pmax, 0)}</text>
          <text x={padL}         y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Vmin, 3)}</text>
          <text x={padL + cW}    y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Vmax, 3)}</text>

          {/* annotation */}
          <text x={xOf(Vmid) + 8} y={yOf(Pmid) - 6} fontSize="10" fill="#0d9488">
            {t(`P ≈ ${fmt(Pmid, 0)} Pa`, `P ≈ ${fmt(Pmid, 0)} Pa`)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `A volumen intermedio V = ${fmt(Vmid * 1000, 1)} L, P ≈ ${fmt(Pmid, 0)} Pa`,
            `At mid volume V = ${fmt(Vmid * 1000, 1)} L, P ≈ ${fmt(Pmid, 0)} Pa`
          )}
        </div>

        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {t("Cargar desde calculadora", "Load from calculator")}
          </button>
        ) : null}
      </div>
    );
  },
});
