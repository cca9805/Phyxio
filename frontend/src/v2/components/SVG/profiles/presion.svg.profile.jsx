import React from "react";
import {
  SVG_CONTROL_TYPES,
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_COLORS,
} from "../svgGrammar";

import { createSvgProfileContract } from "./svgProfileContracts.js";

const profile = {
  id: "presion",
  key: "presion",
  meta: {
    id: "presion",
    leafId: "presion",
    title: {
      es: "Presión Mecánica",
      en: "Mechanical Pressure",
    },
    subtitle: {
      es: "Relación entre fuerza normal y área de contacto.",
      en: "Relation between normal force and contact area.",
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo convierte la presión una fuerza distribuida sobre un área en una lectura física local?",
      en: "How does pressure turn a force distributed over an area into a local physical reading?",
    },
    magnitud_estrella: "p",
  },
  
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 520,

  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },

  interpretation_binding: {
    paramsIn: ["F", "A"],
    stateOut: ["p"],
    target: "p",
  },

  graph_contract: createSvgProfileContract({
    leafId: "presion",
    graphId: "presion-svg",
    purpose: {
      es: "Visualizar cómo la presión depende inversamente del área para una fuerza constante.",
      en: "Visualize how pressure depends inversely on area for a constant force.",
    },
    level: ["Secondary", "Upper Secondary", "University"],
    expectedInputs: ["F", "A"],
    derivedMagnitudes: ["p"],
    targetCandidates: ["p", "F", "A"],
    equations: ["p = F / A"],
    hypotheses: [
      {
        es: "La fuerza es perpendicular a la superficie.",
        en: "The force is perpendicular to the surface.",
      },
    ],
  }),

  params: {
    schema: [
      {
        key: "F",
        aliases: ["fuerza", "force"],
        default: 600,
        label: { es: "Fuerza (F)", en: "Force (F)" },
        unit: "N",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 100,
        max: 2000,
        step: 50,
      },
      {
        key: "A",
        aliases: ["area", "surface"],
        default: 0.01,
        label: { es: "Área (A)", en: "Area (A)" },
        unit: "m²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.001,
        max: 0.05,
        step: 0.001,
      },
    ],
    derivations: {
      p: ({ F, A }) => F / Math.max(A, 1e-6),
    },
  },

  infoCards: [
    {
      key: "p_result",
      label: { es: "Análisis de Presión", en: "Pressure Analysis" },
      result: ({ p, fmt }) => `p = ${fmt(p.p, 1)} Pa`,
      description: {
        es: "Carga normal concentrada sobre la superficie.",
        en: "Normal load concentrated on the surface.",
      },
    },
    {
      key: "a_result",
      label: { es: "Geometría", en: "Geometry" },
      result: ({ p, fmt }) => `A = ${fmt(p.A, 4)} m²`,
      description: {
        es: "Superficie efectiva de distribución de fuerza.",
        en: "Effective surface for force distribution.",
      },
    },
  ],

  render: ({ p, lang }) => {
    const { F, A, p: pressure } = p;
    const uiLang = lang === "en" ? "en" : "es";
    const fmt = (n, d = 0) => n.toLocaleString(uiLang === "en" ? "en-US" : "es-ES", { minimumFractionDigits: d, maximumFractionDigits: d });

    // Escalamiento visual
    // h = 0.05 m² -> ancho max (ej 400px)
    // A = 0.001 m² -> ancho min (ej 40px)
    const baseWidth = 100 + (A / 0.05) * 500; 
    const centerX = 400;
    const groundY = 400;
    const blockHeight = 40;
    const blockX = centerX - baseWidth / 2;
    const blockY = groundY - blockHeight;

    // Fuerza: F = 2000 -> 180px, F = 100 -> 30px
    const forceHeight = 30 + (F / 2000) * 200;
    const arrowY = blockY - forceHeight;

    return (
      <g>
        {/* Suelo */}
        <line x1="100" y1={groundY} x2="700" y2={groundY} stroke={SVG_COLORS.GROUND} strokeWidth="3" strokeDasharray="5 5" />
        
        {/* Superficie de contacto (Área) */}
        <rect 
          x={blockX} 
          y={blockY} 
          width={baseWidth} 
          height={blockHeight} 
          fill={SVG_COLORS.MASS_FILL} 
          stroke={SVG_COLORS.MASS_STROKE} 
          strokeWidth="2"
          rx="4"
        />
        
        {/* Etiqueta Área */}
        <text 
          x={centerX} 
          y={blockY + 25} 
          fill={SVG_COLORS.MASS_STROKE} 
          fontSize="14" 
          fontWeight="900" 
          textAnchor="middle"
        >
          {uiLang === "en" ? "Area A = " : "Área A = "}{fmt(A, 4)} m²
        </text>

        {/* Vector Fuerza */}
        <defs>
          <marker id="arrowhead-f" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={SVG_COLORS.NORMAL} />
          </marker>
        </defs>
        
        <line 
          x1={centerX} 
          y1={arrowY} 
          x2={centerX} 
          y2={blockY - 5} 
          stroke={SVG_COLORS.NORMAL} 
          strokeWidth="6" 
          markerEnd="url(#arrowhead-f)" 
        />
        
        <text 
          x={centerX + 15} 
          y={arrowY + 20} 
          fill={SVG_COLORS.NORMAL} 
          fontSize="18" 
          fontWeight="950"
        >
          F = {fmt(F)} N
        </text>

        {/* Indicador de Presión (Gauge simplificado) */}
        <g transform="translate(600, 150)">
          <circle cx="0" cy="0" r="60" fill="rgba(15,23,42,0.8)" stroke={SVG_COLORS.VELOCITY} strokeWidth="4" />
          <text x="0" y="-75" fill={SVG_COLORS.VELOCITY} fontSize="14" fontWeight="900" textAnchor="middle" style={{ textTransform: "uppercase" }}>
            {uiLang === "en" ? "Pressure Gauge" : "Manómetro"}
          </text>
          
          {/* Aguja (rotación basada en presión) */}
          {/* p max suele ser 2000 / 0.001 = 2,000,000 Pa. 
              p min = 100 / 0.05 = 2,000 Pa.
              Usamos escala log para que se mueva bien. */}
          {(() => {
            const minP = 2000;
            const maxP = 400000; // Capamos visualmente para que la aguja tenga rango útil
            const pVal = Math.max(minP, Math.min(maxP, pressure));
            const ratio = (Math.log10(pVal) - Math.log10(minP)) / (Math.log10(maxP) - Math.log10(minP));
            const angle = -120 + ratio * 240;
            return (
              <line 
                x1="0" y1="0" x2="0" y2="-50" 
                stroke="#f8fafc" strokeWidth="3" 
                transform={`rotate(${angle})`} 
              />
            );
          })()}
          
          <text x="0" y="25" fill="#f8fafc" fontSize="16" fontWeight="950" textAnchor="middle">
            {pressure > 1000 ? `${fmt(pressure / 1000, 1)} kPa` : `${fmt(pressure)} Pa`}
          </text>
        </g>

        {/* Etiqueta p = F/A */}
        <rect x="50" y="50" width="220" height="60" rx="12" fill="rgba(30,41,59,0.5)" stroke="rgba(255,255,255,0.1)" />
        <text x="65" y="85" fill="#bfdbfe" fontSize="22" fontWeight="950" fontFamily="serif">
          p = F / A
        </text>
      </g>
    );
  },

  interpretation: {
    header_bridge: {
      es: "La presión mide la concentración de fuerza sobre una superficie.",
      en: "Pressure measures the concentration of force on a surface.",
    },
  },
};

export default profile;
