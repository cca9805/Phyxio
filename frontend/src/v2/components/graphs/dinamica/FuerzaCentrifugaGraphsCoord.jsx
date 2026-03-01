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

const Fcf_v = (m, v, r) => (m * v * v) / r;
const Fcf_omega = (m, omega, r) => m * omega * omega * r;

function buildSeries(m, v, omega, rMax = 20, step = 0.2) {
  const out = [];
  for (let r = 0.2; r <= rMax + 1e-9; r += step) {
    out.push({
      r,
      F_v: Fcf_v(m, v, r),
      F_omega: Fcf_omega(m, omega, r),
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

export default function FuerzaCentrifugaGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 70) },
      { key: "v", aliases: ["velocidad"], default: toNum(p.v ?? p.velocidad, 10) },
      { key: "omega", aliases: ["w"], default: toNum(p.omega ?? p.w, 1) },
      { key: "rObs", aliases: ["r", "radio"], default: toNum(p.rObs ?? p.r ?? p.radio, 10) },
      { key: "rMax", aliases: ["r_max"], default: toNum(p.rMax ?? p.r_max, 20) },
      { key: "showFv", aliases: ["mostrarFv"], default: p.showFv ?? true },
      { key: "showFw", aliases: ["mostrarFw"], default: p.showFw ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.m, p.masa, p.v, p.velocidad, p.omega, p.w, p.rObs, p.r, p.radio, p.rMax, p.r_max, p.showFv, p.showFw, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 70), 0.1, 5000);
  const v = clamp(toNum(ep.v, 10), 0, 120);
  const omega = clamp(toNum(ep.omega, 1), 0, 30);
  const rMax = clamp(toNum(ep.rMax, 20), 1, 50);
  const rObs = clamp(toNum(ep.rObs, 10), 0.2, rMax);
  const showFv = !!ep.showFv;
  const showFw = !!ep.showFw;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => buildSeries(m, v, omega, rMax, 0.2), [m, v, omega, rMax]);
  const FvObs = Fcf_v(m, v, rObs);
  const FwObs = Fcf_omega(m, omega, rObs);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Definicion de fuerza centrifuga (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"F_{cf}=\\frac{mv^2}{r}=m\\omega^2r"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m</span><input className="form-control" style={{ width: 90 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v</span><input className="form-control" style={{ width: 90 }} value={fmt(v, 2).replace(",", ".")} onChange={(e) => setValue("v", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega</span><input className="form-control" style={{ width: 90 }} value={fmt(omega, 2).replace(",", ".")} onChange={(e) => setValue("omega", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>r</span><input className="form-control" style={{ width: 90 }} value={fmt(rObs, 2).replace(",", ".")} onChange={(e) => setValue("rObs", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>r_max</span><input className="form-control" style={{ width: 90 }} value={fmt(rMax, 1).replace(",", ".")} onChange={(e) => setValue("rMax", e.target.value)} /></div>
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
            <Pill active={showFv} onClick={() => setValue("showFv", !showFv)}>F(v)</Pill>
            <Pill active={showFw} onClick={() => setValue("showFw", !showFw)}>F(omega)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              En r = <b>{fmt(rObs, 3)}</b> m: F(v) = <b>{fmt(FvObs, 4)}</b> N | F(omega) = <b>{fmt(FwObs, 4)}</b> N.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Fuerza centrifuga vs radio</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="r" type="number" domain={[0.2, rMax]} tickFormatter={(v0) => fmt(v0, 1)} label={{ value: "r (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v0) => fmt(v0, 1)} label={{ value: "F (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `r = ${fmt(x, 3)} m`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showFv ? <Line type="monotone" dataKey="F_v" name="m*v^2/r" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showFw ? <Line type="monotone" dataKey="F_omega" name="m*omega^2*r" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={rObs} y={showFw ? FwObs : FvObs} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
