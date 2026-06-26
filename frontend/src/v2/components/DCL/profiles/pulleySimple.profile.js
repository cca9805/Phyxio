// frontend/src/v2/components/DCL/profiles/pulleySimple.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const pulleySimpleProfile = {
  scene: DCL_SCENE_IDS.PULLEY_SIMPLE,
  question: DCL_QUESTION_TYPES.FORCE_BALANCE,
  lang: "es",

  meta: {
    id: "dcl-pulley-simple",
    title: {
      es: "DCL · Polea simple",
      en: "FBD · Simple pulley",
    },
    leafId: "generic-pulley-simple",
    question: {
      es: "Analizar fuerzas y transmisión de tensión en una polea ideal",
      en: "Analyze forces and tension transmission in an ideal pulley",
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
      id: "body_block",
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
    {
      id: "body_mass",
      kind: DCL_BODY_KIND_IDS.MASS,
      label: {
        es: "Masa colgante",
        en: "Hanging mass",
      },
      role: "secondary",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "hanging",
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        opacity: 1,
      },
    },
    {
      id: "body_pulley",
      kind: DCL_BODY_KIND_IDS.PULLEY,
      label: {
        es: "Polea",
        en: "Pulley",
      },
      role: "mechanism",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "simple",
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        opacity: 1,
      },
    },
  ],

  vectors: [
    {
      id: "block_weight",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_block",
      magnitudeId: "P1",
      label: {
        es: "Peso del bloque",
        en: "Block weight",
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
      id: "block_normal",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "body_block",
      magnitudeId: "N",
      label: {
        es: "Normal",
        en: "Normal",
      },
      symbol: "N",
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
      id: "block_tension",
      type: DCL_VECTOR_TYPE_IDS.TENSION,
      bodyId: "body_block",
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
      id: "mass_weight",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body_mass",
      magnitudeId: "P2",
      label: {
        es: "Peso de la masa",
        en: "Mass weight",
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
      id: "mass_tension",
      type: DCL_VECTOR_TYPE_IDS.TENSION,
      bodyId: "body_mass",
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
      bodyId: "body_mass",
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
      es: "Representar cómo una polea ideal redistribuye la dirección de la tensión sin cambiar su papel físico básico.",
      en: "Represent how an ideal pulley redistributes the direction of tension without changing its basic physical role.",
    },
    calc_reading: {
      es: "La lectura del gráfico debe permitir comparar pesos, tensión y respuesta global del sistema acoplado.",
      en: "The graph reading should allow comparison of weights, tension, and the global response of the coupled system.",
    },
    graph_reading: {
      es: "La polea no debe leerse como fuerza extra sobre los cuerpos, sino como mecanismo de transmisión y cambio geométrico del sentido.",
      en: "The pulley should not be read as an extra force on the bodies, but as a transmission mechanism and geometric change of direction.",
    },
    likely_errors: {
      es: [
        "Atribuir a la polea una fuerza independiente no modelada.",
        "Dibujar tensiones distintas en una cuerda ideal.",
        "Olvidar que la tensión cambia de dirección según el tramo."
      ],
      en: [
        "Assigning to the pulley an independent unmodeled force.",
        "Drawing different tensions in an ideal rope.",
        "Forgetting that tension changes direction according to the rope segment."
      ],
    },
  },
};

export default pulleySimpleProfile;