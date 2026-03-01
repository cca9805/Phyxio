import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

function Slider({ value, min, max, step, onChange }) {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ width: "100%", accentColor: "#6366f1", cursor: "pointer" }}
    />
  );
}

export default function PoleasMaquinasSimplesGraphsSvg(props) {
  const p = props?.params ?? props?.sharedParams ?? {};
  const schema = useMemo(
    () => [
      { key: "R", aliases: ["carga"], default: toNum(p.R ?? p.carga, 600) },
      { key: "n", aliases: ["tramos"], default: toNum(p.n ?? p.tramos, 3) },
      { key: "eta", aliases: ["rendimiento"], default: toNum(p.eta ?? p.rendimiento, 0.85) },
    ],
    [p.R, p.carga, p.n, p.tramos, p.eta, p.rendimiento]
  );
  const exp = useExperimentParams({ params: p, schema, modeDefault: "experiment" });
  const ep = exp.effectiveParams;

  const R = clamp(toNum(ep.R, 600), 1, 200000);
  const n = Math.round(clamp(toNum(ep.n, 3), 1, 6));
  const eta = clamp(toNum(ep.eta, 0.85), 0.2, 1);
  const P = R / (n * eta);
  const VM = n * eta;

  const pulleyR = 18;
  const yTop = 98;
  const yBottom = 212;
  const xStart = 180;
  const xStep = n <= 1 ? 70 : Math.min(70, 360 / n);
  const nodes = useMemo(
    () =>
      Array.from({ length: n + 1 }, (_, i) => ({
        x: xStart + i * xStep,
        y: i % 2 === 0 ? yTop : yBottom,
        idx: i,
      })),
    [n, xStep]
  );
  const loadNode = useMemo(() => {
    let cand = nodes[0];
    for (const nd of nodes) if (nd.y === yBottom) cand = nd;
    return cand;
  }, [nodes]);
  const firstNode = nodes[0];
  const lastNode = nodes[nodes.length - 1];
  const anchor = { x: 120, y: 56 };
  const pullEnd = { x: 650, y: lastNode.y + (lastNode.y === yTop ? 26 : 10) };

  const fmt = (x, d = 3) => (Number.isFinite(x) ? x.toFixed(d).replace(".", ",") : "-");
  const setValue = useCallback((key, value) => {
    exp.startExperiment();
    exp.setValue(key, value);
  }, [exp]);

  return (
    <SvgFrame
      title="Poleas (SVG)"
      subtitle="Reparto de carga por numero de tramos activos"
      badgeLabel="RESULTADO"
      badgeValue={`P = ${fmt(P, 2)} N`}
      controls={
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
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-2">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACIONES</div>
            <div style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
              <MathInline latex={"P=\\frac{R}{n\\eta},\\quad VM=n\\eta"} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.68)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>PARAMETROS</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>R</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(R, 1)} N</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={R} min={1} max={200000} step={1} onChange={(v) => setValue("R", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>n</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{n}</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={n} min={1} max={6} step={1} onChange={(v) => setValue("n", v)} /></div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900 }}>eta</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{fmt(eta, 3)}</div>
                </div>
                <div style={{ marginTop: 8 }}><Slider value={eta} min={0.2} max={1} step={0.01} onChange={(v) => setValue("eta", v)} /></div>
              </div>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.86, lineHeight: 1.45 }}>
              n = <b>{n}</b>
              <br />
              R = <b>{fmt(R, 1)}</b> N
              <br />
              P = <b>{fmt(P, 2)}</b> N
              <br />
              VM = <b>{fmt(VM, 3)}</b>
            </div>
          </div>
        </div>
      }
      viewBox="0 0 700 380"
      svgHeight={360}
    >
      <defs>
        <linearGradient id="loadGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="ropeGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <marker id="arrowP" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 9 3, 0 6" fill="#22c55e" />
        </marker>
        <marker id="arrowR" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 9 3, 0 6" fill="#ef4444" />
        </marker>
      </defs>

      <rect x="0" y="0" width="700" height="380" fill="rgba(2,6,23,0.55)" />
      <text x="26" y="34" fontSize="16" fill="#e2e8f0" fontWeight="700">
        Aparejo de poleas: anclaje, poleas alternadas y tramos de cuerda
      </text>
      <line x1="90" y1="56" x2="610" y2="56" stroke="#64748b" strokeWidth="8" strokeLinecap="round" />

      <circle cx={anchor.x} cy={anchor.y} r="5" fill="#93c5fd" />
      <text x={anchor.x - 26} y={anchor.y - 10} fontSize="11" fill="#cbd5e1">Anclaje</text>

      {nodes.map((nd) => (
        <g key={`pulley-${nd.idx}`}>
          {nd.y === yTop ? <line x1={nd.x} y1={56} x2={nd.x} y2={nd.y - pulleyR} stroke="#94a3b8" strokeWidth="3" /> : null}
          <circle cx={nd.x} cy={nd.y} r={pulleyR} fill="#1e293b" stroke="#94a3b8" strokeWidth="3" />
          <circle cx={nd.x} cy={nd.y} r="4" fill="#cbd5e1" />
        </g>
      ))}

      <line x1={anchor.x} y1={anchor.y} x2={firstNode.x - pulleyR} y2={firstNode.y} stroke="url(#ropeGrad)" strokeWidth="4" />

      {nodes.slice(0, -1).map((nd, i) => {
        const nx = nodes[i + 1];
        const x1 = nd.x + pulleyR;
        const y1 = nd.y;
        const x2 = nx.x - pulleyR;
        const y2 = nx.y;
        return (
          <g key={`segment-${i}`}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#ropeGrad)" strokeWidth="4" />
            <text x={(x1 + x2) / 2 + 4} y={(y1 + y2) / 2 - 8} fontSize="11" fill="#fde68a" fontWeight="700">
              T{i + 1}
            </text>
          </g>
        );
      })}

      <line x1={lastNode.x + pulleyR} y1={lastNode.y} x2={pullEnd.x} y2={pullEnd.y} stroke="url(#ropeGrad)" strokeWidth="4" />
      <line x1={lastNode.x + pulleyR} y1={lastNode.y} x2={pullEnd.x} y2={pullEnd.y} stroke="#22c55e" strokeWidth="3" markerEnd="url(#arrowP)" />
      <text x={pullEnd.x - 58} y={pullEnd.y - 12} fontSize="13" fill="#86efac" fontWeight="700">Tiro P</text>

      <line x1={loadNode.x} y1={loadNode.y + pulleyR} x2={loadNode.x} y2={250} stroke="#94a3b8" strokeWidth="3" />
      <rect x={loadNode.x - 78} y={250} width="156" height="64" rx="8" fill="url(#loadGrad)" stroke="#94a3b8" />
      <text x={loadNode.x} y={288} textAnchor="middle" fontSize="18" fill="#f8fafc" fontWeight="800">Carga R</text>
      <line x1={loadNode.x} y1={314} x2={loadNode.x} y2={352} stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrowR)" />

      <text x="514" y="338" fontSize="11" fill="#cbd5e1">n tramos activos = {n}</text>
    </SvgFrame>
  );
}
