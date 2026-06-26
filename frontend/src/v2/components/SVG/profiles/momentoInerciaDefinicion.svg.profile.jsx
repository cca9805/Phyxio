import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
  SVG_CONTROL_TYPES,
} from "../svgGrammar";
import { SvgDisk, SvgTorqueArc } from "../SvgProfileRenderer";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = Number(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const momentoInerciaDefinicionProfile = {
  meta: {
    id: "svg-definicion-momento-de-inercia",
    leafId: "definicion-momento-de-inercia",
    title: {
      es: "Definicion de momento de inercia",
      en: "Definition of moment of inertia",
    },
    subtitle: {
      es: "La misma masa responde distinto segun su distribucion radial",
      en: "The same mass responds differently depending on radial mass distribution",
    },
  },

  interpretation_binding: {
    paramsIn: ["m", "r", "tau", "spread"],
    stateOut: ["IActual", "alphaActual", "ICompact", "alphaCompact", "kActual", "kCompact"],
    target: "I",
    preferredTarget: "I",
    secondaryTargets: ["alpha", "k", "tau"],
    visibleMagnitudes: ["I", "alpha", "k", "m", "r", "tau"],
  },

  graph_identity: {
    pregunta_principal: {
      es: "¿Como cambia el momento de inercia cuando la misma masa se aleja o se acerca al eje?",
      en: "How does the moment of inertia change when the same mass moves farther from or closer to the axis?",
    },
    magnitud_estrella: "I",
  },

  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 900 650",
  svgHeight: 720,

  params: {
    schema: [
      {
        key: "m",
        default: 2,
        label: { es: "Masa m (kg)", en: "Mass m (kg)" },
        unit: "kg",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.2,
        max: 10,
        step: 0.1,
      },
      {
        key: "r",
        default: 1.2,
        label: { es: "Radio R (m)", en: "Radius R (m)" },
        unit: "m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.2,
        max: 2.2,
        step: 0.05,
      },
      {
        key: "tau",
        default: 3,
        label: { es: "Torque tau (N*m)", en: "Torque tau (N*m)" },
        unit: "N*m",
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.2,
        max: 10,
        step: 0.1,
      },
      {
        key: "spread",
        default: 0.9,
        label: { es: "Distribucion radial k/R", en: "Radial distribution k/R" },
        type: SVG_CONTROL_TYPES.RANGE,
        min: 0.2,
        max: 1,
        step: 0.05,
      },
    ],
    derivations: {
      IActual: ({ m, r, spread }) => {
        const mass = safeNum(m, 2);
        const radius = safeNum(r, 1.2);
        const k = safeNum(spread, 0.9) * radius;
        return mass * k * k;
      },
      ICompact: ({ m, r }) => {
        const mass = safeNum(m, 2);
        const radius = safeNum(r, 1.2);
        const k = 0.35 * radius;
        return mass * k * k;
      },
      alphaActual: ({ tau, IActual }) => safeNum(IActual, 1) > 0 ? safeNum(tau, 3) / safeNum(IActual, 1) : 0,
      alphaCompact: ({ tau, ICompact }) => safeNum(ICompact, 1) > 0 ? safeNum(tau, 3) / safeNum(ICompact, 1) : 0,
      kActual: ({ r, spread }) => safeNum(r, 1.2) * safeNum(spread, 0.9),
      kCompact: ({ r }) => 0.35 * safeNum(r, 1.2),
    },
  },

  infoCards: [
    {
      key: "def",
      label: { es: "Relacion", en: "Relation" },
      lines: ({ lang }) => [
        lang === "en" ? "I = m*k^2" : "I = m*k^2",
        lang === "en" ? "tau = I*alpha" : "tau = I*alpha",
      ],
      result: ({ lang }) =>
        lang === "en"
          ? "Mass farther from the axis means larger I"
          : "La masa mas alejada del eje produce mayor I",
      resultColor: "#93c5fd",
    },
  ],

  motion: {
    type: SVG_MOTION_TYPES.ANIMATED,
    tMax: 6,
    loop: true,
    state: (t, p) => {
      const aCompact = safeNum(p.alphaCompact, 0);
      const aActual = safeNum(p.alphaActual, 0);
      return {
        thetaCompact: 0.5 * aCompact * t * t,
        thetaActual: 0.5 * aActual * t * t,
      };
    },
  },

  render: ({ p, state, lang = "es", toNum, fmt }) => {
    const isEs = lang !== "en";
    const merged = { ...p, ...state };

    const R = toNum(merged.r, 1.2);
    const IActual = toNum(merged.IActual, 1);
    const ICompact = toNum(merged.ICompact, 1);
    const alphaActual = toNum(merged.alphaActual, 1);
    const alphaCompact = toNum(merged.alphaCompact, 1);
    const kActual = toNum(merged.kActual, 1);
    const kCompact = toNum(merged.kCompact, 1);
    const thetaActual = toNum(merged.thetaActual, 0);
    const thetaCompact = toNum(merged.thetaCompact, 0);

    const wheelR = clamp(R * 80, 40, 180);
    const leftX = 250;
    const rightX = 650;
    const centerY = 300;

    return (
      <g>
        <defs>
          <linearGradient id="bgInertiaDef" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="900" height="650" fill="url(#bgInertiaDef)" />

        <line x1="450" y1="110" x2="450" y2="500" stroke="rgba(255,255,255,0.12)" strokeDasharray="8 4" />

        <g transform={`translate(${leftX}, ${centerY})`}>
          <SvgDisk cx={0} cy={0} r={wheelR} theta={thetaCompact} massDotR={wheelR * 0.35} nDots={6} color="#4ade80" />
          <SvgTorqueArc cx={0} cy={0} radius={wheelR} label="tau" />
          <text x="0" y={-wheelR - 18} textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="900">
            {isEs ? "Misma masa, masa mas cerca" : "Same mass, mass closer in"}
          </text>
          <text x="0" y={wheelR + 34} textAnchor="middle" fill="#4ade80" fontSize="14" fontWeight="900">
            I = {fmt(ICompact, 2)} kg*m^2
          </text>
          <text x="0" y={wheelR + 56} textAnchor="middle" fill="#e2e8f0" fontSize="12">
            alpha = {fmt(alphaCompact, 2)} rad/s^2
          </text>
          <text x="0" y={wheelR + 78} textAnchor="middle" fill="#fde68a" fontSize="12">
            k = {fmt(kCompact, 2)} m
          </text>
        </g>

        <g transform={`translate(${rightX}, ${centerY})`}>
          <SvgDisk cx={0} cy={0} r={wheelR} theta={thetaActual} massDotR={wheelR * (kActual / Math.max(R, 0.001))} nDots={6} color="#60a5fa" />
          <SvgTorqueArc cx={0} cy={0} radius={wheelR} label="tau" />
          <text x="0" y={-wheelR - 18} textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="900">
            {isEs ? "Misma masa, masa mas lejos" : "Same mass, mass farther out"}
          </text>
          <text x="0" y={wheelR + 34} textAnchor="middle" fill="#60a5fa" fontSize="14" fontWeight="900">
            I = {fmt(IActual, 2)} kg*m^2
          </text>
          <text x="0" y={wheelR + 56} textAnchor="middle" fill="#e2e8f0" fontSize="12">
            alpha = {fmt(alphaActual, 2)} rad/s^2
          </text>
          <text x="0" y={wheelR + 78} textAnchor="middle" fill="#fde68a" fontSize="12">
            k = {fmt(kActual, 2)} m
          </text>
        </g>

        <text x="450" y="70" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="800">
          {isEs ? "Momento de inercia y distribucion radial" : "Moment of inertia and radial mass distribution"}
        </text>
        <text x="450" y="98" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="14">
          {isEs ? "Con el mismo torque, mayor I implica menor alpha" : "For the same torque, larger I implies smaller alpha"}
        </text>

        <text x="450" y="575" textAnchor="middle" fill="#f8fafc" fontSize="14" fontWeight="800">
          {isEs ? "I depende del par objeto-eje, no solo de la masa total" : "I depends on the object-axis pair, not only on total mass"}
        </text>
        <text x="450" y="602" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="13">
          {isEs ? "Definicion discreta y continua pesan la distancia al eje con r^2" : "Both discrete and continuous definitions weight distance to the axis with r^2"}
        </text>
      </g>
    );
  },
};

export default momentoInerciaDefinicionProfile;
