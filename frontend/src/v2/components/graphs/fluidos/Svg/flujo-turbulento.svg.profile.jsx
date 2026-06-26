import React from "react";

const profile = {
  id: "flujo-turbulento",
  leafId: "flujo-turbulento",
  title: {
    es: "Visualización de Flujo Turbulento",
    en: "Turbulent Flow Visualization",
  },
  description: {
    es: "Representación de remolinos y perfil de velocidad plano.",
    en: "Representation of eddies and flat velocity profile.",
  },
  graph_identity: "turbulent-flow-eddies",
  pregunta_principal: {
    es: "¿Cómo se disipa la energía en las escalas pequeñas?",
    en: "How is energy dissipated at small scales?",
  },
  magnitud_estrella: "Re",
  infoCards: [
    {
      id: "perfil-plano-card",
      key: "perfil",
      title: { es: "Perfil Plano", en: "Flat Profile" },
      description: { 
        es: "La mezcla turbulenta hace que la velocidad sea casi uniforme en el centro del tubo.", 
        en: "Turbulent mixing makes the velocity almost uniform in the center of the pipe." 
      }
    },
    {
      id: "subcapa-viscosa-card",
      key: "subcapa",
      title: { es: "Subcapa Viscosa", en: "Viscous Sublayer" },
      description: { 
        es: "Cerca de la pared, el fluido sigue siendo laminar debido al confinamiento sólido.", 
        en: "Near the wall, the fluid remains laminar due to solid confinement." 
      }
    }
  ],
  interpretation_binding: {
    dp: {
      target: "dp",
      label: { es: "Caída de presión", en: "Pressure drop" },
      unit: "Pa",
    },
    f: {
      target: "f",
      label: { es: "Factor de fricción", en: "Friction factor" },
      unit: "1",
    },
    Re: {
      target: "Re",
      label: { es: "Número de Reynolds", en: "Reynolds number" },
      unit: "1",
    },
    v_max: {
      target: "v_max",
      label: { es: "Velocidad máxima", en: "Max velocity" },
      unit: "m/s",
    }
  },
};

export default profile;
