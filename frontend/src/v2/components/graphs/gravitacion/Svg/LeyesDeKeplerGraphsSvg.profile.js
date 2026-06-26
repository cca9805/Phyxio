const profile = {
  meta: {
    id: "LeyesDeKeplerGraphsSvg",
    leafId: "leyes-de-kepler",
    title: { es: "Leyes de kepler", en: "Kepler's Laws" },
    target: "dA_dt",
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Como conectan las leyes de Kepler la forma de la orbita, el barrido de area y el periodo?",
      en: "How do Kepler's laws connect orbital shape, swept area, and period?",
    },
    magnitud_estrella: "dA_dt",
  },
  graph_contract: {
    magnitud_estrella: "dA_dt",
    stateOut: ["a", "b", "e", "r", "theta", "dA_dt"],
    paramsIn: ["a", "b", "e", "theta"],
    interpretation: ["primera_ley_polar", "velocidad_areal_constante", "relacion_momento_angular_conceptual"],
  },
  interpretation_binding: {
    target: "dA_dt",
    magnitudes: ["a", "b", "e", "r", "theta", "A", "dA_dt"],
  },
  infoCards: [
    {
      key: "shape",
      label: { es: "Forma", en: "Shape" },
      value: "e controls focal displacement",
    },
    {
      key: "sweep",
      label: { es: "Barrido", en: "Sweep" },
      value: "dA/dt constant",
    },
  ],
};

export default profile;
