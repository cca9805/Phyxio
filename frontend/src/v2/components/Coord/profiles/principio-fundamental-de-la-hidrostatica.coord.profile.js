const profile = {
  meta: {
    id: "coord-principio-fundamental-de-la-hidrostatica",
    leafId: "principio-fundamental-de-la-hidrostatica",
    title: {
      es: "Diagrama de cotas y presiones",
      en: "Elevation and pressure diagram",
    },
  },
  graph_identity: "principio_fundamental_hidro_coord",
  pregunta_principal: {
    es: "¿Cómo varía linealmente la presión con el cambio de cota vertical?",
    en: "How does pressure vary linearly with vertical elevation change?",
  },
  magnitud_estrella: "p2",
  interpretation_binding: {
    active: true,
    visual_map: { p1: "bar_reference", dp: "delta_bar", p2: "bar_result", z1: "pos1", z2: "pos2" },
  },
  infoCards: [
    {
      key: "delta",
      label: { es: "Salto de presión", en: "Pressure jump" },
    },
  ],
};

export default profile;
