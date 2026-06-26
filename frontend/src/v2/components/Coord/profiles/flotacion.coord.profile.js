const profile = {
  meta: {
    id: "coord-flotacion",
    leafId: "flotacion",
    title: { es: "Gráfico de Fuerzas", en: "Force Graph" },
  },
  
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se comparan el empuje y el peso en el equilibrio?",
      en: "How do buoyancy and weight compare in equilibrium?",
    },
    magnitud_estrella: "P",
  },

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
  }
};

export default profile;
