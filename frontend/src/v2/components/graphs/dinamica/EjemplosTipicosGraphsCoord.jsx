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

const PRESETS = {
  cuerda: { m: 0.2, r: 0.8, v: 6, desc: "Piedra con cuerda: la tension aporta la centripeta." },
  curva: { m: 1200, r: 50, v: 15, desc: "Coche en curva plana: el rozamiento lateral aporta la centripeta." },
  loop: { m: 60, r: 12, v: 14, desc: "Loop vertical: la resultante radial viene de tension y peso." },
  orbita: { m: 500, r: 6800000, v: 7700, desc: "Orbita circular: la gravedad aporta la centripeta." },
};

function buildSeries(m, r, vMax, step) {
  const out = [];
  for (let vv = 0; vv <= vMax + 1e-9; vv += step) {
    const ac = (vv * vv) / r;
    out.push({ v: vv, ac, Fc: m * ac });
  }
  return out;
}

export default function EjemplosTipicosGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "example", aliases: ["ejemplo"], default: p.example || "cuerda" },
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], PRESETS.cuerda.m) },
      { key: "r", aliases: ["radio"], default: pickNum(p, ["r", "radio"], PRESETS.cuerda.r) },
      { key: "v", aliases: ["velocidad"], default: pickNum(p, ["v", "velocidad"], PRESETS.cuerda.v) },
      { key: "showAc", aliases: ["mostrarAc"], default: p.showAc ?? true },
      { key: "showFc", aliases: ["mostrarFc"], default: p.showFc ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      p.example,
      pickNum(p, ["m", "masa"], PRESETS.cuerda.m),
      pickNum(p, ["r", "radio"], PRESETS.cuerda.r),
      pickNum(p, ["v", "velocidad"], PRESETS.cuerda.v),
      p.showAc,
      p.showFc,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const example = PRESETS[ep.example] ? ep.example : "cuerda";
  const m = clamp(toNum(ep.m, PRESETS[example].m), 0.001, 1e9);
  const r = clamp(toNum(ep.r, PRESETS[example].r), 0.05, 1e12);
  const v = clamp(toNum(ep.v, PRESETS[example].v), 0, 1e6);
  const showAc = !!ep.showAc;
  const showFc = !!ep.showFc;
  const showPoint = !!ep.showPoint;

  const ac = (v * v) / r;
  const Fc = m * ac;

  const vMax = example === "orbita" ? Math.max(9000, v * 1.25) : 35;
  const step = example === "orbita" ? Math.max(50, vMax / 140) : 0.5;
  const data = useMemo(() => buildSeries(m, r, vMax, step), [m, r, vMax, step]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setValue = useCallback((key, val) => {
    exp.startExperiment();
    exp.setValue(key, val);
  }, [exp]);

  const setExample = useCallback((nextExample) => {
    const preset = PRESETS[nextExample] ?? PRESETS.cuerda;
    exp.startExperiment();
    exp.setValue("example", nextExample);
    exp.setValue("m", preset.m);
    exp.setValue("r", preset.r);
    exp.setValue("v", preset.v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Ejemplos tipicos de fuerza centripeta (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>{PRESETS[example].desc}</div>

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
            <Pill active={example === "cuerda"} onClick={() => setExample("cuerda")}>Cuerda</Pill>
            <Pill active={example === "curva"} onClick={() => setExample("curva")}>Curva</Pill>
            <Pill active={example === "loop"} onClick={() => setExample("loop")}>Loop</Pill>
            <Pill active={example === "orbita"} onClick={() => setExample("orbita")}>Orbita</Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>r</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(r, example === "orbita" ? 0 : 2).replace(",", ".")} onChange={(e) => setValue("r", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>v</span>
              <input className="form-control" style={{ width: 88 }} value={fmt(v, example === "orbita" ? 0 : 2).replace(",", ".")} onChange={(e) => setValue("v", e.target.value)} />
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
            <Pill active={showAc} onClick={() => setValue("showAc", !showAc)}>a_c(v)</Pill>
            <Pill active={showFc} onClick={() => setValue("showFc", !showFc)}>F_c(v)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div style={{ fontWeight: 900, opacity: 0.95 }}>
                <MathInline latex={"a_c=\\frac{v^2}{r},\\quad F_c=m a_c"} />
              </div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>
                a_c = <b>{fmt(ac, 3)}</b> m/s2 | F_c = <b>{fmt(Fc, 3)}</b> N
              </div>
            </div>
            <div className="muted" style={{ marginTop: 8 }}>
              En todos los casos, "centripeta" es la resultante radial de fuerzas reales.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Curvas de ejemplo</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="v"
                type="number"
                domain={[0, vMax]}
                tickFormatter={(vv) => fmt(vv, example === "orbita" ? 0 : 1)}
                label={{ value: "v (m/s)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                yAxisId="left"
                tickFormatter={(vv) => fmt(vv, 1)}
                label={{ value: "a_c (m/s2)", angle: -90, position: "insideLeft" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickFormatter={(vv) => fmt(vv, 1)}
                label={{ value: "F_c (N)", angle: -90, position: "insideRight" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(l) => `v = ${fmt(l, example === "orbita" ? 0 : 2)} m/s`}
              />
              <ReferenceLine yAxisId="left" y={0} stroke="rgba(255,255,255,0.25)" />
              {showAc ? <Line yAxisId="left" type="monotone" dataKey="ac" name="a_c" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showFc ? <Line yAxisId="right" type="monotone" dataKey="Fc" name="F_c" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint && showAc ? <ReferenceDot yAxisId="left" x={v} y={ac} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPoint && showFc ? <ReferenceDot yAxisId="right" x={v} y={Fc} r={5} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
