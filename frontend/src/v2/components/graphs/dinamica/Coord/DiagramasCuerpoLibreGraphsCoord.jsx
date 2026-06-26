
import React, { useMemo, useState } from "react";
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

import { fmt } from "@/v2/components/Coord/graphFormat";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { createCoordGraph } from "../../graphFactories.jsx";


const t = (lang, es, en) => (lang === "en" ? en : es);

function toNum(v, fallback) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function buildSeries({ m, g, stepDeg = 1 }) {
  const out = [];
  for (let th = 0; th <= 60 + 1e-9; th += stepDeg) {
    const rad = (th * Math.PI) / 180;
    const P = m * g;
    out.push({
      theta: th,
      P,
      N: P * Math.cos(rad),
      Fy: P * Math.sin(rad),
      Ppar: P * Math.sin(rad),
      Pperp: P * Math.cos(rad),
    });
  }
  return out;
}

function DiagramasCuerpoLibreGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";

  // Contrato legacy equivalente aceptado por el validador:
  // - useExperimentParams
  // - params ?? sharedParams ?? paramsIn
  const normalized = props.params ?? props.sharedParams ?? props.paramsIn ?? {};
  const calc = props.sharedParams?.__calc ?? normalized.__calc ?? null;

  const exp = useExperimentParams({
    schema: [
      { key: "m", initial: 10 },
      { key: "g", initial: 9.81 },
      { key: "theta", initial: 25 },
    ],
    sharedParams: normalized,
  });

  const [showP, setShowP] = useState(false);
  const [showPpar, setShowPpar] = useState(true);
  const [showPperp, setShowPperp] = useState(true);
  const [showPoint, setShowPoint] = useState(true);

  const m = calc?.known?.m ?? calc?.values?.m ?? exp.values?.m ?? normalized.m ?? 10;
  const g = calc?.known?.g ?? calc?.values?.g ?? exp.values?.g ?? normalized.g ?? 9.81;
  const theta = calc?.known?.theta ?? calc?.values?.theta ?? exp.values?.theta ?? normalized.theta ?? 25;

  const safe = useMemo(() => {
    const mm = clamp(toNum(m, 10), 0.05, 500);
    const gg = clamp(toNum(g, 9.81), 0, 20);
    const th = clamp(Math.round(toNum(theta, 25)), 0, 60);
    return { m: mm, g: gg, theta: th };
  }, [m, g, theta]);

  const data = useMemo(() => buildSeries({ m: safe.m, g: safe.g, stepDeg: 1 }), [safe.m, safe.g]);

  const current = useMemo(() => {
    const rad = (safe.theta * Math.PI) / 180;
    const P = safe.m * safe.g;
    return {
      P,
      N: P * Math.cos(rad),
      Fy: P * Math.sin(rad),
      Ppar: P * Math.sin(rad),
      Pperp: P * Math.cos(rad),
    };
  }, [safe]);

  const yMax = useMemo(() => Math.max(current.P * 1.08, 1), [current.P]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {t(uiLang, "Diagramas de cuerpo libre (Coord)", "Free-body diagrams (Coord)")}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          {t(uiLang, "Componentes del peso en plano inclinado", "Weight components on an inclined plane")}:{" "}
          <MathInline latex={"P_{\parallel}=mg\sin\theta"} /> {t(uiLang, "y", "and")}{" "}
          <MathInline latex={"P_{\perp}=mg\cos\theta"} />.
        </div>

        <div style={{ width: "100%", height: 380, marginTop: 12 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 12, right: 20, left: 6, bottom: 8 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
              <XAxis
                dataKey="theta"
                type="number"
                domain={[0, 60]}
                tick={{ fill: "rgba(255,255,255,0.72)", fontSize: 12 }}
                tickFormatter={(v) => `${v}°`}
              />
              <YAxis
                domain={[0, yMax]}
                tick={{ fill: "rgba(255,255,255,0.72)", fontSize: 12 }}
                tickFormatter={(v) => fmt(Number(v), 2).replace(".", decSep)}
              />
              <Tooltip
                formatter={(value, name) => [fmt(Number(value), 3).replace(".", decSep), name]}
                labelFormatter={(value) => `${t(uiLang, "θ", "θ")} = ${Number(value)}°`}
                contentStyle={{
                  background: "rgba(10,12,20,0.96)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 10,
                  color: "white",
                }}
              />
              <ReferenceLine x={safe.theta} stroke="rgba(255,255,255,0.22)" strokeDasharray="3 3" />

              {showP && (
                <Line type="monotone" dataKey="P" stroke="#f59e0b" strokeWidth={2} dot={false} name="P" />
              )}
              {showPpar && (
                <Line type="monotone" dataKey="Ppar" stroke="#38bdf8" strokeWidth={3} dot={false} name="Ppar" />
              )}
              {showPperp && (
                <Line type="monotone" dataKey="Pperp" stroke="#22c55e" strokeWidth={3} dot={false} name="Pperp" />
              )}

              {showPoint && showPpar && (
                <ReferenceDot x={safe.theta} y={current.Ppar} r={5} fill="#38bdf8" stroke="none" />
              )}
              {showPoint && showPperp && (
                <ReferenceDot x={safe.theta} y={current.Pperp} r={5} fill="#22c55e" stroke="none" />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const DiagramasCuerpoLibreGraphsCoord = createCoordGraph({
  Component: DiagramasCuerpoLibreGraphsCoordView,
  displayName: "DiagramasCuerpoLibreGraphsCoord",
});

DiagramasCuerpoLibreGraphsCoord.graphContract = DiagramasCuerpoLibreGraphsCoordView.graphContract;
DiagramasCuerpoLibreGraphsCoord.graph_identity = DiagramasCuerpoLibreGraphsCoordView.graph_identity;
DiagramasCuerpoLibreGraphsCoord.axes = DiagramasCuerpoLibreGraphsCoordView.axes;
DiagramasCuerpoLibreGraphsCoord.formula = DiagramasCuerpoLibreGraphsCoordView.formula;
DiagramasCuerpoLibreGraphsCoord.profile = DiagramasCuerpoLibreGraphsCoordView.profile;

export default DiagramasCuerpoLibreGraphsCoord;
