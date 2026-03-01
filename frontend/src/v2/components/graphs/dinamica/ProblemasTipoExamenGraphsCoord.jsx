import React, { useMemo, useCallback } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const deg2rad = (d) => (Math.PI * d) / 180;

const aFrom = (m, g, theta, mu, F) => (F - m * g * Math.sin(deg2rad(theta)) - mu * m * g * Math.cos(deg2rad(theta))) / m;

function buildSeries(m, g, theta, F, muMax, step = 0.01) {
  const out = [];
  for (let mu = 0; mu <= muMax + 1e-9; mu += step) {
    out.push({ mu, a: aFrom(m, g, theta, mu, F) });
  }
  return out;
}

function Pill({ active, children, onClick }) {
  return (
    <button type="button" onClick={onClick} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: active ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.90)", fontWeight: 900, cursor: "pointer" }}>
      {children}
    </button>
  );
}

export default function ProblemasTipoExamenGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 5) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 30) },
      { key: "mu", aliases: ["coef", "coeficiente"], default: toNum(p.mu ?? p.coef ?? p.coeficiente, 0.2) },
      { key: "F", aliases: ["fuerza"], default: toNum(p.F ?? p.fuerza, 60) },
      { key: "t", aliases: ["tiempo"], default: toNum(p.t ?? p.tiempo, 4) },
      { key: "muMax", aliases: ["mu_max"], default: toNum(p.muMax ?? p.mu_max, 0.8) },
      { key: "showA", aliases: ["mostrarA"], default: p.showA ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [p.m, p.masa, p.g, p.gravedad, p.theta, p.angulo, p.mu, p.coef, p.coeficiente, p.F, p.fuerza, p.t, p.tiempo, p.muMax, p.mu_max, p.showA, p.showPoint]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 5), 0.1, 5000);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 30);
  const theta = clamp(toNum(ep.theta, 30), 0, 80);
  const mu = clamp(toNum(ep.mu, 0.2), 0, 1.2);
  const F = clamp(toNum(ep.F, 60), 0, 10000);
  const t = clamp(toNum(ep.t, 4), 0, 100);
  const muMax = clamp(toNum(ep.muMax, 0.8), 0.1, 1.2);
  const showA = !!ep.showA;
  const showPoint = !!ep.showPoint;

  const a = aFrom(m, g, theta, mu, F);
  const v = a * t;
  const x = 0.5 * a * t * t;
  const data = useMemo(() => buildSeries(m, g, theta, F, muMax, 0.01), [m, g, theta, F, muMax]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Problema tipo examen (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a=\\frac{F-mg\\sin\\theta-\\mu mg\\cos\\theta}{m},\\quad v=at,\\quad x=\\frac{1}{2}at^2"} />.
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m</span><input className="form-control" style={{ width: 88 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta</span><input className="form-control" style={{ width: 88 }} value={fmt(theta, 1).replace(",", ".")} onChange={(e) => setValue("theta", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>mu</span><input className="form-control" style={{ width: 88 }} value={fmt(mu, 3).replace(",", ".")} onChange={(e) => setValue("mu", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>F</span><input className="form-control" style={{ width: 88 }} value={fmt(F, 2).replace(",", ".")} onChange={(e) => setValue("F", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>t</span><input className="form-control" style={{ width: 88 }} value={fmt(t, 2).replace(",", ".")} onChange={(e) => setValue("t", e.target.value)} /></div>
            <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showA} onClick={() => setValue("showA", !showA)}>a(mu)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            a = <b>{fmt(a, 4)}</b> m/s2 | v = <b>{fmt(v, 4)}</b> m/s | x = <b>{fmt(x, 4)}</b> m.
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Sensibilidad de la aceleracion al rozamiento</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="mu" type="number" domain={[0, muMax]} tickFormatter={(v0) => fmt(v0, 2)} label={{ value: "mu", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v0) => fmt(v0, 2)} label={{ value: "a (m/s2)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `mu = ${fmt(x, 3)}`} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showA ? <Line type="monotone" dataKey="a" name="a" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={mu} y={a} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
