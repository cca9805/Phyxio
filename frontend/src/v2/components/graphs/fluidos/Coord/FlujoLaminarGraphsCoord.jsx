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
 * Eje X: Radio [[r]] (m)
 * Eje Y: Velocidad [[u]] (m/s)
 * formula: u(r) = v_max * (1 - r^2/R^2)
 * Interpretación: Perfil parabólico de Poiseuille
 * target v_max
 * )
 */
export default function FlujoLaminarGraphsCoord(props) {
  const { lang = "es", paramsIn = {}, sharedParams = null } = props;
  const tt = (es, en) => (lang === "en" ? en : es);
  const uiLang = lang === "en" ? "en" : "es";
  
  const p = sharedParams ?? paramsIn ?? {};
  const v_max = p.v_max || 1.0;
  const R = p.R || 0.5;

  const profileData = useMemo(() => {
    const steps = 20;
    const data = [];
    for (let i = -steps; i <= steps; i++) {
      const r = (R * i) / steps;
      const u = v_max * (1 - Math.pow(r / R, 2));
      data.push({ r, u });
    }
    return data;
  }, [v_max, R]);

  return (
    <div className="v2-card" style={{ padding: 16 }}>
      <div className="v2-card-title" style={{ marginBottom: 12 }}>
        {tt("Perfil de Velocidades (Poiseuille)", "Velocity Profile (Poiseuille)")}
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
            />
            <Line 
              type="monotone" 
              dataKey="u" 
              stroke="#6366f1" 
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
              "Nota: El flujo es laminar si Re < 2300.",
              "Note: Flow is laminar if Re < 2300."
            )}
          </small>
        </div>
      </div>
    </div>
  );
}
