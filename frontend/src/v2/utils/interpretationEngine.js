// frontend/src/v2/utils/interpretationEngine.js

const DEFAULT_LANG = "es";

const DEFAULT_SECTIONS = [
  "summary",
  "physical_reading",
  "coherence",
  "model_validity",
  "graph_reading",
  "likely_errors",
  "next_step",
];

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function safeNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : value;
  }
  return value;
}

function normalizeScope(rawScope = {}) {
  const scope = {};
  for (const [key, value] of Object.entries(rawScope)) {
    scope[key] = safeNumber(value);
  }
  return scope;
}

function getLocalizedText(node, lang = DEFAULT_LANG) {
  if (node == null) return "";
  if (typeof node === "string") return node;
  if (!isPlainObject(node)) return String(node);

  if (typeof node[lang] === "string") return node[lang];
  if (typeof node.es === "string") return node.es;
  if (typeof node.en === "string") return node.en;

  return "";
}

function pushMessage(bucket, message) {
  if (!message || !message.text) return;
  bucket.push(message);
}

function buildMessage({
  id,
  section,
  status = "info",
  ruleType = "rule",
  textNode,
  lang = DEFAULT_LANG,
  extra = {},
}) {
  const text = getLocalizedText(textNode, lang);
  if (!text) return null;

  return {
    id: id || null,
    section,
    status,
    ruleType,
    text,
    ...extra,
  };
}

function buildEvalScope({
  inputs = {},
  result = null,
  target = "",
  formula = null,
  graphState = {},
  extraContext = {},
}) {
  const scope = {
    ...normalizeScope(inputs),
    ...normalizeScope(graphState),
    ...normalizeScope(extraContext),
    abs: Math.abs,
    min: Math.min,
    max: Math.max,
    round: Math.round,
    floor: Math.floor,
    ceil: Math.ceil,
    sqrt: Math.sqrt,
    pow: Math.pow,
    PI: Math.PI,
  };

  if (result && isPlainObject(result)) {
    if ("value" in result) {
      scope.result = safeNumber(result.value);
      if (target) {
        scope[target] = safeNumber(result.value);
      }
    }
    if ("unit" in result) scope.result_unit = result.unit;
    if ("latex" in result) scope.result_latex = result.latex;
  } else if (result != null) {
    scope.result = safeNumber(result);
    if (target) {
      scope[target] = safeNumber(result);
    }
  }

  if (formula && isPlainObject(formula)) {
    scope.formula_id = formula.id || "";
    scope.formula_title_es = formula.title?.es || "";
    scope.formula_title_en = formula.title?.en || "";
  }

  return scope;
}

function evaluateCondition(expression, scope) {
  if (!expression) return true;

  const rawExpr = String(expression).trim();
  if (rawExpr === "true" || rawExpr === "always") return true;
  if (rawExpr === "false" || rawExpr === "never") return false;

  try {
    const argNames = Object.keys(scope);
    const argValues = Object.values(scope);
    // Compatibilidad con condiciones tipo YAML estilo Python:
    // and/or/not/always -> &&/||/!/true
    const normalizedExpr = rawExpr
      .replace(/\band\b/gi, "&&")
      .replace(/\bor\b/gi, "||")
      .replace(/\bnot\b/gi, "!")
      .replace(/\balways\b/gi, "true")
      .replace(/\bnever\b/gi, "false");

    const fn = new Function(
      ...argNames,
      `"use strict"; return (${normalizedExpr});`
    );

    return Boolean(fn(...argValues));
  } catch (error) {
    return false;
  }
}

function normalizeRuleList(list) {
  return Array.isArray(list) ? list : [];
}

function collectRuleMessages({
  rules = [],
  section,
  lang,
  scope,
  defaultStatus = "info",
  ruleType = "rule",
}) {
  const messages = [];

  for (const rule of normalizeRuleList(rules)) {
    const when = rule.when || "true";
    const ok = evaluateCondition(when, scope);
    if (!ok) continue;

    const message = buildMessage({
      id: rule.id,
      section,
      status: rule.status || defaultStatus,
      ruleType,
      textNode: rule.text || rule.message,
      lang,
      extra: {
        when,
      },
    });

    pushMessage(messages, message);
  }

  return messages;
}

function collectTargetSectionMessages({
  targetConfig,
  section,
  rulesKey,
  lang,
  scope,
  defaultStatus = "info",
}) {
  if (!targetConfig) return [];

  let rules = targetConfig[rulesKey];
  if (!rules) {
    const legacyByRulesKey = {
      summary_rules: "summary",
      physical_reading_rules: "physical_reading",
      coherence_rules: "coherence",
      model_validity_rules: "model_validity",
      graph_rules: "graph_reading",
      likely_errors: "likely_errors",
      next_step_rules: "next_step",
    };
    const legacyKey = legacyByRulesKey[rulesKey];
    const legacyValue = legacyKey ? targetConfig[legacyKey] : null;

    if (legacyValue) {
      if (Array.isArray(legacyValue)) {
        rules = legacyValue
          .map((item, idx) => {
            const textNode =
              typeof item === "string" || isPlainObject(item)
                ? item
                : null;
            if (!textNode) return null;
            return {
              id: `${section}_legacy_${idx + 1}`,
              when: "true",
              status:
                section === "likely_errors" ? "warning" : defaultStatus,
              text: textNode,
            };
          })
          .filter(Boolean);
      } else if (typeof legacyValue === "string" || isPlainObject(legacyValue)) {
        rules = [
          {
            id: `${section}_legacy`,
            when: "true",
            status: section === "likely_errors" ? "warning" : defaultStatus,
            text: legacyValue,
          },
        ];
      }
    }
  }

  if (!rules) return [];
  return collectRuleMessages({
    rules,
    section,
    lang,
    scope,
    defaultStatus,
    ruleType: "target_rule",
  });
}

function collectCrossChecks({ interpretation, target, lang, scope }) {
  const checks = normalizeRuleList(interpretation.cross_checks);
  const messages = [];

  for (const rule of checks) {
    const affects = Array.isArray(rule.affects) ? rule.affects : null;
    if (affects && target && !affects.includes(target)) continue;

    if (!evaluateCondition(rule.when || "true", scope)) continue;

    const msg = buildMessage({
      id: rule.id,
      section: "coherence",
      status: rule.severity || "warning",
      ruleType: "cross_check",
      textNode: rule.text,
      lang,
      extra: {
        when: rule.when || "true",
      },
    });

    pushMessage(messages, msg);
  }

  return messages;
}

function collectErrorPatterns({ interpretation, lang, scope }) {
  const patterns = normalizeRuleList(interpretation.error_patterns);
  const messages = [];

  for (const rule of patterns) {
    if (!evaluateCondition(rule.detect_when || "true", scope)) continue;

    const main = buildMessage({
      id: rule.id,
      section: "likely_errors",
      status: "warning",
      ruleType: "error_pattern",
      textNode: rule.message,
      lang,
      extra: {
        category: rule.category || null,
        passiveOnly: Boolean(rule.passive_only),
      },
    });

    pushMessage(messages, main);

    const hintText = getLocalizedText(rule.pedagogical_hint, lang);
    if (hintText) {
      messages.push({
        id: `${rule.id}__hint`,
        section: "likely_errors",
        status: "info",
        ruleType: "pedagogical_hint",
        text: hintText,
        parentId: rule.id,
      });
    }
  }

  return messages;
}

function collectGlobalWarnings({ interpretation, lang }) {
  const warnings = normalizeRuleList(
    interpretation.global_context?.standard_warnings
  );

  return warnings
    .map((rule) =>
      buildMessage({
        id: rule.id,
        section: "model_validity",
        status: rule.severity || "warning",
        ruleType: "global_warning",
        textNode: rule.text,
        lang,
      })
    )
    .filter(Boolean);
}

function sortMessages(messages = []) {
  const statusOrder = {
    error: 0,
    warning: 1,
    ok: 2,
    info: 3,
  };

  return [...messages].sort((a, b) => {
    const aOrder = statusOrder[a.status] ?? 99;
    const bOrder = statusOrder[b.status] ?? 99;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return (a.text || "").localeCompare(b.text || "");
  });
}

function applyInlineLimits({ interpretation, messagesBySection }) {
  const limits = interpretation.ui?.inline_limits || {};
  const next = deepClone(messagesBySection);

  if (typeof limits.calculator_messages_max === "number") {
    for (const section of ["summary", "physical_reading", "coherence"]) {
      if (Array.isArray(next[section])) {
        next[section] = next[section].slice(0, limits.calculator_messages_max);
      }
    }
  }

  if (typeof limits.graph_messages_max === "number") {
    if (Array.isArray(next.graph_reading)) {
      next.graph_reading = next.graph_reading.slice(0, limits.graph_messages_max);
    }
  }

  if (typeof limits.warnings_max === "number") {
    for (const key of Object.keys(next)) {
      const warnings = next[key].filter((m) => m.status === "warning");
      const others = next[key].filter((m) => m.status !== "warning");
      next[key] = [...warnings.slice(0, limits.warnings_max), ...others];
    }
  }

  if (typeof limits.errors_max === "number") {
    for (const key of Object.keys(next)) {
      const errors = next[key].filter((m) => m.status === "error");
      const others = next[key].filter((m) => m.status !== "error");
      next[key] = [...errors.slice(0, limits.errors_max), ...others];
    }
  }

  return next;
}

function buildSectionTitles(interpretation, lang) {
  const blocks = interpretation.result_blocks || {};
  const isEn = lang === "en";
  return {
    summary: getLocalizedText(blocks.summary?.title, lang) || (isEn ? "Summary" : "Resumen"),
    physical_reading:
      getLocalizedText(blocks.physical_reading?.title, lang) || (isEn ? "Physical reading" : "Lectura física"),
    coherence:
      getLocalizedText(blocks.coherence?.title, lang) || (isEn ? "Physical coherence" : "Coherencia física"),
    model_validity:
      getLocalizedText(blocks.model_validity?.title, lang) || (isEn ? "Model validity" : "Validez del modelo"),
    graph_reading:
      getLocalizedText(blocks.graph_reading?.title, lang) || (isEn ? "Graph reading" : "Lectura del gráfico"),
    likely_errors:
      getLocalizedText(blocks.likely_errors?.title, lang) || (isEn ? "Likely errors" : "Errores probables"),
    next_step:
      getLocalizedText(blocks.next_step?.title, lang) || (isEn ? "Next step" : "Siguiente paso"),
  };
}

function ensureSections(seedSections = DEFAULT_SECTIONS) {
  return seedSections.reduce((acc, key) => {
    acc[key] = [];
    return acc;
  }, {});
}

/**
 * Main API
 */
export function getInterpretation({
  interpretation,
  target,
  result,
  inputs = {},
  formula = null,
  graphState = {},
  lang = DEFAULT_LANG,
  extraContext = {},
  mode = "full", // "full" | "inline_calculator" | "inline_graph"
}) {
  if (!interpretation || !target) {
    return {
      ok: false,
      target: target || null,
      mode,
      sections: ensureSections(),
      sectionTitles: {},
      flatMessages: [],
      summaryText: "",
      errors: ["Missing interpretation config or target."],
    };
  }

  const targetConfig = interpretation.targets?.[target];
  if (!targetConfig) {
    return {
      ok: false,
      target,
      mode,
      sections: ensureSections(),
      sectionTitles: buildSectionTitles(interpretation, lang),
      flatMessages: [],
      summaryText: "",
      errors: [`Target "${target}" not found in interpretation config.`],
    };
  }

  const scope = buildEvalScope({
    inputs,
    result,
    target,
    formula,
    graphState,
    extraContext,
  });

  const sections = ensureSections(
    interpretation.output_contract?.sections || DEFAULT_SECTIONS
  );

  sections.summary.push(
    ...collectTargetSectionMessages({
      targetConfig,
      section: "summary",
      rulesKey: "summary_rules",
      lang,
      scope,
      defaultStatus: "info",
    })
  );

  sections.physical_reading.push(
    ...collectTargetSectionMessages({
      targetConfig,
      section: "physical_reading",
      rulesKey: "physical_reading_rules",
      lang,
      scope,
      defaultStatus: "info",
    })
  );

  sections.coherence.push(
    ...collectTargetSectionMessages({
      targetConfig,
      section: "coherence",
      rulesKey: "coherence_rules",
      lang,
      scope,
      defaultStatus: "ok",
    })
  );

  sections.model_validity.push(
    ...collectTargetSectionMessages({
      targetConfig,
      section: "model_validity",
      rulesKey: "model_validity_rules",
      lang,
      scope,
      defaultStatus: "info",
    })
  );

  sections.graph_reading.push(
    ...collectTargetSectionMessages({
      targetConfig,
      section: "graph_reading",
      rulesKey: "graph_rules",
      lang,
      scope,
      defaultStatus: "info",
    })
  );

  sections.likely_errors.push(
    ...collectTargetSectionMessages({
      targetConfig,
      section: "likely_errors",
      rulesKey: "likely_errors",
      lang,
      scope,
      defaultStatus: "warning",
    })
  );

  sections.next_step.push(
    ...collectTargetSectionMessages({
      targetConfig,
      section: "next_step",
      rulesKey: "next_step_rules",
      lang,
      scope,
      defaultStatus: "info",
    })
  );

  sections.coherence.push(
    ...collectCrossChecks({
      interpretation,
      target,
      lang,
      scope,
    })
  );

  sections.likely_errors.push(
    ...collectErrorPatterns({
      interpretation,
      lang,
      scope,
    })
  );

  sections.model_validity.push(
    ...collectGlobalWarnings({
      interpretation,
      lang,
    })
  );

  for (const key of Object.keys(sections)) {
    sections[key] = sortMessages(sections[key]);
  }

  let finalSections = sections;

  if (mode === "inline_calculator" || mode === "inline_graph") {
    finalSections = applyInlineLimits({
      interpretation,
      messagesBySection: sections,
    });
  }

  if (mode === "inline_calculator") {
    finalSections = {
      summary: finalSections.summary,
      physical_reading: finalSections.physical_reading,
      coherence: finalSections.coherence,
      model_validity: [],
      graph_reading: [],
      likely_errors: finalSections.likely_errors.slice(0, 1),
      next_step: [],
    };
  }

  if (mode === "inline_graph") {
    finalSections = {
      summary: [],
      physical_reading: [],
      coherence: [],
      model_validity: [],
      graph_reading: finalSections.graph_reading,
      likely_errors: [],
      next_step: [],
    };
  }

  const flatMessages = Object.values(finalSections).flat();
  const summaryText = flatMessages[0]?.text || "";

  return {
    ok: true,
    target,
    mode,
    lang,
    scope,
    sections: finalSections,
    sectionTitles: buildSectionTitles(interpretation, lang),
    flatMessages,
    summaryText,
    errors: [],
  };
}

/**
 * Convenience helpers
 */
export function getInlineCalculatorInterpretation(args) {
  return getInterpretation({ ...args, mode: "inline_calculator" });
}

export function getInlineGraphInterpretation(args) {
  return getInterpretation({ ...args, mode: "inline_graph" });
}

export function getFullInterpretation(args) {
  return getInterpretation({ ...args, mode: "full" });
}
