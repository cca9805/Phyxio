import React from "react";
import { 
  SVG_SCENE_TYPES, 
  SVG_MOTION_TYPES, 
  SVG_COLORS 
} from "../svgGrammar.js";

/**
 * Perfil SVG para Concepto de Fluido
 * Basado en el perfil de viscosidad Couette pero con identidad propia para el leaf fundamentos.
 */

const profile = {
  meta: {
    id: 'concepto-de-fluido',
    leafId: 'concepto-de-fluido',
    name: {
      es: 'Perfil de Viscosidad (Concepto de Fluido)',
      en: 'Viscosity Profile (Concept of Fluid)'
    },
    title: {
      es: 'Comportamiento de un Fluido',
      en: 'Fluid Behavior'
    },
    subtitle: {
      es: 'Respuesta mecánica ante esfuerzos tangenciales',
      en: 'Mechanical response to tangential stresses'
    },
    interpretation_binding: {
      paramsIn: ['mu', 'v', 'L'],
      stateOut: ['tau']
    },
    graph_identity: 'FluidosGraphsSvg',
    magnitud_estrella: 'tau',
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo cambia de forma un fluido bajo un esfuerzo cortante y de qué manera la viscosidad dinámica mide esa resistencia?",
      en: "How does a fluid change shape under shear stress and in what way does dynamic viscosity measure that resistance?",
    },
    magnitud_estrella: "tau",
  },

  viewBox: "0 0 850 520",
  svgHeight: 720,

  params: {
    schema: [
      {
        key: 'mu',
        default: 0.001,
        label: { es: 'Viscosidad Dinámica', en: 'Dynamic Viscosity' },
        unit: 'Pa·s',
        type: 'range',
        min: 0.0001,
        max: 0.1,
        step: 0.0001
      },
      {
        key: 'v',
        default: 1,
        label: { es: 'Velocidad Placa', en: 'Plate Velocity' },
        unit: 'm/s',
        type: 'range',
        min: 0,
        max: 5,
        step: 0.1
      },
      {
        key: 'L',
        default: 0.02,
        label: { es: 'Espesor', en: 'Thickness' },
        unit: 'm',
        type: 'range',
        min: 0.005,
        max: 0.1,
        step: 0.005
      }
    ],
    derivations: {
      tau: ({ mu, v, L }) => {
        const _mu = Number(mu) || 0.001;
        const _v = Number(v) || 0;
        const _L = Math.max(Number(L) || 0.001, 0.001);
        return _mu * (_v / _L);
      }
    }
  },

  infoCards: [
    {
      key: 'tau_info',
      label: { es: 'Esfuerzo Cortante', en: 'Shear Stress' },
      magnitude: 'tau',
      result: ({ p, fmt }) => `τ = ${fmt(p.tau, 4)} Pa`,
      description: {
        es: 'Fuerza tangencial por unidad de área.',
        en: 'Tangential force per unit area.'
      }
    },
    {
      key: 'mu_info',
      label: { es: 'Viscosidad', en: 'Viscosity' },
      magnitude: 'mu',
      description: {
        es: 'Resistencia interna del fluido.',
        en: 'Internal fluid resistance.'
      }
    }
  ],

  motion: { type: SVG_MOTION_TYPES.STATIC },
  scene: SVG_SCENE_TYPES.CUSTOM,

  render: ({ p, lang = "es", toNum, fmt }) => {
    const v = toNum(p.v, 1);
    const L = toNum(p.L, 0.02);
    
    // Escala visual centrada
    const centerX = 425;
    const centerY = 260;
    const width = 400;
    const height = 200;
    
    const scaleY = height / Math.max(L, 0.001);
    const scaleX = (width * 0.8) / Math.max(v || 1, 0.001);
    
    const xBase = centerX - width / 2;
    const yBase = centerY + height / 2;
    
    const points = `${xBase},${yBase} ${xBase + v * scaleX},${yBase - L * scaleY} ${xBase},${yBase - L * scaleY}`;
    const colors = SVG_COLORS;

    return (
      <g>
        {/* Fondo decorativo */}
        <rect x="0" y="0" width="850" height="520" fill="#0f172a" />
        
        {/* Placa inferior (fija) */}
        <line x1={xBase - 50} y1={yBase} x2={xBase + width + 50} y2={yBase} stroke="#64748b" strokeWidth="6" />
        {/* Placa superior (móvil) */}
        <line x1={xBase - 50} y1={yBase - L * scaleY} x2={xBase + width + 50} y2={yBase - L * scaleY} stroke={colors.VELOCITY} strokeWidth="6" />
        
        {/* Área del perfil */}
        <polygon points={points} fill={colors.VELOCITY} fillOpacity="0.15" />
        
        {/* Perfil de velocidad (línea de gradiente) */}
        <line x1={xBase} y1={yBase} x2={xBase + v * scaleX} y2={yBase - L * scaleY} stroke={colors.VELOCITY} strokeWidth="3" strokeDasharray="6 4" />
        
        {/* Vectores de velocidad */}
        {[0.2, 0.4, 0.6, 0.8, 1.0].map(f => (
          <line 
            key={f}
            x1={xBase} 
            y1={yBase - f * L * scaleY} 
            x2={xBase + f * v * scaleX} 
            y2={yBase - f * L * scaleY} 
            stroke={colors.ACCELERATION} 
            strokeWidth="2"
            markerEnd="url(#arrowhead-fluido)"
          />
        ))}
        
        {/* Etiquetas */}
        <text x={xBase + v * scaleX + 10} y={yBase - L * scaleY} fill="#fff" fontSize="14" fontWeight="bold">
          v = {fmt(v, 2)} m/s
        </text>
        <text x={xBase - 60} y={yBase - (L * scaleY)/2} fill="#94a3b8" fontSize="14" transform={`rotate(-90, ${xBase - 60}, ${yBase - (L * scaleY)/2})`} textAnchor="middle">
          L = {fmt(L, 3)} m
        </text>

        <defs>
          <marker id="arrowhead-fluido" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={colors.ACCELERATION} />
          </marker>
        </defs>
      </g>
    );
  }
};

export default profile;
