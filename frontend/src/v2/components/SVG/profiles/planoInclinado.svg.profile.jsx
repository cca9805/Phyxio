import React from "react";
import {
  SvgArrow,
  SVG_COLORS,
} from "@/v2/components/SVG/SvgProfileRenderer";
import { SVG_MOTION_TYPES } from "@/v2/components/SVG/svgGrammar";
import { getResolvedVector } from "@/v2/components/graphs/dinamica/Svg/engine/descomposicionVectorialEngine";
import { detectErrors } from "@/v2/components/graphs/dinamica/Svg/engine/descomposicionVectorialErrors";
import { interpretVector } from "@/v2/components/graphs/dinamica/Svg/engine/descomposicionVectorialInterpretation";

const clampMagnitude = (value, min = -22, max = 22) =>
  Math.max(min, Math.min(max, value));

function easeInOut(x) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

function phaseProgress(t, start, duration) {
  return easeInOut((t - start) / duration);
}

const profile = {
  meta: {
    leafId: "plano-inclinado",
    graphType: "Svg",
    title: {
      es: "Descomposición vectorial en rampa",
      en: "Vector decomposition on ramp",
    },
  },

  graph_identity: {
    id: "plano-inclinado-svg",
    es: "Descomposición vectorial en rampa",
    en: "Vector decomposition on ramp",
    magnitud_estrella: "Wpar",
    pregunta_principal: {
      es: "¿Cómo se reparte el peso entre sus componentes en el plano inclinado?",
      en: "How is weight split into its components on the inclined plane?",
    },
  },

  pregunta_principal: {
    es: "¿Cómo se reparte el peso entre sus componentes en el plano inclinado?",
    en: "How is weight split into its components on the inclined plane?",
  },

  magnitud_estrella: "Wpar",

  interpretation_binding: {
    target: "Wpar",
    related: ["Wperp", "theta", "W"],
  },

  params: {
    schema: [
      {
        key: "W",
        label: "W",
        type: "number",
        min: 0,
        max: 50,
        step: 0.5,
        default: 10,
      },
      {
        key: "theta",
        label: "θ (deg)",
        type: "number",
        min: 0,
        max: 90,
        step: 1,
        default: 30,
      },
    ],
  },

  infoCards: [
  {
    key: "components",
    label: { es: "Componentes", en: "Components" },
    lines: ({ p, state }) => {
      const Wpar = Number(state.Wpar ?? p.Wpar ?? 0);
      const Wperp = Number(state.Wperp ?? p.Wperp ?? 0);
      return [
        `Wpar = ${Wpar.toFixed(2)}`,
        `Wperp = ${Wperp.toFixed(2)}`,
      ];
    },
    result: ({ p, state }) => {
      const W = Number(state.W ?? p.W ?? 0);
      return `W = ${W.toFixed(2)}`;
    },
    description: ({ lang }) =>
      lang === "es"
        ? "El peso total se reparte entre una componente paralela y otra perpendicular a la rampa."
        : "Total weight is split into a parallel and a perpendicular component to the ramp.",
  },
],

  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    loop: true,
    tMax: 3,
    state: (t, p = {}) => {
      const W = Number(p.W ?? 10);
      const theta = Number(p.theta ?? 30);

      const { Fx: Wpar, Fy: Wperp } = getResolvedVector({ F: W, theta });

      const fx_progress = phaseProgress(t, 0.0, 0.9);
      const fy_progress = phaseProgress(t, 0.8, 0.9);
      const f_progress = phaseProgress(t, 1.7, 0.9);

      const phase =
        f_progress < 0.05
          ? "components"
          : f_progress < 0.95
            ? "resultant-building"
            : "resultant-ready";

      return {
        W,
        theta,
        Wpar,
        Wperp,
        fx_progress,
        fy_progress,
        f_progress,
        phase,
        Wpar_anim: Wpar * fx_progress,
        Wperp_anim: Wperp * fy_progress,
        W_anim_x: Wpar * f_progress,
        W_anim_y: Wperp * f_progress,
      };
    },
  },

  viewBox: "0 0 850 520",
  svgHeight: 520,

  render: ({
    sharedParams = {},
    state = {},
    lang = "es",
    onGraphStateChange,
    onInterpretationContextChange,
  }) => {
    const W = Number(state.W ?? sharedParams.W ?? 10);
    const theta = Number(state.theta ?? sharedParams.theta ?? 30);
    const Wpar = Number(state.Wpar ?? 0);
    const Wperp = Number(state.Wperp ?? 0);

    const WparAnim = Number(state.Wpar_anim ?? Wpar);
    const WperpAnim = Number(state.Wperp_anim ?? Wperp);
    const WAnimX = Number(state.W_anim_x ?? Wpar);
    const WAnimY = Number(state.W_anim_y ?? Wperp);

    const fxP = Number(state.fx_progress ?? 1);
    const fyP = Number(state.fy_progress ?? 1);
    const fP = Number(state.f_progress ?? 1);
    const phase = state.phase ?? "resultant-ready";

    const interpretation =
      lang === "es"
        ? `Descomposición del peso en rampa. Fase: ${phase}.`
        : `Weight decomposition on ramp. Phase: ${phase}.`;

    if (typeof onGraphStateChange === "function") {
      onGraphStateChange({
        target: "W",
        values: {
          W,
          Wpar,
          Wperp,
          theta,
          phase,
        },
        interpretation,
      });
    }

    if (typeof onInterpretationContextChange === "function") {
      onInterpretationContextChange({
        target: "W",
        values: {
          W,
          Wpar,
          Wperp,
          theta,
          phase,
        },
      });
    }

    const scale = 12;
    const ox = 180;
    const oy = 360;

    const fxScaled = clampMagnitude(WparAnim) * scale;
    const fyScaled = clampMagnitude(WperpAnim) * scale;
    const fScaledX = clampMagnitude(WAnimX) * scale;
    const fScaledY = clampMagnitude(WAnimY) * scale;

    const xEnd = ox + fxScaled;
    const yEnd = oy - fyScaled;

    const projX = ox + clampMagnitude(Wpar) * scale;

    return (
      <>
        <rect x="0" y="0" width="850" height="520" fill="transparent" />

        <line
          x1="80"
          y1={oy}
          x2="760"
          y2={oy}
          stroke="rgba(255,255,255,0.20)"
          strokeWidth="2"
        />
        <line
          x1={ox}
          y1="60"
          x2={ox}
          y2="440"
          stroke="rgba(255,255,255,0.20)"
          strokeWidth="2"
        />

        <text x="770" y={oy - 8} fill="white" fontSize="16">
          paralelo
        </text>
        <text x={ox + 10} y="72" fill="white" fontSize="16">
          perpendicular
        </text>

        {fxP > 0.01 && (
          <line
            x1={ox}
            y1={oy}
            x2={xEnd}
            y2={oy}
            stroke="rgba(255,255,255,0.25)"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
        )}

        {fyP > 0.01 && (
          <line
            x1={projX}
            y1={oy}
            x2={projX}
            y2={yEnd}
            stroke="rgba(255,255,255,0.25)"
            strokeDasharray="6 6"
            strokeWidth="2"
          />
        )}

        {fxP > 0.01 && (
          <SvgArrow
            x1={ox}
            y1={oy}
            x2={xEnd}
            y2={oy}
            color={SVG_COLORS.ACCENT || "#38bdf8"}
            label="W_par"
          />
        )}

        {fyP > 0.01 && (
          <SvgArrow
            x1={projX}
            y1={oy}
            x2={projX}
            y2={yEnd}
            color={SVG_COLORS.SUCCESS || "#22c55e"}
            label="W_perp"
          />
        )}

        {fP > 0.01 && (
          <SvgArrow
            x1={ox}
            y1={oy}
            x2={ox + fScaledX}
            y2={oy - fScaledY}
            color={SVG_COLORS.WARNING || "#f59e0b"}
            label="W"
          />
        )}

        <circle cx={ox} cy={oy} r="5" fill="white" />

        <path
          d={`
            M ${ox + 46} ${oy}
            A 46 46 0 0 1 ${ox + 46 * Math.cos((theta * Math.PI) / 180)}
            ${oy - 46 * Math.sin((theta * Math.PI) / 180)}
          `}
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2"
        />

        <text x={ox + 58} y={oy - 18} fill="white" fontSize="15">
          θ = {theta.toFixed(1)}°
        </text>
      </>
    );
  },
};

export default profile;
