import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { createCoordGraph } from "../../graphFactories.jsx";
import MathInline from "@/v2/components/shared/MathInline";

const tt = (uiLang, es, en) => (uiLang === "en" ? en : es);

function TensionSuperficialCoordInner({ lang = "es", paramsIn, onGraphStateChange, onInterpretationContextChange }) {
  const uiLang = lang === "en" ? "en" : "es";

  // Parámetros físicos
  const sigma = Number(paramsIn?.sigma?.value ?? paramsIn?.sigma ?? 0.072);
  const r = Math.max(Number(paramsIn?.r?.value ?? paramsIn?.r ?? 0.0005), 1e-6);
  const rho = Number(paramsIn?.rho?.value ?? paramsIn?.rho ?? 1000);
  const g = 9.81;
  const theta = Number(paramsIn?.theta?.value ?? paramsIn?.theta ?? 0);

  const hNow = (2 * sigma * Math.cos(theta)) / (rho * g * r);
  const dpNow = (2 * sigma) / r;

  const data = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => {
      const rr = 0.0001 + i * 0.00005;
      const h = (2 * sigma * Math.cos(theta)) / (rho * g * rr);
      return {
        r_mm: rr * 1000,
        h_cm: h * 100,
      };
    });
  }, [sigma, rho, theta]);

  const fmt = (n, d = 2) => {
    const decSep = uiLang === "en" ? "." : ",";
    return Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "—";
  };

  React.useEffect(() => {
    onGraphStateChange?.({
      sigma, r, h: hNow, dp: dpNow,
      graphType: "Coord",
    });
    
    onInterpretationContextChange?.({
      source: "coord",
      target: "h",
      values: { sigma, r, h: hNow, dp: dpNow },
      reading: {
        es: "El gráfico muestra la Ley de Jurin: la altura capilar es inversamente proporcional al radio del tubo. A radios menores, la tensión superficial logra elevar el fluido a mayor altura.",
        en: "The graph shows Jurin's Law: capillary height is inversely proportional to the tube radius. At smaller radii, surface tension manages to lift the fluid higher.",
      },
    });
  }, [sigma, r, hNow, dpNow, onGraphStateChange, onInterpretationContextChange]);

  const cardStyle = {
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(15,23,42,0.74)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.28)",
  };

  return (
    <div style={{ display: "grid", gap: 14, minHeight: 500 }}>
      <section style={{ ...cardStyle, padding: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 12, letterSpacing: 1, textTransform: "uppercase", opacity: 0.62, fontWeight: 900 }}>
              {tt(uiLang, "Fenómenos Interfaciales · Coord", "Interfacial Phenomena · Coord")}
            </div>
            <h3 style={{ margin: "6px 0 8px", fontSize: 22, fontWeight: 950, color: "#f8fafc" }}>
              {tt(uiLang, "Ley de Jurin (Capilaridad)", "Jurin's Law (Capillarity)")}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.76)", maxWidth: 600, lineHeight: 1.45, fontSize: 14 }}>
              {tt(
                uiLang, 
                "Exploración de la altura de ascenso capilar en función del radio del conducto y la tensión superficial.",
                "Exploration of capillary rise height as a function of duct radius and surface tension."
              )}
            </p>
          </div>
          <div style={{ padding: 14, borderRadius: 14, background: "rgba(37,99,235,0.18)", border: "1px solid rgba(147,197,253,0.18)" }}>
             <MathInline latex="h = \frac{2\sigma \cos\theta}{\rho g r}" />
          </div>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 14, height: 420 }}>
        <section style={{ ...cardStyle, padding: "30px 14px 14px", position: "relative" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
              <XAxis 
                dataKey="r_mm" 
                stroke="rgba(255,255,255,0.4)" 
                fontSize={11}
                tickFormatter={(v) => v.toFixed(2)}
                label={{ 
                  value: tt(uiLang, "Radio r (mm)", "Radius r (mm)"), 
                  position: "insideBottom", 
                  offset: -15, 
                  fill: "rgba(255,255,255,0.5)",
                  fontSize: 12,
                  fontWeight: 700
                }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.4)" 
                fontSize={11}
                label={{ 
                  value: tt(uiLang, "Altura h (cm)", "Height h (cm)"), 
                  angle: -90, 
                  position: "insideLeft", 
                  fill: "rgba(255,255,255,0.5)",
                  fontSize: 12,
                  fontWeight: 700,
                  offset: 0
                }}
              />
              <Tooltip 
                contentStyle={{ background: "rgba(15,23,42,0.95)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, backdropFilter: "blur(8px)" }}
                itemStyle={{ fontSize: 13, fontWeight: 700 }}
                labelStyle={{ color: "#94a3b8", marginBottom: 4, fontSize: 11, fontWeight: 900 }}
                formatter={(v) => [`${fmt(v)} cm`, tt(uiLang, "Altura", "Height")]}
                labelFormatter={(v) => `r = ${fmt(v, 2)} mm`}
              />
              <ReferenceLine x={r * 1000} stroke="#fde68a" strokeDasharray="5 5" opacity={0.6} />
              <Line 
                type="monotone" 
                dataKey="h_cm" 
                stroke="#f472b6" 
                strokeWidth={5} 
                dot={false} 
                isAnimationActive={true}
                animationDuration={800}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section style={{ ...cardStyle, padding: 20, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ padding: 14, borderRadius: 16, background: "rgba(244,114,182,0.12)", border: "1px solid rgba(244,114,182,0.25)" }}>
            <div style={{ fontSize: 10, letterSpacing: 0.8, opacity: 0.7, fontWeight: 900 }}>{tt(uiLang, "TENSIÓN σ", "SURFACE TENSION σ")}</div>
            <div style={{ fontSize: 20, fontWeight: 950, color: "#f472b6", marginTop: 4 }}>{fmt(sigma, 3)} <span style={{ fontSize: 12, fontWeight: 500 }}>N/m</span></div>
          </div>
          
          <div style={{ padding: 14, borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: 10, letterSpacing: 0.8, opacity: 0.7, fontWeight: 900 }}>{tt(uiLang, "RADIO CAPILAR r", "CAPILLARY RADIUS r")}</div>
            <div style={{ fontSize: 20, fontWeight: 950, color: "#f8fafc", marginTop: 4 }}>{fmt(r * 1000, 2)} <span style={{ fontSize: 12, fontWeight: 500 }}>mm</span></div>
          </div>
          
          <div style={{ marginTop: "auto", padding: 20, borderRadius: 20, background: "rgba(30,41,59,0.5)", border: "1px solid rgba(99,102,241,0.2)", boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.6, fontWeight: 900 }}>{tt(uiLang, "Altura de Ascenso", "Rise Height")}</div>
            <div style={{ fontSize: 36, fontWeight: 950, color: "#f8fafc", margin: "6px 0", textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>
              {fmt(hNow * 100, 2)} <span style={{ fontSize: 16 }}>cm</span>
            </div>
            <div style={{ fontSize: 12, color: "#f472b6", fontWeight: 800, marginTop: 6, display: "flex", alignItems: "center", gap: 8 }}>
               <span style={{ opacity: 0.6 }}>Δp =</span> {fmt(dpNow, 0)} Pa
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: TensionSuperficialCoordInner,
  displayName: "TensionSuperficialGraphsCoord",
});
