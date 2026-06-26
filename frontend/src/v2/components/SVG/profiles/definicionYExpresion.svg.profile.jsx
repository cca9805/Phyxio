import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES, SVG_CONTROL_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-definicion-y-expresion",
    leafId: "definicion-y-expresion",
    graph_identity: {
      id: "definicion-y-expresion-svg",
      es: "Visualización de la fuerza peso",
      en: "Weight force visualization",
    },
    pregunta_principal: {
      es: "¿De que depende el peso de un objeto y hacia donde apunta?",
      en: "What does the weight of an object depend on and where does it point?",
    },
    magnitud_estrella: "P",
    title: {
      es: "Definición del peso",
      en: "Definition of weight",
    },
    subtitle: {
      es: "Dirección de la fuerza gravitatoria",
      en: "Direction of the gravitational force",
    },
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 720",
  svgHeight: 720,
  params: {
    schema: [
      {
        key: "m",
        aliases: ["masa", "mass"],
        default: 10,
        label: { es: "Masa m (kg)", en: "Mass m (kg)" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 100,
        step: 0.1,
        decimals: 1,
      },
      {
        key: "gmod",
        aliases: ["g", "gravedad"],
        default: 9.8,
        label: { es: "Gravedad g (m/s²)", en: "Gravity g (m/s²)" },
        unit: "m/s²",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 30,
        step: 0.1,
        decimals: 1,
      },
    ],
    derivations: {
      Pmod: ({ m, gmod }) => (m?.value ?? m ?? 10) * (gmod?.value ?? gmod ?? 9.8),
    },
  },
  infoCards: [
    {
      key: "weight",
      label: { es: "Idea clave", en: "Key idea" },
      lines: ({ lang }) => [
        lang === "en" ? "P = m*g" : "P = m*g",
        lang === "en" ? "It points toward the attracting body" : "Apunta hacia el astro que atrae",
      ],
      result: ({ lang }) =>
        lang === "en" ? "Weight is a force, not a property of the object" : "El peso es una fuerza, no una propiedad del cuerpo",
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
        <defs>
          <linearGradient id="weightBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#08111c" />
            <stop offset="100%" stopColor="#102b46" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="960" height="560" rx="20" fill="url(#weightBg)" />
        <circle cx="280" cy="390" r="145" fill="#1d4ed8" opacity="0.92" />
        <circle cx="280" cy="390" r="120" fill="#2563eb" opacity="0.45" />
        <circle cx="610" cy="170" r="24" fill="#f8fafc" />
        <line x1="598" y1="182" x2="370" y2="330" stroke="#fbbf24" strokeWidth="8" />
        <polygon points="370,330 392,320 388,344" fill="#fbbf24" />
        <text x="640" y="108" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Peso como fuerza gravitatoria" : "Weight as a gravitational force"}
        </text>
        <text x="640" y="138" fill="rgba(255,255,255,0.75)" fontSize="15">
          {isEs ? "La direccion es radial hacia el astro" : "The direction is radial toward the attracting body"}
        </text>
        <text x="520" y="238" fill="#fde68a" fontSize="22" fontWeight="800">
          P
        </text>
        <text x="122" y="510" fill="rgba(255,255,255,0.76)" fontSize="14">
          {isEs ? "En un campo aproximadamente uniforme: P = m*g" : "In an approximately uniform field: P = m*g"}
        </text>
      </g>
    );
  },
  interpretation_binding: {
    paramsIn: ["m", "gmod"],
    stateOut: ["Pmod"],
  },
};

export default profile;
