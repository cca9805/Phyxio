import React, { useMemo, useEffect, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import { Arrow } from "@/v2/components/graphs_shared/svg2/primitives";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { useRafPlayer } from "@/v2/components/graphs_shared/sim";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function Toggle({ checked, onChange, label }) {
  return (
    <label className="v2-toggle">
      <input className="v2-toggle-input" type="checkbox" checked={checked} onChange={onChange} />
      <span className="v2-toggle-label">{label}</span>
    </label>
  );
}

export default function SistemasConservativosGraphsSvg({ title, params }) {
  const schema = useMemo(() => [
    { key: "m", default: toNum(params?.m, 1.5) },
    { key: "g", default: toNum(params?.g, 9.81) },
    { key: "h0", default: toNum(params?.h0, 8) },
    { key: "tMax", default: toNum(params?.tMax, 6) },
    { key: "tObs", default: toNum(params?.tObs ?? params?.t, 2) },
    { key: "showTrail", default: params?.showTrail ?? true },
    { key: "showK", default: params?.showK ?? true },
    { key: "showUg", default: params?.showUg ?? true },
  ], [params]);

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m = Math.max(0.001, toNum(ep.m, 1.5));
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);
  const h0 = Math.max(0.1, toNum(ep.h0, 8));
  const tMax = clamp(toNum(ep.tMax, 6), 1, 20);
  const tObs = clamp(toNum(ep.tObs, 2), 0, tMax);

  const showTrail = !!ep.showTrail;
  const showK = !!ep.showK;
  const showUg = !!ep.showUg;

  const player = useRafPlayer({ tMax, initialT: tObs, autoStop: false });
  useEffect(() => { player.reset(tObs); }, [tObs, tMax]);
  const onPlay = useCallback(() => player.toggle(), [player]);
  const onReset = useCallback(() => player.reset(0), [player]);

  const t = player.isPlaying ? player.t : tObs;
  const s = t / tMax;
  const y = h0 * (1 - s);

  const Em = m * g * h0;
  const Ug = m * g * y;
  const K = Em - Ug;
  const v = Math.sqrt(Math.max(0, (2 * K) / m));

  const setValue = (k, vNext) => { exp.startExperiment(); exp.setValue(k, vNext); };

  const baseY = 420;
  const topY = 120;
  const xStart = 130;
  const xEnd = 520;
  const xBall = xStart + s * (xEnd - xStart);
  const yBall = baseY - ((y / h0) * (baseY - topY));

  return (
    <SvgFrame
      title={title || "Sistemas conservativos (SVG)"}
      subtitle="Conversion ideal entre Ug y K"
      badgeLabel="PRINCIPIO"
      badgeValue="K + U = cte"
      controls={
        <>
          <button type="button" onClick={exp.startExperiment} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
          <button type="button" onClick={onPlay} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(2, 6, 243, 0.75)", color: "white", fontWeight: 900, cursor: "pointer" }}>{player.isPlaying ? "Pausa" : "Play"}</button>
          <button type="button" onClick={onReset} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Reset</button>
          <button type="button" onClick={exp.resetToCalculator} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
        </>
      }
      aside={
        <div style={{ display: "grid", gap: 10 }}>
          <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.55)" }}>
            <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Parametros</div>
            <div style={{ display: "grid", gap: 8 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 66 }}>m</span><input className="form-control" value={m} onChange={(e) => setValue("m", e.target.value)} /></div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 66 }}>g</span><input className="form-control" value={g} onChange={(e) => setValue("g", e.target.value)} /></div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 66 }}>h0</span><input className="form-control" value={h0} onChange={(e) => setValue("h0", e.target.value)} /></div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 66 }}>tMax</span><input className="form-control" value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 66 }}>tObs</span><input className="form-control" value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
            </div>
          </div>

          <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.45)" }}>
            <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Capas</div>
            <div className="v2-toggle-row">
              <Toggle checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} label="Trayectoria" />
              <Toggle checked={showK} onChange={(e) => setValue("showK", e.target.checked)} label="Vector K" />
              <Toggle checked={showUg} onChange={(e) => setValue("showUg", e.target.checked)} label="Vector Ug" />
            </div>
          </div>

          <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.35)" }}>
            <div style={{ fontSize: 13, lineHeight: 1.6 }}>
              <div><MathInline latex={"E_m=K+U_g=\\text{cte}"} /></div>
              <div>t: <b>{fmt(t, 2)} s</b></div>
              <div>h: <b>{fmt(y, 2)} m</b></div>
              <div>Ug: <b>{fmt(Ug, 2)} J</b></div>
              <div>K: <b>{fmt(K, 2)} J</b></div>
              <div>v: <b>{fmt(v, 2)} m/s</b></div>
            </div>
          </div>
        </div>
      }
      svgHeight={700}
      viewBox="0 0 900 560"
    >
      <line x1="80" y1={baseY} x2="560" y2={baseY} stroke="rgba(255,255,255,0.32)" strokeWidth="4" />
      <line x1={xStart} y1={topY} x2={xEnd} y2={baseY} stroke="rgba(148,163,184,0.9)" strokeWidth="7" />

      {showTrail ? <line x1={xStart} y1={topY} x2={xBall} y2={yBall} stroke="#60a5fa" strokeWidth="3" strokeDasharray="6 4" /> : null}

      <circle cx={xBall} cy={yBall} r="14" fill="rgba(52,211,153,0.35)" stroke="rgba(52,211,153,0.95)" strokeWidth="3" />

      {showK ? <Arrow x={xBall + 20} y={yBall - 8} dx={clamp(25 + K * 0.15, 20, 150)} dy={0} label={`K=${fmt(K,1)} J`} labelDy={-8} /> : null}
      {showUg ? <Arrow x={xBall - 20} y={yBall - 8} dx={0} dy={-clamp(20 + Ug * 0.1, 20, 160)} label={`Ug=${fmt(Ug,1)} J`} labelDx={10} /> : null}
    </SvgFrame>
  );
}
