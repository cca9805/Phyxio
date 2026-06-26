import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-pendulo-fisico-avanzado",
    leafId: "pendulo-fisico-avanzado",
    title: {
      es: "Pendulo fisico avanzado",
      en: "Advanced physical pendulum",
    },
    subtitle: {
      es: "Distribucion de masa, amplitud y periodo real",
      en: "Mass distribution, amplitude, and real period",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como determinan la distribucion de masa y la amplitud el periodo real de un pendulo fisico?",
      en: "How do mass distribution and amplitude determine the real period of a physical pendulum?",
    },
    magnitud_estrella: "T0",
    magnitud_secundaria: "I_O",
    variable_control: "d",
  },
  interpretation_binding: {
    paramsIn: ["I_O", "I_cm", "m", "d", "g", "theta"],
    stateOut: ["T0", "omega0", "leq", "theta_dd", "E"],
  },
  visual_mapping: {
    T0: {
      es: "La separacion temporal entre picos depende de inercia y geometria.",
      en: "Temporal peak spacing depends on inertia and geometry.",
    },
    theta: {
      es: "La amplitud angular decide el alcance de la aproximacion lineal.",
      en: "Angular amplitude decides the validity range of linear approximation.",
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
              "Mass distribution sets effective inertia.",
              "Amplitude controls whether linear period remains valid.",
            ]
          : [
              "La distribucion de masa fija la inercia efectiva.",
              "La amplitud controla si el periodo lineal sigue siendo valido.",
            ],
      result: ({ lang }) =>
        lang === "en"
          ? "Graph links real period with inertia and finite-amplitude effects."
          : "El grafico conecta periodo real con inercia y efectos de amplitud finita.",
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
          {isEs ? "Pendulo fisico avanzado" : "Advanced physical pendulum"}
        </text>
        <text x="480" y="96" textAnchor="middle" fill="#cbd5e1" fontSize="18">
          {isEs ? "Inercia distribuida y amplitud determinan el periodo" : "Distributed inertia and amplitude determine period"}
        </text>

        <line x1="190" y1="120" x2="190" y2="430" stroke="#64748b" strokeWidth="6" />
        <circle cx="190" cy="120" r="8" fill="#e2e8f0" />
        <line x1="190" y1="120" x2="390" y2="300" stroke="#f8fafc" strokeWidth="5" />
        <circle cx="390" cy="300" r="34" fill="#22d3ee" stroke="#0e7490" strokeWidth="3" />
        <line x1="190" y1="120" x2="190" y2="300" stroke="rgba(148,163,184,0.45)" strokeDasharray="7 6" strokeWidth="2" />

        <text x="560" y="200" fill="#86efac" fontSize="18" fontWeight="700">I_O = I_cm + m*d^2</text>
        <text x="560" y="240" fill="#93c5fd" fontSize="18" fontWeight="700">T0 = 2*pi*sqrt(I_O/(m*g*d))</text>
        <text x="560" y="280" fill="#fca5a5" fontSize="18" fontWeight="700">omega0 = sqrt(m*g*d/I_O)</text>
        <text x="560" y="320" fill="#fde68a" fontSize="18" fontWeight="700">leq = I_O/(m*d)</text>
        <text x="560" y="370" fill="#e2e8f0" fontSize="16">
          {isEs ? "Amplitud alta: modelo no lineal y energia" : "Large amplitude: nonlinear model and energy"}
        </text>
      </g>
    );
  },
};

export default profile;
