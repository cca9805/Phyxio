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

export default function TiroParabolicoGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "v0", aliases: ["v_0"], default: toNum(params?.v0 ?? params?.v_0, 25) },
      { key: "theta", aliases: ["angulo", "angle"], default: toNum(params?.theta ?? params?.angulo ?? params?.angle, 40) },
      { key: "y0", aliases: ["h", "altura"], default: toNum(params?.y0 ?? params?.h ?? params?.altura, 0) },
      { key: "g", aliases: ["gravedad"], default: toNum(params?.g ?? params?.gravedad, 9.81) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 6) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 1.6) },
      { key: "showTrail", default: params?.showTrail ?? true },
      { key: "showVel", default: params?.showVel ?? true },
      { key: "showComp", default: params?.showComp ?? true },
      { key: "showMarks", default: params?.showMarks ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const v0 = Math.max(0, toNum(ep.v0, 25));
  const thetaDeg = clamp(toNum(ep.theta, 40), -85, 85);
  const y0 = Math.max(0, toNum(ep.y0, 0));
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);

  const th = (thetaDeg * Math.PI) / 180;
  const vx0 = v0 * Math.cos(th);
  const vy0 = v0 * Math.sin(th);

  const tFlight = (vy0 + Math.sqrt(vy0 * vy0 + 2 * g * y0)) / g;
  const tMax = clamp(toNum(ep.tMax, Math.max(6, tFlight * 1.15)), 0.5, 40);
  const tObs = clamp(toNum(ep.tObs, Math.min(1.6, tMax)), 0, tMax);

  const showTrail = !!ep.showTrail;
  const showVel = !!ep.showVel;
  const showComp = !!ep.showComp;
  const showMarks = !!ep.showMarks;

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
  const xCurrent = vx0 * tCurrent;
  const yCurrent = Math.max(0, y0 + vy0 * tCurrent - 0.5 * g * tCurrent * tCurrent);
  const vxCurrent = vx0;
  const vyCurrent = vy0 - g * tCurrent;
  const xRange = vx0 * tFlight;

  const worldX1 = 110;
  const worldX2 = 790;
  const worldYTop = 90;
  const worldYBottom = 470;

  const xMax = Math.max(12, xRange * 1.2);
  const yPeak = y0 + (vy0 > 0 ? (vy0 * vy0) / (2 * g) : 0);
  const yMax = Math.max(8, yPeak * 1.2 + 2);

  const mapX = (x) => worldX1 + (x / xMax) * (worldX2 - worldX1);
  const mapY = (y) => worldYBottom - (y / yMax) * (worldYBottom - worldYTop);

  const projX = mapX(xCurrent);
  const projY = mapY(yCurrent);

  const trailD = useMemo(() => {
    const N = 160;
    const pts = [];
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tCurrent;
      const x = vx0 * t;
      const y = Math.max(0, y0 + vy0 * t - 0.5 * g * t * t);
      pts.push(`${i === 0 ? "M" : "L"} ${mapX(x)} ${mapY(y)}`);
    }
    return pts.join(" ");
  }, [tCurrent, vx0, y0, vy0, g, xMax, yMax]);

  const marks = useMemo(() => {
    const out = [];
    const n = 6;
    for (let i = 1; i <= n; i += 1) {
      const t = (i / n) * tFlight;
      const x = vx0 * t;
      const y = Math.max(0, y0 + vy0 * t - 0.5 * g * t * t);
      out.push({ t, x: mapX(x), y: mapY(y) });
    }
    return out;
  }, [tFlight, vx0, y0, vy0, g, xMax, yMax]);

  const aside = (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Parametros</div>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>v0</span><input className="form-control" value={v0} onChange={(e) => setValue("v0", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>theta</span><input className="form-control" value={thetaDeg} onChange={(e) => setValue("theta", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>y0</span><input className="form-control" value={y0} onChange={(e) => setValue("y0", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>g</span><input className="form-control" value={g} onChange={(e) => setValue("g", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_max</span><input className="form-control" value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_obs</span><input className="form-control" value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.45)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Capas</div>
        <div className="v2-toggle-row">
          <Toggle checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} label="Trayectoria" />
          <Toggle checked={showVel} onChange={(e) => setValue("showVel", e.target.checked)} label="Velocidad" />
          <Toggle checked={showComp} onChange={(e) => setValue("showComp", e.target.checked)} label="v_x y v_y" />
          <Toggle checked={showMarks} onChange={(e) => setValue("showMarks", e.target.checked)} label="Marcas" />
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.35)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div><MathInline latex={"R=\\frac{v_0^2\\sin(2\\theta)}{g}\\;(y_0=0)"} /></div>
          <div>t: <b>{fmt(tCurrent, 2)} s</b></div>
          <div>x: <b>{fmt(xCurrent, 3)} m</b></div>
          <div>y: <b>{fmt(yCurrent, 3)} m</b></div>
          <div>v_x: <b>{fmt(vxCurrent, 3)} m/s</b></div>
          <div>v_y: <b>{fmt(vyCurrent, 3)} m/s</b></div>
        </div>
      </div>
    </div>
  );

  return (
    <SvgFrame
      title={title || "Tiro parabolico (SVG)"}
      subtitle="Composicion de MRU (x) y MRUA (y)"
      badgeLabel="FORMULA"
      badgeValue="x=v0*cos(theta)*t"
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
      <line x1={worldX1 - 20} y1={worldYBottom} x2={worldX2 + 20} y2={worldYBottom} stroke="rgba(255,255,255,0.30)" strokeWidth="4" />
      <line x1={worldX1} y1={mapY(y0)} x2={worldX1} y2={worldYBottom} stroke="rgba(255,255,255,0.24)" strokeWidth="4" />
      <rect x={worldX1 - 28} y={mapY(y0) - 16} width="56" height="16" rx="5" fill="rgba(148,163,184,0.35)" stroke="rgba(148,163,184,0.75)" />

      {showTrail ? <path d={trailD} fill="none" stroke="#60a5fa" strokeWidth="2.8" opacity="0.9" /> : null}

      {showMarks ? marks.map((m, i) => (
        <g key={`m-${i}`} opacity="0.8">
          <circle cx={m.x} cy={m.y} r="3.2" fill="#f59e0b" />
          <text x={m.x + 7} y={m.y - 8} fontSize="12" fill="currentColor">t={fmt(m.t, 1)}</text>
        </g>
      )) : null}

      <circle cx={projX} cy={projY} r="12" fill="rgba(52,211,153,0.35)" stroke="rgba(52,211,153,0.95)" strokeWidth="2.8" />

      {showVel ? (
        <Arrow
          x={projX}
          y={projY - 26}
          dx={Math.sign(vxCurrent || 1) * Math.min(140, 30 + Math.abs(vxCurrent) * 6)}
          dy={-Math.sign(vyCurrent || 1) * Math.min(140, 20 + Math.abs(vyCurrent) * 5)}
          label={`v=${fmt(Math.hypot(vxCurrent, vyCurrent), 2)}`}
          labelDy={-12}
        />
      ) : null}

      {showComp ? <Arrow x={projX} y={projY + 8} dx={Math.sign(vxCurrent || 1) * Math.min(120, 24 + Math.abs(vxCurrent) * 6)} dy={0} label={`v_x=${fmt(vxCurrent, 2)}`} labelDy={-10} /> : null}
      {showComp ? <Arrow x={projX - 12} y={projY} dx={0} dy={-Math.sign(vyCurrent || 1) * Math.min(120, 18 + Math.abs(vyCurrent) * 5)} label={`v_y=${fmt(vyCurrent, 2)}`} labelDx={10} /> : null}

      <g opacity="0.75">
        <line x1={mapX(xRange)} y1={worldYBottom} x2={mapX(xRange)} y2={worldYBottom - 10} stroke="currentColor" strokeWidth="2" />
        <text x={mapX(xRange)} y={worldYBottom + 24} textAnchor="middle" fontSize="12" fill="currentColor">R={fmt(xRange, 2)} m</text>
      </g>
    </SvgFrame>
  );
}
