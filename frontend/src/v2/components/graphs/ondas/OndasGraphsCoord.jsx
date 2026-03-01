import React, { useMemo, useEffect, useState, useCallback } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import {
  resolveOndaModelForLeaf,
  toNum,
  getOndaParamAliases,
  withOndaDerivedParams,
} from "./ondasModels";
import { getOndaLeafProfile } from "./leafProfiles";

const fmt = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const VAR_COLORS = ["#60a5fa", "#34d399", "#f59e0b", "#f472b6", "#a78bfa", "#22d3ee", "#f87171", "#84cc16"];

function uniq(arr) {
  return Array.from(new Set((Array.isArray(arr) ? arr : []).filter(Boolean)));
}

function normalizeDoc(doc) {
  if (!doc) return null;
  if (doc?.default && typeof doc.default === "object") return doc.default;
  return doc;
}

function fallbackUnit(id) {
  const key = String(id || "");
  if (key === "f") return "Hz";
  if (key === "T") return "s";
  if (key === "t") return "s";
  if (key === "lambda") return "m";
  if (key === "x") return "m";
  if (key === "v" || key === "c") return "m/s";
  if (key === "A") return "m";
  if (key === "omega") return "rad/s";
  if (key === "k") return "rad/m";
  if (key === "phi") return "rad";
  if (key === "phaseDeg") return "deg";
  return "";
}

function valueForFormula(n) {
  if (!Number.isFinite(n)) return "-";
  const abs = Math.abs(n);
  if (abs === 0) return "0";
  if ((abs > 0 && abs < 1e-4) || abs >= 1e6) return n.toExponential(3).replace(".", ",");
  if (abs >= 100) return fmt(n, 2);
  if (abs >= 1) return fmt(n, 4);
  return fmt(n, 6);
}

function colorForVar(id, idx, targetId) {
  if (String(id) === String(targetId || "")) return "#f43f5e";
  return VAR_COLORS[idx % VAR_COLORS.length];
}

function guessVarFromLabel(label = "") {
  const s = String(label || "").toLowerCase();
  if (/\blambda\b|longitud/.test(s)) return "lambda";
  if (/(^|\W)f(\W|$)|frecuencia/.test(s)) return "f";
  if (/(^|\W)t(\W|$)|periodo|tiempo/.test(s)) return "T";
  if (/(^|\W)v(\W|$)|velocidad/.test(s)) return "v";
  if (/(^|\W)k(\W|$)|numero.?de.?onda/.test(s)) return "k";
  if (/omega|frecuencia.?angular/.test(s)) return "omega";
  if (/(^|\W)a(\W|$)|amplitud/.test(s)) return "A";
  if (/fase|phi/.test(s)) return "phi";
  if (/(^|\W)x(\W|$)|posicion/.test(s)) return "x";
  return "";
}

function solvePhasePosition({ target, k, omega, t, phi, max }) {
  if (!(Number.isFinite(k) && k > 0 && Number.isFinite(max) && max > 0)) return NaN;
  for (let n = -40; n <= 40; n += 1) {
    const x = (target + omega * t - phi + 2 * Math.PI * n) / k;
    if (x >= 0 && x <= max) return x;
  }
  return NaN;
}

function solvePhaseTime({ target, k, omega, x, phi, max }) {
  if (!(Number.isFinite(omega) && omega > 0 && Number.isFinite(max) && max > 0)) return NaN;
  for (let n = -40; n <= 40; n += 1) {
    const t = (k * x + phi - target + 2 * Math.PI * n) / omega;
    if (t >= 0 && t <= max) return t;
  }
  return NaN;
}

function buildWaveViz(params = {}, scenario = "wavelength") {
  const Araw = Math.abs(toNum(params.A ?? params.amplitud, 1));
  const A = clamp(Araw || 1, 0.2, 5);

  let phi = toNum(params.phi, 0);
  const phaseDeg = toNum(params.phaseDeg ?? params.phiDeg, NaN);
  if (Number.isFinite(phaseDeg)) phi = (phaseDeg * Math.PI) / 180;

  let f = toNum(params.f ?? params.f0 ?? params.f1, NaN);
  let T = toNum(params.T, NaN);
  let omega = toNum(params.omega, NaN);
  let lambda = toNum(params.lambda, NaN);
  let k = toNum(params.k, NaN);
  let v = toNum(params.v ?? params.vel ?? params.c, NaN);
  const Ft = toNum(params.F_t, NaN);
  const muL = toNum(params.mu_l, NaN);
  const B = toNum(params.B, NaN);
  const rho = toNum(params.rho, NaN);

  if (!(Number.isFinite(v) && v > 0) && Number.isFinite(Ft) && Ft > 0 && Number.isFinite(muL) && muL > 0) {
    v = Math.sqrt(Ft / muL);
  }
  if (!(Number.isFinite(v) && v > 0) && Number.isFinite(B) && B > 0 && Number.isFinite(rho) && rho > 0) {
    v = Math.sqrt(B / rho);
  }

  if ((scenario === "waveEquation" || scenario === "phase") && Number.isFinite(omega) && omega > 0) {
    if (!(Number.isFinite(f) && f > 0)) f = omega / (2 * Math.PI);
  }
  if ((scenario === "waveEquation" || scenario === "phase") && Number.isFinite(k) && k > 0) {
    if (!(Number.isFinite(lambda) && lambda > 0)) lambda = (2 * Math.PI) / k;
  }

  if (!(Number.isFinite(f) && f > 0) && Number.isFinite(T) && T > 0) f = 1 / T;
  if (!(Number.isFinite(T) && T > 0) && Number.isFinite(f) && f > 0) T = 1 / f;
  if (!(Number.isFinite(omega) && omega > 0) && Number.isFinite(f) && f > 0) omega = 2 * Math.PI * f;
  if (!(Number.isFinite(f) && f > 0) && Number.isFinite(omega) && omega > 0) f = omega / (2 * Math.PI);

  if (!(Number.isFinite(lambda) && lambda > 0) && Number.isFinite(v) && v > 0 && Number.isFinite(f) && f > 0) lambda = v / f;
  if (!(Number.isFinite(v) && v > 0) && Number.isFinite(lambda) && lambda > 0 && Number.isFinite(f) && f > 0) v = lambda * f;
  if (!(Number.isFinite(k) && k > 0) && Number.isFinite(lambda) && lambda > 0) k = (2 * Math.PI) / lambda;
  if (!(Number.isFinite(lambda) && lambda > 0) && Number.isFinite(k) && k > 0) lambda = (2 * Math.PI) / k;
  if (!(Number.isFinite(v) && v > 0) && Number.isFinite(omega) && omega > 0 && Number.isFinite(k) && k > 0) v = omega / k;
  if (!(Number.isFinite(omega) && omega > 0) && Number.isFinite(v) && v > 0 && Number.isFinite(k) && k > 0) omega = v * k;

  if (!(Number.isFinite(f) && f > 0)) f = 1;
  if (!(Number.isFinite(T) && T > 0)) T = 1 / f;
  if (!(Number.isFinite(lambda) && lambda > 0)) lambda = 1.2;
  if (!(Number.isFinite(k) && k > 0)) k = (2 * Math.PI) / lambda;
  if (!(Number.isFinite(omega) && omega > 0)) omega = 2 * Math.PI * f;
  if (!(Number.isFinite(v) && v > 0)) v = lambda * f;

  const xMax = clamp(
    toNum(params.spaceWindow, Number.isFinite(params.xMax) ? params.xMax : 8),
    1,
    40
  );
  const tMax = clamp(
    toNum(params.timeWindow, Number.isFinite(params.tMax) ? params.tMax : 2),
    0.2,
    20
  );
  const tSample = toNum(params.waveTime ?? params.t ?? params.t0, 0.2);
  const xSample = toNum(params.waveX ?? params.x ?? params.x0, 0);

  const nPts = 240;
  const space = [];
  const time = [];
  for (let i = 0; i <= nPts; i += 1) {
    const x = (xMax * i) / nPts;
    const t = (tMax * i) / nPts;
    space.push({ x, y: A * Math.sin(k * x - omega * tSample + phi) });
    time.push({ x: t, y: A * Math.sin(k * xSample - omega * t + phi) });
  }

  const lambdaLines = [];
  if (lambda > 0) {
    for (let i = 1; i <= 12; i += 1) {
      const xx = i * lambda;
      if (xx > xMax + 1e-9) break;
      lambdaLines.push(xx);
    }
  }

  const TLines = [];
  if (T > 0) {
    for (let i = 1; i <= 12; i += 1) {
      const tt = i * T;
      if (tt > tMax + 1e-9) break;
      TLines.push(tt);
    }
  }

  return {
    A,
    f,
    v,
    lambda,
    T,
    omega,
    k,
    tSample,
    xSample,
    spaceWindow: xMax,
    timeWindow: tMax,
    spatialPeriods: xMax / Math.max(lambda, 1e-9),
    temporalPeriods: tMax / Math.max(T, 1e-9),
    lambdaLines,
    TLines,
    space,
    time,
    xMax,
    tMax,
  };
}

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "8px 10px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.14)",
        background: active ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.35)",
        color: "rgba(255,255,255,0.90)",
        fontWeight: 900,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default function OndasGraphsCoord({
  title,
  params,
  leafRelPath,
  formulasDoc,
  magnitudesDoc,
  leafProfileId,
  forcedScenario,
}) {
  const stringHint = `${leafRelPath || ""} ${params?.motionId || ""} ${title || ""}`
    .toLowerCase()
    .replace(/^\/+|\/+$/g, "");
  const isStringPropagationLeaf =
    stringHint.includes("ondas-en-cuerdas/velocidad-de-propagacion") ||
    stringHint.includes("ondas en cuerdas") ||
    stringHint.includes(" en cuerdas") ||
    stringHint.includes(" cuerda");

  const resolved = useMemo(
    () =>
      resolveOndaModelForLeaf({
        leafRelPath,
        motionId: params?.motionId,
        title,
        formulasDoc,
        forcedScenario: isStringPropagationLeaf ? "stringPropagation" : forcedScenario,
      }),
    [leafRelPath, params?.motionId, title, formulasDoc, forcedScenario, isStringPropagationLeaf]
  );

  const paramsForGraph = useMemo(
    () =>
      withOndaDerivedParams({
        scenario: resolved.scenario,
        params,
      }),
    [resolved.scenario, params]
  );

  const model = resolved.model;
  const leafProfile = useMemo(() => getOndaLeafProfile(leafProfileId || params?.motionId || leafRelPath), [leafProfileId, params?.motionId, leafRelPath]);
  const [playTime, setPlayTime] = useState(false);

  const schema = useMemo(() => {
    const base = model.params.map((p) => ({
      key: p.key,
      aliases: getOndaParamAliases(p.key),
      default: toNum(paramsForGraph?.[p.key], p.default),
    }));
    base.push(
      { key: "showY1", default: paramsForGraph?.showY1 ?? true },
      { key: "showY2", default: paramsForGraph?.showY2 ?? true },
      { key: "showZero", default: paramsForGraph?.showZero ?? true },
      { key: "waveTime", default: toNum(paramsForGraph?.waveTime, toNum(paramsForGraph?.t, 0.2)) },
      { key: "waveX", default: toNum(paramsForGraph?.waveX, toNum(paramsForGraph?.x, 0)) },
      { key: "spaceWindow", default: toNum(paramsForGraph?.spaceWindow, toNum(paramsForGraph?.xMax, 8)) },
      { key: "timeWindow", default: toNum(paramsForGraph?.timeWindow, toNum(paramsForGraph?.tMax, 2)) }
    );
    return base;
  }, [model, paramsForGraph]);

  const exp = useExperimentParams({ params: paramsForGraph, schema });
  const ep = exp.effectiveParams;

  const p = useMemo(() => {
    const out = {};
    for (const cfg of model.params) out[cfg.key] = toNum(ep[cfg.key], cfg.default);
    return out;
  }, [ep, model]);

  const built = useMemo(() => model.build(p), [model, p]);
  const waveViz = useMemo(() => buildWaveViz(ep, resolved.scenario), [ep, resolved.scenario]);
  const waveMarkers = useMemo(() => {
    const phase = toNum(ep.phi, 0);
    const crestX = solvePhasePosition({
      target: Math.PI / 2,
      k: waveViz.k,
      omega: waveViz.omega,
      t: waveViz.tSample,
      phi: phase,
      max: waveViz.xMax,
    });
    const valleyX = solvePhasePosition({
      target: (3 * Math.PI) / 2,
      k: waveViz.k,
      omega: waveViz.omega,
      t: waveViz.tSample,
      phi: phase,
      max: waveViz.xMax,
    });
    const crestT = solvePhaseTime({
      target: Math.PI / 2,
      k: waveViz.k,
      omega: waveViz.omega,
      x: waveViz.xSample,
      phi: phase,
      max: waveViz.tMax,
    });
    const valleyT = solvePhaseTime({
      target: (3 * Math.PI) / 2,
      k: waveViz.k,
      omega: waveViz.omega,
      x: waveViz.xSample,
      phi: phase,
      max: waveViz.tMax,
    });
    const frontX =
      Number.isFinite(waveViz.v) && Number.isFinite(waveViz.tSample) && Number.isFinite(waveViz.xMax) && waveViz.xMax > 0
        ? ((waveViz.v * waveViz.tSample) % waveViz.xMax + waveViz.xMax) % waveViz.xMax
        : NaN;
    return { crestX, valleyX, crestT, valleyT, frontX };
  }, [ep.phi, waveViz.k, waveViz.omega, waveViz.tSample, waveViz.xMax, waveViz.tMax, waveViz.xSample, waveViz.v]);
  const showY1 = !!ep.showY1;
  const showY2 = !!ep.showY2;
  const showZero = !!ep.showZero;
  const calcMeta = params?.__calc && typeof params.__calc === "object" ? params.__calc : null;

  const variableInfoMap = useMemo(() => {
    const out = {};
    const docs = [normalizeDoc(formulasDoc), normalizeDoc(magnitudesDoc)];
    for (const doc of docs) {
      const vars = Array.isArray(doc?.variables)
        ? doc.variables
        : Array.isArray(doc?.magnitudes)
          ? doc.magnitudes
          : [];
      for (const v of vars) {
        const id = String(v?.id || "").trim();
        if (!id) continue;
        const label = String(v?.name || v?.nombre || id).replace(/_/g, " ").trim();
        out[id] = {
          symbol: String(v?.symbol || id),
          label,
          unit: String(v?.si_unit || v?.unidad_si || ""),
        };
      }
    }
    return out;
  }, [formulasDoc, magnitudesDoc]);

  const formulaPanel = useMemo(() => {
    const latex =
      String(calcMeta?.formulaLatex || "") ||
      String(resolved?.primaryFormula?.latex || "") ||
      String(model.formula || "");
    const titleText =
      String(calcMeta?.formulaTitle || "") ||
      String(resolved?.primaryFormula?.title || "") ||
      String(model.title || "Formula del tema");
    const targetId = String(calcMeta?.target || "").trim();
    const known = calcMeta?.known && typeof calcMeta.known === "object" ? calcMeta.known : {};
    const Lval = toNum(ep.L, NaN);
    const nVal = toNum(ep.n ?? known?.n, NaN);
    const fnVal =
      Number.isFinite(nVal) && Number.isFinite(Lval) && Lval > 0
        ? (nVal * waveViz.v) / (2 * Lval)
        : NaN;
    const lambdaNVal =
      Number.isFinite(nVal) && Number.isFinite(Lval) && nVal > 0
        ? (2 * Lval) / nVal
        : NaN;
    const derived = {
      A: waveViz.A,
      lambda: waveViz.lambda,
      T: waveViz.T,
      f: waveViz.f,
      omega: waveViz.omega,
      k: waveViz.k,
      v: waveViz.v,
      c: waveViz.v,
      x: waveViz.xSample,
      t: waveViz.tSample,
      phi: toNum(ep.phi, 0),
      phaseDeg: toNum(ep.phaseDeg ?? ep.phiDeg, NaN),
      L: Lval,
      n: nVal,
      fn: fnVal,
      lambda_n: lambdaNVal,
      k_n: Number.isFinite(lambdaNVal) && lambdaNVal > 0 ? (2 * Math.PI) / lambdaNVal : NaN,
      omega_n: Number.isFinite(fnVal) ? 2 * Math.PI * fnVal : NaN,
      f1: Number.isFinite(Lval) && Lval > 0 ? waveViz.v / (2 * Lval) : NaN,
    };
    const ids = uniq([
      ...(Array.isArray(calcMeta?.needed) ? calcMeta.needed : []),
      ...Object.keys(known || {}),
      targetId,
    ].map((x) => String(x || "").trim()));
    const finalIds = ids.length
      ? ids
      : (Array.isArray(leafProfile.formulaVarOrder) && leafProfile.formulaVarOrder.length
        ? leafProfile.formulaVarOrder
        : model.params.map((cfg) => cfg.key));

    const readNumeric = (id) => {
      const keys = uniq([id, ...getOndaParamAliases(id)]);
      for (const key of keys) {
        const nCalc = toNum(known?.[key], NaN);
        if (Number.isFinite(nCalc)) return nCalc;
      }
      if (id === targetId) {
        const nTarget = toNum(calcMeta?.result, NaN);
        if (Number.isFinite(nTarget)) return nTarget;
      }
      for (const key of keys) {
        const nDer = toNum(derived?.[key], NaN);
        if (Number.isFinite(nDer)) return nDer;
      }
      for (const key of keys) {
        const nEp = toNum(ep?.[key], NaN);
        if (Number.isFinite(nEp)) return nEp;
      }
      return NaN;
    };

    const vars = finalIds.map((id, idx) => {
      const info = variableInfoMap[id] || {};
      return {
        id,
        symbol: info.symbol || id,
        label: info.label || id,
        unit: info.unit || fallbackUnit(id),
        color: colorForVar(id, idx, targetId),
        value: readNumeric(id),
        isTarget: id === targetId,
      };
    });

    const targetVar = vars.find((v) => v.isTarget);
    return {
      titleText,
      latex,
      vars,
      targetVar,
      modeText: exp.mode === "follow" ? "siguiendo calculadora" : "experimento (valores locales)",
    };
  }, [calcMeta, ep, exp.mode, leafProfile.formulaVarOrder, model.formula, model.params, model.title, resolved?.primaryFormula, variableInfoMap, waveViz]);

  const calcRefs = useMemo(() => {
    const bag = {};
    if (calcMeta?.known && typeof calcMeta.known === "object") {
      for (const [k, v] of Object.entries(calcMeta.known)) {
        const n = toNum(v, NaN);
        if (Number.isFinite(n)) bag[k] = n;
      }
    }
    if (calcMeta?.target) {
      const nTarget = toNum(calcMeta?.result, NaN);
      if (Number.isFinite(nTarget)) bag[String(calcMeta.target)] = nTarget;
    }
    for (const [k, v] of Object.entries(ep || {})) {
      const n = toNum(v, NaN);
      if (Number.isFinite(n) && bag[k] == null) bag[k] = n;
    }

    const xVar = leafProfile?.refVars?.x || guessVarFromLabel(built.xLabel) || "x";
    const y1Var = leafProfile?.refVars?.y1 || guessVarFromLabel(built.y1Label) || "y1";
    const y2Var = leafProfile?.refVars?.y2 || guessVarFromLabel(built.y2Label) || "y2";
    const xRef = toNum(bag[xVar], NaN);
    const y1Ref = toNum(bag[y1Var], NaN);
    const y2Ref = toNum(bag[y2Var], NaN);

    return {
      xVar,
      y1Var,
      y2Var,
      xRef,
      y1Ref,
      y2Ref,
      hasAny: Number.isFinite(xRef) || Number.isFinite(y1Ref) || Number.isFinite(y2Ref),
    };
  }, [built.xLabel, built.y1Label, built.y2Label, calcMeta, ep, leafProfile?.refVars?.x, leafProfile?.refVars?.y1, leafProfile?.refVars?.y2]);

  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp.startExperiment, exp.setValue]);

  const rawInputValue = useCallback(
    (key, fallback) => {
      const v = ep?.[key];
      if (v === null || v === undefined || v === "") return String(fallback ?? "");
      return String(v);
    },
    [ep]
  );

  useEffect(() => {
    if (!playTime) return;
    let raf = 0;
    let current = toNum(ep.waveTime, waveViz.tSample);
    const dt = clamp(waveViz.T / 80, 0.002, 0.05);
    const step = () => {
      current += dt;
      if (current > waveViz.tMax) current = 0;
      setValue("waveTime", current);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [playTime, setValue, waveViz.T, waveViz.tMax]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || model.title}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={model.formula} />
        </div>
        {leafProfile?.focus ? (
          <div className="muted" style={{ marginTop: 8, fontSize: 13 }}>
            {leafProfile.focus}
          </div>
        ) : null}
        <div
          className="v2-panel"
          style={{
            marginTop: 10,
            padding: 10,
            border: "1px solid rgba(59,130,246,0.25)",
            background: "rgba(15,23,42,0.45)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: 0.4, opacity: 0.9 }}>FORMULA APLICADA</div>
            <div style={{ fontSize: 12, opacity: 0.82 }}>Modo: <b>{formulaPanel.modeText}</b></div>
          </div>
          <div style={{ marginTop: 6, fontSize: 13, opacity: 0.88 }}>{formulaPanel.titleText}</div>
          <div style={{ marginTop: 6, color: "#bfdbfe" }}>
            <MathInline latex={formulaPanel.latex} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 9 }}>
            {formulaPanel.vars.map((v) => (
              <span
                key={v.id}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  borderRadius: 999,
                  padding: "5px 10px",
                  border: `1px solid ${v.color}88`,
                  background: `${v.color}22`,
                  fontSize: 12,
                  fontWeight: v.isTarget ? 900 : 700,
                }}
                title={v.label}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: v.color }} />
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                  <MathInline latex={String(v.symbol || v.id)} />
                </span>
                <span>=</span>
                <span>{valueForFormula(v.value)}</span>
                {v.unit ? <span style={{ opacity: 0.84 }}>{v.unit}</span> : null}
              </span>
            ))}
          </div>
          {formulaPanel.targetVar ? (
              <div style={{ marginTop: 8, fontSize: 13 }}>
                Resultado:{" "}
                <b style={{ color: formulaPanel.targetVar.color }}>
                  <MathInline latex={String(formulaPanel.targetVar.symbol || formulaPanel.targetVar.id)} /> = {valueForFormula(formulaPanel.targetVar.value)} {formulaPanel.targetVar.unit}
                </b>
              </div>
            ) : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(59,130,246,0.2)",
              background: "rgba(59,130,246,0.08)",
            }}
          >
            {model.params.map((cfg) => (
              <div key={cfg.key} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>{cfg.label}</span>
                <input
                  className="form-control"
                  style={{ width: 120 }}
                  value={rawInputValue(cfg.key, p[cfg.key])}
                  onChange={(e) => setValue(cfg.key, e.target.value)}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={exp.startExperiment}
              style={{
                padding: "8px 10px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(99,102,241,0.25)",
                color: "rgba(255,255,255,0.92)",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Experimentar
            </button>
            <button
              type="button"
              onClick={() => {
                setPlayTime(false);
                exp.resetToCalculator();
              }}
              style={{
                padding: "8px 10px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.35)",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Seguir calculadora
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(2,132,199,0.22)",
              background: "rgba(2,132,199,0.10)",
            }}
          >
            <Pill active={showY1} onClick={() => setValue("showY1", !showY1)}>
              {built.y1Label}
            </Pill>
            <Pill active={showY2} onClick={() => setValue("showY2", !showY2)}>
              {built.y2Label}
            </Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>
              eje y=0
            </Pill>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(249,115,22,0.22)",
              background: "rgba(249,115,22,0.10)",
            }}
          >
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.9 }}>t visual (s)</span>
              <input
                className="form-control"
                style={{ width: 110 }}
                value={rawInputValue("waveTime", waveViz.tSample)}
                onChange={(e) => setValue("waveTime", e.target.value)}
              />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.9 }}>x visual (m)</span>
              <input
                className="form-control"
                style={{ width: 110 }}
                value={rawInputValue("waveX", waveViz.xSample)}
                onChange={(e) => setValue("waveX", e.target.value)}
              />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.9 }}>ventana x (m)</span>
              <input
                className="form-control"
                style={{ width: 110 }}
                value={rawInputValue("spaceWindow", waveViz.spaceWindow)}
                onChange={(e) => setValue("spaceWindow", e.target.value)}
              />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.9 }}>ventana t (s)</span>
              <input
                className="form-control"
                style={{ width: 110 }}
                value={rawInputValue("timeWindow", waveViz.timeWindow)}
                onChange={(e) => setValue("timeWindow", e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => {
                exp.startExperiment();
                setPlayTime((v) => !v);
              }}
              style={{
                padding: "8px 10px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: playTime ? "rgba(220,38,38,0.25)" : "rgba(16,185,129,0.25)",
                color: "rgba(255,255,255,0.92)",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              {playTime ? "Pausar tiempo real" : "Tiempo real"}
            </button>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            {built.summary}
            <div style={{ marginTop: 6, fontSize: 12, opacity: 0.86 }}>
              Consejo: activa <b>Tiempo real</b> para ver el desplazamiento continuo de crestas, valles y frente de onda.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Respuesta del modelo</div>
        {calcRefs.hasAny ? (
          <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
            Referencias de calculadora:{" "}
            {Number.isFinite(calcRefs.xRef) ? <span><b>{calcRefs.xVar}</b>={valueForFormula(calcRefs.xRef)} </span> : null}
            {Number.isFinite(calcRefs.y1Ref) ? <span><b>{calcRefs.y1Var}</b>={valueForFormula(calcRefs.y1Ref)} </span> : null}
            {Number.isFinite(calcRefs.y2Ref) ? <span><b>{calcRefs.y2Var}</b>={valueForFormula(calcRefs.y2Ref)}</span> : null}
          </div>
        ) : null}
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={built.data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: built.xLabel, position: "insideBottomRight", offset: -5 }}
              />
              <YAxis tickFormatter={(v) => fmt(v, 2)} />
              <Tooltip
                formatter={(v, n) => [fmt(Number(v), 5), n]}
                labelFormatter={(l) => `${built.xLabel}: ${fmt(Number(l), 5)}`}
              />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {Number.isFinite(calcRefs.xRef) ? (
                <ReferenceLine
                  x={calcRefs.xRef}
                  stroke="rgba(244,63,94,0.85)"
                  strokeDasharray="7 6"
                  label={{ value: `${calcRefs.xVar} calc`, fill: "#f43f5e", fontSize: 11 }}
                />
              ) : null}
              {Number.isFinite(calcRefs.y1Ref) ? (
                <ReferenceLine
                  y={calcRefs.y1Ref}
                  stroke="rgba(96,165,250,0.70)"
                  strokeDasharray="5 5"
                  label={{ value: `${calcRefs.y1Var}`, fill: "#60a5fa", fontSize: 11 }}
                />
              ) : null}
              {Number.isFinite(calcRefs.y2Ref) ? (
                <ReferenceLine
                  y={calcRefs.y2Ref}
                  stroke="rgba(52,211,153,0.70)"
                  strokeDasharray="5 5"
                  label={{ value: `${calcRefs.y2Var}`, fill: "#34d399", fontSize: 11 }}
                />
              ) : null}
              {Number.isFinite(calcRefs.xRef) && Number.isFinite(calcRefs.y1Ref) ? (
                <ReferenceDot x={calcRefs.xRef} y={calcRefs.y1Ref} r={5} fill="#60a5fa" stroke="#0f172a" strokeWidth={1.5} />
              ) : null}
              {Number.isFinite(calcRefs.xRef) && Number.isFinite(calcRefs.y2Ref) ? (
                <ReferenceDot x={calcRefs.xRef} y={calcRefs.y2Ref} r={5} fill="#34d399" stroke="#0f172a" strokeWidth={1.5} />
              ) : null}
              {showY1 ? (
                <Line type="monotone" dataKey="y1" name={built.y1Label} stroke="#60a5fa" strokeWidth={3} dot={false} />
              ) : null}
              {showY2 ? (
                <Line type="monotone" dataKey="y2" name={built.y2Label} stroke="#34d399" strokeWidth={2.8} dot={false} />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Onda real (espacio y tiempo)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          A = <b>{fmt(waveViz.A, 2)}</b>, lambda = <b>{fmt(waveViz.lambda, 3)}</b> m, T = <b>{fmt(waveViz.T, 3)}</b> s, f = <b>{fmt(waveViz.f, 3)}</b> Hz, omega = <b>{fmt(waveViz.omega, 3)}</b> rad/s, k = <b>{fmt(waveViz.k, 3)}</b> rad/m, v = <b>{fmt(waveViz.v, 2)}</b> m/s
          <br />
          periodos visibles: espacio <b>{fmt(waveViz.spatialPeriods, 2)}</b>, tiempo <b>{fmt(waveViz.temporalPeriods, 2)}</b>
          <br />
          cresta x~<b>{Number.isFinite(waveMarkers.crestX) ? fmt(waveMarkers.crestX, 3) : "-"}</b> m, valle x~<b>{Number.isFinite(waveMarkers.valleyX) ? fmt(waveMarkers.valleyX, 3) : "-"}</b> m, frente x_f=v*t~<b>{Number.isFinite(waveMarkers.frontX) ? fmt(waveMarkers.frontX, 3) : "-"}</b> m
        </div>
        <div style={{ display: "grid", gap: 12, marginTop: 10, gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))" }}>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <LineChart data={waveViz.space} margin={{ top: 10, right: 14, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis
                  dataKey="x"
                  type="number"
                  domain={[0, waveViz.xMax]}
                  tickFormatter={(v) => fmt(v, 2)}
                  label={{ value: "x (m)", position: "insideBottomRight", offset: -5 }}
                />
                <YAxis
                  domain={[-waveViz.A * 1.2, waveViz.A * 1.2]}
                  tickFormatter={(v) => fmt(v, 2)}
                  label={{ value: "y(x,t_visual)", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  formatter={(v) => [fmt(Number(v), 4), "y"]}
                  labelFormatter={(l) => `x: ${fmt(Number(l), 4)} m`}
                />
                <ReferenceLine y={0} stroke="rgba(255,255,255,0.35)" />
                <ReferenceLine y={waveViz.A} stroke="rgba(34,197,94,0.55)" strokeDasharray="6 6" label={{ value: "A", fill: "#22c55e", fontSize: 12 }} />
                <ReferenceLine y={-waveViz.A} stroke="rgba(34,197,94,0.55)" strokeDasharray="6 6" />
                {waveViz.lambdaLines.map((xLine, idx) => (
                  <ReferenceLine
                    key={`lam-${idx}`}
                    x={xLine}
                    stroke="rgba(249,115,22,0.70)"
                    strokeDasharray="6 6"
                    label={idx === 0 ? { value: "lambda", fill: "#f97316", fontSize: 12 } : undefined}
                  />
                ))}
                {Number.isFinite(waveMarkers.crestX) ? (
                  <ReferenceLine
                    x={waveMarkers.crestX}
                    stroke="rgba(34,197,94,0.85)"
                    strokeDasharray="5 5"
                    label={{ value: "cresta", fill: "#22c55e", fontSize: 11 }}
                  />
                ) : null}
                {Number.isFinite(waveMarkers.valleyX) ? (
                  <ReferenceLine
                    x={waveMarkers.valleyX}
                    stroke="rgba(236,72,153,0.85)"
                    strokeDasharray="5 5"
                    label={{ value: "valle", fill: "#ec4899", fontSize: 11 }}
                  />
                ) : null}
                {Number.isFinite(waveMarkers.frontX) ? (
                  <ReferenceLine
                    x={waveMarkers.frontX}
                    stroke="rgba(249,115,22,0.9)"
                    strokeDasharray="8 5"
                    label={{ value: "frente v*t", fill: "#f97316", fontSize: 11 }}
                  />
                ) : null}
                {Number.isFinite(waveMarkers.crestX) ? (
                  <ReferenceDot x={waveMarkers.crestX} y={waveViz.A} r={5} fill="#22c55e" stroke="#0f172a" strokeWidth={1.2} />
                ) : null}
                {Number.isFinite(waveMarkers.valleyX) ? (
                  <ReferenceDot x={waveMarkers.valleyX} y={-waveViz.A} r={5} fill="#ec4899" stroke="#0f172a" strokeWidth={1.2} />
                ) : null}
                <Line type="monotone" dataKey="y" stroke="#2563eb" strokeWidth={3} dot={false} name="y(x,t_visual)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <LineChart data={waveViz.time} margin={{ top: 10, right: 14, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis
                  dataKey="x"
                  type="number"
                  domain={[0, waveViz.tMax]}
                  tickFormatter={(v) => fmt(v, 2)}
                  label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }}
                />
                <YAxis
                  domain={[-waveViz.A * 1.2, waveViz.A * 1.2]}
                  tickFormatter={(v) => fmt(v, 2)}
                  label={{ value: "y(t,x_visual)", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  formatter={(v) => [fmt(Number(v), 4), "y"]}
                  labelFormatter={(l) => `t: ${fmt(Number(l), 4)} s`}
                />
                <ReferenceLine y={0} stroke="rgba(255,255,255,0.35)" />
                {waveViz.TLines.map((tLine, idx) => (
                  <ReferenceLine
                    key={`per-${idx}`}
                    x={tLine}
                    stroke="rgba(249,115,22,0.70)"
                    strokeDasharray="6 6"
                    label={idx === 0 ? { value: "T", fill: "#f97316", fontSize: 12 } : undefined}
                  />
                ))}
                {Number.isFinite(waveMarkers.crestT) ? (
                  <ReferenceLine
                    x={waveMarkers.crestT}
                    stroke="rgba(34,197,94,0.85)"
                    strokeDasharray="5 5"
                    label={{ value: "cresta", fill: "#22c55e", fontSize: 11 }}
                  />
                ) : null}
                {Number.isFinite(waveMarkers.valleyT) ? (
                  <ReferenceLine
                    x={waveMarkers.valleyT}
                    stroke="rgba(236,72,153,0.85)"
                    strokeDasharray="5 5"
                    label={{ value: "valle", fill: "#ec4899", fontSize: 11 }}
                  />
                ) : null}
                <Line type="monotone" dataKey="y" stroke="#0ea5e9" strokeWidth={3} dot={false} name="y(t,x_visual)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
