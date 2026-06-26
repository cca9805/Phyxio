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

export default function TiroHorizontalGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "v0", aliases: ["vx0", "v_0"], default: toNum(params?.v0 ?? params?.vx0 ?? params?.v_0, 12) },
      { key: "h", aliases: ["y0", "altura"], default: toNum(params?.h ?? params?.y0 ?? params?.altura, 20) },
      { key: "g", aliases: ["gravedad"], default: toNum(params?.g ?? params?.gravedad, 9.81) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 4) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 1.5) },
      { key: "showTrail", default: params?.showTrail ?? true },
      { key: "showVel", default: params?.showVel ?? true },
      { key: "showComp", default: params?.showComp ?? true },
      { key: "showMarks", default: params?.showMarks ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const v0 = toNum(ep.v0, 12);
  const h = Math.max(0, toNum(ep.h, 20));
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);
  const tFlight = Math.sqrt((2 * h) / g);
  const tMax = clamp(toNum(ep.tMax, Math.max(4, tFlight * 1.2)), 0.5, 30);
  const tObs = clamp(toNum(ep.tObs, Math.min(1.5, tMax)), 0, tMax);

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
  const xCurrent = v0 * tCurrent;
  const yCurrent = Math.max(0, h - 0.5 * g * tCurrent * tCurrent);
  const vyCurrent = -g * tCurrent;
  const xImpact = v0 * tFlight;

  const worldX1 = 110;
  const worldX2 = 790;
  const worldYTop = 90;
  const worldYBottom = 470;

  const xMax = Math.max(10, xImpact * 1.2);
  const yMax = Math.max(8, h * 1.25);

  const mapX = (x) => worldX1 + (x / xMax) * (worldX2 - worldX1);
  const mapY = (y) => worldYBottom - (y / yMax) * (worldYBottom - worldYTop);

  const projX = mapX(xCurrent);
  const projY = mapY(yCurrent);

  const trailD = useMemo(() => {
    const N = 120;
    const pts = [];
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tCurrent;
      const x = v0 * t;
      const y = Math.max(0, h - 0.5 * g * t * t);
      pts.push(`${i === 0 ? "M" : "L"} ${mapX(x)} ${mapY(y)}`);
    }
    return pts.join(" ");
  }, [tCurrent, v0, h, g, xMax, yMax]);

  const vxLen = clamp(38 + Math.abs(v0) * 6, 30, 140);
  const vyLen = clamp(Math.abs(vyCurrent) * 6, 0, 140);

  const marks = useMemo(() => {
    const out = [];
    const n = 5;
    for (let i = 1; i <= n; i += 1) {
      const t = (i / n) * tFlight;
      out.push({ t, x: mapX(v0 * t), y: mapY(Math.max(0, h - 0.5 * g * t * t)) });
    }
    return out;
  }, [tFlight, v0, h, g, xMax, yMax]);

  const aside = (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Parametros</div>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>v0 (m/s)</span><input className="form-control" value={v0} onChange={(e) => setValue("v0", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>h (m)</span><input className="form-control" value={h} onChange={(e) => setValue("h", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>g (m/s2)</span><input className="form-control" value={g} onChange={(e) => setValue("g", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_max (s)</span><input className="form-control" value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_obs (s)</span><input className="form-control" value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.45)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Capas</div>
        <div className="v2-toggle-row">
          <Toggle checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} label="Trayectoria" />
          <Toggle checked={showVel} onChange={(e) => setValue("showVel", e.target.checked)} label="Velocidad" />
          <Toggle checked={showComp} onChange={(e) => setValue("showComp", e.target.checked)} label="Componentes" />
          <Toggle checked={showMarks} onChange={(e) => setValue("showMarks", e.target.checked)} label="Marcas de tiempo" />
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.35)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div><MathInline latex={"t_{vuelo}=\\sqrt{\\frac{2h}{g}},\\;R=v_0t_{vuelo}"} /></div>
          <div>t: <b>{fmt(tCurrent, 2)} s</b></div>
          <div>x: <b>{fmt(xCurrent, 3)} m</b></div>
          <div>y: <b>{fmt(yCurrent, 3)} m</b></div>
          <div>v_y: <b>{fmt(vyCurrent, 3)} m/s</b></div>
          <div>alcance R: <b>{fmt(xImpact, 3)} m</b></div>
        </div>
      </div>
    </div>
  );

  return (
    <SvgFrame
      title={title || "Tiro horizontal (SVG)"}
      subtitle="MRU en x + caida libre en y"
      badgeLabel="FORMULA"
      badgeValue="y=h-0.5*g*t^2"
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
      <line x1={worldX1 - 30} y1={worldYBottom} x2={worldX2 + 20} y2={worldYBottom} stroke="rgba(255,255,255,0.30)" strokeWidth="4" />
      <line x1={worldX1} y1={mapY(h)} x2={worldX1} y2={worldYBottom} stroke="rgba(255,255,255,0.24)" strokeWidth="4" />
      <rect x={worldX1 - 34} y={mapY(h) - 18} width="68" height="18" rx="5" fill="rgba(148,163,184,0.35)" stroke="rgba(148,163,184,0.75)" />

      {showTrail ? <path d={trailD} fill="none" stroke="#60a5fa" strokeWidth="2.8" opacity="0.9" /> : null}

      {showMarks ? marks.map((m, i) => (
        <g key={`mk-${i}`} opacity="0.8">
          <circle cx={m.x} cy={m.y} r="3.5" fill="#f59e0b" />
          <text x={m.x + 8} y={m.y - 8} fontSize="12" fill="currentColor">t={fmt(m.t, 1)}s</text>
        </g>
      )) : null}

      <circle cx={projX} cy={projY} r="12" fill="rgba(52,211,153,0.35)" stroke="rgba(52,211,153,0.95)" strokeWidth="2.8" />

      {showVel ? <Arrow x={projX} y={projY - 26} dx={vxLen} dy={0} label={`v_x=${fmt(v0, 2)}`} labelDy={-10} /> : null}
      {showComp ? <Arrow x={projX} y={projY - 26} dx={0} dy={Math.min(140, vyLen)} label={`v_y=${fmt(vyCurrent, 2)}`} labelDx={10} /> : null}

      <g opacity="0.75">
        <line x1={mapX(xImpact)} y1={worldYBottom} x2={mapX(xImpact)} y2={worldYBottom - 10} stroke="currentColor" strokeWidth="2" />
        <text x={mapX(xImpact)} y={worldYBottom + 24} textAnchor="middle" fontSize="12" fill="currentColor">R={fmt(xImpact, 2)} m</text>
      </g>
    </SvgFrame>
  );
}
