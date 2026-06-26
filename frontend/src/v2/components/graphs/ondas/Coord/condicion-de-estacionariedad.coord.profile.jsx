const profile = {
  graph_identity: {
    id: "condicion-de-estacionariedad",
    graph_type: "Coord",
    pregunta_principal:
      "Como se reconoce la condicion de estacionariedad por longitud de cavidad, modo entero, longitud de onda y frecuencia modal?",
    magnitud_estrella: "f_n",
    formula: "L = n * lambda / 2",
    physical_role: {
      es: "concepto fisico",
      en: "physical concept",
    },
  },
  pregunta_principal: {
    es: "Como se reconoce la condicion de estacionariedad por longitud de cavidad, modo entero, longitud de onda y frecuencia modal?",
    en: "How is the standing-wave condition recognized from cavity length, integer mode, wavelength, and modal frequency?",
  },
  magnitud_estrella: "f_n",
  formula: "L = n * lambda / 2",
  axes: {
    x: { id: "x", label: "posicion en la cavidad" },
    y: { id: "modo", label: "desplazamiento estacionario" },
  },
};

export default profile;

