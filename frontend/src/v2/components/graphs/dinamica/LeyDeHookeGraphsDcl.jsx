import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const pickNum = (obj, keys, fb) => {
  for (const k of keys) {
    const v = obj?.[k];
    if (v === undefined || v === null || v === "") continue;
    const n = toNum(v, NaN);
    if (Number.isFinite(n)) return n;
  }
  return fb;
};

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

function Arrow({ x1, y1, x2, y2, color, label, labelOffset = 14, labelNormalOffset = 0, arrowExtend = 9, dashed = false }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const head = 20;
  const wing = 9;

  const hx = x2 + ux * arrowExtend;
  const hy = y2 + uy * arrowExtend;
  const lx = hx - ux * head - uy * wing;
  const ly = hy - uy * head + ux * wing;
  const rx = hx - ux * head + uy * wing;
  const ry = hy - uy * head - ux * wing;

  const nx = -uy;
  const ny = ux;
  const tx = hx + ux * labelOffset + nx * labelNormalOffset;
  const ty = hy + uy * labelOffset + ny * labelNormalOffset;

  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={dashed ? "8 8" : undefined} />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} opacity="0.96" />
      {label ? (
        <text x={tx} y={ty} fontSize="13" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function LeyDeHookeGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "scene", aliases: ["mode", "escena"], default: p.scene || "horizontal" },
      { key: "k", aliases: ["constante"], default: pickNum(p, ["k", "constante"], 80) },
      { key: "x", aliases: ["elongacion"], default: pickNum(p, ["x", "elongacion"], 0.12) },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 1.2) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "showFs", aliases: ["mostrarFs"], default: p.showFs ?? true },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showN", aliases: ["mostrarN"], default: p.showN ?? true },
      { key: "showFext", aliases: ["mostrarFext"], default: p.showFext ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? false },
    ],
    [
      p.scene,
      pickNum(p, ["k", "constante"], 80),
      pickNum(p, ["x", "elongacion"], 0.12),
      pickNum(p, ["m", "masa"], 1.2),
      pickNum(p, ["g", "gravedad"], 9.81),
      p.showFs,
      p.showW,
      p.showN,
      p.showFext,
      p.showAxes,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const scene = ep.scene === "vertical" ? "vertical" : "horizontal";
  const k = clamp(toNum(ep.k, 80), 0.1, 2000);
  const x = clamp(toNum(ep.x, 0.12), -0.4, 0.4);
  const m = clamp(toNum(ep.m, 1.2), 0.05, 100);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const showFs = !!ep.showFs;
  const showW = !!ep.showW;
  const showN = !!ep.showN;
  const showFext = !!ep.showFext;
  const showAxes = !!ep.showAxes;

  const Fs = -k * x;
  const W = m * g;
  const Fscale = Math.max(1, Math.abs(Fs), W);
  const origin = { x: 430, y: 168 };
  const toLen = (v, base = 125) => (Math.abs(v) / Fscale) * base;

  const fsH = { x: origin.x + (Fs >= 0 ? toLen(Fs) : -toLen(Fs)), y: origin.y };
  const fextH = { x: origin.x + (Fs >= 0 ? -toLen(Fs) : toLen(Fs)), y: origin.y };
  const wSmall = { x: origin.x, y: origin.y + 70 };
  const nSmall = { x: origin.x, y: origin.y - 70 };

  const wV = { x: origin.x, y: origin.y + toLen(W) };
  const fsV = { x: origin.x, y: origin.y - toLen(Fs) };
  const fextV = { x: origin.x, y: origin.y - toLen(W) };

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setScene = useCallback((v) => { exp.startExperiment(); exp.setValue("scene", v); }, [exp]);
  const setK = useCallback((v) => { exp.startExperiment(); exp.setValue("k", v); }, [exp]);
  const setX = useCallback((v) => { exp.startExperiment(); exp.setValue("x", v); }, [exp]);
  const setM = useCallback((v) => { exp.startExperiment(); exp.setValue("m", v); }, [exp]);
  const setG = useCallback((v) => { exp.startExperiment(); exp.setValue("g", v); }, [exp]);
  const setShowFs = useCallback((v) => { exp.startExperiment(); exp.setValue("showFs", v); }, [exp]);
  const setShowW = useCallback((v) => { exp.startExperiment(); exp.setValue("showW", v); }, [exp]);
  const setShowN = useCallback((v) => { exp.startExperiment(); exp.setValue("showN", v); }, [exp]);
  const setShowFext = useCallback((v) => { exp.startExperiment(); exp.setValue("showFext", v); }, [exp]);
  const setShowAxes = useCallback((v) => { exp.startExperiment(); exp.setValue("showAxes", v); }, [exp]);

  return (
    <SvgFrame
      title="Ley de Hooke (DCL)"
      subtitle="Solo vectores elastico, peso y soporte"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
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
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACIONES</div>
            <div style={{ marginTop: 10, display: "grid", gap: 2 }}>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Fuerza elastica</div>
                <div style={{ marginTop: 2, color: "#7c3aed" }}>
                  <MathInline latex={"F_s=-kx"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Equilibrio vertical</div>
                <div style={{ marginTop: 2, color: "#3b82f6" }}>
                  <MathInline latex={"kx \\approx mg"} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <Pill active={scene === "horizontal"} onClick={() => setScene("horizontal")}>Horizontal</Pill>
                <Pill active={scene === "vertical"} onClick={() => setScene("vertical")}>Vertical</Pill>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>k</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(k, 2)} N/m</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={k} min={1} max={1000} step={1} onChange={setK} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>x</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(x, 3)} m</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={x} min={-0.4} max={0.4} step={0.001} onChange={setX} /></div>
              </div>

              <div style={{ opacity: scene === "vertical" ? 1 : 0.55 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.05} max={20} step={0.01} onChange={setM} /></div>
              </div>

              <div style={{ opacity: scene === "vertical" ? 1 : 0.55 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>g</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s2</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={setG} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFs} onChange={(e) => setShowFs(e.target.checked)} /><span className="v2-toggle-label">F_s</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setShowW(e.target.checked)} /><span className="v2-toggle-label">W</span></label>
                <label className="v2-toggle" style={{ opacity: scene === "horizontal" ? 1 : 0.5 }}><input className="v2-toggle-input" type="checkbox" checked={showN} onChange={(e) => setShowN(e.target.checked)} disabled={scene !== "horizontal"} /><span className="v2-toggle-label">N</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFext} onChange={(e) => setShowFext(e.target.checked)} /><span className="v2-toggle-label">F_ext</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setShowAxes(e.target.checked)} /><span className="v2-toggle-label">Ejes</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              F_s = <b style={{ color: "#7c3aed" }}>{fmt(Fs, 3)}</b> N.
              {scene === "vertical" ? <> W = <b style={{ color: "#ef4444" }}>{fmt(W, 3)}</b> N.</> : <> En horizontal, F_ext = -F_s.</>}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgHookeDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d0e0ff" />
          <stop offset="100%" stopColor="#b8d0ff" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgHookeDcl)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {showAxes ? (
        <g opacity="0.9">
          <line x1="250" y1="260" x2="760" y2="260" stroke="#5b7aa8" strokeWidth="3" />
          <line x1="250" y1="260" x2="250" y2="60" stroke="#5b7aa8" strokeWidth="3" />
          <text x="768" y="264" fontSize="12" fill="#64748b">x</text>
          <text x="242" y="52" fontSize="12" fill="#64748b">y</text>
        </g>
      ) : null}

      <circle cx={origin.x} cy={origin.y} r="11" fill="rgba(0,0,0,0.5)" />
      <circle cx={origin.x} cy={origin.y} r="8" fill="rgba(255,255,255,0.16)" />

      {scene === "horizontal" ? (
        <>
          {showFs ? <Arrow x1={origin.x} y1={origin.y} x2={fsH.x} y2={fsH.y} color="#7c3aed" label="F_s" /> : null}
          {showFext ? <Arrow x1={origin.x} y1={origin.y} x2={fextH.x} y2={fextH.y} color="#3b82f6" label="F_ext" dashed /> : null}
          {showW ? <Arrow x1={origin.x} y1={origin.y} x2={wSmall.x} y2={wSmall.y} color="#ef4444" label="W" labelNormalOffset={10} /> : null}
          {showN ? <Arrow x1={origin.x} y1={origin.y} x2={nSmall.x} y2={nSmall.y} color="#22c55e" label="N" labelNormalOffset={-8} /> : null}
        </>
      ) : (
        <>
          {showW ? <Arrow x1={origin.x} y1={origin.y} x2={wV.x} y2={wV.y} color="#ef4444" label="W" labelNormalOffset={10} /> : null}
          {showFs ? <Arrow x1={origin.x} y1={origin.y} x2={fsV.x} y2={fsV.y} color="#7c3aed" label="F_s" labelNormalOffset={-8} /> : null}
          {showFext ? <Arrow x1={origin.x} y1={origin.y} x2={fextV.x} y2={fextV.y} color="#3b82f6" label="F_ext" dashed /> : null}
        </>
      )}
    </SvgFrame>
  );
}
