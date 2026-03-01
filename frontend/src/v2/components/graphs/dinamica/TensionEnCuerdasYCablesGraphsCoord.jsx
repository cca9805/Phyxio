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

const buildMassSeries = (g, mMax = 20, step = 0.5) => {
  const out = [];
  for (let m = 0; m <= mMax + 1e-9; m += step) out.push({ x: m, T: m * g });
  return out;
};

const buildAtwoodSeries = (m1, m2, g, aMax = 8, step = 0.25) => {
  const out = [];
  for (let a = -aMax; a <= aMax + 1e-9; a += step) out.push({ x: a, T1: m1 * (g - a), T2: m2 * (g + a) });
  return out;
};

export default function TensionEnCuerdasYCablesGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["escena"], default: p.mode || "mass" },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 5) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "m1", aliases: ["masa1"], default: pickNum(p, ["m1", "masa1"], 5) },
      { key: "m2", aliases: ["masa2"], default: pickNum(p, ["m2", "masa2"], 3) },
      { key: "showT1", aliases: ["mostrarT1"], default: p.showT1 ?? true },
      { key: "showT2", aliases: ["mostrarT2"], default: p.showT2 ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      p.mode,
      pickNum(p, ["m", "masa"], 5),
      pickNum(p, ["g", "gravedad"], 9.81),
      pickNum(p, ["m1", "masa1"], 5),
      pickNum(p, ["m2", "masa2"], 3),
      p.showT1,
      p.showT2,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode === "atwood" ? "atwood" : "mass";
  const m = clamp(toNum(ep.m, 5), 0.1, 50);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const m1 = clamp(toNum(ep.m1, 5), 0.1, 50);
  const m2 = clamp(toNum(ep.m2, 3), 0.1, 50);
  const showT1 = !!ep.showT1;
  const showT2 = !!ep.showT2;
  const showPoint = !!ep.showPoint;

  const aReal = ((m1 - m2) / (m1 + m2)) * g;
  const Treal = m1 * (g - aReal);

  const data = useMemo(() => (mode === "mass" ? buildMassSeries(g) : buildAtwoodSeries(m1, m2, g)), [mode, g, m1, m2]);
  const yMax = useMemo(() => {
    if (mode === "mass") return Math.max(1, 20 * g) * 1.06;
    return Math.max(1, m1 * (g + 8), m2 * (g + 8)) * 1.06;
  }, [mode, g, m1, m2]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setMode = useCallback((v) => { exp.startExperiment(); exp.setValue("mode", v); }, [exp]);
  const setM = useCallback((v) => { exp.startExperiment(); exp.setValue("m", v); }, [exp]);
  const setG = useCallback((v) => { exp.startExperiment(); exp.setValue("g", v); }, [exp]);
  const setM1 = useCallback((v) => { exp.startExperiment(); exp.setValue("m1", v); }, [exp]);
  const setM2 = useCallback((v) => { exp.startExperiment(); exp.setValue("m2", v); }, [exp]);
  const setShowT1 = useCallback((v) => { exp.startExperiment(); exp.setValue("showT1", v); }, [exp]);
  const setShowT2 = useCallback((v) => { exp.startExperiment(); exp.setValue("showT2", v); }, [exp]);
  const setShowPoint = useCallback((v) => { exp.startExperiment(); exp.setValue("showPoint", v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Tension en cuerdas y cables (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Relaciones tipicas: <MathInline latex={"T=mg"} /> y en Atwood <MathInline latex={"T=m_1(g-a)=m_2(g+a)"} />.
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
            <Pill active={mode === "mass"} onClick={() => setMode("mass")}>Masa colgante</Pill>
            <Pill active={mode === "atwood"} onClick={() => setMode("atwood")}>Atwood</Pill>

            {mode === "mass" ? (
              <>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>m</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setM(e.target.value)} />
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>g</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(g, 2).replace(",", ".")} onChange={(e) => setG(e.target.value)} />
                </div>
              </>
            ) : (
              <>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>m1</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(m1, 2).replace(",", ".")} onChange={(e) => setM1(e.target.value)} />
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>m2</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(m2, 2).replace(",", ".")} onChange={(e) => setM2(e.target.value)} />
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>g</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(g, 2).replace(",", ".")} onChange={(e) => setG(e.target.value)} />
                </div>
              </>
            )}

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
            <Pill active={showT1} onClick={() => setShowT1(!showT1)}>{mode === "mass" ? "T" : "T1"}</Pill>
            {mode === "atwood" ? <Pill active={showT2} onClick={() => setShowT2(!showT2)}>T2</Pill> : null}
            <Pill active={showPoint} onClick={() => setShowPoint(!showPoint)}>Punto</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          {mode === "mass" ? (
            <>T = <b>{fmt(m * g, 3)}</b> N</>
          ) : (
            <>a = <b>{fmt(aReal, 3)}</b> m/s2, T = <b>{fmt(Treal, 3)}</b> N</>
          )}
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                type="number"
                domain={mode === "mass" ? [0, 20] : [-8, 8]}
                tickFormatter={(v) => (mode === "mass" ? fmt(v, 0) : fmt(v, 1))}
                label={{ value: mode === "mass" ? "m (kg)" : "a (m/s2)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={[0, yMax]}
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "T (N)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 3), name]}
                labelFormatter={(l) => (mode === "mass" ? `m = ${fmt(l, 2)} kg` : `a = ${fmt(l, 2)} m/s2`)}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showT1 ? <Line type="monotone" dataKey={mode === "mass" ? "T" : "T1"} name={mode === "mass" ? "T" : "T1"} stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {mode === "atwood" && showT2 ? <Line type="monotone" dataKey="T2" name="T2" stroke="#22c55e" strokeWidth={3} dot={false} strokeDasharray="7 6" /> : null}
              {showPoint ? <ReferenceDot x={mode === "mass" ? m : aReal} y={mode === "mass" ? m * g : Treal} r={5} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
