import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { createCoordGraph } from "../../graphFactories.jsx";

const graph_identity = {
  pregunta_principal: {
    es: "¿En qué condiciones se conserva la energia mecanica entre dos estados?",
    en: "Under which conditions is mechanical energy conserved between two states?",
  },
  variable_control: "Wnc",
  formula: "W_{nc} = (K_f + U_f) - (K_i + U_i)",
  target_interpretable: true,
};

function Component({
  lang = "es",
  params = {},
  sharedParams = null,
  onSharedParamsChange,
  onGraphStateChange,
}) {
  const uiLang = lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);

  const p = sharedParams?.__calc ?? params ?? sharedParams ?? {};
  const values = p.values ?? p.known ?? p;

  const m = Math.max(0.1, Number(values.m ?? 1));
  const g = Math.max(0.1, Number(values.g ?? 9.81));
  const h = Math.max(0, Number(values.h ?? values.h0 ?? 8));
  const Wnc = Number(values.Wnc ?? 0);

  const EmInitial = m * g * h;
  const EmFinal = EmInitial + Wnc;

  const data = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 100; i += 1) {
      const s = i / 100;
      const U = EmInitial * (1 - s);
      const K = EmFinal - U;
      points.push({ s, K, U, EmFinal });
    }
    return points;
  }, [EmInitial, EmFinal]);

  React.useEffect(() => {
    if (!onGraphStateChange) return;
    onGraphStateChange({
      EmInitial,
      EmFinal,
      Wnc,
      conserved: Math.abs(Wnc) < 1e-6,
    });
  }, [EmInitial, EmFinal, Wnc, onGraphStateChange]);

  const onChartClick = (state) => {
    if (!state?.activePayload?.[0] || !onSharedParamsChange) return;
    const s = state.activePayload[0].payload.s;
    onSharedParamsChange({ sampleState: s });
  };

  return (
    <div style={{ width: "100%", height: 360, background: "#0f172a", borderRadius: 12, padding: 12 }}>
      <div style={{ color: "#cbd5e1", fontSize: 13, marginBottom: 8 }}>
        {tt("Balance energetico entre estados", "State-to-state energy balance")}:
        <span style={{ color: "#4ade80", marginLeft: 8 }}>{graph_identity.formula}</span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} onClick={onChartClick} margin={{ top: 16, right: 18, left: 6, bottom: 18 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#334155" />
          <XAxis
            dataKey="s"
            stroke="#94a3b8"
            label={{ value: tt("Estado normalizado", "Normalized state"), position: "bottom", fill: "#94a3b8", dy: 8 }}
          />
          <YAxis
            stroke="#94a3b8"
            label={{ value: tt("Energia (J)", "Energy (J)"), angle: -90, position: "insideLeft", fill: "#94a3b8" }}
          />
          <Tooltip
            contentStyle={{ background: "#1e293b", border: "none", borderRadius: 8, color: "#f8fafc" }}
            formatter={(v, n) => [Number(v).toFixed(2), n]}
          />
          <Legend verticalAlign="top" />
          <ReferenceLine y={0} stroke="#64748b" />
          <Line type="monotone" dataKey="K" name={tt("Kinetica K", "Kinetic K")} stroke="#60a5fa" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="U" name={tt("Potencial U", "Potential U")} stroke="#34d399" strokeWidth={2.6} dot={false} />
          <Line type="monotone" dataKey="EmFinal" name={tt("Mecanica Em", "Mechanical Em")} stroke="#f59e0b" strokeWidth={2.4} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const PrincipioDeConservacionGraphsCoord = createCoordGraph({
  Component,
  displayName: "PrincipioDeConservacionGraphsCoord",
});

PrincipioDeConservacionGraphsCoord.graph_identity = graph_identity;

export default PrincipioDeConservacionGraphsCoord;
