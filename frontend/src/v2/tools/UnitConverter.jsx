import React, { useEffect, useMemo, useRef, useState } from "react";
import "./UnitConverter.css";
import {
  UNIT_GROUPS,
  SI_PREFIXES,
  findGroup,
  findUnit,
  findPrefix,
  tempToKelvin,
  kelvinToTemp,
} from "./unitCatalog";

const STORAGE_KEY = "phyxio_unit_converter_v1";

/** Favoritos del conversor (UI), NO del catálogo */
const QUICK_PRESETS = [
  { id: "ms_to_s", label: "ms → s", groupId: "time", fromId: "ms", toId: "s", value: "1" },
  { id: "km_to_m", label: "km → m", groupId: "length", fromId: "km", toId: "m", value: "1" },
  { id: "cm_to_m", label: "cm → m", groupId: "length", fromId: "cm", toId: "m", value: "1" },
  { id: "kmh_to_mps", label: "km/h → m/s", groupId: "speed", fromId: "kmh", toId: "mps", value: "1" },
  { id: "g_to_kg", label: "g → kg", groupId: "mass", fromId: "g", toId: "kg", value: "1" },
  { id: "N_to_kN", label: "N → kN", groupId: "force", fromId: "N", toId: "kN", value: "1" },
];

function parseNumber(x) {
  const s = String(x ?? "").trim().replace(",", ".");
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

function formatNumber(x) {
  if (!Number.isFinite(x)) return "";
  const abs = Math.abs(x);
  if (abs !== 0 && (abs >= 1e6 || abs < 1e-4)) return x.toExponential(6);
  return String(Math.round(x * 1e6) / 1e6);
}

function unitLabel(u) {
  if (!u) return "";
  return `${u.label} (${u.symbol})`;
}

function safeLoadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

function safeSaveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // silent
  }
}

function PrefixSelect({ disabled, value, onChange, title }) {
  return (
    <select className="uc-input" value={value} onChange={onChange} disabled={disabled} title={title}>
      {SI_PREFIXES.map((p) => (
        <option key={p.id} value={p.id}>
          {p.label}{p.symbol ? ` (${p.symbol})` : ""}
        </option>
      ))}
    </select>
  );
}

export default function UnitConverter({ compact = false }) {
  const defaultGroupId = UNIT_GROUPS[0]?.id || "length";
  const defaultGroup = findGroup(defaultGroupId);
  const defaultFromId = defaultGroup?.units?.[0]?.id || "";
  const defaultToId = defaultGroup?.units?.[1]?.id || defaultFromId;

  const [groupId, setGroupId] = useState(defaultGroupId);
  const group = useMemo(() => findGroup(groupId), [groupId]);

  const [fromId, setFromId] = useState(defaultFromId);
  const [toId, setToId] = useState(defaultToId);

  const [fromPrefixId, setFromPrefixId] = useState("none");
  const [toPrefixId, setToPrefixId] = useState("none");

  const [input, setInput] = useState("1");

  const didInitRef = useRef(false);

  // Load persisted state ONCE
  useEffect(() => {
    const saved = safeLoadState();
    if (!saved) {
      didInitRef.current = true;
      return;
    }

    const savedGroup = findGroup(saved.groupId || defaultGroupId);

    const fromOk = savedGroup?.units?.some((u) => u.id === saved.fromId)
      ? saved.fromId
      : savedGroup?.units?.[0]?.id;

    const toOk = savedGroup?.units?.some((u) => u.id === saved.toId)
      ? saved.toId
      : (savedGroup?.units?.[1]?.id || savedGroup?.units?.[0]?.id);

    setGroupId(savedGroup?.id || defaultGroupId);
    setFromId(fromOk || savedGroup?.units?.[0]?.id || "");
    setToId(toOk || savedGroup?.units?.[0]?.id || "");

    setFromPrefixId(SI_PREFIXES.some((p) => p.id === saved.fromPrefixId) ? saved.fromPrefixId : "none");
    setToPrefixId(SI_PREFIXES.some((p) => p.id === saved.toPrefixId) ? saved.toPrefixId : "none");

    setInput(typeof saved.input === "string" ? saved.input : String(saved.input ?? "1"));

    didInitRef.current = true;
  }, [defaultGroupId]);

  // Cambio de grupo: asegurar ids válidos y reset de prefijos si es afín
  useEffect(() => {
    if (!didInitRef.current) return;

    const g = findGroup(groupId);
    if (!g) return;

    const fromExists = g.units?.some((u) => u.id === fromId);
    const toExists = g.units?.some((u) => u.id === toId);

    if (!fromExists) setFromId(g.units?.[0]?.id || "");
    if (!toExists) setToId(g.units?.[1]?.id || g.units?.[0]?.id || "");

    if (g.isAffine) {
      setFromPrefixId("none");
      setToPrefixId("none");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  // Persist
  useEffect(() => {
    if (!didInitRef.current) return;

    const t = setTimeout(() => {
      safeSaveState({
        groupId,
        fromId,
        toId,
        fromPrefixId,
        toPrefixId,
        input,
      });
    }, 200);

    return () => clearTimeout(t);
  }, [groupId, fromId, toId, fromPrefixId, toPrefixId, input]);

  const fromUnit = useMemo(() => findUnit(group, fromId), [group, fromId]);
  const toUnit = useMemo(() => findUnit(group, toId), [group, toId]);

  const fromPrefix = useMemo(() => findPrefix(fromPrefixId) || { factor: 1, symbol: "" }, [fromPrefixId]);
  const toPrefix = useMemo(() => findPrefix(toPrefixId) || { factor: 1, symbol: "" }, [toPrefixId]);

  const value = parseNumber(input);

  // Prefijos: si el grupo es temperatura (afín), NO.
  const groupPrefixable = typeof group?.siPrefixable === "boolean" ? group.siPrefixable : !group?.isAffine;

  const fromPrefixEnabled = !!(groupPrefixable && !group?.isAffine && (fromUnit?.siPrefixable !== false));
  const toPrefixEnabled = !!(groupPrefixable && !group?.isAffine && (toUnit?.siPrefixable !== false));

  useEffect(() => {
    if (!didInitRef.current) return;
    if (!fromPrefixEnabled && fromPrefixId !== "none") setFromPrefixId("none");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromPrefixEnabled]);

  useEffect(() => {
    if (!didInitRef.current) return;
    if (!toPrefixEnabled && toPrefixId !== "none") setToPrefixId("none");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toPrefixEnabled]);

  const result = useMemo(() => {
    if (!Number.isFinite(value)) return NaN;
    if (!group) return NaN;

    if (group.isAffine) {
      const k = tempToKelvin(value, fromId);
      return kelvinToTemp(k, toId);
    }

    const f1 = fromUnit?.factor;
    const f2 = toUnit?.factor;
    if (!Number.isFinite(f1) || !Number.isFinite(f2)) return NaN;

    const p1 = fromPrefixEnabled ? (fromPrefix?.factor ?? 1) : 1;
    const p2 = toPrefixEnabled ? (toPrefix?.factor ?? 1) : 1;

    const base = value * f1 * p1; // a unidad base del grupo
    return base / (f2 * p2);
  }, [value, group, fromId, toId, fromUnit, toUnit, fromPrefix, toPrefix, fromPrefixEnabled, toPrefixEnabled]);

  const swap = () => {
    setFromId(toId);
    setToId(fromId);
    setFromPrefixId(toPrefixId);
    setToPrefixId(fromPrefixId);
  };

  const reset = () => {
    setInput("1");
    setFromPrefixId("none");
    setToPrefixId("none");
  };

  const applyPreset = (p) => {
    const g = findGroup(p.groupId);
    setGroupId(g.id);

    const fromOk = g?.units?.some((u) => u.id === p.fromId) ? p.fromId : g?.units?.[0]?.id;
    const toOk = g?.units?.some((u) => u.id === p.toId) ? p.toId : (g?.units?.[1]?.id || g?.units?.[0]?.id);

    setFromId(fromOk || "");
    setToId(toOk || "");

    setFromPrefixId("none");
    setToPrefixId("none");
    setInput(String(p.value ?? "1"));
  };

  const summary = useMemo(() => {
    if (!Number.isFinite(value)) return null;
    if (!group) return null;

    const leftSym = group.isAffine
      ? (fromUnit?.symbol || "")
      : `${fromPrefixEnabled ? (fromPrefix?.symbol || "") : ""}${fromUnit?.symbol || ""}`;

    const rightSym = group.isAffine
      ? (toUnit?.symbol || "")
      : `${toPrefixEnabled ? (toPrefix?.symbol || "") : ""}${toUnit?.symbol || ""}`;

    return {
      left: `${formatNumber(value)} ${leftSym}`.trim(),
      right: `${formatNumber(result)} ${rightSym}`.trim(),
    };
  }, [value, result, group, fromUnit, toUnit, fromPrefix, toPrefix, fromPrefixEnabled, toPrefixEnabled]);

  if (!group) {
    return (
      <div className={`uc-page v2-page ${compact ? 'compact' : ''}`}>
        <div className="v2-card">
          <div className="muted">No se pudo cargar el catálogo de unidades.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`uc-page v2-page ${compact ? 'compact' : ''}`}>
      <div className="uc-header v2-header">
        <div className="uc-headerLeft">
          <h1 className="uc-title v2-title">Conversor</h1>
          <div className="uc-subtitle v2-subtitle">Prefijos SI, favoritos y conversiones rápidas</div>
        </div>

        <div className="uc-headerRight uc-chips">
          <div className="uc-chipCategory uc-chip">
            <div className="uc-chipValue">{group.label}</div>
          </div>

          <button type="button" className="v2-btn uc-btn" onClick={swap} title="Intercambiar">
            <i className="bi bi-arrow-left-right" /> Swap
          </button>

          <button type="button" className="v2-btn uc-btn" onClick={reset} title="Reset">
            <i className="bi bi-arrow-counterclockwise" /> Reset
          </button>
        </div>
      </div>

      <div className="v2-card uc-cardTop">
        <div className="uc-topGrid">
          <div className="muted uc-mutedSmall">Favoritos (1 click)</div>
          <div className="uc-presetRow">
            {QUICK_PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                className="uc-btn uc-btnPreset"
                onClick={() => applyPreset(p)}
                title={p.label}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="uc-grid2">
        <div className="v2-card">
          <div className="uc-left">
            <div className="uc-field">
              <div className="muted uc-mutedSmall">Tipo de magnitud</div>
              <select value={groupId} onChange={(e) => setGroupId(e.target.value)} className="uc-input">
                {UNIT_GROUPS.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="uc-mainRow">
              <div className="uc-col">
                <div className="muted uc-mutedSmall">De</div>

                <select className="uc-input" value={fromId} onChange={(e) => setFromId(e.target.value)}>
                  {group.units.map((u) => (
                    <option key={u.id} value={u.id}>
                      {unitLabel(u)}
                    </option>
                  ))}
                </select>

                <div className="uc-twoCols">
                  <div className="uc-field">
                    <div className="muted uc-mutedSmall">Prefijo SI</div>
                    <PrefixSelect
                      disabled={!fromPrefixEnabled}
                      value={fromPrefixId}
                      onChange={(e) => setFromPrefixId(e.target.value)}
                      title={
                        group.isAffine
                          ? "Temperatura no usa prefijos"
                          : fromPrefixEnabled
                          ? "Aplica prefijo SI"
                          : "Esta unidad no admite prefijos"
                      }
                    />
                  </div>

                  <div className="uc-field">
                    <div className="muted uc-mutedSmall">Valor</div>
                    <input
                      className="uc-input"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Introduce un valor…"
                      inputMode="decimal"
                    />
                  </div>
                </div>
              </div>

              <button type="button" className="v2-btn uc-btnSwap" onClick={swap} title="Intercambiar">
                <i className="bi bi-arrow-left-right" />
              </button>

              <div className="uc-col">
                <div className="muted uc-mutedSmall">A</div>

                <select className="uc-input" value={toId} onChange={(e) => setToId(e.target.value)}>
                  {group.units.map((u) => (
                    <option key={u.id} value={u.id}>
                      {unitLabel(u)}
                    </option>
                  ))}
                </select>

                <div className="uc-twoCols">
                  <div className="uc-field">
                    <div className="muted uc-mutedSmall">Prefijo SI</div>
                    <PrefixSelect
                      disabled={!toPrefixEnabled}
                      value={toPrefixId}
                      onChange={(e) => setToPrefixId(e.target.value)}
                      title={
                        group.isAffine
                          ? "Temperatura no usa prefijos"
                          : toPrefixEnabled
                          ? "Aplica prefijo SI"
                          : "Esta unidad no admite prefijos"
                      }
                    />
                  </div>

                  <div className="uc-field">
                    <div className="muted uc-mutedSmall">Resultado</div>
                    <div className="uc-input uc-resultBox">
                      <span className="uc-resultValue">{formatNumber(result)}</span>
                      <span className="muted uc-resultUnit">
                        {group.isAffine
                          ? (toUnit?.symbol || "")
                          : `${toPrefixEnabled ? (toPrefix?.symbol || "") : ""}${toUnit?.symbol || ""}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="muted uc-footNote">
              {Number.isFinite(value)
                ? group.isAffine
                  ? "Temperatura: conversión afín (no solo factor)."
                  : `Base interna: ${group.base}. Prefijos SI: activos en unidades prefijables.`
                : "Introduce un número válido (acepta coma decimal)."}
            </div>
          </div>
        </div>

        <div className="v2-card">
          <div className="uc-right">
            <div className="uc-rightTop">
              <div>
                <div className="muted uc-mutedSmall">Resumen</div>
                <div className="uc-rightTitle">{group.label}</div>
              </div>

              <div className="uc-chipBase v2-chip">
                <div className="uc-chipLabel">BASE:</div>
                <div className="uc-chipValue">{group.base}</div>
              </div>
            </div>

            <div className="uc-divider" />

            {summary ? (
              <div className="uc-summary">
                <div className="muted uc-mutedSmall">Conversión actual</div>

                <div className="v2-card uc-summaryCard">
                  <div className="uc-summaryInner">
                    <div className="uc-summaryLeft">{summary.left}</div>
                    <div className="muted uc-arrow">→</div>
                    <div className="uc-summaryRight">{summary.right}</div>
                  </div>
                </div>

                <div className="muted uc-tip">Tip: usa los favoritos arriba para conversiones típicas de ejercicios.</div>
              </div>
            ) : (
              <div className="muted uc-mutedSmall">Introduce un valor para ver el resumen.</div>
            )}

            <div className="uc-divider" />

            <div className="uc-status">
              <div className="muted uc-mutedSmall">Estado</div>
              <div className="uc-statusLines">
                <div>
                  <b>De:</b> {unitLabel(fromUnit)}{" "}
                  {!group.isAffine && fromPrefixEnabled ? `· prefijo ${fromPrefix?.symbol || "—"}` : ""}
                </div>
                <div>
                  <b>A:</b> {unitLabel(toUnit)}{" "}
                  {!group.isAffine && toPrefixEnabled ? `· prefijo ${toPrefix?.symbol || "—"}` : ""}
                </div>
                <div className="muted">
                  {group.isAffine
                    ? "Prefijos deshabilitados en temperatura."
                    : "Si una unidad no es prefijable, el prefijo se fuerza a —."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
