import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ReferenceDot,
  Area,
} from "recharts";
import MathInline from "@/v2/components/shared/MathInline";
import { createCoordGraph } from "../../graphFactories.jsx";


const toNum = (value, fallback = 0) => {
  const parsed = typeof value === "number" ? value : Number(String(value ?? "").replace(",", "."));
  return Number.isFinite(parsed) ? parsed : fallback;
};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const fmt = (value, lang = "es", digits = 3) => {
  if (!Number.isFinite(value)) return "-";
  const text = Number(value).toFixed(digits);
  return lang === "en" ? text : text.replace(".", ",");
};

const panelStyle = {
  padding: 12,
  borderRadius: 12,
  background: "rgba(0,0,0,0.24)",
};

const scenarioPillStyle = (active) => ({
  padding: "8px 10px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.14)",
  background: active ? "rgba(59,130,246,0.25)" : "rgba(0,0,0,0.3)",
  color: "rgba(255,255,255,0.92)",
  fontWeight: 800,
  cursor: "default",
});

function NumberField({ label, value, onChange, width = 92, readOnly = false }) {
  return (
    <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <span style={{ fontSize: 13, opacity: 0.86 }}>{label}</span>
      <input
        className="form-control"
        style={{ width }}
        value={value}
        readOnly={readOnly}
        disabled={readOnly}
        onChange={onChange ? (event) => onChange(event.target.value) : undefined}
      />
    </label>
  );
}

function resolveScenario(leafRelPath = "", title = "") {
  const source = `${leafRelPath} ${title}`.toLowerCase();
  if (source.includes("movimiento-del-centro-de-masas")) return "motion";
  if (source.includes("marco-del-centro-de-masas")) return "frame";
  if (source.includes("cuerpos-extendidos")) return "extended";
  if (source.includes("sistemas-discretos")) return "discrete";
  return "definition";
}

function DefinitionOrDiscreteView({ title, lang, params, variant }) {
  const isEs = lang !== "en";
  const m1 = clamp(toNum(params?.m1, 2), 0.5, 10);
  const m2 = clamp(toNum(params?.m2, 6), 0.5, 10);
  const x1 = clamp(toNum(params?.x1, -1), -4, 4);
  const x2 = clamp(toNum(params?.x2, 3), -4, 4);
  const M = m1 + m2;
  const xcm = (m1 * x1 + m2 * x2) / M;
  const massRatio = m2 / m1;

  const data = useMemo(() => {
    const rows = [];
    for (let i = 0; i <= 60; i += 1) {
      const currentM2 = 0.5 + (9.5 * i) / 60;
      rows.push({
        m2: currentM2,
        xcm: (m1 * x1 + currentM2 * x2) / (m1 + currentM2),
      });
    }
    return rows;
  }, [m1, x1, x2]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title}</div>
        <div className="muted" style={{ marginTop: 6, display: "grid", gap: 4 }}>
          <MathInline latex={"x_{cm}=\\frac{m_1x_1+m_2x_2}{m_1+m_2}"} />
          <div>
            {isEs
              ? variant === "definition"
                ? "El centro de masas no es un promedio geométrico: cada posición pesa según su masa."
                : "En un sistema discreto el centro de masas siempre cae entre las masas puntuales si ambas son positivas."
              : variant === "definition"
                ? "The center of mass is not a geometric average: each position is weighted by its mass."
                : "In a discrete system the center of mass lies between the point masses when both are positive."}
          </div>
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
          <NumberField label="m1 (kg)" value={m1} readOnly />
          <NumberField label="m2 (kg)" value={m2} readOnly />
          <NumberField label="x1 (m)" value={x1} readOnly />
          <NumberField label="x2 (m)" value={x2} readOnly />
        </div>

        <div className="v2-grid-2" style={{ gap: 12, marginTop: 12 }}>
          <div className="v2-panel" style={panelStyle}>
            <div style={{ fontSize: 13, opacity: 0.72 }}>{isEs ? "Lectura instantánea" : "Instant reading"}</div>
            <div style={{ marginTop: 8 }}>{isEs ? "Masa total" : "Total mass"}: <strong>{fmt(M, lang, 2)} kg</strong></div>
            <div>{isEs ? "Centro de masas" : "Center of mass"}: <strong style={{ color: "#34d399" }}>{fmt(xcm, lang, 3)} m</strong></div>
            <div>{isEs ? "Razón m2/m1" : "m2/m1 ratio"}: <strong>{fmt(massRatio, lang, 3)}</strong></div>
          </div>
          <div className="v2-panel" style={{ ...panelStyle, background: "rgba(16,185,129,0.10)" }}>
            <div style={{ fontSize: 13, opacity: 0.72 }}>{isEs ? "Interpretación" : "Interpretation"}</div>
            <div style={{ marginTop: 8 }}>
              {isEs
                ? `Como m2 ${m2 >= m1 ? "domina" : "no domina"}, x_cm queda ${xcm >= (x1 + x2) / 2 ? "desplazado hacia x2" : "desplazado hacia x1"}.`
                : `Since m2 ${m2 >= m1 ? "dominates" : "does not dominate"}, x_cm is ${xcm >= (x1 + x2) / 2 ? "shifted toward x2" : "shifted toward x1"}.`}
            </div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">
          {isEs ? "Barrido de x_cm al variar m2" : "x_cm sweep while varying m2"}
        </div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis
                dataKey="m2"
                tickFormatter={(value) => fmt(value, lang, 1)}
                label={{ value: "m2 (kg)", position: "insideBottomRight", offset: -5 }}
              />
              <YAxis
                tickFormatter={(value) => fmt(value, lang, 2)}
                label={{ value: "x_cm (m)", angle: -90, position: "insideLeft" }}
              />
              <Tooltip formatter={(value) => [fmt(Number(value), lang, 3), "x_cm"]} />
              <ReferenceLine y={x1} stroke="rgba(96,165,250,0.32)" strokeDasharray="5 4" />
              <ReferenceLine y={x2} stroke="rgba(248,113,113,0.32)" strokeDasharray="5 4" />
              <Line type="monotone" dataKey="xcm" name="x_cm" stroke="#34d399" strokeWidth={3} dot={false} />
              <ReferenceDot x={m2} y={xcm} r={5} fill="#f8fafc" stroke="#34d399" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function MotionView({ title, lang, params }) {
  const isEs = lang !== "en";
  const Fext = clamp(toNum(params?.F_ext ?? params?.Fext, 6), -20, 20);
  const M = clamp(toNum(params?.M, 4), 1, 20);
  const p0 = clamp(toNum(params?.p_tot ?? params?.ptot ?? params?.pTot, 8), -40, 40);
  const a = Fext / M;
  const v0 = p0 / M;
  const tMax = 8;

  const data = useMemo(() => {
    const rows = [];
    for (let i = 0; i <= 120; i += 1) {
      const t = (i / 120) * tMax;
      const v = v0 + a * t;
      const x = v0 * t + 0.5 * a * t * t;
      rows.push({ t, v, x, p: M * v });
    }
    return rows;
  }, [M, a, v0]);

  const finalPoint = data[data.length - 1];

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title}</div>
        <div className="muted" style={{ marginTop: 6, display: "grid", gap: 4 }}>
          <MathInline latex={"a_{cm}=\\frac{F_{ext}}{M},\\qquad p_{tot}=Mv_{cm}"} />
          <div>
            {isEs
              ? "La gráfica Coord complementa el SVG con una lectura temporal: cómo cambian la velocidad, la posición y el momento total del CM."
              : "This Coord graph complements the SVG with a time reading: how CM velocity, position, and total momentum evolve."}
          </div>
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
          <div style={scenarioPillStyle(true)}>F_ext = {fmt(Fext, lang, 1)} N</div>
          <div style={scenarioPillStyle(true)}>M = {fmt(M, lang, 1)} kg</div>
          <div style={scenarioPillStyle(true)}>p_tot(0) = {fmt(p0, lang, 1)} kg·m/s</div>
        </div>

        <div className="v2-grid-3" style={{ gap: 12, marginTop: 12 }}>
          <div className="v2-panel" style={panelStyle}>
            <div style={{ fontSize: 13, opacity: 0.72 }}>{isEs ? "Aceleración" : "Acceleration"}</div>
            <div style={{ marginTop: 8 }}><strong style={{ color: "#fca5a5" }}>{fmt(a, lang, 3)} m/s²</strong></div>
          </div>
          <div className="v2-panel" style={panelStyle}>
            <div style={{ fontSize: 13, opacity: 0.72 }}>{isEs ? "Velocidad final" : "Final speed"}</div>
            <div style={{ marginTop: 8 }}><strong style={{ color: "#93c5fd" }}>{fmt(finalPoint?.v, lang, 3)} m/s</strong></div>
          </div>
          <div className="v2-panel" style={{ ...panelStyle, background: "rgba(16,185,129,0.10)" }}>
            <div style={{ fontSize: 13, opacity: 0.72 }}>{isEs ? "Posición al final del intervalo" : "Position at interval end"}</div>
            <div style={{ marginTop: 8 }}><strong style={{ color: "#34d399" }}>{fmt(finalPoint?.x, lang, 3)} m</strong></div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{isEs ? "Evolución temporal del CM" : "CM time evolution"}</div>
        <div style={{ width: "100%", height: 360, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="t" tickFormatter={(value) => fmt(value, lang, 1)} label={{ value: "t (s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(value) => fmt(value, lang, 1)} label={{ value: isEs ? "Magnitud" : "Magnitude", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value, name) => [fmt(Number(value), lang, 3), name]} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.28)" />
              <Line type="monotone" dataKey="v" name="v_cm" stroke="#60a5fa" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="p" name="p_tot" stroke="#34d399" strokeWidth={2.6} dot={false} />
              <Area type="monotone" dataKey="x" stroke="#f59e0b" fill="rgba(245,158,11,0.18)" strokeWidth={2.4} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function FrameView({ title, lang, params }) {
  const isEs = lang !== "en";
  const m1 = clamp(toNum(params?.m1, 2), 0.5, 10);
  const m2 = clamp(toNum(params?.m2, 3), 0.5, 10);
  const v1 = clamp(toNum(params?.v1, 3), -8, 8);
  const v2 = clamp(toNum(params?.v2, -2), -8, 8);
  const p1 = m1 * v1;
  const p2 = m2 * v2;
  const pTot = p1 + p2;
  const M = m1 + m2;
  const vCM = pTot / M;
  const u1 = v1 - vCM;
  const u2 = v2 - vCM;

  const data = useMemo(() => {
    const rows = [];
    for (let i = 0; i <= 120; i += 1) {
      const U = -8 + (16 * i) / 120;
      rows.push({ U, pPrime: pTot - M * U });
    }
    return rows;
  }, [M, pTot]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{title}</div>
        <div className="muted" style={{ marginTop: 6, display: "grid", gap: 4 }}>
          <MathInline latex={"V_{CM}=\\frac{p_{tot}}{M},\\qquad p'_{tot}=p_{tot}-MU"} />
          <div>
            {isEs
              ? "El marco del centro de masas es el que se mueve con velocidad V_CM y hace que el momento total del sistema sea cero."
              : "The center-of-mass frame moves with speed V_CM and makes the system total momentum vanish."}
          </div>
        </div>

        <div className="v2-grid-2" style={{ gap: 12, marginTop: 12 }}>
          <div className="v2-panel" style={panelStyle}>
            <div>p1 = <strong style={{ color: "#60a5fa" }}>{fmt(p1, lang, 3)} kg·m/s</strong></div>
            <div>p2 = <strong style={{ color: "#f87171" }}>{fmt(p2, lang, 3)} kg·m/s</strong></div>
            <div>p_tot = <strong style={{ color: "#34d399" }}>{fmt(pTot, lang, 3)} kg·m/s</strong></div>
          </div>
          <div className="v2-panel" style={{ ...panelStyle, background: "rgba(16,185,129,0.10)" }}>
            <div>V_CM = <strong>{fmt(vCM, lang, 3)} m/s</strong></div>
            <div>{isEs ? "Velocidades en el marco CM" : "Speeds in the CM frame"}</div>
            <div>u1 = <strong>{fmt(u1, lang, 3)} m/s</strong></div>
            <div>u2 = <strong>{fmt(u2, lang, 3)} m/s</strong></div>
          </div>
        </div>
      </div>

      <div className="v2-card" style={{ padding: 12 }}>
        <div className="v2-card-title">{isEs ? "Momento total medido desde un marco U" : "Total momentum seen from a frame U"}</div>
        <div style={{ width: "100%", height: 340, marginTop: 10 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 10, right: 18, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="U" tickFormatter={(value) => fmt(value, lang, 1)} label={{ value: "U (m/s)", position: "insideBottomRight", offset: -5 }} />
              <YAxis tickFormatter={(value) => fmt(value, lang, 1)} label={{ value: "p'_tot", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value) => [fmt(Number(value), lang, 3), "p'_tot"]} />
              <ReferenceLine y={0} stroke="rgba(255,255,255,0.3)" />
              <ReferenceLine x={vCM} stroke="rgba(52,211,153,0.38)" strokeDasharray="5 4" />
              <Line type="monotone" dataKey="pPrime" name="p'_tot" stroke="#34d399" strokeWidth={3} dot={false} />
              <ReferenceDot x={vCM} y={0} r={6} fill="#f8fafc" stroke="#34d399" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function CentroDeMasasLeafGraphsCoordView({
  title,
  lang = "es",
  params,
  sharedParams,
  leafRelPath,
}) {
  const resolvedLang = lang === "en" ? "en" : "es";
  const activeParams = params ?? sharedParams ?? {};
  const scenario = resolveScenario(leafRelPath, title);

  if (scenario === "motion") {
    return <MotionView title={title} lang={resolvedLang} params={activeParams} />;
  }

  if (scenario === "frame") {
    return <FrameView title={title} lang={resolvedLang} params={activeParams} />;
  }

  return (
    <DefinitionOrDiscreteView
      title={title}
      lang={resolvedLang}
      params={activeParams}
      variant={scenario === "discrete" ? "discrete" : "definition"}
    />
  );
}

const CentroDeMasasLeafGraphsCoord = createCoordGraph({
  Component: CentroDeMasasLeafGraphsCoordView,
  displayName: "CentroDeMasasLeafGraphsCoord",
});

CentroDeMasasLeafGraphsCoord.graphContract = CentroDeMasasLeafGraphsCoordView.graphContract;
CentroDeMasasLeafGraphsCoord.graph_identity = CentroDeMasasLeafGraphsCoordView.graph_identity;
CentroDeMasasLeafGraphsCoord.axes = CentroDeMasasLeafGraphsCoordView.axes;
CentroDeMasasLeafGraphsCoord.formula = CentroDeMasasLeafGraphsCoordView.formula;
CentroDeMasasLeafGraphsCoord.profile = CentroDeMasasLeafGraphsCoordView.profile;

export default CentroDeMasasLeafGraphsCoord;
