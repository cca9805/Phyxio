import React, { useMemo, useCallback, useEffect, useState } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import {
  resolveOndaModelForLeaf,
  toNum,
  clamp,
  getOndaParamAliases,
  withOndaDerivedParams,
} from "./ondasModels";
import { getOndaLeafProfile } from "./leafProfiles";

const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
const TWO_PI = Math.PI * 2;
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
  if ((abs > 0 && abs < 1e-5) || abs >= 1e6) return n.toExponential(3).replace(".", ",");
  if (abs >= 100) return fmt(n, 2);
  if (abs >= 1) return fmt(n, 4);
  return fmt(n, 6);
}

function colorForVar(id, idx, targetId) {
  if (String(id) === String(targetId || "")) return "#f43f5e";
  return VAR_COLORS[idx % VAR_COLORS.length];
}

function barLabel(label, fallback) {
  const raw = String(label || "").trim();
  if (!raw) return fallback;
  const main = raw.includes("(") ? raw.split("(")[0].trim() : raw;
  if (main.length <= 16) return main;
  return `${main.slice(0, 16)}...`;
}

function scenarioGroup(scenario) {
  if (scenario === "propagation") return "propagation";
  if (scenario === "stringPropagation") return "stringPropagation";
  if (scenario === "surfaceWaves") return "surface";
  if (scenario === "fluidLongitudinal") return "fluidLongitudinal";
  if (scenario === "standing") return "standing";
  if (scenario === "electromagnetic") return "em";
  if (scenario === "mechanical") return "basic";
  if (scenario === "transLong") return "shape";
  if (scenario === "snell" || scenario === "reflection" || scenario === "refractionSpeed") return "optics";
  if (scenario === "interference" || scenario === "diffraction" || scenario === "superposition") return "interference";
  if (scenario === "waveEquation" || scenario === "phase") return "shape";
  if (scenario === "doppler") return "doppler";
  if (scenario === "emSpectrum") return "em";
  if (scenario === "intensity" || scenario === "energyWave" || scenario === "energyFlow") return "energy";
  return "basic";
}

function Arrow({ x1, y1, x2, y2, color = "#1d4ed8", width = 3 }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const head = 10;
  const wing = 6;
  const hx = x2;
  const hy = y2;
  const lx = hx - ux * head - uy * wing;
  const ly = hy - uy * head + ux * wing;
  const rx = hx - ux * head + uy * wing;
  const ry = hy - uy * head - ux * wing;
  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth={width} strokeLinecap="round" />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} />
    </g>
  );
}

function DoubleArrow({ x1, y1, x2, y2, color = "#0f172a" }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const head = 8;
  const wing = 5;
  const l1x = x1 + ux * head + uy * wing;
  const l1y = y1 + uy * head - ux * wing;
  const r1x = x1 + ux * head - uy * wing;
  const r1y = y1 + uy * head + ux * wing;
  const l2x = x2 - ux * head + uy * wing;
  const l2y = y2 - uy * head - ux * wing;
  const r2x = x2 - ux * head - uy * wing;
  const r2y = y2 - uy * head + ux * wing;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2.2" />
      <polygon points={`${x1},${y1} ${l1x},${l1y} ${r1x},${r1y}`} fill={color} />
      <polygon points={`${x2},${y2} ${l2x},${l2y} ${r2x},${r2y}`} fill={color} />
    </g>
  );
}

function MeasureSpan({ x1, y1, x2, color = "#0f172a" }) {
  const xa = Math.min(Number(x1), Number(x2));
  const xb = Math.max(Number(x1), Number(x2));
  const y = Number(y1);
  return (
    <g>
      <line x1={xa} y1={y} x2={xb} y2={y} stroke={color} strokeWidth="2.2" />
      <line x1={xa} y1={y - 5} x2={xa} y2={y + 5} stroke={color} strokeWidth="2" />
      <line x1={xb} y1={y - 5} x2={xb} y2={y + 5} stroke={color} strokeWidth="2" />
    </g>
  );
}

function makeWavePath({ x0, y0, w, amp, cycles, phase = 0 }) {
  const steps = 220;
  const out = [];
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const x = x0 + w * t;
    const y = y0 + amp * Math.sin(t * TWO_PI * cycles + phase);
    out.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
  }
  return out.join(" ");
}

function sampleWaveY({ x0, y0, w, amp, cycles, phase = 0, x }) {
  if (!Number.isFinite(x0) || !Number.isFinite(w) || w <= 0) return y0;
  const t = clamp((x - x0) / w, 0, 1);
  return y0 + amp * Math.sin(t * TWO_PI * cycles + phase);
}

function buildWaveViz(params = {}) {
  const A = clamp(Math.abs(toNum(params.A ?? params.amplitud, 1)) || 1, 0.2, 5);
  const tRaw = toNum(params.T, NaN);
  let f = toNum(params.f ?? params.f0 ?? params.f1, NaN);
  if (!Number.isFinite(f) && Number.isFinite(tRaw) && tRaw > 0) f = 1 / tRaw;
  f = clamp(Number.isFinite(f) && f > 0 ? f : 1, 0.2, 8);
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
  if (!(Number.isFinite(v) && v > 0)) v = 20;
  if (v > 2000) v = 340;
  let lambda = toNum(params.lambda, NaN);
  if (!(Number.isFinite(lambda) && lambda > 0)) lambda = v / f;
  lambda = clamp(lambda, 0.2, 8);
  const phi = toNum(params.phi, 0);
  const T = 1 / f;
  const omega = TWO_PI * f;
  const tVisual = toNum(params.waveTime ?? params.t, 0);
  const phaseAnimated = phi - omega * tVisual;
  return { A, f, v, lambda, T, omega, phi, tVisual, phaseAnimated };
}

export default function OndasGraphsSvg({
  title,
  params,
  leafRelPath,
  formulasDoc,
  magnitudesDoc,
  leafProfileId,
  forcedScenario,
}) {
  const VIEW_W = 840;
  const VIEW_H = 430;
  const Y_SHIFT = 24;
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
  const scenario = resolved.scenario;
  const model = resolved.model;
  const leafProfile = useMemo(() => getOndaLeafProfile(leafProfileId || params?.motionId || leafRelPath), [leafProfileId, params?.motionId, leafRelPath]);
  const group = scenarioGroup(scenario);
  const [playTime, setPlayTime] = useState(false);

  const paramsForGraph = useMemo(
    () => withOndaDerivedParams({ scenario, params }),
    [scenario, params]
  );

  const schema = useMemo(() => {
    const base = model.params.map((p) => ({
      key: p.key,
      aliases: getOndaParamAliases(p.key),
      default: toNum(paramsForGraph?.[p.key], p.default),
    }));
    base.push(
      { key: "sample", default: toNum(paramsForGraph?.sample, 0.55) },
      { key: "showY1", default: paramsForGraph?.showY1 ?? true },
      { key: "showY2", default: paramsForGraph?.showY2 ?? true },
      { key: "showSketch", default: paramsForGraph?.showSketch ?? true },
      { key: "waveTime", default: toNum(paramsForGraph?.waveTime, toNum(paramsForGraph?.t, 0)) }
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
  const waveViz = useMemo(() => buildWaveViz(p), [p]);
  const built = useMemo(() => model.build(p), [model, p]);
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
        out[id] = {
          symbol: String(v?.symbol || id),
          label: String(v?.name || v?.nombre || id).replace(/_/g, " ").trim(),
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
      omega: TWO_PI * waveViz.f,
      k: TWO_PI / Math.max(waveViz.lambda, 1e-9),
      v: waveViz.v,
      c: waveViz.v,
      phi: waveViz.phi,
      L: Lval,
      n: nVal,
      fn: fnVal,
      lambda_n: lambdaNVal,
      k_n: Number.isFinite(lambdaNVal) && lambdaNVal > 0 ? TWO_PI / lambdaNVal : NaN,
      omega_n: Number.isFinite(fnVal) ? TWO_PI * fnVal : NaN,
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

    return {
      titleText,
      latex,
      vars,
      targetVar: vars.find((v) => v.isTarget) || null,
      modeText: exp.mode === "follow" ? "siguiendo calculadora" : "experimento (valores locales)",
    };
  }, [calcMeta, ep, exp.mode, leafProfile.formulaVarOrder, model.formula, model.params, model.title, resolved?.primaryFormula, variableInfoMap, waveViz]);

  const showY1 = !!ep.showY1;
  const showY2 = !!ep.showY2;
  const showSketch = !!ep.showSketch;
  const sample = clamp(toNum(ep.sample, 0.55), 0, 1);
  const idx = Math.round(sample * (built.data.length - 1));
  const point = built.data[idx] || { x: 0, y1: 0, y2: 0 };

  const yMax = Math.max(1, ...built.data.map((d) => Math.max(Math.abs(d.y1 || 0), Math.abs(d.y2 || 0))));
  const barScale = 160 / yMax;
  const bar1 = Math.abs(point.y1 || 0) * barScale;
  const bar2 = Math.abs(point.y2 || 0) * barScale;
  const sketchAmp = clamp(16 + waveViz.A * 9, 16, 56);
  const sketchCycles = clamp(4 / waveViz.lambda, 1, 6);
  const propagationViz = useMemo(() => {
    if (scenario !== "propagation" && scenario !== "stringPropagation") return null;
    const lambda = Math.max(1e-9, toNum(p.lambda, 1.2));
    const fMin = Math.max(1, toNum(p.fMin, 20));
    const fMax = Math.max(fMin + 1, toNum(p.fMax, 300));
    const fNow = clamp(toNum(point.x, (fMin + fMax) / 2), fMin, fMax);
    const Ft = Math.max(1e-9, toNum(p.F_t, 90));
    const muL = Math.max(1e-9, toNum(p.mu_l, 0.08));
    const L = Math.max(1e-9, toNum(p.L, 0.65));
    const B = Math.max(1e-9, toNum(p.B, 2.2e9));
    const rho = Math.max(1e-9, toNum(p.rho, 1000));
    const n = Math.max(1e-9, toNum(p.n, 1.33));
    const c = Math.max(1e-9, toNum(p.c, 299792458));
    const vGeneral = lambda * fNow;
    const vCuerda = Math.sqrt(Ft / muL);
    const vFluido = Math.sqrt(B / rho);
    const vOptica = c / n;
    const vOpticaTxt = vOptica > 1e6 ? vOptica.toExponential(2).replace(".", ",") : fmt(vOptica, 2);
    return {
      fNow,
      vGeneral,
      vCuerda,
      fFund: vCuerda / (2 * L),
      vFluido,
      vOpticaTxt,
    };
  }, [p, point.x, scenario]);

  const surfaceViz = useMemo(() => {
    if (scenario !== "surfaceWaves") return null;
    const g = Math.max(1e-9, toNum(p.g, 9.81));
    const h = Math.max(1e-9, toNum(p.h, 1.2));
    const lambdaNow = Math.max(1e-9, toNum(point.x, toNum(p.lambda, 2)));
    const k = (2 * Math.PI) / lambdaNow;
    const kh = k * h;
    const vProfunda = Math.sqrt((g * lambdaNow) / (2 * Math.PI));
    const vSomera = Math.sqrt(g * h);
    const omegaProf = Math.sqrt(g * k);
    const fProf = omegaProf / (2 * Math.PI);
    let regime = "transicion";
    if (kh <= 0.5) regime = "somera";
    else if (kh >= 3) regime = "profunda";
    return {
      g,
      h,
      lambdaNow,
      k,
      kh,
      vProfunda,
      vSomera,
      omegaProf,
      fProf,
      lambdaKh1: 2 * Math.PI * h,
      regime,
    };
  }, [p.g, p.h, p.lambda, point.x, scenario]);

  const longitudinalViz = useMemo(() => {
    if (scenario !== "fluidLongitudinal") return null;
    const B = Math.max(1e-9, toNum(p.B, 2.2e9));
    const rho = Math.max(1e-9, toNum(point.x, toNum(p.rho, 1000)));
    const vModel = Math.sqrt(B / rho);
    const Z = rho * vModel;
    const lambda = Math.max(1e-9, toNum(p.lambda, waveViz.lambda));
    const f = Math.max(1e-9, toNum(p.f, waveViz.f));
    const vWave = lambda * f;
    const k = (2 * Math.PI) / lambda;
    const omega = 2 * Math.PI * f;
    const pHat = Math.max(0, toNum(p.p_hat, 50));
    const uHat = pHat / Math.max(1e-9, Z);
    return {
      B,
      rho,
      vModel,
      Z,
      lambda,
      f,
      vWave,
      k,
      omega,
      pHat,
      uHat,
      matchErr: Math.abs(vWave - vModel) / Math.max(1e-9, vModel),
    };
  }, [p.B, p.f, p.lambda, p.p_hat, p.rho, point.x, scenario, waveViz.f, waveViz.lambda]);

  const standingViz = useMemo(() => {
    if (scenario !== "standing") return null;
    const v = Math.max(1e-9, toNum(p.v, 120));
    const L = Math.max(1e-9, toNum(p.L, 1.2));
    const nMax = Math.max(1, Math.round(toNum(p.nMax, 8)));
    const nFromCalc = toNum(calcMeta?.known?.n, NaN);
    const nFromParams = toNum(ep.n ?? p.n, NaN);
    const nFromPoint = toNum(point.x, NaN);
    let nSel =
      (Number.isFinite(nFromCalc) ? Math.round(nFromCalc) : NaN) ||
      (Number.isFinite(nFromParams) ? Math.round(nFromParams) : NaN) ||
      (Number.isFinite(nFromPoint) ? Math.round(nFromPoint) : NaN);
    if (!Number.isFinite(nSel)) nSel = Math.round(1 + sample * (nMax - 1));
    nSel = Math.max(1, Math.min(nSel, nMax));

    const fn = (nSel * v) / (2 * L);
    const lambdaN = (2 * L) / nSel;
    const f1 = v / (2 * L);
    const omegaN = TWO_PI * fn;
    const kN = (nSel * Math.PI) / L;
    return { v, L, nMax, nSel, fn, lambdaN, f1, omegaN, kN };
  }, [calcMeta?.known?.n, ep.n, p, point.x, sample, scenario]);

  const standingPath = useMemo(() => {
    if (!standingViz) return "";
    const x0 = 94;
    const w = 278;
    const y0 = 186;
    const amp = clamp(18 + waveViz.A * 8, 18, 46);
    const cosTerm = Math.cos(standingViz.omegaN * waveViz.tVisual + waveViz.phi);
    const steps = 260;
    const out = [];
    for (let i = 0; i <= steps; i += 1) {
      const u = i / steps;
      const x = x0 + w * u;
      const y = y0 + amp * Math.sin(standingViz.nSel * Math.PI * u) * cosTerm;
      out.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
    }
    return out.join(" ");
  }, [standingViz, waveViz.A, waveViz.phi, waveViz.tVisual]);

  const basicXAxisMin = 72;
  const basicXAxisMax = 392;
  const basicLambdaStart = basicXAxisMin;
  const basicLambdaEnd = clamp(
    basicLambdaStart + (basicXAxisMax - basicXAxisMin) / sketchCycles,
    basicXAxisMin,
    basicXAxisMax
  );
  const basicLambdaLabelX = (basicLambdaStart + basicLambdaEnd) / 2;

  const shapeBoxMin = 96;
  const shapeBoxMax = 368;
  const shapeLambdaStart = 112;
  const shapeLambdaEnd = clamp(shapeLambdaStart + (shapeBoxMax - shapeBoxMin) / sketchCycles, shapeBoxMin, shapeBoxMax);
  const shapeLambdaLabelX = (shapeLambdaStart + shapeLambdaEnd) / 2;

  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

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
    let current = toNum(ep.waveTime, waveViz.tVisual);
    const dt = clamp(waveViz.T / 80, 0.002, 0.05);
    const step = () => {
      current += dt;
      if (current > waveViz.T * 2) current = 0;
      setValue("waveTime", current);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [ep.waveTime, playTime, setValue, waveViz.T, waveViz.tVisual]);

  return (
    <SvgFrame
      title={title || `${model.title} (SVG)`}
      subtitle="Esquema visual del fenomeno y lectura instantanea en el punto de muestra"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
        <>
          <button
            type="button"
            onClick={exp.startExperiment}
            style={{
              padding: "10px 14px",
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
              padding: "10px 14px",
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
          <button
            type="button"
            onClick={() => {
              exp.startExperiment();
              setPlayTime((v) => !v);
            }}
            style={{
              padding: "10px 14px",
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
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-3 mb-1">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>FORMULA APLICADA</div>
              <div style={{ fontSize: 11, opacity: 0.8 }}>Modo: <b>{formulaPanel.modeText}</b></div>
            </div>
            <div style={{ marginTop: 6, fontSize: 12, opacity: 0.85 }}>{formulaPanel.titleText}</div>
            {leafProfile?.focus ? (
              <div style={{ marginTop: 6, fontSize: 12, opacity: 0.85 }}>{leafProfile.focus}</div>
            ) : null}
            <div style={{ marginTop: 8, color: "#93c5fd" }}>
              <MathInline latex={formulaPanel.latex} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 8 }}>
              {formulaPanel.vars.map((v) => (
                <span
                  key={v.id}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    borderRadius: 999,
                    padding: "4px 9px",
                    border: `1px solid ${v.color}88`,
                    background: `${v.color}22`,
                    fontSize: 11,
                    fontWeight: v.isTarget ? 900 : 700,
                  }}
                  title={v.label}
                >
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: v.color }} />
                  <span>{v.symbol}</span>
                  <span>=</span>
                  <span>{valueForFormula(v.value)}</span>
                  {v.unit ? <span style={{ opacity: 0.84 }}>{v.unit}</span> : null}
                </span>
              ))}
            </div>
            {formulaPanel.targetVar ? (
              <div style={{ marginTop: 7, fontSize: 12 }}>
                Resultado:{" "}
                <b style={{ color: formulaPanel.targetVar.color }}>
                  {formulaPanel.targetVar.symbol} = {valueForFormula(formulaPanel.targetVar.value)} {formulaPanel.targetVar.unit}
                </b>
              </div>
            ) : null}
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {model.params.map((cfg) => (
                <div key={cfg.key} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{cfg.label}</div>
                  <input
                    className="form-control"
                    style={{ width: 110 }}
                    value={rawInputValue(cfg.key, p[cfg.key])}
                    onChange={(e) => setValue(cfg.key, e.target.value)}
                  />
                </div>
              ))}
              <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>muestra (0-1)</div>
                <input
                  className="form-control"
                  style={{ width: 110 }}
                  value={rawInputValue("sample", sample)}
                  onChange={(e) => setValue("sample", e.target.value)}
                />
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>t visual (s)</div>
                <input
                  className="form-control"
                  style={{ width: 110 }}
                  value={rawInputValue("waveTime", waveViz.tVisual)}
                  onChange={(e) => setValue("waveTime", e.target.value)}
                />
              </div>
            </div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showY1} onChange={(e) => setValue("showY1", e.target.checked)} />
                <span className="v2-toggle-label">{built.y1Label}</span>
              </label>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showY2} onChange={(e) => setValue("showY2", e.target.checked)} />
                <span className="v2-toggle-label">{built.y2Label}</span>
              </label>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showSketch} onChange={(e) => setValue("showSketch", e.target.checked)} />
                <span className="v2-toggle-label">esquema</span>
              </label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              {built.xLabel}: <b>{fmt(point.x, 3)}</b>
              <br />
              {built.y1Label}: <b style={{ color: "#60a5fa" }}>{fmt(point.y1, 4)}</b>
              <br />
              {built.y2Label}: <b style={{ color: "#34d399" }}>{fmt(point.y2, 4)}</b>
            </div>
          </div>
        </div>
      }
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      svgHeight={390}
    >
      <defs>
        <linearGradient id="bgOndasSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
        <linearGradient id="specGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="22%" stopColor="#f97316" />
          <stop offset="38%" stopColor="#eab308" />
          <stop offset="52%" stopColor="#22c55e" />
          <stop offset="67%" stopColor="#06b6d4" />
          <stop offset="82%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#bgOndasSvg)" />
      <g transform={`translate(0 ${Y_SHIFT})`}>
        <line x1="430" y1="24" x2="430" y2="356" stroke="rgba(15,23,42,0.20)" strokeWidth="2" strokeDasharray="7 8" />
              <text x="72" y="42" fill="#0f172a" fontSize="13" fontWeight="900">Esquema conceptual</text>
        <text x="450" y="42" fill="#0f172a" fontSize="13" fontWeight="900">Lectura numerica en muestra</text>

        {showSketch ? (
          <>
            {group === "propagation" ? (
              <>
                <rect x="72" y="78" width="322" height="74" rx="10" fill="rgba(37,99,235,0.08)" stroke="#1d4ed8" strokeWidth="1.8" />
                <text x="84" y="98" fontSize="12" fill="#1e3a8a" fontWeight="900">Modelo general: v = lambda*f</text>
                <path d={makeWavePath({ x0: 88, y0: 124, w: 128, amp: 11, cycles: 2.5, phase: waveViz.phaseAnimated })} fill="none" stroke="#2563eb" strokeWidth="2.4" />
                <line x1="150" y1="103" x2="150" y2="145" stroke="rgba(37,99,235,0.35)" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="150" cy={sampleWaveY({ x0: 88, y0: 124, w: 128, amp: 11, cycles: 2.5, phase: waveViz.phaseAnimated, x: 150 })} r="4.2" fill="#1d4ed8" />
                <Arrow x1={230} y1={124} x2={300} y2={124} color="#16a34a" />
                <text x="308" y="128" fontSize="11" fill="#166534" fontWeight="900">v = {fmt(propagationViz?.vGeneral, 2)} m/s</text>
                <text x="84" y="144" fontSize="11" fill="#0f172a">f muestra = {fmt(propagationViz?.fNow, 2)} Hz</text>

                <rect x="72" y="162" width="322" height="74" rx="10" fill="rgba(16,185,129,0.08)" stroke="#059669" strokeWidth="1.8" />
                <text x="84" y="182" fontSize="12" fill="#065f46" fontWeight="900">Medios mecanicos: v = sqrt(F_t/mu_l) y v = sqrt(B/rho)</text>
                <line x1="88" y1="208" x2="206" y2="208" stroke="#065f46" strokeWidth="2" />
                <circle cx="102" cy="208" r="4" fill="#10b981" />
                <circle cx="118" cy="208" r="4" fill="#10b981" />
                <circle cx="146" cy="208" r="4" fill="#10b981" />
                <circle cx="178" cy="208" r="4" fill="#10b981" />
                <text x="214" y="200" fontSize="11" fill="#065f46">v_cuerda = {fmt(propagationViz?.vCuerda, 2)} m/s</text>
                <text x="214" y="218" fontSize="11" fill="#065f46">v_fluido = {fmt(propagationViz?.vFluido, 2)} m/s</text>

                <rect x="72" y="246" width="322" height="78" rx="10" fill="rgba(249,115,22,0.08)" stroke="#ea580c" strokeWidth="1.8" />
                <text x="84" y="266" fontSize="12" fill="#9a3412" fontWeight="900">Medio optico: v = c/n</text>
                <rect x="90" y="276" width="116" height="34" fill="rgba(59,130,246,0.16)" stroke="#2563eb" strokeWidth="1.3" />
                <rect x="206" y="276" width="116" height="34" fill="rgba(34,197,94,0.16)" stroke="#16a34a" strokeWidth="1.3" />
                <line x1="206" y1="276" x2="206" y2="310" stroke="#334155" strokeWidth="1.6" />
                <Arrow x1={110} y1={293} x2={292} y2={293} color="#ea580c" />
                <text x="84" y="321" fontSize="11" fill="#9a3412">v_optica = {propagationViz?.vOpticaTxt} m/s</text>
              </>
            ) : null}

            {group === "stringPropagation" ? (
              <>
                <rect x="72" y="84" width="322" height="244" rx="10" fill="rgba(37,99,235,0.08)" stroke="#1d4ed8" strokeWidth="1.8" />
                <text x="84" y="106" fontSize="12" fill="#1e3a8a" fontWeight="900">Visual de onda en cuerda (tema especifico)</text>

                <line x1="84" y1="166" x2="376" y2="166" stroke="rgba(30,41,59,0.35)" strokeWidth="2" />
                <path
                  d={makeWavePath({
                    x0: 84,
                    y0: 166,
                    w: 292,
                    amp: clamp(20 + waveViz.A * 8, 18, 42),
                    cycles: clamp(5 / Math.max(waveViz.lambda, 0.2), 1.4, 5),
                    phase: waveViz.phaseAnimated,
                  })}
                  fill="none"
                  stroke="#0ea5e9"
                  strokeWidth="3"
                />
                <line x1="218" y1="120" x2="218" y2="214" stroke="rgba(14,165,233,0.38)" strokeWidth="1.7" strokeDasharray="4 4" />
                <circle
                  cx="218"
                  cy={sampleWaveY({
                    x0: 84,
                    y0: 166,
                    w: 292,
                    amp: clamp(20 + waveViz.A * 8, 18, 42),
                    cycles: clamp(5 / Math.max(waveViz.lambda, 0.2), 1.4, 5),
                    phase: waveViz.phaseAnimated,
                    x: 218,
                  })}
                  r="5"
                  fill="#0284c7"
                />

                <line x1="102" y1={166 - clamp(20 + waveViz.A * 8, 18, 42)} x2="102" y2="166" stroke="#16a34a" strokeWidth="2" strokeDasharray="5 4" />
                <text x="108" y={166 - clamp(20 + waveViz.A * 8, 18, 42) / 2} fontSize="12" fill="#166534" fontWeight="900">A</text>
                <MeasureSpan
                  x1={94}
                  y1={124}
                  x2={clamp(94 + 292 / clamp(5 / Math.max(waveViz.lambda, 0.2), 1.4, 5), 94, 370)}
                  color="#ea580c"
                />
                <text
                  x={clamp(94 + (292 / clamp(5 / Math.max(waveViz.lambda, 0.2), 1.4, 5)) / 2, 110, 330)}
                  y="116"
                  fontSize="11"
                  fill="#9a3412"
                  fontWeight="900"
                  textAnchor="middle"
                >
                  lambda
                </text>
                <Arrow x1={250} y1={216} x2={330} y2={216} color="#16a34a" />
                <text x="336" y="220" fontSize="11" fill="#166534" fontWeight="900">direccion de propagacion</text>

                <rect x="82" y="228" width="302" height="90" rx="8" fill="rgba(2,6,23,0.15)" stroke="rgba(15,23,42,0.35)" strokeWidth="1.2" />
                <text x="92" y="248" fontSize="11" fill="#0f172a" fontWeight="900">Formulas acopladas</text>
                <text x="92" y="266" fontSize="11" fill="#0f172a">
                  v = sqrt(F_t/mu_l) = {fmt(propagationViz?.vCuerda, 2)} m/s
                </text>
                <text x="92" y="283" fontSize="11" fill="#0f172a">
                  v = lambda*f = {fmt(propagationViz?.vGeneral, 2)} m/s (f muestra = {fmt(propagationViz?.fNow, 2)} Hz)
                </text>
                <text x="92" y="300" fontSize="11" fill="#0f172a">
                  f1 = v/(2L) = {fmt(propagationViz?.fFund, 2)} Hz | t visual = {fmt(waveViz.tVisual, 2)} s
                </text>
              </>
            ) : null}

            {group === "surface" ? (
              <>
                <rect x="72" y="84" width="322" height="244" rx="10" fill="rgba(37,99,235,0.08)" stroke="#1d4ed8" strokeWidth="1.8" />
                <text x="84" y="106" fontSize="12" fill="#1e3a8a" fontWeight="900">
                  Ondas superficiales: interfaz aire-agua
                </text>

                <rect x="86" y="136" width="292" height="176" rx="8" fill="rgba(14,165,233,0.16)" stroke="rgba(14,116,144,0.45)" strokeWidth="1.2" />
                <line x1="86" y1="156" x2="378" y2="156" stroke="rgba(30,41,59,0.45)" strokeWidth="1.8" />
                <path
                  d={makeWavePath({
                    x0: 92,
                    y0: 156,
                    w: 280,
                    amp: clamp(14 + waveViz.A * 7, 14, 30),
                    cycles: clamp(5 / Math.max(surfaceViz?.lambdaNow || waveViz.lambda, 0.2), 1.3, 4.8),
                    phase: waveViz.phaseAnimated,
                  })}
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="3"
                />

                <line
                  x1="350"
                  y1="156"
                  x2="350"
                  y2={clamp(156 + (surfaceViz?.h || 1.2) * 24, 170, 300)}
                  stroke="#166534"
                  strokeWidth="2"
                  strokeDasharray="5 4"
                />
                <text x="356" y={clamp(156 + (surfaceViz?.h || 1.2) * 12, 168, 292)} fontSize="11" fill="#166534" fontWeight="900">
                  h
                </text>

                <MeasureSpan
                  x1={98}
                  y1={124}
                  x2={clamp(98 + 280 / clamp(5 / Math.max(surfaceViz?.lambdaNow || waveViz.lambda, 0.2), 1.3, 4.8), 98, 370)}
                  color="#ea580c"
                />
                <text
                  x={clamp(98 + (280 / clamp(5 / Math.max(surfaceViz?.lambdaNow || waveViz.lambda, 0.2), 1.3, 4.8)) / 2, 112, 340)}
                  y="116"
                  fontSize="11"
                  fill="#9a3412"
                  fontWeight="900"
                  textAnchor="middle"
                >
                  lambda
                </text>

                <Arrow x1={244} y1={208} x2={326} y2={208} color="#16a34a" />
                <text x="332" y="212" fontSize="11" fill="#166534" fontWeight="900">direccion de propagacion</text>

                <rect x="82" y="270" width="302" height="48" rx="8" fill="rgba(2,6,23,0.15)" stroke="rgba(15,23,42,0.35)" strokeWidth="1.2" />
                <text x="92" y="288" fontSize="11" fill="#0f172a">
                  v profunda = {fmt(surfaceViz?.vProfunda, 2)} m/s | v somera = {fmt(surfaceViz?.vSomera, 2)} m/s | kh = {fmt(surfaceViz?.kh, 3)}
                </text>
                <text x="92" y="304" fontSize="11" fill="#0f172a">
                  regimen estimado: {surfaceViz?.regime || "-"} | lambda(kh=1) ~ {fmt(surfaceViz?.lambdaKh1, 3)} m
                </text>
              </>
            ) : null}

            {group === "fluidLongitudinal" ? (
              <>
                <rect x="72" y="84" width="322" height="244" rx="10" fill="rgba(37,99,235,0.08)" stroke="#1d4ed8" strokeWidth="1.8" />
                <text x="84" y="106" fontSize="12" fill="#1e3a8a" fontWeight="900">
                  Onda longitudinal en fluido: compresion y rarefaccion
                </text>

                <rect x="88" y="142" width="290" height="86" rx="8" fill="rgba(14,165,233,0.10)" stroke="rgba(14,116,144,0.45)" strokeWidth="1.2" />
                <line x1="96" y1="185" x2="370" y2="185" stroke="rgba(30,41,59,0.30)" strokeWidth="1.6" />

                {Array.from({ length: 24 }, (_, i) => {
                  const u = i / 23;
                  const xBase = 100 + u * 260;
                  const phase = u * TWO_PI * clamp(4 / Math.max(longitudinalViz?.lambda || waveViz.lambda, 0.2), 1.1, 4.2) + waveViz.phaseAnimated;
                  const dx = 8 * Math.sin(phase);
                  return (
                    <circle
                      key={`lp-${i}`}
                      cx={xBase + dx}
                      cy={185}
                      r="3.7"
                      fill={Math.sin(phase) > 0.45 ? "#1d4ed8" : Math.sin(phase) < -0.45 ? "#10b981" : "#334155"}
                      opacity="0.95"
                    />
                  );
                })}

                <rect x="112" y="154" width="52" height="62" fill="rgba(29,78,216,0.10)" stroke="#1d4ed8" strokeDasharray="4 3" />
                <rect x="244" y="154" width="74" height="62" fill="rgba(16,185,129,0.10)" stroke="#10b981" strokeDasharray="4 3" />
                <text x="116" y="150" fontSize="10" fill="#1d4ed8" fontWeight="900">compresion</text>
                <text x="248" y="150" fontSize="10" fill="#047857" fontWeight="900">rarefaccion</text>

                <MeasureSpan x1="100" y1="132" x2={clamp(100 + 260 / clamp(4 / Math.max(longitudinalViz?.lambda || waveViz.lambda, 0.2), 1.1, 4.2), 100, 360)} color="#ea580c" />
                <text
                  x={clamp(100 + (260 / clamp(4 / Math.max(longitudinalViz?.lambda || waveViz.lambda, 0.2), 1.1, 4.2)) / 2, 115, 335)}
                  y="124"
                  fontSize="11"
                  fill="#9a3412"
                  fontWeight="900"
                  textAnchor="middle"
                >
                  lambda
                </text>

                <Arrow x1={250} y1={238} x2={334} y2={238} color="#16a34a" />
                <text x="338" y="242" fontSize="11" fill="#166534" fontWeight="900">direccion de propagacion</text>

                <rect x="82" y="270" width="302" height="48" rx="8" fill="rgba(2,6,23,0.15)" stroke="rgba(15,23,42,0.35)" strokeWidth="1.2" />
                <text x="92" y="288" fontSize="11" fill="#0f172a">
                  v modelo = {fmt(longitudinalViz?.vModel, 2)} m/s | Z = {fmt(longitudinalViz?.Z, 2)} Pa*s/m | rho = {fmt(longitudinalViz?.rho, 2)} kg/m^3
                </text>
                <text x="92" y="304" fontSize="11" fill="#0f172a">
                  v=lambda*f = {fmt(longitudinalViz?.vWave, 2)} m/s | error relativo = {fmt((longitudinalViz?.matchErr || 0) * 100, 2)}%
                </text>
              </>
            ) : null}

            {group === "standing" ? (
              <>
                <rect x="72" y="84" width="322" height="244" rx="10" fill="rgba(37,99,235,0.08)" stroke="#1d4ed8" strokeWidth="1.8" />
                <text x="84" y="106" fontSize="12" fill="#1e3a8a" fontWeight="900">
                  Cuerda fija-fija: modo n = {standingViz?.nSel ?? "-"}
                </text>

                <rect x="92" y="130" width="282" height="112" rx="8" fill="rgba(2,6,23,0.10)" stroke="rgba(30,41,59,0.25)" strokeWidth="1.2" />
                <line x1="94" y1="186" x2="372" y2="186" stroke="rgba(30,41,59,0.45)" strokeWidth="2.1" />
                <path d={standingPath} fill="none" stroke="#0ea5e9" strokeWidth="3" />

                {standingViz
                  ? Array.from({ length: standingViz.nSel + 1 }, (_, i) => {
                      const x = 94 + (278 * i) / standingViz.nSel;
                      return <circle key={`node-${i}`} cx={x} cy="186" r="4.4" fill="#1d4ed8" />;
                    })
                  : null}
                {standingViz && standingViz.nSel > 0
                  ? Array.from({ length: standingViz.nSel }, (_, i) => {
                      const x = 94 + (278 * (i + 0.5)) / standingViz.nSel;
                      return <circle key={`anti-${i}`} cx={x} cy="186" r="3.6" fill="#f97316" />;
                    })
                  : null}

                <line x1="94" y1="248" x2="372" y2="248" stroke="rgba(30,41,59,0.35)" strokeWidth="1.3" />
                <MeasureSpan
                  x1="94"
                  y1="248"
                  x2={standingViz && standingViz.nSel >= 2 ? 94 + (278 * 2) / standingViz.nSel : 372}
                  color="#ea580c"
                />
                <text
                  x={standingViz && standingViz.nSel >= 2 ? 94 + (278 / standingViz.nSel) : 233}
                  y="262"
                  fontSize="11"
                  fill="#9a3412"
                  fontWeight="900"
                  textAnchor="middle"
                >
                  lambda_n
                </text>

                <line x1="94" y1="140" x2="94" y2="232" stroke="rgba(30,41,59,0.45)" strokeWidth="2.2" />
                <line x1="372" y1="140" x2="372" y2="232" stroke="rgba(30,41,59,0.45)" strokeWidth="2.2" />
                <text x="92" y="126" fontSize="10" fill="#334155" fontWeight="900">x=0</text>
                <text x="356" y="126" fontSize="10" fill="#334155" fontWeight="900">x=L</text>

                <rect x="82" y="270" width="302" height="48" rx="8" fill="rgba(2,6,23,0.15)" stroke="rgba(15,23,42,0.35)" strokeWidth="1.2" />
                <text x="92" y="288" fontSize="11" fill="#0f172a">
                  f_n = {fmt(standingViz?.fn, 2)} Hz | f_1 = {fmt(standingViz?.f1, 2)} Hz | lambda_n = {fmt(standingViz?.lambdaN, 3)} m
                </text>
                <text x="92" y="304" fontSize="11" fill="#0f172a">
                  v = {fmt(standingViz?.v, 2)} m/s | L = {fmt(standingViz?.L, 3)} m | omega_n = {fmt(standingViz?.omegaN, 2)} rad/s
                </text>
              </>
            ) : null}

            {group === "basic" ? (
              <>
                <path d={makeWavePath({ x0: 72, y0: 186, w: 320, amp: sketchAmp, cycles: sketchCycles, phase: waveViz.phaseAnimated })} fill="none" stroke="#1d4ed8" strokeWidth="3" />
                <line x1="72" y1="186" x2="392" y2="186" stroke="rgba(30,41,59,0.35)" strokeWidth="2" />
                <line x1="88" y1={186 - sketchAmp} x2="88" y2="186" stroke="#16a34a" strokeWidth="2" strokeDasharray="5 4" />
                <text x="94" y={186 - sketchAmp / 2} fontSize="12" fill="#166534" fontWeight="900">A</text>
                <line x1="250" y1={186 - sketchAmp - 6} x2="250" y2={186 + sketchAmp + 6} stroke="rgba(30,64,175,0.35)" strokeWidth="1.7" strokeDasharray="5 4" />
                <circle cx="250" cy={sampleWaveY({ x0: 72, y0: 186, w: 320, amp: sketchAmp, cycles: sketchCycles, phase: waveViz.phaseAnimated, x: 250 })} r="5" fill="#1d4ed8" />
                <MeasureSpan x1={basicLambdaStart} y1="110" x2={basicLambdaEnd} color="#ea580c" />
                <text x={basicLambdaLabelX} y="100" fontSize="12" fill="#9a3412" fontWeight="900" textAnchor="middle">lambda</text>
                <Arrow x1={220} y1={250} x2={292} y2={250} color="#16a34a" />
                <text x="305" y="254" fontSize="12" fill="#166534" fontWeight="900">direccion de propagacion</text>
                <text x="72" y="274" fontSize="12" fill="#0f172a">f = {fmt(waveViz.f, 2)} Hz | T = {fmt(waveViz.T, 2)} s | t visual = {fmt(waveViz.tVisual, 2)} s | v = {fmt(waveViz.v, 2)} m/s</text>
              </>
            ) : null}

            {group === "shape" ? (
              <>
                <rect x="86" y="124" width="292" height="124" fill="rgba(30,64,175,0.08)" stroke="#1d4ed8" strokeWidth="2" rx="10" />
                <path d={makeWavePath({ x0: 96, y0: 186, w: 272, amp: sketchAmp, cycles: sketchCycles, phase: waveViz.phaseAnimated })} fill="none" stroke="#2563eb" strokeWidth="3" />
                <line x1="238" y1={186 - sketchAmp - 6} x2="238" y2={186 + sketchAmp + 6} stroke="rgba(37,99,235,0.35)" strokeWidth="1.6" strokeDasharray="4 4" />
                <circle cx="238" cy={sampleWaveY({ x0: 96, y0: 186, w: 272, amp: sketchAmp, cycles: sketchCycles, phase: waveViz.phaseAnimated, x: 238 })} r="4.8" fill="#1d4ed8" />
                <circle cx="96" cy="186" r="4" fill="#1d4ed8" />
                <circle cx="232" cy="186" r="4" fill="#1d4ed8" />
                <circle cx="368" cy="186" r="4" fill="#1d4ed8" />
                <text x="108" y="112" fontSize="12" fill="#1e40af" fontWeight="900">modos y fase</text>
                <MeasureSpan x1={shapeLambdaStart} y1="242" x2={shapeLambdaEnd} color="#ea580c" />
                <text x={shapeLambdaLabelX} y="258" fontSize="12" fill="#9a3412" fontWeight="900" textAnchor="middle">lambda</text>
              </>
            ) : null}

            {group === "optics" ? (
              <>
                <line x1="236" y1="84" x2="236" y2="286" stroke="#334155" strokeWidth="2.4" />
                <line x1="86" y1="186" x2="378" y2="186" stroke="#334155" strokeWidth="2.4" />
                <Arrow x1={120} y1={104} x2={232} y2={182} color="#2563eb" />
                <Arrow x1={232} y1={182} x2={346} y2={120} color="#16a34a" />
                <Arrow x1={232} y1={182} x2={340} y2={246} color="#f97316" />
                <text x="100" y="98" fontSize="12" fill="#1e3a8a" fontWeight="900">incidente</text>
                <text x="340" y="114" fontSize="12" fill="#166534" fontWeight="900">reflejada</text>
                <text x="346" y="258" fontSize="12" fill="#9a3412" fontWeight="900">refractada</text>
              </>
            ) : null}

            {group === "interference" ? (
              <>
                <circle cx="122" cy="186" r="10" fill="#2563eb" />
                <circle cx="172" cy="186" r="10" fill="#16a34a" />
                {Array.from({ length: 6 }, (_, i) => (
                  <g key={`arc-${i}`}>
                    <circle cx="122" cy="186" r={26 + i * 20} fill="none" stroke="rgba(37,99,235,0.35)" strokeWidth="1.5" />
                    <circle cx="172" cy="186" r={26 + i * 20} fill="none" stroke="rgba(22,163,74,0.35)" strokeWidth="1.5" />
                  </g>
                ))}
                <line x1="262" y1="96" x2="392" y2="96" stroke="#334155" strokeWidth="2" />
                <line x1="262" y1="276" x2="392" y2="276" stroke="#334155" strokeWidth="2" />
                <line x1="262" y1="96" x2="262" y2="276" stroke="#334155" strokeWidth="2" />
                <text x="268" y="88" fontSize="12" fill="#334155" fontWeight="900">pantalla</text>
              </>
            ) : null}

            {group === "doppler" ? (
              <>
                <Arrow x1={92} y1={186} x2={152} y2={186} color="#0f766e" />
                <circle cx="162" cy="186" r="11" fill="#0f766e" />
                {Array.from({ length: 8 }, (_, i) => (
                  <circle
                    key={`dop-${i}`}
                    cx={162 + i * 18}
                    cy="186"
                    r={16 + i * 13}
                    fill="none"
                    stroke="rgba(14,116,144,0.45)"
                    strokeWidth="1.4"
                  />
                ))}
                <text x="92" y="168" fontSize="12" fill="#0f766e" fontWeight="900">fuente movil</text>
              </>
            ) : null}

            {group === "em" ? (
              <>
                <rect x="86" y="156" width="300" height="44" fill="url(#specGrad)" rx="8" />
                <line x1="86" y1="214" x2="386" y2="214" stroke="#334155" strokeWidth="2" />
                <text x="86" y="142" fontSize="12" fill="#7f1d1d" fontWeight="900">baja frecuencia</text>
                <text x="312" y="142" fontSize="12" fill="#4c1d95" fontWeight="900">alta frecuencia</text>
                <text x="86" y="232" fontSize="12" fill="#1f2937">lambda grande</text>
                <text x="300" y="232" fontSize="12" fill="#1f2937">lambda pequena</text>
              </>
            ) : null}

            {group === "energy" ? (
              <>
                <path d={makeWavePath({ x0: 78, y0: 184, w: 220, amp: 36, cycles: 2.8, phase: waveViz.phaseAnimated })} fill="none" stroke="#1d4ed8" strokeWidth="2.6" />
                <line x1="182" y1="138" x2="182" y2="230" stroke="rgba(37,99,235,0.35)" strokeWidth="1.6" strokeDasharray="4 4" />
                <circle cx="182" cy={sampleWaveY({ x0: 78, y0: 184, w: 220, amp: 36, cycles: 2.8, phase: waveViz.phaseAnimated, x: 182 })} r="5" fill="#1d4ed8" />
                <rect x="312" y="118" width="64" height="130" fill="rgba(37,99,235,0.22)" stroke="#1d4ed8" strokeWidth="2" />
                <rect x="322" y="182" width="44" height="66" fill="#f97316" />
                <text x="317" y="108" fontSize="12" fill="#0f172a" fontWeight="900">energia</text>
              </>
            ) : null}
          </>
        ) : null}

        <line x1="500" y1="315" x2="780" y2="315" stroke="rgba(30,41,59,0.30)" strokeWidth="2.2" />
        {showY1 ? <rect x="560" y={315 - bar1} width="48" height={bar1} fill="#60a5fa" opacity="0.95" /> : null}
        {showY2 ? <rect x="655" y={315 - bar2} width="48" height={bar2} fill="#34d399" opacity="0.95" /> : null}
        {showY1 ? <text x="584" y="335" fill="#1d4ed8" fontSize="10" fontWeight="900" textAnchor="middle">{barLabel(built.y1Label, "Y1")}</text> : null}
        {showY2 ? <text x="679" y="335" fill="#166534" fontSize="10" fontWeight="900" textAnchor="middle">{barLabel(built.y2Label, "Y2")}</text> : null}
      </g>
    </SvgFrame>
  );
}
