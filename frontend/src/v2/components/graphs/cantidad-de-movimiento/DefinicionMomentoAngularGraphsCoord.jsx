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

export default function DefinicionMomentoAngularGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "m", default: toNum(params?.m, 2.0) },
      { key: "v", default: toNum(params?.v, 3.0) },
      { key: "r", default: toNum(params?.r, 0.40) },
      { key: "theta", default: toNum(params?.theta, 90) },
      { key: "I", default: toNum(params?.I, 0.25) },
      { key: "omega", default: toNum(params?.omega, 12) },
      { key: "showParticula", default: params?.showParticula ?? true },
      { key: "showEjeFijo", default: params?.showEjeFijo ?? true },
      { key: "showZero", default: params?.showZero ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m = Math.max(0.001, toNum(ep.m, 2.0));
  const v = Math.max(0, toNum(ep.v, 3.0));
  const r = Math.max(0, toNum(ep.r, 0.40));
  const theta = toNum(ep.theta, 90);
  const I = Math.max(0.000001, toNum(ep.I, 0.25));
  const omega = toNum(ep.omega, 12);

  const showParticula = !!ep.showParticula;
  const showEjeFijo = !!ep.showEjeFijo;
  const showZero = !!ep.showZero;

  const p = m * v;
  const thetaRad = (theta * Math.PI) / 180;
  const Lpart = r * p * Math.sin(thetaRad);
  const Leje = I * omega;

  const data = [
    { s: 0, Lp: Lpart, Le: Leje },
    { s: 1, Lp: Lpart, Le: Leje },
  ];

  const setValue = (k, v2) => {
    exp.startExperiment();
    exp.setValue(k, v2);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Definicion de momento angular - Coord"}</div>
        <div className="muted" style={{ marginTop: 6, display: "grid", gap: 4 }}>
          <MathInline latex={"L=r\\,p\\,\\sin\\theta"} />
          <MathInline latex={"L=I\\omega"} />
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
              ["m", m],
              ["v", v],
              ["r", r],
              ["theta", theta],
              ["I", I],
              ["omega", omega],
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
            <Pill active={showParticula} onClick={() => setValue("showParticula", !showParticula)}>L particula</Pill>
            <Pill active={showEjeFijo} onClick={() => setValue("showEjeFijo", !showEjeFijo)}>L eje fijo</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ marginTop: 10, padding: 10, fontSize: 13 }}>
            p = <b>{fmt(p, 4)}</b> | L_part = <b>{fmt(Lpart, 4)}</b> | L_eje = <b>{fmt(Leje, 4)}</b>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Comparacion de calculo de L</div>
        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="s" tickFormatter={(n) => (n === 0 ? "Particula" : "Eje fijo")} />
              <YAxis tickFormatter={(n) => fmt(n, 2)} />
              <Tooltip formatter={(v, n) => [fmt(v, 4), n]} />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showParticula ? <Line type="linear" dataKey="Lp" stroke="#60a5fa" name="L (r p sin theta)" strokeWidth={3.2} dot={false} /> : null}
              {showEjeFijo ? <Line type="linear" dataKey="Le" stroke="#34d399" name="L (I omega)" strokeWidth={2.8} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
