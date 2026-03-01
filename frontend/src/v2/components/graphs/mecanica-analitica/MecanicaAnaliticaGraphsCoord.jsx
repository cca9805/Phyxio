import React, { useMemo, useCallback } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import {
  detectAnalyticScenario,
  getAnalyticModel,
  toNum,
  clamp,
} from "./analyticModels";

const fmt = (n, d = 3) => (Number.isFinite(n) ? Number(n).toFixed(d).replace(".", ",") : "-");

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

export default function MecanicaAnaliticaGraphsCoord({
  title,
  params,
  sharedParams,
  leafRelPath,
}) {
  const p = params ?? sharedParams ?? {};
  const scenario = useMemo(
    () => detectAnalyticScenario(leafRelPath, p?.motionId, title),
    [leafRelPath, p?.motionId, title]
  );
  const model = useMemo(() => getAnalyticModel(scenario), [scenario]);

  const schema = useMemo(() => {
    const base = model.params.map((cfg) => ({
      key: cfg.key,
      aliases: cfg.aliases || [],
      default: toNum(p?.[cfg.key], cfg.default),
    }));
    base.push(
      { key: "sample", default: toNum(p?.sample, 0.55) },
      { key: "showY1", default: p?.showY1 ?? true },
      { key: "showY2", default: p?.showY2 ?? true }
    );
    return base;
  }, [model, p]);

  const exp = useExperimentParams({ params: p, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const valueMap = useMemo(() => {
    const out = {};
    for (const cfg of model.params) {
      out[cfg.key] = clamp(
        toNum(ep[cfg.key], cfg.default),
        cfg.min ?? Number.NEGATIVE_INFINITY,
        cfg.max ?? Number.POSITIVE_INFINITY
      );
    }
    return out;
  }, [model, ep]);

  const built = useMemo(() => model.build(valueMap), [model, valueMap]);
  const data = built.data || [];
  const sampleRatio = clamp(toNum(ep.sample, 0.55), 0, 1);
  const idx = Math.max(0, Math.min(data.length - 1, Math.round(sampleRatio * (data.length - 1))));
  const point = data[idx] || { x: 0, y1: 0, y2: 0 };
  const showY1 = !!ep.showY1;
  const showY2 = !!ep.showY2;

  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

  const yMax = useMemo(() => {
    let m = 1;
    for (const d of data) m = Math.max(m, Math.abs(d.y1 || 0), Math.abs(d.y2 || 0));
    return m * 1.1;
  }, [data]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title || `${model.title} (Coord)`}</div>
        <div className="muted" style={{ marginTop: 6 }}>
          <MathInline latex={model.formula} />
        </div>

        <div
          style={{
            marginTop: 10,
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
                style={{ width: 90 }}
                value={String(valueMap[cfg.key] ?? cfg.default)}
                onChange={(e) => setValue(cfg.key, e.target.value)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={exp.startExperiment}
            style={{
              marginLeft: "auto",
              padding: "8px 10px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(99,102,241,0.25)",
              color: "rgba(255,255,255,0.92)",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Experimentar
          </button>
          <button
            type="button"
            onClick={exp.resetToCalculator}
            style={{
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
            marginTop: 10,
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
          <Pill active={showY1} onClick={() => setValue("showY1", !showY1)}>
            {model.y1Label}
          </Pill>
          <Pill active={showY2} onClick={() => setValue("showY2", !showY2)}>
            {model.y2Label}
          </Pill>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>muestra</span>
            <input
              className="form-control"
              style={{ width: 90 }}
              value={String(sampleRatio)}
              onChange={(e) => setValue("sample", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="muted" style={{ marginBottom: 10 }}>
          x = <b>{fmt(point.x, 3)}</b> | {model.y1Label} = <b>{fmt(point.y1, 4)}</b> | {model.y2Label} ={" "}
          <b>{fmt(point.y2, 4)}</b>
        </div>
        <div style={{ width: "100%", height: 340 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="x" tickFormatter={(x) => fmt(x, 2)} label={{ value: model.xLabel, position: "insideBottomRight", offset: -5 }} />
              <YAxis domain={[-yMax, yMax]} tickFormatter={(y) => fmt(y, 2)} />
              <Tooltip formatter={(val, name) => [fmt(val, 5), name]} labelFormatter={(x) => `${model.xLabel}: ${fmt(x, 3)}`} />
              <Legend />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
              {showY1 ? <Line type="monotone" dataKey="y1" name={model.y1Label} stroke="#3b82f6" strokeWidth={3} dot={false} /> : null}
              {showY2 ? <Line type="monotone" dataKey="y2" name={model.y2Label} stroke="#f97316" strokeWidth={3} dot={false} /> : null}
              <ReferenceDot x={point.x} y={showY2 ? point.y2 : point.y1} r={5} fill="#22c55e" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

