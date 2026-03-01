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

function buildData(g, thetaMaxRad, n = 220) {
  const out = [];
  for (let i = 0; i <= n; i += 1) {
    const theta = (thetaMaxRad * i) / n;
    out.push({ theta, a: g * Math.sin(theta) });
  }
  return out;
}

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

export default function SinRozamientoGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "thetaDeg", aliases: ["theta", "angulo"], default: toNum(p.thetaDeg ?? p.theta ?? p.angulo, 30) },
      { key: "thetaMaxDeg", aliases: ["thetaMax", "anguloMax"], default: toNum(p.thetaMaxDeg ?? p.thetaMax ?? p.anguloMax, 85) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.g, p.gravedad, p.thetaDeg, p.theta, p.angulo, p.thetaMaxDeg, p.thetaMax, p.anguloMax, p.showCurve, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const g = clamp(toNum(ep.g, 9.8), 0.1, 25);
  const thetaMaxDeg = clamp(toNum(ep.thetaMaxDeg, 85), 5, 89);
  const thetaDeg = clamp(toNum(ep.thetaDeg, 30), 0, thetaMaxDeg);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const theta = (thetaDeg * Math.PI) / 180;
  const thetaMax = (thetaMaxDeg * Math.PI) / 180;
  const aNow = g * Math.sin(theta);
  const data = useMemo(() => buildData(g, thetaMax), [g, thetaMax]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, val) => {
    exp.startExperiment();
    exp.setValue(k, val);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Plano inclinado sin rozamiento (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a = g\\sin\\theta"} />.
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
              <span style={{ fontSize: 13, opacity: 0.85 }}>g (m/s²)</span>
              <input className="form-control" style={{ width: 92 }} value={fmt(g, 3).replace(",", ".")} onChange={(e) => setValue("g", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>theta (deg)</span>
              <input className="form-control" style={{ width: 100 }} value={fmt(thetaDeg, 2).replace(",", ".")} onChange={(e) => setValue("thetaDeg", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>theta_max (deg)</span>
              <input className="form-control" style={{ width: 118 }} value={fmt(thetaMaxDeg, 2).replace(",", ".")} onChange={(e) => setValue("thetaMaxDeg", e.target.value)} />
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
            <Pill active={showCurve} onClick={() => setValue("showCurve", !showCurve)}>Curva</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              a({fmt(thetaDeg, 2)} deg) = <b>{fmt(aNow, 4)}</b> m/s².
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Aceleracion en funcion del angulo</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="theta"
                type="number"
                domain={[0, thetaMax]}
                tickFormatter={(val) => fmt((val * 180) / Math.PI, 1)}
                label={{ value: "theta (deg)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(val) => fmt(val, 2)}
                label={{ value: "a (m/s²)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 5), name]}
                labelFormatter={(val) => `theta = ${fmt((val * 180) / Math.PI, 3)} deg`}
              />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showCurve ? <Line type="monotone" dataKey="a" name="a(theta)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={theta} y={aNow} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
