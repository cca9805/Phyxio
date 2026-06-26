import React from 'react';
import { 
  SVG_CONTROL_TYPES, 
  SVG_MOTION_TYPES, 
  SVG_SCENE_TYPES,
  SVG_COLORS
} from "../svgGrammar";

const profile = {
  id: 'flujo-en-tuberias',
  key: 'flujo-en-tuberias',
  meta: {
    id: 'flujo-en-tuberias',
    leafId: 'flujo-en-tuberias',
    title: { es: 'Ecuación de Darcy-Weisbach', en: 'Darcy-Weisbach Equation' },
    subtitle: {
      es: 'Caída de presión por fricción en conductos cilíndricos.',
      en: 'Pressure drop due to friction in cylindrical ducts.'
    }
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se pierde presión a lo largo de una tubería debido al rozamiento?",
      en: "How is pressure lost along a pipe due to friction?",
    },
    magnitud_estrella: "dp",
    interpretation_binding: {
      dp: "perdia_presion_total",
      v: "velocidad_particulas",
      f: "factor_rozamiento",
      D: "diametro_tubo"
    }
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 800 500",
  svgHeight: 520,

  params: {
    schema: [
      {
        key: 'L',
        default: 50,
        label: { es: 'Longitud (L)', en: 'Length (L)' },
        unit: 'm',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 200,
        step: 5
      },
      {
        key: 'D',
        default: 0.2,
        label: { es: 'Diámetro (D)', en: 'Diameter (D)' },
        unit: 'm',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.05,
        max: 0.5,
        step: 0.05
      },
      {
        key: 'v',
        default: 2,
        label: { es: 'Velocidad (v)', en: 'Velocity (v)' },
        unit: 'm/s',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 10,
        step: 0.5
      },
      {
        key: 'f',
        default: 0.02,
        label: { es: 'Fricción (f)', en: 'Friction (f)' },
        unit: '1',
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.01,
        max: 0.1,
        step: 0.005
      }
    ],
    derivations: {
      dp: ({ f, L, D, v }) => Number(f) * (Number(L) / Math.max(Number(D), 0.01)) * (1000 * Math.pow(Number(v), 2) / 2)
    }
  },

  infoCards: [
    {
      key: 'dp_card',
      label: { es: 'Caída de Presión', en: 'Pressure Drop' },
      result: ({ p, fmt }) => `${fmt(p.dp, 0)} Pa`,
      description: {
        es: 'Pérdida total por rozamiento viscoso.',
        en: 'Total loss due to viscous friction.'
      }
    },
    {
      key: 'grad_card',
      label: { es: 'Gradiente', en: 'Gradient' },
      result: ({ p, fmt }) => `${fmt(p.dp / p.L, 1)} Pa/m`,
      description: {
        es: 'Pérdida por cada metro de tubería.',
        en: 'Loss per each meter of pipe.'
      },
      highlight: ({ p }) => p.f > 0.05 ? "Alta rugosidad" : "Eficiente"
    }
  ],

  motion: { type: SVG_MOTION_TYPES.STATIC },

  render: ({ p, lang = "es", toNum, fmt }) => {
    const { L, D, v, f, dp } = p;
    const colors = SVG_COLORS;

    // Visual calculations
    const pipeY = 250;
    const pipeHeight = toNum(D) * 400;
    const pipeLength = 600;
    const pipeX = 100;

    return (
      <g>
        {/* Tubería principal */}
        <rect 
          x={pipeX} y={pipeY - pipeHeight/2} 
          width={pipeLength} height={pipeHeight} 
          fill="#1e293b" stroke="#64748b" strokeWidth="4" 
        />
        
        {/* Fluido con gradiente de presión */}
        <defs>
          <linearGradient id="pressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect 
          x={pipeX} y={pipeY - pipeHeight/2 + 4} 
          width={pipeLength} height={pipeHeight - 8} 
          fill="url(#pressGrad)" 
        />

        {/* Perfil de Velocidad (Parabólico aprox) */}
        {[...Array(7)].map((_, i) => {
          const yOff = (i - 3) * (pipeHeight / 8);
          const factor = 1 - Math.pow(yOff / (pipeHeight/2), 2);
          const vLen = toNum(v) * factor * 15;
          return (
            <line 
              key={i}
              x1={pipeX + 50} y1={pipeY + yOff}
              x2={pipeX + 50 + vLen} y2={pipeY + yOff}
              stroke={colors.VELOCITY} strokeWidth="2"
              markerEnd="url(#arrow-v)"
            />
          );
        })}

        {/* Manómetros */}
        <g transform={`translate(${pipeX + 50}, ${pipeY - pipeHeight/2 - 40})`}>
          <circle r="30" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <text textAnchor="middle" y="5" fill="#fff" fontSize="12">P₁</text>
        </g>
        <g transform={`translate(${pipeX + pipeLength - 50}, ${pipeY - pipeHeight/2 - 40})`}>
          <circle r="30" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <text textAnchor="middle" y="5" fill="#ef4444" fontSize="12">P₂</text>
          <path d="M 0,-15 A 15,15 0 0 1 15,0" fill="none" stroke="#ef4444" strokeWidth="2" />
        </g>

        {/* Etiquetas Dimensionales */}
        <line x1={pipeX} y1={pipeY + pipeHeight/2 + 20} x2={pipeX + pipeLength} y2={pipeY + pipeHeight/2 + 20} stroke="#94a3b8" strokeDasharray="4 4" />
        <text x={pipeX + pipeLength/2} y={pipeY + pipeHeight/2 + 40} fill="#94a3b8" textAnchor="middle" fontSize="14">L = {fmt(L)} m</text>

        <line x1={pipeX - 20} y1={pipeY - pipeHeight/2} x2={pipeX - 20} y2={pipeY + pipeHeight/2} stroke="#94a3b8" strokeDasharray="4 4" />
        <text x={pipeX - 60} y={pipeY} fill="#94a3b8" textAnchor="middle" fontSize="14" transform={`rotate(-90, ${pipeX - 60}, ${pipeY})`}>D = {fmt(D)} m</text>

        <defs>
          <marker id="arrow-v" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill={colors.VELOCITY} />
          </marker>
        </defs>
      </g>
    );
  }
};

export default profile;
