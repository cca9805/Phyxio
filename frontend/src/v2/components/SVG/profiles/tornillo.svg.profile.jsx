import React from "react";
import {
  SvgArrow,
  SVG_COLORS,
} from "@/v2/components/SVG/SvgProfileRenderer";
import { SVG_MOTION_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    leafId: "tornillo",
    graphType: "Svg",
    title: {
      es: "Geometría del tornillo (Plano inclinado)",
      en: "Screw geometry (Inclined plane)",
    },
  },

  graph_identity: {
    id: "tornillo-svg",
    es: "Modelo de plano inclinado helicoidal",
    en: "Helical inclined plane model",
    magnitud_estrella: "ventaja_mecanica",
    pregunta_principal: {
      es: "¿Cómo permite el plano inclinado helicoidal la multiplicación de la fuerza?",
      en: "How does the helical inclined plane allow force multiplication?",
    },
  },

  interpretation_binding: {
    target: "ventaja_mecanica",
    related: ["p", "r"],
  },

  params: {
    schema: [
      {
        key: "p",
        label: "p (mm)",
        type: "number",
        min: 1,
        max: 20,
        step: 1,
        default: 4,
      },
      {
        key: "r",
        label: "r (cm)",
        type: "number",
        min: 5,
        max: 100,
        step: 5,
        default: 25,
      },
    ],
  },

  infoCards: [
    {
      key: "geometry",
      label: { es: "Geometría", en: "Geometry" },
      lines: ({ p }) => {
        const circ = 2 * Math.PI * p.r * 10; // in mm
        return [
          `Paso (p) = ${p.p} mm`,
          `Circunferencia = ${circ.toFixed(1)} mm`,
        ];
      },
      result: ({ p }) => {
        const VM = (2 * Math.PI * p.r * 10) / p.p;
        return `VM ideal = ${VM.toFixed(1)}`;
      },
      description: ({ lang }) =>
        lang === "es"
          ? "El tornillo equivale a un plano inclinado de base 2πr y altura p."
          : "The screw is equivalent to an inclined plane with base 2πr and height p.",
    },
  ],

  motion: {
    type: SVG_MOTION_TYPES.STATIC,
  },

  viewBox: "0 0 800 400",
  svgHeight: 400,

  render: ({
    sharedParams = {},
    state = {},
    lang = "es",
  }) => {
    const p = Number(state.p ?? sharedParams.p ?? 4);
    const r = Number(state.r ?? sharedParams.r ?? 25);
    
    const base = 2 * Math.PI * r; // proportional
    const height = p * 10; // magnified for visibility
    
    const ox = 100;
    const oy = 300;
    
    // Scale down base to fit
    const scale = 1.0;
    const b_scaled = Math.min(600, base * scale);
    const h_scaled = height * scale * 5; // magnified pitch

    return (
      <>
        <rect x="0" y="0" width="800" height="400" fill="transparent" />
        
        {/* Triangle representing the unwrapped thread */}
        <path 
          d={`M ${ox} ${oy} L ${ox + b_scaled} ${oy} L ${ox + b_scaled} ${oy - h_scaled} Z`}
          fill="rgba(56, 189, 248, 0.2)"
          stroke={SVG_COLORS.ACCENT}
          strokeWidth="3"
        />
        
        {/* Base label */}
        <text x={ox + b_scaled / 2 - 40} y={oy + 25} fill="white" fontSize="16">
          2πr (Circunferencia)
        </text>
        
        {/* Height label */}
        <text x={ox + b_scaled + 10} y={oy - h_scaled / 2} fill="white" fontSize="16">
          p (Paso)
        </text>
        
        {/* Helix angle text */}
        <text x={ox + 20} y={oy - 10} fill="white" fontSize="14">
          α
        </text>
      </>
    );
  },
};

export default profile;
