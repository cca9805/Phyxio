import {
  DCL_SCENE_IDS,
  DCL_QUESTION_TYPES,
  DCL_BODY_KIND_IDS,
  DCL_VECTOR_TYPE_IDS,
  DCL_DIRECTION_MODE_IDS,
  DCL_ANCHORS,
  DCL_HIGHLIGHT_MODES,
  DCL_LABEL_POSITIONS,
} from "../../../DCL/dclGrammar.js";

const profile = {
  scene: DCL_SCENE_IDS.BLOCK_ON_TABLE,
  question: DCL_QUESTION_TYPES.IDENTIFY_FORCES,
  lang: "es",
  meta: {
    id: "energia-potencial-elastica-dcl",
    leafId: "energia-potencial-elastica",
    title: {
      es: "DCL · Energia potencial elastica",
      en: "FBD · Elastic potential energy",
    },
    question: {
      es: "Como se representa en el DCL la fuerza elastica que acompana la deformacion de un resorte?",
      en: "How is the elastic force that accompanies a spring deformation represented in the FBD?",
    },
  },
  pregunta_principal: {
    es: "Como se representa en el DCL la fuerza elastica que acompana la deformacion de un resorte?",
    en: "How is the elastic force that accompanies a spring deformation represented in the FBD?",
  },
  bodies: [
    {
      id: "block",
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
      bodyId: "block",
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
      bodyId: "block",
      magnitudeId: "N",
      label: { es: "Normal", en: "Normal" },
      symbol: "N",
      anchor: DCL_ANCHORS.CONTACT,
      semanticRole: "constraint",
      style: { labelPosition: DCL_LABEL_POSITIONS.END, visible: true },
    },
    {
      id: "spring",
      type: DCL_VECTOR_TYPE_IDS.SPRING_FORCE,
      bodyId: "block",
      magnitudeId: "F_e",
      label: { es: "Fuerza elastica", en: "Spring force" },
      symbol: "F_e",
      anchor: DCL_ANCHORS.CONTACT,
      directionMode: DCL_DIRECTION_MODE_IDS.RIGHT,
      semanticRole: "restoring_force",
      style: { highlight: DCL_HIGHLIGHT_MODES.SECONDARY, labelPosition: DCL_LABEL_POSITIONS.END, visible: true },
    },
  ],
  interpretation: {
    header_bridge: {
      es: "El DCL fija que fuerza real produce el cambio de energia elastica.",
      en: "The FBD fixes which real force produces the change in elastic energy.",
    },
    reading_focus: {
      es: "Leer el peso, la normal y la fuerza elastica antes de interpretar el balance.",
      en: "Read the weight, normal force, and elastic force before interpreting the balance.",
    },
    graph_role: {
      es: "Mostrar que la fuerza elastica se opone al cambio de deformacion y puede entregar o recibir trabajo.",
      en: "Show that the elastic force opposes the deformation change and can deliver or receive work.",
    },
    calc_reading: {
      es: "Si el calculo devuelve [[We]] o [[dUe]], el DCL ayuda a comprobar el sentido de la fuerza del resorte.",
      en: "If the calculation returns [[We]] or [[dUe]], the FBD helps check the direction of the spring force.",
    },
    graph_reading: {
      es: "La flecha de la fuerza elastica debe apuntar hacia el estado de menor deformacion.",
      en: "The elastic-force arrow must point toward the state of smaller deformation.",
    },
    physical_insight: {
      es: "La energia potencial elastica no aparece sola: nace de una fuerza de contacto real sobre el resorte.",
      en: "Elastic potential energy does not appear by itself: it comes from a real contact force on the spring.",
    },
    likely_errors: {
      es: "No dibujes una energia como si fuera una fuerza: el DCL solo representa interacciones reales.",
      en: "Do not draw an energy as if it were a force: the FBD only represents real interactions.",
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

