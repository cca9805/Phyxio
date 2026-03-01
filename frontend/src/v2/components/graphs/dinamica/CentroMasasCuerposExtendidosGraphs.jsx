import React, { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

import { pickParam } from "../../../utils/pickParamGraphs";
import { fmt } from "../../../utils/graphFormat";
import { defaultParams, computeCM, seriesDensity } from "../../../engine/models/dinamica/centroMasasExtendidos";

function toNum(v, f) {
  const n = Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : f;
}

export default function CentroMasasCuerposExtendidosGraphs({ params }) {
  const [linked, setLinked] = useState(true);
  const [p, setP] = useState(() => defaultParams());

  useEffect(() => {
    if (!linked || !params) return;
    setP((prev) => ({
      ...prev,
      L: pickParam(params, ["L"], prev.L),
      alpha: pickParam(params, ["alpha"], prev.alpha),
    }));
  }, [linked, params]);

  const safe = useMemo(() => ({
    ...p,
    L: Math.max(0.1, toNum(p.L, 1)),
    rho0: Math.max(0.1, toNum(p.rho0, 1)),
    alpha: toNum(p.alpha, 0),
    n: Math.max(50, Math.round(toNum(p.n, 300))),
  }), [p]);

  const xcm = useMemo(() => computeCM(safe), [safe]);
  const data = useMemo(() => seriesDensity(safe), [safe]);

  return (
    <div className="v2-card" style={{ padding: 12 }}>
      <div className="v2-card-title">Centro de masas en barra continua</div>

      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button className={`btn btn-sm ${linked ? "btn-primary" : "btn-light"}`} onClick={() => setLinked(true)}>
          🔗 Seguir calculadora
        </button>
        <button className={`btn btn-sm ${!linked ? "btn-primary" : "btn-light"}`} onClick={() => setLinked(false)}>
          🧪 Experimento
        </button>
      </div>

      <div className="v2-grid-fill-inputs" style={{ marginTop: 10 }}>
        <div className="v2-card">
          <div className="v2-card-title">Longitud L (m)</div>
          <input className="form-control" disabled={linked} value={safe.L} onChange={e => setP(s => ({ ...s, L: e.target.value }))} />
        </div>

        <div className="v2-card">
          <div className="v2-card-title">Gradiente densidad α</div>
          <input className="form-control" disabled={linked} value={safe.alpha} onChange={e => setP(s => ({ ...s, alpha: e.target.value }))} />
        </div>
      </div>

      <div className="muted" style={{ marginTop: 8 }}>
        Centro de masas: <b>x_cm = {fmt(xcm, 5)} m</b>
      </div>

      <div style={{ width: "100%", height: 300, marginTop: 10 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="x" label={{ value: "x (m)", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "ρ(x)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Line type="monotone" dataKey="rho" dot={false} />
            <ReferenceLine x={xcm} stroke="red" strokeDasharray="4 4" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
