// frontend/src/v2/components/SVG/profiles/sistemasNoInerciales.svg.profile.jsx
import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";
import { SvgArrow, SvgGround } from "../SvgProfileRenderer";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v || "").replace(",", "."));
  return Number.isNaN(n) ? def : n;
};

const VB_W = 900;
const VB_H = 650;
const FLOOR_Y = 450;

const sistemasNoInercialesProfile = {
  meta: {
    id: "svg-sistemas-no-inerciales-intro",
    leafId: "sistemas-no-inerciales-intro",
    title: {
      es: "Sistemas no inerciales",
      en: "Non-inertial frames",
    },
    subtitle: {
      es: "Marco acelerado con lectura de fuerza ficticia",
      en: "Accelerated frame with fictitious-force reading",
    },
  },

  graph_identity: {
    id: "sistemas-no-inerciales-svg",
    es: "Marco acelerado con fuerza ficticia",
    en: "Accelerated frame with fictitious force",
  },

  pregunta_principal: {
    es: "Que fuerza adicional debe introducirse al describir un cuerpo desde un marco acelerado, y como cambia ahi la relacion entre fuerzas reales, fuerza ficticia y aceleracion relativa?",
    en: "Which additional force must be introduced when describing a body from an accelerated frame, and how does the relation between real forces, fictitious force, and relative acceleration change there?",
  },

  magnitud_estrella: "F_ficticia",

  infoCards: [
    {
      key: "frame-reading",
      label: { es: "Lectura del marco", en: "Frame reading" },
      lines: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        const a = safeNum(merged.aFrame, 2.5);
        const mode = merged.mode ?? "noninertial";
        if (lang === "en") {
          return [
            mode === "noninertial"
              ? "Inside the wagon the frame is accelerated."
              : "From the ground the frame is treated as inertial.",
            `Frame acceleration a_marco = ${a.toFixed(1)} m/s^2`,
            Math.abs(a) > 0.05
              ? "The fictitious-force correction is relevant."
              : "The frame is close to inertial for this setting.",
          ];
        }
        return [
          mode === "noninertial"
            ? "Dentro del vagon el marco es acelerado."
            : "Desde el suelo el marco se trata como inercial.",
          `Aceleracion del marco a_marco = ${a.toFixed(1)} m/s^2`,
          Math.abs(a) > 0.05
            ? "La correccion por fuerza ficticia es relevante."
            : "El marco es casi inercial en esta configuracion.",
        ];
      },
    },
    {
      key: "force-balance",
      label: { es: "Balance de fuerzas", en: "Force balance" },
      highlight: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        const a = safeNum(merged.aFrame, 2.5);
        if (Math.abs(a) < 0.05) {
          return lang === "en"
            ? "No significant fictitious force is needed."
            : "No hace falta una fuerza ficticia apreciable.";
        }
        return lang === "en"
          ? "The fictitious force points opposite to frame acceleration."
          : "La fuerza ficticia apunta en sentido opuesto a la aceleracion del marco.";
      },
      result: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        const m = safeNum(merged.m, 10);
        const a = safeNum(merged.aFrame, 2.5);
        const f = -m * a;
        return lang === "en"
          ? `F_ficticia = ${f.toFixed(1)} N`
          : `F_ficticia = ${f.toFixed(1)} N`;
      },
      description: ({ p, state, lang }) => {
        const merged = { ...p, ...state };
        const mode = merged.mode ?? "noninertial";
        return lang === "en"
          ? mode === "noninertial"
            ? "The inside observer adds a fictitious force to preserve a Newton-like balance with relative acceleration."
            : "From the inertial ground view no fictitious force is drawn; the apparent effect is explained by the wagon acceleration itself."
          : mode === "noninertial"
            ? "El observador interior anade una fuerza ficticia para conservar un balance tipo Newton con aceleracion relativa."
            : "Desde el suelo inercial no se dibuja fuerza ficticia; el efecto aparente se explica por la aceleracion del vagon.";
      },
    },
  ],

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "mode",
        default: "noninertial",
        label: { es: "Marco de referencia", en: "Reference frame" },
        type: SVG_CONTROL_TYPES.SELECT,
        options: [
          { value: "noninertial", label: { es: "Interior del vagon", en: "Inside wagon" } },
          { value: "inertial", label: { es: "Suelo inercial", en: "Inertial ground" } },
        ],
      },
      {
        key: "aFrame",
        default: 2.5,
        label: { es: "Aceleracion del vagon", en: "Wagon acceleration" },
        unit: "m/s^2",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -10,
        max: 10,
        step: 0.1,
      },
      {
        key: "m",
        default: 10,
        label: { es: "Masa del bloque", en: "Block mass" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 1,
        max: 100,
        step: 1,
      },
    ],
    derivations: {
      Ffic: ({ m, aFrame }) => -safeNum(m, 10) * safeNum(aFrame, 2.5),
    },
  },

  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 6,
    loop: true,
    state: (t, p) => {
      const a = safeNum(p.aFrame, 2.5);
      const xRaw = 0.5 * a * t * t * 20;
      const xFrame = Math.min(Math.max(xRaw, -180), 180);
      return { xFrame };
    },
  },

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const merged = { ...p, ...state };
    const mode = merged.mode ?? "noninertial";
    const a = toNum(merged.aFrame, 2.5);
    const m = toNum(merged.m, 10);
    const xFrame = toNum(state?.xFrame, 0);
    const isNI = mode === "noninertial";

    const wagonX = isNI ? 450 : 450 + xFrame;
    const objX = isNI ? 450 - xFrame : 450;
    const objXClamped = Math.max(wagonX - 220, Math.min(wagonX + 220, objX));
    const title = isNI
      ? (lang === "en" ? "Inside view: non-inertial frame" : "Vista interior: marco no inercial")
      : (lang === "en" ? "Ground view: inertial frame" : "Vista del suelo: marco inercial");

    return (
      <g>
        <defs>
          <linearGradient id="bgNoInercial" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgNoInercial)" />

        {formulaLabel && (
          <g transform="translate(810, 25)">
            <rect
              x="0"
              y="-12"
              width="75"
              height="24"
              rx="12"
              fill="rgba(34,197,94,0.15)"
              stroke="rgba(34,197,94,0.4)"
              strokeWidth="1"
            />
            <text
              x="37"
              y="1"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fill="#22c55e"
              fontWeight="900"
            >
              SYNC OK
            </text>
          </g>
        )}

        <SvgGround x1={0} x2={900} y={FLOOR_Y} color="#ffffff" />

        <g transform={`translate(${wagonX - 450}, 0)`}>
          <rect
            x={200}
            y={300}
            width={500}
            height={150}
            rx={20}
            fill="rgba(255,255,255,0.05)"
            stroke="#ffffff"
            strokeWidth={2}
          />
          <circle cx={300} cy={460} r={20} fill="#0f172a" stroke="#ffffff" />
          <circle cx={600} cy={460} r={20} fill="#0f172a" stroke="#ffffff" />
          <text x={450} y={280} textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="900">
            {lang === "en"
              ? `ACCELERATED FRAME  a = ${fmt(a, 1)} m/s^2`
              : `MARCO ACELERADO  a = ${fmt(a, 1)} m/s^2`}
          </text>
          <SvgArrow x1={450} y1={290} x2={450 + a * 10} y2={290} color="#60a5fa" label="a_marco" />
        </g>

        <g transform={`translate(${objXClamped}, 390)`}>
          <rect
            x="-30"
            y="-30"
            width="60"
            height="60"
            rx="4"
            fill="rgba(15,23,42,0.9)"
            stroke="#ffffff"
            strokeWidth={2}
          />
          <text x="0" y="5" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="900" opacity="0.6">
            m
          </text>

          {isNI && Math.abs(a) > 0.1 && (
            <SvgArrow
              x1={0}
              y1={0}
              x2={-a * m * 0.15}
              y2={0}
              color="#f59e0b"
              label="F_fict"
            />
          )}
        </g>

        <text x={20} y={35} fill="#ffffff" opacity={0.85} fontSize="14" fontWeight="900">
          {title}
        </text>

        <text x={20} y={58} fill="#ffffff" opacity={0.55} fontSize="11">
          {lang === "en"
            ? "Real forces remain physical; the fictitious force is added only in the accelerated frame."
            : "Las fuerzas reales siguen siendo fisicas; la fuerza ficticia solo se anade en el marco acelerado."}
        </text>
      </g>
    );
  },

  interpretation_binding: {
    paramsIn: ["mode", "aFrame", "m"],
    stateOut: ["Ffic"],
  },
};

export default sistemasNoInercialesProfile;
