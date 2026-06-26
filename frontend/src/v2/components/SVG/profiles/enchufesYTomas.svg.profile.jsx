import { createSvgProfileContract } from "./svgProfileContracts.js";

const profile = {
  meta: {
    id: "svg-enchufes-y-tomas",
    leafId: "enchufes-y-tomas",
    title: {
      es: "Enchufes y tomas: carga y riesgo térmico",
      en: "Plugs and Sockets: load and thermal risk",
    },
    subtitle: {
      es: "La corriente total y la resistencia de contacto determinan el riesgo térmico del contacto",
      en: "Total current and contact resistance determine the contact thermal risk",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cuándo supera una toma de corriente su límite seguro de carga y qué riesgo térmico genera el contacto degradado?",
      en: "When does a socket exceed its safe load limit and what thermal risk does a degraded contact generate?",
    },
    magnitud_estrella: "margen_uso",
    magnitud_secundaria: "P_perdida",
    variable_control: "I_max",
  },
  graph_contract: createSvgProfileContract({
    leafId: "enchufes-y-tomas",
    graphId: "svg-enchufes-y-tomas",
    purpose: {
      es: "Mostrar que la sobrecarga de una toma depende de la suma de corrientes conectadas y que el riesgo térmico de contacto crece con el cuadrado de la corriente.",
      en: "Show that socket overload depends on the sum of connected currents and that contact thermal risk grows with the square of the current.",
    },
    level: {
      es: "ESO | bachillerato",
      en: "secondary | high school",
    },
    expectedInputs: ["P_tot", "V", "I_max", "R_contacto"],
    derivedMagnitudes: ["I_tot", "margen_uso", "P_perdida", "P_max"],
    targetCandidates: ["margen_uso", "P_perdida"],
    equations: [
      "I_tot = P_tot / V",
      "margen_uso = I_tot / I_max",
      "P_perdida = I_tot^2 * R_contacto",
      "P_max = V * I_max",
    ],
    hypotheses: [
      "cargas resistivas puras",
      "factor de potencia unitario",
      "régimen permanente",
      "corriente alterna eficaz",
    ],
    validityDomain: [
      "factor de potencia > 0.85",
      "régimen permanente",
      "I_tot <= 2 * I_max",
    ],
    visualSimplifications: [
      "regleta como barra con límite I_max",
      "cada carga como bloque de potencia P",
    ],
    alwaysVisible: ["I_tot", "I_max", "margen_uso"],
  }),
  infoCards: [
    {
      key: "sobrecarga",
      label: {
        es: "Sobrecarga",
        en: "Overload",
      },
      highlight: "margen_uso = I_tot / I_max",
      highlightColor: "#f87171",
      description: {
        es: "Cuando margen_uso ≥ 1, la toma está en sobrecarga y los contactos se calientan por encima de su límite de diseño.",
        en: "When margen_uso ≥ 1, the socket is in overload and contacts heat above their design limit.",
      },
    },
    {
      key: "riesgo_termico",
      label: {
        es: "Riesgo térmico de contacto",
        en: "Contact thermal risk",
      },
      highlight: "P_perdida = I_tot² · R_contacto",
      highlightColor: "#fb923c",
      description: {
        es: "La potencia disipada en el contacto crece con el cuadrado de I_tot. Un contacto degradado genera riesgo incluso con corrientes dentro del límite.",
        en: "Power dissipated at the contact grows with the square of I_tot. A degraded contact creates risk even with currents within the limit.",
      },
    },
  ],
  interpretation_binding: {
    paramsIn: ["P_tot", "V", "I_max", "R_contacto"],
    stateOut: ["I_tot", "margen_uso", "P_perdida", "P_max"],
    target: "margen_uso",
  },
};

export default profile;
