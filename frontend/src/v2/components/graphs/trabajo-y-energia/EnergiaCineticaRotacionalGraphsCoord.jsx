import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

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

export default function EnergiaCineticaRotacionalGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "I", aliases: ["inercia"], default: toNum(params?.I ?? params?.inercia, 2.4) },
      { key: "omega0", aliases: ["omega", "w"], default: toNum(params?.omega0 ?? params?.omega ?? params?.w, 6) },
      { key: "alpha", aliases: ["aceleracionAngular"], default: toNum(params?.alpha ?? params?.aceleracionAngular, 1.2) },
      { key: "tMax", aliases: ["tiempo"], default: toNum(params?.tMax ?? params?.tiempo, 10) },
      { key: "showK", default: params?.showK ?? true },
      { key: "showOmega", default: params?.showOmega ?? true },
      { key: "showWrot", default: params?.showWrot ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const I = Math.max(0.0001, toNum(ep.I, 2.4));
  const omega0 = toNum(ep.omega0, 6);
  const alpha = toNum(ep.alpha, 1.2);
  const tMax = clamp(toNum(ep.tMax, 10), 1, 60);

  const showK = !!ep.showK;
  const showOmega = !!ep.showOmega;
  const showWrot = !!ep.showWrot;
  const showRef = !!ep.showRef;

  const K0 = 0.5 * I * omega0 * omega0;
  const omegaF = omega0 + alpha * tMax;
  const KF = 0.5 * I * omegaF * omegaF;
  const Wrot = KF - K0;

  const data = useMemo(() => {
    const out = [];
    const nPts = 220;
    for (let i = 0; i <= nPts; i += 1) {
      const t = (i / nPts) * tMax;
      const w = omega0 + alpha * t;
      const K = 0.5 * I * w * w;
      out.push({
        t,
        omega: w,
        K,
        Wrot: K - K0,
      });
    }
    return out;
  }, [tMax, omega0, alpha, I, K0]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Energia cinetica rotacional (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"E_{rot}=\\frac{1}{2}I\\omega^2,\\quad W_{rot}=\\Delta E_{rot}"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>I (kg*m^2)</span><input className="form-control" style={{ width: 95 }} value={I} onChange={(e) => setValue("I", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega0 (rad/s)</span><input className="form-control" style={{ width: 95 }} value={omega0} onChange={(e) => setValue("omega0", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>alpha (rad/s^2)</span><input className="form-control" style={{ width: 95 }} value={alpha} onChange={(e) => setValue("alpha", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>tMax (s)</span><input className="form-control" style={{ width: 90 }} value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showK} onClick={() => setValue("showK", !showK)}>E_rot(t)</Pill>
            <Pill active={showOmega} onClick={() => setValue("showOmega", !showOmega)}>omega(t)</Pill>
            <Pill active={showWrot} onClick={() => setValue("showWrot", !showWrot)}>W_rot(t)</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>eje y=0</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              Erot(0) = <b>{fmt(K0, 3)}</b> J | Erot(tf) = <b>{fmt(KF, 3)}</b> J | DeltaE = <b>{fmt(Wrot, 3)}</b> J
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Evolucion rotacional</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showK ? <Line type="monotone" dataKey="K" name="E_rot" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showOmega ? <Line type="monotone" dataKey="omega" name="omega" stroke="#34d399" strokeWidth={2.6} dot={false} /> : null}
              {showWrot ? <Line type="monotone" dataKey="Wrot" name="W_rot acumulado" stroke="#f59e0b" strokeWidth={2.6} dot={false} /> : null}
              {showK && showRef ? <ReferenceDot x={tMax} y={KF} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
