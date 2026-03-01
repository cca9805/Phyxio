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

const buildSeriesByV = (m, r) => {
  const out = [];
  for (let vv = 0; vv <= 35 + 1e-9; vv += 0.5) {
    const ac = (vv * vv) / r;
    out.push({ x: vv, ac, Fc: m * ac });
  }
  return out;
};

const buildSeriesByR = (m, v) => {
  const out = [];
  for (let rr = 0.2; rr <= 20 + 1e-9; rr += 0.2) {
    const ac = (v * v) / rr;
    out.push({ x: rr, ac, Fc: m * ac });
  }
  return out;
};

export default function ConceptoFuerzaCentripetaGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};

  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: pickNum(p, ["m", "masa"], 2) },
      { key: "r", aliases: ["radio"], default: pickNum(p, ["r", "radio"], 4) },
      { key: "v", aliases: ["velocidad"], default: pickNum(p, ["v", "velocidad"], 8) },
      { key: "view", aliases: ["sweep"], default: p.view || "v" },
      { key: "showAc", aliases: ["mostrarAc"], default: p.showAc ?? true },
      { key: "showFc", aliases: ["mostrarFc"], default: p.showFc ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [
      pickNum(p, ["m", "masa"], 2),
      pickNum(p, ["r", "radio"], 4),
      pickNum(p, ["v", "velocidad"], 8),
      p.view,
      p.showAc,
      p.showFc,
      p.showPoint,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 2), 0.1, 200);
  const r = clamp(toNum(ep.r, 4), 0.2, 50);
  const v = clamp(toNum(ep.v, 8), 0, 35);
  const view = ep.view === "r" ? "r" : "v";
  const showAc = !!ep.showAc;
  const showFc = !!ep.showFc;
  const showPoint = !!ep.showPoint;

  const ac = (v * v) / r;
  const Fc = m * ac;

  const data = useMemo(() => (view === "v" ? buildSeriesByV(m, r) : buildSeriesByR(m, v)), [view, m, r, v]);
  const xNow = view === "v" ? v : r;
  const xDomain = view === "v" ? [0, 35] : [0.2, 20];
  const yMax = useMemo(() => {
    let ymax = 1;
    for (const row of data) ymax = Math.max(ymax, row.ac, row.Fc);
    return ymax * 1.08;
  }, [data]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

  const setM = useCallback((val) => { exp.startExperiment(); exp.setValue("m", val); }, [exp]);
  const setR = useCallback((val) => { exp.startExperiment(); exp.setValue("r", val); }, [exp]);
  const setV = useCallback((val) => { exp.startExperiment(); exp.setValue("v", val); }, [exp]);
  const setView = useCallback((val) => { exp.startExperiment(); exp.setValue("view", val); }, [exp]);
  const setShowAc = useCallback((val) => { exp.startExperiment(); exp.setValue("showAc", val); }, [exp]);
  const setShowFc = useCallback((val) => { exp.startExperiment(); exp.setValue("showFc", val); }, [exp]);
  const setShowPoint = useCallback((val) => { exp.startExperiment(); exp.setValue("showPoint", val); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Concepto de fuerza centripeta (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a_c=\\frac{v^2}{r},\\quad F_c=m a_c"} />.
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
            <Pill active={view === "v"} onClick={() => setView("v")}>Barrido en v</Pill>
            <Pill active={view === "r"} onClick={() => setView("r")}>Barrido en r</Pill>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>m</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setM(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>r</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(r, 2).replace(",", ".")} onChange={(e) => setR(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>v</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(v, 2).replace(",", ".")} onChange={(e) => setV(e.target.value)} />
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
            <Pill active={showAc} onClick={() => setShowAc(!showAc)}>a_c</Pill>
            <Pill active={showFc} onClick={() => setShowFc(!showFc)}>F_c</Pill>
            <Pill active={showPoint} onClick={() => setShowPoint(!showPoint)}>Punto actual</Pill>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          a_c = <b>{fmt(ac, 3)}</b> m/s2 | F_c = <b>{fmt(Fc, 3)}</b> N
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                type="number"
                domain={xDomain}
                tickFormatter={(vv) => fmt(vv, view === "v" ? 0 : 1)}
                label={{ value: view === "v" ? "v (m/s)" : "r (m)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                domain={[0, yMax]}
                tickFormatter={(vv) => fmt(vv, 1)}
                label={{ value: "Magnitud", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(l) => `${view === "v" ? "v" : "r"} = ${fmt(l, view === "v" ? 2 : 3)}`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showAc ? <Line type="monotone" dataKey="ac" name="a_c" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showFc ? <Line type="monotone" dataKey="Fc" name="F_c" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={xNow} y={showFc ? Fc : ac} r={5} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
