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
    id: "svg-principio-fundamental-de-la-hidrostatica",
    leafId: "principio-fundamental-de-la-hidrostatica",
    title: { es: "Principio Fundamental", en: "Fundamental Principle" },
    subtitle: { es: "Diferencia de presión entre dos puntos", en: "Pressure difference between two points" },
  },

  graph_identity: "principio_fundamental_hidro_svg",
  pregunta_principal: {
    es: "¿Por qué la presión aumenta proporcionalmente con la profundidad?",
    en: "Why does pressure increase proportionally with depth?",
  },
  magnitud_estrella: "dp",

  interpretation_binding: {
    paramsIn: ["rho", "z1", "z2"],
    stateOut: ["dp"],
    target: "dp"
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
        key: "z1",
        default: 20,
        label: { es: "Cota z₁", en: "Elevation z₁" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 50,
        step: 0.5,
      },
      {
        key: "z2",
        default: 10,
        label: { es: "Cota z₂", en: "Elevation z₂" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 50,
        step: 0.5,
      },
    ],
    derivations: {
      dp: ({ rho, z1, z2 }) => {
        const r = safeNum(rho, 1000);
        const dz = safeNum(z1, 20) - safeNum(z2, 10);
        return r * 9.81 * dz;
      },
      dz: ({ z1, z2 }) => safeNum(z1, 20) - safeNum(z2, 10),
    },
  },

  infoCards: [
    {
      key: "dp",
      label: { es: "Diferencia de Presión", en: "Pressure Difference" },
      result: ({ p, lang }) => `Δp: ${(safeNum(p?.dp) / 1000).toFixed(1)} kPa`
    }
  ],

  motion: { type: SVG_MOTION_TYPES.STATIC },

  render: ({ p, lang = "es", toNum }) => {
    const z1 = toNum(p?.z1, 20);
    const z2 = toNum(p?.z2, 10);
    const topLevel = 50;
    const waterLevel = 100;
    const groundLevel = 600;
    
    // Mapeo inverso: cota mayor (z) -> punto más alto visualmente (y menor)
    const y1 = groundLevel - (z1 / 50) * (groundLevel - waterLevel);
    const y2 = groundLevel - (z2 / 50) * (groundLevel - waterLevel);

    return (
      <g>
        <rect x="0" y="0" width="900" height="650" fill="#0f172a" />
        
        {/* Fluido */}
        <rect x="200" y={waterLevel} width="500" height={groundLevel - waterLevel} fill="#38bdf8" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="2" />
        
        {/* Línea de superficie */}
        <line x1="200" y1={waterLevel} x2="700" y2={waterLevel} stroke="#38bdf8" strokeWidth="3" />

        {/* Puntos 1 y 2 */}
        <circle cx="450" cy={y1} r="7" fill="#60a5fa" stroke="#fff" strokeWidth="2" />
        <text x="430" y={y1} fill="#60a5fa" fontSize="14" fontWeight="bold" textAnchor="end">z₁</text>
        
        <circle cx="450" cy={y2} r="7" fill="#f87171" stroke="#fff" strokeWidth="2" />
        <text x="430" y={y2} fill="#f87171" fontSize="14" fontWeight="bold" textAnchor="end">z₂</text>

        {/* Cota Δz */}
        <line x1="520" y1={y1} x2="520" y2={y2} stroke="#fff" strokeWidth="2" markerStart="url(#arrow-h-rev)" markerEnd="url(#arrow-h)" />
        <line x1="510" y1={y1} x2="530" y2={y1} stroke="#fff" strokeWidth="2" />
        <line x1="510" y1={y2} x2="530" y2={y2} stroke="#fff" strokeWidth="2" />
        <text x="540" y={(y1 + y2) / 2} fill="#fff" fontSize="14" fontWeight="bold" dominantBaseline="middle">Δz = {fmt(Math.abs(z2-z1), 1)} m</text>

        {/* Leyenda formula */}
        <text x="450" y="50" fill="#93c5fd" fontSize="18" fontWeight="bold" textAnchor="middle">
          Δp = ρ · g · (z₁ - z₂)
        </text>

        <defs>
          <marker id="arrow-h" markerWidth="10" markerHeight="10" refX="5" refY="0" orient="auto">
            <path d="M0,0 L5,10 L10,0 Z" fill="#fff" />
          </marker>
          <marker id="arrow-h-rev" markerWidth="10" markerHeight="10" refX="5" refY="10" orient="auto">
            <path d="M0,10 L5,0 L10,10 Z" fill="#fff" />
          </marker>
        </defs>
      </g>
    );
  }
};

const fmt = (n, d = 1) => Number(n).toFixed(d).replace(".", ",");

export default profile;
