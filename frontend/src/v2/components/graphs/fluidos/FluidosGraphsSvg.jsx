import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import {
  resolveFluidModelForLeaf,
  toNum,
  clamp,
  getFluidParamAliases,
  withFluidDerivedParams,
} from "./fluidModels";

const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function drawPipe(sx, sy, w, h) {
  const yTop = sy + h * 0.32;
  const yBot = sy + h * 0.68;
  const xL = sx;
  const xM1 = sx + w * 0.38;
  const xM2 = sx + w * 0.58;
  const xR = sx + w;
  return {
    top: `M ${xL} ${yTop} L ${xM1} ${yTop} L ${xM2} ${yTop - 25} L ${xR} ${yTop - 25}`,
    bot: `M ${xL} ${yBot} L ${xM1} ${yBot} L ${xM2} ${yBot + 25} L ${xR} ${yBot + 25}`,
  };
}

export default function FluidosGraphsSvg({
  title,
  params,
  leafRelPath,
  formulasDoc,
  magnitudesDoc,
}) {
  const VIEW_W = 840;
  const VIEW_H = 430;
  const Y_SHIFT = 24;

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
  const scenario = resolved.scenario;
  const model = resolved.model;
  const paramsForGraph = useMemo(
    () => withFluidDerivedParams({ scenario, params }),
    [scenario, params]
  );

  const schema = useMemo(() => {
    const base = model.params.map((p) => ({
      key: p.key,
      aliases: getFluidParamAliases(p.key),
      default: toNum(paramsForGraph?.[p.key], p.default),
    }));
    base.push(
      { key: "sample", default: toNum(paramsForGraph?.sample, 0.55) },
      { key: "showY1", default: paramsForGraph?.showY1 ?? true },
      { key: "showY2", default: paramsForGraph?.showY2 ?? true },
      { key: "showSketch", default: paramsForGraph?.showSketch ?? true }
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
  const showSketch = !!ep.showSketch;
  const sample = clamp(toNum(ep.sample, 0.55), 0, 1);
  const idx = Math.round(sample * (built.data.length - 1));
  const point = built.data[idx] || { x: 0, y1: 0, y2: 0 };

  const yMax = Math.max(
    1,
    ...built.data.map((d) => Math.max(Math.abs(d.y1 || 0), Math.abs(d.y2 || 0)))
  );
  const barScale = 160 / yMax;
  const bar1 = Math.abs(point.y1 || 0) * barScale;
  const bar2 = Math.abs(point.y2 || 0) * barScale;

  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

  const pipe = drawPipe(60, 70, 310, 220);

  return (
    <SvgFrame
      title={title || `${model.title} (SVG)`}
      subtitle="Esquema didactico + lectura instantanea del punto seleccionado"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
        <>
          <button type="button" onClick={exp.startExperiment} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
          <button type="button" onClick={exp.resetToCalculator} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>ECUACION</div>
            <div style={{ marginTop: 8, color: "#93c5fd" }}>
              <MathInline latex={model.formula} />
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARAMETROS
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {model.params.map((cfg) => (
                <div key={cfg.key} style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{cfg.label}</div>
                  <input className="form-control" style={{ width: 110 }} value={p[cfg.key]} onChange={(e) => setValue(cfg.key, e.target.value)} />
                </div>
              ))}
              <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>muestra (0-1)</div>
                <input className="form-control" style={{ width: 110 }} value={sample} onChange={(e) => setValue("sample", e.target.value)} />
              </div>
            </div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showY1} onChange={(e) => setValue("showY1", e.target.checked)} /><span className="v2-toggle-label">{built.y1Label}</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showY2} onChange={(e) => setValue("showY2", e.target.checked)} /><span className="v2-toggle-label">{built.y2Label}</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showSketch} onChange={(e) => setValue("showSketch", e.target.checked)} /><span className="v2-toggle-label">esquema</span></label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              {built.xLabel}: <b>{fmt(point.x, 3)}</b>
              <br />
              {built.y1Label}: <b style={{ color: "#60a5fa" }}>{fmt(point.y1, 4)}</b>
              <br />
              {built.y2Label}: <b style={{ color: "#34d399" }}>{fmt(point.y2, 4)}</b>
            </div>
          </div>
        </div>
      }
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      svgHeight={390}
    >
      <defs>
        <linearGradient id="bgFluidosSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#bgFluidosSvg)" />
      <g transform={`translate(0 ${Y_SHIFT})`}>
        <line x1="430" y1="24" x2="430" y2="356" stroke="rgba(15,23,42,0.20)" strokeWidth="2" strokeDasharray="7 8" />

        {showSketch ? (
          <>
            {scenario === "ondas" ? (
              <path
                d={Array.from({ length: 220 }, (_, i) => {
                  const x = 70 + (330 * i) / 219;
                  const y = 190 + 55 * Math.sin((i / 219) * Math.PI * 3.5);
                  return `${i === 0 ? "M" : "L"} ${x} ${y}`;
                }).join(" ")}
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="3"
              />
            ) : scenario === "pascal" ? (
              <>
                <rect x="95" y="110" width="95" height="170" fill="rgba(59,130,246,0.18)" stroke="#1d4ed8" strokeWidth="2.4" />
                <rect x="255" y="70" width="110" height="210" fill="rgba(59,130,246,0.14)" stroke="#1d4ed8" strokeWidth="2.4" />
                <line x1="95" y1="200" x2="365" y2="200" stroke="#2563eb" strokeWidth="5" />
              </>
            ) : scenario === "bernoulli" || scenario === "continuidad" || scenario === "reynolds" ? (
              <>
                <path d={pipe.top} fill="none" stroke="#1d4ed8" strokeWidth="4" />
                <path d={pipe.bot} fill="none" stroke="#1d4ed8" strokeWidth="4" />
                <line x1="95" y1="180" x2="170" y2="180" stroke="#16a34a" strokeWidth="3" />
                <polygon points="170,180 156,172 156,188" fill="#16a34a" />
                <line x1="300" y1="155" x2="360" y2="155" stroke="#16a34a" strokeWidth="3" />
                <polygon points="360,155 346,147 346,163" fill="#16a34a" />
              </>
            ) : (
              <>
                <rect x="90" y="90" width="290" height="210" fill="rgba(30,64,175,0.08)" stroke="#1d4ed8" strokeWidth="2.2" />
                <rect x="130" y="130" width="120" height="120" fill="rgba(37,99,235,0.25)" stroke="#1d4ed8" strokeWidth="2" />
                <line x1="300" y1="250" x2="300" y2="140" stroke="#ea580c" strokeWidth="3" />
                <polygon points="300,140 292,154 308,154" fill="#ea580c" />
              </>
            )}
          </>
        ) : null}

        <text x="70" y="42" fill="#0f172a" fontSize="13" fontWeight="900">Esquema conceptual</text>
        <text x="450" y="42" fill="#0f172a" fontSize="13" fontWeight="900">Lectura numerica en muestra</text>

        <line x1="500" y1="315" x2="780" y2="315" stroke="rgba(30,41,59,0.30)" strokeWidth="2.2" />
        {showY1 ? <rect x="560" y={315 - bar1} width="48" height={bar1} fill="#60a5fa" opacity="0.95" /> : null}
        {showY2 ? <rect x="655" y={315 - bar2} width="48" height={bar2} fill="#34d399" opacity="0.95" /> : null}
        {showY1 ? <text x="584" y="335" fill="#1d4ed8" fontSize="12" fontWeight="900" textAnchor="middle">Y1</text> : null}
        {showY2 ? <text x="679" y="335" fill="#166534" fontSize="12" fontWeight="900" textAnchor="middle">Y2</text> : null}
      </g>
    </SvgFrame>
  );
}
