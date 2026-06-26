import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Area,
  AreaChart
} from "recharts";

/**
 * createCoordGraph(
 * pregunta_principal: {
 *   es: "¿Cómo cuantifica la viscosidad la relación entre el esfuerzo aplicado y la rapidez de deformación?",
 *   en: "How does viscosity quantify the relationship between applied stress and deformation rate?"
 * }
 * formula: tau = mu * (du/dy)
 * Eje X: Tasa de deformación [[dudy]] (s^-1)
 * Eje Y: Esfuerzo cortante [[tau]] (Pa)
 * Representa el diagrama reológico fundamental para fluidos Newtonianos.
 * )
 */
export default function ViscosidadGraphsCoord(props) {
  const { lang = "es", paramsIn = {}, sharedParams = null } = props;
  const tt = (es, en) => (lang === "en" ? en : es);
  const uiLang = lang === "en" ? "en" : "es";
  
  const p = sharedParams ?? paramsIn ?? {};
  const mu = p.mu || 0.001;
  const V = p.V || 1.0;
  const h = p.h || 0.02;
  const current_dudy = V / Math.max(h, 0.001);
  const current_tau = mu * current_dudy;

  // Generar datos para el diagrama reológico (Esfuerzo vs Tasa de deformación)
  const data = useMemo(() => {
    const points = [];
    const max_dudy = Math.max(current_dudy * 1.5, 100);
    const steps = 15;
    
    for (let i = 0; i <= steps; i++) {
      const rate = (max_dudy * i) / steps;
      const stress = mu * rate;
      points.push({ 
        rate: parseFloat(rate.toFixed(1)), 
        stress: parseFloat(stress.toFixed(4))
      });
    }
    return points;
  }, [mu, current_dudy]);

  return (
    <div className="v2-card" style={{ padding: 16 }}>
      <div className="v2-card-title" style={{ marginBottom: 12 }}>
        {tt("Diagrama Reológico (Newtoniano) [[mu]]", "Rheological Diagram (Newtonian) [[mu]]")}
      </div>
      
      <div style={{ width: "100%", height: 320, marginTop: 10 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="colorVisc" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis 
              dataKey="rate" 
              type="number" 
              stroke="rgba(255,255,255,0.7)" 
              fontSize={10}
            >
              <Label 
                value={tt("Tasa de deformación [[dudy]] (s⁻¹)", "Shear rate [[dudy]] (s⁻¹)")} 
                offset={-10} 
                position="insideBottom" 
                style={{ fill: "rgba(255,255,255,0.5)", fontWeight: 'bold', fontSize: 11 }} 
              />
            </XAxis>
            <YAxis 
              stroke="rgba(255,255,255,0.7)" 
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 10 }}
            >
              <Label 
                value={tt("Esfuerzo [[tau]] (Pa)", "Stress [[tau]] (Pa)")} 
                angle={-90} 
                position="insideLeft" 
                style={{ fill: "rgba(255,255,255,0.5)", fontWeight: 'bold', fontSize: 11 }} 
              />
            </YAxis>
            <Tooltip 
              contentStyle={{ background: "rgba(15, 23, 42, 0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }}
              itemStyle={{ color: "#6366f1" }}
              labelStyle={{ color: "rgba(255,255,255,0.5)" }}
              formatter={(value) => [value, tt("Esfuerzo", "Stress")]}
              labelFormatter={(label) => `${tt("Tasa", "Rate")}: ${label} s⁻¹`}
            />
            
            <Area 
              type="monotone" 
              dataKey="stress" 
              stroke="#6366f1" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorVisc)" 
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="v2-panel mt-3" style={{ background: "rgba(0,0,0,0.3)", padding: 12, borderRadius: 8 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 11 }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span style={{ opacity: 0.7 }}>
              {tt(`Viscosidad [[mu]]: ${mu.toFixed(4)} Pa·s`, `Viscosity [[mu]]: ${mu.toFixed(4)} Pa·s`)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
            <span style={{ opacity: 0.7 }}>
              {tt(`Punto Actual: ${current_tau.toFixed(2)} Pa`, `Current Point: ${current_tau.toFixed(2)} Pa`)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
