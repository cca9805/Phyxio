import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Latex from "./shared/SafeLatex.jsx";
import AngleConverterDetails from "../components/AngleConverterDetails.animated.jsx";
import { solveEquation } from "../engine/solve.js";
import { create, all } from "mathjs";
import { getUiLanguage } from "../utils/uiLanguage";

const math = create(all);

const UI_TEXT = {
  es: {
    markedNonCalculable: "Marcada como no calculable.",
    unsupportedEquation: "Esta formula usa una integral u otro operador no soportado por esta calculadora.",
    reasonReadOnly: "Formula de referencia en modo lectura (sin despeje operativo en esta calculadora).",
    reasonDescriptive: "Formula conceptual/descriptiva: requiere planteamiento adicional para calcular.",
    reasonInfo: "Formula informativa: no se evalua numericamente en esta vista.",
    reasonConceptual: "Formula conceptual: no se evalua numericamente en esta vista.",
    legendVariables: "Leyenda de variables",
    groupDefault: "Grupo",
    otherFormulas: "Otras formulas del tema",
    formulaNotCalculable: "Esta f\u00f3rmula no es calculable",
    selectTargetVariable: "Selecciona qu\u00e9 variable quieres despejar.",
    missingEquationOrTarget: "Falta equation o target.",
    missingValueOf: "Falta el valor de",
    stepFormula: "F\u00f3rmula",
    stepSubstitution: "Sustituci\u00f3n",
    stepResult: "Resultado",
    stepDefault: "Paso",
    formulas: "F\u00f3rmulas",
    calculator: "Calculadora",
    data: "Datos:",
    gravitySelector: "Selector de gravedad",
    enterG: "Introduce g",
    commaTip: "Consejo: puedes escribir con coma o punto.",
    useStandardG: "Usar G estandar",
    recommendedValue: "Valor recomendado",
    calculate: "Calcular",
    clear: "Limpiar",
    viewInterpretation: "Ver interpretación",
    result: "Resultado",
    viewResolutionSteps: "Ver pasos de la resoluci\u00f3n",
    error: "Error",
    cannotCalculate: "No se pudo calcular.",
    enterDataAndCalculate: "Introduce los datos necesarios y pulsa",
    custom: "Personalizada",
    earth: "Tierra",
    moon: "Luna",
    mercury: "Mercurio",
    venus: "Venus",
    mars: "Marte",
    jupiter: "J\u00fapiter",
    saturn: "Saturno",
    uranus: "Urano",
    neptune: "Neptuno",
  },
  en: {
    markedNonCalculable: "Marked as non-calculable.",
    unsupportedEquation: "This formula uses an integral or another operator that is not supported by this calculator.",
    reasonReadOnly: "Reference formula in read-only mode (no operational rearrangement in this calculator).",
    reasonDescriptive: "Conceptual/descriptive formula: additional setup is required to compute.",
    reasonInfo: "Informative formula: it is not numerically evaluated in this view.",
    reasonConceptual: "Conceptual formula: it is not numerically evaluated in this view.",
    legendVariables: "Variable legend",
    groupDefault: "Group",
    otherFormulas: "Other formulas in this topic",
    formulaNotCalculable: "This formula is not calculable",
    selectTargetVariable: "Select the variable you want to solve for.",
    missingEquationOrTarget: "Missing equation or target.",
    missingValueOf: "Missing value for",
    stepFormula: "Formula",
    stepSubstitution: "Substitution",
    stepResult: "Result",
    stepDefault: "Step",
    formulas: "Formulas",
    calculator: "Calculator",
    data: "Data:",
    gravitySelector: "Gravity selector",
    enterG: "Enter g",
    commaTip: "Tip: you can type with comma or dot.",
    useStandardG: "Use standard G",
    recommendedValue: "Recommended value",
    calculate: "Calculate",
    clear: "Clear",
    viewInterpretation: "View interpretation",
    result: "Result",
    viewResolutionSteps: "View solution steps",
    error: "Error",
    cannotCalculate: "Could not calculate.",
    enterDataAndCalculate: "Enter the required data and press",
    custom: "Custom",
    earth: "Earth",
    moon: "Moon",
    mercury: "Mercury",
    venus: "Venus",
    mars: "Mars",
    jupiter: "Jupiter",
    saturn: "Saturn",
    uranus: "Uranus",
    neptune: "Neptune",
  },
};

// ---------------------------
// Helpers de datos (fuente unica: magnitudes, fallback variables)
// ---------------------------

function humanLabel(v) {
  const raw = v?.name || v?.nombre || v?.id || "";
  const s = String(raw).replace(/_/g, " ").trim();
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
}


function unitOf(list, id) {
  const v = (Array.isArray(list) ? list : []).find((x) => x?.id === id);
  return v?.si_unit || v?.unidad_si || "";
}

function symbolOf(list, id) {
  const v = (Array.isArray(list) ? list : []).find((x) => x?.id === id);
  // symbol suele venir tipo "\\omega" o "v_{cm}" segun tu YAML
  return v?.symbol || v?.simbolo || id;
}

function renderVariableLabel(dict, id) {
  const symbol = symbolOf(dict, id);
  if (symbol) return <Latex>{`$${symbol}$`}</Latex>;
  const fallback = legendLabelOf(dict, id);
  return <>{fallback || id}</>;
}

function legendLabelOf(list, id) {
  const v = (Array.isArray(list) ? list : []).find((x) => x?.id === id);
  return humanLabel(v) || id;
}

// Angulos: detectamos por id tipico y/o por unidad en el diccionario
function isAngleVarId(id, dict) {
  const sid = String(id || "");
  const u = String(unitOf(dict || [], sid) || "").toLowerCase();
  if (u === "rad" || u === "radian" || u === "radianes") return true;
  return ["theta", "alpha", "phi"].includes(sid);
}

/**
 * Parseo de numeros "modo Espana"
 * - acepta coma decimal: "9,8"
 * - acepta espacios de miles: "12 500,3"
 * - intenta tolerar "12.500,3" (EU) y "12,500.3" (US) eligiendo el separador decimal mas a la derecha
 */
function parseLocaleNumber(v) {
  if (v == null) return NaN;
  let s = String(v).trim();
  if (!s) return NaN;

  // quitar espacios (miles con espacio)
  s = s.replace(/\s+/g, "");

  // si contiene coma y punto, tomamos como decimal el ultimo que aparezca
  const hasComma = s.includes(",");
  const hasDot = s.includes(".");
  if (hasComma && hasDot) {
    const lastComma = s.lastIndexOf(",");
    const lastDot = s.lastIndexOf(".");
    const decimalSep = lastComma > lastDot ? "," : ".";
    const thousandsSep = decimalSep === "," ? "." : ",";
    // elimina separadores de miles
    s = s.split(thousandsSep).join("");
    // normaliza decimal a punto
    if (decimalSep === ",") s = s.replace(",", ".");
  } else if (hasComma && !hasDot) {
    // solo coma -> decimal
    s = s.replace(",", ".");
  } else {
    // solo punto o ninguno -> tal cual
  }

  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

// Formato agradable: hasta 6 decimales, sin ceros finales, sin notacion rara si no hace falta
function formatNumberSmart(x, maxDecimals = 6) {
  if (!Number.isFinite(x)) return "";
  const abs = Math.abs(x);
  if ((abs > 0 && abs < 1e-6) || abs >= 1e9) return x.toExponential(4);
  const fixed = x.toFixed(maxDecimals);
  return fixed.replace(/\.?0+$/, "");
}

// Extrae simbolos (variables) de una ecuacion mathjs del tipo "x = x0 + v*t"
function extractSymbols(equation) {
  try {
    if (!equation) return [];
    const parts = equation.split("=");
    if (parts.length !== 2) return [];

    const zero = `(${parts[0]}) - (${parts[1]})`;
    const node = math.parse(zero);

    const symbols = new Set();
    const banned = new Set(["e", "pi", "tau", "Infinity", "NaN"]);
    const functionNames = new Set();

    node.traverse((n) => {
      if (!n?.isFunctionNode) return;
      const fnName = n.fn?.name;
      if (fnName) functionNames.add(String(fnName));
    });

    node.traverse((n) => {
      if (!n.isSymbolNode) return;
      const name = n.name;

      if (banned.has(name)) return;
      if (functionNames.has(name)) return;
      // excluye funciones/constantes conocidas por mathjs
      if (typeof math[name] === "function") return;
      if (typeof math[name] === "number") return;
      if (typeof math[name] === "boolean") return;

      symbols.add(name);
    });

    return Array.from(symbols);
  } catch {
    return [];
  }
}

function hasUnsupportedOperators(equation) {
  return /\bintegral\s*\(/i.test(String(equation || ""));
}

function toVarIdList(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((v) => (typeof v === "string" ? v : v?.id))
    .filter(Boolean)
    .map(String);
}

function getNonCalculableReasonText(reasonNode, lang = "es") {
  if (typeof reasonNode === "string") return reasonNode.trim();
  if (!reasonNode || typeof reasonNode !== "object" || Array.isArray(reasonNode)) return "";

  const preferred =
    lang === "en"
      ? reasonNode?.en ?? reasonNode?.es
      : reasonNode?.es ?? reasonNode?.en;

  return typeof preferred === "string" ? preferred.trim() : "";
}

function isGenericNonCalculablePlaceholder(reason = "") {
  const normalized = String(reason || "").trim().toLowerCase();
  return (
    normalized === "requires problem-specific boundary conditions." ||
    normalized === "requires problem-specific boundary conditions"
  );
}

function isFormulaMarkedNonCalculable(formula, lang = "es") {
  if (!formula) return false;
  const status = String(formula?.status || "").toLowerCase();
  const reason = getNonCalculableReasonText(formula?.motivo_no_calculable, lang);
  const hasOperationalRearrangements =
    Array.isArray(formula?.rearrangements) &&
    formula.rearrangements.some((r) => r?.target && r?.equation);

  // Compatibilidad con datasets inconsistentes:
  // status=calculable + despejes operativos debe calcularse.
  if (status === "calculable" && hasOperationalRearrangements) return false;

  // Si el contenido marca explícitamente una formula como calculable,
  // no debe bloquearse por motivos residuales heredados en YAML.
  if (formula?.calculable === true) return false;
  if (formula?.calculable === false) return true;

  // Ignora placeholder generico heredado cuando no hay otra señal de bloqueo real.
  if (isGenericNonCalculablePlaceholder(reason)) return false;
  if (reason) return true;
  if (Array.isArray(formula?.why_not) && formula.why_not.length > 0) return true;
  return status === "read_only" || status === "descriptive" || status === "info" || status === "conceptual";
}

function nonCalculableReason(formula, lang = "es", equation = "") {
  const t = UI_TEXT[lang] || UI_TEXT.es;
  if (!formula) return t.markedNonCalculable;
  if (hasUnsupportedOperators(equation)) return t.unsupportedEquation;
  const reason = getNonCalculableReasonText(formula?.motivo_no_calculable, lang);
  if (reason) return reason;
  if (Array.isArray(formula?.why_not) && formula.why_not.length > 0) {
    return formula.why_not.map((x) => String(x || "").trim()).filter(Boolean).join(" ");
  }
  const status = String(formula?.status || "").toLowerCase();
  if (status === "read_only") return t.reasonReadOnly;
  if (status === "descriptive") return t.reasonDescriptive;
  if (status === "info") return t.reasonInfo;
  if (status === "conceptual") return t.reasonConceptual;
  return t.markedNonCalculable;
}

// ---------------------------
// UI pieces
// ---------------------------

function FormulaLegend({ dict, symbolIds, title }) {
  const ids = Array.isArray(symbolIds) ? symbolIds : [];
  if (ids.length === 0) return null;
  const legendTitle = title || UI_TEXT.es.legendVariables;

  const byId = new Map((Array.isArray(dict) ? dict : []).map((m) => [String(m.id), m]));

  const seen = new Set();
  const ordered = ids
    .map(String)
    .filter((id) => id && !seen.has(id) && (seen.add(id), true));

  return (
    <div className="v2-formula-legend" style={{ marginTop: 10 }}>
      <div className="muted" style={{ fontWeight: 600, marginBottom: 6 }}>
        {legendTitle}
      </div>

      <div style={{ display: "grid", gap: 10 }}>
        {ordered.map((id) => {
          const m = byId.get(id) || {};
          const sym = m.symbol || m.simbolo || "";
          const nombreRaw = m.nombre || m.name || id;
          const nombre = String(nombreRaw).replace(/_/g, " ").trim();
          const nombrePretty = nombre ? nombre.charAt(0).toUpperCase() + nombre.slice(1) : id;
          const desc = m.descripcion || m.description || "";
          const unit = m.unidad_si || m.si_unit || "";

          return (
            <div key={id} style={{ display: "grid", gap: 2 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
                <span style={{ fontWeight: 800 }}>
                  {sym ? <Latex>{`$${sym}$`}</Latex> : id}
                </span>
                <span style={{ fontWeight: 700 }}>{nombrePretty}</span>
                {unit ? (
                  <span className="muted" style={{ fontSize: 12 }}>
                    ({unit})
                  </span>
                ) : null}
              </div>

              {desc ? <div className="muted">{desc}</div> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}



function FormulaCard({ active, title, latex, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`v2-formula-card ${active ? "active" : ""}`}
      style={{ width: "100%", textAlign: "left" }}
      aria-pressed={active}
    >
      <div className="v2-formula-title">{title}</div>
      {latex ? (
        <div className="v2-formula">
          <Latex>{`$$${latex}$$`}</Latex>
        </div>
      ) : null}
    </button>
  );
}

// Presets de gravedad
const GRAVITY_PRESETS = [
  { id: "custom", name: "Personalizada", g: null },
  { id: "earth", name: "Tierra", g: 9.8 },
  { id: "moon", name: "Luna", g: 1.62 },
  { id: "mercury", name: "Mercurio", g: 3.7 },
  { id: "venus", name: "Venus", g: 8.87 },
  { id: "mars", name: "Marte", g: 3.71 },
  { id: "jupiter", name: "J\u00fapiter", g: 24.79 },
  { id: "saturn", name: "Saturno", g: 10.44 },
  { id: "uranus", name: "Urano", g: 8.69 },
  { id: "neptune", name: "Neptuno", g: 11.15 },
];

const PHYS_CONSTANT_DEFAULTS = {
  G: "6.67430e-11",
  kB: "1.380649e-23",
  hbar: "1.054571817e-34",
  h: "6.62607015e-34",
  c: "299792458",
  NA: "6.02214076e23",
  R: "8.314462618",
  mu0: "1.25663706212e-6",
  eps0: "8.8541878128e-12",
};

const NON_TARGET_SYMBOLS = new Set([...Object.keys(PHYS_CONSTANT_DEFAULTS)]);

export default function CalculatorV2({
  formulasDoc,
  magnitudesDoc, // NUEVO (opcional): { magnitudes: [...] } desde magnitudes.yaml
  magnitudes,    // NUEVO (opcional): lista directa
  interpretationDoc,
  leafMeta,
  sharedParams,
  onSharedParamsChange,
  onOpenInterpretation,
}) {
  const lang = getUiLanguage();
  const t = UI_TEXT[lang] || UI_TEXT.es;
  const formulas = formulasDoc?.formulas || [];
  const variables = formulasDoc?.variables || [];
  const groups = Array.isArray(formulasDoc?.ui?.groups) ? formulasDoc.ui.groups : null;

  // Diccionario de leyendas: magnitudes primero, fallback a variables
  const dict = useMemo(() => {
    // intentos comunes de entrada
    const magList =
      (Array.isArray(magnitudes) && magnitudes) ||
      (Array.isArray(magnitudesDoc) && magnitudesDoc) ||
      (Array.isArray(magnitudesDoc?.magnitudes) && magnitudesDoc.magnitudes) ||
      (Array.isArray(magnitudesDoc?.default?.magnitudes) && magnitudesDoc.default.magnitudes) ||
      (Array.isArray(magnitudesDoc?.default) && magnitudesDoc.default) ||
      [];

    const varList = Array.isArray(variables) ? variables : [];

    // DEBUG util: si estas cayendo a variables, lo veras en consola
    const usingMagnitudes = magList.length > 0;
    if (!usingMagnitudes && varList.length > 0) {
      console.warn("[CalculatorV2] Leyenda usando formulasDoc.variables (fallback). Pasa magnitudes.yaml para nombre/descripcion.");
    }
    if (usingMagnitudes) {
      console.log("[CalculatorV2] Leyenda usando magnitudes.yaml:", magList.length);
    }

    const map = new Map();

    // magnitudes primero (fuente de verdad)
    for (const m of magList) {
      if (!m?.id) continue;
      map.set(String(m.id), { ...m, id: String(m.id) });
    }

    // variables solo para rellenar huecos (no deben pisar nombre/descripcion)
    for (const v of varList) {
      if (!v?.id) continue;
      const id = String(v.id);
      const prev = map.get(id) || {};
      map.set(id, {
        ...v,         // anade si_unit/symbol si faltasen
        ...prev,      // prev gana (magnitudes gana)
        id,
      });
    }

    return Array.from(map.values());
  }, [magnitudesDoc, magnitudes, variables]);

  const defaultFormulaId = formulasDoc?.ui?.default_formula || formulas[0]?.id;

  const [formulaId, setFormulaId] = useState(defaultFormulaId);
  const formula = useMemo(() => formulas.find((f) => f.id === formulaId), [formulas, formulaId]);

  useEffect(() => {
    if (!Array.isArray(formulas) || formulas.length === 0) return;
    const exists = formulas.some((f) => f?.id === formulaId);
    if (exists) return;
    const preferred = formulasDoc?.ui?.default_formula;
    const fallback = formulas.find((f) => f?.id === preferred)?.id || formulas[0]?.id;
    if (fallback) setFormulaId(fallback);
  }, [formulas, formulasDoc?.ui?.default_formula, formulaId]);

  const [target, setTarget] = useState("");
  const [known, setKnown] = useState({});
  const [result, setResult] = useState(null);

  // Unidad de entrada para angulos (por defecto grados)
  const [angleUnits, setAngleUnits] = useState({ theta: "deg", alpha: "deg", phi: "deg" });

  const gInputRef = useRef(null);
  const [gravityPresetId, setGravityPresetId] = useState(null);

  // Para evitar que sharedParams machaque lo que el usuario esta escribiendo
  const editingRef = useRef(false);
  const lastSeedKeyRef = useRef("");

  const reseedFromSharedParams = useCallback((sp) => {
    const seed = {};
    if (sp) {
      for (const [k, v] of Object.entries(sp)) {
        const n = typeof v === "number" ? v : parseLocaleNumber(v);
        if (Number.isFinite(n)) seed[k] = n;
      }
      // compat: si viene tMax pero no t
      if (seed.t == null && seed.tMax != null) seed.t = seed.tMax;
    }
    setKnown(seed);
  }, []);
  // A) Seed al cambiar de formula (solo por formula)
  useEffect(() => {
    const arr = Array.isArray(formula?.rearrangements) ? formula.rearrangements : [];
    setTarget(arr[0]?.target || "");
    setResult(null);
    setGravityPresetId(null);
    editingRef.current = false;

    reseedFromSharedParams(sharedParams);
    lastSeedKeyRef.current = JSON.stringify(sharedParams || {});
    // IMPORTANTE: NO sharedParams en deps
  }, [formulaId, formula, reseedFromSharedParams]);

  // B) Si cambian sharedParams (desde fuera), re-seed SOLO si no se edita
  useEffect(() => {
    const key = JSON.stringify(sharedParams || {});
    if (key === lastSeedKeyRef.current) return;        // nada nuevo
    if (editingRef.current) return;                    // el usuario esta tocando inputs

    reseedFromSharedParams(sharedParams);
    lastSeedKeyRef.current = key;
  }, [sharedParams, reseedFromSharedParams]);

  // C) Extraer el target natural (LHS) de la ecuacion base
  const baseLhs = useMemo(() => {
    const eq = String(formula?.equation || "").trim();
    if (!eq.includes("=")) return null;
    const lhs = eq.split("=")[0].trim();
    // Limpiamos posibles potencias simples tipo v^2 -> v
    return lhs.replace(/\^2$/, "").trim();
  }, [formula?.equation]);




  const rearrangements = useMemo(() => {
    const formulaLevel = Array.isArray(formula?.rearrangements) ? formula.rearrangements : [];
    const baseEq = String(formula?.equation || "").trim();
    
    let result = [];

    if (formulaLevel.length > 0) {
      // Si hay despejes en el YAML, los usamos como base
      result = formulaLevel.map(r => ({
        target: r.target,
        equation: r.equation || baseEq,
        latex: r.latex || formula?.latex || baseEq,
        constraints: r.constraints || [],
        variables: r.variables,
      }));
    } else if (baseEq) {
      // Auto-generacion si no hay nada
      let targets = toVarIdList(formula?.variables);
      if (!targets.length) targets = extractSymbols(baseEq);
      targets = targets.filter((id) => !NON_TARGET_SYMBOLS.has(String(id)));

      const seen = new Set();
      const uniqueTargets = targets.filter((id) => id && !seen.has(id) && (seen.add(id), true));
      result = uniqueTargets.map((id) => ({
        target: id,
        equation: baseEq, 
        latex: formula?.latex || baseEq,
      }));
    }

    // SIEMPRE asegurar que el miembro izquierdo (LHS) este presente si es calculable
    if (baseLhs && !NON_TARGET_SYMBOLS.has(baseLhs)) {
      if (!result.some(r => r.target === baseLhs)) {
          result.unshift({
            target: baseLhs,
            equation: baseEq,
            latex: formula?.latex || baseEq
          });
      }
    }

    return result;
  }, [formula, formulasDoc, formulas, baseLhs]);

  // Target seguro: valida que el target pertenezca a la formula actual
  const safeTarget = useMemo(() => {
    if (target && rearrangements.some(r => r.target === target)) return target;
    return rearrangements[0]?.target || "";
  }, [target, rearrangements]);

  // Despeje activo
  const activeRearr = useMemo(() => {
    return rearrangements.find((r) => r.target === safeTarget) || rearrangements[0] || null;
  }, [rearrangements, safeTarget]);

  // Usamos la ecuacion del despeje activo si existe; si no, fallback a la ecuacion base
  const equation = activeRearr?.equation || formula?.equation || "";


  // Inputs requeridos: simbolos de la ecuacion, filtrados por ids validos, excluyendo incognita
  const needed = useMemo(() => {
    let ids = extractSymbols(equation);
    if (!ids.length) ids = toVarIdList(activeRearr?.variables);
    if (!ids.length) ids = toVarIdList(formula?.variables);

    const seen = new Set();
    const filtered = ids
      .map(String)
      .filter((id) => !seen.has(id) && (seen.add(id), true));
    return safeTarget ? filtered.filter((id) => id !== safeTarget) : filtered;
  }, [equation, safeTarget, activeRearr, formula]);

  // Leyenda base: usa ecuacion base y filtra por ids validos
  const baseLegendIds = useMemo(() => {
    const eq = formula?.equation || formula?.rearrangements?.[0]?.equation || "";
    let ids = extractSymbols(eq);
    if (!ids.length) ids = toVarIdList(formula?.variables);
    return ids.map(String);
  }, [formula]);

  // Leyenda del despeje activo: incluye variable seleccionada + datos requeridos
  const rearrLegendIds = useMemo(() => {
    const seen = new Set();
    return [safeTarget, ...needed]
      .map(String)
      .filter((id) => id)
      .filter((id) => !seen.has(id) && (seen.add(id), true));
  }, [safeTarget, needed]);


  const hasEquation = Boolean(activeRearr?.equation || formula?.equation);

  const groupedFormulas = useMemo(() => {
    if (!groups) return null;
    const usedIds = new Set();
    const normalizedGroups = groups
      .map((g) => {
        const items = (g?.items || [])
          .map((id) => formulas.find((f) => f?.id === id))
          .filter(Boolean);
        for (const f of items) usedIds.add(f.id);
        return { title: g?.title || t.groupDefault, items };
      })
      .filter((g) => g.items.length > 0);

    const ungrouped = formulas.filter((f) => f?.id && !usedIds.has(f.id));
    if (ungrouped.length > 0) {
      normalizedGroups.push({
        title: t.otherFormulas,
        items: ungrouped,
      });
    }
    return normalizedGroups;
  }, [groups, formulas, t.groupDefault, t.otherFormulas]);

  // Formula no calculable
  const equationHasUnsupportedOperators = hasUnsupportedOperators(equation);
  const isNonCalculable = isFormulaMarkedNonCalculable(formula, lang) || equationHasUnsupportedOperators;
  const isNonCalculableReason = nonCalculableReason(formula, lang, equation);

  const canCompute =
    !isNonCalculable &&
    hasEquation &&
    safeTarget &&
    needed.length > 0 &&
    needed.every((k) => {
      const direct = parseLocaleNumber(known[k]);
      if (Number.isFinite(direct)) return true;

      // Fallback termodinamico: beta puede derivarse desde T y kB
      if (k === "beta") {
        const t = parseLocaleNumber(known.T);
        const kb = parseLocaleNumber(known.kB ?? PHYS_CONSTANT_DEFAULTS.kB);
        return Number.isFinite(t) && t !== 0 && Number.isFinite(kb);
      }
      return false;
    });

  // Si la formula requiere constantes fisicas conocidas (ej. G), las pre-rellena.
  useEffect(() => {
    if (!Array.isArray(needed) || !needed.length) return;
    setKnown((prev) => {
      let changed = false;
      const next = { ...prev };
      for (const id of needed) {
        const def = PHYS_CONSTANT_DEFAULTS[id];
        if (!def) continue;
        const cur = String(next[id] ?? "").trim();
        if (!cur) {
          next[id] = def;
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [needed]);

  const onCompute = () => {
    if (!formula) return;

    if (isNonCalculable) {
      setResult({ ok: false, error: t.markedNonCalculable });
      return;
    }

    const tSel = safeTarget;
    if (!tSel) {
      setResult({ ok: false, error: t.selectTargetVariable });
      return;
    }
    if (tSel !== target) setTarget(tSel);

    if (!activeRearr?.equation || !activeRearr?.target) {
      setResult({ ok: false, error: t.missingEquationOrTarget });
      return;
    }

    const knownPrepared = { ...known };
    for (const id of needed) {
      if (Number.isFinite(parseLocaleNumber(knownPrepared[id]))) continue;
      const def = PHYS_CONSTANT_DEFAULTS[id];
      if (def != null) {
        knownPrepared[id] = String(def);
      }
    }
    if (
      needed.includes("beta") &&
      !Number.isFinite(parseLocaleNumber(knownPrepared.beta))
    ) {
      const t = parseLocaleNumber(knownPrepared.T);
      const kb = parseLocaleNumber(knownPrepared.kB ?? PHYS_CONSTANT_DEFAULTS.kB);
      if (Number.isFinite(t) && t !== 0 && Number.isFinite(kb)) {
        knownPrepared.beta = String(1 / (kb * t));
      }
    }

    for (const k of needed) {
      const n = parseLocaleNumber(knownPrepared[k]);
      if (!Number.isFinite(n)) {
        setResult({ ok: false, error: `${t.missingValueOf} ${k}` });
        return;
      }
    }

    const payloadKnown = {};
    for (const [k, v] of Object.entries(knownPrepared)) {
      const n = parseLocaleNumber(v);
      if (!Number.isFinite(n)) continue;

      if (isAngleVarId(k, dict) && (angleUnits?.[k] ?? "deg") === "deg") {
        payloadKnown[k] = (n * Math.PI) / 180;
      } else {
        payloadKnown[k] = n;
      }
    }

    const out = solveEquation({
      equation: activeRearr.equation,
      target: tSel,
      known: payloadKnown,
      constraints: Array.isArray(formula?.constraints)
        ? formula.constraints
        : Array.isArray(activeRearr?.constraints)
          ? activeRearr.constraints
          : [],
      latex: activeRearr.latex || formula?.latex,
      unit: unitOf(dict, tSel),
    });

    setResult(out);

    // Sync con graficas (generico)
    if (out?.ok && onSharedParamsChange) {
      const raw = out.result?.[tSel];
      const num = typeof raw === "number" ? raw : parseLocaleNumber(raw);
      if (!Number.isFinite(num)) return;

      // Enviar el resultado calculado
      const paramsToSync = { [tSel]: num };
      
      // Tambien enviar todos los valores conocidos (inputs)
      for (const [k, v] of Object.entries(known)) {
        const n = parseLocaleNumber(v);
        if (Number.isFinite(n)) {
          paramsToSync[k] = n;
        }
      }
      
      // Metadatos del calculo para que los graficos muestren
      // la formula aplicada, variables y resultado.
      paramsToSync.__calc = {
        source: "calculator",
        ts: Date.now(),
        formulaId: String(formula?.id || ""),
        formulaTitle: String(formula?.title || ""),
        formulaLatex: String(activeRearr?.latex || formula?.latex || ""),
        formulaEquation: String(activeRearr?.equation || formula?.equation || ""),
        target: String(tSel || ""),
        result: num,
        needed: Array.isArray(needed) ? needed.map((x) => String(x)) : [],
        known: payloadKnown,
      };

      console.log("[CalculatorV2] Enviando a grafico:", JSON.stringify(paramsToSync, null, 2));
      onSharedParamsChange(paramsToSync);
      
      // Compatibilidad con cinematica
      if (tSel === "t") onSharedParamsChange({ tMax: num });
    }
  };

  // Resultado formateado
  const resultValue = useMemo(() => {
    if (!result?.ok) return null;
    const raw = result.result?.[safeTarget];
    const n = typeof raw === "number" ? raw : parseLocaleNumber(raw);
    if (!Number.isFinite(n)) return String(raw ?? "");
    return formatNumberSmart(n, 6);
  }, [result, safeTarget]);

  // Pasos de la resolucion
  const stepsToRender = useMemo(() => {
    if (!result?.ok) return null;

    if (Array.isArray(result.stepsRich) && result.stepsRich.length) {
      return result.stepsRich.map((s, i) => {
        const title =
          s.kind === "formula"
            ? t.stepFormula
            : s.kind === "substitution"
              ? t.stepSubstitution
              : s.kind === "result"
                ? t.stepResult
                : t.stepDefault;
        return { key: `rich-${i}`, title, latex: String(s.latex || "") };
      });
    }

    if (Array.isArray(result.steps) && result.steps.length) {
      const out = [];
      let currentTitle = null;

      for (let i = 0; i < result.steps.length; i++) {
        const st = result.steps[i];
        if (st?.type === "text") {
          const txt = String(st.value || "").replace(/:$/, "").trim();
          currentTitle = txt || currentTitle;
          continue;
        }
        if (st?.type === "latex") {
          out.push({
            key: `steps-${i}`,
            title: currentTitle || t.stepDefault,
            latex: String(st.value || ""),
          });
        }
      }

      return out.length ? out : null;
    }

    return null;
  }, [result, t.stepDefault, t.stepFormula, t.stepResult, t.stepSubstitution]);

  return (
    <div className="v2-grid-fill" style={{ gap: 12 }}>
      {/* Columna izquierda: lista de formulas */}
      <div className="v2-card">
        <div className="v2-card-title">{t.formulas}</div>

        {groupedFormulas && groupedFormulas.length ? (
          <div className="v2-formula-groups">
            {groupedFormulas.map((g) => {
              return (
                <div key={g.title} style={{ marginBottom: 14 }}>
                  <div className="muted" style={{ fontWeight: 700, marginBottom: 8, fontSize: 13 }}>
                    {g.title}
                  </div>

                  <div style={{ display: "grid", gap: 8 }}>
                    {g.items.map((f) => (
                      <FormulaCard
                        key={f.id}
                        active={f.id === formulaId}
                        title={f.title || f.id}
                        latex={f.latex}
                        onClick={() => setFormulaId(f.id)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ display: "grid", gap: 8 }}>
            {formulas.map((f) => (
              <FormulaCard
                key={f.id}
                active={f.id === formulaId}
                title={f.title || f.id}
                latex={f.latex}
                onClick={() => setFormulaId(f.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Columna derecha: despejes + inputs + resultado */}
      <div className="v2-card">
        <div className="v2-card-title">{formula?.title || t.calculator}</div>

        {/* Formula base (con leyenda) */}
        {formula?.latex ? (
          <div style={{ marginTop: 10 }}>
            {/* Motivo no calculable */}
            {isNonCalculable && (
              <div
                className="v2-card"
                style={{
                  marginTop: 12,
                  backgroundColor: "#fef3c7",
                  borderColor: "#f59e0b",
                  borderWidth: "2px",
                  animation: "fadeIn 0.3s ease-in",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div
                    style={{
                      backgroundColor: "#f59e0b",
                      color: "white",
                      borderRadius: "50%",
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "14px",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}
                  >
                    !
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#92400e", marginBottom: 4 }}>
                      {t.formulaNotCalculable}
                    </div>
                    <div style={{ color: "#92400e", fontSize: "0.9em" }}>
                      {isNonCalculableReason}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : null}

        {/* Despejes */}
        {rearrangements.length ? (
          <div style={{ marginTop: 10 }}>
            <div className="v2-grid-fill-inputs" style={{ gap: 8 }}>
              {rearrangements.map((r) => (
                <button
                  key={r.target}
                  type="button"
                  className={`btn btn-sm ${r.target === safeTarget ? "btn-primary" : "btn-light"}`}
                  onClick={() => {
                    setTarget(r.target);
                    setResult(null);

                    editingRef.current = false;
                    setGravityPresetId(null);
                    reseedFromSharedParams(sharedParams);
                  }}
                >
                  {renderVariableLabel(dict, r.target)}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {/* Inputs requeridos */}
        <div style={{ marginTop: 14 }}>
          {/* Despeje activo (con leyenda) */}
          {activeRearr?.latex ? (
            <div
              key={`active-rearr-${formula?.id || "formula"}-${safeTarget || "target"}`}
              style={{ marginBottom: 10 }}
            >
              <div className="v2-formula">
                <Latex>{`$$${activeRearr.latex}$$`}</Latex>
              </div>
              <FormulaLegend dict={dict} symbolIds={rearrLegendIds} title={t.legendVariables} />
            </div>
          ) : null}

          <div className="muted" style={{ fontWeight: 700, marginBottom: 6 }}>
            {t.data}
          </div>

          <div className="v2-grid-fill-inputs">
            {needed.map((id) => {
              const label = legendLabelOf(dict, id) || id;
              const unit = unitOf(dict, id);

              const isAngle = isAngleVarId(id, dict);
              const displayUnit = isAngle
                ? (angleUnits?.[id] ?? "deg") === "deg"
                  ? "\u00b0"
                  : "rad"
                : unit;

              const labelClean = String(label)
                .replace(/\s*\((?:rad|radianes?|deg|degrees?|grados?|\u00b0)\)\s*$/i, "")
                .trim();

              // Especial: gravedad
              if (id === "g") {
                const gValue = known.g ?? "";

                const matchedPresetId = (() => {
                  const n = parseLocaleNumber(gValue);
                  if (!Number.isFinite(n)) return "custom";
                  const found = GRAVITY_PRESETS.find((p) => p.g != null && Math.abs(p.g - n) < 1e-6);
                  return found?.id ?? "custom";
                })();

                return (
                  <div key={id} className="v2-card">
                    <div className="v2-card-title">
                      {labelClean}{" "}
                      <span className="muted" style={{ fontWeight: 400 }}>
                        {displayUnit ? `(${displayUnit})` : ""}
                      </span>
                    </div>

                    <div style={{ display: "grid", gap: 8 }}>
                      <select
                        className="form-select"
                        value={gravityPresetId ?? matchedPresetId}
                        onChange={(e) => {
                          const presetId = e.target.value;
                          setGravityPresetId(presetId);
                          setResult(null);

                          const p = GRAVITY_PRESETS.find((x) => x.id === presetId);
                          if (!p) return;

                          editingRef.current = true;

                          if (p.g == null) {
                            requestAnimationFrame(() => {
                              gInputRef.current?.focus();
                              gInputRef.current?.select?.();
                            });
                            return;
                          }

                          setKnown((prev) => ({ ...prev, g: String(p.g) }));
                          if (onSharedParamsChange) onSharedParamsChange({ g: p.g });
                        }}
                        aria-label={t.gravitySelector}
                      >
                        {GRAVITY_PRESETS.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.g == null ? t[p.id] : `${t[p.id]} (${p.g} m/s²)`}
                          </option>
                        ))}
                      </select>

                      <input
                        className="form-control"
                        ref={gInputRef}
                        value={gValue}
                        placeholder={t.enterG}
                        inputMode="decimal"
                        onChange={(e) => {
                          const val = e.target.value;
                          editingRef.current = true;
                          setGravityPresetId("custom");
                          setKnown((prev) => ({ ...prev, g: val }));
                          setResult(null);

                          const num = parseLocaleNumber(val);
                          if (!Number.isFinite(num)) return;
                          if (onSharedParamsChange) onSharedParamsChange({ g: num });
                        }}
                      />

                      <div className="muted" style={{ fontSize: 12 }}>
                        {t.commaTip}
                      </div>
                    </div>
                  </div>
                );
              }

              // Input normal
              if (id === "G") {
                return (
                  <div key={id} className="v2-card">
                    <div className="v2-card-title">
                      {labelClean}{" "}
                      <span className="muted" style={{ fontWeight: 400 }}>
                        {displayUnit ? `(${displayUnit})` : ""}
                      </span>
                    </div>

                    <div style={{ display: "grid", gap: 8 }}>
                      <input
                        className="form-control"
                        value={known[id] ?? PHYS_CONSTANT_DEFAULTS.G}
                        placeholder={PHYS_CONSTANT_DEFAULTS.G}
                        inputMode="decimal"
                        onChange={(e) => {
                          const val = e.target.value;
                          editingRef.current = true;
                          setKnown((prev) => ({ ...prev, [id]: val }));
                          setResult(null);
                        }}
                      />
                      <button
                        type="button"
                        className="btn btn-light btn-sm"
                        onClick={() => {
                          setKnown((prev) => ({ ...prev, G: PHYS_CONSTANT_DEFAULTS.G }));
                          setResult(null);
                        }}
                      >
                        {t.useStandardG}
                      </button>
                      <div className="muted" style={{ fontSize: 12 }}>
                        {t.recommendedValue}: 6.67430e-11 N*m^2/kg^2
                      </div>
                    </div>
                  </div>
                );
              }

              // Input normal
              return (
                <div key={id} className="v2-card">
                  <div className="v2-card-title">
                    {labelClean}{" "}
                    <span className="muted" style={{ fontWeight: 400 }}>
                      {displayUnit ? `(${displayUnit})` : ""}
                    </span>
                  </div>

                  <input
                    className="form-control"
                    value={known[id] ?? ""}
                    placeholder={id}
                    inputMode="decimal"
                    onChange={(e) => {
                      const val = e.target.value;

                      editingRef.current = true;
                      setKnown((prev) => ({ ...prev, [id]: val }));
                      setResult(null);

                      if (onSharedParamsChange) {
                        const num = parseLocaleNumber(val);
                        const unstable =
                          val === "" ||
                          val === "-" ||
                          val === "+" ||
                          /[\.,]\s*$/.test(val);

                        if (!unstable && Number.isFinite(num)) {
                          onSharedParamsChange({ [id]: num });
                          if (id === "t") onSharedParamsChange({ tMax: num });
                        }
                      }
                    }}
                  />

                  {isAngle ? (
                    <AngleConverterDetails
                      defaultFrom={(angleUnits?.[id] ?? "deg") === "deg" ? "deg" : "rad"}
                      defaultTo={(angleUnits?.[id] ?? "deg") === "deg" ? "rad" : "deg"}
                      decimalSeparator=","
                      onApply={({ valueString, unit }) => {
                        setKnown((prev) => ({ ...prev, [id]: valueString }));
                        setAngleUnits((prev) => ({ ...prev, [id]: unit }));
                        setResult(null);
                      }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Accion */}
        <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
          <button
            type="button"
            className="btn btn-primary"
            disabled={!formula || !safeTarget || !canCompute}
            onClick={onCompute}
          >
            {t.calculate}
          </button>

          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              editingRef.current = false;
              setKnown({});
              setResult(null);
              setGravityPresetId(null);
            }}
          >
            {t.clear}
          </button>
        </div>

        {/* Resultado */}
        <div style={{ marginTop: 14 }}>
          {result?.ok ? (
            <div className="v2-card">
              <div className="v2-card-title">{t.result}</div>
              <div style={{ fontSize: 16 }}>
                <strong>{renderVariableLabel(dict, safeTarget)}</strong> = <strong>{resultValue}</strong>{" "}
                {unitOf(dict, safeTarget)}
              </div>

              {stepsToRender ? (
                <div style={{ marginTop: 10 }}>
                  <details>
                    <summary style={{ cursor: "pointer" }}>{t.viewResolutionSteps}</summary>

                    <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
                      {stepsToRender.map((s) => (
                        <div
                          key={s.key}
                          style={{
                            padding: "10px 12px",
                            borderRadius: 12,
                            background: "rgba(0,0,0,0.04)",
                          }}
                        >
                          <div style={{ fontWeight: 600, marginBottom: 6 }}>{s.title}</div>
                          <Latex>{`$$${s.latex}$$`}</Latex>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>
              ) : null}
            </div>
          ) : result?.ok === false ? (
            <div className="v2-card">
              <div className="v2-card-title">{t.error}</div>
              <div>{result.error || t.cannotCalculate}</div>
            </div>
          ) : (
            <div className="muted" style={{ marginTop: 6 }}>
              {t.enterDataAndCalculate} <strong>{t.calculate}</strong>.
            </div>
          )}
        </div>
        {result?.ok && typeof onOpenInterpretation === "function" && (
          <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-start" }}>
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={onOpenInterpretation}
            >
              {t.viewInterpretation}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
