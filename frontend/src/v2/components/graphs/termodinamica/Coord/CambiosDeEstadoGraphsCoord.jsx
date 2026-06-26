import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cuánta energía se necesita para cambiar el estado de una sustancia y por qué la temperatura no varía durante la transición?",
    en: "How much energy is needed to change the state of a substance, and why does the temperature not change during the transition?",
  },
  variable_control: "Q",
  magnitud_estrella: "T",
  formula: "Q = m * L",
  target_interpretable: true,
};

// Heating curve for water (default): T as function of cumulative heat Q per kg
function buildHeatingCurve(Tstart, cSolid, Tfus, Lf, cLiq, Tvap, Lv, cGas, TendMax) {
  const points = [];

  // Segment 1: solid heating from Tstart to Tfus
  const Q1 = cSolid * (Tfus - Tstart);
  const seg1Steps = 20;
  for (let i = 0; i <= seg1Steps; i++) {
    const q = (i / seg1Steps) * Q1;
    points.push({ Q: q, T: Tstart + q / cSolid });
  }

  // Segment 2: melting plateau at Tfus
  const Q2 = Q1 + Lf;
  const seg2Steps = 10;
  for (let i = 1; i <= seg2Steps; i++) {
    const q = Q1 + (i / seg2Steps) * Lf;
    points.push({ Q: q, T: Tfus });
  }

  // Segment 3: liquid heating from Tfus to Tvap
  const Q3 = Q2 + cLiq * (Tvap - Tfus);
  const seg3Steps = 20;
  for (let i = 1; i <= seg3Steps; i++) {
    const dq = (i / seg3Steps) * cLiq * (Tvap - Tfus);
    const q = Q2 + dq;
    points.push({ Q: q, T: Tfus + dq / cLiq });
  }

  // Segment 4: vaporization plateau at Tvap
  const Q4 = Q3 + Lv;
  const seg4Steps = 10;
  for (let i = 1; i <= seg4Steps; i++) {
    const q = Q3 + (i / seg4Steps) * Lv;
    points.push({ Q: q, T: Tvap });
  }

  // Segment 5: gas heating from Tvap to TendMax
  const seg5Steps = 15;
  for (let i = 1; i <= seg5Steps; i++) {
    const dq = (i / seg5Steps) * cGas * (TendMax - Tvap);
    const q = Q4 + dq;
    points.push({ Q: q, T: Tvap + dq / cGas });
  }

  return { points, Q1, Q2, Q3, Q4 };
}

export default createCoordGraphPage({
  displayName: "CambiosDeEstadoGraphsCoord",
  title: {
    es: "Curva de calentamiento del agua — cambios de estado",
    en: "Water heating curve — phase changes",
  },
  defaultParams: {
    Tstart: 253,   // -20°C in K
    TendMax: 393,  // 120°C in K
  },
  controls: [
    { id: "Tstart",  label: { es: "T inicial (K)", en: "T initial (K)" }, min: 233, max: 270, step: 5 },
    { id: "TendMax", label: { es: "T final (K)",   en: "T final (K)" },   min: 380, max: 500, step: 5 },
  ],
  compute: (pNum) => {
    const Tstart  = Number.isFinite(pNum.Tstart)  ? pNum.Tstart  : 253;
    const TendMax = Number.isFinite(pNum.TendMax) ? pNum.TendMax : 393;

    // Water constants per kg
    const cSolid = 2090;
    const Tfus   = 273.15;
    const Lf     = 334000;
    const cLiq   = 4186;
    const Tvap   = 373.15;
    const Lv     = 2260000;
    const cGas   = 2010;

    const { points, Q1, Q2, Q3, Q4 } = buildHeatingCurve(
      Tstart, cSolid, Tfus, Lf, cLiq, Tvap, Lv, cGas, TendMax
    );

    return {
      data: points,
      extra: {
        interpretationTarget: "T",
        interpretationValue: Tvap,
        graphState: { Q1, Q2, Q3, Q4, Tfus, Tvap },
      },
    };
  },
  render: ({ data, pNum, extra, linked, loadFromCalculator }) => {
    const Tstart  = Number.isFinite(pNum.Tstart)  ? pNum.Tstart  : 253;
    const TendMax = Number.isFinite(pNum.TendMax) ? pNum.TendMax : 393;

    const cSolid = 2090;
    const Tfus   = 273.15;
    const Lf     = 334000;
    const cLiq   = 4186;
    const Tvap   = 373.15;
    const Lv     = 2260000;
    const cGas   = 2010;

    const { points, Q1, Q2, Q3, Q4 } = buildHeatingCurve(
      Tstart, cSolid, Tfus, Lf, cLiq, Tvap, Lv, cGas, TendMax
    );

    const Qmax = points[points.length - 1].Q;
    const Tmin = Tstart - 5;
    const TmaxPlot = TendMax + 5;

    const W = 320;
    const H = 240;
    const padL = 52, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const xOf = (Q) => padL + (Q / Math.max(Qmax, 1)) * cW;
    const yOf = (T) => padT + cH - ((T - Tmin) / Math.max(Tmaxplot - Tmin, 1)) * cH;
    const Tmaxplot = Tmaxplot || TendMax + 5;

    // recompute yOf safely
    const yOfSafe = (T) => padT + cH - ((T - Tmin) / Math.max(TendMax + 5 - Tmin, 1)) * cH;

    const pathD = points
      .map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.Q).toFixed(1)} ${yOfSafe(pt.T).toFixed(1)}`)
      .join(" ");

    const fmtQ = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(2)} MJ` : `${(v / 1000).toFixed(0)} kJ`;
    const fmtT = (v) => `${(v - 273.15).toFixed(0)}°C`;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Curva de calentamiento del agua (1 kg)", "Water heating curve (1 kg)")}
        </div>
        <div className="muted" style={{ fontSize: 11 }}>
          {t("Hielo → agua → vapor · Calor latente visible como mesetas", "Ice → water → steam · Latent heat visible as plateaus")}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
             aria-label={t("Curva de calentamiento con cambios de estado", "Heating curve with phase changes")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="6" fill="#f8fafc" stroke="#e2e8f0" />
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* phase region backgrounds */}
          <rect x={xOf(0)} y={padT} width={xOf(Q1) - xOf(0)} height={cH} fill="#dbeafe" opacity="0.4" />
          <rect x={xOf(Q1)} y={padT} width={xOf(Q2) - xOf(Q1)} height={cH} fill="#bbf7d0" opacity="0.5" />
          <rect x={xOf(Q2)} y={padT} width={xOf(Q3) - xOf(Q2)} height={cH} fill="#dbeafe" opacity="0.4" />
          <rect x={xOf(Q3)} y={padT} width={xOf(Q4) - xOf(Q3)} height={cH} fill="#fef9c3" opacity="0.6" />
          <rect x={xOf(Q4)} y={padT} width={cW - (xOf(Q4) - padL)} height={cH} fill="#ffe4e6" opacity="0.4" />

          <path d={pathD} fill="none" stroke="#dc2626" strokeWidth="2.5" />

          {/* axis labels */}
          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Calor absorbido (por kg)", "Heat absorbed (per kg)")}
          </text>
          <text x="10" y={padT + cH / 2} fontSize="10" fill="#475569" textAnchor="middle"
                transform={`rotate(-90,10,${padT + cH / 2})`}>
            {t("T (°C)", "T (°C)")}
          </text>

          {/* T tick labels */}
          <text x={padL - 3} y={yOfSafe(Tstart) + 4} fontSize="8" fill="#64748b" textAnchor="end">{fmtT(Tstart)}</text>
          <text x={padL - 3} y={yOfSafe(Tfus) + 4}   fontSize="8" fill="#059669" textAnchor="end">0°C</text>
          <text x={padL - 3} y={yOfSafe(Tvap) + 4}   fontSize="8" fill="#dc2626" textAnchor="end">100°C</text>

          {/* phase labels */}
          <text x={xOf(Q1 / 2)}              y={yOfSafe((Tstart + Tfus) / 2) - 4} fontSize="8" fill="#1d4ed8" textAnchor="middle">{t("hielo", "ice")}</text>
          <text x={xOf((Q1 + Q2) / 2)}       y={yOfSafe(Tfus) - 6}                fontSize="8" fill="#059669" textAnchor="middle">{t("fusión", "melting")}</text>
          <text x={xOf((Q2 + Q3) / 2)}       y={yOfSafe((Tfus + Tvap) / 2) - 4}  fontSize="8" fill="#1d4ed8" textAnchor="middle">{t("agua", "water")}</text>
          <text x={xOf((Q3 + Q4) / 2)}       y={yOfSafe(Tvap) - 6}                fontSize="8" fill="#b45309" textAnchor="middle">{t("vapor.", "vapor.")}</text>
          <text x={xOf((Q4 + Qmax) / 2)}     y={yOfSafe((Tvap + TendMax) / 2) - 4} fontSize="8" fill="#1d4ed8" textAnchor="middle">{t("vapor", "steam")}</text>
        </svg>

        <div className="muted" style={{ fontSize: 11 }}>
          {t(
            `Fusión: ${fmtQ(Lf)}/kg · Vaporización: ${fmtQ(Lv)}/kg`,
            `Melting: ${fmtQ(Lf)}/kg · Vaporization: ${fmtQ(Lv)}/kg`
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
