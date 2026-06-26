import React, { useMemo, useCallback } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { createCoordGraph } from "../../graphFactories.jsx";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
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

export function createTermoCoordGraph(config) {
  const {
    componentName,
    question,
    controlVariable,
    starMagnitude,
    formulaText,
    formulaLatex,
    slopeLatex,
    slopeMeaning,
    relation,
    physicalReading,
    domainMeaning,
    title,
    formulaCaption,
    xAxis,
    yAxis,
    curveName,
    pointUnit,
    pointPrecision,
    xPrecision,
    yPrecision,
    schema,
    paramClamps,
    seriesArgs,
    buildSeries,
    buildPoint,
  } = config;

  const graph_identity = {
    pregunta_principal: question,
    variable_control: controlVariable,
    magnitud_estrella: starMagnitude,
    formula: formulaText,
    target_interpretable: true,
  };

  const axes = {
    x: { key: "x", label: xAxis },
    y: { key: "y", label: yAxis },
  };

  const formula = {
    latex: formulaLatex,
    slopeLatex,
    slopeMeaning,
  };

  const profile = {
    graph_identity,
    axes,
    formula,
    relation,
    physicalReading,
    domainMeaning,
  };

  function TermoCoordGraphView(props) {
    const lang = props.lang ?? "es";
    const uiLang = lang === "en" ? "en" : "es";
    const decSep = uiLang === "en" ? "." : ",";
    const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", decSep) : "-");
    const tt = (es, en) => (uiLang === "en" ? en : es);

    const p = props.params ?? props.sharedParams ?? {};

    const fullSchema = useMemo(() => schema, []);
    const exp = useExperimentParams({ params: p, schema: fullSchema, modeDefault: "experiment" });
    const ep = exp.effectiveParams;

    const clamped = useMemo(() => {
      const ctx = { clamp, toNum, ep };
      const result = {};
      paramClamps.forEach((fn) => fn(ctx, result));
      return result;
    }, [ep]);

    const args = useMemo(() => {
      const out = {};
      seriesArgs.forEach((key) => {
        out[key] = clamped[key];
      });
      return out;
    }, [clamped]);

    const data = useMemo(() => buildSeries(args), [args]);
    const point = useMemo(() => buildPoint(args), [args]);

    const yDomain = useMemo(() => {
      const vals = data.map((d) => d.y);
      const min = Math.min(...vals);
      const max = Math.max(...vals);
      const pad = Math.max(0.01, (max - min) * 0.1);
      return [Math.min(0, min - pad), max + pad];
    }, [data]);

    const setParam = useCallback(
      (key, value) => {
        exp.startExperiment();
        exp.setValue(key, value);
      },
      [exp]
    );
    const setShowCurve = useCallback(
      (value) => setParam("showCurve", value),
      [setParam]
    );
    const setShowPoint = useCallback(
      (value) => setParam("showPoint", value),
      [setParam]
    );

    const showCurve = !!ep.showCurve;
    const showPoint = !!ep.showPoint;

    return (
      <div style={{ display: "grid", gap: 12 }}>
        <div className="v2-card" style={{ padding: 12, background: "rgba(15,23,42,0.74)", borderRadius: 18, border: "1px solid rgba(255,255,255,0.12)" }}>
          <div className="v2-card-title">{tt(title.es, title.en)}</div>
          <div className="muted" style={{ marginTop: 6 }}>
            <MathInline latex={formulaLatex} />.
            {tt(formulaCaption.es, formulaCaption.en)}
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
              {schema
                .filter((s) => s.key !== "showCurve" && s.key !== "showPoint")
                .map((s) => (
                  <div key={s.key} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <span style={{ fontSize: 13, opacity: 0.85 }}>
                      <MathInline latex={s.labelLatex} />
                    </span>
                    <input
                      className="form-control"
                      style={{ width: s.width || 80 }}
                      type="number"
                      min={s.min}
                      max={s.max}
                      step={s.step || "any"}
                      value={fmt(clamped[s.key], s.precision ?? 2)}
                      onChange={(e) => setParam(s.key, e.target.value)}
                    />
                  </div>
                ))}
              <button type="button" onClick={exp.resetToCalculator} style={{ marginLeft: "auto" }}>
                {tt("Seguir calculadora", "Follow calculator")}
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
              <Pill active={showCurve} onClick={() => setShowCurve(!showCurve)}>{tt("Curva", "Curve")}</Pill>
              <Pill active={showPoint} onClick={() => setShowPoint(!showPoint)}>{tt("Punto", "Point")}</Pill>
            </div>
          </div>
        </div>

        <div className="v2-card" style={{ padding: 12 }}>
          <div className="muted" style={{ marginBottom: 10 }}>
            <MathInline latex={formulaLatex} /> = <b>{fmt(point.y, pointPrecision)}</b> {pointUnit}
          </div>

          <div style={{ width: "100%", height: 340 }}>
            <ResponsiveContainer>
              <LineChart data={data} margin={{ top: 10, right: 18, left: 8, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis
                  dataKey="x"
                  type="number"
                  domain={["auto", "auto"]}
                  tickFormatter={(value) => fmt(value, xPrecision)}
                  stroke="rgba(255,255,255,0.4)"
                  label={{ value: tt(xAxis.es, xAxis.en), position: "insideBottomRight", offset: -5, fill: "rgba(255,255,255,0.5)" }}
                />
                <YAxis
                  domain={yDomain}
                  tickFormatter={(value) => fmt(value, yPrecision)}
                  stroke="rgba(255,255,255,0.4)"
                  label={{ value: tt(yAxis.es, yAxis.en), angle: -90, position: "insideLeft", fill: "rgba(255,255,255,0.5)" }}
                />
                <Tooltip
                  formatter={(value) => [fmt(value, yPrecision), tt(yAxis.es, yAxis.en)]}
                  labelFormatter={(value) => `${tt(xAxis.es, xAxis.en)} = ${fmt(value, xPrecision)}`}
                />
                <ReferenceLine y={0} stroke="rgba(255,255,255,0.25)" />
                {showCurve ? (
                  <Line
                    type="monotone"
                    dataKey="y"
                    name={tt(curveName.es, curveName.en)}
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={false}
                  />
                ) : null}
                {showPoint ? (
                  <ReferenceDot
                    x={point.x}
                    y={point.y}
                    r={5}
                    fill="#fb923c"
                    stroke="none"
                  />
                ) : null}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }

  TermoCoordGraphView.graph_identity = graph_identity;
  TermoCoordGraphView.graphIdentity = graph_identity;
  TermoCoordGraphView.axes = axes;
  TermoCoordGraphView.formula = formula;
  TermoCoordGraphView.profile = profile;
  TermoCoordGraphView.pregunta_principal = graph_identity.pregunta_principal;
  TermoCoordGraphView.magnitud_estrella = graph_identity.magnitud_estrella;

  const Created = createCoordGraph({ Component: TermoCoordGraphView, displayName: componentName });

  Created.graph_identity = graph_identity;
  Created.graphIdentity = graph_identity;
  Created.axes = axes;
  Created.formula = formula;
  Created.profile = profile;
  Created.pregunta_principal = graph_identity.pregunta_principal;
  Created.magnitud_estrella = graph_identity.magnitud_estrella;

  return Created;
}

export default createTermoCoordGraph;
