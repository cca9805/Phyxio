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
const buildSeries = (m, I, R, omegaMax, step) => {
  const out = [];
  for (let omega = 0; omega <= omegaMax + 1e-9; omega += step) {
    const v = omega * R;
    out.push({
      omega,
      v,
      Kt: 0.5 * m * v * v,
      Kr: 0.5 * I * omega * omega,
      K: 0.5 * m * v * v + 0.5 * I * omega * omega,
    });
  }
  return out;
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

export default function TraslacionYRotacionGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 2) },
      { key: "R", aliases: ["radio"], default: toNum(p.R ?? p.radio, 0.3) },
      { key: "I", aliases: ["inercia"], default: toNum(p.I ?? p.inercia, 0.1) },
      { key: "omega", aliases: ["w"], default: toNum(p.omega ?? p.w, 8) },
      { key: "omegaMax", aliases: ["w_max"], default: toNum(p.omegaMax ?? p.w_max, 20) },
      { key: "showKt", aliases: ["mostrarKt"], default: p.showKt ?? true },
      { key: "showKr", aliases: ["mostrarKr"], default: p.showKr ?? true },
      { key: "showK", aliases: ["mostrarK"], default: p.showK ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [p.m, p.masa, p.R, p.radio, p.I, p.inercia, p.omega, p.w, p.omegaMax, p.w_max, p.showKt, p.showKr, p.showK, p.showPoint]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 2), 0.01, 5000);
  const R = clamp(toNum(ep.R, 0.3), 0.01, 5);
  const I = clamp(toNum(ep.I, 0.1), 0.00001, 1000);
  const omegaMax = clamp(toNum(ep.omegaMax, 20), 1, 80);
  const omega = clamp(toNum(ep.omega, 8), 0, omegaMax);
  const showKt = !!ep.showKt;
  const showKr = !!ep.showKr;
  const showK = !!ep.showK;
  const showPoint = !!ep.showPoint;

  const v = omega * R;
  const Kt = 0.5 * m * v * v;
  const Kr = 0.5 * I * omega * omega;
  const K = Kt + Kr;
  const step = omegaMax > 40 ? 0.5 : 0.1;
  const data = useMemo(() => buildSeries(m, I, R, omegaMax, step), [m, I, R, omegaMax, step]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Traslacion y rotacion (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"v=\\omega R,\\quad K=\\frac{1}{2}mv^2+\\frac{1}{2}I\\omega^2"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m</span><input className="form-control" style={{ width: 90 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>R</span><input className="form-control" style={{ width: 90 }} value={fmt(R, 3).replace(",", ".")} onChange={(e) => setValue("R", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>I</span><input className="form-control" style={{ width: 90 }} value={fmt(I, 4).replace(",", ".")} onChange={(e) => setValue("I", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega</span><input className="form-control" style={{ width: 90 }} value={fmt(omega, 3).replace(",", ".")} onChange={(e) => setValue("omega", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>omega_max</span><input className="form-control" style={{ width: 90 }} value={fmt(omegaMax, 1).replace(",", ".")} onChange={(e) => setValue("omegaMax", e.target.value)} /></div>

            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}
            >
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showKt} onClick={() => setValue("showKt", !showKt)}>K_t</Pill>
            <Pill active={showKr} onClick={() => setValue("showKr", !showKr)}>K_r</Pill>
            <Pill active={showK} onClick={() => setValue("showK", !showK)}>K_total</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              v = <b>{fmt(v, 4)}</b> m/s | K_t = <b>{fmt(Kt, 4)}</b> J | K_r = <b>{fmt(Kr, 4)}</b> J | K = <b>{fmt(K, 4)}</b> J.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Energia vs velocidad angular</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="omega" type="number" domain={[0, omegaMax]} tickFormatter={(w) => fmt(w, 1)} label={{ value: "omega (rad/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(e) => fmt(e, 2)} label={{ value: "Energia (J)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `omega = ${fmt(x, 3)} rad/s`} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showKt ? <Line type="monotone" dataKey="Kt" name="K_t" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showKr ? <Line type="monotone" dataKey="Kr" name="K_r" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showK ? <Line type="monotone" dataKey="K" name="K_total" stroke="#22c55e" strokeWidth={3} dot={false} /> : null}
              {showPoint && showK ? <ReferenceDot x={omega} y={K} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
