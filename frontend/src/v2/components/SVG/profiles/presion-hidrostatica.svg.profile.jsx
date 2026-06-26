import React from "react";
import { 
  SVG_CONTROL_TYPES, 
  SVG_MOTION_TYPES, 
  SVG_SCENE_TYPES 
} from "../svgGrammar";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const profile = {
  meta: {
    id: "svg-presion-hidrostatica",
    leafId: "presion-hidrostatica",
    title: { es: "Presión Hidrostática", en: "Hydrostatic Pressure" },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo varía la presión en el interior de un fluido con la profundidad?",
      en: "How does pressure within a fluid vary with depth?",
    },
    magnitud_estrella: "p",
  },

  interpretation_binding: {
    paramsIn: ["rho", "g", "h", "p0"],
    stateOut: ["p"],
    target: "p"
  },

  viewBox: "0 0 900 650",
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "rho",
        default: 1000,
        label: { es: "Densidad ρ", en: "Density ρ" },
        unit: "kg/m³",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 100,
        max: 15000,
        step: 10,
      },
      {
        key: "h",
        default: 10,
        label: { es: "Profundidad h", en: "Depth h" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        key: "p0",
        default: 101325,
        label: { es: "Presión Atmosférica p₀", en: "Atmospheric Pressure p₀" },
        unit: "Pa",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 200000,
        step: 1000,
      },
    ],
    derivations: {
      p: ({ rho, h, p0 }) => safeNum(p0, 101325) + safeNum(rho, 1000) * 9.81 * safeNum(h, 10),
    },
  },

  infoCards: [
    {
      key: "presion",
      label: { es: "Presión Total", en: "Total Pressure" },
      result: ({ p, lang }) => `p: ${(safeNum(p?.p) / 1000).toFixed(1)} kPa`
    }
  ],

  motion: { type: SVG_MOTION_TYPES.STATIC },

  render: ({ p, lang = "es", toNum }) => {
    const h = toNum(p?.h, 10);
    const waterLevel = 150;
    const groundLevel = 600;
    const currentY = waterLevel + (h / 100) * (groundLevel - waterLevel);

    return (
      <g>
        <rect x="0" y="0" width="900" height="650" fill="#0f172a" />
        
        {/* Fluido */}
        <rect x="150" y={waterLevel} width="600" height={groundLevel - waterLevel} fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
        
        {/* Superficie libre */}
        <line x1="150" y1={waterLevel} x2="750" y2={waterLevel} stroke="#38bdf8" strokeWidth="4" />
        <path d={`M 430,${waterLevel-20} L 470,${waterLevel-20} L 450,${waterLevel} Z`} fill="#38bdf8" />

        {/* Punto de medida */}
        <circle cx="450" cy={currentY} r="8" fill="#fb923c" stroke="#fff" strokeWidth="2" />
        
        {/* Dimensión h */}
        <line x1="500" y1={waterLevel} x2="500" y2={currentY} stroke="#fff" strokeWidth="2" markerEnd="url(#arrow-h)" />
        <line x1="490" y1={waterLevel} x2="510" y2={waterLevel} stroke="#fff" strokeWidth="2" />
        <text x="515" y={(waterLevel + currentY) / 2} fill="#fff" fontSize="14" fontWeight="bold">h = {fmt(h, 1)} m</text>

        {/* Vectores de presión (creciendo con profundidad) */}
        {Array.from({ length: 6 }).map((_, i) => {
          const y = waterLevel + (i + 1) * (currentY - waterLevel) / 6;
          const len = 20 + (y - waterLevel) * 0.5;
          return (
            <g key={i}>
              <line x1="400" y1={y} x2={400 - len} y2={y} stroke="#f472b6" strokeWidth="2" markerEnd="url(#arrow-p)" />
              <line x1="500" y1={y} x2={500 + len} y2={y} stroke="#f472b6" strokeWidth="2" markerEnd="url(#arrow-p)" />
            </g>
          );
        })}

        <defs>
          <marker id="arrow-h" markerWidth="10" markerHeight="10" refX="5" refY="0" orient="auto">
            <path d="M0,0 L5,10 L10,0 Z" fill="#fff" />
          </marker>
          <marker id="arrow-p" markerWidth="8" markerHeight="8" refX="8" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#f472b6" />
          </marker>
        </defs>
      </g>
    );
  }
};

const fmt = (n, d = 1) => Number(n).toFixed(d).replace(".", ",");

export default profile;
