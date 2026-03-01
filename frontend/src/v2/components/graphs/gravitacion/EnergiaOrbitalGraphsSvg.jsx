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

function buildTrail(cx, cy, rPx, phase, span = 2.4, points = 36) {
  const out = [];
  for (let i = 0; i < points; i += 1) {
    const a = phase - span + (span * i) / (points - 1);
    out.push(`${cx + rPx * Math.cos(a)},${cy + rPx * Math.sin(a)}`);
  }
  return out.join(" ");
}

export default function EnergiaOrbitalGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "M", default: toNum(params?.M, 5.97e24) },
      { key: "m", default: toNum(params?.m, 900) },
      { key: "r", default: toNum(params?.r, 8.4e6) },
      { key: "phase", default: toNum(params?.phase, 25) },
      { key: "animSpeed", default: toNum(params?.animSpeed, 30) },
      { key: "showU", default: params?.showU ?? true },
      { key: "showK", default: params?.showK ?? true },
      { key: "showE", default: params?.showE ?? true },
      { key: "showOrbit", default: params?.showOrbit ?? true },
      { key: "showTrail", default: params?.showTrail ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const p = exp.effectiveParams;

  const M = Math.max(1, toNum(p.M, 5.97e24));
  const m = Math.max(1, toNum(p.m, 900));
  const r = Math.max(1, toNum(p.r, 8.4e6));
  const phaseCalc = clamp(toNum(p.phase, 25), 0, 360);
  const animSpeed = clamp(toNum(p.animSpeed, 30), 5, 220);
  const showU = !!p.showU;
  const showK = !!p.showK;
  const showE = !!p.showE;
  const showOrbit = !!p.showOrbit;
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

  const U = -(G * M * m) / r;
  const K = -0.5 * U;
  const E = U + K;
  const Uabs = Math.abs(U);
  const Kabs = Math.abs(K);
  const Eabs = Math.abs(E);
  const scale = 180 / Math.max(Uabs, Kabs, Eabs, 1);

  const cx = 260;
  const cy = 190;
  const rPx = clamp(70 + (r / 1e6) * 11, 75, 180);
  const sat = { x: cx + rPx * Math.cos(phase), y: cy + rPx * Math.sin(phase) };
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
      title={title || "Energía orbital (SVG)"}
      subtitle="Energía potencial, cinética y total en órbita circular con visual dinámica"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Potencial gravitatorio</div>
                <div style={{ marginTop: 2, color: "#f97316" }}>
                  <MathInline latex={"U=-\\frac{GMm}{r}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Órbita circular</div>
                <div style={{ marginTop: 2, color: "#60a5fa" }}>
                  <MathInline latex={"K=-\\frac{U}{2},\\quad E=-\\frac{GMm}{2r}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Fórmula aplicada</div>
                <div style={{ marginTop: 2, color: "#34d399" }}>
                  <MathInline latex={`U=${(U / 1e9).toFixed(3)}\\times10^9\\,J,\\;K=${(K / 1e9).toFixed(3)}\\times10^9\\,J`} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARÁMETROS</div>
            <div style={{ display: "grid", gap: 8 }}>
              {[ ["M", M], ["m", m], ["r", r], ["phase", phaseDeg], ["animSpeed", animSpeed] ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{k}</div>
                  <input className="form-control" style={{ width: 110 }} value={v} onChange={(e) => setValue(k, e.target.value)} />
                </div>
              ))}
            </div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showU} onChange={(e) => setValue("showU", e.target.checked)} /><span className="v2-toggle-label">U</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showK} onChange={(e) => setValue("showK", e.target.checked)} /><span className="v2-toggle-label">K</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showE} onChange={(e) => setValue("showE", e.target.checked)} /><span className="v2-toggle-label">E</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showOrbit} onChange={(e) => setValue("showOrbit", e.target.checked)} /><span className="v2-toggle-label">órbita</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} /><span className="v2-toggle-label">trayectoria</span></label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rápida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              U = <b style={{ color: "#f97316" }}>{fmt(U / 1e9, 3)}</b> x10^9 J
              <br />
              K = <b style={{ color: "#60a5fa" }}>{fmt(K / 1e9, 3)}</b> x10^9 J
              <br />
              E = <b style={{ color: "#34d399" }}>{fmt(E / 1e9, 3)}</b> x10^9 J
            </div>
          </div>
        </div>
      }
      viewBox="0 0 840 380"
      svgHeight={360}
    >
      <defs>
        <linearGradient id="bgEnergiaOrb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="840" height="380" fill="url(#bgEnergiaOrb)" />
      <line x1="430" y1="24" x2="430" y2="356" stroke="rgba(148,163,184,0.22)" strokeWidth="2" strokeDasharray="7 8" />

      <circle cx={cx} cy={cy} r="52" fill="rgba(59,130,246,0.78)" />
      {showOrbit ? <circle cx={cx} cy={cy} r={rPx} fill="none" stroke="rgba(148,163,184,0.50)" strokeWidth="2" /> : null}
      {showTrail ? <polyline points={trail} fill="none" stroke="rgba(52,211,153,0.72)" strokeWidth="2" /> : null}
      <circle cx={sat.x} cy={sat.y} r="9" fill="#fbbf24" />

      <text x="70" y="42" fill="#e2e8f0" fontSize="13" fontWeight="900">Órbita ligada: K positiva, U negativa, E negativa</text>
      <text x="70" y="62" fill="#86efac" fontSize="12">Fase actual: {fmt(phaseDeg, 1)}°</text>

      <line x1="520" y1="320" x2="780" y2="320" stroke="rgba(148,163,184,0.40)" strokeWidth="2" />
      {showU ? <rect x="560" y={320 - Uabs * scale} width="42" height={Uabs * scale} fill="#f97316" opacity="0.95" /> : null}
      {showK ? <rect x="632" y={320 - Kabs * scale} width="42" height={Kabs * scale} fill="#60a5fa" opacity="0.95" /> : null}
      {showE ? <rect x="704" y={320 - Eabs * scale} width="42" height={Eabs * scale} fill="#34d399" opacity="0.95" /> : null}
      {showU ? <text x="581" y="338" fill="#f97316" fontSize="12" fontWeight="900" textAnchor="middle">|U|</text> : null}
      {showK ? <text x="653" y="338" fill="#60a5fa" fontSize="12" fontWeight="900" textAnchor="middle">K</text> : null}
      {showE ? <text x="725" y="338" fill="#34d399" fontSize="12" fontWeight="900" textAnchor="middle">|E|</text> : null}
    </SvgFrame>
  );
}
