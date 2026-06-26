// frontend/src/v2/agent/phyxioAgent.contract.js

export {
  PHYXI_AGENT_MODES as PHYXIO_AGENT_MODES,
  PHYXI_AGENT_INTENTS as PHYXIO_AGENT_INTENTS,
  PHYXI_SCOPE_STATUS as PHYXIO_SCOPE_STATUS,
  PHYXI_AGENT_TABS as PHYXIO_AGENT_TABS,
  PHYXI_AGENT_RESPONSE_TYPE as PHYXIO_AGENT_RESPONSE_TYPE,
  PHYXIO_AGENT_POLICY,
  buildRouteToTab,
  isValidPhyxiTab,
} from "./phyxioAgent.policy";

export const PHYXIO_AGENT_LOCALES = Object.freeze({
  ES: "es",
  EN: "en",
});

export const PHYXIO_AGENT_LEVELS = Object.freeze({
  ESO: "ESO",
  BACHILLERATO: "BACHILLERATO",
  UNIVERSIDAD: "UNIVERSIDAD",
  EXTRACURRICULAR: "EXTRACURRICULAR",
});

export const DEFAULT_PHYXIO_AGENT_REQUEST = Object.freeze({
  mode: "auto",
  leaf_id: null,
  locale: PHYXIO_AGENT_LOCALES.ES,
  level: PHYXIO_AGENT_LEVELS.BACHILLERATO,
  question: "",
});

export const DEFAULT_PHYXIO_AGENT_RESPONSE = Object.freeze({
  type: "phyxi_agent_response",
  scope_status: "inside_leaf",
  intent: "concept_question",
  leaf_id: null,
  answer: "",
  summary: "",
  explanation: "",
  route_to_tab: null,
  related_formulas: [],
  related_magnitudes: [],
  related_graphs: [],
  warnings: [],
  next_step: "",
  confidence: "medium",
  response_origin: "local_policy",
  needs_external_help: false,
  evidence: [],
  suggested_questions: [],
  local_coverage: {},
  structured_response: null,
  local_matches: [],
});
