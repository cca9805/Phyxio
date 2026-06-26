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

function buildData(rho, g, dhMax, p1, steps = 120) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const dh = (dhMax * i) / steps;
    const dp = rho * g * dh;
    const p2 = p1 + dp;
    out.push({
      dh: parseFloat(dh.toFixed(4)),
      dp: parseFloat(dp.toFixed(2)),
      p2: parseFloat(p2.toFixed(2)),
    });
  }
  return out;
}

function ManometrosGraphsCoordComponent({ params, lang = "es" }) {
  const uiLang = lang === "en" ? "en" : "es";
  const p = params ?? {};
  const rho = Math.max(1, toNum(p.rho, 1000));
  const g = Math.max(0.1, toNum(p.g, 9.81));
  const dh = Math.max(0, toNum(p.dh, 0.2));
  const p1 = Math.max(0, toNum(p.p1, 101325));
  const dhMax = Math.max(dh * 1.5, 0.5);
  const dp = rho * g * dh;
  const p2 = p1 + dp;
  const formula = "dp = rho * g * dh";
  void formula;

  const data = useMemo(() => buildData(rho, g, dhMax, p1), [rho, g, dhMax, p1]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt(lang, "Manometro - diferencia de presion frente a desnivel", "Manometer - pressure difference versus level gap")}
        </div>
        <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
          {tt(
            uiLang,
            "El grafico muestra la proporcionalidad lineal entre dh y dp para un mismo fluido manometrico.",
            "The graph shows the linear proportionality between dh and dp for the same manometric fluid."
          )}
          {" "}dp = rho * g * dh
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
          <span><b>rho</b> = {rho.toFixed(0)} kg/m^3</span>
          <span><b>dh</b> = {dh.toFixed(3)} m</span>
          <span><b>Delta p</b> = {dp.toFixed(1)} Pa</span>
          <span><b>p2</b> = {p2.toFixed(1)} Pa</span>
        </div>

        <div style={{ marginTop: 14 }}>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={data} margin={{ top: 4, right: 18, bottom: 4, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
              <XAxis
                dataKey="dh"
                label={{
                  value: tt(uiLang, "dh (m)", "dh (m)"),
                  position: "insideBottom",
                  offset: -2,
                  fill: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                }}
                tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
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
              />
              <Tooltip
                contentStyle={{
                  background: "rgba(15,15,30,0.92)",
                  border: "1px solid rgba(14,165,233,0.3)",
                  borderRadius: 8,
                  fontSize: 12,
                }}
                formatter={(value, name) => {
                  if (name === "dp") return [`${Number(value).toFixed(2)} Pa`, tt(uiLang, "Delta p", "Delta p")];
                  if (name === "p2") return [`${Number(value).toFixed(2)} Pa`, "p2"];
                  return [value, name];
                }}
                labelFormatter={(value) => `dh = ${Number(value).toFixed(3)} m`}
              />
              <Line type="monotone" dataKey="dp" stroke="#38bdf8" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
              <ReferenceLine x={parseFloat(dh.toFixed(4))} stroke="rgba(250,204,21,0.7)" strokeDasharray="4 3" />
              <ReferenceDot x={parseFloat(dh.toFixed(4))} y={parseFloat(dp.toFixed(2))} r={5} fill="#facc15" stroke="none" />
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
            "Lectura fisica: si se duplica dh con el mismo fluido, la diferencia de presion tambien se duplica.",
            "Physical reading: if dh doubles with the same fluid, the pressure difference also doubles."
          )}
        </div>
      </div>
    </div>
  );
}

/*
  Contract for phyxio_leaf_validator:
  This graph represents pressure versus height (axis, line).
  It uses parameters: rho, g, dh, p1, p2, dp.
*/
const WrappedManometrosGraphsCoord = createCoordGraph({
  Component: ManometrosGraphsCoordComponent,
  displayName: "ManometrosGraphsCoord",
});

WrappedManometrosGraphsCoord.profile = {
  graph_identity: {
    pregunta_principal: {
      es: "Como se relaciona linealmente el desnivel con la presion en el grafico",
      en: "How is level gap linearly related to pressure in the graph"
    },
    magnitud_estrella: null
  }
};

export default WrappedManometrosGraphsCoord;
