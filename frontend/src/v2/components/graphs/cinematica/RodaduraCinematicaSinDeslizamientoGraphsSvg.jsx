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

export default function RodaduraCinematicaSinDeslizamientoGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["r", "radio"], default: toNum(params?.R ?? params?.r ?? params?.radio, 0.35) },
      { key: "omega", aliases: ["w"], default: toNum(params?.omega ?? params?.w, 6) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 8) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 2) },
      { key: "showTrail", default: params?.showTrail ?? true },
      { key: "showVel", default: params?.showVel ?? true },
      { key: "showContact", default: params?.showContact ?? true },
      { key: "showRadius", default: params?.showRadius ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 0.35), 0.05, 2.5);
  const omega = toNum(ep.omega, 6);
  const tMax = clamp(toNum(ep.tMax, 8), 0.5, 30);
  const tObs = clamp(toNum(ep.tObs, 2), 0, tMax);

  const showTrail = !!ep.showTrail;
  const showVel = !!ep.showVel;
  const showContact = !!ep.showContact;
  const showRadius = !!ep.showRadius;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  const player = useRafPlayer({ tMax, initialT: tObs, autoStop: false });

  useEffect(() => {
    player.reset(tObs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tObs, tMax]);

  const onPlay = useCallback(() => {
    player.toggle();
  }, [player]);

  const onReset = useCallback(() => player.reset(0), [player]);

  const tCurrent = player.isPlaying ? player.t : tObs;

  const groundY = 360;
  const rPx = clamp(45 + R * 95, 52, 140);
  const cx0 = 180;
  const travelScale = 36;
  const xCm = cx0 + omega * R * tCurrent * travelScale;
  const xClamped = clamp(xCm, 140, 730);
  const yCm = groundY - rPx;

  const thetaSpin = omega * tCurrent;
  const rimX = xClamped + rPx * Math.cos(thetaSpin + Math.PI / 2);
  const rimY = yCm + rPx * Math.sin(thetaSpin + Math.PI / 2);

  const vCm = omega * R;
  const vCmPx = Math.sign(vCm || 1) * Math.min(160, 35 + Math.abs(vCm) * 22);

  const trail = useMemo(() => {
    const pts = [];
    const N = 160;
    for (let i = 0; i <= N; i += 1) {
      const tt = (i / N) * tCurrent;
      const xx = clamp(cx0 + omega * R * tt * travelScale, 140, 730);
      pts.push(`${i === 0 ? "M" : "L"} ${xx} ${groundY - rPx}`);
    }
    return pts.join(" ");
  }, [omega, R, tCurrent, rPx]);

  const aside = (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Parametros</div>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>R (m)</span><input className="form-control" value={R} onChange={(e) => setValue("R", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>omega</span><input className="form-control" value={omega} onChange={(e) => setValue("omega", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_max</span><input className="form-control" value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_obs</span><input className="form-control" value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.45)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Capas</div>
        <div className="v2-toggle-row">
          <Toggle checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} label="Trayectoria CM" />
          <Toggle checked={showVel} onChange={(e) => setValue("showVel", e.target.checked)} label="Vector v_cm" />
          <Toggle checked={showContact} onChange={(e) => setValue("showContact", e.target.checked)} label="Punto contacto" />
          <Toggle checked={showRadius} onChange={(e) => setValue("showRadius", e.target.checked)} label="Radio" />
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.35)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div><MathInline latex={"v_{cm}=\\omega R,\\ x=R\\theta"} /></div>
          <div>t: <b>{fmt(tCurrent, 2)} s</b></div>
          <div>v_cm: <b>{fmt(vCm, 3)} m/s</b></div>
          <div>omega: <b>{fmt(omega, 3)} rad/s</b></div>
          <div>Contacto ideal: <b>v=0</b></div>
        </div>
      </div>
    </div>
  );

  return (
    <SvgFrame
      title={title || "Rodadura sin deslizamiento (SVG)"}
      subtitle="Rueda en rodadura pura"
      badgeLabel="CONDICION"
      badgeValue="v_cm = omega*R"
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
      <line x1="70" y1={groundY} x2="790" y2={groundY} stroke="rgba(255,255,255,0.35)" strokeWidth="3" />

      {showTrail ? <path d={trail} fill="none" stroke="#38bdf8" strokeWidth="2.4" opacity="0.75" /> : null}

      <g>
        <circle cx={xClamped} cy={yCm} r={rPx} fill="rgba(96,165,250,0.28)" stroke="rgba(96,165,250,0.95)" strokeWidth="2.8" />
        <line x1={xClamped} y1={yCm} x2={rimX} y2={rimY} stroke="rgba(255,255,255,0.9)" strokeWidth="2.2" />
        <circle cx={xClamped} cy={yCm} r="4" fill="currentColor" />
      </g>

      {showRadius ? <line x1={xClamped} y1={yCm} x2={xClamped} y2={groundY} stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeDasharray="6 6" /> : null}

      {showVel ? <Arrow x={xClamped} y={yCm - rPx - 18} dx={vCmPx} dy={0} label={`v_cm=${fmt(vCm, 2)}`} labelDy={-12} /> : null}

      {showContact ? (
        <g>
          <circle cx={xClamped} cy={groundY} r="5" fill="#f97316" />
          <text x={xClamped + 10} y={groundY + 4} fontSize="12" fill="currentColor">punto de contacto</text>
        </g>
      ) : null}
    </SvgFrame>
  );
}

