import React from "react";

const profile = {
  id: "numero-de-reynolds",
  leafId: "numero-de-reynolds",
  title: {
    es: "Visualizador del Número de Reynolds",
    en: "Reynolds Number Visualizer",
  },
  description: {
    es: "Representación del experimento de Osborne Reynolds y la transición al caos.",
    en: "Representation of Osborne Reynolds' experiment and the transition to chaos.",
  },
  graph_identity: "reynolds-experiment-dye",
  pregunta_principal: {
    es: "¿Cómo determina el número de reynolds el caos del fluido?",
    en: "How does the reynolds number determine fluid chaos?",
  },
  magnitud_estrella: "Re",
  infoCards: [
    {
      id: "hilo-tinte-card",
      key: "hilo",
      title: { es: "Hilo de Tinte", en: "Dye Thread" },
      description: { 
        es: "Representa el camino de las partículas de fluido. Su estabilidad depende del número de Reynolds.", 
        en: "Represents the path of fluid particles. Its stability depends on the Reynolds number." 
      }
    },
    {
      id: "vortices-card",
      key: "vortices",
      title: { es: "Vórtices y Caos", en: "Vortices and Chaos" },
      description: { 
        es: "Aparecen cuando la inercia supera la capacidad de la viscosidad para amortiguar perturbaciones.", 
        en: "They appear when inertia exceeds the viscosity's ability to dampen perturbations." 
      }
    }
  ],
  interpretation_binding: {
    Re: {
      target: "Re",
      label: { es: "Número de Reynolds", en: "Reynolds number" },
      unit: "1",
    },
    v: {
      target: "v",
      label: { es: "Velocidad", en: "Velocity" },
      unit: "m/s",
    },
    L: {
      target: "L",
      label: { es: "Diámetro", en: "Diameter" },
      unit: "m",
    },
    eta: {
      target: "eta",
      label: { es: "Viscosidad", en: "Viscosity" },
      unit: "Pa·s",
    }
  },
  state: {
    Re: 500,
    v: 0.1,
    L: 0.05,
    eta: 0.001
  },
  controls: [
    {
      id: "v",
      label: { es: "Velocidad [[v]]", en: "Velocity [[v]]" },
      type: "range",
      min: 0.01,
      max: 2.0,
      step: 0.01,
    },
    {
      id: "L",
      label: { es: "Diámetro [[L]]", en: "Diameter [[L]]" },
      type: "range",
      min: 0.01,
      max: 0.2,
      step: 0.01,
    }
  ],
};

export default profile;
