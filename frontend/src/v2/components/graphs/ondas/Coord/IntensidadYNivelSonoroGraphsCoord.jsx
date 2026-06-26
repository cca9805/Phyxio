import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

const graph_identity = {
  pregunta_principal: {
    es: "Como se cuantifica la intensidad de un sonido y por que la escala logaritmica describe mejor la percepcion humana?",
    en: "How is sound intensity quantified and why does the logarithmic scale better describe human perception?",
  },
  variable_control: "r",
  magnitud_estrella: "I",
  formula: "I = P / (4 * pi * r^2); L = 10 * log10(I / I_0)",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "IntensidadYNivelSonoroGraphsCoord",
  title: {
    es: "Intensidad y nivel frente a distancia",
    en: "Intensity and level versus distance",
  },
  defaultParams: {
    P: 1,
    rMax: 30,
  },
  controls: [
    { id: "P", label: { es: "P acustica W", en: "acoustic P W" }, min: 0.01, max: 20, step: 0.01 },
    { id: "rMax", label: { es: "distancia max m", en: "max distance m" }, min: 2, max: 100, step: 1 },
  ],
  compute: (pNum) => {
    const P = Number.isFinite(pNum.P) ? Math.max(0.001, pNum.P) : 1;
    const rMax = Number.isFinite(pNum.rMax) ? Math.max(2, pNum.rMax) : 30;
    const I0 = 1e-12;
    const data = Array.from({ length: 72 }, (_, i) => {
      const r = 0.5 + (i / 71) * (rMax - 0.5);
      const I = P / (4 * Math.PI * r * r);
      const L = 10 * Math.log10(I / I0);
      return { x: r, y: L, I };
    });
    return {
      data,
      extra: {
        interpretationTarget: "I",
        interpretationValue: data[Math.floor(data.length / 3)]?.I ?? 0,
        graphState: { P, r: rMax / 3, I_0: I0 },
      },
    };
  },
  render: ({ data, pNum, linked, loadFromCalculator }) => {
    void graph_identity;
    const P = Number.isFinite(pNum.P) ? Math.max(0.001, pNum.P) : 1;
    const rMax = Number.isFinite(pNum.rMax) ? Math.max(2, pNum.rMax) : 30;
    const width = 720;
    const height = 320;
    const left = 58;
    const top = 24;
    const plotW = 604;
    const plotH = 230;
    const yMin = Math.min(...data.map((pt) => pt.y)) - 4;
    const yMax = Math.max(...data.map((pt) => pt.y)) + 4;
    const xOf = (x) => left + ((x - 0.5) / Math.max(rMax - 0.5, 0.1)) * plotW;
    const yOf = (y) => top + plotH - ((y - yMin) / Math.max(yMax - yMin, 1)) * plotH;
    const path = data.map((pt, i) => `${i === 0 ? "M" : "L"} ${xOf(pt.x)} ${yOf(pt.y)}`).join(" ");
    const y85 = yOf(85);

    return (
      <div className="v2-card" style={{ display: "grid", gap: 10 }}>
        <div className="v2-card-title">{t("Caida logaritmica del nivel sonoro", "Logarithmic falloff of sound level")}</div>
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={t("Nivel sonoro frente a distancia", "Sound level versus distance")}>
          <line x1={left} y1={top + plotH} x2={left + plotW} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={top} x2={left} y2={top + plotH} stroke="#64748b" />
          <line x1={left} y1={y85} x2={left + plotW} y2={y85} stroke="#dc2626" strokeDasharray="5 5" />
          <path d={path} fill="none" stroke="#2563eb" strokeWidth="3" />
          <text x={left + plotW / 2} y="302" textAnchor="middle" fontSize="12" fill="#475569">
            {t("distancia r", "distance r")}
          </text>
          <text x="18" y={top + plotH / 2} textAnchor="middle" fontSize="12" fill="#475569" transform={`rotate(-90,18,${top + plotH / 2})`}>
            {t("nivel L (dB)", "level L (dB)")}
          </text>
          <text x={left + plotW - 120} y={y85 - 8} fontSize="12" fill="#dc2626">
            {t("85 dB", "85 dB")}
          </text>
        </svg>
        <div className="muted" style={{ fontSize: 12 }}>
          {t("Lectura", "Reading")}: <strong>{t("al duplicar r, I cae a un cuarto y L baja unos 6 dB", "doubling r quarters I and lowers L by about 6 dB")}</strong> · P = {P.toFixed(2)} W
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

export { graph_identity };


