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

export default function TrabajoGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "F", aliases: ["f"], default: toNum(params?.F ?? params?.f, 30) },
      { key: "d", aliases: ["x"], default: toNum(params?.d ?? params?.x, 5) },
      { key: "theta", aliases: ["angulo"], default: toNum(params?.theta ?? params?.angulo, 30) },
      { key: "showW", default: params?.showW ?? true },
      { key: "showCos", default: params?.showCos ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const F = Math.max(0, toNum(ep.F, 30));
  const d = Math.max(0, toNum(ep.d, 5));
  const theta = clamp(toNum(ep.theta, 30), 0, 180);

  const showW = !!ep.showW;
  const showCos = !!ep.showCos;
  const showRef = !!ep.showRef;

  const rad = (theta * Math.PI) / 180;
  const W = F * d * Math.cos(rad);

  const curve = useMemo(() => {
    const out = [];
    for (let t = 0; t <= 180; t += 2) {
      const tr = (t * Math.PI) / 180;
      out.push({ theta: t, W: F * d * Math.cos(tr), cos: Math.cos(tr) });
    }
    return out;
  }, [F, d]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Trabajo (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"W=Fd\\cos\\theta"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>F (N)</span><input className="form-control" style={{ width: 90 }} value={F} onChange={(e) => setValue("F", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>d (m)</span><input className="form-control" style={{ width: 90 }} value={d} onChange={(e) => setValue("d", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta (deg)</span><input className="form-control" style={{ width: 90 }} value={theta} onChange={(e) => setValue("theta", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showW} onClick={() => setValue("showW", !showW)}>W(theta)</Pill>
            <Pill active={showCos} onClick={() => setValue("showCos", !showCos)}>cos(theta)</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              F = <b>{fmt(F, 2)}</b> N | d = <b>{fmt(d, 2)}</b> m | theta = <b>{fmt(theta, 1)}</b> deg | cos(theta) = <b>{fmt(Math.cos(rad), 4)}</b> | W = <b>{fmt(W, 3)}</b> J
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Trabajo en funcion del angulo</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={curve} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="theta" tickFormatter={(n) => fmt(n, 0)} label={{ value: "theta (deg)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `theta = ${fmt(value, 1)} deg`} />
              {showRef ? <ReferenceLine x={90} stroke="rgba(255,255,255,0.30)" strokeDasharray="6 6" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showW ? <Line type="monotone" dataKey="W" name="W(theta)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showCos ? <Line type="monotone" dataKey="cos" name="cos(theta)" stroke="#34d399" strokeWidth={2.5} dot={false} /> : null}
              {showW ? <ReferenceDot x={theta} y={W} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
