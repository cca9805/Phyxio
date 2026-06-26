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
  Legend
} from "recharts";
import profile from "@/v2/components/Coord/profiles/archimedes.coord.profile.js";

const tt = (lang, es, en) => (lang === "en" ? en : es);
const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
/**
 * createCoordGraph(
 * Eje X: Fuerzas
 * Eje Y: Magnitud (N)
 * formula: W_ap = W - E
 * Interpretación: Balance de fuerzas de flotación
 * target E
 * stateOut [E, W]
 * )
 */
export default function ArchimedesGraphsCoord(props) {
  const { lang = "es", params = null, sharedParams = null } = props;
  const uiLang = lang === "en" ? "en" : "es";
  
  // Normalizar parámetros
  const p = sharedParams?.__calc ?? params ?? sharedParams ?? {};
  const values = p.values ?? p.known ?? p;

  // Extraer Empuje y Peso con fallbacks razonables
  const E = Number(values.E || 500);
  const W = Number(values.W || 500);

  const data = useMemo(() => [
    { 
      name: tt(uiLang, "Empuje (E)", "Buoyancy (E)"), 
      value: E, 
      color: "#38bdf8" 
    },
    { 
      name: tt(uiLang, "Peso (W)", "Weight (W)"), 
      value: W, 
      color: "#fbbf24" 
    }
  ], [E, W, uiLang]);

  const yLabel = tt(uiLang, "Fuerza (N)", "Force (N)");

  return (
    <div className="v2-card" style={{ padding: 16 }}>
      <div className="v2-card-title" style={{ marginBottom: 12 }}>
        {tt(uiLang, "Arquímedes: Balance de Fuerzas", "Archimedes: Force Balance")}
      </div>
      
      <div style={{ width: "100%", height: 320, marginTop: 10 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="rgba(255,255,255,0.7)" 
              fontSize={12} 
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.7)" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              label={{ 
                value: yLabel, 
                angle: -90, 
                position: "insideLeft", 
                fill: "rgba(255,255,255,0.5)", 
                fontSize: 11,
                offset: 0
              }} 
            />
            <Tooltip 
              cursor={{ fill: "rgba(255,255,255,0.05)" }}
              contentStyle={{ 
                background: "rgba(15, 23, 42, 0.95)", 
                border: "1px solid rgba(255,255,255,0.1)", 
                borderRadius: 12, 
                color: "#fff",
                fontSize: 13
              }} 
              itemStyle={{ color: "#fff" }}
              formatter={(val) => [`${fmt(val, 2)} N`, ""]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={60}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="v2-panel mt-3" style={{ background: "rgba(0,0,0,0.3)", padding: 12 }}>
        <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
          {E > W + 0.01 ? (
            <span style={{ color: "#38bdf8", fontWeight: 900 }}>
              {tt(uiLang, "El cuerpo asciende o flota (E > W).", "The body rises or floats (E > W).")}
            </span>
          ) : Math.abs(E - W) < 0.01 ? (
            <span style={{ color: "#22c55e", fontWeight: 900 }}>
              {tt(uiLang, "El cuerpo está en equilibrio neutro (E = W).", "The body is in neutral equilibrium (E = W).")}
            </span>
          ) : (
            <span style={{ color: "#fbbf24", fontWeight: 900 }}>
              {tt(uiLang, "El cuerpo se hunde (E < W).", "The body sinks (E < W).")}
            </span>
          )}
          <br />
          <small style={{ opacity: 0.7 }}>
            {tt(
              uiLang,
              "El empuje depende del volumen sumergido y la densidad del fluido.",
              "Buoyancy depends on the submerged volume and fluid density."
            )}
          </small>
        </div>
      </div>
    </div>
  );
ArchimedesGraphsCoord.profile = profile;
}
