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
    es: "¿Cómo varía la potencia útil con el caudal?",
    en: "How does useful power vary with flow rate?",
  },
  variable_control: "Q",
  formula: "P_{util} = \\Delta p \\cdot Q",
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

  const dp = Number(values.dp || 100000);
  const Q = Number(values.Q || 0.05);

  const data = useMemo(() => {
    const points = [];
    for (let q = 0; q <= 0.2; q += 0.01) {
      points.push({
        q: q,
        p_util: q * dp,
      });
    }
    return points;
  }, [dp]);

  // Emit state to the interpretation system
  React.useEffect(() => {
    if (onGraphStateChange) {
      onGraphStateChange({
        currentQ: Q,
        currentPu: Q * dp,
      });
    }
  }, [Q, dp, onGraphStateChange]);

  const handleClick = (state) => {
    if (state && state.activePayload && onSharedParamsChange) {
      const { q } = state.activePayload[0].payload;
      onSharedParamsChange({ Q: q });
    }
  };

  return (
    <div style={{ width: "100%", height: 350, backgroundColor: "#0f172a", padding: "1rem", borderRadius: "1rem" }}>
      <div style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "1rem", textAlign: "center" }}>
        {t("Relación Potencia-Caudal (Clic para ajustar Q)", "Power-Flow Relationship (Click to adjust Q)")} — 
        <span style={{ color: "#4ade80", marginLeft: "0.5rem" }}>
          {graph_identity.formula}
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
            dataKey="q" 
            stroke="#94a3b8" 
            tickFormatter={(v) => v.toFixed(2)}
            label={{ value: t("Caudal Q (m³/s)", "Flow Q (m³/s)"), position: "bottom", fill: "#94a3b8", dy: 10 }} 
          />
          <YAxis 
            stroke="#94a3b8" 
            label={{ value: t("Potencia (W)", "Power (W)"), angle: -90, position: "insideLeft", fill: "#94a3b8" }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: "#1e293b", border: "none", borderRadius: "8px", color: "#f8fafc" }}
            itemStyle={{ color: "#4ade80" }}
            formatter={(value) => [`${value.toFixed(0)} W`, t("Potencia Útil", "Useful Power")]}
          />
          <Legend verticalAlign="top" />
          <Line 
            type="monotone" 
            dataKey="p_util" 
            stroke="#4ade80" 
            strokeWidth={3} 
            dot={false}
            name={t("Potencia Útil", "Useful Power")} 
            animationDuration={500}
          />
          <ReferenceLine x={Q} stroke="#fbbf24" label={t("Operación", "Operation")} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const AplicacionesIngenierilesGraphsCoord = createCoordGraph({
  Component,
  displayName: "AplicacionesIngenierilesGraphsCoord",
});

AplicacionesIngenierilesGraphsCoord.graph_identity = graph_identity;

export default AplicacionesIngenierilesGraphsCoord;
