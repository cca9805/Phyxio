// frontend/src/v2/components/DCL/profiles/thirdLawActionReaction.profile.js

import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
  DCL_DIRECTION_MODE_IDS,
} from "../dclGrammar";

const thirdLawActionReactionProfile = {
  scene: DCL_SCENE_IDS.TWO_BODIES_HORIZONTAL,
  question: DCL_QUESTION_TYPES.FORCE_BALANCE,
  lang: "es",

  meta: {
    id: "dcl-third-law-action-reaction",
    title: {
      es: "DCL · Tercera Ley (Par de Interacción)",
      en: "FBD · Third Law (Interaction Pair)",
    },
    smartHeader: {
      es: "Dinámica · Interacción Múltiple",
      en: "Dynamics · Multiple Interaction",
    },
    leafId: "tercera-ley-accion-reaccion",
    question: {
      es: "¿Cómo se relacionan las fuerzas de interacción entre dos cuerpos distintos?",
      en: "How are the interaction forces between two different bodies related?",
    },
  },

  environment: {
    inclineAngleDeg: 0,
    showGrid: false,
    gravityDirection: DCL_DIRECTION_MODE_IDS.DOWN,
  },

  params: {},

  bodies: [
    {
      id: "bodyA",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Cuerpo A",
        en: "Body A",
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
      id: "bodyB",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: {
        es: "Cuerpo B",
        en: "Body B",
      },
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: {
        variant: "default",
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        opacity: 1,
      },
    },
  ],

  vectors: [
    {
      id: "force_A_on_B",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "bodyB",
      magnitudeId: "FAB",
      label: {
        es: "Fuerza A sobre B",
        en: "Force A on B",
      },
      symbol: "FAB",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "interaction",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.TOP,
        priority: 1,
        visible: true,
      },
    },
    {
      id: "force_B_on_A",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "bodyA",
      magnitudeId: "FBA",
      label: {
        es: "Fuerza B sobre A",
        en: "Force B on A",
      },
      symbol: "FBA",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: DCL_DIRECTION_MODE_IDS.LEFT,
      semanticRole: "interaction",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.TOP,
        priority: 1,
        visible: true,
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
    showBodyNames: true,
    followCalculator: true,
    experimentMode: true,
    debug: false,

    resolveComponents: false,
    resolveResultant: false,
    showStepControls: false,
    resolutionStep: 0,
    snapVectorDirections: true,

    displayMode: "student",
    enableVectorSelection: true,
    showCompactLegend: true,
    showTypicalErrors: true,
    showTheoryLink: true,
  },

  theory_link: {
    sectionId: "tercera-ley-accion-reaccion",
    conceptId: "interaction_pair",
    label: {
      es: "Tercera Ley · Separación de diagramas",
      en: "Third Law · Separation of diagrams",
    },
  },

  interpretation: {
    header_bridge: {
      es: "La naturaleza simétrica de las fuerzas obliga a separarlas en diagramas independientes.",
      en: "The symmetrical nature of forces forces an artificial separation into independent diagrams.",
    },
    reading_focus: {
      es: "Observa cómo ambas flechas cambian simultáneamente manteniendo módulo idéntico y dirección cruzada 180°.",
      en: "Observe how both arrows change simultaneously maintaining an identical magnitude and cross 180° direction.",
    },
    graph_role: {
      es: "Destruir la falsa creencia de la anulación en un mismo centro de masa al aislar visualmente F_AB y F_BA en dos lienzos mecánicos.",
      en: "Destroy the false belief of cancellation in the same center of mass by visually isolating FAB and FBA on two mechanical canvases.",
    },
    calc_reading: {
      es: "Si FAB crece, FBA también lo hace con exactitud impecable.",
      en: "If FAB grows, FBA does too with impeccable accuracy.",
    },
    graph_reading: {
      es: "Los dos bloques son perturbados por fuerzas gemelas matemáticamente, pero sus consecuencias cinemáticas (aceleraciones) dependerán de la inercia (masa) de cada uno.",
      en: "The two blocks are perturbed by twin forces mathematically, but their kinematic consequences (accelerations) will depend on the inertia (mass) of each.",
    },
    physical_insight: {
      es: "La tercera ley no habla de equilibrio, sino de reciprocidad. Cada interacción genera un par de fuerzas con igual módulo y direcciones opuestas, pero actuando sobre cuerpos diferentes. Cancelarlas en un mismo DCL destruye la física del problema: no se anulan porque no actúan sobre el mismo sistema.",
      en: "The third law does not speak of equilibrium, but of reciprocity. Each interaction generates a pair of forces with equal magnitude and opposite directions, but acting on different bodies. Canceling them in the same FBD destroys the physics of the problem: they don't cancel because they don't act on the same system.",
    },
    likely_errors: {
      es: [
        "Añadir F_AB al sumatorio de fuerzas del Cuerpo A.",
        "Pensar que ambas fuerzas colapsan sumándose algebraicamente dentro del mismo marco inercial.",
      ],
      en: [
        "Adding FAB to the force sum of Body A.",
        "Thinking that both forces collapse adding up purely algebraically within the same inertial frame.",
      ],
    },
  },
};

export default thirdLawActionReactionProfile;
