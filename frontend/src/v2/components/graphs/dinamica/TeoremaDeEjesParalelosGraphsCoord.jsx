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

function buildSeries(Icm, m, dMax, step = 0.01) {
  const out = [];
  for (let d = 0; d <= dMax + 1e-9; d += step) {
    out.push({ d, I: Icm + m * d * d });
  }
  return out;
}

export default function TeoremaDeEjesParalelosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "Icm", aliases: ["I_cm", "icm"], default: pickNum(p, ["Icm", "I_cm", "icm"], 0.12) },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 2) },
      { key: "d", aliases: ["distancia"], default: pickNum(p, ["d", "distancia"], 0.4) },
      { key: "dMax", aliases: ["d_max", "distanciaMax"], default: pickNum(p, ["dMax", "d_max", "distanciaMax"], 2) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showZero", aliases: ["mostrarCero"], default: p.showZero ?? true },
    ],
    [
      pickNum(p, ["Icm", "I_cm", "icm"], 0.12),
      pickNum(p, ["m", "masa"], 2),
      pickNum(p, ["d", "distancia"], 0.4),
      pickNum(p, ["dMax", "d_max", "distanciaMax"], 2),
      p.showCurve,
      p.showPoint,
      p.showZero,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const Icm = clamp(toNum(ep.Icm, 0.12), 0, 50);
  const m = clamp(toNum(ep.m, 2), 0.01, 1000);
  const dMax = clamp(toNum(ep.dMax, 2), 0.1, 10);
  const d = clamp(toNum(ep.d, 0.4), 0, dMax);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showZero = !!ep.showZero;

  const INow = Icm + m * d * d;
  const data = useMemo(() => buildSeries(Icm, m, dMax, 0.01), [Icm, m, dMax]);

  const fmt = (n, dec = 3) => (Number.isFinite(n) ? n.toFixed(dec).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Teorema de ejes paralelos (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"I = I_{cm} + m d^2"} />.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>I_cm (kg*m²)</span>
              <input className="form-control" style={{ width: 96 }} value={fmt(Icm, 3).replace(",", ".")} onChange={(e) => setValue("Icm", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m (kg)</span>
              <input className="form-control" style={{ width: 96 }} value={fmt(m, 3).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>d (m)</span>
              <input className="form-control" style={{ width: 96 }} value={fmt(d, 3).replace(",", ".")} onChange={(e) => setValue("d", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>d_max (m)</span>
              <input className="form-control" style={{ width: 96 }} value={fmt(dMax, 2).replace(",", ".")} onChange={(e) => setValue("dMax", e.target.value)} />
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
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>Curva I(d)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>Linea y=0</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              <MathInline latex={"I = I_{cm}+m d^2"} /> = <b>{fmt(INow, 4)}</b> kg*m².
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Dependencia cuadratica de I con d</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="d"
                type="number"
                domain={[0, dMax]}
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "d (m)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "I (kg*m²)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 5), name]}
                labelFormatter={(l) => `d = ${fmt(l, 4)} m`}
              />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" /> : null}
              {showCurve ? <Line type="monotone" dataKey="I" name="I(d)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={d} y={INow} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
