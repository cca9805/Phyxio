import React, { useMemo, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { sampleTensionVertical, sampleComponentes } from "../../../engine/models/dinamica/tension";

function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}
function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

function NumInput({ label, value, onChange, step = 0.1, min, max }) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <input className="form-control" type="text" inputMode="decimal" step={step} min={min} max={max}
        value={value ?? ""} onChange={(e) => onChange?.(e.target.value)} />
    </div>
  );
}

export default function TensionGraphs({ params }) {
  const m0 = toNum(params?.m, 1);
  const g0 = toNum(params?.g, 9.81);
  const T0 = toNum(params?.T, 10);

  const [m, setM] = useState(Number.isFinite(m0) ? m0 : 1);
  const [g, setG] = useState(Number.isFinite(g0) ? g0 : 9.81);
  const [aMin, setAMin] = useState(-5);
  const [aMax, setAMax] = useState(5);
  const [n, setN] = useState(240);

  const [T, setT] = useState(Number.isFinite(T0) ? T0 : 10);
  const [thetaMaxDeg, setThetaMaxDeg] = useState(90);

  const dataVertical = useMemo(() => {
    const amin = Number.isFinite(aMin) ? aMin : -5;
    const amax = Number.isFinite(aMax) ? aMax : 5;
    return sampleTensionVertical({
      m: Number.isFinite(m) ? m : 0,
      g: Number.isFinite(g) ? g : 0,
      aMin: Math.min(amin, amax),
      aMax: Math.max(amin, amax),
      n: clamp(Math.round(toNum(n, 240)), 50, 2000),
    });
  }, [m, g, aMin, aMax, n]);

  const dataComp = useMemo(() => {
    const thMax = (Number(thetaMaxDeg) * Math.PI) / 180;
    return sampleComponentes({
      T: Number.isFinite(T) ? T : 0,
      thetaMin: 0,
      thetaMax: clamp(thMax, 0, Math.PI),
      n: 181,
    });
  }, [T, thetaMaxDeg]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Tensión en cuerda vertical (T = m·(g+a))</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 10 }}>
          <NumInput label="Masa m (kg)" value={m} step={0.1} min={0} onChange={(v) => setM(toNum(v, m))} />
          <NumInput label="Gravedad g (m/s²)" value={g} step={0.01} min={0} onChange={(v) => setG(toNum(v, g))} />
          <NumInput label="a mínima (m/s²)" value={aMin} step={0.1} onChange={(v) => setAMin(toNum(v, aMin))} />
          <NumInput label="a máxima (m/s²)" value={aMax} step={0.1} onChange={(v) => setAMax(toNum(v, aMax))} />
          <NumInput label="Puntos (n)" value={n} step={10} min={50} max={2000} onChange={(v) => setN(clamp(Math.round(toNum(v, n)), 50, 2000))} />
        </div>

        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={dataVertical} margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="a" type="number" domain={["auto","auto"]} tickFormatter={(v) => String(v).replace(".", ",")}
                label={{ value: "a (m/s²)", position: "insideBottom", offset: -5 }} />
              <YAxis tickFormatter={(v) => String(v).replace(".", ",")}
                label={{ value: "T (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [String(value).replace(".", ","), name]}
                labelFormatter={(v) => `a = ${String(v).replace(".", ",")} m/s²`} />
              <Legend />
              <Line type="monotone" dataKey="T" dot={false} name="T" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Componentes de la tensión (Tx, Ty)</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 10 }}>
          <NumInput label="T (N)" value={T} step={0.1} min={0} onChange={(v) => setT(toNum(v, T))} />
          <NumInput label="Ángulo máximo θ (°)" value={thetaMaxDeg} step={1} min={0} max={180}
            onChange={(v) => setThetaMaxDeg(clamp(toNum(v, thetaMaxDeg), 0, 180))} />
        </div>

        <div className="muted" style={{ marginTop: 6 }}>
          Se asume θ desde 0° hasta el máximo. Fórmulas: <b>Tx = T·cosθ</b>, <b>Ty = T·sinθ</b>.
        </div>

        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={dataComp} margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="theta" type="number" domain={["auto","auto"]}
                tickFormatter={(v) => String(((Number(v)*180)/Math.PI).toFixed(0)).replace(".", ",")}
                label={{ value: "θ (°)", position: "insideBottom", offset: -5 }} />
              <YAxis tickFormatter={(v) => String(v).replace(".", ",")}
                label={{ value: "N", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [String(value).replace(".", ","), name]}
                labelFormatter={(v) => `θ = ${String(((Number(v)*180)/Math.PI).toFixed(0)).replace(".", ",")} °`} />
              <Legend />
              <Line type="monotone" dataKey="Tx" dot={false} name="Tx" />
              <Line type="monotone" dataKey="Ty" dot={false} name="Ty" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
