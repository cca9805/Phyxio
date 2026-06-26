const graph_identity = {
  graph_type: "Svg",
  pregunta_principal: {
    es: "Como se determina la velocidad de propagacion de una onda y como la tension y la densidad lineal la fijan en una cuerda?",
    en: "How is wave propagation speed determined and how do tension and linear density set it on a string?",
    keywords: ["velocidad", "propagacion", "onda", "repeticion", "espacial", "temporal", "tension", "densidad", "lineal", "cuerda", "speed", "propagation", "wave", "tension", "density"],
  },
  variable_control: "lambda",
  magnitud_estrella: "lambda",
  magnitud_secundaria: "mu",
  formula: "v = sqrt(T / mu)",
  tipo_lectura: "causal",
  target_interpretable: true,
};

export default {
  meta: {
    leafId: "velocidad-en-cuerda-tensa",
    graphType: "Svg",
    title: {
      es: "Velocidad en cuerda tensa",
      en: "Speed on a taut string",
    },
  },
  graph_identity: graph_identity,
  pregunta_principal: graph_identity.pregunta_principal,
  magnitud_estrella: graph_identity.magnitud_estrella,
  visualMap: {
    T: "elastic_tension_scale",
    mu: "inertia_density_scale",
    v: "wave_speed_marker",
    lambda: "spatial_spacing",
    f: "source_rhythm",
  },
  infoCards: [
    {
      id: "tension-card",
      key: "tension",
      label: { es: "Tension", en: "Tension" },
      title: { es: "Restauracion mecanica", en: "Mechanical restoration" },
      description: {
        es: "Mas tension transmite antes el desvio transversal entre tramos vecinos.",
        en: "More tension transmits transverse displacement sooner between neighboring segments.",
      },
    },
    {
      id: "density-card",
      key: "linear_density",
      label: { es: "Densidad", en: "Density" },
      title: { es: "Inercia por metro", en: "Inertia per meter" },
      description: {
        es: "Mayor densidad lineal hace que cada metro sea mas dificil de acelerar.",
        en: "Larger linear density makes each meter harder to accelerate.",
      },
    },
    {
      id: "speed-card",
      key: "speed",
      label: { es: "Rapidez", en: "Speed" },
      title: { es: "Resultado del medio", en: "Medium result" },
      description: {
        es: "La rapidez es una propiedad de la cuerda, no del ritmo de la fuente.",
        en: "Speed is a property of the string, not of the source rhythm.",
      },
    },
  ],
  interpretation_binding: {
    targets: ["tension_de_la_cuerda", "mu", "velocidad_de_propagacion", "lambda", "frecuencia"],
    graph_reading: {
      es: "El Svg separa restauracion, inercia y rapidez para leer por que cambia la propagacion.",
      en: "The Svg separates restoration, inertia, and speed to read why propagation changes.",
    },
  },
};

