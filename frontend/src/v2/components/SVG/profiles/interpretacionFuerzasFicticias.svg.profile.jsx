import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-interpretacion-fuerzas-ficticias",
    leafId: "interpretacion",
    title: {
      es: "Interpretacion de fuerzas ficticias",
      en: "Interpretation of fictitious forces",
    },
    subtitle: {
      es: "Misma situacion, dos lecturas coherentes si no mezclas marcos",
      en: "Same situation, two coherent readings if frames are not mixed",
    },
  },
  interpretation_binding: {
    paramsIn: ["F_res", "m", "a_marco"],
    stateOut: ["a_in", "a_rel", "F_fict"],
    target: "a_in",
    preferredTarget: "a_in",
    secondaryTargets: ["a_rel", "F_fict", "F_res"],
    visibleMagnitudes: ["a_in", "a_rel", "F_fict", "F_res", "a_marco"],
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como interpretar a_in, a_rel y a_marco sin mezclar marcos en una misma ecuacion.",
      en: "How to interpret a_in, a_rel, and a_marco without mixing frames in a single equation.",
    },
    magnitud_estrella: "a_in",
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
      label: { es: "Criterio", en: "Criterion" },
      lines: ({ lang }) => [
        lang === "en" ? "Inertial: F_res = m*a_in" : "Inercial: F_res = m*a_in",
        lang === "en" ? "Non-inertial: F_res + F_fict = m*a_rel" : "No inercial: F_res + F_fict = m*a_rel",
      ],
      result: ({ lang }) =>
        lang === "en" ? "Do not mix observers in one equation" : "No mezcles observadores en una misma ecuacion",
      resultColor: "#c4b5fd",
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
        <rect x="90" y="150" width="320" height="260" rx="24" fill="rgba(59,130,246,0.10)" stroke="#60a5fa" strokeWidth="3" />
        <rect x="550" y="150" width="320" height="260" rx="24" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="3" />
        <text x="250" y="190" textAnchor="middle" fill="#93c5fd" fontSize="24" fontWeight="800">
          {isEs ? "Marco inercial" : "Inertial frame"}
        </text>
        <text x="710" y="190" textAnchor="middle" fill="#d8b4fe" fontSize="24" fontWeight="800">
          {isEs ? "Marco no inercial" : "Non-inertial frame"}
        </text>
        <circle cx="250" cy="290" r="28" fill="#f8fafc" />
        <circle cx="710" cy="290" r="28" fill="#f8fafc" />
        <line x1="250" y1="290" x2="340" y2="290" stroke="#22c55e" strokeWidth="8" />
        <polygon points="340,290 316,278 316,302" fill="#22c55e" />
        <line x1="710" y1="290" x2="800" y2="290" stroke="#22c55e" strokeWidth="8" />
        <polygon points="800,290 776,278 776,302" fill="#22c55e" />
        <line x1="710" y1="290" x2="620" y2="290" stroke="#f59e0b" strokeWidth="8" />
        <polygon points="620,290 644,278 644,302" fill="#f59e0b" />
        <text x="288" y="268" fill="#22c55e" fontSize="18" fontWeight="800">F_res</text>
        <text x="744" y="268" fill="#22c55e" fontSize="18" fontWeight="800">F_res</text>
        <text x="626" y="268" fill="#f59e0b" fontSize="18" fontWeight="800">F_fict</text>
        <text x="250" y="350" textAnchor="middle" fill="#bfdbfe" fontSize="16" fontWeight="700">
          F_res = m*a_in
        </text>
        <text x="710" y="350" textAnchor="middle" fill="#e9d5ff" fontSize="16" fontWeight="700">
          F_res + F_fict = m*a_rel
        </text>
        <text x="250" y="380" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="14">
          a_in
        </text>
        <text x="710" y="380" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="14">
          a_rel
        </text>
        <text x="480" y="455" textAnchor="middle" fill="#e2e8f0" fontSize="15" fontWeight="700">
          a_in = a_rel + a_marco
        </text>
      </g>
    );
  },
};

export default profile;
