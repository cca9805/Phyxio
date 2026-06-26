// frontend/src/v2/components/SVG/validateSvgProfile.js
//
// Validador de perfiles SVG, análogo al validateSvgConfig.js del sistema svg2.
// Se ejecuta en modo DEV al importar SvgProfileRenderer.
// Imprime warnings/errors en consola y devuelve un informe.

import { SVG_SCENE_TYPES, SVG_MOTION_TYPES, SVG_CONTROL_TYPES } from "./svgGrammar";
import { STRICT_SVG_CONTRACT_LEAF_IDS } from "./profiles/svgProfileContracts.js";

const VALID_SCENE_TYPES  = new Set(Object.values(SVG_SCENE_TYPES));
const VALID_MOTION_TYPES = new Set(Object.values(SVG_MOTION_TYPES));
const VALID_CONTROL_TYPES = new Set(Object.values(SVG_CONTROL_TYPES));

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function warn(id, msg, bag) {
  // eslint-disable-next-line no-console
  console.warn(`[SvgProfile:${id}] ${msg}`);
  bag.warnings.push(msg);
}

function err(id, msg, bag) {
  // eslint-disable-next-line no-console
  console.error(`[SvgProfile:${id}] ${msg}`);
  bag.errors.push(msg);
  bag.errorCount++;
}

/**
 * Valida un profile .svg.profile.js.
 *
 * @param {object} profile — el objeto profile importado
 * @returns {{ ok: boolean, errorCount: number, messages: { errors: string[], warnings: string[] } }}
 */
export function validateSvgProfile(profile) {
  const bag = { errors: [], warnings: [], errorCount: 0 };
  const id = profile?.meta?.id ?? "unknown";
  const leafId = profile?.meta?.leafId ?? null;
  const requiresStrictContract = Boolean(
    (typeof leafId === "string" && STRICT_SVG_CONTRACT_LEAF_IDS.has(leafId)) || profile?.graph_contract
  );

  // ── meta ───────────────────────────────────────────────────────────────────
  if (!profile || typeof profile !== "object") {
    err(id, "El profile no es un objeto.", bag);
    return { ok: false, errorCount: bag.errorCount, messages: bag };
  }

  if (!profile.meta?.id || typeof profile.meta.id !== "string") {
    warn(id, 'Falta meta.id (string). Recomendado para debug.', bag);
  }
  if (!profile.meta?.leafId || typeof profile.meta.leafId !== "string") {
    warn(id, 'Falta meta.leafId. Recomendado para trazar a qué leaf pertenece.', bag);
  }
  if (!profile.meta?.title) {
    warn(id, 'Falta meta.title. Recomendado para el header del gráfico.', bag);
  }

  // ── scene / render ─────────────────────────────────────────────────────────
  const hasScene  = profile.scene != null;
  const hasRender = typeof profile.render === "function";

  if (!hasScene && !hasRender) {
    err(id, 'El profile debe tener "scene" (SVG_SCENE_TYPES.*) o "render(ctx)" para CUSTOM.', bag);
  }

  if (hasScene && !VALID_SCENE_TYPES.has(profile.scene)) {
    err(id, `"scene" inválido: "${profile.scene}". Usa SVG_SCENE_TYPES.*`, bag);
  }

  if (profile.scene === SVG_SCENE_TYPES.CUSTOM && !hasRender) {
    err(id, 'scene=CUSTOM requiere una función "render(ctx)" en el profile.', bag);
  }

  if (hasScene && profile.scene !== SVG_SCENE_TYPES.CUSTOM && hasRender) {
    warn(id, 'Tiene "scene" y "render()". Se usará "render()" (CUSTOM). ¿Es intencional?', bag);
  }

  // ── viewBox ────────────────────────────────────────────────────────────────
  if (profile.viewBox != null && typeof profile.viewBox !== "string") {
    err(id, '"viewBox" debe ser string tipo "0 0 850 520".', bag);
  }

  // ── params ─────────────────────────────────────────────────────────────────
  const schema = profile?.params?.schema;
  if (schema != null && !Array.isArray(schema)) {
    err(id, '"params.schema" debe ser un array.', bag);
  }

  if (Array.isArray(schema)) {
    const keys = new Set();
    for (const item of schema) {
      if (!item?.key || typeof item.key !== "string") {
        err(id, `Un item del schema no tiene "key" string: ${JSON.stringify(item)}`, bag);
        continue;
      }
      if (keys.has(item.key)) {
        warn(id, `Key duplicada en schema: "${item.key}".`, bag);
      }
      keys.add(item.key);

      if (item.type != null && !VALID_CONTROL_TYPES.has(item.type)) {
        warn(id, `schema["${item.key}"].type inválido: "${item.type}". Usa SVG_CONTROL_TYPES.*`, bag);
      }

      if ((item.type === "range" || item.type === "number")) {
        if (item.min != null && typeof item.min !== "number") {
          warn(id, `schema["${item.key}"].min debe ser number.`, bag);
        }
        if (item.max != null && typeof item.max !== "number") {
          warn(id, `schema["${item.key}"].max debe ser number.`, bag);
        }
        if (typeof item.min === "number" && typeof item.max === "number" && item.max <= item.min) {
          warn(id, `schema["${item.key}"]: max (${item.max}) <= min (${item.min}).`, bag);
        }
      }

      if (item.default === undefined) {
        warn(id, `schema["${item.key}"] no tiene "default". Se usará 0.`, bag);
      }
    }
  }

  const derivations = profile?.params?.derivations;
  if (derivations != null && typeof derivations !== "object") {
    err(id, '"params.derivations" debe ser un objeto { key: (p) => value }.', bag);
  }
  if (derivations && typeof derivations === "object") {
    for (const [key, fn] of Object.entries(derivations)) {
      if (typeof fn !== "function") {
        err(id, `params.derivations["${key}"] debe ser función.`, bag);
      }
    }
  }

  // ── motion ─────────────────────────────────────────────────────────────────
  const motion = profile?.motion;
  if (motion != null) {
    if (!VALID_MOTION_TYPES.has(motion.type)) {
      err(id, `motion.type inválido: "${motion.type}". Usa SVG_MOTION_TYPES.*`, bag);
    }
    if (motion.type !== SVG_MOTION_TYPES.STATIC && typeof motion.state !== "function") {
      err(id, 'motion.state debe ser función (t, p) => ({ ... }) para escenas animadas.', bag);
    }
    if (motion.tMax != null && typeof motion.tMax !== "number") {
      warn(id, '"motion.tMax" debe ser number (segundos).', bag);
    }
    if (motion.loop != null && typeof motion.loop !== "boolean") {
      warn(id, '"motion.loop" debe ser boolean.', bag);
    }
  }


  // ── interpretation_binding ─────────────────────────────────────────────────
  const binding = profile?.interpretation_binding;
  if (binding != null) {
    if (binding.paramsIn != null && !Array.isArray(binding.paramsIn)) {
      (requiresStrictContract ? err : warn)(id, '"interpretation_binding.paramsIn" debe ser array de strings.', bag);
    }
    if (binding.stateOut != null && !Array.isArray(binding.stateOut)) {
      (requiresStrictContract ? err : warn)(id, '"interpretation_binding.stateOut" debe ser array de strings.', bag);
    }
  }

  // ── graph_contract ────────────────────────────────────────────────────────
  const contract = profile?.graph_contract;
  if (requiresStrictContract && (!contract || typeof contract !== "object")) {
    err(id, 'Falta "graph_contract" para un profile migrado al contrato estandar.', bag);
  }

  if (contract && typeof contract === "object") {
    const identity = contract.identity ?? {};
    const calcContract = contract.calculator_contract ?? {};
    const interpContract = contract.interpretation_contract ?? {};
    const animation = contract.animation ?? {};

    if (!identity.leaf_id || typeof identity.leaf_id !== "string") {
      err(id, '"graph_contract.identity.leaf_id" debe ser string.', bag);
    } else if (leafId && identity.leaf_id !== leafId) {
      err(id, '"graph_contract.identity.leaf_id" debe coincidir con meta.leafId.', bag);
    }

    if (identity.graph_type !== "Svg") {
      err(id, '"graph_contract.identity.graph_type" debe ser "Svg".', bag);
    }
    if (!identity.graph_id || typeof identity.graph_id !== "string") {
      err(id, '"graph_contract.identity.graph_id" debe ser string.', bag);
    }

    if (calcContract.expected_inputs != null && !isStringArray(calcContract.expected_inputs)) {
      err(id, '"graph_contract.calculator_contract.expected_inputs" debe ser array de strings.', bag);
    }
    if (calcContract.derived_magnitudes != null && !isStringArray(calcContract.derived_magnitudes)) {
      err(id, '"graph_contract.calculator_contract.derived_magnitudes" debe ser array de strings.', bag);
    }
    if (calcContract.target_candidates != null && !isStringArray(calcContract.target_candidates)) {
      err(id, '"graph_contract.calculator_contract.target_candidates" debe ser array de strings.', bag);
    }

    if (interpContract.selectable_magnitudes != null && !isStringArray(interpContract.selectable_magnitudes)) {
      err(id, '"graph_contract.interpretation_contract.selectable_magnitudes" debe ser array de strings.', bag);
    }
    if (interpContract.supports_focus_target != null && typeof interpContract.supports_focus_target !== "boolean") {
      err(id, '"graph_contract.interpretation_contract.supports_focus_target" debe ser boolean.', bag);
    }

    if (animation.has_internal_time != null && typeof animation.has_internal_time !== "boolean") {
      err(id, '"graph_contract.animation.has_internal_time" debe ser boolean.', bag);
    }
    if (animation.has_play_pause != null && typeof animation.has_play_pause !== "boolean") {
      err(id, '"graph_contract.animation.has_play_pause" debe ser boolean.', bag);
    }
  }

  const bindingTarget =
    typeof binding?.target === "string"
      ? binding.target
      : typeof binding?.primaryTarget === "string"
        ? binding.primaryTarget
        : null;
  const contractTargets = Array.isArray(contract?.calculator_contract?.target_candidates)
    ? contract.calculator_contract.target_candidates.filter((item) => typeof item === "string" && item.trim())
    : [];

  if (requiresStrictContract && !bindingTarget && contractTargets.length === 0) {
    err(id, 'El profile necesita al menos un target interpretable en interpretation_binding o graph_contract.', bag);
  }

  return {
    ok: bag.errorCount === 0,
    errorCount: bag.errorCount,
    messages: bag,
  };
}
