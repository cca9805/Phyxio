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

const forceIdeal = (R, p, r) => (R * p) / (2 * Math.PI * r);
const vmIdeal = (r, p) => (2 * Math.PI * r) / p;

function buildSeries(R, r, eta, pMax = 0.02, step = 0.0002) {
  const out = [];
  for (let p = step; p <= pMax + 1e-12; p += step) {
    const Fideal = forceIdeal(R, p, r);
    const Freal = Fideal / eta;
    out.push({
      p,
      Fideal,
      Freal,
      VM: vmIdeal(r, p),
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

export default function TornilloGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["carga_axial"], default: toNum(p.R ?? p.carga_axial, 10000) },
      { key: "r", aliases: ["radio"], default: toNum(p.r ?? p.radio, 0.15) },
      { key: "paso", aliases: ["p"], default: toNum(p.paso ?? p.p, 0.006) },
      { key: "eta", aliases: ["rendimiento"], default: toNum(p.eta ?? p.rendimiento, 0.8) },
      { key: "pMax", aliases: ["p_max"], default: toNum(p.pMax ?? p.p_max, 0.02) },
      { key: "showIdeal", aliases: ["mostrarIdeal"], default: p.showIdeal ?? true },
      { key: "showReal", aliases: ["mostrarReal"], default: p.showReal ?? true },
      { key: "showVM", aliases: ["mostrarVM"], default: p.showVM ?? true },
    ],
    [
      p.R,
      p.carga_axial,
      p.r,
      p.radio,
      p.paso,
      p.p,
      p.eta,
      p.rendimiento,
      p.pMax,
      p.p_max,
      p.showIdeal,
      p.showReal,
      p.showVM,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 10000), 1, 500000);
  const r = clamp(toNum(ep.r, 0.15), 0.01, 1);
  const paso = clamp(toNum(ep.paso, 0.006), 0.0005, 0.05);
  const eta = clamp(toNum(ep.eta, 0.8), 0.2, 1);
  const pMax = clamp(toNum(ep.pMax, 0.02), 0.002, 0.08);
  const showIdeal = !!ep.showIdeal;
  const showReal = !!ep.showReal;
  const showVM = !!ep.showVM;

  const Fideal = forceIdeal(R, paso, r);
  const Freal = Fideal / eta;
  const VM = vmIdeal(r, paso);
  const tau = Freal * r;

  const data = useMemo(() => buildSeries(R, r, eta, pMax, pMax / 120), [R, r, eta, pMax]);
  const fmt = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Tornillo (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"F=\\frac{R\\,p}{2\\pi r\\,\\eta},\\quad VM_{ideal}=\\frac{2\\pi r}{p}"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>R</span><input className="form-control" style={{ width: 95 }} value={fmt(R, 1).replace(",", ".")} onChange={(e) => setValue("R", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>r</span><input className="form-control" style={{ width: 95 }} value={fmt(r, 3).replace(",", ".")} onChange={(e) => setValue("r", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>p</span><input className="form-control" style={{ width: 95 }} value={fmt(paso, 4).replace(",", ".")} onChange={(e) => setValue("paso", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>eta</span><input className="form-control" style={{ width: 95 }} value={fmt(eta, 3).replace(",", ".")} onChange={(e) => setValue("eta", e.target.value)} /></div>
            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}
            >
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showIdeal} onClick={() => setValue("showIdeal", !showIdeal)}>F ideal</Pill>
            <Pill active={showReal} onClick={() => setValue("showReal", !showReal)}>F real</Pill>
            <Pill active={showVM} onClick={() => setValue("showVM", !showVM)}>VM ideal</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            F_ideal = <b>{fmt(Fideal, 4)}</b> N | F_real = <b>{fmt(Freal, 4)}</b> N | VM_ideal = <b>{fmt(VM, 3)}</b> | torque = <b>{fmt(tau, 4)}</b> N*m
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Efecto del paso de rosca</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="p" type="number" domain={[0.0005, pMax]} tickFormatter={(v) => fmt(v, 3)} label={{ value: "p (m/vuelta)", position: "insideBottomRight", offset: -5 }} />
              <YAxis yAxisId="left" tickFormatter={(v) => fmt(v, 1)} label={{ value: "F (N)", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" tickFormatter={(v) => fmt(v, 1)} label={{ value: "VM", angle: -90, position: "insideRight" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `p = ${fmt(x, 4)} m/vuelta`} />
              <ReferenceLine yAxisId="left" y={0} stroke="rgba(255,255,255,0.30)" />
              {showIdeal ? <Line yAxisId="left" type="monotone" dataKey="Fideal" name="F ideal" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showReal ? <Line yAxisId="left" type="monotone" dataKey="Freal" name="F real" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showVM ? <Line yAxisId="right" type="monotone" dataKey="VM" name="VM ideal" stroke="#22c55e" strokeWidth={3} dot={false} /> : null}
              {showReal ? <ReferenceDot yAxisId="left" x={paso} y={Freal} r={5} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
