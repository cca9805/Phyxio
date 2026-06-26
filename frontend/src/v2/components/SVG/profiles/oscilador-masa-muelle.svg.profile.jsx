import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-oscilador-masa-muelle",
    leafId: "oscilador-masa-muelle",
    title: {
      es: "Oscilador masa muelle",
      en: "Mass-spring oscillator",
    },
    subtitle: {
      es: "Parametros que controlan la dinamica temporal de la respuesta oscilatoria",
      en: "Parameters controlling time dynamics of oscillatory response",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Que parametros controlan la dinamica temporal de un oscilador masa muelle y como se interpreta su respuesta?",
      en: "Which parameters control the time dynamics of a mass-spring oscillator and how is its response interpreted?",
    },
    magnitud_estrella: "omega0",
    magnitud_secundaria: "T",
    variable_control: "k",
  },
  interpretation_binding: {
    paramsIn: ["m", "k", "A", "phaseDeg"],
    stateOut: ["omega0", "T", "f", "x"],
  },
  visual_mapping: {
    omega0: {
      es: "La rapidez temporal aumenta al incrementar la rigidez para una masa fija.",
      en: "Time response becomes faster as stiffness increases at fixed mass.",
    },
    T: {
      es: "La separacion entre picos representa el periodo del movimiento.",
      en: "Peak spacing represents the oscillation period.",
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
              "Mass and stiffness control time dynamics.",
              "Response interpretation links frequency, period, and displacement.",
            ]
          : [
              "Masa y rigidez controlan la dinamica temporal.",
              "La interpretacion conecta frecuencia, periodo y desplazamiento.",
            ],
      result: ({ lang }) =>
        lang === "en"
          ? "Graph answers how parameters shape oscillator response."
          : "El grafico responde como los parametros moldean la respuesta.",
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
          {isEs ? "Oscilador masa muelle" : "Mass-spring oscillator"}
        </text>
        <text x="480" y="96" textAnchor="middle" fill="#cbd5e1" fontSize="18">
          {isEs ? "Parametros controlan dinamica temporal" : "Parameters control time dynamics"}
        </text>

        <rect x="110" y="170" width="22" height="180" rx="6" fill="#64748b" />
        <path d="M 132 260 L 178 260 L 198 242 L 218 278 L 238 242 L 258 278 L 278 242 L 298 278 L 318 260" fill="none" stroke="#e2e8f0" strokeWidth="4" />
        <rect x="318" y="228" width="64" height="64" rx="10" fill="#22d3ee" stroke="#0e7490" strokeWidth="3" />
        <line x1="350" y1="136" x2="350" y2="420" stroke="rgba(148,163,184,0.45)" strokeDasharray="7 6" strokeWidth="2" />

        <text x="620" y="220" fill="#86efac" fontSize="20" fontWeight="700">omega0 = sqrt(k/m)</text>
        <text x="620" y="260" fill="#93c5fd" fontSize="20" fontWeight="700">T = 2 pi sqrt(m/k)</text>
        <text x="620" y="300" fill="#fca5a5" fontSize="20" fontWeight="700">f = 1/T</text>
        <text x="620" y="360" fill="#e2e8f0" fontSize="16">
          {isEs ? "Interpretacion: masa y rigidez fijan respuesta" : "Interpretation: mass and stiffness set response"}
        </text>
      </g>
    );
  },
};

export default profile;
