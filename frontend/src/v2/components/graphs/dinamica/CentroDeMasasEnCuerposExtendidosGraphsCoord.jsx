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

function cm1D(shape, L) {
  if (shape === "barra") return L / 2;
  if (shape === "semi") return (4 * L) / (3 * Math.PI);
  if (shape === "tri") return L / 3;
  return L / 2;
}

function buildSeries(shape, Lmax = 10, step = 0.1) {
  const out = [];
  for (let L = 0.2; L <= Lmax + 1e-9; L += step) {
    out.push({ L, xcm: cm1D(shape, L) });
  }
  return out;
}

export default function CentroDeMasasEnCuerposExtendidosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "shape", aliases: ["cuerpo", "figura"], default: p.shape || "barra" },
      { key: "L", aliases: ["longitud", "R"], default: toNum(p.L ?? p.longitud ?? p.R, 6) },
      { key: "showCurve", aliases: ["mostrarCurva"], default: p.showCurve ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [p.shape, p.L, p.longitud, p.R, p.showCurve, p.showPoint]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const shape = ep.shape === "semi" ? "semi" : ep.shape === "tri" ? "tri" : "barra";
  const L = clamp(toNum(ep.L, 6), 0.2, 10);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;

  const xcm = cm1D(shape, L);
  const data = useMemo(() => buildSeries(shape, 10, 0.1), [shape]);

  const labelShape = shape === "barra" ? "Barra uniforme" : shape === "semi" ? "Semicirculo (lamina, radio = L)" : "Triangulo recto uniforme";

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Centro de masas en cuerpos extendidos (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>{labelShape}.</div>

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
            <Pill active={shape === "barra"} onClick={() => setValue("shape", "barra")}>Barra</Pill>
            <Pill active={shape === "semi"} onClick={() => setValue("shape", "semi")}>Semicirculo</Pill>
            <Pill active={shape === "tri"} onClick={() => setValue("shape", "tri")}>Triangulo</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>L</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(L, 2).replace(",", ".")} onChange={(e) => setValue("L", e.target.value)} />
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
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            {shape === "barra" ? <MathInline latex={"x_{CM}=L/2"} /> : null}
            {shape === "semi" ? <MathInline latex={"x_{CM}=\\frac{4R}{3\\pi}"} /> : null}
            {shape === "tri" ? <MathInline latex={"x_{CM}=L/3"} /> : null}
            <div style={{ marginTop: 8 }}>x_CM = <b>{fmt(xcm, 3)}</b> m</div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Dependencia de x_CM con L</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="L" type="number" domain={[0.2, 10]} tickFormatter={(v) => fmt(v, 1)} label={{ value: "L (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 1)} label={{ value: "x_CM (m)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(l) => `L = ${fmt(l, 2)} m`} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showCurve ? <Line type="monotone" dataKey="xcm" name="x_CM" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={L} y={xcm} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
