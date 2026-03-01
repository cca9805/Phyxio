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

const buildMeasureSeries = (mu) => {
  const out = [];
  for (let N = 0; N <= 400; N += 10) out.push({ x: N, f: mu * N });
  return out;
};
const buildInclineSeries = () => {
  const out = [];
  for (let theta = 0; theta <= 70; theta += 1) out.push({ x: theta, muMin: Math.tan((theta * Math.PI) / 180) });
  return out;
};

export default function CoeficienteDeRozamientoGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["modo"], default: p.mode || "measure" },
      { key: "mu", aliases: ["muS", "mu_s", "muK", "mu_k"], default: pickNum(p, ["mu", "muS", "mu_s", "muK", "mu_k"], 0.3) },
      { key: "N", aliases: ["normal"], default: pickNum(p, ["N", "normal"], 120) },
      { key: "f", aliases: ["friccion"], default: pickNum(p, ["f", "friccion"], 30) },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 20) },
      { key: "showModel", aliases: ["mostrarModelo"], default: p.showModel ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      p.mode,
      pickNum(p, ["mu", "muS", "mu_s", "muK", "mu_k"], 0.3),
      pickNum(p, ["N", "normal"], 120),
      pickNum(p, ["f", "friccion"], 30),
      pickNum(p, ["theta", "angulo", "th"], 20),
      p.showModel,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode === "incline" ? "incline" : "measure";
  const mu = clamp(toNum(ep.mu, 0.3), 0, 2.5);
  const N = clamp(toNum(ep.N, 120), 0, 400);
  const f = clamp(toNum(ep.f, 30), 0, 400);
  const theta = clamp(toNum(ep.theta, 20), 0, 70);
  const showModel = !!ep.showModel;
  const showPoint = !!ep.showPoint;

  const muFromPair = N > 0 ? f / N : 0;
  const muMin = Math.tan((theta * Math.PI) / 180);

  const data = useMemo(() => (mode === "measure" ? buildMeasureSeries(mu) : buildInclineSeries()), [mode, mu]);
  const yMax = useMemo(() => (mode === "measure" ? Math.max(1, mu * 400) * 1.08 : 3), [mode, mu]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setMode = useCallback((v) => { exp.startExperiment(); exp.setValue("mode", v); }, [exp]);
  const setMu = useCallback((v) => { exp.startExperiment(); exp.setValue("mu", v); }, [exp]);
  const setN = useCallback((v) => { exp.startExperiment(); exp.setValue("N", v); }, [exp]);
  const setF = useCallback((v) => { exp.startExperiment(); exp.setValue("f", v); }, [exp]);
  const setTheta = useCallback((v) => { exp.startExperiment(); exp.setValue("theta", v); }, [exp]);
  const setShowModel = useCallback((v) => { exp.startExperiment(); exp.setValue("showModel", v); }, [exp]);
  const setShowPoint = useCallback((v) => { exp.startExperiment(); exp.setValue("showPoint", v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Coeficiente de rozamiento (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Identifica <MathInline latex={"\\mu = \\frac{f}{N}"} /> o el umbral en plano inclinado <MathInline latex={"\\mu_{min}=\\tan\\theta"} />.
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
            <Pill active={mode === "measure"} onClick={() => setMode("measure")}>f vs N</Pill>
            <Pill active={mode === "incline"} onClick={() => setMode("incline")}>mu_min vs theta</Pill>

            {mode === "measure" ? (
              <>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>mu</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(mu, 3).replace(",", ".")} onChange={(e) => setMu(e.target.value)} />
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>N</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(N, 1).replace(",", ".")} onChange={(e) => setN(e.target.value)} />
                </div>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span style={{ fontSize: 13, opacity: 0.85 }}>f</span>
                  <input className="form-control" style={{ width: 74 }} value={fmt(f, 1).replace(",", ".")} onChange={(e) => setF(e.target.value)} />
                </div>
              </>
            ) : (
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>theta</span>
                <input className="form-control" style={{ width: 74 }} value={fmt(theta, 0).replace(",", ".")} onChange={(e) => setTheta(e.target.value)} />
              </div>
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
            <Pill active={showModel} onClick={() => setShowModel(!showModel)}>Curva</Pill>
            <Pill active={showPoint} onClick={() => setShowPoint(!showPoint)}>Punto</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          {mode === "measure" ? (
            <>mu(modelo) = <b>{fmt(mu, 3)}</b>, mu(f/N) = <b>{fmt(muFromPair, 3)}</b></>
          ) : (
            <>theta = <b>{fmt(theta, 0)}</b> deg, mu_min = <b>{fmt(muMin, 3)}</b></>
          )}
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                type="number"
                domain={mode === "measure" ? [0, 400] : [0, 70]}
                tickFormatter={(v) => (mode === "measure" ? fmt(v, 0) : `${fmt(v, 0)} deg`)}
                label={{ value: mode === "measure" ? "N (N)" : "theta (deg)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={[0, yMax]}
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: mode === "measure" ? "f (N)" : "mu_min", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 3), name]}
                labelFormatter={(l) => (mode === "measure" ? `N = ${fmt(l, 1)} N` : `theta = ${fmt(l, 0)} deg`)}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showModel ? (
                <Line
                  type="monotone"
                  dataKey={mode === "measure" ? "f" : "muMin"}
                  name={mode === "measure" ? "f = mu N" : "mu_min = tan(theta)"}
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={false}
                />
              ) : null}
              {showPoint ? (
                <ReferenceDot
                  x={mode === "measure" ? N : theta}
                  y={mode === "measure" ? f : muMin}
                  r={5}
                  fill="#fb923c"
                  stroke="none"
                />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
