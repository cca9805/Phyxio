import React from 'react';
import { 
  SVG_CONTROL_TYPES, 
  SVG_MOTION_TYPES, 
  SVG_SCENE_TYPES,
  SVG_COLORS
} from "../svgGrammar";

const profile = {
  id: 'aplicaciones-ingenieriles',
  key: 'aplicaciones-ingenieriles',
  meta: {
    id: 'aplicaciones-ingenieriles',
    leafId: 'aplicaciones-ingenieriles',
    title: { es: 'Potencia y Eficiencia', en: 'Power and Efficiency' },
    subtitle: {
      es: 'Análisis de potencia útil y consumo en bombas industriales.',
      en: 'Analysis of useful power and consumption in industrial pumps.'
    }
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo influye el caudal y la presión en la potencia útil de una bomba?",
      en: "How do flow rate and pressure influence the useful power of a pump?",
    },
    magnitud_estrella: "P_util",
    interpretation_binding: {
      P_util: "potencia_util_vector",
      P_in: "potencia_entrada_valor",
      Q: "caudal_visual",
      dp: "presion_gauge"
    }
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 520,

  params: {
    schema: [
      {
        key: 'Q',
        default: 0.05,
        label: { es: 'Caudal (Q)', en: 'Flow Rate (Q)' },
        unit: 'm³/s',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.01,
        max: 0.2,
        step: 0.01
      },
      {
        key: 'dp',
        default: 100000,
        label: { es: 'Presión (Δp)', en: 'Pressure (Δp)' },
        unit: 'Pa',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 10000,
        max: 500000,
        step: 10000
      },
      {
        key: 'eta',
        default: 0.7,
        label: { es: 'Eficiencia (η)', en: 'Efficiency (η)' },
        unit: '1',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 0.95,
        step: 0.05
      }
    ],
    derivations: {
      P_util: ({ Q, dp }) => Number(Q) * Number(dp),
      P_in: ({ Q, dp, eta }) => (Number(Q) * Number(dp)) / Math.max(Number(eta), 0.1)
    }
  },

  infoCards: [
    {
      key: 'power_summary',
      label: { es: 'Potencia Útil', en: 'Useful Power' },
      result: ({ p, fmt }) => `${fmt(p.P_util, 0)} W`,
      description: {
        es: 'Energía neta entregada al fluido por segundo.',
        en: 'Net energy delivered to the fluid per second.'
      }
    },
    {
      key: 'input_summary',
      label: { es: 'Potencia de Entrada', en: 'Input Power' },
      result: ({ p, fmt }) => `${fmt(p.P_in, 0)} W`,
      description: {
        es: 'Consumo total de energía incluyendo pérdidas.',
        en: 'Total energy consumption including losses.'
      },
      highlight: ({ p }) => `Pérdida: ${Math.round(p.P_in - p.P_util)} W`
    }
  ],

  motion: { type: SVG_MOTION_TYPES.STATIC },

  render: ({ p, lang = "es", toNum, fmt }) => {
    const { Q, dp, eta, P_util, P_in } = p;
    const colors = SVG_COLORS;

    // Visual Scales
    const pipeY = 300;
    const pumpX = 400;
    const flowWidth = toNum(Q) * 500;
    const pressureColor = toNum(dp) > 250000 ? "#ef4444" : colors.VELOCITY;

    return (
      <g>
        {/* Tubería de Succión */}
        <rect x="50" y={pipeY - 20} width="350" height="40" fill="#334155" />
        <rect x="50" y={pipeY - 15} width="350" height="30" fill={colors.FLUID} fillOpacity="0.3" />
        
        {/* Bomba */}
        <circle cx={pumpX} cy={pipeY} r="60" fill="#1e293b" stroke="#64748b" strokeWidth="4" />
        <path d={`M ${pumpX-30},${pipeY-30} L ${pumpX+30},${pipeY+30} M ${pumpX+30},${pipeY-30} L ${pumpX-30},${pipeY+30}`} stroke="#475569" strokeWidth="4" />
        <circle cx={pumpX} cy={pipeY} r="10" fill="#94a3b8" />
        
        {/* Tubería de Descarga */}
        <rect x={pumpX + 40} y={pipeY - 60} width="40" height="60" fill="#334155" />
        <rect x={pumpX + 40} y="50" width="300" height="40" fill="#334155" />
        <rect x={pumpX + 45} y="55" width="290" height="30" fill={pressureColor} fillOpacity="0.4" />

        {/* Indicadores de Potencia (Vectores) */}
        {/* Potencia de Entrada (Motor) */}
        <line x1={pumpX} y1={pipeY + 80} x2={pumpX} y2={pipeY + 150} stroke={colors.ACCELERATION} strokeWidth="8" markerStart="url(#arrow-in)" />
        <text x={pumpX + 15} y={pipeY + 130} fill={colors.ACCELERATION} fontSize="18" fontWeight="bold">P_in = {fmt(P_in, 0)} W</text>

        {/* Potencia Útil (Al fluido) */}
        <line x1={pumpX + 100} y1="70" x2={pumpX + 200} y2="70" stroke={colors.FORCE} strokeWidth="6" markerEnd="url(#arrow-out)" />
        <text x={pumpX + 150} y="45" fill={colors.FORCE} textAnchor="middle" fontSize="18" fontWeight="bold">P_util = {fmt(P_util, 0)} W</text>

        {/* Gauge de Presión */}
        <circle cx="600" cy="250" r="40" fill="#0f172a" stroke="#475569" strokeWidth="2" />
        <line 
          x1="600" y1="250" 
          x2={600 + Math.cos((dp/500000)*Math.PI - Math.PI)*30} 
          y2={250 + Math.sin((dp/500000)*Math.PI - Math.PI)*30} 
          stroke="#ef4444" strokeWidth="3" 
        />
        <text x="600" y="310" fill="#94a3b8" textAnchor="middle" fontSize="14">Δp = {fmt(dp/1000, 1)} kPa</text>

        {/* Info de Eficiencia */}
        <rect x="50" y="400" width="200" height="60" fill="#1e293b" rx="8" />
        <text x="65" y="425" fill="#94a3b8" fontSize="14">{lang === 'es' ? 'Eficiencia:' : 'Efficiency:'}</text>
        <text x="65" y="450" fill={colors.NORMAL} fontSize="22" fontWeight="bold">{Math.round(eta*100)}%</text>

        <defs>
          <marker id="arrow-in" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="10 0, 0 3.5, 10 7" fill={colors.ACCELERATION} />
          </marker>
          <marker id="arrow-out" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={colors.FORCE} />
          </marker>
        </defs>
      </g>
    );
  }
};

export default profile;
