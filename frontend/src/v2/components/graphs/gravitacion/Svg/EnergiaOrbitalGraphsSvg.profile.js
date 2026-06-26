const profile = {
  meta: {
    id: "EnergiaOrbitalGraphsSvg",
    leafId: "energia-orbital",
    title: { es: "Energia orbital", en: "Orbital Energy" },
    target: "eps",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como decide la energia orbital si una trayectoria queda ligada, circulariza, se abre o alcanza escape?",
      en: "How does orbital energy decide whether a trajectory remains bound, circularizes, opens, or reaches escape?",
    },
    magnitud_estrella: "eps",
  },
  graph_contract: {
    magnitud_estrella: "eps",
    stateOut: ["K", "U", "E", "eps"],
    paramsIn: ["G", "M", "m", "r", "v"],
    interpretation: ["energia_total_desde_k_u", "energia_especifica_estado", "clasificacion_orbital_conceptual"],
  },
  interpretation_binding: {
    target: "eps",
    magnitudes: ["K", "U", "E", "eps", "E0"],
  },
  infoCards: [
    {
      key: "binding",
      label: { es: "Ligadura", en: "Binding" },
      value: "sign(eps)",
    },
    {
      key: "balance",
      label: { es: "Balance", en: "Balance" },
      value: "E = K + U",
    },
  ],
};

export default profile;
