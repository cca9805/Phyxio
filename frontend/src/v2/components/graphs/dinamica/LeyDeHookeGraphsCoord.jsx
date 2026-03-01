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

const buildSeries = (k, xMax = 0.4, step = 0.01) => {
  const out = [];
  for (let x = -xMax; x <= xMax + 1e-9; x += step) {
    out.push({
      x,
      F: -k * x,
      U: 0.5 * k * x * x,
    });
  }
  return out;
};

export default function LeyDeHookeGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "k", aliases: ["constante"], default: pickNum(p, ["k", "constante"], 80) },
      { key: "x", aliases: ["elongacion"], default: pickNum(p, ["x", "elongacion"], 0.12) },
      { key: "mode", aliases: ["grafico"], default: p.mode || "F" },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      pickNum(p, ["k", "constante"], 80),
      pickNum(p, ["x", "elongacion"], 0.12),
      p.mode,
      p.showCurve,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const k = clamp(toNum(ep.k, 80), 0.1, 2000);
  const x = clamp(toNum(ep.x, 0.12), -0.4, 0.4);
  const mode = ep.mode === "U" ? "U" : "F";
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;

  const data = useMemo(() => buildSeries(k), [k]);
  const Fnow = -k * x;
  const Unow = 0.5 * k * x * x;

  const yDomain = useMemo(() => {
    if (mode === "F") {
      const y = k * 0.4;
      return [-y * 1.06, y * 1.06];
    }
    return [0, 0.5 * k * 0.4 * 0.4 * 1.12];
  }, [mode, k]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setK = useCallback((v) => { exp.startExperiment(); exp.setValue("k", v); }, [exp]);
  const setX = useCallback((v) => { exp.startExperiment(); exp.setValue("x", v); }, [exp]);
  const setMode = useCallback((v) => { exp.startExperiment(); exp.setValue("mode", v); }, [exp]);
  const setShowCurve = useCallback((v) => { exp.startExperiment(); exp.setValue("showCurve", v); }, [exp]);
  const setShowPoint = useCallback((v) => { exp.startExperiment(); exp.setValue("showPoint", v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Ley de Hooke (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"F_s=-kx"} /> y <MathInline latex={"U=\\frac{1}{2}kx^2"} />.
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
            <Pill active={mode === "F"} onClick={() => setMode("F")}>F(x)</Pill>
            <Pill active={mode === "U"} onClick={() => setMode("U")}>U(x)</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>k</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(k, 2).replace(",", ".")} onChange={(e) => setK(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>x</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(x, 3).replace(",", ".")} onChange={(e) => setX(e.target.value)} />
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
            <Pill active={showCurve} onClick={() => setShowCurve(!showCurve)}>Curva</Pill>
            <Pill active={showPoint} onClick={() => setShowPoint(!showPoint)}>Punto</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          {mode === "F" ? <>F_s = <b>{fmt(Fnow, 3)}</b> N</> : <>U = <b>{fmt(Unow, 3)}</b> J</>}
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[-0.4, 0.4]}
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "x (m)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={yDomain}
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: mode === "F" ? "F (N)" : "U (J)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(l) => `x = ${fmt(l, 3)} m`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showCurve ? (
                <Line
                  type="monotone"
                  dataKey={mode}
                  name={mode === "F" ? "F_s = -k x" : "U = 1/2 k x^2"}
                  stroke={mode === "F" ? "#3b82f6" : "#22c55e"}
                  strokeWidth={3}
                  dot={false}
                />
              ) : null}
              {showPoint ? <ReferenceDot x={x} y={mode === "F" ? Fnow : Unow} r={5} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
