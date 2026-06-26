import React from "react";

const profile = {
  id: "perdidas-de-carga",
  leafId: "perdidas-de-carga",
  title: {
    es: "Visualizador de Pérdidas de Carga",
    en: "Head Loss Visualizer",
  },
  description: {
    es: "Representación de la disipación de energía y caída de presión en una tubería.",
    en: "Representation of energy dissipation and pressure drop in a pipe.",
  },
  graph_identity: "head-loss-pipe-flow",
  pregunta_principal: {
    es: "¿Cómo afecta la fricción interna a la presión del fluido a lo largo de un conducto?",
    en: "How does internal friction affect fluid pressure along a duct?",
  },
  magnitud_estrella: "hf",
  infoCards: [
    {
      id: "friccion-pared-card",
      key: "friccion",
      title: { es: "Fricción Viscosa", en: "Viscous Friction" },
      description: { 
        es: "El fluido pierde energía al rozar con las paredes. Se visualiza como un calentamiento (rojo) o frenado.", 
        en: "The fluid loses energy as it rubs against the walls. It is visualized as heating (red) or slowing down." 
      }
    }
  ],
  interpretation_binding: {
    hf: {
      target: "hf",
      label: { es: "Pérdida de carga", en: "Head loss" },
      unit: "m",
    },
    v: {
      target: "v",
      label: { es: "Velocidad", en: "Velocity" },
      unit: "m/s",
    },
    dp: {
      target: "dp",
      label: { es: "Caída de presión", en: "Pressure drop" },
      unit: "Pa",
    }
  },
  state: {
    hf: 10,
    v: 2,
    dp: 50000
  },
  controls: [
    {
      id: "v",
      label: { es: "Velocidad [[v]]", en: "Velocity [[v]]" },
      type: "range",
      min: 0.1,
      max: 10.0,
      step: 0.1,
    }
  ],
};

export default profile;
