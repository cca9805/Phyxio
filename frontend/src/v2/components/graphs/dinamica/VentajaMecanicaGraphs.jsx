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

import { pickParam } from "../../../utils/pickParamGraphs";
import { fmt } from "../../../utils/graphFormat";
import { computeVM, buildSeriesVM } from "../../../engine/models/dinamica/ventajaMecanica";

// --- input helpers (coma/punto) ---
function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function NumInput({ label, value, onChange, disabled, hint }) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <input
        className="form-control"
        type="text"
        inputMode="decimal"
        disabled={disabled}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {hint ? <div className="muted" style={{ marginTop: 6, fontSize: 12 }}>{hint}</div> : null}
    </div>
  );
}

export default function VentajaMecanicaGraphs({ params }) {
  const [linked, setLinked] = useState(true);

  // estado (similar a tus graphs V2)
  const [p, setP] = useState(() => ({
    // variables de calculadora (ids exactas)
    P: 120,
    R: 720,
    d_P: 6,
    d_R: 1,
  }));

  // 🔗 Seguir calculadora: leer claves exactas del formulas.yaml
  useEffect(() => {
    if (!linked || !params) return;

    setP((prev) => ({
      ...prev,
      P: pickParam(params, ["P"], prev.P),
      R: pickParam(params, ["R"], prev.R),
      d_P: pickParam(params, ["d_P"], prev.d_P),
      d_R: pickParam(params, ["d_R"], prev.d_R),
    }));
  }, [linked, params]);

  const loadFromCalculator = () => {
    if (!params) return;
    setP((prev) => ({
      ...prev,
      P: pickParam(params, ["P"], prev.P),
      R: pickParam(params, ["R"], prev.R),
      d_P: pickParam(params, ["d_P"], prev.d_P),
      d_R: pickParam(params, ["d_R"], prev.d_R),
    }));
  };

  const safe = useMemo(() => {
    const P = Math.max(0, toNum(p.P, 0));
    const R = Math.max(0, toNum(p.R, 0));
    const d_P = Math.max(0, toNum(p.d_P, 0));
    const d_R = Math.max(1e-9, toNum(p.d_R, 1)); // evita división por 0 en VM brazos
    return { P, R, d_P, d_R };
  }, [p]);

  const out = useMemo(() => computeVM(safe), [safe]);
  const curve = useMemo(() => buildSeriesVM({ d_R: safe.d_R }, 201), [safe.d_R]);

  // --- SVG descriptivo (simple y muy claro) ---
  // Dibujo: apoyo en el centro, brazo d_P a la izquierda y d_R a la derecha (solo representación)
  const W = 900;
  const H = 240;
  const pad = 90;
  const yBar = 120;

  // escala visual: barra proporcional a d_P + d_R
  const L = Math.max(0.2, safe.d_P + safe.d_R);
  const sx = (x) => pad + (x / L) * (W - 2 * pad);

  const xA = sx(safe.d_P);     // apoyo
  const xP = sx(0);            // punto potencia
  const xR = sx(safe.d_P + safe.d_R); // punto resistencia

  const closePR = Math.abs(xP - xR) < 90;
  const yLabelP = closePR ? 18 : 24;
  const yLabelR = closePR ? 44 : 24;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Ventaja mecánica (palancas)</div>

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
            🧪 Modo experimento (solo gráficas)
          </button>
          {!linked ? (
            <button type="button" className="btn btn-sm btn-light" onClick={loadFromCalculator}>
              ↩️ Cargar desde calculadora
            </button>
          ) : null}
        </div>

        <div className="v2-grid-fill-inputs" style={{ marginTop: 10 }}>
          <NumInput
            label="R (N) resistencia"
            value={p.R}
            disabled={linked}
            onChange={(v) => setP((s) => ({ ...s, R: v }))}
            hint="Fuerza de la carga."
          />
          <NumInput
            label="P (N) fuerza aplicada"
            value={p.P}
            disabled={linked}
            onChange={(v) => setP((s) => ({ ...s, P: v }))}
            hint="Esfuerzo que aplicas."
          />
          <NumInput
            label="d_R (m) brazo de resistencia"
            value={p.d_R}
            disabled={linked}
            onChange={(v) => setP((s) => ({ ...s, d_R: v }))}
            hint="Distancia apoyo → carga (perpendicular)."
          />
          <NumInput
            label="d_P (m) brazo de potencia"
            value={p.d_P}
            disabled={linked}
            onChange={(v) => setP((s) => ({ ...s, d_P: v }))}
            hint="Distancia apoyo → punto donde aplicas P (perpendicular)."
          />
        </div>

        <div className="muted" style={{ marginTop: 10 }}>
          VM(def) = R/P ·· VM(brazos) = d_P/d_R ·· P* (equilibrio ideal) = R·d_R/d_P
        </div>
      </div>

      {/* SVG descriptivo */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Esquema (modelo ideal)</div>

        <div style={{ width: "100%", marginTop: 10, display: "flex", justifyContent: "center" }}>
          <div style={{ width: "min(980px, 100%)" }}>
            <svg
              width="100%"
              height="240"
              viewBox={`0 0 ${W} ${H}`}
              preserveAspectRatio="xMidYMid meet"
              className="text-slate-800 dark:text-slate-100"
              aria-label="Esquema de palanca para ventaja mecánica"
            >
              {/* Barra */}
              <line x1={sx(0)} y1={yBar} x2={sx(L)} y2={yBar} stroke="currentColor" strokeWidth="7" strokeLinecap="round" />

              {/* Apoyo */}
              <polygon
                points={`${xA},${yBar - 8} ${xA - 14},${yBar + 22} ${xA + 14},${yBar + 22}`}
                fill="currentColor"
                opacity="0.22"
              />
              <text x={xA} y={yBar + 55} textAnchor="middle" fontSize="13" fill="currentColor">
                A
              </text>

              {/* Flecha P */}
              <line x1={xP} y1={52} x2={xP} y2={yBar - 10} stroke="currentColor" strokeWidth="3" />
              <polygon points={`${xP - 7},${yBar - 10} ${xP + 7},${yBar - 10} ${xP},${yBar + 8}`} fill="currentColor" />
              <text x={xP} y={yLabelP} textAnchor="middle" fontSize="13" fill="currentColor">
                P = {fmt(safe.P, 3)} N
              </text>

              {/* Flecha R */}
              <line x1={xR} y1={52} x2={xR} y2={yBar - 10} stroke="currentColor" strokeWidth="3" />
              <polygon points={`${xR - 7},${yBar - 10} ${xR + 7},${yBar - 10} ${xR},${yBar + 8}`} fill="currentColor" />
              <text x={xR} y={yLabelR} textAnchor="middle" fontSize="13" fill="currentColor">
                R = {fmt(safe.R, 3)} N
              </text>

              {/* d_P */}
              <line x1={xP} y1={200} x2={xA} y2={200} stroke="currentColor" strokeWidth="2" opacity="0.85" />
              <line x1={xP} y1={194} x2={xP} y2={206} stroke="currentColor" strokeWidth="2" opacity="0.9" />
              <line x1={xA} y1={194} x2={xA} y2={206} stroke="currentColor" strokeWidth="2" opacity="0.9" />
              <text x={(xP + xA) / 2} y={222} textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.9">
                d_P = {fmt(safe.d_P, 4)} m
              </text>

              {/* d_R */}
              <line x1={xA} y1={170} x2={xR} y2={170} stroke="currentColor" strokeWidth="2" opacity="0.85" />
              <line x1={xA} y1={164} x2={xA} y2={176} stroke="currentColor" strokeWidth="2" opacity="0.9" />
              <line x1={xR} y1={164} x2={xR} y2={176} stroke="currentColor" strokeWidth="2" opacity="0.9" />
              <text x={(xA + xR) / 2} y={162} textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.9">
                d_R = {fmt(safe.d_R, 4)} m
              </text>
            </svg>
          </div>
        </div>

        <div className="muted" style={{ marginTop: 10, display: "grid", gap: 6 }}>
          <div>VM(def) = R/P = <b>{fmt(out.VM_def, 6)}</b></div>
          <div>VM(brazos) = d_P/d_R = <b>{fmt(out.VM_brazos, 6)}</b></div>
          <div>P* (equilibrio ideal) = <b>{fmt(out.P_eq, 6)} N</b></div>
        </div>
      </div>

      {/* Curva con ejes (sí procede aquí) */}
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Curva (sí procede): VM en función de d_P (d_R fijo)</div>
        <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
          Visualiza cómo crece VM al aumentar el brazo de potencia (manteniendo d_R).
        </div>

        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={curve}>
              <CartesianGrid />
              <XAxis
                dataKey="d_P"
                type="number"
                tickFormatter={(v) => fmt(v, 3)}
                label={{ value: "d_P (m)", position: "insideBottom", offset: -5 }}
              />
              <YAxis
                tickFormatter={(v) => fmt(v, 4)}
                label={{ value: "VM", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(v) => fmt(v, 6)}
                labelFormatter={(x) => `d_P = ${fmt(x, 6)} m`}
              />
              <Legend />
              <Line type="monotone" dataKey="VM" dot={false} name="VM = d_P/d_R" />
              {Number.isFinite(safe.d_P) && Number.isFinite(out.VM_brazos) ? (
                <ReferenceDot x={safe.d_P} y={out.VM_brazos} r={5} />
              ) : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
