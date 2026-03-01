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

export default function PlanosInclinadosGraphsSvg(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 30) },
      { key: "mu", aliases: ["coef", "coeficiente"], default: toNum(p.mu ?? p.coef ?? p.coeficiente, 0.2) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "showMotion", aliases: ["mostrarMovimiento"], default: p.showMotion ?? true },
      { key: "showGuides", aliases: ["mostrarGuias"], default: p.showGuides ?? true },
    ],
    [p.theta, p.angulo, p.mu, p.coef, p.coeficiente, p.g, p.gravedad, p.showMotion, p.showGuides]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const theta = clamp(toNum(ep.theta, 30), 0, 80);
  const mu = clamp(toNum(ep.mu, 0.2), 0, 1.2);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 30);
  const showMotion = !!ep.showMotion;
  const showGuides = !!ep.showGuides;
  const thetaRad = deg2rad(theta);

  const a = g * (Math.sin(thetaRad) - mu * Math.cos(thetaRad));
  const direction = a >= 0 ? 1 : -1;
  const mag = Math.min(40, 8 + Math.abs(a) * 6);
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  // Geometria acotada: evita que el plano y el bloque salgan del viewBox con theta alto.
  const x0 = 72;
  const y0 = 248;
  const planeLen = 220;
  const planeDx = planeLen * Math.cos(thetaRad);
  const planeDy = planeLen * Math.sin(thetaRad);
  const x1 = x0 + planeDx;
  const y1 = y0 - planeDy;
  const bodyS = 0.45;
  const bx = x0 + planeDx * bodyS;
  const by = y0 - planeDy * bodyS;

  return (
    <SvgFrame
      title="Planos inclinados (SVG)"
      subtitle="Efecto del angulo y del rozamiento sobre la aceleracion"
      badgeLabel="RESULTADO"
      badgeValue={`a = ${fmt(a, 3)} m/s2`}
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
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACION</div>
            <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
              <MathInline latex={"a=g(\\sin\\theta-\\mu\\cos\\theta)"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>theta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(theta, 1)} deg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={theta} min={0} max={80} step={0.1} onChange={(v) => setValue("theta", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>mu</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mu, 3)}</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={mu} min={0} max={1.2} step={0.01} onChange={(v) => setValue("mu", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>g</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 3)} m/s2</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={30} step={0.1} onChange={(v) => setValue("g", v)} /></div>
              </div>
              <div className="v2-toggle-row">
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showMotion} onChange={(e) => setValue("showMotion", e.target.checked)} /><span className="v2-toggle-label">Movimiento</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showGuides} onChange={(e) => setValue("showGuides", e.target.checked)} /><span className="v2-toggle-label">Guias</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              theta = <b>{fmt(theta, 1)}</b> deg
              <br />
              mu = <b>{fmt(mu, 3)}</b>
              <br />
              a = <b>{fmt(a, 3)}</b> m/s2
            </div>
          </div>
        </div>
      }
      viewBox="0 0 440 300"
      svgHeight={360}
    >
      <rect x="0" y="0" width="440" height="300" fill="url(#bgGradPlanosSvg)" />
      <defs>
        <linearGradient id="bgGradPlanosSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b1220" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <marker id="arrPlanosSvg" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <polygon points="0,0 8,4 0,8" fill="#60a5fa" />
        </marker>
      </defs>

      <line x1="24" y1="260" x2="416" y2="260" stroke="#334155" strokeWidth="2" />
      <line x1={x0} y1={y0} x2={x1} y2={y1} stroke="#64748b" strokeWidth="6" strokeLinecap="round" />

      {showGuides ? <line x1={x0} y1={y0} x2={x1} y2={y0} stroke="#334155" strokeDasharray="4 4" /> : null}
      {showGuides ? <text x={x0 + 10} y={y0 - 8} fill="#94a3b8" fontSize="12">theta={fmt(theta, 1)} deg</text> : null}

      <g transform={`translate(${bx},${by}) rotate(${-theta})`}>
        <rect x="-22" y="-16" width="44" height="32" rx="7" fill="#e2e8f0" stroke="#0f172a" strokeWidth="2" />
      </g>

      {showMotion ? (
        <line
          x1={bx}
          y1={by}
          x2={bx + direction * mag * Math.cos(thetaRad)}
          y2={by + direction * mag * Math.sin(thetaRad)}
          stroke="#60a5fa"
          strokeWidth="3"
          markerEnd="url(#arrPlanosSvg)"
        />
      ) : null}
      {showMotion ? <text x={bx + 10} y={by - 16} fill="#60a5fa" fontSize="12" fontWeight="700">a={fmt(a, 3)} m/s2</text> : null}
    </SvgFrame>
  );
}
