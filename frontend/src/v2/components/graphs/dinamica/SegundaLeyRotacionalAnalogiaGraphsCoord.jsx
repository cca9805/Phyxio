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
import { defaultParams, computeAlpha, computeA } from "../../../engine/models/dinamica/segundaLeyRotacional";

function toNum(v, fallback) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function buildAlphaVsTau({ I }, n = 120) {
  const data = [];
  const N = Math.max(40, n);
  const tauMin = 0;
  const tauMax = 10; // rango didáctico
  for (let i = 0; i < N; i++) {
    const tau = tauMin + (i / (N - 1)) * (tauMax - tauMin);
    data.push({ x: tau, y: computeAlpha({ tau, I }) });
  }
  return data;
}

function buildAVsF({ m }, n = 120) {
  const data = [];
  const N = Math.max(40, n);
  const Fmin = 0;
  const Fmax = 100; // rango didáctico
  for (let i = 0; i < N; i++) {
    const F = Fmin + (i / (N - 1)) * (Fmax - Fmin);
    data.push({ x: F, y: computeA({ F, m }) });
  }
  return data;
}

export default function SegundaLeyRotacionalAnalogiaGraphsCoord({ params }) {
  const [linked, setLinked] = useState(true);
  const [p, setP] = useState(() => defaultParams());

  // 🔗 seguir calculadora
  useEffect(() => {
    if (!linked || !params) return;
    setP((prev) => ({
      ...prev,
      tau: pickParam(params, ["tau", "τ"], prev.tau),
      I: pickParam(params, ["I"], prev.I),
      F: pickParam(params, ["F", "f"], prev.F),
      m: pickParam(params, ["m"], prev.m),
    }));
  }, [linked, params]);

  const safe = useMemo(() => {
    const tau = toNum(p.tau, 2);
    const I = Math.max(1e-9, toNum(p.I, 0.5));
    const F = toNum(p.F, 20);
    const m = Math.max(1e-9, toNum(p.m, 5));
    return { tau, I, F, m };
  }, [p]);

  const alphaNow = useMemo(() => computeAlpha({ tau: safe.tau, I: safe.I }), [safe.tau, safe.I]);
  const aNow = useMemo(() => computeA({ F: safe.F, m: safe.m }), [safe.F, safe.m]);

  const curveAlpha = useMemo(() => buildAlphaVsTau({ I: safe.I }, 140), [safe.I]);
  const curveA = useMemo(() => buildAVsF({ m: safe.m }, 140), [safe.m]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* Controles */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">2ª ley rotacional ↔ traslacional</div>

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
            <div className="v2-card-title">τ (N·m)</div>
            <input className="form-control" disabled={linked} value={p.tau} inputMode="decimal"
              onChange={(e) => setP((s) => ({ ...s, tau: e.target.value }))} />
          </div>

          <div className="v2-card">
            <div className="v2-card-title">I (kg·m²)</div>
            <input className="form-control" disabled={linked} value={p.I} inputMode="decimal"
              onChange={(e) => setP((s) => ({ ...s, I: e.target.value }))} />
          </div>

          <div className="v2-card">
            <div className="v2-card-title">F (N)</div>
            <input className="form-control" disabled={linked} value={p.F} inputMode="decimal"
              onChange={(e) => setP((s) => ({ ...s, F: e.target.value }))} />
          </div>

          <div className="v2-card">
            <div className="v2-card-title">m (kg)</div>
            <input className="form-control" disabled={linked} value={p.m} inputMode="decimal"
              onChange={(e) => setP((s) => ({ ...s, m: e.target.value }))} />
          </div>
        </div>

        <div className="muted" style={{ marginTop: 10, display: "grid", gap: 6 }}>
          <div>Rotación: <b>α = τ / I = {fmt(alphaNow, 6)} rad/s²</b></div>
          <div>Traslación: <b>a = F / m = {fmt(aNow, 6)} m/s²</b></div>
          <div style={{ fontSize: 12, opacity: 0.75 }}>
            Aquí se compara la <b>linealidad</b>: α crece linealmente con τ (pendiente 1/I) y a crece linealmente con F (pendiente 1/m).
          </div>
        </div>
      </div>

      {/* Gráfica */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Comparación de linealidad (Coord)</div>
        <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
          Izquierda: α(τ) con I fijo. Derecha: a(F) con m fijo.
        </div>

        <div className="v2-grid-2" style={{ marginTop: 10, gap: 12 }}>
          {/* α vs τ */}
          <div className="v2-card" style={{ padding: 10 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>α(τ) = τ/I</div>
            <div style={{ width: "100%", height: 320 }}>
              <ResponsiveContainer>
                <LineChart data={curveAlpha}>
                  <CartesianGrid />
                  <XAxis dataKey="x" type="number" domain={[0, 10]} tickFormatter={(v) => fmt(v, 2)}
                    label={{ value: "τ (N·m)", position: "insideBottom", offset: -5 }} />
                  <YAxis tickFormatter={(v) => fmt(v, 2)}
                    label={{ value: "α (rad/s²)", angle: -90, position: "insideLeft" }} />
                  <Tooltip formatter={(v) => fmt(v, 6)} labelFormatter={(x) => `τ = ${fmt(x, 6)} N·m`} />
                  <Line type="monotone" dataKey="y" dot={false} name="α" />
                  {Number.isFinite(safe.tau) && Number.isFinite(alphaNow) ? (
                    <ReferenceDot x={safe.tau} y={alphaNow} r={5} />
                  ) : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* a vs F */}
          <div className="v2-card" style={{ padding: 10 }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>a(F) = F/m</div>
            <div style={{ width: "100%", height: 320 }}>
              <ResponsiveContainer>
                <LineChart data={curveA}>
                  <CartesianGrid />
                  <XAxis dataKey="x" type="number" domain={[0, 100]} tickFormatter={(v) => fmt(v, 2)}
                    label={{ value: "F (N)", position: "insideBottom", offset: -5 }} />
                  <YAxis tickFormatter={(v) => fmt(v, 2)}
                    label={{ value: "a (m/s²)", angle: -90, position: "insideLeft" }} />
                  <Tooltip formatter={(v) => fmt(v, 6)} labelFormatter={(x) => `F = ${fmt(x, 6)} N`} />
                  <Line type="monotone" dataKey="y" dot={false} name="a" />
                  {Number.isFinite(safe.F) && Number.isFinite(aNow) ? (
                    <ReferenceDot x={safe.F} y={aNow} r={5} />
                  ) : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
