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

const requiredP = (R, bR, bP) => (R * bR) / bP;
const vm = (bP, bR) => bP / bR;

function buildSeries(R, bR, bPMax, step = 0.02) {
  const out = [];
  for (let bP = 0.1; bP <= bPMax + 1e-9; bP += step) {
    out.push({
      bP,
      P: requiredP(R, bR, bP),
      VM: vm(bP, bR),
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

export default function PalancasGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["resistencia"], default: toNum(p.R ?? p.resistencia, 300) },
      { key: "bR", aliases: ["brazo_resistencia"], default: toNum(p.bR ?? p.brazo_resistencia, 0.25) },
      { key: "bP", aliases: ["brazo_potencia"], default: toNum(p.bP ?? p.brazo_potencia, 0.75) },
      { key: "bPMax", aliases: ["bP_max"], default: toNum(p.bPMax ?? p.bP_max, 1.5) },
      { key: "showP", aliases: ["mostrarP"], default: p.showP ?? true },
      { key: "showVM", aliases: ["mostrarVM"], default: p.showVM ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
      { key: "showRef", aliases: ["mostrarRef"], default: p.showRef ?? true },
    ],
    [p.R, p.resistencia, p.bR, p.brazo_resistencia, p.bP, p.brazo_potencia, p.bPMax, p.bP_max, p.showP, p.showVM, p.showPoint, p.showRef]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 300), 1, 100000);
  const bR = clamp(toNum(ep.bR, 0.25), 0.05, 5);
  const bPMax = clamp(toNum(ep.bPMax, 1.5), 0.2, 8);
  const bP = clamp(toNum(ep.bP, 0.75), 0.1, bPMax);
  const showP = !!ep.showP;
  const showVM = !!ep.showVM;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const P = requiredP(R, bR, bP);
  const VM = vm(bP, bR);
  const tauP = P * bP;
  const tauR = R * bR;

  const data = useMemo(() => buildSeries(R, bR, bPMax, 0.02), [R, bR, bPMax]);
  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Palancas (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"P\\,b_P = R\\,b_R,\\quad VM=\\frac{R}{P}=\\frac{b_P}{b_R}"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>R</span><input className="form-control" style={{ width: 90 }} value={fmt(R, 2).replace(",", ".")} onChange={(e) => setValue("R", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>bR</span><input className="form-control" style={{ width: 90 }} value={fmt(bR, 3).replace(",", ".")} onChange={(e) => setValue("bR", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>bP</span><input className="form-control" style={{ width: 90 }} value={fmt(bP, 3).replace(",", ".")} onChange={(e) => setValue("bP", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>bP_max</span><input className="form-control" style={{ width: 90 }} value={fmt(bPMax, 2).replace(",", ".")} onChange={(e) => setValue("bPMax", e.target.value)} /></div>

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

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showP} onClick={() => setValue("showP", !showP)}>P(bP)</Pill>
            <Pill active={showVM} onClick={() => setValue("showVM", !showVM)}>VM(bP)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              P necesaria = <b>{fmt(P, 4)}</b> N | VM = <b>{fmt(VM, 4)}</b> | tauP = <b>{fmt(tauP, 4)}</b> N*m | tauR = <b>{fmt(tauR, 4)}</b> N*m.
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Efecto del brazo de potencia</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="bP" type="number" domain={[0.1, bPMax]} tickFormatter={(v0) => fmt(v0, 2)} label={{ value: "bP (m)", position: "insideBottomRight", offset: -5 }} />
              <YAxis yAxisId="left" tickFormatter={(v0) => fmt(v0, 1)} label={{ value: "P (N)", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" tickFormatter={(v0) => fmt(v0, 2)} label={{ value: "VM", angle: -90, position: "insideRight" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `bP = ${fmt(x, 3)} m`} />
              {showRef ? <ReferenceLine yAxisId="left" y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showP ? <Line yAxisId="left" type="monotone" dataKey="P" name="P requerida" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showVM ? <Line yAxisId="right" type="monotone" dataKey="VM" name="VM" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint && showP ? <ReferenceDot yAxisId="left" x={bP} y={P} r={6} fill="#22c55e" stroke="none" /> : null}
              {showPoint && showVM ? <ReferenceDot yAxisId="right" x={bP} y={VM} r={6} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
