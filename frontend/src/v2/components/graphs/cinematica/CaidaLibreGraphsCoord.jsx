import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

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

export default function CaidaLibreGraphsCoord({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "y0", aliases: ["h", "h0"], default: toNum(params?.y0 ?? params?.h ?? params?.h0, 15) },
      { key: "v0", aliases: ["vy0"], default: toNum(params?.v0 ?? params?.vy0, 0) },
      { key: "g", aliases: ["grav"], default: toNum(params?.g, 9.81) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 0) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 1.5) },
      { key: "showY", default: params?.showY ?? true },
      { key: "showV", default: params?.showV ?? true },
      { key: "showA", default: params?.showA ?? false },
      { key: "showPoint", default: params?.showPoint ?? true },
      { key: "showRef", default: params?.showRef ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const y0 = clamp(toNum(ep.y0, 15), 0, 500);
  const v0 = toNum(ep.v0, 0);
  const g = clamp(toNum(ep.g, 9.81), 0.05, 50);

  const tImpact = useMemo(() => {
    if (!(g > 0)) return 0;
    const disc = v0 * v0 + 2 * g * Math.max(0, y0);
    const t = (v0 + Math.sqrt(Math.max(0, disc))) / g;
    return Number.isFinite(t) ? Math.max(0, t) : 0;
  }, [y0, v0, g]);

  const tMaxRaw = toNum(ep.tMax, 0);
  const tMaxAuto = tImpact > 0 ? tImpact : 6;
  const tMax = clamp(tMaxRaw > 0 ? Math.min(tMaxRaw, Math.max(0.5, tMaxAuto)) : tMaxAuto, 0.5, 40);
  const tObs = clamp(toNum(ep.tObs, Math.min(1.5, tMax)), 0, tMax);

  const showY = !!ep.showY;
  const showV = !!ep.showV;
  const showA = !!ep.showA;
  const showPoint = !!ep.showPoint;
  const showRef = !!ep.showRef;

  const data = useMemo(() => {
    const out = [];
    const N = 240;
    for (let i = 0; i <= N; i += 1) {
      const t = (i / N) * tMax;
      const yIdeal = y0 + v0 * t - 0.5 * g * t * t;
      const y = Math.max(0, yIdeal);
      const v = v0 - g * t;
      out.push({ t, y, v, a: -g });
    }
    return out;
  }, [y0, v0, g, tMax]);

  const yObs = Math.max(0, y0 + v0 * tObs - 0.5 * g * tObs * tObs);
  const vObs = v0 - g * tObs;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || "Caida libre (Coord)"}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={"y(t)=y_0+v_0t-\\tfrac{1}{2}gt^2,\\quad v(t)=v_0-gt"} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 10 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(59,130,246,0.2)", background: "rgba(59,130,246,0.08)" }}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>y0 (m)</span>
              <input className="form-control" style={{ width: 90 }} value={y0} onChange={(e) => setValue("y0", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>v0 (m/s)</span>
              <input className="form-control" style={{ width: 90 }} value={v0} onChange={(e) => setValue("v0", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>g (m/s2)</span>
              <input className="form-control" style={{ width: 90 }} value={g} onChange={(e) => setValue("g", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>t_max (s)</span>
              <input className="form-control" style={{ width: 90 }} value={tMaxRaw > 0 ? tMaxRaw : "auto"} onChange={(e) => setValue("tMax", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontSize: 13, opacity: 0.85 }}>t_obs (s)</span>
              <input className="form-control" style={{ width: 90 }} value={tObs} onChange={(e) => setValue("tObs", e.target.value)} />
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

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", padding: "8px 12px", borderRadius: 10, border: "1px solid rgba(2,132,199,0.22)", background: "rgba(2,132,199,0.10)" }}>
            <Pill active={showY} onClick={() => setValue("showY", !showY)}>y(t)</Pill>
            <Pill active={showV} onClick={() => setValue("showV", !showV)}>v(t)</Pill>
            <Pill active={showA} onClick={() => setValue("showA", !showA)}>a(t)</Pill>
            <Pill active={showPoint} onClick={() => setValue("showPoint", !showPoint)}>Punto actual</Pill>
            <Pill active={showRef} onClick={() => setValue("showRef", !showRef)}>Referencias</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12 }}>
            <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>
              t_impacto = <b>{fmt(tImpact, 3)}</b> s | y(t_obs) = <b>{fmt(yObs, 3)}</b> m | v(t_obs) = <b>{fmt(vObs, 3)}</b> m/s
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Evolucion temporal</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(n) => fmt(n, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(n) => fmt(n, 1)} label={{ value: "Magnitud", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(value, 4), name]} labelFormatter={(value) => `t = ${fmt(value, 3)} s`} />
              {showRef ? <ReferenceLine x={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showRef ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showY ? <Line type="monotone" dataKey="y" name="y(t)" stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showV ? <Line type="monotone" dataKey="v" name="v(t)" stroke="#f97316" strokeWidth={2.6} dot={false} /> : null}
              {showA ? <Line type="monotone" dataKey="a" name="a(t)" stroke="#34d399" strokeWidth={2.4} dot={false} /> : null}
              {showPoint && showY ? <ReferenceDot x={tObs} y={yObs} r={5} fill="#60a5fa" stroke="none" /> : null}
              {showPoint && showV ? <ReferenceDot x={tObs} y={vObs} r={5} fill="#f97316" stroke="none" /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

