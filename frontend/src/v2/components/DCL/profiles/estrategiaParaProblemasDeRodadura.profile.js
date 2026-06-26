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

const estrategiaParaProblemasDeRodaduraProfile = {
  scene: DCL_SCENE_IDS.PARTICLE_FREE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",
  graph_identity: {
    pregunta_principal: {
      es: "Que fuerzas deciden si conviene resolver por dinamica, energia o condicion de rodadura?",
      en: "Which forces decide whether dynamics, energy, or the rolling condition is the best method?",
    },
    magnitud_estrella: "tau",
  },
  infoCards: [
    {
      key: "decision",
      label: { es: "Decision de metodo", en: "Method choice" },
      highlight: "a_cm, K_total, E_total",
      highlightColor: "#38bdf8",
      description: {
        es: "El DCL muestra si hay que escribir fuerzas y torques antes de usar energia.",
        en: "The FBD shows whether forces and torques must be written before using energy.",
      },
    },
  ],
  meta: {
    id: "dcl-estrategia-para-problemas-de-rodadura",
    leafId: "estrategia-para-problemas-de-rodadura",
    title: {
      es: "DCL - Estrategia de rodadura",
      en: "FBD - Rolling strategy",
    },
    smartHeader: {
      es: "Rodadura - fuerzas, torque y energia",
      en: "Rolling - forces, torque, and energy",
    },
    question: {
      es: "Que interacciones obligan a elegir el metodo de resolucion?",
      en: "Which interactions force the choice of solution method?",
    },
  },
  environment: {
    inclineAngleDeg: 25,
    showAxes: true,
    showGrid: false,
    gravityDirection: "down",
  },
  params: {
    m: "m",
    g: "g",
    phi: "phi",
    R: "R",
    a_cm: "a_cm",
    tau: "tau",
  },
  bodies: [
    {
      id: "rueda",
      kind: DCL_BODY_KIND_IDS.MASS,
      label: { es: "Rueda", en: "Wheel" },
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
      id: "peso",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "rueda",
      magnitudeId: "g",
      label: { es: "Peso", en: "Weight" },
      symbol: "mg",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: DCL_DIRECTION_MODE_IDS.DOWN,
      semanticRole: "external_action",
      style: { highlight: DCL_HIGHLIGHT_MODES.PRIMARY, labelPosition: DCL_LABEL_POSITIONS.END, priority: 4, visible: true },
    },
    {
      id: "normal",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "rueda",
      magnitudeId: "N",
      label: { es: "Normal", en: "Normal" },
      symbol: "N",
      anchor: DCL_ANCHORS.BOTTOM,
      directionMode: DCL_DIRECTION_MODE_IDS.UP,
      semanticRole: "constraint_force",
      style: { highlight: DCL_HIGHLIGHT_MODES.SECONDARY, labelPosition: DCL_LABEL_POSITIONS.END, priority: 3, visible: true },
    },
    {
      id: "rozamiento_estatico",
      type: DCL_VECTOR_TYPE_IDS.FRICTION,
      bodyId: "rueda",
      magnitudeId: "tau",
      label: { es: "Rozamiento estatico", en: "Static friction" },
      symbol: "f_s",
      anchor: DCL_ANCHORS.BOTTOM,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "constraint_force",
      style: { highlight: DCL_HIGHLIGHT_MODES.PRIMARY, labelPosition: DCL_LABEL_POSITIONS.END, priority: 5, visible: true },
    },
    {
      id: "aceleracion",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      bodyId: "rueda",
      magnitudeId: "a_cm",
      label: { es: "Aceleracion del CM", en: "CM acceleration" },
      symbol: "a_cm",
      anchor: DCL_ANCHORS.CENTER,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "state_descriptor",
      style: { highlight: DCL_HIGHLIGHT_MODES.SECONDARY, labelPosition: DCL_LABEL_POSITIONS.END, priority: 2, visible: true },
    },
  ],
  labels: [
    {
      id: "criterio",
      text: {
        es: "Si f_s produce torque, dinamica y rodadura deben ser coherentes.",
        en: "If f_s produces torque, dynamics and rolling must be coherent.",
      },
      position: "bottom",
      style: { visible: true, color: "#38bdf8", fontSize: 12 },
    },
  ],
  options: {
    showSurface: true,
    showAxes: true,
    autoLabelLayout: true,
    autoVectorScale: true,
    clampVectorLengths: true,
    showVectorMagnitudes: true,
    followCalculator: true,
    experimentMode: true,
    displayMode: "student",
    enableVectorSelection: true,
    showCompactLegend: true,
    showTypicalErrors: true,
    showTheoryLink: true,
  },
  interpretation: {
    header_bridge: {
      es: "El DCL no sustituye al metodo: decide si hay fuerzas no conservativas, torque externo o una restriccion que cierre el sistema.",
      en: "The FBD does not replace the method: it decides whether nonconservative forces, external torque, or a closing constraint exists.",
    },
    reading_focus: {
      es: "Lee primero las interacciones reales y despues elige ecuaciones.",
      en: "Read real interactions first, then choose equations.",
    },
    graph_role: {
      es: "Separar la decision entre energia, dinamica y condicion de rodadura.",
      en: "Separate the choice among energy, dynamics, and the rolling condition.",
    },
    calc_reading: {
      es: "Si cambian m, I, R o phi, debe cambiar la lectura de a_cm y del torque de rozamiento.",
      en: "If m, I, R, or phi changes, the reading of a_cm and friction torque must change.",
    },
    graph_reading: {
      es: "El peso inicia la tendencia a bajar, la normal fija el contacto y el rozamiento estatico decide el giro.",
      en: "Weight starts the downhill tendency, the normal fixes contact, and static friction decides rotation.",
    },
    physical_insight: {
      es: "La estrategia no se elige por la formula disponible, sino por las interacciones visibles en el DCL.",
      en: "The strategy is not chosen from the available formula, but from the interactions visible in the FBD.",
    },
    likely_errors: {
      es: ["Usar energia cuando hay perdida por deslizamiento.", "Omitir el torque del rozamiento estatico.", "Mezclar a_cm y alpha sin R."],
      en: ["Using energy when slipping dissipates energy.", "Omitting the torque of static friction.", "Mixing a_cm and alpha without R."],
    },
  },
};

export default estrategiaParaProblemasDeRodaduraProfile;
