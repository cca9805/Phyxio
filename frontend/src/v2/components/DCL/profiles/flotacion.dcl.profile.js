import { DCL_SCENE_IDS, DCL_BODY_KIND_IDS, DCL_VECTOR_TYPE_IDS } from "../dclGrammar.js";

const profile = {
  scene: DCL_SCENE_IDS.PARTICLE_FREE,
  meta: {
    id: "dcl-flotacion",
    leafId: "flotacion",
    title: { es: "DCL de Flotación", en: "Flotation DCL" },
  },
  
  graph_identity: {
    pregunta_principal: {
      es: "¿Qué fuerzas actúan sobre un cuerpo en equilibrio de flotación?",
      en: "What forces act on a body in flotation equilibrium?",
    },
    magnitud_estrella: "E",
  },

  bodies: [
    {
      id: "block",
      kind: DCL_BODY_KIND_IDS.BLOCK,
      label: { es: "Bloque", en: "Block" },
    }
  ],

  vectors: [
    {
      id: "weight",
      type: DCL_VECTOR_TYPE_IDS.WEIGHT,
      bodyId: "block",
      magnitudeId: "P",
      label: { es: "Peso", en: "Weight" },
    },
    {
      id: "buoyancy",
      type: DCL_VECTOR_TYPE_IDS.CUSTOM,
      bodyId: "block",
      magnitudeId: "E",
      label: { es: "Empuje", en: "Buoyancy" },
      style: { color: "#38bdf8" }
    }
  ],

  interpretation: {
    header_bridge: { es: "Análisis del equilibrio de flotación", en: "Flotation equilibrium analysis" },
    reading_focus: { es: "Balance de fuerzas verticales", en: "Vertical force balance" },
    graph_role: { es: "Representación vectorial del peso y empuje", en: "Vector representation of weight and buoyancy" },
    calc_reading: { es: "Cruce de densidades para determinar hundimiento", en: "Density crossover to determine sinking" },
    graph_reading: { es: "Vectores opuestos en equilibrio estático", en: "Opposing vectors in static equilibrium" },
    physical_insight: { es: "El empuje iguala al peso cuando se desplaza el volumen justo de fluido", en: "Buoyancy equals weight when the right volume of fluid is displaced" },
    likely_errors: {
      es: ["Confundir masa con peso", "Suponer que el empuje es constante al hundirse"],
      en: ["Confusing mass with weight", "Assuming buoyancy is constant when sinking"]
    }
  },

  options: {
    showCompactLegend: true
  }
};

export default profile;
