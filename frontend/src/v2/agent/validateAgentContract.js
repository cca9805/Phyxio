// frontend/src/v2/agent/validateAgentContract.js

import {
  PHYXIO_AGENT_MODES,
  PHYXIO_AGENT_TABS,
  PHYXIO_SCOPE_STATUS,
  PHYXIO_AGENT_INTENTS,
} from "./phyxioAgent.contract";

function isObject(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateRequest(request) {
  const errors = [];

  if (!isObject(request)) {
    return ["request debe ser un objeto."];
  }

  if (!hasText(request.leaf_id)) {
    errors.push("request.leaf_id es obligatorio.");
  }

  if (!hasText(request.question)) {
    errors.push("request.question es obligatorio.");
  }

  if (!hasText(request.mode)) {
    errors.push("request.mode es obligatorio.");
  }

  const allowedModes = Object.values(PHYXIO_AGENT_MODES);

  if (hasText(request.mode) && !allowedModes.includes(request.mode)) {
    errors.push(`request.mode no es válido: ${request.mode}`);
  }

  if (
    request.mode === PHYXIO_AGENT_MODES.FORMULA &&
    !hasText(request.selected_formula_id)
  ) {
    errors.push("selected_formula_id es obligatorio en modo formula.");
  }

  if (
    request.mode === PHYXIO_AGENT_MODES.MAGNITUDE &&
    !hasText(request.selected_magnitude_id)
  ) {
    errors.push("selected_magnitude_id es obligatorio en modo magnitude.");
  }

  return errors;
}

function validateLeafContext(leafContext) {
  const errors = [];

  if (!isObject(leafContext)) {
    return ["leafContext debe ser un objeto."];
  }

  if (!hasText(leafContext.id)) {
    errors.push("leafContext.id es obligatorio.");
  }

  if (!Array.isArray(leafContext.formulas)) {
    errors.push("leafContext.formulas debe ser un array.");
  }

  if (!Array.isArray(leafContext.magnitudes)) {
    errors.push("leafContext.magnitudes debe ser un array.");
  }

  if (leafContext.graphs !== undefined && !Array.isArray(leafContext.graphs)) {
    errors.push("leafContext.graphs debe ser un array si existe.");
  }

  return errors;
}

export function validateAgentResponse(response) {
  const errors = [];

  if (!isObject(response)) {
    return { ok: false, errors: ["response debe ser un objeto."] };
  }

  if (response.type !== "phyxi_agent_response") {
    errors.push("response.type debe ser phyxi_agent_response.");
  }

  if (!Object.values(PHYXIO_SCOPE_STATUS).includes(response.scope_status)) {
    errors.push(`scope_status no válido: ${response.scope_status}`);
  }

  if (!Object.values(PHYXIO_AGENT_INTENTS).includes(response.intent)) {
    errors.push(`intent no válido: ${response.intent}`);
  }

  if (!hasText(response.answer)) {
    errors.push("response.answer es obligatorio.");
  }

  if (
    response.route_to_tab !== null &&
    response.route_to_tab !== undefined
  ) {
    if (!isObject(response.route_to_tab)) {
      errors.push("route_to_tab debe ser null u objeto.");
    } else if (!Object.values(PHYXIO_AGENT_TABS).includes(response.route_to_tab.tab)) {
      errors.push(`route_to_tab.tab no válido: ${response.route_to_tab.tab}`);
    }
  }

  ["related_formulas", "related_magnitudes", "related_graphs", "warnings"].forEach(
    (field) => {
      if (!Array.isArray(response[field])) {
        errors.push(`response.${field} debe ser un array.`);
      }
    }
  );

  if (
    response.confidence !== undefined &&
    !["high", "medium", "low"].includes(response.confidence)
  ) {
    errors.push(`response.confidence no es valido: ${response.confidence}`);
  }

  if (
    response.needs_external_help !== undefined &&
    typeof response.needs_external_help !== "boolean"
  ) {
    errors.push("response.needs_external_help debe ser booleano.");
  }

  if (response.evidence !== undefined && !Array.isArray(response.evidence)) {
    errors.push("response.evidence debe ser un array.");
  }

  if (
    response.structured_response !== undefined &&
    response.structured_response !== null &&
    !isObject(response.structured_response)
  ) {
    errors.push("response.structured_response debe ser un objeto.");
  }

  if (
    response.suggested_questions !== undefined &&
    !Array.isArray(response.suggested_questions)
  ) {
    errors.push("response.suggested_questions debe ser un array.");
  }

  return { ok: errors.length === 0, errors };
}

export function validateAgentContract({ request, leafContext }) {
  const errors = [
    ...validateRequest(request),
    ...validateLeafContext(leafContext),
  ];

  return {
    ok: errors.length === 0,
    errors,
  };
}
