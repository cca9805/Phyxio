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
import { computeTau, computeD } from "@/v2/engine/models/dinamica/torqueMomento";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const rad2deg = (r) => (r * 180) / Math.PI;

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

function buildSeries(F, r, step = 1) {
  const out = [];
  for (let deg = 0; deg <= 180 + 1e-9; deg += step) {
    const theta = (deg * Math.PI) / 180;
    out.push({ theta, tau: computeTau({ F, r, theta }) });
  }
  return out;
}

export default function TorqueMomentoGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "F", aliases: ["f", "fuerza"], default: pickNum(p, ["F", "f", "fuerza"], 20) },
      { key: "r", aliases: ["brazo"], default: pickNum(p, ["r", "brazo"], 0.35) },
      { key: "theta", aliases: ["theta", "angulo", "angle"], default: pickNum(p, ["theta", "angulo", "angle"], Math.PI / 2) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showMax", aliases: ["mostrarMax"], default: p.showMax ?? true },
    ],
    [
      pickNum(p, ["F", "f", "fuerza"], 20),
      pickNum(p, ["r", "brazo"], 0.35),
      pickNum(p, ["theta", "angulo", "angle"], Math.PI / 2),
      p.showCurve,
      p.showPoint,
      p.showMax,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const F = clamp(toNum(ep.F, 20), 0, 1000);
  const r = clamp(toNum(ep.r, 0.35), 0, 10);
  const theta = clamp(toNum(ep.theta, Math.PI / 2), 0, Math.PI);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showMax = !!ep.showMax;

  const tauNow = computeTau({ F, r, theta });
  const dNow = computeD({ r, theta });
  const tauMax = F * r;
  const data = useMemo(() => buildSeries(F, r, 1), [F, r]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Calculo del torque (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\tau=rF\\sin\\theta"} /> y <MathInline latex={"d=r\\sin\\theta"} />.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>F (N)</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(F, 2).replace(",", ".")} onChange={(e) => setValue("F", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>r (m)</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(r, 3).replace(",", ".")} onChange={(e) => setValue("r", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>theta (rad)</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(theta, 3).replace(",", ".")} onChange={(e) => setValue("theta", e.target.value)} />
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
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showMax} onClick={() => setValue("showMax", !showMax)}>Punto maximo</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              d = <b>{fmt(dNow, 4)}</b> m | tau = <b>{fmt(tauNow, 4)}</b> N*m | tau_max = <b>{fmt(tauMax, 4)}</b> N*m.
              <br />
              theta actual = <b>{fmt(theta, 3)}</b> rad ({fmt(rad2deg(theta), 1)} deg).
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Curva tau(theta) con F y r fijos</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="theta"
                type="number"
                domain={[0, Math.PI]}
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "theta (rad)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "tau (N*m)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 5), name]}
                labelFormatter={(l) => `theta = ${fmt(l, 4)} rad (${fmt(rad2deg(l), 1)} deg)`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />

              {showCurve ? <Line type="monotone" dataKey="tau" name="tau = rF sin(theta)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showMax ? <ReferenceDot x={Math.PI / 2} y={tauMax} r={5} fill="#ef4444" stroke="none" /> : null}
              {showPoint ? <ReferenceDot x={theta} y={tauNow} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
