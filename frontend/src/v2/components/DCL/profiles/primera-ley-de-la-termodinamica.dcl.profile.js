import {
  DCL_ANCHORS,
  DCL_BODY_KIND_IDS,
  DCL_DIRECTION_MODE_IDS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
  DCL_QUESTION_TYPES,
  DCL_SCENE_IDS,
  DCL_VECTOR_TYPE_IDS,
} from "../dclGrammar";

const profile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.FORCE_BALANCE,
  lang: "es",

  meta: {
    id: "dcl-primera-ley-de-la-termodinamica",
    leafId: "primera-ley-de-la-termodinamica",
    title: {
      es: "Balance energetico de la primera ley",
      en: "Energy balance of the first law",
    },
    question: {
      es: "Que flujos de calor y trabajo cruzan la frontera del sistema para producir la variacion de energia interna?",
      en: "Which heat and work flows cross the system boundary to produce the change in internal energy?",
    },
  },

  graph_identity: {
    graph_type: "Dcl",
    pregunta_principal: {
      es: "Como se distribuyen el calor y el trabajo que cruzan la frontera para determinar la variacion de energia interna del sistema?",
      en: "How do the heat and work that cross the boundary determine the change in internal energy of the thermodynamic system?",
    },
    keywords: [
      "calor",
      "trabajo",
      "energia",
      "interna",
      "sistema",
      "frontera",
      "balance",
      "heat",
      "work",
      "internal",
      "energy",
      "boundary",
      "thermodynamic",
    ],
    magnitud_estrella: "DeltaU",
    target_interpretable: true,
  },

  interpretation_binding: {
    paramsIn: ["Q", "W", "DeltaU"],
    stateOut: ["DeltaU"],
  },

  environment: {
    inclineAngleDeg: 0,
    showAxes: false,
    showGrid: false,
    gravityDirection: "none",
  },

  params: {
    Q:      { default: 500,  unit: "J" },
    W:      { default: -200, unit: "J" },
    DeltaU: { default: 300,  unit: "J" },
  },

  bodies: [
    {
      id: "sistema",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Sistema cerrado", en: "Closed system" },
      role: "system",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "boundary",
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        opacity: 1,
      },
    },
  ],

  vectors: [
    {
      id: "vector_calor",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      bodyId: "sistema",
      magnitudeId: "Q",
      label: { es: "Calor Q", en: "Heat Q" },
      symbol: "Q",
      anchor: DCL_ANCHORS.LEFT,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "calor que cruza la frontera",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "vector_trabajo",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      bodyId: "sistema",
      magnitudeId: "W",
      label: { es: "Trabajo W", en: "Work W" },
      symbol: "W",
      anchor: DCL_ANCHORS.RIGHT,
      directionMode: DCL_DIRECTION_MODE_IDS.LEFT,
      semanticRole: "trabajo sobre el sistema",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "vector_delta_u",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      bodyId: "sistema",
      magnitudeId: "DeltaU",
      label: { es: "Variacion energia interna DeltaU", en: "Internal energy change DeltaU" },
      symbol: "DeltaU",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "variacion de energia interna",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.MUTED,
        labelPosition: DCL_LABEL_POSITIONS.TOP,
        priority: 2,
        visible: true,
      },
    },
  ],

  labels: [
    {
      id: "balance_label",
      text: {
        es: "Primera ley: DeltaU = Q + W",
        en: "First law: DeltaU = Q + W",
      },
      anchor: DCL_ANCHORS.BOTTOM,
    },
  ],

  options: {
    displayMode: "student",
    showSurface: false,
    showAxes: false,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: false,
    showBodyNames: true,
    followCalculator: true,
    showCompactLegend: true,
  },

  interpretation: {
    header_bridge: {
      es: "El DCL energetico aisla el sistema para leer que calor y trabajo cruzan la frontera y como se suman en DeltaU.",
      en: "The energy FBD isolates the system to read which heat and work cross the boundary and how they add up to DeltaU.",
    },
    reading_focus: {
      es: "Si las flechas de calor y trabajo apuntan hacia el sistema, DeltaU es positivo y el sistema gana energia.",
      en: "If heat and work arrows point into the system, DeltaU is positive and the system gains energy.",
    },
    graph_role: {
      es: "Conectar el balance visual de flujos energeticos con la variacion de energia interna.",
      en: "Connect the visual balance of energy flows with the change in internal energy.",
    },
    calc_reading: {
      es: "DeltaU no nulo debe verse como diferencia entre calor absorbido y trabajo cedido.",
      en: "Non-zero DeltaU should appear as the difference between absorbed heat and released work.",
    },
    graph_reading: {
      es: "El sistema gana energia interna cuando la suma de flechas entrantes supera las salientes.",
      en: "The system gains internal energy when the sum of inward arrows exceeds the outward ones.",
    },
    physical_insight: {
      es: "El calor y el trabajo no se almacenan: solo DeltaU permanece dentro del sistema como resultado neto.",
      en: "Heat and work are not stored: only DeltaU remains inside the system as the net result.",
    },
    likely_errors: {
      es: [
        "Invertir el signo del trabajo segun la convencion utilizada.",
        "Aplicar la primera ley solo a procesos a volumen constante.",
        "Olvidar que en un ciclo completo DeltaU = 0.",
      ],
      en: [
        "Reversing the work sign depending on the convention used.",
        "Applying the first law only to constant-volume processes.",
        "Forgetting that in a complete cycle DeltaU = 0.",
      ],
    },
  },
};

export default profile;
