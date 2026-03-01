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

function TorqueArrow({ cx, cy, radius, color = "#f97316", label = "tau" }) {
  const x1 = cx + radius * 0.2;
  const y1 = cy - radius - 16;
  const x2 = cx + radius + 6;
  const y2 = cy - radius * 0.5;
  return (
    <g>
      <path d={`M ${x1} ${y1} A ${radius + 14} ${radius + 14} 0 0 1 ${x2} ${y2}`} fill="none" stroke={color} strokeWidth="4" />
      <polygon points={`${x2},${y2} ${x2 - 16},${y2 - 4} ${x2 - 6},${y2 - 16}`} fill={color} />
      <text x={x2 + 12} y={y2 - 10} fontSize="12" fill={color} fontWeight="900">{label}</text>
    </g>
  );
}

function MassDots({ cx, cy, rDot, n = 6, color = "#1d4ed8" }) {
  const dots = [];
  for (let i = 0; i < n; i++) {
    const a = (i * 2 * Math.PI) / n;
    dots.push(
      <circle
        key={i}
        cx={cx + rDot * Math.cos(a)}
        cy={cy + rDot * Math.sin(a)}
        r="6"
        fill={color}
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1.5"
      />
    );
  }
  return <>{dots}</>;
}

export default function MomentoInerciaDefinicionSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 2) },
      { key: "R", aliases: ["radio", "r"], default: toNum(p.R ?? p.radio ?? p.r, 1.2) },
      { key: "tau", aliases: ["t", "torque"], default: toNum(p.tau ?? p.t ?? p.torque, 3) },
      { key: "spread", aliases: ["distribucion"], default: toNum(p.spread ?? p.distribucion, 0.9) },
      { key: "showFormula", aliases: ["mostrarFormula"], default: p.showFormula ?? true },
      { key: "showAlpha", aliases: ["mostrarAlpha"], default: p.showAlpha ?? true },
    ],
    [p.m, p.masa, p.R, p.radio, p.r, p.tau, p.t, p.torque, p.spread, p.distribucion, p.showFormula, p.showAlpha]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 2), 0.2, 20);
  const R = clamp(toNum(ep.R, 1.2), 0.3, 2.5);
  const tau = clamp(toNum(ep.tau, 3), 0.1, 20);
  const spread = clamp(toNum(ep.spread, 0.9), 0.2, 1);
  const showFormula = !!ep.showFormula;
  const showAlpha = !!ep.showAlpha;

  const kCompact = 0.35;
  const kSpread = spread;

  const ICompact = m * Math.pow(kCompact * R, 2);
  const ISpread = m * Math.pow(kSpread * R, 2);

  const alphaCompact = tau / ICompact;
  const alphaSpread = tau / ISpread;

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  const left = { x: 250, y: 190 };
  const right = { x: 620, y: 190 };
  const wheelR = 96;
  const dotRCompact = wheelR * kCompact;
  const dotRSpread = wheelR * kSpread;

  return (
    <SvgFrame
      title="Definicion de momento de inercia (SVG)"
      subtitle="Misma masa y mismo torque, distinta distribucion radial"
      badgeLabel="CLAVE"
      badgeValue="I depende de r^2"
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
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>m</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div></div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.2} max={20} step={0.1} onChange={(v) => setValue("m", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>R</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(R, 2)} m</div></div>
                <div style={{ marginTop: 8 }}><Slider value={R} min={0.3} max={2.5} step={0.1} onChange={(v) => setValue("R", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>tau</div><div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(tau, 2)} N*m</div></div>
                <div style={{ marginTop: 8 }}><Slider value={tau} min={0.1} max={20} step={0.1} onChange={(v) => setValue("tau", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ fontSize: 13, fontWeight: 900 }}>Distribucion lejana</div><div style={{ fontSize: 12, opacity: 0.7 }}>k = {fmt(kSpread, 2)}</div></div>
                <div style={{ marginTop: 8 }}><Slider value={spread} min={0.2} max={1} step={0.01} onChange={(v) => setValue("spread", v)} /></div>
              </div>

              <div className="v2-toggle-row" style={{ marginTop: 6 }}>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFormula} onChange={(e) => setValue("showFormula", e.target.checked)} /><span className="v2-toggle-label">Formula</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showAlpha} onChange={(e) => setValue("showAlpha", e.target.checked)} /><span className="v2-toggle-label">Comparar alpha</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              I cerca = <b>{fmt(ICompact, 3)}</b> kg*m^2
              <br />
              I lejos = <b>{fmt(ISpread, 3)}</b> kg*m^2
              <br />
              {showAlpha ? <>alpha cerca = <b>{fmt(alphaCompact, 2)}</b> rad/s^2<br />alpha lejos = <b>{fmt(alphaSpread, 2)}</b> rad/s^2</> : null}
            </div>
          </div>
        </div>
      }
    >
      <defs>
        <linearGradient id="bgInerciaDef" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="850" height="330" fill="url(#bgInerciaDef)" />
      <rect x="0" y="0" width="850" height="330" fill="rgba(0,0,0,0.07)" />

      <line x1="425" y1="26" x2="425" y2="304" stroke="rgba(15,23,42,0.18)" strokeWidth="2" strokeDasharray="7 7" />
      <text x="170" y="34" fontSize="13" fill="#0f172a" fontWeight="900">Masa cerca del eje</text>
      <text x="533" y="34" fontSize="13" fill="#0f172a" fontWeight="900">Masa lejos del eje</text>

      <circle cx={left.x} cy={left.y} r={wheelR} fill="rgba(15,23,42,0.06)" stroke="rgba(15,23,42,0.45)" strokeWidth="3" />
      <circle cx={right.x} cy={right.y} r={wheelR} fill="rgba(15,23,42,0.06)" stroke="rgba(15,23,42,0.45)" strokeWidth="3" />
      <circle cx={left.x} cy={left.y} r="5" fill="#0f172a" />
      <circle cx={right.x} cy={right.y} r="5" fill="#0f172a" />

      <MassDots cx={left.x} cy={left.y} rDot={dotRCompact} color="#1d4ed8" />
      <MassDots cx={right.x} cy={right.y} rDot={dotRSpread} color="#7c3aed" />

      <TorqueArrow cx={left.x} cy={left.y} radius={wheelR} label="tau" />
      <TorqueArrow cx={right.x} cy={right.y} radius={wheelR} label="tau" />

      {showAlpha ? (
        <>
          <text x={132} y={294} fontSize="12" fill="#065f46" fontWeight="900">alpha grande ({fmt(alphaCompact, 2)})</text>
          <text x={516} y={294} fontSize="12" fill="#7f1d1d" fontWeight="900">alpha pequena ({fmt(alphaSpread, 2)})</text>
        </>
      ) : null}

      <line x1={left.x} y1={left.y} x2={left.x + dotRCompact} y2={left.y} stroke="#1d4ed8" strokeWidth="2" strokeDasharray="5 4" />
      <line x1={right.x} y1={right.y} x2={right.x + dotRSpread} y2={right.y} stroke="#7c3aed" strokeWidth="2" strokeDasharray="5 4" />
      <text x={left.x + dotRCompact + 8} y={left.y + 4} fontSize="12" fill="#1d4ed8" fontWeight="900">r</text>
      <text x={right.x + dotRSpread + 8} y={right.y + 4} fontSize="12" fill="#7c3aed" fontWeight="900">r</text>

      {showFormula ? (
        <>
          <foreignObject x="72" y="40" width="260" height="30">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 13, color: "#0f172a", fontWeight: 900 }}>
              <MathInline latex={"I = \\sum m r^2"} />
            </div>
          </foreignObject>
          <text x="74" y="72" fontSize="12" fill="#0f172a" fontWeight="700">Si r aumenta, I aumenta mucho (por r^2)</text>
          <foreignObject x="72" y="78" width="320" height="30">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 12, color: "#0f172a", fontWeight: 700 }}>
              Con el mismo tau: <MathInline latex={"\\alpha = \\frac{\\tau}{I}"} />
            </div>
          </foreignObject>
          <foreignObject x="520" y="58" width="280" height="40">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize: 12, color: "#0f172a", fontWeight: 700 }}>
              <MathInline latex={"\\alpha = \\frac{\\tau}{I}"} />
            </div>
          </foreignObject>
        </>
      ) : null}
    </SvgFrame>
  );
}

