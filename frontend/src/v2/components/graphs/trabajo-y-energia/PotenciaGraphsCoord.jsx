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

export default function PotenciaGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "W", aliases: ["trabajo"], default: toNum(params?.W ?? params?.trabajo, 1200) },
      { key: "t", aliases: ["tiempo"], default: toNum(params?.t ?? params?.tiempo, 6) },
      { key: "F", aliases: ["f"], default: toNum(params?.F ?? params?.f, 180) },
      { key: "v", default: toNum(params?.v, 3) },
      { key: "theta", aliases: ["angulo"], default: toNum(params?.theta ?? params?.angulo, 0) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 10) },
      { key: "showP", default: params?.showP ?? true },
      { key: "showE", default: params?.showE ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const W = toNum(ep.W, 1200);
  const t = Math.max(0.001, toNum(ep.t, 6));
  const F = toNum(ep.F, 180);
  const v = toNum(ep.v, 3);
  const theta = clamp(toNum(ep.theta, 0), 0, 180);
  const tMax = clamp(toNum(ep.tMax, 10), 1, 60);

  const showP = !!ep.showP;
  const showE = !!ep.showE;
  const showRef = !!ep.showRef;

  const rad = (theta * Math.PI) / 180;
  const Pmed = W / t;
  const Pinst = F * v * Math.cos(rad);

  const data = useMemo(() => {
    const out = [];
    const N = 220;
    for (let i = 0; i <= N; i += 1) {
      const tt = (i / N) * tMax;
      out.push({
        t: tt,
        P: Pinst,
        E: Math.max(0, Pinst) * tt,
      });
    }
    return out;
  }, [tMax, Pinst]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Potencia (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"P=\\frac{W}{t},\\quad P=Fv\\cos\\theta"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>W (J)</span><input className="form-control" style={{ width: 90 }} value={W} onChange={(e) => setValue("W", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t (s)</span><input className="form-control" style={{ width: 90 }} value={t} onChange={(e) => setValue("t", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>F (N)</span><input className="form-control" style={{ width: 90 }} value={F} onChange={(e) => setValue("F", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v (m/s)</span><input className="form-control" style={{ width: 90 }} value={v} onChange={(e) => setValue("v", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta (deg)</span><input className="form-control" style={{ width: 90 }} value={theta} onChange={(e) => setValue("theta", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showP} onClick={() => setValue("showP", !showP)}>P(t)</Pill>
            <Pill active={showE} onClick={() => setValue("showE", !showE)}>E(t)=P*t</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              P_media = <b>{fmt(Pmed, 3)}</b> W | P_inst = <b>{fmt(Pinst, 3)}</b> W | cos(theta) = <b>{fmt(Math.cos(rad), 4)}</b>
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Potencia y energia acumulada</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showP ? <Line type="monotone" dataKey="P" name="P(t)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showE ? <Line type="monotone" dataKey="E" name="E(t)" stroke="#34d399" strokeWidth={2.6} dot={false} /> : null}
              {showP ? <ReferenceDot x={Math.min(t, tMax)} y={Pinst} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
