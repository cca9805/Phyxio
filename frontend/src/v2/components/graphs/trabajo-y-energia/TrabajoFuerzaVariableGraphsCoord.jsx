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

export default function TrabajoFuerzaVariableGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "a", default: toNum(params?.a, 8) },
      { key: "b", default: toNum(params?.b, 2) },
      { key: "c", default: toNum(params?.c, 0) },
      { key: "x1", default: toNum(params?.x1, 0) },
      { key: "x2", default: toNum(params?.x2, 4) },
      { key: "showF", default: params?.showF ?? true },
      { key: "showArea", default: params?.showArea ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const a = toNum(ep.a, 8);
  const b = toNum(ep.b, 2);
  const c = toNum(ep.c, 0);
  const x1 = toNum(ep.x1, 0);
  const x2 = toNum(ep.x2, 4);

  const xa = Math.min(x1, x2);
  const xb = Math.max(x1, x2);

  const showF = !!ep.showF;
  const showArea = !!ep.showArea;
  const showRef = !!ep.showRef;

  const F = (x) => a + b * x + c * x * x;
  const W = a * (xb - xa) + 0.5 * b * (xb * xb - xa * xa) + (c / 3) * (xb * xb * xb - xa * xa * xa);
  const Fmed = Math.abs(xb - xa) > 1e-9 ? W / (xb - xa) : 0;

  const data = useMemo(() => {
    const out = [];
    const xmin = xa - Math.max(1, 0.25 * Math.abs(xb - xa));
    const xmax = xb + Math.max(1, 0.25 * Math.abs(xb - xa));
    const N = 240;
    for (let i = 0; i <= N; i += 1) {
      const x = xmin + (i / N) * (xmax - xmin);
      out.push({ x, F: F(x), inside: x >= xa && x <= xb ? F(x) : null });
    }
    return out;
  }, [a, b, c, xa, xb]);

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Trabajo con fuerza variable (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"W=\\int_{x_1}^{x_2}F(x)\\,dx"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>a</span><input className="form-control" style={{ width: 80 }} value={a} onChange={(e) => setValue("a", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>b</span><input className="form-control" style={{ width: 80 }} value={b} onChange={(e) => setValue("b", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>c</span><input className="form-control" style={{ width: 80 }} value={c} onChange={(e) => setValue("c", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>x1 (m)</span><input className="form-control" style={{ width: 90 }} value={x1} onChange={(e) => setValue("x1", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>x2 (m)</span><input className="form-control" style={{ width: 90 }} value={x2} onChange={(e) => setValue("x2", e.target.value)} /></div>
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showF} onClick={() => setValue("showF", !showF)}>F(x)</Pill>
            <Pill active={showArea} onClick={() => setValue("showArea", !showArea)}>Area de integracion</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
            <span style={{ marginLeft: "auto", fontSize: 12, opacity: 0.78 }}>Modo: <b>{exp.mode === "follow" ? "calculadora" : "experimento"}</b></span>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              F(x) = <b>{fmt(a, 2)}</b> + <b>{fmt(b, 2)}</b>x + <b>{fmt(c, 2)}</b>x^2 | intervalo [{fmt(xa, 2)}, {fmt(xb, 2)}] m | W = <b>{fmt(W, 3)}</b> J | F_med = <b>{fmt(Fmed, 3)}</b> N
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Fuerza variable y zona de trabajo</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="x" tickFormatter={(n) => fmt(n, 1)} label={{ value: "x (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "F (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `x = ${fmt(value, 3)} m`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine x={xa} stroke="#eab308" strokeDasharray="6 6" /> : null}
              {showRef ? <ReferenceLine x={xb} stroke="#eab308" strokeDasharray="6 6" /> : null}
              {showF ? <Line type="monotone" dataKey="F" name="F(x)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showArea ? <Line type="monotone" dataKey="inside" name="F(x) en [x1,x2]" stroke="#34d399" strokeWidth={2.5} dot={false} /> : null}
              {showF ? <ReferenceDot x={xa} y={F(xa)} r={4} fill="#60a5fa" stroke="none" /> : null}
              {showF ? <ReferenceDot x={xb} y={F(xb)} r={4} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
