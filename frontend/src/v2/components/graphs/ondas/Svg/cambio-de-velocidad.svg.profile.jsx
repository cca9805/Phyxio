const profile = {
  leafId: "cambio-de-velocidad",
  graph_identity: {
    id: "cambio-de-velocidad-svg",
    pregunta_principal: {
      es: "Como cambia la velocidad de una onda al pasar de un medio a otro y como se relaciona con el indice de refraccion?",
      en: "How does wave speed change when passing from one medium to another and how does it relate to refractive index?",
    },
    variable_control: "n_indice",
    magnitud_estrella: "v_medio",
    formula: "v_medio = c_vacio / n_indice",
    target_interpretable: true,
  },
  pregunta_principal: {
    es: "Como cambia la velocidad de una onda al pasar de un medio a otro y como se relaciona con el indice de refraccion?",
    en: "How does wave speed change when passing from one medium to another and how does it relate to refractive index?",
  },
  magnitud_estrella: "v_medio",
  meta: {
    title: {
      es: "Cambio de velocidad por refraccion",
      en: "Speed change by refraction",
    },
    description: {
      es: "Relaciona indice del medio, velocidad reducida y longitud de onda transmitida.",
      en: "Relates medium index, reduced speed, and transmitted wavelength.",
    },
  },
  infoCards: [
    {
      id: "speed-card",
      key: "speed",
      label: {
        es: "Velocidad",
        en: "Speed",
      },
      title: {
        es: "Velocidad en el medio",
        en: "Speed in medium",
      },
      description: {
        es: "La onda avanza mas despacio cuando el indice del medio aumenta.",
        en: "The wave travels more slowly when the medium index increases.",
      },
    },
    {
      id: "index-card",
      key: "index",
      label: {
        es: "Indice",
        en: "Index",
      },
      title: {
        es: "Indice de refraccion",
        en: "Refractive index",
      },
      description: {
        es: "El indice compara la rapidez en vacio con la rapidez dentro del material.",
        en: "The index compares vacuum speed with the speed inside the material.",
      },
    },
    {
      id: "wavelength-card",
      key: "wavelength",
      label: {
        es: "Longitud",
        en: "Wavelength",
      },
      title: {
        es: "Longitud de onda transmitida",
        en: "Transmitted wavelength",
      },
      description: {
        es: "Al conservarse la frecuencia, una velocidad menor implica menor longitud de onda.",
        en: "Because frequency is conserved, lower speed implies a shorter wavelength.",
      },
    },
  ],
  interpretation_binding: {
    v_medio: {
      target: "v_medio",
      label: {
        es: "Velocidad en el medio",
        en: "Speed in medium",
      },
      unit: "m/s",
    },
    c_vacio: {
      target: "c_vacio",
      label: {
        es: "Velocidad en vacio",
        en: "Vacuum speed",
      },
      unit: "m/s",
    },
    n_indice: {
      target: "n_indice",
      label: {
        es: "Indice de refraccion",
        en: "Refractive index",
      },
      unit: "adimensional",
    },
    lambda_medio: {
      target: "lambda_medio",
      label: {
        es: "Longitud de onda en el medio",
        en: "Wavelength in medium",
      },
      unit: "m",
    },
  },
};

export default profile;

