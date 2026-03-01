import React, { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

import { sampleRozamiento, sampleTrabajoRozamiento } from "../../../engine/models/dinamica/rozamiento";

function toNum(v, fallback = NaN) {
  if (v == null || v === "") return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;
  const n = Number(String(v).trim().replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function NumInput({ label, value, onChange, step = 0.1, min, max }) {
  return (
    <div className="v2-card">
      <div className="v2-card-title">{label}</div>
      <input
        className="v2-input"
        type="text"
        inputMode="decimal"
        step={step}
        min={min}
        max={max}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}

export default function RozamientoGraphs({ params }) {
  const muS0 = toNum(params?.mu_s ?? params?.muS, 0.4);
  const muK0 = toNum(params?.mu_k ?? params?.muK, 0.3);
  const N0 = toNum(params?.N, 100);

  const [mu_s, setMuS] = useState(Number.isFinite(muS0) ? muS0 : 0.4);
  const [mu_k, setMuK] = useState(Number.isFinite(muK0) ? muK0 : 0.3);
  const [Nmax, setNmax] = useState(() => clamp(Math.max(50, Math.abs(N0) * 2), 50, 2000));
  const [N, setN] = useState(Number.isFinite(N0) ? N0 : 100);
  const [dMax, setDmax] = useState(20);
  const [n, setNpts] = useState(240);

  const dataFx = useMemo(() => sampleRozamiento({ mu_s, mu_k, Nmax, n }), [mu_s, mu_k, Nmax, n]);
  const dataW = useMemo(() => sampleTrabajoRozamiento({ mu_k, N, dMax, n }), [mu_k, N, dMax, n]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        <NumInput label="Coeficiente estático μs" value={mu_s} step={0.01} min={0}
          onChange={(v) => setMuS(clamp(toNum(v, mu_s), 0, 10))} />
        <NumInput label="Coeficiente cinético μk" value={mu_k} step={0.01} min={0}
          onChange={(v) => setMuK(clamp(toNum(v, mu_k), 0, 10))} />
        <NumInput label="Normal máxima Nmax (N)" value={Nmax} step={1} min={0}
          onChange={(v) => setNmax(clamp(toNum(v, Nmax), 0, 50000))} />
        <NumInput label="Normal para trabajo N (N)" value={N} step={1} min={0}
          onChange={(v) => setN(clamp(toNum(v, N), 0, 50000))} />
        <NumInput label="Distancia máxima dmax (m)" value={dMax} step={0.5} min={0}
          onChange={(v) => setDmax(clamp(toNum(v, dMax), 0, 10000))} />
        <NumInput label="Puntos (n)" value={n} step={10} min={50} max={2000}
          onChange={(v) => setNpts(clamp(Math.round(toNum(v, n)), 50, 2000))} />
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Fricción vs normal</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Estático máximo: <b>Fᵣ,max = μs·N</b>. Cinético: <b>Fᵣ = μk·N</b>.
        </div>

        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={dataFx} margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="N" type="number" domain={["auto","auto"]}
                tickFormatter={(v) => String(v).replace(".", ",")}
                label={{ value: "N (N)", position: "insideBottom", offset: -5 }} />
              <YAxis tickFormatter={(v) => String(v).replace(".", ",")}
                label={{ value: "Fᵣ (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip
                formatter={(value, name) => [String(value).replace(".", ","), name]}
                labelFormatter={(v) => `N = ${String(v).replace(".", ",")} N`} />
              <Legend />
              <Line type="monotone" dataKey="Fr_max" dot={false} name="Fᵣ,max (estático)" />
              <Line type="monotone" dataKey="Fr_k" dot={false} name="Fᵣ (cinético)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Trabajo del rozamiento cinético</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Para fricción cinética constante: <b>Wf = -μk·N·d</b>.
        </div>

        <div style={{ width: "100%", height: 320, marginTop: 10 }}>
          <ResponsiveContainer>
            <AreaChart data={dataW} margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="d" type="number" domain={["auto","auto"]}
                tickFormatter={(v) => String(v).replace(".", ",")}
                label={{ value: "d (m)", position: "insideBottom", offset: -5 }} />
              <YAxis tickFormatter={(v) => String(v).replace(".", ",")}
                label={{ value: "Wf (J)", angle: -90, position: "insideLeft" }} />
              <Tooltip
                formatter={(value, name) => [String(value).replace(".", ","), name]}
                labelFormatter={(v) => `d = ${String(v).replace(".", ",")} m`} />
              <Legend />
              <Area type="monotone" dataKey="Wf" name="Wf" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
