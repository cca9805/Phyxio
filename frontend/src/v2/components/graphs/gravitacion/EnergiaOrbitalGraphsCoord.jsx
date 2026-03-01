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

export default function EnergiaOrbitalGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "M", default: toNum(params?.M, 5.97e24) },
      { key: "m", default: toNum(params?.m, 800) },
      { key: "rMin", default: toNum(params?.rMin, 6.8e6) },
      { key: "rMax", default: toNum(params?.rMax, 4.2e7) },
      { key: "showU", default: params?.showU ?? true },
      { key: "showK", default: params?.showK ?? true },
      { key: "showE", default: params?.showE ?? true },
      { key: "showZero", default: params?.showZero ?? true },
    ],
    [params]
  );
  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const p = exp.effectiveParams;
  const M = Math.max(1, toNum(p.M, 5.97e24));
  const m = Math.max(1, toNum(p.m, 800));
  const rMin = Math.max(1, toNum(p.rMin, 6.8e6));
  const rMax = Math.max(rMin + 1, toNum(p.rMax, 4.2e7));
  const showU = !!p.showU;
  const showK = !!p.showK;
  const showE = !!p.showE;
  const showZero = !!p.showZero;

  const data = useMemo(() => {
    const out = [];
    const nPts = 220;
    for (let i = 0; i <= nPts; i += 1) {
      const r = rMin + ((rMax - rMin) * i) / nPts;
      const U = -(G * M * m) / r;
      const K = -0.5 * U;
      const E = K + U;
      out.push({ r, U: U / 1e9, K: K / 1e9, E: E / 1e9 });
    }
    return out;
  }, [M, m, rMin, rMax]);

  const refR = 0.5 * (rMin + rMax);
  const uRef = -(G * M * m) / refR / 1e9;
  const kRef = -0.5 * uRef;
  const eRef = uRef + kRef;

  const setValue = (k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Energia orbital (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"E=K+U=-\\frac{GMm}{2r}"} />
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
              ["m", m],
              ["rMin", rMin],
              ["rMax", rMax],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>{k}</span>
                <input className="form-control" style={{ width: 110 }} value={v} onChange={(e) => setValue(k, e.target.value)} />
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
            <Pill active={showU} onClick={() => setValue("showU", !showU)}>U</Pill>
            <Pill active={showK} onClick={() => setValue("showK", !showK)}>K</Pill>
            <Pill active={showE} onClick={() => setValue("showE", !showE)}>E</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            U(r*)=<b>{fmt(uRef, 3)}</b> | K(r*)=<b>{fmt(kRef, 3)}</b> | E(r*)=<b>{fmt(eRef, 3)}</b> (x10^9 J)
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Energia mecanica en orbita circular</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="r" tickFormatter={(v) => `${fmt(v / 1e6, 1)}`} label={{ value: "r (10^6 m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 1)} />
              <Tooltip formatter={(v) => `${fmt(Number(v), 4)} x10^9 J`} labelFormatter={(v) => `r=${fmt(v / 1e6, 2)} x10^6 m`} />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showU ? <Line type="monotone" dataKey="U" stroke="#f97316" strokeWidth={2.8} dot={false} /> : null}
              {showK ? <Line type="monotone" dataKey="K" stroke="#60a5fa" strokeWidth={2.8} dot={false} /> : null}
              {showE ? <Line type="monotone" dataKey="E" stroke="#34d399" strokeWidth={3.2} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
