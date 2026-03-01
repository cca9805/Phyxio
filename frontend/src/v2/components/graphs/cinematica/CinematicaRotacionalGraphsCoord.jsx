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

export default function CinematicaRotacionalGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "theta0", aliases: ["theta_0"], default: toNum(params?.theta0 ?? params?.theta_0, 0) },
      { key: "omega0", aliases: ["omega", "w", "omega_0"], default: toNum(params?.omega0 ?? params?.omega ?? params?.w ?? params?.omega_0, 1.5) },
      { key: "alpha", aliases: ["a", "alpha_0"], default: toNum(params?.alpha ?? params?.a ?? params?.alpha_0, 0.4) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 10) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 3) },
      { key: "showTheta", default: params?.showTheta ?? true },
      { key: "showOmega", default: params?.showOmega ?? true },
      { key: "showAlpha", default: params?.showAlpha ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const theta0 = toNum(ep.theta0, 0);
  const omega0 = toNum(ep.omega0, 1.5);
  const alpha = toNum(ep.alpha, 0.4);
  const tMax = clamp(toNum(ep.tMax, 10), 0.5, 120);
  const tObs = clamp(toNum(ep.tObs, tMax * 0.3), 0, tMax);
  const showTheta = !!ep.showTheta;
  const showOmega = !!ep.showOmega;
  const showAlpha = !!ep.showAlpha;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => {
    const out = [];
    const N = 260;
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tMax;
      const omega = omega0 + alpha * t;
      const theta = theta0 + omega0 * t + 0.5 * alpha * t * t;
      out.push({ t, theta, omega, alpha });
    }
    return out;
  }, [theta0, omega0, alpha, tMax]);

  const thetaObs = theta0 + omega0 * tObs + 0.5 * alpha * tObs * tObs;
  const omegaObs = omega0 + alpha * tObs;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Cinematica rotacional (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\omega(t)=\\omega_0+\\alpha t,\\quad \\theta(t)=\\theta_0+\\omega_0 t+\\tfrac{1}{2}\\alpha t^2"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta0</span><input className="form-control" style={{ width: 90 }} value={theta0} onChange={(e) => setValue("theta0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega0</span><input className="form-control" style={{ width: 90 }} value={omega0} onChange={(e) => setValue("omega0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>alpha</span><input className="form-control" style={{ width: 90 }} value={alpha} onChange={(e) => setValue("alpha", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_max</span><input className="form-control" style={{ width: 90 }} value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_obs</span><input className="form-control" style={{ width: 90 }} value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
            <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showTheta} onClick={() => setValue("showTheta", !showTheta)}>theta(t)</Pill>
            <Pill active={showOmega} onClick={() => setValue("showOmega", !showOmega)}>omega(t)</Pill>
            <Pill active={showAlpha} onClick={() => setValue("showAlpha", !showAlpha)}>alpha(t)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              t_obs = <b>{fmt(tObs, 2)}</b> s | theta = <b>{fmt(thetaObs, 3)}</b> rad | omega = <b>{fmt(omegaObs, 3)}</b> rad/s | alpha = <b>{fmt(alpha, 3)}</b> rad/s2
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Evolucion temporal</div>
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
              {showOmega ? <Line type="monotone" dataKey="omega" name="omega(t)" stroke="#60a5fa" strokeWidth={2.6} dot={false} /> : null}
              {showAlpha ? <Line type="monotone" dataKey="alpha" name="alpha(t)" stroke="#34d399" strokeWidth={2.4} dot={false} /> : null}
              {showPoint && showTheta ? <ReferenceDot x={tObs} y={thetaObs} r={5} fill="#a78bfa" stroke="none" /> : null}
              {showPoint && showOmega ? <ReferenceDot x={tObs} y={omegaObs} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

