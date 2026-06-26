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
import { createCoordGraph } from "../../graphFactories.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "¿Como cuantifica la energia cinetica el movimiento y su cambio por trabajo neto?",
    en: "How does kinetic energy quantify motion and its change due to net work?",
  },
  variable_control: "v",
  formula: "K = 0.5 m v^2, Delta K = Wnet",
  target_interpretable: true,
};

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

function Component({ lang = "es", title, params, sharedParams = null, onGraphStateChange }) {
  const uiLang = lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const p = sharedParams?.__calc ?? params ?? sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", default: toNum(p?.m, 2) },
      { key: "v", default: toNum(p?.v, 6) },
      { key: "vi", aliases: ["v0"], default: toNum(p?.vi ?? p?.v0, 2) },
      { key: "vf", default: toNum(p?.vf, 8) },
      { key: "showK", default: p?.showK ?? true },
      { key: "showRef", default: p?.showRef ?? true },
      { key: "showDelta", default: p?.showDelta ?? true },
    ],
    [p]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m = Math.max(0.001, toNum(ep.m, 2));
  const v = Math.max(0, toNum(ep.v, 6));
  const vi = Math.max(0, toNum(ep.vi, 2));
  const vf = Math.max(0, toNum(ep.vf, 8));

  const showK = !!ep.showK;
  const showRef = !!ep.showRef;
  const showDelta = !!ep.showDelta;

  const K = 0.5 * m * v * v;
  const Ki = 0.5 * m * vi * vi;
  const Kf = 0.5 * m * vf * vf;
  const dK = Kf - Ki;

  React.useEffect(() => {
    if (!onGraphStateChange) return;
    onGraphStateChange({ K, Ki, Kf, dK, m, v, vi, vf });
  }, [K, Ki, Kf, dK, m, v, vi, vf, onGraphStateChange]);

  const vmax = clamp(Math.max(v, vf, 10), 1, 60);
  const curve = useMemo(() => {
    const out = [];
    const N = 220;
    for (let i = 0; i <= N; i += 1) {
      const vv = (i / N) * vmax;
      out.push({ v: vv, K: 0.5 * m * vv * vv });
    }
    return out;
  }, [m, vmax]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || tt("Energia cinetica (Coord)", "Kinetic energy (Coord)")}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"K=\\frac{1}{2}mv^2,\\quad \\Delta K = K_f-K_i"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m (kg)</span><input className="form-control" style={{ width: 90 }} value={m} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>v (m/s)</span><input className="form-control" style={{ width: 90 }} value={v} onChange={(e) => setValue("v", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>vi (m/s)</span><input className="form-control" style={{ width: 90 }} value={vi} onChange={(e) => setValue("vi", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>vf (m/s)</span><input className="form-control" style={{ width: 90 }} value={vf} onChange={(e) => setValue("vf", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>{tt("Experimentar", "Experiment")}</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>{tt("Seguir calculadora", "Follow calculator")}</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showK} onClick={() => setValue("showK", !showK)}>K(v)</Pill>
            <Pill active={showDelta} onClick={() => setValue("showDelta", !showDelta)}>DeltaK</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>{tt("Referencias", "References")}</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>{tt("Modo", "Mode")}: <b>{exp.mode === "follow" ? tt("calculadora", "calculator") : tt("experimento", "experiment")}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              K(v) = <b>{fmt(K, 3)}</b> J | Ki = <b>{fmt(Ki, 3)}</b> J | Kf = <b>{fmt(Kf, 3)}</b> J | DeltaK = <b>{fmt(dK, 3)}</b> J
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{tt("Curva cuadratica K(v)", "Quadratic curve K(v)")}</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={curve} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="v" tickFormatter={(n) => fmt(n, 1)} label={{ value: "v (m/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "K (J)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `v = ${fmt(value, 3)} m/s`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showK ? <Line type="monotone" dataKey="K" name={tt("K(v) energia cinetica", "K(v) kinetic energy")} stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showK ? <ReferenceDot x={v} y={K} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showDelta ? <ReferenceDot x={vi} y={Ki} r={5} fill="#34d399" stroke="none" /> : null}
              {showDelta ? <ReferenceDot x={vf} y={Kf} r={5} fill="#f97316" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const EnergiaCineticaGraphsCoord = createCoordGraph({
  Component,
  displayName: "EnergiaCineticaGraphsCoord",
});

EnergiaCineticaGraphsCoord.graph_identity = graph_identity;

export default EnergiaCineticaGraphsCoord;
