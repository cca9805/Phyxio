import { useEffect, useMemo, useRef, useState, useCallback } from "react";

function toNum(v) {
  if (v === null || v === undefined || v === "") return null;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : null;
}

function normalizeToken(v) {
  return String(v ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u0394]/g, "d")
    .replace(/[\u03B8]/g, "theta")
    .replace(/[\u03C9]/g, "omega")
    .replace(/[\u03C6\u03D5]/g, "phi")
    .replace(/[\u00B0]/g, "deg")
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase();
}

function uniq(arr) {
  return Array.from(new Set((Array.isArray(arr) ? arr : []).filter(Boolean)));
}

function autoAliasesForKey(rawKey) {
  const key = String(rawKey ?? "");
  const low = key.toLowerCase();
  const out = [];

  if (key === "tMax" || low === "tmax") out.push("t", "t_max", "tmax");
  if (key === "phaseDeg" || low === "phasedeg" || low === "phideg") {
    out.push("phiDeg", "phi", "phase", "varphi", "phi0", "phi0Deg");
  }
  if (key === "phiDeg") out.push("phaseDeg", "phi", "varphi", "phase");
  if (key === "theta0Deg") out.push("theta0", "theta", "thetaMaxDeg");
  if (key === "omega") out.push("w");
  if (key === "omega0") out.push("w0", "omega_n");
  if (key === "A") out.push("amp", "amplitud", "amplitude");

  if (key.endsWith("Deg")) {
    const base = key.slice(0, -3);
    out.push(base, `${base}0`);
  }
  if (key.endsWith("Rad")) {
    const base = key.slice(0, -3);
    out.push(base);
  }

  return uniq(out);
}

function normalizeParamSource(params) {
  if (!params || typeof params !== "object") return {};

  const out = {};
  const sources = [
    params.sharedParams,
    params.values,
    params.known,
    params.result,
    params,
  ];

  for (const src of sources) {
    if (!src || typeof src !== "object" || Array.isArray(src)) continue;
    Object.assign(out, src);
  }

  return out;
}

function readSeedValue(paramsBag, normalizedIndex, keys) {
  for (const key of keys) {
    const exact = toNum(paramsBag?.[key]);
    if (exact !== null) return exact;

    const nk = normalizeToken(key);
    if (nk && normalizedIndex.has(nk)) {
      return normalizedIndex.get(nk);
    }
  }
  return null;
}

function shallowEqualObj(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  const ak = Object.keys(a);
  const bk = Object.keys(b);
  if (ak.length !== bk.length) return false;
  for (const k of ak) {
    if (a[k] !== b[k]) return false;
  }
  return true;
}

export function useExperimentParams({ params, schema }) {
  const [mode, setMode] = useState("follow"); // "follow" | "experiment"
  const [local, setLocal] = useState({});

  const paramsBag = useMemo(() => normalizeParamSource(params), [params]);
  const normalizedIndex = useMemo(() => {
    const map = new Map();
    for (const [k, v] of Object.entries(paramsBag)) {
      const n = toNum(v);
      if (n === null) continue;
      const nk = normalizeToken(k);
      if (!nk) continue;
      if (!map.has(nk)) map.set(nk, n);
    }
    return map;
  }, [paramsBag]);

  const schemaSig = useMemo(() => {
    const s = Array.isArray(schema) ? schema : [];
    return JSON.stringify(
      s.map((x) => ({
        key: x?.key ?? "",
        aliases: Array.isArray(x?.aliases) ? x.aliases : [],
        def: x?.default ?? null,
      }))
    );
  }, [schema]);

  const seeded = useMemo(() => {
    const s = Array.isArray(schema) ? schema : [];
    const out = {};
    for (const item of s) {
      const keys = uniq([
        item.key,
        ...(item.aliases || []),
        ...autoAliasesForKey(item.key),
      ]);
      let val = readSeedValue(paramsBag, normalizedIndex, keys);
      if (val === null) val = item.default ?? null;
      out[item.key] = val;
    }
    return out;
  }, [paramsBag, normalizedIndex, schemaSig, schema]);

  const lastAppliedSeedRef = useRef(null);

  useEffect(() => {
    if (mode !== "follow") return;
    if (shallowEqualObj(local, seeded)) return;
    if (lastAppliedSeedRef.current && shallowEqualObj(lastAppliedSeedRef.current, seeded)) return;

    lastAppliedSeedRef.current = seeded;
    setLocal(seeded);
  }, [seeded, mode, local]);

  const setValue = useCallback((key, value) => {
    setMode((m) => (m === "experiment" ? m : "experiment"));
    setLocal((prev) => {
      if (prev?.[key] === value) return prev;
      return { ...prev, [key]: value };
    });
  }, []);

  const resetToCalculator = useCallback(() => {
    lastAppliedSeedRef.current = seeded;
    setLocal(seeded);
    setMode("follow");
  }, [seeded]);

  const startExperiment = useCallback(() => {
    setMode("experiment");
  }, []);

  const effective = mode === "experiment" ? { ...seeded, ...local } : seeded;

  return {
    mode,
    setMode,
    startExperiment,
    resetToCalculator,
    local,
    setValue,
    effectiveParams: effective,
    seededFromCalculator: seeded,
  };
}
