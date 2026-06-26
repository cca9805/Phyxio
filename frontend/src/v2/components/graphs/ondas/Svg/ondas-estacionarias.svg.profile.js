const profile = {
  meta: {
    leafId: "ondas-estacionarias-en-cuerdas",
    graphType: "Svg",
    title: {
      es: "Patron visual de onda estacionaria",
      en: "Visual standing-wave pattern",
    },
  },
  graph_identity: {
    id: "ondas-estacionarias-en-cuerdas",
    graph_type: "Svg",
    pregunta_principal: {
      es: "Cuales son las frecuencias y patrones de vibracion que puede adoptar una cuerda con extremos fijos?",
      en: "What are the frequencies and vibration patterns that a string with fixed ends can adopt?",
    },
    keywords: [
      "frecuencias",
      "patrones",
      "vibracion",
      "cuerda",
      "extremos",
      "fijos",
      "frequencies",
      "vibration",
      "patterns",
      "string",
      "fixed",
      "ends",
    ],
    magnitud_estrella: "longitud_onda_estacionaria",
    formula: "lambda_n = 2 * L / n",
    physical_role: {
      es: "concepto fisico",
      en: "physical concept",
    },
  },
  pregunta_principal: {
    es: "Cuales son las frecuencias y patrones de vibracion que puede adoptar una cuerda con extremos fijos?",
    en: "What are the frequencies and vibration patterns that a string with fixed ends can adopt?",
  },
  magnitud_estrella: "longitud_onda_estacionaria",
  formula: "lambda_n = 2 * L / n",
  interpretation_binding: {
    targets: [
      "longitud_cuerda",
      "numero_armonico",
      "longitud_onda_estacionaria",
      "frecuencia_modo",
      "frecuencia_fundamental",
    ],
    graph_reading: {
      es: "El Svg relaciona nodos, vientres y patron espacial con las frecuencias permitidas por los extremos fijos.",
      en: "The Svg relates nodes, antinodes, and spatial pattern with the frequencies allowed by fixed ends.",
    },
  },
  axes: {
    x: { id: "longitud_cuerda", label: "posicion en la cuerda" },
    y: { id: "desplazamiento_transversal", label: "desplazamiento transversal" },
  },
  infoCards: [
    {
      key: "nodos",
      label: {
        es: "Nodos fijos",
        en: "Fixed nodes",
      },
      text: {
        es: "Los extremos de la cuerda permanecen como nodos y obligan a seleccionar patrones discretos.",
        en: "The string ends remain nodes and force the system to select discrete patterns.",
      },
    },
    {
      key: "frecuencias",
      label: {
        es: "Frecuencias permitidas",
        en: "Allowed frequencies",
      },
      text: {
        es: "Cada modo permitido combina longitud, velocidad y numero de armonico para fijar una frecuencia.",
        en: "Each allowed mode combines length, velocity, and harmonic number to set one frequency.",
      },
    },
  ],
};

export default profile;

