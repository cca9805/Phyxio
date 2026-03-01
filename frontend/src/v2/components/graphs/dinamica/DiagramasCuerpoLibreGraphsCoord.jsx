import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
  ReferenceLine,
} from "recharts";

import { fmt } from "../../../utils/graphFormat";
import MathInline from "@/v2/components/shared/MathInline";

function toNum(v, fallback) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function buildSeries({ m, g, stepDeg = 1 }) {
  const out = [];
  for (let th = 0; th <= 60 + 1e-9; th += stepDeg) {
    const rad = (th * Math.PI) / 180;
    const W = m * g;
    out.push({
      theta: th,
      W,
      Wpar: W * Math.sin(rad),
      Wperp: W * Math.cos(rad),
    });
  }
  return out;
}

export default function DiagramasCuerpoLibreGraphsCoord() {
  const [m, setM] = useState(10);
  const [g, setG] = useState(9.81);
  const [theta, setTheta] = useState(25);

  const [showW, setShowW] = useState(false);
  const [showWpar, setShowWpar] = useState(true);
  const [showWperp, setShowWperp] = useState(true);
  const [showPoint, setShowPoint] = useState(true);

  const safe = useMemo(() => {
    const mm = clamp(toNum(m, 10), 0.05, 500);
    const gg = clamp(toNum(g, 9.81), 0, 20);
    const th = clamp(Math.round(toNum(theta, 25)), 0, 60);
    return { m: mm, g: gg, theta: th };
  }, [m, g, theta]);

  const data = useMemo(() => buildSeries({ m: safe.m, g: safe.g, stepDeg: 1 }), [safe.m, safe.g]);

  const current = useMemo(() => {
    const rad = (safe.theta * Math.PI) / 180;
    const W = safe.m * safe.g;
    return {
      W,
      Wpar: W * Math.sin(rad),
      Wperp: W * Math.cos(rad),
    };
  }, [safe]);

  const yMax = useMemo(() => Math.max(current.W * 1.08, 1), [current.W]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Diagramas de cuerpo libre (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Componentes del peso en plano inclinado: <MathInline latex={"W_{\\parallel}=mg\\sin\\theta"} /> y <MathInline latex={"W_{\\perp}=mg\\cos\\theta"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
              padding: "8px 12px",
              background: "rgba(59, 130, 246, 0.08)",
              borderRadius: "10px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            <span style={{ color: "#60a5fa", fontSize: "14px", fontWeight: "600" }}>Parametros:</span>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: "#fbbf24" }}>m (kg)</span>
              <input
                className="form-control"
                style={{ width: 84 }}
                inputMode="decimal"
                value={m}
                onChange={(e) => setM(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: "#34d399" }}>g (m/s^2)</span>
              <input
                className="form-control"
                style={{ width: 84 }}
                inputMode="decimal"
                value={g}
                onChange={(e) => setG(e.target.value)}
              />
            </div>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ color: "#f87171" }}>theta (deg)</span>
              <input
                className="form-control"
                style={{ width: 84 }}
                inputMode="numeric"
                value={theta}
                onChange={(e) => setTheta(e.target.value)}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              padding: "8px 12px",
              background: "rgba(168, 85, 247, 0.07)",
              borderRadius: "10px",
              border: "1px solid rgba(168, 85, 247, 0.18)",
            }}
          >
            <label className="v2-toggle">
              <input className="v2-toggle-input" type="checkbox" checked={showW} onChange={(e) => setShowW(e.target.checked)} />
              <span className="v2-toggle-label">W total</span>
            </label>
            <label className="v2-toggle">
              <input className="v2-toggle-input" type="checkbox" checked={showWpar} onChange={(e) => setShowWpar(e.target.checked)} />
              <span className="v2-toggle-label">Wpar</span>
            </label>
            <label className="v2-toggle">
              <input className="v2-toggle-input" type="checkbox" checked={showWperp} onChange={(e) => setShowWperp(e.target.checked)} />
              <span className="v2-toggle-label">Wperp</span>
            </label>
            <label className="v2-toggle">
              <input className="v2-toggle-input" type="checkbox" checked={showPoint} onChange={(e) => setShowPoint(e.target.checked)} />
              <span className="v2-toggle-label">Punto actual</span>
            </label>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div style={{ fontWeight: 900, opacity: 0.95 }}>Componentes del peso vs angulo</div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>
                theta = <b>{safe.theta}</b> deg {"->"} Wpar = <b>{fmt(current.Wpar, 2)}</b> N, Wperp = <b>{fmt(current.Wperp, 2)}</b> N
              </div>
            </div>

            <div style={{ width: "100%", height: 330, marginTop: 10 }}>
              <ResponsiveContainer>
                <LineChart data={data} margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                  <XAxis
                    dataKey="theta"
                    type="number"
                    domain={[0, 60]}
                    tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    tickLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    label={{ value: "theta (deg)", position: "insideBottomRight", fill: "rgba(226,232,240,0.6)" }}
                  />
                  <YAxis
                    type="number"
                    domain={[0, yMax]}
                    tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    tickLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    label={{ value: "F (N)", angle: -90, position: "insideLeft", fill: "rgba(226,232,240,0.6)" }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(2,6,23,0.95)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 12,
                      color: "rgba(226,232,240,0.9)",
                    }}
                    formatter={(value, name) => [fmt(value, 2), name]}
                    labelFormatter={(l) => `theta = ${fmt(l, 0)} deg`}
                  />

                  <ReferenceLine y={0} stroke="rgba(148,163,184,0.5)" strokeDasharray="4 4" />

                  {showW ? <Line type="monotone" dataKey="W" stroke="#f87171" strokeWidth={2.5} dot={false} name="W = mg" /> : null}
                  {showWpar ? <Line type="monotone" dataKey="Wpar" stroke="#60a5fa" strokeWidth={3} dot={false} name="Wpar = mg·sen(theta)" /> : null}
                  {showWperp ? <Line type="monotone" dataKey="Wperp" stroke="#34d399" strokeWidth={3} dot={false} name="Wperp = mg·cos(theta)" /> : null}

                  {showPoint && showWpar ? <ReferenceDot x={safe.theta} y={current.Wpar} r={5} fill="#60a5fa" stroke="none" /> : null}
                  {showPoint && showWperp ? <ReferenceDot x={safe.theta} y={current.Wperp} r={5} fill="#34d399" stroke="none" /> : null}
                  {showPoint && showW ? <ReferenceDot x={safe.theta} y={current.W} r={5} fill="#f87171" stroke="none" /> : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="v2-panel" style={{ padding: 12, background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>
              W = <b>{fmt(current.W, 2)}</b> N
              <br />
              Wpar = <b style={{ color: "#60a5fa" }}>{fmt(current.Wpar, 2)}</b> N
              <br />
              Wperp = <b style={{ color: "#34d399" }}>{fmt(current.Wperp, 2)}</b> N
              <br />
              Al aumentar theta: Wpar sube y Wperp baja.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

