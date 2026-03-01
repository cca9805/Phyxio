import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

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

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

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

export default function NormalEnPlanosGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["plano"], default: p.mode || "incline" },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 10) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 25) },
      { key: "showN", aliases: ["mostrarN"], default: p.showN ?? true },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showComp", aliases: ["mostrarComp"], default: p.showComp ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? false },
    ],
    [
      p.mode,
      pickNum(p, ["m", "masa"], 10),
      pickNum(p, ["g", "gravedad"], 9.81),
      pickNum(p, ["theta", "angulo", "th"], 25),
      p.showN,
      p.showW,
      p.showComp,
      p.showAxes,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode === "horizontal" ? "horizontal" : "incline";
  const m = clamp(toNum(ep.m, 10), 0.1, 200);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const theta = clamp(toNum(ep.theta, 25), 0, 70);
  const showN = !!ep.showN;
  const showW = !!ep.showW;
  const showComp = !!ep.showComp && mode === "incline";
  const showAxes = !!ep.showAxes;

  const rad = (theta * Math.PI) / 180;
  const W = m * g;
  const N = mode === "incline" ? W * Math.cos(rad) : W;
  const Wpar = mode === "incline" ? W * Math.sin(rad) : 0;
  const Wperp = mode === "incline" ? W * Math.cos(rad) : W;
  const Fmax = Math.max(1, W, N);

  const origin = { x: 420, y: 170 };
  const toLen = (f, base = 125) => (f / Fmax) * base;
  const wLen = toLen(W);
  const nLen = toLen(N);
  const parLen = toLen(Wpar, 125);
  const perpLen = toLen(Wperp, 125);

  const nDir = mode === "incline" ? { x: -Math.sin(rad), y: -Math.cos(rad) } : { x: 0, y: -1 };
  const wEnd = { x: origin.x, y: origin.y + wLen };
  const nEnd = { x: origin.x + nDir.x * nLen, y: origin.y + nDir.y * nLen };
  const parEnd = { x: origin.x + Math.cos(rad) * parLen, y: origin.y + Math.sin(rad) * parLen };
  const perpEnd = { x: origin.x + Math.sin(rad) * perpLen, y: origin.y + Math.cos(rad) * perpLen };

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setMode = useCallback((v) => { exp.startExperiment(); exp.setValue("mode", v); }, [exp]);
  const setM = useCallback((v) => { exp.startExperiment(); exp.setValue("m", v); }, [exp]);
  const setG = useCallback((v) => { exp.startExperiment(); exp.setValue("g", v); }, [exp]);
  const setTheta = useCallback((v) => { exp.startExperiment(); exp.setValue("theta", v); }, [exp]);
  const setShowN = useCallback((v) => { exp.startExperiment(); exp.setValue("showN", v); }, [exp]);
  const setShowW = useCallback((v) => { exp.startExperiment(); exp.setValue("showW", v); }, [exp]);
  const setShowComp = useCallback((v) => { exp.startExperiment(); exp.setValue("showComp", v); }, [exp]);
  const setShowAxes = useCallback((v) => { exp.startExperiment(); exp.setValue("showAxes", v); }, [exp]);

  return (
    <SvgFrame
      title="Normal en planos (DCL)"
      subtitle="Solo vectores: peso, normal y componentes"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Plano inclinado</div>
                <div style={{ marginTop: 2, color: "#60a5fa" }}>
                  <MathInline latex={"N = m g \\cos\\theta"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Componentes</div>
                <div style={{ marginTop: 2, color: "#a855f7" }}>
                  <MathInline latex={"mg_{\\parallel}=mg\\sin\\theta,\\;mg_{\\perp}=mg\\cos\\theta"} />
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
                <Pill active={mode === "incline"} onClick={() => setMode("incline")}>Plano inclinado</Pill>
                <Pill active={mode === "horizontal"} onClick={() => setMode("horizontal")}>Plano horizontal</Pill>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={m} min={0.1} max={80} step={0.1} onChange={setM} />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>g</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s2</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={g} min={0.1} max={20} step={0.1} onChange={setG} />
                </div>
              </div>

              <div style={{ opacity: mode === "incline" ? 1 : 0.55 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>theta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(theta, 0)} deg</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={theta} min={0} max={70} step={1} onChange={setTheta} />
                </div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showN} onChange={(e) => setShowN(e.target.checked)} />
                  <span className="v2-toggle-label">Normal N</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setShowW(e.target.checked)} />
                  <span className="v2-toggle-label">Peso W</span>
                </label>
                <label className="v2-toggle" style={{ opacity: mode === "incline" ? 1 : 0.5 }}>
                  <input className="v2-toggle-input" type="checkbox" checked={showComp} onChange={(e) => setShowComp(e.target.checked)} disabled={mode !== "incline"} />
                  <span className="v2-toggle-label">Componentes</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setShowAxes(e.target.checked)} />
                  <span className="v2-toggle-label">Ejes</span>
                </label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              W = <b style={{ color: "#ef4444" }}>{fmt(W, 2)}</b> N, N = <b style={{ color: "#60a5fa" }}>{fmt(N, 2)}</b> N.
              {mode === "incline" ? <> mg_par = <b style={{ color: "#a855f7" }}>{fmt(Wpar, 2)}</b> N.</> : null}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgNormalDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7d2fe" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgNormalDcl)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {showAxes ? (
        <g opacity="0.85">
          <line x1="260" y1="260" x2="760" y2="260" stroke="#64748b" strokeWidth="3" />
          <line x1="260" y1="260" x2="260" y2="60" stroke="#64748b" strokeWidth="3" />
          <text x="768" y="264" fontSize="12" fill="#64748b">x</text>
          <text x="252" y="52" fontSize="12" fill="#64748b">y</text>
        </g>
      ) : null}

      <circle cx={origin.x} cy={origin.y} r="11" fill="rgba(0,0,0,0.50)" />
      <circle cx={origin.x} cy={origin.y} r="8" fill="rgba(255,255,255,0.16)" />

      {showW ? <Arrow x1={origin.x} y1={origin.y} x2={wEnd.x} y2={wEnd.y} color="#ef4444" label="W=mg" labelNormalOffset={10} /> : null}
      {showN ? <Arrow x1={origin.x} y1={origin.y} x2={nEnd.x} y2={nEnd.y} color="#60a5fa" label="N" labelNormalOffset={-8} /> : null}

      {showComp ? (
        <>
          <Arrow x1={origin.x} y1={origin.y} x2={parEnd.x} y2={parEnd.y} color="#a855f7" label="mg_par" labelNormalOffset={9} />
          <Arrow x1={origin.x} y1={origin.y} x2={perpEnd.x} y2={perpEnd.y} color="#22c55e" label="mg_perp" labelNormalOffset={10} />
        </>
      ) : null}
    </SvgFrame>
  );
}
