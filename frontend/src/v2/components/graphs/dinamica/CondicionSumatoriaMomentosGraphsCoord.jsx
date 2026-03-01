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

const torque = (r, F, thetaDeg) => r * F * Math.sin(deg2rad(thetaDeg));

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

function buildSeries(r1, F1, theta1, r2, F2, step = 2) {
  const tau1 = torque(r1, F1, theta1);
  const out = [];
  for (let th2 = 0; th2 <= 180 + 1e-9; th2 += step) {
    const tau2 = torque(r2, F2, th2);
    out.push({ th2, tau1, tau2, tauNet: tau1 - tau2 });
  }
  return out;
}

export default function CondicionSumatoriaMomentosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "r1", aliases: ["brazo1"], default: pickNum(p, ["r1", "brazo1"], 0.35) },
      { key: "F1", aliases: ["f1"], default: pickNum(p, ["F1", "f1"], 30) },
      { key: "theta1", aliases: ["angulo1", "t1"], default: pickNum(p, ["theta1", "angulo1", "t1"], 90) },
      { key: "r2", aliases: ["brazo2"], default: pickNum(p, ["r2", "brazo2"], 0.25) },
      { key: "F2", aliases: ["f2"], default: pickNum(p, ["F2", "f2"], 35) },
      { key: "theta2", aliases: ["angulo2", "t2", "theta"], default: pickNum(p, ["theta2", "angulo2", "t2", "theta"], 60) },
      { key: "showNet", aliases: ["mostrarNet"], default: p.showNet ?? true },
      { key: "showTau1", aliases: ["mostrarTau1"], default: p.showTau1 ?? true },
      { key: "showTau2", aliases: ["mostrarTau2"], default: p.showTau2 ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      pickNum(p, ["r1", "brazo1"], 0.35),
      pickNum(p, ["F1", "f1"], 30),
      pickNum(p, ["theta1", "angulo1", "t1"], 90),
      pickNum(p, ["r2", "brazo2"], 0.25),
      pickNum(p, ["F2", "f2"], 35),
      pickNum(p, ["theta2", "angulo2", "t2", "theta"], 60),
      p.showNet,
      p.showTau1,
      p.showTau2,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const r1 = clamp(toNum(ep.r1, 0.35), 0, 5);
  const F1 = clamp(toNum(ep.F1, 30), 0, 1000);
  const theta1 = clamp(toNum(ep.theta1, 90), 0, 180);
  const r2 = clamp(toNum(ep.r2, 0.25), 0, 5);
  const F2 = clamp(toNum(ep.F2, 35), 0, 1000);
  const theta2 = clamp(toNum(ep.theta2, 60), 0, 180);

  const showNet = !!ep.showNet;
  const showTau1 = !!ep.showTau1;
  const showTau2 = !!ep.showTau2;
  const showPoint = !!ep.showPoint;

  const tau1 = torque(r1, F1, theta1);
  const tau2 = torque(r2, F2, theta2);
  const tauNet = tau1 - tau2;
  const sin2 = Math.sin(deg2rad(theta2));
  const F2eq = r2 > 0 && Math.abs(sin2) > 1e-9 ? tau1 / (r2 * sin2) : Infinity;

  const data = useMemo(() => buildSeries(r1, F1, theta1, r2, F2, 2), [r1, F1, theta1, r2, F2]);

  const yMax = useMemo(() => {
    let m = 1;
    for (const row of data) m = Math.max(m, Math.abs(row.tau1), Math.abs(row.tau2), Math.abs(row.tauNet));
    return m * 1.12;
  }, [data]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Condicion de sumatoria de momentos (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Equilibrio rotacional cuando <MathInline latex={"\\sum \\tau = 0"} />.
          Modelo: <MathInline latex={"\\tau_{net}=\\tau_1-\\tau_2"} />.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>r1</span>
              <input className="form-control" style={{ width: 80 }} value={fmt(r1, 2).replace(",", ".")} onChange={(e) => setValue("r1", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>F1</span>
              <input className="form-control" style={{ width: 80 }} value={fmt(F1, 2).replace(",", ".")} onChange={(e) => setValue("F1", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>theta1</span>
              <input className="form-control" style={{ width: 80 }} value={fmt(theta1, 0).replace(",", ".")} onChange={(e) => setValue("theta1", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>r2</span>
              <input className="form-control" style={{ width: 80 }} value={fmt(r2, 2).replace(",", ".")} onChange={(e) => setValue("r2", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>F2</span>
              <input className="form-control" style={{ width: 80 }} value={fmt(F2, 2).replace(",", ".")} onChange={(e) => setValue("F2", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>theta2</span>
              <input className="form-control" style={{ width: 80 }} value={fmt(theta2, 0).replace(",", ".")} onChange={(e) => setValue("theta2", e.target.value)} />
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
            <Pill active={showNet} onClick={() => setValue("showNet", !showNet)}>tau_net</Pill>
            <Pill active={showTau1} onClick={() => setValue("showTau1", !showTau1)}>tau1</Pill>
            <Pill active={showTau2} onClick={() => setValue("showTau2", !showTau2)}>tau2</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>
              tau1 = <b>{fmt(tau1, 3)}</b> N·m, tau2 = <b>{fmt(tau2, 3)}</b> N·m, tau_net = <b>{fmt(tauNet, 3)}</b> N·m.
              <br />
              F2 para equilibrio en theta2: <b>{Number.isFinite(F2eq) ? `${fmt(F2eq, 3)} N` : "infinita"}</b>.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Barrido de theta2</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="th2"
                type="number"
                domain={[0, 180]}
                tickFormatter={(v) => fmt(v, 0)}
                label={{ value: "theta2 (deg)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={[-yMax, yMax]}
                tickFormatter={(v) => fmt(v, 1)}
                label={{ value: "tau (N·m)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(l) => `theta2 = ${fmt(l, 1)} deg`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showNet ? <Line type="monotone" dataKey="tauNet" name="tau_net" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showTau1 ? <Line type="monotone" dataKey="tau1" name="tau1" stroke="#3b82f6" strokeWidth={2.5} dot={false} /> : null}
              {showTau2 ? <Line type="monotone" dataKey="tau2" name="tau2" stroke="#22c55e" strokeWidth={2.5} dot={false} /> : null}
              {showPoint && showNet ? <ReferenceDot x={theta2} y={tauNet} r={5} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
