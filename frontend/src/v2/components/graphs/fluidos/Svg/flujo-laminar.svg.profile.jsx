import React from "react";

const profile = {
  leafId: "flujo-laminar",
  graph_identity: "laminar-flow-parabola",
  pregunta_principal: {
    es: "¿Cómo se distribuye el flujo laminar ordenado a lo largo del perfil parabólico de Poiseuille?",
    en: "How is ordered laminar flow distributed along the parabolic Poiseuille profile?",
  },
  magnitud_estrella: "v_max",
  meta: {
    title: {
      es: "Perfil de Velocidades Laminar",
      en: "Laminar Velocity Profile",
    },
    description: {
      es: "Visualización del flujo de Poiseuille mostrando el perfil parabólico de velocidades en un conducto circular.",
      en: "Visualization of Poiseuille flow showing the parabolic velocity profile in a circular duct.",
    },
  },
  infoCards: [
    {
      id: "parabola-card",
      key: "parabola",
      title: { es: "Perfil Parabólico", en: "Parabolic Profile" },
      description: {
        es: "En el régimen laminar, la fricción viscosa con las paredes frena el fluido, creando un máximo de velocidad en el centro.",
        en: "In the laminar regime, viscous friction with the walls slows down the fluid, creating a velocity maximum in the center.",
      },
    },
  ],
  interpretation_binding: {
    v_max: {
      target: "v_max",
      label: { es: "Velocidad máxima", en: "Max velocity" },
      unit: "m/s",
    },
    eta: {
      target: "eta",
      label: { es: "Viscosidad", en: "Viscosity" },
      unit: "Pa·s",
    },
    R: {
      target: "R",
      label: { es: "Radio del tubo", en: "Pipe radius" },
      unit: "m",
    },
    deltaP: {
      target: "deltaP",
      label: { es: "Caída de presión", en: "Pressure drop" },
      unit: "Pa",
    },
  },
};

export default profile;
