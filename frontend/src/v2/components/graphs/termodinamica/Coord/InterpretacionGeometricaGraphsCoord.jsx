import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo se visualiza el trabajo termodinámico como el área bajo la curva p(V) en el diagrama p-V?",
    en: "How is thermodynamic work visualised as the area under the p(V) curve in the p-V diagram?",
  },
  variable_control: "V",
  magnitud_estrella: "trabajo_termodinamico",
  formula: "W = area under p(V) curve",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "InterpretacionGeometricaGraphsCoord",
  title: {
    es: "Diagrama p-V — Trabajo como área bajo la curva",
    en: "p-V Diagram — Work as area under the curve",
  },
  defaultParams: {
    pAlta: 3e5,
    pBaja: 1e5,
    VBaja: 1e-3,
    VAlta: 3e-3,
  },
  controls: [
    { id: "pAlta", label: { es: "p alta (Pa)", en: "p high (Pa)" }, min: 1e5, max: 5e5, step: 0.5e5 },
    { id: "pBaja", label: { es: "p baja (Pa)", en: "p low (Pa)" },  min: 0.5e5, max: 3e5, step: 0.5e5 },
    { id: "VBaja", label: { es: "V mín (m³)",  en: "V min (m³)" }, min: 0.5e-3, max: 2e-3, step: 0.5e-3 },
    { id: "VAlta", label: { es: "V máx (m³)",  en: "V max (m³)" }, min: 1e-3,   max: 5e-3, step: 0.5e-3 },
  ],
  compute: (pNum) => {
    const pAlta = Number.isFinite(pNum.pAlta) ? pNum.pAlta : 3e5;
    const pBaja = Number.isFinite(pNum.pBaja) ? pNum.pBaja : 1e5;
    const VBaja = Number.isFinite(pNum.VBaja) ? pNum.VBaja : 1e-3;
    const VAlta = Number.isFinite(pNum.VAlta) ? pNum.VAlta : 3e-3;

    const DeltaV = VAlta - VBaja;
    const DeltaP = pAlta - pBaja;
    const W_ciclo = DeltaP * DeltaV;
    const W_AB = pBaja * DeltaV;   // expansion at low p
    const W_CD = -pAlta * DeltaV;  // compression at high p

    const data = [
      { V: VBaja, p: pBaja },
      { V: VAlta, p: pBaja },
      { V: VAlta, p: pAlta },
      { V: VBaja, p: pAlta },
      { V: VBaja, p: pBaja },
    ];

    return {
      data,
      extra: {
        interpretationTarget: "trabajo_termodinamico",
        interpretationValue: W_ciclo,
        graphState: { pAlta, pBaja, VBaja, VAlta, W_ciclo, W_AB, W_CD },
      },
    };
  },
  render: ({ data, pNum }) => {
    const pAlta = Number.isFinite(pNum.pAlta) ? pNum.pAlta : 3e5;
    const pBaja = Number.isFinite(pNum.pBaja) ? pNum.pBaja : 1e5;
    const VBaja = Number.isFinite(pNum.VBaja) ? pNum.VBaja : 1e-3;
    const VAlta = Number.isFinite(pNum.VAlta) ? pNum.VAlta : 3e-3;

    const W_ciclo = (pAlta - pBaja) * (VAlta - VBaja);
    const fmtJ = (v) => Math.abs(v) >= 1000 ? `${(v / 1000).toFixed(1)} kJ` : `${v.toFixed(0)} J`;
    const fmtPa = (v) => `${(v / 1e5).toFixed(1)}×10⁵ Pa`;
    const fmtV = (v) => `${(v * 1e3).toFixed(1)} L`;

    const W = 320;
    const H = 240;
    const padL = 60, padR = 15, padT = 20, padB = 35;
    const cW = W - padL - padR;
    const cH = H - padT - padB;

    const pMin = 0;
    const pMax = pAlta * 1.15;
    const VMin = 0;
    const VMax = VAlta * 1.15;

    const xOf = (V) => padL + ((V - VMin) / Math.max(VMax - VMin, 1e-6)) * cW;
    const yOf = (p) => padT + cH - ((p - pMin) / Math.max(pMax - pMin, 1)) * cH;

    const x1 = xOf(VBaja), x2 = xOf(VAlta);
    const y1 = yOf(pBaja), y2 = yOf(pAlta);

    const isClockwise = W_ciclo > 0;

    return (
      <div className="v2-card" style={{ display: "grid", gap: 8 }}>
        <div className="v2-card-title">
          {t("Diagrama p-V — área = trabajo neto del ciclo", "p-V diagram — area = net cycle work")}
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} role="img"
          aria-label={t("Diagrama p-V con ciclo rectangular", "p-V diagram with rectangular cycle")}>
          <rect x={padL} y={padT} width={cW} height={cH} rx="4" fill="#f8fafc" stroke="#e2e8f0" />

          {/* Shaded cycle area */}
          <rect
            x={x1} y={y2}
            width={x2 - x1} height={y1 - y2}
            fill={isClockwise ? "#dcfce7" : "#fee2e2"}
            opacity="0.7"
          />

          {/* Axes */}
          <line x1={padL} y1={padT} x2={padL} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />
          <line x1={padL} y1={padT + cH} x2={padL + cW} y2={padT + cH} stroke="#475569" strokeWidth="1.5" />

          {/* Cycle rectangle */}
          <polyline
            points={`${x1},${y1} ${x2},${y1} ${x2},${y2} ${x1},${y2} ${x1},${y1}`}
            fill="none" stroke="#0369a1" strokeWidth="2.5"
          />

          {/* Arrow indicator */}
          <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 + 5} fontSize="16" textAnchor="middle" fill="#0369a1">
            {isClockwise ? "↻" : "↺"}
          </text>

          {/* Labels */}
          <text x={x1 - 4} y={y1 + 4} fontSize="9" fill="#475569" textAnchor="end">{fmtPa(pBaja)}</text>
          <text x={x1 - 4} y={y2 + 4} fontSize="9" fill="#475569" textAnchor="end">{fmtPa(pAlta)}</text>
          <text x={x1} y={padT + cH + 14} fontSize="9" fill="#475569" textAnchor="middle">{fmtV(VBaja)}</text>
          <text x={x2} y={padT + cH + 14} fontSize="9" fill="#475569" textAnchor="middle">{fmtV(VAlta)}</text>

          <text x={padL + cW / 2} y={H - 4} fontSize="11" fill="#475569" textAnchor="middle">
            {t("Volumen V", "Volume V")}
          </text>
          <text x="12" y={padT + cH / 2} fontSize="11" fill="#475569" textAnchor="middle"
            transform={`rotate(-90,12,${padT + cH / 2})`}>
            {t("Presión p", "Pressure p")}
          </text>
        </svg>

        <div className="muted" style={{ fontSize: 12 }}>
          {t(
            `Área del ciclo = ${fmtJ(Math.abs(W_ciclo))}  |  ${isClockwise ? "Ciclo motor (↻)" : "Ciclo refrigerador (↺)"}`,
            `Cycle area = ${fmtJ(Math.abs(W_ciclo))}  |  ${isClockwise ? "Engine cycle (↻)" : "Refrigerator cycle (↺)"}`,
          )}
        </div>
      </div>
    );
  },
});
