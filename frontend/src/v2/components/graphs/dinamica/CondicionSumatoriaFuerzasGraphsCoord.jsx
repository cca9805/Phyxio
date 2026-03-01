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

function buildSeries(F1, F2, step = 2) {
  const out = [];
  for (let theta = 0; theta <= 360 + 1e-9; theta += step) {
    const c = Math.cos(deg2rad(theta));
    const s = Math.sin(deg2rad(theta));
    const sumFx = F1 + F2 * c;
    const sumFy = F2 * s;
    const R = Math.hypot(sumFx, sumFy);
    out.push({ theta, sumFx, sumFy, R, F3: R });
  }
  return out;
}

export default function CondicionSumatoriaFuerzasGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "F1", aliases: ["f1", "F"], default: pickNum(p, ["F1", "f1", "F"], 20) },
      { key: "F2", aliases: ["f2"], default: pickNum(p, ["F2", "f2"], 15) },
      { key: "theta", aliases: ["angulo", "angle"], default: pickNum(p, ["theta", "angulo", "angle"], 60) },
      { key: "showR", aliases: ["mostrarR"], default: p.showR ?? true },
      { key: "showF3", aliases: ["mostrarF3"], default: p.showF3 ?? true },
      { key: "showComponents", aliases: ["mostrarComponentes"], default: p.showComponents ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      pickNum(p, ["F1", "f1", "F"], 20),
      pickNum(p, ["F2", "f2"], 15),
      pickNum(p, ["theta", "angulo", "angle"], 60),
      p.showR,
      p.showF3,
      p.showComponents,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const F1 = clamp(toNum(ep.F1, 20), 0, 1000);
  const F2 = clamp(toNum(ep.F2, 15), 0, 1000);
  const theta = clamp(toNum(ep.theta, 60), 0, 360);
  const showR = !!ep.showR;
  const showF3 = !!ep.showF3;
  const showComponents = !!ep.showComponents;
  const showPoint = !!ep.showPoint;

  const c = Math.cos(deg2rad(theta));
  const s = Math.sin(deg2rad(theta));
  const sumFx = F1 + F2 * c;
  const sumFy = F2 * s;
  const R = Math.hypot(sumFx, sumFy);
  const F3x = -sumFx;
  const F3y = -sumFy;

  const data = useMemo(() => buildSeries(F1, F2, 2), [F1, F2]);
  const yMax = useMemo(() => {
    let mx = 1;
    for (const row of data) mx = Math.max(mx, Math.abs(row.sumFx), Math.abs(row.sumFy), row.R);
    return mx * 1.1;
  }, [data]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setValue = useCallback((key, val) => {
    exp.startExperiment();
    exp.setValue(key, val);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Condicion de sumatoria de fuerzas (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Equilibrio traslacional: <MathInline latex={"\\sum F_x=0,\\;\\sum F_y=0"} />.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>F1</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(F1, 2).replace(",", ".")} onChange={(e) => setValue("F1", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>F2</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(F2, 2).replace(",", ".")} onChange={(e) => setValue("F2", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>theta</span>
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
            <Pill active={showR} onClick={() => setValue("showR", !showR)}>R</Pill>
            <Pill active={showF3} onClick={() => setValue("showF3", !showF3)}>F3</Pill>
            <Pill active={showComponents} onClick={() => setValue("showComponents", !showComponents)}>sumFx/sumFy</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>
              sumFx = <b>{fmt(sumFx, 3)}</b> N, sumFy = <b>{fmt(sumFy, 3)}</b> N, |R| = <b>{fmt(R, 3)}</b> N.
              <br />
              Equilibrante: <MathInline latex={"\\vec F_3=-\\vec R"} /> {"->"} F3x = <b>{fmt(F3x, 3)}</b> N, F3y = <b>{fmt(F3y, 3)}</b> N.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Variacion con el angulo theta</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="theta"
                type="number"
                domain={[0, 360]}
                tickFormatter={(v) => fmt(v, 0)}
                label={{ value: "theta (deg)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={[-yMax, yMax]}
                tickFormatter={(v) => fmt(v, 1)}
                label={{ value: "N", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(l) => `theta = ${fmt(l, 1)} deg`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showComponents ? <Line type="monotone" dataKey="sumFx" name="sumFx" stroke="#60a5fa" strokeWidth={2.5} dot={false} /> : null}
              {showComponents ? <Line type="monotone" dataKey="sumFy" name="sumFy" stroke="#a78bfa" strokeWidth={2.5} dot={false} /> : null}
              {showR ? <Line type="monotone" dataKey="R" name="|R|" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showF3 ? <Line type="monotone" dataKey="F3" name="|F3|" stroke="#ef4444" strokeWidth={2} strokeDasharray="6 6" dot={false} /> : null}
              {showPoint && showR ? <ReferenceDot x={theta} y={R} r={5} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

