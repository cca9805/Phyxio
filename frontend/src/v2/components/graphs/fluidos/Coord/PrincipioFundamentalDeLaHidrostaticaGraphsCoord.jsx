import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import profile from "@/v2/components/Coord/profiles/principio-fundamental-de-la-hidrostatica.coord.profile.js";

/**
 * createCoordGraph(
 * Eje X: Estados de presion
 * Eje Y: Presion (Pa)
 * formula: p2 = p1 + rho*g*(z1-z2)
 * Interpretacion: Comparacion entre referencia, salto y resultado
 * )
 */
export default function PrincipioFundamentalDeLaHidrostaticaGraphsCoord({
  lang = "es",
  paramsIn = {},
  sharedParams = null,
}) {
  const uiLang = lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const calc = sharedParams?.__calc ?? paramsIn ?? {};

  const p1 = Number(calc.p1) || 101325;
  const rho = Number(calc.rho) || 1000;
  const g = Number(calc.g) || 9.8;
  const z1 = Number(calc.z1) || 2;
  const z2 = Number(calc.z2) || -1;
  const dz = Number.isFinite(calc.dz) ? Number(calc.dz) : z1 - z2;
  const dp = Number.isFinite(calc.dp) ? Number(calc.dp) : rho * g * dz;
  const p2 = Number.isFinite(calc.p2) ? Number(calc.p2) : p1 + dp;

  const data = useMemo(
    () => [
      { name: tt("Referencia p1", "Reference p1"), value: p1, color: "#94a3b8" },
      { name: tt("Salto dp", "Jump dp"), value: dp, color: "#38bdf8" },
      { name: tt("Resultado p2", "Result p2"), value: p2, color: "#22c55e" },
    ],
    [dp, p1, p2, uiLang]
  );

  return (
    <div style={{ width: "100%", height: 350, background: "rgba(0,0,0,0.18)", borderRadius: 10, padding: 18 }}>
      <h4 style={{ color: "#fff", marginBottom: 10, textAlign: "center" }}>
        {tt("Comparacion hidrostatica entre puntos", "Hydrostatic comparison between points")}
      </h4>
      <ResponsiveContainer width="100%" height="78%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip
            contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div style={{ color: "#cbd5e1", fontSize: 12, textAlign: "center" }}>
        {tt("Si z2 es menor que z1, el punto 2 esta mas abajo y p2 debe crecer.", "If z2 is smaller than z1, point 2 is lower and p2 must grow.")}
      </div>
    </div>
  );
}

PrincipioFundamentalDeLaHidrostaticaGraphsCoord.profile = profile;
