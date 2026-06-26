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

const definicionTorqueProfile = {
  scene: DCL_SCENE_IDS.PARTICLE_FREE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",

  graph_identity: {
    pregunta_principal: {
      es: "Que fuerza F y que distancia efectiva b producen el torque tau sobre el eje?",
      en: "What force F and effective distance b produce torque tau about the axis?",
    },
    magnitud_estrella: "tau",
  },

  infoCards: [
    {
      key: "mecanismo",
      label: { es: "Mecanismo", en: "Mechanism" },
      highlight: "tau = F * b = r * F * sin(theta)",
      highlightColor: "#f59e0b",
      description: {
        es: "La componente perpendicular de F a traves del brazo b genera el momento.",
        en: "The perpendicular component of F through lever arm b generates the torque.",
      },
    },
  ],

  meta: {
    id: "dcl-definicion-torque",
    title: {
      es: "DCL - Definicion de torque",
      en: "FBD - Torque definition",
    },
    smartHeader: {
      es: "Torque - Fuerza y brazo de palanca",
      en: "Torque - Force and lever arm",
    },
    leafId: "definicion-torque",
    question: {
      es: "Que fuerza y que distancia efectiva producen el momento?",
      en: "Which force and effective distance produce the moment?",
    },
  },

  environment: {
    inclineAngleDeg: 0,
    showAxes: true,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {
    F: "F",
    r: "r",
    b: "b",
    theta: "theta",
    tau: "tau",
  },

  bodies: [
    {
      id: "barra",
      kind: DCL_BODY_KIND_IDS.MASS,
      label: {
        es: "Palanca (esquema)",
        en: "Lever (schematic)",
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
      id: "brazo_r",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      bodyId: "barra",
      magnitudeId: "r",
      label: {
        es: "Brazo radial",
        en: "Radial arm",
      },
      symbol: "r",
      anchor: DCL_ANCHORS.LEFT,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "state_descriptor",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.SECONDARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 3,
        visible: true,
      },
    },
    {
      id: "fuerza_aplicada",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "barra",
      magnitudeId: "F",
      label: {
        es: "Fuerza aplicada",
        en: "Applied force",
      },
      symbol: "F",
      anchor: DCL_ANCHORS.RIGHT,
      directionMode: DCL_DIRECTION_MODE_IDS.CUSTOM,
      customDirection: { x: 0.55, y: 1.0 },
      semanticRole: "external_action",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.PRIMARY,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 4,
        visible: true,
      },
    },
    {
      id: "fuerza_perp",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "barra",
      magnitudeId: "F",
      label: {
        es: "Componente perpendicular",
        en: "Perpendicular component",
      },
      symbol: "F_{perp}",
      anchor: DCL_ANCHORS.RIGHT,
      directionMode: DCL_DIRECTION_MODE_IDS.DOWN,
      semanticRole: "component_normal",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 2,
        visible: true,
      },
    },
    {
      id: "reaccion_pivote",
      type: DCL_VECTOR_TYPE_IDS.REACTION,
      bodyId: "barra",
      magnitudeId: "tau",
      label: {
        es: "Reaccion en pivote",
        en: "Pivot reaction",
      },
      symbol: "R_p",
      anchor: DCL_ANCHORS.LEFT,
      directionMode: DCL_DIRECTION_MODE_IDS.UP,
      semanticRole: "constraint_force",
      style: {
        highlight: DCL_HIGHLIGHT_MODES.NONE,
        labelPosition: DCL_LABEL_POSITIONS.END,
        priority: 1,
        visible: true,
      },
    },
  ],

  labels: [
    {
      id: "eje_pivote",
      text: {
        es: "Pivote en extremo izquierdo",
        en: "Pivot at left end",
      },
      position: "top",
      style: {
        visible: true,
        color: "#94a3b8",
        fontSize: 12,
      },
    },
    {
      id: "relacion_torque",
      text: {
        es: "tau = r * F_perp = F * b",
        en: "tau = r * F_perp = F * b",
      },
      position: "bottom",
      style: {
        visible: true,
        color: "#f59e0b",
        fontSize: 12,
      },
    },
  ],

  options: {
    showSurface: true,
    showAxes: true,
    showAngleMarker: false,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: true,
    showBodyNames: false,
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
    sectionId: "definicion-torque",
    conceptId: "brazo-y-componente-perpendicular",
    label: {
      es: "Teoria - torque, brazo y componente perpendicular",
      en: "Theory - torque, lever arm and perpendicular component",
    },
  },

  interpretation: {
    header_bridge: {
      es: "Este DCL esquematiza la idea clave del torque: no basta con la magnitud de la fuerza, importa donde y con que orientacion actua.",
      en: "This FBD schematizes the key torque idea: force magnitude alone is not enough; where and how it acts also matter.",
    },
    reading_focus: {
      es: "Lee el diagrama de izquierda a derecha: pivote, brazo r y fuerza aplicada en el extremo.",
      en: "Read the diagram left to right: pivot, lever arm r, and applied force at the end.",
    },
    graph_role: {
      es: "Visualizar por que tau puede ser grande con la misma F si aumenta la distancia efectiva.",
      en: "Visualize why tau can be larger with the same F when effective distance increases.",
    },
    calc_reading: {
      es: "Si F, r o theta cambian en calculadora, debe cambiar la lectura de tau de forma coherente.",
      en: "If F, r, or theta change in the calculator, tau reading should change coherently.",
    },
    graph_reading: {
      es: "F_perp es la parte de F que realmente produce giro; la componente paralela al brazo no aporta momento.",
      en: "F_perp is the part of F that actually produces rotation; the component along the arm does not contribute to torque.",
    },
    physical_insight: {
      es: "Dos configuraciones con la misma F pueden producir torques distintos por pura geometria (r y theta).",
      en: "Two setups with the same F can produce different torques due to geometry alone (r and theta).",
    },
    likely_errors: {
      es: [
        "Confundir r con b (brazo perpendicular efectivo).",
        "Usar el angulo respecto al suelo en vez del angulo entre r y F.",
        "Olvidar el convenio de signo para horario y antihorario.",
      ],
      en: [
        "Confusing r with b (effective perpendicular lever arm).",
        "Using angle to ground instead of angle between r and F.",
        "Forgetting sign convention for clockwise and counterclockwise.",
      ],
    },
  },
};

export default definicionTorqueProfile;
