import React, { useMemo, useEffect, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import { Arrow } from "@/v2/components/graphs_shared/svg2/primitives";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { useRafPlayer } from "@/v2/components/graphs_shared/sim";
import { resolveMruParams } from "./mruParamResolver";

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

export default function MruGraphsSvg({ title, params }) {
  const resolved = useMemo(() => resolveMruParams(params || {}), [params]);

  const schema = useMemo(
    () => [
      { key: "x0", aliases: ["x_0"], default: resolved.x0 },
      { key: "v", aliases: ["velocidad"], default: resolved.v },
      { key: "tMax", aliases: ["tmax"], default: resolved.tMax },
      { key: "tObs", aliases: ["t"], default: resolved.tObs },
      { key: "showMarks", default: params?.showMarks ?? true },
      { key: "showVel", default: params?.showVel ?? true },
      { key: "showDx", default: params?.showDx ?? true },
    ],
    [params, resolved]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const x0 = toNum(ep.x0, 0);
  const v = toNum(ep.v, 2);
  const tMax = clamp(toNum(ep.tMax, 8), 1, 20);
  const tObs = clamp(toNum(ep.tObs, 3), 0, tMax);
  const showMarks = !!ep.showMarks;
  const showVel = !!ep.showVel;
  const showDx = !!ep.showDx;

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

  const tCurrent = player.isPlaying ? player.t : tObs;

  const trackX1 = 90;
  const trackX2 = 760;
  const y = 315;
  const xScale = (trackX2 - trackX1) / Math.max(0.001, tMax);

  const currentX = trackX1 + tCurrent * xScale;
  const startX = trackX1;
  const arrowPad = 14;
  const velRawLen = Math.sign(v || 1) * (50 + Math.min(110, Math.abs(v) * 12));
  const velMaxRight = trackX2 - currentX - arrowPad;
  const velMaxLeft = currentX - trackX1 - arrowPad;
  const velDx = velRawLen >= 0 ? Math.min(velRawLen, velMaxRight) : -Math.min(Math.abs(velRawLen), velMaxLeft);

  const marks = useMemo(() => {
    const out = [];
    const n = 6;
    for (let i = 0; i <= n; i += 1) {
      const t = (i / n) * tMax;
      out.push({ t, x: trackX1 + t * xScale });
    }
    return out;
  }, [tMax, xScale]);

  const aside = (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Parametros</div>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 70 }}>x0 (m)</span>
            <input className="form-control" value={x0} onChange={(e) => setValue("x0", e.target.value)} />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 70 }}>v (m/s)</span>
            <input className="form-control" value={v} onChange={(e) => setValue("v", e.target.value)} />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 70 }}>t_max (s)</span>
            <input className="form-control" value={tMax} onChange={(e) => setValue("tMax", e.target.value)} />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 70 }}>t_obs (s)</span>
            <input className="form-control" value={tObs} onChange={(e) => setValue("tObs", e.target.value)} />
          </div>
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.45)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Capas</div>
        <div className="v2-toggle-row">
          <Toggle checked={showMarks} onChange={(e) => setValue("showMarks", e.target.checked)} label="Marcas temporales" />
          <Toggle checked={showVel} onChange={(e) => setValue("showVel", e.target.checked)} label="Vector velocidad" />
          <Toggle checked={showDx} onChange={(e) => setValue("showDx", e.target.checked)} label="Desplazamiento" />
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.35)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div><MathInline latex={"x(t)=x_0+vt"} /></div>
          <div>t: <b>{fmt(tCurrent, 2)} s</b></div>
          <div>x(t): <b>{fmt(x0 + v * tCurrent, 3)} m</b></div>
          <div>dx: <b>{fmt(v * tCurrent, 3)} m</b></div>
          <div>a: <b>0 m/s2</b></div>
        </div>
      </div>
    </div>
  );

  return (
    <SvgFrame
      title={title || "MRU (SVG)"}
      subtitle="Movimiento rectilineo uniforme"
      badgeLabel="ECUACION"
      badgeValue="x(t)=x0+v*t"
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
            onClick={onPlay}
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(2, 6, 243, 0.75)",
              color: "white",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            {player.isPlaying ? "Pausa" : "Play"}
          </button>

          <button
            type="button"
            onClick={onReset}
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.92)",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Reset
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
      aside={aside}
      svgHeight={700}
      viewBox="0 0 850 560"
    >
      <g opacity="0.28">
        <line x1={trackX1} y1={y} x2={trackX2} y2={y} stroke="currentColor" strokeWidth="3" />
        <polygon points={`${trackX2 + 10},${y} ${trackX2 - 4},${y - 7} ${trackX2 - 4},${y + 7}`} fill="currentColor" />
        <text x={trackX2 + 18} y={y + 4} fontSize="14" fill="currentColor">x</text>
      </g>

      {showMarks ? marks.map((m, i) => (
        <g key={`m-${i}`} opacity="0.55">
          <line x1={m.x} y1={y - 12} x2={m.x} y2={y + 12} stroke="currentColor" strokeWidth="1.7" />
          <text x={m.x} y={y + 44} textAnchor="middle" fontSize="12" fill="currentColor">t={fmt(m.t, 1)}s</text>
        </g>
      )) : null}

      <g>
        <rect x={currentX - 28} y={y - 28} width="56" height="56" rx="12" fill="rgba(96,165,250,0.28)" stroke="rgba(96,165,250,0.95)" strokeWidth="2.8" />
        <text x={currentX} y={y + 6} textAnchor="middle" fontSize="16" fill="currentColor">m</text>
      </g>

      {showVel ? (
        <Arrow
          x={currentX}
          y={y - 55}
          dx={velDx}
          dy={0}
          label={`v=${fmt(v, 2)} m/s`}
          labelDy={-12}
        />
      ) : null}

      {showDx ? (
        <g opacity="0.65">
          <line x1={startX} y1={y + 78} x2={currentX} y2={y + 78} stroke="currentColor" strokeWidth="2.2" strokeDasharray="6 6" />
          <text x={(startX + currentX) / 2} y={y + 98} textAnchor="middle" fontSize="13" fill="currentColor">
            dx = {fmt(v * tCurrent, 2)} m
          </text>
        </g>
      ) : null}
    </SvgFrame>
  );
}

