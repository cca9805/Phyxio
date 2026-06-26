// frontend/src/v2/components/graphs/fluidos/Coord/HidrodinamicaGraphsCoord.jsx
import React, { useMemo, useEffect } from "react";
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
  Legend,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { createCoordGraph } from "../../graphFactories.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "¿Cómo se conserva y transforma la energía en un fluido en movimiento?",
    en: "How is energy conserved and transformed in a moving fluid?",
  },
  variable_control: "v",
  formula: "H = \\dfrac{p}{\\rho g} + \\dfrac{v^2}{2g} + z",
  target_interpretable: true,
};

const toNum = (v, fb) => {
  if (v == null || v === "") return fb;
  const n = typeof v === "number" ? v : Number(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const EPS = 1e-9;

function buildHeadData(rho, g, p, z, vMax, steps = 240) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const v = (vMax * i) / steps;
    const Hp = p / Math.max(rho * g, EPS);
    const Hv = (v * v) / (2 * Math.max(g, EPS));
    const Hz = z;
    out.push({
      v: parseFloat(v.toFixed(4)),
      Hp: parseFloat(Hp.toFixed(4)),
      Hv: parseFloat(Hv.toFixed(4)),
      Hz: parseFloat(Hz.toFixed(4)),
      H:  parseFloat((Hp + Hv + Hz).toFixed(4)),
    });
  }
  return out;
}

function Component({ 
  params, 
  sharedParams, 
  lang = "es",
  onGraphStateChange,
  onSharedParamsChange 
}) {
  const p = sharedParams?.__calc ?? params ?? sharedParams ?? {};
  const uiLang = lang === "en" ? "en" : "es";
  const t = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 2) =>
    Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "—";

  const rho    = clamp(toNum(p.rho,    1000),  0.1,  15000);
  const g      = clamp(toNum(p.g,      9.81),  0.1,  25);
  const pPa    = clamp(toNum(p.p,    101325),  0,    2e6);
  const z      = clamp(toNum(p.z,       0),   -500,  5000);
  const v_curr = clamp(toNum(p.v,       5),    0,    200);
  const vMax   = clamp(toNum(p.vMax,   25),    1,    200);

  const dataHead = useMemo(
    () => buildHeadData(rho, g, pPa, z, vMax),
    [rho, g, pPa, z, vMax]
  );

  const Hp = pPa  / Math.max(rho * g, EPS);
  const Hv = (v_curr * v_curr) / (2 * Math.max(g, EPS));
  const Hz = z;
  const H  = Hp + Hv + Hz;

  // Sync state with the interpretation engine
  useEffect(() => {
    if (onGraphStateChange) {
      onGraphStateChange({
        currentV: v_curr,
        currentH: H,
        Hp,
        Hv,
        Hz,
        rho,
        p: pPa
      });
    }
  }, [v_curr, H, Hp, Hv, Hz, rho, pPa, onGraphStateChange]);

  const handleClick = (state) => {
    if (state && state.activePayload && onSharedParamsChange) {
      const { v } = state.activePayload[0].payload;
      onSharedParamsChange({ v });
    }
  };

  return (
    <div style={{ display: "grid", gap: 12, backgroundColor: "#0f172a", padding: "1.2rem", borderRadius: "1rem" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "1.1rem" }}>
          {t("Conservación de Energía Hidrodinámica", "Hydrodynamic Energy Conservation")}
        </div>
        <div style={{ color: "#94a3b8", marginTop: 4, fontSize: 13 }}>
          <MathInline latex={"H = \\dfrac{p}{\\rho g} + \\dfrac{v^2}{2g} + z"} />
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart 
            data={dataHead} 
            margin={{ top: 10, right: 20, bottom: 20, left: 10 }}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.07)" />
            <XAxis 
              dataKey="v" 
              stroke="#94a3b8" 
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
              label={{ value: t("Velocidad v (m/s)", "Velocity v (m/s)"), position: "bottom", fill: "#94a3b8", dy: 10 }} 
            />
            <YAxis 
              stroke="#94a3b8" 
              tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 11 }}
              label={{ value: t("Altura H (m)", "Head H (m)"), angle: -90, position: "insideLeft", fill: "#94a3b8" }} 
            />
            <Tooltip
              contentStyle={{ background: "rgba(15,15,30,0.92)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: 8, color: "#f8fafc" }}
              formatter={(val, name) => [`${fmt(Number(val), 3)} m`, name]}
            />
            <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: 10 }} />
            <Line type="monotone" dataKey="Hp" name={t("H_p presión", "H_p pressure")} stroke="#f472b6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="Hv" name={t("H_v cinética", "H_v kinetic")} stroke="#818cf8" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="H" name={t("H total (conservada)", "H total (conserved)")} stroke="#facc15" strokeWidth={3} dot={false} />
            <ReferenceLine x={v_curr} stroke="#facc15" strokeDasharray="3 3" />
            <ReferenceDot x={v_curr} y={H} r={6} fill="#facc15" stroke="#0f172a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ 
        marginTop: 10, 
        padding: "8px 12px", 
        borderRadius: 8, 
        background: "rgba(250,204,21,0.07)", 
        border: "1px solid rgba(250,204,21,0.2)",
        fontSize: 13,
        color: "#94a3b8",
        textAlign: "center"
      }}>
        {t("Al variar la velocidad v, se observa el intercambio entre energía cinética (H_v) y presión (H_p).", "As v varies, the exchange between kinetic energy (H_v) and pressure (H_p) is observed.")}
      </div>
    </div>
  );
}

const HidrodinamicaGraphsCoord = createCoordGraph({
  Component,
  displayName: "HidrodinamicaGraphsCoord",
});

HidrodinamicaGraphsCoord.graph_identity = graph_identity;

export default HidrodinamicaGraphsCoord;
