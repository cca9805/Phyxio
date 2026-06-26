import React from "react";
import { SVG_SCENE_TYPES } from "../svgGrammar";

const safeNum = (v, def = 0) => {
  if (typeof v === "number") return v;
  if (v && typeof v.value === "number") return v.value;
  const n = parseFloat(String(v ?? "").replace(",", "."));
  return Number.isFinite(n) ? n : def;
};

const fmt = (n, d = 2, lang = "es") => {
  if (!Number.isFinite(n)) return "-";
  const text = n.toExponential(d);
  return lang === "en" ? text : text.replace(".", ",");
};

const profile = {
  meta: {
    id: "svg-energia-y-momento-de-la-onda-em",
    leafId: "energia-y-momento-de-la-onda-em",
    title: {
      es: "Energia y momento de la onda EM",
      en: "Energy and Momentum of an EM Wave",
    },
    subtitle: {
      es: "Intensidad, momento y presion de radiacion",
      en: "Intensity, momentum, and radiation pressure",
    },
  },
  graph_identity: {
    pregunta_principal: {
      es: "Como transporta una onda electromagnetica energia y momento mediante su intensidad?",
      en: "How does an electromagnetic wave transport energy and momentum through its intensity?",
    },
    magnitud_estrella: "p_rad",
    variable_control: "intensidad_media_de_poynting",
    interpretation_binding: {
      target: "p_rad",
      formula_ref: "presion_radiacion_absorbente",
      result_key: "p_rad",
    },
  },
  infoCards: [
    {
      key: "intensidad",
      label: { es: "Intensidad media", en: "Average intensity" },
      lines: ({ p, lang }) => {
        const S = safeNum(p?.intensidad_media_de_poynting, 1000);
        const c = 2.998e8;
        return [
          lang === "en" ? `S med ${fmt(S, 2, lang)} W/m2` : `S med ${fmt(S, 2, lang)} W/m2`,
          lang === "en" ? `u EM ${fmt(S / c, 2, lang)} J/m3` : `u EM ${fmt(S / c, 2, lang)} J/m3`,
        ];
      },
    },
    {
      key: "presion",
      label: { es: "Presion de radiacion", en: "Radiation pressure" },
      lines: ({ p, lang }) => {
        const S = safeNum(p?.intensidad_media_de_poynting, 1000);
        const c = 2.998e8;
        return [
          lang === "en" ? `p rad ${fmt(S / c, 2, lang)} Pa` : `p rad ${fmt(S / c, 2, lang)} Pa`,
          lang === "en" ? "absorbing surface" : "superficie absorbente",
        ];
      },
    },
  ],
  controls: [
    {
      id: "intensidad_media_de_poynting",
      label: { es: "Intensidad media (W/m2)", en: "Average intensity (W/m2)" },
      type: "slider",
      min: 1,
      max: 2000,
      step: 1,
      default: 1000,
    },
  ],
  scene: SVG_SCENE_TYPES.CUSTOM,
  render: ({ p, lang = "es", dimensions = {} }) => {
    const width = dimensions.width || 920;
    const height = dimensions.height || 520;
    const S = safeNum(p?.intensidad_media_de_poynting, 1000);
    const c = 2.998e8;
    const pressure = S / c;
    const u = S / c;
    const beamOpacity = Math.max(0.18, Math.min(0.9, S / 2200));
    const arrowScale = Math.max(70, Math.min(210, 60 + S / 8));
    const isEn = lang === "en";

    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id="emEnergyBeam" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity={beamOpacity * 0.25} />
            <stop offset="55%" stopColor="#f59e0b" stopOpacity={beamOpacity} />
            <stop offset="100%" stopColor="#ef4444" stopOpacity={beamOpacity * 0.7} />
          </linearGradient>
          <marker id="emEnergyArrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 Z" fill="#0f172a" />
          </marker>
        </defs>
        <rect x="60" y="165" width={width - 250} height="170" rx="14" fill="url(#emEnergyBeam)" />
        <line x1="95" y1="250" x2={95 + arrowScale} y2="250" stroke="#0f172a" strokeWidth="4" markerEnd="url(#emEnergyArrow)" />
        <line x1="105" y1="210" x2={105 + arrowScale * 0.78} y2="210" stroke="#1d4ed8" strokeWidth="3" markerEnd="url(#emEnergyArrow)" />
        <line x1="105" y1="292" x2={105 + arrowScale * 0.78} y2="292" stroke="#dc2626" strokeWidth="3" markerEnd="url(#emEnergyArrow)" />
        <rect x={width - 160} y="130" width="36" height="240" rx="6" fill="#334155" />
        <rect x={width - 124} y="130" width="10" height="240" fill="#94a3b8" />
        <text x="70" y="140" fontSize="15" fill="#0f172a" fontWeight="700">
          {isEn ? "energy and momentum flow" : "flujo de energia y momento"}
        </text>
        <text x={width - 205} y="112" fontSize="13" fill="#0f172a">
          {isEn ? "absorbing surface" : "superficie absorbente"}
        </text>
        <text x="86" y="382" fontSize="13" fill="#0f172a">
          {isEn ? `u EM ${fmt(u, 2, lang)} J/m3` : `u EM ${fmt(u, 2, lang)} J/m3`}
        </text>
        <text x="86" y="404" fontSize="13" fill="#0f172a">
          {isEn ? `S med ${fmt(S, 2, lang)} W/m2` : `S med ${fmt(S, 2, lang)} W/m2`}
        </text>
        <text x="86" y="426" fontSize="13" fill="#0f172a">
          {isEn ? `p rad ${fmt(pressure, 2, lang)} Pa` : `p rad ${fmt(pressure, 2, lang)} Pa`}
        </text>
      </svg>
    );
  },
};

export default profile;
