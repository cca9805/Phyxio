import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

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
  const s = 10;
  const p1x = x2 - ux * s - uy * (s * 0.55);
  const p1y = y2 - uy * s + ux * (s * 0.55);
  const p2x = x2 - ux * s + uy * (s * 0.55);
  const p2y = y2 - uy * s - ux * (s * 0.55);

  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3.4" strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      {label ? (
        <text x={x2 + 8} y={y2 - 8} fontSize="12" fontWeight="900" fill={color}>
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function RozamientoYDisipacionGraphsDcl(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 6) },
      { key: "mu", aliases: ["coef", "coeficiente"], default: toNum(p.mu ?? p.coef ?? p.coeficiente, 0.3) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.81) },
      { key: "Fapp", aliases: ["F", "fuerza"], default: toNum(p.Fapp ?? p.F ?? p.fuerza, 18) },
      { key: "showN", default: p.showN ?? true },
      { key: "showP", default: p.showP ?? true },
      { key: "showFr", default: p.showFr ?? true },
      { key: "showFapp", default: p.showFapp ?? true },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(Math.max(0.001, toNum(ep.m, 6)), 0.1, 120);
  const mu = clamp(Math.abs(toNum(ep.mu, 0.3)), 0, 2);
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 30);
  const Fapp = clamp(Math.max(0, toNum(ep.Fapp, 18)), 0, 500);

  const showN = !!ep.showN;
  const showP = !!ep.showP;
  const showFr = !!ep.showFr;
  const showFapp = !!ep.showFapp;

  const N = m * g;
  const frMax = mu * N;
  const fr = Math.min(Fapp, frMax);
  const moving = Fapp > frMax;

  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

  const scale = 4.2;
  const pLen = clamp(24 + N / scale, 24, 165);
  const nLen = pLen;
  const frLen = clamp(24 + fr / scale, 24, 165);
  const fLen = clamp(24 + Fapp / scale, 24, 185);

  const W = 850;
  const H = 390;
  const cx = 425;
  const cy = 205;
  const bw = 130;
  const bh = 72;

  return (
    <SvgFrame
      title="Rozamiento y disipacion (DCL)"
      subtitle="Solo fuerzas reales en bloque sobre superficie horizontal"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      viewBox="0 0 850 390"
      svgHeight={390}
      controls={
        <>
          <button
            type="button"
            onClick={exp.startExperiment}
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(99,102,241,0.25)",
              color: "rgba(255,255,255,0.92)",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Experimentar
          </button>
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
        </>
      }
      aside={(
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-2">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACIONES</div>
            <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
              <MathInline latex={"f_r\\le\\mu N"} />
              <br />
              <MathInline latex={"N=mg"} />
              <br />
              <MathInline latex={"W_r=-f_r d"} />
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
                <div style={{ marginTop: 8 }}><Slider value={m} min={0.1} max={80} step={0.1} onChange={(v) => setValue("m", v)} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>mu</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(mu, 3)}</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={mu} min={0} max={2} step={0.01} onChange={(v) => setValue("mu", v)} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>g</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(g, 2)} m/s^2</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={g} min={0.1} max={20} step={0.1} onChange={(v) => setValue("g", v)} /></div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>F aplicada</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(Fapp, 2)} N</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={Fapp} min={0} max={300} step={0.5} onChange={(v) => setValue("Fapp", v)} /></div>
              </div>

              <div className="v2-toggle-row">
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showN} onChange={(e) => setValue("showN", e.target.checked)} /><span className="v2-toggle-label">Normal N</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showP} onChange={(e) => setValue("showP", e.target.checked)} /><span className="v2-toggle-label">Peso P</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFr} onChange={(e) => setValue("showFr", e.target.checked)} /><span className="v2-toggle-label">Rozamiento fr</span></label>
                <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFapp} onChange={(e) => setValue("showFapp", e.target.checked)} /><span className="v2-toggle-label">F aplicada</span></label>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              N = <b>{fmt(N, 2)}</b> N
              <br />
              fr,max = <b>{fmt(frMax, 2)}</b> N
              <br />
              fr,real = <b>{fmt(fr, 2)}</b> N
              <br />
              estado: <b>{moving ? "deslizamiento (F > fr,max)" : "reposo/umbral estatico"}</b>
            </div>
          </div>
        </div>
      )}
    >
      <rect x="0" y="0" width={W} height={H} fill="#dbeafe" />
      <rect x="0" y="0" width={W} height={H} fill="rgba(0,0,0,0.08)" />

      <line x1="65" y1="305" x2="780" y2="305" stroke="rgba(15,23,42,0.45)" strokeWidth="4" />
      <rect x={cx - bw / 2} y={cy - bh / 2} width={bw} height={bh} rx="12" fill="rgba(255,255,255,0.58)" stroke="rgba(15,23,42,0.42)" />
      <text x={cx} y={cy + 6} textAnchor="middle" fill="rgba(2,6,23,0.8)" fontSize="18">m</text>

      {showP ? <Arrow x1={cx} y1={cy + bh / 2} x2={cx} y2={cy + bh / 2 + pLen} color="rgba(220,38,38,0.95)" label="P" /> : null}
      {showN ? <Arrow x1={cx} y1={cy + bh / 2} x2={cx} y2={cy + bh / 2 - nLen} color="rgba(22,163,74,0.95)" label="N" /> : null}
      {showFr ? <Arrow x1={cx - bw / 2} y1={cy} x2={cx - bw / 2 - frLen} y2={cy} color="rgba(249,115,22,0.95)" label="fr" /> : null}
      {showFapp ? <Arrow x1={cx + bw / 2} y1={cy} x2={cx + bw / 2 + fLen} y2={cy} color="rgba(30,64,175,0.95)" label="F" /> : null}
    </SvgFrame>
  );
}
