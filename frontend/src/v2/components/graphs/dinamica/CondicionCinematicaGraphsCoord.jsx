import React, { useMemo, useCallback } from "react";
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
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

function buildData(R, wMax, n = 201) {
  const out = [];
  const N = Math.max(80, n);
  for (let i = 0; i < N; i += 1) {
    const w = -wMax + (2 * wMax * i) / (N - 1);
    out.push({ w, v: R * w });
  }
  return out;
}

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "8px 10px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.14)",
        background: active ? "rgba(99,102,241,0.25)" : "rgba(0,0,0,0.35)",
        color: "rgba(255,255,255,0.90)",
        fontWeight: 900,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

export default function CondicionCinematicaGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "R", aliases: ["radio", "r"], default: toNum(p.R ?? p.radio ?? p.r, 0.35) },
      { key: "w", aliases: ["omega"], default: toNum(p.w ?? p.omega, 6) },
      { key: "wMax", aliases: ["omegaMax"], default: toNum(p.wMax ?? p.omegaMax, 12) },
      { key: "showLine", aliases: ["mostrarRecta"], default: p.showLine ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showZero", aliases: ["mostrarCero"], default: p.showZero ?? true },
    ],
    [p.R, p.radio, p.r, p.w, p.omega, p.wMax, p.omegaMax, p.showLine, p.showPoint, p.showZero]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 0.35), 0.05, 2.5);
  const wMax = clamp(toNum(ep.wMax, 12), 1, 30);
  const w = clamp(toNum(ep.w, 6), -wMax, wMax);
  const showLine = !!ep.showLine;
  const showPoint = !!ep.showPoint;
  const showZero = !!ep.showZero;

  const v = R * w;
  const data = useMemo(() => buildData(R, wMax), [R, wMax]);
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, val) => {
    exp.startExperiment();
    exp.setValue(k, val);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Condicion cinematica de rodadura (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Sin deslizamiento: <MathInline latex={"v = \\omega R"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(59,130,246,0.2)",
              background: "rgba(59,130,246,0.08)",
            }}
          >
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>R (m)</span>
              <input className="form-control" style={{ width: 96 }} value={fmt(R, 3).replace(",", ".")} onChange={(e) => setValue("R", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>omega (rad/s)</span>
              <input className="form-control" style={{ width: 110 }} value={fmt(w, 3).replace(",", ".")} onChange={(e) => setValue("w", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>omega_max</span>
              <input className="form-control" style={{ width: 96 }} value={fmt(wMax, 2).replace(",", ".")} onChange={(e) => setValue("wMax", e.target.value)} />
            </div>

            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{
                marginLeft: "auto",
                padding: "8px 10px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(0,0,0,0.35)",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 900,
                cursor: "pointer",
              }}
            >
              Seguir calculadora
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              alignItems: "center",
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid rgba(2,132,199,0.22)",
              background: "rgba(2,132,199,0.10)",
            }}
          >
            <Pill active={showLine} onClick={() => setValue("showLine", !showLine)}>Recta v(omega)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>Ejes</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              <MathInline latex={"v = \\omega R"} /> = <b>{fmt(v, 4)}</b> m/s.
              Pendiente de la recta = <b>{fmt(R, 4)}</b>.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Relacion lineal entre v y omega</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="w"
                type="number"
                domain={[-wMax, wMax]}
                tickFormatter={(val) => fmt(val, 2)}
                label={{ value: "omega (rad/s)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(val) => fmt(val, 2)}
                label={{ value: "v (m/s)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 5), name]}
                labelFormatter={(val) => `omega = ${fmt(val, 4)} rad/s`}
              />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showZero ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showLine ? <Line type="monotone" dataKey="v" name="v = omega R" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={w} y={v} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
