// frontend/src/v2/components/DCL/profiles/blockOnTableNoFriction.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const blockOnTableNoFrictionProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-block-on-table-no-friction",
    title: {
      es: "DCL · Bloque sobre mesa sin rozamiento",
      en: "FBD · Block on table without friction",
    },
    leafId: "generic-block-on-table-no-friction",
    question: {
      es: "Identificar fuerzas sin rozamiento",
      en: "Identify forces without friction",
    },
  },

  environment: {
    inclineAngleDeg: 0,
    showAxes: false,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {},

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
      id: "applied_main",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "body_main",
      magnitudeId: "F",
      label: {
        es: "Fuerza aplicada",
        en: "Applied force",
      },
      symbol: "F",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "right",
      semanticRole: "external_action",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: false,
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
      directionMode: "right",
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
    showAngleMarker: false,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: false,
    showBodyNames: false,
    followCalculator: true,
    experimentMode: false,
    debug: false,
  },

  interpretation: {
    graph_role: {
      es: "Mostrar el caso horizontal limpio donde solo aparecen peso, normal y, si procede, una fuerza aplicada.",
      en: "Show the clean horizontal case where only weight, normal, and, if applicable, an applied force appear.",
    },
    calc_reading: {
      es: "La lectura visual debe sugerir que verticalmente hay equilibrio y que cualquier cambio horizontal viene de la fuerza aplicada.",
      en: "The visual reading should suggest vertical equilibrium and that any horizontal change comes from the applied force.",
    },
    graph_reading: {
      es: "La ausencia de rozamiento debe ser visible como ausencia de oposición tangencial dibujada.",
      en: "The absence of friction must be visible as the absence of a drawn tangential opposing force.",
    },
    likely_errors: {
      es: [
        "Añadir rozamiento por inercia visual aunque el caso no lo tenga.",
        "Interpretar la normal como mayor o menor que el peso sin causa.",
        "Confundir ausencia de rozamiento con ausencia de fuerza horizontal."
      ],
      en: [
        "Adding friction out of visual habit even though the case does not include it.",
        "Interpreting the normal force as larger or smaller than weight without cause.",
        "Confusing absence of friction with absence of horizontal force."
      ],
    },
  },
};

export default blockOnTableNoFrictionProfile;