import { renderWaveEnergyScene } from "./waveSvgScenes.jsx";

const profile = {
  leafId: "energia-de-una-onda",
  graph_identity: {
    id: "energia-de-una-onda-svg",
    pregunta_principal: {
      es: "Como se distribuye la energia en una onda y que factores determinan cuanta energia transporta?",
      en: "How is energy distributed in a wave and what factors determine how much energy it transports?",
    },
    variable_control: "amplitud",
    magnitud_estrella: "u_energia",
    formula: "E_onda proporcional a A^2 omega^2",
    target_interpretable: true,
  },
  pregunta_principal: {
    es: "Como se distribuye la energia en una onda y que factores determinan cuanta energia transporta?",
    en: "How is energy distributed in a wave and what factors determine how much energy it transports?",
  },
  magnitud_estrella: "u_energia",
  meta: {
    title: {
      es: "Energia de una onda",
      en: "Energy of a wave",
    },
    description: {
      es: "Lectura de como la amplitud, la frecuencia angular y el medio fijan la energia transportada por una onda.",
      en: "Reading of how amplitude, angular frequency, and the medium set the energy transported by a wave.",
    },
  },
  render: renderWaveEnergyScene,
  infoCards: [
    {
      id: "energy-distribution-card",
      key: "energy",
      label: { es: "Energia distribuida", en: "Distributed energy" },
      title: { es: "Energia distribuida", en: "Distributed energy" },
      description: {
        es: "La energia de la onda no vive en un punto aislado: se reparte en el medio y crece cuadraticamente con la amplitud.",
        en: "Wave energy is not located at one isolated point: it is distributed through the medium and grows quadratically with amplitude.",
      },
    },
    {
      id: "transport-card",
      key: "transport",
      label: { es: "Transporte", en: "Transport" },
      title: { es: "Transporte energetico", en: "Energy transport" },
      description: {
        es: "Para comparar ondas reales hay que conectar energia almacenada, velocidad de propagacion y potencia transportada.",
        en: "To compare real waves, stored energy, propagation speed, and transported power must be connected.",
      },
    },
  ],
  interpretation_binding: {
    energia_de_la_onda: {
      target: "energia_de_la_onda",
      label: { es: "Energia de la onda", en: "Wave energy" },
      unit: "J",
    },
    u_energia: {
      target: "u_energia",
      label: { es: "Densidad de energia", en: "Energy density" },
      unit: "J/m^3",
    },
    amplitud: {
      target: "amplitud",
      label: { es: "Amplitud", en: "Amplitude" },
      unit: "m",
    },
    potencia_de_la_onda: {
      target: "potencia_de_la_onda",
      label: { es: "Potencia transportada", en: "Transported power" },
      unit: "W",
    },
  },
};

export default profile;

