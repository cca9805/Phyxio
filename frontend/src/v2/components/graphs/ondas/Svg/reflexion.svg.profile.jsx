import { renderReflectionScene } from "./waveSvgScenes.jsx";

const profile = {
  leafId: "reflexion",
  graph_identity: {
    id: "reflexion-svg",
    pregunta_principal: {
      es: "Como predice la ley de la reflexion la direccion e intensidad de una onda reflejada?",
      en: "How does the law of reflection predict the direction and intensity of a reflected wave?",
    },
    variable_control: "theta_i",
    magnitud_estrella: "theta_r",
    formula: "theta_r = theta_i; I_reflejada = R_reflectancia * I_incidente",
    target_interpretable: true,
  },
  pregunta_principal: {
    es: "Como predice la ley de la reflexion la direccion e intensidad de una onda reflejada?",
    en: "How does the law of reflection predict the direction and intensity of a reflected wave?",
  },
  magnitud_estrella: "theta_r",
  meta: {
    title: {
      es: "Reflexion especular",
      en: "Specular reflection",
    },
    description: {
      es: "Esquema de rayo incidente, normal, rayo reflejado y fraccion de intensidad devuelta por la frontera.",
      en: "Diagram of incident ray, normal, reflected ray, and fraction of intensity returned by the boundary.",
    },
  },
  render: renderReflectionScene,
  infoCards: [
    {
      id: "reflection-direction-card",
      key: "direction",
      label: { es: "Direccion", en: "Direction" },
      title: { es: "Simetria respecto a la normal", en: "Symmetry about the normal" },
      description: {
        es: "El rayo reflejado se construye midiendo el mismo angulo desde la normal local.",
        en: "The reflected ray is constructed by measuring the same angle from the local normal.",
      },
    },
    {
      id: "reflection-intensity-card",
      key: "intensity",
      label: { es: "Intensidad", en: "Intensity" },
      title: { es: "Fraccion reflejada", en: "Reflected fraction" },
      description: {
        es: "La reflectancia controla cuanto brillo o energia vuelve, sin cambiar la ley angular.",
        en: "Reflectance controls how much brightness or energy returns, without changing the angular law.",
      },
    },
  ],
  interpretation_binding: {
    theta_i: {
      target: "theta_i",
      label: { es: "Angulo de incidencia", en: "Angle of incidence" },
      unit: "rad",
    },
    theta_r: {
      target: "theta_r",
      label: { es: "Angulo de reflexion", en: "Angle of reflection" },
      unit: "rad",
    },
    I_incidente: {
      target: "I_incidente",
      label: { es: "Intensidad incidente", en: "Incident intensity" },
      unit: "W/m²",
    },
    I_reflejada: {
      target: "I_reflejada",
      label: { es: "Intensidad reflejada", en: "Reflected intensity" },
      unit: "W/m²",
    },
    R_reflectancia: {
      target: "R_reflectancia",
      label: { es: "Reflectancia", en: "Reflectance" },
      unit: "adimensional",
    },
  },
};

export default profile;

