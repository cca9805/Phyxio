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
import profile from "@/v2/components/Coord/profiles/flotacion.coord.profile.js";

/**
 * createCoordGraph(
 * Eje X: Fuerzas Verticales (Empuje vs Peso)
 * Eje Y: Intensidad de Fuerza (N)
 * formula: E = rho_f * g * Vsum, P = rho_obj * g * Vtot
 * Interpretación: Visualización del equilibrio hidrostático.
 * )
 */
export default function FlotacionGraphsCoord({ 
  lang = "es", 
  paramsIn = {}, 
  sharedParams = null 
}) {
  const uiLang = lang;
  const tt = (es, en) => (uiLang === "en" ? en : es);
  
  const p = sharedParams ?? paramsIn ?? {};
  const E = p.E || 500;
  const P = p.P || 500;

  const data = useMemo(() => [
    { 
      name: tt("Empuje (E)", "Buoyancy (E)"), 
      value: E, 
      color: "#38bdf8" 
    },
    { 
      name: tt("Peso (P)", "Weight (P)"), 
      value: P, 
      color: "#fbbf24" 
    }
  ], [E, P, uiLang]);

  const yLabel = tt("Fuerza (N)", "Force (N)");

  return (
    <div style={{ width: "100%", height: 350, background: "rgba(0,0,0,0.2)", borderRadius: 8, padding: 15 }}>
      <h4 style={{ color: "#fff", marginBottom: 10, textAlign: "center" }}>
        {tt("Análisis de Equilibrio: E vs P", "Equilibrium Analysis: E vs P")}
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
FlotacionGraphsCoord.profile = profile;
FlotacionGraphsCoord.interpretation_binding = profile.interpretation_binding;
