import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const deg2rad = (d) => (d * Math.PI) / 180;

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

export default function CondicionSumatoriaFuerzasGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "F1", aliases: ["f1", "F"], default: pickNum(p, ["F1", "f1", "F"], 20) },
      { key: "F2", aliases: ["f2"], default: pickNum(p, ["F2", "f2"], 15) },
      { key: "theta", aliases: ["angulo", "angle"], default: pickNum(p, ["theta", "angulo", "angle"], 60) },
      { key: "showF1", aliases: ["mostrarF1"], default: p.showF1 ?? true },
      { key: "showF2", aliases: ["mostrarF2"], default: p.showF2 ?? true },
      { key: "showR", aliases: ["mostrarR"], default: p.showR ?? true },
      { key: "showF3", aliases: ["mostrarF3"], default: p.showF3 ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? true },
    ],
    [
      pickNum(p, ["F1", "f1", "F"], 20),
      pickNum(p, ["F2", "f2"], 15),
      pickNum(p, ["theta", "angulo", "angle"], 60),
      p.showF1,
      p.showF2,
      p.showR,
      p.showF3,
      p.showAxes,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const F1 = clamp(toNum(ep.F1, 20), 0, 120);
  const F2 = clamp(toNum(ep.F2, 15), 0, 120);
  const theta = clamp(toNum(ep.theta, 60), 0, 360);
  const showF1 = !!ep.showF1;
  const showF2 = !!ep.showF2;
  const showR = !!ep.showR;
  const showF3 = !!ep.showF3;
  const showAxes = !!ep.showAxes;

  const F1x = F1;
  const F1y = 0;
  const F2x = F2 * Math.cos(deg2rad(theta));
  const F2y = F2 * Math.sin(deg2rad(theta));

  const Rx = F1x + F2x;
  const Ry = F1y + F2y;
  const R = Math.hypot(Rx, Ry);

  const F3x = -Rx;
  const F3y = -Ry;

  const scale = 2.6;
  const ox = 430;
  const oy = 170;

  const endF1 = { x: ox + F1x * scale, y: oy - F1y * scale };
  const endF2 = { x: ox + F2x * scale, y: oy - F2y * scale };
  const endR = { x: ox + Rx * scale, y: oy - Ry * scale };
  const endF3 = { x: ox + F3x * scale, y: oy - F3y * scale };

  const inEq = R < 0.1;
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setValue = useCallback((key, val) => {
    exp.startExperiment();
    exp.setValue(key, val);
  }, [exp]);

  return (
    <SvgFrame
      title="Condicion de sumatoria de fuerzas (DCL)"
      subtitle="Vectores F1, F2, resultante R y equilibrante F3"
      badgeLabel="ESTADO"
      badgeValue={inEq ? "EQUILIBRIO" : "NO EQUILIBRIO"}
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Equilibrio</div>
                <div style={{ marginTop: 2, color: "#60a5fa" }}>
                  <MathInline latex={"\\sum F_x=0,\\;\\sum F_y=0"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Equilibrante</div>
                <div style={{ marginTop: 2, color: "#ef4444" }}>
                  <MathInline latex={"\\vec F_3=-\\vec R"} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F1</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F1, 1)} N</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={F1} min={0} max={120} step={0.5} onChange={(v) => setValue("F1", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F2</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F2, 1)} N</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={F2} min={0} max={120} step={0.5} onChange={(v) => setValue("F2", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>theta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(theta, 0)} deg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={theta} min={0} max={360} step={1} onChange={(v) => setValue("theta", v)} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showF1} onChange={(e) => setValue("showF1", e.target.checked)} /><span className="v2-toggle-label">F1</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showF2} onChange={(e) => setValue("showF2", e.target.checked)} /><span className="v2-toggle-label">F2</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showR} onChange={(e) => setValue("showR", e.target.checked)} /><span className="v2-toggle-label">R</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showF3} onChange={(e) => setValue("showF3", e.target.checked)} /><span className="v2-toggle-label">F3</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setValue("showAxes", e.target.checked)} /><span className="v2-toggle-label">Ejes</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              sumFx = <b>{fmt(Rx, 2)}</b> N, sumFy = <b>{fmt(Ry, 2)}</b> N.
              <br />
              |R| = <b style={{ color: "#f97316" }}>{fmt(R, 2)}</b> N, |F3| = <b style={{ color: "#ef4444" }}>{fmt(R, 2)}</b> N.
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgCondFuerzasDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgCondFuerzasDcl)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {showAxes ? (
        <g opacity="0.88">
          <line x1="120" y1={oy} x2="760" y2={oy} stroke="#64748b" strokeWidth="2" strokeDasharray="6 6" />
          <line x1={ox} y1="50" x2={ox} y2="300" stroke="#64748b" strokeWidth="2" strokeDasharray="6 6" />
          <text x="768" y={oy + 4} fontSize="12" fill="#64748b">+x</text>
          <text x={ox + 8} y="44" fontSize="12" fill="#64748b">+y</text>
        </g>
      ) : null}

      <circle cx={ox} cy={oy} r="11" fill="rgba(0,0,0,0.50)" />
      <circle cx={ox} cy={oy} r="8" fill="rgba(255,255,255,0.16)" />

      {showF1 ? <Arrow x1={ox} y1={oy} x2={endF1.x} y2={endF1.y} color="#3b82f6" label="F1" labelNormalOffset={10} /> : null}
      {showF2 ? <Arrow x1={ox} y1={oy} x2={endF2.x} y2={endF2.y} color="#a855f7" label="F2" labelNormalOffset={-10} /> : null}
      {showR ? <Arrow x1={ox} y1={oy} x2={endR.x} y2={endR.y} color="#f97316" label="R" labelNormalOffset={9} dashed /> : null}
      {showF3 ? <Arrow x1={ox} y1={oy} x2={endF3.x} y2={endF3.y} color="#ef4444" label="F3" labelNormalOffset={-9} /> : null}
    </SvgFrame>
  );
}
