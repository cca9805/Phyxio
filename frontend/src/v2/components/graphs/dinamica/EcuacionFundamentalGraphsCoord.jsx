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
import { computeAlpha } from "@/v2/engine/models/dinamica/ecuacionFundamentalRotacional";

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

function buildSeries(I, step = 0.1) {
  const out = [];
  for (let sumTau = 0; sumTau <= 10 + 1e-9; sumTau += step) {
    out.push({ x: sumTau, y: computeAlpha({ sum_tau: sumTau, I }) });
  }
  return out;
}

export default function EcuacionFundamentalGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "sum_tau", aliases: ["sumTau", "tau", "t"], default: pickNum(p, ["sum_tau", "sumTau", "tau", "t"], 3) },
      { key: "I", aliases: ["inercia"], default: pickNum(p, ["I", "inercia"], 0.75) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showSlope", aliases: ["mostrarPendiente"], default: p.showSlope ?? true },
    ],
    [
      pickNum(p, ["sum_tau", "sumTau", "tau", "t"], 3),
      pickNum(p, ["I", "inercia"], 0.75),
      p.showCurve,
      p.showPoint,
      p.showSlope,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const sumTau = clamp(toNum(ep.sum_tau, 3), 0, 10);
  const I = clamp(toNum(ep.I, 0.75), 0.05, 20);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showSlope = !!ep.showSlope;

  const alphaNow = computeAlpha({ sum_tau: sumTau, I });
  const slope = 1 / I;
  const data = useMemo(() => buildSeries(I, 0.1), [I]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Ecuacion fundamental rotacional (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\sum \\tau = I\\alpha"} /> y por tanto <MathInline latex={"\\alpha=\\frac{\\sum\\tau}{I}"} />.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>sum tau (N*m)</span>
              <input className="form-control" style={{ width: 100 }} value={fmt(sumTau, 2).replace(",", ".")} onChange={(e) => setValue("sum_tau", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>I (kg*m²)</span>
              <input className="form-control" style={{ width: 100 }} value={fmt(I, 3).replace(",", ".")} onChange={(e) => setValue("I", e.target.value)} />
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
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>Curva alpha(sum tau)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showSlope} onClick={() => setValue("showSlope", !showSlope)}>Mostrar pendiente</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              alpha = <b>{fmt(alphaNow, 4)}</b> rad/s²
              {showSlope ? <> | pendiente 1/I = <b>{fmt(slope, 4)}</b></> : null}
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Variacion de alpha con el torque neto</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 10]}
                tickFormatter={(v) => fmt(v, 1)}
                label={{ value: "sum tau (N*m)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(v) => fmt(v, 1)}
                label={{ value: "alpha (rad/s²)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 5), name]}
                labelFormatter={(l) => `sum tau = ${fmt(l, 3)} N*m`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />

              {showCurve ? <Line type="monotone" dataKey="y" name="alpha" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={sumTau} y={alphaNow} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
