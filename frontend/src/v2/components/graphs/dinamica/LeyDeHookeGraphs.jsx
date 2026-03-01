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
import { pickParam } from "../../../utils/pickParamGraphs";
import { defaultParams, seriesFvsX, equilibriumX } from "../../../engine/models/dinamica/hooke";

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
        inputMode="decimal"
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

export default function LeyDeHookeGraphs({ params }) {
  const [linked, setLinked] = useState(true);
  const [p, setP] = useState(() => ({ ...defaultParams() }));

  // 🔗 linked: leer k, x, m, g desde calculadora (tolerante a ids)
  useEffect(() => {
    if (!linked) return;
    if (!params) return;

    const k = pickParam(params, ["k", "K", "constante_elastica", "rigidez"], p.k);
    const x = pickParam(params, ["x", "elongacion", "deformacion"], p.xObs);
    const m = pickParam(params, ["m", "masa"], p.m);
    const g = pickParam(params, ["g", "grav", "gravedad"], p.g);

    setP((prev) => ({
      ...prev,
      k,
      xObs: x,
      kObs: k,
      m,
      g,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linked, params]);

  const loadFromCalculator = () => {
    if (!params) return;
    setP((prev) => ({
      ...prev,
      k: pickParam(params, ["k", "K", "constante_elastica", "rigidez"], prev.k),
      xObs: pickParam(params, ["x", "elongacion", "deformacion"], prev.xObs),
      m: pickParam(params, ["m", "masa"], prev.m),
      g: pickParam(params, ["g", "grav", "gravedad"], prev.g),
    }));
  };

  const safe = useMemo(() => {
    const k = Math.max(0, toNum(p.k, 200));
    const xMin = toNum(p.xMin, -0.1);
    const xMax = toNum(p.xMax, 0.1);
    const n = clamp(Math.round(toNum(p.n, 240)), 50, 2000);

    const m = Math.max(0, toNum(p.m, 1));
    const g = Math.max(0, toNum(p.g, 9.81));

    const xObs = toNum(p.xObs, 0.05);

    return { ...p, k, xMin, xMax, n, m, g, xObs };
  }, [p]);

  const data = useMemo(() => seriesFvsX(safe), [safe]);
  const xEq = useMemo(() => equilibriumX({ m: safe.m, g: safe.g, k: safe.k }), [safe.m, safe.g, safe.k]);

  const FxObs = -safe.k * safe.xObs;
  const FObs = Math.abs(FxObs);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Ley de Hooke: F(x)</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          <button type="button" className={`btn btn-sm ${linked ? "btn-primary" : "btn-light"}`} onClick={() => setLinked(true)}>
            🔗 Seguir calculadora
          </button>
          <button type="button" className={`btn btn-sm ${!linked ? "btn-primary" : "btn-light"}`} onClick={() => setLinked(false)}>
            🧪 Modo experimento
          </button>
          {!linked ? (
            <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
              ↩️ Cargar desde calculadora
            </button>
          ) : null}
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 10 }}>
          <NumInput label="k (N/m)" value={safe.k} step={1} min={0} disabled={linked} onChange={(v) => setP((s) => ({ ...s, k: toNum(v, s.k), kObs: toNum(v, s.kObs) }))} />
          <NumInput label="x mín (m)" value={safe.xMin} step={0.01} disabled={false} onChange={(v) => setP((s) => ({ ...s, xMin: toNum(v, s.xMin) }))} />
          <NumInput label="x máx (m)" value={safe.xMax} step={0.01} disabled={false} onChange={(v) => setP((s) => ({ ...s, xMax: toNum(v, s.xMax) }))} />
          <NumInput label="x marcador (m)" value={safe.xObs} step={0.01} disabled={linked} onChange={(v) => setP((s) => ({ ...s, xObs: toNum(v, s.xObs) }))} />
        </div>

        <div className="muted" style={{ marginTop: 8, fontSize: 13 }}>
          En x marcador: Fx = {fmt(FxObs, 4)} N ·· |F| = {fmt(FObs, 4)} N
        </div>

        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid />
              <XAxis dataKey="x" type="number" domain={["auto", "auto"]} label={{ value: "x (m)", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "F (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(v, name) => [fmt(v, 6), name]} labelFormatter={(v) => `x = ${fmt(v, 4)} m`} />
              <Legend />
              <Line type="monotone" dataKey="Fx" dot={false} name="Fx = -k·x" />
              <Line type="monotone" dataKey="F" dot={false} name="|F|" />
              <ReferenceDot x={safe.xObs} y={FxObs} r={4} label="marcador" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Equilibrio vertical: kx = mg</div>

        <div className="v2-grid-fill-inputs">
          <NumInput label="m (kg)" value={safe.m} step={0.1} min={0} disabled={linked} onChange={(v) => setP((s) => ({ ...s, m: toNum(v, s.m) }))} />
          <NumInput label="g (m/s²)" value={safe.g} step={0.01} min={0} disabled={linked} onChange={(v) => setP((s) => ({ ...s, g: toNum(v, s.g) }))} />
        </div>

        <div className="muted" style={{ marginTop: 8 }}>
          Elongación de equilibrio:
          <b> x = mg/k = {Number.isFinite(xEq) ? fmt(xEq, 6) : "—"} m</b>
        </div>
      </div>
    </div>
  );
}
