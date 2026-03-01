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

function buildData(R, wMax, n = 221) {
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

const PRESETS = {
  bici: { label: "Bicicleta", R: 0.34, w: 8.2, vMode: "ideal" },
  coche: { label: "Rueda coche", R: 0.31, w: 9.5, vMode: "ideal" },
  patinando: { label: "Con deslizamiento", R: 0.30, w: 8.0, vMode: "slip" },
};

export default function EjemplosClasicosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["radio", "r"], default: toNum(p.R ?? p.radio ?? p.r, 0.3) },
      { key: "w", aliases: ["omega"], default: toNum(p.w ?? p.omega, 8) },
      { key: "v", aliases: ["velocidad"], default: toNum(p.v ?? p.velocidad, 2.4) },
      { key: "wMax", aliases: ["omegaMax"], default: toNum(p.wMax ?? p.omegaMax, 12) },
      { key: "preset", aliases: ["ejemplo"], default: String(p.preset ?? p.ejemplo ?? "bici") },
      { key: "showLine", aliases: ["mostrarRecta"], default: p.showLine ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showAxes", aliases: ["mostrarEjes"], default: p.showAxes ?? true },
    ],
    [p.R, p.radio, p.r, p.w, p.omega, p.v, p.velocidad, p.wMax, p.omegaMax, p.preset, p.ejemplo, p.showLine, p.showPoint, p.showAxes]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 0.3), 0.05, 2);
  const wMax = clamp(toNum(ep.wMax, 12), 1, 30);
  const w = clamp(toNum(ep.w, 8), -wMax, wMax);
  const v = clamp(toNum(ep.v, 2.4), -200, 200);
  const preset = PRESETS[ep.preset] ? ep.preset : "bici";
  const showLine = !!ep.showLine;
  const showPoint = !!ep.showPoint;
  const showAxes = !!ep.showAxes;

  const vIdeal = R * w;
  const delta = v - vIdeal;
  const slipRatio = vIdeal === 0 ? 0 : delta / vIdeal;

  const data = useMemo(() => buildData(R, wMax), [R, wMax]);
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, val) => {
    exp.startExperiment();
    exp.setValue(k, val);
  }, [exp]);

  const applyPreset = (key) => {
    const t = PRESETS[key];
    if (!t) return;
    exp.startExperiment();
    exp.setValue("preset", key);
    exp.setValue("R", t.R);
    exp.setValue("w", t.w);
    exp.setValue("v", t.vMode === "ideal" ? t.R * t.w : t.R * t.w * 1.28);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Ejemplos clasicos de rodadura (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          Condicion ideal: <MathInline latex={"v = \\omega R"} />.
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
              <input className="form-control" style={{ width: 112 }} value={fmt(w, 3).replace(",", ".")} onChange={(e) => setValue("w", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>v (m/s)</span>
              <input className="form-control" style={{ width: 96 }} value={fmt(v, 3).replace(",", ".")} onChange={(e) => setValue("v", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>omega_max</span>
              <input className="form-control" style={{ width: 106 }} value={fmt(wMax, 2).replace(",", ".")} onChange={(e) => setValue("wMax", e.target.value)} />
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
            <Pill active={preset === "bici"} onClick={() => applyPreset("bici")}>Bicicleta</Pill>
            <Pill active={preset === "coche"} onClick={() => applyPreset("coche")}>Rueda coche</Pill>
            <Pill active={preset === "patinando"} onClick={() => applyPreset("patinando")}>Con deslizamiento</Pill>
            <Pill active={showLine} onClick={() => setValue("showLine", !showLine)}>Recta ideal</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showAxes} onClick={() => setValue("showAxes", !showAxes)}>Ejes</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              v_ideal = <b>{fmt(vIdeal, 4)}</b> m/s | Delta = v - omega*R = <b>{fmt(delta, 4)}</b> m/s.
              <br />
              Deslizamiento relativo = <b>{fmt(slipRatio * 100, 2)}</b>%.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Grafica v(omega) y punto medido</div>
        <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
          Si el punto cae sobre la recta, hay rodadura sin deslizamiento.
        </div>

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
              {showAxes ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showAxes ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showLine ? <Line type="monotone" dataKey="v" name="v = omega*R" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={w} y={v} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
