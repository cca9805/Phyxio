// frontend/src/v2/components/DCL/profiles/blockOnInclineNoFriction.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const blockOnInclineNoFrictionProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-block-on-incline-no-friction",
    title: {
      es: "DCL · Bloque en plano inclinado sin rozamiento",
      en: "FBD · Block on incline without friction",
    },
    leafId: "generic-block-on-incline-no-friction",
    question: {
      es: "Identificar fuerzas en ausencia de rozamiento",
      en: "Identify forces in the absence of friction",
    },
  },

  environment: {
    inclineAngleDeg: 30,
    showAxes: false,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {
    theta: "theta",
  },

  bodies: [
    {
      id: "body_main",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Bloque",
        en: "Block",
      },
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "default",
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        opacity: 1,
      },
    },
  ],

  vectors: [
    {
      id: "weight_main",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_main",
      magnitudeId: "P",
      label: {
        es: "Peso",
        en: "Weight",
      },
      symbol: "P",
      anchor: DCL_ANCHORS.CENTER,
      semanticRole: "gravitational_cause",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "normal_main",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "body_main",
      magnitudeId: "N",
      label: {
        es: "Normal",
        en: "Normal",
      },
      symbol: "N",
      anchor: DCL_ANCHORS.CONTACT,
      semanticRole: "constraint_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "acceleration_main",
      type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
      bodyId: "body_main",
      magnitudeId: "a",
      label: {
        es: "Aceleración",
        en: "Acceleration",
      },
      symbol: "a",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "along_surface_positive",
      semanticRole: "system_response",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: false,
      },
    },
  ],

  labels: [],

  options: {
    showSurface: true,
    showAxes: false,
    showAngleMarker: true,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: false,
    showBodyNames: false,
    followCalculator: true,
    experimentMode: false,
    debug: false,
    resolveComponents: true,
    resolveResultant: true,
    resolutionStep: 2,
  },

  interpretation: {
    graph_role: {
      es: "Mostrar el caso limpio en el que el bloque solo interactúa con el plano mediante la normal.",
      en: "Show the clean case in which the block only interacts with the plane through the normal force.",
    },
    calc_reading: {
      es: "El gráfico debe dejar claro que no hay fuerza de rozamiento y que la componente del peso a lo largo del plano queda sin compensar.",
      en: "The graph must make it clear that there is no friction force and that the component of weight along the plane remains uncompensated.",
    },
    graph_reading: {
      es: "Si el sistema acelera, la lectura visual debe sugerir que la causa está en la componente tangencial del peso, no en una fuerza adicional dibujada.",
      en: "If the system accelerates, the visual reading should suggest that the cause lies in the tangential component of weight, not in an additional drawn force.",
    },
    likely_errors: {
      es: [
        "Dibujar rozamiento cuando el caso se define sin rozamiento.",
        "Interpretar la normal como opuesta al peso completo.",
        "Olvidar que la aceleración sigue la dirección del plano."
      ],
      en: [
        "Drawing friction when the case is defined without friction.",
        "Interpreting the normal force as opposing the full weight.",
        "Forgetting that acceleration follows the direction of the plane."
      ],
    },
  },
};

export default blockOnInclineNoFrictionProfile;