export const GRAPH_COHERENCE_PROTOCOL_V1 = {
  identity: [
    "leaf_id real del leaf",
    "graph_type coherente con el renderer",
    "graph_id unico y trazable",
    "proposito_didactico concreto",
    "nivel_educativo en ES/EN",
  ],
  calculator: [
    "magnitudes de entrada esperadas",
    "alias aceptados",
    "magnitudes derivadas",
    "target o targets interpretables",
    "sincronizacion con sharedParams.__calc",
  ],
  interpretation: [
    "interpretation_binding con paramsIn y stateOut",
    "magnitudes seleccionables",
    "contexto semantico emitido",
    "foco sobre magnitud concreta cuando aplique",
  ],
  experiment: [
    "parametros manipulables",
    "rangos y presets",
    "politica de bloqueo o seguimiento de calculadora",
    "reseteo a defaults o preset",
  ],
  physicalModel: [
    "ecuaciones usadas",
    "hipotesis",
    "dominio de validez",
    "simplificaciones visuales declaradas",
  ],
  animation: [
    "si existe tiempo interno",
    "si hay play/pause",
    "si representa tiempo fisico o tiempo pedagogico",
  ],
  visualOutputs: [
    "que se dibuja",
    "que magnitudes se leen",
    "que debe quedar siempre visible",
    "que puede ocultarse por nivel",
  ],
  checklist: [
    "todas las magnitudes existen en magnitudes.yaml",
    "las formulas usadas existen en formulas.yaml",
    "hay al menos un target interpretable",
    "el grafico representa el leaf real y no uno parecido",
    "funciona en modo calculadora y experimento",
  ],
};

export const SVG_GRAPH_CONTRACT_TEMPLATE_V1 = {
  identity: {
    leaf_id: "leaf-id",
    graph_type: "Svg",
    graph_id: "svg-leaf-id",
    proposito_didactico: {
      es: "Que lectura fisica aporta este SVG y por que no es decorativo.",
      en: "What physical reading this SVG adds and why it is not decorative.",
    },
    nivel_educativo: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
  },
  calculator_contract: {
    expected_inputs: ["m1", "m2", "v1", "v2"],
    accepted_aliases: {
      v_cm: ["vcm", "Vcm"],
    },
    derived_magnitudes: ["p1", "p2", "pTot", "xcm"],
    target_candidates: ["pTot", "xcm"],
    calc_sync: {
      source: "sharedParams.__calc",
      consumes: ["target", "result", "formulaTitle", "known"],
      mode_policy: "follow-calc-until-user-edit",
    },
  },
  interpretation_contract: {
    interpretation_binding: {
      paramsIn: ["m1", "m2", "v1", "v2"],
      stateOut: ["p1", "p2", "pTot", "xcm"],
      target: "pTot",
    },
    selectable_magnitudes: ["p1", "p2", "pTot", "xcm"],
    emitted_semantic_context: [
      "profileId",
      "leafId",
      "target",
      "value",
      "paramsIn",
      "stateOut",
    ],
    supports_focus_target: true,
  },
  experiment_mode: {
    manipulable_params: ["m1", "m2", "v1", "v2"],
    ranges_defined_in: "profile.params.schema",
    presets: [],
    calculator_lock_policy: "unlock-on-user-edit",
    reset_strategy: "schema-defaults",
  },
  physical_model: {
    equations: ["p = m v", "pTot = p1 + p2", "xcm = sum(m_i x_i) / sum(m_i)"],
    hypotheses: ["sistema discreto", "movimiento unidimensional o lectura simplificada"],
    validity_domain: ["velocidades no relativistas", "masas puntuales o concentradas"],
    visual_simplifications: ["bloques ideales", "escala visual no metrica exacta"],
  },
  animation: {
    has_internal_time: false,
    has_play_pause: false,
    time_semantics: "none",
  },
  visual_outputs: {
    always_visible: ["cuerpos", "vectores clave", "magnitud objetivo"],
    readable_magnitudes: ["p1", "p2", "pTot", "xcm"],
    level_gated_layers: [],
  },
};

export const DCL_GRAPH_CONTRACT_TEMPLATE_V1 = {
  identity: {
    leaf_id: "leaf-id",
    graph_type: "Dcl",
    graph_id: "dcl-leaf-id",
    proposito_didactico: {
      es: "Explicar fuerzas, ejes y convencion de signos del leaf.",
      en: "Explain forces, axes, and sign convention for the leaf.",
    },
    nivel_educativo: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
  },
  calculator_contract: {
    expected_inputs: [],
    accepted_aliases: {},
    derived_magnitudes: [],
    target_candidates: [],
    calc_sync: {
      source: "sharedParams.__calc",
      consumes: ["target", "known", "result"],
      mode_policy: "follow-calc-until-user-edit",
    },
  },
  interpretation_contract: {
    interpretation_binding: {
      paramsIn: [],
      stateOut: [],
      target: null,
    },
    selectable_magnitudes: [],
    emitted_semantic_context: ["profileId", "leafId", "target", "value"],
    supports_focus_target: true,
  },
  experiment_mode: {
    manipulable_params: [],
    ranges_defined_in: "profile.controls o equivalent",
    presets: [],
    calculator_lock_policy: "unlock-on-user-edit",
    reset_strategy: "profile-defaults",
  },
  physical_model: {
    equations: [],
    hypotheses: [],
    validity_domain: [],
    visual_simplifications: ["cuerpo idealizado", "vectores no a escala exacta salvo declaracion expresa"],
  },
  animation: {
    has_internal_time: false,
    has_play_pause: false,
    time_semantics: "none",
  },
  visual_outputs: {
    always_visible: ["cuerpo", "ejes", "fuerzas reales"],
    readable_magnitudes: [],
    level_gated_layers: ["vectores auxiliares", "anotaciones avanzadas"],
  },
};

export const COORD_GRAPH_CONTRACT_TEMPLATE_V1 = {
  identity: {
    leaf_id: "leaf-id",
    graph_type: "Coord",
    graph_id: "coord-leaf-id",
    proposito_didactico: {
      es: "Mostrar una relacion cuantitativa interpretable del leaf.",
      en: "Show an interpretable quantitative relationship for the leaf.",
    },
    nivel_educativo: {
      es: "bachillerato | universidad inicial",
      en: "high school | early undergraduate",
    },
  },
  calculator_contract: {
    expected_inputs: [],
    accepted_aliases: {},
    derived_magnitudes: [],
    target_candidates: [],
    calc_sync: {
      source: "sharedParams.__calc",
      consumes: ["target", "result", "known", "formulaTitle"],
      mode_policy: "follow-calc-until-user-edit",
    },
  },
  interpretation_contract: {
    interpretation_binding: {
      paramsIn: [],
      stateOut: [],
      target: null,
    },
    selectable_magnitudes: [],
    emitted_semantic_context: ["target", "value", "paramsIn", "stateOut"],
    supports_focus_target: true,
  },
  experiment_mode: {
    manipulable_params: [],
    ranges_defined_in: "controls",
    presets: [],
    calculator_lock_policy: "unlock-on-user-edit",
    reset_strategy: "defaultParams",
  },
  physical_model: {
    equations: [],
    hypotheses: [],
    validity_domain: [],
    visual_simplifications: ["muestreo discreto de una curva continua"],
  },
  animation: {
    has_internal_time: false,
    has_play_pause: false,
    time_semantics: "none",
  },
  visual_outputs: {
    always_visible: ["ejes", "unidades", "curva o puntos", "magnitud objetivo"],
    readable_magnitudes: [],
    level_gated_layers: ["ajustes avanzados", "capas comparativas"],
  },
};