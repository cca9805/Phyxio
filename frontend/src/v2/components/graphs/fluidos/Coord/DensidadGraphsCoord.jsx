import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import { createCoordGraph } from "../../graphFactories.jsx";
import MathInline from "@/v2/components/shared/MathInline";

const tt = (uiLang, es, en) => (uiLang === "en" ? en : es);

function DensidadCoordInner({ lang = "es", paramsIn, onGraphStateChange, onInterpretationContextChange }) {
  const uiLang = lang === "en" ? "en" : "es";

  // p = m / V  => m = p * V
  const rho = Number(paramsIn?.rho?.value ?? paramsIn?.rho ?? 1000);
  // Usamos un volumen de referencia para el punto de operación
  const V_ref = 0.005; 
  const m_ref = rho * V_ref;

  const data = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const V = 0.0001 + i * 0.0002;
      return {
        V,
        m: rho * V,
      };
    });
  }, [rho]);

  const fmt = (n, d = 2) => {
    const decSep = uiLang === "en" ? "." : ",";
    return Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "—";
  };

  React.useEffect(() => {
    onGraphStateChange?.({
      rho,
      m: m_ref,
      V: V_ref,
      graphType: "Coord",
    });
    
    onInterpretationContextChange?.({
      source: "coord",
      target: "rho",
      values: { rho, m: m_ref, V: V_ref },
      reading: {
        es: "La pendiente de la recta representa la densidad del fluido. Una mayor inclinación indica una sustancia más densa.",
        en: "The slope of the line represents the fluid density. A steeper slope indicates a denser substance.",
      },
    });
  }, [rho, onGraphStateChange, onInterpretationContextChange]);

  const cardStyle = {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(15,23,42,0.74)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
  };

  return (
    <div style={{ display: "grid", gap: 14 }}>
      <section style={{ ...cardStyle, padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", opacity: 0.62, fontWeight: 900 }}>
              {tt(uiLang, "Fundamentos · Coord", "Fundamentals · Coord")}
            </div>
            <h3 style={{ margin: "6px 0 8px", fontSize: 22, fontWeight: 950, color: "#f8fafc" }}>
              {tt(uiLang, "Relación Masa-Volumen", "Mass-Volume Relationship")}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.76)", maxWidth: 600, lineHeight: 1.45 }}>
              {tt(
                uiLang, 
                "Visualización de la densidad como la constante de proporcionalidad (pendiente) entre la masa y el volumen ocupado.",
                "Visualization of density as the proportionality constant (slope) between mass and the occupied volume."
              )}
            </p>
          </div>
          <div style={{ padding: 12, borderRadius: 14, background: "rgba(37,99,235,0.18)", border: "1px solid rgba(147,197,253,0.18)" }}>
             <MathInline latex="m = \rho \cdot V" />
          </div>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 14 }}>
        <section style={{ ...cardStyle, padding: "24px 14px 14px", minHeight: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis 
                dataKey="V" 
                stroke="rgba(255,255,255,0.5)" 
                fontSize={11}
                tickFormatter={(v) => v.toFixed(3)}
                label={{ value: "Volumen (m³)", position: "insideBottom", offset: -10, fill: "rgba(255,255,255,0.5)" }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.5)" 
                fontSize={11}
                label={{ value: "Masa (kg)", angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.5)" }}
              />
              <Tooltip 
                contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }}
                formatter={(v) => [`${fmt(v)} kg`, "Masa"]}
                labelFormatter={(v) => `V = ${fmt(v, 4)} m³`}
              />
              <Line type="monotone" dataKey="m" stroke="#38bdf8" strokeWidth={4} dot={false} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section style={{ ...cardStyle, padding: 18, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ padding: 16, borderRadius: 16, background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>
            <div style={{ fontSize: 11, opacity: 0.6, fontWeight: 900 }}>{tt(uiLang, "DENSIDAD (PENDIENTE)", "DENSITY (SLOPE)")}</div>
            <div style={{ fontSize: 24, fontWeight: 950, color: "#38bdf8", margin: "4px 0" }}>{fmt(rho, 0)} kg/m³</div>
            <div style={{ fontSize: 12, opacity: 0.8 }}>
              {rho > 1000 ? tt(uiLang, "Sustancia pesada", "Heavy substance") : tt(uiLang, "Sustancia ligera", "Light substance")}
            </div>
          </div>
          
          <div style={{ marginTop: "auto", padding: 16, borderRadius: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: 11, opacity: 0.5, fontWeight: 900 }}>{tt(uiLang, "Ecuación", "Equation")}</div>
            <div style={{ fontSize: 20, fontWeight: 950, color: "#f8fafc", margin: "8px 0" }}>
              m = ({fmt(rho, 0)}) · V
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: DensidadCoordInner,
  displayName: "DensidadGraphsCoord",
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo permite la densidad relacionar masa y volumen para anticipar el comportamiento de un fluido?",
      en: "How does density relate mass and volume to anticipate the behavior of a fluid?",
    },
  },
});
