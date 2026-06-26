const profile = {
  meta: {
    leafId: "presion-hidrostatica",
    title: { es: "Diagrama de Coordenadas", en: "Coordinate Diagram" }
  },
  graph_identity: "presion_hidro_coord",
  pregunta_principal: {
    es: "¿Como varia la presion en el interior de un fluido con la profundidad?",
    en: "How does pressure within a fluid vary with depth?"
  },
  magnitud_estrella: "p0",
  interpretation_binding: {
    active: true,
    visual_map: { p0: "bar" }
  },
  infoCards: [{
    key: "gradiente",
    label: { es: "Gradiente lineal", en: "Linear gradient" }
  }]
};

export default profile;
