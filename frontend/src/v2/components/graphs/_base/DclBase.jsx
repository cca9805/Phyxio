// src/v2/components/graphs/_base/DclBase.jsx
import React, { useMemo } from "react";
import GraphCard from "./GraphCard";
import { polarToXY } from "./dclGeometry";

/**
 * forces: [
 *  { id, label, angleDeg, magnitude?: number, color?: "currentColor", show?: true }
 * ]
 */
export default function DclBase({
  title,
  subtitle,
  body = "point", // "point" | "block"
  forces = [],
  showAxes = true,
}) {
  const active = useMemo(
    () => (Array.isArray(forces) ? forces.filter(f => f && f.show !== false) : []),
    [forces]
  );

  const cx = 300;
  const cy = 160;

  const arrowLen = 110;
  const head = 10;

  return (
    <GraphCard title={title} subtitle={subtitle}>
      <div className="rounded-xl bg-black/5 p-3">
        <svg viewBox="0 0 600 320" className="w-full h-auto">
          {showAxes ? (
            <g opacity="0.25">
              <line x1={60} y1={cy} x2={540} y2={cy} stroke="currentColor" />
              <line x1={cx} y1={40} x2={cx} y2={280} stroke="currentColor" />
              <text x={540} y={cy - 6} fontSize="12" fill="currentColor">x</text>
              <text x={cx + 6} y={40} fontSize="12" fill="currentColor">y</text>
            </g>
          ) : null}

          {/* body */}
          {body === "block" ? (
            <rect x={cx - 26} y={cy - 26} width={52} height={52} rx={10} fill="none" stroke="currentColor" opacity="0.35" />
          ) : (
            <circle cx={cx} cy={cy} r={16} fill="none" stroke="currentColor" opacity="0.35" />
          )}

          {/* forces */}
          {active.map((f) => {
            const v = polarToXY(arrowLen, f.angleDeg);
            const x2 = cx + v.x;
            const y2 = cy - v.y; // invert Y for svg coords

            // arrow head: simple two lines
            const vh = polarToXY(head, f.angleDeg + 150);
            const wh = polarToXY(head, f.angleDeg - 150);

            const hx1 = x2 + vh.x;
            const hy1 = y2 - vh.y;
            const hx2 = x2 + wh.x;
            const hy2 = y2 - wh.y;

            return (
              <g key={f.id} opacity="0.9">
                <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />
                <line x1={x2} y1={y2} x2={hx1} y2={hy1} stroke="currentColor" strokeWidth="2" />
                <line x1={x2} y1={y2} x2={hx2} y2={hy2} stroke="currentColor" strokeWidth="2" />
                <text x={x2 + 8} y={y2 - 8} fontSize="12" fill="currentColor" opacity="0.9">
                  {f.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </GraphCard>
  );
}
