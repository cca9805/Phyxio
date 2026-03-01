import React, { useMemo, useState } from "react";

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}
function toNum(v, fallback) {
  if (v == null || v === "") return fallback;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

export default function NormalEnPlanosGraphsDcl() {
  const [mode, setMode] = useState("incline"); // incline | horizontal
  const [m, setM] = useState(10);
  const [g, setG] = useState(9.81);
  const [theta, setTheta] = useState(25);

  const [showComponents, setShowComponents] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [showAxes, setShowAxes] = useState(false);

  const mm = useMemo(() => clamp(toNum(m, 10), 0.1, 200), [m]);
  const gg = useMemo(() => clamp(toNum(g, 9.81), 0.1, 30), [g]);
  const thDeg = useMemo(() => clamp(toNum(theta, 25), 0, 60), [theta]);

  const th = (thDeg * Math.PI) / 180;
  const W = mm * gg;
  const N = mode === "incline" ? W * Math.cos(th) : W;
  const Wpar = mode === "incline" ? W * Math.sin(th) : 0;
  const Wperp = mode === "incline" ? W * Math.cos(th) : W;

  const Fmax = Math.max(W, N, 1) * 1.2;

  const C = {
    bg: "#f0f9ff",
    ink: "#0f172a",
    muted: "#64748b",
    mg: "#dc2626",
    N: "#60a5fa",
    comp: "#6366f1",
  };

  const Arrow = ({ x1, y1, x2, y2, stroke, w = 4 }) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const L = Math.hypot(dx, dy) || 1;
    const ux = dx / L;
    const uy = dy / L;
    const head = 12;

    const hx = x2;
    const hy = y2;
    const leftx = hx - ux * head - uy * (head * 0.6);
    const lefty = hy - uy * head + ux * (head * 0.6);
    const rightx = hx - ux * head + uy * (head * 0.6);
    const righty = hy - uy * head - ux * (head * 0.6);

    return (
      <g>
        <line x1={x1} y1={y1} x2={hx} y2={hy} stroke={stroke} strokeWidth={w} strokeLinecap="round" />
        <polygon points={`${hx},${hy} ${leftx},${lefty} ${rightx},${righty}`} fill={stroke} />
      </g>
    );
  };

  const scale = (val, base = 150) => base * clamp(val / Fmax, 0, 1);

  // Punto (cuerpo)
  const cx = 280;
  const cy = 150;

  // Vectores (coords pantalla: y+ hacia abajo)
  const wLen = scale(W, 160);
  const nLen = scale(N, 160);

  const Wend = { x: cx, y: cy + wLen };

  // Normal: vertical arriba (horizontal) o perpendicular al plano (incline)
  let nDir = { x: 0, y: -1 };
  if (mode === "incline") nDir = { x: -Math.sin(th), y: -Math.cos(th) };
  const Nend = { x: cx + nDir.x * nLen, y: cy + nDir.y * nLen };

  // Componentes del peso (incline)
  const parLen = scale(Wpar, 140);
  const perpLen = scale(Wperp, 140);

  // mg‖ cuesta abajo (x+, y+)
  const PARend = { x: cx + Math.cos(th) * parLen, y: cy + Math.sin(th) * parLen };
  // mg⟂ hacia el plano (x+, y+)
  const PERPend = { x: cx + Math.sin(th) * perpLen, y: cy + Math.cos(th) * perpLen };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Normal en planos (DCL)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          DCL: el cuerpo es un punto. Dibuja <b>W</b> y <b>N</b>. En plano inclinado puedes activar <b>mg‖</b> y <b>mg⟂</b>.
        </div>

        <div
          style={{
            display: "grid",
            gap: 10,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            marginTop: 12,
            alignItems: "end",
          }}
        >
          <label className="v2-field">
            <div className="v2-label">Plano</div>
            <select className="v2-select" value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="incline">Plano inclinado</option>
              <option value="horizontal">Plano horizontal</option>
            </select>
          </label>

          <label className="v2-field">
            <div className="v2-label">m (kg)</div>
            <input className="v2-input" value={m} onChange={(e) => setM(e.target.value)} />
          </label>

          <label className="v2-field">
            <div className="v2-label">g (m/s²)</div>
            <input className="v2-input" value={g} onChange={(e) => setG(e.target.value)} />
          </label>

          <label className="v2-field" style={{ opacity: mode === "incline" ? 1 : 0.55 }}>
            <div className="v2-label">θ (°)</div>
            <input className="v2-input" value={theta} onChange={(e) => setTheta(e.target.value)} disabled={mode !== "incline"} />
          </label>

          <label className="v2-field" style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 22 }}>
            <input type="checkbox" checked={showLabels} onChange={(e) => setShowLabels(e.target.checked)} />
            <span className="v2-label" style={{ margin: 0 }}>Etiquetas</span>
          </label>

          <label className="v2-field" style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 22 }}>
            <input type="checkbox" checked={showAxes} onChange={(e) => setShowAxes(e.target.checked)} />
            <span className="v2-label" style={{ margin: 0 }}>Ejes</span>
          </label>

          <label className="v2-field" style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 22, opacity: mode === "incline" ? 1 : 0.55 }}>
            <input type="checkbox" checked={showComponents} onChange={(e) => setShowComponents(e.target.checked)} disabled={mode !== "incline"} />
            <span className="v2-label" style={{ margin: 0 }}>mg‖ / mg⟂</span>
          </label>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <svg viewBox="0 0 560 300" width="100%" height="260" style={{ marginTop: 10 }}>
          <rect x="0" y="0" width="560" height="300" fill={C.bg} />

          {showAxes && (
            <g opacity="0.85">
              <line x1="90" y1="240" x2="470" y2="240" stroke={C.muted} strokeWidth="2" />
              <line x1="90" y1="240" x2="90" y2="70" stroke={C.muted} strokeWidth="2" />
              <text x="478" y="245" fontSize="12" fill={C.muted}>x</text>
              <text x="84" y="62" fontSize="12" fill={C.muted}>y</text>
            </g>
          )}

          {/* cuerpo */}
          <circle cx={cx} cy={cy} r="10" fill={C.ink} />
          <line x1={cx - 12} y1={cy} x2={cx + 12} y2={cy} stroke={C.ink} strokeWidth="2" opacity="0.35" />
          <line x1={cx} y1={cy - 12} x2={cx} y2={cy + 12} stroke={C.ink} strokeWidth="2" opacity="0.35" />

          {/* W */}
          <Arrow x1={cx} y1={cy} x2={Wend.x} y2={Wend.y} stroke={C.mg} w={4} />
          {showLabels && (
            <text x={Wend.x + 12} y={Wend.y - 8} fontSize="13" fill={C.mg} fontWeight="bold">
              W = mg
            </text>
          )}

          {/* N */}
          <Arrow x1={cx} y1={cy} x2={Nend.x} y2={Nend.y} stroke={C.N} w={4} />
          {showLabels && (
            <text x={Nend.x + 12} y={Nend.y + 6} fontSize="13" fill={C.N} fontWeight="bold">
              N
            </text>
          )}

          {/* Componentes */}
          {mode === "incline" && showComponents && (
            <>
              <line x1={cx} y1={cy} x2={PARend.x} y2={PARend.y} stroke={C.comp} strokeWidth="3" strokeDasharray="8 6" />
              <polygon
                points={`${PARend.x},${PARend.y} ${PARend.x - 10},${PARend.y - 2} ${PARend.x - 6},${PARend.y - 10}`}
                fill={C.comp}
                opacity="0.9"
              />
              <line x1={cx} y1={cy} x2={PERPend.x} y2={PERPend.y} stroke={C.comp} strokeWidth="3" strokeDasharray="8 6" />
              <polygon
                points={`${PERPend.x},${PERPend.y} ${PERPend.x - 10},${PERPend.y - 2} ${PERPend.x - 6},${PERPend.y - 10}`}
                fill={C.comp}
                opacity="0.9"
              />

              {showLabels && (
                <>
                  <text x={PARend.x + 10} y={PARend.y + 6} fontSize="12" fill={C.comp} fontWeight="bold">
                    mg‖
                  </text>
                  <text x={PERPend.x + 10} y={PERPend.y + 6} fontSize="12" fill={C.comp} fontWeight="bold">
                    mg⟂
                  </text>
                </>
              )}

              {showLabels && (
                <text x="18" y="286" fontSize="12" fill={C.muted}>
                  En equilibrio normal: N = mg·cosθ
                </text>
              )}
            </>
          )}

          {mode === "horizontal" && showLabels && (
            <text x="18" y="286" fontSize="12" fill={C.muted}>
              Plano horizontal: N = mg
            </text>
          )}
        </svg>
      </div>
    </div>
  );
}
