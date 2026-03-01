// src/v2/components/graphs/dinamica/PesoGraphs.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceDot,
} from "recharts";

import { fmt } from "../../../utils/graphFormat";
import { samplePeso } from "../../../engine/models/dinamica/peso";

/* Helpers */
function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function NumInput({ label, value, onChange, step = 0.1, min, disabled }) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <input
        className="form-control"
        type="number"
        step={step}
        min={min}
        disabled={disabled}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}

export default function PesoGraphs({ params }) {
  const [linked, setLinked] = useState(true);

  // Parámetros "del gráfico"
  const [p, setP] = useState(() => ({
    g: 9.8,
    mMin: 0,
    mMax: 50,
    mObs: 1, // punto de lectura
  }));

  // Sync desde calculadora (igual que MRUA)
  useEffect(() => {
    if (!linked) return;

    const g = toNum(params?.g, 9.8);
    const m = toNum(params?.m, 1);

    // Rango automático razonable alrededor de m si existe
    const mMaxAuto = Number.isFinite(m) ? Math.max(5, m * 2) : 50;

    setP((prev) => ({
      ...prev,
      g,
      mObs: Number.isFinite(m) ? m : prev.mObs,
      mMin: 0,
      mMax: mMaxAuto,
    }));
  }, [linked, params?.g, params?.m]);

  const patch = (k, val) => setP((prev) => ({ ...prev, [k]: val }));

  const g = toNum(p.g, 9.8);
  const mMin = Math.max(0, toNum(p.mMin, 0));
  const mMax = Math.max(mMin, toNum(p.mMax, 50));

  const mObs = useMemo(() => {
    const raw = toNum(p.mObs, 1);
    if (!Number.isFinite(raw)) return mMin;
    return clamp(raw, mMin, mMax);
  }, [p.mObs, mMin, mMax]);

  const data = useMemo(
    () => samplePeso({ g, mMin, mMax, n: 240 }) || [],
    [g, mMin, mMax]
  );

  const wObs = mObs * g;

  // Sanitiza mObs si rango cambia
  useEffect(() => {
    const raw = toNum(p.mObs, 1);
    if (!Number.isFinite(raw)) patch("mObs", mMin);
    else if (raw < mMin) patch("mObs", mMin);
    else if (raw > mMax) patch("mObs", mMax);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mMin, mMax]);

  return (
    <div>
      <div className="v2-card">
        <div className="v2-card-title">Parámetros (Peso)</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
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
            🧪 Modo experimento (solo gráficas)
          </button>
          {!linked && (
            <button
              type="button"
              className="btn btn-sm btn-light"
              onClick={() => {
                const gg = toNum(params?.g, 9.8);
                const mm = toNum(params?.m, 1);
                const mMaxAuto = Number.isFinite(mm) ? Math.max(5, mm * 2) : 50;

                setP({
                  g: gg,
                  mMin: 0,
                  mMax: mMaxAuto,
                  mObs: Number.isFinite(mm) ? mm : 1,
                });
              }}
            >
              ↩️ Cargar desde calculadora
            </button>
          )}
        </div>

        <div className="v2-grid-fill-inputs">
          <NumInput
            label="g (m/s²)"
            value={p.g ?? ""}
            onChange={(v) => patch("g", v)}
            step={0.1}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="m mínima (kg)"
            value={p.mMin ?? ""}
            onChange={(v) => patch("mMin", v)}
            step={0.5}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="m máxima (kg)"
            value={p.mMax ?? ""}
            onChange={(v) => patch("mMax", v)}
            step={0.5}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="m observación (kg)"
            value={String(mObs)}
            onChange={(v) => patch("mObs", v)}
            step={0.2}
            min={0}
            disabled={false}
          />
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 12 }}>
          <div className="v2-card">
            <div className="v2-card-title">En m = {fmt(mObs, 4)} kg</div>
            <div>
              <strong>W</strong> = {fmt(wObs, 4)} N
            </div>
            <div className="muted" style={{ marginTop: 6 }}>
              Relación lineal: W = m·g
            </div>
          </div>
        </div>
      </div>

      {/* W(m) */}
      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">W(m) — peso</div>
        <div style={{ width: "100%", minHeight: 320 }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data}>
              <ReferenceDot x={mObs} y={wObs} r={4} label="obs" />
              <CartesianGrid />
              <XAxis
                dataKey="m"
                label={{ value: "m (kg)", position: "insideBottomRight", offset: -4 }}
              />
              <YAxis
                label={{ value: "W (N)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(label) => `m = ${fmt(label, 4)} kg`}
              />
              <Legend />
              <Line dataKey="w" name="W(m)" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
