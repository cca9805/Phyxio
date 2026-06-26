import React, { useMemo } from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import * as Recharts from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { tr } from "@/v2/utils/uiLanguage";

const tt = (lang, es, en) => (lang === "en" ? en : es);

const toNum = (v, fb) => {
  if (v == null || v === "") return fb;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function buildData(rho, dpMax, steps = 200) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const dp = (dpMax * i) / steps;
    const v = Math.sqrt((2 * dp) / rho);
    out.push({ dp: parseFloat(dp.toFixed(2)), v: parseFloat(v.toFixed(4)) });
  }
  return out;
}

function TuboDePitotGraphsCoordComponent({ params, lang = "es" }) {
  const uiLang = lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) =>
    Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-";

  const p = params ?? {};
  const rho = clamp(toNum(p.rho, 1.2), 0.1, 15000);
  const dp = clamp(toNum(p.dp, 450), 0, 5000);
  const dpMax = clamp(toNum(p.dpMax, 1000), 100, 10000);

  const v = Math.sqrt((2 * dp) / rho);
  const data = useMemo(() => buildData(rho, dpMax), [rho, dpMax]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt(uiLang, "Tubo de Pitot - velocidad y presion", "Pitot Tube - speed and pressure")}
        </div>
        <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
          {tt(
            uiLang,
            "La grafica muestra como la velocidad deducida crece con la raiz cuadrada de la diferencia de presion.",
            "The graph shows how inferred speed grows with the square root of the pressure difference."
          )}{" "}
          <MathInline latex={"v = \\sqrt{\\dfrac{2\\,\\Delta p}{\\rho}}"} />
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 10,
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid rgba(99,102,241,0.2)",
            background: "rgba(99,102,241,0.07)",
            fontSize: 13,
          }}
        >
          <span><b>rho</b> = {fmt(rho, 3)} kg/m^3</span>
          <span><b>Delta p</b> = {fmt(dp, 1)} Pa</span>
          <span><b>v</b> = {fmt(v, 2)} m/s</span>
        </div>

        <div style={{ marginTop: 14, minWidth: 0 }}>
          <Recharts.ResponsiveContainer width="100%" height={260}>
            <Recharts.LineChart data={data} margin={{ top: 25, right: 30, bottom: 5, left: 20 }}>
              <Recharts.CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
              <Recharts.XAxis
                dataKey="dp"
                label={{
                  value: tt(uiLang, "Delta p (Pa)", "Delta p (Pa)"),
                  position: "insideBottom",
                  offset: -2,
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                tickFormatter={(value) => fmt(value, 0)}
              />
              <Recharts.YAxis
                label={{
                  value: tt(uiLang, "v (m/s)", "v (m/s)"),
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                tickFormatter={(value) => fmt(value, 1)}
              />
              <Recharts.Tooltip
                contentStyle={{
                  background: "rgba(15,15,30,0.92)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(value, name) => {
                  if (name === "v") return [`${fmt(value, 2)} m/s`, "v"];
                  return [value, name];
                }}
                labelFormatter={(value) => `Delta p = ${fmt(value, 1)} Pa`}
              />
              <Recharts.Legend verticalAlign="top" align="right" height={36} />
              <Recharts.Line
                name={tt(uiLang, "Velocidad v(dp)", "Velocity v(dp)")}
                type="monotone"
                dataKey="v"
                stroke="#818cf8"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 4 }}
                isAnimationActive={true}
              />
              {dp <= dpMax ? (
                <Recharts.ReferenceLine
                  x={parseFloat(dp.toFixed(2))}
                  stroke="rgba(250,204,21,0.7)"
                  strokeDasharray="4 3"
                />
              ) : null}
              {dp <= dpMax ? (
                <Recharts.ReferenceDot
                  x={parseFloat(dp.toFixed(2))}
                  y={parseFloat(v.toFixed(4))}
                  r={5}
                  fill="#facc15"
                  stroke="none"
                />
              ) : null}
            </Recharts.LineChart>
          </Recharts.ResponsiveContainer>
        </div>
      </div>
      
      <div className="v2-panel" style={{ borderLeft: '4px solid #818cf8', padding: '12px 16px', background: 'rgba(129,140,248,0.05)' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: 14, color: '#818cf8', fontWeight: 600 }}>
          {tr(uiLang, "LECTURA FÍSICA", "PHYSICAL READING")}
        </h4>
        <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, opacity: 0.9 }}>
          {tt(
            uiLang,
            `Al aumentar la presión dinámica (dp = ${fmt(dp,1)} Pa), la velocidad del flujo aumenta siguiendo una curva de raíz cuadrada. Esto significa que para duplicar la velocidad medida, la diferencia de presión debe cuadruplicarse.`,
            `As dynamic pressure increases (dp = ${fmt(dp,1)} Pa), the flow velocity increases following a square root curve. This means that to double the measured speed, the pressure difference must quadruple.`
          )}
        </p>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: TuboDePitotGraphsCoordComponent,
  displayName: "TuboDePitotGraphsCoord",
});
