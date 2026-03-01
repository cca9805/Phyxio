import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const CONTEXTS = [
  { key: "earth", label: "Tierra", g: 9.81 },
  { key: "moon", label: "Luna", g: 1.62 },
  { key: "mars", label: "Marte", g: 3.71 },
  { key: "jupiter", label: "Jupiter", g: 24.79 },
  { key: "elevator", label: "Ascensor", g: 9.81 },
];

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

function Arrow({ x1, y1, x2, y2, color, label, labelOffset = 14, labelNormalOffset = 0, arrowExtend = 10 }) {
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

export default function PesoEnDiferentesContextosGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "context", aliases: ["contexto"], default: p.context || "earth" },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 10) },
      { key: "a", aliases: ["aceleracion"], default: pickNum(p, ["a", "aceleracion"], 0) },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showN", aliases: ["mostrarN"], default: p.showN ?? true },
      { key: "showA", aliases: ["mostrarA"], default: p.showA ?? true },
    ],
    [p.context, pickNum(p, ["m", "masa"], 10), pickNum(p, ["a", "aceleracion"], 0), p.showW, p.showN, p.showA]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const context = CONTEXTS.some((c) => c.key === ep.context) ? ep.context : "earth";
  const m = clamp(toNum(ep.m, 10), 0.1, 200);
  const a = clamp(toNum(ep.a, 0), -9.5, 9.5);
  const showW = !!ep.showW;
  const showN = !!ep.showN;
  const showA = !!ep.showA;

  const ctx = CONTEXTS.find((c) => c.key === context) ?? CONTEXTS[0];
  const gEff = ctx.key === "elevator" ? ctx.g + a : ctx.g;
  const Wmag = m * ctx.g;
  const Nmag = m * gEff;
  const Fmax = Math.max(1, Wmag, Math.abs(Nmag));

  const origin = { x: 430, y: 165 };
  const scale = 125 / Fmax;
  const wLen = Wmag * scale;
  const nLen = Nmag * scale;
  const aLen = clamp(a, -10, 10) * 12;

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setContext = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("context", v);
    },
    [exp]
  );
  const setM = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("m", v);
    },
    [exp]
  );
  const setA = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("a", v);
    },
    [exp]
  );
  const setShowW = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("showW", v);
    },
    [exp]
  );
  const setShowN = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("showN", v);
    },
    [exp]
  );
  const setShowA = useCallback(
    (v) => {
      exp.startExperiment();
      exp.setValue("showA", v);
    },
    [exp]
  );

  return (
    <SvgFrame
      title="Peso en diferentes contextos (DCL)"
      subtitle="Solo vectores: W y N segun el contexto"
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
          title="Volver a seguir la calculadora"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Peso real</div>
                <div style={{ marginTop: 2, color: "#ef4444" }}>
                  <MathInline latex={"W=mg"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Peso aparente</div>
                <div style={{ marginTop: 2, color: "#60a5fa" }}>
                  <MathInline latex={"N=m(g+a)"} />
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
                {CONTEXTS.map((c) => (
                  <Pill key={c.key} active={context === c.key} onClick={() => setContext(c.key)}>
                    {c.label}
                  </Pill>
                ))}
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

              <div style={{ opacity: context === "elevator" ? 1 : 0.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>a</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(a, 2)} m/s2</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={a} min={-9.5} max={9.5} step={0.1} onChange={setA} />
                </div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setShowW(e.target.checked)} />
                  <span className="v2-toggle-label">Peso W</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showN} onChange={(e) => setShowN(e.target.checked)} />
                  <span className="v2-toggle-label">Normal N</span>
                </label>
                <label className="v2-toggle">
                  <input className="v2-toggle-input" type="checkbox" checked={showA} onChange={(e) => setShowA(e.target.checked)} />
                  <span className="v2-toggle-label">Aceleracion</span>
                </label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              g = <b>{fmt(ctx.g, 2)}</b> m/s2, W = <b style={{ color: "#ef4444" }}>{fmt(Wmag, 2)}</b> N, N ={" "}
              <b style={{ color: "#60a5fa" }}>{fmt(Nmag, 2)}</b> N.
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgPesoDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cad8ff" />
          <stop offset="100%" stopColor="#aec3ff" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgPesoDcl)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      <circle cx={origin.x} cy={origin.y} r="11" fill="rgba(0,0,0,0.50)" />
      <circle cx={origin.x} cy={origin.y} r="8" fill="rgba(255,255,255,0.16)" />

      {showN ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y - nLen} color="#60a5fa" label="N" /> : null}
      {showW ? <Arrow x1={origin.x} y1={origin.y} x2={origin.x} y2={origin.y + wLen} color="#ef4444" label="W=mg" /> : null}

      {showA && context === "elevator" ? (
        <Arrow
          x1={origin.x - 135}
          y1={origin.y}
          x2={origin.x - 135}
          y2={origin.y - aLen}
          color="#8b5cf6"
          label="a"
          labelNormalOffset={-10}
        />
      ) : null}
    </SvgFrame>
  );
}
