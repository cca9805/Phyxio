const graph_identity = {
  pregunta_principal: {
    es: "Como relaciona la ecuacion de onda la curvatura espacial de una perturbacion con su cambio temporal?",
    en: "How does the wave equation relate the spatial curvature of a disturbance to its temporal change?",
  },
  variable_control: "v",
  magnitud_estrella: "y",
  formula: "d2y_dt2 = v^2 * d2y_dx2",
  target_interpretable: true,
};

export default {
  id: "ecuacion-de-onda-coord",
  type: "Coord",
  graph_identity: graph_identity,
  coordSemantic: {
    title: { es: "Curvatura y evolucion", en: "Curvature and evolution" },
    description: {
      es: "Lectura local de la perturbacion y de la rapidez con que el perfil ondulatorio se propaga.",
      en: "Local reading of the disturbance and of the speed with which the wave profile propagates.",
    },
    xAxis: { id: "x", label: { es: "Posicion", en: "Position" }, unit: "m" },
    yAxis: { id: "y", label: { es: "Perturbacion", en: "Disturbance" }, unit: "m" },
    series: [
      {
        id: "y",
        label: { es: "Perfil", en: "Profile" },
        formula: "y = A * sin(k*x - omega*t)",
      },
      {
        id: "curvature",
        label: { es: "Curvatura espacial", en: "Spatial curvature" },
        formula: "curvature = -k^2 * y",
      },
    ],
  },
};

