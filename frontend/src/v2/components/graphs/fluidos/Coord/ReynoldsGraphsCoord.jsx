import React, { useMemo } from "react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, ReferenceLine, ReferenceArea
} from "recharts";

/**
 * createCoordGraph(
 * Eje X: Reynolds [[Re]]
 * Eje Y: Fricción [[f]]
 * formula: f = 64/Re (Laminar) | f = 0.3164/Re^0.25 (Turbulento)
 * Interpretación: Diagrama de Moody simplificado
 * target Re
 * )
 */
export default function ReynoldsGraphsCoord(props) {
  const { lang = "es", paramsIn = {}, sharedParams = null } = props;
  const tt = (es, en) => (lang === "en" ? en : es);
  const uiLang = lang === "en" ? "en" : "es";
  
  const p = sharedParams ?? paramsIn ?? {};
  const Re = p.Re || 500;

  // Generar datos para el Diagrama de Transición de Reynolds
  const data = useMemo(() => {
    const points = [];
    for (let r = 100; r <= 10000; r += 200) {
      let f;
      if (r < 2300) {
        f = 64 / r;
      } else if (r > 4000) {
        f = 0.3164 * Math.pow(r, -0.25);
      } else {
        const f1 = 64 / 2300;
        const f2 = 0.3164 * Math.pow(4000, -0.25);
        const t = (r - 2300) / (4000 - 2300);
        f = f1 * (1 - t) + f2 * t;
      }
      points.push({ re: r, friction: f });
    }
    return points;
  }, []);

  return (
    <div className="v2-card" style={{ padding: 16 }}>
      <div className="v2-card-title" style={{ marginBottom: 12 }}>
        {tt("Diagrama de Transición de Reynolds", "Reynolds Transition Diagram")}
      </div>
      
      <div style={{ width: "100%", height: 320, marginTop: 10 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
            <XAxis 
              dataKey="re" 
              type="number" 
              domain={[100, 10000]} 
              stroke="rgba(255,255,255,0.7)" 
              fontSize={10}
            >
              <Label 
                value={tt("Número de Reynolds [[Re]]", "Reynolds Number [[Re]]")} 
                offset={-10} 
                position="insideBottom" 
                style={{ fill: "rgba(255,255,255,0.5)", fontWeight: 'bold', fontSize: 11 }} 
              />
            </XAxis>
            <YAxis 
              stroke="rgba(255,255,255,0.7)" 
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 10 }}
              domain={[0, 0.1]}
            >
              <Label 
                value={tt("Factor de Fricción [[f]]", "Friction Factor [[f]]")} 
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
            
            <ReferenceArea x1={2300} x2={4000} fill="#f59e0b" fillOpacity={0.1} />
            
            <Line 
              type="monotone" 
              dataKey="friction" 
              stroke="#6366f1" 
              strokeWidth={3} 
              dot={false} 
              isAnimationActive={false}
            />

            <ReferenceLine 
              x={Re} 
              stroke="#f43f5e" 
              strokeWidth={2} 
              strokeDasharray="5 5"
              label={{ 
                value: `Re=${Math.round(Re)}`, 
                position: 'top', 
                fill: '#f43f5e',
                fontWeight: 'bold',
                fontSize: 12
              }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="v2-panel mt-3" style={{ background: "rgba(0,0,0,0.3)", padding: 12 }}>
        <div style={{ display: 'flex', gap: 16, fontSize: 11 }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span style={{ opacity: 0.7 }}>{tt("Régimen Laminar", "Laminar Regime")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 opacity-50 rounded-full"></div>
            <span style={{ opacity: 0.7 }}>{tt("Transición", "Transition")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
