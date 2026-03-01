import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import {
  resolveFluidModelForLeaf,
  toNum,
  clamp,
  getFluidParamAliases,
  withFluidDerivedParams,
} from "./fluidModels";

const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function Slider({ value, min, max, step, onChange }) {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ width: "100%", accentColor: "#6366f1", cursor: "pointer" }}
    />
  );
}

function Arrow({ x1, y1, x2, y2, color, label, dashed = false }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;

  const head = 18;
  const wing = 8;
  const hx = x2 + ux * 10;
  const hy = y2 + uy * 10;
  const lx = hx - ux * head - uy * wing;
  const ly = hy - uy * head + ux * wing;
  const rx = hx - ux * head + uy * wing;
  const ry = hy - uy * head - ux * wing;

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={hx}
        y2={hy}
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={dashed ? "8 6" : undefined}
      />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} opacity="0.95" />
      {label ? (
        <text x={hx + ux * 14} y={hy + uy * 14} fill={color} fontSize="12" fontWeight="900" textAnchor="middle">
          {label}
        </text>
      ) : null}
    </g>
  );
}

function dirForScenario(scenario) {
  if (scenario === "presion" || scenario === "pascal") {
    return { y1: { x: 0, y: -1 }, y2: { x: 0, y: 1 } };
  }
  if (scenario === "arquimedes") {
    return { y1: { x: 0, y: -1 }, y2: { x: 0, y: 1 } };
  }
  if (scenario === "continuidad" || scenario === "bernoulli" || scenario === "reynolds") {
    return { y1: { x: 1, y: 0 }, y2: { x: -0.65, y: 0.35 } };
  }
  if (scenario === "ondas") {
    return { y1: { x: 0, y: -1 }, y2: { x: 1, y: 0 } };
  }
  return { y1: { x: 0.7, y: -0.7 }, y2: { x: -0.8, y: -0.5 } };
}

function insightForScenario(scenario) {
  if (scenario === "arquimedes") return "Si E supera al peso, el cuerpo asciende o flota.";
  if (scenario === "presion" || scenario === "pascal") return "Los gradientes de presion generan fuerzas netas sobre el elemento.";
  if (scenario === "continuidad") return "Al reducir el area, la velocidad debe aumentar para conservar el caudal.";
  if (scenario === "bernoulli") return "Donde aumenta la velocidad, suele disminuir la presion estatica.";
  if (scenario === "reynolds") return "El equilibrio entre inercia y viscosidad define el regimen del flujo.";
  if (scenario === "ondas") return "En ondas, la perturbacion y la propagacion no son la misma magnitud.";
  if (scenario === "tension") return "La tension superficial crea salto de presion en interfaces curvas.";
  return "Un DCL permite ver de un vistazo que interacciones dominan el fenomeno.";
}

export default function FluidosGraphsDcl({
  title,
  params,
  leafRelPath,
  formulasDoc,
  magnitudesDoc,
}) {
  const VIEW_W = 850;
  const VIEW_H = 420;
  const Y_SHIFT = 24;

  const resolved = useMemo(
    () =>
      resolveFluidModelForLeaf({
        leafRelPath,
        motionId: params?.motionId,
        title,
        formulasDoc,
        magnitudesDoc,
      }),
    [leafRelPath, params?.motionId, title, formulasDoc, magnitudesDoc]
  );
  const scenario = resolved.scenario;
  const model = resolved.model;
  const paramsForGraph = useMemo(
    () => withFluidDerivedParams({ scenario, params }),
    [scenario, params]
  );

  const schema = useMemo(() => {
    const base = model.params.map((p) => ({
      key: p.key,
      aliases: getFluidParamAliases(p.key),
      default: toNum(paramsForGraph?.[p.key], p.default),
    }));
    base.push(
      { key: "sample", default: toNum(paramsForGraph?.sample, 0.55) },
      { key: "showY1", default: paramsForGraph?.showY1 ?? true },
      { key: "showY2", default: paramsForGraph?.showY2 ?? true },
      { key: "showResult", default: paramsForGraph?.showResult ?? true },
      { key: "showAxes", default: paramsForGraph?.showAxes ?? false },
      { key: "showElement", default: paramsForGraph?.showElement ?? true },
      { key: "showField", default: paramsForGraph?.showField ?? true }
    );
    return base;
  }, [model, paramsForGraph]);

  const exp = useExperimentParams({ params: paramsForGraph, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const p = useMemo(() => {
    const out = {};
    for (const cfg of model.params) out[cfg.key] = toNum(ep[cfg.key], cfg.default);
    return out;
  }, [ep, model]);

  const built = useMemo(() => model.build(p), [model, p]);
  const sample = clamp(toNum(ep.sample, 0.55), 0, 1);
  const idx = Math.round(sample * (built.data.length - 1));
  const point = built.data[idx] || { x: 0, y1: 0, y2: 0 };

  const showY1 = !!ep.showY1;
  const showY2 = !!ep.showY2;
  const showResult = !!ep.showResult;
  const showAxes = !!ep.showAxes;
  const showElement = !!ep.showElement;
  const showField = !!ep.showField;

  const maxAbs = Math.max(
    1,
    ...built.data.map((d) => Math.max(Math.abs(d.y1 || 0), Math.abs(d.y2 || 0)))
  );
  const y1Len = (Math.abs(point.y1 || 0) / maxAbs) * 110 + 28;
  const y2Len = (Math.abs(point.y2 || 0) / maxAbs) * 110 + 28;
  const resRaw = Math.abs((point.y1 || 0) - (point.y2 || 0));
  const rLen = (resRaw / maxAbs) * 125 + 30;

  const dirs = dirForScenario(scenario);
  const c = { x: 410, y: 175 };
  const y1End = { x: c.x + dirs.y1.x * y1Len, y: c.y + dirs.y1.y * y1Len };
  const y2End = { x: c.x + dirs.y2.x * y2Len, y: c.y + dirs.y2.y * y2Len };

  const resDirRaw = {
    x: dirs.y1.x * (point.y1 || 0) + dirs.y2.x * (point.y2 || 0),
    y: dirs.y1.y * (point.y1 || 0) + dirs.y2.y * (point.y2 || 0),
  };
  const norm = Math.hypot(resDirRaw.x, resDirRaw.y) || 1;
  const resDir = { x: resDirRaw.x / norm, y: resDirRaw.y / norm };
  const rEnd = { x: c.x + resDir.x * rLen, y: c.y + resDir.y * rLen };

  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

  return (
    <SvgFrame
      title={title || `${model.title} (DCL)`}
      subtitle="Diagrama de cuerpo libre del elemento de fluido"
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
            onClick={exp.resetToCalculator}
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
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACION BASE</div>
            <div style={{ marginTop: 8, color: "#93c5fd" }}>
              <MathInline latex={model.formula} />
            </div>
            <div style={{ marginTop: 8, fontSize: 12, opacity: 0.82, lineHeight: 1.45 }}>{insightForScenario(scenario)}</div>
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
                    value={p[cfg.key]}
                    onChange={(e) => setValue(cfg.key, e.target.value)}
                  />
                </div>
              ))}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>muestra (0-1)</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(sample, 2)}</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={sample} min={0} max={1} step={0.01} onChange={(v) => setValue("sample", v)} />
                </div>
              </div>
            </div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showY1} onChange={(e) => setValue("showY1", e.target.checked)} /><span className="v2-toggle-label">{built.y1Label}</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showY2} onChange={(e) => setValue("showY2", e.target.checked)} /><span className="v2-toggle-label">{built.y2Label}</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showResult} onChange={(e) => setValue("showResult", e.target.checked)} /><span className="v2-toggle-label">resultante</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showField} onChange={(e) => setValue("showField", e.target.checked)} /><span className="v2-toggle-label">campo</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setValue("showAxes", e.target.checked)} /><span className="v2-toggle-label">ejes</span></label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              {built.xLabel}: <b>{fmt(point.x, 4)}</b>
              <br />
              {built.y1Label}: <b style={{ color: "#3b82f6" }}>{fmt(point.y1, 4)}</b>
              <br />
              {built.y2Label}: <b style={{ color: "#16a34a" }}>{fmt(point.y2, 4)}</b>
            </div>
          </div>
        </div>
      }
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      svgHeight={390}
    >
      <defs>
        <linearGradient id="bgFluidosDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#bgFluidosDcl)" />
      <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="rgba(0,0,0,0.08)" />

      <g transform={`translate(0 ${Y_SHIFT})`}>
        {showAxes ? (
          <g opacity="0.8">
            <line x1="140" y1="305" x2="790" y2="305" stroke="#64748b" strokeWidth="3" />
            <line x1="140" y1="305" x2="140" y2="40" stroke="#64748b" strokeWidth="3" />
            <text x="796" y="309" fontSize="12" fill="#64748b">x</text>
            <text x="132" y="34" fontSize="12" fill="#64748b">y</text>
          </g>
        ) : null}

        {showField ? (
          <g opacity="0.35">
            {Array.from({ length: 7 }, (_, i) => (
              <line key={`h-${i}`} x1="170" y1={74 + i * 36} x2="780" y2={74 + i * 36} stroke="#1d4ed8" strokeDasharray="6 7" />
            ))}
          </g>
        ) : null}

        {showElement ? (
          <g>
            <rect x="345" y="130" width="130" height="90" rx="10" fill="rgba(37,99,235,0.20)" stroke="#1d4ed8" strokeWidth="2.5" />
            <text x="410" y="182" fontSize="12" fill="#0f172a" fontWeight="900" textAnchor="middle">
              elemento de fluido
            </text>
          </g>
        ) : null}

        {showY1 ? <Arrow x1={c.x} y1={c.y} x2={y1End.x} y2={y1End.y} color="#3b82f6" label="Y1" /> : null}
        {showY2 ? <Arrow x1={c.x} y1={c.y} x2={y2End.x} y2={y2End.y} color="#16a34a" label="Y2" /> : null}
        {showResult ? <Arrow x1={c.x} y1={c.y} x2={rEnd.x} y2={rEnd.y} color="#f97316" label="R" dashed /> : null}

        <g>
          <rect x="585" y="96" width="215" height="130" rx="10" fill="rgba(15,23,42,0.75)" stroke="rgba(255,255,255,0.18)" />
          <text x="598" y="120" fill="#bfdbfe" fontSize="12" fontWeight="900">{built.y1Label}</text>
          <text x="598" y="138" fill="#e2e8f0" fontSize="12">valor: {fmt(point.y1, 4)}</text>
          <text x="598" y="164" fill="#86efac" fontSize="12" fontWeight="900">{built.y2Label}</text>
          <text x="598" y="182" fill="#e2e8f0" fontSize="12">valor: {fmt(point.y2, 4)}</text>
          <text x="598" y="208" fill="#fdba74" fontSize="12" fontWeight="900">resultante relativa</text>
          <text x="598" y="226" fill="#e2e8f0" fontSize="12">|Y1 - Y2|: {fmt(resRaw, 4)}</text>
        </g>
      </g>
    </SvgFrame>
  );
}
