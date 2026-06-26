import React from "react";
import { SVG_MOTION_TYPES, SVG_SCENE_TYPES } from "@/v2/components/SVG/svgGrammar";

const profile = {
  meta: {
    id: "svg-pendulo-fisico",
    leafId: "pendulo-fisico",
    title: {
      es: "Pendulo fisico",
      en: "Physical pendulum",
    },
    subtitle: {
      es: "Inercia y geometria controlan periodo y respuesta angular",
      en: "Inertia and geometry control period and angular response",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como controlan la inercia y la geometria la oscilacion de un cuerpo rigido en eje fijo y su periodo angular?",
      en: "How do inertia and geometry control oscillation of a rigid body about a fixed axis and its angular period?",
    },
    magnitud_estrella: "T",
    magnitud_secundaria: "omega0",
    variable_control: "d",
  },
  interpretation_binding: {
    paramsIn: ["I", "m", "g", "d", "theta"],
    stateOut: ["omega0", "T", "f", "theta_dd"],
  },
  visual_mapping: {
    T: {
      es: "La separacion temporal entre maximos angulares representa el periodo.",
      en: "Temporal spacing between angular peaks represents period.",
    },
    omega0: {
      es: "Mayor torque restaurador por unidad de inercia acelera la dinamica.",
      en: "Higher restoring torque per inertia speeds up dynamics.",
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
              "Geometry and inertia define period and angular response.",
              "The graph links structural parameters to observable dynamics.",
            ]
          : [
              "Geometria e inercia definen periodo y respuesta angular.",
              "El grafico conecta parametros estructurales con dinamica observable.",
            ],
      result: ({ lang }) =>
        lang === "en"
          ? "Graph explains how inertia and geometry control oscillation timing."
          : "El grafico explica como inercia y geometria controlan el tiempo de oscilacion.",
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
          {isEs ? "Pendulo fisico" : "Physical pendulum"}
        </text>
        <text x="480" y="96" textAnchor="middle" fill="#cbd5e1" fontSize="18">
          {isEs ? "Inercia y geometria determinan la escala temporal" : "Inertia and geometry set the time scale"}
        </text>

        <line x1="210" y1="140" x2="210" y2="410" stroke="#64748b" strokeWidth="6" />
        <circle cx="210" cy="140" r="8" fill="#e2e8f0" />
        <line x1="210" y1="140" x2="350" y2="280" stroke="#f8fafc" strokeWidth="5" />
        <circle cx="350" cy="280" r="32" fill="#22d3ee" stroke="#0e7490" strokeWidth="3" />
        <line x1="210" y1="140" x2="210" y2="280" stroke="rgba(148,163,184,0.45)" strokeDasharray="7 6" strokeWidth="2" />

        <text x="590" y="220" fill="#86efac" fontSize="20" fontWeight="700">omega0 = sqrt(m*g*d/I)</text>
        <text x="590" y="260" fill="#93c5fd" fontSize="20" fontWeight="700">T = 2*pi*sqrt(I/(m*g*d))</text>
        <text x="590" y="300" fill="#fca5a5" fontSize="20" fontWeight="700">f = 1/T</text>
        <text x="590" y="360" fill="#e2e8f0" fontSize="16">
          {isEs ? "Pregunta: como cambian periodo y respuesta angular" : "Question: how period and angular response change"}
        </text>
      </g>
    );
  },
};

export default profile;
