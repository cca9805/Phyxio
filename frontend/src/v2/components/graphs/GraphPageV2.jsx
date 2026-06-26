import React, { useEffect, useMemo, useState } from "react";
import { getInlineGraphInterpretation } from "../../utils/interpretationEngine.js";

/* ---------------------------
 * Helpers
 * --------------------------- */
export function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

/**
 * Input numérico "amigable con decimales"
 * - type="text" + inputMode="decimal" para permitir coma/punto y escritura intermedia ("1.", "1,")
 * - NO bloquea escritura por parseo
 */
export function NumInput({
  label,
  value,
  onChange,
  min,
  max,
  disabled,
  placeholder,
}) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <input
        className="form-control"
        type="text"
        inputMode="decimal"
        disabled={disabled}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        pattern="[0-9.,\\-+eE]*"
        aria-label={label}
      />
      {(typeof min === "number" || typeof max === "number") ? (
        <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
          {typeof min === "number" ? `min ${min}` : ""}
          {typeof min === "number" && typeof max === "number" ? " · " : ""}
          {typeof max === "number" ? `max ${max}` : ""}
        </div>
      ) : null}
    </div>
  );
}

function normalizeIncomingParams({ params, paramsFromCalculator, sharedParams }) {
  return params ?? paramsFromCalculator ?? sharedParams ?? undefined;
}

export default function GraphPageV2({
  title = "Gráficas",

  // nuevas/legacy entradas
  params,
  paramsFromCalculator,
  sharedParams,
  interpretationDoc,
  meta,
  lang = "es",
  onInterpretationContextChange,
  defaultParams,
  controls = [],
  compute,
  children,
}) {
  const [linked, setLinked] = useState(true);

  // Estado RAW: guarda strings mientras el usuario escribe (para no romper decimales)
  const [pRaw, setPRaw] = useState(() => {
    const seed = { ...(defaultParams || {}) };
    for (const c of controls) {
      const id = c.id;
      if (seed[id] == null) continue;
      if (typeof seed[id] === "number") seed[id] = String(seed[id]);
    }
    return seed;
  });

  const paramsIn = useMemo(
    () => normalizeIncomingParams({ params, paramsFromCalculator, sharedParams }),
    [params, paramsFromCalculator, sharedParams]
  );

  // Derivado numérico: lo que se le pasa al compute
  const pNum = useMemo(() => {
    const out = { ...(pRaw || {}) };

    for (const c of controls) {
      const id = c.id;
      const raw = pRaw?.[id];

      const fallback =
        typeof defaultParams?.[id] === "number"
          ? defaultParams[id]
          : toNum(defaultParams?.[id], NaN);

      const parsed = c.parser ? c.parser(raw, fallback) : toNum(raw, fallback);

      let v = Number.isFinite(parsed) ? parsed : fallback;
      if (!Number.isFinite(v)) v = NaN;

      const clamp = c.clamp !== false;
      if (clamp && Number.isFinite(v)) {
        if (typeof c.min === "number") v = Math.max(c.min, v);
        if (typeof c.max === "number") v = Math.min(c.max, v);
      }

      out[id] = v;
    }

    return out;
  }, [pRaw, controls, defaultParams]);

  // Sync desde calculadora si linked
  useEffect(() => {
    if (!linked) return;
    if (!paramsIn) return;

    setPRaw((prev) => {
      const next = { ...(prev || {}) };

      for (const c of controls) {
        const id = c.id;
        const rawFromCalc = paramsIn?.[id];
        if (rawFromCalc == null || rawFromCalc === "") continue;

        const fallback =
          typeof defaultParams?.[id] === "number"
            ? defaultParams[id]
            : toNum(defaultParams?.[id], NaN);

        const parsed = c.parser
          ? c.parser(rawFromCalc, fallback)
          : toNum(rawFromCalc, fallback);

        if (parsed != null && Number.isFinite(parsed)) {
          let v = parsed;

          const clamp = c.clamp !== false;
          if (clamp) {
            if (typeof c.min === "number") v = Math.max(c.min, v);
            if (typeof c.max === "number") v = Math.min(c.max, v);
          }

          next[id] = String(v);
        }
      }

      return next;
    });
  }, [linked, paramsIn, controls, defaultParams]);

  // Patch RAW (no bloquea)
  const patch = (id, rawValue) => {
    setPRaw((prev) => ({ ...(prev || {}), [id]: rawValue }));
  };

  const loadFromCalculator = () => {
    if (!paramsIn) return;

    setPRaw((prev) => {
      const next = { ...(prev || {}) };

      for (const c of controls) {
        const id = c.id;
        const rawFromCalc = paramsIn?.[id];
        if (rawFromCalc == null || rawFromCalc === "") continue;

        const fallback =
          typeof defaultParams?.[id] === "number"
            ? defaultParams[id]
            : toNum(defaultParams?.[id], NaN);

        const parsed = c.parser
          ? c.parser(rawFromCalc, fallback)
          : toNum(rawFromCalc, fallback);

        if (parsed != null && Number.isFinite(parsed)) {
          let v = parsed;

          const clamp = c.clamp !== false;
          if (clamp) {
            if (typeof c.min === "number") v = Math.max(c.min, v);
            if (typeof c.max === "number") v = Math.min(c.max, v);
          }

          next[id] = String(v);
        }
      }

      return next;
    });
  };

  const { data, extra } = useMemo(() => {
    try {
      if (typeof compute !== "function") return { data: [], extra: null };
      const out = compute(pNum, { pRaw, paramsIn, linked }) || {};
      return {
        data: Array.isArray(out.data) ? out.data : [],
        extra: out.extra ?? null,
      };
    } catch (e) {
      console.error("[GraphPageV2] compute error:", e);
      return { data: [], extra: { error: String(e?.message || e) } };
    }
  }, [compute, pNum, pRaw, paramsIn, linked]);

  const calc = paramsIn?.__calc || sharedParams?.__calc || null;
  const graphTarget = calc?.target || extra?.interpretationTarget || null;
  const graphValue = Number.isFinite(calc?.result)
    ? calc.result
    : (Number.isFinite(extra?.interpretationValue) ? extra.interpretationValue : null);

  useEffect(() => {
    if (typeof onInterpretationContextChange !== "function") return;

    onInterpretationContextChange({
      source: "coord",
      target: graphTarget,
      graph: {
        source: "coord",
        title,
        mode: linked ? "follow" : "experiment",
        followsCalculator: linked,
        target: graphTarget,
        value: graphValue,
        paramsIn: pNum,
        stateOut: extra?.graphState || {},
      },
      calc,
      lang,
    });
  }, [calc, extra, graphTarget, graphValue, lang, linked, onInterpretationContextChange, pNum, title]);

  const graphInterpretation = useMemo(() => {
    if (!interpretationDoc || !graphTarget) return null;

    return getInlineGraphInterpretation({
      interpretation: interpretationDoc,
      target: graphTarget,
      result: {
        value: graphValue,
        latex: calc?.formulaLatex || "",
      },
      inputs: calc?.known || pNum || {},
      formula: {
        id: calc?.formulaId || "",
        title: calc?.formulaTitle || "",
        equation: calc?.formulaEquation || "",
        latex: calc?.formulaLatex || "",
      },
      graphState: {
        ...(paramsIn || sharedParams || {}),
        ...(extra?.graphState || {}),
        ...pNum,
      },
      lang,
      extraContext: {
        leafId: meta?.id || "",
        ruta_relativa: meta?.ruta_relativa || "",
      },
    });
  }, [graphTarget, graphValue, interpretationDoc, calc, paramsIn, sharedParams, pNum, extra, lang, meta]);

  return (
    <div>
      {/* Card de parámetros */}
      <div className="v2-card">
        <div className="v2-card-title">Parámetros ({title})</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
          <button
            type="button"
            className={`btn btn-sm ${linked ? "btn-primary" : "btn-light"}`}
            onClick={() => setLinked(true)}
          >
            🔗 Seguir calculadora
          </button>
          <button
            type="button"
            className={`btn btn-sm ${!linked ? "btn-primary" : "btn-light"}`}
            onClick={() => setLinked(false)}
          >
            🧪 Modo experimento
          </button>

          {!linked ? (
            <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
              ↩️ Cargar desde calculadora
            </button>
          ) : null}
        </div>

        <div className="v2-grid-fill-inputs">
          {controls.map((c) => (
            <NumInput
              key={c.id}
              label={c.label}
              value={pRaw?.[c.id] ?? ""}
              onChange={(v) => patch(c.id, v)}
              min={c.min}
              max={c.max}
              disabled={linked}
              placeholder={c.placeholder}
            />
          ))}
        </div>

        {extra?.error ? (
          <div className="muted" style={{ marginTop: 10 }}>
            ⚠️ Error en el modelo: {extra.error}
          </div>
        ) : null}
      </div>

      {/* Render específico del tema */}
      {typeof children === "function"
        ? children({
            linked,
            setLinked,
            pRaw,
            setPRaw,
            pNum,
            patch,
            loadFromCalculator,
            data,
            extra,
            paramsIn,
          })
        : null}
              
      {/* Interpretación */}
      {graphInterpretation?.ok && graphInterpretation.flatMessages?.length > 0 && (
        <div className="v2-card" style={{ marginTop: 12 }}>
          <div className="v2-card-title">
            {lang === "en" ? "Graph reading" : "Lectura del gráfico"}
          </div>

          <div style={{ display: "grid", gap: 8 }}>
            {graphInterpretation.flatMessages.map((msg) => (
              <div key={msg.id || msg.text} className={`interp-msg interp-${msg.status || "info"}`}>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
