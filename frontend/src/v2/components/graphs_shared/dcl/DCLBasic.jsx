import React, { useMemo } from "react";
import { sumForces, toNum } from "./dclMath";

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

export default function DCLBasic({
  scene,
  onSceneChange,
  disabled = false,
  showReference = true,
}) {
  const forces = Array.isArray(scene?.forces) ? scene.forces : [];
  const result = useMemo(() => sumForces(forces), [forces]);

  const ref = scene?.reference && showReference
    ? { Rx: toNum(scene.reference.Rx, NaN), Ry: toNum(scene.reference.Ry, NaN) }
    : null;

  // SVG
  const W = 920;
  const H = 320;
  const cx = W / 2;
  const cy = H / 2;

  // Escala auto para que quepa
  const maxAbs = Math.max(
    1,
    Math.abs(result.Rx),
    Math.abs(result.Ry),
    Math.abs(result.R),
    ref ? Math.abs(ref.Rx || 0) : 0,
    ref ? Math.abs(ref.Ry || 0) : 0
  );
  const scale = 110 / maxAbs;

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

  // Vectores de cada fuerza (concurrentes en el origen)
  const vectors = forces
    .map((f) => {
      if (!f?.active) return null;
      const F = Math.max(0, toNum(f.F, 0));
      const th = (toNum(f.thetaDeg, 0) * Math.PI) / 180;
      const Fx = F * Math.cos(th);
      const Fy = F * Math.sin(th);
      return { id: f.id, label: f.label, Fx, Fy };
    })
    .filter(Boolean);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* Tabla de fuerzas */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Fuerzas (básico)</div>

        <div className="muted" style={{ marginTop: 6 }}>
          Define fuerzas por módulo <b>F</b> y ángulo <b>θ</b> (grados desde +x, antihorario).
        </div>

        <div style={{ overflowX: "auto", marginTop: 10 }}>
          <table className="table" style={{ minWidth: 720 }}>
            <thead>
              <tr>
                <th>Activa</th>
                <th>Etiqueta</th>
                <th>F (N)</th>
                <th>θ (°)</th>
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
                  <td style={{ width: 160 }}>
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
                  <td style={{ width: 160 }}>
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
                </tr>
              ))}
              {forces.length === 0 ? (
                <tr>
                  <td colSpan={4} className="muted">
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
        </div>
      </div>

      {/* Diagrama */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Diagrama vectorial</div>

        <div style={{ width: "100%", marginTop: 10, display: "flex", justifyContent: "center" }}>
          <div style={{ width: "min(980px, 100%)" }}>
            <svg width="100%" height="320" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
              {/* Ejes */}
              <line x1={40} y1={cy} x2={W - 40} y2={cy} stroke="currentColor" opacity="0.25" />
              <line x1={cx} y1={40} x2={cx} y2={H - 40} stroke="currentColor" opacity="0.25" />
              <text x={W - 52} y={cy - 10} fontSize="12" fill="currentColor" opacity="0.7">+x</text>
              <text x={cx + 10} y={52} fontSize="12" fill="currentColor" opacity="0.7">+y</text>

              {/* Fuerzas */}
              {vectors.map((v, idx) => {
                const x2 = cx + v.Fx * scale;
                const y2 = cy - v.Fy * scale;
                return (
                  <g key={v.id}>
                    <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" opacity="0.65" />
                    <polygon points={arrowHead(cx, cy, x2, y2, 10)} fill="currentColor" opacity="0.65" />
                    <text x={x2 + 8} y={y2 - 8} fontSize="12" fill="currentColor" opacity="0.8">
                      {v.label || `F${idx + 1}`}
                    </text>
                  </g>
                );
              })}

              {/* Resultante (más marcada) */}
              {Number.isFinite(result.R) ? (() => {
                const x2 = cx + result.Rx * scale;
                const y2 = cy - result.Ry * scale;
                return (
                  <g>
                    <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="currentColor" strokeWidth="4" />
                    <polygon points={arrowHead(cx, cy, x2, y2, 14)} fill="currentColor" />
                    <text x={x2 + 10} y={y2 - 10} fontSize="13" fill="currentColor">
                      R
                    </text>
                  </g>
                );
              })() : null}

              {/* Referencia desde calculadora (si existe) */}
              {ref && Number.isFinite(ref.Rx) && Number.isFinite(ref.Ry) ? (() => {
                const x2 = cx + ref.Rx * scale;
                const y2 = cy - ref.Ry * scale;
                return (
                  <g>
                    <line x1={cx} y1={cy} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" opacity="0.35" strokeDasharray="6 6" />
                    <polygon points={arrowHead(cx, cy, x2, y2, 12)} fill="currentColor" opacity="0.35" />
                    <text x={x2 + 10} y={y2 + 16} fontSize="12" fill="currentColor" opacity="0.55">
                      Ref (calc)
                    </text>
                  </g>
                );
              })() : null}

              {/* Origen */}
              <circle cx={cx} cy={cy} r={4} fill="currentColor" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
