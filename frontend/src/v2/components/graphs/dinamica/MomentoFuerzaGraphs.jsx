import React, { useEffect, useMemo, useState } from "react";
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

import { pickParam } from "../../../utils/pickParamGraphs";
import { fmt } from "../../../utils/graphFormat";
import { defaultParams, computeTau } from "../../../engine/models/dinamica/momentoFuerza";

// helpers
function toNum(v, fallback) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function buildTauVsTheta({ F, r }, n = 181) {
  // theta de 0 a pi (0..180°) en rad
  const data = [];
  const N = Math.max(30, n);
  for (let i = 0; i < N; i++) {
    const theta = (Math.PI * i) / (N - 1);
    const tau = computeTau({ F, r, theta });
    data.push({ theta, tau });
  }
  return data;
}

export default function MomentoFuerzaGraphs({ params }) {
  const [linked, setLinked] = useState(true);
  const [p, setP] = useState(() => defaultParams());

  // 🔗 enlazar con calculadora
  useEffect(() => {
    if (!linked || !params) return;
    setP((prev) => ({
      ...prev,
      F: pickParam(params, ["F"], prev.F),
      r: pickParam(params, ["r"], prev.r),
      theta: pickParam(params, ["theta"], prev.theta),
    }));
  }, [linked, params]);

  const safe = useMemo(() => {
    const F = toNum(p.F, 10);
    const r = toNum(p.r, 0.4);
    const theta = toNum(p.theta, Math.PI / 2);
    return {
      F: Math.max(0, F),
      r: Math.max(0, r),
      theta,
    };
  }, [p]);

  const tauNow = useMemo(() => computeTau(safe), [safe]);

  const curve = useMemo(() => buildTauVsTheta({ F: safe.F, r: safe.r }, 181), [safe.F, safe.r]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* Controles */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Momento de una fuerza</div>

        <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
          <button
            type="button"
            className={`btn btn-sm ${linked ? "btn-primary" : "btn-light"}`}
            onClick={() => setLinked(true)}
          >
            🔗 Seguir calculadora
          </button>
          <button
            type="button"
            className={`btn btn-sm ${!linked ? "btn-primary" : "btn-light"}`}
            onClick={() => setLinked(false)}
          >
            🧪 Experimento
          </button>
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 10 }}>
          <div className="v2-card">
            <div className="v2-card-title">F (N)</div>
            <input
              className="form-control"
              disabled={linked}
              value={p.F}
              inputMode="decimal"
              onChange={(e) => setP((s) => ({ ...s, F: e.target.value }))}
            />
          </div>

          <div className="v2-card">
            <div className="v2-card-title">r (m)</div>
            <input
              className="form-control"
              disabled={linked}
              value={p.r}
              inputMode="decimal"
              onChange={(e) => setP((s) => ({ ...s, r: e.target.value }))}
            />
          </div>

          <div className="v2-card">
            <div className="v2-card-title">θ (rad)</div>
            <input
              className="form-control"
              disabled={linked}
              value={p.theta}
              inputMode="decimal"
              onChange={(e) => setP((s) => ({ ...s, theta: e.target.value }))}
            />
          </div>
        </div>

        <div className="muted" style={{ marginTop: 10 }}>
          Momento: <b>τ = {fmt(tauNow, 6)} N·m</b>
        </div>
      </div>

      {/* Gráfica */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Curva τ(θ) con F y r fijos</div>
        <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
          Se muestra cómo cambia el momento al variar el ángulo entre el brazo y la fuerza.
        </div>

        {/* IMPORTANTE: altura fija para que ResponsiveContainer pinte */}
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={curve}>
              <CartesianGrid />
              <XAxis
                dataKey="theta"
                type="number"
                domain={[0, Math.PI]}
                tickFormatter={(v) => fmt(v, 3)}
                label={{ value: "θ (rad)", position: "insideBottom", offset: -5 }}
              />
              <YAxis
                tickFormatter={(v) => fmt(v, 4)}
                label={{ value: "τ (N·m)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(v) => fmt(v, 6)}
                labelFormatter={(t) => `θ = ${fmt(t, 6)} rad`}
              />
              <Line type="monotone" dataKey="tau" dot={false} name="τ" />
              {Number.isFinite(safe.theta) && Number.isFinite(tauNow) ? (
                <ReferenceDot x={safe.theta} y={tauNow} r={5} />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
