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

const aCorrect = (g, th, mu) => g * (Math.sin(deg2rad(th)) - mu * Math.cos(deg2rad(th)));
const aSinCosSwap = (g, th, mu) => g * (Math.cos(deg2rad(th)) - mu * Math.sin(deg2rad(th)));
const aNoFriction = (g, th) => g * Math.sin(deg2rad(th));

function buildSeries(g, mu, maxTheta = 80, step = 1) {
  const out = [];
  for (let theta = 0; theta <= maxTheta + 1e-9; theta += step) {
    out.push({
      theta,
      a_ok: aCorrect(g, theta, mu),
      a_swap: aSinCosSwap(g, theta, mu),
      a_nofric: aNoFriction(g, theta),
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

export default function ErroresFrecuentesGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "mu", aliases: ["coef", "coeficiente"], default: toNum(p.mu ?? p.coef ?? p.coeficiente, 0.2) },
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 30) },
      { key: "showOk", aliases: ["mostrarOk"], default: p.showOk ?? true },
      { key: "showSwap", aliases: ["mostrarSwap"], default: p.showSwap ?? true },
      { key: "showNoFric", aliases: ["mostrarNoFric"], default: p.showNoFric ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [p.g, p.gravedad, p.mu, p.coef, p.coeficiente, p.theta, p.angulo, p.showOk, p.showSwap, p.showNoFric, p.showPoint]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const g = clamp(toNum(ep.g, 9.8), 0.1, 30);
  const mu = clamp(toNum(ep.mu, 0.2), 0, 1.2);
  const theta = clamp(toNum(ep.theta, 30), 0, 80);
  const showOk = !!ep.showOk;
  const showSwap = !!ep.showSwap;
  const showNoFric = !!ep.showNoFric;
  const showPoint = !!ep.showPoint;

  const aOk = aCorrect(g, theta, mu);
  const aSwap = aSinCosSwap(g, theta, mu);
  const aNo = aNoFriction(g, theta);
  const errSwap = aSwap - aOk;
  const errNo = aNo - aOk;

  const data = useMemo(() => buildSeries(g, mu, 80, 1), [g, mu]);
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Errores frecuentes (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a_{ok}=g(\\sin\\theta-\\mu\\cos\\theta)"} /> vs errores comunes.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>g</span><input className="form-control" style={{ width: 88 }} value={fmt(g, 3).replace(",", ".")} onChange={(e) => setValue("g", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>mu</span><input className="form-control" style={{ width: 88 }} value={fmt(mu, 3).replace(",", ".")} onChange={(e) => setValue("mu", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta</span><input className="form-control" style={{ width: 88 }} value={fmt(theta, 1).replace(",", ".")} onChange={(e) => setValue("theta", e.target.value)} /></div>
            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}
            >
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showOk} onClick={() => setValue("showOk", !showOk)}>Correcta</Pill>
            <Pill active={showSwap} onClick={() => setValue("showSwap", !showSwap)}>Sin/Cos invertidos</Pill>
            <Pill active={showNoFric} onClick={() => setValue("showNoFric", !showNoFric)}>Sin rozamiento</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            a_ok = <b>{fmt(aOk, 4)}</b> | a_swap = <b>{fmt(aSwap, 4)}</b> (error {fmt(errSwap, 4)})
            <br />
            a_no_fric = <b>{fmt(aNo, 4)}</b> (error {fmt(errNo, 4)})
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Comparacion de resultados</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="theta" type="number" domain={[0, 80]} tickFormatter={(v0) => fmt(v0, 0)} label={{ value: "theta (deg)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v0) => fmt(v0, 2)} label={{ value: "a (m/s2)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `theta = ${fmt(x, 1)} deg`} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showOk ? <Line type="monotone" dataKey="a_ok" name="a_correcta" stroke="#22c55e" strokeWidth={3} dot={false} /> : null}
              {showSwap ? <Line type="monotone" dataKey="a_swap" name="a_error_sin_cos" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showNoFric ? <Line type="monotone" dataKey="a_nofric" name="a_sin_rozamiento" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint && showOk ? <ReferenceDot x={theta} y={aOk} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
