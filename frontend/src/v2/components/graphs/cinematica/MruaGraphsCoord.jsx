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
import { sampleMRUA } from "@/v2/engine/models/cinematica/mrua";

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

export default function MruaGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "x0", aliases: ["x_0"], default: toNum(params?.x0 ?? params?.x_0, 0) },
      { key: "v0", aliases: ["v_0"], default: toNum(params?.v0 ?? params?.v_0, 1) },
      { key: "a", aliases: ["aceleracion"], default: toNum(params?.a, 1) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 10) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 4) },
      { key: "showX", default: params?.showX ?? true },
      { key: "showV", default: params?.showV ?? true },
      { key: "showA", default: params?.showA ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const x0 = toNum(ep.x0, 0);
  const v0 = toNum(ep.v0, 1);
  const a = toNum(ep.a, 1);
  const tMax = clamp(toNum(ep.tMax, 10), 1, 120);
  const tObs = clamp(toNum(ep.tObs, tMax * 0.4), 0, tMax);
  const showX = !!ep.showX;
  const showV = !!ep.showV;
  const showA = !!ep.showA;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => sampleMRUA({ x0, v0, a, tMax, n: 260 }), [x0, v0, a, tMax]);

  const xObs = x0 + v0 * tObs + 0.5 * a * tObs * tObs;
  const vObs = v0 + a * tObs;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "MRUA (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"x(t)=x_0+v_0t+\\tfrac{1}{2}at^2,\\quad v(t)=v_0+at"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>x0 (m)</span>
              <input className="form-control" style={{ width: 90 }} value={x0} onChange={(e) => setValue("x0", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>v0 (m/s)</span>
              <input className="form-control" style={{ width: 90 }} value={v0} onChange={(e) => setValue("v0", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>a (m/s2)</span>
              <input className="form-control" style={{ width: 90 }} value={a} onChange={(e) => setValue("a", e.target.value)} />
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
              onClick={exp.resetToCalculator}
              style={{
                marginLeft: "auto",
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
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showX} onClick={() => setValue("showX", !showX)}>x(t)</Pill>
            <Pill active={showV} onClick={() => setValue("showV", !showV)}>v(t)</Pill>
            <Pill active={showA} onClick={() => setValue("showA", !showA)}>a(t)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              Para t_obs = <b>{fmt(tObs, 2)}</b> s: x = <b>{fmt(xObs, 3)}</b> m, v = <b>{fmt(vObs, 3)}</b> m/s, a = <b>{fmt(a, 3)}</b> m/s2.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Curvas cinematicas del MRUA</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showX ? <Line type="monotone" dataKey="x" name="x(t)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showV ? <Line type="monotone" dataKey="v" name="v(t)" stroke="#f97316" strokeWidth={2.6} dot={false} /> : null}
              {showA ? <Line type="monotone" dataKey="a" name="a(t)" stroke="#34d399" strokeWidth={2.4} dot={false} /> : null}
              {showPoint && showX ? <ReferenceDot x={tObs} y={xObs} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPoint && showV ? <ReferenceDot x={tObs} y={vObs} r={5} fill="#f97316" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

