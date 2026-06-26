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
    id: "svg-archimedes",
    leafId: "principio-de-arquimedes",
    title: { es: "Principio de Arquímedes", en: "Archimedes' Principle" },
    subtitle: { 
      es: "Visualización del empuje y el volumen de fluido desplazado", 
      en: "Visualization of buoyancy and displaced fluid volume" 
    },
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo afecta el empuje a la flotabilidad de un cuerpo y qué determina si se hunde o flota?",
      en: "How does buoyancy affect an object's flotation and what determines if it sinks or floats?"
    },
    magnitud_estrella: null,
  },

  interpretation_binding: {
    paramsIn: ["rho_f", "V_obj", "frac_sum"],
    stateOut: ["E", "V_des"],
    target: "E"
  },

  viewBox: "0 0 900 650",
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "rho_f",
        default: 1000,
        label: { es: "Densidad Fluido", en: "Fluid Density" },
        unit: "kg/m³",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 500,
        max: 2000,
        step: 10,
      },
      {
        key: "V_obj",
        default: 0.1,
        label: { es: "Volumen Objeto", en: "Object Volume" },
        unit: "m³",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.01,
        max: 0.5,
        step: 0.01,
      },
      {
        key: "frac_sum",
        default: 1.0,
        label: { es: "Fracción Sumergida", en: "Submerged Fraction" },
        unit: "",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 1,
        step: 0.05,
      },
    ],
    derivations: {
      V_des: ({ V_obj, frac_sum }) => safeNum(V_obj, 0.1) * safeNum(frac_sum, 1.0),
      E: ({ rho_f, V_obj, frac_sum }) => {
        const rho = safeNum(rho_f, 1000);
        const v_des = safeNum(V_obj, 0.1) * safeNum(frac_sum, 1.0);
        return rho * 9.81 * v_des;
      }
    },
  },

  infoCards: [
    {
      key: "empuje",
      label: { es: "Empuje", en: "Buoyancy" },
      result: ({ p, lang }) => `E: ${safeNum(p?.E).toFixed(1)} N`
    },
    {
      key: "volumen",
      label: { es: "Vol. Desplazado", en: "Disp. Volume" },
      result: ({ p, lang }) => `V_des: ${safeNum(p?.V_des).toFixed(3)} m³`
    }
  ],

  motion: { type: SVG_MOTION_TYPES.STATIC },

  render: ({ p, lang = "es", toNum }) => {
    const fs = toNum(p?.frac_sum, 1.0);
    const vObj = toNum(p?.V_obj, 0.1);
    
    // Escala visual
    const size = 150 * Math.pow(vObj / 0.1, 1/3); 
    const waterLevel = 450;
    const blockTop = waterLevel - size * (1 - fs);
    const blockLeft = 450 - size/2;

    return (
      <g>
        <rect x="0" y="0" width="900" height="650" fill="#0f172a" />
        
        {/* Recipiente */}
        <rect x="200" y="200" width="500" height="400" fill="none" stroke="#64748b" strokeWidth="4" rx="10" />
        
        {/* Fluido */}
        <rect x="202" y={waterLevel} width="496" height={600 - waterLevel - 2} fill="#38bdf8" fillOpacity="0.3" />
        
        {/* Objeto */}
        <rect 
          x={blockLeft} 
          y={blockTop} 
          width={size} 
          height={size} 
          fill="#94a3b8" 
          stroke="#ffffff" 
          strokeWidth="3" 
          fillOpacity="0.8" 
        />
        
        {/* Indicador de volumen desplazado (sombreado extra bajo el agua) */}
        {fs > 0 && (
          <rect 
            x={blockLeft} 
            y={waterLevel} 
            width={size} 
            height={size * fs} 
            fill="#38bdf8" 
            fillOpacity="0.5" 
            stroke="none"
          />
        )}

        {/* Etiqueta de volumen desplazado */}
        <text x="450" y={waterLevel + size*fs/2 + 5} fill="#fff" fontSize="14" fontWeight="bold" textAnchor="middle" opacity={fs > 0.1 ? 1 : 0}>
          {lang === "en" ? "Displaced Volume" : "Volumen Desplazado"}
        </text>

        {/* Flecha de Empuje */}
        {fs > 0 && (
          <g transform={`translate(450, ${blockTop + size/2})`}>
            <line x1="0" y1="0" x2="0" y2="-80" stroke="#38bdf8" strokeWidth="6" markerEnd="url(#arrow-buoyancy)" />
            <text x="15" y="-60" fill="#38bdf8" fontWeight="bold">E</text>
          </g>
        )}

        <defs>
          <marker id="arrow-buoyancy" markerWidth="10" markerHeight="10" refX="5" refY="0" orient="auto">
            <path d="M0,10 L5,0 L10,10 Z" fill="#38bdf8" />
          </marker>
        </defs>
      </g>
    );
  }
};

export default profile;
