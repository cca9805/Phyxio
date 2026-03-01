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
const aNo = (g, th) => g * Math.sin(deg2rad(th));
const aWith = (g, th, mu) => g * (Math.sin(deg2rad(th)) - mu * Math.cos(deg2rad(th)));

function buildSeries(g, mu, maxDeg = 80, step = 1) {
  const out = [];
  for (let theta = 0; theta <= maxDeg + 1e-9; theta += step) {
    out.push({
      theta,
      a_no: aNo(g, theta),
      a_with: aWith(g, theta, mu),
    });
  }
  return out;
}

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

export default function PlanosInclinadosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 10) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 30) },
      { key: "mu", aliases: ["coef", "coeficiente"], default: toNum(p.mu ?? p.coef ?? p.coeficiente, 0.2) },
      { key: "showNo", aliases: ["mostrarSinRoz"], default: p.showNo ?? true },
      { key: "showWith", aliases: ["mostrarConRoz"], default: p.showWith ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [p.m, p.masa, p.g, p.gravedad, p.theta, p.angulo, p.mu, p.coef, p.coeficiente, p.showNo, p.showWith, p.showPoint]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 10), 0.1, 5000);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 30);
  const theta = clamp(toNum(ep.theta, 30), 0, 80);
  const mu = clamp(toNum(ep.mu, 0.2), 0, 1.2);
  const showNo = !!ep.showNo;
  const showWith = !!ep.showWith;
  const showPoint = !!ep.showPoint;

  const N = m * g * Math.cos(deg2rad(theta));
  const Wp = m * g * Math.sin(deg2rad(theta));
  const f = mu * N;
  const a0 = aNo(g, theta);
  const a1 = aWith(g, theta, mu);
  const data = useMemo(() => buildSeries(g, mu, 80, 1), [g, mu]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Planos inclinados (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a_{sin}=g\\sin\\theta,\\quad a_{con}=g(\\sin\\theta-\\mu\\cos\\theta)"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m</span><input className="form-control" style={{ width: 88 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>g</span><input className="form-control" style={{ width: 88 }} value={fmt(g, 3).replace(",", ".")} onChange={(e) => setValue("g", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta</span><input className="form-control" style={{ width: 88 }} value={fmt(theta, 1).replace(",", ".")} onChange={(e) => setValue("theta", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>mu</span><input className="form-control" style={{ width: 88 }} value={fmt(mu, 3).replace(",", ".")} onChange={(e) => setValue("mu", e.target.value)} /></div>
            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}
            >
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showNo} onClick={() => setValue("showNo", !showNo)}>a sin roz.</Pill>
            <Pill active={showWith} onClick={() => setValue("showWith", !showWith)}>a con roz.</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            N = <b>{fmt(N, 3)}</b> N | W_par = <b>{fmt(Wp, 3)}</b> N | f = <b>{fmt(f, 3)}</b> N | a_sin = <b>{fmt(a0, 4)}</b> | a_con = <b>{fmt(a1, 4)}</b> m/s2
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Aceleracion vs angulo</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="theta" type="number" domain={[0, 80]} tickFormatter={(v) => fmt(v, 0)} label={{ value: "theta (deg)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 2)} label={{ value: "a (m/s2)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `theta = ${fmt(x, 1)} deg`} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showNo ? <Line type="monotone" dataKey="a_no" name="a sin roz." stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showWith ? <Line type="monotone" dataKey="a_with" name="a con roz." stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint && showNo ? <ReferenceDot x={theta} y={a0} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPoint && showWith ? <ReferenceDot x={theta} y={a1} r={5} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
