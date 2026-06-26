import { renderPropagationSpeedScene } from "./waveSvgScenes.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "Como se determina la velocidad de propagacion de una onda a partir del avance de una fase?",
    en: "How is wave speed determined from the advance of a phase?",
  },
  variable_control: "Delta_x",
  magnitud_estrella: "Delta_x",
  formula: "v = Delta_x / Delta_t",
  target_interpretable: true,
};

export default {
  meta: {
    leafId: "velocidad-de-propagacion",
    graphType: "Svg",
    title: {
      es: "Avance del patron",
      en: "Pattern advance",
    },
  },
  graph_identity: graph_identity,
  pregunta_principal: graph_identity.pregunta_principal,
  magnitud_estrella: graph_identity.magnitud_estrella,
  render: renderPropagationSpeedScene,
  infoCards: [
    {
      id: "pattern-speed-card",
      key: "pattern_speed",
      label: { es: "Rapidez", en: "Speed" },
      title: { es: "Rapidez del patron", en: "Pattern speed" },
      description: {
        es: "v mide el avance horizontal de una fase reconocible por unidad de tiempo.",
        en: "v measures horizontal advance of a recognizable phase per unit time.",
      },
    },
    {
      id: "phase-advance-card",
      key: "phase_advance",
      label: { es: "Avance", en: "Advance" },
      title: { es: "Desplazamiento de fase", en: "Phase displacement" },
      description: {
        es: "Delta_x debe seguir la misma cresta, valle o frente de onda.",
        en: "Delta_x must track the same crest, trough, or wavefront.",
      },
    },
    {
      id: "time-window-card",
      key: "time_window",
      label: { es: "Intervalo", en: "Interval" },
      title: { es: "Ventana temporal", en: "Time window" },
      description: {
        es: "Delta_t separa los dos instantes comparados para estimar la rapidez media.",
        en: "Delta_t separates the two compared instants used to estimate average speed.",
      },
    },
  ],
  interpretation_binding: {
    targets: ["v", "Delta_x", "Delta_t", "lambda", "f"],
    graph_reading: {
      es: "El Svg marca el avance horizontal de la misma fase durante un intervalo temporal.",
      en: "The Svg marks the horizontal advance of the same phase during a time interval.",
    },
  },
};

