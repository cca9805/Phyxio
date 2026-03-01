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
import { makeSeries, defaultParams } from "../../../engine/models/dinamica/pesoContextos";

function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
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

const G_PRESETS = [
  { id: "tierra", name: "Tierra", g: 9.81 },
  { id: "luna", name: "Luna", g: 1.62 },
  { id: "marte", name: "Marte", g: 3.71 },
  { id: "jupiter", name: "Júpiter", g: 24.79 },
  { id: "custom", name: "Personalizado", g: null },
];

export default function PesoContextosGraphs({ params }) {
  const [linked, setLinked] = useState(true);
  const [p, setP] = useState(() => ({ ...defaultParams() }));
  const [gPresetId, setGPresetId] = useState("tierra");

  // Sync desde calculadora (linked)
  useEffect(() => {
    if (!linked) return;
    if (!params) return;

    const m = toNum(params?.m, p.m);
    const g = toNum(params?.g, p.g);
    const tMax = toNum(params?.tMax, p.tMax);

    setP((prev) => ({ ...prev, m, g, tMax }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linked, params]);

  const loadFromCalculator = () => {
    if (!params) return;
    setP((prev) => ({
      ...prev,
      m: toNum(params?.m, prev.m),
      g: toNum(params?.g, prev.g),
      tMax: toNum(params?.tMax, prev.tMax),
      tObs: 0,
    }));
  };

  const safeP = useMemo(() => {
    const tMax = Math.max(0.1, toNum(p.tMax, 6));
    const tObs = Math.min(Math.max(0, toNum(p.tObs, 2)), tMax);
    const m = Math.max(1e-9, toNum(p.m, 1));
    const g = toNum(p.g, 9.81);
    return { ...p, tMax, tObs, m, g };
  }, [p]);

  const data = useMemo(() => makeSeries(safeP), [safeP]);

  const closest = useMemo(() => {
    if (!data?.length) return null;
    const tObs = safeP.tObs ?? 0;
    return data.reduce((best, d) =>
      Math.abs(d.t - tObs) < Math.abs(best.t - tObs) ? d : best
    );
  }, [data, safeP.tObs]);

  const Pnow = safeP.m * safeP.g;

  const handlePresetChange = (presetId) => {
    setGPresetId(presetId);
    const preset = G_PRESETS.find((x) => x.id === presetId);
    if (!preset) return;

    if (preset.g == null) return; // custom
    setP((prev) => ({ ...prev, g: preset.g }));
  };

  return (
    <div>
      <div className="v2-card">
        <div className="v2-card-title">Parámetros (Peso en contextos)</div>

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
          {!linked ? (
            <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
              ↩️ Cargar desde calculadora
            </button>
          ) : null}
        </div>

        <div style={{ display: "grid", gap: 10 }}>
          <div className="v2-card">
            <div className="v2-card-title">Contexto (preset de gravedad)</div>
            <select
              className="form-select"
              value={gPresetId}
              onChange={(e) => handlePresetChange(e.target.value)}
              disabled={linked}
            >
              {G_PRESETS.map((x) => (
                <option key={x.id} value={x.id}>
                  {x.g == null ? x.name : `${x.name} (${x.g} m/s²)`}
                </option>
              ))}
            </select>
            <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>
              Consejo: usa "Personalizado" para escribir tu propio valor de g.
            </div>
          </div>

          <div className="v2-grid-fill-inputs">
            <NumInput
              label="m (kg)"
              value={safeP.m}
              onChange={(v) => setP((s) => ({ ...s, m: toNum(v, s.m) }))}
              step={0.1}
              min={0.000001}
              disabled={linked}
            />
            <NumInput
              label="g (m/s²)"
              value={safeP.g}
              onChange={(v) => {
                setGPresetId("custom");
                setP((s) => ({ ...s, g: toNum(v, s.g) }));
              }}
              step={0.01}
              disabled={linked}
            />
            <NumInput
              label="tMax (s)"
              value={safeP.tMax}
              onChange={(v) => setP((s) => ({ ...s, tMax: toNum(v, s.tMax) }))}
              step={0.5}
              min={0.1}
              disabled={linked}
            />
            <NumInput
              label="tObs (s)"
              value={safeP.tObs}
              onChange={(v) => setP((s) => ({ ...s, tObs: toNum(v, s.tObs) }))}
              step={0.1}
              min={0}
              disabled={false}
            />
          </div>

          <div className="muted" style={{ marginTop: 4, fontSize: 13 }}>
            Peso: P = m·g = {fmt(Pnow, 4)} N
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">P(t) en el contexto elegido (constante)</div>
        <div style={{ width: "100%", minHeight: 320 }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data}>
              <CartesianGrid />
              <XAxis dataKey="t" />
              <YAxis />
              <Tooltip
                formatter={(v, n) => [fmt(v, 4), n]}
                labelFormatter={(l) => `t=${fmt(l, 3)} s`}
              />
              <Legend />
              <Line dataKey="P" name="P (N)" />
              {closest ? <ReferenceDot x={closest.t} y={closest.P} r={4} label="t obs" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">Comparativa rápida (presets)</div>
        <div className="muted" style={{ marginBottom: 8 }}>
          Misma masa, distinto g: cambia el peso.
        </div>

        <div className="v2-grid-fill-inputs">
          {G_PRESETS.filter((x) => x.g != null).map((x) => {
            const Px = safeP.m * x.g;
            return (
              <div key={x.id} className="v2-card">
                <div className="v2-card-title">{x.name}</div>
                <div className="muted">g = {fmt(x.g, 4)} m/s²</div>
                <div style={{ fontWeight: 800, marginTop: 6 }}>P = {fmt(Px, 4)} N</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
