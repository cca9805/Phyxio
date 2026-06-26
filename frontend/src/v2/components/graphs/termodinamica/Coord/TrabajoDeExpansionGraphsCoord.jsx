import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cuánto trabajo realiza un gas sobre el émbolo al expandirse variando la presión o el volumen?",
    en: "How much work does a gas do on the piston when it expands at constant or variable pressure?",
  },
  variable_control: "V",
  magnitud_estrella: "trabajo_termodinamico",
  formula: "W = p·ΔV",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "TrabajoDeExpansionGraphsCoord",
  title: {
    es: "Trabajo de expansión — área bajo la curva p(V)",
    en: "Expansion work — area under the p(V) curve",
  },
  defaultParams: {
    presion: 2e5,
    Vi: 1e-3,
    Vf: 4e-3,
  },
  controls: [
    { id: "presion", label: { es: "Presión p (Pa)", en: "Pressure p (Pa)" }, min: 0.5e5, max: 5e5, step: 0.5e5 },
    { id: "Vi",     label: { es: "V inicial (m³)", en: "Initial V (m³)" }, min: 0.5e-3, max: 3e-3, step: 0.5e-3 },
    { id: "Vf",     label: { es: "V final (m³)",   en: "Final V (m³)" },   min: 1e-3,   max: 6e-3, step: 0.5e-3 },
  ],
  compute: (pNum) => {
    const p   = Number.isFinite(pNum.presion) ? pNum.presion : 2e5;
    const Vi  = Number.isFinite(pNum.Vi) ? pNum.Vi : 1e-3;
    const Vf  = Number.isFinite(pNum.Vf) ? pNum.Vf : 4e-3;
    const DeltaV = Vf - Vi;
    const W = p * DeltaV;
    return {
      data: [{ V: Vi, p }, { V: Vf, p }],
      extra: {
        interpretationTarget: "trabajo_termodinamico",
        interpretationValue: W,
        graphState: { p, Vi, Vf, DeltaV, W },
      },
    };
  },
  render: ({ pNum }) => {
    const p   = Number.isFinite(pNum.presion) ? pNum.presion : 2e5;
    const Vi  = Number.isFinite(pNum.Vi) ? pNum.Vi : 1e-3;
    const Vf  = Number.isFinite(pNum.Vf) ? pNum.Vf : 4e-3;
    const DeltaV = Vf - Vi;
    const W = p * DeltaV;
    const isExpansion = DeltaV > 0;

    const fmtJ  = (v) => Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(1)} kJ` : `${v.toFixed(0)} J`;
    const fmtPa = (v) => `${(v / 1e5).toFixed(1)}×10⁵ Pa`;
    const fmtV  = (v) => `${(v * 1e3).toFixed(1)} L`;

    const W_svg = 320, H_svg = 220;
    const padL = 58, padR = 15, padT = 20, padB = 35;
    const cW = W_svg - padL - padR;
    const cH = H_svg - padT - padB;

    const VMax = Math.max(Vi, Vf) * 1.2;
    const pMax = p * 1.45;

    const xOf = (V) => padL + (V / Math.max(VMax, 1e-9)) * cW;
    const yOf = (pv) => padT + cH - (pv / Math.max(pMax, 1)) * cH;

    const x1  = xOf(Math.min(Vi, Vf));
    const x2  = xOf(Math.max(Vi, Vf));
    const y_p = yOf(p);
    const y0  = yOf(0);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama p-V — trabajo de expansión isobárica", "p-V diagram — isobaric expansion work")}
        </div>

        <svg viewBox={`0 0 ${W_svg} ${H_svg}`} role="img"
          aria-label={t("Área bajo la curva isobárica en el diagrama p-V", "Area under isobaric curve in the p-V diagram")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="4" fill="#f8fafc" stroke="#e2e8f0" />

          {/* Shaded work area */}
          <rect
            x={x1} y={y_p}
            width={x2 - x1} height={y0 - y_p}
            fill={isExpansion ? "#dbeafe" : "#fee2e2"}
            opacity="0.75"
          />

          {/* Axes */}
          <line x1={padL} y1={padT}      x2={padL}      y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* Isobaric process line */}
          <line x1={x1} y1={y_p} x2={x2} y2={y_p} stroke="#0369a1" strokeWidth="2.5" />

          {/* Arrow on the process line */}
          {isExpansion && x2 - x1 > 20 && (
            <polygon
              points={`${(x1 + x2) / 2 + 6},${y_p - 5} ${(x1 + x2) / 2 + 6},${y_p + 5} ${(x1 + x2) / 2 + 13},${y_p}`}
              fill="#0369a1"
            />
          )}

          {/* Dashed verticals */}
          <line x1={x1} y1={y_p} x2={x1} y2={y0} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />
          <line x1={x2} y1={y_p} x2={x2} y2={y0} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,3" />

          {/* Axis labels */}
          <text x={padL - 4} y={y_p + 4}   fontSize="9" fill="#475569" textAnchor="end">{fmtPa(p)}</text>
          <text x={x1}       y={padT + cH + 13} fontSize="9" fill="#475569" textAnchor="middle">{fmtV(Vi)}</text>
          <text x={x2}       y={padT + cH + 13} fontSize="9" fill="#475569" textAnchor="middle">{fmtV(Vf)}</text>

          {/* Area annotation */}
          {x2 - x1 > 30 && (
            <text x={(x1 + x2) / 2} y={(y_p + y0) / 2 + 4} fontSize="10" fill="#1e40af" textAnchor="middle">
              {t("W = área", "W = area")}
            </text>
          )}

          {/* Axis titles */}
          <text x={padL + cW / 2} y={H_svg - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Volumen V (m³)", "Volume V (m³)")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
            transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Presión p (Pa)", "Pressure p (Pa)")}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `W = p·ΔV = ${fmtJ(W)}  (ΔV = ${fmtV(DeltaV)}, p = ${fmtPa(p)})`,
            `W = p·ΔV = ${fmtJ(W)}  (ΔV = ${fmtV(DeltaV)}, p = ${fmtPa(p)})`,
          )}
        </div>
      </div>
    );
  },
});
