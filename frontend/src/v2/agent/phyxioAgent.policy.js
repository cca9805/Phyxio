// Phyxi Agent executable policy

export const PHYXI_AGENT_RESPONSE_TYPE = "phyxi_agent_response";

export const PHYXI_AGENT_MODES = Object.freeze({
  AUTO: "auto",
  EXPLAIN: "explain",
  FORMULA: "formula",
  MAGNITUDE: "magnitude",
  GRAPH: "graph",
  CALCULATOR_GUIDE: "calculator_guide",
  ERROR: "error",
});

export const PHYXI_AGENT_INTENTS = Object.freeze({
  CONCEPT: "concept_question",
  FORMULA: "formula_question",
  MAGNITUDE: "magnitude_question",
  GRAPH: "graph_reading",
  MODEL_VALIDITY: "model_validity",
  COMMON_ERROR: "common_error",
  EXAMPLE_REQUEST: "example_request",
  APPLICATION_REQUEST: "application_request",
  CALCULATION: "calculation_request",
  CALCULATOR_GUIDE: "calculator_guide",
  AMBIGUOUS: "ambiguous_question",
  OUT_OF_LEAF: "out_of_leaf_question",
  SPECULATIVE: "speculative_question",
  PREREQUISITE: "prerequisite_request",
  LEAF_CONNECTION: "leaf_connection",
});

export const PHYXI_SCOPE_STATUS = Object.freeze({
  INSIDE_LEAF: "inside_leaf",
  INSIDE_LEAF_WITH_REFERENCE: "inside_leaf_with_reference",
  NEEDS_CLARIFICATION: "needs_clarification",
  CALCULATOR_REQUIRED: "calculator_required",
  OUT_OF_LEAF: "out_of_leaf",
  SPECULATIVE: "speculative",
  INSUFFICIENT_CONTEXT: "insufficient_context",
});

export const PHYXI_AGENT_TABS = Object.freeze({
  TEORIA: "teoria",
  MAGNITUDES: "magnitudes",
  CALCULADORA: "calculadora",
  INTERPRETACION: "interpretacion",
  MODELOS: "modelos",
  ERRORES: "errores",
  EJEMPLOS: "ejemplos",
  APLICACIONES: "aplicaciones",
  HISTORIA: "historia",
  GRAFICAS: "graficas",
  PRACTICA: "practica",
});

export const PHYXIO_AGENT_POLICY = Object.freeze({
  identity: {
    name: "Phyxi",
    role: "contextual_leaf_tutor",
    mission:
      "Amplía, aclara y conecta el contenido del leaf activo sin sustituir las herramientas de Phyxio.",
  },

  allowed: [
    "explain_leaf_concepts",
    "clarify_formula_usage",
    "clarify_magnitude_meaning",
    "interpret_active_graph",
    "identify_common_errors",
    "explain_model_validity",
    "guide_calculator_usage",
    "guide_problem_setup_without_solving",
    "recommend_prerequisite_leaf",
    "refer_to_existing_tabs",
  ],

  notAllowed: [
    "complete_numeric_solution",
    "replace_calculator",
    "replace_existing_tabs",
    "invent_formulas",
    "invent_magnitudes",
    "answer_outside_leaf_without_context",
    "generate_unbounded_content",
    "act_as_general_chatbot",
  ],

  routingPriority: [
    "current_leaf_context",
    "active_tab",
    "active_graph_context",
    "formulas",
    "magnitudes",
    "interpretation",
    "model_validity",
    "common_errors",
    "examples",
    "applications",
    "history",
    "calculator",
    "practice",
    "openai_expansion_if_needed",
  ],

  validTabs: Object.values(PHYXI_AGENT_TABS),

  fixedResponses: {
    calculation:
      "Puedo ayudarte a plantearlo, pero el cálculo numérico corresponde a la Calculadora del leaf. Introduce allí los datos y, cuando tengas el resultado, puedo ayudarte a interpretarlo.",
    outOfLeaf:
      "Esa pregunta pertenece a otro tema de física. Desde este leaf solo puedo ayudarte con el tema activo. Puedo orientarte hacia el leaf más relacionado dentro de Phyxio si el contexto lo permite.",
    speculative:
      "Eso se sale del modelo físico tratado en este leaf y entra en especulación. En Phyxio puedo ayudarte a formular una versión física de la pregunta dentro de un modelo concreto.",
    ambiguous:
      "La pregunta es demasiado abierta. ¿Quieres relacionarla con la fórmula, con el gráfico, con la calculadora o con el modelo de validez de este leaf?",
    insufficientContext:
      "No veo en este leaf información suficiente para responder eso con precisión. Puedo ayudarte a reformular la duda o buscar el leaf más adecuado dentro de Phyxio.",
  },
});

export function isValidPhyxiTab(tab) {
  return PHYXIO_AGENT_POLICY.validTabs.includes(tab);
}

export function buildRouteToTab(tab, extra = {}) {
  if (!isValidPhyxiTab(tab)) return null;
  return {
    tab,
    ...extra,
  };
}
