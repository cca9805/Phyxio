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

const fmt = (n, uiLang = "es") => {
  if (!Number.isFinite(n)) return "—";
  const text = Math.abs(n) >= 1000 
    ? `${(n / 1000).toFixed(1)} kPa` 
    : `${n.toFixed(0)} Pa`;
  return uiLang === "en" ? text : text.replace(".", ",");
};

function PresionCoordInner({ lang = "es", paramsIn, onGraphStateChange, onInterpretationContextChange }) {
  const uiLang = lang === "en" ? "en" : "es";

  // Parámetros de entrada (Fuerza y Área)
  const F = Number(paramsIn?.F?.value ?? paramsIn?.F ?? 600);
  const A = Number(paramsIn?.A?.value ?? paramsIn?.A ?? 0.01);
  const pVal = A > 0 ? F / A : 0;

  // Curva 1: p vs A (F constante)
  const dataA = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const area = 0.001 + i * 0.001;
      return {
        area,
        p: F / area,
      };
    });
  }, [F]);

  // Curva 2: p vs F (A constante)
  const dataF = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const force = 100 + i * 40;
      return {
        force,
        p: force / A,
      };
    });
  }, [A]);

  // Notificar cambios
  React.useEffect(() => {
    onGraphStateChange?.({
      p: pVal, F, A,
      graphType: "Coord",
    });
    
    onInterpretationContextChange?.({
      source: "coord",
      target: "p",
      values: { p: pVal, F, A },
      reading: {
        es: "El gráfico superior muestra que la presión es inversamente proporcional al área (hipérbola), mientras que el inferior muestra la proporcionalidad directa con la fuerza (recta).",
        en: "The top graph shows that pressure is inversely proportional to area (hyperbola), while the bottom one shows direct proportionality with force (line).",
      },
    });
  }, [pVal, F, A, onGraphStateChange, onInterpretationContextChange]);

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
              {tt(uiLang, "Mecánica de Fluidos · Coord", "Fluid Mechanics · Coord")}
            </div>
            <h3 style={{ margin: "6px 0 8px", fontSize: 22, fontWeight: 950, color: "#f8fafc" }}>
              {tt(uiLang, "Leyes de la Presión", "Laws of Pressure")}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.76)", maxWidth: 600, lineHeight: 1.45 }}>
              {tt(
                uiLang, 
                "Análisis de la dependencia de la presión respecto al área (inversa) y a la fuerza (directa).",
                "Analysis of pressure dependency on area (inverse) and force (direct)."
              )}
            </p>
          </div>
          <div style={{ padding: 12, borderRadius: 14, background: "rgba(37,99,235,0.18)", border: "1px solid rgba(147,197,253,0.18)" }}>
             <MathInline latex="p = \frac{F}{A}" />
          </div>
        </div>
      </section>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 14 }}>
        <div style={{ display: "grid", gap: 14 }}>
          {/* Gráfico 1: p vs A */}
          <section style={{ ...cardStyle, padding: 14, height: 260 }}>
            <div style={{ fontSize: 11, opacity: 0.5, fontWeight: 900, marginBottom: 8 }}>{tt(uiLang, "PRESIÓN vs ÁREA (F constante)", "PRESSURE vs AREA (constant F)")}</div>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={dataA}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="area" hide />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} formatter={(v) => fmt(v, uiLang)} />
                <ReferenceLine x={A} stroke="#fde68a" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="p" stroke="#60a5fa" strokeWidth={3} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </section>

          {/* Gráfico 2: p vs F */}
          <section style={{ ...cardStyle, padding: 14, height: 260 }}>
            <div style={{ fontSize: 11, opacity: 0.5, fontWeight: 900, marginBottom: 8 }}>{tt(uiLang, "PRESIÓN vs FUERZA (A constante)", "PRESSURE vs FORCE (constant A)")}</div>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart data={dataF}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="force" hide />
                <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8 }} formatter={(v) => fmt(v, uiLang)} />
                <ReferenceLine x={F} stroke="#fde68a" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="p" stroke="#34d399" strokeWidth={3} dot={false} isAnimationActive={false} />
              </LineChart>
            </ResponsiveContainer>
          </section>
        </div>

        <section style={{ ...cardStyle, padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ padding: 12, borderRadius: 12, background: "rgba(96,165,250,0.1)" }}>
            <div style={{ fontSize: 10, opacity: 0.6, fontWeight: 900 }}>{tt(uiLang, "FUERZA", "FORCE")}</div>
            <div style={{ fontSize: 20, fontWeight: 950, color: "#60a5fa" }}>{F.toFixed(0)} N</div>
          </div>
          <div style={{ padding: 12, borderRadius: 12, background: "rgba(52,211,153,0.1)" }}>
            <div style={{ fontSize: 10, opacity: 0.6, fontWeight: 900 }}>{tt(uiLang, "ÁREA", "AREA")}</div>
            <div style={{ fontSize: 20, fontWeight: 950, color: "#34d399" }}>{A.toFixed(4)} m²</div>
          </div>
          <div style={{ marginTop: "auto", padding: 16, borderRadius: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: 11, opacity: 0.5, fontWeight: 900 }}>{tt(uiLang, "Presión", "Pressure")}</div>
            <div style={{ fontSize: 32, fontWeight: 950, color: "#f8fafc" }}>{fmt(pVal, uiLang)}</div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: PresionCoordInner,
  displayName: "PresionGraphsCoord",
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo se convierte una fuerza física en una presión distribuida sobre un área?",
      en: "How does a physical force convert into a distributed pressure over an area?",
    },
  },
});
