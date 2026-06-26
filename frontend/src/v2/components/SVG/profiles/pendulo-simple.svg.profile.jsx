import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-pendulo-simple",
    leafId: "pendulo-simple",
    title: {
      es: "Péndulo simple",
      en: "Simple pendulum",
    },
    subtitle: {
      es: "Longitud, gravedad y periodo en ángulos pequeños",
      en: "Length, gravity, and period at small angles",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se relacionan oscilación, ángulos pequeños y periodo en un péndulo simple?",
      en: "How do oscillation, small angles, and period relate in a simple pendulum?",
    },
    magnitud_estrella: "T",
    magnitud_secundaria: "omega0",
    variable_control: "L",
  },
  interpretation_binding: {
    paramsIn: ["L", "g", "theta", "theta0", "phi", "t"],
    stateOut: ["T", "f", "omega0", "theta", "theta_dd", "E"],
  },
  visual_mapping: {
    T: {
      es: "La separación entre repeticiones marca el periodo.",
      en: "Spacing between repetitions marks the period.",
    },
    omega0: {
      es: "La escala temporal aumenta o disminuye con L y g.",
      en: "The time scale grows or shrinks with L and g.",
    },
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 960 560",
  svgHeight: 600,
  params: {
    schema: [],
  },
  infoCards: [
    {
      key: "pfc",
      label: { es: "Pregunta central", en: "Central question" },
      lines: ({ lang }) =>
        lang === "en"
          ? [
              "Small-angle motion links length and gravity to timing.",
              "The graph shows how the period changes with the setup.",
            ]
          : [
              "El movimiento de ángulos pequeños liga longitud y gravedad con el tiempo.",
              "La gráfica muestra cómo cambia el periodo con el montaje.",
            ],
      result: ({ lang }) =>
        lang === "en"
          ? "Graph explains the time scale of the simple pendulum."
          : "La gráfica explica la escala temporal del péndulo simple.",
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
        <rect x="0" y="0" width="960" height="560" rx="20" fill="#0f172a" />
        <text x="480" y="56" textAnchor="middle" fill="#ffffff" fontSize="30" fontWeight="800">
          {isEs ? "Péndulo simple" : "Simple pendulum"}
        </text>
        <text x="480" y="96" textAnchor="middle" fill="#cbd5e1" fontSize="18">
          {isEs ? "Longitud y gravedad fijan la escala temporal" : "Length and gravity set the time scale"}
        </text>

        <line x1="220" y1="110" x2="220" y2="410" stroke="#64748b" strokeWidth="6" />
        <circle cx="220" cy="110" r="8" fill="#e2e8f0" />
        <line x1="220" y1="110" x2="360" y2="300" stroke="#f8fafc" strokeWidth="5" />
        <circle cx="360" cy="300" r="30" fill="#22d3ee" stroke="#0e7490" strokeWidth="3" />
        <line x1="220" y1="110" x2="220" y2="300" stroke="rgba(148,163,184,0.45)" strokeDasharray="7 6" strokeWidth="2" />

        <text x="560" y="220" fill="#86efac" fontSize="18" fontWeight="700">omega0 = sqrt(g/L)</text>
        <text x="560" y="260" fill="#93c5fd" fontSize="18" fontWeight="700">T = 2*pi*sqrt(L/g)</text>
        <text x="560" y="300" fill="#fca5a5" fontSize="18" fontWeight="700">f = 1/T</text>
        <text x="560" y="350" fill="#e2e8f0" fontSize="16">
          {isEs ? "La amplitud pequeña justifica el modelo lineal" : "Small amplitude justifies the linear model"}
        </text>
      </g>
    );
  },
};

export default profile;
