import { renderTransverseLongitudinalScene } from "./waveSvgScenes.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "Como se distingue una onda transversal de una longitudinal al comparar perturbacion y propagacion?",
    en: "How is a transverse wave distinguished from a longitudinal wave by comparing disturbance and propagation?",
  },
  variable_control: "C_L",
  magnitud_estrella: "C_L",
  formula: "C_L = u_parallel / A",
  target_interpretable: true,
};

export default {
  meta: {
    leafId: "ondas-transversales-y-longitudinales",
    graphType: "Svg",
    title: { es: "Orientacion de la perturbacion", en: "Disturbance orientation" },
  },
  graph_identity: graph_identity,
  pregunta_principal: graph_identity.pregunta_principal,
  magnitud_estrella: graph_identity.magnitud_estrella,
  render: renderTransverseLongitudinalScene,
  infoCards: [
    {
      id: "transverse-card",
      key: "transverse",
      label: { es: "Transversal", en: "Transverse" },
      title: { es: "Perturbacion perpendicular", en: "Perpendicular disturbance" },
      description: { es: "C_T aumenta cuando domina u_perp respecto al avance.", en: "C_T increases when u_perp dominates relative to advance." },
    },
    {
      id: "longitudinal-card",
      key: "longitudinal",
      label: { es: "Longitudinal", en: "Longitudinal" },
      title: { es: "Perturbacion paralela", en: "Parallel disturbance" },
      description: { es: "C_L aumenta cuando domina u_parallel y aparecen compresiones.", en: "C_L increases when u_parallel dominates and compressions appear." },
    },
    {
      id: "mixed-card",
      key: "mixed",
      label: { es: "Mixta", en: "Mixed" },
      title: { es: "Modo no puro", en: "Non-pure mode" },
      description: { es: "Valores similares de C_T y C_L sugieren predominio ambiguo.", en: "Similar C_T and C_L values suggest ambiguous dominance." },
    },
  ],
  interpretation_binding: {
    targets: ["C_T", "C_L", "u_perp", "u_parallel", "A"],
    graph_reading: {
      es: "El Svg compara la perturbacion perpendicular y paralela respecto a la direccion de propagacion.",
      en: "The Svg compares perpendicular and parallel disturbance relative to propagation direction.",
    },
  },
};

