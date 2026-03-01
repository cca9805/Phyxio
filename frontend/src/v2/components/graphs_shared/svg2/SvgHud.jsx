import React from "react";

export default function SvgHud({ x = 70, y = 150, t, g, pos, vel }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect width="120" height="125" rx="18" fill="#007396ff" opacity="0.60" />
      <text x="20" y="28" fill="#b894a0ff" fontSize="10">Datos instantáneos</text>
      <text x="20" y="54" fill="white" fontSize="10" className="mono">y = {Number.isFinite(pos) ? pos.toFixed(2) : "--"} m</text>
      <text x="20" y="74" fill="white" fontSize="10" className="mono">v = {Number.isFinite(vel) ? vel.toFixed(2) : "--"} m/s</text>
      <text x="20" y="94" fill="white" fontSize="10" className="mono">t = {Number.isFinite(t) ? t.toFixed(2) : "--"} s</text>
      <text x="20" y="114" fill="white" fontSize="10" className="mono">g = {Number.isFinite(g) ? g.toFixed(2) : "--"} m/s²</text>
    </g>
  );
}
