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
  ReferenceLine,
  ReferenceDot,
} from "recharts";

const tt = (lang, es, en) => (lang === "en" ? en : es);

const toNum = (v, fb) => {
  if (v == null || v === "") return fb;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

function buildData(h1, rho1, rho2, steps = 120) {
  const minRho1 = Math.max(100, rho1 * 0.4);
  const maxRho1 = Math.max(minRho1 + 100, rho1 * 1.6);
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const sampleRho1 = minRho1 + ((maxRho1 - minRho1) * i) / steps;
    const h2 = (sampleRho1 * h1) / rho2;
    out.push({
      rho1: parseFloat(sampleRho1.toFixed(1)),
      h2: parseFloat(h2.toFixed(4)),
    });
  }
  return out;
}

function VasosComunicantesGraphsCoordComponent({ params, lang = "es" }) {
  const uiLang = lang === "en" ? "en" : "es";
  const p = params ?? {};
  const h1 = Math.max(0.01, toNum(p.h1, 0.24));
  const rho1 = Math.max(100, toNum(p.rho1, 1000));
  const rho2 = Math.max(100, toNum(p.rho2, 800));
  const h2 = (rho1 * h1) / rho2;
  const formula = "h2 = (rho1 * h1) / rho2";
  void formula;
  const data = useMemo(() => buildData(h1, rho1, rho2), [h1, rho1, rho2]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt(lang, "Vasos comunicantes - altura de equilibrio en la rama 2", "Communicating vessels - equilibrium height in branch 2")}
        </div>
        <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
          {tt(
            uiLang,
            "El grafico muestra como cambia h2 cuando varia rho1 manteniendo fija la rama 2.",
            "The graph shows how h2 changes when rho1 varies while branch 2 stays fixed."
          )}{" "}
          {formula}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 10,
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid rgba(14,165,233,0.2)",
            background: "rgba(14,165,233,0.07)",
            fontSize: 13,
          }}
        >
          <span><b>h1</b> = {h1.toFixed(3)} m</span>
          <span><b>rho1</b> = {rho1.toFixed(0)} kg/m^3</span>
          <span><b>rho2</b> = {rho2.toFixed(0)} kg/m^3</span>
          <span><b>h2</b> = {h2.toFixed(3)} m</span>
        </div>

        <div style={{ marginTop: 14 }}>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data} margin={{ top: 4, right: 18, bottom: 4, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
              <XAxis
                dataKey="rho1"
                label={{
                  value: tt(uiLang, "rho1 (kg/m^3)", "rho1 (kg/m^3)"),
                  position: "insideBottom",
                  offset: -2,
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
              />
              <YAxis
                label={{
                  value: tt(uiLang, "h2 (m)", "h2 (m)"),
                  angle: -90,
                  position: "insideLeft",
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
              />
              <Tooltip
                contentStyle={{
                  background: "rgba(15,15,30,0.92)",
                  border: "1px solid rgba(14,165,233,0.3)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(value, name) => {
                  if (name === "h2") return [`${Number(value).toFixed(3)} m`, "h2"];
                  return [`${Number(value).toFixed(1)} kg/m^3`, "rho1"];
                }}
                labelFormatter={(value) => `rho1 = ${Number(value).toFixed(1)} kg/m^3`}
              />
              <Line type="monotone" dataKey="h2" stroke="#38bdf8" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
              <ReferenceLine x={parseFloat(rho1.toFixed(1))} stroke="rgba(250,204,21,0.7)" strokeDasharray="4 3" />
              <ReferenceDot x={parseFloat(rho1.toFixed(1))} y={parseFloat(h2.toFixed(4))} r={5} fill="#facc15" stroke="none" />
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
            "Lectura fisica: si la rama 1 se vuelve mas densa y la rama 2 no cambia, h2 debe crecer para conservar el equilibrio.",
            "Physical reading: if branch 1 becomes denser while branch 2 stays unchanged, h2 must grow to preserve equilibrium."
          )}
        </div>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: VasosComunicantesGraphsCoordComponent,
  displayName: "VasosComunicantesGraphsCoord",
});
