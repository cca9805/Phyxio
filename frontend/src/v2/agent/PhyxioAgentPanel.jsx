// frontend/src/v2/agent/PhyxioAgentPanel.jsx

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BlockMath, InlineMath } from "react-katex";
import { normalizeLeafContext } from "./normalizeLeafContext";
import { getUiLanguage, normalizeUiLanguage, tr } from "../utils/uiLanguage";
import "./PhyxioAgentPanel.css";
import { useGraphContext } from "./GraphContextProvider";

import { askPhyxioAgent } from "./askPhyxioAgent";
import { buildAgentAskPayload } from "./agentPayload.helpers";
import {
  getGraphTypeFromGraph,
  mergeGraphListsByPriority,
  resolveRegisteredGraphsForLeaf,
  toAgentDisplayText,
} from "./agentGraphContext.helpers";
import {
  PHYXIO_AGENT_LEVELS,
  PHYXIO_AGENT_MODES,
  PHYXIO_AGENT_TABS,
} from "./phyxioAgent.contract";

export default function PhyxioAgentPanel({
  leafId,
  locale = null,
  level = PHYXIO_AGENT_LEVELS.BACHILLERATO,
  leafContext = null,
  compact = false,
}) {
  const lang = normalizeUiLanguage(locale || leafContext?.language || getUiLanguage());

  const [question, setQuestion] = useState("");
  const [currentLevel, setCurrentLevel] = useState(level);
  const [currentMode, setCurrentMode] = useState(PHYXIO_AGENT_MODES.AUTO);
  const [selectedFormulaId, setSelectedFormulaId] = useState("");
  const [selectedMagnitudeId, setSelectedMagnitudeId] = useState("");
  const [selectedGraphType, setSelectedGraphType] = useState("");
  const [result, setResult] = useState(null);
  const [isAsking, setIsAsking] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { activeGraphContext: providerActiveGraphContext } = useGraphContext();

  const lastActiveGraphContextRef = useRef(null);

  useEffect(() => {
    if (
      providerActiveGraphContext &&
      typeof providerActiveGraphContext === "object"
    ) {
      lastActiveGraphContextRef.current = providerActiveGraphContext;
    }
  }, [providerActiveGraphContext]);

  const canAsk = useMemo(() => {
    if (!leafId || !question.trim() || isAsking) return false;

    if (currentMode === PHYXIO_AGENT_MODES.FORMULA) {
      return Boolean(selectedFormulaId);
    }

    if (currentMode === PHYXIO_AGENT_MODES.MAGNITUDE) {
      return Boolean(selectedMagnitudeId);
    }

    return true;
  }, [
    leafId,
    question,
    isAsking,
    currentMode,
    selectedFormulaId,
    selectedMagnitudeId,
  ]);

  const normalizedLeafContext = useMemo(() => {
    const normalized = normalizeLeafContext({
      ...(leafContext || {}),
      language: lang,
      locale: lang,
    });

    const graphsFromContext =
      leafContext?.graphsDoc ??
      leafContext?.graphs ??
      leafContext?.graficos ??
      leafContext?.meta?.graphs ??
      leafContext?.meta?.graficos ??
      normalized?.graphsDoc ??
      normalized?.graphs ??
      normalized?.graficos ??
      [];

    const safeGraphs = Array.isArray(graphsFromContext)
      ? graphsFromContext
      : [];

    return {
      ...normalized,

      graphs: safeGraphs,
      graficos: safeGraphs,
      graphsDoc: safeGraphs,

      hasGraphs: safeGraphs.length > 0,
      graphsCount: safeGraphs.length,
    };
  }, [leafContext, lang]);

  const [registeredGraphsForLeaf, setRegisteredGraphsForLeaf] = useState([]);

  useEffect(() => {
    let cancelled = false;

    resolveRegisteredGraphsForLeaf({
      leafId,
      leafContext,
      normalizedLeafContext,
    }).then((graphs) => {
      if (!cancelled) setRegisteredGraphsForLeaf(graphs);
    });

    return () => {
      cancelled = true;
    };
  }, [leafId, leafContext, normalizedLeafContext]);

  const availableFormulas = useMemo(() => {
    return normalizedLeafContext.formulas;
  }, [normalizedLeafContext]);

  const availableMagnitudes = useMemo(() => {
    return normalizedLeafContext.magnitudes;
  }, [normalizedLeafContext]);

  const availableGraphs = useMemo(() => {
    const graphs =
      normalizedLeafContext?.graphsDoc ??
      normalizedLeafContext?.graphs ??
      normalizedLeafContext?.graficos ??
      [];

    return mergeGraphListsByPriority(
      registeredGraphsForLeaf,
      Array.isArray(graphs) ? graphs : []
    );
  }, [normalizedLeafContext, registeredGraphsForLeaf]);

  const selectedMagnitude = useMemo(() => {
    if (!selectedMagnitudeId) return null;

    return (
      availableMagnitudes.find((magnitude) => magnitude.id === selectedMagnitudeId) ||
      null
    );
  }, [availableMagnitudes, selectedMagnitudeId]);

  function renderFormulaChipLabel({ formulaLabel, formulaEquation }) {
    const safeFormulaLabel = toAgentDisplayText(formulaLabel, "", lang);

    if (!formulaEquation) {
      return safeFormulaLabel;
    }

    return (
      <>
        <span>{safeFormulaLabel}: </span>
        <InlineMath math={formulaEquation} settings={{ strict: false }} />
      </>
    );
  }

  function renderMagnitudeChipLabel({
    magnitudeLabel,
    magnitudeSymbol,
    magnitudeUnit,
  }) {
    const safeMagnitudeLabel = toAgentDisplayText(magnitudeLabel, "", lang);
    const safeMagnitudeSymbol = toAgentDisplayText(magnitudeSymbol, "", lang);
    const safeMagnitudeUnit = toAgentDisplayText(magnitudeUnit, "", lang);

    return (
      <>
        <span>{safeMagnitudeLabel}</span>

        {safeMagnitudeSymbol && (
          <>
            {" "}
            (
            <InlineMath math={safeMagnitudeSymbol} settings={{ strict: false }} />
            )
          </>
        )}

        {safeMagnitudeUnit && <span> · {safeMagnitudeUnit}</span>}
      </>
    );
  }

  function looksLikeLatexLine(text) {
    const value = String(text || "").trim();

    if (!value) return false;
    if (/^\$\$[\s\S]+\$\$$/.test(value)) return true;
    if (/^\\\[[\s\S]+\\\]$/.test(value)) return true;
    if (/^[-*•−]\s*/.test(value)) return false;

    const hasLatexCommand = value.includes("\\");

    // Evita que frases normales como "Escena: block_on_table."
    // o "Objeto seleccionado: body_main." se rendericen como LaTeX.
    const looksLikeSentence =
      value.includes(":") ||
      /[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,}\s+[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,}/.test(value);

    if (looksLikeSentence) {
      return false;
    }

    return hasLatexCommand && value.length <= 160;
  }

  function splitAgentFormulaLine(text) {
    const value = String(text || "").trim();
    const match = value.match(/^([-*•−]\s*)?(.+?:)\s+(.+)$/u);

    if (!match) return null;

    const [, bullet = "", label, expression] = match;
    const latex = expression.trim();

    if (!/[\\{}_^=]/.test(latex)) return null;
    if (latex.length > 220) return null;

    return {
      bullet,
      label,
      latex,
    };
  }

  function renderMaybeMathToken(text, keyPrefix) {
    const value = String(text || "");

    if (/^[a-zA-Z][a-zA-Z0-9]*(_\{?[a-zA-Z0-9]+\}?|\^\{?[a-zA-Z0-9]+\}?)/.test(value)) {
      return <InlineMath key={`${keyPrefix}-math`} math={value} settings={{ strict: false }} />;
    }

    return value;
  }

  function renderExplanationParagraph(paragraph) {
    const value = String(paragraph || "").trim();
    const formulaLine = splitAgentFormulaLine(value);

    if (formulaLine) {
      const leftLabel = formulaLine.label.replace(/:\s*$/, "");
      const symbolLineMatch = leftLabel.match(/^([-*•−]\s*)?([A-Za-z][A-Za-z0-9_{}\\^]+)$/u);

      return (
        <p key={value} className="phyxio-agent-answer__formula-line">
          {formulaLine.bullet}
          {symbolLineMatch ? (
            <>
              {symbolLineMatch[1] || ""}
              {renderMaybeMathToken(symbolLineMatch[2], `${value}-label`)}
            </>
          ) : (
            leftLabel
          )}
          {": "}
          <InlineMath math={formulaLine.latex} settings={{ strict: false }} />
        </p>
      );
    }

    const symbolDefinitionLine = value.match(/^([-*•−]\s*)([A-Za-z][A-Za-z0-9_{}\\^]+):\s+(.+)$/u);

    if (symbolDefinitionLine && /[_{}\\^]/.test(symbolDefinitionLine[2])) {
      return (
        <p key={value} className="phyxio-agent-answer__formula-line">
          {symbolDefinitionLine[1]}
          {renderMaybeMathToken(symbolDefinitionLine[2], `${value}-symbol`)}
          {": "}
          {symbolDefinitionLine[3]}
        </p>
      );
    }

    if (looksLikeLatexLine(value)) {
      return (
        <div key={value} className="phyxio-agent-answer__math">
          <BlockMath math={value} settings={{ strict: false }} />
        </div>
      );
    }

    return <p key={value}>{value}</p>;
  }

  function renderStructuredFormula(formula, index) {
    const label = toAgentDisplayText(formula?.label || formula?.id, "", lang);
    const equation = toAgentDisplayText(formula?.equation, "", lang);
    const formulaId = formula?.id || "";

    return (
      <li key={formulaId || `${label}-${index}`}>
        <button
          type="button"
          className="phyxio-agent-structured__item-button"
          onClick={() => {
            if (formulaId) {
              setSelectedFormulaId(formulaId);
              setCurrentMode(PHYXIO_AGENT_MODES.FORMULA);
            }
            navigateToRecommendedTab({ tab: PHYXIO_AGENT_TABS.TEORIA, section: "formal" });
          }}
        >
          {label}
        </button>
        {equation && (
          <>
            {": "}
            <InlineMath math={equation} settings={{ strict: false }} />
          </>
        )}
      </li>
    );
  }

  function renderStructuredMagnitude(magnitude, index) {
    const label = toAgentDisplayText(magnitude?.label || magnitude?.id, "", lang);
    const symbol = toAgentDisplayText(magnitude?.symbol, "", lang);
    const unit = toAgentDisplayText(magnitude?.unit, "", lang);
    const magnitudeId = magnitude?.id || "";

    return (
      <li key={magnitudeId || `${label}-${index}`}>
        <button
          type="button"
          className="phyxio-agent-structured__item-button"
          onClick={() => {
            if (magnitudeId) {
              setSelectedMagnitudeId(magnitudeId);
              setCurrentMode(PHYXIO_AGENT_MODES.MAGNITUDE);
            }
            navigateToRecommendedTab({ tab: PHYXIO_AGENT_TABS.MAGNITUDES });
          }}
        >
          {symbol ? <InlineMath math={symbol} settings={{ strict: false }} /> : null}
          {symbol ? <span>{`: ${label}`}</span> : <span>{label}</span>}
        </button>
        {unit ? <span>{` (${unit})`}</span> : null}
      </li>
    );
  }

  function renderStructuredResponse(structuredResponse) {
    if (!structuredResponse || typeof structuredResponse !== "object") return null;

    const steps = Array.isArray(structuredResponse.steps) ? structuredResponse.steps : [];
    const formulas = Array.isArray(structuredResponse.formulas) ? structuredResponse.formulas : [];
    const magnitudes = Array.isArray(structuredResponse.magnitudes) ? structuredResponse.magnitudes : [];
    const contextLabel = toAgentDisplayText(structuredResponse.context?.label, "", lang);
    const contextTitle = toAgentDisplayText(structuredResponse.context?.title, "", lang);

    return (
      <div className="phyxio-agent-structured">
        {structuredResponse.intro && <p>{toAgentDisplayText(structuredResponse.intro, "", lang)}</p>}

        {(contextLabel || contextTitle) && (
          <p className="phyxio-agent-structured__context">
            {contextLabel ? `${contextLabel}: ` : ""}
            {contextTitle ? `"${contextTitle}"` : ""}
          </p>
        )}

        {structuredResponse.focus && <p>{toAgentDisplayText(structuredResponse.focus, "", lang)}</p>}

        {steps.length > 0 && (
          <div className="phyxio-agent-structured__section">
            <h4>{tr(lang, "Plan", "Plan")}</h4>
            <ol>
              {steps.map((step, index) => (
                <li key={`${step}-${index}`}>{toAgentDisplayText(step, "", lang)}</li>
              ))}
            </ol>
          </div>
        )}

        {formulas.length > 0 && (
          <div className="phyxio-agent-structured__section">
            <h4>{tr(lang, "Formulas locales utiles", "Useful local formulas")}</h4>
            <ul>{formulas.map(renderStructuredFormula)}</ul>
          </div>
        )}

        {magnitudes.length > 0 && (
          <div className="phyxio-agent-structured__section">
            <h4>{tr(lang, "Magnitudes a identificar", "Quantities to identify")}</h4>
            <ul>{magnitudes.map(renderStructuredMagnitude)}</ul>
          </div>
        )}

        {structuredResponse.next_step && (
          <p className="phyxio-agent-structured__next">
            {toAgentDisplayText(structuredResponse.next_step, "", lang)}
          </p>
        )}
      </div>
    );
  }

  function getConfidenceLabel(confidence) {
    if (confidence === "high") return tr(lang, "Local alto", "High local");
    if (confidence === "medium") return tr(lang, "Local medio", "Medium local");
    if (confidence === "low") return tr(lang, "Local bajo", "Low local");
    return tr(lang, "Politica local", "Local policy");
  }

  function handleSuggestedQuestion(nextQuestion) {
    setQuestion(nextQuestion);
    setCurrentMode(PHYXIO_AGENT_MODES.AUTO);
  }

  async function handleAskAgent(event) {
    event.preventDefault();

    if (!canAsk) return;

    setIsAsking(true);
    setError("");
    setResult(null);

    try {
      const agentPayload = await buildAgentAskPayload({
        leafId,
        locale: lang,
        level: currentLevel,
        mode: currentMode,
        question,
        selectedFormulaId,
        selectedMagnitudeId,
        selectedGraphType,
        location,
        leafContext,
        normalizedLeafContext,
        availableGraphs,
        providerActiveGraphContext,
        lastActiveGraphContext: lastActiveGraphContextRef.current,
      });

      const agentResult = await askPhyxioAgent(
        agentPayload.request,
        agentPayload.leafContext
      );

      if (!agentResult.ok) {
        setError(agentResult.errors.join(" · "));
        setResult(agentResult);
        return;
      }

      setResult(agentResult);
    } catch (err) {
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.error("Phyxio Agent request failed:", err);
      }
      setError(
        err?.message ||
          tr(lang, "Error al consultar Phyxio Agent.", "Error while asking Phyxio Agent.")
      );
    } finally {
      setIsAsking(false);
    }
  }

  const agentResponse = result?.response || null;
  const routeToTab = agentResponse?.route_to_tab || null;
  const structuredResponse =
    agentResponse?.structured_response && typeof agentResponse.structured_response === "object"
      ? agentResponse.structured_response
      : null;
  const localMatches = Array.isArray(agentResponse?.local_matches)
    ? agentResponse.local_matches.filter((item) => item && typeof item === "object")
    : [];
  const suggestedQuestions = Array.isArray(agentResponse?.suggested_questions)
    ? agentResponse.suggested_questions.filter((item) => typeof item === "string" && item.trim())
    : [];

  const rawRelatedFormulas =
    Array.isArray(agentResponse?.related_formulas) &&
    agentResponse.related_formulas.length > 0
      ? agentResponse.related_formulas
      : Array.isArray(agentResponse?.formulas_used)
        ? agentResponse.formulas_used
        : [];

  const relatedFormulaIds = rawRelatedFormulas
    .map((item) => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object") return item.id || item.formula_id || item.key;
      return null;
    })
    .filter((id) => {
      if (!id || typeof id !== "string") return false;

      const clean = id.trim();

      if (!clean) return false;
      if (clean === "......") return false;
      if (clean === "...") return false;
      if (clean.toLowerCase() === "none") return false;
      if (clean.toLowerCase() === "null") return false;
      if (clean.toLowerCase() === "undefined") return false;

      return true;
    });

  const rawRelatedMagnitudes =
    Array.isArray(agentResponse?.related_magnitudes) &&
    agentResponse.related_magnitudes.length > 0
      ? agentResponse.related_magnitudes
      : Array.isArray(agentResponse?.linked_magnitudes)
        ? agentResponse.linked_magnitudes
        : [];

  const relatedMagnitudeIds = rawRelatedMagnitudes
    .map((item) => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object") {
        return item.id || item.magnitude_id || item.key || item.symbol;
      }
      return null;
    })
    .filter((id) => {
      if (!id || typeof id !== "string") return false;

      const clean = id.trim();

      if (!clean) return false;
      if (clean === "......") return false;
      if (clean === "...") return false;
      if (clean.toLowerCase() === "none") return false;
      if (clean.toLowerCase() === "null") return false;
      if (clean.toLowerCase() === "undefined") return false;

      return true;
    });

  const rawRelatedGraphs =
    Array.isArray(agentResponse?.related_graphs) &&
    agentResponse.related_graphs.length > 0
      ? agentResponse.related_graphs
      : [];

  const relatedGraphIds = rawRelatedGraphs
    .map((item) => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object") {
        return item.id || item.graph_id || item.key || item.type;
      }
      return null;
    })
    .filter((id) => {
      if (!id || typeof id !== "string") return false;

      const clean = id.trim();

      if (!clean) return false;
      if (clean === "......") return false;
      if (clean === "...") return false;
      if (clean.toLowerCase() === "none") return false;
      if (clean.toLowerCase() === "null") return false;
      if (clean.toLowerCase() === "undefined") return false;

      return true;
    });

  const TAB_LABELS = {
    teoria: tr(lang, "Teoria", "Theory"),
    magnitudes: tr(lang, "Magnitudes", "Magnitudes"),
    calculadora: tr(lang, "Calculadora", "Calculator"),
    interpretacion: tr(lang, "Interpretacion", "Interpretation"),
    modelos: tr(lang, "Modelo y validez", "Model and validity"),
    errores: tr(lang, "Errores comunes", "Common errors"),
    ejemplos: tr(lang, "Ejemplos", "Examples"),
    aplicaciones: tr(lang, "Aplicaciones", "Applications"),
    historia: tr(lang, "Historia", "History"),
    graficas: tr(lang, "Graficas", "Graphs"),
    practica: tr(lang, "Practica", "Practice"),
  };

  function getRecommendedTabLabel(routeToTab) {
    if (!routeToTab?.tab) return null;

    const tabLabel = TAB_LABELS[routeToTab.tab] || routeToTab.tab;

    if (routeToTab.section) {
      return `${tabLabel} - ${routeToTab.section}`;
    }

    return tabLabel;
  }

  function buildTabUrl(routeToTab) {
    if (!routeToTab?.tab) return null;

    const params = new URLSearchParams(location.search);

    params.set("tab", routeToTab.tab);

    if (routeToTab.section) {
      params.set("section", routeToTab.section);
    } else {
      params.delete("section");
    }

    return `${location.pathname}?${params.toString()}`;
  }

  const ROUTE_TAB_TO_UI_TAB = {
    teoria: "idea-general-del-tema",
    magnitudes: "leyenda",
    calculadora: "calculadora",
    interpretacion: "interpretacion",
    modelos: "modelo-validez",
    errores: "errores-comunes",
    ejemplos: "ejemplos",
    aplicaciones: "aplicaciones",
    historia: "historia",
    graficas: "graficas",
    practica: "practica",
  };

  function buildTabUrl(routeToTab) {
    if (!routeToTab?.tab) return null;

    const uiTab = ROUTE_TAB_TO_UI_TAB[routeToTab.tab] || routeToTab.tab;

    const params = new URLSearchParams(location.search);
    params.set("tab", uiTab);

    if (routeToTab.section) {
      params.set("section", routeToTab.section);
    } else {
      params.delete("section");
    }

    return `${location.pathname}?${params.toString()}`;
  }

  function navigateToRecommendedTab(routeToTab) {
    const url = buildTabUrl(routeToTab);

    if (!url) return;

    navigate(url);
  }

  function buildLocalMatchUrl(match) {
    if (match?.url) return match.url;
    if (!match?.route) return null;

    const basePath = `/v2/${String(match.route).replace(/^\/?v2\/?/, "").replace(/^\/+|\/+$/g, "")}`;
    const uiTab = ROUTE_TAB_TO_UI_TAB[match.tab] || match.tab;

    if (!uiTab) return basePath;

    const params = new URLSearchParams();
    params.set("tab", uiTab);

    if (match.section) {
      params.set("section", match.section);
    }

    return `${basePath}?${params.toString()}`;
  }

  function handleLocalMatchClick(match) {
    if (!match || typeof match !== "object") return;

    if (match.type === "formula" && match.formula_id) {
      setSelectedFormulaId(match.formula_id);
      setCurrentMode(PHYXIO_AGENT_MODES.FORMULA);
    }

    if (match.type === "magnitude" && match.magnitude_id) {
      setSelectedMagnitudeId(match.magnitude_id);
      setCurrentMode(PHYXIO_AGENT_MODES.MAGNITUDE);
    }

    const url = buildLocalMatchUrl(match);
    if (url) navigate(url);
  }

  function getLocalMatchTypeLabel(match) {
    if (match?.type === "formula") return tr(lang, "Formula", "Formula");
    if (match?.type === "magnitude") return tr(lang, "Magnitud", "Quantity");
    if (match?.type === "topic") return tr(lang, "Tema", "Topic");
    if (match?.type === "tag") return "tag";
    return tr(lang, "Recurso", "Resource");
  }

  function renderLocalMatch(match, index) {
    const title = toAgentDisplayText(match.title || match.label || match.id, "", lang);
    const topicTitle = toAgentDisplayText(match.topic_title, "", lang);
    const equation = toAgentDisplayText(match.equation, "", lang);
    const symbol = toAgentDisplayText(match.symbol, "", lang);

    return (
      <button
        key={`${match.type || "match"}-${match.route || ""}-${match.formula_id || match.magnitude_id || match.tag || title}-${index}`}
        type="button"
        className={`phyxio-agent-local-match phyxio-agent-local-match--${match.type || "resource"}`}
        onClick={() => handleLocalMatchClick(match)}
      >
        <span className="phyxio-agent-local-match__type">
          {getLocalMatchTypeLabel(match)}
        </span>
        <span className="phyxio-agent-local-match__title">
          {symbol ? <InlineMath math={symbol} settings={{ strict: false }} /> : null}
          {symbol ? <span>{`: ${title}`}</span> : <span>{title}</span>}
        </span>
        {equation && (
          <span className="phyxio-agent-local-match__equation">
            <InlineMath math={equation} settings={{ strict: false }} />
          </span>
        )}
        {topicTitle && (
          <span className="phyxio-agent-local-match__topic">
            {topicTitle}
          </span>
        )}
      </button>
    );
  }

  const recommendedTabLabel = getRecommendedTabLabel(routeToTab);

  return (
    <section
      className={
        compact
          ? "phyxio-agent-panel phyxio-agent-panel--compact"
          : "phyxio-agent-panel"
      }
    >
      <header className="phyxio-agent-panel__header">
        <div>
          <h2 className="phyxio-agent-panel__title">
            {tr(lang, "Preguntar a Phyxio", "Ask Phyxio")}
          </h2>
          <p className="phyxio-agent-panel__subtitle">
            {tr(lang, "Asistente local del leaf actual.", "Local assistant for the current leaf.")}
          </p>
        </div>

        <span className="phyxio-agent-panel__badge">
          {tr(lang, "Agente local", "Local agent")}
        </span>
      </header>

      <form className="phyxio-agent-panel__form" onSubmit={handleAskAgent}>
        <label className="phyxio-agent-panel__label" htmlFor="phyxio-agent-level">
          {tr(lang, "Nivel", "Level")}
        </label>

        <select
          id="phyxio-agent-level"
          className="phyxio-agent-panel__select"
          value={currentLevel}
          onChange={(event) => setCurrentLevel(event.target.value)}
        >
          <option value={PHYXIO_AGENT_LEVELS.ESO}>ESO</option>
          <option value={PHYXIO_AGENT_LEVELS.BACHILLERATO}>{tr(lang, "Bachillerato", "High school")}</option>
          <option value={PHYXIO_AGENT_LEVELS.UNIVERSIDAD}>{tr(lang, "Universidad", "University")}</option>
          <option value={PHYXIO_AGENT_LEVELS.EXTRACURRICULAR}>
            Extracurricular
          </option>
        </select>

        <label className="phyxio-agent-panel__label" htmlFor="phyxio-agent-mode">
          {tr(lang, "Modo", "Mode")}
        </label>

        <select
          id="phyxio-agent-mode"
          className="phyxio-agent-panel__select"
          value={currentMode}
          onChange={(event) => {
            setCurrentMode(event.target.value);
            setSelectedFormulaId("");
            setSelectedMagnitudeId("");
            setSelectedGraphType("");
          }}
        >
          <option value={PHYXIO_AGENT_MODES.AUTO}>{tr(lang, "Automatico", "Automatic")}</option>
          <option value={PHYXIO_AGENT_MODES.EXPLAIN}>{tr(lang, "Explicar", "Explain")}</option>
          <option value={PHYXIO_AGENT_MODES.CALCULATOR_GUIDE}>{tr(lang, "Guiar calculadora", "Guide calculator")}</option>
          <option value={PHYXIO_AGENT_MODES.FORMULA}>{tr(lang, "Formula", "Formula")}</option>
          <option value={PHYXIO_AGENT_MODES.MAGNITUDE}>{tr(lang, "Magnitud", "Magnitude")}</option>
          <option value={PHYXIO_AGENT_MODES.GRAPH}>{tr(lang, "Grafica", "Graph")}</option>
        </select>

        {currentMode === PHYXIO_AGENT_MODES.FORMULA && (
          <>
            <label
              className="phyxio-agent-panel__label"
              htmlFor="phyxio-agent-formula"
            >
              {tr(lang, "Formula", "Formula")}
            </label>

            <select
              id="phyxio-agent-formula"
              className="phyxio-agent-panel__select"
              value={selectedFormulaId}
              onChange={(event) => setSelectedFormulaId(event.target.value)}
            >
              <option value="">{tr(lang, "Selecciona una formula", "Select a formula")}</option>

              {availableFormulas.map((formula) => {
                const formulaLabel = toAgentDisplayText(
                  formula.nombre ||
                    formula.name ||
                    formula.title ||
                    formula.id,
                  formula.id,
                  lang
                );

                return (
                  <option key={formula.id} value={formula.id}>
                    {formulaLabel}
                  </option>
                );
              })}
            </select>
          </>
        )}

        {currentMode === PHYXIO_AGENT_MODES.MAGNITUDE && (
          <>
            <label
              className="phyxio-agent-panel__label"
              htmlFor="phyxio-agent-magnitude"
            >
              {tr(lang, "Magnitud", "Magnitude")}
            </label>

            <select
              id="phyxio-agent-magnitude"
              className="phyxio-agent-panel__select"
              value={selectedMagnitudeId}
              onChange={(event) => setSelectedMagnitudeId(event.target.value)}
            >
              <option value="">{tr(lang, "Selecciona una magnitud", "Select a magnitude")}</option>

              {availableMagnitudes.map((magnitude) => {
                const magnitudeLabel = toAgentDisplayText(
                  magnitude.nombre ||
                    magnitude.name ||
                    magnitude.title ||
                    magnitude.label ||
                    magnitude.symbol ||
                    magnitude.id,
                  magnitude.id,
                  lang
                );

                const magnitudeSymbol = toAgentDisplayText(
                  magnitude.symbol ||
                    magnitude.simbolo,
                  "",
                  lang
                );

                return (
                  <option key={magnitude.id} value={magnitude.id}>
                    {magnitudeSymbol
                      ? `${magnitudeLabel} (${magnitudeSymbol})`
                      : magnitudeLabel}
                  </option>
                );
              })}
            </select>
          </>
        )}

        {currentMode === PHYXIO_AGENT_MODES.GRAPH && (
          <>
            <label
              className="phyxio-agent-panel__label"
              htmlFor="phyxio-agent-graph"
            >
              {tr(lang, "Grafica", "Graph")}
            </label>

            <select
              id="phyxio-agent-graph"
              className="phyxio-agent-panel__select"
              value={selectedGraphType}
              onChange={(event) => setSelectedGraphType(event.target.value)}
            >
              <option value="">{tr(lang, "Todas las graficas disponibles", "All available graphs")}</option>

              {availableGraphs.map((graph, index) => {
                const graphType =
                  typeof graph === "string"
                    ? graph
                    : getGraphTypeFromGraph(graph) || `graph-${index}`;

                const graphLabel =
                  typeof graph === "string"
                    ? graph
                    : toAgentDisplayText(
                        graph.title || graph.label || graph.type || graph.id,
                        tr(lang, `Grafica ${index + 1}`, `Graph ${index + 1}`),
                        lang
                      );

                return (
                  <option key={`${graphType}-${index}`} value={graphType}>
                    {graphLabel}
                  </option>
                );
              })}
            </select>
          </>
        )}

        <textarea
          id="phyxio-agent-question"
          className="phyxio-agent-panel__textarea"
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder={tr(lang, "Ejemplo: Por que aumenta la aceleracion?", "Example: Why does acceleration increase?")}
          rows={4}
        />

        <button
          className="phyxio-agent-panel__button"
          type="submit"
          disabled={!canAsk}
        >
          {isAsking ? tr(lang, "Pensando...", "Thinking...") : tr(lang, "Preguntar", "Ask")}
        </button>
      </form>

      {error && (
        <div className="phyxio-agent-panel__error">
          {error}
        </div>
      )}

      {agentResponse && (
        <article className="phyxio-agent-answer">
          <header className="phyxio-agent-answer__header">
            <span className="phyxio-agent-answer__mode">
              Phyxio Agent
            </span>

            <span className="phyxio-agent-answer__confidence">
              {getConfidenceLabel(agentResponse.confidence)}
            </span>
          </header>

          {agentResponse.summary && (
            <h3 className="phyxio-agent-answer__title">
              {agentResponse.summary}
            </h3>
          )}

          {structuredResponse ? (
            renderStructuredResponse(structuredResponse)
          ) : (agentResponse.answer || agentResponse.explanation) && (
            <div className="phyxio-agent-answer__text">
              {(agentResponse.answer || agentResponse.explanation)
                .split("\n")
                .filter((paragraph) => paragraph.trim().length > 0)
                .map((paragraph) => renderExplanationParagraph(paragraph))}
            </div>
          )}

          {localMatches.length > 0 && (
            <div className="phyxio-agent-answer__block">
              <h3>{tr(lang, "Recursos locales relacionados", "Related local resources")}</h3>

              <div className="phyxio-agent-local-matches">
                {localMatches.map(renderLocalMatch)}
              </div>
            </div>
          )}

          {routeToTab?.tab && recommendedTabLabel && (
            <div className="phyxio-agent-answer__block">
              <h3>{tr(lang, "Tab recomendado", "Recommended tab")}</h3>

              <button
                type="button"
                className="phyxio-agent-tab-link"
                onClick={() => navigateToRecommendedTab(routeToTab)}
              >
                {tr(lang, "Ir a", "Go to")} {recommendedTabLabel}
              </button>
            </div>
          )}

          {relatedFormulaIds.length > 0 && !structuredResponse?.formulas?.length && (
            <div className="phyxio-agent-answer__block">
              <h3>{tr(lang, "Formulas relacionadas", "Related formulas")}</h3>

              <div className="phyxio-agent-answer__chips">
                {relatedFormulaIds.map((formulaId) => {
                  const formula = availableFormulas.find((item) => item.id === formulaId);

                  const formulaLabel = toAgentDisplayText(
                    formula?.nombre ||
                      formula?.name ||
                      formula?.title,
                    formulaId,
                    lang
                  );

                  const formulaEquation =
                    formula?.latex ||
                    formula?.equation ||
                    formula?.expression ||
                    null;

                  return (
                    <span
                      key={formulaId}
                      className="phyxio-agent-chip phyxio-agent-chip--formula"
                    >
                      {renderFormulaChipLabel({
                        formulaLabel,
                        formulaEquation,
                      })}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {relatedMagnitudeIds.length > 0 && !structuredResponse?.magnitudes?.length && (
            <div className="phyxio-agent-answer__block">
              <h3>{tr(lang, "Magnitudes relacionadas", "Related magnitudes")}</h3>

              <div className="phyxio-agent-answer__chips">
                {relatedMagnitudeIds.map((magnitudeId) => {
                  const magnitude = availableMagnitudes.find(
                    (item) => item.id === magnitudeId || item.symbol === magnitudeId
                  );

                  const magnitudeLabel = toAgentDisplayText(
                    magnitude?.nombre ||
                      magnitude?.name ||
                      magnitude?.title ||
                      magnitude?.label ||
                      magnitude?.symbol,
                    magnitudeId,
                    lang
                  );

                  const magnitudeSymbol = toAgentDisplayText(
                    magnitude?.symbol ||
                      magnitude?.simbolo ||
                      magnitude?.latex,
                    "",
                    lang
                  );

                  const magnitudeUnit = toAgentDisplayText(
                    magnitude?.unidad_si ||
                      magnitude?.unit_si ||
                      magnitude?.unit,
                    "",
                    lang
                  );

                  return (
                    <span
                      key={magnitudeId}
                      className="phyxio-agent-chip phyxio-agent-chip--magnitude"
                    >
                      {renderMagnitudeChipLabel({
                        magnitudeLabel,
                        magnitudeSymbol,
                        magnitudeUnit,
                      })}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {relatedGraphIds.length > 0 && (
            <div className="phyxio-agent-answer__block">
              <h3>{tr(lang, "Graficos relacionados", "Related graphs")}</h3>

              <div className="phyxio-agent-answer__chips">
                {relatedGraphIds.map((graphId, index) => {
                  const graph = availableGraphs.find((item) => {
                    if (typeof item === "string") return item === graphId;

                    return (
                      item?.id === graphId ||
                      item?.type === graphId ||
                      item?.graphType === graphId ||
                      item?.graph_id === graphId ||
                      toAgentDisplayText(item?.title, "", lang) === graphId
                    );
                  });

                  const graphLabel =
                    typeof graph === "string"
                      ? graph
                      : toAgentDisplayText(
                          graph?.title || graph?.label || graph?.type || graph?.id,
                          graphId,
                          lang
                        );

                  return (
                    <span
                      key={`${graphId}-${graphLabel}-${index}`}
                      className="phyxio-agent-chip phyxio-agent-chip--graph"
                    >
                      {graphLabel}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {agentResponse.next_step && (
            <div className="phyxio-agent-answer__block">
              <h3>{tr(lang, "Siguiente paso sugerido", "Suggested next step")}</h3>
              <p>{agentResponse.next_step}</p>
            </div>
          )}

          {suggestedQuestions.length > 0 && (
            <div className="phyxio-agent-answer__block">
              <h3>{tr(lang, "Preguntas utiles", "Useful questions")}</h3>

              <div className="phyxio-agent-answer__suggestions">
                {suggestedQuestions.map((suggestedQuestion) => (
                  <button
                    type="button"
                    key={suggestedQuestion}
                    className="phyxio-agent-suggestion"
                    onClick={() => handleSuggestedQuestion(suggestedQuestion)}
                  >
                    {suggestedQuestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {agentResponse.warnings?.length > 0 && (
            <details className="phyxio-agent-panel__warning">
              <summary>{tr(lang, "Detalles tecnicos", "Technical details")}</summary>
              <ul>
                {agentResponse.warnings.map((warning) => (
                  <li key={warning}>{warning}</li>
                ))}
              </ul>
            </details>
          )}
        </article>
      )}
    </section>
  );
}
