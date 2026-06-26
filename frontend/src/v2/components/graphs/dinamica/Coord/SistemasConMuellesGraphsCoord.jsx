import React, { useEffect, useMemo, useCallback } from "react";
import { createCoordGraph } from "@/v2/components/graphs/graphFactories.jsx";
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
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const buildSeries = (keq, xMax = 0.4, step = 0.01) => {
  const out = [];
  for (let x = -xMax; x <= xMax + 1e-9; x += step) {
    out.push({ x, Fel: -keq * x, Fm: keq * Math.abs(x) });
  }
  return out;
};

const graph_identity = {
  pregunta_principal: {
    es: "Como cambia la rigidez equivalente de un sistema con muelles cuando se conectan en serie o en paralelo?",
    en: "How does the equivalent stiffness of a spring system change when springs are connected in series or in parallel?",
  },
  magnitud_estrella: "keq",
  magnitud_secundaria: "Fel",
  variable_control: "x",
};
void graph_identity;

const graph_formula = {
  es: "hooke_equivalente_1d: Fel = -keq*x",
  en: "hooke_equivalente_1d: Fel = -keq*x",
};
void graph_formula;

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "8px 10px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.14)",
        background: active ? "rgba(16,185,129,0.22)" : "rgba(0,0,0,0.35)",
        color: "rgba(255,255,255,0.90)",
        fontWeight: 800,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function SistemasConMuellesGraphsCoordComponent(props) {
  const uiLang = props.lang === "en" ? "en" : "es";
  const tt = (es, en) => (uiLang === "en" ? en : es);
  const decSep = uiLang === "en" ? "." : ",";
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");

  const incoming = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "config", aliases: ["conexion"], default: incoming.config || "paralelo" },
      { key: "k1", aliases: ["constante1"], default: toNum(incoming.k1, 120) },
      { key: "k2", aliases: ["constante2"], default: toNum(incoming.k2, 180) },
      { key: "x", aliases: ["elongacion"], default: toNum(incoming.x, 0.05) },
    ],
    [incoming.config, incoming.k1, incoming.k2, incoming.x]
  );

  const exp = useExperimentParams({ params: incoming, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const config = ep.config === "serie" ? "serie" : "paralelo";
  const k1 = clamp(toNum(ep.k1, 120), 1, 1000);
  const k2 = clamp(toNum(ep.k2, 180), 1, 1000);
  const x = clamp(toNum(ep.x, 0.05), -0.25, 0.25);

  const keq = config === "serie" ? (k1 * k2) / (k1 + k2) : k1 + k2;
  const Fel = -keq * x;
  const Fm = keq * Math.abs(x);
  const x1 = config === "serie" ? Fm / k1 : Math.abs(x);
  const x2 = config === "serie" ? Fm / k2 : Math.abs(x);
  const F1 = config === "paralelo" ? k1 * Math.abs(x) : Fm;
  const F2 = config === "paralelo" ? k2 * Math.abs(x) : Fm;
  const data = useMemo(() => buildSeries(keq), [keq]);

  const derived = useMemo(
    () => ({
      source: "sistemas-con-muelles",
      target: "keq",
      question: "equivalent_stiffness",
      config,
      k1,
      k2,
      keq,
      x,
      Fel,
      Fm,
      x1,
      x2,
      F1,
      F2,
      formula: "hooke_equivalente_1d: Fel = -keq*x",
      reparto: config === "serie" ? "reparto_serie" : "reparto_paralelo",
    }),
    [F1, F2, Fel, Fm, config, k1, k2, keq, x, x1, x2]
  );

  useEffect(() => {
    props.onGraphStateChange?.(derived);
    props.onInterpretationContextChange?.(derived);
  }, [derived, props]);

  const setConfig = useCallback((v) => { exp.startExperiment(); exp.setValue("config", v); }, [exp]);
  const setK1 = useCallback((v) => { exp.startExperiment(); exp.setValue("k1", v); }, [exp]);
  const setK2 = useCallback((v) => { exp.startExperiment(); exp.setValue("k2", v); }, [exp]);
  const setX = useCallback((v) => { exp.startExperiment(); exp.setValue("x", v); }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {tt("Sistemas con muelles (Coord)", "Spring systems (Coord)")}
        </div>
        <div className="muted" style={{ marginTop: 6 }}>
          {tt(
            "Formula nucleo: hooke_equivalente_1d, Fel = -keq*x. En paralelo usamos paralelo_dos_muelles; en serie usamos serie_dos_muelles.",
            "Core formula: hooke_equivalente_1d, Fel = -keq*x. In parallel we use paralelo_dos_muelles; in series we use serie_dos_muelles."
          )}
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
              border: "1px solid rgba(16,185,129,0.22)",
              background: "rgba(16,185,129,0.08)",
            }}
          >
            <Pill active={config === "paralelo"} onClick={() => setConfig("paralelo")}>
              {tt("Paralelo", "Parallel")}
            </Pill>
            <Pill active={config === "serie"} onClick={() => setConfig("serie")}>
              {tt("Serie", "Series")}
            </Pill>

            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>k1</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(k1, 1).replace(",", ".")} onChange={(e) => setK1(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>k2</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(k2, 1).replace(",", ".")} onChange={(e) => setK2(e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>x</span>
              <input className="form-control" style={{ width: 84 }} value={fmt(x, 3).replace(",", ".")} onChange={(e) => setX(e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          {tt("keq =", "keq =")} <b>{fmt(keq, 2)}</b> N/m
          {" · "}
          Fel = <b>{fmt(Fel, 3)}</b> N
          {" · "}
          Fm = <b>{fmt(Fm, 3)}</b> N
        </div>
        <div className="muted" style={{ marginBottom: 10 }}>
          {config === "serie"
            ? <>
                x1 = <b>{fmt(x1, 3)}</b> m {" · "} x2 = <b>{fmt(x2, 3)}</b> m
              </>
            : <>
                F1 = <b>{fmt(F1, 3)}</b> N {" · "} F2 = <b>{fmt(F2, 3)}</b> N
              </>}
        </div>

        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[-0.4, 0.4]}
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "x (m)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: "Fel (N)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [fmt(value, 4), name]}
                labelFormatter={(l) => `x = ${fmt(l, 3)} m`}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              <Line
                type="monotone"
                dataKey="Fel"
                name="Fel = -keq*x"
                stroke={config === "serie" ? "#60a5fa" : "#34d399"}
                strokeWidth={3}
                dot={false}
              />
              <ReferenceDot x={x} y={Fel} r={5} fill="#fb923c" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="muted" style={{ marginTop: 10 }}>
          {config === "serie"
            ? tt(
                "Serie: la misma fuerza se transmite por ambos muelles y la deformacion total se reparte como x = x1 + x2.",
                "Series: the same force passes through both springs and the total deformation is distributed as x = x1 + x2."
              )
            : tt(
                "Paralelo: ambos muelles comparten la misma deformacion y la fuerza total se reparte como Fm = F1 + F2.",
                "Parallel: both springs share the same deformation and the total force is distributed as Fm = F1 + F2."
              )}
        </div>
      </div>
    </div>
  );
}

export default createCoordGraph({
  Component: SistemasConMuellesGraphsCoordComponent,
  displayName: "SistemasConMuellesGraphsCoord",
});
