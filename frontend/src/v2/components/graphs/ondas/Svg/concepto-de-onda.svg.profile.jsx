const graph_identity = {
  pregunta_principal: {
    es: "Que caracteriza a una onda como perturbacion que se propaga y como se distinguen sus magnitudes basicas?",
    en: "What characterizes a wave as a propagating disturbance and how are its basic quantities distinguished?",
  },
  variable_control: "A",
  magnitud_estrella: "lambda",
  formula: "v = lambda * f",
  target_interpretable: true,
};

export default {
  meta: {
    leafId: "concepto-de-onda",
    title: { es: "Anatomia de una onda", en: "Anatomy of a wave" },
  },
  id: "concepto-de-onda-svg",
  type: "Svg",
  graph_identity: graph_identity,
  interpretation_binding: {
    paramsIn: ["A", "lambda", "f"],
    stateOut: ["y", "v"],
    target: "lambda",
  },
  svgSemantic: {
    title: { es: "Anatomia de una onda", en: "Anatomy of a wave" },
    description: {
      es: "Distingue amplitud, longitud de onda, perturbacion local y avance del patron.",
      en: "Distinguishes amplitude, wavelength, local disturbance, and pattern advance.",
    },
    magnitudes: ["y", "A", "lambda", "v"],
  },
  infoCards: [
    {
      key: "local_state",
      label: { es: "Estado local", en: "Local state" },
      value: { es: "y muestra la perturbacion observada", en: "y shows the observed disturbance" },
    },
    {
      key: "spatial_repeat",
      label: { es: "Repeticion espacial", en: "Spatial repetition" },
      value: { es: "lambda separa puntos equivalentes", en: "lambda separates equivalent points" },
    },
  ],
};

