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

export default function CoeficienteDeRozamientoGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "scene", aliases: ["mode", "escena"], default: p.scene || "horizontal" },
      { key: "mu", aliases: ["muS", "mu_s", "muK", "mu_k"], default: pickNum(p, ["mu", "muS", "mu_s", "muK", "mu_k"], 0.3) },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 20) },
      { key: "W", aliases: ["peso"], default: pickNum(p, ["W", "peso"], 10) },
      { key: "showN", aliases: ["mostrarN"], default: p.showN ?? true },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showFmax", aliases: ["mostrarFmax"], default: p.showFmax ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? false },
      { key: "showLocal", aliases: ["mostrarLocal"], default: p.showLocal ?? true },
    ],
    [
      p.scene,
      pickNum(p, ["mu", "muS", "mu_s", "muK", "mu_k"], 0.3),
      pickNum(p, ["theta", "angulo", "th"], 20),
      pickNum(p, ["W", "peso"], 10),
      p.showN,
      p.showW,
      p.showFmax,
      p.showAxes,
      p.showLocal,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const scene = ep.scene === "incline" ? "incline" : "horizontal";
  const mu = clamp(toNum(ep.mu, 0.3), 0, 2.5);
  const theta = clamp(toNum(ep.theta, 20), 0, 70);
  const Wmag = clamp(toNum(ep.W, 10), 0.1, 40);
  const showN = !!ep.showN;
  const showW = !!ep.showW;
  const showFmax = !!ep.showFmax;
  const showAxes = !!ep.showAxes;
  const showLocal = !!ep.showLocal && scene === "incline";

  const rad = (theta * Math.PI) / 180;
  const Nmag = scene === "incline" ? Wmag * Math.cos(rad) : Wmag;
  const fMax = mu * Nmag;
  const muMin = Math.tan(rad);
  const stable = scene === "incline" ? mu >= muMin : true;

  const origin = { x: 430, y: 168 };
  const Fmax = Math.max(1, Wmag, Nmag, fMax);
  const toLen = (v, base = 120) => (v / Fmax) * base;

  const wEnd = { x: origin.x, y: origin.y + toLen(Wmag) };
  const nDir = scene === "incline" ? { x: -Math.sin(rad), y: -Math.cos(rad) } : { x: 0, y: -1 };
  const nEnd = { x: origin.x + nDir.x * toLen(Nmag), y: origin.y + nDir.y * toLen(Nmag) };
  const fDir = scene === "incline" ? { x: -Math.cos(rad), y: -Math.sin(rad) } : { x: -1, y: 0 };
  const fEnd = { x: origin.x + fDir.x * toLen(fMax), y: origin.y + fDir.y * toLen(fMax) };

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setScene = useCallback((v) => { exp.startExperiment(); exp.setValue("scene", v); }, [exp]);
  const setMu = useCallback((v) => { exp.startExperiment(); exp.setValue("mu", v); }, [exp]);
  const setTheta = useCallback((v) => { exp.startExperiment(); exp.setValue("theta", v); }, [exp]);
  const setW = useCallback((v) => { exp.startExperiment(); exp.setValue("W", v); }, [exp]);
  const setShowN = useCallback((v) => { exp.startExperiment(); exp.setValue("showN", v); }, [exp]);
  const setShowW = useCallback((v) => { exp.startExperiment(); exp.setValue("showW", v); }, [exp]);
  const setShowFmax = useCallback((v) => { exp.startExperiment(); exp.setValue("showFmax", v); }, [exp]);
  const setShowAxes = useCallback((v) => { exp.startExperiment(); exp.setValue("showAxes", v); }, [exp]);
  const setShowLocal = useCallback((v) => { exp.startExperiment(); exp.setValue("showLocal", v); }, [exp]);

  return (
    <SvgFrame
      title="Coeficiente de rozamiento (DCL)"
      subtitle="Solo vectores: W, N y f_max"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Definicion</div>
                <div style={{ marginTop: 2, color: "#7c3aed" }}>
                  <MathInline latex={"\\mu=\\frac{f}{N}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Limite estatico</div>
                <div style={{ marginTop: 2, color: "#f59e0b" }}>
                  <MathInline latex={"f_{max}=\\mu N"} />
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
                <Pill active={scene === "horizontal"} onClick={() => setScene("horizontal")}>Mesa</Pill>
                <Pill active={scene === "incline"} onClick={() => setScene("incline")}>Plano inclinado</Pill>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>mu</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mu, 3)}</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={mu} min={0} max={2.5} step={0.01} onChange={setMu} /></div>
              </div>

              <div style={{ opacity: scene === "incline" ? 1 : 0.55 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>theta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(theta, 0)} deg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={theta} min={0} max={70} step={1} onChange={setTheta} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>W</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(Wmag, 2)} u</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={Wmag} min={1} max={40} step={0.1} onChange={setW} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showN} onChange={(e) => setShowN(e.target.checked)} /><span className="v2-toggle-label">N</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setShowW(e.target.checked)} /><span className="v2-toggle-label">W</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFmax} onChange={(e) => setShowFmax(e.target.checked)} /><span className="v2-toggle-label">f_max</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setShowAxes(e.target.checked)} /><span className="v2-toggle-label">Ejes</span></label>
                <label className="v2-toggle" style={{ opacity: scene === "incline" ? 1 : 0.5 }}><input className="v2-toggle-input" type="checkbox" checked={showLocal} onChange={(e) => setShowLocal(e.target.checked)} disabled={scene !== "incline"} /><span className="v2-toggle-label">Ejes locales</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              f_max = <b style={{ color: "#f59e0b" }}>{fmt(fMax, 3)}</b>.
              {scene === "incline" ? (
                <> mu_min = <b>{fmt(muMin, 3)}</b>. {stable ? <span style={{ color: "#22c55e", fontWeight: 800 }}>No desliza.</span> : <span style={{ color: "#ef4444", fontWeight: 800 }}>Desliza.</span>}</>
              ) : (
                <> En horizontal, N = W y f_max escala linealmente con mu.</>
              )}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgCoefRozDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d3deff" />
          <stop offset="100%" stopColor="#becdff" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgCoefRozDcl)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {showAxes ? (
        <g opacity="0.9">
          <line x1="250" y1="260" x2="760" y2="260" stroke="#5b7aa8" strokeWidth="3" />
          <line x1="250" y1="260" x2="250" y2="60" stroke="#5b7aa8" strokeWidth="3" />
          <text x="768" y="264" fontSize="12" fill="#64748b">x</text>
          <text x="242" y="52" fontSize="12" fill="#64748b">y</text>
        </g>
      ) : null}

      {showLocal ? (
        <g opacity="0.8">
          <line x1={origin.x} y1={origin.y} x2={origin.x + Math.cos(rad) * 110} y2={origin.y - Math.sin(rad) * 110} stroke="#8b5cf6" strokeWidth="3" />
          <line x1={origin.x} y1={origin.y} x2={origin.x - Math.sin(rad) * 90} y2={origin.y - Math.cos(rad) * 90} stroke="#8b5cf6" strokeWidth="3" />
        </g>
      ) : null}

      <circle cx={origin.x} cy={origin.y} r="11" fill="rgba(0,0,0,0.5)" />
      <circle cx={origin.x} cy={origin.y} r="8" fill="rgba(255,255,255,0.16)" />

      {showW ? <Arrow x1={origin.x} y1={origin.y} x2={wEnd.x} y2={wEnd.y} color="#ef4444" label="W" labelNormalOffset={10} /> : null}
      {showN ? <Arrow x1={origin.x} y1={origin.y} x2={nEnd.x} y2={nEnd.y} color="#22c55e" label="N" labelNormalOffset={-8} /> : null}
      {showFmax ? <Arrow x1={origin.x} y1={origin.y} x2={fEnd.x} y2={fEnd.y} color="#7c3aed" label="f_max" labelNormalOffset={10} /> : null}
    </SvgFrame>
  );
}
