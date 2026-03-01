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
} from "recharts";

import { fmt } from "../../../utils/graphFormat";

function toNum(v, fallback) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function buildSeries({ k, xMax, step = 0.1 }) {
  const out = [];
  const nSteps = Math.max(2, Math.round((2 * xMax) / step));
  for (let i = 0; i <= nSteps; i++) {
    const x = -xMax + (2 * xMax * i) / nSteps; // m
    const F = -k * x; // N (restauradora)
    const U = 0.5 * k * x * x; // J
    out.push({ x, F, U });
  }
  return out;
}

export default function SistemasConMuellesGraphsCoord(props) {
  // Si llega algo desde calculadora, lo toma, pero con defaults estables
  const p = props?.params ?? props?.sharedParams ?? {};

  const [kIn, setKIn] = useState(p.k ?? 50);
  const [xIn, setXIn] = useState(p.x ?? 0.2);
  const [xMaxIn, setXMaxIn] = useState(1);

  const safe = useMemo(() => {
    const k = Math.max(0.01, toNum(kIn, 50));
    const x = Math.max(-2, Math.min(2, toNum(xIn, 0.2)));
    const xMax = Math.max(0.2, Math.min(2, toNum(xMaxIn, 1)));
    return { k, x, xMax };
  }, [kIn, xIn, xMaxIn]);

  const data = useMemo(
    () => buildSeries({ k: safe.k, xMax: safe.xMax, step: 0.02 }),
    [safe.k, safe.xMax]
  );

  const F = -safe.k * safe.x;
  const U = 0.5 * safe.k * safe.x * safe.x;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Sistema con muelle (Coord): ley de Hooke y energía elástica</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Fuerza restauradora: <b>F = −k·x</b> · Energía potencial: <b>U = ½·k·x²</b>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div
            style={{
              display: "flex",
              gap: 15,
              alignItems: "center",
              flexWrap: "wrap",
              padding: "8px 12px",
              background: "rgba(59, 130, 246, 0.08)",
              borderRadius: "10px",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            <span style={{ color: "#60a5fa", fontSize: "14px", fontWeight: "600", marginRight: "8px" }}>
              ⚙️ Parámetros:
            </span>

            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ color: "#34d399" }}>🪢</span> k (N/m)
              <label style={{ display: "flex", gap: 6, alignItems: "center", color: "#e2e8f0", fontSize: "14px" }}>
                <input
                  className="form-control"
                  style={{ width: 90 }}
                  inputMode="decimal"
                  value={kIn}
                  onChange={(e) => setKIn(e.target.value)}
                />
              </label>

              <span style={{ color: "#f87171" }}>↔️</span> x (m)
              <label style={{ display: "flex", gap: 6, alignItems: "center", color: "#e2e8f0", fontSize: "14px" }}>
                <input
                  className="form-control"
                  style={{ width: 90 }}
                  inputMode="decimal"
                  value={xIn}
                  onChange={(e) => setXIn(e.target.value)}
                />
              </label>

              <span style={{ color: "#fbbf24" }}>📏</span> xₘₐₓ (m)
              <label style={{ display: "flex", gap: 6, alignItems: "center", color: "#e2e8f0", fontSize: "14px" }}>
                <input
                  className="form-control"
                  style={{ width: 90 }}
                  inputMode="decimal"
                  value={xMaxIn}
                  onChange={(e) => setXMaxIn(e.target.value)}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="muted" style={{ marginTop: 10 }}>
          En x = <b>{fmt(safe.x, 6)} m</b> → F = <b>{fmt(F, 6)} N</b> · U = <b>{fmt(U, 6)} J</b>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">F(x) y U(x)</div>

        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid />
              <XAxis
                dataKey="x"
                type="number"
                domain={[-safe.xMax, safe.xMax]}
                tickFormatter={(v) => fmt(v, 3)}
                label={{ value: "x (m)", position: "insideBottom", offset: -5 }}
              />
              <YAxis
                tickFormatter={(v) => fmt(v, 4)}
                label={{ value: "F (N) / U (J)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip formatter={(v) => fmt(v, 6)} labelFormatter={(x) => `x = ${fmt(x, 6)} m`} />
              <Line type="monotone" dataKey="F" dot={false} name="F = −k·x" />
              <Line type="monotone" dataKey="U" dot={false} name="U = ½·k·x²" />
              <ReferenceDot x={safe.x} y={F} r={5} />
              <ReferenceDot x={safe.x} y={U} r={5} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="muted" style={{ marginTop: 10 }}>
          Interpretación: la fuerza <b>siempre apunta hacia el equilibrio</b> (x = 0) y la energía crece con x².
        </div>
      </div>
    </div>
  );
}
