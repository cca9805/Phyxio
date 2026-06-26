const profile = {
  graph_identity: {
    id: "cuerdas",
    graph_type: "Coord",
    pregunta_principal:
      "Como determinan la longitud, la tension y la densidad lineal las frecuencias estacionarias de una cuerda?",
    magnitud_estrella: "f_n",
    formula: "f_n = n * sqrt(T / mu) / (2 * L)",
    physical_role: {
      es: "fenomeno fisico",
      en: "physical phenomenon",
    },
  },
  pregunta_principal: {
    es: "Como determinan la longitud, la tension y la densidad lineal las frecuencias estacionarias de una cuerda?",
    en: "How do length, tension, and linear density determine the standing frequencies of a string?",
  },
  magnitud_estrella: "f_n",
  formula: "f_n = n * sqrt(T / mu) / (2 * L)",
  axes: {
    x: { id: "x", label: "posicion sobre la cuerda" },
    y: { id: "y", label: "desplazamiento transversal" },
  },
};

export default profile;

