import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_HIGHLIGHT_MODES,
  DCL_VECTOR_TYPES,
  DCL_ANCHOR_IDS,
} from "../../DCL/dclGrammar";

const H = DCL_HIGHLIGHT_MODES;
const A = DCL_ANCHOR_IDS;
const V = DCL_VECTOR_TYPES;

const profile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,

  meta: {
    id: "analisis-completo-dcl",
    leafId: "analisis-completo",
    title: {
      es: "DCL del análisis completo con rozamiento",
      en: "FBD for complete friction analysis",
    },
    smartHeader: {
      es: "Rozamiento · Bloque sobre mesa",
      en: "Friction · Block on table",
    },
    question: {
      es: "¿Qué fuerzas sostienen el reposo y cuáles explican el deslizamiento?",
      en: "Which forces sustain rest and which explain sliding?",
    },
  },

  environment: {
    inclineAngleDeg: 0,
    showGrid: false,
    gravityDirection: "down",
  },

  params: {
    m: 4,
    g: 9.8,
    mu_e: 0.45,
    mu_c: 0.30,
    F_ext: 18,
    F_ext_crit: 17.64,
    a: 0,
  },

  bodies: [
    {
      id: "body_main",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Bloque m", en: "Block m" },
      role: "main_body",
      anchor: A.CENTER,
      labelYOffset: 68,
      style: { highlight: H.PRIMARY, opacity: 1 },
    },
  ],

  vectors: [
    {
      id: "weight_main",
      type: V.WEIGHT,
      symbol: "P",
      anchor: A.CENTER,
      highlight: H.PRIMARY,
    },
    {
      id: "normal_main",
      type: V.NORMAL,
      symbol: "N",
      anchor: A.TOP,
      highlight: H.SECONDARY,
    },
    {
      id: "force_ext",
      type: V.CUSTOM,
      symbol: "F_{ext}",
      anchor: A.RIGHT,
      directionMode: "right",
      semanticRole: "driving_force",
      highlight: H.PRIMARY,
    },
    {
      id: "friction_force",
      type: V.CUSTOM,
      symbol: "f",
      anchor: A.LEFT,
      directionMode: "left",
      semanticRole: "friction_force",
      highlight: H.SECONDARY,
    },
    {
      id: "accel_context",
      type: V.ACCELERATION,
      symbol: "a",
      anchor: A.TOP,
      directionMode: "right",
      derived: true,
      highlight: H.MUTED,
      label: {
        es: "Aceleración solo si F_ext > F_ext_crit",
        en: "Acceleration only if F_ext > F_ext_crit",
      },
    },
  ],

  labels: [
    {
      id: "threshold_note",
      text: {
        es: "Primero decidir régimen: F_ext frente a F_ext_crit",
        en: "First decide regime: F_ext versus F_ext_crit",
      },
    },
  ],

  options: {
    showSurface: true,
    showAxes: true,
    showBodyNames: true,
    followCalculator: true,
    experimentMode: true,
    showCompactLegend: true,
    showTypicalErrors: true,
    showTheoryLink: true,
  },

  theory_link: {
    es: "Primero comparar F_ext con F_ext_crit = mu_e N; solo después usar la ecuación dinámica.",
    en: "First compare F_ext with F_ext_crit = mu_e N; only afterwards use the dynamic equation.",
  },

  interpretation: {
    header_bridge: {
      es: "F_ext_crit = mu_e N separa adherencia y deslizamiento.",
      en: "F_ext_crit = mu_e N separates adhesion and sliding.",
    },
    reading_focus: {
      es: "Leer qué fuerzas existen siempre y cuál cambia de papel al pasar de reposo a deslizamiento.",
      en: "Read which forces always exist and which one changes role when moving from rest to sliding.",
    },
    graph_role: {
      es: "Mostrar visualmente la frontera entre equilibrio tangencial y respuesta dinámica.",
      en: "Show visually the frontier between tangential balance and dynamic response.",
    },
    calc_reading: {
      es: "Si a = 0 y F_ext <= F_ext_crit, el sistema puede seguir en reposo; si no, aparece rama cinética.",
      en: "If a = 0 and F_ext <= F_ext_crit, the system may remain at rest; otherwise the kinetic branch appears.",
    },
    graph_reading: {
      es: "Detecta el error de dibujar aceleración antes de decidir el régimen.",
      en: "Detects the mistake of drawing acceleration before deciding the regime.",
    },
    physical_insight: {
      es: "El rozamiento estático no es una fuerza fija: se ajusta hasta su máximo.",
      en: "Static friction is not a fixed force: it adjusts up to its maximum.",
    },
    likely_errors: {
      es: [
        "Tomar f_emax como fricción real en todo momento.",
        "Usar mu_c antes de superar el umbral.",
        "Olvidar que la normal fija la escala del rozamiento."
      ],
      en: [
        "Taking f_emax as the real friction at every moment.",
        "Using mu_c before exceeding the threshold.",
        "Forgetting that the normal sets the friction scale."
      ],
    },
  },
};

export default profile;