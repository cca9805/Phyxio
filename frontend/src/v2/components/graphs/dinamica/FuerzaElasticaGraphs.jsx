import React, { useMemo, useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceDot,
} from "recharts";

import { sampleFuerzaElastica } from "../../../engine/models/dinamica/fuerzaElastica";
import { fmt } from "../../../utils/graphFormat";

function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
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

export default function FuerzaElasticaGraphs({ params }) {
  const [linked, setLinked] = useState(true);

  // Parámetros "del gráfico"
  const [p, setP] = useState(() => ({
    k: 100,
    xMin: -0.2,
    xMax: 0.2,
    xObs: 0.1, // punto de observación
  }));

  // Sync desde calculadora (similar a PesoGraphs)
  useEffect(() => {
    if (!linked) return;

    const k = toNum(params?.k, 100);
    const x = toNum(params?.x, 0.1);

    // Rango automático razonable alrededor de x si existe
    const xMaxAuto = Number.isFinite(x) ? Math.max(0.1, Math.abs(x) * 2) : 0.2;

    setP((prev) => ({
      ...prev,
      k,
      xObs: Number.isFinite(x) ? x : prev.xObs,
      xMin: -xMaxAuto,
      xMax: xMaxAuto,
    }));
  }, [linked, params?.k, params?.x]);

  const patch = (key, val) => setP((prev) => ({ ...prev, [key]: val }));

  const k = toNum(p.k, 100);
  const xMin = toNum(p.xMin, -0.2);
  const xMax = Math.max(xMin, toNum(p.xMax, 0.2));

  const xObs = useMemo(() => {
    const raw = toNum(p.xObs, 0.1);
    if (!Number.isFinite(raw)) return 0;
    return clamp(raw, xMin, xMax);
  }, [p.xObs, xMin, xMax]);

  const data = useMemo(() => {
    return sampleFuerzaElastica({
      k: Number.isFinite(k) ? k : 0,
      xMin: Number.isFinite(xMin) ? xMin : -0.2,
      xMax: Number.isFinite(xMax) ? xMax : 0.2,
      n: 240,
    });
  }, [k, xMin, xMax]);

  const FObs = -k * xObs; // F = -k*x
  const EeObs = 0.5 * k * xObs * xObs; // Ee = 1/2*k*x²

  // Sanitiza xObs si rango cambia
  useEffect(() => {
    const raw = toNum(p.xObs, 0.1);
    if (!Number.isFinite(raw)) patch("xObs", 0);
    else if (raw < xMin) patch("xObs", xMin);
    else if (raw > xMax) patch("xObs", xMax);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xMin, xMax]);

  return (
    <div>
      <div className="v2-card">
        <div className="v2-card-title">Parámetros (Fuerza Elástica)</div>

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
                const kk = toNum(params?.k, 100);
                const xx = toNum(params?.x, 0.1);
                const xMaxAuto = Number.isFinite(xx) ? Math.max(0.1, Math.abs(xx) * 2) : 0.2;

                setP({
                  k: kk,
                  xMin: -xMaxAuto,
                  xMax: xMaxAuto,
                  xObs: Number.isFinite(xx) ? xx : 0.1,
                });
              }}
            >
              ↩️ Cargar desde calculadora
            </button>
          )}
        </div>

        <div className="v2-grid-fill-inputs">
          <NumInput
            label="k (N/m)"
            value={p.k ?? ""}
            onChange={(v) => patch("k", v)}
            step={1}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="x mínima (m)"
            value={p.xMin ?? ""}
            onChange={(v) => patch("xMin", v)}
            step={0.01}
            disabled={linked}
          />
          <NumInput
            label="x máxima (m)"
            value={p.xMax ?? ""}
            onChange={(v) => patch("xMax", v)}
            step={0.01}
            disabled={linked}
          />
          <NumInput
            label="x observación (m)"
            value={String(xObs)}
            onChange={(v) => patch("xObs", v)}
            step={0.01}
            disabled={false}
          />
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 12 }}>
          <div className="v2-card">
            <div className="v2-card-title">En x = {fmt(xObs, 4)} m</div>
            <div>
              <strong>F</strong> = {fmt(FObs, 4)} N
            </div>
            <div>
              <strong>Eₑ</strong> = {fmt(EeObs, 4)} J
            </div>
            <div className="muted" style={{ marginTop: 6 }}>
              F = -k·x, Eₑ = ½k·x²
            </div>
          </div>
        </div>
      </div>

      {/* F(x) */}
      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">F(x) — Fuerza elástica vs deformación</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Convención: <b>F = -k·x</b>. Si x&gt;0 (estiramiento), la fuerza es
          negativa (tira hacia el origen).
        </div>

        <div style={{ width: "100%", minHeight: 320 }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data}>
              <ReferenceDot x={xObs} y={FObs} r={4} label="obs" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="x"
                type="number"
                domain={["auto", "auto"]}
                label={{ value: "x (m)", position: "insideBottomRight", offset: -4 }}
              />
              <YAxis
                label={{ value: "F (N)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(label) => `x = ${fmt(label, 4)} m`}
              />
              <Legend />
              <Line dataKey="F" name="F = -k·x" dot={false} />
              <Line dataKey="Fmod" name="|F|" dot={false} stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ee(x) */}
      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">Eₑ(x) — Energía potencial elástica</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Se almacena energía al deformar el muelle: <b>Eₑ = ½·k·x²</b>.
        </div>

        <div style={{ width: "100%", minHeight: 320 }}>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={data}>
              <ReferenceDot x={xObs} y={EeObs} r={4} label="obs" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="x"
                type="number"
                domain={["auto", "auto"]}
                label={{ value: "x (m)", position: "insideBottomRight", offset: -4 }}
              />
              <YAxis
                label={{ value: "Eₑ (J)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(label) => `x = ${fmt(label, 4)} m`}
              />
              <Legend />
              <Area type="monotone" dataKey="Ee" name="Eₑ = ½k·x²" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
