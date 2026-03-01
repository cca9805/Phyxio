import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const accel = (m1, m2, g) => ((m2 - m1) * g) / (m1 + m2);
const tension = (m1, m2, g) => (2 * m1 * m2 * g) / (m1 + m2);

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
      {label ? <text x={x2 + 7} y={y2 - 6} fontSize="12" fontWeight="900" fill={color}>{label}</text> : null}
    </g>
  );
}

export default function DosMasasUnidasPorCuerdaGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m1", aliases: ["masa1"], default: toNum(p.m1 ?? p.masa1, 2) },
      { key: "m2", aliases: ["masa2"], default: toNum(p.m2 ?? p.masa2, 5) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "showForces", aliases: ["mostrarFuerzas"], default: p.showForces ?? true },
      { key: "showAccel", aliases: ["mostrarA"], default: p.showAccel ?? true },
    ],
    [p.m1, p.masa1, p.m2, p.masa2, p.g, p.gravedad, p.showForces, p.showAccel]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;
  const m1 = clamp(toNum(ep.m1, 2), 0.1, 50);
  const m2 = clamp(toNum(ep.m2, 5), 0.1, 50);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 25);
  const showForces = !!ep.showForces;
  const showAccel = !!ep.showAccel;

  const a = accel(m1, m2, g);
  const T = tension(m1, m2, g);
  const dir = a >= 0 ? 1 : -1;
  const magA = clamp(Math.abs(a), 0, 20);

  const blockOffset = clamp(magA * 4, 0, 18) * dir;
  const y1 = 235 - blockOffset;
  const y2 = 235 + blockOffset;
  const pulley = { x: 425, y: 98, r: 34 };
  const xLeft = 295;
  const xRight = 555;

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <SvgFrame
      title="Dos masas unidas por cuerda (SVG)"
      subtitle="Sistema tipo Atwood"
      badgeLabel="RESULTADO"
      badgeValue={`a = ${fmt(a, 3)} m/s^2`}
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
              <MathInline latex={"a=\\frac{(m_2-m_1)g}{m_1+m_2}"} />
              <br />
              <MathInline latex={"T=\\frac{2m_1m_2g}{m_1+m_2}"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m1</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m1, 2)} kg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={m1} min={0.1} max={20} step={0.1} onChange={(v) => setValue("m1", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m2</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m2, 2)} kg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={m2} min={0.1} max={20} step={0.1} onChange={(v) => setValue("m2", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>g</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s^2</div></div>
                <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={(v) => setValue("g", v)} /></div>
              </div>

              <div className="v2-toggle-row">
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showForces} onChange={(e) => setValue("showForces", e.target.checked)} /><span className="v2-toggle-label">Fuerzas</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAccel} onChange={(e) => setValue("showAccel", e.target.checked)} /><span className="v2-toggle-label">Aceleracion</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              a = <b>{fmt(a, 3)}</b> m/s^2
              <br />
              T = <b>{fmt(T, 3)}</b> N
              <br />
              Si m2 &gt; m1, baja m2 y sube m1.
            </div>
          </div>
        </div>
      }
    >
      <rect x="0" y="0" width="850" height="330" fill="#dbeafe" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      <line x1={xLeft} y1={68} x2={xLeft} y2={y1 - 28} stroke="rgba(15,23,42,0.55)" strokeWidth="3" />
      <line x1={xRight} y1={68} x2={xRight} y2={y2 - 28} stroke="rgba(15,23,42,0.55)" strokeWidth="3" />
      <line x1={xLeft} y1={68} x2={pulley.x - pulley.r} y2={68} stroke="rgba(15,23,42,0.55)" strokeWidth="3" />
      <line x1={pulley.x + pulley.r} y1={68} x2={xRight} y2={68} stroke="rgba(15,23,42,0.55)" strokeWidth="3" />

      <circle cx={pulley.x} cy={pulley.y} r={pulley.r} fill="rgba(148,163,184,0.42)" stroke="rgba(15,23,42,0.55)" strokeWidth="4" />
      <circle cx={pulley.x} cy={pulley.y} r="5" fill="rgba(15,23,42,0.8)" />

      <rect x={xLeft - 35} y={y1 - 28} width="70" height="56" rx="8" fill="rgba(59,130,246,0.32)" stroke="rgba(15,23,42,0.45)" />
      <rect x={xRight - 35} y={y2 - 28} width="70" height="56" rx="8" fill="rgba(20,184,166,0.35)" stroke="rgba(15,23,42,0.45)" />
      <text x={xLeft} y={y1 + 4} textAnchor="middle" fontSize="13" fill="#0f172a" fontWeight="900">m1</text>
      <text x={xRight} y={y2 + 4} textAnchor="middle" fontSize="13" fill="#0f172a" fontWeight="900">m2</text>

      {showForces ? (
        <>
          <Arrow x1={xLeft} y1={y1} x2={xLeft} y2={y1 + 65} color="rgba(220,38,38,0.95)" label="m1 g" />
          <Arrow x1={xRight} y1={y2} x2={xRight} y2={y2 + 65} color="rgba(220,38,38,0.95)" label="m2 g" />
          <Arrow x1={xLeft} y1={y1} x2={xLeft} y2={y1 - 58} color="rgba(22,163,74,0.95)" label="T" />
          <Arrow x1={xRight} y1={y2} x2={xRight} y2={y2 - 58} color="rgba(22,163,74,0.95)" label="T" />
        </>
      ) : null}

      {showAccel ? (
        <>
          <Arrow x1={xLeft - 58} y1={y1} x2={xLeft - 58} y2={y1 - 44 * dir} color="rgba(37,99,235,0.95)" label="a" />
          <Arrow x1={xRight + 58} y1={y2} x2={xRight + 58} y2={y2 + 44 * dir} color="rgba(37,99,235,0.95)" label="a" />
        </>
      ) : null}
    </SvgFrame>
  );
}

