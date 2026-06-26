import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from "recharts";

/**
 * createCoordGraph(
 * Eje X: Pistón (Entrada vs Salida)
 * Eje Y: Magnitud de Fuerza [[F]] (N)
 * formula: F2 = F1 * (A2 / A1)
 * Interpretación: Visualización de la multiplicación de fuerza por ventaja mecánica.
 * )
 */
export default function PrincipioDePascalGraphsCoord({ 
  lang = "es", 
  paramsIn = {}, 
  sharedParams = null 
}) {
  const uiLang = lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  // V5 naming convention for calc results
  const calc = sharedParams?.__calc || paramsIn || {};
  
  const F1 = Number(calc.F1) || 100;
  const A1 = Number(calc.A1) || 1;
  const A2 = Number(calc.A2) || 5;
  const F2 = F1 * (A2 / A1);

  const data = useMemo(() => [
    { 
      name: tt("Entrada F1", "Input F1"), 
      value: F1, 
      color: "#94a3b8" 
    },
    { 
      name: tt("Salida F2", "Output F2"), 
      value: F2, 
      color: "#6366f1" 
    }
  ], [F1, F2, uiLang]);

  const yLabel = tt("Fuerza (N)", "Force (N)");

  return (
    <div className="phyxio-graph-container" style={{ width: "100%", height: 350, background: "rgba(0,0,0,0.15)", borderRadius: 12, padding: 25 }}>
      <h4 style={{ color: "#fff", marginBottom: 20, textAlign: "center", fontWeight: 500 }}>
        {tt("Comparativa de Fuerzas (Pascal)", "Force Comparison (Pascal)")}
      </h4>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8" 
            tick={{ fill: "#94a3b8", fontSize: 13 }} 
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#94a3b8" 
            tick={{ fill: "#94a3b8", fontSize: 13 }}
            axisLine={false}
            tickLine={false}
            label={{ value: yLabel, angle: -90, position: "insideLeft", fill: "#94a3b8", fontSize: 13, offset: 0 }} 
          />
          <Tooltip 
            contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }} 
            itemStyle={{ color: "#6366f1" }}
            cursor={{ fill: "rgba(255,255,255,0.1)" }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={60}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

PrincipioDePascalGraphsCoord.profile = {
  id: "principio-de-pascal-coord",
  type: "Coord",
  role: "primary",
  name_es: "Distribución de Fuerzas en Prensa Hidráulica",
  name_en: "Force Distribution in Hydraulic Press",
  pregunta_principal: {
    es: "¿Cómo varía la fuerza de salida respecto a la de entrada según la relación de áreas?",
    en: "How does the output force vary relative to the input force based on the area ratio?"
  },
  chart_reading: {
    es: "El gráfico muestra la comparación directa entre la fuerza aplicada y la obtenida. La barra de salida crece linealmente con la ventaja mecánica.",
    en: "The chart shows the direct comparison between applied and obtained force. The output bar grows linearly with mechanical advantage."
  },
  binding: {
    xAxis: { magnitude: "pistones", label: { es: "Émbolos", en: "Pistons" } },
    yAxis: { magnitude: "F2", label: { es: "Fuerza (N)", en: "Force (N)" } }
  },
  formula: "F2 = F1 * (A2 / A1)"
};
