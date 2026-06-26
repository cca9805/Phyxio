const profile = {
  leafId: "sistemas-conservativos",
  graph_identity: "conservative-balance-wnc-profile",
  pregunta_principal: {
    es: "¿Cuando puede tratarse un sistema como conservativo y como cambia el balance cuando aparece Wnc?",
    en: "When can a system be treated as conservative and how does the balance change when Wnc appears?",
  },
  magnitud_estrella: "Wnc",
  variable_control: "Wnc",
  formula: "Em_f = Em_i + Wnc",
  target_interpretable: true,
  meta: {
    title: {
      es: "Balance conservativo y correccion por Wnc",
      en: "Conservative balance and Wnc correction",
    },
    description: {
      es: "Perfil SVG para leer la conversion entre energia potencial y cinetica y detectar cuando Wnc corrige el balance.",
      en: "SVG profile for reading the conversion between potential and kinetic energy and detecting when Wnc corrects the balance.",
    },
  },
  infoCards: [
    {
      id: "ideal-balance-card",
      key: "balance",
      label: { es: "Balance ideal", en: "Ideal balance" },
      title: { es: "Balance ideal", en: "Ideal balance" },
      description: {
        es: "El grafico parte de un caso donde Ug disminuye mientras K aumenta y Em se mantiene como referencia del sistema conservativo.",
        en: "The graph starts from a case where Ug decreases while K increases and Em stays as the reference for the conservative system.",
      },
    },
    {
      id: "wnc-correction-card",
      key: "wncCorrection",
      label: { es: "Correccion por Wnc", en: "Wnc correction" },
      title: { es: "Correccion por Wnc", en: "Wnc correction" },
      description: {
        es: "Cuando la medicion real se aparta del ideal, Wnc cuantifica la perdida o el aporte externo que modifica el balance mecanico.",
        en: "When the real measurement departs from the ideal case, Wnc quantifies the loss or external input that modifies the mechanical balance.",
      },
    },
  ],
  interpretation_binding: {
    Em: {
      target: "Em",
      label: { es: "Energia mecanica", en: "Mechanical energy" },
      unit: "J",
    },
    K: {
      target: "K",
      label: { es: "Energia cinetica", en: "Kinetic energy" },
      unit: "J",
    },
    U: {
      target: "U",
      label: { es: "Energia potencial", en: "Potential energy" },
      unit: "J",
    },
    Wnc: {
      target: "Wnc",
      label: { es: "Trabajo no conservativo", en: "Non-conservative work" },
      unit: "J",
    },
  },
};

export default profile;