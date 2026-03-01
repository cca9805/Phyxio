import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
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

function Arrow({ x1, y1, x2, y2, color, label, labelOffset = 12, labelNormalOffset = 0, dashed = false }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;

  const head = 18;
  const wing = 8;
  const ext = 8;

  const hx = x2 + ux * ext;
  const hy = y2 + uy * ext;
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
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="5" strokeLinecap="round" strokeDasharray={dashed ? "7 6" : undefined} />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} opacity="0.96" />
      {label ? (
        <text x={tx} y={ty} fontSize="13" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function EjemplosDeEquilibrioGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "scene", aliases: ["ejemplo"], default: p.scene || "mesa" },
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 10) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.81) },
      { key: "F", aliases: ["f", "fuerza"], default: toNum(p.F ?? p.f, 20) },
      { key: "mu", aliases: ["mu_s", "mus"], default: toNum(p.mu ?? p.mu_s, 0.4) },
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 35) },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showN", aliases: ["mostrarN"], default: p.showN ?? true },
      { key: "showT", aliases: ["mostrarT"], default: p.showT ?? true },
      { key: "showF", aliases: ["mostrarF"], default: p.showF ?? true },
      { key: "showR", aliases: ["mostrarR"], default: p.showR ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? false },
    ],
    [p.scene, p.m, p.masa, p.g, p.gravedad, p.F, p.f, p.mu, p.mu_s, p.theta, p.angulo, p.showW, p.showN, p.showT, p.showF, p.showR, p.showAxes]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const scene = ep.scene === "nudo" ? "nudo" : ep.scene === "colgante" ? "colgante" : "mesa";
  const m = clamp(toNum(ep.m, 10), 0.1, 100);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const F = clamp(toNum(ep.F, 20), 0, 250);
  const mu = clamp(toNum(ep.mu, 0.4), 0, 1.5);
  const theta = clamp(toNum(ep.theta, 35), 5, 80);
  const showW = !!ep.showW;
  const showN = !!ep.showN;
  const showT = !!ep.showT;
  const showF = !!ep.showF;
  const showR = !!ep.showR;
  const showAxes = !!ep.showAxes;

  const W = m * g;
  const N = W;
  const fsMax = mu * N;
  const fs = Math.min(F, fsMax);
  const Rmesa = Math.max(0, F - fs);

  const Tcol = W;
  const Rcol = Math.abs(Tcol - W);

  const half = (theta * Math.PI) / 180;
  const Tnudo = W / (2 * Math.sin(half));
  const RxNudo = 0;
  const RyNudo = 2 * Tnudo * Math.sin(half) - W;
  const Rnudo = Math.hypot(RxNudo, RyNudo);

  const R = scene === "mesa" ? Rmesa : scene === "colgante" ? Rcol : Rnudo;

  const origin = { x: 430, y: 168 };
  const Fmax = Math.max(1, W, N, F, fs, Tcol, Tnudo);
  const toLen = (v, base = 130) => (v / Fmax) * base;

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <SvgFrame
      title="Ejemplos de equilibrio (DCL)"
      subtitle="Tres casos tipicos: mesa, masa colgante y nudo con dos cuerdas"
      badgeLabel="ESTADO"
      badgeValue={R < 0.1 ? "EQUILIBRIO" : "NO EQUILIBRIO"}
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Condicion general</div>
                <div style={{ marginTop: 2, color: "#60a5fa" }}><MathInline latex={"\\sum F_x=0,\\;\\sum F_y=0"} /></div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Nudo simetrico</div>
                <div style={{ marginTop: 2, color: "#f59e0b" }}><MathInline latex={"2T\\sin\\theta=W"} /></div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <Pill active={scene === "mesa"} onClick={() => setValue("scene", "mesa")}>Mesa</Pill>
                <Pill active={scene === "colgante"} onClick={() => setValue("scene", "colgante")}>Colgante</Pill>
                <Pill active={scene === "nudo"} onClick={() => setValue("scene", "nudo")}>Nudo</Pill>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}><div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={50} step={0.1} onChange={(v) => setValue("m", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}><div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>g</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s2</div></div>
                <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={(v) => setValue("g", v)} /></div>
              </div>
              <div style={{ opacity: scene === "mesa" ? 1 : 0.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}><div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F aplicada</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F, 2)} N</div></div>
                <div style={{ marginTop: 8 }}><Slider value={F} min={0} max={250} step={0.5} onChange={(v) => setValue("F", v)} /></div>
              </div>
              <div style={{ opacity: scene === "mesa" ? 1 : 0.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}><div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>mu_s</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mu, 2)}</div></div>
                <div style={{ marginTop: 8 }}><Slider value={mu} min={0} max={1.2} step={0.01} onChange={(v) => setValue("mu", v)} /></div>
              </div>
              <div style={{ opacity: scene === "nudo" ? 1 : 0.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}><div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>theta</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(theta, 0)} deg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={theta} min={5} max={80} step={1} onChange={(v) => setValue("theta", v)} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setValue("showW", e.target.checked)} /><span className="v2-toggle-label">W</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showN} onChange={(e) => setValue("showN", e.target.checked)} /><span className="v2-toggle-label">N</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showT} onChange={(e) => setValue("showT", e.target.checked)} /><span className="v2-toggle-label">T</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showF} onChange={(e) => setValue("showF", e.target.checked)} /><span className="v2-toggle-label">F/fr</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showR} onChange={(e) => setValue("showR", e.target.checked)} /><span className="v2-toggle-label">R</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setValue("showAxes", e.target.checked)} /><span className="v2-toggle-label">Ejes</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              {scene === "mesa" ? <>f_s(max) = <b>{fmt(fsMax, 2)}</b> N, f_s = <b>{fmt(fs, 2)}</b> N.</> : null}
              {scene === "colgante" ? <>T = <b>{fmt(Tcol, 2)}</b> N y W = <b>{fmt(W, 2)}</b> N.</> : null}
              {scene === "nudo" ? <>T = <b>{fmt(Tnudo, 2)}</b> N por cuerda.</> : null}
              <br />|R| = <b style={{ color: "#ef4444" }}>{fmt(R, 3)}</b> N.
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgEqDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgEqDcl)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {showAxes ? (
        <g opacity="0.85">
          <line x1="250" y1="260" x2="760" y2="260" stroke="#64748b" strokeWidth="3" />
          <line x1="250" y1="260" x2="250" y2="60" stroke="#64748b" strokeWidth="3" />
          <text x="768" y="264" fontSize="12" fill="#64748b">x</text>
          <text x="242" y="52" fontSize="12" fill="#64748b">y</text>
        </g>
      ) : null}

      <circle cx={origin.x} cy={origin.y} r="11" fill="rgba(0,0,0,0.50)" />
      <circle cx={origin.x} cy={origin.y} r="8" fill="rgba(255,255,255,0.16)" />

      {scene === "mesa" ? (
        <>
          {showW ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y + toLen(W)} color="#ef4444" label="W" labelNormalOffset={9} /> : null}
          {showN ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y - toLen(N)} color="#22c55e" label="N" labelNormalOffset={-9} /> : null}
          {showF ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x + toLen(F)} y2={origin.y} color="#3b82f6" label="F" labelNormalOffset={10} /> : null}
          {showF ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x - toLen(fs)} y2={origin.y} color="#f59e0b" label="f_s" labelNormalOffset={-10} /> : null}
          {showR ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x + toLen(Rmesa)} y2={origin.y} color="#ef4444" label="R" dashed /> : null}
        </>
      ) : null}

      {scene === "colgante" ? (
        <>
          {showW ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y + toLen(W)} color="#ef4444" label="W" labelNormalOffset={10} /> : null}
          {showT ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y - toLen(Tcol)} color="#6366f1" label="T" labelNormalOffset={-10} /> : null}
          {showR ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y + toLen(Rcol)} color="#ef4444" label="R" dashed /> : null}
        </>
      ) : null}

      {scene === "nudo" ? (
        <>
          {showW ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y + toLen(W)} color="#ef4444" label="W" labelNormalOffset={10} /> : null}
          {showT ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x - Math.cos(half) * toLen(Tnudo)} y2={origin.y - Math.sin(half) * toLen(Tnudo)} color="#6366f1" label="T1" labelNormalOffset={-8} /> : null}
          {showT ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x + Math.cos(half) * toLen(Tnudo)} y2={origin.y - Math.sin(half) * toLen(Tnudo)} color="#6366f1" label="T2" labelNormalOffset={8} /> : null}
          {showR ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y + toLen(Rnudo)} color="#ef4444" label="R" dashed /> : null}
        </>
      ) : null}
    </SvgFrame>
  );
}
