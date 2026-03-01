import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const deg2rad = (d) => (Math.PI * d) / 180;
const vec = (len, angDeg) => ({ x: len * Math.cos(deg2rad(angDeg)), y: -len * Math.sin(deg2rad(angDeg)) });
const aFrom = (m, g, theta, mu, F) => (F - m * g * Math.sin(deg2rad(theta)) - mu * m * g * Math.cos(deg2rad(theta))) / m;

function Arrow({ x1, y1, x2, y2, color, label }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const px = -uy;
  const py = ux;
  const head = 14;
  const wing = 7;
  const lx = x2 - ux * head + px * wing;
  const ly = y2 - uy * head + py * wing;
  const rx = x2 - ux * head - px * wing;
  const ry = y2 - uy * head - py * wing;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="4" strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${lx},${ly} ${rx},${ry}`} fill={color} />
      <text x={x2 + px * 14} y={y2 + py * 14} fill={color} fontSize="12" fontWeight="800">{label}</text>
    </g>
  );
}

function Slider({ value, min, max, step, onChange }) {
  return <input type="range" value={value} min={min} max={max} step={step} onChange={(e) => onChange(Number(e.target.value))} style={{ width: "100%", accentColor: "#6366f1", cursor: "pointer" }} />;
}

export default function ProblemasTipoExamenGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 5) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 30) },
      { key: "mu", aliases: ["coef", "coeficiente"], default: toNum(p.mu ?? p.coef ?? p.coeficiente, 0.2) },
      { key: "F", aliases: ["fuerza"], default: toNum(p.F ?? p.fuerza, 60) },
      { key: "showForces", aliases: ["mostrarFuerzas"], default: p.showForces ?? true },
      { key: "showA", aliases: ["mostrarA"], default: p.showA ?? true },
    ],
    [p.m, p.masa, p.g, p.gravedad, p.theta, p.angulo, p.mu, p.coef, p.coeficiente, p.F, p.fuerza, p.showForces, p.showA]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;
  const m = clamp(toNum(ep.m, 5), 0.1, 1000);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 30);
  const theta = clamp(toNum(ep.theta, 30), 0, 80);
  const mu = clamp(toNum(ep.mu, 0.2), 0, 1.2);
  const F = clamp(toNum(ep.F, 60), 0, 10000);
  const showForces = !!ep.showForces;
  const showA = !!ep.showA;

  const a = aFrom(m, g, theta, mu, F);
  const N = m * g * Math.cos(deg2rad(theta));
  const Wp = m * g * Math.sin(deg2rad(theta));
  const fr = mu * N;
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  const xStart = 160;
  const yStart = 330;
  const planeLen = 300;
  const xEnd = xStart + planeLen * Math.cos(deg2rad(theta));
  const yEnd = yStart - planeLen * Math.sin(deg2rad(theta));
  const blockT = 0.55;
  const planeAngle = -theta;
  const along = vec(1, planeAngle);
  const normal = vec(1, planeAngle + 90);
  const cx = xStart + (xEnd - xStart) * blockT + normal.x * 22;
  const cy = yStart + (yEnd - yStart) * blockT + normal.y * 22;
  const s = (x) => Math.min(110, 18 + x * 0.45);

  return (
    <SvgFrame
      title="Problema tipo examen (SVG)"
      subtitle="Escenario y DCL de referencia para resolucion"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
        <button type="button" onClick={exp.resetToCalculator} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
      }
      aside={
        <div style={{ display: "grid", gap: 10 }}>
          <div className="v2-panel">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACION</div>
            <div style={{ marginTop: 8 }}>
              <MathInline latex={"a=\\frac{F-mg\\sin\\theta-\\mu mg\\cos\\theta}{m}"} />
            </div>
          </div>
          <div className="v2-panel">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ marginTop: 8, display: "grid", gap: 8 }}>
              <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}><span>m</span><b>{fmt(m, 2)}</b></div><Slider value={m} min={1} max={40} step={0.5} onChange={(v) => setValue("m", v)} /></div>
              <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}><span>theta</span><b>{fmt(theta, 1)}</b></div><Slider value={theta} min={0} max={80} step={0.5} onChange={(v) => setValue("theta", v)} /></div>
              <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}><span>mu</span><b>{fmt(mu, 3)}</b></div><Slider value={mu} min={0} max={1} step={0.01} onChange={(v) => setValue("mu", v)} /></div>
              <div><div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}><span>F</span><b>{fmt(F, 1)}</b></div><Slider value={F} min={0} max={200} step={1} onChange={(v) => setValue("F", v)} /></div>
            </div>
          </div>
          <div className="v2-panel">
            <div style={{ fontWeight: 900 }}>Lectura</div>
            <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.45 }}>
              N = <b>{fmt(N, 3)}</b> N
              <br />W_par = <b>{fmt(Wp, 3)}</b> N
              <br />f = <b>{fmt(fr, 3)}</b> N
              <br />a = <b>{fmt(a, 3)}</b> m/s²
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="examBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1220" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="850" height="420" fill="url(#examBg)" />
      <line x1={xStart} y1={yStart} x2={xEnd} y2={yEnd} stroke="#64748b" strokeWidth="8" strokeLinecap="round" />
      <g transform={`translate(${cx},${cy}) rotate(${-theta})`}>
        <rect x={-36} y={-24} width="72" height="48" rx="8" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
      </g>
      {showForces ? (
        <>
          <Arrow x1={cx} y1={cy} x2={cx + along.x * s(F)} y2={cy + along.y * s(F)} color="#3b82f6" label="F" />
          <Arrow x1={cx} y1={cy} x2={cx} y2={cy + s(m * g)} color="#f43f5e" label="W" />
          <Arrow x1={cx} y1={cy} x2={cx + normal.x * s(N)} y2={cy + normal.y * s(N)} color="#22c55e" label="N" />
          <Arrow x1={cx} y1={cy} x2={cx - along.x * s(fr)} y2={cy - along.y * s(fr)} color="#f59e0b" label="f" />
        </>
      ) : null}
      {showA ? <Arrow x1={cx} y1={cy - 54} x2={cx + along.x * s(Math.abs(a) * 8) * Math.sign(a || 1)} y2={cy - 54 + along.y * s(Math.abs(a) * 8) * Math.sign(a || 1)} color="#22c55e" label="a" /> : null}
    </SvgFrame>
  );
}
