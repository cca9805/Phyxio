import React from 'react';
import { 
  SVG_CONTROL_TYPES, 
  SVG_MOTION_TYPES, 
  SVG_SCENE_TYPES,
  SVG_COLORS
} from "../svgGrammar";

const toNum = (x, fallback) => {
  if (x && typeof x === "object" && "value" in x) return Number(x.value) || fallback;
  const n = Number(x);
  return Number.isFinite(n) ? n : fallback;
};

const profile = {
  id: "densidad",
  key: "densidad",
  meta: { 
    id: "densidad",
    leafId: "densidad", 
    title: { es: "Concepto de Densidad", en: "Concept of Density" },
    subtitle: {
      es: "Relación entre masa y volumen de una sustancia.",
      en: "Relationship between mass and volume of a substance."
    }
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo permite la densidad relacionar masa y volumen para anticipar el comportamiento de un fluido?",
      en: "How does density relate mass and volume to anticipate the behavior of a fluid?",
    },
    magnitud_estrella: "rho",
  },

  interpretation_binding: {
    target: "rho",
    magnitudes: ["rho", "m", "V"],
    formula: "densidad",
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 520,

  params: {
    schema: [
      {
        key: 'rho',
        default: 800,
        label: { es: 'Densidad ρ', en: 'Density ρ' },
        unit: 'kg/m³',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 100,
        max: 2000,
        step: 10
      },
      {
        key: 'rho_0',
        default: 1000,
        label: { es: 'Referencia ρ₀', en: 'Reference ρ₀' },
        unit: 'kg/m³',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 100,
        max: 2000,
        step: 10
      }
    ],
    derivations: {
      rho_rel: ({ rho, rho_0 }) => toNum(rho, 800) / Math.max(toNum(rho_0, 1000), 1),
      delta_rho: ({ rho, rho_0 }) => toNum(rho, 800) - toNum(rho_0, 1000)
    }
  },

  infoCards: [
    {
      key: "densidad_analisis",
      label: { es: "Análisis de Densidad", en: "Density Analysis" },
      result: ({ p, fmt }) => `ρ = ${fmt(p.rho, 0)} kg/m³`,
      description: {
        es: "Masa contenida por unidad de volumen.",
        en: "Mass contained per unit volume."
      }
    },
    {
      key: "densidad_relativa",
      label: { es: "Densidad Relativa", en: "Relative Density" },
      result: ({ p, fmt }) => `ρ_rel = ${fmt(p.rho_rel, 2)}`,
      description: {
        es: "Relación respecto al fluido de referencia.",
        en: "Ratio relative to the reference fluid."
      },
      highlight: ({ p }) => p.rho_rel > 1 ? "Hunde" : "Flota",
      highlightColor: ({ p }) => p.rho_rel > 1 ? "#f43f5e" : "#34d399"
    }
  ],

  motion: { type: SVG_MOTION_TYPES.STATIC },

  render: ({ p, lang = "es", toNum, fmt }) => {
    const rho = toNum(p.rho, 800);
    const rho_0 = toNum(p.rho_0, 1000);
    const colors = SVG_COLORS;

    // Visualización: dos columnas (probetas)
    const hMax = 300;
    const h1 = (rho / 2000) * hMax;
    const h2 = (rho_0 / 2000) * hMax;
    
    const x1 = 200;
    const x2 = 500;
    const yBase = 400;
    const w = 100;

    return (
      <g>
        {/* Probeta 1 (Muestra) */}
        <rect x={x1} y={yBase - hMax} width={w} height={hMax} fill="none" stroke="#64748b" strokeWidth="2" rx="5" />
        <rect x={x1+2} y={yBase - h1} width={w-4} height={h1} fill={colors.VELOCITY} fillOpacity="0.4" rx="3" />
        <text x={x1 + w/2} y={yBase + 30} fill="#fff" textAnchor="middle" fontSize="16" fontWeight="900">
          {lang === "en" ? "Sample" : "Muestra"}
        </text>
        <text x={x1 + w/2} y={yBase - h1 - 10} fill={colors.VELOCITY} textAnchor="middle" fontSize="14" fontWeight="950">
          {fmt(rho, 0)}
        </text>

        {/* Probeta 2 (Referencia) */}
        <rect x={x2} y={yBase - hMax} width={w} height={hMax} fill="none" stroke="#64748b" strokeWidth="2" rx="5" />
        <rect x={x2+2} y={yBase - h2} width={w-4} height={h2} fill={colors.NORMAL} fillOpacity="0.4" rx="3" />
        <text x={x2 + w/2} y={yBase + 30} fill="#fff" textAnchor="middle" fontSize="16" fontWeight="900">
          {lang === "en" ? "Reference" : "Referencia"}
        </text>
        <text x={x2 + w/2} y={yBase - h2 - 10} fill={colors.NORMAL} textAnchor="middle" fontSize="14" fontWeight="950">
          {fmt(rho_0, 0)}
        </text>

        {/* Comparativa */}
        <line x1={x1+w} y1={yBase - h1} x2={x2} y2={yBase - h2} stroke="rgba(255,255,255,0.2)" strokeDasharray="5 5" />
      </g>
    );
  }
};

export default profile;
