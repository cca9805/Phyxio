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
const acc = (m, fAp, fLoss) => (fAp - fLoss) / m;
const eta = (pOut, pIn) => pOut / pIn;

function buildSeries(m, fAp, fLossMax, step = 1) {
  const out = [];
  for (let fLoss = 0; fLoss <= fLossMax + 1e-9; fLoss += step) {
    out.push({
      fLoss,
      a: acc(m, fAp, fLoss),
      fNet: fAp - fLoss,
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

export default function SistemasRealesGraphsCoord(props) {
  const p = props.params ?? props.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "m", aliases: ["masa"], default: toNum(p.m ?? p.masa, 20) },
      { key: "F_ap", aliases: ["Fap", "f_ap"], default: toNum(p.F_ap ?? p.Fap ?? p.f_ap, 140) },
      { key: "F_loss", aliases: ["Floss", "f_loss"], default: toNum(p.F_loss ?? p.Floss ?? p.f_loss, 35) },
      { key: "F_loss_max", aliases: ["f_loss_max"], default: toNum(p.F_loss_max ?? p.f_loss_max, 140) },
      { key: "P_in", aliases: ["Pin"], default: toNum(p.P_in ?? p.Pin, 1200) },
      { key: "P_out", aliases: ["Pout"], default: toNum(p.P_out ?? p.Pout, 900) },
      { key: "showA", aliases: ["mostrarA"], default: p.showA ?? true },
      { key: "showFnet", aliases: ["mostrarFnet"], default: p.showFnet ?? true },
      { key: "showPoint", aliases: ["mostrarPunto"], default: p.showPoint ?? true },
    ],
    [p.m, p.masa, p.F_ap, p.Fap, p.f_ap, p.F_loss, p.Floss, p.f_loss, p.F_loss_max, p.f_loss_max, p.P_in, p.Pin, p.P_out, p.Pout, p.showA, p.showFnet, p.showPoint]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;
  const m = clamp(toNum(ep.m, 20), 0.1, 100000);
  const fAp = clamp(toNum(ep.F_ap, 140), 0, 100000);
  const fLoss = clamp(toNum(ep.F_loss, 35), 0, fAp);
  const fLossMax = clamp(toNum(ep.F_loss_max, 140), 1, 100000);
  const pIn = clamp(toNum(ep.P_in, 1200), 0.1, 1e9);
  const pOut = clamp(toNum(ep.P_out, 900), 0, pIn);
  const showA = !!ep.showA;
  const showFnet = !!ep.showFnet;
  const showPoint = !!ep.showPoint;

  const fNet = fAp - fLoss;
  const a = fNet / m;
  const eff = eta(pOut, pIn);
  const data = useMemo(() => buildSeries(m, fAp, fLossMax, Math.max(1, fLossMax / 120)), [m, fAp, fLossMax]);

  const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((k, v0) => {
    exp.startExperiment();
    exp.setValue(k, v0);
  }, [exp]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Sistemas reales (Coord)</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"F_{net}=F_{ap}-F_{loss},\\quad a=\\frac{F_{ap}-F_{loss}}{m},\\quad \\eta=\\frac{P_{out}}{P_{in}}"} />.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>m</span><input className="form-control" style={{ width: 88 }} value={fmt(m, 2).replace(",", ".")} onChange={(e) => setValue("m", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>F_ap</span><input className="form-control" style={{ width: 88 }} value={fmt(fAp, 2).replace(",", ".")} onChange={(e) => setValue("F_ap", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>F_loss</span><input className="form-control" style={{ width: 88 }} value={fmt(fLoss, 2).replace(",", ".")} onChange={(e) => setValue("F_loss", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>P_in</span><input className="form-control" style={{ width: 88 }} value={fmt(pIn, 1).replace(",", ".")} onChange={(e) => setValue("P_in", e.target.value)} /></div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}><span style={{ fontSize: 13, opacity: 0.85 }}>P_out</span><input className="form-control" style={{ width: 88 }} value={fmt(pOut, 1).replace(",", ".")} onChange={(e) => setValue("P_out", e.target.value)} /></div>
            <button
              type="button"
              onClick={exp.resetToCalculator}
              style={{ marginLeft: "auto", padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}
            >
              Seguir calculadora
            </button>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showA} onClick={() => setValue("showA", !showA)}>a(F_loss)</Pill>
            <Pill active={showFnet} onClick={() => setValue("showFnet", !showFnet)}>F_net(F_loss)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            F_net = <b>{fmt(fNet, 4)}</b> N | a = <b>{fmt(a, 4)}</b> m/s2 | eta = <b>{fmt(eff, 4)}</b> ({fmt(eff * 100, 2)}%).
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Impacto de perdidas</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="fLoss" type="number" domain={[0, fLossMax]} tickFormatter={(v) => fmt(v, 0)} label={{ value: "F_loss (N)", position: "insideBottomRight", offset: -5 }} />
              <YAxis yAxisId="left" tickFormatter={(v) => fmt(v, 2)} label={{ value: "a (m/s2)", angle: -90, position: "insideLeft" }} />
              <YAxis yAxisId="right" orientation="right" tickFormatter={(v) => fmt(v, 1)} label={{ value: "F_net (N)", angle: -90, position: "insideRight" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 5), name]} labelFormatter={(x) => `F_loss = ${fmt(x, 2)} N`} />
              <ReferenceLine yAxisId="left" y={0} stroke="rgba(255,255,255,0.25)" />
              {showA ? <Line yAxisId="left" type="monotone" dataKey="a" name="a" stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showFnet ? <Line yAxisId="right" type="monotone" dataKey="fNet" name="F_net" stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              {showPoint && showA ? <ReferenceDot yAxisId="left" x={fLoss} y={a} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPoint && showFnet ? <ReferenceDot yAxisId="right" x={fLoss} y={fNet} r={5} fill="#fb923c" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
