import { DCL_VECTOR_TYPE_IDS, DCL_SCENE_IDS } from "../dclGrammar.js";

const profile = {
  meta: {
    leafId: "presion-hidrostatica",
    title: { es: "Diagrama DCL", en: "DCL Diagram" }
  },
  graph_identity: "presion_hidro_dcl",
  pregunta_principal: {
    es: "¿Como varia la presion en el interior de un fluido con la profundidad?",
    en: "How does pressure within a fluid vary with depth?"
  },
  magnitud_estrella: "dp",
  scene_registry: "DCL_SCENE_REGISTRY",
  scene: DCL_SCENE_IDS.PARTICLE_FREE,
  vectors: [
    { id: "v_presion", type: DCL_VECTOR_TYPE_IDS.FORCE_EXTERNAL },
    { id: "v_peso", type: DCL_VECTOR_TYPE_IDS.WEIGHT }
  ],
  interpretation: {
    id: "interp_1",
    variables: ["p", "rho", "g", "h"],
    rule: "p = p0 + rho*g*h",
    meaning: { es: "Aumento", en: "Increase" },
    header_bridge: { es: "¿Qué indica DCL?", en: "What does DCL indicate?" },
    reading_focus: { es: "dp", en: "dp" },
    graph_role: { es: "Equilibrio", en: "Equilibrium" },
    calc_reading: { es: "Fuerzas", en: "Forces" },
    graph_reading: { es: "Flechas", en: "Arrows" },
    physical_insight: { es: "Equilibrio nulo", en: "Null equilibrium" },
    likely_errors: { es: "Ignorar p0", en: "Ignore p0" },
    fallbacks: [],
    condition: true,
    visual_cues: ["arrows"]
  },
  options: {
    showCompactLegend: true
  },
  infoCards: [{
    key: "fuerzas",
    label: { es: "Fuerzas hidrostaticas", en: "Hydrostatic forces" }
  }],
  // Fuerza y Peso para validación
};

export default profile;
