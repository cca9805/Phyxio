import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "ondas-longitudinales-en-barras",
    title: {
      es: "Ondas longitudinales en barras",
      en: "Longitudinal waves in bars",
    },
  },
  title: {
    es: "Compresion que avanza en una barra",
    en: "Compression traveling along a bar",
  },
  infoCards: [
    {
      key: "non-dispersive",
      label: { es: "No dispersiva", en: "Non-dispersive" },
      body: {
        es: "En una barra esbelta la relacion omega-k es lineal. Todas las frecuencias viajan con la misma velocidad v_barra.",
        en: "In a slender bar the omega-k relation is linear. All frequencies travel with the same speed v_barra.",
      },
    },
    {
      key: "material-speed",
      label: { es: "Material", en: "Material" },
      body: {
        es: "La velocidad depende de E_young y rho_vol. El area cambia la impedancia, pero no la velocidad.",
        en: "Speed depends on E_young and rho_vol. Area changes impedance, but not speed.",
      },
    },
  ],
  interpretation_binding: {
    target: "lambda_long",
    magnitudes: ["v_barra", "E_young", "rho_vol", "Z_barra", "omega", "k_long", "lambda_long"],
    formula: "relacion_dispersion_barra",
  },
  id: "ondas-longitudinales-en-barras-svg",
  leaf_id: "ondas-longitudinales-en-barras",
  graph_identity: {
    pregunta_principal: {
      es: "Como se propagan las ondas de compresion a lo largo de una barra y que determina su velocidad?",
      en: "How do compression waves propagate along a bar and what determines their speed?",
      keywords: ["ondas", "compresion", "barra", "propagan", "velocidad", "material", "densidad", "young"],
    },
    magnitud_estrella: "lambda_long",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "ondas-longitudinales-en-barras",
    graphId: "ondas-longitudinales-en-barras-svg",
    purpose: {
      es: "Visualizar una onda de compresion longitudinal y su longitud de onda en una barra esbelta.",
      en: "Visualize a longitudinal compression wave and its wavelength in a slender bar.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["v_barra", "omega", "k_long"],
    acceptedAliases: {
      v_barra: ["longitudinal_speed", "wave_speed"],
      k_long: ["wavenumber", "numero_onda"],
      lambda_long: ["wavelength", "longitud_onda"],
    },
    derivedMagnitudes: ["lambda_long", "k_long"],
    targetCandidates: ["lambda_long", "v_barra"],
    equations: ["omega = v_barra * k_long", "lambda_long = 2*pi/k_long"],
    hypotheses: [
      { es: "Barra esbelta de seccion uniforme.", en: "Slender bar with uniform cross-section." },
      { es: "Regimen elastico lineal.", en: "Linear elastic regime." },
    ],
    validityDomain: [
      { es: "Longitud de onda mucho mayor que la dimension transversal.", en: "Wavelength much larger than the transverse dimension." },
    ],
    visualSimplifications: [
      { es: "El color representa compresion y traccion relativas.", en: "Color represents relative compression and tension." },
    ],
    alwaysVisible: ["bar_axis", "compression_regions", "wavelength_marker"],
  }),
  params: {
    schema: [
      { key: "v_barra", default: 5100 },
      { key: "omega", default: 6283 },
    ],
    derivations: {
      k_long: ({ v_barra, omega }) => Number(omega ?? 6283) / Number(v_barra ?? 5100),
      lambda_long: ({ v_barra, omega }) => (2 * Math.PI * Number(v_barra ?? 5100)) / Number(omega ?? 6283),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const v = Math.max(1, Number(p.v_barra ?? 5100));
    const omega = Math.max(1, Number(p.omega ?? 6283));
    const k = omega / v;
    const lambda = (2 * Math.PI) / k;
    const x0 = 100;
    const y0 = 205;
    const w = 710;
    const h = 110;
    const cells = Array.from({ length: 24 }, (_, i) => {
      const phase = Math.sin((i / 24) * Math.PI * 4);
      const fill = phase >= 0 ? "#2563eb" : "#f97316";
      return (
        <rect
          key={i}
          x={x0 + (i * w) / 24}
          y={y0}
          width={w / 24 + 1}
          height={h}
          fill={fill}
          opacity={0.18 + 0.28 * Math.abs(phase)}
        />
      );
    });

    return (
      <g>
        <rect x="54" y="42" width="812" height="420" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="460" y="78" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="700">
          {lang === "en" ? "Longitudinal compression wave in a bar" : "Onda longitudinal de compresion en una barra"}
        </text>
        <rect x={x0} y={y0} width={w} height={h} rx="8" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        {cells}
        <line x1={x0} y1={y0 + h / 2} x2={x0 + w} y2={y0 + h / 2} stroke="#0f172a" strokeWidth="2" strokeDasharray="7 5" />
        <line x1="180" y1="150" x2="430" y2="150" stroke="#2563eb" strokeWidth="4" markerEnd="url(#arrowhead)" />
        <text x="438" y="155" fill="#2563eb" fontSize="14" fontWeight="700">v_barra</text>
        <line x1="220" y1="352" x2="435" y2="352" stroke="#0f172a" strokeWidth="2" markerStart="url(#arrowhead-start)" markerEnd="url(#arrowhead)" />
        <text x="327" y="378" textAnchor="middle" fill="#0f172a" fontSize="13">lambda_long = {lambda.toFixed(2)} m</text>
        <text x="460" y="430" textAnchor="middle" fill="#475569" fontSize="13">
          {lang === "en" ? `omega-k is linear, speed ${v.toFixed(0)} m/s` : `omega-k es lineal, velocidad ${v.toFixed(0)} m/s`}
        </text>
      </g>
    );
  },
};

export default profile;
