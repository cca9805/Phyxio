import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const clampLen = (x, a, b) => clamp(Number.isFinite(x) ? x : a, a, b);

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
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const s = 10;
  const p1x = x2 - ux * s - uy * (s * 0.55);
  const p1y = y2 - uy * s + ux * (s * 0.55);
  const p2x = x2 - ux * s + uy * (s * 0.55);
  const p2y = y2 - uy * s - ux * (s * 0.55);
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      {label ? <text x={x2 + 8} y={y2 - 8} fontSize="12" fontWeight="900" fill={color}>{label}</text> : null}
    </g>
  );
}

export default function AnalisisCompletoGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 3) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "F", aliases: ["fuerza"], default: toNum(p.F ?? p.fuerza, 12) },
      { key: "mu_s", aliases: ["muS"], default: toNum(p.mu_s ?? p.muS, 0.4) },
      { key: "mu_k", aliases: ["muK"], default: toNum(p.mu_k ?? p.muK, 0.25) },
      { key: "mode", aliases: ["modo"], default: String(p.mode ?? p.modo ?? "static") },
      { key: "showVals", aliases: ["mostrarValores"], default: p.showVals ?? true },
    ],
    [p.m, p.masa, p.g, p.gravedad, p.F, p.fuerza, p.mu_s, p.muS, p.mu_k, p.muK, p.mode, p.modo, p.showVals]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 3), 0.05, 100);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 25);
  const F = clamp(toNum(ep.F, 12), -300, 300);
  const muS = clamp(toNum(ep.mu_s, 0.4), 0, 2);
  const muK = clamp(toNum(ep.mu_k, 0.25), 0, 2);
  const mode = ep.mode === "kinetic" ? "kinetic" : "static";
  const showVals = !!ep.showVals;

  const N = m * g;
  const fMax = muS * N;
  const fK = muK * N;
  const f = mode === "static" ? Math.sign(F || 1) * Math.min(Math.abs(F), fMax) : Math.sign(F || 1) * Math.min(Math.abs(F), fK);
  const slipInStatic = mode === "static" && Math.abs(F) > fMax;

  const ox = 425;
  const oy = 165;
  const LF = clampLen(Math.abs(F) * 4.8, 18, 165);
  const Lf = clampLen(Math.abs(f) * 4.8, 14, 145);
  const LN = clampLen(N * 1.8, 35, 120);
  const Lmg = LN;
  const Fdir = F >= 0 ? 1 : -1;
  const fdir = -Fdir;

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <SvgFrame
      title="Analisis completo con rozamiento (DCL)"
      subtitle="Caso estatico y cinetico en bloque horizontal"
      badgeLabel="MODO"
      badgeValue={mode === "static" ? "ESTATICO" : "CINETICO"}
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
          <div className="v2-panel m-2">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACIONES</div>
            <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
              <MathInline latex={"N=mg"} />
              <br />
              <MathInline latex={"f_{est}\\le \\mu_sN,\\quad f_k=\\mu_kN"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div><div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div></div><div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={80} step={0.1} onChange={(v) => setValue("m", v)} /></div></div>
              <div><div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>g</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s²</div></div><div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={(v) => setValue("g", v)} /></div></div>
              <div><div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>F</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F, 2)} N</div></div><div style={{ marginTop: 8 }}><Slider value={F} min={-120} max={120} step={0.5} onChange={(v) => setValue("F", v)} /></div></div>
              <div><div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>mu_s</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(muS, 3)}</div></div><div style={{ marginTop: 8 }}><Slider value={muS} min={0} max={2} step={0.01} onChange={(v) => setValue("mu_s", v)} /></div></div>
              <div><div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>mu_k</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(muK, 3)}</div></div><div style={{ marginTop: 8 }}><Slider value={muK} min={0} max={2} step={0.01} onChange={(v) => setValue("mu_k", v)} /></div></div>

              <div style={{ display: "flex", gap: 8 }}>
                <button type="button" onClick={() => setValue("mode", "static")} style={{ padding: "8px 10px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: mode === "static" ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.30)", color: "rgba(255,255,255,0.92)", fontWeight: 800, cursor: "pointer" }}>Estatico</button>
                <button type="button" onClick={() => setValue("mode", "kinetic")} style={{ padding: "8px 10px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: mode === "kinetic" ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.30)", color: "rgba(255,255,255,0.92)", fontWeight: 800, cursor: "pointer" }}>Cinetico</button>
              </div>

              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showVals} onChange={(e) => setValue("showVals", e.target.checked)} /><span className="v2-toggle-label">Mostrar valores</span></label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              N = <b>{fmt(N, 3)}</b> N
              <br />
              f_max = <b>{fmt(fMax, 3)}</b> N
              <br />
              f_k = <b>{fmt(fK, 3)}</b> N
              {slipInStatic ? <><br /><b style={{ color: "#fca5a5" }}>En estatico ya habria deslizamiento</b></> : null}
            </div>
          </div>
        </div>
      }
    >
      <rect x="0" y="0" width="850" height="330" fill="#dbeafe" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      <line x1="120" y1="215" x2="730" y2="215" stroke="rgba(15,23,42,0.55)" strokeWidth="4" />
      <rect x="385" y="150" width="80" height="60" rx="9" fill="rgba(255,255,255,0.58)" stroke="rgba(15,23,42,0.45)" />

      <Arrow x1={ox} y1={oy} x2={ox + Fdir * LF} y2={oy} color="rgba(37,99,235,0.95)" label="F" />
      <Arrow x1={ox} y1={oy} x2={ox + fdir * Lf} y2={oy} color="rgba(249,115,22,0.95)" label="f" />
      <Arrow x1={ox} y1={oy} x2={ox} y2={oy - LN} color="rgba(22,163,74,0.95)" label="N" />
      <Arrow x1={ox} y1={oy} x2={ox} y2={oy + Lmg} color="rgba(220,38,38,0.95)" label="mg" />

      {showVals ? (
        <g>
          <rect x="72" y="42" width="260" height="84" rx="10" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.15)" />
          <text x="84" y="66" fontSize="12" fill="rgba(255,255,255,0.88)">F = {fmt(F, 3)} N</text>
          <text x="84" y="86" fontSize="12" fill="rgba(255,255,255,0.88)">f = {fmt(f, 3)} N</text>
          <text x="84" y="106" fontSize="12" fill="rgba(255,255,255,0.88)">N = mg = {fmt(N, 3)} N</text>
        </g>
      ) : null}
    </SvgFrame>
  );
}
