import React, { useMemo } from "react";
import { createCoordGraph } from "../../graphFactories.jsx";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";

const tt = (lang, es, en) => (lang === "en" ? en : es);

const toNum = (v, fb) => {
  if (v == null || v === "") return fb;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

function buildData(rho, r, v1Max, steps = 200) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const v1 = (v1Max * i) / steps;
    const dp = 0.5 * rho * v1 * v1 * (r * r - 1);
    out.push({ v1: parseFloat(v1.toFixed(4)), dp: parseFloat(dp.toFixed(2)) });
  }
  return out;
}

const graph_identity = {
  pregunta_principal: {
    es: "Por que la presion del fluido disminuye precisamente donde su velocidad es maxima al atravesar un estrechamiento",
    en: "Why the fluid pressure decreases precisely where its velocity is highest while crossing a constriction",
  },
  magnitud_estrella: "v2",
  variable_control: "v1",
};
void graph_identity;

function EfectoVenturiGraphsCoordComponent({ params, lang = "es" }) {
  const uiLang = lang === "en" ? "en" : "es";
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) =>
    Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-";

  const p = params ?? {};
  const rho = clamp(toNum(p.rho, 1000), 1, 15000);
  const A1 = clamp(toNum(p.A1, 0.00786), 1e-6, 1);
  const A2 = clamp(toNum(p.A2, 0.00196), 1e-6, A1);
  const v1 = clamp(toNum(p.v1, 2.0), 0, 20);
  const v1Max = clamp(toNum(p.v1Max, 8.0), 1, 30);

  const r = A1 / A2;
  const v2 = v1 * r;
  const dp = 0.5 * rho * v1 * v1 * (r * r - 1);
  const data = useMemo(() => buildData(rho, r, v1Max), [rho, r, v1Max]);
  const dpMax = data[data.length - 1]?.dp ?? 1;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt(uiLang, "Efecto Venturi - caida de presion", "Venturi Effect - pressure drop")}
        </div>
        <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
          {tt(
            uiLang,
            "El grafico enseña que al aumentar la velocidad de entrada tambien aumenta la diferencia de presion entre la entrada y la garganta.",
            "The graph shows that increasing inlet speed also increases the pressure difference between inlet and throat."
          )}{" "}
          <MathInline latex={"\\Delta p = \\tfrac{1}{2}\\rho v_1^2\\left[\\left(\\tfrac{A_1}{A_2}\\right)^2-1\\right]"} />
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
          <span><b>rho</b> = {fmt(rho, 0)} kg/m^3</span>
          <span><b>A1/A2</b> = {fmt(r, 2)}</span>
          <span><b>v1</b> = {fmt(v1, 2)} m/s</span>
          <span><b>v2</b> = {fmt(v2, 2)} m/s</span>
          <span><b>Delta p</b> = {fmt(dp / 1000, 2)} kPa</span>
        </div>

        <div style={{ marginTop: 14 }}>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data} margin={{ top: 4, right: 18, bottom: 4, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
              <XAxis
                dataKey="v1"
                label={{
                  value: tt(uiLang, "v1 (m/s)", "v1 (m/s)"),
                  position: "insideBottom",
                  offset: -2,
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                tickFormatter={(value) => fmt(value, 1)}
              />
              <YAxis
                label={{
                  value: tt(uiLang, "Delta p (Pa)", "Delta p (Pa)"),
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
                tickFormatter={(value) => (value >= 1000 ? `${fmt(value / 1000, 1)}k` : fmt(value, 0))}
                domain={[0, dpMax > 0 ? dpMax * 1.05 : 1]}
              />
              <Tooltip
                contentStyle={{
                  background: "rgba(15,15,30,0.92)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(value, name) => {
                  if (name === "dp") {
                    return [`${fmt(value / 1000, 3)} kPa`, tt(uiLang, "Delta p", "Delta p")];
                  }
                  return [value, name];
                }}
                labelFormatter={(value) => `v1 = ${fmt(value, 2)} m/s`}
              />
              <Line type="monotone" dataKey="dp" stroke="#818cf8" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
              {v1 <= v1Max ? <ReferenceLine x={parseFloat(v1.toFixed(4))} stroke="rgba(250,204,21,0.7)" strokeDasharray="4 3" /> : null}
              {v1 <= v1Max ? <ReferenceDot x={parseFloat(v1.toFixed(4))} y={parseFloat(dp.toFixed(2))} r={5} fill="#facc15" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            marginTop: 8,
            padding: "6px 10px",
            borderRadius: 8,
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.2)",
            fontSize: 13,
          }}
        >
          {tt(
            uiLang,
            "Lectura fisica: si la garganta se hace mas pequeña, la velocidad en ella aumenta y la diferencia p1 - p2 crece.",
            "Physical reading: if the throat becomes smaller, throat speed rises and the difference p1 - p2 grows."
          )}
        </div>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: EfectoVenturiGraphsCoordComponent,
  displayName: "EfectoVenturiGraphsCoord",
});
