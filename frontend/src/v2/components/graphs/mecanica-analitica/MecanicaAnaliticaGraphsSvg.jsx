import React, { useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import {
  detectAnalyticScenario,
  getAnalyticModel,
  toNum,
  clamp,
} from "./analyticModels";

const fmt = (n, d = 2) => (Number.isFinite(n) ? Number(n).toFixed(d).replace(".", ",") : "-");

function scenarioCaption(s) {
  if (s === "coordenadas") return "Conversion entre descripcion geometrica y coordenadas de trabajo.";
  if (s === "ligaduras") return "Las ligaduras reducen dimensionalidad y simplifican la dinamica.";
  if (s === "energia") return "Energia como nucleo para construir L=T-V sin dibujar todas las reacciones.";
  if (s === "lagrange") return "Euler-Lagrange convierte energia en ecuacion dinamica.";
  if (s === "noether") return "Simetria continua -> magnitud conservada.";
  if (s === "legendre") return "Paso de (q,qdot) a (q,p) mediante transformacion de Legendre.";
  if (s === "hamilton") return "Flujo canonico en espacio fase gobernado por H.";
  if (s === "oscilador") return "Oscilador armonico como banco de pruebas del formalismo.";
  if (s === "pendulo") return "Pendulo: linealizacion y lectura energetica de oscilacion.";
  if (s === "atwood") return "Sistema con ligadura: acoplamiento de aceleraciones y tension interna.";
  return "Esquema didactico de mecanica analitica.";
}

export default function MecanicaAnaliticaGraphsSvg({
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
      { key: "showFlow", default: p?.showFlow ?? true },
      { key: "showReadout", default: p?.showReadout ?? true }
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

  const data = useMemo(() => model.build(valueMap).data || [], [model, valueMap]);
  const sampleRatio = clamp(toNum(ep.sample, 0.55), 0, 1);
  const idx = Math.max(0, Math.min(data.length - 1, Math.round(sampleRatio * (data.length - 1))));
  const point = data[idx] || { x: 0, y1: 0, y2: 0 };
  const showFlow = !!ep.showFlow;
  const showReadout = !!ep.showReadout;

  const setValue = useCallback(
    (k, v) => {
      exp.startExperiment();
      exp.setValue(k, v);
    },
    [exp]
  );

  return (
    <SvgFrame
      title={title || `${model.title} (SVG)`}
      subtitle={scenarioCaption(scenario)}
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
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>MODELO ACTIVO</div>
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
                <div key={cfg.key} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>{cfg.label}</div>
                  <input
                    className="form-control"
                    style={{ width: 108 }}
                    value={String(valueMap[cfg.key] ?? cfg.default)}
                    onChange={(e) => setValue(cfg.key, e.target.value)}
                  />
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>muestra</div>
                <input
                  className="form-control"
                  style={{ width: 108 }}
                  value={String(sampleRatio)}
                  onChange={(e) => setValue("sample", e.target.value)}
                />
              </div>
            </div>
            <div className="v2-toggle-row" style={{ marginTop: 10 }}>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showFlow} onChange={(e) => setValue("showFlow", e.target.checked)} /><span className="v2-toggle-label">flujo</span></label>
              <label className="v2-toggle"><input className="v2-toggle-input" type="checkbox" checked={showReadout} onChange={(e) => setValue("showReadout", e.target.checked)} /><span className="v2-toggle-label">lectura</span></label>
            </div>
          </div>

          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0,0,0,0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rapida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.84, lineHeight: 1.45 }}>
              x = <b>{fmt(point.x, 3)}</b>
              <br />
              {model.y1Label}: <b style={{ color: "#60a5fa" }}>{fmt(point.y1, 4)}</b>
              <br />
              {model.y2Label}: <b style={{ color: "#34d399" }}>{fmt(point.y2, 4)}</b>
            </div>
          </div>
        </div>
      }
      viewBox="0 0 840 380"
      svgHeight={360}
    >
      <defs>
        <linearGradient id="bgAnaliticaSvg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="840" height="380" fill="url(#bgAnaliticaSvg)" />
      <line x1="420" y1="24" x2="420" y2="356" stroke="rgba(15,23,42,0.20)" strokeWidth="2" strokeDasharray="7 8" />

      <text x="70" y="40" fill="#0f172a" fontSize="13" fontWeight="900">
        Sistema fisico
      </text>
      <text x="450" y="40" fill="#0f172a" fontSize="13" fontWeight="900">
        Modelo analitico
      </text>

      <rect x="72" y="78" width="300" height="230" rx="18" fill="rgba(255,255,255,0.72)" stroke="#3b82f6" strokeWidth="2.2" />
      <text x="92" y="112" fill="#1e3a8a" fontSize="13" fontWeight="900">
        Variables observables
      </text>
      <text x="92" y="140" fill="#1e3a8a" fontSize="12">
        x = {fmt(point.x, 3)}
      </text>
      <text x="92" y="164" fill="#1e3a8a" fontSize="12">
        y1 = {fmt(point.y1, 4)}
      </text>
      <text x="92" y="188" fill="#1e3a8a" fontSize="12">
        y2 = {fmt(point.y2, 4)}
      </text>
      <text x="92" y="220" fill="#334155" fontSize="12">
        {scenarioCaption(scenario)}
      </text>

      <rect x="454" y="78" width="304" height="230" rx="18" fill="rgba(255,255,255,0.72)" stroke="#16a34a" strokeWidth="2.2" />
      <text x="474" y="112" fill="#166534" fontSize="13" fontWeight="900">
        Ecuacion activa
      </text>
      <text x="474" y="138" fill="#166534" fontSize="12">
        {model.y1Label} y {model.y2Label}
      </text>
      <text x="474" y="164" fill="#166534" fontSize="12">
        se evalua con parametros actuales.
      </text>
      <text x="474" y="196" fill="#0f172a" fontSize="12">
        Modo: {exp.mode === "follow" ? "siguiendo calculadora" : "experimento manual"}
      </text>

      {showFlow ? (
        <>
          <line x1="376" y1="192" x2="446" y2="192" stroke="#7c3aed" strokeWidth="3.2" />
          <polygon points="446,192 434,184 434,200" fill="#7c3aed" />
          <text x="384" y="176" fill="#6d28d9" fontSize="12" fontWeight="900">
            mapeo q,p
          </text>
        </>
      ) : null}

      {showReadout ? (
        <rect x="455" y="242" width="292" height="54" rx="10" fill="rgba(15,23,42,0.08)" />
      ) : null}
      {showReadout ? (
        <text x="470" y="274" fill="#0f172a" fontSize="12" fontWeight="900">
          Lectura: {model.y1Label} = {fmt(point.y1, 3)} | {model.y2Label} = {fmt(point.y2, 3)}
        </text>
      ) : null}
    </SvgFrame>
  );
}

