const graph_identity = {
  pregunta_principal: {
    es: "Como se distingue una onda transversal de una longitudinal al comparar perturbacion y propagacion?",
    en: "How is a transverse wave distinguished from a longitudinal wave by comparing disturbance and propagation?",
  },
  variable_control: "C_T",
  magnitud_estrella: "C_T",
  formula: "C_T = u_perp / A",
  target_interpretable: true,
};

export default {
  id: "ondas-transversales-y-longitudinales-coord",
  type: "Coord",
  graph_identity: graph_identity,
  pregunta_principal: graph_identity.pregunta_principal,
  magnitud_estrella: graph_identity.magnitud_estrella,
  coordSemantic: {
    title: { es: "Comparacion de componentes", en: "Component comparison" },
    description: {
      es: "Compara perturbacion perpendicular y paralela respecto al avance.",
      en: "Compares perpendicular and parallel disturbance relative to advance.",
    },
    xAxis: { id: "avance", label: { es: "Direccion de propagacion", en: "Propagation direction" }, unit: "m" },
    yAxis: { id: "perturbacion", label: { es: "Perturbacion", en: "Disturbance" }, unit: "m" },
    series: [
      { id: "C_T", label: { es: "Indice transversal", en: "Transverse index" }, formula: "C_T = u_perp / A" },
      { id: "C_L", label: { es: "Indice longitudinal", en: "Longitudinal index" }, formula: "C_L = u_parallel / A" },
    ],
  },
};

