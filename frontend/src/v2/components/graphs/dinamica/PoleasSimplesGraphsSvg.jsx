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

export default function PoleasSimplesGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "W", aliases: ["peso"], default: toNum(p.W ?? p.peso, 200) },
      { key: "n", aliases: ["tramos"], default: toNum(p.n ?? p.tramos, 2) },
      { key: "dx_load", aliases: ["dxLoad", "h", "altura"], default: toNum(p.dx_load ?? p.dxLoad ?? p.h ?? p.altura, 0.5) },
      { key: "showForces", aliases: ["mostrarFuerzas"], default: p.showForces ?? true },
      { key: "showRope", aliases: ["mostrarCuerda"], default: p.showRope ?? true },
    ],
    [p.W, p.peso, p.n, p.tramos, p.dx_load, p.dxLoad, p.h, p.altura, p.showForces, p.showRope]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;
  const W = clamp(toNum(ep.W, 200), 1, 10000);
  const n = clamp(Math.round(toNum(ep.n, 2)), 1, 6);
  const dxLoad = clamp(toNum(ep.dx_load, 0.5), 0, 20);
  const showForces = !!ep.showForces;
  const showRope = !!ep.showRope;

  const F = W / n;
  const dxPull = n * dxLoad;
  const fmt = (x, d = 3) => (Number.isFinite(x) ? x.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  const pulleyX = 430;
  const pulleyY = 98;
  const r = 34;
  const blockY = 232;
  const leftX = pulleyX - 120;
  const rightX = pulleyX + 120;

  return (
    <SvgFrame
      title="Poleas simples (SVG)"
      subtitle="Modelo ideal de ventaja mecanica"
      badgeLabel="RESULTADO"
      badgeValue={`F = ${fmt(F, 2)} N`}
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
              <MathInline latex={"\\Delta x_{pull}=n\\,\\Delta x_{load}"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>W</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(W, 2)} N</div></div>
                <div style={{ marginTop: 8 }}><Slider value={W} min={10} max={1000} step={1} onChange={(v) => setValue("W", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>n</div><div style={{ fontSize: 12, opacity: 0.7 }}>{n}</div></div>
                <div style={{ marginTop: 8 }}><Slider value={n} min={1} max={6} step={1} onChange={(v) => setValue("n", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>dx_load</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(dxLoad, 3)} m</div></div>
                <div style={{ marginTop: 8 }}><Slider value={dxLoad} min={0} max={2} step={0.01} onChange={(v) => setValue("dx_load", v)} /></div>
              </div>
              <div className="v2-toggle-row">
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showForces} onChange={(e) => setValue("showForces", e.target.checked)} /><span className="v2-toggle-label">Fuerzas</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showRope} onChange={(e) => setValue("showRope", e.target.checked)} /><span className="v2-toggle-label">Cuerda</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              W = <b>{fmt(W, 2)}</b> N
              <br />
              n = <b>{n}</b>
              <br />
              F = <b>{fmt(F, 2)}</b> N
              <br />
              dx_pull = <b>{fmt(dxPull, 3)}</b> m
            </div>
          </div>
        </div>
      }
    >
      <rect x="0" y="0" width="850" height="330" fill="#dbeafe" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      <line x1="170" y1="45" x2="690" y2="45" stroke="rgba(15,23,42,0.45)" strokeWidth="8" />
      <circle cx={pulleyX} cy={pulleyY} r={r} fill="rgba(148,163,184,0.45)" stroke="rgba(15,23,42,0.55)" strokeWidth="4" />
      <circle cx={pulleyX} cy={pulleyY} r="5" fill="rgba(15,23,42,0.8)" />

      {showRope ? (
        <>
          <line x1={leftX} y1={45} x2={leftX} y2={blockY - 28} stroke="rgba(15,23,42,0.6)" strokeWidth="3" />
          <line x1={rightX} y1={45} x2={rightX} y2={blockY - 28} stroke="rgba(15,23,42,0.6)" strokeWidth="3" />
          <line x1={leftX} y1={45} x2={pulleyX - r} y2={45} stroke="rgba(15,23,42,0.6)" strokeWidth="3" />
          <line x1={pulleyX + r} y1={45} x2={rightX} y2={45} stroke="rgba(15,23,42,0.6)" strokeWidth="3" />
        </>
      ) : null}

      <rect x={pulleyX - 70} y={blockY - 30} width="140" height="60" rx="10" fill="rgba(59,130,246,0.32)" stroke="rgba(15,23,42,0.45)" />
      <text x={pulleyX} y={blockY + 4} textAnchor="middle" fontSize="13" fill="#0f172a" fontWeight="900">Carga W</text>

      {showForces ? (
        <>
          <Arrow x1={pulleyX} y1={blockY} x2={pulleyX} y2={blockY + 66} color="rgba(220,38,38,0.95)" label="W" />
          <Arrow x1={rightX + 38} y1={175} x2={rightX + 38} y2={175 + 56} color="rgba(37,99,235,0.95)" label="F" />
        </>
      ) : null}
    </SvgFrame>
  );
}
