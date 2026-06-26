import React, { useMemo } from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import * as Recharts from "recharts";
import MathInline from "@/v2/components/shared/MathInline";

const tt = (lang, es, en) => (lang === "en" ? en : es);

const toNum = (v, fb) => {
  if (v == null || v === "") return fb;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function buildData(rho, A, C_L, C_D, vMax, steps = 200) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const v = (vMax * i) / steps;
    const L = 0.5 * rho * v * v * A * C_L;
    const D = 0.5 * rho * v * v * A * C_D;
    out.push({ 
      v: parseFloat(v.toFixed(3)), 
      L: parseFloat(L.toFixed(1)),
      D: parseFloat(D.toFixed(1))
    });
  }
  return out;
}

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varían la sustentación y el arrastre con la velocidad?",
    en: "How do lift and drag vary with speed?",
  },
  magnitud_estrella: "L_f",
  variable_control: "v",
};

function AerodinamicaBasicaGraphsCoordComponent({ params, lang = "es" }) {
  const uiLang = lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 1) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");

  const p = params ?? {};
  const rho = clamp(toNum(p.rho, 1.0), 0.1, 1.3);
  const A = clamp(toNum(p.A, 15), 0.01, 1000);
  const C_L = clamp(toNum(p.C_L, 0.45), -4, 4);
  const C_D = clamp(toNum(p.C_D, 0.035), 0, 2);
  const v = clamp(toNum(p.v, 60), 0, 500);
  const vMax_base = 120; // Default max for graph
  const vMax = Math.max(vMax_base, v * 1.2);

  const currentLift = 0.5 * rho * v * v * A * C_L;
  const currentDrag = 0.5 * rho * v * v * A * C_D;
  
  const data = useMemo(() => buildData(rho, A, C_L, C_D, vMax), [rho, A, C_L, C_D, vMax]);

  return (
    <div className="v2-card" style={{ display: "grid", gap: 12, padding: 16 }}>
      <div className="v2-card-title">
        {tt(uiLang, "Fuerzas Aerodinámicas vs Velocidad", "Aerodynamic Forces vs Speed")}
      </div>
      <div className="muted" style={{ fontSize: 13, opacity: 0.8 }}>
        {tt(
          uiLang,
          "Tanto la sustentación como el arrastre escalan con el cuadrado de la velocidad.",
          "Both lift and drag scale with the square of the speed."
        )}{" "}
        <MathInline latex={"F \propto v^2"} />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, fontSize: 13, padding: "8px 12px", background: "rgba(255,255,255,0.05)", borderRadius: 8 }}>
        <span><b>ρ</b> = {fmt(rho, 3)} kg/m³</span>
        <span><b>A</b> = {fmt(A, 1)} m²</span>
        <span><b>C_L</b> = {fmt(C_L, 2)}</span>
        <span><b>C_D</b> = {fmt(C_D, 3)}</span>
      </div>
      
      <div style={{ display: "flex", gap: 20, fontSize: 14, fontWeight: 700 }}>
        <span style={{ color: "#4ade80" }}>L = {fmt(currentLift, 0)} N</span>
        <span style={{ color: "#fb7185" }}>D = {fmt(currentDrag, 0)} N</span>
      </div>

      <div style={{ width: "100%", height: 280, minHeight: 280, marginTop: 10, minWidth: 0, overflow: "hidden" }}>
        <Recharts.ResponsiveContainer width="100%" height="100%">
          <Recharts.LineChart data={data} margin={{ top: 25, right: 30, left: 20, bottom: 20 }}>
            <Recharts.CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
            <Recharts.XAxis
              dataKey="v"
              stroke="rgba(255,255,255,0.6)"
              tick={{ fontSize: 11 }}
              label={{ 
                value: tt(uiLang, "Velocidad v (m/s)", "Speed v (m/s)"), 
                position: "insideBottom", 
                offset: -12, 
                fontSize: 12,
                fill: "rgba(255,255,255,0.5)"
              }}
            />
            <Recharts.YAxis
              stroke="rgba(255,255,255,0.6)"
              tick={{ fontSize: 11 }}
              tickFormatter={(value) => (value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value.toFixed(0))}
              label={{ 
                value: tt(uiLang, "Fuerza (N)", "Force (N)"), 
                angle: -90, 
                position: "insideLeft", 
                offset: 10, 
                fontSize: 12,
                fill: "rgba(255,255,255,0.5)"
              }}
            />
            <Recharts.Tooltip
              contentStyle={{ 
                background: "rgba(15, 23, 42, 0.95)", 
                border: "1px solid rgba(255,255,255,0.14)", 
                borderRadius: 12, 
                fontSize: 13 
              }}
              labelFormatter={(value) => `v = ${fmt(value, 1)} m/s`}
            />
            <Recharts.Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: 12, opacity: 0.8 }} />
            <Recharts.Line 
              type="monotone" 
              dataKey="L" 
              name={tt(uiLang, "Sustentación L", "Lift L")}
              stroke="#4ade80" 
              strokeWidth={3} 
              dot={false} 
              isAnimationActive={true} 
            />
            <Recharts.Line 
              type="monotone" 
              dataKey="D" 
              name={tt(uiLang, "Arrastre D", "Drag D")}
              stroke="#fb7185" 
              strokeWidth={2} 
              strokeDasharray="5 5"
              dot={false} 
              isAnimationActive={true} 
            />
            {Number.isFinite(v) && v >= 0 && v <= vMax ? (
              <Recharts.ReferenceDot
                x={parseFloat(v.toFixed(3))}
                y={parseFloat(currentLift.toFixed(1))}
                r={6}
                fill="#E53935"
                stroke="white"
                strokeWidth={2}
              />
            ) : null}
          </Recharts.LineChart>
        </Recharts.ResponsiveContainer>
      </div>

      <div className="v2-panel" style={{ background: "rgba(74, 222, 128, 0.05)", border: "1px solid rgba(74, 222, 128, 0.15)", padding: 12, borderRadius: 10 }}>
        <div style={{ fontSize: 13, lineHeight: 1.5 }}>
          <b style={{ color: "#4ade80" }}>{tt(uiLang, "Lectura física:", "Physical reading:")}</b>{" "}
          {tt(uiLang, 
            "La sustentación y el arrastre crecen de forma parabólica. La eficiencia aerodinámica es la relación L/D.", 
            "Lift and drag grow parabolically. Aerodynamic efficiency is the L/D ratio.")}
        </div>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: AerodinamicaBasicaGraphsCoordComponent,
  displayName: "AerodinamicaBasicaGraphsCoord",
});
