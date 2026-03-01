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
import { defaultParams, seriesFvsN, seriesMuFromTheta } from "../../../engine/models/dinamica/coeficienteRozamiento";
import { pickParam } from "../../../utils/pickParamGraphs";

function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

// theta puede venir en rad o deg: heurística <=6.6 -> rad
function thetaToDeg(x) {
  if (!Number.isFinite(x)) return NaN;
  const ax = Math.abs(x);
  if (ax <= 6.6) return (x * 180) / Math.PI;
  return x;
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

export default function CoeficienteRozamientoGraphs({ params }) {
  const [linked, setLinked] = useState(true);
  const [p, setP] = useState(() => ({ ...defaultParams() }));

  // 🔗 linked: intenta leer N, fs_max, fk, mu_s, mu_k, theta_c desde calculadora
  useEffect(() => {
    if (!linked) return;
    if (!params) return;

    const N = pickParam(params, ["N", "normal", "n"], p.Nobs);

    // estático: preferimos fs_max si existe, si no, mu_s
    const fsMax = pickParam(
      params,
      ["fs_max", "fsMax", "f_s_max", "fsmax", "f_smax", "fMaxStatic", "f_estatico_max"],
      NaN
    );
    const mu_s = pickParam(
      params,
      ["mu_s", "mus", "muS", "mu_estatico", "coef_rozamiento_estatico"],
      NaN
    );

    // dinámico: preferimos fk si existe, si no, mu_k
    const fk = pickParam(
      params,
      ["fk", "f_k", "fr_k", "friccion_dinamica", "rozamiento_dinamico"],
      NaN
    );
    const mu_k = pickParam(
      params,
      ["mu_k", "muk", "muK", "mu_dinamico", "mu_cinetico", "coef_rozamiento_dinamico", "coef_rozamiento_cinetico"],
      NaN
    );

    // ángulo crítico (si existe)
    const thetaCdegRaw =
      Number.isFinite(toNum(params?.thetaCdeg, NaN))
        ? toNum(params?.thetaCdeg, NaN)
        : thetaToDeg(toNum(params?.theta_c, NaN));

    // Derivaciones seguras si faltan fuerzas
    const fsMaxObs = Number.isFinite(fsMax) ? fsMax : (Number.isFinite(mu_s) ? mu_s * N : p.fsMaxObs);
    const fkObs = Number.isFinite(fk) ? fk : (Number.isFinite(mu_k) ? mu_k * N : p.fkObs);

    setP((prev) => ({
      ...prev,
      Nobs: N,
      fsMaxObs,
      fkObs,
      thetaCdeg: Number.isFinite(thetaCdegRaw) ? thetaCdegRaw : prev.thetaCdeg,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linked, params]);

  const loadFromCalculator = () => {
    if (!params) return;
    setLinked(false);
    setP((prev) => {
      const N = pickParam(params, ["N", "normal", "n"], prev.Nobs);
      const fsMax = pickParam(params, ["fs_max", "fsMax", "f_s_max", "fsmax", "f_smax"], NaN);
      const mu_s = pickParam(params, ["mu_s", "mus", "muS", "mu_estatico"], NaN);
      const fk = pickParam(params, ["fk", "f_k", "fr_k"], NaN);
      const mu_k = pickParam(params, ["mu_k", "muk", "muK", "mu_dinamico", "mu_cinetico"], NaN);

      const fsMaxObs = Number.isFinite(fsMax) ? fsMax : (Number.isFinite(mu_s) ? mu_s * N : prev.fsMaxObs);
      const fkObs = Number.isFinite(fk) ? fk : (Number.isFinite(mu_k) ? mu_k * N : prev.fkObs);

      const thetaCdegRaw =
        Number.isFinite(toNum(params?.thetaCdeg, NaN))
          ? toNum(params?.thetaCdeg, NaN)
          : thetaToDeg(toNum(params?.theta_c, NaN));

      return {
        ...prev,
        Nobs: N,
        fsMaxObs,
        fkObs,
        thetaCdeg: Number.isFinite(thetaCdegRaw) ? thetaCdegRaw : prev.thetaCdeg,
      };
    });
  };

  const safeP = useMemo(() => {
    const Nobs = Math.max(1e-12, toNum(p.Nobs, 60));
    const fsMaxObs = Math.max(0, toNum(p.fsMaxObs, 18));
    const fkObs = Math.max(0, toNum(p.fkObs, 12));

    const Nmax = Math.max(1e-6, toNum(p.Nmax, 200));
    const thetaCdeg = Math.max(0, Math.min(89.9, toNum(p.thetaCdeg, 20)));
    const thetaMaxDeg = Math.max(thetaCdeg, Math.min(89.9, toNum(p.thetaMaxDeg, 60)));

    return { ...p, Nobs, fsMaxObs, fkObs, Nmax, thetaCdeg, thetaMaxDeg };
  }, [p]);

  const fvsn = useMemo(() => seriesFvsN(safeP), [safeP]);
  const dataTheta = useMemo(() => seriesMuFromTheta(safeP), [safeP]);

  const muSobs = safeP.Nobs > 0 ? safeP.fsMaxObs / safeP.Nobs : 0;
  const muKobs = safeP.Nobs > 0 ? safeP.fkObs / safeP.Nobs : 0;

  const muFromThetaC = Math.tan((safeP.thetaCdeg * Math.PI) / 180);

  return (
    <div>
      <div className="v2-card">
        <div className="v2-card-title">Parámetros (Coeficiente de rozamiento)</div>

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
            label="N (marcador) (N)"
            value={safeP.Nobs}
            onChange={(v) => setP((s) => ({ ...s, Nobs: toNum(v, s.Nobs) }))}
            step={1}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="fₛ,max (marcador) (N)"
            value={safeP.fsMaxObs}
            onChange={(v) => setP((s) => ({ ...s, fsMaxObs: toNum(v, s.fsMaxObs) }))}
            step={1}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="fₖ (marcador) (N)"
            value={safeP.fkObs}
            onChange={(v) => setP((s) => ({ ...s, fkObs: toNum(v, s.fkObs) }))}
            step={1}
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
          μs = fₛ,max/N = <b>{fmt(muSobs, 4)}</b> ·· μk = fₖ/N = <b>{fmt(muKobs, 4)}</b>
        </div>
      </div>

      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">Método por fuerzas: rectas f = μ·N</div>

        <div className="muted" style={{ marginBottom: 8 }}>
          Las pendientes son μ. El punto marcador fija μs y μk a partir de N y f medidos.
        </div>

        <div style={{ width: "100%", minHeight: 320 }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={fvsn.data}>
              <CartesianGrid />
              <XAxis dataKey="N" />
              <YAxis />
              <Tooltip
                formatter={(v, n) => [fmt(v, 4), n]}
                labelFormatter={(l) => `N=${fmt(l, 3)} N`}
              />
              <Legend />
              <Line dataKey="fsMaxLine" name="fₛ,max = μs·N" />
              <Line dataKey="fkLine" name="fₖ = μk·N" />
              <ReferenceDot x={safeP.Nobs} y={safeP.fsMaxObs} r={4} label="(N,fₛ,max)" />
              <ReferenceDot x={safeP.Nobs} y={safeP.fkObs} r={4} label="(N,fₖ)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="v2-card" style={{ marginTop: 12 }}>
        <div className="v2-card-title">Método del ángulo crítico: μs = tan(θc)</div>

        <div className="v2-grid-fill-inputs" style={{ marginBottom: 10 }}>
          <NumInput
            label="θc (grados)"
            value={safeP.thetaCdeg}
            onChange={(v) => setP((s) => ({ ...s, thetaCdeg: toNum(v, s.thetaCdeg) }))}
            step={1}
            min={0}
            disabled={linked}
          />
          <NumInput
            label="θmax (grados)"
            value={safeP.thetaMaxDeg}
            onChange={(v) => setP((s) => ({ ...s, thetaMaxDeg: toNum(v, s.thetaMaxDeg) }))}
            step={1}
            min={0}
            disabled={false}
          />
        </div>

        <div className="muted" style={{ marginBottom: 8 }}>
          μs(θc) = tan(θc) = <b>{fmt(muFromThetaC, 4)}</b>
        </div>

        <div style={{ width: "100%", minHeight: 320 }}>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={dataTheta}>
              <CartesianGrid />
              <XAxis dataKey="thetaDeg" />
              <YAxis />
              <Tooltip
                formatter={(v, n) => [fmt(v, 4), n]}
                labelFormatter={(l) => `θ=${fmt(l, 2)}°`}
              />
              <Legend />
              <Line dataKey="muS" name="μs = tan(θ)" />
              <ReferenceDot x={safeP.thetaCdeg} y={muFromThetaC} r={4} label="θc" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
