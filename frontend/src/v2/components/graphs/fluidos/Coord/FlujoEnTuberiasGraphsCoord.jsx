import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { createCoordGraph } from "../../graphFactories";

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la caída de presión con la longitud de la tubería?",
    en: "How does pressure drop vary with pipe length?",
  },
  variable_control: "L",
  formula: "\\Delta p = f \\frac{L}{D} \\frac{\\rho v^2}{2}",
  target_interpretable: true,
};

function Component({
  lang = "es",
  params = {},
  sharedParams = null,
  onSharedParamsChange,
  onGraphStateChange,
}) {
  const uiLang = lang === "es" ? "es" : "en";
  const t = (es, en) => (uiLang === "es" ? es : en);

  // Normalize parameters
  const p = sharedParams?.__calc ?? params ?? sharedParams ?? {};
  const values = p.values ?? p.known ?? p;

  const f = Number(values.f || 0.02);
  const D = Number(values.D || 0.1);
  const rho = Number(values.rho || 1000);
  const v = Number(values.v || 2);
  const L_current = Number(values.L || 10);

  const data = useMemo(() => {
    const points = [];
    const term = f * (rho * v * v / 2) / Math.max(D, 0.001);
    for (let l = 0; l <= 100; l += 5) {
      points.push({
        l: l,
        dp: l * term,
      });
    }
    return points;
  }, [f, D, rho, v]);

  // Emit state to the interpretation system
  React.useEffect(() => {
    if (onGraphStateChange) {
      onGraphStateChange({
        currentL: L_current,
        currentDp: L_current * (f * (rho * v * v / 2) / Math.max(D, 0.001)),
      });
    }
  }, [L_current, f, D, rho, v, onGraphStateChange]);

  const handleClick = (state) => {
    if (state && state.activePayload && onSharedParamsChange) {
      const { l } = state.activePayload[0].payload;
      onSharedParamsChange({ L: l });
    }
  };

  return (
    <div style={{ width: "100%", height: 350, backgroundColor: "#0f172a", padding: "1rem", borderRadius: "1rem" }}>
      <div style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "1rem", textAlign: "center" }}>
        {t("Caída de Presión vs Longitud (Clic para ajustar L)", "Pressure Drop vs Length (Click to adjust L)")} — 
        <span style={{ color: "#38bdf8", dy: 10, marginLeft: "0.5rem" }}>
           \(\Delta p \propto L\)
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="l" 
            stroke="#94a3b8" 
            tickFormatter={(v) => `${v}m`}
            label={{ value: t("Longitud L (m)", "Length L (m)"), position: "bottom", fill: "#94a3b8", dy: 10 }} 
          />
          <YAxis 
            stroke="#94a3b8" 
            tickFormatter={(v) => (v/1000).toFixed(1) + "k"}
            label={{ value: t("Pérdida Δp (Pa)", "Loss Δp (Pa)"), angle: -90, position: "insideLeft", fill: "#94a3b8" }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "8px", color: "#f8fafc" }}
            itemStyle={{ color: "#38bdf8" }}
            formatter={(value) => [`${value.toFixed(0)} Pa`, t("Caída de Presión", "Pressure Drop")]}
          />
          <Legend verticalAlign="top" />
          <Line 
            type="monotone" 
            dataKey="dp" 
            stroke="#38bdf8" 
            strokeWidth={3} 
            dot={false}
            name={t("Caída de Presión", "Pressure Drop")} 
            animationDuration={500}
          />
          <ReferenceLine x={L_current} stroke="#fbbf24" label={t("Punto actual", "Current point")} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const FlujoEnTuberiasGraphsCoord = createCoordGraph({
  Component,
  displayName: "FlujoEnTuberiasGraphsCoord",
});

FlujoEnTuberiasGraphsCoord.graph_identity = graph_identity;

export default FlujoEnTuberiasGraphsCoord;
