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
  AreaChart,
  Area,
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

export default function ImpulsoGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "F", aliases: ["fuerza"], default: toNum(params?.F ?? params?.fuerza, 120) },
      { key: "dt", aliases: ["tiempo"], default: toNum(params?.dt ?? params?.tiempo, 0.2) },
      { key: "m", aliases: ["masa"], default: toNum(params?.m ?? params?.masa, 2) },
      { key: "v0", aliases: ["v"], default: toNum(params?.v0 ?? params?.v, 4) },
      { key: "showF", default: params?.showF ?? true },
      { key: "showV", default: params?.showV ?? true },
      { key: "showZero", default: params?.showZero ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const F = toNum(ep.F, 120);
  const dt = Math.max(0.001, toNum(ep.dt, 0.2));
  const m = Math.max(0.001, toNum(ep.m, 2));
  const v0 = toNum(ep.v0, 4);
  const showF = !!ep.showF;
  const showV = !!ep.showV;
  const showZero = !!ep.showZero;

  const J = F * dt;
  const dv = J / m;
  const vF = v0 + dv;

  const dataPulse = useMemo(() => {
    const out = [];
    const tMax = dt * 1.8;
    const nPts = 200;
    for (let i = 0; i <= nPts; i += 1) {
      const t = (i / nPts) * tMax;
      out.push({ t, F: t <= dt ? F : 0 });
    }
    return out;
  }, [F, dt]);

  const dataV = useMemo(() => {
    const out = [];
    const tMax = dt * 1.8;
    const nPts = 200;
    for (let i = 0; i <= nPts; i += 1) {
      const t = (i / nPts) * tMax;
      const v = t <= dt ? v0 + (dv * t) / dt : vF;
      out.push({ t, v });
    }
    return out;
  }, [dt, v0, dv, vF]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Impulso (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\vec J=\\int\\vec F\\,dt\\;(F\\,cte\\Rightarrow J=F\\Delta t),\\quad \\vec J=\\Delta\\vec p"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>F (N)</span><input className="form-control" style={{ width: 90 }} value={F} onChange={(e) => setValue("F", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>dt (s)</span><input className="form-control" style={{ width: 90 }} value={dt} onChange={(e) => setValue("dt", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m (kg)</span><input className="form-control" style={{ width: 90 }} value={m} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v0 (m/s)</span><input className="form-control" style={{ width: 90 }} value={v0} onChange={(e) => setValue("v0", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showF} onClick={() => setValue("showF", !showF)}>F(t)</Pill>
            <Pill active={showV} onClick={() => setValue("showV", !showV)}>v(t)</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            J=<b>{fmt(J, 4)}</b> N*s | Delta p=<b>{fmt(J, 4)}</b> kg*m/s | Delta v=<b>{fmt(dv, 4)}</b> m/s | vF=<b>{fmt(vF, 4)}</b> m/s
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Pulso de fuerza e impacto en velocidad</div>
        <div style={{ width: "100%", height: 180, marginTop: 10 }}>
          <ResponsiveContainer>
            <AreaChart data={dataPulse} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 3)} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showF ? <Area type="stepAfter" dataKey="F" stroke="#60a5fa" fill="rgba(96,165,250,0.35)" name="F(t)" /> : null}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div style={{ width: "100%", height: 180, marginTop: 12 }}>
          <ResponsiveContainer>
            <LineChart data={dataV} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 3)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 2)} label={{ value: "v (m/s)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showV ? <Line type="monotone" dataKey="v" name="v(t)" stroke="#34d399" strokeWidth={2.6} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
