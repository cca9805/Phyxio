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

export default function MruaGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "x0", aliases: ["x_0"], default: toNum(params?.x0 ?? params?.x_0, 0) },
      { key: "v0", aliases: ["v_0"], default: toNum(params?.v0 ?? params?.v_0, 2) },
      { key: "a", aliases: ["aceleracion"], default: toNum(params?.a, 1) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 8) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 2) },
      { key: "showMarks", default: params?.showMarks ?? true },
      { key: "showVel", default: params?.showVel ?? true },
      { key: "showAcc", default: params?.showAcc ?? true },
      { key: "showDx", default: params?.showDx ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const x0 = toNum(ep.x0, 0);
  const v0 = toNum(ep.v0, 2);
  const a = toNum(ep.a, 1);
  const tMax = clamp(toNum(ep.tMax, 8), 1, 20);
  const tObs = clamp(toNum(ep.tObs, 2), 0, tMax);
  const showMarks = !!ep.showMarks;
  const showVel = !!ep.showVel;
  const showAcc = !!ep.showAcc;
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
  const xCurrent = x0 + v0 * tCurrent + 0.5 * a * tCurrent * tCurrent;
  const vCurrent = v0 + a * tCurrent;

  const trackX1 = 90;
  const trackX2 = 760;
  const y = 315;

  const range = useMemo(() => {
    let minX = Math.min(0, x0);
    let maxX = Math.max(0, x0);
    const N = 240;
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tMax;
      const x = x0 + v0 * t + 0.5 * a * t * t;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
    }
    if (Math.abs(maxX - minX) < 1e-6) {
      minX -= 1;
      maxX += 1;
    }
    return { minX, maxX };
  }, [x0, v0, a, tMax]);

  const mapX = (xVal) => {
    const u = (xVal - range.minX) / (range.maxX - range.minX);
    return trackX1 + u * (trackX2 - trackX1);
  };

  const currentSvgX = mapX(xCurrent);
  const startSvgX = mapX(x0);
  const arrowPad = 14;
  const velRawLen = Math.sign(vCurrent || 1) * (45 + Math.min(140, Math.abs(vCurrent) * 10));
  const velMaxRight = trackX2 - currentSvgX - arrowPad;
  const velMaxLeft = currentSvgX - trackX1 - arrowPad;
  const velDx = velRawLen >= 0 ? Math.min(velRawLen, velMaxRight) : -Math.min(Math.abs(velRawLen), velMaxLeft);

  const marks = useMemo(() => {
    const out = [];
    const n = 6;
    for (let i = 0; i <= n; i += 1) {
      const t = (i / n) * tMax;
      const x = x0 + v0 * t + 0.5 * a * t * t;
      out.push({ t, xSvg: mapX(x) });
    }
    return out;
  }, [tMax, x0, v0, a, range]);

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
            <span style={{ width: 70 }}>v0 (m/s)</span>
            <input className="form-control" value={v0} onChange={(e) => setValue("v0", e.target.value)} />
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 70 }}>a (m/s2)</span>
            <input className="form-control" value={a} onChange={(e) => setValue("a", e.target.value)} />
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
          <Toggle checked={showAcc} onChange={(e) => setValue("showAcc", e.target.checked)} label="Vector aceleracion" />
          <Toggle checked={showDx} onChange={(e) => setValue("showDx", e.target.checked)} label="Desplazamiento" />
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.35)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div><MathInline latex={"x(t)=x_0+v_0t+\\tfrac{1}{2}at^2"} /></div>
          <div>t: <b>{fmt(tCurrent, 2)} s</b></div>
          <div>x(t): <b>{fmt(xCurrent, 3)} m</b></div>
          <div>v(t): <b>{fmt(vCurrent, 3)} m/s</b></div>
          <div>a: <b>{fmt(a, 3)} m/s2</b></div>
        </div>
      </div>
    </div>
  );

  return (
    <SvgFrame
      title={title || "MRUA (SVG)"}
      subtitle="Movimiento rectilineo uniformemente acelerado"
      badgeLabel="ECUACION"
      badgeValue="x(t)=x0+v0*t+0.5*a*t^2"
      controls={
        <>
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
          <line x1={m.xSvg} y1={y - 12} x2={m.xSvg} y2={y + 12} stroke="currentColor" strokeWidth="1.7" />
          <text x={m.xSvg} y={y + 44} textAnchor="middle" fontSize="12" fill="currentColor">t={fmt(m.t, 1)}s</text>
        </g>
      )) : null}

      <g>
        <rect x={currentSvgX - 28} y={y - 28} width="56" height="56" rx="12" fill="rgba(96,165,250,0.28)" stroke="rgba(96,165,250,0.95)" strokeWidth="2.8" />
        <text x={currentSvgX} y={y + 6} textAnchor="middle" fontSize="16" fill="currentColor">m</text>
      </g>

      {showVel ? (
        <Arrow
          x={currentSvgX}
          y={y - 55}
          dx={velDx}
          dy={0}
          label={`v=${fmt(vCurrent, 2)} m/s`}
          labelDy={-12}
        />
      ) : null}

      {showAcc ? (
        <Arrow
          x={currentSvgX}
          y={y - 95}
          dx={Math.sign(a || 1) * (35 + Math.min(90, Math.abs(a) * 14))}
          dy={0}
          label={`a=${fmt(a, 2)} m/s2`}
          labelDy={-12}
        />
      ) : null}

      {showDx ? (
        <g opacity="0.65">
          <line x1={startSvgX} y1={y + 78} x2={currentSvgX} y2={y + 78} stroke="currentColor" strokeWidth="2.2" strokeDasharray="6 6" />
          <text x={(startSvgX + currentSvgX) / 2} y={y + 98} textAnchor="middle" fontSize="13" fill="currentColor">
            dx = {fmt(xCurrent - x0, 2)} m
          </text>
        </g>
      ) : null}
    </SvgFrame>
  );
}

