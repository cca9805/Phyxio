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

const pickNum = (obj, keys, fb) => {
  for (const k of keys) {
    const v = obj?.[k];
    if (v === undefined || v === null || v === "") continue;
    const n = toNum(v, NaN);
    if (Number.isFinite(n)) return n;
  }
  return fb;
};

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

function buildSeriesR(dP, Rmax = 1000, step = 5) {
  const out = [];
  for (let R = 0; R <= Rmax + 1e-9; R += step) {
    out.push({ R, P: dP > 0 ? R / (dP / 1) : 0, VM: dP });
  }
  return out;
}

function buildSeriesRatio(dP, dRmax = 10, step = 0.1) {
  const out = [];
  for (let dR = 0.1; dR <= dRmax + 1e-9; dR += step) {
    out.push({ dR, VM: dP / dR });
  }
  return out;
}

export default function VentajaMecanicaGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "mode", aliases: ["vista"], default: p.mode || "ratio" },
      { key: "R", aliases: ["resistencia"], default: pickNum(p, ["R", "resistencia"], 300) },
      { key: "dP", aliases: ["d_P", "brazoP"], default: pickNum(p, ["dP", "d_P", "brazoP"], 4) },
      { key: "dR", aliases: ["d_R", "brazoR"], default: pickNum(p, ["dR", "d_R", "brazoR"], 1) },
      { key: "showP", aliases: ["mostrarP"], default: p.showP ?? true },
      { key: "showVM", aliases: ["mostrarVM"], default: p.showVM ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      p.mode,
      pickNum(p, ["R", "resistencia"], 300),
      pickNum(p, ["dP", "d_P", "brazoP"], 4),
      pickNum(p, ["dR", "d_R", "brazoR"], 1),
      p.showP,
      p.showVM,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const mode = ep.mode === "load" ? "load" : "ratio";
  const R = clamp(toNum(ep.R, 300), 0, 2000);
  const dP = clamp(toNum(ep.dP, 4), 0.1, 20);
  const dR = clamp(toNum(ep.dR, 1), 0.1, 20);
  const showP = !!ep.showP;
  const showVM = !!ep.showVM;
  const showPoint = !!ep.showPoint;

  const VM = dP / dR;
  const P = VM > 0 ? R / VM : 0;

  const data = useMemo(() => {
    if (mode === "load") return buildSeriesR(VM, 2000, 10).map((r) => ({ x: r.R, P: r.P, VM: VM }));
    return buildSeriesRatio(dP, 10, 0.1).map((r) => ({ x: r.dR, VM: r.VM }));
  }, [mode, dP, VM]);

  const yMax = useMemo(() => {
    let m = 1;
    for (const row of data) {
      if (showP && Number.isFinite(row.P)) m = Math.max(m, row.P);
      if (showVM && Number.isFinite(row.VM)) m = Math.max(m, row.VM);
    }
    return m * 1.12;
  }, [data, showP, showVM]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => { exp.startExperiment(); exp.setValue(k, v); }, [exp]);

  const xNow = mode === "load" ? R : dR;
  const yPoint = mode === "load" ? (showP ? P : VM) : VM;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Ventaja mecanica en palancas (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"VM=\\frac{R}{P}=\\frac{d_P}{d_R}"} /> (ideal, sin perdidas).
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
            <Pill active={mode === "ratio"} onClick={() => setValue("mode", "ratio")}>VM vs d_R</Pill>
            <Pill active={mode === "load"} onClick={() => setValue("mode", "load")}>P vs R</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>d_P</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(dP, 2).replace(",", ".")} onChange={(e) => setValue("dP", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>d_R</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(dR, 2).replace(",", ".")} onChange={(e) => setValue("dR", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>R</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(R, 1).replace(",", ".")} onChange={(e) => setValue("R", e.target.value)} />
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
            <Pill active={showVM} onClick={() => setValue("showVM", !showVM)}>VM</Pill>
            <Pill active={showP} onClick={() => setValue("showP", !showP)}>P</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>
              VM = <b>{fmt(VM, 3)}</b>, R = <b>{fmt(R, 2)}</b> N, P = <b>{fmt(P, 2)}</b> N.
              <br />
              A mayor VM, menor fuerza de entrada necesaria para la misma carga.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Curvas de ventaja mecanica</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                type="number"
                domain={mode === "load" ? [0, 2000] : [0.1, 10]}
                tickFormatter={(v) => fmt(v, mode === "load" ? 0 : 1)}
                label={{ value: mode === "load" ? "R (N)" : "d_R (m)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={[0, yMax]}
                tickFormatter={(v) => fmt(v, 1)}
                label={{ value: mode === "load" ? "P o VM" : "VM", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(l) => `${mode === "load" ? "R" : "d_R"} = ${fmt(l, mode === "load" ? 1 : 2)}`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showVM ? <Line type="monotone" dataKey="VM" name="VM" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {mode === "load" && showP ? <Line type="monotone" dataKey="P" name="P" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={xNow} y={yPoint} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
