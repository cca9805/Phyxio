import React, { useMemo, useCallback, useEffect, useState } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const G = 6.674e-11;
const toNum = (v, d) => {
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : d;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function Arrow({ x1, y1, x2, y2, color, label, dashed = false }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L;
  const uy = dy / L;
  const head = 15;
  const wing = 7;
  const hx = x2;
  const hy = y2;
  const lx = hx - ux * head - uy * wing;
  const ly = hy - uy * head + ux * wing;
  const rx = hx - ux * head + uy * wing;
  const ry = hy - uy * head - ux * wing;

  return (
    <g>
      <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={color} strokeWidth="4" strokeLinecap="round" strokeDasharray={dashed ? "7 6" : undefined} />
      <polygon points={`${hx},${hy} ${lx},${ly} ${rx},${ry}`} fill={color} />
      {label ? <text x={hx + 8} y={hy - 8} fill={color} fontSize="12" fontWeight="900">{label}</text> : null}
    </g>
  );
}

function buildTrail(cx, cy, rPx, phase, span = 2.4, points = 36) {
  const out = [];
  for (let i = 0; i < points; i += 1) {
    const a = phase - span + (span * i) / (points - 1);
    out.push(`${cx + rPx * Math.cos(a)},${cy + rPx * Math.sin(a)}`);
  }
  return out.join(" ");
}

export default function VelocidadOrbitalGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "M", default: toNum(params?.M, 5.97e24) },
      { key: "r", default: toNum(params?.r, 8.2e6) },
      { key: "phase", default: toNum(params?.phase, 30) },
      { key: "animSpeed", default: toNum(params?.animSpeed, 35) },
      { key: "showV", default: params?.showV ?? true },
      { key: "showVesc", default: params?.showVesc ?? true },
      { key: "showR", default: params?.showR ?? true },
      { key: "showGuides", default: params?.showGuides ?? true },
      { key: "showTrail", default: params?.showTrail ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const p = exp.effectiveParams;

  const M = Math.max(1, toNum(p.M, 5.97e24));
  const r = Math.max(1, toNum(p.r, 8.2e6));
  const phaseCalc = clamp(toNum(p.phase, 30), 0, 360);
  const animSpeed = clamp(toNum(p.animSpeed, 35), 5, 220);
  const showV = !!p.showV;
  const showVesc = !!p.showVesc;
  const showR = !!p.showR;
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
  const vOrb = Math.sqrt((G * M) / r) / 1000;
  const vEsc = Math.sqrt(2) * vOrb;

  const cx = 300;
  const cy = 190;
  const rPx = clamp(70 + (r / 1e6) * 11, 75, 185);
  const sat = { x: cx + rPx * Math.cos(phase), y: cy + rPx * Math.sin(phase) };
  const uIn = { x: (cx - sat.x) / rPx, y: (cy - sat.y) / rPx };
  const uTan = { x: -uIn.y, y: uIn.x };
  const vLen = clamp(45 + vOrb * 4, 40, 150);
  const vEscLen = clamp(60 + vEsc * 4, 55, 190);
  const trail = showTrail ? buildTrail(cx, cy, rPx, phase) : "";

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
      title={title || "Velocidad orbital (SVG)"}
      subtitle="Visualización dinámica de v_orb y umbral de escape sobre trayectoria orbital"
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
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACIONES</div>
            <div style={{ marginTop: 10, display: "grid", gap: 2 }}>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Órbita circular</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"v_{orb}=\\sqrt{\\frac{GM}{r}}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Escape</div>
                <div style={{ marginTop: 2, color: "#fbbf24" }}>
                  <MathInline latex={"v_{esc}=\\sqrt{2}\\,v_{orb}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Fórmula aplicada</div>
                <div style={{ marginTop: 2, color: "#34d399" }}>
                  <MathInline latex={`v_{orb}=${vOrb.toFixed(3)}\\,\\mathrm{km/s},\\;v_{esc}=${vEsc.toFixed(3)}\\,\\mathrm{km/s}`} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARÁMETROS</div>
            <div style={{ display: "grid", gap: 8 }}>
              {[ ["M", M], ["r", r], ["phase", phaseDeg], ["animSpeed", animSpeed] ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{k}</div>
                  <input className="form-control" style={{ width: 110 }} value={v} onChange={(e) => setValue(k, e.target.value)} />
                </div>
              ))}
            </div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showV} onChange={(e) => setValue("showV", e.target.checked)} /><span className="v2-toggle-label">v_orb</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showVesc} onChange={(e) => setValue("showVesc", e.target.checked)} /><span className="v2-toggle-label">v_escape</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showR} onChange={(e) => setValue("showR", e.target.checked)} /><span className="v2-toggle-label">radio</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showGuides} onChange={(e) => setValue("showGuides", e.target.checked)} /><span className="v2-toggle-label">guías</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} /><span className="v2-toggle-label">trayectoria</span></label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rápida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              r = <b>{fmt(r / 1e6, 3)}</b> x10^6 m
              <br />
              v_orb = <b style={{ color: "#60a5fa" }}>{fmt(vOrb, 3)}</b> km/s
              <br />
              v_escape = <b style={{ color: "#fbbf24" }}>{fmt(vEsc, 3)}</b> km/s
            </div>
          </div>
        </div>
      }
      viewBox="0 0 840 380"
      svgHeight={360}
    >
      <defs>
        <linearGradient id="bgVelOrb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="840" height="380" fill="url(#bgVelOrb)" />
      {showGuides ? <line x1="430" y1="24" x2="430" y2="356" stroke="rgba(148,163,184,0.22)" strokeWidth="2" strokeDasharray="7 8" /> : null}

      <circle cx={cx} cy={cy} r="52" fill="rgba(59,130,246,0.76)" />
      <circle cx={cx} cy={cy} r={rPx} fill="none" stroke="rgba(148,163,184,0.52)" strokeWidth="2" />
      {showTrail ? <polyline points={trail} fill="none" stroke="rgba(52,211,153,0.75)" strokeWidth="2" /> : null}
      <circle cx={sat.x} cy={sat.y} r="10" fill="#fbbf24" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />

      {showR ? <line x1={cx} y1={cy} x2={sat.x} y2={sat.y} stroke="rgba(148,163,184,0.66)" strokeWidth="2.5" strokeDasharray="6 5" /> : null}
      {showV ? <Arrow x1={sat.x} y1={sat.y} x2={sat.x + uTan.x * vLen} y2={sat.y + uTan.y * vLen} color="#60a5fa" label="v_orb" /> : null}
      {showVesc ? <Arrow x1={sat.x} y1={sat.y} x2={sat.x + uTan.x * vEscLen} y2={sat.y + uTan.y * vEscLen} color="#fbbf24" label="v_escape" dashed /> : null}

      <text x="70" y="42" fill="#e2e8f0" fontSize="13" fontWeight="900">Órbita circular ideal</text>
      <text x="70" y="64" fill="#93c5fd" fontSize="12">La velocidad orbital es tangencial; superar v_escape evita órbita cerrada.</text>
      <text x="70" y="84" fill="#34d399" fontSize="12">Fase actual: {fmt(phaseDeg, 1)}°</text>
    </SvgFrame>
  );
}
