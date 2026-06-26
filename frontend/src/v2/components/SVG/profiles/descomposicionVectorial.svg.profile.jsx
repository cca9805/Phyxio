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
    leafId: "descomposicion-vectorial",
    graphType: "Svg",
    title: {
      es: "Descomposición vectorial",
      en: "Vector resolution into components",
    },
  },

  graph_identity: {
    id: "descomposicion-vectorial-svg",
    es: "Descomposición vectorial",
    en: "Vector resolution into components",
  },

  pregunta_principal: {
    es: "¿Cómo se reparte un vector entre sus componentes horizontal y vertical?",
    en: "How is a vector split into its horizontal and vertical components?",
  },

  magnitud_estrella: "Fm",

  interpretation_binding: {
    target: "Fm",
    related: ["Fx", "Fy", "theta"],
  },

  params: {
    schema: [
      {
        key: "F",
        label: "F",
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
      const Fx = Number(state.Fx ?? p.Fx ?? 0);
      const Fy = Number(state.Fy ?? p.Fy ?? 0);
      return [
        `Fx = ${Fx.toFixed(2)}`,
        `Fy = ${Fy.toFixed(2)}`,
      ];
    },
    result: ({ p, state }) => {
      const F = Number(state.F ?? p.F ?? 0);
      return `F = ${F.toFixed(2)}`;
    },
    description: ({ lang }) =>
      lang === "es"
        ? "El vector total se reparte entre una componente horizontal y otra vertical."
        : "The total vector is split into a horizontal and a vertical component.",
  },
  {
    key: "meaning",
    label: { es: "Lectura física", en: "Physical reading" },
    highlight: ({ p, state, lang }) => {
      const F = Number(state.F ?? p.F ?? 10);
      const theta = Number(state.theta ?? p.theta ?? 30);
      return interpretVector({ F, theta }, lang);
    },
    description: ({ p, state, lang }) => {
      const phase = state.phase ?? "resultant-ready";
      return lang === "es"
        ? `Fase actual de la animación: ${phase}.`
        : `Current animation phase: ${phase}.`;
    },
  },
  {
    key: "warnings",
    label: { es: "Avisos", en: "Warnings" },
    lines: ({ p, state, lang }) => {
      const F = Number(state.F ?? p.F ?? 10);
      const theta = Number(state.theta ?? p.theta ?? 30);
      const errors = detectErrors({ F, theta });

      if (!errors.length) {
        return [
          lang === "es"
            ? "Sin avisos relevantes."
            : "No relevant warnings.",
        ];
      }

      return lang === "es"
        ? errors.map((e) => e.es)
        : errors.map((e) => e.en);
    },
  },
],

  motion: {
    type: SVG_MOTION_TYPES.CUSTOM,
    loop: true,
    tMax: 3,
    state: (t, p = {}) => {
      const F = Number(p.F ?? 10);
      const theta = Number(p.theta ?? 30);

      const { Fx, Fy } = getResolvedVector({ F, theta });

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
        F,
        theta,
        Fx,
        Fy,
        fx_progress,
        fy_progress,
        f_progress,
        phase,
        Fx_anim: Fx * fx_progress,
        Fy_anim: Fy * fy_progress,
        F_anim_x: Fx * f_progress,
        F_anim_y: Fy * f_progress,
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
    const F = Number(state.F ?? sharedParams.F ?? 10);
    const theta = Number(state.theta ?? sharedParams.theta ?? 30);
    const Fx = Number(state.Fx ?? 0);
    const Fy = Number(state.Fy ?? 0);

    const FxAnim = Number(state.Fx_anim ?? Fx);
    const FyAnim = Number(state.Fy_anim ?? Fy);
    const FAnimX = Number(state.F_anim_x ?? Fx);
    const FAnimY = Number(state.F_anim_y ?? Fy);

    const fxP = Number(state.fx_progress ?? 1);
    const fyP = Number(state.fy_progress ?? 1);
    const fP = Number(state.f_progress ?? 1);
    const phase = state.phase ?? "resultant-ready";

    const interpretation =
      lang === "es"
        ? `${interpretVector({ F, theta }, lang)} Fase: ${phase}.`
        : `${interpretVector({ F, theta }, lang)} Phase: ${phase}.`;

    if (typeof onGraphStateChange === "function") {
      onGraphStateChange({
        target: "F",
        values: {
          F,
          Fx,
          Fy,
          theta,
          phase,
          fx_progress: fxP,
          fy_progress: fyP,
          f_progress: fP,
        },
        interpretation,
      });
    }

    if (typeof onInterpretationContextChange === "function") {
      onInterpretationContextChange({
        target: "F",
        values: {
          F,
          Fx,
          Fy,
          theta,
          phase,
        },
      });
    }

    const scale = 12;
    const ox = 180;
    const oy = 360;

    const fxScaled = clampMagnitude(FxAnim) * scale;
    const fyScaled = clampMagnitude(FyAnim) * scale;
    const fScaledX = clampMagnitude(FAnimX) * scale;
    const fScaledY = clampMagnitude(FAnimY) * scale;

    const xEnd = ox + fxScaled;
    const yEnd = oy - fyScaled;

    const projX = ox + clampMagnitude(Fx) * scale;

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
          x
        </text>
        <text x={ox + 10} y="72" fill="white" fontSize="16">
          y
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
            label="Fx"
          />
        )}

        {fyP > 0.01 && (
          <SvgArrow
            x1={projX}
            y1={oy}
            x2={projX}
            y2={yEnd}
            color={SVG_COLORS.SUCCESS || "#22c55e"}
            label="Fy"
          />
        )}

        {fP > 0.01 && (
          <SvgArrow
            x1={ox}
            y1={oy}
            x2={ox + fScaledX}
            y2={oy - fScaledY}
            color={SVG_COLORS.WARNING || "#f59e0b"}
            label="F"
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

        <text x="90" y="470" fill="rgba(255,255,255,0.9)" fontSize="16">
          {lang === "es"
            ? `Módulo F = ${F.toFixed(2)}`
            : `Magnitude F = ${F.toFixed(2)}`}
        </text>

        <text x="90" y="495" fill="rgba(255,255,255,0.72)" fontSize="14">
          {lang === "es"
            ? `Fase: ${phase}`
            : `Phase: ${phase}`}
        </text>
      </>
    );
  },
};

export default profile;