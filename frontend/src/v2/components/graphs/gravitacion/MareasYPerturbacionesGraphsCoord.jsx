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
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const G = 6.674e-11;
const toNum = (v, d) => {
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : d;
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

export default function MareasYPerturbacionesGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "M", default: toNum(params?.M, 7.35e22) },
      { key: "R", default: toNum(params?.R, 6.37e6) },
      { key: "dMin", default: toNum(params?.dMin, 2.5e8) },
      { key: "dMax", default: toNum(params?.dMax, 5e8) },
      { key: "showATide", default: params?.showATide ?? true },
      { key: "showInvCube", default: params?.showInvCube ?? true },
      { key: "showZero", default: params?.showZero ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const p = exp.effectiveParams;
  const M = Math.max(1, toNum(p.M, 7.35e22));
  const R = Math.max(1, toNum(p.R, 6.37e6));
  const dMin = Math.max(R + 1, toNum(p.dMin, 2.5e8));
  const dMax = Math.max(dMin + 1, toNum(p.dMax, 5e8));
  const showATide = !!p.showATide;
  const showInvCube = !!p.showInvCube;
  const showZero = !!p.showZero;

  const data = useMemo(() => {
    const out = [];
    const nPts = 220;
    const dRef = 0.5 * (dMin + dMax);
    const inv3Ref = 1 / (dRef * dRef * dRef);
    for (let i = 0; i <= nPts; i += 1) {
      const d = dMin + ((dMax - dMin) * i) / nPts;
      const inv3 = 1 / (d * d * d);
      const aTide = (2 * G * M * R) * inv3;
      out.push({
        d,
        aTideMicro: aTide * 1e6,
        invCubeNorm: (inv3 / inv3Ref) * 10,
      });
    }
    return out;
  }, [M, R, dMin, dMax]);

  const dMid = 0.5 * (dMin + dMax);
  const aMid = ((2 * G * M * R) / (dMid * dMid * dMid)) * 1e6;

  const setValue = (key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Mareas y perturbaciones (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a_{marea}\\approx\\frac{2GMR}{d^3}"} />
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
              border: "1px solid rgba(59,130,246,0.2)",
              background: "rgba(59,130,246,0.08)",
            }}
          >
            {[
              ["M", M],
              ["R", R],
              ["dMin", dMin],
              ["dMax", dMax],
            ].map(([x, v]) => (
              <div key={x} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>{x}</span>
                <input className="form-control" style={{ width: 110 }} value={v} onChange={(e) => setValue(x, e.target.value)} />
              </div>
            ))}
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(2,132,199,0.22)",
              background: "rgba(2,132,199,0.10)",
            }}
          >
            <Pill active={showATide} onClick={() => setValue("showATide", !showATide)}>a_marea</Pill>
            <Pill active={showInvCube} onClick={() => setValue("showInvCube", !showInvCube)}>escala 1/d^3</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            a_marea(d*)=<b>{fmt(aMid, 4)}</b> um/s2
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Dependencia cubica de las mareas</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="d" tickFormatter={(v) => fmt(v / 1e8, 2)} label={{ value: "d (10^8 m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 2)} />
              <Tooltip
                formatter={(v, n) => [fmt(Number(v), 4), n]}
                labelFormatter={(v) => `d=${fmt(v / 1e8, 3)} x10^8 m`}
              />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showATide ? <Line type="monotone" dataKey="aTideMicro" name="a_marea (um/s2)" stroke="#a78bfa" strokeWidth={3} dot={false} /> : null}
              {showInvCube ? <Line type="monotone" dataKey="invCubeNorm" name="escala 1/d^3 (norm.)" stroke="#34d399" strokeWidth={2.8} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
