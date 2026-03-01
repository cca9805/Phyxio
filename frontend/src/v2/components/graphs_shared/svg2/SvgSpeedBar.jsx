import React from "react";

export default function SvgSpeedBar({
  x = 650,
  y = 70,
  speed = 0,
  vRef = 45,
  heightPx = 220,
  label = "VELOCIDAD",
}) {
  const s = Math.max(0, Number.isFinite(speed) ? speed : 0);
  const ref = Math.max(1e-6, Number.isFinite(vRef) ? vRef : 45);
  const fillH = Math.min(heightPx, (s / ref) * heightPx);

  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width="30" height="250" rx= "12" fill="#1e293b" opacity="0.50" />
      <text x="15" y="-15" textAnchor="middle" fill="#fb923c" fontSize="10">{label}</text>

      <rect x="10" y="17" width="10" height={fillH} rx="5" fill="#fb923c" opacity="0.80" />

      <text x="35" y="130" fill="#fb923c" fontSize="12" fontWeight="bold" className="mono">
        v = {s.toFixed(1)} m/s
      </text>
    </g>
  );
}
