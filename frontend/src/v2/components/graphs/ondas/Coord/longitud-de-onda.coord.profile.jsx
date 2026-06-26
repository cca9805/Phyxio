const graph_identity = {
  pregunta_principal: {
    es: "Como mide la longitud de onda la separacion espacial entre estados equivalentes de una onda?",
    en: "How does wavelength measure the spatial separation between equivalent states of a wave?",
  },
  variable_control: "lambda",
  magnitud_estrella: "lambda",
  formula: "lambda = Delta_x / n",
  target_interpretable: true,
};

export default {
  id: "longitud-de-onda-coord",
  type: "Coord",
  graph_identity: graph_identity,
  coordSemantic: {
    title: { es: "Longitud de onda", en: "Wavelength" },
    description: {
      es: "Separacion espacial entre crestas o estados equivalentes.",
      en: "Spatial separation between crests or equivalent states.",
    },
    xAxis: { id: "x", label: { es: "Posicion", en: "Position" }, unit: "m" },
    yAxis: { id: "y", label: { es: "Perturbacion", en: "Disturbance" }, unit: "u.a." },
    series: [
      { id: "lambda", label: { es: "Longitud de onda", en: "Wavelength" }, formula: "lambda = Delta_x / n" },
      { id: "k", label: { es: "Numero de onda", en: "Wavenumber" }, formula: "k = 2*pi/lambda" },
    ],
  },
};

