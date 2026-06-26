import React from "react";
import { createCoordGraphPage } from "../../graphFactories.jsx";

const uiLang = "es";
const t = (es, en) => (uiLang === "en" ? en : es);

export const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía el trabajo mínimo de Carnot con la temperatura del foco frío?",
    en: "How does the minimum Carnot work vary with the cold reservoir temperature?",
  },
  variable_control: "T_C",
  magnitud_estrella: "W_min",
  formula: "W_min = Q_C * (T_H - T_C) / T_C",
  target_interpretable: true,
};

export default createCoordGraphPage({
  displayName: "PrincipioDeFuncionamientoGraphsCoord",
  title: {
    es: "Trabajo mínimo vs T_C (Carnot invertido)",
    en: "Minimum work vs T_C (reversed Carnot)",
  },
  defaultParams: {
    T_H: 308,
    Q_C: 1000,
    T_C_min: 200,
    T_C_max: 300,
  },
  controls: [
    { id: "T_H", label: { es: "Temperatura foco caliente T_H (K)", en: "Hot reservoir T_H (K)" }, min: 280, max: 400, step: 5 },
    { id: "Q_C", label: { es: "Calor extraído Q_C (J)", en: "Extracted heat Q_C (J)" }, min: 100, max: 5000, step: 100 },
    { id: "T_C_min", label: { es: "T_C mínima (K)", en: "T_C minimum (K)" }, min: 50, max: 280, step: 5 },
    { id: "T_C_max", label: { es: "T_C máxima (K)", en: "T_C maximum (K)" }, min: 250, max: 350, step: 5 },
  ],
  compute: (params) => {
    const { T_H, Q_C, T_C_min, T_C_max } = params;
    const N = 200;
    const step = (T_C_max - T_C_min) / (N - 1);
    const data = [];
    for (let i = 0; i < N; i++) {
      const T_C = T_C_min + i * step;
      if (T_C >= T_H || T_C <= 0) continue;
      const W_min = Q_C * (T_H - T_C) / T_C;
      const Q_H = Q_C + W_min;
      data.push({ T_C, W_min, Q_H });
    }
    return { data, params };
  },
  render: ({ data, params }, { width, height, margin }) => {
    if (!data || data.length === 0) return null;
    const { T_H } = params;

    const xMin = data[0].T_C;
    const xMax = data[data.length - 1].T_C;
    const yMax = Math.max(...data.map((d) => d.W_min)) * 1.1;

    const plotW = width - margin.left - margin.right;
    const plotH = height - margin.top - margin.bottom;

    const sx = (v) => margin.left + ((v - xMin) / (xMax - xMin)) * plotW;
    const sy = (v) => margin.top + plotH - (v / yMax) * plotH;

    const pathW = data.map((d, i) => `${i === 0 ? "M" : "L"}${sx(d.T_C).toFixed(2)},${sy(d.W_min).toFixed(2)}`).join(" ");
    const pathQH = data.map((d, i) => `${i === 0 ? "M" : "L"}${sx(d.T_C).toFixed(2)},${sy(d.Q_H).toFixed(2)}`).join(" ");

    const fillPath = data.map((d, i) => `${i === 0 ? "M" : "L"}${sx(d.T_C).toFixed(2)},${sy(d.W_min).toFixed(2)}`).join(" ")
      + ` L${sx(data[data.length - 1].T_C).toFixed(2)},${sy(0).toFixed(2)} L${sx(data[0].T_C).toFixed(2)},${sy(0).toFixed(2)} Z`;

    return (
      <svg width={width} height={height} style={{ fontFamily: "sans-serif", fontSize: 11 }}>
        <rect x={0} y={0} width={width} height={height} fill="#fafafa" />

        {/* Shaded area: work region */}
        <path d={fillPath} fill="rgba(220,50,50,0.12)" />

        {/* W_min curve */}
        <path d={pathW} fill="none" stroke="#d32f2f" strokeWidth={2.2} />

        {/* Q_H curve */}
        <path d={pathQH} fill="none" stroke="#1565c0" strokeWidth={1.8} strokeDasharray="6,3" />

        {/* Axes */}
        <line x1={margin.left} y1={margin.top + plotH} x2={margin.left + plotW} y2={margin.top + plotH} stroke="#333" strokeWidth={1} />
        <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + plotH} stroke="#333" strokeWidth={1} />

        {/* Labels */}
        <text x={margin.left + plotW / 2} y={height - 4} textAnchor="middle" fontSize={12}>
          {t("T_C (K)", "T_C (K)")}
        </text>
        <text x={14} y={margin.top + plotH / 2} textAnchor="middle" fontSize={12} transform={`rotate(-90,14,${margin.top + plotH / 2})`}>
          {t("Energía (J)", "Energy (J)")}
        </text>

        {/* Legend */}
        <line x1={margin.left + 10} y1={margin.top + 12} x2={margin.left + 35} y2={margin.top + 12} stroke="#d32f2f" strokeWidth={2.2} />
        <text x={margin.left + 40} y={margin.top + 16} fontSize={10} fill="#d32f2f">
          W_min
        </text>
        <line x1={margin.left + 10} y1={margin.top + 28} x2={margin.left + 35} y2={margin.top + 28} stroke="#1565c0" strokeWidth={1.8} strokeDasharray="6,3" />
        <text x={margin.left + 40} y={margin.top + 32} fontSize={10} fill="#1565c0">
          Q_H = Q_C + W_min
        </text>

        {/* T_H reference line */}
        <line x1={sx(Math.min(T_H, xMax))} y1={margin.top} x2={sx(Math.min(T_H, xMax))} y2={margin.top + plotH} stroke="#888" strokeWidth={1} strokeDasharray="3,3" />
        <text x={sx(Math.min(T_H, xMax)) + 3} y={margin.top + 14} fontSize={9} fill="#666">
          T_H={T_H} K
        </text>
      </svg>
    );
  },
});
