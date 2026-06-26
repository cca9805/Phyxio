// frontend/src/v2/components/DCL/profiles/twoMassesRope.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const twoMassesRopeProfile = {
  scene: DCL_SCENE_IDS.TWO_MASSES_ROPE,
  question: DCL_QUESTION_TYPES.FORCE_BALANCE,
  lang: "es",

  meta: {
    id: "dcl-two-masses-rope",
    title: {
      es: "DCL · Dos masas unidas por cuerda",
      en: "FBD · Two masses connected by rope",
    },
    leafId: "generic-two-masses-rope",
    question: {
      es: "Comparar fuerzas y sentidos en un sistema acoplado",
      en: "Compare forces and directions in a coupled system",
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
      id: "body_left",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Bloque 1",
        en: "Block 1",
      },
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "default",
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        opacity: 1,
      },
    },
    {
      id: "body_right",
      kind: DCL_BODY_KIND_IDS.MASS,
      label: {
        es: "Masa 2",
        en: "Mass 2",
      },
      role: "secondary",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "hanging",
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        opacity: 1,
      },
    },
  ],

  vectors: [
    {
      id: "left_weight",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_left",
      magnitudeId: "P1",
      label: {
        es: "Peso 1",
        en: "Weight 1",
      },
      symbol: "P₁",
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
      id: "left_normal",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "body_left",
      magnitudeId: "N1",
      label: {
        es: "Normal 1",
        en: "Normal 1",
      },
      symbol: "N₁",
      anchor: DCL_ANCHORS.CONTACT,
      semanticRole: "constraint_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "left_tension",
      type: DCL_VECTOR_TYPE_IDS.TENSION,
      bodyId: "body_left",
      magnitudeId: "T",
      label: {
        es: "Tensión",
        en: "Tension",
      },
      symbol: "T",
      anchor: DCL_ANCHORS.RIGHT,
      directionMode: "right",
      semanticRole: "coupling_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "right_weight",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_right",
      magnitudeId: "P2",
      label: {
        es: "Peso 2",
        en: "Weight 2",
      },
      symbol: "P₂",
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
      id: "right_tension",
      type: DCL_VECTOR_TYPE_IDS.TENSION,
      bodyId: "body_right",
      magnitudeId: "T",
      label: {
        es: "Tensión",
        en: "Tension",
      },
      symbol: "T",
      anchor: DCL_ANCHORS.ATTACHMENT,
      semanticRole: "coupling_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "system_acceleration",
      type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
      bodyId: "body_right",
      magnitudeId: "a",
      label: {
        es: "Aceleración",
        en: "Acceleration",
      },
      symbol: "a",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "down",
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
      es: "Mostrar cómo una cuerda transmite tensión entre dos cuerpos acoplados.",
      en: "Show how a rope transmits tension between two coupled bodies.",
    },
    calc_reading: {
      es: "La tensión debe leerse como magnitud común del sistema, mientras que el peso y las reacciones dependen de cada cuerpo.",
      en: "Tension should be read as a common system quantity, while weight and reactions depend on each body.",
    },
    graph_reading: {
      es: "La comparación visual entre ambos cuerpos debe ayudar a detectar qué fuerza domina y qué sentido global de aceleración resulta.",
      en: "The visual comparison between both bodies should help detect which force dominates and what global acceleration direction results.",
    },
    likely_errors: {
      es: [
        "Dibujar tensiones distintas en la misma cuerda ideal.",
        "Olvidar la normal del bloque apoyado.",
        "Interpretar el sistema como dos problemas independientes."
      ],
      en: [
        "Drawing different tensions in the same ideal rope.",
        "Forgetting the normal force on the supported block.",
        "Interpreting the system as two independent problems."
      ],
    },
  },
};

export default twoMassesRopeProfile;