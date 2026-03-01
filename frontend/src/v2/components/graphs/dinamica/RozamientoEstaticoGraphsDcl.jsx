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

function Arrow({ x1, y1, x2, y2, color, label, labelOffset = 14, labelNormalOffset = 0, arrowExtend = 9 }) {
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
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="5" strokeLinecap="round" />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} opacity="0.96" />
      {label ? (
        <text x={tx} y={ty} fontSize="13" fontWeight="900" fill={color} textAnchor="middle" dominantBaseline="middle">
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function RozamientoEstaticoGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "scene", aliases: ["mode", "escena"], default: p.scene || "push" },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 10) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "mu", aliases: ["muS", "mu_s"], default: pickNum(p, ["mu", "muS", "mu_s"], 0.4) },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 25) },
      { key: "F", aliases: ["fuerza", "Fapplied"], default: pickNum(p, ["F", "fuerza", "Fapplied"], 50) },
      { key: "showN", aliases: ["mostrarN"], default: p.showN ?? true },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showFs", aliases: ["mostrarFs"], default: p.showFs ?? true },
      { key: "showExt", aliases: ["mostrarF"], default: p.showExt ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? false },
    ],
    [
      p.scene,
      pickNum(p, ["m", "masa"], 10),
      pickNum(p, ["g", "gravedad"], 9.81),
      pickNum(p, ["mu", "muS", "mu_s"], 0.4),
      pickNum(p, ["theta", "angulo", "th"], 25),
      pickNum(p, ["F", "fuerza", "Fapplied"], 50),
      p.showN,
      p.showW,
      p.showFs,
      p.showExt,
      p.showAxes,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const scene = ep.scene === "incline" ? "incline" : "push";
  const m = clamp(toNum(ep.m, 10), 0.1, 200);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const mu = clamp(toNum(ep.mu, 0.4), 0, 2);
  const theta = clamp(toNum(ep.theta, 25), 0, 70);
  const F = clamp(toNum(ep.F, 50), 0, 300);
  const showN = !!ep.showN;
  const showW = !!ep.showW;
  const showFs = !!ep.showFs;
  const showExt = !!ep.showExt;
  const showAxes = !!ep.showAxes;

  const rad = (theta * Math.PI) / 180;
  const W = m * g;
  const Npush = W;
  const fMaxPush = mu * Npush;
  const fPush = Math.min(F, fMaxPush);
  const slipsPush = F > fMaxPush + 1e-9;

  const Ninc = W * Math.cos(rad);
  const fReqInc = W * Math.sin(rad);
  const fMaxInc = mu * Ninc;
  const fInc = Math.min(fReqInc, fMaxInc);
  const slipsInc = fReqInc > fMaxInc + 1e-9;

  const N = scene === "push" ? Npush : Ninc;
  const fS = scene === "push" ? fPush : fInc;
  const Fmax = Math.max(1, W, N, fS, F);

  const origin = { x: 430, y: 168 };
  const toLen = (v, base = 125) => (v / Fmax) * base;

  const wEnd = { x: origin.x, y: origin.y + toLen(W) };
  const nDir = scene === "incline" ? { x: -Math.sin(rad), y: -Math.cos(rad) } : { x: 0, y: -1 };
  const nEnd = { x: origin.x + nDir.x * toLen(N), y: origin.y + nDir.y * toLen(N) };

  const fDir = scene === "incline" ? { x: -Math.cos(rad), y: -Math.sin(rad) } : { x: -1, y: 0 };
  const fsEnd = { x: origin.x + fDir.x * toLen(fS), y: origin.y + fDir.y * toLen(fS) };
  const extEnd = { x: origin.x + toLen(F), y: origin.y };

  const slips = scene === "push" ? slipsPush : slipsInc;
  const fsColor = slips ? "#ef4444" : "#f59e0b";

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setScene = useCallback((v) => { exp.startExperiment(); exp.setValue("scene", v); }, [exp]);
  const setM = useCallback((v) => { exp.startExperiment(); exp.setValue("m", v); }, [exp]);
  const setG = useCallback((v) => { exp.startExperiment(); exp.setValue("g", v); }, [exp]);
  const setMu = useCallback((v) => { exp.startExperiment(); exp.setValue("mu", v); }, [exp]);
  const setTheta = useCallback((v) => { exp.startExperiment(); exp.setValue("theta", v); }, [exp]);
  const setF = useCallback((v) => { exp.startExperiment(); exp.setValue("F", v); }, [exp]);
  const setShowN = useCallback((v) => { exp.startExperiment(); exp.setValue("showN", v); }, [exp]);
  const setShowW = useCallback((v) => { exp.startExperiment(); exp.setValue("showW", v); }, [exp]);
  const setShowFs = useCallback((v) => { exp.startExperiment(); exp.setValue("showFs", v); }, [exp]);
  const setShowExt = useCallback((v) => { exp.startExperiment(); exp.setValue("showExt", v); }, [exp]);
  const setShowAxes = useCallback((v) => { exp.startExperiment(); exp.setValue("showAxes", v); }, [exp]);

  return (
    <SvgFrame
      title="Rozamiento estatico (DCL)"
      subtitle="Solo vectores del equilibrio con friccion"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Condicion estatica</div>
                <div style={{ marginTop: 2, color: "#f59e0b" }}>
                  <MathInline latex={"f_s \\le \\mu_s N"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Plano inclinado</div>
                <div style={{ marginTop: 2, color: "#a855f7" }}>
                  <MathInline latex={"f_{req}=mg\\sin\\theta,\\;f_{max}=\\mu_s mg\\cos\\theta"} />
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
                <Pill active={scene === "push"} onClick={() => setScene("push")}>Empuje</Pill>
                <Pill active={scene === "incline"} onClick={() => setScene("incline")}>Plano inclinado</Pill>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={80} step={0.1} onChange={setM} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>g</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s2</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={setG} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>mu_s</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mu, 2)}</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={mu} min={0} max={2} step={0.01} onChange={setMu} /></div>
              </div>

              <div style={{ opacity: scene === "incline" ? 1 : 0.55 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>theta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(theta, 0)} deg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={theta} min={0} max={70} step={1} onChange={setTheta} /></div>
              </div>

              <div style={{ opacity: scene === "push" ? 1 : 0.55 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>F aplicada</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F, 1)} N</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={F} min={0} max={300} step={1} onChange={setF} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showN} onChange={(e) => setShowN(e.target.checked)} /><span className="v2-toggle-label">N</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setShowW(e.target.checked)} /><span className="v2-toggle-label">W</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFs} onChange={(e) => setShowFs(e.target.checked)} /><span className="v2-toggle-label">f_s</span></label>
                <label className="v2-toggle" style={{ opacity: scene === "push" ? 1 : 0.5 }}><input className="v2-toggle-input" type="checkbox" checked={showExt} onChange={(e) => setShowExt(e.target.checked)} disabled={scene !== "push"} /><span className="v2-toggle-label">F</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setShowAxes(e.target.checked)} /><span className="v2-toggle-label">Ejes</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              f_s = <b style={{ color: fsColor }}>{fmt(fS, 2)}</b> N, f_max = <b>{fmt(scene === "push" ? fMaxPush : fMaxInc, 2)}</b> N.
              {slips ? <span style={{ color: "#ef4444", fontWeight: 800 }}> Se supera el estatico.</span> : <span style={{ color: "#22c55e", fontWeight: 800 }}> En equilibrio estatico.</span>}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgRozEstDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfe4ff" />
          <stop offset="100%" stopColor="#bcd2ff" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgRozEstDcl)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {showAxes ? (
        <g opacity="0.9">
          <line x1="250" y1="260" x2="760" y2="260" stroke="#6366f1" strokeWidth="3" />
          <line x1="250" y1="260" x2="250" y2="60" stroke="#6366f1" strokeWidth="3" />
          <text x="768" y="264" fontSize="12" fill="#64748b">x</text>
          <text x="242" y="52" fontSize="12" fill="#64748b">y</text>
        </g>
      ) : null}

      <circle cx={origin.x} cy={origin.y} r="11" fill="rgba(0,0,0,0.5)" />
      <circle cx={origin.x} cy={origin.y} r="8" fill="rgba(255,255,255,0.16)" />

      {showW ? <Arrow x1={origin.x} y1={origin.y} x2={wEnd.x} y2={wEnd.y} color="#ef4444" label="W=mg" labelNormalOffset={10} /> : null}
      {showN ? <Arrow x1={origin.x} y1={origin.y} x2={nEnd.x} y2={nEnd.y} color="#22c55e" label="N" labelNormalOffset={-8} /> : null}
      {showFs ? <Arrow x1={origin.x} y1={origin.y} x2={fsEnd.x} y2={fsEnd.y} color={fsColor} label="f_s" labelNormalOffset={10} /> : null}
      {showExt && scene === "push" ? <Arrow x1={origin.x} y1={origin.y} x2={extEnd.x} y2={extEnd.y} color="#3b82f6" label="F" labelNormalOffset={-10} /> : null}
    </SvgFrame>
  );
}
