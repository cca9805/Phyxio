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

function buildData(m, g, muK, Fmax, n = 220) {
  const out = [];
  for (let i = 0; i <= n; i += 1) {
    const F = (Fmax * i) / n;
    out.push({
      F,
      aNo: F / m,
      aK: Math.max(0, (F - muK * m * g) / m),
    });
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

export default function AnalisisCompletoGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 3) },
      { key: "g", aliases: ["gravedad"], default: toNum(p.g ?? p.gravedad, 9.8) },
      { key: "mu_k", aliases: ["muK", "coef_k"], default: toNum(p.mu_k ?? p.muK ?? p.coef_k, 0.25) },
      { key: "F", aliases: ["fuerza"], default: toNum(p.F ?? p.fuerza, 12) },
      { key: "Fmax", aliases: ["fuerzaMax"], default: toNum(p.Fmax ?? p.fuerzaMax, 40) },
      { key: "showNo", aliases: ["mostrarSin"], default: p.showNo ?? true },
      { key: "showK", aliases: ["mostrarCon"], default: p.showK ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.m, p.masa, p.g, p.gravedad, p.mu_k, p.muK, p.coef_k, p.F, p.fuerza, p.Fmax, p.fuerzaMax, p.showNo, p.showK, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const m = clamp(toNum(ep.m, 3), 0.05, 100);
  const g = clamp(toNum(ep.g, 9.8), 0.1, 25);
  const muK = clamp(toNum(ep.mu_k, 0.25), 0, 2);
  const Fmax = clamp(toNum(ep.Fmax, 40), 1, 300);
  const F = clamp(toNum(ep.F, 12), 0, Fmax);
  const showNo = !!ep.showNo;
  const showK = !!ep.showK;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => buildData(m, g, muK, Fmax), [m, g, muK, Fmax]);
  const Fcrit = muK * m * g;
  const aNo = F / m;
  const aK = Math.max(0, (F - Fcrit) / m);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Analisis completo (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"a_{sin}=\\frac{F}{m},\\quad a_{con}=\\max\\left(0,\\frac{F-\\mu_kmg}{m}\\right)"} />.
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
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m</span><input className="form-control" style={{ width: 85 }} value={fmt(m, 3).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>g</span><input className="form-control" style={{ width: 85 }} value={fmt(g, 3).replace(",", ".")} onChange={(e) => setValue("g", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>mu_k</span><input className="form-control" style={{ width: 85 }} value={fmt(muK, 3).replace(",", ".")} onChange={(e) => setValue("mu_k", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>F</span><input className="form-control" style={{ width: 85 }} value={fmt(F, 3).replace(",", ".")} onChange={(e) => setValue("F", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>F_max</span><input className="form-control" style={{ width: 90 }} value={fmt(Fmax, 2).replace(",", ".")} onChange={(e) => setValue("Fmax", e.target.value)} /></div>
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
            <Pill active={showNo} onClick={() => setValue("showNo", !showNo)}>Sin roz.</Pill>
            <Pill active={showK} onClick={() => setValue("showK", !showK)}>Con roz.</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              Umbral F_crit = <b>{fmt(Fcrit, 4)}</b> N | a_sin = <b>{fmt(aNo, 4)}</b> | a_con = <b>{fmt(aK, 4)}</b> m/s².
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Comparativa de aceleracion</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="F" type="number" domain={[0, Fmax]} tickFormatter={(v) => fmt(v, 1)} label={{ value: "F (N)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 2)} label={{ value: "a (m/s²)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(v) => `F = ${fmt(v, 3)} N`} />
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine x={Fcrit} stroke="rgba(245,158,11,0.90)" strokeDasharray="4 4" /> : null}
              {showNo ? <Line type="monotone" dataKey="aNo" name="a sin rozamiento" stroke="#38bdf8" strokeWidth={3} dot={false} /> : null}
              {showK ? <Line type="monotone" dataKey="aK" name="a con rozamiento" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showPoint ? <ReferenceDot x={F} y={aK} r={6} fill="#22c55e" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
