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

const deg2rad = (d) => (Math.PI * d) / 180;
const coriolis = (m, omega, vRel, thetaDeg) => 2 * m * omega * vRel * Math.sin(deg2rad(thetaDeg));

function buildSeries(m, omega, thetaDeg, vMax, step = 0.2) {
  const out = [];
  for (let vRel = 0; vRel <= vMax + 1e-9; vRel += step) {
    out.push({
      vRel,
      F_theta: coriolis(m, omega, vRel, thetaDeg),
      F_90: coriolis(m, omega, vRel, 90),
    });
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

export default function DefinicionFuerzaCoriolisGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 2) },
      { key: "omega", aliases: ["w"], default: toNum(p.omega ?? p.w, 1.5) },
      { key: "theta", aliases: ["angulo"], default: toNum(p.theta ?? p.angulo, 90) },
      { key: "vObs", aliases: ["v_rel", "vrel", "velocidad"], default: toNum(p.vObs ?? p.v_rel ?? p.vrel ?? p.velocidad, 4) },
      { key: "vMax", aliases: ["v_max"], default: toNum(p.vMax ?? p.v_max, 12) },
      { key: "showTheta", aliases: ["mostrarTheta"], default: p.showTheta ?? true },
      { key: "show90", aliases: ["mostrar90"], default: p.show90 ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.m, p.masa, p.omega, p.w, p.theta, p.angulo, p.vObs, p.v_rel, p.vrel, p.velocidad, p.vMax, p.v_max, p.showTheta, p.show90, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 2), 0.01, 5000);
  const omega = clamp(toNum(ep.omega, 1.5), 0, 40);
  const theta = clamp(toNum(ep.theta, 90), 0, 180);
  const vMax = clamp(toNum(ep.vMax, 12), 1, 80);
  const vObs = clamp(toNum(ep.vObs, 4), 0, vMax);
  const showTheta = !!ep.showTheta;
  const show90 = !!ep.show90;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => buildSeries(m, omega, theta, vMax, 0.2), [m, omega, theta, vMax]);
  const fObs = coriolis(m, omega, vObs, theta);
  const fObs90 = coriolis(m, omega, vObs, 90);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Definicion de fuerza de Coriolis (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"\\vec F_{cor}=-2m(\\vec\\omega\\times\\vec v_{rel}),\\quad |F_{cor}|=2m\\omega v_{rel}\\sin\\theta"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m</span><input className="form-control" style={{ width: 90 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega</span><input className="form-control" style={{ width: 90 }} value={fmt(omega, 2).replace(",", ".")} onChange={(e) => setValue("omega", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>theta (deg)</span><input className="form-control" style={{ width: 90 }} value={fmt(theta, 1).replace(",", ".")} onChange={(e) => setValue("theta", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v_rel</span><input className="form-control" style={{ width: 90 }} value={fmt(vObs, 2).replace(",", ".")} onChange={(e) => setValue("vObs", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v_max</span><input className="form-control" style={{ width: 90 }} value={fmt(vMax, 1).replace(",", ".")} onChange={(e) => setValue("vMax", e.target.value)} /></div>
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

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showTheta} onClick={() => setValue("showTheta", !showTheta)}>F(theta)</Pill>
            <Pill active={show90} onClick={() => setValue("show90", !show90)}>F(theta=90)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              En v_rel = <b>{fmt(vObs, 3)}</b> m/s: F(theta) = <b>{fmt(fObs, 4)}</b> N | F(90) = <b>{fmt(fObs90, 4)}</b> N.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Fuerza de Coriolis vs velocidad relativa</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="vRel" type="number" domain={[0, vMax]} tickFormatter={(v0) => fmt(v0, 1)} label={{ value: "v_rel (m/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v0) => fmt(v0, 1)} label={{ value: "F_cor (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `v_rel = ${fmt(x, 3)} m/s`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showTheta ? <Line type="monotone" dataKey="F_theta" name="2m*omega*v_rel*sin(theta)" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {show90 ? <Line type="monotone" dataKey="F_90" name="2m*omega*v_rel" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={vObs} y={showTheta ? fObs : fObs90} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
