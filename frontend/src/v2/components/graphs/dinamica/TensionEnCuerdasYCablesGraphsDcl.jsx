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

export default function TensionEnCuerdasYCablesGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "scene", aliases: ["mode", "escena"], default: p.scene || "hanging" },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 5) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "m1", aliases: ["masa1"], default: pickNum(p, ["m1", "masa1"], 5) },
      { key: "m2", aliases: ["masa2"], default: pickNum(p, ["m2", "masa2"], 3) },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showT", aliases: ["mostrarT"], default: p.showT ?? true },
      { key: "showA", aliases: ["mostrarA"], default: p.showA ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? false },
    ],
    [
      p.scene,
      pickNum(p, ["m", "masa"], 5),
      pickNum(p, ["g", "gravedad"], 9.81),
      pickNum(p, ["m1", "masa1"], 5),
      pickNum(p, ["m2", "masa2"], 3),
      p.showW,
      p.showT,
      p.showA,
      p.showAxes,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const scene = ep.scene === "atwood" ? "atwood" : "hanging";
  const m = clamp(toNum(ep.m, 5), 0.1, 50);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const m1 = clamp(toNum(ep.m1, 5), 0.1, 50);
  const m2 = clamp(toNum(ep.m2, 3), 0.1, 50);
  const showW = !!ep.showW;
  const showT = !!ep.showT;
  const showA = !!ep.showA;
  const showAxes = !!ep.showAxes;

  const W_h = m * g;
  const T_h = W_h;
  const a = ((m1 - m2) / (m1 + m2)) * g;
  const T_a = m1 * (g - a);
  const W_a = m1 * g;

  const Wmag = scene === "hanging" ? W_h : W_a;
  const Tmag = scene === "hanging" ? T_h : T_a;
  const Fmax = Math.max(1, Wmag, Tmag, Math.abs(a));

  const origin = { x: 430, y: 168 };
  const toLen = (v, base = 125) => (Math.abs(v) / Fmax) * base;
  const wEnd = { x: origin.x, y: origin.y + toLen(Wmag) };
  const tEnd = { x: origin.x, y: origin.y - toLen(Tmag) };
  const aEnd = { x: origin.x, y: origin.y + (a >= 0 ? toLen(a, 90) : -toLen(a, 90)) };

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setScene = useCallback((v) => { exp.startExperiment(); exp.setValue("scene", v); }, [exp]);
  const setM = useCallback((v) => { exp.startExperiment(); exp.setValue("m", v); }, [exp]);
  const setG = useCallback((v) => { exp.startExperiment(); exp.setValue("g", v); }, [exp]);
  const setM1 = useCallback((v) => { exp.startExperiment(); exp.setValue("m1", v); }, [exp]);
  const setM2 = useCallback((v) => { exp.startExperiment(); exp.setValue("m2", v); }, [exp]);
  const setShowW = useCallback((v) => { exp.startExperiment(); exp.setValue("showW", v); }, [exp]);
  const setShowT = useCallback((v) => { exp.startExperiment(); exp.setValue("showT", v); }, [exp]);
  const setShowA = useCallback((v) => { exp.startExperiment(); exp.setValue("showA", v); }, [exp]);
  const setShowAxes = useCallback((v) => { exp.startExperiment(); exp.setValue("showAxes", v); }, [exp]);

  return (
    <SvgFrame
      title="Tension en cuerdas y cables (DCL)"
      subtitle="Solo vectores de tension y peso"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Masa colgante</div>
                <div style={{ marginTop: 2, color: "#3b82f6" }}>
                  <MathInline latex={"T=mg"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Atwood</div>
                <div style={{ marginTop: 2, color: "#7c3aed" }}>
                  <MathInline latex={"a=\\frac{m_1-m_2}{m_1+m_2}g,\\;T=m_1(g-a)"} />
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
                <Pill active={scene === "hanging"} onClick={() => setScene("hanging")}>Masa colgante</Pill>
                <Pill active={scene === "atwood"} onClick={() => setScene("atwood")}>Atwood</Pill>
              </div>

              {scene === "hanging" ? (
                <>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m</div>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div>
                    </div>
                    <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={50} step={0.1} onChange={setM} /></div>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>g</div>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s2</div>
                    </div>
                    <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={setG} /></div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m1</div>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m1, 2)} kg</div>
                    </div>
                    <div style={{ marginTop: 8 }}><Slider value={m1} min={0.1} max={50} step={0.1} onChange={setM1} /></div>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m2</div>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m2, 2)} kg</div>
                    </div>
                    <div style={{ marginTop: 8 }}><Slider value={m2} min={0.1} max={50} step={0.1} onChange={setM2} /></div>
                  </div>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>g</div>
                      <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s2</div>
                    </div>
                    <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={setG} /></div>
                  </div>
                </>
              )}

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setShowW(e.target.checked)} /><span className="v2-toggle-label">W</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showT} onChange={(e) => setShowT(e.target.checked)} /><span className="v2-toggle-label">T</span></label>
                <label className="v2-toggle" style={{ opacity: scene === "atwood" ? 1 : 0.5 }}><input className="v2-toggle-input" type="checkbox" checked={showA} onChange={(e) => setShowA(e.target.checked)} disabled={scene !== "atwood"} /><span className="v2-toggle-label">a</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setShowAxes(e.target.checked)} /><span className="v2-toggle-label">Ejes</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              {scene === "hanging" ? (
                <>T = <b style={{ color: "#3b82f6" }}>{fmt(T_h, 3)}</b> N.</>
              ) : (
                <>a = <b style={{ color: "#7c3aed" }}>{fmt(a, 3)}</b> m/s2, T = <b style={{ color: "#3b82f6" }}>{fmt(T_a, 3)}</b> N.</>
              )}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgTensionDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfdfff" />
          <stop offset="100%" stopColor="#b7ceff" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgTensionDcl)" />
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

      {showW ? <Arrow x1={origin.x} y1={origin.y} x2={wEnd.x} y2={wEnd.y} color="#ef4444" label="W" labelNormalOffset={10} /> : null}
      {showT ? <Arrow x1={origin.x} y1={origin.y} x2={tEnd.x} y2={tEnd.y} color="#3b82f6" label="T" labelNormalOffset={-8} /> : null}
      {showA && scene === "atwood" ? <Arrow x1={origin.x + 120} y1={origin.y - 10} x2={aEnd.x + 120} y2={aEnd.y - 10} color="#7c3aed" label="a" dashed /> : null}
    </SvgFrame>
  );
}
