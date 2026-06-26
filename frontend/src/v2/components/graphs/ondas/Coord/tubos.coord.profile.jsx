const profile = {
  graph_identity: {
    id: "tubos",
    graph_type: "Coord",
    pregunta_principal:
      "Como determinan la longitud efectiva, el tipo de extremo y la velocidad del sonido las frecuencias estacionarias de un tubo?",
    magnitud_estrella: "f_n",
    formula: "f_n = n * v / (2 * L_eff) or f_n = (2*m-1) * v / (4 * L_eff)",
    physical_role: {
      es: "fenomeno fisico",
      en: "physical phenomenon",
    },
  },
  pregunta_principal: {
    es: "Como determinan la longitud efectiva, el tipo de extremo y la velocidad del sonido las frecuencias estacionarias de un tubo?",
    en: "How do effective length, end type, and sound speed determine the standing frequencies of a tube?",
  },
  magnitud_estrella: "f_n",
  formula: "f_n = n * v / (2 * L_eff)",
  axes: {
    x: { id: "x", label: "posicion en el tubo" },
    y: { id: "modo", label: "desplazamiento acustico" },
  },
};

export default profile;

