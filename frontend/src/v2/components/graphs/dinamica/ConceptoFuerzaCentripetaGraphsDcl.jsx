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

function Arrow({ x1, y1, x2, y2, color, label, labelOffset = 14, labelNormalOffset = 0, arrowExtend = 12, dashed = false }) {
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

export default function ConceptoFuerzaCentripetaGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 2) },
      { key: "r", aliases: ["radio"], default: pickNum(p, ["r", "radio"], 4) },
      { key: "v", aliases: ["velocidad"], default: pickNum(p, ["v", "velocidad"], 8) },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 35) },
      { key: "showFc", aliases: ["mostrarFc"], default: p.showFc ?? true },
      { key: "showAc", aliases: ["mostrarAc"], default: p.showAc ?? true },
      { key: "showV", aliases: ["mostrarV"], default: p.showV ?? true },
      { key: "showRadial", aliases: ["mostrarRadial"], default: p.showRadial ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? false },
    ],
    [
      pickNum(p, ["m", "masa"], 2),
      pickNum(p, ["r", "radio"], 4),
      pickNum(p, ["v", "velocidad"], 8),
      pickNum(p, ["theta", "angulo", "th"], 35),
      p.showFc,
      p.showAc,
      p.showV,
      p.showRadial,
      p.showAxes,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 2), 0.1, 200);
  const r = clamp(toNum(ep.r, 4), 0.2, 50);
  const v = clamp(toNum(ep.v, 8), 0, 35);
  const theta = clamp(toNum(ep.theta, 35), 0, 360);
  const showFc = !!ep.showFc;
  const showAc = !!ep.showAc;
  const showV = !!ep.showV;
  const showRadial = !!ep.showRadial;
  const showAxes = !!ep.showAxes;

  const ac = (v * v) / r;
  const Fc = m * ac;

  const center = { x: 430, y: 166 };
  const rPix = clamp(85 + r * 7, 80, 180);
  const rad = (theta * Math.PI) / 180;
  const particle = {
    x: center.x + rPix * Math.cos(rad),
    y: center.y + rPix * Math.sin(rad),
  };

  const uIn = {
    x: (center.x - particle.x) / rPix,
    y: (center.y - particle.y) / rPix,
  };
  const uTan = { x: -uIn.y, y: uIn.x };

  const baseFc = 120;
  const fcLen = clamp((Fc / Math.max(Fc, 1)) * baseFc, 45, 130);
  const acLen = clamp((ac / Math.max(ac, 1)) * 95, 35, 105);
  const vLen = clamp((v / 35) * 140, 45, 140);

  const endFc = { x: particle.x + uIn.x * fcLen, y: particle.y + uIn.y * fcLen };
  const endAc = { x: particle.x + uIn.x * acLen, y: particle.y + uIn.y * acLen };
  const endV = { x: particle.x + uTan.x * vLen, y: particle.y + uTan.y * vLen };

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setM = useCallback((val) => { exp.startExperiment(); exp.setValue("m", val); }, [exp]);
  const setR = useCallback((val) => { exp.startExperiment(); exp.setValue("r", val); }, [exp]);
  const setV = useCallback((val) => { exp.startExperiment(); exp.setValue("v", val); }, [exp]);
  const setTheta = useCallback((val) => { exp.startExperiment(); exp.setValue("theta", val); }, [exp]);
  const setShowFc = useCallback((val) => { exp.startExperiment(); exp.setValue("showFc", val); }, [exp]);
  const setShowAc = useCallback((val) => { exp.startExperiment(); exp.setValue("showAc", val); }, [exp]);
  const setShowV = useCallback((val) => { exp.startExperiment(); exp.setValue("showV", val); }, [exp]);
  const setShowRadial = useCallback((val) => { exp.startExperiment(); exp.setValue("showRadial", val); }, [exp]);
  const setShowAxes = useCallback((val) => { exp.startExperiment(); exp.setValue("showAxes", val); }, [exp]);

  return (
    <SvgFrame
      title="Concepto de fuerza centripeta (DCL)"
      subtitle="Solo vectores: velocidad tangencial y resultante radial"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Aceleracion centripeta</div>
                <div style={{ marginTop: 2, color: "#3b82f6" }}>
                  <MathInline latex={"a_c=\\frac{v^2}{r}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Resultante radial</div>
                <div style={{ marginTop: 2, color: "#f97316" }}>
                  <MathInline latex={"F_c=m a_c"} />
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
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>m</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={80} step={0.1} onChange={setM} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>r</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(r, 2)} m</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={r} min={0.2} max={25} step={0.1} onChange={setR} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>v</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(v, 2)} m/s</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={v} min={0} max={35} step={0.1} onChange={setV} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>theta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(theta, 0)} deg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={theta} min={0} max={360} step={1} onChange={setTheta} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFc} onChange={(e) => setShowFc(e.target.checked)} /><span className="v2-toggle-label">F_c</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAc} onChange={(e) => setShowAc(e.target.checked)} /><span className="v2-toggle-label">a_c</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showV} onChange={(e) => setShowV(e.target.checked)} /><span className="v2-toggle-label">v_t</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showRadial} onChange={(e) => setShowRadial(e.target.checked)} /><span className="v2-toggle-label">Radio</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setShowAxes(e.target.checked)} /><span className="v2-toggle-label">Ejes</span></label>
              </div>

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <Pill active={showFc} onClick={() => setShowFc(!showFc)}>Fuerza radial</Pill>
                <Pill active={showV} onClick={() => setShowV(!showV)}>Velocidad tangencial</Pill>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.82, lineHeight: 1.45 }}>
              a_c = <b style={{ color: "#3b82f6" }}>{fmt(ac, 3)}</b> m/s2. F_c = <b style={{ color: "#f97316" }}>{fmt(Fc, 3)}</b> N.
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgCentripetaDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgCentripetaDcl)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {showAxes ? (
        <g opacity="0.85">
          <line x1="250" y1="260" x2="760" y2="260" stroke="#64748b" strokeWidth="3" />
          <line x1="250" y1="260" x2="250" y2="60" stroke="#64748b" strokeWidth="3" />
          <text x="768" y="264" fontSize="12" fill="#64748b">x</text>
          <text x="242" y="52" fontSize="12" fill="#64748b">y</text>
        </g>
      ) : null}

      <circle cx={center.x} cy={center.y} r={rPix} fill="none" stroke="rgba(15,23,42,0.30)" strokeWidth="2" strokeDasharray="6 7" />
      <circle cx={center.x} cy={center.y} r="6" fill="rgba(15,23,42,0.7)" />
      <text x={center.x - 8} y={center.y - 14} fontSize="12" fontWeight="900" fill="#334155">O</text>

      {showRadial ? (
        <line x1={particle.x} y1={particle.y} x2={center.x} y2={center.y} stroke="rgba(51,65,85,0.55)" strokeWidth="3" strokeDasharray="7 6" />
      ) : null}

      <circle cx={particle.x} cy={particle.y} r="11" fill="rgba(0,0,0,0.52)" />
      <circle cx={particle.x} cy={particle.y} r="8" fill="rgba(255,255,255,0.16)" />

      {showFc ? <Arrow x1={particle.x} y1={particle.y} x2={endFc.x} y2={endFc.y} color="#f97316" label="F_c" labelOffset={12} labelNormalOffset={10} /> : null}
      {showAc ? <Arrow x1={particle.x} y1={particle.y} x2={endAc.x} y2={endAc.y} color="#3b82f6" label="a_c" labelOffset={12} labelNormalOffset={-10} dashed /> : null}
      {showV ? <Arrow x1={particle.x} y1={particle.y} x2={endV.x} y2={endV.y} color="#16a34a" label="v_t" labelOffset={14} labelNormalOffset={10} /> : null}
    </SvgFrame>
  );
}
