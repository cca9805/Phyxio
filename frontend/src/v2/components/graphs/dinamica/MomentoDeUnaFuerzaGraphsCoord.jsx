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
const deg2rad = (d) => (d * Math.PI) / 180;

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

function buildSeries(r, F, step = 1) {
  const out = [];
  for (let theta = 0; theta <= 180 + 1e-9; theta += step) {
    out.push({ theta, tau: r * F * Math.sin(deg2rad(theta)) });
  }
  return out;
}

export default function MomentoDeUnaFuerzaGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "r", aliases: ["brazo"], default: pickNum(p, ["r", "brazo"], 0.5) },
      { key: "F", aliases: ["f", "fuerza"], default: pickNum(p, ["F", "f", "fuerza"], 50) },
      { key: "theta", aliases: ["thetaDeg", "angulo", "angle"], default: pickNum(p, ["theta", "thetaDeg", "angulo", "angle"], 60) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showMax", aliases: ["mostrarMax"], default: p.showMax ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      pickNum(p, ["r", "brazo"], 0.5),
      pickNum(p, ["F", "f", "fuerza"], 50),
      pickNum(p, ["theta", "thetaDeg", "angulo", "angle"], 60),
      p.showCurve,
      p.showMax,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const r = clamp(toNum(ep.r, 0.5), 0, 5);
  const F = clamp(toNum(ep.F, 50), 0, 500);
  const theta = clamp(toNum(ep.theta, 60), 0, 180);
  const showCurve = !!ep.showCurve;
  const showMax = !!ep.showMax;
  const showPoint = !!ep.showPoint;

  const tauNow = r * F * Math.sin(deg2rad(theta));
  const tauMax = r * F;
  const data = useMemo(() => buildSeries(r, F, 1), [r, F]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Momento de una fuerza (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\tau=rF\\sin\\theta"} />.
          El momento es maximo para <MathInline latex={"\\theta=90^{\\circ}"} />.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>r (m)</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(r, 2).replace(",", ".")} onChange={(e) => setValue("r", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>F (N)</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(F, 2).replace(",", ".")} onChange={(e) => setValue("F", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>theta (deg)</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(theta, 0).replace(",", ".")} onChange={(e) => setValue("theta", e.target.value)} />
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
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>Curva tau(theta)</Pill>
            <Pill active={showMax} onClick={() => setValue("showMax", !showMax)}>Marcar maximo</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>
              tau(theta) = <b>{fmt(tauNow, 3)}</b> N·m | tau_max = <b>{fmt(tauMax, 3)}</b> N·m.
              <br />
              En theta = 0 deg o 180 deg, el momento es cero.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Variacion del momento con el angulo</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="theta"
                type="number"
                domain={[0, 180]}
                tickFormatter={(v) => fmt(v, 0)}
                label={{ value: "theta (deg)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(v) => fmt(v, 1)}
                label={{ value: "tau (N·m)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(l) => `theta = ${fmt(l, 1)} deg`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />

              {showCurve ? <Line type="monotone" dataKey="tau" name="tau = rF sin(theta)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showMax ? <ReferenceDot x={90} y={tauMax} r={5} fill="#ef4444" stroke="none" /> : null}
              {showPoint ? <ReferenceDot x={theta} y={tauNow} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

