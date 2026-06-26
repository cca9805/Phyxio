import {
  DCL_SCENE_IDS,
  DCL_VECTOR_TYPE_IDS,
} from "../dclGrammar.js";

const profile = {
  meta: {
    leafId: "equilibrio-estadistico",
    title: { es: "Balance de flujos estadísticos", en: "Balance of statistical flows" }
  },
  graph_identity: "equilibrio_estadistico_dcl",
  pregunta_principal: {
    es: "¿Cómo se reconoce el equilibrio estadístico cuando el flujo neto de probabilidad entre estados accesibles se anula?",
    en: "How is statistical equilibrium recognized when the net probability flow among accessible states vanishes?"
  },
  magnitud_estrella: "flujo_probabilidad",
  scene: DCL_SCENE_IDS.PARTICLE_FREE,
  vectors: [
    {
      id: "v_flujo_ij",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      label: { es: "flecha de flujo i→j", en: "flow arrow i→j" },
      symbol: "J_ij",
    },
    {
      id: "v_flujo_ji",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      label: { es: "flecha de flujo j→i", en: "flow arrow j→i" },
      symbol: "J_ji",
    }
  ],
  interpretation: {
    id: "interp_equilibrio_estadistico",
    variables: ["flujo_probabilidad", "probabilidad_estado", "temperatura"],
    rule: "J_ij = J_ji => dp_i/dt = 0",
    meaning: { es: "Balance", en: "Balance" },
    header_bridge: { es: "¿Qué indica el DCL?", en: "What does the DCL indicate?" },
    reading_focus: { es: "flujo neto", en: "net flow" },
    graph_role: { es: "Equilibrio", en: "Equilibrium" },
    calc_reading: { es: "Flujos", en: "Flows" },
    graph_reading: { es: "Flechas", en: "Arrows" },
    physical_insight: { es: "Equilibrio detallado", en: "Detailed balance" },
    likely_errors: { es: "Confundir flujo neto cero con transiciones nulas", en: "Confuse zero net flow with null transitions" },
    fallbacks: [],
    condition: true,
    visual_cues: ["arrows"]
  },
  options: {
    showCompactLegend: true
  },
  infoCards: [{
    key: "flujos",
    label: { es: "Flujos de probabilidad", en: "Probability flows" }
  }]
};

export default profile;
