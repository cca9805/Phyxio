import { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function Arrow({ x1, y1, x2, y2, color, label }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const s = 10;
  const p1x = x2 - ux * s - uy * (s * 0.55);
  const p1y = y2 - uy * s + ux * (s * 0.55);
  const p2x = x2 - ux * s + uy * (s * 0.55);
  const p2y = y2 - uy * s - ux * (s * 0.55);
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      {label ? (
        <text x={x2 + 6} y={y2 - 8} fill={color} fontSize="12" fontWeight="900">
          {label}
        </text>
      ) : null}
    </g>
  );
}

export default function CollisionGraphsDclBase({ title, params, type = "elastic" }) {
  const schema = useMemo(
    () => [
      { key: "m1", default: toNum(params?.m1, 2) },
      { key: "m2", default: toNum(params?.m2, 3) },
      { key: "v1i", default: toNum(params?.v1i, 4) },
      { key: "v2i", default: toNum(params?.v2i, -1) },
      { key: "e", default: toNum(params?.e, type === "elastic" ? 1 : type === "inelastic" ? 0.5 : 0) },
    ],
    [params, type]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m1 = Math.max(0.001, toNum(ep.m1, 2));
  const m2 = Math.max(0.001, toNum(ep.m2, 3));
  const v1i = toNum(ep.v1i, 4);
  const v2i = toNum(ep.v2i, -1);
  const e = type === "tot" ? 0 : Math.max(0, Math.min(1, toNum(ep.e, 0.5)));

  let v1f = v1i;
  let v2f = v2i;
  if (type === "tot") {
    const vf = (m1 * v1i + m2 * v2i) / (m1 + m2);
    v1f = vf;
    v2f = vf;
  } else {
    v1f = (m1 * v1i + m2 * v2i - m2 * e * (v1i - v2i)) / (m1 + m2);
    v2f = (m1 * v1i + m2 * v2i + m1 * e * (v1i - v2i)) / (m1 + m2);
  }

  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

  const restitution = Math.abs(v2f - v1f) / Math.max(1e-9, Math.abs(v1i - v2i));
  const pI = m1 * v1i + m2 * v2i;
  const pF = m1 * v1f + m2 * v2f;

  const scale = 16;
  const v1iL = Math.max(-120, Math.min(120, v1i * scale));
  const v2iL = Math.max(-120, Math.min(120, v2i * scale));
  const v1fL = Math.max(-120, Math.min(120, v1f * scale));
  const v2fL = Math.max(-120, Math.min(120, v2f * scale));

  const subtitle =
    type === "elastic"
      ? "Colision elastica: se conserva p y K"
      : type === "inelastic"
        ? "Colision inelastica: se conserva p, no K"
        : "Colision totalmente inelastica: cuerpos unidos";

  return (
    <SvgFrame
      title={title || "Colisiones (DCL)"}
      subtitle={subtitle}
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
        <>
          <button
            type="button"
            onClick={exp.startExperiment}
            style={{
              padding: "10px 14px",
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
              padding: "10px 14px",
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
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACIONES</div>
            <div style={{ marginTop: 10, display: "grid", gap: 2 }}>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Conservacion del momento</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"m_1v_{1i}+m_2v_{2i}=m_1v_{1f}+m_2v_{2f}"} />
                </div>
              </div>
              {type !== "tot" ? (
                <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                  <div style={{ fontSize: 12, opacity: 0.75 }}>Coeficiente de restitucion</div>
                  <div style={{ marginTop: 2, color: "#86efac" }}>
                    <MathInline latex={"e=\\frac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}"} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {[
                ["m1", m1],
                ["m2", m2],
                ["v1i", v1i],
                ["v2i", v2i],
              ].map(([k, val]) => (
                <div key={k} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{k}</div>
                  <input className="form-control" style={{ width: 110 }} value={val} onChange={(e) => setValue(k, e.target.value)} />
                </div>
              ))}
              {type !== "tot" ? (
                <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>e</div>
                  <input className="form-control" style={{ width: 110 }} value={e} onChange={(e2) => setValue("e", e2.target.value)} />
                </div>
              ) : null}
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              p_i = <b style={{ color: "#93c5fd" }}>{fmt(pI, 4)}</b>
              <br />
              p_f = <b style={{ color: "#93c5fd" }}>{fmt(pF, 4)}</b>
              <br />
              v1f = <b style={{ color: "#60a5fa" }}>{fmt(v1f, 4)}</b>
              <br />
              v2f = <b style={{ color: "#34d399" }}>{fmt(v2f, 4)}</b>
              <br />
              {type !== "tot" ? (
                <>
                  e_calc = <b style={{ color: "#f59e0b" }}>{fmt(restitution, 4)}</b>
                </>
              ) : (
                <>
                  e = <b style={{ color: "#f59e0b" }}>0</b>
                </>
              )}
            </div>
          </div>
        </div>
      }
      viewBox="0 0 840 360"
      svgHeight={360}
    >
      <defs>
        <linearGradient id="bgColDcl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="840" height="360" fill="url(#bgColDcl)" />
      <line x1="45" y1="178" x2="795" y2="178" stroke="rgba(15,23,42,0.26)" strokeWidth="5" />

      <text x="100" y="42" fill="#0f172a" fontSize="14" fontWeight="900">Inicial</text>
      <text x="510" y="42" fill="#0f172a" fontSize="14" fontWeight="900">Final</text>

      <rect x="120" y="130" width="70" height="46" rx="9" fill="rgba(96,165,250,0.30)" stroke="rgba(96,165,250,0.95)" />
      <text x="155" y="158" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">m1</text>
      <rect x="300" y="130" width="80" height="46" rx="9" fill="rgba(52,211,153,0.30)" stroke="rgba(52,211,153,0.95)" />
      <text x="340" y="158" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">m2</text>

      <Arrow x1={155} y1={124} x2={155 + v1iL} y2={124} color="#60a5fa" label={`v1i=${fmt(v1i, 2)}`} />
      <Arrow x1={340} y1={124} x2={340 + v2iL} y2={124} color="#34d399" label={`v2i=${fmt(v2i, 2)}`} />

      {type === "tot" ? (
        <rect x="560" y="232" width="200" height="46" rx="9" fill="rgba(129,140,248,0.30)" stroke="rgba(99,102,241,0.95)" />
      ) : (
        <>
          <rect x="520" y="232" width="70" height="46" rx="9" fill="rgba(96,165,250,0.30)" stroke="rgba(96,165,250,0.95)" />
          <rect x="700" y="232" width="80" height="46" rx="9" fill="rgba(52,211,153,0.30)" stroke="rgba(52,211,153,0.95)" />
        </>
      )}

      {type === "tot" ? (
        <text x="660" y="260" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">m1 + m2</text>
      ) : (
        <>
          <text x="555" y="260" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">m1</text>
          <text x="740" y="260" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">m2</text>
        </>
      )}

      <Arrow x1={555} y1={226} x2={555 + v1fL} y2={226} color="#60a5fa" label={`v1f=${fmt(v1f, 2)}`} />
      <Arrow x1={740} y1={226} x2={740 + v2fL} y2={226} color="#34d399" label={`v2f=${fmt(v2f, 2)}`} />
    </SvgFrame>
  );
}
