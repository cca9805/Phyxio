import React, { useMemo, useCallback, useEffect, useState } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, d) => {
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : d;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function polarPoint(cx, cy, a, b, t) {
  return { x: cx + a * Math.cos(t), y: cy + b * Math.sin(t) };
}

function buildTrail(cx, cy, a, b, phase, span = 2.8, points = 44) {
  const out = [];
  for (let i = 0; i < points; i += 1) {
    const t = phase - span + (span * i) / (points - 1);
    const p = polarPoint(cx, cy, a, b, t);
    out.push(`${p.x},${p.y}`);
  }
  return out.join(" ");
}

export default function LeyesDeKeplerGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "a", default: toNum(params?.a, 150) },
      { key: "b", default: toNum(params?.b, 100) },
      { key: "phase", default: toNum(params?.phase, 35) },
      { key: "sweepDeg", default: toNum(params?.sweepDeg, 22) },
      { key: "animSpeed", default: toNum(params?.animSpeed, 30) },
      { key: "showRadius", default: params?.showRadius ?? true },
      { key: "showArea", default: params?.showArea ?? true },
      { key: "showGuides", default: params?.showGuides ?? true },
      { key: "showTrail", default: params?.showTrail ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const p = exp.effectiveParams;
  const a = clamp(toNum(p.a, 150), 90, 190);
  const b = clamp(toNum(p.b, 100), 50, 160);
  const phaseCalc = clamp(toNum(p.phase, 35), 0, 360);
  const sweepDeg = clamp(toNum(p.sweepDeg, 22), 5, 120);
  const animSpeed = clamp(toNum(p.animSpeed, 30), 5, 220);
  const showRadius = !!p.showRadius;
  const showArea = !!p.showArea;
  const showGuides = !!p.showGuides;
  const showTrail = !!p.showTrail;

  const [isPlaying, setIsPlaying] = useState(false);
  const [phaseAnim, setPhaseAnim] = useState(null);

  useEffect(() => {
    if (exp.mode === "follow") {
      setIsPlaying(false);
      setPhaseAnim(null);
    }
  }, [exp.mode]);

  useEffect(() => {
    if (!isPlaying) return undefined;
    let raf = 0;
    let prev = null;
    const tick = (ts) => {
      if (prev == null) prev = ts;
      const dt = (ts - prev) / 1000;
      prev = ts;
      setPhaseAnim((curr) => {
        const base = Number.isFinite(curr) ? curr : phaseCalc;
        let next = base + animSpeed * dt;
        while (next > 360) next -= 360;
        while (next < 0) next += 360;
        return next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPlaying, animSpeed, phaseCalc]);

  const phaseDeg = Number.isFinite(phaseAnim) ? phaseAnim : phaseCalc;
  const phase = (phaseDeg * Math.PI) / 180;
  const sweep = (sweepDeg * Math.PI) / 180;
  const cx = 270;
  const cy = 190;
  const c = Math.sqrt(Math.max(0, a * a - b * b));
  const focus = { x: cx - c, y: cy };

  const p0 = polarPoint(cx, cy, a, b, phase - sweep);
  const p1 = polarPoint(cx, cy, a, b, phase);
  const p2 = polarPoint(cx, cy, a, b, phase + sweep);

  const areaPath = `M ${focus.x} ${focus.y} L ${p0.x} ${p0.y} A ${a} ${b} 0 0 1 ${p2.x} ${p2.y} Z`;
  const trail = showTrail ? buildTrail(cx, cy, a, b, phase) : "";

  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  const togglePlay = useCallback(() => {
    exp.startExperiment();
    setIsPlaying((v) => !v);
  }, [exp]);

  const resetAnim = useCallback(() => {
    setIsPlaying(false);
    setPhaseAnim(null);
  }, []);

  const goFollow = useCallback(() => {
    resetAnim();
    exp.resetToCalculator();
  }, [exp, resetAnim]);

  return (
    <SvgFrame
      title={title || "Leyes de Kepler (SVG)"}
      subtitle="Elipse con foco solar, barrido areal y movimiento orbital animado"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
        <>
          <button type="button" onClick={togglePlay} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(16,185,129,0.22)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button type="button" onClick={resetAnim} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(245,158,11,0.18)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Reset</button>
          <button type="button" onClick={goFollow} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>IDEA CLAVE</div>
            <div style={{ marginTop: 10, display: "grid", gap: 2 }}>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Primera ley</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"\\text{Órbita elíptica con el Sol en un foco}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Segunda ley</div>
                <div style={{ marginTop: 2, color: "#34d399" }}>
                  <MathInline latex={"\\Delta A/\\Delta t\\approx\\text{constante}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Fórmula aplicada</div>
                <div style={{ marginTop: 2, color: "#fbbf24" }}>
                  <MathInline latex={`a=${a.toFixed(1)},\\;b=${b.toFixed(1)},\\;\\phi=${phaseDeg.toFixed(1)}^\\circ`} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARÁMETROS</div>
            <div style={{ display: "grid", gap: 8 }}>
              {[ ["a", a], ["b", b], ["phase", phaseDeg], ["sweepDeg", sweepDeg], ["animSpeed", animSpeed] ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{k}</div>
                  <input className="form-control" style={{ width: 110 }} value={v} onChange={(e) => setValue(k, e.target.value)} />
                </div>
              ))}
            </div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showRadius} onChange={(e) => setValue("showRadius", e.target.checked)} /><span className="v2-toggle-label">radios</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showArea} onChange={(e) => setValue("showArea", e.target.checked)} /><span className="v2-toggle-label">sector</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showGuides} onChange={(e) => setValue("showGuides", e.target.checked)} /><span className="v2-toggle-label">guías</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} /><span className="v2-toggle-label">trayectoria</span></label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rápida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              a = <b>{fmt(a, 1)}</b>, b = <b>{fmt(b, 1)}</b>
              <br />
              foco = (<b>{fmt(focus.x, 1)}</b>, <b>{fmt(focus.y, 1)}</b>)
              <br />
              fase = <b>{fmt(phaseDeg, 1)}</b>°
            </div>
          </div>
        </div>
      }
      viewBox="0 0 840 380"
      svgHeight={360}
    >
      <defs>
        <linearGradient id="bgKeplerSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="840" height="380" fill="url(#bgKeplerSvg)" />
      <line x1="430" y1="24" x2="430" y2="356" stroke="rgba(148,163,184,0.22)" strokeWidth="2" strokeDasharray="7 8" />

      {showGuides ? (
        <>
          <line x1={cx - a - 20} y1={cy} x2={cx + a + 20} y2={cy} stroke="rgba(148,163,184,0.35)" strokeWidth="1.5" />
          <line x1={cx} y1={cy - b - 20} x2={cx} y2={cy + b + 20} stroke="rgba(148,163,184,0.22)" strokeWidth="1.5" />
        </>
      ) : null}

      <ellipse cx={cx} cy={cy} rx={a} ry={b} fill="none" stroke="rgba(148,163,184,0.65)" strokeWidth="2.5" />
      <circle cx={focus.x} cy={focus.y} r="11" fill="#fbbf24" />
      <text x={focus.x + 12} y={focus.y - 12} fill="#fbbf24" fontSize="12" fontWeight="900">Sol</text>

      {showArea ? <path d={areaPath} fill="rgba(52,211,153,0.28)" stroke="rgba(52,211,153,0.85)" strokeWidth="1.8" /> : null}
      {showTrail ? <polyline points={trail} fill="none" stroke="rgba(34,211,238,0.65)" strokeWidth="2" /> : null}

      <circle cx={p1.x} cy={p1.y} r="8" fill="#60a5fa" />
      {showRadius ? (
        <>
          <line x1={focus.x} y1={focus.y} x2={p0.x} y2={p0.y} stroke="#93c5fd" strokeWidth="2.2" />
          <line x1={focus.x} y1={focus.y} x2={p1.x} y2={p1.y} stroke="#60a5fa" strokeWidth="2.8" />
          <line x1={focus.x} y1={focus.y} x2={p2.x} y2={p2.y} stroke="#93c5fd" strokeWidth="2.2" />
        </>
      ) : null}

      <text x="70" y="42" fill="#e2e8f0" fontSize="13" fontWeight="900">1ª ley: elipse con foco solar</text>
      <text x="70" y="62" fill="#86efac" fontSize="12">2ª ley: áreas iguales en tiempos iguales</text>
      <text x="70" y="82" fill="#fbbf24" fontSize="12">Fase actual: {fmt(phaseDeg, 1)}°</text>
    </SvgFrame>
  );
}
