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

export default function EnergiaPotencialElasticaGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "k", default: toNum(params?.k, 200) },
      { key: "x", default: toNum(params?.x, 0.08) },
      { key: "xi", default: toNum(params?.xi, 0.02) },
      { key: "xf", default: toNum(params?.xf, 0.10) },
      { key: "showU", default: params?.showU ?? true },
      { key: "showRef", default: params?.showRef ?? true },
      { key: "showDelta", default: params?.showDelta ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const k = Math.max(0.001, toNum(ep.k, 200));
  const x = Math.abs(toNum(ep.x, 0.08));
  const xi = Math.abs(toNum(ep.xi, 0.02));
  const xf = Math.abs(toNum(ep.xf, 0.10));

  const showU = !!ep.showU;
  const showRef = !!ep.showRef;
  const showDelta = !!ep.showDelta;

  const Ue = 0.5 * k * x * x;
  const dUe = 0.5 * k * (xf * xf - xi * xi);
  const We = -dUe;

  const xmax = clamp(Math.max(x, xi, xf, 0.2), 0.1, 2);
  const data = useMemo(() => {
    const out = [];
    const N = 220;
    for (let i = 0; i <= N; i += 1) {
      const xx = (i / N) * xmax;
      out.push({ x: xx, Ue: 0.5 * k * xx * xx, F: k * xx });
    }
    return out;
  }, [k, xmax]);

  const setValue = (key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Energia potencial elastica (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"U_e=\\frac{1}{2}kx^2,\\quad \\Delta U_e=\\frac{k}{2}(x_f^2-x_i^2),\\quad W_e=-\\Delta U_e"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>k (N/m)</span><input className="form-control" style={{ width: 95 }} value={k} onChange={(e) => setValue("k", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>x (m)</span><input className="form-control" style={{ width: 90 }} value={x} onChange={(e) => setValue("x", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>xi (m)</span><input className="form-control" style={{ width: 90 }} value={xi} onChange={(e) => setValue("xi", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>xf (m)</span><input className="form-control" style={{ width: 90 }} value={xf} onChange={(e) => setValue("xf", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showU} onClick={() => setValue("showU", !showU)}>Ue(x)</Pill>
            <Pill active={showDelta} onClick={() => setValue("showDelta", !showDelta)}>DeltaUe y We</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              Ue(x) = <b>{fmt(Ue, 3)}</b> J | DeltaUe = <b>{fmt(dUe, 3)}</b> J | We = <b>{fmt(We, 3)}</b> J
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Crecimiento cuadratico Ue(x)</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="x" tickFormatter={(n) => fmt(n, 2)} label={{ value: "x (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `x = ${fmt(value, 3)} m`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine x={xi} stroke="#a78bfa" strokeDasharray="6 6" /> : null}
              {showRef ? <ReferenceLine x={xf} stroke="#eab308" strokeDasharray="6 6" /> : null}
              {showU ? <Line type="monotone" dataKey="Ue" name="Ue(x)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showU ? <Line type="monotone" dataKey="F" name="F(x)=kx" stroke="#34d399" strokeWidth={2.3} dot={false} /> : null}
              {showU ? <ReferenceDot x={x} y={Ue} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
