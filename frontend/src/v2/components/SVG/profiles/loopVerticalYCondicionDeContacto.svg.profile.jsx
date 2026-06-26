import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-loop-vertical-y-condicion-de-contacto",
    leafId: "loop-vertical-y-condicion-de-contacto",
    title: {
      es: "Loop vertical y contacto",
      en: "Vertical loop and contact",
    },
    subtitle: {
      es: "En la parte alta, peso y normal pueden apuntar al centro",
      en: "At the top point, weight and normal can point toward the center",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se lee en el punto alto del loop la condicion de contacto a partir de la normal y de la rapidez?",
      en: "How do we read the contact condition at the top of the loop from the normal force and the speed?",
    },
    magnitud_estrella: "Nn",
    magnitud_secundaria: "vT",
    variable_control: "r",
  },
  interpretation_binding: {
    paramsIn: ["r", "vT", "m"],
    stateOut: ["Nn", "Frad", "vT"],
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 620,
  params: {
    schema: [],
  },
  infoCards: [
    {
      key: "contact",
      label: { es: "Condicion", en: "Condition" },
      lines: ({ lang }) => [
        lang === "en" ? "N >= 0" : "N >= 0",
        lang === "en" ? "At the top: P + N = m*v^2/R" : "En la cima: P + N = m*v^2/R",
      ],
      result: ({ lang }) =>
        lang === "en" ? "If N becomes zero, contact is about to be lost" : "Si N se hace cero, el contacto esta a punto de perderse",
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
        <rect x="0" y="0" width="960" height="560" rx="20" fill="#101827" />
        <circle cx="430" cy="300" r="150" fill="none" stroke="#60a5fa" strokeWidth="18" opacity="0.88" />
        <circle cx="430" cy="150" r="18" fill="#f8fafc" />
        <line x1="430" y1="150" x2="430" y2="245" stroke="#fbbf24" strokeWidth="8" />
        <polygon points="430,245 420,223 440,223" fill="#fbbf24" />
        <line x1="462" y1="150" x2="462" y2="232" stroke="#34d399" strokeWidth="8" />
        <polygon points="462,232 452,210 472,210" fill="#34d399" />
        <line x1="430" y1="150" x2="520" y2="150" stroke="#f472b6" strokeWidth="8" />
        <polygon points="520,150 498,140 498,160" fill="#f472b6" />
        <text x="404" y="210" fill="#fbbf24" fontSize="16" fontWeight="800">P</text>
        <text x="474" y="208" fill="#34d399" fontSize="16" fontWeight="800">N</text>
        <text x="516" y="136" fill="#f472b6" fontSize="16" fontWeight="800">v</text>
        <text x="490" y="244" fill="#93c5fd" fontSize="14" fontWeight="700">F_rad</text>
        <text x="650" y="84" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Punto alto del loop" : "Top point of the loop"}
        </text>
        <text x="650" y="118" fill="rgba(255,255,255,0.76)" fontSize="15">
          {isEs ? "Las fuerzas que van hacia el centro ayudan a mantener el contacto" : "The forces pointing toward the center help keep contact"}
        </text>
        <text x="650" y="146" fill="rgba(255,255,255,0.76)" fontSize="14">
          {isEs ? "Si N cae a cero, el contacto queda justo en el limite." : "If N falls to zero, contact is exactly at the limit."}
        </text>
      </g>
    );
  },
};

export default profile;
