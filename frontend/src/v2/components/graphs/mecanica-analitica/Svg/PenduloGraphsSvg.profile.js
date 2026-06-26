const profile = {
  meta: {
    id: "PenduloGraphsSvg",
    leafId: "pendulo",
    title: {
      es: "Pendulo",
      en: "Pendulum",
    },
    target: "omega",
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como fijan longitud y gravedad el ritmo del pendulo y como cambia el torque con el angulo",
      en: "How do length and gravity set pendulum rhythm, and how does torque change with angle?",
    },
    magnitud_estrella: "omega",
  },
  graph_contract: {
    magnitud_estrella: "omega",
    paramsIn: ["L", "g", "m", "theta"],
    stateOut: ["omega", "Tper", "tau"],
    formulas: ["omega", "Tper", "tau"],
    interpretation: ["omega", "Tper", "tau"],
  },
  interpretation_binding: {
    target: "omega",
    magnitudes: ["L", "g", "theta", "m", "omega", "Tper", "tau"],
  },
  infoCards: [
    {
      key: "ritmo",
      label: {
        es: "Ritmo del sistema",
        en: "System rhythm",
      },
      body: {
        es: "El ritmo sube con [[g]] y baja cuando aumenta [[L]].",
        en: "Rhythm rises with [[g]] and decreases as [[L]] increases.",
      },
      magnitudes: ["L", "g", "omega", "Tper"],
    },
    {
      key: "torque",
      label: {
        es: "Lectura de torque",
        en: "Torque reading",
      },
      body: {
        es: "[[tau]] cambia de signo con [[theta]] y mantiene retorno hacia equilibrio.",
        en: "[[tau]] changes sign with [[theta]] and maintains return toward equilibrium.",
      },
      magnitudes: ["theta", "tau", "m"],
    },
  ],
};

export default profile;