import { DCL_SCENE_IDS, DCL_BODY_KIND_IDS, DCL_VECTOR_TYPE_IDS } from "../../DCL/dclGrammar.js";

const profile = {
  scene: DCL_SCENE_IDS.PARTICLE_FREE,
  meta: {
    id: "dcl-manometros",
    leafId: "manometros",
    title: { es: "DCL de Manometros", en: "Manometers FBD" },
  },

  graph_identity: {
    pregunta_principal: {
      es: "Que accion de presion domina el desplazamiento de la columna en un manometro",
      en: "Which pressure action dominates the column displacement in a manometer",
    },
    magnitud_estrella: null,
  },

  bodies: [
    {
      id: "column",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Porcion de columna", en: "Column slice" },
    },
  ],

  vectors: [
    {
      id: "left-pressure-force",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "column",
      magnitudeId: "F_left",
      label: { es: "Fuerza de presion izquierda", en: "Left pressure force" },
      symbol: "F_L",
      semanticRole: "cause",
      style: { color: "#38bdf8" },
    },
    {
      id: "right-pressure-force",
      type: DCL_VECTOR_TYPE_IDS.APPLIED_FORCE,
      bodyId: "column",
      magnitudeId: "F_right",
      label: { es: "Fuerza de presion derecha", en: "Right pressure force" },
      symbol: "F_R",
      semanticRole: "opposition",
      style: { color: "#f59e0b" },
    },
    {
      id: "hydrostatic-resultant",
      type: DCL_VECTOR_TYPE_IDS.REACTION,
      bodyId: "column",
      magnitudeId: "R_h",
      label: { es: "Resultante hidrostatica", en: "Hydrostatic resultant" },
      symbol: "R_h",
      semanticRole: "result",
      style: { color: "#22c55e" },
    },
    {
      id: "column-weight",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "column",
      magnitudeId: "W_col",
      label: { es: "Peso de la columna", en: "Column weight" },
      symbol: "W_c",
      semanticRole: "constraint",
      style: { color: "#a78bfa" },
    },
  ],

  interpretation: {
    header_bridge: { es: "Analisis de equilibrio manometrico", en: "Manometric equilibrium analysis" },
    reading_focus: { es: "Comparacion entre fuerzas laterales de presion", en: "Comparison between lateral pressure forces" },
    graph_role: { es: "Representa dos fuerzas de presion opuestas, la resultante hidrostatica y el peso de la porcion de columna", en: "Represents two opposite pressure forces, the hydrostatic resultant, and the weight of the column slice" },
    calc_reading: { es: "El desnivel observado se traduce en dp mediante rho g dh y resume el desequilibrio entre fuerzas laterales y peso de columna", en: "The observed level gap is translated into dp through rho g dh and summarizes the imbalance between lateral forces and column weight" },
    graph_reading: { es: "La rama dominante impone una fuerza lateral mayor y la columna encuentra un nuevo equilibrio con su propio peso", en: "The dominant branch applies a larger lateral force and the column reaches a new equilibrium with its own weight" },
    physical_insight: { es: "La columna se mueve hasta que la resultante hidrostatica y el peso de la porcion movil compensan el exceso de fuerza de una rama sobre la otra", en: "The column moves until the hydrostatic resultant and the slice weight compensate the excess force of one branch over the other" },
    likely_errors: {
      es: ["Confundir referencia absoluta y manometrica", "Usar la densidad del fluido del proceso"],
      en: ["Confusing absolute and gauge reference", "Using process-fluid density instead of manometric-liquid density"],
    },
  },

  options: {
    showCompactLegend: true,
  },
};

export default profile;
