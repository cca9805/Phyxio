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

const buildHorizontalSeries = ({ m, g, mu, Fmax = 300, step = 2 }) => {
  const N = m * g;
  const fk = mu * N;
  const out = [];
  for (let F = 0; F <= Fmax + 1e-9; F += step) {
    const Fnet = F - fk;
    out.push({ x: F, fk, Fnet, a: Fnet / m });
  }
  return out;
};

const buildInclineSeries = ({ g, mu, thetaMax = 70, step = 1 }) => {
  const out = [];
  for (let theta = 0; theta <= thetaMax + 1e-9; theta += step) {
    const r = (theta * Math.PI) / 180;
    out.push({
      x: theta,
      a: g * (Math.sin(r) - mu * Math.cos(r)),
    });
  }
  return out;
};

export default function RozamientoDinamicoGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["escena"], default: p.mode || "horizontal" },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 10) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "mu", aliases: ["muK", "mu_k"], default: pickNum(p, ["mu", "muK", "mu_k"], 0.25) },
      { key: "F", aliases: ["fuerza"], default: pickNum(p, ["F", "fuerza"], 60) },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 25) },
      { key: "showFk", aliases: ["mostrarFk"], default: p.showFk ?? true },
      { key: "showFnet", aliases: ["mostrarFnet"], default: p.showFnet ?? true },
      { key: "showA", aliases: ["mostrarA"], default: p.showA ?? true },
    ],
    [
      p.mode,
      pickNum(p, ["m", "masa"], 10),
      pickNum(p, ["g", "gravedad"], 9.81),
      pickNum(p, ["mu", "muK", "mu_k"], 0.25),
      pickNum(p, ["F", "fuerza"], 60),
      pickNum(p, ["theta", "angulo", "th"], 25),
      p.showFk,
      p.showFnet,
      p.showA,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode === "incline" ? "incline" : "horizontal";
  const m = clamp(toNum(ep.m, 10), 0.1, 200);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const mu = clamp(toNum(ep.mu, 0.25), 0, 2);
  const F = clamp(toNum(ep.F, 60), 0, 300);
  const theta = clamp(toNum(ep.theta, 25), 0, 70);
  const showFk = !!ep.showFk;
  const showFnet = !!ep.showFnet;
  const showA = !!ep.showA;

  const data = useMemo(
    () => (mode === "horizontal" ? buildHorizontalSeries({ m, g, mu }) : buildInclineSeries({ g, mu })),
    [mode, m, g, mu]
  );

  const current = useMemo(() => {
    if (mode === "horizontal") {
      const N = m * g;
      const fk = mu * N;
      const Fnet = F - fk;
      return { x: F, fk, Fnet, a: Fnet / m, N };
    }
    const r = (theta * Math.PI) / 180;
    return { x: theta, a: g * (Math.sin(r) - mu * Math.cos(r)) };
  }, [mode, m, g, mu, F, theta]);

  const yDomain = useMemo(() => {
    if (mode === "horizontal") {
      const fk = mu * m * g;
      const minV = -fk;
      const maxV = 300 - fk;
      const pad = Math.max(1, Math.abs(minV), Math.abs(maxV)) * 0.14;
      return [minV - pad, maxV + pad];
    }
    const aMin = g * (0 - mu);
    const aMax = g * (Math.sin((70 * Math.PI) / 180) - mu * Math.cos((70 * Math.PI) / 180));
    const pad = Math.max(0.6, Math.abs(aMin), Math.abs(aMax)) * 0.2;
    return [aMin - pad, aMax + pad];
  }, [mode, m, g, mu]);

  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setMode = useCallback((v) => { exp.startExperiment(); exp.setValue("mode", v); }, [exp]);
  const setM = useCallback((v) => { exp.startExperiment(); exp.setValue("m", v); }, [exp]);
  const setG = useCallback((v) => { exp.startExperiment(); exp.setValue("g", v); }, [exp]);
  const setMu = useCallback((v) => { exp.startExperiment(); exp.setValue("mu", v); }, [exp]);
  const setF = useCallback((v) => { exp.startExperiment(); exp.setValue("F", v); }, [exp]);
  const setTheta = useCallback((v) => { exp.startExperiment(); exp.setValue("theta", v); }, [exp]);
  const setShowFk = useCallback((v) => { exp.startExperiment(); exp.setValue("showFk", v); }, [exp]);
  const setShowFnet = useCallback((v) => { exp.startExperiment(); exp.setValue("showFnet", v); }, [exp]);
  const setShowA = useCallback((v) => { exp.startExperiment(); exp.setValue("showA", v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Rozamiento dinamico (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          En movimiento: <MathInline latex={"f_k = \\mu_k N"} />.
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
            <Pill active={mode === "horizontal"} onClick={() => setMode("horizontal")}>Mesa + F</Pill>
            <Pill active={mode === "incline"} onClick={() => setMode("incline")}>Plano inclinado</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m</span>
              <input className="form-control" style={{ width: 74 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setM(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>g</span>
              <input className="form-control" style={{ width: 74 }} value={fmt(g, 2).replace(",", ".")} onChange={(e) => setG(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>mu_k</span>
              <input className="form-control" style={{ width: 74 }} value={fmt(mu, 2).replace(",", ".")} onChange={(e) => setMu(e.target.value)} />
            </div>
            {mode === "horizontal" ? (
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>F</span>
                <input className="form-control" style={{ width: 74 }} value={fmt(F, 1).replace(",", ".")} onChange={(e) => setF(e.target.value)} />
              </div>
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
            <Pill active={showFk} onClick={() => setShowFk(!showFk)}>f_k</Pill>
            <Pill active={showFnet} onClick={() => setShowFnet(!showFnet)}>{mode === "horizontal" ? "F_net" : "g(sin-theta-mu cos-theta)"}</Pill>
            <Pill active={showA} onClick={() => setShowA(!showA)}>a</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          {mode === "horizontal" ? (
            <>
              N = <b>{fmt(current.N, 2)}</b> N, f_k = <b>{fmt(current.fk, 2)}</b> N, F_net = <b>{fmt(current.Fnet, 2)}</b> N, a = <b>{fmt(current.a, 2)}</b> m/s2
            </>
          ) : (
            <>
              theta = <b>{fmt(current.x, 0)}</b> deg, a = <b>{fmt(current.a, 2)}</b> m/s2
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
                domain={mode === "horizontal" ? [0, 300] : [0, 70]}
                tickFormatter={(v) => (mode === "horizontal" ? fmt(v, 0) : `${fmt(v, 0)} deg`)}
                label={{ value: mode === "horizontal" ? "F (N)" : "theta (deg)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={yDomain}
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: mode === "horizontal" ? "F / a" : "a (m/s2)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 3), name]}
                labelFormatter={(l) => (mode === "horizontal" ? `F = ${fmt(l, 0)} N` : `theta = ${fmt(l, 0)} deg`)}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {mode === "horizontal" ? (
                <>
                  {showFk ? <Line type="monotone" dataKey="fk" name="f_k" stroke="#f59e0b" strokeWidth={3} dot={false} strokeDasharray="7 6" /> : null}
                  {showFnet ? <Line type="monotone" dataKey="Fnet" name="F_net" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
                  {showA ? <Line type="monotone" dataKey="a" name="a" stroke="#22c55e" strokeWidth={3} dot={false} strokeDasharray="3 8" /> : null}
                  {showFnet ? <ReferenceDot x={current.x} y={current.Fnet} r={5} fill="#60a5fa" stroke="none" /> : null}
                </>
              ) : (
                <>
                  {showA ? <Line type="monotone" dataKey="a" name="a(theta)" stroke="#22c55e" strokeWidth={3} dot={false} /> : null}
                  {showA ? <ReferenceDot x={current.x} y={current.a} r={5} fill="#34d399" stroke="none" /> : null}
                </>
              )}
              <ReferenceLine x={current.x} stroke="#64748b" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
