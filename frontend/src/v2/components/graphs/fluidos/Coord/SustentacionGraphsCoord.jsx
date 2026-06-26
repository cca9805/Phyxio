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

function buildData(rho, S, C_L, vMax, steps = 200) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const v = (vMax * i) / steps;
    const L = 0.5 * rho * v * v * S * C_L;
    out.push({ v: parseFloat(v.toFixed(3)), L: parseFloat(L.toFixed(1)) });
  }
  return out;
}

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo varía la sustentación con la velocidad del aire?",
    en: "How does lift vary with airspeed?",
  },
  magnitud_estrella: "L",
  variable_control: "v",
};
void graph_identity;

function SustentacionGraphsCoordComponent({ params, lang = "es" }) {
  const uiLang = lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 1) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");

  const p = params ?? {};
  const rho = clamp(toNum(p.rho, 1.225), 0.1, 1300);
  const S = clamp(toNum(p.S, 14), 0.01, 1000);
  const C_L = clamp(toNum(p.C_L, 1.2), -4, 4);
  const v = clamp(toNum(p.v, 60), 0, 500);
  const vMax_base = clamp(toNum(p.vMax, 100), 10, 500);
  const vMax = Math.max(vMax_base, v * 1.2);

  const currentLift = 0.5 * rho * v * v * S * C_L;
  const data = useMemo(() => buildData(rho, S, C_L, vMax), [rho, S, C_L, vMax]);

  return (
    <div className="v2-card" style={{ display: "grid", gap: 12, padding: 16 }}>
      <div className="v2-card-title">
        {tt(uiLang, "Sustentación frente a Velocidad", "Lift versus Speed")}
      </div>
      <div className="muted" style={{ fontSize: 13, opacity: 0.8 }}>
        {tt(
          uiLang,
          "La fuerza de sustentación depende del cuadrado de la velocidad del flujo.",
          "Lift force depends on the square of the flow speed."
        )}{" "}
        <MathInline latex={"L = \\tfrac{1}{2}\\rho v^2 S C_L"} />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, fontSize: 13, padding: "8px 12px", background: "rgba(255,255,255,0.05)", borderRadius: 8 }}>
        <span><b>ρ</b> = {fmt(rho, 3)} kg/m³</span>
        <span><b>S</b> = {fmt(S, 1)} m²</span>
        <span><b>C_L</b> = {fmt(C_L, 2)}</span>
        <span style={{ color: "#4ade80", fontWeight: 800 }}><b>L</b> = {fmt(currentLift, 0)} N</span>
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
                value: tt(uiLang, "Sustentación L (N)", "Lift L (N)"), 
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
              formatter={(value) => [`${fmt(value, 0)} N`, tt(uiLang, "Sustentación", "Lift")]}
              labelFormatter={(value) => `v = ${fmt(value, 1)} m/s`}
            />
            <Recharts.Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: 12, opacity: 0.8 }} />
            <Recharts.Line 
              type="monotone" 
              dataKey="L" 
              name={tt(uiLang, "Fuerza L(v)", "Force L(v)")}
              stroke="#4ade80" 
              strokeWidth={3} 
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
                label={{ 
                  value: `L=${fmt(currentLift, 0)} N`, 
                  position: "top", 
                  fontSize: 12, 
                  fill: "#ff8a80",
                  fontWeight: 800,
                  offset: 10
                }}
              />
            ) : null}
          </Recharts.LineChart>
        </Recharts.ResponsiveContainer>
      </div>

      <div className="v2-panel" style={{ background: "rgba(74, 222, 128, 0.05)", border: "1px solid rgba(74, 222, 128, 0.15)", padding: 12, borderRadius: 10 }}>
        <div style={{ fontSize: 13, lineHeight: 1.5 }}>
          <b style={{ color: "#4ade80" }}>{tt(uiLang, "Lectura física:", "Physical reading:")}</b>{" "}
          {currentLift > 0 ? (
            tt(uiLang, 
              "La curva parabólica indica que duplicar la velocidad genera cuatro veces más fuerza.", 
              "The parabolic curve indicates that doubling speed generates four times more force.")
          ) : (
            tt(uiLang, 
              "Sin velocidad o con coeficiente nulo, no hay sustentación aerodinámica.", 
              "Without speed or with zero coefficient, there is no aerodynamic lift.")
          )}
        </div>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: SustentacionGraphsCoordComponent,
  displayName: "SustentacionGraphsCoord",
});
