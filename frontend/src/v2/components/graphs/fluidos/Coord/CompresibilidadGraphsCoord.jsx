// frontend/src/v2/components/graphs/fluidos/Coord/CompresibilidadGraphsCoord.jsx
import React, { useMemo, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { createCoordGraph } from "../../graphFactories.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo cambia el volumen de un fluido cuando aumenta la presión aplicada?",
    en: "How does a fluid volume change when applied pressure increases?",
  },
  variable_control: "dp",
  formula: "\\epsilon_V = -\\beta \\cdot dp",
  target_interpretable: true,
};

const toNum = (v, fb) => {
  if (v == null || v === "") return fb;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function buildCurveData(beta, dpMax, steps = 100) {
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const dp = (dpMax * i) / steps;
    points.push({
      dp: dp,
      dpMPa: parseFloat((dp / 1e6).toFixed(3)),
      eps: parseFloat((beta * dp).toFixed(6)),
    });
  }
  return points;
}

function Component({
  params,
  sharedParams,
  lang = "es",
  onGraphStateChange,
  onSharedParamsChange,
}) {
  const p = sharedParams?.__calc ?? params ?? sharedParams ?? {};
  const uiLang = lang === "en" ? "en" : "es";
  const t = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) =>
    Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "—";

  // Parámetros físicos
  const beta = clamp(toNum(p.beta, 7e-10), 1e-12, 1e-7);
  const dp_curr = clamp(toNum(p.dp, 4e6), 0, 1e9);
  const dpMax = clamp(toNum(p.dpMax, 2e7), 1e6, 2e9);

  const data = useMemo(() => buildCurveData(beta, dpMax), [beta, dpMax]);

  const currentEps = beta * dp_curr;

  // Sync state with interpretation system
  useEffect(() => {
    if (onGraphStateChange) {
      onGraphStateChange({
        currentDp: dp_curr,
        currentEps: currentEps,
        beta: beta,
      });
    }
  }, [dp_curr, currentEps, beta, onGraphStateChange]);

  const handleClick = (state) => {
    if (state && state.activePayload && onSharedParamsChange) {
      const { dp } = state.activePayload[0].payload;
      onSharedParamsChange({ dp: dp });
    }
  };

  return (
    <div style={{ display: "grid", gap: 12, backgroundColor: "#0f172a", padding: "1.2rem", borderRadius: "1rem" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "1.1rem" }}>
          {t("Respuesta Volumétrica a la Presión", "Volumetric Response to Pressure")}
        </div>
        <div style={{ color: "#94a3b8", marginTop: 4, fontSize: 13 }}>
          <MathInline latex={"\\epsilon_V = \\beta \\cdot \\Delta p"} />
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, bottom: 20, left: 10 }}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
            <XAxis
              dataKey="dpMPa"
              stroke="#94a3b8"
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
              label={{ value: t("Presión Δp (MPa)", "Pressure Δp (MPa)"), position: "bottom", fill: "#94a3b8", dy: 10 }}
            />
            <YAxis
              stroke="#94a3b8"
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
              label={{ value: t("Contracción ε_V", "Contraction ε_V"), angle: -90, position: "insideLeft", fill: "#94a3b8" }}
            />
            <Tooltip
              contentStyle={{ background: "rgba(15,15,30,0.92)", border: "1px solid rgba(34,211,238,0.3)", borderRadius: 8, color: "#f8fafc" }}
              formatter={(val, name) => [val.toExponential(3), name]}
              labelFormatter={(val) => `Δp = ${val} MPa`}
            />
            <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
            <Line
              type="monotone"
              dataKey="eps"
              name={t("Contracción relativa", "Relative contraction")}
              stroke="#22d3ee"
              strokeWidth={3}
              dot={false}
              animationDuration={500}
            />
            <ReferenceLine x={dp_curr / 1e6} stroke="#facc15" strokeDasharray="3 3" />
            <ReferenceDot x={dp_curr / 1e6} y={currentEps} r={6} fill="#facc15" stroke="#0f172a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{
        marginTop: 10,
        padding: "8px 12px",
        borderRadius: 8,
        background: "rgba(34,211,238,0.07)",
        border: "1px solid rgba(34,211,238,0.2)",
        fontSize: 13,
        color: "#94a3b8",
        textAlign: "center"
      }}>
        {t("La pendiente de la recta representa la compresibilidad β. Un fluido más compresible tendrá una pendiente mayor.", "The line's slope represents compressibility β. A more compressible fluid will have a steeper slope.")}
      </div>
    </div>
  );
}

const CompresibilidadGraphsCoord = createCoordGraph({
  Component,
  displayName: "CompresibilidadGraphsCoord",
});

CompresibilidadGraphsCoord.graph_identity = graph_identity;

export default CompresibilidadGraphsCoord;
