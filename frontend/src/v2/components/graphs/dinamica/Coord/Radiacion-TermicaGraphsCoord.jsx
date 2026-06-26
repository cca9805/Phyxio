import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { createCoordGraph } from "../../graphFactories.jsx";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const pickParam = (src, keys, fallback) => {
  for (const k of keys) {
    const v = src?.[k];
    if (v === undefined || v === null || v === "") continue;
    const n = toNum(v, NaN);
    if (Number.isFinite(n)) return n;
  }
  return fallback;
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

const graphIdentity = {
  pregunta_principal: {
    es: "Potencia radiada frente a temperatura absoluta",
    en: "Radiated power versus absolute temperature",
  },
  variable_control: "DeltaT",
  magnitud_estrella: "P",
  formula: "P = k A DeltaT / L",
  target_interpretable: true,
};

const buildSeries = ({ k, A, L, dtMin, dtMax, steps = 40 }) => {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const dT = dtMin + (i / steps) * (dtMax - dtMin);
    const P = (k * A * dT) / L;
    out.push({ x: dT, P });
  }
  return out;
};

function RadiacionTermicaGraphsCoordView(props) {
  void graphIdentity;
  const resolvedParams = props.params ?? props.sharedParams;
  const lang = props.lang ?? "es";
  const uiLang = lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "k", aliases: ["k", "conductividad"], default: 1.0 },
      { key: "A", aliases: ["A", "area"], default: 1.0 },
      { key: "L", aliases: ["L", "espesor"], default: 0.1 },
      { key: "dT", aliases: ["dT", "deltaT", "DeltaT"], default: 50 },
      { key: "dtMin", aliases: ["dtMin", "deltaTmin"], default: 0 },
      { key: "dtMax", aliases: ["dtMax", "deltaTmax"], default: 100 },
      { key: "showCurve", aliases: ["mostrarCurva"], default: true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: true },
    ],
    []
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const k = clamp(toNum(ep.k, 1.0), 0.01, 500);
  const A = clamp(toNum(ep.A, 1.0), 0.001, 10);
  const L = clamp(toNum(ep.L, 0.1), 0.001, 1);
  const dT = clamp(toNum(ep.dT, 50), 0, 500);
  const dtMin = clamp(toNum(ep.dtMin, 0), 0, 50);
  const dtMax = clamp(toNum(ep.dtMax, 100), 10, 500);
  const showCurve = !!ep.showCurve;
  const showPoint = !!ep.showPoint;

  const Pnow = (k * A * dT) / L;
  const Pmin = (k * A * dtMin) / L;
  const Pmax = (k * A * dtMax) / L;

  const data = useMemo(
    () => buildSeries({ k, A, L, dtMin, dtMax }),
    [k, A, L, dtMin, dtMax]
  );

  const yDomain = useMemo(() => {
    return [0, Math.max(10, Pmax) * 1.1];
  }, [Pmax]);

  const setK = useCallback((value) => { exp.startExperiment(); exp.setValue("k", value); }, [exp]);
  const setA = useCallback((value) => { exp.startExperiment(); exp.setValue("A", value); }, [exp]);
  const setL = useCallback((value) => { exp.startExperiment(); exp.setValue("L", value); }, [exp]);
  const setDT = useCallback((value) => { exp.startExperiment(); exp.setValue("dT", value); }, [exp]);
  const setShowCurve = useCallback((value) => { exp.startExperiment(); exp.setValue("showCurve", value); }, [exp]);
  const setShowPoint = useCallback((value) => { exp.startExperiment(); exp.setValue("showPoint", value); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12, background: "rgba(15,23,42,0.74)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.12)" }}>
        <div className="v2-card-title">{tt("Potencia radiada frente a temperatura absoluta", "Radiated power versus absolute temperature")}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"P = \\frac{k A \\Delta T}{L}"} />.
          {tt(" Ley de Fourier: flujo de calor proporcional a ΔT", " Fourier law: heat flow proportional to ΔT")}
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
              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"k"} /></span>
              <input className="form-control" style={{ width: 74 }} value={fmt(k, 2).replace(",", ".")} onChange={(e) => setK(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"A"} /></span>
              <input className="form-control" style={{ width: 74 }} value={fmt(A, 3).replace(",", ".")} onChange={(e) => setA(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"L"} /></span>
              <input className="form-control" style={{ width: 74 }} value={fmt(L, 3).replace(",", ".")} onChange={(e) => setL(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}><MathInline latex={"\\Delta T"} /></span>
              <input className="form-control" style={{ width: 74 }} value={fmt(dT, 1).replace(",", ".")} onChange={(e) => setDT(e.target.value)} />
            </div>
            <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto" }}>
              {tt("Seguir calculadora", "Follow calculator")}
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
            <Pill active={showCurve} onClick={() => setShowCurve(!showCurve)}>{tt("Curva", "Curve")}</Pill>
            <Pill active={showPoint} onClick={() => setShowPoint(!showPoint)}>{tt("Punto", "Point")}</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          <MathInline latex={"P = \\frac{k A \\Delta T}{L}"} /> = <b>{fmt(Pnow, 2)}</b> W
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[dtMin, dtMax]}
                tickFormatter={(value) => fmt(value, 0)}
                stroke="rgba(255,255,255,0.4)"
                label={{ value: "ΔT (K)", position: "insideBottomRight", offset: -5, fill: "rgba(255,255,255,0.5)" }}
              />
              <YAxis
                domain={yDomain}
                tickFormatter={(value) => fmt(value, 1)}
                stroke="rgba(255,255,255,0.4)"
                label={{ value: "P (W)", angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.5)" }}
              />
              <Tooltip
                formatter={(value) => [fmt(value, 3), "P"]}
                labelFormatter={(value) => `ΔT = ${fmt(value, 1)} K`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showCurve ? (
                <Line
                  type="monotone"
                  dataKey="P"
                  name="P(ΔT)"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={false}
                />
              ) : null}
              {showPoint ? (
                <ReferenceDot
                  x={dT}
                  y={Pnow}
                  r={5}
                  fill="#fb923c"
                  stroke="none"
                />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const RadiacionTermicaGraphsCoord = createCoordGraph({
  Component: RadiacionTermicaGraphsCoordView,
  displayName: "RadiacionTermicaGraphsCoord",
});

RadiacionTermicaGraphsCoord.graphContract = RadiacionTermicaGraphsCoordView.graphContract;
RadiacionTermicaGraphsCoord.graph_identity = RadiacionTermicaGraphsCoordView.graph_identity;
RadiacionTermicaGraphsCoord.axes = RadiacionTermicaGraphsCoordView.axes;
RadiacionTermicaGraphsCoord.formula = RadiacionTermicaGraphsCoordView.formula;
RadiacionTermicaGraphsCoord.profile = RadiacionTermicaGraphsCoordView.profile;

export default RadiacionTermicaGraphsCoord;