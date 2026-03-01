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

export default function EnergiaPotencialGravitatoriaGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "m", default: toNum(params?.m, 2) },
      { key: "g", default: toNum(params?.g, 9.81) },
      { key: "h", default: toNum(params?.h, 5) },
      { key: "hi", default: toNum(params?.hi, 2) },
      { key: "hf", default: toNum(params?.hf, 8) },
      { key: "showU", default: params?.showU ?? true },
      { key: "showRef", default: params?.showRef ?? true },
      { key: "showDelta", default: params?.showDelta ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m = Math.max(0.001, toNum(ep.m, 2));
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);
  const h = toNum(ep.h, 5);
  const hi = toNum(ep.hi, 2);
  const hf = toNum(ep.hf, 8);

  const showU = !!ep.showU;
  const showRef = !!ep.showRef;
  const showDelta = !!ep.showDelta;

  const Ug = m * g * h;
  const dUg = m * g * (hf - hi);
  const Wg = -dUg;

  const hmax = Math.max(10, h, hf, hi, 1);
  const data = useMemo(() => {
    const out = [];
    const N = 200;
    for (let i = 0; i <= N; i += 1) {
      const hh = (i / N) * hmax;
      out.push({ h: hh, Ug: m * g * hh });
    }
    return out;
  }, [m, g, hmax]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Energia potencial gravitatoria (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"U_g=mgh,\\quad \\Delta U_g=mg(h_f-h_i),\\quad W_g=-\\Delta U_g"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m (kg)</span><input className="form-control" style={{ width: 90 }} value={m} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>g (m/s2)</span><input className="form-control" style={{ width: 90 }} value={g} onChange={(e) => setValue("g", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>h (m)</span><input className="form-control" style={{ width: 90 }} value={h} onChange={(e) => setValue("h", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>hi (m)</span><input className="form-control" style={{ width: 90 }} value={hi} onChange={(e) => setValue("hi", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>hf (m)</span><input className="form-control" style={{ width: 90 }} value={hf} onChange={(e) => setValue("hf", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showU} onClick={() => setValue("showU", !showU)}>Ug(h)</Pill>
            <Pill active={showDelta} onClick={() => setValue("showDelta", !showDelta)}>DeltaUg y Wg</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              Ug(h) = <b>{fmt(Ug, 3)}</b> J | DeltaUg = <b>{fmt(dUg, 3)}</b> J | Wg = <b>{fmt(Wg, 3)}</b> J
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Crecimiento lineal de Ug con la altura</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="h" tickFormatter={(n) => fmt(n, 1)} label={{ value: "h (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Ug (J)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `h = ${fmt(value, 3)} m`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine x={hi} stroke="#a78bfa" strokeDasharray="6 6" /> : null}
              {showRef ? <ReferenceLine x={hf} stroke="#eab308" strokeDasharray="6 6" /> : null}
              {showU ? <Line type="monotone" dataKey="Ug" name="Ug(h)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showU ? <ReferenceDot x={h} y={Ug} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
