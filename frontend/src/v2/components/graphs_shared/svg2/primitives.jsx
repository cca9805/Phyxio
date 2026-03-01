import React from "react";

export function AxisY({ x = 120, yTop = 40, yBottom = 300, label = "y" }) {
  return (
    <g opacity="0.75">
      <line x1={x} y1={yTop} x2={x} y2={yBottom} stroke="currentColor" strokeWidth="2" />
      <polygon points={`${x},${yTop - 12} ${x - 6},${yTop + 2} ${x + 6},${yTop + 2}`} fill="currentColor" />
      <text x={x + 12} y={yTop + 6} fontSize="14" fill="currentColor">{label}</text>
    </g>
  );
}

export function Ground({ y = 300, x1 = 80, x2 = 600, label = "y=0" }) {
  return (
    <g opacity="0.35">
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="currentColor" strokeWidth="2" />
      <text x={x2 + 6} y={y + 4} fontSize="12" fill="currentColor">{label}</text>
    </g>
  );
}

export function Body({ x = 360, y = 120, r = 18, label = "m" }) {
  return (
    <g opacity="0.75">
      <circle cx={x} cy={y} r={r} fill="none" stroke="currentColor" strokeWidth="2" />
      <text x={x + r + 10} y={y + 5} fontSize="13" fill="currentColor" opacity="0.85">
        {label}
      </text>
    </g>
  );
}

export function DashLine({ x1, y1, x2, y2, label, lx = 0, ly = 0 }) {
  return (
    <g opacity="0.45">
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
      {label ? (
        <text x={x1 + 8 + lx} y={y1 - 8 + ly} fontSize="12" fill="currentColor">
          {label}
        </text>
      ) : null}
    </g>
  );
}

// Flecha vectorial con estilo único
export function Arrow({ x, y, dx, dy, label, labelDx = 10, labelDy = -8 }) {
  const x2 = x + dx;
  const y2 = y + dy;

  // cabeza simple
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;

  const head = 10;
  const px = -uy; // perpendicular
  const py = ux;

  const hx1 = x2 - ux * head + px * (head * 0.5);
  const hy1 = y2 - uy * head + py * (head * 0.5);
  const hx2 = x2 - ux * head - px * (head * 0.5);
  const hy2 = y2 - uy * head - py * (head * 0.5);

  return (
    <g opacity="0.95">
      <line x1={x} y1={y} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" />
      <polygon points={`${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`} fill="currentColor" />
      {label ? (
        <text x={x2 + labelDx} y={y2 + labelDy} fontSize="12" fill="currentColor">
          {label}
        </text>
      ) : null}
    </g>
  );
}

export function TrajectoryPath({ d, label, lx = 0, ly = 0 }) {
  return (
    <g opacity="0.7">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 8" />
      {label ? (
        <text x={lx} y={ly} fontSize="12" fill="currentColor" opacity="0.9">
          {label}
        </text>
      ) : null}
    </g>
  );
}
