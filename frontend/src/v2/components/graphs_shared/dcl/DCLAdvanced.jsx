import React, { useMemo } from "react";
import { sumForces, sumMoments, toNum, clamp } from "./dclMath";

function Input({ value, onChange, disabled, placeholder }) {
  return (
    <input
      className="form-control"
      type="text"
      inputMode="decimal"
      disabled={disabled}
      value={value ?? ""}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      pattern="[0-9.,\\-+eE]*"
    />
  );
}

function Toggle({ checked, onChange, disabled }) {
  return (
    <input
      type="checkbox"
      checked={!!checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
    />
  );
}

function fmt(n, d = 4) {
  if (!Number.isFinite(n)) return "—";
  return Number(n).toFixed(d);
}

export default function DCLAdvanced({
  scene,
  onSceneChange,
  disabled = false,
  showReference = true,
}) {
  const forces = Array.isArray(scene?.forces) ? scene.forces : [];
  const body = scene?.body ?? { w: 2, h: 1 };

  const result = useMemo(() => sumForces(forces), [forces]);
  const Mz = useMemo(() => sumMoments(forces, { x: 0, y: 0 }), [forces]);

  const ref = scene?.reference && showReference
    ? { Rx: toNum(scene.reference.Rx, NaN), Ry: toNum(scene.reference.Ry, NaN) }
    : null;

  // SVG setup
  const W = 920;
  const H = 360;
  const cx = W / 2;
  const cy = H / 2;

  // mundo → px
  const w = Math.max(0.2, toNum(body.w, 2));
  const h = Math.max(0.2, toNum(body.h, 1));
  const worldMax = Math.max(w, h, 2);

  const scaleWorld = 110 / worldMax;

  const X = (x) => cx + x * scaleWorld;
  const Y = (y) => cy - y * scaleWorld;

  // fuerzas → px (vector)
  const maxAbsForce = Math.max(
    1,
    Math.abs(result.Rx),
    Math.abs(result.Ry),
    Math.abs(result.R),
    ref ? Math.abs(ref.Rx || 0) : 0,
    ref ? Math.abs(ref.Ry || 0) : 0
  );
  const scaleForce = 90 / maxAbsForce;

  function arrowHead(x1, y1, x2, y2, size = 12) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const L = Math.max(1e-9, Math.hypot(dx, dy));
    const ux = dx / L;
    const uy = dy / L;
    const px = -uy;
    const py = ux;
    const tip = `${x2},${y2}`;
    const left = `${x2 - ux * size + px * (size * 0.6)},${y2 - uy * size + py * (size * 0.6)}`;
    const right = `${x2 - ux * size - px * (size * 0.6)},${y2 - uy * size - py * (size * 0.6)}`;
    return `${tip} ${left} ${right}`;
  }

  const vectors = forces
    .map((f) => {
      if (!f?.active) return null;
      const F = Math.max(0, toNum(f.F, 0));
      const th = (toNum(f.thetaDeg, 0) * Math.PI) / 180;
      const Fx = F * Math.cos(th);
      const Fy = F * Math.sin(th);
      const x = toNum(f.x, 0);
      const y = toNum(f.y, 0);
      return { id: f.id, label: f.label, Fx, Fy, x, y };
    })
    .filter(Boolean);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* Controles */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Fuerzas (avanzado)</div>

        <div className="muted" style={{ marginTop: 6 }}>
          Además de <b>F</b> y <b>θ</b>, define el punto de aplicación (x,y). Útil para conectar con momentos (ΣM).
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 10 }}>
          <div className="v2-card">
            <div className="v2-card-title">Ancho cuerpo (w)</div>
            <Input
              disabled={disabled}
              value={body.w}
              onChange={(v) => onSceneChange?.({ ...scene, body: { ...body, w: v } })}
              placeholder="Ej: 2"
            />
          </div>
          <div className="v2-card">
            <div className="v2-card-title">Alto cuerpo (h)</div>
            <Input
              disabled={disabled}
              value={body.h}
              onChange={(v) => onSceneChange?.({ ...scene, body: { ...body, h: v } })}
              placeholder="Ej: 1"
            />
          </div>
        </div>

        <div style={{ overflowX: "auto", marginTop: 10 }}>
          <table className="table" style={{ minWidth: 860 }}>
            <thead>
              <tr>
                <th>Activa</th>
                <th>Etiqueta</th>
                <th>F (N)</th>
                <th>θ (°)</th>
                <th>x</th>
                <th>y</th>
              </tr>
            </thead>
            <tbody>
              {forces.map((f, i) => (
                <tr key={f.id}>
                  <td>
                    <Toggle
                      checked={!!f.active}
                      disabled={disabled}
                      onChange={(v) => {
                        const next = forces.slice();
                        next[i] = { ...f, active: v };
                        onSceneChange?.({ ...scene, forces: next });
                      }}
                    />
                  </td>
                  <td style={{ width: 120 }}>
                    <Input
                      disabled={disabled}
                      value={f.label}
                      onChange={(v) => {
                        const next = forces.slice();
                        next[i] = { ...f, label: v };
                        onSceneChange?.({ ...scene, forces: next });
                      }}
                      placeholder={`F${i + 1}`}
                    />
                  </td>
                  <td style={{ width: 140 }}>
                    <Input
                      disabled={disabled}
                      value={f.F}
                      onChange={(v) => {
                        const next = forces.slice();
                        next[i] = { ...f, F: v };
                        onSceneChange?.({ ...scene, forces: next });
                      }}
                      placeholder="Ej: 10"
                    />
                  </td>
                  <td style={{ width: 140 }}>
                    <Input
                      disabled={disabled}
                      value={f.thetaDeg}
                      onChange={(v) => {
                        const next = forces.slice();
                        next[i] = { ...f, thetaDeg: v };
                        onSceneChange?.({ ...scene, forces: next });
                      }}
                      placeholder="Ej: 30"
                    />
                  </td>
                  <td style={{ width: 120 }}>
                    <Input
                      disabled={disabled}
                      value={f.x}
                      onChange={(v) => {
                        const next = forces.slice();
                        next[i] = { ...f, x: v };
                        onSceneChange?.({ ...scene, forces: next });
                      }}
                      placeholder="Ej: 0.5"
                    />
                  </td>
                  <td style={{ width: 120 }}>
                    <Input
                      disabled={disabled}
                      value={f.y}
                      onChange={(v) => {
                        const next = forces.slice();
                        next[i] = { ...f, y: v };
                        onSceneChange?.({ ...scene, forces: next });
                      }}
                      placeholder="Ej: 0"
                    />
                  </td>
                </tr>
              ))}
              {forces.length === 0 ? (
                <tr>
                  <td colSpan={6} className="muted">
                    No hay fuerzas.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <div className="muted" style={{ marginTop: 10, display: "grid", gap: 4 }}>
          <div>Rx = ΣFx = <b>{fmt(result.Rx, 6)} N</b></div>
          <div>Ry = ΣFy = <b>{fmt(result.Ry, 6)} N</b></div>
          <div>R = √(Rx²+Ry²) = <b>{fmt(result.R, 6)} N</b></div>
          <div>Mz (sobre el origen) = <b>{fmt(Mz, 6)} N·m</b> <span className="muted">(solo referencia)</span></div>
        </div>
      </div>

      {/* Diagrama */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Diagrama (cuerpo + puntos de aplicación)</div>

        <div style={{ width: "100%", marginTop: 10, display: "flex", justifyContent: "center" }}>
          <div style={{ width: "min(980px, 100%)" }}>
            <svg width="100%" height="360" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
              {/* Ejes */}
              <line x1={40} y1={cy} x2={W - 40} y2={cy} stroke="currentColor" opacity="0.25" />
              <line x1={cx} y1={40} x2={cx} y2={H - 40} stroke="currentColor" opacity="0.25" />

              {/* Cuerpo (rectángulo centrado en origen) */}
              <rect
                x={X(-w / 2)}
                y={Y(h / 2)}
                width={w * scaleWorld}
                height={h * scaleWorld}
                rx="14"
                ry="14"
                fill="currentColor"
                opacity="0.08"
                stroke="currentColor"
                strokeOpacity="0.25"
              />
              <text x={X(0)} y={Y(h / 2) - 10} textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.6">
                Cuerpo
              </text>

              {/* Fuerzas desde su punto */}
              {vectors.map((v, idx) => {
                const x0 = X(clamp(v.x, -w / 2, w / 2));
                const y0 = Y(clamp(v.y, -h / 2, h / 2));
                const x2 = x0 + v.Fx * scaleForce;
                const y2 = y0 - v.Fy * scaleForce;

                return (
                  <g key={v.id}>
                    <circle cx={x0} cy={y0} r={4} fill="currentColor" opacity="0.65" />
                    <line x1={x0} y1={y0} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" opacity="0.65" />
                    <polygon points={arrowHead(x0, y0, x2, y2, 10)} fill="currentColor" opacity="0.65" />
                    <text x={x2 + 8} y={y2 - 8} fontSize="12" fill="currentColor" opacity="0.8">
                      {v.label || `F${idx + 1}`}
                    </text>
                  </g>
                );
              })}

              {/* Resultante global desde el origen */}
              {Number.isFinite(result.R) ? (() => {
                const x2 = X(0) + result.Rx * scaleForce;
                const y2 = Y(0) - result.Ry * scaleForce;
                return (
                  <g>
                    <line x1={X(0)} y1={Y(0)} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" />
                    <polygon points={arrowHead(X(0), Y(0), x2, y2, 14)} fill="currentColor" />
                    <text x={x2 + 10} y={y2 - 10} fontSize="13" fill="currentColor">
                      R
                    </text>
                  </g>
                );
              })() : null}

              {/* Referencia desde calculadora */}
              {ref && Number.isFinite(ref.Rx) && Number.isFinite(ref.Ry) ? (() => {
                const x2 = X(0) + ref.Rx * scaleForce;
                const y2 = Y(0) - ref.Ry * scaleForce;
                return (
                  <g>
                    <line x1={X(0)} y1={Y(0)} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" opacity="0.35" strokeDasharray="6 6" />
                    <polygon points={arrowHead(X(0), Y(0), x2, y2, 12)} fill="currentColor" opacity="0.35" />
                    <text x={x2 + 10} y={y2 + 16} fontSize="12" fill="currentColor" opacity="0.55">
                      Ref (calc)
                    </text>
                  </g>
                );
              })() : null}

              {/* Origen */}
              <circle cx={X(0)} cy={Y(0)} r={4} fill="currentColor" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
