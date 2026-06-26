import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Por que las ondas transversales de corte solo se propagan en solidos y que relacion tiene su velocidad con la rigidez del material?",
    en: "Why do transverse shear waves only propagate in solids and how does their velocity relate to material stiffness?",
  },
  variable_control: "Gshear",
  magnitud_estrella: "v_s",
  formula: "v_s = sqrt(G / rho)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "OndasTransversalesDeCorteGraphsCoord",
  title: {
    es: "Velocidad S vs modulo de cizalla",
    en: "S velocity vs shear modulus",
  },
  defaultParams: {
    Gshear: 30e9,
    rho: 2700,
  },
  controls: [
    { id: "Gshear", label: { es: "G (GPa)", en: "G (GPa)" }, min: 0.1e9, max: 200e9, step: 1e9 },
    { id: "rho", label: { es: "ρ kg/m³", en: "ρ kg/m³" }, min: 500, max: 12000, step: 100 },
  ],
  compute: (pNum) => {
    const rho = Number.isFinite(pNum.rho) ? pNum.rho : 2700;
    const Gshear = Number.isFinite(pNum.Gshear) ? pNum.Gshear : 30e9;
    const data = Array.from({ length: 50 }, (_, i) => {
      const G = ((i + 1) / 50) * 200e9;
      const vs = Math.sqrt(G / rho);
      return { x: G / 1e9, y: vs };
    });
    const vsCurrent = Math.sqrt(Gshear / rho);
    return {
      data,
      extra: {
        interpretationTarget: "v_s",
        interpretationValue: vsCurrent,
        graphState: { Gshear, rho },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    const Gshear = Number.isFinite(pNum.Gshear) ? pNum.Gshear : 30e9;
    const rho = Number.isFinite(pNum.rho) ? pNum.rho : 2700;
    const vsCurrent = Math.sqrt(Gshear / rho);
    const xMax = 200;
    const yMax = Math.max(...data.map((d) => d.y), 1);
    const width = 720;
    const height = 320;
    const left = 58;
    const top = 24;
    const plotW = 604;
    const plotH = 230;
    const xOf = (x) => left + (x / xMax) * plotW;
    const yOf = (y) => top + plotH - (y / yMax) * plotH;
    const path = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.y)}`).join(" ");

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("v_s vs G (modulo de cizalla)", "v_s vs G (shear modulus)")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={t("Velocidad S vs G", "S velocity vs G")}>
          <line x1={left} y1={top + plotH} x2={left + plotW} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={top} x2={left} y2={top + plotH} stroke="#64748b" />
          <path d={path} fill="none" stroke="#2563eb" strokeWidth="3" />
          <circle cx={xOf(Gshear / 1e9)} cy={yOf(vsCurrent)} r="6" fill="#f97316" />
          <text x={left + plotW / 2} y="302" textAnchor="middle" fontSize="12" fill="#475569">
            G_shear (GPa)
          </text>
          <text x="18" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + plotH / 2})`}>
            v_s (m/s)
          </text>
          <text x={xOf(Gshear / 1e9) + 10} y={yOf(vsCurrent) - 10} fontSize="11" fill="#f97316">
            {Math.round(vsCurrent)} m/s
          </text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Lectura", "Reading")}: <strong>{t("v_s crece como raiz cuadrada de G", "v_s grows as the square root of G")}</strong>
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


