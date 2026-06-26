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
import profile from "@/v2/components/Coord/profiles/presion-hidrostatica.coord.profile.js";

/**
 * createCoordGraph(
 * Eje X: Variables
 * Eje Y: Magnitud (Pa, m)
 * formula: p = p0 + rho * g * h
 * Interpretación: Visualización hidrostática
 * target interpretable
 * stateOut
 * callbacks de estado
 * )
 */
export default function PresionHidrostaticaGraphsCoord({ 
  lang = "es", 
  paramsIn = {}, 
  sharedParams = null 
}) {
  const uiLang = lang;
  const tt = (es, en) => (uiLang === "en" ? en : es);
  
  const pCalc = sharedParams?.__calc ?? paramsIn ?? {};
  const presion = pCalc.p || 100000;
  const h = pCalc.h || 10;
  const p0 = pCalc.p0 || 101325;

  const data = useMemo(() => [
    { 
      name: tt("Presión p", "Pressure p"), 
      value: presion, 
      color: "#38bdf8" 
    },
    { 
      name: tt("Superficie p0", "Surface p0"), 
      value: p0, 
      color: "#fbbf24" 
    }
  ], [presion, p0, uiLang]);

  const yLabel = tt("Presión (Pa)", "Pressure (Pa)");

  return (
    <div style={{ width: "100%", height: 350, background: "rgba(0,0,0,0.2)", borderRadius: 8, padding: 15 }}>
      <h4 style={{ color: "#fff", marginBottom: 10, textAlign: "center" }}>
        {tt("Análisis p vs p0", "Analysis p vs p0")}
      </h4>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis 
            label={{ value: yLabel, angle: -90, position: "insideLeft", fill: "#fff", offset: 10 }} 
            stroke="#fff" 
          />
          <Tooltip 
            contentStyle={{ background: "#1e293b", border: "none", borderRadius: 8, color: "#fff" }} 
            itemStyle={{ color: "#fff" }}
          />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Required for validator consistency
PresionHidrostaticaGraphsCoord.profile = profile;
