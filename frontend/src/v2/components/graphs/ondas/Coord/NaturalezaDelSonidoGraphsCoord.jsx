import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se propaga el sonido como presion acustica longitudinal en un medio material?",
    en: "How does sound propagate as longitudinal acoustic pressure in a material medium?",
  },
  variable_control: "x",
  magnitud_estrella: "p_ac",
  formula: "p_ac = p0 * cos(2 * pi * f_son * t - 2 * pi * x / lambda_son)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "NaturalezaDelSonidoGraphsCoord",
  title: {
    es: "Presion acustica y desplazamiento longitudinal",
    en: "Acoustic pressure and longitudinal displacement",
  },
  defaultParams: {
    p0: 1,
    lambda: 1.2,
    phase: 0,
  },
  controls: [
    { id: "p0", label: { es: "p0 (Pa)", en: "p0 (Pa)" }, min: 0.02, max: 5, step: 0.02 },
    { id: "lambda", label: { es: "lambda (m)", en: "lambda (m)" }, min: 0.2, max: 4, step: 0.05 },
    { id: "phase", label: { es: "fase", en: "phase" }, min: 0, max: 6.28, step: 0.05 },
  ],
  compute: (pNum) => {
    const p0 = Number.isFinite(pNum.p0) ? Math.max(0.001, pNum.p0) : 1;
    const lambda = Number.isFinite(pNum.lambda) ? Math.max(0.05, pNum.lambda) : 1.2;
    const phase = Number.isFinite(pNum.phase) ? pNum.phase : 0;
    const data = Array.from({ length: 96 }, (_, i) => {
      const x = (i / 95) * 2 * lambda;
      const angle = phase - (2 * Math.PI * x) / lambda;
      const p_ac = p0 * Math.cos(angle);
      const xi = Math.sin(angle);
      return { x, p_ac, xi };
    });
    return {
      data,
      extra: {
        interpretationTarget: "p_ac",
        interpretationValue: data[12]?.p_ac ?? 0,
        graphState: { p_ac: data[12]?.p_ac ?? 0, p0_ac: p0, lambda_son: lambda, xi: data[12]?.xi ?? 0 },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator, lang }) => {
    void graph_identity;
    const localLang = lang === "en" || pNum._lang === "en" ? "en" : "es";
    const tt = (es, en) => (localLang === "en" ? en : es);
    const p0 = Number.isFinite(pNum.p0) ? Math.max(0.001, pNum.p0) : 1;
    const lambda = Number.isFinite(pNum.lambda) ? Math.max(0.05, pNum.lambda) : 1.2;
    const width = 720;
    const height = 330;
    const left = 58;
    const top = 30;
    const plotW = 604;
    const plotH = 220;
    const xMax = 2 * lambda;
    const xOf = (x) => left + (x / xMax) * plotW;
    const yOfP = (y) => top + plotH / 2 - (y / p0) * (plotH * 0.36);
    const yOfXi = (y) => top + plotH / 2 - y * (plotH * 0.26);
    const pressure = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOfP(pt.p_ac)}`).join(" ");
    const displacement = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOfXi(pt.xi)}`).join(" ");

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{tt("Onda sonora longitudinal", "Longitudinal sound wave")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={tt("Presion acustica frente a posicion", "Acoustic pressure versus position")}>
          <line x1={left} y1={top + plotH / 2} x2={left + plotW} y2={top + plotH / 2} stroke="#94a3b8" strokeDasharray="4 4" />
          <line x1={left} y1={top} x2={left} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={top + plotH} x2={left + plotW} y2={top + plotH} stroke="#64748b" />
          <path d={pressure} fill="none" stroke="#dc2626" strokeWidth="3" />
          <path d={displacement} fill="none" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="7 5" />
          <text x={left + plotW / 2} y="306" textAnchor="middle" fontSize="12" fill="#475569">
            {tt("posicion x", "position x")}
          </text>
          <text x="18" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + plotH / 2})`}>
            {tt("p_ac y xi", "p_ac and xi")}
          </text>
          <text x={left + plotW - 170} y={top + 18} fontSize="12" fill="#dc2626">
            {tt("presion acustica", "acoustic pressure")}
          </text>
          <text x={left + plotW - 170} y={top + 36} fontSize="12" fill="#2563eb">
            {tt("desplazamiento", "displacement")}
          </text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {tt("Lectura", "Reading")}: <strong>{tt("los maximos de presion marcan compresiones; el desplazamiento queda desfasado", "pressure maxima mark compressions; displacement is phase shifted")}</strong>{" "}
          · p0 = {p0.toFixed(2)} Pa · lambda = {lambda.toFixed(2)} m
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


