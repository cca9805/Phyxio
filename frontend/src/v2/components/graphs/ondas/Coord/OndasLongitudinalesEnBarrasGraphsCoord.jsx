import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se propagan las ondas de compresion a lo largo de una barra y que determina su velocidad?",
    en: "How do compression waves propagate along a bar and what determines their speed?",
  },
  variable_control: "rho",
  magnitud_estrella: "v_barra",
  formula: "v_barra = sqrt(E_young / rho_vol)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "OndasLongitudinalesEnBarrasGraphsCoord",
  title: {
    es: "Velocidad longitudinal en barra",
    en: "Longitudinal speed in a bar",
  },
  defaultParams: {
    E: 210,
    rhoMin: 1000,
    rhoMax: 9000,
    area: 1.0,
  },
  controls: [
    { id: "E", label: { es: "E GPa", en: "E GPa" }, min: 1, max: 250, step: 5 },
    { id: "rhoMin", label: { es: "rho min", en: "rho min" }, min: 500, max: 6000, step: 250 },
    { id: "rhoMax", label: { es: "rho max", en: "rho max" }, min: 3000, max: 20000, step: 500 },
    { id: "area", label: { es: "area cm2", en: "area cm2" }, min: 0.2, max: 10, step: 0.2 },
  ],
  compute: (pNum) => {
    const E = Number.isFinite(pNum.E) ? pNum.E : 210;
    const rhoMin = Number.isFinite(pNum.rhoMin) ? pNum.rhoMin : 1000;
    const rhoMax = Math.max(rhoMin + 500, Number.isFinite(pNum.rhoMax) ? pNum.rhoMax : 9000);
    const area = Number.isFinite(pNum.area) ? pNum.area : 1;
    const Epa = E * 1e9;
    const areaM2 = area * 1e-4;
    const data = Array.from({ length: 54 }, (_, i) => {
      const rho = rhoMin + (i / 53) * (rhoMax - rhoMin);
      const v = Math.sqrt(Epa / rho);
      return {
        x: rho,
        y: v,
        impedance: rho * areaM2 * v,
      };
    });

    return {
      data,
      extra: {
        interpretationTarget: "v_barra",
        interpretationValue: data[Math.floor(data.length / 2)]?.y ?? 0,
        graphState: { E, rhoMin, rhoMax, area },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    const rhoMin = Number.isFinite(pNum.rhoMin) ? pNum.rhoMin : 1000;
    const rhoMax = Math.max(rhoMin + 500, Number.isFinite(pNum.rhoMax) ? pNum.rhoMax : 9000);
    const yMax = Math.max(...data.map((d) => d.y), 1);
    const yMin = Math.min(...data.map((d) => d.y), 0);
    const width = 720;
    const height = 320;
    const left = 58;
    const top = 24;
    const plotW = 604;
    const plotH = 230;
    const xOf = (x) => left + ((x - rhoMin) / Math.max(rhoMax - rhoMin, 1)) * plotW;
    const yOf = (y) => top + plotH - ((y - yMin) / Math.max(yMax - yMin, 1)) * plotH;
    const path = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.y)}`).join(" ");
    const sample = data[Math.floor(data.length * 0.7)] ?? data[0];

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("v_barra frente a densidad", "v_barra versus density")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={t("Velocidad longitudinal en funcion de la densidad", "Longitudinal speed as a function of density")}>
          <line x1={left} y1={top + plotH} x2={left + plotW} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={top} x2={left} y2={top + plotH} stroke="#64748b" />
          <path d={path} fill="none" stroke="#2563eb" strokeWidth="3" />
          <circle cx={xOf(sample.x)} cy={yOf(sample.y)} r="5" fill="#2563eb" />
          <text x={left + plotW / 2} y="302" textAnchor="middle" fontSize="12" fill="#475569">
            {t("densidad rho_vol", "density rho_vol")}
          </text>
          <text x="18" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + plotH / 2})`}>
            v_barra
          </text>
          <text x="488" y="48" fontSize="12" fill="#2563eb">v_barra = sqrt(E_young/rho_vol)</text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Lectura", "Reading")}: <strong>{t("mayor densidad reduce la velocidad", "higher density reduces speed")}</strong>
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


