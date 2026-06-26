import React, { useEffect, useMemo, useRef, useState } from "react";
import "./UnitConverter.css";
import {
  UNIT_GROUPS,
  RESULT_PREFIXES,
  findGroup,
  findUnit,
  findResultPrefix,
  tempToKelvin,
  kelvinToTemp,
} from "./unitCatalog";

const STORAGE_KEY = "phyxio_unit_converter_v2";

const QUICK_PRESETS = [
  { id: "km_to_m", label: "km -> m", groupId: "length", fromId: "km", toId: "m", value: "1" },
  { id: "cm2_to_m2", label: "cm² -> m²", groupId: "area", fromId: "cm2", toId: "m2", value: "1" },
  { id: "g_to_kg", label: "g -> kg", groupId: "mass", fromId: "g", toId: "kg", value: "1" },
  { id: "lb_to_kg", label: "lb -> kg", groupId: "mass", fromId: "lb", toId: "kg", value: "1" },
  { id: "kmh_to_mps", label: "km/h -> m/s", groupId: "speed", fromId: "kmh", toId: "mps", value: "1" },
  { id: "gcm3_to_kgm3", label: "g/cm³ -> kg/m³", groupId: "density", fromId: "gcm3", toId: "kgm3", value: "1" },
];

function parseNumber(x) {
  const s = String(x ?? "").trim().replace(",", ".");
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

function formatDecimal(x, digits = 8) {
  if (!Number.isFinite(x)) return "";
  if (Object.is(x, -0)) return "0";
  const abs = Math.abs(x);
  if (abs !== 0 && abs < 1e-12) return x.toExponential(6);
  return new Intl.NumberFormat("es-ES", {
    maximumSignificantDigits: digits,
    useGrouping: false,
  }).format(x);
}

function formatScientificParts(x) {
  if (!Number.isFinite(x)) return { mantissa: "", exponent: "", times: "", e: "" };
  if (x === 0) return { mantissa: "0", exponent: "0", times: "0 x 10^0", e: "0e+0" };
  const [mantissaRaw, expRaw] = x.toExponential(6).split("e");
  const mantissa = String(Number(mantissaRaw));
  const exponentNumber = Number(expRaw);
  const exponent = `${exponentNumber >= 0 ? "+" : ""}${exponentNumber}`;
  return {
    mantissa,
    exponent,
    times: `${mantissa} x 10^${exponentNumber}`,
    e: `${mantissa}e${exponent}`,
  };
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
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function safeSaveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage may be unavailable.
  }
}

function getBaseValue({ value, group, fromId, fromUnit }) {
  if (!Number.isFinite(value) || !group) return NaN;
  if (group.isAffine) return tempToKelvin(value, fromId);
  const factor = fromUnit?.factor;
  return Number.isFinite(factor) ? value * factor : NaN;
}

function getTargetValue({ baseValue, group, toId, toUnit }) {
  if (!Number.isFinite(baseValue) || !group) return NaN;
  if (group.isAffine) return kelvinToTemp(baseValue, toId);
  const factor = toUnit?.factor;
  return Number.isFinite(factor) ? baseValue / factor : NaN;
}

function getAutoPrefix(group, baseValue) {
  const root = group?.resultRoot;
  if (!root || !Number.isFinite(baseValue) || baseValue === 0) return null;
  const candidates = RESULT_PREFIXES.filter((p) => Number.isFinite(p.factor));
  const scored = candidates
    .map((p) => {
      const value = baseValue / (root.factor * p.factor);
      const abs = Math.abs(value);
      const inReadableRange = abs >= 1 && abs < 1000;
      return { p, value, score: inReadableRange ? 0 : Math.abs(Math.log10(abs || 1)) };
    })
    .sort((a, b) => a.score - b.score);
  return scored[0]?.p || null;
}

function getDisplayedResult({ group, baseValue, targetValue, toUnit, resultPrefixId }) {
  if (!Number.isFinite(targetValue)) return { value: NaN, symbol: toUnit?.symbol || "", mode: "target" };
  if (group?.isAffine || !group?.resultRoot) {
    return { value: targetValue, symbol: toUnit?.symbol || "", mode: "target" };
  }

  const root = group.resultRoot;
  const selected = findResultPrefix(resultPrefixId);
  if (selected.id === "target") {
    return { value: targetValue, symbol: toUnit?.symbol || "", mode: "target" };
  }

  const prefix = selected.id === "auto" ? getAutoPrefix(group, baseValue) : selected;
  if (!prefix || !Number.isFinite(prefix.factor)) {
    return { value: targetValue, symbol: toUnit?.symbol || "", mode: "target" };
  }

  return {
    value: baseValue / (root.factor * prefix.factor),
    symbol: `${prefix.symbol}${root.symbol}`,
    mode: selected.id === "auto" ? "auto" : "prefix",
  };
}

function UnitSelect({ label, value, units, onChange }) {
  return (
    <div className="uc-field">
      <div className="muted uc-mutedSmall">{label}</div>
      <select className="uc-input" value={value} onChange={(e) => onChange(e.target.value)}>
        {units.map((u) => (
          <option key={u.id} value={u.id}>
            {unitLabel(u)}
          </option>
        ))}
      </select>
    </div>
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
  const [input, setInput] = useState("1");
  const [resultPrefixId, setResultPrefixId] = useState("target");
  const didInitRef = useRef(false);

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
      : savedGroup?.units?.[1]?.id || savedGroup?.units?.[0]?.id;

    setGroupId(savedGroup?.id || defaultGroupId);
    setFromId(fromOk || "");
    setToId(toOk || "");
    setInput(typeof saved.input === "string" ? saved.input : String(saved.input ?? "1"));
    setResultPrefixId(RESULT_PREFIXES.some((p) => p.id === saved.resultPrefixId) ? saved.resultPrefixId : "target");
    didInitRef.current = true;
  }, [defaultGroupId]);

  useEffect(() => {
    if (!didInitRef.current) return;
    const g = findGroup(groupId);
    if (!g) return;
    if (!g.units?.some((u) => u.id === fromId)) setFromId(g.units?.[0]?.id || "");
    if (!g.units?.some((u) => u.id === toId)) setToId(g.units?.[1]?.id || g.units?.[0]?.id || "");
    if (g.isAffine || !g.resultRoot) setResultPrefixId("target");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId]);

  useEffect(() => {
    if (!didInitRef.current) return;
    const t = setTimeout(() => {
      safeSaveState({ groupId, fromId, toId, input, resultPrefixId });
    }, 200);
    return () => clearTimeout(t);
  }, [groupId, fromId, toId, input, resultPrefixId]);

  const fromUnit = useMemo(() => findUnit(group, fromId), [group, fromId]);
  const toUnit = useMemo(() => findUnit(group, toId), [group, toId]);
  const value = parseNumber(input);

  const baseValue = useMemo(
    () => getBaseValue({ value, group, fromId, fromUnit }),
    [value, group, fromId, fromUnit]
  );
  const targetValue = useMemo(
    () => getTargetValue({ baseValue, group, toId, toUnit }),
    [baseValue, group, toId, toUnit]
  );
  const displayed = useMemo(
    () => getDisplayedResult({ group, baseValue, targetValue, toUnit, resultPrefixId }),
    [group, baseValue, targetValue, toUnit, resultPrefixId]
  );
  const scientific = useMemo(() => formatScientificParts(displayed.value), [displayed.value]);

  const swap = () => {
    setFromId(toId);
    setToId(fromId);
    setResultPrefixId("target");
  };

  const reset = () => {
    setInput("1");
    setResultPrefixId("target");
  };

  const applyPreset = (p) => {
    const g = findGroup(p.groupId);
    setGroupId(g.id);
    setFromId(g?.units?.some((u) => u.id === p.fromId) ? p.fromId : g?.units?.[0]?.id || "");
    setToId(g?.units?.some((u) => u.id === p.toId) ? p.toId : g?.units?.[1]?.id || g?.units?.[0]?.id || "");
    setInput(String(p.value ?? "1"));
    setResultPrefixId("target");
  };

  const summary = Number.isFinite(displayed.value)
    ? {
        left: `${formatDecimal(value)} ${fromUnit?.symbol || ""}`.trim(),
        right: `${formatDecimal(displayed.value)} ${displayed.symbol}`.trim(),
      }
    : null;

  if (!group) {
    return (
      <div className={`uc-page v2-page ${compact ? "compact" : ""}`}>
        <div className="v2-card">
          <div className="muted">No se pudo cargar el catalogo de unidades.</div>
        </div>
      </div>
    );
  }

  const resultPrefixDisabled = group.isAffine || !group.resultRoot;

  return (
    <div className={`uc-page v2-page ${compact ? "compact" : ""}`}>
      <div className="uc-header v2-header">
        <div className="uc-headerLeft">
          <h1 className="uc-title v2-title">Conversor</h1>
          <div className="uc-subtitle v2-subtitle">Unidades, escala del resultado y notacion cientifica</div>
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
          <div className="muted uc-mutedSmall">Favoritos</div>
          <div className="uc-presetRow">
            {QUICK_PRESETS.map((p) => (
              <button key={p.id} type="button" className="uc-btn uc-btnPreset" onClick={() => applyPreset(p)}>
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
                <UnitSelect label="De" value={fromId} units={group.units} onChange={setFromId} />

                <div className="uc-field">
                  <div className="muted uc-mutedSmall">Valor</div>
                  <input
                    className="uc-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Introduce un valor..."
                    inputMode="decimal"
                  />
                </div>
              </div>

              <button type="button" className="v2-btn uc-btnSwap" onClick={swap} title="Intercambiar">
                <i className="bi bi-arrow-left-right" />
              </button>

              <div className="uc-col">
                <UnitSelect label="A" value={toId} units={group.units} onChange={setToId} />

                <div className="uc-field">
                  <div className="muted uc-mutedSmall">Presentar resultado</div>
                  <select
                    className="uc-input"
                    value={resultPrefixId}
                    onChange={(e) => setResultPrefixId(e.target.value)}
                    disabled={resultPrefixDisabled}
                    title={resultPrefixDisabled ? "Esta magnitud no admite presentacion con prefijo SI" : "Escala del resultado"}
                  >
                    {RESULT_PREFIXES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                        {p.symbol ? ` (${p.symbol}${group.resultRoot?.symbol || ""})` : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="uc-resultPanel">
              <div className="muted uc-mutedSmall">Resultado</div>
              <div className="uc-resultMain">
                <span className="uc-resultValue">{formatDecimal(displayed.value)}</span>
                <span className="uc-resultUnit">{displayed.symbol}</span>
              </div>
              <div className="uc-notationGrid">
                <div>
                  <span className="muted">Notacion cientifica:</span> {scientific.times} {displayed.symbol}
                </div>
                <div>
                  <span className="muted">Formato e:</span> {scientific.e} {displayed.symbol}
                </div>
              </div>
            </div>

            <div className="muted uc-footNote">
              {Number.isFinite(value)
                ? group.isAffine
                  ? "Temperatura: conversion afin; no se aplican prefijos."
                  : `Base interna: ${group.base}. Primero se eligen unidades; despues se decide como presentar el resultado.`
                : "Introduce un numero valido (acepta coma decimal)."}
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
                <div className="muted uc-mutedSmall">Conversion actual</div>
                <div className="v2-card uc-summaryCard">
                  <div className="uc-summaryInner">
                    <div className="uc-summaryLeft">{summary.left}</div>
                    <div className="muted uc-arrow">{"->"}</div>
                    <div className="uc-summaryRight">{summary.right}</div>
                  </div>
                </div>
                <div className="muted uc-tip">
                  El desplegable de presentacion cambia solo como se muestra el resultado; no cambia las unidades elegidas.
                </div>
              </div>
            ) : (
              <div className="muted uc-mutedSmall">Introduce un valor para ver el resumen.</div>
            )}

            <div className="uc-divider" />

            <div className="uc-status">
              <div className="muted uc-mutedSmall">Estado</div>
              <div className="uc-statusLines">
                <div>
                  <b>De:</b> {unitLabel(fromUnit)}
                </div>
                <div>
                  <b>A:</b> {unitLabel(toUnit)}
                </div>
                <div>
                  <b>Presentacion:</b> {findResultPrefix(resultPrefixId)?.label || "Unidad elegida"}
                </div>
                <div className="muted">
                  Usa la notacion cientifica para controlar el orden de magnitud antes de confiar en el numero decimal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
