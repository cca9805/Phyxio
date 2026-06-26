// frontend/src/v2/components/DCL/profiles/hangingMass.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../dclGrammar";

const hangingMassProfile = {
  scene: DCL_SCENE_IDS.HANGING_MASS,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se transmite, descompone y cambia la tension en una cuerda o cable segun el modelo usado?",
      en: "How is tension transmitted, decomposed, and changed along a rope or cable depending on the chosen model?",
    },
  },

  meta: {
    id: "dcl-hanging-mass",
    title: {
      es: "DCL · Masa colgante",
      en: "FBD · Hanging mass",
    },
    leafId: "tension-en-cuerdas-y-cables",
    question: {
      es: "Identificar fuerzas verticales",
      en: "Identify vertical forces",
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
      kind: DCL_BODY_KIND_IDS.MASS,
      label: {
        es: "Masa",
        en: "Mass",
      },
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "hanging",
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
      id: "tension_main",
      type: DCL_VECTOR_TYPE_IDS.TENSION,
      bodyId: "body_main",
      magnitudeId: "T",
      label: {
        es: "Tensión",
        en: "Tension",
      },
      symbol: "T",
      anchor: DCL_ANCHORS.ATTACHMENT,
      semanticRole: "constraint_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
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
      directionMode: "down",
      semanticRole: "kinematic_change",
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
    showCompactLegend: true,
    showVectorMagnitudes: false,
    showBodyNames: false,
    followCalculator: true,
    experimentMode: false,
    debug: false,
  },

  interpretation: {
    header_bridge: {
      es: "El DCL muestra que la tension tira a lo largo de la cuerda y debe leerse junto con el peso y, si procede, la aceleracion.",
      en: "The FBD shows that tension pulls along the rope and must be read together with weight and, when relevant, acceleration.",
    },
    reading_focus: {
      es: "Comparar direccion y modulo relativo de tension y peso para decidir equilibrio o aceleracion.",
      en: "Compare the direction and relative magnitude of tension and weight to decide whether the mass is balanced or accelerating.",
    },
    graph_role: {
      es: "Visualizar la competencia entre peso y tensión en una masa suspendida.",
      en: "Visualize the competition between weight and tension in a suspended mass.",
    },
    calc_reading: {
      es: "El gráfico debe mostrar si el sistema está equilibrado o si la masa acelera según el balance entre T y P.",
      en: "The graph must show whether the system is balanced or whether the mass accelerates according to the balance between T and P.",
    },
    graph_reading: {
      es: "Si T y P tienen igual módulo, la lectura visual debe sugerir equilibrio traslacional. Si uno domina, debe apreciarse el sentido neto.",
      en: "If T and P have equal magnitude, the visual reading should suggest translational equilibrium. If one dominates, the net direction should be noticeable.",
    },
    physical_insight: {
      es: "La tension no empuja: transmite traccion a lo largo del elemento flexible. Si supera al peso, la masa acelera hacia arriba; si queda por debajo, acelera hacia abajo.",
      en: "Tension does not push: it transmits traction along the flexible element. If it exceeds weight, the mass accelerates upward; if it is smaller, it accelerates downward.",
    },
    likely_errors: {
      es: [
        "Dibujar la tensión saliendo del centro en vez del punto de suspensión.",
        "Confundir el sentido de la aceleración con el del peso.",
        "Mantener tensión y peso iguales cuando los valores calculados no lo son."
      ],
      en: [
        "Drawing tension from the center instead of the suspension point.",
        "Confusing the direction of acceleration with the direction of weight.",
        "Keeping tension and weight equal when the computed values are not."
      ],
    },
  },
};

export default hangingMassProfile;
