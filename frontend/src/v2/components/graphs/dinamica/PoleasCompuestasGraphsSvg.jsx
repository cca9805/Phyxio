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

function Arrow({ x1, y1, x2, y2, color, label }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const s = 9;
  const p1x = x2 - ux * s - uy * (s * 0.55);
  const p1y = y2 - uy * s + ux * (s * 0.55);
  const p2x = x2 - ux * s + uy * (s * 0.55);
  const p2y = y2 - uy * s - ux * (s * 0.55);
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      {label ? <text x={x2 + 8} y={y2 - 8} fontSize="12" fontWeight="900" fill={color}>{label}</text> : null}
    </g>
  );
}

export default function PoleasCompuestasGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "W", aliases: ["peso"], default: toNum(p.W ?? p.peso, 800) },
      { key: "n", aliases: ["tramos"], default: toNum(p.n ?? p.tramos, 4) },
      { key: "eta", aliases: ["rendimiento", "eficiencia"], default: toNum(p.eta ?? p.rendimiento ?? p.eficiencia, 1) },
      { key: "dx_load", aliases: ["dxLoad", "h"], default: toNum(p.dx_load ?? p.dxLoad ?? p.h, 0.3) },
      { key: "showForces", aliases: ["mostrarFuerzas"], default: p.showForces ?? true },
      { key: "showRope", aliases: ["mostrarCuerda"], default: p.showRope ?? true },
      { key: "showSegments", aliases: ["mostrarTramos"], default: p.showSegments ?? true },
    ],
    [p.W, p.peso, p.n, p.tramos, p.eta, p.rendimiento, p.eficiencia, p.dx_load, p.dxLoad, p.h, p.showForces, p.showRope, p.showSegments]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;
  const W = clamp(toNum(ep.W, 800), 1, 20000);
  const n = clamp(Math.round(toNum(ep.n, 4)), 2, 6);
  const eta = clamp(toNum(ep.eta, 1), 0.1, 1);
  const dxLoad = clamp(toNum(ep.dx_load, 0.3), 0, 10);
  const showForces = !!ep.showForces;
  const showRope = !!ep.showRope;
  const showSegments = !!ep.showSegments;

  const Fideal = W / n;
  const Freal = W / (eta * n);
  const dxPull = n * dxLoad;
  const fmt = (x, d = 3) => (Number.isFinite(x) ? x.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  const topY = 40;
  const roofX1 = 120;
  const roofX2 = 760;
  const anchor = { x: 145, y: topY };

  const r = 22;
  const firstX = 280;
  const stepX = 74;
  const yLow = 182;
  const yHigh = 116;
  const pulleys = Array.from({ length: n }, (_, i) => ({
    x: firstX + i * stepX,
    y: i % 2 === 0 ? yLow : yHigh,
    r,
  }));
  const p1 = pulleys[0];
  const p2 = pulleys[1];
  const lastPulley = pulleys[pulleys.length - 1];

  const blockX = anchor.x;
  const blockY = 262;
  const blockTopY = blockY - 30;
  const forcePoint = { x: lastPulley.x + 85, y: 248 };

  const ropeSegments = [
    { x1: anchor.x, y1: anchor.y, x2: blockX, y2: blockTopY },
    { x1: blockX, y1: blockTopY, x2: p1.x - p1.r, y2: p1.y },
    { x1: p1.x + p1.r, y1: p1.y, x2: p2.x - p2.r, y2: p2.y },
    ...pulleys.slice(2).map((pl, i) => {
      const prev = pulleys[i + 1];
      return { x1: prev.x + prev.r, y1: prev.y, x2: pl.x - pl.r, y2: pl.y };
    }),
    { x1: lastPulley.x + lastPulley.r, y1: lastPulley.y, x2: forcePoint.x, y2: forcePoint.y },
  ];

  return (
    <SvgFrame
      title="Poleas compuestas (SVG)"
      subtitle="Aparejo ideal con correccion por rendimiento"
      badgeLabel="RESULTADO"
      badgeValue={`F_real = ${fmt(Freal, 2)} N`}
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
              <MathInline latex={"F=\\frac{W}{n}"} />
              <br />
              <MathInline latex={"F_{real}=\\frac{W}{\\eta n}"} />
              <br />
              <MathInline latex={"\\Delta x_{pull}=n\\,\\Delta x_{load}"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>W</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(W, 2)} N</div></div>
                <div style={{ marginTop: 8 }}><Slider value={W} min={20} max={5000} step={1} onChange={(v) => setValue("W", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>n</div><div style={{ fontSize: 12, opacity: 0.7 }}>{n}</div></div>
                <div style={{ marginTop: 8 }}><Slider value={n} min={2} max={6} step={1} onChange={(v) => setValue("n", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>eta</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(eta, 3)}</div></div>
                <div style={{ marginTop: 8 }}><Slider value={eta} min={0.1} max={1} step={0.01} onChange={(v) => setValue("eta", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>dx_load</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(dxLoad, 3)} m</div></div>
                <div style={{ marginTop: 8 }}><Slider value={dxLoad} min={0} max={2} step={0.01} onChange={(v) => setValue("dx_load", v)} /></div>
              </div>
              <div className="v2-toggle-row">
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showForces} onChange={(e) => setValue("showForces", e.target.checked)} /><span className="v2-toggle-label">Fuerzas</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showRope} onChange={(e) => setValue("showRope", e.target.checked)} /><span className="v2-toggle-label">Cuerda</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showSegments} onChange={(e) => setValue("showSegments", e.target.checked)} /><span className="v2-toggle-label">Tramos</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              F_ideal = <b>{fmt(Fideal, 2)}</b> N
              <br />
              F_real = <b>{fmt(Freal, 2)}</b> N
              <br />
              dx_pull = <b>{fmt(dxPull, 3)}</b> m
            </div>
          </div>
        </div>
      }
    >
      <rect x="0" y="0" width="850" height="430" fill="#dbeafe" />
      <rect x="0" y="0" width="850" height="430" fill="rgba(0,0,0,0.08)" />

      <line x1={roofX1} y1={topY} x2={roofX2} y2={topY} stroke="rgba(15,23,42,0.45)" strokeWidth="8" />
      <circle cx={anchor.x} cy={anchor.y} r="6" fill="rgba(15,23,42,0.7)" />

      {pulleys.map((pl, i) => (
        <g key={i}>
          <line x1={pl.x} y1={topY} x2={pl.x} y2={pl.y - pl.r} stroke="rgba(15,23,42,0.52)" strokeWidth="4" />
          <circle cx={pl.x} cy={pl.y} r={pl.r} fill="rgba(148,163,184,0.45)" stroke="rgba(15,23,42,0.55)" strokeWidth="3.5" />
          <circle cx={pl.x} cy={pl.y} r="4" fill="rgba(15,23,42,0.8)" />
        </g>
      ))}

      {showRope ? (
        <>
          {ropeSegments.map((s, i) => (
            <g key={`seg-${i}`}>
              <line x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke="rgba(15,23,42,0.60)" strokeWidth="3" />
              {showSegments ? (
                <text
                  x={(s.x1 + s.x2) / 2}
                  y={(s.y1 + s.y2) / 2 - 16}
                  fontSize="11"
                  fontWeight="900"
                  fill="#7c3aed"
                  textAnchor="middle"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="0.6"
                  paintOrder="stroke"
                >
                  {`T${i + 1}`}
                </text>
              ) : null}
            </g>
          ))}
        </>
      ) : null}

      <rect x={blockX - 40} y={blockY - 28} width="80" height="56" rx="10" fill="rgba(59,130,246,0.32)" stroke="rgba(15,23,42,0.45)" />
      <text x={blockX} y={blockY + 3} textAnchor="middle" fontSize="13" fill="#0f172a" fontWeight="900">Carga W</text>

      {showForces ? (
        <>
          <Arrow x1={blockX} y1={blockY + 30} x2={blockX} y2={blockY + 72} color="rgba(220,38,38,0.95)" label="W" />
          <Arrow x1={forcePoint.x} y1={forcePoint.y} x2={forcePoint.x + 56} y2={forcePoint.y + 22} color="rgba(37,99,235,0.95)" label="F_real" />
        </>
      ) : null}
    </SvgFrame>
  );
}
