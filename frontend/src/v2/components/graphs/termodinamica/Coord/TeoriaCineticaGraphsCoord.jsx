import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const k_B = 1.380649e-23;

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la velocidad cuadrática media de las moléculas con la temperatura del gas?",
    en: "How does the root mean square speed of molecules vary with gas temperature?",
  },
  variable_control: "T",
  magnitud_estrella: "v_rms",
  formula: "v_rms = sqrt(3 * k_B * T / m)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "TeoriaCineticaGraphsCoord",
  title: {
    es: "Diagrama v_rms – T (teoría cinética)",
    en: "v_rms – T diagram (kinetic theory)",
  },
  defaultParams: {
    m_g_mol: 28.0,
    Tmin: 100,
    Tmax: 1000,
  },
  controls: [
    { id: "m_g_mol", label: { es: "Masa molar M (g/mol)", en: "Molar mass M (g/mol)" }, min: 2, max: 200, step: 1 },
    { id: "Tmin",    label: { es: "T mín (K)",            en: "T min (K)" },             min: 50,  max: 500,  step: 10 },
    { id: "Tmax",    label: { es: "T máx (K)",            en: "T max (K)" },             min: 200, max: 3000, step: 50 },
  ],
  compute: (pNum) => {
    const M    = Number.isFinite(pNum.m_g_mol) ? pNum.m_g_mol : 28.0;
    const Tmin = Number.isFinite(pNum.Tmin)    ? pNum.Tmin    : 100;
    const Tmax = Number.isFinite(pNum.Tmax)    ? pNum.Tmax    : 1000;

    const N_A = 6.02214076e23;
    const m   = (M / 1000) / N_A;

    const steps = 40;
    const data  = [];
    for (let i = 0; i <= steps; i++) {
      const T     = Tmin + (i / steps) * (Tmax - Tmin);
      const v_rms = Math.sqrt((3 * k_B * T) / m);
      data.push({ T, v_rms });
    }

    const Tmid   = (Tmin + Tmax) / 2;
    const v_mid  = Math.sqrt((3 * k_B * Tmid) / m);

    return {
      data,
      extra: {
        interpretationTarget: "v_rms",
        interpretationValue: v_mid,
        graphState: { M, Tmin, Tmax, Tmid, v_mid },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const M    = Number.isFinite(pNum.m_g_mol) ? pNum.m_g_mol : 28.0;
    const Tmin = Number.isFinite(pNum.Tmin)    ? pNum.Tmin    : 100;
    const Tmax = Number.isFinite(pNum.Tmax)    ? pNum.Tmax    : 1000;

    const N_A  = 6.02214076e23;
    const m    = (M / 1000) / N_A;

    const v_min = Math.sqrt((3 * k_B * Tmin) / m);
    const v_max = Math.sqrt((3 * k_B * Tmax) / m);
    const Tmid  = (Tmin + Tmax) / 2;
    const v_mid = Math.sqrt((3 * k_B * Tmid) / m);

    const W = 320;
    const H = 240;
    const padL = 65, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (T)     => padL + ((T     - Tmin)  / (Tmax  - Tmin))  * cW;
    const yOf = (v_rms) => padT + cH - ((v_rms - v_min) / (v_max - v_min)) * cH;

    const pathD = data
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T).toFixed(1)} ${yOf(pt.v_rms).toFixed(1)}`)
      .join(" ");

    const fmt  = (v, d = 0) => v.toFixed(d);
    const fmtV = (v) => v >= 1000 ? `${(v / 1000).toFixed(2)} km/s` : `${fmt(v, 0)} m/s`;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama v\u1D3F\u1D39\u209B – T: teoría cinética", "v\u1D3F\u1D39\u209B – T diagram: kinetic theory")}
        </div>
        <div className="muted" style={{ fontSize: 12 }}>
          {t(`M = ${fmt(M, 1)} g/mol`, `M = ${fmt(M, 1)} g/mol`)}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Diagrama vrms-T teoría cinética", "Kinetic theory vrms-T diagram")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f0fdf4" stroke="#86efac" />

          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          <path d={pathD} fill="none" stroke="#16a34a" strokeWidth="2.5" />

          <circle cx={xOf(Tmid)} cy={yOf(v_mid)} r="5" fill="#f97316" />

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Temperatura T (K)", "Temperature T (K)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("v_rms (m/s)", "v_rms (m/s)")}
          </text>

          <text x={padL - 4} y={padT + cH}  fontSize="9" fill="#64748b" textAnchor="end">{fmtV(v_min)}</text>
          <text x={padL - 4} y={padT + 8}   fontSize="9" fill="#64748b" textAnchor="end">{fmtV(v_max)}</text>
          <text x={padL}      y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tmin, 0)}</text>
          <text x={padL + cW} y={padT + cH + 14} fontSize="9" fill="#64748b" textAnchor="middle">{fmt(Tmax, 0)}</text>

          <text x={xOf(Tmid) + 8} y={yOf(v_mid) - 6} fontSize="10" fill="#16a34a">
            {t(`v ≈ ${fmtV(v_mid)}`, `v ≈ ${fmtV(v_mid)}`)}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `v_rms proporcional a √T: curva cóncava, no lineal`,
            `v_rms proportional to √T: concave curve, not linear`
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
