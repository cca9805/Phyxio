import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

/**
 * createCoordGraph(
 * Eje X: Radio normalizado [[r]]/R
 * Eje Y: Velocidad [[u]] (m/s)
 * formula: u(r) = v_max * (1 - r/R)^(1/7)
 * Interpretación: Perfil logarítmico (Ley de la séptima potencia)
 * target v_max
 * )
 */
export default function FlujoTurbulentoGraphsCoord(props) {
  const { lang = "es", paramsIn = {}, sharedParams = null } = props;
  const tt = (es, en) => (lang === "en" ? en : es);
  const uiLang = lang === "en" ? "en" : "es";
  
  const p = sharedParams ?? paramsIn ?? {};
  const v_max = p.v_max || 2.0;
  const R = p.R || 0.5;

  const profileData = useMemo(() => {
    const steps = 40;
    const data = [];
    for (let i = -steps; i <= steps; i++) {
      const r = (R * i) / steps;
      const rAbs = Math.abs(r);
      // Ley de la séptima potencia para perfil turbulento
      const u = v_max * Math.pow(1 - rAbs / R, 1/7);
      data.push({ r, u: isNaN(u) ? 0 : u });
    }
    return data;
  }, [v_max, R]);

  return (
    <div className="v2-card" style={{ padding: 16 }}>
      <div className="v2-card-title" style={{ marginBottom: 12 }}>
        {tt("Perfil de Velocidades Turbulento (Ley 1/7)", "Turbulent Velocity Profile (1/7 Law)")}
      </div>
      
      <div style={{ width: "100%", height: 320, marginTop: 10 }}>
        <ResponsiveContainer>
          <LineChart data={profileData} margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis 
              dataKey="r" 
              stroke="rgba(255,255,255,0.7)" 
              fontSize={12} 
              label={{ 
                value: tt("Radio r [[r]] (m)", "Radius r [[r]] (m)"), 
                position: "insideBottom", 
                offset: -5, 
                fill: "rgba(255,255,255,0.5)",
                fontSize: 11
              }} 
            />
            <YAxis 
              dataKey="u" 
              stroke="rgba(255,255,255,0.7)" 
              fontSize={12}
              label={{ 
                value: tt("Velocidad u [[u]] (m/s)", "Velocity u [[u]] (m/s)"), 
                angle: -90, 
                position: "insideLeft", 
                fill: "rgba(255,255,255,0.5)",
                fontSize: 11
              }} 
            />
            <Tooltip 
              contentStyle={{ background: "rgba(15, 23, 42, 0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }}
              itemStyle={{ color: "#fff" }}
              formatter={(value) => [value.toFixed(3) + " m/s", tt("Velocidad", "Velocity")]}
            />
            <Line 
              type="monotone" 
              dataKey="u" 
              stroke="#f43f5e" 
              strokeWidth={3} 
              dot={false}
              animationDuration={500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="v2-panel mt-3" style={{ background: "rgba(0,0,0,0.3)", padding: 12 }}>
        <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
          <small style={{ opacity: 0.7 }}>
            {tt(
              "Nota: El perfil es más plano que en laminar debido a la mezcla de los remolinos.",
              "Note: The profile is flatter than in laminar flow due to eddy mixing."
            )}
          </small>
        </div>
      </div>
    </div>
  );
}
