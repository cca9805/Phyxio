import React, { useMemo } from "react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, ReferenceLine, Area, AreaChart
} from "recharts";

/**
 * createCoordGraph(
 * pregunta_principal: {
 *   es: "¿Cómo afecta la fricción interna a la presión del fluido a lo largo de un conducto?",
 *   en: "How does internal friction affect fluid pressure along a duct?"
 * }
 * formula: hf = f * (L/D) * (v^2/2g)
 * Eje X: Longitud [[L]] (m)
 * Eje Y: Altura de carga [[hf]] (m) o Presión [[dp]] (Pa)
 * Representa la Línea de Grado Hidráulico (HGL) mostrando la pendiente de fricción.
 * )
 */
export default function PerdidasDeCargaGraphsCoord(props) {
  const { lang = "es", paramsIn = {}, sharedParams = null } = props;
  const tt = (es, en) => (lang === "en" ? en : es);
  const uiLang = lang === "en" ? "en" : "es";
  
  const p = sharedParams ?? paramsIn ?? {};
  const L_total = p.L || 100;
  const hf = p.hf || 10;
  const v = p.v || 2;
  const g = 9.81;
  const kinetic_head = (v * v) / (2 * g);

  // Generar datos para la línea de energía y la línea piezométrica
  const data = useMemo(() => {
    const points = [];
    const steps = 20;
    const initial_H = hf * 1.2 + 5; 
    
    for (let i = 0; i <= steps; i++) {
      const l = (L_total * i) / steps;
      const h_lost = (hf * l) / L_total;
      const h_total = initial_H - h_lost;
      const h_piezo = h_total - kinetic_head;
      
      points.push({ 
        l: parseFloat(l.toFixed(2)), 
        h_total: parseFloat(h_total.toFixed(2)),
        h_piezo: parseFloat(h_piezo.toFixed(2))
      });
    }
    return points;
  }, [L_total, hf, kinetic_head]);

  return (
    <div className="v2-card" style={{ padding: 16 }}>
      <div className="v2-card-title" style={{ marginBottom: 12 }}>
        {tt("Perfil de Energía y Pérdidas [[hf]]", "Energy and Loss Profile [[hf]]")}
      </div>
      
      <div style={{ width: "100%", height: 320, marginTop: 10 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="colorPiezoLoss" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis 
              dataKey="l" 
              type="number" 
              domain={[0, L_total]} 
              stroke="rgba(255,255,255,0.7)" 
              fontSize={10}
            >
              <Label 
                value={tt("Longitud [[L]] (m)", "Length [[L]] (m)")} 
                offset={-10} 
                position="insideBottom" 
                style={{ fill: "rgba(255,255,255,0.5)", fontWeight: 'bold', fontSize: 11 }} 
              />
            </XAxis>
            <YAxis 
              stroke="rgba(255,255,255,0.7)" 
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 10 }}
              domain={['auto', 'auto']}
            >
              <Label 
                value={tt("Carga Hidráulica [[hf]] (m)", "Hydraulic Head [[hf]] (m)")} 
                angle={-90} 
                position="insideLeft" 
                style={{ fill: "rgba(255,255,255,0.5)", fontWeight: 'bold', fontSize: 11 }} 
              />
            </YAxis>
            <Tooltip 
              contentStyle={{ background: "rgba(15, 23, 42, 0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }}
              itemStyle={{ color: "#38bdf8" }}
              labelStyle={{ color: "rgba(255,255,255,0.5)" }}
            />
            
            <Area 
              type="monotone" 
              dataKey="h_piezo" 
              stroke="#38bdf8" 
              fillOpacity={1} 
              fill="url(#colorPiezoLoss)" 
              name={tt("Línea Piezométrica (HGL)", "Hydraulic Grade Line (HGL)")}
              isAnimationActive={false}
            />
            
            <Line 
              type="monotone" 
              dataKey="h_total" 
              stroke="#f43f5e" 
              strokeWidth={3} 
              dot={false} 
              name={tt("Línea de Energía (EGL)", "Energy Grade Line (EGL)")}
              isAnimationActive={false}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="v2-panel mt-3" style={{ background: "rgba(0,0,0,0.3)", padding: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 11 }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
            <span style={{ opacity: 0.7 }}>
              {tt(`Pérdida Total [[hf]]: ${hf.toFixed(2)} m`, `Total Loss [[hf]]: ${hf.toFixed(2)} m`)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            <span style={{ opacity: 0.7 }}>
              {tt(`Velocidad [[v]]: ${v.toFixed(2)} m/s`, `Velocity [[v]]: ${v.toFixed(2)} m/s`)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
