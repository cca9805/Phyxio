const graph_identity = {
  pregunta_principal: {
    es: "Que caracteriza a una onda como perturbacion que se propaga y como se distinguen sus magnitudes basicas?",
    en: "What characterizes a wave as a propagating disturbance and how are its basic quantities distinguished?",
  },
  variable_control: "lambda",
  magnitud_estrella: "y",
  formula: "y = A * sin(2*pi*(x/lambda - f*t))",
  target_interpretable: true,
};

export default {
  id: "concepto-de-onda-coord",
  type: "Coord",
  graph_identity: graph_identity,
  coordSemantic: {
    title: { es: "Perturbacion ondulatoria", en: "Wave disturbance" },
    description: {
      es: "Lectura de la perturbacion local y su repeticion espacial.",
      en: "Reading of local disturbance and spatial repetition.",
    },
    xAxis: { id: "x", label: { es: "Posicion", en: "Position" }, unit: "m" },
    yAxis: { id: "y", label: { es: "Perturbacion", en: "Disturbance" }, unit: "m" },
    series: [{ id: "y", label: { es: "Perfil", en: "Profile" }, formula: "y = A * sin(2*pi*x/lambda)" }],
  },
};

