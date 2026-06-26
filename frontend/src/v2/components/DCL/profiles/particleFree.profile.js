// frontend/src/v2/components/DCL/profiles/particleFree.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const particleFreeProfile = {
  scene: DCL_SCENE_IDS.PARTICLE_FREE,
  question: DCL_QUESTION_TYPES.IDENTIFY_DIRECTIONS,
  lang: "es",

  meta: {
    id: "dcl-particle-free",
    title: {
      es: "DCL · Particula libre",
      en: "FBD · Free particle",
    },
    leafId: "generic-particle-free",
    question: {
      es: "Identificar vectores y sentidos",
      en: "Identify vectors and directions",
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
      kind: DCL_BODY_KIND_IDS.POINT,
      label: {
        es: "Particula",
        en: "Particle",
      },
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "minimal",
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
      id: "velocity_main",
      type: DCL_VECTOR_TYPE_IDS.VELOCITY,
      bodyId: "body_main",
      magnitudeId: "v",
      label: {
        es: "Velocidad",
        en: "Velocity",
      },
      symbol: "v",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "right",
      semanticRole: "kinematic_state",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: false,
      },
    },
    {
      id: "acceleration_main",
      type: DCL_VECTOR_TYPE_IDS.ACCELERATION,
      bodyId: "body_main",
      magnitudeId: "a",
      label: {
        es: "Aceleracion",
        en: "Acceleration",
      },
      symbol: "a",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: "down",
      semanticRole: "kinematic_change",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: false,
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
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: false,
      },
    },
  ],

  labels: [],

  options: {
    showSurface: false,
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
    showCompactLegend: true,
  },

  interpretation: {
    header_bridge: {
      es: "El diagrama fija que vectores pertenecen al cuerpo y cual es el sentido elegido antes de interpretar el resultado.",
      en: "The diagram fixes which vectors belong to the body and which direction convention is chosen before interpreting the result.",
    },
    reading_focus: {
      es: "Lee primero que vectores representan interacciones reales y cuales solo describen el movimiento. Un cambio de signo debe verse como un cambio de sentido, no como una magnitud nueva.",
      en: "Read first which vectors represent real interactions and which ones only describe motion. A sign change should appear as a reversal of direction, not as a new magnitude.",
    },
    graph_role: {
      es: "Representar una particula libre y los vectores fisicos o cinematicos que actuan sobre ella.",
      en: "Represent a free particle and the physical or kinematic vectors acting on it.",
    },
    calc_reading: {
      es: "El grafico debe reflejar el signo, el sentido y la relevancia relativa de las magnitudes calculadas.",
      en: "The graph must reflect the sign, direction, and relative importance of the computed magnitudes.",
    },
    graph_reading: {
      es: "Si una magnitud cambia de signo, el vector debe invertir su sentido visual. Si es nula, debe desaparecer o quedar minimizado.",
      en: "If a magnitude changes sign, the vector must reverse its visual direction. If it is zero, it should disappear or remain minimized.",
    },
    physical_insight: {
      es: "Un DCL correcto separa causa y respuesta. Las fuerzas dibujadas no son decoracion: determinan que ecuacion puede escribirse y que lectura fisica queda permitida.",
      en: "A correct FBD separates cause from response. The drawn forces are not decorative: they determine which equation can be written and which physical reading is allowed.",
    },
    likely_errors: {
      es: [
        "Confundir velocidad con aceleracion.",
        "Mostrar un vector sin magnitud asociada real.",
        "Mantener visible una fuerza nula.",
      ],
      en: [
        "Confusing velocity with acceleration.",
        "Showing a vector without a real associated magnitude.",
        "Keeping a zero force visible.",
      ],
    },
  },
};

export default particleFreeProfile;
