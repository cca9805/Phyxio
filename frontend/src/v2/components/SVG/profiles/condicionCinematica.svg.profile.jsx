// frontend/src/v2/components/SVG/profiles/condicionCinematica.svg.profile.jsx
//
// Profile SVG animado para: condicion-cinematica
//
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
  const n = Number(String(v || "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const VB_W = 900;
const VB_H = 650;
const FLOOR_Y = 470;

const condicionCinematicaProfile = {
  meta: {
    id: "svg-condicion-cinematica",
    leafId: "condicion-de-rodadura-sin-deslizamiento",
    title: {
      es: "Condicion cinematica de rodadura",
      en: "Rolling kinematic condition",
    },
    subtitle: {
      es: "Rodadura pura: velocidad de contacto instantanea cercana a cero",
      en: "Pure rolling: instantaneous contact velocity near zero",
    },
    badge: {
      label: {
        es: "Resultado",
        en: "Result",
      },
      value: ({ p, fmt }) => `v = ${fmt(safeNum(p.v, 0), 3)} m/s`,
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "¿Cómo verificar si una rueda cumple la condición de rodadura sin deslizamiento observando v, omega, R y la velocidad de contacto?",
      en: "How can we verify whether a wheel satisfies the no-slip rolling condition by looking at v, omega, R, and contact velocity?",
    },
    magnitud_estrella: "v_contacto",
    magnitud_secundaria: "delta",
    variable_control: "omega",
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: `0 0 ${VB_W} ${VB_H}`,
  svgHeight: 760,

  params: {
    schema: [
      {
        key: "R",
        default: 0.5,
        label: { es: "Radio R (m)", en: "Radius R (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.1,
        max: 1.2,
        step: 0.01,
      },
      {
        key: "omega",
        default: 6,
        label: { es: "Velocidad angular omega (rad/s)", en: "Angular velocity omega (rad/s)" },
        unit: "rad/s",
        type: SVG_CONTROL_TYPES.RANGE,
        min: -18,
        max: 18,
        step: 0.1,
      },
      {
        key: "slipRatio",
        default: 0,
        label: { es: "Factor de deslizamiento", en: "Slip factor" },
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0,
        max: 1,
        step: 0.01,
      },
      {
        key: "showVectors",
        default: true,
        label: { es: "Mostrar vectores", en: "Show vectors" },
        type: SVG_CONTROL_TYPES.TOGGLE,
      },
      {
        key: "showFormula",
        default: true,
        label: { es: "Mostrar formulas", en: "Show formulas" },
        type: SVG_CONTROL_TYPES.TOGGLE,
      },
    ],
    derivations: {
      v: ({ omega, R }) => safeNum(omega, 6) * safeNum(R, 0.5),
      v_top: ({ v, omega, R }) => safeNum(v, 0) + safeNum(omega, 6) * safeNum(R, 0.5),
      v_contacto: ({ v, omega, R, slipRatio }) => {
        const pureContact = safeNum(v, 0) - safeNum(omega, 6) * safeNum(R, 0.5);
        const slip = clamp(safeNum(slipRatio, 0), 0, 1);
        return pureContact + slip * safeNum(v, 0);
      },
    },
    sanitize: (base) => ({
      ...base,
      R: clamp(safeNum(base.R, 0.5), 0.1, 1.2),
      omega: clamp(safeNum(base.omega, 6), -18, 18),
      slipRatio: clamp(safeNum(base.slipRatio, 0), 0, 1),
      showVectors: base.showVectors !== false,
      showFormula: base.showFormula !== false,
    }),
  },

  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 8,
    loop: true,
    state: (t, p) => {
      const v = safeNum(p.v, safeNum(p.omega, 0) * safeNum(p.R, 0.5));
      const omega = safeNum(p.omega, 0);
      const pxPerM = 170;
      const laneWidth = 620;
      const travel = v * t * pxPerM;
      const x = 140 + ((((travel % laneWidth) + laneWidth) % laneWidth));
      const theta = omega * t;
      return {
        x,
        theta,
        v_center: v,
        v_top: safeNum(p.v_top, v + omega * safeNum(p.R, 0.5)),
        v_contacto: safeNum(p.v_contacto, 0),
      };
    },
  },
  infoCards: [
    {
      key: "constraint",
      label: {
        es: "Ligadura",
        en: "Constraint",
      },
      lines: ({ lang }) => [
        lang === "en" ? "Pure rolling requires v = omega R." : "La rodadura pura exige v = omega R.",
        lang === "en" ? "Then contact velocity stays near zero." : "Entonces la velocidad de contacto queda cerca de cero.",
      ],
      result: ({ p, fmt, lang }) =>
        lang === "en"
          ? `omega·R = ${fmt(safeNum(p.omega, 0) * safeNum(p.R, 0), 3)} m/s`
          : `omega·R = ${fmt(safeNum(p.omega, 0) * safeNum(p.R, 0), 3)} m/s`,
      resultColor: "#93c5fd",
    },
    {
      key: "diagnosis",
      label: {
        es: "Diagnóstico",
        en: "Diagnosis",
      },
      lines: ({ p, fmt, lang }) => {
        const delta = safeNum(p.v_contacto, 0);
        const reading =
          Math.abs(delta) <= 0.01
            ? (lang === "en" ? "Near-zero residual: ideal contact." : "Residuo casi nulo: contacto ideal.")
            : delta > 0
              ? (lang === "en" ? "Positive delta: skidding." : "Delta positivo: derrape.")
              : (lang === "en" ? "Negative delta: spin-out." : "Delta negativo: patinamiento.");
        return [
          lang === "en" ? `v = ${fmt(safeNum(p.v, 0), 3)} m/s` : `v = ${fmt(safeNum(p.v, 0), 3)} m/s`,
          lang === "en" ? `v_contact = ${fmt(delta, 3)} m/s` : `v_contacto = ${fmt(delta, 3)} m/s`,
          reading,
        ];
      },
      result: ({ p, fmt, lang }) =>
        lang === "en"
          ? `delta = ${fmt(safeNum(p.v_contacto, 0), 3)} m/s`
          : `delta = ${fmt(safeNum(p.v_contacto, 0), 3)} m/s`,
      resultColor: "#34d399",
    },
  ],

  render: ({ p, state, lang, toNum, fmt, formulaLabel }) => {
    const isEs = lang !== "en";
    const Rm = toNum(p.R, 0.5);
    const omega = toNum(p.omega, 0);
    const showVectors = p.showVectors !== false;
    const showFormula = p.showFormula !== false;
    const slipRatio = clamp(toNum(p.slipRatio, 0), 0, 1);

    const wheelR = clamp(Rm * 170, 40, 150);
    const cx = toNum(state.x, 240);
    const cy = FLOOR_Y - wheelR;
    const thetaDeg = (toNum(state.theta, 0) * 180) / Math.PI;

    const vCenter = toNum(state.v_center, toNum(p.v, 0));
    const vTop = toNum(state.v_top, toNum(p.v_top, 0));
    const vContacto = toNum(state.v_contacto, toNum(p.v_contacto, 0));

    const arrowScale = 20;
    const arrowMax = 140;
    const velToDx = (v) => clamp(v * arrowScale, -arrowMax, arrowMax);
    const dxCenter = velToDx(vCenter);
    const dxTop = velToDx(vTop);
    const dxContact = velToDx(vContacto);

    return (
      <g>
        <defs>
          <linearGradient id="bgCondCineStd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={VB_W} height={VB_H} fill="url(#bgCondCineStd)" />

        {formulaLabel ? (
          <g transform="translate(808, 25)">
            <rect x="0" y="-12" width="78" height="24" rx="12" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" strokeWidth="1" />
            <text x="39" y="1" textAnchor="middle" dominantBaseline="middle" fontSize="9" fill="#22c55e" fontWeight="900">
              SYNC OK
            </text>
          </g>
        ) : null}

        <SvgGround x1={0} x2={VB_W} y={FLOOR_Y} color="#e2e8f0" />

        {Array.from({ length: 14 }).map((_, i) => {
          const laneX = (i * 80 + ((toNum(state.x, 0) * 0.35) % 80));
          return (
            <line
              key={i}
              x1={laneX}
              y1={FLOOR_Y + 28}
              x2={laneX + 40}
              y2={FLOOR_Y + 28}
              stroke="rgba(226,232,240,0.45)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}

        <g transform={`translate(${cx}, ${cy})`}>
          <circle r={wheelR} fill="rgba(59,130,246,0.18)" stroke="#60a5fa" strokeWidth="3.5" />
          <circle r={8} fill="#e2e8f0" />

          <g transform={`rotate(${thetaDeg})`}>
            <line x1={0} y1={0} x2={wheelR} y2={0} stroke="#f8fafc" strokeWidth="3" />
            <line x1={0} y1={0} x2={0} y2={-wheelR} stroke="#f8fafc" strokeWidth="3" />
            <line x1={0} y1={0} x2={-wheelR} y2={0} stroke="#94a3b8" strokeWidth="2" />
            <line x1={0} y1={0} x2={0} y2={wheelR} stroke="#94a3b8" strokeWidth="2" />
          </g>

          <line x1={0} y1={0} x2={0} y2={wheelR} stroke="rgba(148,163,184,0.65)" strokeDasharray="5 4" />
          <text x={10} y={wheelR * 0.45} fill="#93c5fd" fontSize="12" fontWeight="800">R</text>
        </g>

        <circle cx={cx} cy={FLOOR_Y} r="5" fill="#ef4444" />

        {showVectors ? (
          <g>
            <SvgArrow x1={cx} y1={cy} x2={cx + dxCenter} y2={cy} color="#22c55e" label="v_centro" />
            <SvgArrow x1={cx} y1={cy - wheelR} x2={cx + dxTop} y2={cy - wheelR} color="#f59e0b" label="v_superior" />
            <SvgArrow x1={cx} y1={FLOOR_Y} x2={cx + dxContact} y2={FLOOR_Y} color="#ef4444" label="v_contacto" labelDy={18} />
          </g>
        ) : null}

        <text x="28" y="38" fill="#f8fafc" fontSize="14" fontWeight="900">
          {isEs ? "Rodadura sin deslizamiento" : "Rolling without slipping"}
        </text>
        <text x="28" y="58" fill="#cbd5e1" fontSize="12" fontWeight="700">
          {isEs ? "Condicion ideal: v = omega R y v_contacto ~ 0" : "Ideal condition: v = omega R and v_contacto ~ 0"}
        </text>

        {showFormula ? (
          <g>
            <text x="28" y="92" fill="#93c5fd" fontSize="13" fontWeight="900">v = omega R</text>
            <text x="28" y="112" fill="#fca5a5" fontSize="13" fontWeight="900">v_contacto = v - omega R</text>
          </g>
        ) : null}

        <g transform={`translate(28, ${FLOOR_Y + 38})`}>
          <rect x="0" y="0" width="360" height="112" rx="12" fill="rgba(15,23,42,0.55)" stroke="rgba(148,163,184,0.3)" />
          <text x="14" y="24" fill="#f8fafc" fontSize="12" fontWeight="900">
            {isEs ? "Lectura numerica" : "Numeric reading"}
          </text>
          <text x="14" y="46" fill="#e2e8f0" fontSize="12">v = {fmt(vCenter, 3)} m/s</text>
          <text x="14" y="66" fill="#e2e8f0" fontSize="12">v_superior = {fmt(vTop, 3)} m/s</text>
          <text x="14" y="86" fill="#e2e8f0" fontSize="12">v_contacto = {fmt(vContacto, 3)} m/s</text>
          <text x="14" y="106" fill={slipRatio > 0.001 ? "#fca5a5" : "#86efac"} fontSize="11" fontWeight="900">
            {slipRatio > 0.001
              ? (isEs ? `Deslizamiento activo (factor ${fmt(slipRatio, 2)})` : `Slip enabled (factor ${fmt(slipRatio, 2)})`)
              : (isEs ? "Regimen de rodadura pura (ideal)" : "Pure rolling regime (ideal)")}
          </text>
        </g>

        <g transform={`translate(620, ${FLOOR_Y + 38})`}>
          <rect x="0" y="0" width="245" height="120" rx="12" fill="rgba(15,23,42,0.45)" stroke="rgba(148,163,184,0.25)" />
          <text x="12" y="24" fill="#f8fafc" fontSize="12" fontWeight="900">
            {isEs ? "Parametros activos" : "Active parameters"}
          </text>
          <text x="12" y="46" fill="#cbd5e1" fontSize="12">R = {fmt(Rm, 3)} m</text>
          <text x="12" y="66" fill="#cbd5e1" fontSize="12">omega = {fmt(omega, 2)} rad/s</text>
          <text x="12" y="86" fill="#cbd5e1" fontSize="12">slipRatio = {fmt(slipRatio, 2)}</text>
        </g>
      </g>
    );
  },

  interpretation_binding: {
    paramsIn: ["R", "omega", "v", "v_contacto", "slipRatio"],
    stateOut: ["v", "v_top", "v_contacto", "omega", "R", "slipRatio"],
  },
};

export default condicionCinematicaProfile;
