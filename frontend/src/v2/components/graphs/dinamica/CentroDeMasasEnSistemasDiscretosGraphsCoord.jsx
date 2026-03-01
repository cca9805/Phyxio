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

const pickNum = (obj, keys, fb) => {
  for (const k of keys) {
    const v = obj?.[k];
    if (v === undefined || v === null || v === "") continue;
    const n = toNum(v, NaN);
    if (Number.isFinite(n)) return n;
  }
  return fb;
};

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

const cmX = (m1, x1, m2, x2, m3, x3) => {
  const mt = m1 + m2 + m3;
  return mt > 0 ? (m1 * x1 + m2 * x2 + m3 * x3) / mt : 0;
};

function buildSeries(m1, x1, m2, x2, m3, x3min = -10, x3max = 10, step = 0.2) {
  const out = [];
  for (let x3 = x3min; x3 <= x3max + 1e-9; x3 += step) {
    out.push({ x3, xcm: cmX(m1, x1, m2, x2, m3, x3) });
  }
  return out;
}

export default function CentroDeMasasEnSistemasDiscretosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m1", aliases: ["masa1"], default: pickNum(p, ["m1", "masa1"], 2) },
      { key: "m2", aliases: ["masa2"], default: pickNum(p, ["m2", "masa2"], 3) },
      { key: "m3", aliases: ["masa3"], default: pickNum(p, ["m3", "masa3"], 1) },
      { key: "x1", aliases: ["pos1"], default: pickNum(p, ["x1", "pos1"], -4) },
      { key: "x2", aliases: ["pos2"], default: pickNum(p, ["x2", "pos2"], 3) },
      { key: "x3", aliases: ["pos3"], default: pickNum(p, ["x3", "pos3"], 1) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      pickNum(p, ["m1", "masa1"], 2),
      pickNum(p, ["m2", "masa2"], 3),
      pickNum(p, ["m3", "masa3"], 1),
      pickNum(p, ["x1", "pos1"], -4),
      pickNum(p, ["x2", "pos2"], 3),
      pickNum(p, ["x3", "pos3"], 1),
      p.showCurve,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m1 = clamp(toNum(ep.m1, 2), 0.1, 20);
  const m2 = clamp(toNum(ep.m2, 3), 0.1, 20);
  const m3 = clamp(toNum(ep.m3, 1), 0.1, 20);
  const x1 = clamp(toNum(ep.x1, -4), -10, 10);
  const x2 = clamp(toNum(ep.x2, 3), -10, 10);
  const x3 = clamp(toNum(ep.x3, 1), -10, 10);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;

  const xcm = cmX(m1, x1, m2, x2, m3, x3);
  const data = useMemo(() => buildSeries(m1, x1, m2, x2, m3, -10, 10, 0.2), [m1, x1, m2, x2, m3]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Centro de masas en sistemas discretos (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"x_{CM}=\\frac{\\sum m_i x_i}{\\sum m_i}"} /> para tres masas puntuales.
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
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m1</span><input className="form-control" style={{ width: 72 }} value={fmt(m1, 2).replace(",", ".")} onChange={(e) => setValue("m1", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>x1</span><input className="form-control" style={{ width: 72 }} value={fmt(x1, 2).replace(",", ".")} onChange={(e) => setValue("x1", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m2</span><input className="form-control" style={{ width: 72 }} value={fmt(m2, 2).replace(",", ".")} onChange={(e) => setValue("m2", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>x2</span><input className="form-control" style={{ width: 72 }} value={fmt(x2, 2).replace(",", ".")} onChange={(e) => setValue("x2", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m3</span><input className="form-control" style={{ width: 72 }} value={fmt(m3, 2).replace(",", ".")} onChange={(e) => setValue("m3", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>x3</span><input className="form-control" style={{ width: 72 }} value={fmt(x3, 2).replace(",", ".")} onChange={(e) => setValue("x3", e.target.value)} /></div>

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
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>x_CM(x3)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            x_CM = <b>{fmt(xcm, 3)}</b> m (con m_total = <b>{fmt(m1 + m2 + m3, 2)}</b> kg).
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Barrido de la tercera masa</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="x3" type="number" domain={[-10, 10]} tickFormatter={(v) => fmt(v, 1)} label={{ value: "x3 (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 1)} label={{ value: "x_CM (m)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(l) => `x3 = ${fmt(l, 2)} m`} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showCurve ? <Line type="monotone" dataKey="xcm" name="x_CM" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={x3} y={xcm} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
