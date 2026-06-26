import React, { useMemo, useEffect, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import { Arrow } from "@/v2/components/graphs_shared/svg2/primitives";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";
import { useRafPlayer } from "@/v2/components/graphs_shared/sim";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
const fmt = (n, d = 2) => (Number.isFinite(n) ? n.toFixed(d).replace(".", ",") : "-");

function Toggle({ checked, onChange, label }) {
  return (
    <label className="v2-toggle">
      <input className="v2-toggle-input" type="checkbox" checked={checked} onChange={onChange} />
      <span className="v2-toggle-label">{label}</span>
    </label>
  );
}

export default function EncuentrosYPersecucionesGraphsSvg({ title, params }) {
  const schema = useMemo(
    () => [
      { key: "xA0", aliases: ["x0A"], default: toNum(params?.xA0 ?? params?.x0A, 0) },
      { key: "xB0", aliases: ["x0B"], default: toNum(params?.xB0 ?? params?.x0B, 60) },
      { key: "vA", aliases: ["va"], default: toNum(params?.vA ?? params?.va, 12) },
      { key: "vB", aliases: ["vb"], default: toNum(params?.vB ?? params?.vb, -8) },
      { key: "tMax", aliases: ["tmax"], default: toNum(params?.tMax ?? params?.tmax, 10) },
      { key: "tObs", aliases: ["t"], default: toNum(params?.tObs ?? params?.t, 2) },
      { key: "modeCase", aliases: ["caso"], default: params?.modeCase ?? params?.caso ?? "encuentro" },
      { key: "showVel", default: params?.showVel ?? true },
      { key: "showRel", default: params?.showRel ?? true },
      { key: "showTrail", default: params?.showTrail ?? true },
    ],
    [params]
  );

  const exp = useExperimentParams({ params, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const modeCase = String(ep.modeCase || "encuentro").toLowerCase().includes("per") ? "persecucion" : "encuentro";
  const xA0 = toNum(ep.xA0, 0);
  const xB0 = toNum(ep.xB0, modeCase === "encuentro" ? 60 : 35);
  const vA = toNum(ep.vA, modeCase === "encuentro" ? 12 : 14);
  const vB = toNum(ep.vB, modeCase === "encuentro" ? -8 : 6);
  const tMax = clamp(toNum(ep.tMax, 10), 0.5, 60);
  const tObs = clamp(toNum(ep.tObs, 2), 0, tMax);

  const showVel = !!ep.showVel;
  const showRel = !!ep.showRel;
  const showTrail = !!ep.showTrail;

  const setValue = (k, vNext) => {
    exp.startExperiment();
    exp.setValue(k, vNext);
  };
  const applyCasePreset = (nextCase) => {
    exp.startExperiment();
    if (nextCase === "encuentro") {
      exp.setValue("modeCase", "encuentro");
      exp.setValue("xA0", -10);
      exp.setValue("xB0", 70);
      exp.setValue("vA", 12);
      exp.setValue("vB", -8);
      exp.setValue("tObs", 2);
      return;
    }
    exp.setValue("modeCase", "persecucion");
    exp.setValue("xA0", 0);
    exp.setValue("xB0", 26);
    exp.setValue("vA", 14);
    exp.setValue("vB", 6);
    exp.setValue("tObs", 2);
  };

  const player = useRafPlayer({ tMax, initialT: tObs, autoStop: false });

  useEffect(() => {
    player.reset(tObs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tObs, tMax]);

  const onPlay = useCallback(() => player.toggle(), [player]);
  const onReset = useCallback(() => player.reset(0), [player]);

  const tCurrent = player.isPlaying ? player.t : tObs;

  const xA = xA0 + vA * tCurrent;
  const xB = xB0 + vB * tCurrent;
  const d = xB - xA;
  const vRel = vA - vB;

  const tMeet = Math.abs(vRel) > 1e-9 ? (xB0 - xA0) / vRel : null;

  const worldX1 = 80;
  const worldX2 = 780;
  const yLane = 320;
  const yA = modeCase === "encuentro" ? yLane - 34 : yLane - 12;
  const yB = modeCase === "encuentro" ? yLane + 34 : yLane + 12;

  const allMin = Math.min(xA0, xB0, xA, xB, xA0 + vA * tMax, xB0 + vB * tMax) - 8;
  const allMax = Math.max(xA0, xB0, xA, xB, xA0 + vA * tMax, xB0 + vB * tMax) + 8;
  const mapX = (x) => worldX1 + ((x - allMin) / Math.max(1e-9, allMax - allMin)) * (worldX2 - worldX1);

  const xAS = mapX(xA);
  const xBS = mapX(xB);

  const trailA = useMemo(() => {
    const pts = [];
    const N = 120;
    for (let i = 0; i <= N; i += 1) {
      const tt = (i / N) * tCurrent;
      const xx = mapX(xA0 + vA * tt);
      pts.push(`${i === 0 ? "M" : "L"} ${xx} ${yA}`);
    }
    return pts.join(" ");
  }, [tCurrent, xA0, vA, allMin, allMax, yA]);

  const trailB = useMemo(() => {
    const pts = [];
    const N = 120;
    for (let i = 0; i <= N; i += 1) {
      const tt = (i / N) * tCurrent;
      const xx = mapX(xB0 + vB * tt);
      pts.push(`${i === 0 ? "M" : "L"} ${xx} ${yB}`);
    }
    return pts.join(" ");
  }, [tCurrent, xB0, vB, allMin, allMax, yB]);

  const velScale = 16;
  const vADx = Math.sign(vA || 1) * Math.min(150, 22 + Math.abs(vA) * velScale);
  const vBDx = Math.sign(vB || 1) * Math.min(150, 22 + Math.abs(vB) * velScale);
  const vRelDx = Math.sign(vRel || 1) * Math.min(150, 22 + Math.abs(vRel) * velScale);

  const aside = (
    <div style={{ display: "grid", gap: 10 }}>
      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Caso</div>
        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" onClick={() => applyCasePreset("encuentro")} style={{ padding: "8px 10px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: modeCase === "encuentro" ? "rgba(99,102,241,0.35)" : "rgba(255,255,255,0.06)", color: "#fff", cursor: "pointer", fontWeight: 800 }}>Encuentro</button>
          <button type="button" onClick={() => applyCasePreset("persecucion")} style={{ padding: "8px 10px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.14)", background: modeCase === "persecucion" ? "rgba(99,102,241,0.35)" : "rgba(255,255,255,0.06)", color: "#fff", cursor: "pointer", fontWeight: 800 }}>Persecucion</button>
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Parametros</div>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>xA0</span><input className="form-control" value={xA0} onChange={(e) => setValue("xA0", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>xB0</span><input className="form-control" value={xB0} onChange={(e) => setValue("xB0", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>vA</span><input className="form-control" value={vA} onChange={(e) => setValue("vA", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>vB</span><input className="form-control" value={vB} onChange={(e) => setValue("vB", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_max</span><input className="form-control" value={tMax} onChange={(e) => setValue("tMax", e.target.value)} /></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><span style={{ width: 70 }}>t_obs</span><input className="form-control" value={tObs} onChange={(e) => setValue("tObs", e.target.value)} /></div>
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.45)" }}>
        <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8 }}>Capas</div>
        <div className="v2-toggle-row">
          <Toggle checked={showVel} onChange={(e) => setValue("showVel", e.target.checked)} label="Vectores velocidad" />
          <Toggle checked={showRel} onChange={(e) => setValue("showRel", e.target.checked)} label="Velocidad relativa" />
          <Toggle checked={showTrail} onChange={(e) => setValue("showTrail", e.target.checked)} label="Trayectorias" />
        </div>
      </div>

      <div className="v2-panel m-1" style={{ background: "rgba(0,0,0,0.35)" }}>
        <div style={{ fontSize: 13, lineHeight: 1.6 }}>
          <div><MathInline latex={"\\vec v_{rel}=\\vec v_A-\\vec v_B"} /></div>
          <div>t: <b>{fmt(tCurrent, 2)} s</b></div>
          <div>d=xB-xA: <b>{fmt(d, 3)}</b> m</div>
          <div>v_rel: <b>{fmt(vRel, 3)}</b> m/s</div>
          <div>t_enc: <b>{tMeet !== null ? fmt(tMeet, 3) : "-"}</b> s</div>
        </div>
      </div>
    </div>
  );

  return (
    <SvgFrame
      title={title || "Encuentros y persecuciones (SVG)"}
      subtitle="Escena dinamica de encuentro/persecucion"
      badgeLabel="FORMULA"
      badgeValue="t_enc=(xB0-xA0)/(vA-vB)"
      controls={
        <>
          <button type="button" onClick={exp.startExperiment} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(99,102,241,0.25)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Experimentar</button>
          <button type="button" onClick={onPlay} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(2, 6, 243, 0.75)", color: "white", fontWeight: 900, cursor: "pointer" }}>{player.isPlaying ? "Pausa" : "Play"}</button>
          <button type="button" onClick={onReset} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.92)", fontWeight: 900, cursor: "pointer" }}>Reset</button>
          <button type="button" onClick={exp.resetToCalculator} style={{ padding: "10px 14px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.35)", color: "rgba(255,255,255,0.88)", fontWeight: 900, cursor: "pointer" }}>Seguir calculadora</button>
        </>
      }
      aside={aside}
      svgHeight={700}
      viewBox="0 0 850 560"
    >
      <line x1={worldX1} y1={yLane} x2={worldX2} y2={yLane} stroke="rgba(255,255,255,0.28)" strokeWidth="4" />

      {showTrail ? <path d={trailA} fill="none" stroke="#60a5fa" strokeWidth="2.3" opacity="0.75" /> : null}
      {showTrail ? <path d={trailB} fill="none" stroke="#34d399" strokeWidth="2.3" opacity="0.75" /> : null}

      <g>
        <rect x={xAS - 28} y={yA - 12} width="56" height="24" rx="6" fill="rgba(96,165,250,0.32)" stroke="rgba(96,165,250,0.95)" strokeWidth="2.2" />
        <text x={xAS} y={yA + 5} textAnchor="middle" fontSize="12" fill="currentColor">A</text>
      </g>
      <g>
        <rect x={xBS - 28} y={yB - 12} width="56" height="24" rx="6" fill="rgba(52,211,153,0.32)" stroke="rgba(52,211,153,0.95)" strokeWidth="2.2" />
        <text x={xBS} y={yB + 5} textAnchor="middle" fontSize="12" fill="currentColor">B</text>
      </g>

      {showVel ? <Arrow x={xAS} y={yA - 20} dx={vADx} dy={0} label={`vA=${fmt(vA, 2)}`} labelDy={-10} /> : null}
      {showVel ? <Arrow x={xBS} y={yB + 20} dx={vBDx} dy={0} label={`vB=${fmt(vB, 2)}`} labelDy={-10} /> : null}
      {showRel ? <Arrow x={(xAS + xBS) / 2} y={yLane - 96} dx={vRelDx} dy={0} label={`vRel=${fmt(vRel, 2)}`} labelDy={-10} /> : null}

      {tMeet !== null && tMeet >= 0 && tMeet <= tMax ? (
        <g>
          <circle cx={mapX(xA0 + vA * tMeet)} cy={yLane} r="6" fill="#f59e0b" />
          <text x={mapX(xA0 + vA * tMeet) + 10} y={yLane - 8} fontSize="12" fill="currentColor">encuentro</text>
        </g>
      ) : null}
    </SvgFrame>
  );
}
