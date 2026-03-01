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

const buildInclineSeries = ({ m, g, mu, thetaMax = 70, step = 1 }) => {
  const out = [];
  const W = m * g;
  for (let theta = 0; theta <= thetaMax + 1e-9; theta += step) {
    const r = (theta * Math.PI) / 180;
    const N = W * Math.cos(r);
    out.push({
      x: theta,
      fReq: W * Math.sin(r),
      fMax: mu * N,
      N,
    });
  }
  return out;
};

const buildPushSeries = ({ m, g, mu, Fmax = 300, step = 2 }) => {
  const out = [];
  const N = m * g;
  const fMax = mu * N;
  for (let F = 0; F <= Fmax + 1e-9; F += step) {
    out.push({ x: F, f: Math.min(F, fMax), fMax });
  }
  return out;
};

export default function RozamientoEstaticoGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["modo"], default: p.mode || "incline" },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 10) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "mu", aliases: ["muS", "mu_s"], default: pickNum(p, ["mu", "muS", "mu_s"], 0.4) },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 25) },
      { key: "F", aliases: ["Fapplied", "fuerza"], default: pickNum(p, ["F", "Fapplied", "fuerza"], 50) },
      { key: "showReq", aliases: ["mostrarReq"], default: p.showReq ?? true },
      { key: "showMax", aliases: ["mostrarMax"], default: p.showMax ?? true },
    ],
    [
      p.mode,
      pickNum(p, ["m", "masa"], 10),
      pickNum(p, ["g", "gravedad"], 9.81),
      pickNum(p, ["mu", "muS", "mu_s"], 0.4),
      pickNum(p, ["theta", "angulo", "th"], 25),
      pickNum(p, ["F", "Fapplied", "fuerza"], 50),
      p.showReq,
      p.showMax,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode === "push" ? "push" : "incline";
  const m = clamp(toNum(ep.m, 10), 0.1, 200);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const mu = clamp(toNum(ep.mu, 0.4), 0, 2);
  const theta = clamp(toNum(ep.theta, 25), 0, 70);
  const F = clamp(toNum(ep.F, 50), 0, 300);
  const showReq = !!ep.showReq;
  const showMax = !!ep.showMax;

  const data = useMemo(
    () => (mode === "incline" ? buildInclineSeries({ m, g, mu }) : buildPushSeries({ m, g, mu })),
    [mode, m, g, mu]
  );

  const current = useMemo(() => {
    const W = m * g;
    if (mode === "incline") {
      const r = (theta * Math.PI) / 180;
      const N = W * Math.cos(r);
      const fReq = W * Math.sin(r);
      const fMax = mu * N;
      return { x: theta, yReq: fReq, yMax: fMax, slips: fReq > fMax + 1e-9 };
    }
    const N = W;
    const fMax = mu * N;
    const f = Math.min(F, fMax);
    return { x: F, yReq: f, yMax: fMax, slips: F > fMax + 1e-9 };
  }, [mode, m, g, mu, theta, F]);

  const yMax = useMemo(() => {
    const W = m * g;
    return mode === "incline" ? W * 1.12 : Math.max(1, mu * W) * 1.2;
  }, [mode, m, g, mu]);

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setMode = useCallback((v) => { exp.startExperiment(); exp.setValue("mode", v); }, [exp]);
  const setM = useCallback((v) => { exp.startExperiment(); exp.setValue("m", v); }, [exp]);
  const setG = useCallback((v) => { exp.startExperiment(); exp.setValue("g", v); }, [exp]);
  const setMu = useCallback((v) => { exp.startExperiment(); exp.setValue("mu", v); }, [exp]);
  const setTheta = useCallback((v) => { exp.startExperiment(); exp.setValue("theta", v); }, [exp]);
  const setF = useCallback((v) => { exp.startExperiment(); exp.setValue("F", v); }, [exp]);
  const setShowReq = useCallback((v) => { exp.startExperiment(); exp.setValue("showReq", v); }, [exp]);
  const setShowMax = useCallback((v) => { exp.startExperiment(); exp.setValue("showMax", v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Rozamiento estatico (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          El estatico se adapta hasta su limite: <MathInline latex={"f_s \\le \\mu_s N"} />.
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
            <Pill active={mode === "incline"} onClick={() => setMode("incline")}>Plano inclinado</Pill>
            <Pill active={mode === "push"} onClick={() => setMode("push")}>Empuje horizontal</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m</span>
              <input className="form-control" style={{ width: 74 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setM(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>g</span>
              <input className="form-control" style={{ width: 74 }} value={fmt(g, 2).replace(",", ".")} onChange={(e) => setG(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>mu_s</span>
              <input className="form-control" style={{ width: 74 }} value={fmt(mu, 2).replace(",", ".")} onChange={(e) => setMu(e.target.value)} />
            </div>
            {mode === "incline" ? (
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>theta</span>
                <input className="form-control" style={{ width: 74 }} value={fmt(theta, 0).replace(",", ".")} onChange={(e) => setTheta(e.target.value)} />
              </div>
            ) : (
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>F</span>
                <input className="form-control" style={{ width: 74 }} value={fmt(F, 1).replace(",", ".")} onChange={(e) => setF(e.target.value)} />
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
            <Pill active={showReq} onClick={() => setShowReq(!showReq)}>{mode === "incline" ? "f_req" : "f_s"}</Pill>
            <Pill active={showMax} onClick={() => setShowMax(!showMax)}>f_max</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          {mode === "incline" ? (
            <>
              theta = <b>{fmt(current.x, 0)}</b> deg, f_req = <b>{fmt(current.yReq, 2)}</b> N, f_max = <b>{fmt(current.yMax, 2)}</b> N{" "}
              {current.slips ? <b style={{ color: "#ef4444" }}>desliza</b> : <b style={{ color: "#22c55e" }}>sin deslizamiento</b>}
            </>
          ) : (
            <>
              F = <b>{fmt(current.x, 1)}</b> N, f_s = <b>{fmt(current.yReq, 2)}</b> N, f_max = <b>{fmt(current.yMax, 2)}</b> N{" "}
              {current.slips ? <b style={{ color: "#ef4444" }}>supera estatico</b> : <b style={{ color: "#22c55e" }}>estatico activo</b>}
            </>
          )}
        </div>

        <div style={{ width: "100%", height: 360 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                type="number"
                domain={mode === "incline" ? [0, 70] : [0, 300]}
                tickFormatter={(v) => (mode === "incline" ? `${fmt(v, 0)} deg` : fmt(v, 0))}
                label={{ value: mode === "incline" ? "theta (deg)" : "F (N)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={[0, yMax]}
                tickFormatter={(v) => fmt(v, 0)}
                label={{ value: "Fuerza (N)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 2), name]}
                labelFormatter={(l) => (mode === "incline" ? `theta = ${fmt(l, 0)} deg` : `F = ${fmt(l, 1)} N`)}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showReq ? (
                <Line type="monotone" dataKey={mode === "incline" ? "fReq" : "f"} name={mode === "incline" ? "f_req" : "f_s"} stroke="#f59e0b" strokeWidth={3} dot={false} />
              ) : null}
              {showMax ? <Line type="monotone" dataKey="fMax" name="f_max" stroke="#a855f7" strokeWidth={3} dot={false} strokeDasharray="7 6" /> : null}
              {showReq ? <ReferenceDot x={current.x} y={current.yReq} r={5} fill="#fb923c" stroke="none" /> : null}
              <ReferenceLine x={current.x} stroke="#64748b" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
