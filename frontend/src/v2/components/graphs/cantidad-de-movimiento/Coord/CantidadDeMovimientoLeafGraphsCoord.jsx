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
import { createCoordGraph } from "../../graphFactories.jsx";


/** Graph identity metadata */
const _graph_meta = {
  pregunta_principal: {
    es: "¿Cómo se relaciona el impulso con la variación del momento lineal del sistema?",
    en: "How is impulse related to the change in the system's linear momentum?",
  },
};


const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const formatNumber = (n, lang = "es", d = 2) => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

function CantidadDeMovimientoLeafGraphsCoordView({
  title,
  lang = "es",
  params,
  sharedParams,
}) {
  const uiLang = lang === "en" ? "en" : "es";
  const t = (es, en) => (uiLang === "en" ? en : es);

  const schema = useMemo(
    () => [
      { key: "m", default: toNum((params ?? sharedParams)?.m, 2) },
      { key: "v0", default: toNum((params ?? sharedParams)?.v0 ?? (params ?? sharedParams)?.v, 4) },
      { key: "F", default: toNum((params ?? sharedParams)?.F, 1.2) },
      { key: "tMax", default: toNum((params ?? sharedParams)?.tMax, 6) },
    ],
    [params, sharedParams]
  );

  const exp = useExperimentParams({ params: params ?? sharedParams, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m = Math.max(0.1, toNum(ep.m, 2));
  const v0 = toNum(ep.v0, 4);
  const force = toNum(ep.F, 1.2);
  const tMax = Math.max(1, toNum(ep.tMax, 6));
  const a = force / m;

  const data = useMemo(() => {
    const rows = [];
    const n = 160;
    for (let i = 0; i <= n; i += 1) {
      const tau = (i / n) * tMax;
      const v = v0 + a * tau;
      const p = m * v;
      const J = force * tau;
      rows.push({ t: tau, p, J, v });
    }
    return rows;
  }, [a, force, m, tMax, v0]);

  const p0 = m * v0;
  const pF = m * (v0 + a * tMax);
  const jF = force * tMax;

  const setValue = (key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {title || t("Cantidad de movimiento (Coord)", "Momentum (Coord)")}
        </div>
        <div className="muted" style={{ marginTop: 6, display: "grid", gap: 4 }}>
          <MathInline latex={"\\vec p = m\\vec v"} />
          <MathInline latex={"\\vec J = \\Delta \\vec p"} />
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: 12,
            padding: "10px 12px",
            borderRadius: 12,
            border: "1px solid rgba(59,130,246,0.22)",
            background: "rgba(59,130,246,0.08)",
          }}
        >
          <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>m (kg)</span>
            <input
              className="form-control"
              style={{ width: 90 }}
              value={m}
              onChange={(e) => setValue("m", e.target.value)}
            />
          </label>
          <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>v0 (m/s)</span>
            <input
              className="form-control"
              style={{ width: 90 }}
              value={v0}
              onChange={(e) => setValue("v0", e.target.value)}
            />
          </label>
          <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>F (N)</span>
            <input
              className="form-control"
              style={{ width: 90 }}
              value={force}
              onChange={(e) => setValue("F", e.target.value)}
            />
          </label>
          <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>tMax (s)</span>
            <input
              className="form-control"
              style={{ width: 90 }}
              value={tMax}
              onChange={(e) => setValue("tMax", e.target.value)}
            />
          </label>
        </div>

        <div className="v2-panel" style={{ marginTop: 12, padding: 12, fontSize: 13, opacity: 0.92 }}>
          <div>
            {t("Momento inicial", "Initial momentum")}:{" "}
            <b>{formatNumber(p0, uiLang, 3)}</b>
          </div>
          <div>
            {t("Momento final", "Final momentum")}:{" "}
            <b>{formatNumber(pF, uiLang, 3)}</b>
          </div>
          <div>
            {t("Impulso acumulado", "Accumulated impulse")}:{" "}
            <b>{formatNumber(jF, uiLang, 3)}</b>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {t("Evolución temporal", "Time evolution")}
        </div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="t"
                tickFormatter={(n) => formatNumber(n, uiLang, 1)}
                label={{ value: t("t (s)", "t (s)"), position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(n) => formatNumber(n, uiLang, 1)}
                label={{ value: t("Magnitud", "Magnitude"), angle: -90, position: "insideLeft" }}
              />
              <Tooltip
                formatter={(value, name) => [
                  formatNumber(Number(value), uiLang, 3),
                  name,
                ]}
              />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.28)" />
              <Line type="monotone" dataKey="p" name={t("p", "p")} stroke="#60a5fa" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="J" name={t("J", "J")} stroke="#34d399" strokeWidth={2.6} dot={false} />
              <Line type="monotone" dataKey="v" name={t("v", "v")} stroke="#f59e0b" strokeWidth={2.2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const CantidadDeMovimientoLeafGraphsCoord = createCoordGraph({
  Component: CantidadDeMovimientoLeafGraphsCoordView,
  displayName: "CantidadDeMovimientoLeafGraphsCoord",
});

CantidadDeMovimientoLeafGraphsCoord.graphContract = CantidadDeMovimientoLeafGraphsCoordView.graphContract;
CantidadDeMovimientoLeafGraphsCoord.graph_identity = CantidadDeMovimientoLeafGraphsCoordView.graph_identity;
CantidadDeMovimientoLeafGraphsCoord.axes = CantidadDeMovimientoLeafGraphsCoordView.axes;
CantidadDeMovimientoLeafGraphsCoord.formula = CantidadDeMovimientoLeafGraphsCoordView.formula;
CantidadDeMovimientoLeafGraphsCoord.profile = CantidadDeMovimientoLeafGraphsCoordView.profile;

export default CantidadDeMovimientoLeafGraphsCoord;
