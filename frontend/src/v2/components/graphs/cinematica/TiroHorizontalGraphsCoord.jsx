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

export default function TiroHorizontalGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "v0", aliases: ["vx0", "v_0"], default: toNum(params?.v0 ?? params?.vx0 ?? params?.v_0, 12) },
      { key: "h", aliases: ["y0", "altura"], default: toNum(params?.h ?? params?.y0 ?? params?.altura, 20) },
      { key: "g", aliases: ["gravedad"], default: toNum(params?.g ?? params?.gravedad, 9.81) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 4) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 1.5) },
      { key: "showX", default: params?.showX ?? true },
      { key: "showY", default: params?.showY ?? true },
      { key: "showVy", default: params?.showVy ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const v0 = toNum(ep.v0, 12);
  const h = Math.max(0, toNum(ep.h, 20));
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);
  const tFlight = Math.sqrt((2 * h) / g);
  const tMax = clamp(toNum(ep.tMax, Math.max(4, tFlight * 1.25)), 0.5, 30);
  const tObs = clamp(toNum(ep.tObs, Math.min(1.5, tMax)), 0, tMax);

  const showX = !!ep.showX;
  const showY = !!ep.showY;
  const showVy = !!ep.showVy;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const tEff = Math.min(tObs, tFlight);
  const xObs = v0 * tEff;
  const yObs = Math.max(0, h - 0.5 * g * tEff * tEff);
  const vyObs = -g * tEff;
  const xImpact = v0 * tFlight;

  const data = useMemo(() => {
    const out = [];
    const N = 260;
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tMax;
      const tc = Math.min(t, tFlight);
      out.push({
        t,
        x: v0 * tc,
        y: Math.max(0, h - 0.5 * g * tc * tc),
        vy: -g * tc,
      });
    }
    return out;
  }, [tMax, tFlight, v0, h, g]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Tiro horizontal (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"x(t)=v_0t,\\; y(t)=h-\\tfrac{1}{2}gt^2,\\; v_y(t)=-gt"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v0 (m/s)</span><input className="form-control" style={{ width: 90 }} value={v0} onChange={(e) => setValue("v0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>h (m)</span><input className="form-control" style={{ width: 90 }} value={h} onChange={(e) => setValue("h", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>g (m/s2)</span><input className="form-control" style={{ width: 90 }} value={g} onChange={(e) => setValue("g", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_max (s)</span><input className="form-control" style={{ width: 90 }} value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t_obs (s)</span><input className="form-control" style={{ width: 90 }} value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showX} onClick={() => setValue("showX", !showX)}>x(t)</Pill>
            <Pill active={showY} onClick={() => setValue("showY", !showY)}>y(t)</Pill>
            <Pill active={showVy} onClick={() => setValue("showVy", !showVy)}>v_y(t)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              t_vuelo = <b>{fmt(tFlight, 3)}</b> s | alcance = <b>{fmt(xImpact, 3)}</b> m | t = <b>{fmt(tEff, 3)}</b> s | x = <b>{fmt(xObs, 3)}</b> m | y = <b>{fmt(yObs, 3)}</b> m | v_y = <b>{fmt(vyObs, 3)}</b> m/s
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Evolucion temporal (tiro horizontal)</div>
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
              {showX ? <Line type="monotone" dataKey="x" name="x(t)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showY ? <Line type="monotone" dataKey="y" name="y(t)" stroke="#34d399" strokeWidth={2.8} dot={false} /> : null}
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
