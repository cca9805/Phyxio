import React, { useMemo } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ReferenceDot } from "recharts";
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

export default function PrecesionGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "M", default: toNum(params?.M, toNum(params?.m, 1.2)) },
      { key: "d", default: toNum(params?.d, toNum(params?.r, 0.08)) },
      { key: "I", default: toNum(params?.I, 0.018) },
      { key: "omega", default: toNum(params?.omega, 90) },
      { key: "g", default: toNum(params?.g, 9.81) },
      { key: "showCurve", default: params?.showCurve ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showZero", default: params?.showZero ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const M = Math.max(0.001, toNum(ep.M, toNum(ep.m, 1.2)));
  const d = Math.max(0.001, toNum(ep.d, toNum(ep.r, 0.08)));
  const I = Math.max(0.000001, toNum(ep.I, 0.018));
  const omega = Math.max(0.0001, toNum(ep.omega, 90));
  const g = Math.max(0.0001, toNum(ep.g, 9.81));

  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showZero = !!ep.showZero;

  const tau = M * g * d;
  const L = I * omega;
  const omegaP = tau / L;

  const data = useMemo(() => {
    const out = [];
    const wMin = Math.max(5, omega * 0.25);
    const wMax = Math.max(wMin + 1, omega * 2.2);
    const nPts = 140;
    for (let i = 0; i <= nPts; i += 1) {
      const w = wMin + ((wMax - wMin) * i) / nPts;
      out.push({ w, omegaP: tau / (I * w) });
    }
    return out;
  }, [omega, tau, I]);

  const setValue = (k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Precesion - Coord"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\Omega_p\\approx\\frac{Mgd}{I\\omega}=\\frac{\\tau}{L}"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(16,185,129,0.22)",
              background: "rgba(16,185,129,0.10)",
            }}
          >
            {[
              ["M", M],
              ["d", d],
              ["I", I],
              ["omega", omega],
              ["g", g],
            ].map(([k, val]) => (
              <div key={k} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>{k}</span>
                <input className="form-control" style={{ width: 92 }} value={val} onChange={(e) => setValue(k, e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>curva</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>punto actual</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ marginTop: 10, padding: 10, fontSize: 13 }}>
            tau = <b>{fmt(tau, 4)}</b> | L = <b>{fmt(L, 4)}</b> | Omega_p = <b>{fmt(omegaP, 5)}</b>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Dependencia de precesion con velocidad de spin</div>
        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="w" tickFormatter={(n) => fmt(n, 1)} label={{ value: "omega (rad/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 3)} label={{ value: "Omega_p", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(v, n) => [fmt(v, 5), n]} />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showCurve ? <Line type="monotone" dataKey="omegaP" name="Omega_p" stroke="#f59e0b" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={omega} y={omegaP} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
