import React, { useMemo } from "react";
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
import { createCoordGraph } from "../../graphFactories.jsx";


const t = (lang, es, en) => (lang === "en" ? en : es);

function toNum(v, fallback) {
  if (v == null || v === "") return fallback;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function buildSeries(F, stepDeg = 1) {
  const out = [];
  for (let theta = 0; theta <= 90 + 1e-9; theta += stepDeg) {
    const rad = (theta * Math.PI) / 180;
    out.push({
      theta,
      Fx: F * Math.cos(rad),
      Fy: F * Math.sin(rad),
      Fm: F,
    });
  }
  return out;
}

function DescomposicionVectorialGraphsCoordView(props) {
  const uiLang = props.lang === "en" ? "en" : "es";

  // contrato legacy equivalente aceptado por el validador
  const bridged = props.params ?? props.sharedParams ?? props.paramsIn ?? {};
  const exp = useExperimentParams({
    schema: [
      { key: "Fm", initial: 10 },
      { key: "theta", initial: 30 },
    ],
    sharedParams: bridged,
  });

  const Fm = clamp(toNum(exp.values?.Fm ?? bridged.Fm ?? bridged.F ?? 10, 10), 0, 100);
  const theta = clamp(toNum(exp.values?.theta ?? bridged.theta ?? 30, 30), 0, 90);

  const data = useMemo(() => buildSeries(Fm, 1), [Fm]);

  const current = useMemo(() => {
    const rad = (theta * Math.PI) / 180;
    return {
      theta,
      Fx: Fm * Math.cos(rad),
      Fy: Fm * Math.sin(rad),
      Fm,
    };
  }, [Fm, theta]);

  const yMax = Math.max(Fm * 1.08, 1);

  return (
    <div className="v2-card" style={{ padding: 12 }}>
      <div className="v2-card-title">
        {t(uiLang, "Descomposición vectorial (Coord)", "Vector resolution (Coord)")}
      </div>

      <div className="muted" style={{ marginTop: 6 }}>
        <MathInline latex={"F_x = F_m\\cos\\theta"} /> {t(uiLang, "y", "and")}{" "}
        <MathInline latex={"F_y = F_m\\sin\\theta"} />.
      </div>

      <div style={{ width: "100%", height: 380, marginTop: 12 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 12, right: 20, left: 6, bottom: 8 }}>
            <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
            <XAxis
              dataKey="theta"
              type="number"
              domain={[0, 90]}
              tick={{ fill: "rgba(255,255,255,0.72)", fontSize: 12 }}
              tickFormatter={(v) => `${v}°`}
            />
            <YAxis
              domain={[0, yMax]}
              tick={{ fill: "rgba(255,255,255,0.72)", fontSize: 12 }}
            />
            <Tooltip />
            <ReferenceLine x={theta} stroke="rgba(255,255,255,0.22)" strokeDasharray="3 3" />

            <Line type="monotone" dataKey="Fx" stroke="#38bdf8" strokeWidth={3} dot={false} name="Fx" />
            <Line type="monotone" dataKey="Fy" stroke="#22c55e" strokeWidth={3} dot={false} name="Fy" />
            <Line type="monotone" dataKey="Fm" stroke="#f59e0b" strokeWidth={2} dot={false} name="Fm" />

            <ReferenceDot x={current.theta} y={current.Fx} r={5} fill="#38bdf8" stroke="none" />
            <ReferenceDot x={current.theta} y={current.Fy} r={5} fill="#22c55e" stroke="none" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const DescomposicionVectorialGraphsCoord = createCoordGraph({
  Component: DescomposicionVectorialGraphsCoordView,
  displayName: "DescomposicionVectorialGraphsCoord",
});

DescomposicionVectorialGraphsCoord.graphContract = DescomposicionVectorialGraphsCoordView.graphContract;
DescomposicionVectorialGraphsCoord.graph_identity = DescomposicionVectorialGraphsCoordView.graph_identity;
DescomposicionVectorialGraphsCoord.axes = DescomposicionVectorialGraphsCoordView.axes;
DescomposicionVectorialGraphsCoord.formula = DescomposicionVectorialGraphsCoordView.formula;
DescomposicionVectorialGraphsCoord.profile = DescomposicionVectorialGraphsCoordView.profile;

export default DescomposicionVectorialGraphsCoord;
