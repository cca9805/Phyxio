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

function buildData(m, g, aMin, aMax, n = 240) {
  const out = [];
  for (let i = 0; i <= n; i += 1) {
    const a = aMin + ((aMax - aMin) * i) / n;
    const T = m * (g - a);
    out.push({ a, T });
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

export default function BloqueColganteGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 2) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "a", aliases: ["aceleracion"], default: toNum(p.a ?? p.aceleracion, 1.5) },
      { key: "aMin", aliases: ["amin"], default: toNum(p.aMin ?? p.amin, -5) },
      { key: "aMax", aliases: ["amax"], default: toNum(p.aMax ?? p.amax, 10) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.m, p.masa, p.g, p.gravedad, p.a, p.aceleracion, p.aMin, p.amin, p.aMax, p.amax, p.showCurve, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 2), 0.05, 100);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 25);
  const rawMin = toNum(ep.aMin, -5);
  const rawMax = toNum(ep.aMax, 10);
  const aMin = Math.min(rawMin, rawMax);
  const aMax = Math.max(rawMin, rawMax);
  const a = clamp(toNum(ep.a, 1.5), aMin, aMax);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => buildData(m, g, aMin, aMax), [m, g, aMin, aMax]);
  const T = m * (g - a);
  const aNula = g;

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, val) => {
    exp.startExperiment();
    exp.setValue(k, val);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Bloque colgante (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Tomando <b>a positiva hacia abajo</b>: <MathInline latex={"T = m(g-a)"} />.
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
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m (kg)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(m, 3).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>g (m/s²)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(g, 3).replace(",", ".")} onChange={(e) => setValue("g", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>a (m/s²)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(a, 3).replace(",", ".")} onChange={(e) => setValue("a", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>a_min</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(aMin, 2).replace(",", ".")} onChange={(e) => setValue("aMin", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>a_max</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(aMax, 2).replace(",", ".")} onChange={(e) => setValue("aMax", e.target.value)} />
            </div>

            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{
                marginLeft: "auto",
                padding: "8px 10px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.35)",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Seguir calculadora
            </button>
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
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>Curva T(a)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              T = <b>{fmt(T, 4)}</b> N.
              <br />
              Si a = g, entonces T = 0 (caida libre ideal del bloque).
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Tension en funcion de la aceleracion</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="a"
                type="number"
                domain={[aMin, aMax]}
                tickFormatter={(val) => fmt(val, 2)}
                label={{ value: "a (m/s²)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(val) => fmt(val, 2)}
                label={{ value: "T (N)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 5), name]}
                labelFormatter={(val) => `a = ${fmt(val, 4)} m/s²`}
              />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine x={aNula} stroke="rgba(245,158,11,0.85)" strokeDasharray="4 4" /> : null}
              {showCurve ? <Line type="monotone" dataKey="T" name="T(a)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={a} y={T} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
