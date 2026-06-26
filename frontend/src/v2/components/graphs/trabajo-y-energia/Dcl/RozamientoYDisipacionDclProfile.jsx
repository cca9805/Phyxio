import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../../../DCL/dclGrammar.js";

const profile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",
  meta: {
    id: "rozamiento-y-disipacion-dcl",
    leafId: "rozamiento-y-disipacion",
    title: {
      es: "DCL · Rozamiento y disipacion",
      en: "FBD · Friction and dissipation",
    },
    question: {
      es: "Como cuantifica el rozamiento la perdida de energia mecanica y su conversion en disipacion",
      en: "How friction quantifies mechanical-energy loss and conversion into dissipation",
    },
  },
  pregunta_principal: {
    es: "Como cuantifica el rozamiento la perdida de energia mecanica y su conversion en disipacion",
    en: "How friction quantifies mechanical-energy loss and conversion into dissipation",
  },
  bodies: [
    {
      id: "body",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Bloque", en: "Block" },
      role: "main",
      anchor: DCL_ANCHORS.CENTER,
      style: { highlight: DCL_HIGHLIGHT_MODES.PRIMARY },
    },
  ],
  vectors: [
    {
      id: "weight",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "body",
      magnitudeId: "m",
      label: { es: "Peso", en: "Weight" },
      symbol: "mg",
      anchor: DCL_ANCHORS.CENTER,
      semanticRole: "cause",
      style: { labelPosition: DCL_LABEL_POSITIONS.END, visible: true },
    },
    {
      id: "normal",
      type: DCL_VECTOR_TYPE_IDS.NORMAL,
      bodyId: "body",
      magnitudeId: "N",
      label: { es: "Normal", en: "Normal" },
      symbol: "N",
      anchor: DCL_ANCHORS.CONTACT,
      semanticRole: "constraint",
      style: { labelPosition: DCL_LABEL_POSITIONS.END, visible: true },
    },
    {
      id: "friction",
      type: DCL_VECTOR_TYPE_IDS.FRICTION,
      bodyId: "body",
      magnitudeId: "fr",
      label: { es: "Rozamiento", en: "Friction" },
      symbol: "f_r",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: "left",
      semanticRole: "opposition",
      style: { highlight: DCL_HIGHLIGHT_MODES.SECONDARY, labelPosition: DCL_LABEL_POSITIONS.END, visible: true },
    },
  ],
  interpretation: {
    header_bridge: {
      es: "El DCL fija que fuerza real produce el trabajo disipativo.",
      en: "The FBD fixes which real force produces dissipative work.",
    },
    reading_focus: {
      es: "Leer normal, peso y rozamiento antes del balance energetico.",
      en: "Read normal force, weight, and friction before the energy balance.",
    },
    graph_role: {
      es: "Mostrar que el rozamiento se opone al deslizamiento y puede realizar trabajo negativo.",
      en: "Show that friction opposes sliding and can perform negative work.",
    },
    calc_reading: {
      es: "Si el calculo entrega fr, Wr o Edis, el DCL permite comprobar el origen de la fuerza disipativa.",
      en: "If the calculation returns fr, Wr, or Edis, the FBD checks the origin of the dissipative force.",
    },
    graph_reading: {
      es: "La flecha de rozamiento debe apuntar contra el movimiento relativo.",
      en: "The friction arrow must point against relative motion.",
    },
    physical_insight: {
      es: "La disipacion energetica empieza con una fuerza de contacto real, no con una perdida abstracta.",
      en: "Energy dissipation starts from a real contact force, not from an abstract loss.",
    },
    likely_errors: {
      es: "No dibujes una fuerza de disipacion adicional: la disipacion procede del trabajo del rozamiento.",
      en: "Do not draw an extra dissipation force: dissipation comes from friction work.",
    },
  },
  options: {
    showCompactLegend: true,
    showSurface: true,
    autoVectorScale: true,
    showVectorMagnitudes: false,
  },
};

export default profile;

