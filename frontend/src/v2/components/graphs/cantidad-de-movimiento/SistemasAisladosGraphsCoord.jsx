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
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
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

export default function SistemasAisladosGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "m1", default: toNum(params?.m1, 2) },
      { key: "m2", default: toNum(params?.m2, 3) },
      { key: "v1i", default: toNum(params?.v1i, 4) },
      { key: "v2i", default: toNum(params?.v2i, -2) },
      { key: "v1f", default: toNum(params?.v1f, 1) },
      { key: "showP1", default: params?.showP1 ?? true },
      { key: "showP2", default: params?.showP2 ?? true },
      { key: "showPTot", default: params?.showPTot ?? true },
      { key: "showZero", default: params?.showZero ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m1 = Math.max(0.001, toNum(ep.m1, 2));
  const m2 = Math.max(0.001, toNum(ep.m2, 3));
  const v1i = toNum(ep.v1i, 4);
  const v2i = toNum(ep.v2i, -2);
  const v1f = toNum(ep.v1f, 1);
  const showP1 = !!ep.showP1;
  const showP2 = !!ep.showP2;
  const showPTot = !!ep.showPTot;
  const showZero = !!ep.showZero;

  const pTotI = m1 * v1i + m2 * v2i;
  const v2f = (pTotI - m1 * v1f) / m2;
  const pTotF = m1 * v1f + m2 * v2f;

  const data = useMemo(() => {
    return [
      { s: 0, p1: m1 * v1i, p2: m2 * v2i, pTot: pTotI },
      { s: 1, p1: m1 * v1f, p2: m2 * v2f, pTot: pTotF },
    ];
  }, [m1, m2, v1i, v2i, v1f, v2f, pTotI, pTotF]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Sistemas aislados (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\sum \\vec p_i=\\sum \\vec p_f\\;(\\vec F_{ext}\\approx 0)"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m1</span><input className="form-control" style={{ width: 80 }} value={m1} onChange={(e) => setValue("m1", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m2</span><input className="form-control" style={{ width: 80 }} value={m2} onChange={(e) => setValue("m2", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v1i</span><input className="form-control" style={{ width: 80 }} value={v1i} onChange={(e) => setValue("v1i", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v2i</span><input className="form-control" style={{ width: 80 }} value={v2i} onChange={(e) => setValue("v2i", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v1f</span><input className="form-control" style={{ width: 80 }} value={v1f} onChange={(e) => setValue("v1f", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showP1} onClick={() => setValue("showP1", !showP1)}>p1</Pill>
            <Pill active={showP2} onClick={() => setValue("showP2", !showP2)}>p2</Pill>
            <Pill active={showPTot} onClick={() => setValue("showPTot", !showPTot)}>p_total</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            p_total,i=<b>{fmt(pTotI, 4)}</b> | p_total,f=<b>{fmt(pTotF, 4)}</b> | v2f=<b>{fmt(v2f, 4)}</b>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Comparacion inicial/final de momento</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="s" tickFormatter={(n) => (n === 0 ? "Inicial" : "Final")} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Momento (kg*m/s)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showP1 ? <Line type="linear" dataKey="p1" name="p1" stroke="#60a5fa" strokeWidth={2.8} dot /> : null}
              {showP2 ? <Line type="linear" dataKey="p2" name="p2" stroke="#34d399" strokeWidth={2.8} dot /> : null}
              {showPTot ? <Line type="linear" dataKey="pTot" name="p_total" stroke="#f59e0b" strokeWidth={3.2} dot /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
