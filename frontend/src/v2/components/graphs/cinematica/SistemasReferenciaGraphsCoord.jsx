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

export default function SistemasReferenciaGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "xA0", aliases: ["x0A"], default: toNum(params?.xA0 ?? params?.x0A, 0) },
      { key: "xB0", aliases: ["x0B"], default: toNum(params?.xB0 ?? params?.x0B, -10) },
      { key: "vA", aliases: ["va"], default: toNum(params?.vA ?? params?.va, 8) },
      { key: "vB", aliases: ["vb"], default: toNum(params?.vB ?? params?.vb, 3) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 12) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 4) },
      { key: "showA", default: params?.showA ?? true },
      { key: "showB", default: params?.showB ?? true },
      { key: "showRel", default: params?.showRel ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const xA0 = toNum(ep.xA0, 0);
  const xB0 = toNum(ep.xB0, -10);
  const vA = toNum(ep.vA, 8);
  const vB = toNum(ep.vB, 3);
  const tMax = clamp(toNum(ep.tMax, 12), 0.5, 120);
  const tObs = clamp(toNum(ep.tObs, tMax * 0.3), 0, tMax);

  const showA = !!ep.showA;
  const showB = !!ep.showB;
  const showRel = !!ep.showRel;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => {
    const out = [];
    const N = 260;
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tMax;
      const xA = xA0 + vA * t;
      const xB = xB0 + vB * t;
      out.push({ t, xA, xB, xRel: xA - xB });
    }
    return out;
  }, [xA0, xB0, vA, vB, tMax]);

  const xAObs = xA0 + vA * tObs;
  const xBObs = xB0 + vB * tObs;
  const xRelObs = xAObs - xBObs;
  const vRel = vA - vB;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Sistemas de referencia (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"x'_{A/B}=x_A-x_B,\\quad v_{A/B}=v_A-v_B"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>xA0 (m)</span><input className="form-control" style={{ width: 90 }} value={xA0} onChange={(e) => setValue("xA0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>xB0 (m)</span><input className="form-control" style={{ width: 90 }} value={xB0} onChange={(e) => setValue("xB0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>vA (m/s)</span><input className="form-control" style={{ width: 90 }} value={vA} onChange={(e) => setValue("vA", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>vB (m/s)</span><input className="form-control" style={{ width: 90 }} value={vB} onChange={(e) => setValue("vB", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_max</span><input className="form-control" style={{ width: 90 }} value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_obs</span><input className="form-control" style={{ width: 90 }} value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showA} onClick={() => setValue("showA", !showA)}>xA(t)</Pill>
            <Pill active={showB} onClick={() => setValue("showB", !showB)}>xB(t)</Pill>
            <Pill active={showRel} onClick={() => setValue("showRel", !showRel)}>xRel(t)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              t_obs = <b>{fmt(tObs, 2)}</b> s | xA = <b>{fmt(xAObs, 3)}</b> m | xB = <b>{fmt(xBObs, 3)}</b> m | xA/B = <b>{fmt(xRelObs, 3)}</b> m | vA/B = <b>{fmt(vRel, 3)}</b> m/s
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Posiciones en distintos marcos</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "x (m)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showA ? <Line type="monotone" dataKey="xA" name="xA(t)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showB ? <Line type="monotone" dataKey="xB" name="xB(t)" stroke="#34d399" strokeWidth={2.6} dot={false} /> : null}
              {showRel ? <Line type="monotone" dataKey="xRel" name="xA/B(t)" stroke="#f97316" strokeWidth={2.6} dot={false} /> : null}
              {showPoint && showA ? <ReferenceDot x={tObs} y={xAObs} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPoint && showB ? <ReferenceDot x={tObs} y={xBObs} r={5} fill="#34d399" stroke="none" /> : null}
              {showPoint && showRel ? <ReferenceDot x={tObs} y={xRelObs} r={5} fill="#f97316" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
