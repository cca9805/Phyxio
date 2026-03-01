import { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

export default function CentroDeMasasMecGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "m1", default: toNum(params?.m1, 2) },
      { key: "m2", default: toNum(params?.m2, 5) },
      { key: "x1", default: toNum(params?.x1, -3) },
      { key: "x2", default: toNum(params?.x2, 2) },
      { key: "showCM", default: params?.showCM ?? true },
      { key: "showGuides", default: params?.showGuides ?? true },
      { key: "showDistances", default: params?.showDistances ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const m1 = Math.max(0.001, toNum(ep.m1, 2));
  const m2 = Math.max(0.001, toNum(ep.m2, 5));
  const x1 = toNum(ep.x1, -3);
  const x2 = toNum(ep.x2, 2);
  const showCM = !!ep.showCM;
  const showGuides = !!ep.showGuides;
  const showDistances = !!ep.showDistances;

  const M = m1 + m2;
  const xcm = (m1 * x1 + m2 * x2) / M;

  const mapX = (x) => 420 + x * 65;

  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

  const d1 = Math.abs(xcm - x1);
  const d2 = Math.abs(x2 - xcm);

  return (
    <SvgFrame
      title={title || "Centro de masas (SVG)"}
      subtitle="Posicion del centro de masas en sistema discreto"
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
                <div style={{ fontSize: 12, opacity: 0.75 }}>Centro de masas 1D</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"x_{cm}=\\frac{m_1x_1+m_2x_2}{m_1+m_2}"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Masa total</div>
                <div style={{ marginTop: 2, color: "#86efac" }}>
                  <MathInline latex={"M=m_1+m_2"} />
                </div>
              </div>
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
                ["x1", x1],
                ["x2", x2],
              ].map(([k, val]) => (
                <div key={k} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{k}</div>
                  <input className="form-control" style={{ width: 110 }} value={val} onChange={(e) => setValue(k, e.target.value)} />
                </div>
              ))}
            </div>

            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showCM} onChange={(e) => setValue("showCM", e.target.checked)} />
                <span className="v2-toggle-label">Marcar CM</span>
              </label>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showGuides} onChange={(e) => setValue("showGuides", e.target.checked)} />
                <span className="v2-toggle-label">Guia vertical</span>
              </label>
              <label className="v2-toggle">
                <input className="v2-toggle-input" type="checkbox" checked={showDistances} onChange={(e) => setValue("showDistances", e.target.checked)} />
                <span className="v2-toggle-label">Distancias</span>
              </label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              M = <b style={{ color: "#93c5fd" }}>{fmt(M, 4)}</b>
              <br />
              x_cm = <b style={{ color: "#f59e0b" }}>{fmt(xcm, 4)}</b> m
              <br />
              Distancia a m1: <b style={{ color: "#60a5fa" }}>{fmt(d1, 4)}</b> m
              <br />
              Distancia a m2: <b style={{ color: "#34d399" }}>{fmt(d2, 4)}</b> m
            </div>
          </div>
        </div>
      }
      viewBox="0 0 840 380"
      svgHeight={360}
    >
      <defs>
        <linearGradient id="bgCM" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="840" height="380" fill="url(#bgCM)" />
      <line x1="50" y1="220" x2="790" y2="220" stroke="rgba(15,23,42,0.30)" strokeWidth="4" />

      <circle cx={mapX(x1)} cy={180} r="20" fill="rgba(96,165,250,0.35)" stroke="rgba(96,165,250,0.95)" />
      <text x={mapX(x1)} y={185} textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">m1</text>

      <circle cx={mapX(x2)} cy={180} r="22" fill="rgba(52,211,153,0.33)" stroke="rgba(52,211,153,0.95)" />
      <text x={mapX(x2)} y={185} textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">m2</text>

      {showGuides ? <line x1={mapX(xcm)} y1={95} x2={mapX(xcm)} y2={220} stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 5" /> : null}
      {showCM ? <circle cx={mapX(xcm)} cy={95} r="8" fill="#f59e0b" /> : null}
      {showCM ? <text x={mapX(xcm) + 10} y={95} fill="#92400e" fontSize="13" fontWeight="900">CM</text> : null}

      {showDistances ? (
        <>
          <line x1={mapX(x1)} y1={260} x2={mapX(xcm)} y2={260} stroke="#60a5fa" strokeWidth="2" strokeDasharray="5 4" />
          <text x={(mapX(x1) + mapX(xcm)) / 2} y={276} textAnchor="middle" fill="#1e3a8a" fontSize="12" fontWeight="900">d1={fmt(d1, 2)}</text>
          <line x1={mapX(xcm)} y1={292} x2={mapX(x2)} y2={292} stroke="#34d399" strokeWidth="2" strokeDasharray="5 4" />
          <text x={(mapX(xcm) + mapX(x2)) / 2} y={308} textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="900">d2={fmt(d2, 2)}</text>
        </>
      ) : null}
    </SvgFrame>
  );
}
