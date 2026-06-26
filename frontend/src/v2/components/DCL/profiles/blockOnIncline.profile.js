// frontend/src/v2/components/DCL/profiles/blockOnIncline.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const blockOnInclineProfile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_INCLINE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  meta: {
    id: "dcl-block-on-incline",
    title: {
      es: "DCL · Bloque en plano inclinado",
      en: "FBD · Block on incline",
    },
    leafId: "generic-block-on-incline",
    question: {
      es: "Identificar fuerzas",
      en: "Identify forces",
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
      semanticRole: "cause",
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
      semanticRole: "constraint",
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
      directionMode: "along_surface_positive",
      semanticRole: "external_action",
      customDirection: null,
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
    showCompactLegend: true,
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
    header_bridge: {
      es: "El diagrama enlaza la geometría de la rampa con la lectura causal de peso, normal y rozamiento.",
      en: "The diagram links incline geometry with the causal reading of weight, normal force, and friction.",
    },
    reading_focus: {
      es: "Identificar qué fuerza impulsa, cuál restringe el contacto y cuál se opone al deslizamiento.",
      en: "Identify which force drives motion, which one enforces contact, and which one opposes sliding.",
    },
    physical_insight: {
      es: "La misma escena permite distinguir con claridad el caso ideal sin rozamiento y el caso disipativo con fricción.",
      en: "The same scene makes it easy to distinguish the ideal frictionless case from the dissipative frictional case.",
    },
    graph_role: {
      es: "Mostrar el diagrama base de un bloque sobre rampa, donde peso, normal y rozamiento se leen como fuerzas con papeles distintos.",
      en: "Show the base free-body diagram of a block on an incline, where weight, normal force, and friction play distinct physical roles.",
    },
    calc_reading: {
      es: "La lectura debe dejar claro que la componente tangencial del peso impulsa el movimiento y que el rozamiento, cuando aparece, se opone a la tendencia de deslizamiento.",
      en: "The reading should make clear that the tangential component of weight drives the motion and that friction, when present, opposes the sliding tendency.",
    },
    graph_reading: {
      es: "El gráfico debe ayudar a distinguir causa, restricción y oposición sin mezclar el papel de la normal con el del peso o el del rozamiento.",
      en: "The graph should help distinguish cause, constraint, and opposition without mixing the roles of the normal force, weight, and friction.",
    },
    likely_errors: {
      es: [
        "Dibujar el rozamiento con sentido fijo sin analizar primero la tendencia de movimiento.",
        "Interpretar la normal como opuesta al peso completo en lugar de a la componente perpendicular.",
        "Olvidar que una rampa sin rozamiento y una con rozamiento comparten escena, pero no la misma lectura dinámica."
      ],
      en: [
        "Drawing friction with a fixed direction before analyzing the motion tendency.",
        "Interpreting the normal force as opposing the full weight rather than the perpendicular component.",
        "Forgetting that frictionless and frictional incline cases share the same scene but not the same dynamic reading."
      ],
    },
  },
};

export default blockOnInclineProfile;
