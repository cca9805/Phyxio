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

export default function ConservacionMomentoAngularGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "Ii", default: toNum(params?.Ii, 3.5) },
      { key: "omegai", default: toNum(params?.omegai, toNum(params?.wi, 6.0)) },
      { key: "If", default: toNum(params?.If, 2.0) },
      { key: "tau", default: toNum(params?.tau, toNum(params?.tauExt, 0.0)) },
      { key: "DeltaT", default: toNum(params?.DeltaT, toNum(params?.dt, 1.2)) },
      { key: "showL", default: params?.showL ?? true },
      { key: "showW", default: params?.showW ?? true },
      { key: "showI", default: params?.showI ?? true },
      { key: "showZero", default: params?.showZero ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const Ii = Math.max(0.001, toNum(ep.Ii, 3.5));
  const omegai = toNum(ep.omegai, toNum(ep.wi, 6.0));
  const If = Math.max(0.001, toNum(ep.If, 2.0));
  const tau = toNum(ep.tau, toNum(ep.tauExt, 0.0));
  const DeltaT = Math.max(0.001, toNum(ep.DeltaT, toNum(ep.dt, 1.2)));

  const showL = !!ep.showL;
  const showW = !!ep.showW;
  const showI = !!ep.showI;
  const showZero = !!ep.showZero;

  const Li = Ii * omegai;
  const Lf = Li + tau * DeltaT;
  const omegaf = Lf / If;

  const data = [
    { s: 0, L: Li, w: omegai, I: Ii },
    { s: 1, L: Lf, w: omegaf, I: If },
  ];

  const setValue = (k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Conservacion de momento angular - Coord"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\sum\\tau_{ext}=0\\Rightarrow L_i=L_f"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(59,130,246,0.2)",
              background: "rgba(59,130,246,0.08)",
            }}
          >
            {[
              ["Ii", Ii],
              ["omegai", omegai],
              ["If", If],
              ["tau", tau],
              ["DeltaT", DeltaT],
            ].map(([k, val]) => (
              <div key={k} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>{k}</span>
                <input className="form-control" style={{ width: 90 }} value={val} onChange={(e) => setValue(k, e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showL} onClick={() => setValue("showL", !showL)}>L</Pill>
            <Pill active={showW} onClick={() => setValue("showW", !showW)}>omega</Pill>
            <Pill active={showI} onClick={() => setValue("showI", !showI)}>I</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ marginTop: 10, padding: 10, fontSize: 13 }}>
            Li = <b>{fmt(Li, 4)}</b> | Lf = <b>{fmt(Lf, 4)}</b> | omegaf = <b>{fmt(omegaf, 4)}</b>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Comparacion inicial/final</div>
        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="s" tickFormatter={(n) => (n === 0 ? "Inicial" : "Final")} />
              <YAxis tickFormatter={(n) => fmt(n, 2)} />
              <Tooltip formatter={(v, n) => [fmt(v, 4), n]} />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showL ? <Line type="linear" dataKey="L" stroke="#60a5fa" name="L" strokeWidth={3.2} dot /> : null}
              {showW ? <Line type="linear" dataKey="w" stroke="#34d399" name="omega" strokeWidth={2.8} dot /> : null}
              {showI ? <Line type="linear" dataKey="I" stroke="#f59e0b" name="I" strokeWidth={2.8} dot /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
