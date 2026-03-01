// src/v2/components/graphs/_base/CoordBase.jsx
import React, { useMemo } from "react";
import GraphCard from "./GraphCard";

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function niceDomain(values) {
  if (!values.length) return { min: 0, max: 1 };
  let min = Math.min(...values);
  let max = Math.max(...values);
  if (min === max) {
    const d = Math.abs(min) || 1;
    min -= d;
    max += d;
  }
  const pad = (max - min) * 0.1;
  return { min: min - pad, max: max + pad };
}

export default function CoordBase({
  title,
  subtitle,
  // series: [{ id, label, points: [{x,y}], show?: true }]
  series = [],
  xLabel = "x",
  yLabel = "y",
  width = 520,
  height = 280,
  params,
}) {
  const activeSeries = useMemo(
    () => (Array.isArray(series) ? series.filter(s => s && s.points?.length) : []),
    [series]
  );

  const { xMin, xMax, yMin, yMax } = useMemo(() => {
    const xs = [];
    const ys = [];
    for (const s of activeSeries) {
      for (const p of s.points) {
        xs.push(Number(p.x));
        ys.push(Number(p.y));
      }
    }
    const xd = niceDomain(xs);
    const yd = niceDomain(ys);
    return { xMin: xd.min, xMax: xd.max, yMin: yd.min, yMax: yd.max };
  }, [activeSeries]);

  const padL = 44;
  const padR = 16;
  const padT = 14;
  const padB = 34;

  const plotW = width - padL - padR;
  const plotH = height - padT - padB;

  const sx = (x) => padL + ((x - xMin) / (xMax - xMin)) * plotW;
  const sy = (y) => padT + (1 - (y - yMin) / (yMax - yMin)) * plotH;

  const axes = {
    x0: sx(0),
    y0: sy(0),
  };

  const ticks = 5;
  const xTicks = Array.from({ length: ticks + 1 }, (_, i) => xMin + (i / ticks) * (xMax - xMin));
  const yTicks = Array.from({ length: ticks + 1 }, (_, i) => yMin + (i / ticks) * (yMax - yMin));

  const paths = useMemo(() => {
    return activeSeries.map((s) => {
      const d = s.points
        .map((p, i) => `${i === 0 ? "M" : "L"} ${sx(p.x).toFixed(2)} ${sy(p.y).toFixed(2)}`)
        .join(" ");
      return { id: s.id, label: s.label, d };
    });
  }, [activeSeries, xMin, xMax, yMin, yMax]);

  return (
    <GraphCard title={title} subtitle={subtitle} footer={params ? "" : ""}>
      {activeSeries.length === 0 ? (
        <div className="text-sm opacity-70">Sin datos para graficar.</div>
      ) : (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
          {/* grid + ticks */}
          {xTicks.map((t, i) => {
            const x = sx(t);
            return (
              <g key={`xt-${i}`} opacity="0.2">
                <line x1={x} y1={padT} x2={x} y2={padT + plotH} stroke="currentColor" />
                <text x={x} y={padT + plotH + 16} fontSize="10" textAnchor="middle" fill="currentColor">
                  {Number.isFinite(t) ? t.toFixed(2) : ""}
                </text>
              </g>
            );
          })}
          {yTicks.map((t, i) => {
            const y = sy(t);
            return (
              <g key={`yt-${i}`} opacity="0.2">
                <line x1={padL} y1={y} x2={padL + plotW} y2={y} stroke="currentColor" />
                <text x={padL - 6} y={y + 3} fontSize="10" textAnchor="end" fill="currentColor">
                  {Number.isFinite(t) ? t.toFixed(2) : ""}
                </text>
              </g>
            );
          })}

          {/* axes */}
          <g opacity="0.5">
            <line x1={padL} y1={axes.y0} x2={padL + plotW} y2={axes.y0} stroke="currentColor" />
            <line x1={axes.x0} y1={padT} x2={axes.x0} y2={padT + plotH} stroke="currentColor" />
          </g>

          {/* labels */}
          <text x={padL + plotW} y={padT + plotH + 28} fontSize="11" textAnchor="end" fill="currentColor" opacity="0.8">
            {xLabel}
          </text>
          <text x={padL} y={padT - 2} fontSize="11" textAnchor="start" fill="currentColor" opacity="0.8">
            {yLabel}
          </text>

          {/* series paths */}
          {paths.map((p) => (
            <path key={p.id} d={p.d} fill="none" stroke="currentColor" strokeWidth="2" />
          ))}
        </svg>
      )}
    </GraphCard>
  );
}
