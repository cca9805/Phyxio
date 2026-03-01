import React, { useEffect, useMemo, useCallback } from "react";
import SvgFrame from "@/v2/components/graphs_shared/svg2/SvgFrame";
import SvgGround from "@/v2/components/graphs_shared/svg2/SvgGround";
import SvgHud from "@/v2/components/graphs_shared/svg2/SvgHud";
import SvgSpeedBar from "@/v2/components/graphs_shared/svg2/SvgSpeedBar";
import SvgTimeline from "@/v2/components/graphs_shared/svg2/SvgTimeline";
import { useRafPlayer } from "@/v2/components/graphs_shared/sim";
import MathInline from "@/v2/components/shared/MathInline";
import { useExperimentParams } from "@/v2/components/graphs_shared/experiment/useExperimentParams";

const toNum = (v, fb) => {
  const n = typeof v === "number" ? v : Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : fb;
};

const pickNum = (obj, keys, fb) => {
  for (const k of keys) {
    const v = obj?.[k];
    if (v === undefined || v === null || v === "") continue;
    const n = toNum(v, NaN);
    if (Number.isFinite(n)) return n;
  }
  return fb;
};

const GRAVITY_PRESETS = [
  { key: "earth", name: "Tierra", g: 9.81 },
  { key: "moon", name: "Luna", g: 1.62 },
  { key: "mars", name: "Marte", g: 3.71 },
  { key: "mercury", name: "Mercurio", g: 3.7 },
  { key: "venus", name: "Venus", g: 8.87 },
  { key: "jupiter", name: "Júpiter", g: 24.79 },
  { key: "saturn", name: "Saturno", g: 10.44 },
  { key: "uranus", name: "Urano", g: 8.69 },
  { key: "neptune", name: "Neptuno", g: 11.15 },
  { key: "pluto", name: "Plutón", g: 0.62 },
];

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

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "8px 10px",
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.14)",
        background: active ? "rgba(99,102,241,0.35)" : "rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.92)",
        fontWeight: 800,
        fontSize: 12,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
}

export default function CaidaLibreSim(props) {
  const p = props.params ?? props.sharedParams ?? {};

  // Schema estable para experiment params
  const schema = useMemo(
    () => [
      { key: "y0", aliases: ["h", "altura", "h0"], default: pickNum(p, ["y0", "h", "altura", "h0"], 15) },
      { key: "g", aliases: ["grav", "gravity"], default: pickNum(p, ["g"], 9.81) },
      { key: "v0", aliases: ["vy0"], default: pickNum(p, ["v0", "vy0"], 0) },
    ],
    [
      pickNum(p, ["y0", "h", "altura", "h0"], 15),
      pickNum(p, ["g"], 9.81),
      pickNum(p, ["v0", "vy0"], 0),
    ]
  );

  const exp = useExperimentParams({ params: p, schema, modeDefault: "follow" });
  const ep = exp.effectiveParams;

  const y0 = toNum(ep.y0, 15);
  const v0 = toNum(ep.v0, 0);
  const g = toNum(ep.g, 9.81);

  // tiempo hasta el suelo
  const tImpacto = useMemo(() => {
    if (!(g > 0)) return 0;
    const disc = v0 * v0 + 2 * g * Math.max(0, y0);
    const t = (v0 + Math.sqrt(Math.max(0, disc))) / g;
    return Number.isFinite(t) ? Math.max(0, t) : 0;
  }, [y0, v0, g]);

  // ✅ aquí estaba el typo: ahora bien
  const player = useRafPlayer({ tMax: tImpacto || 0, initialT: 0, autoStop: true });

  // si cambian params -> reset
  useEffect(() => {
    player.reset(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y0, v0, g, tImpacto]);

  const t = player.t;

  const y = useMemo(() => {
    const yy = y0 + v0 * t - 0.5 * g * t * t;
    return Math.max(0, yy);
  }, [y0, v0, g, t]);

  const v = useMemo(() => v0 - g * t, [v0, g, t]);
  const speed = Math.abs(v);

  // mapeo visual
  const TOP = 100;
  const GROUND = 340;
  const SPAN = GROUND - TOP;

  const y0Safe = Math.max(1, y0);
  const pxPerM = SPAN / y0Safe;
  const py = TOP + (y0 - y) * pxPerM;

  const vImpact = Math.abs(v0 - g * (tImpacto || 0));
  const vRef = Math.max(1, vImpact || 45);

  const onPlay = useCallback(() => {
    if (!player.isPlaying && tImpacto > 0 && Math.abs(player.t - tImpacto) < 1e-6) {
      player.reset(0);
      player.play();
      return;
    }
    player.toggle();
  }, [player, tImpacto]);

  const onReset = useCallback(() => player.reset(0), [player]);

  const setY0 = (val) => {
    exp.startExperiment();
    exp.setValue("y0", val);
  };

  const setG = (val) => {
    exp.startExperiment();
    exp.setValue("g", val);
  };

  const applyPreset = (preset) => {
    exp.startExperiment();
    exp.setValue("g", preset.g);
  };

  return (
    <SvgFrame
      title="Caída libre"
      subtitle="Cinemática y dinámica gravitatoria"
      badgeLabel="MODO"
      badgeValue={exp.mode === "follow" ? "SIGUIENDO CALCULADORA" : "EXPERIMENTO"}
      controls={
        <>
          <button
            type="button"
            onClick={onPlay}
            disabled={!(tImpacto > 0)}
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(2, 6, 243, 0.75)",
              color: "white",
              fontWeight: 900,
              cursor: "pointer",
              opacity: tImpacto > 0 ? 1 : 0.5,
            }}
          >
            {player.isPlaying ? "Pausa" : "Play"}
          </button>

          <button
            type="button"
            onClick={onReset}
            style={{
              padding: "10px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.92)",
              fontWeight: 900,
              cursor: "pointer",
            }}
          >
            Reset
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
            title="Volver a seguir a la calculadora"
          >
            Seguir calculadora
          </button>
        </>
      }
      aside={
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/* Fórmulas */}
          <div className="v2-panel m-3 mb-1">
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              ECUACIONES
            </div>

            <div style={{ marginTop: 10, display: "grid", gap: 2 }}>
              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Posición</div>
                <div style={{ marginTop: 2, color: "#f87b7bff" }}>
                  <MathInline latex={"y(t)=y_0+v_0 t-\\tfrac{1}{2} g t^2"} />
                </div>
              </div>

              <div className="v2-panel m-1 mt-1" style={{ background: "rgba(0, 0, 0, 1)" }}>
                <div style={{ fontSize: 12, opacity: 0.75 }}>Velocidad</div>
                <div style={{ marginTop: 2, color: "#f87b7bff" }}>
                  <MathInline latex={"v(t)=v_0-g t"} />
                </div>
              </div>
            </div>
          </div>

          {/* Sliders */}
          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
            <div className="mb-3 mt-2" style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PARÁMETROS
            </div>

            <div style={{display: "grid", gap: 2 }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>Altura inicial</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{y0.toFixed(1)} m</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={y0} min={0} max={200} step={0.5} onChange={setY0} />
                </div>
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, opacity: 0.9 }}>Gravedad</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{g.toFixed(2)} m/s²</div>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Slider value={g} min={0.1} max={30} step={0.01} onChange={setG} />
                </div>
              </div>
            </div>
          </div>

          {/* Presets */}
          <div className="v2-panel m-2 mt-0" style={{ background: "rgba(2, 2, 2, 0.40)" }}>
            <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.75, fontWeight: 900 }}>
              PLANETAS Y LUNAS (g)
            </div>

            <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 4 }}>
              {GRAVITY_PRESETS.map((x) => (
                <Pill key={x.key} active={Math.abs(g - x.g) < 0.02} onClick={() => applyPreset(x)}>
                  {x.name} · {x.g}
                </Pill>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="v2-panel  m-2 mt-0" style={{ background: "rgba(0, 0, 0, 0.40)" }}>
            <div style={{ fontWeight: 900, opacity: 0.95 }}>Lectura rápida</div>
            <div style={{ marginTop: 8, fontSize: 13, opacity: 0.8, lineHeight: 1.45 }}>
              Cambiando <b>g</b> "mueves" el experimento a otros mundos. En caída libre ideal la aceleración es constante.
            </div>
          </div>
        </div>
      }
    >
      <SvgGround x={80} y={340} width={500} />

      {/* Regla */}
      <g opacity="0.75">
        <line x1="250" y1="100" x2="250" y2="340" stroke="#5b79a3ff" strokeWidth="2" />
        <text x="240" y="105" textAnchor="end" fontSize="11" fill="#5b79a3ff">
          {y0.toFixed(0)}m
        </text>
        <text x="240" y="338" textAnchor="end" fontSize="11" fill="#5b79a3ff">
          0m
        </text>
      </g>

      {/* Piedra */}
      <g transform={`translate(350, ${py})`}>
        <circle r="10" fill="url(#stoneGradient)" filter="url(#glow)" />
        <circle r="10" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />

        <g transform="translate(30, -14)">
          <rect width="92" height="28" rx="14" fill="#334155" fillOpacity="0.6" />
          <text x="46" y="17" fontSize="12" fill="#fb923c" textAnchor="middle">
            y = {y.toFixed(1)} m
          </text>
        </g>
      </g>

      <SvgHud t={t} pos={y} vel={v} g={g} />
      <SvgSpeedBar speed={speed} vRef={vRef} />
      <SvgTimeline t={t} tMax={tImpacto || 1} />
    </SvgFrame>
  );
}
