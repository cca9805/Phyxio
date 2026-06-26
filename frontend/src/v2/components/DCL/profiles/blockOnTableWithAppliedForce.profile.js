// frontend/src/v2/components/DCL/profiles/blockOnTableWithAppliedForce.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const blockOnTableWithAppliedForceProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.FORCE_BALANCE,
  lang: "es",

  meta: {
    id: "dcl-block-on-table-with-applied-force",
    title: {
      es: "DCL · Bloque sobre mesa con fuerza aplicada",
      en: "FBD · Block on table with applied force",
    },
    leafId: "generic-block-on-table-with-applied-force",
    question: {
      es: "Comparar fuerzas horizontales y verticales",
      en: "Compare horizontal and vertical forces",
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
      id: "friction_main",
      type: DCL_VECTOR_TYPE_IDS.FRICTION,
      bodyId: "body_main",
      magnitudeId: "f",
      label: {
        es: "Rozamiento",
        en: "Friction",
      },
      symbol: "f",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: "left",
      semanticRole: "opposition",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
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
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
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
      es: "Representar la competencia entre la fuerza aplicada y las fuerzas de contacto en una situación horizontal.",
      en: "Represent the competition between the applied force and contact forces in a horizontal situation.",
    },
    calc_reading: {
      es: "El gráfico debe separar con claridad el equilibrio vertical del posible desequilibrio horizontal.",
      en: "The graph must clearly separate vertical equilibrium from possible horizontal imbalance.",
    },
    graph_reading: {
      es: "Si existe rozamiento, su sentido debe oponerse a la tendencia de movimiento, no copiar automáticamente el eje negativo por defecto.",
      en: "If friction exists, its direction must oppose the motion tendency, not automatically copy the default negative axis.",
    },
    likely_errors: {
      es: [
        "Dibujar rozamiento aunque el caso resuelto no lo use.",
        "Tomar la fuerza aplicada como única responsable sin comparar magnitudes.",
        "No distinguir entre equilibrio vertical y dinámica horizontal."
      ],
      en: [
        "Drawing friction even though the solved case does not use it.",
        "Treating the applied force as the only cause without comparing magnitudes.",
        "Failing to distinguish vertical equilibrium from horizontal dynamics."
      ],
    },
  },
};

export default blockOnTableWithAppliedForceProfile;