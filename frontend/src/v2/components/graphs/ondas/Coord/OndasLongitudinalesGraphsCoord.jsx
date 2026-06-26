import React, { useMemo, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { createCoordGraph } from "../../graphFactories.jsx";

const tt = (uiLang, es, en) => (uiLang === "en" ? en : es);

function OndasLongitudinalesGraphsCoordInner({ 
  lang = "es", 
  paramsIn, 
  onGraphStateChange, 
  onInterpretationContextChange 
}) {
  const uiLang = lang === "en" ? "en" : "es";

  const B = Number(paramsIn?.B?.value ?? paramsIn?.B ?? 2.2e9);
  const k = Number(paramsIn?.k?.value ?? paramsIn?.k ?? 18);
  const s_hat = Number(paramsIn?.s_hat?.value ?? paramsIn?.s_hat ?? 1e-6);
  const p_hat = B * k * s_hat;

  const data = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => {
      const x = (i / 99) * (2 * Math.PI / k) * 2; // 2 wavelengths
      const s = s_hat * Math.cos(k * x);
      const p = p_hat * Math.sin(k * x);
      return {
        x: x,
        s: s,
        p: p,
      };
    });
  }, [k, s_hat, p_hat]);

  useEffect(() => {
    onGraphStateChange?.({
      p_hat, s_hat, B, k,
      graphType: "Coord",
      formula: "relacion_amplitudes",
    });
    
    onInterpretationContextChange?.({
      source: "coord",
      target: "p_hat",
      values: { p_hat, s_hat, B, k },
      reading: {
        es: "El gráfico muestra la naturaleza de las ondas de presión y desplazamiento. Se observa el desfase de 90°: la presión es máxima (compresión) donde el desplazamiento cruza por cero, demostrando cómo se propaga la energía mecánica en el fluido.",
        en: "The graph shows the nature of pressure and displacement waves. The 90° phase shift is observed: pressure is maximum (compression) where displacement crosses zero, demonstrating how mechanical energy propagates in the fluid.",
      },
    });
  }, [p_hat, s_hat, B, k, onGraphStateChange, onInterpretationContextChange]);

  const cardStyle = {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(15,23,42,0.74)",
    padding: 18,
  };

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <section style={cardStyle}>
        <h3 style={{ margin: "0 0 10px", fontSize: 20, color: "#f8fafc" }}>
          {tt(uiLang, "Perfil de Onda: Desplazamiento vs Presión", "Wave Profile: Displacement vs Pressure")}
        </h3>
        <div style={{ height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis 
                dataKey="x" 
                stroke="rgba(255,255,255,0.4)" 
                label={{ value: "x (m)", position: "insideBottom", offset: -5, fill: "rgba(255,255,255,0.5)" }}
              />
              <YAxis 
                yAxisId="left"
                stroke="#60a5fa" 
                label={{ value: tt(uiLang, "Desplazamiento s(x)", "Displacement s(x)"), angle: -90, position: "insideLeft", fill: "#60a5fa" }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                stroke="#f87171" 
                label={{ value: tt(uiLang, "Presión p(x)", "Pressure p(x)"), angle: 90, position: "insideRight", fill: "#f87171" }}
              />
              <Tooltip 
                contentStyle={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(255,255,255,0.1)" }}
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="s" 
                name={tt(uiLang, "Desplazamiento", "Displacement")}
                stroke="#60a5fa" 
                strokeWidth={3} 
                dot={false} 
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="p" 
                name={tt(uiLang, "Presión", "Pressure")}
                stroke="#f87171" 
                strokeWidth={3} 
                dot={false} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

export default createCoordGraph({
  Component: OndasLongitudinalesGraphsCoordInner,
  displayName: "OndasLongitudinalesGraphsCoord",
});


