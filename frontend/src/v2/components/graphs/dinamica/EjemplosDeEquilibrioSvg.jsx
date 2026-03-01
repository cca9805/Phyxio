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

function Arrow({ x1, y1, x2, y2, color, label }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;

  const head = 16;
  const wing = 7;
  const hx = x2 + ux * 7;
  const hy = y2 + uy * 7;
  const lx = hx - ux * head - uy * wing;
  const ly = hy - uy * head + ux * wing;
  const rx = hx - ux * head + uy * wing;
  const ry = hy - uy * head - ux * wing;

  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="4" strokeLinecap="round" />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} />
      {label ? (
        <text x={hx + 6} y={hy - 8} fontSize="12" fontWeight="900" fill={color}>{label}</text>
      ) : null}
    </g>
  );
}

export default function EjemplosDeEquilibrioSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "scene", aliases: ["ejemplo"], default: p.scene || "mesa" },
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 10) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.81) },
      { key: "F", aliases: ["f", "fuerza"], default: toNum(p.F ?? p.f, 20) },
      { key: "mu", aliases: ["mu_s", "mus"], default: toNum(p.mu ?? p.mu_s, 0.4) },
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 35) },
      { key: "showForces", aliases: ["mostrarFuerzas"], default: p.showForces ?? true },
      { key: "showInfo", aliases: ["mostrarInfo"], default: p.showInfo ?? true },
    ],
    [p.scene, p.m, p.masa, p.g, p.gravedad, p.F, p.f, p.mu, p.mu_s, p.theta, p.angulo, p.showForces, p.showInfo]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const scene = ep.scene === "nudo" ? "nudo" : ep.scene === "colgante" ? "colgante" : "mesa";
  const m = clamp(toNum(ep.m, 10), 0.1, 100);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const F = clamp(toNum(ep.F, 20), 0, 250);
  const mu = clamp(toNum(ep.mu, 0.4), 0, 1.5);
  const theta = clamp(toNum(ep.theta, 35), 5, 80);
  const showForces = !!ep.showForces;
  const showInfo = !!ep.showInfo;

  const W = m * g;
  const N = W;
  const fsMax = mu * N;
  const fs = Math.min(F, fsMax);
  const rMesa = Math.max(0, F - fs);

  const half = (theta * Math.PI) / 180;
  const Tnudo = W / (2 * Math.sin(half));

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <SvgFrame
      title="Ejemplos de equilibrio (SVG)"
      subtitle="Representacion visual de situaciones de equilibrio traslacional"
      badgeLabel="ESCENA"
      badgeValue={scene.toUpperCase()}
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
          <div className="v2-panel m-2" style={{ background: "rgba(0,0,0,0.65)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ESCENA</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
              <Pill active={scene === "mesa"} onClick={() => setValue("scene", "mesa")}>Mesa</Pill>
              <Pill active={scene === "colgante"} onClick={() => setValue("scene", "colgante")}>Colgante</Pill>
              <Pill active={scene === "nudo"} onClick={() => setValue("scene", "nudo")}>Nudo</Pill>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={50} step={0.1} onChange={(v) => setValue("m", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>g</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s2</div></div>
                <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={(v) => setValue("g", v)} /></div>
              </div>
              <div style={{ opacity: scene === "mesa" ? 1 : 0.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>F</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F, 2)} N</div></div>
                <div style={{ marginTop: 8 }}><Slider value={F} min={0} max={250} step={0.5} onChange={(v) => setValue("F", v)} /></div>
              </div>
              <div style={{ opacity: scene === "mesa" ? 1 : 0.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>mu_s</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mu, 2)}</div></div>
                <div style={{ marginTop: 8 }}><Slider value={mu} min={0} max={1.2} step={0.01} onChange={(v) => setValue("mu", v)} /></div>
              </div>
              <div style={{ opacity: scene === "nudo" ? 1 : 0.5 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>theta</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(theta, 0)} deg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={theta} min={5} max={80} step={1} onChange={(v) => setValue("theta", v)} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showForces} onChange={(e) => setValue("showForces", e.target.checked)} /><span className="v2-toggle-label">Fuerzas</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showInfo} onChange={(e) => setValue("showInfo", e.target.checked)} /><span className="v2-toggle-label">Info</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.4)" }}>
            <div style={{ fontWeight: 900 }}>Idea</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.85, lineHeight: 1.45 }}>
              <MathInline latex={"\\sum \\vec F = 0"} /> en reposo.
              {scene === "mesa" ? <><br />Si F &le; mu_s N, el rozamiento estatico equilibra.</> : null}
              {scene === "colgante" ? <><br />En reposo: T = W.</> : null}
              {scene === "nudo" ? <><br />Dos tensiones sostienen el peso: 2T sin(theta) = W.</> : null}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgEqSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgEqSvg)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      {scene === "mesa" ? (
        <g>
          <rect x="130" y="230" width="580" height="14" rx="7" fill="rgba(15,23,42,0.45)" />
          <rect x="360" y="166" width="110" height="64" rx="14" fill="rgba(30,64,175,0.90)" stroke="rgba(255,255,255,0.35)" />
          <text x="415" y="203" textAnchor="middle" fontSize="12" fill="white" fontWeight="800">m</text>

          {showForces ? (
            <>
              <Arrow x1={415} y1={166} x2={415} y2={112} color="#22c55e" label="N" />
              <Arrow x1={415} y1={230} x2={415} y2={286} color="#ef4444" label="W" />
              <Arrow x1={470} y1={198} x2={545} y2={198} color="#3b82f6" label="F" />
              <Arrow x1={360} y1={198} x2={300 + (1 - Math.min(1, F / Math.max(1, fsMax))) * 40} y2={198} color="#f59e0b" label="f_s" />
            </>
          ) : null}

          {showInfo ? (
            <text x="130" y="54" fontSize="13" fill="#0f172a" fontWeight="900">
              f_s(max) = {fmt(fsMax, 2)} N | f_s = {fmt(fs, 2)} N | R = {fmt(rMesa, 2)} N
            </text>
          ) : null}
        </g>
      ) : null}

      {scene === "colgante" ? (
        <g>
          <line x1="415" y1="58" x2="415" y2="110" stroke="rgba(15,23,42,0.80)" strokeWidth="4" />
          <line x1="415" y1="110" x2="415" y2="190" stroke="#334155" strokeWidth="3" />
          <circle cx="415" cy="220" r="30" fill="rgba(30,64,175,0.92)" stroke="rgba(255,255,255,0.35)" />
          <text x="415" y="224" textAnchor="middle" fontSize="12" fill="white" fontWeight="800">m</text>

          {showForces ? (
            <>
              <Arrow x1={415} y1={220} x2={415} y2={156} color="#6366f1" label="T" />
              <Arrow x1={415} y1={220} x2={415} y2={284} color="#ef4444" label="W" />
            </>
          ) : null}

          {showInfo ? (
            <text x="130" y="54" fontSize="13" fill="#0f172a" fontWeight="900">
              En equilibrio: T = W = {fmt(W, 2)} N
            </text>
          ) : null}
        </g>
      ) : null}

      {scene === "nudo" ? (
        <g>
          <line x1="170" y1="72" x2="390" y2="182" stroke="#334155" strokeWidth="4" />
          <line x1="660" y1="72" x2="440" y2="182" stroke="#334155" strokeWidth="4" />
          <circle cx="415" cy="194" r="10" fill="#0f172a" />
          <line x1="415" y1="204" x2="415" y2="250" stroke="#334155" strokeWidth="3" />
          <circle cx="415" cy="278" r="24" fill="rgba(30,64,175,0.92)" stroke="rgba(255,255,255,0.35)" />
          <text x="415" y="282" textAnchor="middle" fontSize="12" fill="white" fontWeight="800">m</text>

          {showForces ? (
            <>
              <Arrow x1={415} y1={194} x2={335} y2={145} color="#6366f1" label="T1" />
              <Arrow x1={415} y1={194} x2={495} y2={145} color="#6366f1" label="T2" />
              <Arrow x1={415} y1={194} x2={415} y2={258} color="#ef4444" label="W" />
            </>
          ) : null}

          {showInfo ? (
            <text x="130" y="54" fontSize="13" fill="#0f172a" fontWeight="900">
              T = {fmt(Tnudo, 2)} N por cuerda | 2T sin(theta) = W
            </text>
          ) : null}
        </g>
      ) : null}
    </SvgFrame>
  );
}
