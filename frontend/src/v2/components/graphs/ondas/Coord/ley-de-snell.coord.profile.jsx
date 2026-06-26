const graph_identity = {
  pregunta_principal: {
    es: "Como relaciona la ley de Snell los angulos de incidencia y refraccion con los indices de refraccion de dos medios?",
    en: "How does Snell's law relate the angles of incidence and refraction to the refractive indices of two media?",
  },
  variable_control: "theta_1",
  magnitud_estrella: "theta_2",
  formula: "n1 * sin(theta_1) = n2 * sin(theta_2)",
  target_interpretable: true,
};

const profile = {
  id: "ley-de-snell-coord",
  type: "Coord",
  graph_identity,
  coordSemantic: {
    title: {
      es: "Ley de Snell",
      en: "Snell's law",
    },
    description: {
      es: "Angulo refractado frente al angulo incidente para dos indices de refraccion.",
      en: "Refracted angle versus incident angle for two refractive indices.",
    },
    xAxis: {
      id: "theta_1",
      label: {
        es: "Angulo de incidencia",
        en: "Incidence angle",
      },
      unit: "rad",
    },
    yAxis: {
      id: "theta_2",
      label: {
        es: "Angulo de refraccion",
        en: "Refraction angle",
      },
      unit: "rad",
    },
    series: [
      {
        id: "theta_2",
        label: {
          es: "Rayo refractado",
          en: "Refracted ray",
        },
        formula: "theta_2 = arcsin(n1 * sin(theta_1) / n2)",
      },
      {
        id: "theta_c",
        label: {
          es: "Angulo critico",
          en: "Critical angle",
        },
        formula: "theta_c = arcsin(n2 / n1)",
      },
    ],
  },
};

export default profile;

