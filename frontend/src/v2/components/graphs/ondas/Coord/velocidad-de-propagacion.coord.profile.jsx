const graph_identity = {
  pregunta_principal: {
    es: "Como se determina la velocidad de propagacion de una onda a partir de su repeticion espacial y temporal?",
    en: "How is the propagation speed of a wave determined from its spatial and temporal repetition?",
  },
  variable_control: "v",
  magnitud_estrella: "v",
  formula: "v = lambda * f",
  target_interpretable: true,
};

export default {
  id: "velocidad-de-propagacion-coord",
  type: "Coord",
  graph_identity: graph_identity,
  pregunta_principal: graph_identity.pregunta_principal,
  magnitud_estrella: graph_identity.magnitud_estrella,
  coordSemantic: {
    title: { es: "Velocidad de propagacion", en: "Wave speed" },
    description: {
      es: "Muestra como la separacion espacial y el ritmo temporal fijan el avance del patron.",
      en: "Shows how spatial spacing and temporal rhythm set pattern advance.",
    },
    xAxis: { id: "x", label: { es: "Posicion", en: "Position" }, unit: "m" },
    yAxis: { id: "y", label: { es: "Perturbacion", en: "Disturbance" }, unit: "u.a." },
    series: [
      { id: "v", label: { es: "Rapidez del patron", en: "Pattern speed" }, formula: "v = lambda * f" },
      { id: "lambda", label: { es: "Longitud de onda", en: "Wavelength" }, formula: "lambda = v / f" },
    ],
  },
};

