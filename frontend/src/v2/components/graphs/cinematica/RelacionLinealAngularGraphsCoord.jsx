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

export default function RelacionLinealAngularGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["r", "radio"], default: toNum(params?.R ?? params?.r ?? params?.radio, 0.5) },
      { key: "omega", aliases: ["w"], default: toNum(params?.omega ?? params?.w, 4) },
      { key: "alpha", aliases: ["a"], default: toNum(params?.alpha ?? params?.a, 1.2) },
      { key: "rMax", aliases: ["r_max"], default: toNum(params?.rMax ?? params?.r_max, 2) },
      { key: "showV", default: params?.showV ?? true },
      { key: "showAt", default: params?.showAt ?? true },
      { key: "showAc", default: params?.showAc ?? true },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 0.5), 0.01, 10);
  const omega = toNum(ep.omega, 4);
  const alpha = toNum(ep.alpha, 1.2);
  const rMax = clamp(toNum(ep.rMax, 2), 0.05, 12);
  const showV = !!ep.showV;
  const showAt = !!ep.showAt;
  const showAc = !!ep.showAc;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => {
    const out = [];
    const N = 220;
    for (let i = 0; i <= N; i += 1) {
      const r = (i / N) * rMax;
      out.push({
        r,
        v: omega * r,
        at: alpha * r,
        ac: omega * omega * r,
      });
    }
    return out;
  }, [omega, alpha, rMax]);

  const vR = omega * R;
  const atR = alpha * R;
  const acR = omega * omega * R;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Relacion lineal-angular (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"v=\\omega R,\\quad a_t=\\alpha R,\\quad a_c=\\omega^2R"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>R (m)</span><input className="form-control" style={{ width: 90 }} value={R} onChange={(e) => setValue("R", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega (rad/s)</span><input className="form-control" style={{ width: 110 }} value={omega} onChange={(e) => setValue("omega", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>alpha (rad/s2)</span><input className="form-control" style={{ width: 110 }} value={alpha} onChange={(e) => setValue("alpha", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>R_max</span><input className="form-control" style={{ width: 95 }} value={rMax} onChange={(e) => setValue("rMax", e.target.value)} /></div>
            <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showV} onClick={() => setValue("showV", !showV)}>v(R)</Pill>
            <Pill active={showAt} onClick={() => setValue("showAt", !showAt)}>at(R)</Pill>
            <Pill active={showAc} onClick={() => setValue("showAc", !showAc)}>ac(R)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              En R = <b>{fmt(R, 3)}</b> m: v = <b>{fmt(vR, 3)}</b> m/s | at = <b>{fmt(atR, 3)}</b> m/s2 | ac = <b>{fmt(acR, 3)}</b> m/s2
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Dependencia lineal con el radio</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="r" tickFormatter={(n) => fmt(n, 2)} label={{ value: "R (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 2)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `R = ${fmt(value, 3)} m`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showV ? <Line type="monotone" dataKey="v" name="v=omega*R" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showAt ? <Line type="monotone" dataKey="at" name="at=alpha*R" stroke="#34d399" strokeWidth={2.6} dot={false} /> : null}
              {showAc ? <Line type="monotone" dataKey="ac" name="ac=omega^2*R" stroke="#f97316" strokeWidth={2.6} dot={false} /> : null}
              {showPoint && showV ? <ReferenceDot x={R} y={vR} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPoint && showAt ? <ReferenceDot x={R} y={atR} r={5} fill="#34d399" stroke="none" /> : null}
              {showPoint && showAc ? <ReferenceDot x={R} y={acR} r={5} fill="#f97316" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

