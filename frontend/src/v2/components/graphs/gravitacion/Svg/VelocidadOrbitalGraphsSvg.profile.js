const profile = {
  meta: {
    id: "VelocidadOrbitalGraphsSvg",
    leafId: "velocidad-orbital",
    title: { es: "Velocidad orbital", en: "Orbital Velocity" },
    target: "v_orb",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como se determina la velocidad orbital y como cambia al variar la distancia radial?",
      en: "How is orbital velocity determined and how does it change with radial distance?",
    },
    magnitud_estrella: "v_orb",
  },
  graph_contract: {
    magnitud_estrella: "v_orb",
    stateOut: ["v_orb", "v_escape", "r", "M", "mu"],
    paramsIn: ["G", "M", "r", "R", "h"],
    interpretation: ["velocidad_orbital_circular", "velocidad_escape", "parametro_gravitacional"],
  },
  interpretation_binding: {
    target: "v_orb",
    magnitudes: ["v_orb", "v_escape", "r", "M", "mu"],
  },
  infoCards: [
    {
      key: "speed",
      label: { es: "Velocidad", en: "Speed" },
      value: "v_orb decreases with r",
    },
    {
      key: "escape",
      label: { es: "Escape", en: "Escape" },
      value: "v_escape > v_orb",
    },
  ],
};

export default profile;
