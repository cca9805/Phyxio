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

import { fmt } from "../../../utils/graphFormat";
import { sampleDinamicaAplicaciones } from "../../../engine/models/dinamica/dinamicaAplicaciones";

function toNum(v, fallback) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function NumInput({ label, value, onChange, step = 0.1, min, disabled }) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <input
        className="form-control"
        type="number"
        value={value}
        step={step}
        min={min}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default function DinamicaAplicacionesGraphs({ params }) {
  const [linked, setLinked] = useState(true);

  const [p, setP] = useState(() => ({
    scenario: "horizontal", // "horizontal" | "plano"
    m: 1,
    g: 9.81,
    mu_k: 0.2,
    F: 5,
    thetaDeg: 15,
    x0: 0,
    v0: 0,
    tMax: 10,
  }));

  useEffect(() => {
    if (!linked) return;
    setP((prev) => ({
      ...prev,
      m: toNum(params?.m, prev.m),
      g: toNum(params?.g, prev.g),
      mu_k: toNum(params?.mu_k, prev.mu_k),
      F: toNum(params?.F, prev.F),
      thetaDeg: toNum(params?.thetaDeg, prev.thetaDeg),
      x0: toNum(params?.x0, prev.x0),
      v0: toNum(params?.v0, prev.v0),
      tMax: toNum(params?.tMax, prev.tMax),
      scenario: params?.scenario || prev.scenario,
    }));
  }, [
    linked,
    params?.m,
    params?.g,
    params?.mu_k,
    params?.F,
    params?.thetaDeg,
    params?.x0,
    params?.v0,
    params?.tMax,
    params?.scenario,
  ]);

  const patch = (k, val) => setP((prev) => ({ ...prev, [k]: val }));

  const scenario = p.scenario;
  const m = Math.max(0, toNum(p.m, 1));
  const g = Math.max(0, toNum(p.g, 9.81));
  const mu_k = Math.max(0, toNum(p.mu_k, 0.2));
  const F = toNum(p.F, 5);
  const thetaDeg = clamp(toNum(p.thetaDeg, 15), -89, 89);
  const theta = (thetaDeg * Math.PI) / 180;

  const x0 = toNum(p.x0, 0);
  const v0 = toNum(p.v0, 0);
  const tMax = Math.max(0, toNum(p.tMax, 10));

  const data = useMemo(
    () =>
      sampleDinamicaAplicaciones({
        scenario,
        m,
        g,
        mu_k,
        F,
        theta,
        x0,
        v0,
        tMax,
        n: 280,
      }) || [],
    [scenario, m, g, mu_k, F, theta, x0, v0, tMax]
  );

  // Para mostrar un numerito útil
  const aShown = data?.[0]?.a ?? 0;

  return (
    <div className="v2-graphs">
      <div className="v2-graphs-header">
        <div>
          <div className="v2-title">Gráficas</div>
          <div className="muted">
            De fuerzas a aceleración, y de ahí a x(t) y v(t). a ≈ {fmt(aShown)} m/s²
          </div>
        </div>

        <label className="v2-switch">
          <input
            type="checkbox"
            checked={linked}
            onChange={(e) => setLinked(e.target.checked)}
          />
          <span>Vincular con calculadora</span>
        </label>
      </div>

      <div className="v2-grid v2-grid-3">
        <div className="v2-card">
          <div className="v2-card-title">Escenario</div>
          <div className="v2-row">
            <label className="v2-chip">
              <input
                type="radio"
                name="scenario"
                checked={scenario === "horizontal"}
                onChange={() => patch("scenario", "horizontal")}
              />
              Horizontal
            </label>
            <label className="v2-chip">
              <input
                type="radio"
                name="scenario"
                checked={scenario === "plano"}
                onChange={() => patch("scenario", "plano")}
              />
              Plano inclinado
            </label>
          </div>
        </div>

        <NumInput label="m (kg)" value={p.m} onChange={(v) => patch("m", v)} step={0.1} min={0} />
        <NumInput label="g (m/s²)" value={p.g} onChange={(v) => patch("g", v)} step={0.01} min={0} />
        <NumInput label="μk" value={p.mu_k} onChange={(v) => patch("mu_k", v)} step={0.01} min={0} />
        <NumInput
          label="F (N) [solo horizontal]"
          value={p.F}
          onChange={(v) => patch("F", v)}
          step={0.1}
          disabled={scenario !== "horizontal"}
        />
        <NumInput
          label="θ (°) [solo plano]"
          value={p.thetaDeg}
          onChange={(v) => patch("thetaDeg", v)}
          step={1}
          disabled={scenario !== "plano"}
        />

        <NumInput label="x0 (m)" value={p.x0} onChange={(v) => patch("x0", v)} step={0.1} />
        <NumInput label="v0 (m/s)" value={p.v0} onChange={(v) => patch("v0", v)} step={0.1} />
        <NumInput label="tMax (s)" value={p.tMax} onChange={(v) => patch("tMax", v)} step={0.5} min={0} />
      </div>

      <div className="v2-card" style={{ height: 340 }}>
        <div className="v2-card-title">x(t)</div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="t" tickFormatter={(v) => fmt(v)} />
            <YAxis tickFormatter={(v) => fmt(v)} />
            <Tooltip formatter={(v) => fmt(v)} labelFormatter={(v) => `t=${fmt(v)} s`} />
            <Legend />
            <Line type="monotone" dataKey="x" name="x (m)" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
        <div className="v2-card" style={{ height: 320 }}>
            <div className="v2-card-title">v(t)</div>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid />
                <XAxis dataKey="t" tickFormatter={(v) => fmt(v)} />
                <YAxis tickFormatter={(v) => fmt(v)} />
                <Tooltip formatter={(v) => fmt(v)} labelFormatter={(v) => `t=${fmt(v)} s`} />
                <Legend />
                <Line type="monotone" dataKey="v" name="v (m/s)" dot={false} />
            </LineChart>
            </ResponsiveContainer>
        </div>

        <div className="v2-card" style={{ height: 320 }}>
            <div className="v2-card-title">a(t)</div>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid />
                <XAxis dataKey="t" tickFormatter={(v) => fmt(v)} />
                <YAxis tickFormatter={(v) => fmt(v)} />
                <Tooltip formatter={(v) => fmt(v)} labelFormatter={(v) => `t=${fmt(v)} s`} />
                <Legend />
                <Line type="monotone" dataKey="a" name="a (m/s²)" dot={false} />
            </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
}
