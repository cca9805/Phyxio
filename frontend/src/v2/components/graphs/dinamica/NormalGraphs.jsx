// src/v2/components/graphs/dinamica/NormalGraphs.jsx
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
import { sampleNormal, sampleNormalTheta } from "../../../engine/models/dinamica/normal";

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
function deg2rad(d) {
  return (d * Math.PI) / 180;
}
function rad2deg(r) {
  return (r * 180) / Math.PI;
}

function NumInput({ label, value, onChange, step = 0.1, min, max, disabled }) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <input
        className="form-control"
        type="number"
        step={step}
        min={min}
        max={max}
        disabled={disabled}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}

export default function NormalGraphs({ params }) {
  const [linked, setLinked] = useState(true);

  const [p, setP] = useState(() => ({
    mode: "horizontal", // "horizontal" | "inclinado"
    g: 9.8,
    thetaDeg: 30,
    mMin: 0,
    mMax: 50,
    mObs: 10,
  }));

  const patch = (k, val) => setP((prev) => ({ ...prev, [k]: val }));

  // Sync desde calculadora (modo linked)
  useEffect(() => {
    if (!linked) return;

    const g = toNum(params?.g, 9.8);
    const m = toNum(params?.m, toNum(params?.mass, 10));

    // theta puede venir como theta (rad) o thetaDeg (deg). Damos prioridad a thetaDeg si existe.
    const thetaDeg =
      Number.isFinite(toNum(params?.thetaDeg, NaN))
        ? toNum(params?.thetaDeg, 30)
        : Number.isFinite(toNum(params?.theta, NaN))
        ? rad2deg(toNum(params?.theta, 0))
        : 30;

    // rango automático si hay masa
    const mMaxAuto = Number.isFinite(m) ? Math.max(5, m * 2) : 50;

    setP((prev) => ({
      ...prev,
      g,
      mObs: Number.isFinite(m) ? m : prev.mObs,
      thetaDeg: Number.isFinite(thetaDeg) ? thetaDeg : prev.thetaDeg,
      mMin: 0,
      mMax: mMaxAuto,
    }));
  }, [linked, params?.g, params?.m, params?.mass, params?.theta, params?.thetaDeg]);

  const g = toNum(p.g, 9.8);
  const thetaDeg = clamp(toNum(p.thetaDeg, 30), 0, 89.9);
  const thetaRad = deg2rad(thetaDeg);

  const mMin = Math.max(0, toNum(p.mMin, 0));
  const mMax = Math.max(mMin, toNum(p.mMax, 50));

  const mObs = useMemo(() => {
    const raw = toNum(p.mObs, 10);
    if (!Number.isFinite(raw)) return mMin;
    return clamp(raw, mMin, mMax);
  }, [p.mObs, mMin, mMax]);

  const mode = p.mode === "inclinado" ? "inclinado" : "horizontal";
  const k = mode === "inclinado" ? Math.cos(thetaRad) : 1;
  const NObs = mObs * g * k;

  const dataNm = useMemo(
    () => sampleNormal({ mode, g, thetaRad, mMin, mMax, n: 240 }) || [],
    [mode, g, thetaRad, mMin, mMax]
  );

  const dataNtheta = useMemo(
    () =>
      mode === "inclinado"
        ? sampleNormalTheta({
            g,
            m: mObs,
            thetaMinRad: 0,
            thetaMaxRad: Math.PI / 2,
            n: 240,
          })
        : [],
    [mode, g, mObs]
  );

  // Sanitiza mObs si cambia el rango
  useEffect(() => {
    const raw = toNum(p.mObs, 10);
    if (!Number.isFinite(raw)) patch("mObs", mMin);
    else if (raw < mMin) patch("mObs", mMin);
    else if (raw > mMax) patch("mObs", mMax);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mMin, mMax]);

  return (
    <div>
      {/* Parámetros */}
      <div className="v2-card">
        <div className="v2-card-title">Parámetros (Normal)</div>

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
            🧪 Modo experimento
          </button>

          <div style={{ flex: 1 }} />

          <button
            type="button"
            className={`btn btn-sm ${mode === "horizontal" ? "btn-primary" : "btn-light"}`}
            onClick={() => patch("mode", "horizontal")}
          >
            Horizontal
          </button>
          <button
            type="button"
            className={`btn btn-sm ${mode === "inclinado" ? "btn-primary" : "btn-light"}`}
            onClick={() => patch("mode", "inclinado")}
          >
            Plano inclinado
          </button>

          {!linked && (
            <button
              type="button"
              className="btn btn-sm btn-light"
              onClick={() => {
                const gg = toNum(params?.g, 9.8);
                const mm = toNum(params?.m, toNum(params?.mass, 10));
                const thDeg =
                  Number.isFinite(toNum(params?.thetaDeg, NaN))
                    ? toNum(params?.thetaDeg, 30)
                    : Number.isFinite(toNum(params?.theta, NaN))
                    ? rad2deg(toNum(params?.theta, 0))
                    : 30;

                const mMaxAuto = Number.isFinite(mm) ? Math.max(5, mm * 2) : 50;

                setP((prev) => ({
                  ...prev,
                  g: gg,
                  mMin: 0,
                  mMax: mMaxAuto,
                  mObs: Number.isFinite(mm) ? mm : 10,
                  thetaDeg: Number.isFinite(thDeg) ? thDeg : 30,
                }));
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

          {mode === "inclinado" ? (
            <NumInput
              label="θ (grados)"
              value={p.thetaDeg ?? ""}
              onChange={(v) => patch("thetaDeg", v)}
              step={1}
              min={0}
              max={89.9}
              disabled={linked}
            />
          ) : null}
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 12 }}>
          <div className="v2-card">
            <div className="v2-card-title">En m = {fmt(mObs, 4)} kg</div>
            <div>
              <strong>N</strong> = {fmt(NObs, 4)} N
            </div>
            <div className="muted" style={{ marginTop: 6 }}>
              {mode === "horizontal" ? "N = m·g" : "N = m·g·cos(θ)"}
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico principal: N(m) */}
      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">
          N(m) — fuerza normal {mode === "inclinado" ? `(θ = ${fmt(thetaDeg, 4)}°)` : "(horizontal)"}
        </div>

        <div style={{ width: "100%", minHeight: 320 }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={dataNm}>
              <ReferenceDot x={mObs} y={NObs} r={4} label="obs" />
              <CartesianGrid />
              <XAxis
                dataKey="m"
                label={{ value: "m (kg)", position: "insideBottomRight", offset: -4 }}
              />
              <YAxis
                label={{ value: "N (N)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(label) => `m = ${fmt(label, 4)} kg`}
              />
              <Legend />
              <Line dataKey="N" name="N" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Extra didáctico (solo en inclinado): N(theta) */}
      {mode === "inclinado" ? (
        <div className="v2-card" style={{ marginTop: 12 }}>
          <div className="v2-card-title">N(θ) — para m = {fmt(mObs, 4)} kg</div>

          <div style={{ width: "100%", minHeight: 320 }}>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={dataNtheta.map((d) => ({ ...d, thetaDeg: rad2deg(d.theta) }))}>
                <ReferenceDot x={thetaDeg} y={NObs} r={4} label="obs" />
                <CartesianGrid />
                <XAxis
                  dataKey="thetaDeg"
                  label={{ value: "θ (°)", position: "insideBottomRight", offset: -4 }}
                />
                <YAxis
                  label={{ value: "N (N)", angle: -90, position: "insideLeft" }}
                />
                <Tooltip
                  formatter={(value, name) => [fmt(value, 4), name]}
                  labelFormatter={(label) => `θ = ${fmt(label, 4)}°`}
                />
                <Legend />
                <Line dataKey="N" name="N" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : null}
    </div>
  );
}
