const profile = {
  meta: {
    id: "OsciladorArmonicoGraphsSvg",
    leafId: "oscilador-armonico",
    title: {
      es: "Oscilador armonico",
      en: "Harmonic oscillator",
    },
    target: "omega",
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como fijan masa, rigidez y amplitud el ritmo y la energia del oscilador armonico",
      en: "How do mass, stiffness, and amplitude set the rhythm and energy of a harmonic oscillator?",
    },
    magnitud_estrella: "omega",
  },
  graph_contract: {
    magnitud_estrella: "omega",
    paramsIn: ["m", "k", "A"],
    stateOut: ["omega", "Tper", "E"],
    formulas: ["omega", "Tper", "E"],
    interpretation: ["omega", "Tper", "E"],
  },
  interpretation_binding: {
    target: "omega",
    magnitudes: ["m", "k", "omega", "Tper", "A", "E"],
  },
  infoCards: [
    {
      key: "ritmo",
      label: {
        es: "Ritmo natural",
        en: "Natural rhythm",
      },
      body: {
        es: "La frecuencia angular sube con la rigidez y baja con la masa.",
        en: "Angular frequency rises with stiffness and falls with mass.",
      },
      magnitudes: ["m", "k", "omega"],
    },
    {
      key: "energia",
      label: {
        es: "Energia almacenada",
        en: "Stored energy",
      },
      body: {
        es: "La energia crece linealmente con la rigidez y cuadraticamente con la amplitud.",
        en: "Energy grows linearly with stiffness and quadratically with amplitude.",
      },
      magnitudes: ["k", "A", "E"],
    },
  ],
};

export default profile;
