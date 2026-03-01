import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 3) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function Arrow({ x1, y1, x2, y2, color, label }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const size = 10;
  const p1x = x2 - ux * size - uy * (size * 0.55);
  const p1y = y2 - uy * size + ux * (size * 0.55);
  const p2x = x2 - ux * size + uy * (size * 0.55);
  const p2y = y2 - uy * size - ux * (size * 0.55);

  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      {label ? (
        <text x={x2 + 8} y={y2 - 8} fontSize="12" fontWeight="900" fill={color}>
          {label}
        </text>
      ) : null}
    </g>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <label className="v2-toggle">
      <input className="v2-toggle-input" type="checkbox" checked={checked} onChange={onChange} />
      <span className="v2-toggle-label">{label}</span>
    </label>
  );
}

export default function EnergiaPotencialElasticaGraphsDcl({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "k", default: toNum(params?.k, 200) },
      { key: "x", default: toNum(params?.x, 0.08) },
      { key: "m", default: toNum(params?.m, 1.2) },
      { key: "g", default: toNum(params?.g, 9.81) },
      { key: "showFe", default: params?.showFe ?? true },
      { key: "showN", default: params?.showN ?? true },
      { key: "showP", default: params?.showP ?? true },
      { key: "showX", default: params?.showX ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const k = Math.max(0.001, toNum(ep.k, 200));
  const x = Math.abs(toNum(ep.x, 0.08));
  const m = Math.max(0.001, toNum(ep.m, 1.2));
  const g = clamp(Math.abs(toNum(ep.g, 9.81)), 0.1, 40);

  const showFe = !!ep.showFe;
  const showN = !!ep.showN;
  const showP = !!ep.showP;
  const showX = !!ep.showX;

  const Fe = k * x;
  const P = m * g;
  const Ue = 0.5 * k * x * x;

  const setValue = useCallback(
    (kKey, vNext) => {
      exp.startExperiment();
      exp.setValue(kKey, vNext);
    },
    [exp]
  );

  const centerX = 330;
  const centerY = 230;
  const springStartX = 90;
  const blockW = 110;
  const blockH = 62;

  const feLen = clamp(20 + Fe * 0.6, 20, 180);
  const pLen = clamp(20 + P * 1.1, 20, 180);
  const nLen = pLen;
  const xLen = clamp(25 + x * 350, 25, 170);

  return (
    <SvgFrame
      title={title || "Energia potencial elastica (DCL)"}
      subtitle="Masa-resorte con fuerzas y energia potencial"
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
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Ley de Hooke</div>
                <div style={{ marginTop: 2, color: "#93c5fd" }}>
                  <MathInline latex={"F_e=kx"} />
                </div>
              </div>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0,0,0,1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Energia potencial elastica</div>
                <div style={{ marginTop: 2, color: "#86efac" }}>
                  <MathInline latex={"U_e=\\frac{1}{2}kx^2"} />
                </div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {[
                ["k", k],
                ["x", x],
                ["m", m],
                ["g", g],
              ].map(([kKey, val]) => (
                <div key={kKey} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{kKey}</div>
                  <input className="form-control" style={{ width: 110 }} value={val} onChange={(e) => setValue(kKey, e.target.value)} />
                </div>
              ))}
            </div>

            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <Toggle checked={showFe} onChange={(e) => setValue("showFe", e.target.checked)} label="Fuerza elastica" />
              <Toggle checked={showN} onChange={(e) => setValue("showN", e.target.checked)} label="Normal" />
              <Toggle checked={showP} onChange={(e) => setValue("showP", e.target.checked)} label="Peso" />
              <Toggle checked={showX} onChange={(e) => setValue("showX", e.target.checked)} label="Deformacion" />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              Fe = <b style={{ color: "#f97316" }}>{fmt(Fe, 3)}</b> N
              <br />
              Ue = <b style={{ color: "#60a5fa" }}>{fmt(Ue, 3)}</b> J
              <br />
              P = <b style={{ color: "#ef4444" }}>{fmt(P, 3)}</b> N
              <br />
              N = <b style={{ color: "#22c55e" }}>{fmt(P, 3)}</b> N
            </div>
          </div>
        </div>
      }
      viewBox="0 0 760 420"
      svgHeight={390}
    >
      <rect x="0" y="0" width="760" height="420" fill="rgba(2,6,23,0.25)" />

      <line x1="40" y1="300" x2="720" y2="300" stroke="rgba(255,255,255,0.35)" strokeWidth="4" />
      <rect x="46" y="130" width="10" height="170" fill="rgba(148,163,184,0.9)" />

      <polyline
        points={`${springStartX},230 ${springStartX + 22},230 ${springStartX + 34},216 ${springStartX + 46},244 ${springStartX + 58},216 ${springStartX + 70},244 ${springStartX + 82},216 ${springStartX + 94},244 ${springStartX + 106},230 ${centerX - blockW / 2},230`}
        fill="none"
        stroke="#f59e0b"
        strokeWidth="4"
      />

      <rect x={centerX - blockW / 2} y={centerY - blockH / 2} width={blockW} height={blockH} rx="10" fill="rgba(96,165,250,0.25)" stroke="rgba(96,165,250,0.95)" strokeWidth="3" />
      <text x={centerX} y={centerY + 6} textAnchor="middle" fill="currentColor" fontSize="16">m</text>

      {showFe ? <Arrow x1={centerX - blockW / 2} y1={centerY} x2={centerX - blockW / 2 - feLen} y2={centerY} color="#f97316" label={`Fe=${fmt(Fe, 2)} N`} /> : null}
      {showP ? <Arrow x1={centerX} y1={centerY + blockH / 2} x2={centerX} y2={centerY + blockH / 2 + pLen} color="#ef4444" label={`P=${fmt(P, 2)} N`} /> : null}
      {showN ? <Arrow x1={centerX} y1={centerY + blockH / 2} x2={centerX} y2={centerY + blockH / 2 - nLen} color="#22c55e" label={`N=${fmt(P, 2)} N`} /> : null}

      {showX ? (
        <g>
          <line x1={centerX - blockW / 2 - xLen} y1={338} x2={centerX - blockW / 2} y2={338} stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeDasharray="6 5" />
          <text x={centerX - blockW / 2 - xLen / 2} y={356} textAnchor="middle" fontSize="13" fill="currentColor">x={fmt(x, 3)} m</text>
        </g>
      ) : null}
    </SvgFrame>
  );
}
