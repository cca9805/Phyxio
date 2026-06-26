// frontend/src/v2/components/DCL/profiles/friction.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_HIGHLIGHT_MODES,
} from "../dclGrammar";

const frictionProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.FORCE_BALANCE,
  lang: "es",

  meta: {
    id: "dcl-friction",
    title: {
      es: "DCL · Rozamiento",
      en: "FBD · Friction",
    },
    leafId: "generic-friction",
    question: {
      es: "¿Cómo se orienta el rozamiento?",
      en: "How is friction oriented?",
    },
  },

  bodies: [
    {
      id: "body",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Bloque", en: "Block" },
    },
  ],

  vectors: [
    {
      id: "friction",
      type: DCL_VECTOR_TYPE_IDS.FRICTION,
      bodyId: "body",
      magnitudeId: "f",
      label: { es: "Rozamiento", en: "Friction" },
      symbol: "f",
      directionMode: "left",
      semanticRole: "opposition",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
      },
    },
    {
      id: "applied",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "body",
      magnitudeId: "F",
      label: { es: "Fuerza aplicada", en: "Applied force" },
      symbol: "F",
      directionMode: "right",
      semanticRole: "cause",
    },
  ],

  interpretation: {
    graph_role: {
      es: "Mostrar que el rozamiento se opone al movimiento o a su tendencia.",
      en: "Show that friction opposes motion or its tendency.",
    },
    graph_reading: {
      es: "El sentido del rozamiento no es fijo: depende de la situación dinámica.",
      en: "Friction direction is not fixed: it depends on the dynamic situation.",
    },
    likely_errors: {
      es: [
        "Fricción siempre a la izquierda",
        "Fricción siempre opuesta a la velocidad",
        "Ignorar rozamiento estático",
      ],
      en: [
        "Friction always to the left",
        "Friction always opposite to velocity",
        "Ignoring static friction",
      ],
    },
  },
};

export default frictionProfile;