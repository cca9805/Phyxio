import React from "react";

export default function SvgTimeline({
  x = 80,
  y = 360,
  width = 500,
  t = 0,
  tMax = 1,
}) {
  const maxT = Math.max(1e-6, Number.isFinite(tMax) ? tMax : 1);
  const tt = Math.max(0, Math.min(maxT, Number.isFinite(t) ? t : 0));
  const cx = (tt / maxT) * width;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <line x1="0" y1="0" x2={width} y2="0" stroke="#334155" strokeWidth="4" />
      <circle cx={cx} cy="0" r="4" fill="#f75555ff" />
      <text x={cx} y="-8" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">
        {tt.toFixed(2)}s
      </text>
    </g>
  );
}
