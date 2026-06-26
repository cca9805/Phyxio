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


const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const fmt = (n, lang = "es", d = 2) => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toFixed(d);
  return lang === "en" ? text : text.replace(".", ",");
};

function CinematicaLeafGraphsCoordView({
  title,
  lang = "es",
  params,
}) {
  const uiLang = lang === "en" ? "en" : "es";
  const t = (es, en) => (uiLang === "en" ? en : es);

  const schema = useMemo(
    () => [
      { key: "x0", default: toNum(params?.x0, 0) },
      { key: "v0", default: toNum(params?.v0 ?? params?.v, 4) },
      { key: "a", default: toNum(params?.a ?? params?.alpha, 0.8) },
      { key: "tMax", default: toNum(params?.tMax, 8) },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const x0 = toNum(ep.x0, 0);
  const v0 = toNum(ep.v0, 4);
  const a = toNum(ep.a, 0.8);
  const tMax = Math.max(1, toNum(ep.tMax, 8));

  const data = useMemo(() => {
    const rows = [];
    const n = 160;
    for (let i = 0; i <= n; i += 1) {
      const tau = (i / n) * tMax;
      rows.push({
        t: tau,
        x: x0 + v0 * tau + 0.5 * a * tau * tau,
        v: v0 + a * tau,
        a,
      });
    }
    return rows;
  }, [a, tMax, v0, x0]);

  const setValue = (key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  };

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {title || t("Cinemática (Coord)", "Kinematics (Coord)")}
        </div>
        <div className="muted" style={{ marginTop: 6, display: "grid", gap: 4 }}>
          <MathInline latex={"x(t)=x_0+v_0t+\\tfrac12at^2"} />
          <MathInline latex={"v(t)=v_0+at"} />
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
            <span style={{ fontSize: 13, opacity: 0.85 }}>x0 (m)</span>
            <input className="form-control" style={{ width: 90 }} value={x0} onChange={(e) => setValue("x0", e.target.value)} />
          </label>
          <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>v0 (m/s)</span>
            <input className="form-control" style={{ width: 90 }} value={v0} onChange={(e) => setValue("v0", e.target.value)} />
          </label>
          <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>a (m/s²)</span>
            <input className="form-control" style={{ width: 90 }} value={a} onChange={(e) => setValue("a", e.target.value)} />
          </label>
          <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>tMax (s)</span>
            <input className="form-control" style={{ width: 90 }} value={tMax} onChange={(e) => setValue("tMax", e.target.value)} />
          </label>
        </div>

        <div className="v2-panel" style={{ marginTop: 12, padding: 12, fontSize: 13, opacity: 0.92 }}>
          <div>{t("Posición final", "Final position")}: <b>{fmt(data[data.length - 1]?.x, uiLang, 3)}</b></div>
          <div>{t("Velocidad final", "Final velocity")}: <b>{fmt(data[data.length - 1]?.v, uiLang, 3)}</b></div>
          <div>{t("Aceleración", "Acceleration")}: <b>{fmt(a, uiLang, 3)}</b></div>
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
                tickFormatter={(n) => fmt(n, uiLang, 1)}
                label={{ value: t("t (s)", "t (s)"), position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(n) => fmt(n, uiLang, 1)}
                label={{ value: t("Magnitud", "Magnitude"), angle: -90, position: "insideLeft" }}
              />
              <Tooltip formatter={(value, name) => [fmt(Number(value), uiLang, 3), name]} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.28)" />
              <Line type="monotone" dataKey="x" name={t("x", "x")} stroke="#60a5fa" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="v" name={t("v", "v")} stroke="#34d399" strokeWidth={2.6} dot={false} />
              <Line type="monotone" dataKey="a" name={t("a", "a")} stroke="#f59e0b" strokeWidth={2.2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

const CinematicaLeafGraphsCoord = createCoordGraph({
  Component: CinematicaLeafGraphsCoordView,
  displayName: "CinematicaLeafGraphsCoord",
});

CinematicaLeafGraphsCoord.graphContract = CinematicaLeafGraphsCoordView.graphContract;
CinematicaLeafGraphsCoord.graph_identity = CinematicaLeafGraphsCoordView.graph_identity;
CinematicaLeafGraphsCoord.axes = CinematicaLeafGraphsCoordView.axes;
CinematicaLeafGraphsCoord.formula = CinematicaLeafGraphsCoordView.formula;
CinematicaLeafGraphsCoord.profile = CinematicaLeafGraphsCoordView.profile;

export default CinematicaLeafGraphsCoord;
