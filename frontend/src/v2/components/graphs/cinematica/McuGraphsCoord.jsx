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
import { sampleMCU } from "@/v2/engine/models/cinematica/mcu";

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

export default function McuGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["r", "radio"], default: toNum(params?.R ?? params?.r ?? params?.radio, 5) },
      { key: "omega", aliases: ["w"], default: toNum(params?.omega ?? params?.w, 1.2) },
      { key: "theta0", aliases: ["theta_0"], default: toNum(params?.theta0 ?? params?.theta_0, 0) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 10) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 3) },
      { key: "showTheta", default: params?.showTheta ?? true },
      { key: "showX", default: params?.showX ?? true },
      { key: "showY", default: params?.showY ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 5), 0.2, 100);
  const omega = toNum(ep.omega, 1.2);
  const theta0 = toNum(ep.theta0, 0);
  const tMax = clamp(toNum(ep.tMax, 10), 0.5, 80);
  const tObs = clamp(toNum(ep.tObs, tMax * 0.3), 0, tMax);
  const showTheta = !!ep.showTheta;
  const showX = !!ep.showX;
  const showY = !!ep.showY;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const sample = useMemo(() => sampleMCU({ R, omega, theta0, tMax, n: 260 }), [R, omega, theta0, tMax]);
  const data = sample?.data || [];

  const thetaObs = theta0 + omega * tObs;
  const xObs = R * Math.cos(thetaObs);
  const yObs = R * Math.sin(thetaObs);
  const v = Math.abs(omega) * R;
  const ac = omega * omega * R;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "MCU (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\theta(t)=\\theta_0+\\omega t,\\quad v=\\omega R,\\quad a_c=\\omega^2R"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>R (m)</span><input className="form-control" style={{ width: 90 }} value={R} onChange={(e) => setValue("R", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega (rad/s)</span><input className="form-control" style={{ width: 110 }} value={omega} onChange={(e) => setValue("omega", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta0 (rad)</span><input className="form-control" style={{ width: 100 }} value={theta0} onChange={(e) => setValue("theta0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_max (s)</span><input className="form-control" style={{ width: 90 }} value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_obs (s)</span><input className="form-control" style={{ width: 90 }} value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}
            >
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showTheta} onClick={() => setValue("showTheta", !showTheta)}>theta(t)</Pill>
            <Pill active={showX} onClick={() => setValue("showX", !showX)}>x(t)</Pill>
            <Pill active={showY} onClick={() => setValue("showY", !showY)}>y(t)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              t_obs = <b>{fmt(tObs, 2)}</b> s | theta = <b>{fmt(thetaObs, 3)}</b> rad | x = <b>{fmt(xObs, 3)}</b> m | y = <b>{fmt(yObs, 3)}</b> m | v = <b>{fmt(v, 3)}</b> m/s | ac = <b>{fmt(ac, 3)}</b> m/s2
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Variables del MCU</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showTheta ? <Line type="monotone" dataKey="theta" name="theta(t)" stroke="#a78bfa" strokeWidth={3} dot={false} /> : null}
              {showX ? <Line type="monotone" dataKey="x" name="x(t)" stroke="#60a5fa" strokeWidth={2.6} dot={false} /> : null}
              {showY ? <Line type="monotone" dataKey="y" name="y(t)" stroke="#34d399" strokeWidth={2.4} dot={false} /> : null}
              {showPoint && showTheta ? <ReferenceDot x={tObs} y={thetaObs} r={5} fill="#a78bfa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

