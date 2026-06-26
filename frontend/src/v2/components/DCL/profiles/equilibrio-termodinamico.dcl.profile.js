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
    id: "dcl-equilibrio-termodinamico",
    leafId: "equilibrio-termodinamico",
    title: {
      es: "Frontera movil en equilibrio mecanico",
      en: "Movable boundary in mechanical equilibrium",
    },
    question: {
      es: "Que empujes deben compensarse para que la frontera deje de moverse?",
      en: "Which pushes must balance for the boundary to stop moving?",
    },
  },

  graph_identity: {
    graph_type: "Dcl",
    pregunta_principal: {
      es: "Como se reconoce que un sistema termodinamico dejo de cambiar porque sus gradientes internos se anularon?",
      en: "How do we recognize that a thermodynamic system stopped changing because its internal gradients vanished?",
    },
    keywords: [
      "sistema",
      "termodinamico",
      "gradientes",
      "internos",
      "anularon",
      "presion",
      "frontera",
      "system",
      "thermodynamic",
      "pressure",
      "boundary",
    ],
    magnitud_estrella: "DeltaP",
    target_interpretable: true,
  },

  interpretation_binding: {
    paramsIn: ["DeltaP", "P"],
    stateOut: ["DeltaP"],
  },

  environment: {
    inclineAngleDeg: 0,
    showAxes: true,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {
    DeltaP: { default: 0, unit: "Pa" },
    P: { default: 101325, unit: "Pa" },
  },

  bodies: [
    {
      id: "movable_wall",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Piston", en: "Piston" },
      role: "boundary",
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
      id: "pressure_left",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      bodyId: "movable_wall",
      magnitudeId: "P",
      label: { es: "Empuje P1", en: "Push P1" },
      symbol: "P1",
      anchor: DCL_ANCHORS.LEFT,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "left_pressure_push",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "pressure_right",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      bodyId: "movable_wall",
      magnitudeId: "P",
      label: { es: "Empuje P2", en: "Push P2" },
      symbol: "P2",
      anchor: DCL_ANCHORS.RIGHT,
      directionMode: DCL_DIRECTION_MODE_IDS.LEFT,
      semanticRole: "right_pressure_push",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "net_pressure_drive",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      bodyId: "movable_wall",
      magnitudeId: "DeltaP",
      label: { es: "Empuje neto", en: "Net push" },
      symbol: "DeltaP",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "mechanical_disequilibrium",
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
      id: "equilibrium_label",
      text: {
        es: "Equilibrio mecanico: DeltaP = 0",
        en: "Mechanical equilibrium: DeltaP = 0",
      },
      anchor: DCL_ANCHORS.BOTTOM,
    },
  ],

  options: {
    displayMode: "student",
    showSurface: true,
    showAxes: true,
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
      es: "El DCL aisla la frontera movil para leer si las presiones producen empuje neto.",
      en: "The FBD isolates the movable boundary to read whether pressures produce a net push.",
    },
    reading_focus: {
      es: "Si los vectores de presion se compensan, no queda aceleracion macroscopica de la frontera.",
      en: "If pressure vectors balance, no macroscopic boundary acceleration remains.",
    },
    graph_role: {
      es: "Conectar equilibrio mecanico con la anulacion visual de DeltaP.",
      en: "Connect mechanical equilibrium with the visual vanishing of DeltaP.",
    },
    calc_reading: {
      es: "DeltaP no nulo debe verse como empuje neto hacia un lado.",
      en: "Non-zero DeltaP should appear as a net push to one side.",
    },
    graph_reading: {
      es: "La frontera esta en equilibrio cuando los empujes opuestos tienen el mismo peso visual.",
      en: "The boundary is in equilibrium when opposite pushes carry the same visual weight.",
    },
    physical_insight: {
      es: "La presion no es solo un numero de estado: sobre una frontera movil actua como causa mecanica.",
      en: "Pressure is not just a state number: on a movable boundary it acts as a mechanical cause.",
    },
    likely_errors: {
      es: [
        "Ignorar la presion externa efectiva.",
        "Declarar equilibrio con una frontera aun acelerada.",
        "Confundir presion uniforme con equilibrio si queda empuje neto.",
      ],
      en: [
        "Ignoring effective external pressure.",
        "Declaring equilibrium while the boundary still accelerates.",
        "Confusing uniform pressure with equilibrium if net push remains.",
      ],
    },
  },
};

export default profile;
