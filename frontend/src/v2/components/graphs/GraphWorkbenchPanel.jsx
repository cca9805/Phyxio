import React, { useEffect, useMemo, useState } from "react";
import Latex from "../shared/SafeLatex.jsx";
import { solveEquation } from "../../engine/solve.js";
import { create, all } from "mathjs";

const math = create(all);

function localize(value, lang = "es", fallback = "") {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") return value?.[lang] || value?.es || value?.en || fallback;
  return fallback;
}

function parseLocaleNumber(value) {
  if (value == null) return NaN;
  let text = String(value).trim();
  if (!text) return NaN;
  text = text.replace(/\s+/g, "");
  const hasComma = text.includes(",");
  const hasDot = text.includes(".");
  if (hasComma && hasDot) {
    const lastComma = text.lastIndexOf(",");
    const lastDot = text.lastIndexOf(".");
    const decimalSep = lastComma > lastDot ? "," : ".";
    const thousandsSep = decimalSep === "," ? "." : ",";
    text = text.split(thousandsSep).join("");
    if (decimalSep === ",") text = text.replace(",", ".");
  } else if (hasComma) {
    text = text.replace(",", ".");
  }
  const num = Number(text);
  return Number.isFinite(num) ? num : NaN;
}

function formatNumber(value, decimals = 5) {
  if (!Number.isFinite(value)) return "";
  return value.toFixed(decimals).replace(/\.?0+$/, "");
}

function extractSymbols(equation) {
  try {
    if (!equation || !String(equation).includes("=")) return [];
    const parts = String(equation).split("=");
    const zero = `(${parts[0]}) - (${parts[1]})`;
    const node = math.parse(zero);
    const symbols = new Set();
    const functionNames = new Set();
    node.traverse((n) => {
      if (n?.isFunctionNode) {
        const name = n.fn?.name;
        if (name) functionNames.add(String(name));
      }
    });
    node.traverse((n) => {
      if (!n?.isSymbolNode) return;
      const name = String(n.name || "");
      if (!name) return;
      if (functionNames.has(name)) return;
      if (typeof math[name] === "function" || typeof math[name] === "number") return;
      if (["e", "pi", "tau", "Infinity", "NaN"].includes(name)) return;
      symbols.add(name);
    });
    return Array.from(symbols);
  } catch {
    return [];
  }
}

function getMagnitudes(magnitudesDoc) {
  if (Array.isArray(magnitudesDoc)) return magnitudesDoc;
  if (Array.isArray(magnitudesDoc?.magnitudes)) return magnitudesDoc.magnitudes;
  if (Array.isArray(magnitudesDoc?.default?.magnitudes)) return magnitudesDoc.default.magnitudes;
  return [];
}

function getSymbol(dict, id) {
  return dict.find((item) => String(item?.id) === String(id))?.symbol || id;
}

function getLabel(dict, id, lang) {
  const found = dict.find((item) => String(item?.id) === String(id));
  return localize(found?.nombre || found?.name, lang, id);
}

function getUnit(dict, id) {
  const found = dict.find((item) => String(item?.id) === String(id));
  return found?.unidad_si || found?.si_unit || "";
}

function cardStyle(variant = "base") {
  const variants = {
    base: {
      background: "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(30,41,59,0.88))",
      border: "1px solid rgba(148,163,184,0.18)",
    },
    calc: {
      background: "linear-gradient(135deg, rgba(12,74,110,0.92), rgba(15,23,42,0.96))",
      border: "1px solid rgba(56,189,248,0.24)",
    },
    experiment: {
      background: "linear-gradient(135deg, rgba(67,56,202,0.20), rgba(15,23,42,0.96))",
      border: "1px solid rgba(129,140,248,0.26)",
    },
  };
  return {
    borderRadius: 18,
    padding: 16,
    color: "#e2e8f0",
    boxShadow: "0 18px 40px rgba(2,6,23,0.22)",
    ...variants[variant],
  };
}

function modeButtonStyle(active) {
  return {
    padding: "10px 14px",
    borderRadius: 999,
    border: `1px solid ${active ? "rgba(96,165,250,0.45)" : "rgba(148,163,184,0.18)"}`,
    background: active ? "rgba(59,130,246,0.20)" : "rgba(15,23,42,0.65)",
    color: active ? "#e0f2fe" : "#cbd5e1",
    fontWeight: 800,
    cursor: "pointer",
  };
}

export default function GraphWorkbenchPanel({
  lang = "es",
  formulasDoc,
  magnitudesDoc,
  sharedParams,
  mode,
  onModeChange,
  onApply,
}) {
  const text = {
    calculator: lang === "en" ? "Calculator" : "Calculadora",
    experiment: lang === "en" ? "Experiment" : "Experimento",
    formula: lang === "en" ? "Formula" : "Fórmula",
    target: lang === "en" ? "Target" : "Objetivo",
    inputs: lang === "en" ? "Inputs" : "Entradas",
    result: lang === "en" ? "Result" : "Resultado",
    source: lang === "en" ? "Current calculator state" : "Estado actual de calculadora",
    noCalc: lang === "en" ? "No prior calculation. The graph starts in experiment mode." : "Sin cálculo previo. El gráfico arranca en modo experimento.",
    apply: lang === "en" ? "Apply" : "Aplicar",
    run: lang === "en" ? "Compute and apply" : "Calcular y aplicar",
    usedValues: lang === "en" ? "Applied magnitudes" : "Magnitudes aplicadas",
    chooseFormula: lang === "en" ? "Choose formula" : "Elegir fórmula",
    enterData: lang === "en" ? "Enter the required values and press Enter or Apply." : "Introduce los valores requeridos y pulsa Enter o Aplicar.",
  };

  const formulas = useMemo(() => {
    if (Array.isArray(formulasDoc?.formulas)) return formulasDoc.formulas;
    if (Array.isArray(formulasDoc)) return formulasDoc;
    return [];
  }, [formulasDoc]);

  const magnitudes = useMemo(() => getMagnitudes(magnitudesDoc), [magnitudesDoc]);
  const defaultFormulaId = sharedParams?.__calc?.formulaId || formulasDoc?.ui?.default_formula || formulas[0]?.id || "";
  const [formulaId, setFormulaId] = useState(defaultFormulaId);
  const formula = useMemo(() => formulas.find((item) => String(item?.id) === String(formulaId)) || formulas[0] || null, [formulas, formulaId]);
  const rearrangements = useMemo(() => Array.isArray(formula?.rearrangements) ? formula.rearrangements.filter((item) => item?.target && item?.equation) : [], [formula]);
  const [target, setTarget] = useState(sharedParams?.__calc?.target || rearrangements[0]?.target || "");

  useEffect(() => {
    if (!formula) return;
    setFormulaId((prev) => (prev ? prev : String(formula.id)));
  }, [formula]);

  useEffect(() => {
    const calcFormulaId = sharedParams?.__calc?.formulaId;
    if (calcFormulaId) setFormulaId(calcFormulaId);
  }, [sharedParams?.__calc?.formulaId]);

  useEffect(() => {
    const calcTarget = sharedParams?.__calc?.target;
    setTarget(calcTarget || rearrangements[0]?.target || "");
  }, [sharedParams?.__calc?.target, rearrangements]);

  const activeRearrangement = useMemo(
    () => rearrangements.find((item) => String(item?.target) === String(target)) || rearrangements[0] || null,
    [rearrangements, target]
  );
  const neededInputs = useMemo(() => {
    if (!activeRearrangement?.equation) return [];
    return extractSymbols(activeRearrangement.equation).filter((id) => String(id) !== String(activeRearrangement.target));
  }, [activeRearrangement]);

  const [rawInputs, setRawInputs] = useState({});
  const [experimentResult, setExperimentResult] = useState(null);

  useEffect(() => {
    const next = {};
    for (const id of neededInputs) {
      const calcKnown = sharedParams?.__calc?.known?.[id];
      const sharedValue = sharedParams?.[id];
      const seed = Number.isFinite(calcKnown) ? calcKnown : parseLocaleNumber(sharedValue);
      next[id] = Number.isFinite(seed) ? String(seed) : "";
    }
    setRawInputs(next);
  }, [neededInputs, sharedParams]);

  const calcSummary = sharedParams?.__calc || null;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formula || !activeRearrangement) return;

    const payloadKnown = {};
    for (const id of neededInputs) {
      const num = parseLocaleNumber(rawInputs[id]);
      if (!Number.isFinite(num)) return;
      payloadKnown[id] = num;
    }

    const out = solveEquation({
      equation: activeRearrangement.equation,
      target: activeRearrangement.target,
      known: payloadKnown,
      constraints: Array.isArray(formula?.constraints) ? formula.constraints : [],
      latex: activeRearrangement.latex || formula?.latex,
      unit: getUnit(magnitudes, activeRearrangement.target),
    });

    setExperimentResult(out);
    if (!out?.ok) return;

    const raw = out.result?.[activeRearrangement.target];
    const numeric = typeof raw === "number" ? raw : parseLocaleNumber(raw);
    if (!Number.isFinite(numeric)) return;

    const patch = {
      ...payloadKnown,
      [activeRearrangement.target]: numeric,
      __calc: {
        source: "graph-workbench",
        ts: Date.now(),
        formulaId: String(formula?.id || ""),
        formulaTitle: localize(formula?.title, lang, String(formula?.id || "")),
        formulaLatex: String(activeRearrangement?.latex || formula?.latex || ""),
        formulaEquation: String(activeRearrangement?.equation || formula?.equation || ""),
        target: String(activeRearrangement.target || ""),
        result: numeric,
        needed: neededInputs,
        known: payloadKnown,
      },
    };

    onApply?.(patch);
    onModeChange?.("calculator");
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ ...cardStyle("base"), display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.72, fontWeight: 900 }}>
            {lang === "en" ? "GRAPH WORKBENCH" : "WORKBENCH DEL GRÁFICO"}
          </div>
          <div style={{ fontSize: 14, opacity: 0.88, marginTop: 4 }}>
            {calcSummary?.target ? text.source : text.noCalc}
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button type="button" style={modeButtonStyle(mode === "calculator")} onClick={() => onModeChange?.("calculator")}>
            {text.calculator}
          </button>
          <button type="button" style={modeButtonStyle(mode === "experiment")} onClick={() => onModeChange?.("experiment")}>
            {text.experiment}
          </button>
        </div>
      </div>

      {mode === "calculator" ? (
        <div style={cardStyle("calc")}>
          <div style={{ display: "grid", gap: 12 }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.7, fontWeight: 900 }}>{text.formula}</div>
              <div style={{ fontSize: 20, fontWeight: 900, marginTop: 4 }}>{calcSummary?.formulaTitle || localize(formula?.title, lang, "-")}</div>
              {(calcSummary?.formulaLatex || formula?.latex) ? (
                <div style={{ marginTop: 10, fontSize: 18 }}>
                  <Latex>{`$$${calcSummary?.formulaLatex || formula?.latex || ""}$$`}</Latex>
                </div>
              ) : null}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              <div style={cardStyle("base")}>
                <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.7, fontWeight: 900 }}>{text.target}</div>
                <div style={{ fontSize: 18, fontWeight: 900, marginTop: 6 }}>
                  <Latex>{`$${getSymbol(magnitudes, calcSummary?.target || target)}$`}</Latex>
                  {" · "}
                  {getLabel(magnitudes, calcSummary?.target || target, lang)}
                </div>
                <div style={{ marginTop: 8, fontSize: 24, fontWeight: 900, color: "#7dd3fc" }}>
                  {formatNumber(calcSummary?.result)} {getUnit(magnitudes, calcSummary?.target || target)}
                </div>
              </div>

              <div style={cardStyle("base")}>
                <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.7, fontWeight: 900 }}>{text.usedValues}</div>
                <div style={{ display: "grid", gap: 8, marginTop: 10 }}>
                  {Object.entries(calcSummary?.known || {}).map(([id, value]) => (
                    <div key={id} style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline" }}>
                      <div>
                        <Latex>{`$${getSymbol(magnitudes, id)}$`}</Latex>
                        {" · "}
                        <span>{getLabel(magnitudes, id, lang)}</span>
                      </div>
                      <strong>{formatNumber(value)} {getUnit(magnitudes, id)}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={cardStyle("experiment")}>
          <div style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontSize: 12, letterSpacing: 1, opacity: 0.7, fontWeight: 900 }}>{text.chooseFormula}</span>
                <select className="form-control" value={formula?.id || ""} onChange={(e) => setFormulaId(e.target.value)}>
                  {formulas.map((item) => (
                    <option key={item.id} value={item.id}>{localize(item.title, lang, item.id)}</option>
                  ))}
                </select>
              </label>

              <label style={{ display: "grid", gap: 6 }}>
                <span style={{ fontSize: 12, letterSpacing: 1, opacity: 0.7, fontWeight: 900 }}>{text.target}</span>
                <select className="form-control" value={target} onChange={(e) => setTarget(e.target.value)}>
                  {rearrangements.map((item) => (
                    <option key={item.target} value={item.target}>{getLabel(magnitudes, item.target, lang)}</option>
                  ))}
                </select>
              </label>
            </div>

            {activeRearrangement?.latex ? (
              <div style={cardStyle("base")}>
                <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.7, fontWeight: 900 }}>{text.formula}</div>
                <div style={{ marginTop: 10, fontSize: 18 }}>
                  <Latex>{`$$${activeRearrangement.latex}$$`}</Latex>
                </div>
              </div>
            ) : null}

            <div style={cardStyle("base")}>
              <div style={{ fontSize: 12, letterSpacing: 1, opacity: 0.7, fontWeight: 900 }}>{text.inputs}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 10, marginTop: 10 }}>
                {neededInputs.map((id) => (
                  <label key={id} style={{ display: "grid", gap: 6 }}>
                    <span style={{ fontSize: 13 }}>
                      <Latex>{`$${getSymbol(magnitudes, id)}$`}</Latex>
                      {" · "}
                      {getLabel(magnitudes, id, lang)}
                    </span>
                    <input
                      className="form-control"
                      value={rawInputs[id] || ""}
                      onChange={(e) => setRawInputs((prev) => ({ ...prev, [id]: e.target.value }))}
                      placeholder={getUnit(magnitudes, id)}
                    />
                  </label>
                ))}
              </div>
              <div style={{ fontSize: 12, opacity: 0.72, marginTop: 10 }}>{text.enterData}</div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <div>
                {experimentResult?.ok ? (
                  <div style={{ fontSize: 18, fontWeight: 900, color: "#c4b5fd" }}>
                    {text.result}: {formatNumber(experimentResult.result?.[activeRearrangement?.target])} {getUnit(magnitudes, activeRearrangement?.target)}
                  </div>
                ) : null}
              </div>
              <button type="submit" style={{ ...modeButtonStyle(true), padding: "12px 18px" }}>
                {text.run}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}