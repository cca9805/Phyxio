import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_MOTION_TYPES,
  SVG_SCENE_TYPES,
} from "../svgGrammar";

void SVG_CONTROL_TYPES;
void SVG_MOTION_TYPES;
void SVG_SCENE_TYPES;

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

void fmt;

const profile = {
  meta: {
    id: "svg-ecuacion-de-onda-electromagnetica",
    leafId: "ecuacion-de-onda-electromagnetica",
    title: {
      es: "Onda plana electromagnética",
      en: "Plane Electromagnetic Wave",
    },
    subtitle: {
      es: "Campos E y B transversales, propagación a c",
      en: "Transverse E and B fields, propagation at c",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se visualiza una onda electromagnética que se propaga y transporta energía mediante su campo?",
      en: "How is a propagating electromagnetic wave visualised as it transports energy through its field?",
    },
    magnitud_estrella: "campo_electrico",
    variable_control: "campo_electrico",
    interpretation_binding: {
      target: "campo_electrico",
      formula_ref: "solucion_onda_plana_E",
      result_key: "E",
    },
  },
  infoCards: [
    {
      key: "velocidad",
      label: { es: "Velocidad de propagación", en: "Propagation speed" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        const c = 2.998e8;
        return [
          isEs ? `c = ${(c / 1e8).toFixed(3)}×10⁸ m/s` : `c = ${(c / 1e8).toFixed(3)}×10⁸ m/s`,
          isEs ? "Igual para todas las frecuencias en el vacío" : "Same for all frequencies in vacuum",
        ];
      },
    },
    {
      key: "relacion_EB",
      label: { es: "Relación |E| / |B|", en: "Relation |E| / |B|" },
      lines: ({ p, lang }) => {
        const isEs = lang === "es";
        const E0 = safeNum(p?.E, 700);
        const B0 = E0 / 2.998e8;
        return [
          isEs ? `|E₀| = ${fmt(E0, 1, lang)} V/m` : `|E₀| = ${fmt(E0, 1, lang)} V/m`,
          isEs ? `|B₀| = ${(B0 * 1e6).toFixed(3)} μT` : `|B₀| = ${(B0 * 1e6).toFixed(3)} μT`,
          isEs ? "|E| / |B| = c" : "|E| / |B| = c",
        ];
      },
    },
  ],
  controls: [
    {
      id: "E",
      label: { es: "Amplitud E₀ (V/m)", en: "Amplitude E₀ (V/m)" },
      type: "slider",
      min: 10,
      max: 2000,
      step: 10,
      default: 700,
    },
  ],
  scene: SVG_SCENE_TYPES.CUSTOM,
  render: ({ p, lang = "es", dimensions = {} }) => {
    const isEs = lang === "es";
    const width = dimensions.width || 920;
    const height = dimensions.height || 520;
    const E0 = safeNum(p?.E, 700);
    const B0 = E0 / 2.998e8;
    const scaleE = 90 / 700;
    const scaleB = 90 / (700 / 2.998e8);
    const cy = height / 2;
    const steps = 60;
    const xStart = 40;
    const xEnd = width - 40;
    const xRange = xEnd - xStart;

    const ePoints = Array.from({ length: steps + 1 }, (_, i) => {
      const t = i / steps;
      const x = xStart + t * xRange;
      const y = cy - E0 * scaleE * Math.sin(2 * Math.PI * t * 2);
      return `${x},${y}`;
    }).join(" ");

    const bPoints = Array.from({ length: steps + 1 }, (_, i) => {
      const t = i / steps;
      const x = xStart + t * xRange;
      const y = cy - B0 * scaleB * Math.sin(2 * Math.PI * t * 2);
      return `${x},${y}`;
    }).join(" ");

    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <line x1={xStart} y1={cy} x2={xEnd} y2={cy} stroke="#555" strokeWidth={1} strokeDasharray="4 3" />
        <polyline points={ePoints} fill="none" stroke="#e05" strokeWidth={2.2} />
        <polyline points={bPoints} fill="none" stroke="#05e" strokeWidth={2.2} />
        <text x={xEnd - 5} y={cy - E0 * scaleE - 6} textAnchor="end" fontSize={12} fill="#e05" fontWeight="bold">E</text>
        <text x={xEnd - 5} y={cy - B0 * scaleB - 6} textAnchor="end" fontSize={12} fill="#05e" fontWeight="bold">B</text>
        <text x={xStart} y={height - 8} fontSize={11} fill="#888">
          {isEs ? "→ dirección de propagación (x)" : "→ propagation direction (x)"}
        </text>
        <text x={8} y={cy - 30} fontSize={10} fill="#555" writingMode="tb" textAnchor="middle">
          {isEs ? "campo" : "field"}
        </text>
      </svg>
    );
  },
};

export default profile;
