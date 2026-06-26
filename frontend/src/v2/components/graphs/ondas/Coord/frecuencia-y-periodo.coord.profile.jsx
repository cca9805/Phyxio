const graph_identity = {
  pregunta_principal: {
    es: "Como se relacionan la frecuencia y el periodo para describir el ritmo temporal de una onda?",
    en: "How are frequency and period related to describe the temporal rhythm of a wave?",
  },
  variable_control: "f",
  magnitud_estrella: "T",
  formula: "f = 1 / T",
  target_interpretable: true,
};

export default {
  id: "frecuencia-y-periodo-coord",
  type: "Coord",
  graph_identity: graph_identity,
  coordSemantic: {
    title: { es: "Frecuencia y periodo", en: "Frequency and period" },
    description: {
      es: "Lectura temporal de ciclos por segundo y separacion entre ciclos.",
      en: "Temporal reading of cycles per second and spacing between cycles.",
    },
    xAxis: { id: "t", label: { es: "Tiempo", en: "Time" }, unit: "s" },
    yAxis: { id: "y", label: { es: "Oscilacion", en: "Oscillation" }, unit: "u.a." },
    series: [
      { id: "f", label: { es: "Frecuencia", en: "Frequency" }, formula: "f = 1 / T" },
      { id: "T", label: { es: "Periodo", en: "Period" }, formula: "T = 1 / f" },
    ],
  },
};

