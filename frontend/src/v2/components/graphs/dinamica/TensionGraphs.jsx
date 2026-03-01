import React, { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { sampleTensionVertical, sampleComponentes } from "/src/v2/engine/models/dinamica/tension.js";
import { pickParam } from "/src/v2/utils/pickParamGraphs.js";
import { fmt } from "/src/v2/utils/graphFormat";

function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function NumInput({ label, value, onChange, step = 0.1, min, max, disabled }) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <input
        className="form-control"
        type="number"
        inputMode="decimal"
        step={step}
        min={min}
        max={max}
        disabled={disabled}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}

export default function TensionGraphs({ params }) {
  const [linked, setLinked] = useState(true);

  // Estado editable (modo experimento)
  const [m, setM] = useState(1);
  const [g, setG] = useState(9.81);
  const [aMin, setAMin] = useState(-5);
  const [aMax, setAMax] = useState(5);
  const [n, setN] = useState(240);

  const [T, setT] = useState(10);
  const [thetaMaxDeg, setThetaMaxDeg] = useState(90);

  // 🔗 Sincroniza desde calculadora (params) cuando linked=true
  useEffect(() => {
    if (!linked) return;

    const m0 = pickParam(params, ["m", "masa"], NaN);
    const g0 = pickParam(params, ["g", "grav", "gravedad"], NaN);

    // tensión puede venir como T o Tm
    const T0 = pickParam(params, ["T", "Tm", "tension"], NaN);

    // aceleración (si existe) la usamos como centro del rango aMin/aMax
    const a0 = pickParam(params, ["a", "ay", "a_y", "aVertical"], NaN);

    // theta puede venir en rad o deg
    const thetaRaw = pickParam(params, ["theta", "θ", "angulo", "thetaDeg", "theta_deg"], NaN);
    const thetaDeg =
      Number.isFinite(thetaRaw) ? (Math.abs(thetaRaw) <= 6.6 ? (thetaRaw * 180) / Math.PI : thetaRaw) : NaN;

    if (Number.isFinite(m0)) setM(m0);
    if (Number.isFinite(g0)) setG(g0);
    if (Number.isFinite(T0)) setT(T0);

    if (Number.isFinite(a0)) {
      setAMin(a0 - 5);
      setAMax(a0 + 5);
    }

    if (Number.isFinite(thetaDeg)) setThetaMaxDeg(clamp(thetaDeg, 0, 180));
  }, [linked, params]);

  // ↩️ Cargar desde calculadora (si estás en experimento)
  const loadFromCalculator = () => {
    const m0 = pickParam(params, ["m", "masa"], NaN);
    const g0 = pickParam(params, ["g", "grav", "gravedad"], NaN);
    const T0 = pickParam(params, ["T", "Tm", "tension"], NaN);
    const a0 = pickParam(params, ["a", "ay", "a_y", "aVertical"], NaN);

    if (Number.isFinite(m0)) setM(m0);
    if (Number.isFinite(g0)) setG(g0);
    if (Number.isFinite(T0)) setT(T0);
    if (Number.isFinite(a0)) {
      setAMin(a0 - 5);
      setAMax(a0 + 5);
    }
  };

  const safe = useMemo(() => {
    const mm = Math.max(0, toNum(m, 1));
    const gg = Math.max(0, toNum(g, 9.81));
    const amin = toNum(aMin, -5);
    const amax = toNum(aMax, 5);
    const nn = clamp(Math.round(toNum(n, 240)), 50, 2000);

    const TT = Math.max(0, toNum(T, 10));
    const thMax = clamp(toNum(thetaMaxDeg, 90), 0, 180);

    return { m: mm, g: gg, aMin: amin, aMax: amax, n: nn, T: TT, thetaMaxDeg: thMax };
  }, [m, g, aMin, aMax, n, T, thetaMaxDeg]);

  const dataVertical = useMemo(() => {
    return sampleTensionVertical({
      m: safe.m,
      g: safe.g,
      aMin: Math.min(safe.aMin, safe.aMax),
      aMax: Math.max(safe.aMin, safe.aMax),
      n: safe.n,
    });
  }, [safe]);

  const dataComp = useMemo(() => {
    const thMax = (safe.thetaMaxDeg * Math.PI) / 180;
    return sampleComponentes({
      T: safe.T,
      thetaMin: 0,
      thetaMax: clamp(thMax, 0, Math.PI),
      n: 181,
    });
  }, [safe]);

  const Tmin = safe.m * (safe.g + Math.min(safe.aMin, safe.aMax));
  const Tmax = safe.m * (safe.g + Math.max(safe.aMin, safe.aMax));

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Tensión en cuerda vertical (T = m·(g + a))</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          <button
            type="button"
            className={`btn btn-sm ${linked ? "btn-primary" : "btn-light"}`}
            onClick={() => setLinked(true)}
          >
            🔗 Seguir calculadora
          </button>
          <button
            type="button"
            className={`btn btn-sm ${!linked ? "btn-primary" : "btn-light"}`}
            onClick={() => setLinked(false)}
          >
            🧪 Modo experimento
          </button>
          {!linked ? (
            <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
              ↩️ Cargar desde calculadora
            </button>
          ) : null}
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 10 }}>
          <NumInput label="m (kg)" value={safe.m} step={0.1} min={0} disabled={linked} onChange={(v) => setM(toNum(v, m))} />
          <NumInput label="g (m/s²)" value={safe.g} step={0.01} min={0} disabled={linked} onChange={(v) => setG(toNum(v, g))} />
          <NumInput label="a mínima (m/s²)" value={safe.aMin} step={0.1} disabled={false} onChange={(v) => setAMin(toNum(v, aMin))} />
          <NumInput label="a máxima (m/s²)" value={safe.aMax} step={0.1} disabled={false} onChange={(v) => setAMax(toNum(v, aMax))} />
          <NumInput
            label="puntos n"
            value={safe.n}
            step={10}
            min={50}
            max={2000}
            disabled={false}
            onChange={(v) => setN(clamp(Math.round(toNum(v, n)), 50, 2000))}
          />
        </div>

        <div className="muted" style={{ marginTop: 8, fontSize: 13 }}>
          Rango T aprox: [{fmt(Tmin, 4)} , {fmt(Tmax, 4)}] N
        </div>

        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={dataVertical} margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
              <CartesianGrid />
              <XAxis dataKey="a" type="number" domain={["auto", "auto"]} label={{ value: "a (m/s²)", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "T (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(v, name) => [fmt(v, 6), name]} labelFormatter={(v) => `a = ${fmt(v, 4)} m/s²`} />
              <Legend />
              <Line type="monotone" dataKey="T" dot={false} name="T" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Componentes de la tensión (Tx, Ty)</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          <button
            type="button"
            className={`btn btn-sm ${linked ? "btn-primary" : "btn-light"}`}
            onClick={() => setLinked(true)}
          >
            🔗 Seguir calculadora
          </button>
          <button
            type="button"
            className={`btn btn-sm ${!linked ? "btn-primary" : "btn-light"}`}
            onClick={() => setLinked(false)}
          >
            🧪 Modo experimento
          </button>
          {!linked ? (
            <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
              ↩️ Cargar desde calculadora
            </button>
          ) : null}
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 10 }}>
          <NumInput label="T (N)" value={safe.T} step={0.1} min={0} disabled={linked} onChange={(v) => setT(toNum(v, T))} />
          <NumInput
            label="θ máx (°)"
            value={safe.thetaMaxDeg}
            step={1}
            min={0}
            max={180}
            disabled={false}
            onChange={(v) => setThetaMaxDeg(clamp(toNum(v, thetaMaxDeg), 0, 180))}
          />
        </div>

        <div className="muted" style={{ marginTop: 6 }}>
          Fórmulas: <b>Tx = T·cosθ</b>, <b>Ty = T·sinθ</b>
        </div>

        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={dataComp} margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
              <CartesianGrid />
              <XAxis
                dataKey="theta"
                type="number"
                domain={["auto", "auto"]}
                tickFormatter={(v) => fmt((Number(v) * 180) / Math.PI, 0)}
                label={{ value: "θ (°)", position: "insideBottom", offset: -5 }}
              />
              <YAxis label={{ value: "N", angle: -90, position: "insideLeft" }} />
              <Tooltip
                formatter={(v, name) => [fmt(v, 6), name]}
                labelFormatter={(v) => `θ = ${fmt((Number(v) * 180) / Math.PI, 0)}°`}
              />
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
