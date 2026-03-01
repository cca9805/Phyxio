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
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import {
  resolveFluidModelForLeaf,
  toNum,
  getFluidParamAliases,
  withFluidDerivedParams,
} from "./fluidModels";

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

export default function FluidosGraphsCoord({
  title,
  params,
  leafRelPath,
  formulasDoc,
  magnitudesDoc,
}) {
  const resolved = useMemo(
    () =>
      resolveFluidModelForLeaf({
        leafRelPath,
        motionId: params?.motionId,
        title,
        formulasDoc,
        magnitudesDoc,
      }),
    [leafRelPath, params?.motionId, title, formulasDoc, magnitudesDoc]
  );
  const model = resolved.model;

  const paramsForGraph = useMemo(
    () => withFluidDerivedParams({ scenario: resolved.scenario, params }),
    [resolved.scenario, params]
  );

  const schema = useMemo(() => {
    const base = model.params.map((p) => ({
      key: p.key,
      aliases: getFluidParamAliases(p.key),
      default: toNum(paramsForGraph?.[p.key], p.default),
    }));
    base.push(
      { key: "showY1", default: paramsForGraph?.showY1 ?? true },
      { key: "showY2", default: paramsForGraph?.showY2 ?? true },
      { key: "showZero", default: paramsForGraph?.showZero ?? true }
    );
    return base;
  }, [model, paramsForGraph]);

  const exp = useExperimentParams({ params: paramsForGraph, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const p = useMemo(() => {
    const out = {};
    for (const k of model.params) out[k.key] = toNum(ep[k.key], k.default);
    return out;
  }, [ep, model]);

  const built = useMemo(() => model.build(p), [model, p]);
  const showY1 = !!ep.showY1;
  const showY2 = !!ep.showY2;
  const showZero = !!ep.showZero;

  const setValue = (k, v) => {
    exp.startExperiment();
    exp.setValue(k, v);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || model.title}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={model.formula} />
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
            {model.params.map((cfg) => (
              <div key={cfg.key} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.85 }}>{cfg.label}</span>
                <input
                  className="form-control"
                  style={{ width: 110 }}
                  value={p[cfg.key]}
                  onChange={(e) => setValue(cfg.key, e.target.value)}
                />
              </div>
            ))}
            <button type="button" onClick={exp.startExperiment} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
            <button type="button" onClick={exp.resetToCalculator} style={{ padding: "8px 10px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
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
            <Pill active={showY1} onClick={() => setValue("showY1", !showY1)}>{built.y1Label}</Pill>
            <Pill active={showY2} onClick={() => setValue("showY2", !showY2)}>{built.y2Label}</Pill>
            <Pill active={showZero} onClick={() => setValue("showZero", !showZero)}>eje y=0</Pill>
          </div>

          <div className="v2-panel" style={{ padding: 12, fontSize: 13, opacity: 0.9 }}>
            {built.summary}
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">Respuesta del modelo</div>
        <div style={{ width: "100%", height: 350, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={built.data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="x"
                tickFormatter={(v) => fmt(v, 2)}
                label={{ value: built.xLabel, position: "insideBottomRight", offset: -5 }}
              />
              <YAxis tickFormatter={(v) => fmt(v, 2)} />
              <Tooltip
                formatter={(v, n) => [fmt(Number(v), 4), n]}
                labelFormatter={(l) => `${built.xLabel}: ${fmt(l, 4)}`}
              />
              {showZero ? <ReferenceLine y={0} stroke="rgba(255,255,255,0.30)" /> : null}
              {showY1 ? <Line type="monotone" dataKey="y1" name={built.y1Label} stroke="#60a5fa" strokeWidth={3} dot={false} /> : null}
              {showY2 ? <Line type="monotone" dataKey="y2" name={built.y2Label} stroke="#34d399" strokeWidth={2.8} dot={false} /> : null}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
