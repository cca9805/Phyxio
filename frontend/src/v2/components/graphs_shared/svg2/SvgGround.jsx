import React from "react";

export default function SvgGround({ x=80, y=540, width=500 }) {
  return (
    <g opacity="0.6">
      <rect x={x} y={y} width={width} height="4" rx="2" fill="#fc7563ff" />
      <text x={x+width+60} y={y + 4} fontSize="10" fill="#fc7563ff" textAnchor="end">
        suelo (y=0)
      </text>
    </g>
  );
}
