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

export default function LeyesDeKeplerGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "k", default: toNum(params?.k, 1) },
      { key: "aMin", default: toNum(params?.aMin, 0.4) },
      { key: "aMax", default: toNum(params?.aMax, 6.0) },
      { key: "showT2", default: params?.showT2 ?? true },
      { key: "showA3", default: params?.showA3 ?? true },
      { key: "showZero", default: params?.showZero ?? true },
    ],
    [params]
  );
  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const p = exp.effectiveParams;
  const k = Math.max(0.0001, toNum(p.k, 1));
  const aMin = Math.max(0.1, toNum(p.aMin, 0.4));
  const aMax = Math.max(aMin + 0.1, toNum(p.aMax, 6.0));
  const showT2 = !!p.showT2;
  const showA3 = !!p.showA3;
  const showZero = !!p.showZero;

  const data = useMemo(() => {
    const out = [];
    for (let i = 0; i <= 180; i += 1) {
      const a = aMin + ((aMax - aMin) * i) / 180;
      const a3 = a * a * a;
      out.push({ a, a3, T2: k * a3 });
    }
    return out;
  }, [k, aMin, aMax]);

  const aMid = 0.5 * (aMin + aMax);
  const a3Mid = aMid * aMid * aMid;
  const t2Mid = k * a3Mid;

  const setValue = (key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Leyes de Kepler (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"T^2=k\\,a^3"} />
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
              ["k", k],
              ["aMin", aMin],
              ["aMax", aMax],
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
            <Pill active={showT2} onClick={() => setValue("showT2", !showT2)}>T^2</Pill>
            <Pill active={showA3} onClick={() => setValue("showA3", !showA3)}>a^3</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            En a*=<b>{fmt(aMid, 3)}</b>: a^3=<b>{fmt(a3Mid, 3)}</b>, T^2=<b>{fmt(t2Mid, 3)}</b>, T^2/a^3=<b>{fmt(k, 3)}</b>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Relacion entre periodo y semieje mayor</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="a" tickFormatter={(v) => fmt(v, 2)} label={{ value: "a", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 1)} />
              <Tooltip formatter={(v, name) => [fmt(Number(v), 4), name]} labelFormatter={(v) => `a=${fmt(v, 3)}`} />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showT2 ? <Line type="monotone" dataKey="T2" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showA3 ? <Line type="monotone" dataKey="a3" stroke="#f59e0b" strokeWidth={2.8} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
