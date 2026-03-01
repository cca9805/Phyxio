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

function Arrow({ x1, y1, x2, y2, color = "#93c5fd", label }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const size = 8;
  const px = -uy;
  const py = ux;
  const ax = x2 - ux * size;
  const ay = y2 - uy * size;
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3" strokeLinecap="round" />
      <polygon
        points={`${x2},${y2} ${ax + px * 4},${ay + py * 4} ${ax - px * 4},${ay - py * 4}`}
        fill={color}
      />
      {label ? <text x={x2 + px * 12} y={y2 + py * 12} fill={color} fontSize="12" fontWeight="700">{label}</text> : null}
    </g>
  );
}

function Toggle({ active, onClick, children }) {
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

export default function PlanosInclinadosGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 8) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 30) },
      { key: "mu", aliases: ["coef", "coeficiente"], default: toNum(p.mu ?? p.coef ?? p.coeficiente, 0.2) },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showN", aliases: ["mostrarN"], default: p.showN ?? true },
      { key: "showPar", aliases: ["mostrarPar"], default: p.showPar ?? true },
      { key: "showFric", aliases: ["mostrarFric"], default: p.showFric ?? true },
    ],
    [p.m, p.masa, p.g, p.gravedad, p.theta, p.angulo, p.mu, p.coef, p.coeficiente, p.showW, p.showN, p.showPar, p.showFric]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;
  const m = clamp(toNum(ep.m, 8), 0.1, 1000);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 30);
  const theta = clamp(toNum(ep.theta, 30), 0, 80);
  const thetaRad = deg2rad(theta);
  const mu = clamp(toNum(ep.mu, 0.2), 0, 1.2);
  const showW = !!ep.showW;
  const showN = !!ep.showN;
  const showPar = !!ep.showPar;
  const showFric = !!ep.showFric;

  const W = m * g;
  const N = m * g * Math.cos(thetaRad);
  const Wpar = m * g * Math.sin(thetaRad);
  const fric = mu * N;

  const sW = Math.min(70, 10 + W * 0.8);
  const sN = Math.min(70, 10 + N * 0.8);
  const sPar = Math.min(70, 10 + Wpar * 0.8);
  const sF = Math.min(70, 10 + fric * 0.8);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  // Geometria consistente con el SVG: plano y bloque siempre dentro del card.
  const x0 = 72;
  const y0 = 248;
  const planeLen = 220;
  const planeDx = planeLen * Math.cos(thetaRad);
  const planeDy = planeLen * Math.sin(thetaRad);
  const x1 = x0 + planeDx;
  const y1 = y0 - planeDy;

  // Punto de contacto y centro del bloque desplazado en la normal del plano.
  const contactS = 0.48;
  const contactX = x0 + planeDx * contactS;
  const contactY = y0 - planeDy * contactS;
  const normalUnit = { x: -Math.sin(thetaRad), y: -Math.cos(thetaRad) };
  const cx = contactX + normalUnit.x * 18;
  const cy = contactY + normalUnit.y * 18;

  // Base local:
  // tangencial subida: paralelo al plano hacia arriba,
  // tangencial bajada: componente del peso paralelo al plano.
  const tangentUp = { x: Math.cos(thetaRad), y: -Math.sin(thetaRad) };
  const tangentDown = { x: -tangentUp.x, y: -tangentUp.y };

  return (
    <SvgFrame
      title="Planos inclinados (DCL)"
      subtitle="Fuerzas sobre el bloque en ejes paralelo y normal al plano"
      badgeLabel="RESULTADO"
      badgeValue={`W|| = ${fmt(Wpar, 3)} N`}
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
              <MathInline latex={"\\sum F_{\\parallel}=mg\\sin\\theta-f"} />
              <br />
              <MathInline latex={"N=mg\\cos\\theta,\\quad f\\leq\\mu N"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>m</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(m, 2)} kg</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={1000} step={0.1} onChange={(v) => setValue("m", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>g</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 3)} m/s2</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={30} step={0.1} onChange={(v) => setValue("g", v)} /></div>
              </div>
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

              <div className="v2-toggle-row">
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setValue("showW", e.target.checked)} /><span className="v2-toggle-label">Peso</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showN} onChange={(e) => setValue("showN", e.target.checked)} /><span className="v2-toggle-label">Normal</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showPar} onChange={(e) => setValue("showPar", e.target.checked)} /><span className="v2-toggle-label">W_par</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFric} onChange={(e) => setValue("showFric", e.target.checked)} /><span className="v2-toggle-label">Rozamiento</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              W = <b>{fmt(W, 3)}</b> N
              <br />
              N = <b>{fmt(N, 3)}</b> N
              <br />
              W_par = <b>{fmt(Wpar, 3)}</b> N
              <br />
              f = <b>{fmt(fric, 3)}</b> N
            </div>
          </div>
        </div>
      }
      viewBox="0 0 420 300"
      svgHeight={360}
    >
      <line x1="24" y1="260" x2="396" y2="260" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
      <line x1={x0} y1={y0} x2={x1} y2={y1} stroke="#64748b" strokeWidth="4" />

      <g transform={`translate(${cx},${cy}) rotate(${-theta})`}>
        <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
      </g>

      {showW ? <Arrow x1={cx} y1={cy} x2={cx} y2={cy + sW} color="#f43f5e" label="W" /> : null}
      {showN ? <Arrow x1={cx} y1={cy} x2={cx + normalUnit.x * sN} y2={cy + normalUnit.y * sN} color="#22c55e" label="N" /> : null}
      {showPar ? <Arrow x1={cx} y1={cy} x2={cx + tangentDown.x * sPar} y2={cy + tangentDown.y * sPar} color="#3b82f6" label="W||" /> : null}
      {showFric ? <Arrow x1={cx} y1={cy} x2={cx + tangentUp.x * sF} y2={cy + tangentUp.y * sF} color="#f59e0b" label="f" /> : null}
    </SvgFrame>
  );
}
