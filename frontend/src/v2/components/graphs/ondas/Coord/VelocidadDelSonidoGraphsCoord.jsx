import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como determinan la rigidez, la densidad y la temperatura la velocidad del sonido?",
    en: "How do stiffness, density, and temperature determine the speed of sound?",
  },
  variable_control: "T_abs",
  magnitud_estrella: "v_son",
  formula: "v_son = sqrt(gamma_gas * R_gas * T_abs / M_mol)",
  target_interpretable: true,
};

const R_GAS = 8.314;

export default createCoordGraphPage({
  displayName: "VelocidadDelSonidoGraphsCoord",
  title: {
    es: "Velocidad del sonido frente a temperatura",
    en: "Speed of sound versus temperature",
  },
  defaultParams: {
    T_C: 20,
    gamma_gas: 1.4,
    M_mol: 0.029,
  },
  controls: [
    { id: "T_C", label: { es: "T (C)", en: "T (C)" }, min: -20, max: 50, step: 1 },
    { id: "gamma_gas", label: { es: "gamma", en: "gamma" }, min: 1.1, max: 1.67, step: 0.01 },
    { id: "M_mol", label: { es: "M (kg/mol)", en: "M (kg/mol)" }, min: 0.004, max: 0.05, step: 0.001 },
  ],
  compute: (pNum) => {
    void t;
    const T_C = Number.isFinite(pNum.T_C) ? pNum.T_C : 20;
    const gamma_gas = Number.isFinite(pNum.gamma_gas) ? Math.max(1.01, pNum.gamma_gas) : 1.4;
    const M_mol = Number.isFinite(pNum.M_mol) ? Math.max(0.001, pNum.M_mol) : 0.029;
    const T_abs = T_C + 273.15;
    const v_son = Math.sqrt((gamma_gas * R_GAS * T_abs) / M_mol);
    const rho_med = 1.204 * (293.15 / Math.max(T_abs, 1));
    const B_mod = rho_med * v_son * v_son;
    const data = Array.from({ length: 86 }, (_, i) => {
      const tempC = -20 + i * (70 / 85);
      const tempK = tempC + 273.15;
      return {
        T_C: tempC,
        T_abs: tempK,
        v_son: Math.sqrt((gamma_gas * R_GAS * tempK) / M_mol),
      };
    });
    return {
      data,
      extra: {
        interpretationTarget: "v_son",
        interpretationValue: v_son,
        graphState: { v_son, T_abs, gamma_gas, M_mol, rho_med, B_mod },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator, lang }) => {
    void graph_identity;
    const localLang = lang === "en" || pNum._lang === "en" ? "en" : "es";
    const tt = (es, en) => (localLang === "en" ? en : es);
    const T_C = Number.isFinite(pNum.T_C) ? pNum.T_C : 20;
    const gamma_gas = Number.isFinite(pNum.gamma_gas) ? Math.max(1.01, pNum.gamma_gas) : 1.4;
    const M_mol = Number.isFinite(pNum.M_mol) ? Math.max(0.001, pNum.M_mol) : 0.029;
    const T_abs = T_C + 273.15;
    const v_son = Math.sqrt((gamma_gas * R_GAS * T_abs) / M_mol);

    const width = 720;
    const height = 330;
    const left = 64;
    const top = 28;
    const plotW = 590;
    const plotH = 220;
    const yMin = Math.min(...data.map((pt) => pt.v_son)) - 8;
    const yMax = Math.max(...data.map((pt) => pt.v_son)) + 8;
    const xOf = (x) => left + ((x + 20) / 70) * plotW;
    const yOf = (y) => top + plotH - ((y - yMin) / (yMax - yMin)) * plotH;
    const curve = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.T_C)} ${yOf(pt.v_son)}`).join(" ");
    const markerX = xOf(T_C);
    const markerY = yOf(v_son);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{tt("Lectura termodinamica de v_son", "Thermodynamic reading of v_son")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={tt("Velocidad del sonido frente a temperatura absoluta", "Speed of sound versus absolute temperature")}>
          <rect x={left} y={top} width={plotW} height={plotH} rx="6" fill="#f8fafc" stroke="#cbd5e1" />
          {[0, 0.25, 0.5, 0.75, 1].map((g) => (
            <line key={g} x1={left} x2={left + plotW} y1={top + g * plotH} y2={top + g * plotH} stroke="#e2e8f0" />
          ))}
          <path d={curve} fill="none" stroke="#0f766e" strokeWidth="4" />
          <line x1={markerX} x2={markerX} y1={top} y2={top + plotH} stroke="#f97316" strokeDasharray="6 6" />
          <circle cx={markerX} cy={markerY} r="7" fill="#f97316" stroke="#fff" strokeWidth="2" />
          <text x={left + plotW / 2} y="306" textAnchor="middle" fontSize="12" fill="#475569">
            {tt("temperatura del aire T", "air temperature T")}
          </text>
          <text x="20" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,20,${top + plotH / 2})`}>
            v_son
          </text>
          <text x={left + 8} y={top + 18} fontSize="12" fill="#0f766e" fontWeight="700">
            {tt("gas ideal adiabatico", "adiabatic ideal gas")}
          </text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {tt("Lectura", "Reading")}: <strong>{v_son.toFixed(1)} m/s</strong>{" "}
          · {tt("T_abs", "T_abs")} = {T_abs.toFixed(1)} K · gamma = {gamma_gas.toFixed(2)} · M = {M_mol.toFixed(3)} kg/mol
        </div>
        {!linked ? (
          <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
            {tt("Cargar desde calculadora", "Load from calculator")}
          </button>
        ) : null}
      </div>
    );
  },
});

export { graph_identity };


