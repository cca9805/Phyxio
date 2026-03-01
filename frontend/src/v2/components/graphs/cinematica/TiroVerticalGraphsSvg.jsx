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

export default function TiroVerticalGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "y0", aliases: ["h", "altura"], default: toNum(params?.y0 ?? params?.h ?? params?.altura, 0) },
      { key: "v0", aliases: ["vy0", "v_0"], default: toNum(params?.v0 ?? params?.vy0 ?? params?.v_0, 20) },
      { key: "g", aliases: ["gravedad"], default: toNum(params?.g ?? params?.gravedad, 9.81) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 6) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 1.5) },
      { key: "showTrail", default: params?.showTrail ?? true },
      { key: "showVel", default: params?.showVel ?? true },
      { key: "showAcc", default: params?.showAcc ?? true },
      { key: "showRefs", default: params?.showRefs ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const y0 = Math.max(0, toNum(ep.y0, 0));
  const v0 = toNum(ep.v0, 20);
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);
  const tFlight = (v0 + Math.sqrt(v0 * v0 + 2 * g * y0)) / g;
  const tPeak = Math.max(0, v0 / g);

  const tMax = clamp(toNum(ep.tMax, Math.max(6, tFlight * 1.15)), 0.5, 40);
  const tObs = clamp(toNum(ep.tObs, Math.min(1.5, tMax)), 0, tMax);

  const showTrail = !!ep.showTrail;
  const showVel = !!ep.showVel;
  const showAcc = !!ep.showAcc;
  const showRefs = !!ep.showRefs;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  const player = useRafPlayer({ tMax, initialT: tObs, autoStop: true });

  useEffect(() => {
    player.reset(tObs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tObs, tMax]);

  const onPlay = useCallback(() => {
    if (!player.isPlaying && Math.abs(player.t - tMax) < 1e-6) {
      player.reset(0);
      player.play();
      return;
    }
    player.toggle();
  }, [player, tMax]);

  const onReset = useCallback(() => {
    player.reset(0);
  }, [player]);

  const tCurrent = Math.min(player.isPlaying ? player.t : tObs, tFlight);
  const yCurrent = Math.max(0, y0 + v0 * tCurrent - 0.5 * g * tCurrent * tCurrent);
  const vyCurrent = v0 - g * tCurrent;

  const yMax = Math.max(6, y0 + (v0 * v0) / (2 * g) + 3);

  const baseY = 470;
  const topY = 90;
  const xLane = 420;
  const mapY = (y) => baseY - (y / yMax) * (baseY - topY);

  const projectileY = mapY(yCurrent);

  const trailD = useMemo(() => {
    const N = 120;
    const pts = [];
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tCurrent;
      const y = Math.max(0, y0 + v0 * t - 0.5 * g * t * t);
      pts.push(`${i === 0 ? "M" : "L"} ${xLane} ${mapY(y)}`);
    }
    return pts.join(" ");
  }, [tCurrent, y0, v0, g, yMax]);

  const aside = (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Parametros</div>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>y0 (m)</span><input className="form-control" value={y0} onChange={(e) => setValue("y0", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>v0 (m/s)</span><input className="form-control" value={v0} onChange={(e) => setValue("v0", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>g (m/s2)</span><input className="form-control" value={g} onChange={(e) => setValue("g", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_max (s)</span><input className="form-control" value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_obs (s)</span><input className="form-control" value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.45)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Capas</div>
        <div className="v2-toggle-row">
          <Toggle checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} label="Trayectoria" />
          <Toggle checked={showVel} onChange={(e) => setValue("showVel", e.target.checked)} label="Vector velocidad" />
          <Toggle checked={showAcc} onChange={(e) => setValue("showAcc", e.target.checked)} label="Aceleracion" />
          <Toggle checked={showRefs} onChange={(e) => setValue("showRefs", e.target.checked)} label="Referencias" />
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.35)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div><MathInline latex={"t_{vuelo}=\\frac{v_0+\\sqrt{v_0^2+2gy_0}}{g}"} /></div>
          <div>t: <b>{fmt(tCurrent, 2)} s</b></div>
          <div>y: <b>{fmt(yCurrent, 3)} m</b></div>
          <div>v_y: <b>{fmt(vyCurrent, 3)} m/s</b></div>
          <div>t_pico: <b>{fmt(tPeak, 3)} s</b></div>
          <div>t_vuelo: <b>{fmt(tFlight, 3)} s</b></div>
        </div>
      </div>
    </div>
  );

  return (
    <SvgFrame
      title={title || "Tiro vertical (SVG)"}
      subtitle="Subida y bajada bajo gravedad"
      badgeLabel="FORMULA"
      badgeValue="y=y0+v0*t-0.5*g*t^2"
      controls={
        <>
          <button type="button" onClick={exp.startExperiment} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
          <button type="button" onClick={onPlay} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(2, 6, 243, 0.75)", color: "white", fontWeight: 900, cursor: "pointer" }}>{player.isPlaying ? "Pausa" : "Play"}</button>
          <button type="button" onClick={onReset} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Reset</button>
          <button type="button" onClick={exp.resetToCalculator} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
        </>
      }
      aside={aside}
      svgHeight={720}
      viewBox="0 0 900 560"
    >
      <line x1={180} y1={baseY} x2={730} y2={baseY} stroke="rgba(255,255,255,0.32)" strokeWidth="4" />
      <line x1={xLane} y1={topY - 20} x2={xLane} y2={baseY} stroke="rgba(255,255,255,0.20)" strokeWidth="2" strokeDasharray="6 6" />

      {showTrail ? <path d={trailD} fill="none" stroke="#60a5fa" strokeWidth="2.8" opacity="0.88" /> : null}

      <circle cx={xLane} cy={projectileY} r="12" fill="rgba(52,211,153,0.35)" stroke="rgba(52,211,153,0.95)" strokeWidth="2.8" />

      {showVel ? <Arrow x={xLane + 24} y={projectileY} dx={0} dy={-Math.sign(vyCurrent || 1) * Math.min(130, 24 + Math.abs(vyCurrent) * 7)} label={`v=${fmt(vyCurrent, 2)}`} labelDx={12} /> : null}
      {showAcc ? <Arrow x={xLane - 24} y={projectileY - 8} dx={0} dy={Math.min(120, 26 + g * 4)} label={`g=${fmt(g, 2)}`} labelDx={12} /> : null}

      {showRefs ? (
        <g opacity="0.8">
          <line x1={xLane - 80} y1={mapY(y0)} x2={xLane + 80} y2={mapY(y0)} stroke="rgba(244,114,182,0.9)" strokeDasharray="6 5" />
          <text x={xLane + 90} y={mapY(y0) + 4} fontSize="12" fill="currentColor">y0</text>
          <line x1={xLane - 80} y1={mapY(Math.max(0, y0 + (v0 * v0) / (2 * g)))} x2={xLane + 80} y2={mapY(Math.max(0, y0 + (v0 * v0) / (2 * g)))} stroke="rgba(167,139,250,0.9)" strokeDasharray="6 5" />
          <text x={xLane + 90} y={mapY(Math.max(0, y0 + (v0 * v0) / (2 * g))) + 4} fontSize="12" fill="currentColor">y_max</text>
        </g>
      ) : null}
    </SvgFrame>
  );
}
