import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "ondas-sismicas-p-y-s",
    title: {
      es: "Ondas sismicas P y S",
      en: "P and S seismic waves",
    },
  },
  title: {
    es: "Llegadas P y S en un sismografo",
    en: "P and S arrivals at a seismograph",
  },
  infoCards: [
    {
      key: "p-first",
      label: { es: "P llega antes", en: "P arrives first" },
      body: {
        es: "La onda P viaja mas rapido que la S porque moviliza compresion y cizalla. Por eso su marca aparece antes en el sismograma.",
        en: "The P wave travels faster than the S wave because it mobilizes compression and shear. That is why its mark appears earlier in the seismogram.",
      },
    },
    {
      key: "distance",
      label: { es: "Distancia", en: "Distance" },
      body: {
        es: "La diferencia delta_t_ps aumenta con la distancia al foco y permite estimar donde ocurrio el sismo.",
        en: "The delta_t_ps difference increases with distance to the focus and allows estimating where the earthquake occurred.",
      },
    },
  ],
  interpretation_binding: {
    target: "delta_t_ps",
    magnitudes: ["v_p", "v_s", "delta_t_ps", "d_foco", "K_bulk", "G_shear", "rho_medio"],
    formula: "diferencia_tiempos_sismo",
  },
  id: "ondas-sismicas-p-y-s-svg",
  leaf_id: "ondas-sismicas-p-y-s",
  graph_identity: {
    pregunta_principal: {
      es: "Por que las ondas P llegan antes que las S a un sismografo y que informacion da esa diferencia temporal sobre la distancia al foco?",
      en: "Why do P waves arrive before S waves at a seismograph and what information does that time difference give about the distance to the focus?",
      keywords: ["ondas", "p", "s", "sismografo", "diferencia", "temporal", "distancia", "foco"],
    },
    magnitud_estrella: "delta_t_ps",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "ondas-sismicas-p-y-s",
    graphId: "ondas-sismicas-p-y-s-svg",
    purpose: {
      es: "Visualizar la llegada temprana de la onda P y la llegada posterior de la onda S en un registro sismico.",
      en: "Visualize early P-wave arrival and later S-wave arrival in a seismic record.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["v_p", "v_s", "d_foco"],
    acceptedAliases: {
      v_p: ["p_wave_speed", "velocidad_p"],
      v_s: ["s_wave_speed", "velocidad_s"],
      delta_t_ps: ["ps_delay", "diferencia_ps"],
      d_foco: ["focus_distance", "distancia_foco"],
    },
    derivedMagnitudes: ["delta_t_ps"],
    targetCandidates: ["delta_t_ps", "d_foco"],
    equations: ["delta_t_ps = d_foco * (1/v_s - 1/v_p)"],
    hypotheses: [
      { es: "Medio homogeneo entre foco y estacion.", en: "Homogeneous medium between focus and station." },
      { es: "v_p mayor que v_s.", en: "v_p greater than v_s." },
    ],
    validityDomain: [
      { es: "Trayectoria aproximada sin refraccion fuerte.", en: "Approximate path without strong refraction." },
    ],
    visualSimplifications: [
      { es: "El sismograma es esquematico y no muestra atenuacion real.", en: "The seismogram is schematic and does not show real attenuation." },
    ],
    alwaysVisible: ["p_arrival", "s_arrival", "delta_t_marker"],
  }),
  params: {
    schema: [
      { key: "v_p", default: 6000 },
      { key: "v_s", default: 3500 },
      { key: "d_foco", default: 150000 },
    ],
    derivations: {
      delta_t_ps: ({ v_p, v_s, d_foco }) => Number(d_foco ?? 150000) * (1 / Number(v_s ?? 3500) - 1 / Number(v_p ?? 6000)),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const vP = Math.max(1, Number(p.v_p ?? 6000));
    const vS = Math.max(1, Math.min(Number(p.v_s ?? 3500), vP * 0.95));
    const d = Math.max(1, Number(p.d_foco ?? 150000));
    const tP = d / vP;
    const tS = d / vS;
    const delta = tS - tP;
    const x0 = 105;
    const y0 = 300;
    const w = 700;
    const xP = x0 + (tP / tS) * w * 0.82;
    const xS = x0 + w * 0.82;
    const waveform = Array.from({ length: 160 }, (_, i) => {
      const x = x0 + (i / 159) * w;
      const ampP = Math.exp(-((x - xP) ** 2) / 700) * 24;
      const ampS = Math.exp(-((x - xS) ** 2) / 1100) * 42;
      const y = y0 + Math.sin(i * 0.55) * (ampP + ampS);
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    }).join(" ");

    return (
      <g>
        <rect x="54" y="42" width="812" height="420" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="460" y="78" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="700">
          {lang === "en" ? "P arrival precedes S arrival" : "La llegada P precede a la llegada S"}
        </text>
        <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke="#94a3b8" strokeWidth="2" />
        <path d={waveform} fill="none" stroke="#0f172a" strokeWidth="2.5" />
        <line x1={xP} y1="155" x2={xP} y2="380" stroke="#2563eb" strokeWidth="3" strokeDasharray="7 5" />
        <line x1={xS} y1="155" x2={xS} y2="380" stroke="#f97316" strokeWidth="3" strokeDasharray="7 5" />
        <text x={xP} y="145" textAnchor="middle" fill="#2563eb" fontSize="15" fontWeight="700">P</text>
        <text x={xS} y="145" textAnchor="middle" fill="#f97316" fontSize="15" fontWeight="700">S</text>
        <line x1={xP} y1="405" x2={xS} y2="405" stroke="#0f172a" strokeWidth="2" markerStart="url(#arrowhead-start)" markerEnd="url(#arrowhead)" />
        <text x={(xP + xS) / 2} y="430" textAnchor="middle" fill="#0f172a" fontSize="13">
          delta_t_ps = {delta.toFixed(1)} s
        </text>
        <text x="460" y="112" textAnchor="middle" fill="#475569" fontSize="13">
          {lang === "en" ? `distance to focus ${(d / 1000).toFixed(0)} km` : `distancia al foco ${(d / 1000).toFixed(0)} km`}
        </text>
      </g>
    );
  },
};

export default profile;
