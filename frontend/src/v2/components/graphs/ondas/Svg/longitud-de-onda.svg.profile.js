import { renderWavelengthScene } from "./waveSvgScenes.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "Como mide la longitud de onda la separacion espacial entre estados equivalentes de una onda?",
    en: "How does wavelength measure the spatial separation between equivalent states of a wave?",
  },
  variable_control: "lambda",
  magnitud_estrella: "Delta_x",
  formula: "lambda = Delta_x / n",
  target_interpretable: true,
};

export default {
  meta: {
    leafId: "longitud-de-onda",
    graphType: "Svg",
    title: {
      es: "Lectura visual de longitud de onda",
      en: "Visual wavelength reading",
    },
  },
render: renderWavelengthScene,
  infoCards: [
    {
      id: "wavelength-spacing-card",
      key: "wavelength_spacing",
      label: {
        es: "Separacion",
        en: "Spacing",
      },
      title: {
        es: "Separacion espacial equivalente",
        en: "Equivalent spatial spacing",
      },
      description: {
        es: "lambda mide la distancia horizontal entre dos puntos de la onda que repiten el mismo estado.",
        en: "lambda measures the horizontal distance between two wave points that repeat the same state.",
      },
    },
    {
      id: "cycle-count-card",
      key: "cycle_count",
      label: {
        es: "Ciclos",
        en: "Cycles",
      },
      title: {
        es: "Conteo de repeticiones",
        en: "Repeat count",
      },
      description: {
        es: "Si Delta_x contiene n ciclos completos, dividir esa distancia por n estima una longitud de onda.",
        en: "If Delta_x contains n complete cycles, dividing that distance by n estimates one wavelength.",
      },
    },
    {
      id: "wave-number-card",
      key: "wave_number",
      label: {
        es: "Numero de onda",
        en: "Wave number",
      },
      title: {
        es: "Relacion inversa con k",
        en: "Inverse relation with k",
      },
      description: {
        es: "Un lambda menor implica mas ciclos por metro y, por tanto, un numero de onda k mayor.",
        en: "A smaller lambda means more cycles per meter and therefore a larger wave number k.",
      },
    },
  ],
  graph_identity: graph_identity,
  pregunta_principal: graph_identity.pregunta_principal,
  magnitud_estrella: graph_identity.magnitud_estrella,
  interpretation_binding: {
    targets: ["lambda", "Delta_x", "n", "k"],
    graph_reading: {
      es: "El Svg marca la separacion horizontal entre estados equivalentes.",
      en: "The Svg marks the horizontal spacing between equivalent states.",
    },
  },
};

