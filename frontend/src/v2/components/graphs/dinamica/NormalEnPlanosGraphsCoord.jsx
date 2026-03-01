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
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

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

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

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

const buildSeries = ({ m, g, thetaMax = 70, step = 1 }) => {
  const out = [];
  for (let theta = 0; theta <= thetaMax + 1e-9; theta += step) {
    const rad = (theta * Math.PI) / 180;
    const W = m * g;
    out.push({
      theta,
      W,
      N: W * Math.cos(rad),
      Wpar: W * Math.sin(rad),
      Wperp: W * Math.cos(rad),
    });
  }
  return out;
};

export default function NormalEnPlanosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 10) },
      { key: "g", aliases: ["gravedad"], default: pickNum(p, ["g", "gravedad"], 9.81) },
      { key: "theta", aliases: ["angulo", "th"], default: pickNum(p, ["theta", "angulo", "th"], 25) },
      { key: "showN", aliases: ["mostrarN"], default: p.showN ?? true },
      { key: "showW", aliases: ["mostrarW"], default: p.showW ?? true },
      { key: "showComp", aliases: ["mostrarComp"], default: p.showComp ?? true },
    ],
    [pickNum(p, ["m", "masa"], 10), pickNum(p, ["g", "gravedad"], 9.81), pickNum(p, ["theta", "angulo", "th"], 25), p.showN, p.showW, p.showComp]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 10), 0.1, 200);
  const g = clamp(toNum(ep.g, 9.81), 0.1, 30);
  const theta = clamp(toNum(ep.theta, 25), 0, 70);
  const showN = !!ep.showN;
  const showW = !!ep.showW;
  const showComp = !!ep.showComp;

  const data = useMemo(() => buildSeries({ m, g, thetaMax: 70, step: 1 }), [m, g]);
  const current = useMemo(() => {
    const r = (theta * Math.PI) / 180;
    const W = m * g;
    return { theta, W, N: W * Math.cos(r), Wpar: W * Math.sin(r), Wperp: W * Math.cos(r) };
  }, [m, g, theta]);

  const yMax = useMemo(() => Math.max(1, m * g) * 1.1, [m, g]);

  const fmt = (n, d = 2) => {
    if (!Number.isFinite(n)) return "-";
    return n.toFixed(d).replace(".", ",");
  };

  const setM = useCallback((v) => { exp.startExperiment(); exp.setValue("m", v); }, [exp]);
  const setG = useCallback((v) => { exp.startExperiment(); exp.setValue("g", v); }, [exp]);
  const setTheta = useCallback((v) => { exp.startExperiment(); exp.setValue("theta", v); }, [exp]);
  const setShowN = useCallback((v) => { exp.startExperiment(); exp.setValue("showN", v); }, [exp]);
  const setShowW = useCallback((v) => { exp.startExperiment(); exp.setValue("showW", v); }, [exp]);
  const setShowComp = useCallback((v) => { exp.startExperiment(); exp.setValue("showComp", v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Normal en planos (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          En un plano inclinado sin aceleracion perpendicular: <MathInline latex={"N = m g \\cos\\theta"} />.
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
              <input className="form-control" style={{ width: 88 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setM(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>g (m/s2)</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(g, 2).replace(",", ".")} onChange={(e) => setG(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>theta (deg)</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(theta, 0).replace(",", ".")} onChange={(e) => setTheta(e.target.value)} />
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
            <Pill active={showN} onClick={() => setShowN(!showN)}>N(theta)</Pill>
            <Pill active={showW} onClick={() => setShowW(!showW)}>W = mg</Pill>
            <Pill active={showComp} onClick={() => setShowComp(!showComp)}>mg_par / mg_perp</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div style={{ fontWeight: 900, opacity: 0.95 }}>Curvas de fuerza vs angulo</div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>
                theta = <b>{fmt(current.theta, 0)}</b> deg | N = <b>{fmt(current.N, 2)}</b> N | W = <b>{fmt(current.W, 2)}</b> N
              </div>
            </div>

            <div style={{ width: "100%", height: 330, marginTop: 10 }}>
              <ResponsiveContainer>
                <LineChart data={data} margin={{ left: 8, right: 18, top: 10, bottom: 10 }}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" />
                  <XAxis
                    dataKey="theta"
                    type="number"
                    domain={[0, 70]}
                    tick={{ fill: "rgba(226,232,240,0.80)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    tickLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    label={{ value: "theta (deg)", position: "insideBottomRight", fill: "rgba(226,232,240,0.65)" }}
                  />
                  <YAxis
                    domain={[0, yMax]}
                    tick={{ fill: "rgba(226,232,240,0.75)", fontSize: 12 }}
                    axisLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    tickLine={{ stroke: "rgba(255,255,255,0.12)" }}
                    label={{ value: "F (N)", angle: -90, position: "insideLeft", fill: "rgba(226,232,240,0.65)" }}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(2,6,23,0.95)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 12,
                      color: "rgba(226,232,240,0.9)",
                    }}
                    formatter={(value, name) => [fmt(value, 2), name]}
                    labelFormatter={(l) => `theta = ${fmt(l, 0)} deg`}
                  />
                  {showW ? <Line type="monotone" dataKey="W" name="W" stroke="#ef4444" strokeWidth={3} dot={false} /> : null}
                  {showN ? <Line type="monotone" dataKey="N" name="N" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
                  {showComp ? (
                    <>
                      <Line type="monotone" dataKey="Wpar" name="mg_par" stroke="#a855f7" strokeWidth={2} dot={false} strokeDasharray="7 6" />
                      <Line type="monotone" dataKey="Wperp" name="mg_perp" stroke="#22c55e" strokeWidth={2} dot={false} strokeDasharray="7 6" />
                    </>
                  ) : null}
                  {showN ? <ReferenceDot x={current.theta} y={current.N} r={5} fill="#60a5fa" stroke="none" /> : null}
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
