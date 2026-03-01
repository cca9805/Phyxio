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

function Arrow({ x1, y1, x2, y2, color, label, dashed }) {
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
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeDasharray={dashed ? "5 4" : undefined} />
      <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      {label ? <text x={x2 + 8} y={y2 - 8} fontSize="12" fontWeight="900" fill={color}>{label}</text> : null}
    </g>
  );
}

export default function ConRozamientoGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "thetaDeg", aliases: ["theta", "angulo"], default: toNum(p.thetaDeg ?? p.theta ?? p.angulo, 30) },
      { key: "mu", aliases: ["coef", "coeficiente"], default: toNum(p.mu ?? p.coef ?? p.coeficiente, 0.2) },
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 2) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "showComp", aliases: ["mostrarComponentes"], default: p.showComp ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? true },
    ],
    [p.thetaDeg, p.theta, p.angulo, p.mu, p.coef, p.coeficiente, p.m, p.masa, p.g, p.gravedad, p.showComp, p.showAxes]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const thetaDeg = clamp(toNum(ep.thetaDeg, 30), 0, 70);
  const theta = (thetaDeg * Math.PI) / 180;
  const mu = clamp(toNum(ep.mu, 0.2), 0, 2);
  const m = clamp(toNum(ep.m, 2), 0.05, 100);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 25);
  const showComp = !!ep.showComp;
  const showAxes = !!ep.showAxes;

  const mg = m * g;
  const N = mg * Math.cos(theta);
  const f = mu * N;
  const mgPar = mg * Math.sin(theta);
  const mgPer = mg * Math.cos(theta);
  const a = g * (Math.sin(theta) - mu * Math.cos(theta));

  const k = 6.8;
  const Lmg = clampLen(mg * k, 28, 150);
  const LN = clampLen(N * k, 22, 140);
  const Lf = clampLen(f * k, 16, 125);
  const Lpar = clampLen(mgPar * k, 16, 130);
  const Lper = clampLen(mgPer * k, 16, 130);

  const cx = 420;
  const cy = 185;
  const blockOffY = -24;
  const ox = cx + blockOffY * Math.sin(theta);
  const oy = cy + blockOffY * Math.cos(theta);
  const tx = Math.cos(theta);
  const ty = -Math.sin(theta);
  const nx = -Math.sin(theta);
  const ny = -Math.cos(theta);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <SvgFrame
      title="Plano inclinado con rozamiento (DCL)"
      subtitle="Fuerzas reales: peso, normal y friccion"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      svgHeight={930}
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
              <MathInline latex={"N=mg\\cos\\theta"} />
              <br />
              <MathInline latex={"f=\\mu N"} />
              <br />
              <MathInline latex={"a=g(\\sin\\theta-\\mu\\cos\\theta)"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>theta</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(thetaDeg, 2)} deg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={thetaDeg} min={0} max={70} step={0.1} onChange={(v) => setValue("thetaDeg", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>mu</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mu, 3)}</div></div>
                <div style={{ marginTop: 8 }}><Slider value={mu} min={0} max={2} step={0.01} onChange={(v) => setValue("mu", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={80} step={0.1} onChange={(v) => setValue("m", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>g</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s²</div></div>
                <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={(v) => setValue("g", v)} /></div>
              </div>

              <div className="v2-toggle-row">
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showComp} onChange={(e) => setValue("showComp", e.target.checked)} /><span className="v2-toggle-label">Componentes</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAxes} onChange={(e) => setValue("showAxes", e.target.checked)} /><span className="v2-toggle-label">Ejes</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              N = <b>{fmt(N, 3)}</b> N
              <br />
              f = <b>{fmt(f, 3)}</b> N
              <br />
              a = <b>{fmt(a, 3)}</b> m/s²
            </div>
          </div>
        </div>
      }
    >
      <rect x="0" y="0" width="850" height="400" fill="#dbeafe" />
      <rect x="0" y="0" width="850" height="400" fill="rgba(0,0,0,0.08)" />

      <g transform={`translate(${cx},${cy}) rotate(${-thetaDeg})`}>
        <rect x="-190" y="-5" width="380" height="10" rx="6" fill="rgba(226,232,240,0.22)" stroke="rgba(15,23,42,0.35)" />
        <rect x="-32" y={blockOffY - 18} width="64" height="36" rx="8" fill="rgba(255,255,255,0.55)" stroke="rgba(15,23,42,0.45)" />
      </g>

      {showAxes ? (
        <>
          <Arrow x1={ox} y1={oy} x2={ox + tx * 92} y2={oy + ty * 92} color="rgba(30,64,175,0.95)" label="eje //" />
          <Arrow x1={ox} y1={oy} x2={ox + nx * 82} y2={oy + ny * 82} color="rgba(22,163,74,0.95)" label="eje perp" />
        </>
      ) : null}

      <Arrow x1={ox} y1={oy} x2={ox} y2={oy + Lmg} color="rgba(220,38,38,0.95)" label="mg" />
      <Arrow x1={ox} y1={oy} x2={ox + nx * LN} y2={oy + ny * LN} color="rgba(22,163,74,0.95)" label="N" />
      <Arrow x1={ox} y1={oy} x2={ox + tx * Lf} y2={oy + ty * Lf} color="rgba(249,115,22,0.95)" label="f" />

      {showComp ? (
        <>
          <Arrow x1={ox} y1={oy} x2={ox - tx * Lpar} y2={oy - ty * Lpar} color="rgba(71,85,105,0.95)" label="mg sin(theta)" dashed />
          <Arrow x1={ox} y1={oy} x2={ox - nx * Lper} y2={oy - ny * Lper} color="rgba(71,85,105,0.95)" label="mg cos(theta)" dashed />
        </>
      ) : null}
    </SvgFrame>
  );
}
