import React, { useMemo } from "react";
import Latex from "./shared/SafeLatex.jsx";
import { getFullInterpretation } from "../utils/interpretationEngine.js";
import InterpretationLegendV2 from "./InterpretationLegendV2.jsx";

function localizeField(value, lang = "es") {
  if (value == null) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object") return value?.[lang] || value?.es || value?.en || "";
  return String(value);
}

function normalizeMagnitudesDoc(magnitudesDoc) {
  if (Array.isArray(magnitudesDoc)) return magnitudesDoc;
  if (Array.isArray(magnitudesDoc?.magnitudes)) return magnitudesDoc.magnitudes;
  if (Array.isArray(magnitudesDoc?.default?.magnitudes)) return magnitudesDoc.default.magnitudes;
  return [];
}

function formatNumberSmart(value, maxDecimals = 6) {
  if (!Number.isFinite(value)) return String(value ?? "");
  const abs = Math.abs(value);
  if ((abs > 0 && abs < 1e-6) || abs >= 1e9) return value.toExponential(4);
  return value.toFixed(maxDecimals).replace(/\.?0+$/, "");
}

export default function InterpretationPanelV2({
  title,
  interpretationDoc,
  formulasDoc,
  magnitudesDoc,
  sharedParams,
  graphInterpretationContext = null,
  meta,
  lang = "es",
  onNavigateToGraph,
}) {
  const calc = sharedParams?.__calc || null;
  const graphContext = graphInterpretationContext?.graph ? graphInterpretationContext : null;
  const selectedGraphTarget = graphInterpretationContext?.selectedVector?.magnitudeId || null;
  const graphHasExplicitFocus = Boolean(selectedGraphTarget);
  const effectiveTarget =
    graphHasExplicitFocus
      ? (selectedGraphTarget || graphContext?.target || graphContext?.graph?.target || null)
      : (calc?.target || graphContext?.target || graphContext?.graph?.target || null);
  const graphFocusedValue = effectiveTarget
    ? graphContext?.graph?.stateOut?.[effectiveTarget] ?? graphContext?.graph?.value
    : graphContext?.graph?.value;
  const effectiveResultValue = graphHasExplicitFocus
    ? (Number.isFinite(graphFocusedValue) ? graphFocusedValue : null)
    : (Number.isFinite(calc?.result)
        ? calc.result
        : (Number.isFinite(graphContext?.graph?.value) ? graphContext.graph.value : null));
  const effectiveInputs = graphHasExplicitFocus
    ? (graphContext?.graph?.paramsIn || {})
    : (calc?.known || graphContext?.graph?.paramsIn || {});
  const effectiveFormula = graphHasExplicitFocus
    ? {
        id: "",
        title: graphContext?.graph?.formulaLabel || "",
        equation: "",
        latex: "",
      }
    : {
        id: calc?.formulaId || "",
        title: calc?.formulaTitle || graphContext?.graph?.formulaLabel || "",
        equation: calc?.formulaEquation || "",
        latex: calc?.formulaLatex || "",
      };
  const effectiveGraphState = {
    ...(sharedParams || {}),
    ...(graphContext?.graph?.paramsIn || {}),
    ...(graphContext?.graph?.stateOut || {}),
  };
  const magnitudes = useMemo(() => normalizeMagnitudesDoc(magnitudesDoc), [magnitudesDoc]);

  const magnitudeMap = useMemo(() => {
    const out = new Map();
    for (const item of magnitudes) {
      if (!item?.id) continue;
      out.set(String(item.id), item);
    }
    return out;
  }, [magnitudes]);

  const interpretation = useMemo(() => {
    if (!interpretationDoc || !effectiveTarget) return null;

    return getFullInterpretation({
      interpretation: interpretationDoc,
      target: effectiveTarget,
      result: {
        value: effectiveResultValue,
        latex: effectiveFormula.latex || "",
      },
      inputs: effectiveInputs,
      formula: effectiveFormula,
      graphState: effectiveGraphState,
      lang,
      extraContext: {
        leafId: meta?.id || "",
        ruta_relativa: meta?.ruta_relativa || "",
      },
    });
  }, [
    interpretationDoc,
    effectiveTarget,
    effectiveResultValue,
    effectiveInputs,
    effectiveFormula,
    graphContext,
    effectiveGraphState,
    lang,
    meta,
  ]);

  const calcSummary = useMemo(() => {
    if (!effectiveTarget) return null;

    const targetInfo = magnitudeMap.get(String(effectiveTarget)) || null;
    const targetSymbol = targetInfo?.symbol || effectiveTarget;
    const targetLabel =
      localizeField(targetInfo?.nombre || targetInfo?.name || effectiveTarget, lang) || effectiveTarget;
    const targetUnit = targetInfo?.unidad_si || targetInfo?.si_unit || "";
    const resultValue = formatNumberSmart(effectiveResultValue);

    const knownEntries = Object.entries(effectiveInputs)
      .filter(([, value]) => Number.isFinite(value))
      .map(([id, value]) => {
        const info = magnitudeMap.get(String(id)) || null;
        return {
          id,
          symbol: info?.symbol || id,
          unit: info?.unidad_si || info?.si_unit || "",
          value: formatNumberSmart(value),
        };
      });

    return {
      targetSymbol,
      targetLabel,
      targetUnit,
      resultValue,
      knownEntries,
      origin: graphHasExplicitFocus ? "graph" : (calc?.target ? "calculator" : "graph"),
    };
  }, [calc, effectiveInputs, effectiveResultValue, effectiveTarget, graphHasExplicitFocus, magnitudeMap, lang]);

  if (!interpretation?.ok) {
    // Distinguir entre "no hay cálculo" y "hay cálculo pero sin target en interpretacion.yaml"
    const noCalc = !effectiveTarget;
    const noTarget = effectiveTarget && !interpretation;
    const calcButFailed = effectiveTarget && interpretation && !interpretation.ok;
    const msg = noCalc
      ? (lang === "en" ? "Calculate a result first or interact with a graph." : "Calcula primero un resultado o interactúa con un gráfico.")
      : (lang === "en"
          ? `No interpretation available for variable "${effectiveTarget}".`
          : `No hay interpretación disponible para la variable "${effectiveTarget}".`);
    return (
      <div className="v2-card">
        <h1>{title}</h1>
        <p>{msg}</p>
        {(calcButFailed || noTarget) && interpretation?.errors?.length > 0 && (
          <p className="muted" style={{ fontSize: 12 }}>{interpretation.errors.join(" ")}</p>
        )}
        <InterpretationLegendV2 lang={lang} />
      </div>
    );
  }

  return (
    <div className="v2-card">
      <h1>{title}</h1>

      {calcSummary ? (
        <div className="interp-calc-summary">
          <div className="interp-calc-summary-title">
            {lang === "en" ? "Current calculation" : "Cálculo actual"}
          </div>

          {calc?.formulaLatex ? (
            <div className="v2-formula" style={{ marginTop: 8 }}>
              <Latex>{`$$${calc.formulaLatex}$$`}</Latex>
            </div>
          ) : null}

          <div className="interp-calc-summary-grid">
            <div className="interp-calc-summary-item">
              <span>{lang === "en" ? "Focused variable" : "Variable enfocada"}</span>
              <strong>
                <Latex>{`$${calcSummary.targetSymbol}$`}</Latex>
                {" · "}
                {calcSummary.targetLabel}
              </strong>
            </div>

            <div className="interp-calc-summary-item">
              <span>{lang === "en" ? "Current value" : "Valor actual"}</span>
              <strong>
                <Latex>{`$${calcSummary.targetSymbol}$`}</Latex>
                {" = "}
                {calcSummary.resultValue}
                {calcSummary.targetUnit ? ` ${calcSummary.targetUnit}` : ""}
              </strong>
            </div>

            <div className="interp-calc-summary-item">
              <span>{lang === "en" ? "Origin" : "Origen"}</span>
              <strong>
                {calcSummary.origin === "calculator"
                  ? (lang === "en" ? "Calculator" : "Calculadora")
                  : (lang === "en" ? "Graph context" : "Contexto del gráfico")}
              </strong>
            </div>
          </div>

          {calcSummary.knownEntries.length > 0 ? (
            <div className="interp-calc-inputs">
              <div className="interp-calc-inputs-title">
                {lang === "en" ? "Data used" : "Datos usados"}
              </div>
              <div className="interp-calc-inputs-grid">
                {calcSummary.knownEntries.map((entry) => (
                  <div key={entry.id} className="interp-calc-chip">
                    <strong><Latex>{`$${entry.symbol}$`}</Latex></strong>
                    <span>{entry.value}{entry.unit ? ` ${entry.unit}` : ""}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      <InterpretationLegendV2 lang={lang} />

      {Object.keys(interpretation.sectionTitles || interpretation.sections || {}).map((sectionKey) => {
        const items = interpretation.sections?.[sectionKey] || [];

        return (
          <section key={sectionKey} style={{ marginBottom: 20 }}>
            <h2>{interpretation.sectionTitles?.[sectionKey] || sectionKey}</h2>
            <div style={{ display: "grid", gap: 8 }}>
              {items.length > 0 ? (
                items.map((msg) => (
                  <div key={msg.id || msg.text} className={`interp-msg interp-${msg.status || "info"}`}>
                    <Latex>{msg.text}</Latex>
                  </div>
                ))
              ) : (
                <div className="interp-msg interp-info">
                  {lang === "en" ? "No messages for this section with current data." : "Sin mensajes para esta seccion con los datos actuales."}
                </div>
              )}
            </div>
            {sectionKey === "graph_reading" && onNavigateToGraph && (
              <button
                type="button"
                className="interp-graph-btn"
                onClick={onNavigateToGraph}
              >
                {lang === "en" ? "View graph ->" : "Ver grafico ->"}
              </button>
            )}
          </section>
        );
      })}
    </div>
  );
}
