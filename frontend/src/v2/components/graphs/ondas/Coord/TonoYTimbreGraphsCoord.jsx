import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como determinan la frecuencia fundamental y las amplitudes armonicas el tono y el timbre?",
    en: "How do fundamental frequency and harmonic amplitudes determine pitch and timbre?",
  },
  variable_control: "n_arm",
  magnitud_estrella: "f1",
  formula: "fn = n_arm * f1; p_total = sum(An * cos(2*pi*fn*t))",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "TonoYTimbreGraphsCoord",
  title: {
    es: "Espectro armonico y forma de onda",
    en: "Harmonic spectrum and waveform",
  },
  defaultParams: {
    f1: 220,
    brightness: 0.55,
    oddOnly: 1,
  },
  controls: [
    { id: "f1", label: { es: "f1 (Hz)", en: "f1 (Hz)" }, min: 80, max: 880, step: 5 },
    { id: "brightness", label: { es: "brillo", en: "brightness" }, min: 0.1, max: 1, step: 0.05 },
    { id: "oddOnly", label: { es: "impares", en: "odd only" }, min: 0, max: 1, step: 1 },
  ],
  compute: (pNum) => {
    const f1 = Number.isFinite(pNum.f1) ? Math.max(1, pNum.f1) : 220;
    const brightness = Number.isFinite(pNum.brightness) ? Math.max(0.05, Math.min(1, pNum.brightness)) : 0.55;
    const oddOnly = Number(pNum.oddOnly ?? 1) >= 0.5;
    const harmonics = Array.from({ length: 10 }, (_, i) => {
      const n = i + 1;
      const active = !oddOnly || n % 2 === 1;
      const An = active ? Math.pow(brightness, n - 1) : 0;
      return { n_arm: n, fn: n * f1, An };
    });
    const wave = Array.from({ length: 96 }, (_, i) => {
      const tVal = i / 95;
      const p_total = harmonics.reduce((sum, h) => sum + h.An * Math.cos(2 * Math.PI * h.n_arm * tVal), 0);
      return { t: tVal, p_total };
    });
    return {
      data: { harmonics, wave },
      extra: {
        interpretationTarget: "f1",
        interpretationValue: f1,
        graphState: { f1, fn: harmonics[2]?.fn ?? 3 * f1, An: harmonics[0]?.An ?? 1, n_arm: 1, p_total: wave[0]?.p_total ?? 0 },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator, lang }) => {
    void graph_identity;
    void t;
    const localLang = lang === "en" || pNum._lang === "en" ? "en" : "es";
    const tt = (es, en) => (localLang === "en" ? en : es);
    const { harmonics, wave } = data;
    const width = 720;
    const height = 350;
    const left = 56;
    const top = 28;
    const plotW = 604;
    const specH = 128;
    const waveTop = 198;
    const waveH = 96;
    const maxA = Math.max(...harmonics.map((h) => h.An), 0.1);
    const maxP = Math.max(...wave.map((pt) => Math.abs(pt.p_total)), 0.1);
    const barGap = plotW / harmonics.length;
    const wavePath = wave
      .map((pt, i) => {
        const x = left + pt.t * plotW;
        const y = waveTop + waveH / 2 - (pt.p_total / maxP) * (waveH * 0.42);
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{tt("Tono y timbre en el espectro", "Pitch and timbre in the spectrum")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={tt("Espectro de amplitudes armonicas", "Harmonic amplitude spectrum")}>
          <line x1={left} y1={top + specH} x2={left + plotW} y2={top + specH} stroke="#64748b" />
          <line x1={left} y1={top} x2={left} y2={top + specH} stroke="#64748b" />
          {harmonics.map((h) => {
            const barH = (h.An / maxA) * (specH - 12);
            const x = left + (h.n_arm - 1) * barGap + barGap * 0.18;
            return (
              <g key={h.n_arm}>
                <rect x={x} y={top + specH - barH} width={barGap * 0.56} height={barH} fill={h.n_arm === 1 ? "#dc2626" : "#2563eb"} opacity={h.An > 0 ? 0.9 : 0.18} />
                <text x={x + barGap * 0.28} y={top + specH + 16} textAnchor="middle" fontSize="10" fill="#475569">
                  {h.n_arm}
                </text>
              </g>
            );
          })}
          <text x={left + plotW / 2} y={top + specH + 34} textAnchor="middle" fontSize="12" fill="#475569">
            {tt("numero de armonico n", "harmonic number n")}
          </text>
          <text x="18" y={top + specH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + specH / 2})`}>
            {tt("amplitud An", "amplitude An")}
          </text>
          <line x1={left} y1={waveTop + waveH / 2} x2={left + plotW} y2={waveTop + waveH / 2} stroke="#94a3b8" strokeDasharray="4 4" />
          <path d={wavePath} fill="none" stroke="#0f172a" strokeWidth="2.5" />
          <text x={left + plotW / 2} y="326" textAnchor="middle" fontSize="12" fill="#475569">
            {tt("un periodo T_per de p_total", "one T_per period of p_total")}
          </text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {tt("Lectura", "Reading")}: <strong>{tt("f1 fija el tono; las alturas An fijan el timbre", "f1 sets pitch; An heights set timbre")}</strong>{" "}
          · f1 = {(Number.isFinite(pNum.f1) ? pNum.f1 : 220).toFixed(0)} Hz
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


