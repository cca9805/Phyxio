import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";
import MathInline from "@/v2/components/shared/MathInline";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo relaciona el trabajo y la forma del proceso la lectura de un diagrama p-V?",
    en: "How does the work and process shape relate to reading a P-V diagram?",
  },
  variable_control: "V",
  magnitud_estrella: "P",
  formula: "W = \int_{V_1}^{V_2}P\,dV",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "DiagramasPVGraphsCoord",
  title: {
    es: "Diagrama p-V y trabajo",
    en: "P-V diagram and work",
  },
  defaultParams: {
    P1: 100000,
    V1: 1,
    P2: 50000,
    V2: 2,
  },
  controls: [
    { id: "P1", label: { es: "P₁ (Pa)", en: "P₁ (Pa)" }, min: 0, max: 300000, step: 5000 },
    { id: "V1", label: { es: "V₁ (m³)", en: "V₁ (m³)" }, min: 0.1, max: 5, step: 0.1 },
    { id: "P2", label: { es: "P₂ (Pa)", en: "P₂ (Pa)" }, min: 0, max: 300000, step: 5000 },
    { id: "V2", label: { es: "V₂ (m³)", en: "V₂ (m³)" }, min: 0.1, max: 5, step: 0.1 },
  ],
  compute: (pNum) => {
    const P1 = Number.isFinite(pNum.P1) ? pNum.P1 : 100000;
    const V1 = Number.isFinite(pNum.V1) ? pNum.V1 : 1;
    const P2 = Number.isFinite(pNum.P2) ? pNum.P2 : 50000;
    const V2 = Number.isFinite(pNum.V2) ? pNum.V2 : 2;
    const data = [
      { V: V1, P: P1 },
      { V: V2, P: P2 },
    ];
    const W = ((P1 + P2) / 2) * (V2 - V1);

    return {
      data,
      extra: {
        interpretationTarget: "P",
        interpretationValue: W,
        graphState: { P1, V1, P2, V2, W },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    const P1 = Number.isFinite(pNum.P1) ? pNum.P1 : 100000;
    const V1 = Number.isFinite(pNum.V1) ? pNum.V1 : 1;
    const P2 = Number.isFinite(pNum.P2) ? pNum.P2 : 50000;
    const V2 = Number.isFinite(pNum.V2) ? pNum.V2 : 2;
    const W = ((P1 + P2) / 2) * (V2 - V1);
    const xMin = Math.min(V1, V2);
    const xMax = Math.max(V1, V2);
    const yMin = 0;
    const yMax = Math.max(P1, P2) * 1.1;
    const xOf = (x) => 50 + ((x - xMin) / Math.max(xMax - xMin, 0.0001)) * 260;
    const yOf = (y) => 280 - ((y - yMin) / Math.max(yMax - yMin, 0.0001)) * 220;
    const path = data
      .map((pt, idx) => `${idx === 0 ? "M" : "L"} ${xOf(pt.V)} ${yOf(pt.P)}`)
      .join(" ");

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("Lectura de proceso p-V", "P-V process reading")}</div>
        <div className="muted">
          <MathInline latex={"W=\int_{V_1}^{V_2}P\,dV"} />
        </div>
        <svg viewBox="0 0 340 300" role="img" aria-label={t("Diagrama p-V", "P-V diagram")}> 
          <rect x="45" y="40" width="260" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <line x1="45" y1="40" x2="45" y2="260" stroke="#64748b" />
          <line x1="45" y1="260" x2="305" y2="260" stroke="#64748b" />
          <path d={path} fill="none" stroke="#0f766e" strokeWidth="4" />
          <circle cx={xOf(V1)} cy={yOf(P1)} r="6" fill="#f97316" />
          <circle cx={xOf(V2)} cy={yOf(P2)} r="6" fill="#f97316" />
          <text x="310" y="265" fontSize="10" fill="#475569" textAnchor="end">
            {t("V", "V")}
          </text>
          <text x="35" y="35" fontSize="10" fill="#475569" textAnchor="middle">
            {t("P", "P")}
          </text>
          <text x="170" y="295" fontSize="10" fill="#475569" textAnchor="middle">
            {t("Volumen", "Volume")}
          </text>
        </svg>
        <div className="muted" style={{ fontSize: 13 }}>
          {t("Trabajo aproximado", "Approximate work")}: <strong>{W.toFixed(0)} J</strong>
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
