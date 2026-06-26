const graph_identity = {
  pregunta_principal: {
    es: "Como permite la fase saber si dos puntos de una onda estan en el mismo estado de oscilacion?",
    en: "How does phase tell whether two points of a wave are in the same oscillation state?",
  },
  variable_control: "Delta_phi",
  magnitud_estrella: "phi",
  formula: "phi = k*x - omega*t + phi0",
  target_interpretable: true,
};

export default {
  id: "fase-coord",
  type: "Coord",
  graph_identity: graph_identity,
  coordSemantic: {
    title: { es: "Fase y desfase", en: "Phase and phase difference" },
    description: {
      es: "Comparacion de estados de ciclo en una onda armonica.",
      en: "Comparison of cycle states in a harmonic wave.",
    },
    xAxis: { id: "x", label: { es: "Posicion", en: "Position" }, unit: "m" },
    yAxis: { id: "phi", label: { es: "Fase", en: "Phase" }, unit: "rad" },
    series: [
      { id: "phi", label: { es: "Fase", en: "Phase" }, formula: "phi = k*x - omega*t + phi0" },
      { id: "Delta_phi", label: { es: "Desfase", en: "Phase difference" }, formula: "Delta_phi = k*Delta_x - omega*Delta_t" },
    ],
  },
};

