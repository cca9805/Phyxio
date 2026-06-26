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

export default function McuGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["r", "radio"], default: toNum(params?.R ?? params?.r ?? params?.radio, 5) },
      { key: "omega", aliases: ["w"], default: toNum(params?.omega ?? params?.w, 1.2) },
      { key: "theta0", aliases: ["theta_0"], default: toNum(params?.theta0 ?? params?.theta_0, 0) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 10) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 2) },
      { key: "showTrail", default: params?.showTrail ?? true },
      { key: "showVel", default: params?.showVel ?? true },
      { key: "showAc", default: params?.showAc ?? true },
      { key: "showRadius", default: params?.showRadius ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 5), 0.2, 100);
  const omega = toNum(ep.omega, 1.2);
  const theta0 = toNum(ep.theta0, 0);
  const tMax = clamp(toNum(ep.tMax, 10), 0.5, 80);
  const tObs = clamp(toNum(ep.tObs, 2), 0, tMax);
  const showTrail = !!ep.showTrail;
  const showVel = !!ep.showVel;
  const showAc = !!ep.showAc;
  const showRadius = !!ep.showRadius;

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

  const onReset = useCallback(() => player.reset(0), [player]);

  const tCurrent = player.isPlaying ? player.t : tObs;
  const theta = theta0 + omega * tCurrent;

  const cx = 360;
  const cy = 285;
  const rPx = clamp(35 + R * 16, 60, 190);

  const x = cx + rPx * Math.cos(theta);
  const y = cy + rPx * Math.sin(theta);

  const tangentNorm = Math.hypot(-Math.sin(theta), Math.cos(theta)) || 1;
  const tx = (-Math.sin(theta) / tangentNorm) * Math.sign(omega || 1);
  const ty = (Math.cos(theta) / tangentNorm) * Math.sign(omega || 1);
  const velLen = Math.min(150, 35 + Math.abs(omega * R) * 14);

  const nx = (cx - x) / (Math.hypot(cx - x, cy - y) || 1);
  const ny = (cy - y) / (Math.hypot(cx - x, cy - y) || 1);
  const acLen = Math.min(130, 30 + Math.abs(omega * omega * R) * 8);

  const orbitPath = useMemo(() => {
    const pts = [];
    const N = 180;
    const tFrom = 0;
    const tTo = tCurrent;
    for (let i = 0; i <= N; i += 1) {
      const tt = tFrom + (i / N) * (tTo - tFrom);
      const th = theta0 + omega * tt;
      pts.push(`${i === 0 ? "M" : "L"} ${cx + rPx * Math.cos(th)} ${cy + rPx * Math.sin(th)}`);
    }
    return pts.join(" ");
  }, [theta0, omega, tCurrent, cx, cy, rPx]);

  const aside = (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Parametros</div>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>R (m)</span><input className="form-control" value={R} onChange={(e) => setValue("R", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>omega</span><input className="form-control" value={omega} onChange={(e) => setValue("omega", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>theta0</span><input className="form-control" value={theta0} onChange={(e) => setValue("theta0", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_max</span><input className="form-control" value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_obs</span><input className="form-control" value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.45)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Capas</div>
        <div className="v2-toggle-row">
          <Toggle checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} label="Trayectoria" />
          <Toggle checked={showVel} onChange={(e) => setValue("showVel", e.target.checked)} label="Velocidad tangencial" />
          <Toggle checked={showAc} onChange={(e) => setValue("showAc", e.target.checked)} label="Centripeta" />
          <Toggle checked={showRadius} onChange={(e) => setValue("showRadius", e.target.checked)} label="Radio" />
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.35)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div><MathInline latex={"v=\\omega R,\\ a_c=\\omega^2R"} /></div>
          <div>t: <b>{fmt(tCurrent, 2)} s</b></div>
          <div>theta: <b>{fmt(theta, 3)} rad</b></div>
          <div>v: <b>{fmt(Math.abs(omega) * R, 3)} m/s</b></div>
          <div>ac: <b>{fmt(omega * omega * R, 3)} m/s2</b></div>
        </div>
      </div>
    </div>
  );

  return (
    <SvgFrame
      title={title || "MCU (SVG)"}
      subtitle="Movimiento circular uniforme"
      badgeLabel="ECUACION"
      badgeValue="theta=theta0+omega*t"
      controls={
        <>
          <button type="button" onClick={onPlay} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(2, 6, 243, 0.75)", color: "white", fontWeight: 900, cursor: "pointer" }}>
            {player.isPlaying ? "Pausa" : "Play"}
          </button>
          <button type="button" onClick={onReset} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>
            Reset
          </button>
        </>
      }
      aside={aside}
      svgHeight={700}
      viewBox="0 0 850 560"
    >
      <g opacity="0.30">
        <circle cx={cx} cy={cy} r={rPx} fill="none" stroke="currentColor" strokeWidth="2.2" />
        <circle cx={cx} cy={cy} r="4" fill="currentColor" />
      </g>

      {showTrail ? <path d={orbitPath} fill="none" stroke="#38bdf8" strokeWidth="2.4" opacity="0.75" /> : null}

      {showRadius ? (
        <line x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeDasharray="6 6" />
      ) : null}

      <g>
        <circle cx={x} cy={y} r="20" fill="rgba(96,165,250,0.30)" stroke="rgba(96,165,250,0.95)" strokeWidth="2.8" />
        <text x={x} y={y + 5} textAnchor="middle" fontSize="14" fill="currentColor">m</text>
      </g>

      {showVel ? (
        <Arrow x={x} y={y} dx={tx * velLen} dy={ty * velLen} label={`v=${fmt(Math.abs(omega) * R, 2)}`} labelDy={-12} />
      ) : null}

      {showAc ? (
        <Arrow x={x} y={y} dx={nx * acLen} dy={ny * acLen} label={`ac=${fmt(omega * omega * R, 2)}`} labelDy={-12} />
      ) : null}
    </SvgFrame>
  );
}

