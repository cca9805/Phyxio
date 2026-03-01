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

export default function TiroParabolicoGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "v0", aliases: ["v_0"], default: toNum(params?.v0 ?? params?.v_0, 25) },
      { key: "theta", aliases: ["angulo", "angle"], default: toNum(params?.theta ?? params?.angulo ?? params?.angle, 40) },
      { key: "y0", aliases: ["h", "altura"], default: toNum(params?.y0 ?? params?.h ?? params?.altura, 0) },
      { key: "g", aliases: ["gravedad"], default: toNum(params?.g ?? params?.gravedad, 9.81) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 6) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 1.6) },
      { key: "showX", default: params?.showX ?? true },
      { key: "showY", default: params?.showY ?? true },
      { key: "showVx", default: params?.showVx ?? true },
      { key: "showVy", default: params?.showVy ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const v0 = Math.max(0, toNum(ep.v0, 25));
  const thetaDeg = clamp(toNum(ep.theta, 40), -85, 85);
  const y0 = Math.max(0, toNum(ep.y0, 0));
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);

  const th = (thetaDeg * Math.PI) / 180;
  const vx0 = v0 * Math.cos(th);
  const vy0 = v0 * Math.sin(th);

  const tFlight = (vy0 + Math.sqrt(vy0 * vy0 + 2 * g * y0)) / g;
  const tMax = clamp(toNum(ep.tMax, Math.max(6, tFlight * 1.15)), 0.5, 40);
  const tObs = clamp(toNum(ep.tObs, Math.min(1.6, tMax)), 0, tMax);

  const showX = !!ep.showX;
  const showY = !!ep.showY;
  const showVx = !!ep.showVx;
  const showVy = !!ep.showVy;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const tEff = Math.min(tObs, tFlight);
  const xObs = vx0 * tEff;
  const yObs = Math.max(0, y0 + vy0 * tEff - 0.5 * g * tEff * tEff);
  const vxObs = vx0;
  const vyObs = vy0 - g * tEff;
  const tPeak = vy0 > 0 ? vy0 / g : 0;
  const yPeak = y0 + (vy0 > 0 ? (vy0 * vy0) / (2 * g) : 0);

  const data = useMemo(() => {
    const out = [];
    const N = 260;
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tMax;
      const tc = Math.min(t, tFlight);
      out.push({
        t,
        x: vx0 * tc,
        y: Math.max(0, y0 + vy0 * tc - 0.5 * g * tc * tc),
        vx: vx0,
        vy: vy0 - g * tc,
      });
    }
    return out;
  }, [tMax, tFlight, vx0, y0, vy0, g]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Tiro parabolico (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"x=v_0\\cos\\theta\\,t,\\;y=y_0+v_0\\sin\\theta\\,t-\\tfrac{1}{2}gt^2"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v0 (m/s)</span><input className="form-control" style={{ width: 90 }} value={v0} onChange={(e) => setValue("v0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta (deg)</span><input className="form-control" style={{ width: 90 }} value={thetaDeg} onChange={(e) => setValue("theta", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>y0 (m)</span><input className="form-control" style={{ width: 90 }} value={y0} onChange={(e) => setValue("y0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>g (m/s2)</span><input className="form-control" style={{ width: 90 }} value={g} onChange={(e) => setValue("g", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_max (s)</span><input className="form-control" style={{ width: 90 }} value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_obs (s)</span><input className="form-control" style={{ width: 90 }} value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showX} onClick={() => setValue("showX", !showX)}>x(t)</Pill>
            <Pill active={showY} onClick={() => setValue("showY", !showY)}>y(t)</Pill>
            <Pill active={showVx} onClick={() => setValue("showVx", !showVx)}>v_x(t)</Pill>
            <Pill active={showVy} onClick={() => setValue("showVy", !showVy)}>v_y(t)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              t_vuelo = <b>{fmt(tFlight, 3)}</b> s | t_pico = <b>{fmt(tPeak, 3)}</b> s | y_max = <b>{fmt(yPeak, 3)}</b> m | x = <b>{fmt(xObs, 3)}</b> m | y = <b>{fmt(yObs, 3)}</b> m | v_x = <b>{fmt(vxObs, 3)}</b> m/s | v_y = <b>{fmt(vyObs, 3)}</b> m/s
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Evolucion temporal (tiro parabolico)</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine x={tFlight} stroke="#eab308" strokeDasharray="6 6" /> : null}
              {showRef ? <ReferenceLine x={tPeak} stroke="#a78bfa" strokeDasharray="6 6" /> : null}
              {showX ? <Line type="monotone" dataKey="x" name="x(t)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showY ? <Line type="monotone" dataKey="y" name="y(t)" stroke="#34d399" strokeWidth={2.8} dot={false} /> : null}
              {showVx ? <Line type="monotone" dataKey="vx" name="v_x(t)" stroke="#f59e0b" strokeWidth={2.6} dot={false} /> : null}
              {showVy ? <Line type="monotone" dataKey="vy" name="v_y(t)" stroke="#f97316" strokeWidth={2.6} dot={false} /> : null}
              {showPoint && showX ? <ReferenceDot x={tEff} y={xObs} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPoint && showY ? <ReferenceDot x={tEff} y={yObs} r={5} fill="#34d399" stroke="none" /> : null}
              {showPoint && showVy ? <ReferenceDot x={tEff} y={vyObs} r={5} fill="#f97316" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
