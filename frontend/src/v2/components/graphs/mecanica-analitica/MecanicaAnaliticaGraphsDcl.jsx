import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import {
  detectAnalyticScenario,
  getAnalyticModel,
  toNum,
  clamp,
} from "./analyticModels";

const fmt = (n, d = 3) => (Number.isFinite(n) ? Number(n).toFixed(d).replace(".", ",") : "-");

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

function Arrow({ x1, y1, x2, y2, color, label }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const head = 14;
  const wing = 7;
  const hx = x2 + ux * 8;
  const hy = y2 + uy * 8;
  const lx = hx - ux * head - uy * wing;
  const ly = hy - uy * head + ux * wing;
  const rx = hx - ux * head + uy * wing;
  const ry = hy - uy * head - ux * wing;
  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="4" strokeLinecap="round" />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} />
      <text x={hx + 10} y={hy - 8} fontSize="12" fill={color} fontWeight="900">
        {label}
      </text>
    </g>
  );
}

export default function MecanicaAnaliticaGraphsDcl({
  title,
  params,
  sharedParams,
  leafRelPath,
}) {
  const p = params ?? sharedParams ?? {};
  const scenario = useMemo(
    () => detectAnalyticScenario(leafRelPath, p?.motionId, title),
    [leafRelPath, p?.motionId, title]
  );
  const model = useMemo(() => getAnalyticModel(scenario), [scenario]);

  const schema = useMemo(() => {
    const base = model.params.map((cfg) => ({
      key: cfg.key,
      aliases: cfg.aliases || [],
      default: toNum(p?.[cfg.key], cfg.default),
    }));
    base.push(
      { key: "sample", default: toNum(p?.sample, 0.55) },
      { key: "showY1", default: p?.showY1 ?? true },
      { key: "showY2", default: p?.showY2 ?? true },
      { key: "showAxes", default: p?.showAxes ?? true }
    );
    return base;
  }, [model, p]);

  const exp = useExperimentParams({ params: p, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const valueMap = useMemo(() => {
    const out = {};
    for (const cfg of model.params) {
      out[cfg.key] = clamp(
        toNum(ep[cfg.key], cfg.default),
        cfg.min ?? Number.NEGATIVE_INFINITY,
        cfg.max ?? Number.POSITIVE_INFINITY
      );
    }
    return out;
  }, [model, ep]);

  const data = useMemo(() => model.build(valueMap).data || [], [model, valueMap]);
  const sampleRatio = clamp(toNum(ep.sample, 0.55), 0, 1);
  const idx = Math.max(0, Math.min(data.length - 1, Math.round(sampleRatio * (data.length - 1))));
  const point = data[idx] || { x: 0, y1: 0, y2: 0 };
  const showY1 = !!ep.showY1;
  const showY2 = !!ep.showY2;
  const showAxes = !!ep.showAxes;

  const mRef = useMemo(() => {
    let maxV = 1;
    for (const d of data) maxV = Math.max(maxV, Math.abs(d.y1 || 0), Math.abs(d.y2 || 0));
    return maxV;
  }, [data]);

  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

  const base = { x: 250, y: 180 };
  const len1 = (Math.abs(point.y1) / mRef) * 120;
  const len2 = (Math.abs(point.y2) / mRef) * 120;
  const sign1 = point.y1 >= 0 ? -1 : 1;
  const sign2 = point.y2 >= 0 ? -1 : 1;

  return (
    <SvgFrame
      title={title || `${model.title} (DCL)`}
      subtitle="Lectura vectorial de dos magnitudes del modelo activo"
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
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACION</div>
            <div style={{ marginTop: 8, color: "#93c5fd" }}>
              <MathInline latex={model.formula} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {model.params.map((cfg) => (
                <div key={cfg.key}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{cfg.label}</div>
                    <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(valueMap[cfg.key], 2)}</div>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <Slider value={valueMap[cfg.key]} min={cfg.min ?? 0} max={cfg.max ?? 10} step={cfg.step ?? 0.1} onChange={(v) => setValue(cfg.key, v)} />
                  </div>
                </div>
              ))}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>muestra</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(sampleRatio, 2)}</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={sampleRatio} min={0} max={1} step={0.01} onChange={(v) => setValue("sample", v)} />
                </div>
              </div>
            </div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showY1} onChange={(e) => setValue("showY1", e.target.checked)} /><span className="v2-toggle-label">{model.y1Label}</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showY2} onChange={(e) => setValue("showY2", e.target.checked)} /><span className="v2-toggle-label">{model.y2Label}</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setValue("showAxes", e.target.checked)} /><span className="v2-toggle-label">ejes</span></label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              x = <b>{fmt(point.x, 3)}</b>
              <br />
              {model.y1Label} = <b style={{ color: "#3b82f6" }}>{fmt(point.y1, 3)}</b>
              <br />
              {model.y2Label} = <b style={{ color: "#f97316" }}>{fmt(point.y2, 3)}</b>
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgAnaliticaDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="850" height="330" fill="url(#bgAnaliticaDcl)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {showAxes ? (
        <>
          <line x1="90" y1="250" x2="760" y2="250" stroke="#64748b" strokeWidth="3" />
          <line x1="90" y1="250" x2="90" y2="50" stroke="#64748b" strokeWidth="3" />
          <text x="770" y="254" fontSize="12" fill="#64748b">x</text>
          <text x="82" y="42" fontSize="12" fill="#64748b">y</text>
        </>
      ) : null}

      <circle cx={base.x} cy={base.y} r="14" fill="rgba(15,23,42,0.55)" />
      <text x={base.x - 28} y={base.y - 20} fontSize="12" fill="#1e293b" fontWeight="900">
        estado
      </text>

      {showY1 ? <Arrow x1={base.x} y1={base.y} x2={base.x + 170} y2={base.y + sign1 * len1} color="#3b82f6" label={model.y1Label} /> : null}
      {showY2 ? <Arrow x1={base.x} y1={base.y} x2={base.x + 170} y2={base.y + sign2 * len2} color="#f97316" label={model.y2Label} /> : null}

      <line x1="430" y1="40" x2="430" y2="300" stroke="rgba(15,23,42,0.2)" strokeDasharray="7 7" />
      <text x="455" y="86" fontSize="13" fill="#0f172a" fontWeight="900">
        Modo vectorial didactico
      </text>
      <text x="455" y="114" fontSize="12" fill="#334155">
        El vector azul y el naranja se escalan con la muestra actual.
      </text>
      <text x="455" y="134" fontSize="12" fill="#334155">
        Sirve para comparar magnitudes y signos en un mismo instante.
      </text>
    </SvgFrame>
  );
}

