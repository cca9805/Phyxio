import React, { useEffect, useMemo, useState } from "react";

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

/**
 * Normaliza el origen de parámetros:
 * - Preferimos "params" (nuevo estándar)
 * - Si no, aceptamos "paramsFromCalculator" (legacy)
 * - Si no, aceptamos "sharedParams" (algunas integraciones)
 */
function normalizeIncomingParams({ params, paramsFromCalculator, sharedParams }) {
  return params ?? paramsFromCalculator ?? sharedParams ?? undefined;
}

/* ---------------------------
 * GraphPageV2
 * --------------------------- */
/**
 * Props (compatibles):
 * - title: string
 * - params?: object
 * - paramsFromCalculator?: object
 * - sharedParams?: object
 * - defaultParams: object (defaults experimento)
 * - controls: array [{
 *     id, label,
 *     min?, max?,
 *     parser?: (raw, fallback) => number,
 *     clamp?: boolean,
 *     placeholder?
 *   }]
 * - compute: (pNum, ctx) => { data, extra? }
 * - children: (ctx) => ReactNode
 */
export default function GraphPageV2({
  title = "Gráficas",

  // nuevas/legacy entradas
  params,
  paramsFromCalculator,
  sharedParams,

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
            paramsIn, // normalizado (params/paramsFromCalculator/sharedParams)
          })
        : null}
    </div>
  );
}
