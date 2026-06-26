import { DCL_VECTOR_TYPE_IDS, DCL_SCENE_IDS } from "../dclGrammar.js";

const profile = {
  meta: {
    id: "dcl-principio-fundamental-de-la-hidrostatica",
    leafId: "principio-fundamental-de-la-hidrostatica",
    title: {
      es: "DCL de elemento de fluido",
      en: "Fluid element FBD",
    },
  },
  graph_identity: "principio_fundamental_hidrostatica_dcl",
  pregunta_principal: {
    es: "¿Cómo equilibran las fuerzas de presión al peso del elemento de fluido?",
    en: "How do pressure forces balance the weight of the fluid element?",
  },
  magnitud_estrella: "none",
  scene_registry: "DCL_SCENE_REGISTRY",
  scene: DCL_SCENE_IDS.PARTICLE_FREE,
  vectors: [
    {
      id: "W",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      origin: { x: 0, y: 0 },
      direction: { x: 0, y: -1 },
      magnitude: "W",
      label: { es: "Peso", en: "Weight" },
      color: "#fbbf24"
    },
    {
      id: "F_net",
      type: DCL_VECTOR_TYPE_IDS.FORCE_EXTERNAL,
      origin: { x: 0, y: 0 },
      direction: { x: 0, y: 1 },
      magnitude: "F_net",
      label: { es: "Fuerza neta de presión", en: "Net pressure force" },
      color: "#38bdf8"
    }
  ],
  interpretation: {
    id: "interp_principio_f",
    variables: ["dp", "rho", "g", "dz"],
    rule: "dp = -rho*g*dz",
    meaning: { es: "Equilibrio", en: "Equilibrium" },
    header_bridge: { es: "¿Qué indica este DCL?", en: "What does this FBD indicate?" },
    reading_focus: { es: "dp", en: "dp" },
    graph_role: { es: "Balance de fuerzas", en: "Force balance" },
    calc_reading: { es: "Fuerzas estáticas", en: "Static forces" },
    graph_reading: { es: "Vectores opuestos", en: "Opposite vectors" },
    physical_insight: { es: "Equilibrio nulo", en: "Null equilibrium" },
    likely_errors: { es: "Ignorar signo", en: "Ignore sign" },
    fallbacks: [],
    condition: true,
    visual_cues: ["arrows"]
  },
  options: {
    showCompactLegend: true
  },
  infoCards: [
    {
      key: "equilibrio",
      label: { es: "Equilibrio vertical", en: "Vertical equilibrium" },
    },
  ],
};

export default profile;
