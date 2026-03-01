import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { sampleMRU } from "@/v2/engine/models/cinematica/mru";
import { resolveMruParams } from "./mruParamResolver";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "8px 10px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.14)",
        background: active ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.35)",
        color: "rgba(255,255,255,0.90)",
        fontWeight: 900,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default function MruGraphsCoord({ title, params }) {
  const resolved = useMemo(() => resolveMruParams(params || {}), [params]);

  const schema = useMemo(
    () => [
      { key: "x0", aliases: ["x_0"], default: resolved.x0 },
      { key: "v", aliases: ["velocidad"], default: resolved.v },
      { key: "tMax", aliases: ["tmax"], default: resolved.tMax },
      { key: "tObs", aliases: ["t"], default: resolved.tObs },
      { key: "showRef", default: params?.showRef ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
    ],
    [params, resolved]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const x0 = toNum(ep.x0, 0);
  const v = toNum(ep.v, 2);
  const tMax = clamp(toNum(ep.tMax, 10), 1, 120);
  const tObs = clamp(toNum(ep.tObs, tMax * 0.4), 0, tMax);
  const showRef = !!ep.showRef;
  const showPoint = !!ep.showPoint;

  const data = useMemo(() => sampleMRU({ x0, v, tMax, n: 220 }), [x0, v, tMax]);
  const xObs = x0 + v * tObs;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "MRU (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"x(t)=x_0+vt,\\quad v=\\text{cte},\\quad a=0"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>x0 (m)</span>
              <input className="form-control" style={{ width: 90 }} value={x0} onChange={(e) => setValue("x0", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>v (m/s)</span>
              <input className="form-control" style={{ width: 90 }} value={v} onChange={(e) => setValue("v", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>t_max (s)</span>
              <input className="form-control" style={{ width: 90 }} value={tMax} onChange={(e) => setValue("tMax", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>t_obs (s)</span>
              <input className="form-control" style={{ width: 90 }} value={tObs} onChange={(e) => setValue("tObs", e.target.value)} />
            </div>
            <button
              type="button"
              onClick={exp.startExperiment}
              style={{
                padding: "8px 10px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(99,102,241,0.25)",
                color: "rgba(255,255,255,0.92)",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Experimentar
            </button>
            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{
                padding: "8px 10px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.35)",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Seguir calculadora
            </button>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>
              Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b>
            </span>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 10, fontSize: 13, opacity: 0.9 }}>
          <span>x(t_obs) = <b>{fmt(xObs, 3)}</b> m</span>
          <span>dx = <b>{fmt(v * tObs, 3)}</b> m</span>
          <span>a = <b>0</b> m/s2</span>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Posicion vs tiempo</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "x (m)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value) => fmt(value, 4)} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              <Line type="monotone" dataKey="x" stroke="#60a5fa" strokeWidth={3} dot={false} />
              {showPoint ? <ReferenceDot x={tObs} y={xObs} r={6} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

