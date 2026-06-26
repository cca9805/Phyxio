// frontend/src/v2/components/DCL/profiles/normalForce.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
} from "../dclGrammar";

const normalForceProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
  question: DCL_QUESTION_TYPES.IDENTIFY_DIRECTIONS,
  lang: "es",

  meta: {
    id: "dcl-normal-force",
    title: {
      es: "DCL · Fuerza normal",
      en: "FBD · Normal force",
    },
    leafId: "normal-en-planos",
    question: {
      es: "¿Cómo determina la geometría la normal?",
      en: "How does geometry determine the normal force?",
    },
  },

  environment: {
    inclineAngleDeg: 35,
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
      id: "normal",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "body",
      magnitudeId: "N",
      label: { es: "Normal", en: "Normal" },
      symbol: "N",
      anchor: DCL_ANCHORS.CONTACT,
      semanticRole: "geometric_constraint",
      style: { highlight: DCL_HIGHLIGHT_MODES.PRIMARY },
    },
    {
      id: "weight",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body",
      magnitudeId: "P",
      label: { es: "Peso", en: "Weight" },
      symbol: "P",
      semanticRole: "cause",
      style: { highlight: DCL_HIGHLIGHT_MODES.SECONDARY },
    },
  ],

  interpretation: {
    graph_role: {
      es: "Mostrar que la normal es perpendicular a la superficie, no al peso.",
      en: "Show that the normal is perpendicular to the surface, not to the weight.",
    },
    header_bridge: {
      es: "El DCL fija la direccion de la normal antes de hacer proyecciones.",
      en: "The FBD fixes the normal direction before doing projections.",
    },
    reading_focus: {
      es: "Leer la geometria del contacto y separar eje normal de eje tangencial.",
      en: "Read contact geometry and separate the normal axis from the tangential axis.",
    },
    calc_reading: {
      es: "La normal sale del balance perpendicular al plano y cambia si cambian sus proyecciones.",
      en: "The normal comes from the balance perpendicular to the plane and changes when those projections change.",
    },
    physical_insight: {
      es: "La superficie empuja solo lo necesario para impedir penetracion mientras el contacto siga activo.",
      en: "The surface pushes only as much as needed to prevent penetration while contact remains active.",
    },
    graph_reading: {
      es: "La normal depende de la geometría del contacto, no de la dirección del movimiento.",
      en: "The normal depends on contact geometry, not motion direction.",
    },
    likely_errors: {
      es: [
        "Normal vertical siempre",
        "Normal opuesta al peso",
      ],
      en: [
        "Normal always vertical",
        "Normal opposite to weight",
      ],
    },
  },

  options: {
    showCompactLegend: true,
  },
};

export default normalForceProfile;
