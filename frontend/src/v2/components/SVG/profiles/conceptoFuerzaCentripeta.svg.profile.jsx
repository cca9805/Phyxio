import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-concepto-fuerza-centripeta",
    leafId: "concepto-fuerza-centripeta",
    title: {
      es: "Concepto de fuerza centripeta",
      en: "Concept of centripetal force",
    },
    subtitle: {
      es: "La resultante radial curva la trayectoria",
      en: "The radial resultant bends the trajectory",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se ve que la fuerza centripeta no es una fuerza nueva, sino la resultante radial que curva la trayectoria?",
      en: "How do we see that centripetal force is not a new force but the radial resultant that bends the trajectory?",
    },
    magnitud_estrella: "Fc",
    magnitud_secundaria: "ac",
    variable_control: "v",
  },
  interpretation_binding: {
    paramsIn: ["v", "r", "m"],
    stateOut: ["ac", "Fc"],
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 620,
  params: {
    schema: [],
  },
  infoCards: [
    {
      key: "centripetal",
      label: { es: "Idea clave", en: "Key idea" },
      lines: ({ lang }) => [
        lang === "en" ? "F_c = m*v^2/r" : "F_c = m*v^2/r",
        lang === "en" ? "It is not a new force" : "No es una fuerza nueva",
      ],
      result: ({ lang }) =>
        lang === "en" ? "It is the name of the inward resultant" : "Es el nombre de la resultante hacia el centro",
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
        <circle cx="430" cy="280" r="150" fill="none" stroke="#60a5fa" strokeWidth="6" strokeDasharray="10 10" />
        <circle cx="580" cy="280" r="18" fill="#f8fafc" />
        <line x1="580" y1="280" x2="430" y2="280" stroke="#fbbf24" strokeWidth="8" />
        <polygon points="430,280 454,270 454,290" fill="#fbbf24" />
        <line x1="580" y1="280" x2="580" y2="150" stroke="#22c55e" strokeWidth="8" />
        <polygon points="580,150 570,174 590,174" fill="#22c55e" />
        <text x="622" y="216" fill="#22c55e" fontSize="18" fontWeight="800">v</text>
        <text x="500" y="262" fill="#fde68a" fontSize="18" fontWeight="800">F_c</text>
        <text x="516" y="286" fill="#93c5fd" fontSize="15" fontWeight="700">a_c</text>
        <text x="480" y="50" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Movimiento circular" : "Circular motion"}
        </text>
        <text x="480" y="82" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="15">
          {isEs ? "La velocidad es tangencial y la resultante es radial" : "Velocity is tangential and the resultant is radial"}
        </text>
        <text x="700" y="410" fill="rgba(255,255,255,0.82)" fontSize="14">
          {isEs ? "Visual radial: F_c y a_c apuntan al centro." : "Radial reading: F_c and a_c point to the center."}
        </text>
      </g>
    );
  },
};

export default profile;
