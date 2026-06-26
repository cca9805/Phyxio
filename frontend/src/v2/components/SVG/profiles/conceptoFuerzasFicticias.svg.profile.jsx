import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-concepto-fuerzas-ficticias",
    leafId: "concepto-fuerzas-ficticias",
    title: {
      es: "Concepto de fuerzas ficticias",
      en: "Concept of fictitious forces",
    },
    subtitle: {
      es: "El termino inercial compensa la aceleracion del marco",
      en: "The inertial term compensates the frame acceleration",
    },
  },
  interpretation_binding: {
    paramsIn: ["m", "a_marco", "F_res"],
    stateOut: ["F_fict", "a_rel", "a_in"],
    target: "F_fict",
    preferredTarget: "F_fict",
    secondaryTargets: ["a_marco", "a_rel", "a_in"],
    visibleMagnitudes: ["F_fict", "a_marco", "F_res", "a_rel", "a_in"],
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Por que aparecen fuerzas ficticias en marcos acelerados y como se conectan con a_marco?",
      en: "Why do fictitious forces appear in accelerated frames and how do they connect to a_marco?",
    },
    magnitud_estrella: "F_fict",
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
      label: { es: "Idea clave", en: "Key idea" },
      lines: ({ lang }) => [
        lang === "en" ? "F_fict = -m*a_frame" : "F_fict = -m*a_marco",
        lang === "en" ? "Same scene, different frame" : "Misma escena, distinto marco",
      ],
      result: ({ lang }) =>
        lang === "en" ? "Not a new interaction" : "No es una interaccion nueva",
      resultColor: "#fde68a",
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
        <rect x="150" y="210" width="660" height="170" rx="24" fill="rgba(255,255,255,0.05)" stroke="#60a5fa" strokeWidth="3" />
        <circle cx="330" cy="295" r="30" fill="#f8fafc" />
        <line x1="330" y1="295" x2="250" y2="295" stroke="#f59e0b" strokeWidth="8" />
        <polygon points="250,295 274,283 274,307" fill="#f59e0b" />
        <text x="238" y="272" fill="#f59e0b" fontSize="18" fontWeight="800">F_fict</text>
        <line x1="630" y1="295" x2="720" y2="295" stroke="#22c55e" strokeWidth="8" />
        <polygon points="720,295 696,283 696,307" fill="#22c55e" />
        <text x="640" y="272" fill="#22c55e" fontSize="18" fontWeight="800">a_marco</text>
        <text x="480" y="110" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Marco acelerado" : "Accelerated frame"}
        </text>
        <text x="480" y="144" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="15">
          {isEs ? "La correccion inercial mantiene la lectura dinamica dentro del marco" : "The inertial correction preserves the dynamical reading inside the frame"}
        </text>
        <text x="480" y="430" textAnchor="middle" fill="#e2e8f0" fontSize="16" fontWeight="700">
          F_res + F_fict = m*a_rel
        </text>
        <text x="480" y="456" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="14">
          a_in = a_rel + a_marco
        </text>
        <text x="480" y="490" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="13">
          {isEs ? "F_fict apunta en sentido opuesto a a_marco" : "F_fict points opposite to a_marco"}
        </text>
      </g>
    );
  },
};

export default profile;
