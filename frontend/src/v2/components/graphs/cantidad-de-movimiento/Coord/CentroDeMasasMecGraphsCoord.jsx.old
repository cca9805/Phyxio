import React, { useMemo } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from "recharts";
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

export default function CentroDeMasasMecGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "m1", default: toNum(params?.m1, 2) },
      { key: "m2", default: toNum(params?.m2, 5) },
      { key: "x1", default: toNum(params?.x1, -3) },
      { key: "x2", default: toNum(params?.x2, 2) },
      { key: "v1", default: toNum(params?.v1, 1.5) },
      { key: "v2", default: toNum(params?.v2, -0.6) },
      { key: "tMax", default: toNum(params?.tMax, 10) },
      { key: "showX1", default: params?.showX1 ?? true },
      { key: "showX2", default: params?.showX2 ?? true },
      { key: "showXcm", default: params?.showXcm ?? true },
      { key: "showZero", default: params?.showZero ?? true },
    ],
    [params]
  );
  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m1 = Math.max(0.001, toNum(ep.m1, 2));
  const m2 = Math.max(0.001, toNum(ep.m2, 5));
  const x1 = toNum(ep.x1, -3);
  const x2 = toNum(ep.x2, 2);
  const v1 = toNum(ep.v1, 1.5);
  const v2 = toNum(ep.v2, -0.6);
  const tMax = Math.max(1, toNum(ep.tMax, 10));
  const showX1 = !!ep.showX1;
  const showX2 = !!ep.showX2;
  const showXcm = !!ep.showXcm;
  const showZero = !!ep.showZero;

  const M = m1 + m2;

  const data = useMemo(() => {
    const out = [];
    const nPts = 220;
    for (let i = 0; i <= nPts; i += 1) {
      const t = (i / nPts) * tMax;
      const x1t = x1 + v1 * t;
      const x2t = x2 + v2 * t;
      const xcm = (m1 * x1t + m2 * x2t) / M;
      out.push({ t, x1: x1t, x2: x2t, xcm });
    }
    return out;
  }, [x1, x2, v1, v2, m1, m2, M, tMax]);

  const Vcm = (m1 * v1 + m2 * v2) / M;
  const setValue = (k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Centro de masas - Coord"}</div>
        <div className="muted" style={{ marginTop: 6 }}><MathInline latex={"x_{cm}=\\frac{\\sum m_ix_i}{\\sum m_i},\\;V_{cm}=\\frac{\\sum m_iv_i}{\\sum m_i}"} /></div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            {[
              ["m1", m1],
              ["m2", m2],
              ["x1", x1],
              ["x2", x2],
              ["v1", v1],
              ["v2", v2],
              ["tMax", tMax],
            ].map(([k, val]) => (
              <div key={k} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>{k}</span>
                <input className="form-control" style={{ width: 80 }} value={val} onChange={(e) => setValue(k, e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showX1} onClick={() => setValue("showX1", !showX1)}>x1(t)</Pill>
            <Pill active={showX2} onClick={() => setValue("showX2", !showX2)}>x2(t)</Pill>
            <Pill active={showXcm} onClick={() => setValue("showXcm", !showXcm)}>xcm(t)</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ marginTop: 10, padding: 10, fontSize: 13 }}>
            Vcm = <b>{fmt(Vcm, 4)}</b> m/s
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Posicion de particulas y centro de masas</div>
        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 2)} label={{ value: "x (m)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(v, n) => [fmt(v, 4), n]} />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showX1 ? <Line type="monotone" dataKey="x1" name="x1(t)" stroke="#60a5fa" strokeWidth={2.8} dot={false} /> : null}
              {showX2 ? <Line type="monotone" dataKey="x2" name="x2(t)" stroke="#34d399" strokeWidth={2.8} dot={false} /> : null}
              {showXcm ? <Line type="monotone" dataKey="xcm" name="xcm(t)" stroke="#f59e0b" strokeWidth={3.2} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
