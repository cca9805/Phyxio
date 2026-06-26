import { DCL_VECTOR_TYPE_IDS, DCL_SCENE_IDS } from "../dclGrammar.js";

const profile = {
  id: "archimedes-dcl",
  type: "Dcl",
  meta: {
    leafId: "principio-de-arquimedes",
    graph_identity: "Dcl",
    pregunta_principal: {
      es: "¿Cómo afecta el empuje a la flotabilidad de un cuerpo y qué determina si se hunde o flota?",
      en: "How does buoyancy affect an object's flotation and what determines if it sinks or floats?"
    },
    magnitud_estrella: null
  },
  config: {
    scene: DCL_SCENE_IDS.PARTICLE_FREE,
    options: {
      showCompactLegend: true
    },
    vectors: [
      {
        id: "W",
        type: DCL_VECTOR_TYPE_IDS.WEIGHT,
        origin: { x: 0, y: 0 },
        direction: { x: 0, y: -1 },
        magnitude: "W",
        label: { es: "Peso (W)", en: "Weight (W)" },
        color: "#fbbf24"
      },
      {
        id: "E",
        type: DCL_VECTOR_TYPE_IDS.BUOYANCY,
        origin: { x: 0, y: 0 },
        direction: { x: 0, y: 1 },
        magnitude: "E",
        label: { es: "Empuje (E)", en: "Buoyancy (E)" },
        color: "#38bdf8"
      }
    ]
  },
  interpretation: {
    header_bridge: { es: "Análisis del balance de fuerzas.", en: "Force balance analysis." },
    reading_focus: { es: "Balance de fuerzas verticales", en: "Vertical force balance" },
    graph_role: { es: "Visualizar oposición Peso-Empuje.", en: "Visualize Weight-Buoyancy opposition." },
    calc_reading: { es: "El peso aparente se reduce.", en: "Apparent weight is reduced." },
    graph_reading: { es: "Vectores alineados verticalmente.", en: "Vertically aligned vectors." },
    physical_insight: { es: "El fluido genera presión neta ascendente.", en: "Fluid generates net upward pressure." },
    likely_errors: {
      es: ["No considerar la densidad del fluido"],
      en: ["Not considering fluid density"]
    }
  },
  infoCards: [{
    key: "fuerzas",
    title: { es: "Fuerzas sobre el cuerpo", en: "Forces on the body" },
    label: { es: "Fuerzas", en: "Forces" },
    description: {
      es: "Visualización del balance entre Peso y Empuje.",
      en: "Visualization of the balance between Weight and Buoyancy."
    }
  }]
};

export default profile;
