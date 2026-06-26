import React from 'react';
import { 
  SVG_CONTROL_TYPES, 
  SVG_MOTION_TYPES, 
  SVG_SCENE_TYPES,
  SVG_COLORS
} from "../svgGrammar";

const profile = {
  id: 'pascal',
  key: 'pascal',
  meta: {
    id: 'pascal',
    leafId: 'principio-de-pascal',
    title: { es: 'Principio de Pascal', en: 'Pascal\'s Principle' },
    subtitle: {
      es: 'Transmisión de presión y multiplicación de fuerza en una prensa hidráulica.',
      en: 'Pressure transmission and force multiplication in a hydraulic press.'
    }
  },


  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se transmite la presión a través de un fluido confinado y cómo permite multiplicar fuerzas?",
      en: "How is pressure transmitted through a confined fluid and how does it allow force multiplication?",
    },
    magnitud_estrella: "F2",
    interpretation_binding: {
      F1: "vector_f1",
      F2: "vector_f2",
      p: "fluido_central"
    }
  },


  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 520,

  params: {
    schema: [
      {
        key: 'F1',
        default: 100,
        label: { es: 'Fuerza Entrada F₁', en: 'Input Force F₁' },
        unit: 'N',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 10,
        max: 500,
        step: 10
      },
      {
        key: 'A1',
        default: 0.01,
        label: { es: 'Área Émbolo 1 (A₁)', en: 'Piston Area 1 (A₁)' },
        unit: 'm²',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.005,
        max: 0.05,
        step: 0.005
      },
      {
        key: 'A2',
        default: 0.05,
        label: { es: 'Área Émbolo 2 (A₂)', en: 'Piston Area 2 (A₂)' },
        unit: 'm²',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.01,
        max: 0.25,
        step: 0.01
      }
    ],
    derivations: {
      p: ({ F1, A1 }) => Number(F1) / Math.max(Number(A1), 0.001),
      F2: ({ F1, A1, A2 }) => {
        const _p = Number(F1) / Math.max(Number(A1), 0.001);
        return _p * Number(A2);
      }
    }
  },

  infoCards: [
    {
      key: 'p_analysis',
      label: { es: 'Presión del Sistema', en: 'System Pressure' },
      result: ({ p, fmt }) => `${fmt(p.p, 1)} Pa`,
      description: {
        es: 'La presión es igual en todos los puntos del fluido incompresible.',
        en: 'Pressure is equal at all points in the incompressible fluid.'
      }
    },
    {
      key: 'force_gain',
      label: { es: 'Fuerza de Salida', en: 'Output Force' },
      result: ({ p, fmt }) => `F₂ = ${fmt(p.F2, 1)} N`,
      description: {
        es: 'Efecto multiplicador debido a la diferencia de áreas.',
        en: 'Multiplier effect due to the area difference.'
      },
      highlight: ({ p }) => `Ganancia: ${(p.F2 / p.F1).toFixed(1)}x`
    }
  ],

  motion: { type: SVG_MOTION_TYPES.STATIC },

  render: ({ p, lang = "es", toNum, fmt }) => {
    const { F1, A1, A2, F2 } = p;
    const colors = SVG_COLORS;

    // Visualización
    const centerX = 400;
    const yBase = 400;
    const bridgeWidth = 200;
    const bridgeHeight = 80;

    const w1 = Math.sqrt(A1) * 600;
    const w2 = Math.sqrt(A2) * 600;
    
    const x1 = centerX - bridgeWidth/2 - w1/2;
    const x2 = centerX + bridgeWidth/2 + w2/2;

    return (
      <g>
        {/* Cuerpo de la prensa (Fluido) */}
        <path 
          d={`
            M ${x1 - w1/2},200 L ${x1 - w1/2},${yBase} 
            L ${x2 + w2/2},${yBase} L ${x2 + w2/2},200 
            L ${x2 - w2/2},200 L ${x2 - w2/2},${yBase - bridgeHeight}
            L ${x1 + w1/2},${yBase - bridgeHeight} L ${x1 + w1/2},200 Z
          `}
          fill={colors.VELOCITY}
          fillOpacity="0.2"
          stroke={colors.VELOCITY}
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Émbolo 1 */}
        <rect x={x1 - w1/2} y={200} width={w1} height="20" fill="#64748b" rx="4" />
        <line x1={x1} y1="100" x2={x1} y2="200" stroke="#fff" strokeWidth="4" markerEnd="url(#arrow-f1)" />
        <text x={x1} y="90" fill="#fff" textAnchor="middle" fontSize="16" fontWeight="950">F₁ = {fmt(F1)} N</text>

        {/* Émbolo 2 */}
        <rect x={x2 - w2/2} y={200 - (F2 > 1000 ? 50 : 0)} width={w2} height="20" fill="#64748b" rx="4" />
        <line x1={x2} y1="100" x2={x2} y2="150" stroke={colors.NORMAL} strokeWidth={4 + F2/500} markerEnd="url(#arrow-f2)" />
        <text x={x2} y="90" fill={colors.NORMAL} textAnchor="middle" fontSize="18" fontWeight="950">F₂ = {fmt(F2, 0)} N</text>

        {/* Etiquetas de Áreas */}
        <text x={x1} y={yBase + 30} fill="#94a3b8" textAnchor="middle" fontSize="14">A₁ = {fmt(A1, 3)} m²</text>
        <text x={x2} y={yBase + 30} fill="#94a3b8" textAnchor="middle" fontSize="14">A₂ = {fmt(A2, 3)} m²</text>

        {/* Leyenda de Presión */}
        <text x={centerX} y={yBase - bridgeHeight/2 + 5} fill="#fff" textAnchor="middle" fontSize="16" fontWeight="bold" opacity="0.6">
          p = {fmt(p.p / 1000, 1)} kPa
        </text>

        <defs>
          <marker id="arrow-f1" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
          </marker>
          <marker id="arrow-f2" markerWidth="10" markerHeight="10" refX="5" refY="0" orient="auto">
            <path d="M0,10 L5,0 L10,10 Z" fill={colors.NORMAL} />
          </marker>
        </defs>
      </g>
    );
  }
};

export default profile;
