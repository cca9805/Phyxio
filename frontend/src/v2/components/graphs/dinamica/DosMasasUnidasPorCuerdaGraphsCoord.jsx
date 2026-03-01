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

const accel = (m1, m2, g) => ((m2 - m1) * g) / (m1 + m2);
const tension = (m1, m2, g) => (2 * m1 * m2 * g) / (m1 + m2);

function buildData(m1, g, m2Min, m2Max, n = 220) {
  const out = [];
  for (let i = 0; i <= n; i += 1) {
    const m2 = m2Min + ((m2Max - m2Min) * i) / n;
    out.push({ m2, a: accel(m1, m2, g) });
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

export default function DosMasasUnidasPorCuerdaGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m1", aliases: ["masa1"], default: toNum(p.m1 ?? p.masa1, 2) },
      { key: "m2", aliases: ["masa2"], default: toNum(p.m2 ?? p.masa2, 5) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "m2Min", aliases: ["m2_min"], default: toNum(p.m2Min ?? p.m2_min, 0.5) },
      { key: "m2Max", aliases: ["m2_max"], default: toNum(p.m2Max ?? p.m2_max, 10) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.m1, p.masa1, p.m2, p.masa2, p.g, p.gravedad, p.m2Min, p.m2_min, p.m2Max, p.m2_max, p.showCurve, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m1 = clamp(toNum(ep.m1, 2), 0.05, 100);
  const m2 = clamp(toNum(ep.m2, 5), 0.05, 100);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 25);
  const rawMin = clamp(toNum(ep.m2Min, 0.5), 0.05, 300);
  const rawMax = clamp(toNum(ep.m2Max, 10), 0.05, 300);
  const m2Min = Math.min(rawMin, rawMax);
  const m2Max = Math.max(rawMin, rawMax);
  const m2Point = clamp(m2, m2Min, m2Max);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const aNow = accel(m1, m2Point, g);
  const TNow = tension(m1, m2Point, g);
  const data = useMemo(() => buildData(m1, g, m2Min, m2Max), [m1, g, m2Min, m2Max]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Dos masas unidas por cuerda (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a=\\frac{(m_2-m_1)g}{m_1+m_2},\\quad T=\\frac{2m_1m_2g}{m_1+m_2}"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m1</span><input className="form-control" style={{ width: 90 }} value={fmt(m1, 3).replace(",", ".")} onChange={(e) => setValue("m1", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m2</span><input className="form-control" style={{ width: 90 }} value={fmt(m2Point, 3).replace(",", ".")} onChange={(e) => setValue("m2", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>g</span><input className="form-control" style={{ width: 90 }} value={fmt(g, 3).replace(",", ".")} onChange={(e) => setValue("g", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m2_min</span><input className="form-control" style={{ width: 90 }} value={fmt(m2Min, 2).replace(",", ".")} onChange={(e) => setValue("m2Min", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m2_max</span><input className="form-control" style={{ width: 90 }} value={fmt(m2Max, 2).replace(",", ".")} onChange={(e) => setValue("m2Max", e.target.value)} /></div>
            <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>Curva</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              a = <b>{fmt(aNow, 4)}</b> m/s^2 | T = <b>{fmt(TNow, 4)}</b> N.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Aceleracion en funcion de m2</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="m2" type="number" domain={[m2Min, m2Max]} tickFormatter={(v) => fmt(v, 2)} label={{ value: "m2 (kg)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 2)} label={{ value: "a (m/s^2)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(v) => `m2 = ${fmt(v, 4)} kg`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine x={m1} stroke="rgba(245,158,11,0.9)" strokeDasharray="4 4" /> : null}
              {showCurve ? <Line type="monotone" dataKey="a" name="a(m2)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={m2Point} y={aNow} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

