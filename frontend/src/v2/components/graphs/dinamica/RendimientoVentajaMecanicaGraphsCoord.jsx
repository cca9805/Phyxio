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

function buildSeries(vmIdeal, pMax = 2000, step = 20) {
  const out = [];
  for (let P = step; P <= pMax + 1e-9; P += step) {
    out.push({
      P,
      Rideal: vmIdeal * P,
      Reta80: 0.8 * vmIdeal * P,
      Reta60: 0.6 * vmIdeal * P,
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

export default function RendimientoVentajaMecanicaGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["carga"], default: toNum(p.R ?? p.carga, 1500) },
      { key: "P", aliases: ["esfuerzo"], default: toNum(p.P ?? p.esfuerzo, 450) },
      { key: "sP", aliases: ["desplazamiento_entrada"], default: toNum(p.sP ?? p.desplazamiento_entrada, 2.4) },
      { key: "sR", aliases: ["desplazamiento_salida"], default: toNum(p.sR ?? p.desplazamiento_salida, 0.5) },
      { key: "showIdeal", aliases: ["mostrarIdeal"], default: p.showIdeal ?? true },
      { key: "showEta80", aliases: ["mostrarEta80"], default: p.showEta80 ?? true },
      { key: "showEta60", aliases: ["mostrarEta60"], default: p.showEta60 ?? true },
    ],
    [
      p.R,
      p.carga,
      p.P,
      p.esfuerzo,
      p.sP,
      p.desplazamiento_entrada,
      p.sR,
      p.desplazamiento_salida,
      p.showIdeal,
      p.showEta80,
      p.showEta60,
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 1500), 1, 500000);
  const P = clamp(toNum(ep.P, 450), 1, 500000);
  const sP = clamp(toNum(ep.sP, 2.4), 0.01, 1000);
  const sR = clamp(toNum(ep.sR, 0.5), 0.01, 1000);
  const showIdeal = !!ep.showIdeal;
  const showEta80 = !!ep.showEta80;
  const showEta60 = !!ep.showEta60;

  const vmReal = R / P;
  const vmIdeal = sP / sR;
  const eta = vmReal / vmIdeal;
  const win = P * sP;
  const wout = R * sR;

  const data = useMemo(() => buildSeries(vmIdeal, 2000, 20), [vmIdeal]);
  const fmt = (n, d = 4) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Rendimiento y ventaja mecanica (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"VM_{real}=\\frac{R}{P},\\ VM_{ideal}=\\frac{s_P}{s_R},\\ \\eta=\\frac{VM_{real}}{VM_{ideal}}"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>R</span><input className="form-control" style={{ width: 90 }} value={fmt(R, 1).replace(",", ".")} onChange={(e) => setValue("R", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>P</span><input className="form-control" style={{ width: 90 }} value={fmt(P, 1).replace(",", ".")} onChange={(e) => setValue("P", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>sP</span><input className="form-control" style={{ width: 90 }} value={fmt(sP, 3).replace(",", ".")} onChange={(e) => setValue("sP", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>sR</span><input className="form-control" style={{ width: 90 }} value={fmt(sR, 3).replace(",", ".")} onChange={(e) => setValue("sR", e.target.value)} /></div>
            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}
            >
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showIdeal} onClick={() => setValue("showIdeal", !showIdeal)}>eta=1.0</Pill>
            <Pill active={showEta80} onClick={() => setValue("showEta80", !showEta80)}>eta=0.8</Pill>
            <Pill active={showEta60} onClick={() => setValue("showEta60", !showEta60)}>eta=0.6</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            VM_real = <b>{fmt(vmReal, 4)}</b> | VM_ideal = <b>{fmt(vmIdeal, 4)}</b> | eta = <b>{fmt(eta, 4)}</b>
            <br />
            W_in = <b>{fmt(win, 2)}</b> J | W_out = <b>{fmt(wout, 2)}</b> J
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Carga util frente a esfuerzo aplicado</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="P" type="number" domain={[20, 2000]} tickFormatter={(v) => fmt(v, 0)} label={{ value: "P (N)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(v) => fmt(v, 0)} label={{ value: "R estimada (N)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 3), name]} labelFormatter={(x) => `P = ${fmt(x, 1)} N`} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" />
              {showIdeal ? <Line type="monotone" dataKey="Rideal" name="eta=1.0" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showEta80 ? <Line type="monotone" dataKey="Reta80" name="eta=0.8" stroke="#22c55e" strokeWidth={3} dot={false} /> : null}
              {showEta60 ? <Line type="monotone" dataKey="Reta60" name="eta=0.6" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showIdeal ? <ReferenceDot x={P} y={vmIdeal * P} r={5} fill="#60a5fa" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
