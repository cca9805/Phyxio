import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-definicion-fuerza-coriolis",
    leafId: "definicion-fuerza-coriolis",
    title: {
      es: "Definicion de fuerza de Coriolis",
      en: "Definition of Coriolis force",
    },
    subtitle: {
      es: "Desviacion lateral en un marco rotatorio",
      en: "Lateral deflection in a rotating frame",
    },
  },
  interpretation_binding: {
    preferredTarget: "F_cor",
    secondaryTargets: ["omega", "v_rel", "alpha"],
    visibleMagnitudes: ["F_cor", "omega", "v_rel", "alpha"],
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como cambian el modulo y la direccion de F_cor cuando cambian omega, v_rel y alpha?",
      en: "How do the magnitude and direction of F_cor change when omega, v_rel, and alpha change?",
    },
    magnitud_estrella: "F_cor",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 620,
  params: {
    schema: [],
  },
  infoCards: [
    {
      key: "idea",
      label: { es: "Relacion", en: "Relation" },
      lines: ({ lang }) => [
        lang === "en" ? "F_cor = 2m omega v_rel sin(alpha)" : "F_cor = 2m omega v_rel sin(alpha)",
        lang === "en" ? "Perpendicular to v_rel" : "Perpendicular a v_rel",
      ],
      result: ({ lang }) =>
        lang === "en" ? "Direction from omega x v_rel" : "Direccion dada por omega x v_rel",
      resultColor: "#93c5fd",
    },
  ],
  motion: {
    type: SVG_MOTION_TYPES.NONE,
  },
  render: ({ lang = "es" }) => {
    const isEs = lang !== "en";
    return (
      <g>
        <rect x="0" y="0" width="960" height="560" rx="20" fill="#07131d" />
        <circle cx="460" cy="290" r="180" fill="none" stroke="#60a5fa" strokeWidth="6" strokeDasharray="10 10" />
        <circle cx="460" cy="290" r="18" fill="#f8fafc" />
        <line x1="460" y1="290" x2="460" y2="130" stroke="#22c55e" strokeWidth="8" />
        <polygon points="460,130 448,154 472,154" fill="#22c55e" />
        <line x1="460" y1="290" x2="610" y2="290" stroke="#fbbf24" strokeWidth="8" />
        <polygon points="610,290 586,278 586,302" fill="#fbbf24" />
        <line x1="610" y1="290" x2="610" y2="190" stroke="#f87171" strokeWidth="8" />
        <polygon points="610,190 598,214 622,214" fill="#f87171" />
        <text x="478" y="165" fill="#22c55e" fontSize="18" fontWeight="800">omega</text>
        <text x="532" y="272" fill="#fde68a" fontSize="18" fontWeight="800">v_rel</text>
        <text x="626" y="238" fill="#fca5a5" fontSize="18" fontWeight="800">F_cor</text>
        <text x="640" y="270" fill="rgba(255,255,255,0.72)" fontSize="13">
          {isEs ? "F_cor crece si aumenta v_rel" : "F_cor grows when v_rel increases"}
        </text>
        <text x="480" y="92" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Marco rotatorio" : "Rotating frame"}
        </text>
        <text x="480" y="126" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="15">
          {isEs ? "La desviacion lateral depende de la velocidad relativa y del giro" : "The lateral deflection depends on relative speed and rotation"}
        </text>
      </g>
    );
  },
};

export default profile;
