const profile = {
  id: "archimedes-coord",
  type: "Coord",
  meta: {
    leafId: "principio-de-arquimedes",
    graph_identity: "Coord",
    pregunta_principal: {
      es: "¿Cómo afecta el empuje a la flotabilidad de un cuerpo y qué determina si se hunde o flota?",
      en: "How does buoyancy affect an object's flotation and what determines if it sinks or floats?"
    },
    magnitud_estrella: "E"
  },
  config: {
    axes: {
      x: { label: { es: "Fuerzas", en: "Forces" } },
      y: { label: { es: "Magnitud (N)", en: "Magnitude (N)" } }
    },
    bars: [
      { id: "E", color: "#38bdf8" },
      { id: "W", color: "#fbbf24" }
    ]
  },
  infoCards: [{
    key: "analisis",
    label: { es: "Comparación", en: "Comparison" },
    title: { es: "Comparación de Fuerzas", en: "Force Comparison" },
    description: { es: "Contraste entre el Empuje E y el Peso W.", en: "Contrast between Buoyancy E and Weight W." }
  }]
};

export default profile;
