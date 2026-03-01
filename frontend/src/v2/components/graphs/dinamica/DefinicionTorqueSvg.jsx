import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

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
      {label ? <text x={hx + 8} y={hy - 8} fontSize="12" fill={color} fontWeight="900">{label}</text> : null}
    </g>
  );
}

export default function DefinicionTorqueSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "r", aliases: ["brazo"], default: toNum(p.r ?? p.brazo, 3.8) },
      { key: "F", aliases: ["f", "fuerza"], default: toNum(p.F ?? p.f, 60) },
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 70) },
      { key: "showD", aliases: ["mostrarBrazo"], default: p.showD ?? true },
      { key: "showArc", aliases: ["mostrarArco"], default: p.showArc ?? true },
      { key: "showFormula", aliases: ["mostrarFormula"], default: p.showFormula ?? true },
    ],
    [p.r, p.brazo, p.F, p.f, p.theta, p.angulo, p.showD, p.showArc, p.showFormula]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const r = clamp(toNum(ep.r, 3.8), 0.4, 6);
  const F = clamp(toNum(ep.F, 60), 1, 150);
  const theta = clamp(toNum(ep.theta, 70), 0, 180);
  const showD = !!ep.showD;
  const showArc = !!ep.showArc;
  const showFormula = !!ep.showFormula;

  const thetaRad = (theta * Math.PI) / 180;
  const tau = r * F * Math.sin(thetaRad);
  const d = r * Math.sin(thetaRad);

  const pivot = { x: 180, y: 250 };
  const scaleR = 70;
  const rLen = (r / 6) * scaleR + 90;

  const point = {
    x: pivot.x + rLen,
    y: pivot.y,
  };

  const fLen = (F / 150) * 120 + 30;
  const fx = fLen * Math.cos(-thetaRad);
  const fy = fLen * Math.sin(-thetaRad);
  const fEnd = { x: point.x + fx, y: point.y + fy };

  const actionX = point.x;
  const dStart = { x: pivot.x, y: pivot.y };
  const dEnd = { x: actionX, y: pivot.y };

  const fmt = (n, dec = 2) => (Number.isFinite(n) ? n.toFixed(dec).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <SvgFrame
      title="Definicion de torque (SVG)"
      subtitle="Relaciones entre fuerza, brazo y efecto de giro"
      badgeLabel="TAU"
      badgeValue={`${fmt(tau, 2)} N·m`}
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
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>r</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(r, 2)} m</div></div>
                <div style={{ marginTop: 8 }}><Slider value={r} min={0.4} max={6} step={0.1} onChange={(v) => setValue("r", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>F</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(F, 1)} N</div></div>
                <div style={{ marginTop: 8 }}><Slider value={F} min={1} max={150} step={1} onChange={(v) => setValue("F", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>theta</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(theta, 0)} deg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={theta} min={0} max={180} step={1} onChange={(v) => setValue("theta", v)} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showD} onChange={(e) => setValue("showD", e.target.checked)} /><span className="v2-toggle-label">Brazo d</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showArc} onChange={(e) => setValue("showArc", e.target.checked)} /><span className="v2-toggle-label">Arco tau</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFormula} onChange={(e) => setValue("showFormula", e.target.checked)} /><span className="v2-toggle-label">Formula</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              d = <b>{fmt(d, 3)}</b> m
              <br />
              tau = <b style={{ color: "#fb923c" }}>{fmt(tau, 3)}</b> N·m
              <br />
              {showFormula ? <MathInline latex={"\\tau = rF\\sin\\theta = Fd"} /> : null}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgTorqueSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgTorqueSvg)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.08)" />

      <line x1="70" y1="260" x2="770" y2="260" stroke="rgba(15,23,42,0.32)" strokeWidth="2" />

      <circle cx={pivot.x} cy={pivot.y} r="10" fill="rgba(15,23,42,0.92)" />
      <text x={pivot.x - 20} y={pivot.y + 30} fontSize="12" fill="#0f172a" fontWeight="900">eje</text>

      <line x1={pivot.x} y1={pivot.y} x2={point.x} y2={point.y} stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
      <Arrow x1={pivot.x} y1={pivot.y} x2={point.x} y2={point.y} color="#3b82f6" label="r" />

      <Arrow x1={point.x} y1={point.y} x2={fEnd.x} y2={fEnd.y} color="#fb923c" label="F" />

      <line x1={actionX} y1="80" x2={actionX} y2="290" stroke="rgba(15,23,42,0.35)" strokeWidth="2" strokeDasharray="6 6" />

      {showD ? (
        <>
          <line x1={dStart.x} y1={dStart.y} x2={dEnd.x} y2={dEnd.y} stroke="#0f172a" strokeWidth="3" />
          <text x={(dStart.x + dEnd.x) / 2 - 8} y={dStart.y - 10} fontSize="12" fill="#0f172a" fontWeight="900">d</text>
        </>
      ) : null}

      {showArc ? (
        <>
          <path d={`M ${pivot.x + 48} ${pivot.y - 58} A 70 70 0 0 1 ${pivot.x + 78} ${pivot.y + 6}`} fill="none" stroke="#22c55e" strokeWidth="4" />
          <text x={pivot.x + 95} y={pivot.y - 18} fontSize="16" fontWeight="900" fill="#166534">tau</text>
        </>
      ) : null}

      {showFormula ? (
        <text x="88" y="44" fontSize="13" fill="#0f172a" fontWeight="900">
          tau = r F sin(theta) = F d
        </text>
      ) : null}
    </SvgFrame>
  );
}
