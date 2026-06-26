const profile = {
  meta: {
    id: "ProblemasConLigadurasGraphsSvg",
    leafId: "problemas-con-ligaduras",
    title: {
      es: "Problemas con ligaduras",
      en: "Problems with Constraints",
    },
    target: "a",
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como fijan las ligaduras ideales la aceleracion comun y la tension interna en sistemas acoplados",
      en: "How do ideal constraints set common acceleration and internal tension in coupled systems",
    },
    magnitud_estrella: "a",
  },
  graph_contract: {
    magnitud_estrella: "a",
    paramsIn: ["m1", "m2", "g"],
    stateOut: ["a", "T"],
    formulas: ["a", "T"],
    interpretation: ["a", "T", "m1", "m2", "g"],
  },
  interpretation_binding: {
    target: "a",
    magnitudes: ["m1", "m2", "g", "a", "T"],
  },
  infoCards: [
    {
      key: "desbalance",
      label: {
        es: "Lectura de desbalance",
        en: "Imbalance reading",
      },
      body: {
        es: "Cuando crece la diferencia entre [[m2]] y [[m1]], aumenta la respuesta comun [[a]].",
        en: "When the difference between [[m2]] and [[m1]] grows, common response [[a]] increases.",
      },
      magnitudes: ["m1", "m2", "a"],
    },
    {
      key: "acoplamiento",
      label: {
        es: "Acoplamiento interno",
        en: "Internal coupling",
      },
      body: {
        es: "[[T]] expresa cuanto esfuerzo transmite la ligadura para mantener movimiento compatible.",
        en: "[[T]] expresses how much effort the constraint transmits to keep compatible motion.",
      },
      magnitudes: ["T", "g", "m1", "m2"],
    },
  ],
};

export default profile;
