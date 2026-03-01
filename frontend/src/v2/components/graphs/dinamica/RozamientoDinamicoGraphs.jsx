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
  ReferenceDot,
} from "recharts";

import { fmt } from "../../../utils/graphFormat";
import { defaultParams, seriesVsN, seriesVsMu } from "../../../engine/models/dinamica/rozamientoDinamico";
import { pickParam } from "../../../utils/pickParamGraphs";

function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function NumInput({ label, value, onChange, step = 0.1, min, disabled }) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <input
        className="form-control"
        type="number"
        step={step}
        min={min}
        disabled={disabled}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}

export default function RozamientoDinamicoGraphs({ params }) {
  const [linked, setLinked] = useState(true);
  const [p, setP] = useState(() => ({ ...defaultParams() }));

  // 🔗 Linked: leer N, mu_k y (opcional) v desde calculadora
  useEffect(() => {
    if (!linked) return;
    if (!params) return;

    const N = pickParam(params, ["N", "normal", "n"], p.N);

    // coef dinámico: mu_k / muk / mu_dinamico / coef_rozamiento_dinamico
    const mu_k = pickParam(
      params,
      ["mu_k", "muk", "muK", "mu_dinamico", "mu_cinetico", "coef_rozamiento_dinamico", "coef_rozamiento_cinetico"],
      p.mu_k
    );

    // velocidad (solo informativa, si existe)
    const v = pickParam(params, ["v", "vel", "velocidad", "speed"], p.v);

    setP((prev) => ({
      ...prev,
      N,
      mu_k,
      v,
      Nobs: N,
      muObs: mu_k,
      // si tu calculadora expone rangos, los adoptamos
      Nmax: pickParam(params, ["Nmax", "N_max", "N_range"], prev.Nmax),
      muMax: pickParam(params, ["muMax", "mu_max", "mu_range"], prev.muMax),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linked, params]);

  const loadFromCalculator = () => {
    if (!params) return;
    setP((prev) => ({
      ...prev,
      N: pickParam(params, ["N", "normal", "n"], prev.N),
      mu_k: pickParam(
        params,
        ["mu_k", "muk", "muK", "mu_dinamico", "mu_cinetico", "coef_rozamiento_dinamico", "coef_rozamiento_cinetico"],
        prev.mu_k
      ),
      v: pickParam(params, ["v", "vel", "velocidad", "speed"], prev.v),
    }));
  };

  const safeP = useMemo(() => {
    const N = Math.max(0, toNum(p.N, 100));
    const mu_k = Math.max(0, toNum(p.mu_k, 0.25));
    const v = Math.max(0, toNum(p.v, 1));

    const Nmax = Math.max(1e-6, toNum(p.Nmax, 300));
    const muMax = Math.max(1e-6, toNum(p.muMax, 1.0));

    const Nobs = Math.min(Math.max(0, toNum(p.Nobs, N)), Nmax);
    const muObs = Math.min(Math.max(0, toNum(p.muObs, mu_k)), muMax);

    return { ...p, N, mu_k, v, Nmax, muMax, Nobs, muObs };
  }, [p]);

  const dataN = useMemo(() => seriesVsN(safeP), [safeP]);
  const dataMu = useMemo(() => seriesVsMu(safeP), [safeP]);

  const fkNow = safeP.mu_k * safeP.N;
  const fkNobs = safeP.mu_k * safeP.Nobs;
  const fkMuObs = safeP.muObs * safeP.N;

  return (
    <div>
      <div className="v2-card">
        <div className="v2-card-title">Parámetros (Rozamiento dinámico)</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
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
            🧪 Modo experimento (solo gráficas)
          </button>
          {!linked ? (
            <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
              ↩️ Cargar desde calculadora
            </button>
          ) : null}
        </div>

        <div className="v2-grid-fill-inputs">
          <NumInput
            label="N (N)"
            value={safeP.N}
            onChange={(v) => setP((s) => ({ ...s, N: toNum(v, s.N), Nobs: toNum(v, s.Nobs) }))}
            step={1}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="μk (-)"
            value={safeP.mu_k}
            onChange={(v) => setP((s) => ({ ...s, mu_k: toNum(v, s.mu_k), muObs: toNum(v, s.muObs) }))}
            step={0.01}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="v (m/s) (info)"
            value={safeP.v}
            onChange={(v) => setP((s) => ({ ...s, v: toNum(v, s.v) }))}
            step={0.1}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="Nmax (N)"
            value={safeP.Nmax}
            onChange={(v) => setP((s) => ({ ...s, Nmax: toNum(v, s.Nmax) }))}
            step={10}
            min={1e-6}
            disabled={false}
          />
        </div>

        <div className="muted" style={{ marginTop: 8, fontSize: 13 }}>
          Modelo cinético: fₖ = μk·N → fₖ(actual) = {fmt(fkNow, 4)} N
        </div>
      </div>

      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">fₖ vs N (μk fijo)</div>

        <div className="v2-grid-fill-inputs" style={{ marginBottom: 10 }}>
          <NumInput
            label="N marcador (N)"
            value={safeP.Nobs}
            onChange={(v) => setP((s) => ({ ...s, Nobs: toNum(v, s.Nobs) }))}
            step={5}
            min={0}
            disabled={false}
          />
        </div>

        <div className="muted" style={{ marginBottom: 8 }}>
          fₖ(N marcador) = {fmt(fkNobs, 4)} N
        </div>

        <div style={{ width: "100%", minHeight: 320 }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={dataN}>
              <CartesianGrid />
              <XAxis dataKey="N" />
              <YAxis />
              <Tooltip formatter={(v, n) => [fmt(v, 4), n]} labelFormatter={(l) => `N=${fmt(l, 3)} N`} />
              <Legend />
              <Line dataKey="fk" name="fₖ (N)" />
              <ReferenceDot x={safeP.Nobs} y={fkNobs} r={4} label="marcador" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">fₖ vs μk (N fijo)</div>

        <div className="v2-grid-fill-inputs" style={{ marginBottom: 10 }}>
          <NumInput
            label="μmax (-)"
            value={safeP.muMax}
            onChange={(v) => setP((s) => ({ ...s, muMax: toNum(v, s.muMax) }))}
            step={0.1}
            min={1e-6}
            disabled={false}
          />
          <NumInput
            label="μ marcador (-)"
            value={safeP.muObs}
            onChange={(v) => setP((s) => ({ ...s, muObs: toNum(v, s.muObs) }))}
            step={0.01}
            min={0}
            disabled={false}
          />
        </div>

        <div className="muted" style={{ marginBottom: 8 }}>
          fₖ(μ marcador) = {fmt(fkMuObs, 4)} N
        </div>

        <div style={{ width: "100%", minHeight: 320 }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={dataMu}>
              <CartesianGrid />
              <XAxis dataKey="mu_k" />
              <YAxis />
              <Tooltip formatter={(v, n) => [fmt(v, 4), n]} labelFormatter={(l) => `μk=${fmt(l, 3)}`} />
              <Legend />
              <Line dataKey="fk" name="fₖ (N)" />
              <ReferenceDot x={safeP.muObs} y={fkMuObs} r={4} label="marcador" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="muted" style={{ marginTop: 8, fontSize: 13 }}>
          Nota: en el modelo ideal, fₖ no depende de la velocidad (mientras hay deslizamiento).
        </div>
      </div>
    </div>
  );
}
