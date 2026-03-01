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

export default function TrabajoYTorqueGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "tau", aliases: ["torque"], default: toNum(params?.tau ?? params?.torque, 18) },
      { key: "omega", aliases: ["w"], default: toNum(params?.omega ?? params?.w, 4) },
      { key: "thetaDeg", aliases: ["theta", "angulo"], default: toNum(params?.thetaDeg ?? params?.theta ?? params?.angulo, 180) },
      { key: "showW", default: params?.showW ?? true },
      { key: "showP", default: params?.showP ?? true },
      { key: "showTau", default: params?.showTau ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const tau = toNum(ep.tau, 18);
  const omega = toNum(ep.omega, 4);
  const thetaDeg = clamp(toNum(ep.thetaDeg, 180), -1440, 1440);
  const thetaRad = (thetaDeg * Math.PI) / 180;

  const showW = !!ep.showW;
  const showP = !!ep.showP;
  const showTau = !!ep.showTau;
  const showRef = !!ep.showRef;

  const W = tau * thetaRad;
  const P = tau * omega;

  const data = useMemo(() => {
    const out = [];
    const nPts = 220;
    const tMax = 12;
    const alpha = 0.35;
    for (let i = 0; i <= nPts; i += 1) {
      const t = (i / nPts) * tMax;
      const th = omega * t + 0.5 * alpha * t * t;
      out.push({
        t,
        tau,
        W: tau * th,
        P: tau * (omega + alpha * t),
      });
    }
    return out;
  }, [tau, omega]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Trabajo y torque (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"W=\\int\\tau\\,d\\theta\\;(\\tau\\,cte\\Rightarrow W=\\tau\\theta),\\quad P=\\tau\\omega"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>tau (N*m)</span><input className="form-control" style={{ width: 95 }} value={tau} onChange={(e) => setValue("tau", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega (rad/s)</span><input className="form-control" style={{ width: 95 }} value={omega} onChange={(e) => setValue("omega", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta (deg)</span><input className="form-control" style={{ width: 95 }} value={thetaDeg} onChange={(e) => setValue("thetaDeg", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showW} onClick={() => setValue("showW", !showW)}>W(t)</Pill>
            <Pill active={showP} onClick={() => setValue("showP", !showP)}>P(t)</Pill>
            <Pill active={showTau} onClick={() => setValue("showTau", !showTau)}>tau(t)</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>eje y=0</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              theta = <b>{fmt(thetaRad, 4)}</b> rad | W = <b>{fmt(W, 3)}</b> J | P = <b>{fmt(P, 3)}</b> W
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Trabajo y potencia angular</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showW ? <Line type="monotone" dataKey="W" name="W" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showP ? <Line type="monotone" dataKey="P" name="P" stroke="#34d399" strokeWidth={2.6} dot={false} /> : null}
              {showTau ? <Line type="monotone" dataKey="tau" name="tau" stroke="#f59e0b" strokeWidth={2.6} dot={false} /> : null}
              {showW && showRef ? <ReferenceDot x={12} y={data[data.length - 1]?.W} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
