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
  ScatterChart,
  Scatter,
  ZAxis,
  ReferenceDot,
} from "recharts";

import { fmt } from "../../../utils/graphFormat";
import { pickParam } from "../../../utils/pickParamGraphs";
import {
  defaultParams,
  xcm2,
  xcm3,
  ycm3,
  seriesXcmVsX2,
} from "../../../engine/models/dinamica/centroMasasDiscreto";

function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
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

export default function CentroMasasDiscretosGraphs({ params }) {
  const [linked, setLinked] = useState(true);
  const [p, setP] = useState(() => ({ ...defaultParams() }));

  // 🔗 enlazar con calculadora (tolerante a ids)
  useEffect(() => {
    if (!linked || !params) return;

    setP((prev) => ({
      ...prev,
      m1: pickParam(params, ["m1", "m_1", "m"], prev.m1),
      x1: pickParam(params, ["x1", "x_1"], prev.x1),
      m2: pickParam(params, ["m2", "m_2"], prev.m2),
      x2: pickParam(params, ["x2", "x_2"], prev.x2),

      m3: pickParam(params, ["m3", "m_3"], prev.m3),
      x3: pickParam(params, ["x3", "x_3"], prev.x3),
      y1: pickParam(params, ["y1", "y_1"], prev.y1),
      y2: pickParam(params, ["y2", "y_2"], prev.y2),
      y3: pickParam(params, ["y3", "y_3"], prev.y3),
    }));
  }, [linked, params]);

  const loadFromCalculator = () => {
    if (!params) return;
    setP((prev) => ({
      ...prev,
      m1: pickParam(params, ["m1", "m_1", "m"], prev.m1),
      x1: pickParam(params, ["x1", "x_1"], prev.x1),
      m2: pickParam(params, ["m2", "m_2"], prev.m2),
      x2: pickParam(params, ["x2", "x_2"], prev.x2),
      m3: pickParam(params, ["m3", "m_3"], prev.m3),
      x3: pickParam(params, ["x3", "x_3"], prev.x3),
      y1: pickParam(params, ["y1", "y_1"], prev.y1),
      y2: pickParam(params, ["y2", "y_2"], prev.y2),
      y3: pickParam(params, ["y3", "y_3"], prev.y3),
    }));
  };

  const safe = useMemo(() => {
    const m1 = Math.max(0, toNum(p.m1, 2));
    const x1 = toNum(p.x1, 0);
    const m2 = Math.max(0, toNum(p.m2, 6));
    const x2 = toNum(p.x2, 4);

    const m3 = Math.max(0, toNum(p.m3, 3));
    const x3 = toNum(p.x3, 2);
    const y1 = toNum(p.y1, 0);
    const y2 = toNum(p.y2, 2);
    const y3 = toNum(p.y3, 1);

    return { ...p, m1, x1, m2, x2, m3, x3, y1, y2, y3 };
  }, [p]);

  const xcm_2 = useMemo(() => xcm2(safe), [safe]);
  const xcm_3 = useMemo(() => xcm3(safe), [safe]);
  const ycm_3 = useMemo(() => ycm3(safe), [safe]);

  // gráfico 1: x_cm vs x2 (variando la posición de la masa 2)
  const curve = useMemo(
    () =>
      seriesXcmVsX2({
        m1: safe.m1,
        x1: safe.x1,
        m2: safe.m2,
        x2Min: Math.min(safe.x1, safe.x2) - 5,
        x2Max: Math.max(safe.x1, safe.x2) + 5,
        n: 200,
      }),
    [safe.m1, safe.x1, safe.m2, safe.x2]
  );

  const points2D = useMemo(() => {
    return [
      { name: "1", x: safe.x1, y: safe.y1, m: safe.m1 },
      { name: "2", x: safe.x2, y: safe.y2, m: safe.m2 },
      { name: "3", x: safe.x3, y: safe.y3, m: safe.m3 },
      { name: "CM", x: xcm_3, y: ycm_3, m: safe.m1 + safe.m2 + safe.m3 },
    ].filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
  }, [safe, xcm_3, ycm_3]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {/* CARD CONTROLES */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Centro de masas (discreto)</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
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
          {!linked ? (
            <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
              ↩️ Cargar desde calculadora
            </button>
          ) : null}
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 10 }}>
          <NumInput label="m1 (kg)" value={safe.m1} disabled={linked} step={0.1} min={0} onChange={(v) => setP((s) => ({ ...s, m1: v }))} />
          <NumInput label="x1 (m)" value={safe.x1} disabled={linked} step={0.1} onChange={(v) => setP((s) => ({ ...s, x1: v }))} />
          <NumInput label="m2 (kg)" value={safe.m2} disabled={linked} step={0.1} min={0} onChange={(v) => setP((s) => ({ ...s, m2: v }))} />
          <NumInput label="x2 (m)" value={safe.x2} disabled={linked} step={0.1} onChange={(v) => setP((s) => ({ ...s, x2: v }))} />
        </div>

        <div className="muted" style={{ marginTop: 8 }}>
          1D (2 masas): <b>x_cm = {Number.isFinite(xcm_2) ? fmt(xcm_2, 6) : "—"} m</b>
          <br />
          2D (3 masas): <b>(x_cm, y_cm) = ({Number.isFinite(xcm_3) ? fmt(xcm_3, 6) : "—"}, {Number.isFinite(ycm_3) ? fmt(ycm_3, 6) : "—"}) m</b>
        </div>
      </div>

      {/* GRAFICO 1 */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">1D: cómo cambia x_cm al mover x2</div>

        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={curve}>
              <CartesianGrid />
              <XAxis dataKey="x2" type="number" label={{ value: "x2 (m)", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "x_cm (m)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(v, name) => [fmt(v, 6), name]} labelFormatter={(v) => `x2 = ${fmt(v, 4)} m`} />
              <Legend />
              <Line type="monotone" dataKey="xcm" dot={false} name="x_cm" />
              <ReferenceDot x={safe.x2} y={xcm_2} r={4} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* GRAFICO 2 */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">2D: posiciones y centro de masas</div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 10 }}>
          <NumInput label="y1 (m)" value={safe.y1} disabled={linked} step={0.1} onChange={(v) => setP((s) => ({ ...s, y1: v }))} />
          <NumInput label="y2 (m)" value={safe.y2} disabled={linked} step={0.1} onChange={(v) => setP((s) => ({ ...s, y2: v }))} />
          <NumInput label="m3 (kg)" value={safe.m3} disabled={linked} step={0.1} min={0} onChange={(v) => setP((s) => ({ ...s, m3: v }))} />
          <NumInput label="(x3, y3) (m)" value={`${safe.x3}, ${safe.y3}`} disabled={true} />
        </div>

        <div className="muted" style={{ marginTop: 8 }}>
          (Puedes editar x3/y3 en el estado si quieres exponerlos en inputs; ahora están fijos a x3/y3 del estado.)
        </div>

        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="x" label={{ value: "x (m)", position: "insideBottom", offset: -5 }} />
              <YAxis type="number" dataKey="y" name="y" label={{ value: "y (m)", angle: -90, position: "insideLeft" }} />
              <ZAxis type="number" dataKey="m" range={[60, 200]} name="m" />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} formatter={(v) => fmt(v, 6)} />
              <Scatter name="Partículas/CM" data={points2D} />
              <ReferenceDot x={xcm_3} y={ycm_3} r={6} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
