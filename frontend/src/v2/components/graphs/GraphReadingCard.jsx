import React, { useMemo } from "react";
import Latex from "../shared/SafeLatex.jsx";
import { getFullInterpretation } from "../../utils/interpretationEngine.js";
import { resolveSvgInterpretationTarget } from "../SVG/svgGrammar.js";

function sectionTitle(lang, key) {
  const labels = {
    summary: { es: "Resumen", en: "Summary" },
    physical_reading: { es: "Lectura física", en: "Physical reading" },
    graph_reading: { es: "Lectura gráfica", en: "Graph reading" },
    likely_errors: { es: "Errores probables", en: "Likely errors" },
  };
  return labels[key]?.[lang] || labels[key]?.es || key;
}

function loc(value, lang) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return (lang === "en" ? value?.en : value?.es) || value?.es || value?.en || "";
}

function locList(value, lang) {
  if (!value) return [];
  const raw = lang === "en" ? value?.en : value?.es;
  if (Array.isArray(raw)) return raw;
  if (Array.isArray(value)) return value;
  return [];
}

export default function GraphReadingCard({
  lang = "es",
  interpretationDoc,
  meta,
  sharedParams,
  graphInterpretationContext,
  graphMeta,
}) {
  const persistedGraphInterpretationContext =
    sharedParams?.__graphInterpretationContext && typeof sharedParams.__graphInterpretationContext === "object"
      ? sharedParams.__graphInterpretationContext
      : null;
  const effectiveGraphInterpretationContext =
    graphInterpretationContext?.graph
      ? graphInterpretationContext
      : (persistedGraphInterpretationContext?.graph ? persistedGraphInterpretationContext : null);
  const graphContext =
    effectiveGraphInterpretationContext?.graph
    || (sharedParams?.__graphContext && typeof sharedParams.__graphContext === "object" ? sharedParams.__graphContext : null);
  const selectedGraphTarget = effectiveGraphInterpretationContext?.selectedVector?.magnitudeId || null;
  const selectedGraphSymbol = effectiveGraphInterpretationContext?.selectedVector?.symbol || selectedGraphTarget || null;
  const graphHasExplicitFocus = Boolean(selectedGraphTarget);
  const calc = sharedParams?.__calc || null;
  const graphTarget = effectiveGraphInterpretationContext?.target || graphContext?.target || null;
  const graphDrivesInterpretation = graphHasExplicitFocus || Boolean(graphTarget);
  const resolvedTarget = resolveSvgInterpretationTarget({
    interpretationDoc,
    binding: graphContext,
    graphContext,
    selectedTarget: graphHasExplicitFocus ? selectedGraphTarget : graphTarget,
    calcTarget: calc?.target || null,
  });
  const target = resolvedTarget?.target || null;
  const sourceTarget = resolvedTarget?.sourceKey || target;
  const resultValue = graphDrivesInterpretation
    ? (graphContext?.stateOut?.[sourceTarget] ?? graphContext?.stateOut?.[target] ?? graphContext?.value ?? calc?.result)
    : (Number.isFinite(calc?.result) ? calc.result : graphContext?.value);
  const interpretationInputs = graphDrivesInterpretation
    ? (graphContext?.paramsIn || calc?.known || {})
    : (calc?.known || graphContext?.paramsIn || {});
  const interpretationFormula = {
    id: calc?.formulaId || "",
    title: graphDrivesInterpretation
      ? (graphContext?.formulaLabel || calc?.formulaTitle || "")
      : (calc?.formulaTitle || graphContext?.formulaLabel || ""),
    equation: calc?.formulaEquation || "",
    latex: calc?.formulaLatex || "",
  };

  const interpretation = useMemo(() => {
    if (!interpretationDoc || !target) return null;
    const interpretationArgs = {
      interpretation: interpretationDoc,
      target,
      result: {
        value: resultValue,
        latex: graphDrivesInterpretation ? (graphContext?.formulaLabel || "") : (calc?.formulaLatex || ""),
      },
      inputs: interpretationInputs,
      formula: interpretationFormula,
      graphState: {
        ...(sharedParams || {}),
        ...(graphContext?.paramsIn || {}),
        ...(graphContext?.stateOut || {}),
      },
      lang,
      extraContext: {
        leafId: meta?.id || "",
        ruta_relativa: meta?.ruta_relativa || "",
      },
    };

    return getFullInterpretation(interpretationArgs);
  }, [calc, graphContext, graphDrivesInterpretation, interpretationDoc, interpretationFormula, interpretationInputs, lang, meta, resultValue, sharedParams, target]);

  const focusLabel = graphHasExplicitFocus
    ? (lang === "en" ? "Focused from graph" : "Enfocado desde el gráfico")
    : (lang === "en" ? "Current target" : "Magnitud actual");

  const focusValueLabel = selectedGraphSymbol || target || (lang === "en" ? "No target" : "Sin objetivo");

  const focusSourceLabel = graphHasExplicitFocus
    ? (lang === "en" ? "Graph click" : "Click en gráfico")
    : (calc?.target ? (lang === "en" ? "Calculator" : "Calculadora") : (lang === "en" ? "Graph" : "Gráfico"));

  const relation       = loc(graphMeta?.relation, lang);
  const physicalReading = loc(graphMeta?.physicalReading, lang);
  const agentHints      = locList(graphMeta?.agentHints, lang);
  const commonMistakes  = locList(graphMeta?.commonMistakes, lang);
  const hasYamlContent  = relation || physicalReading || agentHints.length > 0 || commonMistakes.length > 0;

  const hasInterpretation = interpretation?.ok && interpretation.flatMessages?.length > 0;

  if (!hasYamlContent && !hasInterpretation) return null;

  const sectionsToShow = ["summary", "physical_reading", "graph_reading", "likely_errors"];

  return (
    <div
      style={{
        borderRadius: 18,
        padding: 16,
        border: "1px solid rgba(96,165,250,0.22)",
        background: "linear-gradient(135deg, rgba(10,18,38,0.96), rgba(12,74,110,0.78))",
        color: "#e2e8f0",
        boxShadow: "0 18px 40px rgba(2,6,23,0.20)",
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.72, fontWeight: 900 }}>
        {lang === "en" ? "GRAPH INTERPRETATION" : "INTERPRETACIÓN DEL GRÁFICO"}
      </div>

      <div
        style={{
          marginTop: 12,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 10,
          alignItems: "center",
          borderRadius: 14,
          padding: 12,
          background: graphHasExplicitFocus ? "rgba(30,41,59,0.72)" : "rgba(15,23,42,0.45)",
          border: graphHasExplicitFocus ? "1px solid rgba(52,211,153,0.35)" : "1px solid rgba(148,163,184,0.14)",
        }}
      >
        <div style={{ display: "grid", gap: 4 }}>
          <div style={{ fontSize: 11, letterSpacing: 0.8, opacity: 0.72, fontWeight: 900 }}>
            {focusLabel}
          </div>
          <div style={{ fontSize: 16, fontWeight: 900, color: graphHasExplicitFocus ? "#a7f3d0" : "#f8fafc" }}>
            {focusValueLabel}
          </div>
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            color: graphHasExplicitFocus ? "#6ee7b7" : "rgba(255,255,255,0.72)",
            padding: "6px 10px",
            borderRadius: 999,
            background: graphHasExplicitFocus ? "rgba(16,185,129,0.12)" : "rgba(148,163,184,0.12)",
          }}
        >
          {focusSourceLabel}
        </div>
      </div>

      {hasYamlContent && (
        <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
          {relation && (
            <div style={{ borderRadius: 14, background: "rgba(15,23,42,0.45)", border: "1px solid rgba(148,163,184,0.14)", padding: 12 }}>
              <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.72, fontWeight: 900, marginBottom: 6 }}>
                {lang === "en" ? "PHYSICAL RELATION" : "RELACIÓN FÍSICA"}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.6 }}>{relation}</div>
            </div>
          )}
          {physicalReading && (
            <div style={{ borderRadius: 14, background: "rgba(15,23,42,0.45)", border: "1px solid rgba(148,163,184,0.14)", padding: 12 }}>
              <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.72, fontWeight: 900, marginBottom: 6 }}>
                {lang === "en" ? "HOW TO READ THIS GRAPH" : "CÓMO LEER ESTE GRÁFICO"}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.6 }}>{physicalReading}</div>
            </div>
          )}
          {agentHints.length > 0 && (
            <div style={{ borderRadius: 14, background: "rgba(15,23,42,0.45)", border: "1px solid rgba(148,163,184,0.14)", padding: 12 }}>
              <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.72, fontWeight: 900, marginBottom: 6 }}>
                {lang === "en" ? "HINTS" : "PISTAS"}
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                {agentHints.slice(0, 3).map((h, i) => (
                  <div key={i} style={{ fontSize: 13, lineHeight: 1.55, opacity: 0.9 }}>• <Latex>{h}</Latex></div>
                ))}
              </div>
            </div>
          )}
          {commonMistakes.length > 0 && (
            <div style={{ borderRadius: 14, background: "rgba(67,20,20,0.35)", border: "1px solid rgba(239,68,68,0.22)", padding: 12 }}>
              <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.72, fontWeight: 900, marginBottom: 6, color: "#fca5a5" }}>
                {lang === "en" ? "COMMON MISTAKES" : "ERRORES FRECUENTES"}
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                {commonMistakes.slice(0, 3).map((m, i) => (
                  <div key={i} style={{ fontSize: 13, lineHeight: 1.55, color: "#fecaca" }}>⚠ <Latex>{m}</Latex></div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {hasInterpretation && (
        <div style={{ display: "grid", gap: 12, marginTop: hasYamlContent ? 16 : 12 }}>
          {sectionsToShow.map((key) => {
            const items = interpretation.sections?.[key] || [];
            if (!items.length) return null;
            return (
              <div key={key} style={{ borderRadius: 14, background: "rgba(15,23,42,0.45)", border: "1px solid rgba(148,163,184,0.14)", padding: 12 }}>
                <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.72, fontWeight: 900, marginBottom: 8 }}>
                  {sectionTitle(lang, key)}
                </div>
                <div style={{ display: "grid", gap: 8 }}>
                  {items.slice(0, key === "likely_errors" ? 2 : 3).map((msg) => (
                    <div key={msg.id || msg.text} style={{ fontSize: 14, lineHeight: 1.55 }}>
                      <Latex>{msg.text}</Latex>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
