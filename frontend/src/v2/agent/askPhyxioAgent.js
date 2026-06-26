// frontend/src/v2/agent/askPhyxioAgent.js

import { normalizeLeafContext } from "./normalizeLeafContext";
import { validateAgentContract, validateAgentResponse } from "./validateAgentContract";

const AGENT_ENDPOINT =
  import.meta.env.VITE_PHYXIO_AGENT_ENDPOINT || "/api/phyxio-agent/ask";

function buildLocalContractError(errors) {
  return {
    ok: false,
    response: null,
    errors,
    warnings: ["La petición no se ha enviado al backend por error de contrato."],
  };
}

function buildNetworkError(error) {
  return {
    ok: false,
    response: null,
    errors: [
      error instanceof Error
        ? error.message
        : "Error de red al contactar con Phyxi.",
    ],
    warnings: [],
  };
}

export async function askPhyxioAgent(request, rawLeafContext) {
  const leafContext = normalizeLeafContext(rawLeafContext);

  const validation = validateAgentContract({
    request,
    leafContext,
  });

  if (!validation.ok) {
    return buildLocalContractError(validation.errors);
  }

  try {
    const fetchResponse = await fetch(AGENT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        request,
        leafContext,
      }),
    });

    const data = await fetchResponse.json().catch(() => null);

    if (!fetchResponse.ok) {
      return {
        ok: false,
        response: null,
        errors:
          data?.errors?.length > 0
            ? data.errors
            : [`Error HTTP ${fetchResponse.status} en Phyxi.`],
        warnings: data?.warnings || [],
      };
    }

    const responseValidation = validateAgentResponse(data?.response);

    if (!responseValidation.ok) {
      return {
        ok: false,
        response: data?.response || null,
        errors: responseValidation.errors,
        warnings: ["El backend respondió, pero la respuesta no cumple el contrato de Phyxi."],
      };
    }

    return {
      ok: Boolean(data?.ok),
      response: data?.response || null,
      errors: data?.errors || [],
      warnings: data?.warnings || [],
    };
  } catch (error) {
    return buildNetworkError(error);
  }
}
