// frontend/src/v2/components/DCL/profiles/blockOnInclineWithAppliedForce.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const blockOnInclineWithAppliedForceProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
  question: DCL_QUESTION_TYPES.FORCE_BALANCE,
  lang: "es",

  meta: {
    id: "dcl-block-on-incline-with-applied-force",
    title: {
      es: "DCL · Bloque en plano inclinado con fuerza aplicada",
      en: "FBD · Block on incline with applied force",
    },
    leafId: "generic-block-on-incline-with-applied-force",
    question: {
      es: "Comparar fuerzas a lo largo del plano",
      en: "Compare forces along the incline",
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
        highlight: DCL_HIGHLIGHT_MODES.NONE,
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
      directionMode: "along_surface_positive",
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
      es: "Permitir comparar la acción de una fuerza aplicada con el peso y las fuerzas de contacto en el plano.",
      en: "Allow comparison of an applied force with weight and contact forces on the incline.",
    },
    calc_reading: {
      es: "La lectura visual debe ayudar a decidir si la fuerza aplicada compensa, supera o no la tendencia natural del bloque a deslizar.",
      en: "The visual reading should help decide whether the applied force compensates, exceeds, or fails to overcome the block's natural tendency to slide.",
    },
    graph_reading: {
      es: "La aceleración debe alinearse con el balance neto de fuerzas tangenciales, no simplemente con la fuerza más vistosa.",
      en: "Acceleration must align with the net balance of tangential forces, not simply with the most visually prominent force.",
    },
    likely_errors: {
      es: [
        "Suponer que la fuerza aplicada siempre domina por estar dibujada explícitamente.",
        "Olvidar el efecto del rozamiento si está activo.",
        "Confundir la dirección del peso con la dirección a lo largo del plano."
      ],
      en: [
        "Assuming that the applied force always dominates because it is drawn explicitly.",
        "Forgetting the effect of friction when it is active.",
        "Confusing the direction of weight with the direction along the incline."
      ],
    },
  },
};

export default blockOnInclineWithAppliedForceProfile;