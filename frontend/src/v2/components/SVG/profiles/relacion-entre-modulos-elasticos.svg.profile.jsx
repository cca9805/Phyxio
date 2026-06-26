import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "relacion-entre-modulos-elasticos",
    title: {
      es: "Relacion entre modulos elasticos",
      en: "Relationship Between Elastic Moduli",
    },
  },
  title: {
    es: "Modulos elasticos normalizados en funcion del coeficiente de Poisson",
    en: "Normalised elastic moduli as a function of Poisson ratio",
  },
  infoCards: [
    {
      key: "two-constants",
      label: { es: "Dos constantes bastan", en: "Two constants suffice" },
      body: {
        es: "Un solido isotropo queda completamente descrito por dos constantes elasticas independientes. Todas las demas se deducen algebraicamente.",
        en: "An isotropic solid is completely described by two independent elastic constants. All others are derived algebraically.",
      },
    },
    {
      key: "nu-control",
      label: { es: "Nu como parametro de control", en: "Nu as control parameter" },
      body: {
        es: "El coeficiente de Poisson controla la particion entre rigidez a cizalla (G) y rigidez volumetrica (K). Barrer nu de -1 a 0.5 muestra todos los comportamientos posibles.",
        en: "Poisson ratio controls the partition between shear stiffness (G) and volumetric stiffness (K). Sweeping nu from -1 to 0.5 shows all possible behaviours.",
      },
    },
  ],
  interpretation_binding: {
    target: "nu_poisson",
    magnitudes: ["modulo_de_young", "modulo_de_cizalla", "modulo_de_compresibilidad", "nu_poisson", "lambda_lame"],
    formula: "relacion_G_E_nu",
  },
  id: "relacion-entre-modulos-elasticos-svg",
  leaf_id: "relacion-entre-modulos-elasticos",
  graph_identity: {
    pregunta_principal: {
      es: "Como muestran los cocientes G/E, K/E y lambda/E que dos constantes independientes relacionan todos los modulos de un solido isotropo?",
      en: "How do the G/E, K/E and lambda/E ratios show that two independent constants relate all moduli of an isotropic solid?",
      keywords: ["modulos", "constantes", "independientes", "Poisson", "cizalla", "compresibilidad", "Lame", "isotropo"],
    },
    magnitud_estrella: "cociente_k_e",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "relacion-entre-modulos-elasticos",
    graphId: "relacion-entre-modulos-elasticos-svg",
    purpose: {
      es: "Visualizar la variacion de los cocientes G/E, K/E y lambda/E en funcion de nu.",
      en: "Visualise the variation of G/E, K/E and lambda/E ratios as a function of nu.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["modulo_de_young", "nu_poisson"],
    acceptedAliases: {
      modulo_de_young: ["E", "young_modulus"],
      nu_poisson: ["nu", "poisson"],
    },
    derivedMagnitudes: ["modulo_de_cizalla", "modulo_de_compresibilidad", "lambda_lame", "cociente_g_e", "cociente_k_e"],
    targetCandidates: ["modulo_de_cizalla", "modulo_de_compresibilidad", "nu_poisson"],
    equations: ["G = E/(2(1+nu))", "K = E/(3(1-2nu))", "lambda = E*nu/((1+nu)(1-2nu))"],
    hypotheses: [
      { es: "Material isotropo.", en: "Isotropic material." },
      { es: "Regimen elastico lineal.", en: "Linear elastic regime." },
    ],
    validityDomain: [
      { es: "-1 < nu <= 0.5.", en: "-1 < nu <= 0.5." },
    ],
    visualSimplifications: [
      { es: "Se muestran barras proporcionales a los cocientes G/E, K/E, lambda/E.", en: "Bars proportional to G/E, K/E, lambda/E ratios are shown." },
    ],
    alwaysVisible: ["nu_slider_indicator", "ratio_bars"],
  }),
  params: {
    schema: [
      { key: "modulo_de_young", default: 200e9 },
      { key: "nu_poisson", default: 0.3 },
    ],
    derivations: {
      modulo_de_cizalla: ({ modulo_de_young, nu_poisson }) => {
        const E = Number(modulo_de_young ?? 200e9);
        const nu = Number(nu_poisson ?? 0.3);
        return E / (2 * (1 + nu));
      },
      modulo_de_compresibilidad: ({ modulo_de_young, nu_poisson }) => {
        const E = Number(modulo_de_young ?? 200e9);
        const nu = Number(nu_poisson ?? 0.3);
        const denom = 3 * (1 - 2 * nu);
        return denom > 0 ? E / denom : Infinity;
      },
      lambda_lame: ({ modulo_de_young, nu_poisson }) => {
        const E = Number(modulo_de_young ?? 200e9);
        const nu = Number(nu_poisson ?? 0.3);
        const denom = (1 + nu) * (1 - 2 * nu);
        return denom > 0 ? (E * nu) / denom : Infinity;
      },
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const E = Math.max(1, Number(p.modulo_de_young ?? p.E_young ?? 200e9));
    const nu = Math.max(-0.99, Math.min(0.499, Number(p.nu_poisson ?? 0.3)));
    const GE = 1 / (2 * (1 + nu));
    const denom = 1 - 2 * nu;
    const KE = denom > 0.001 ? 1 / (3 * denom) : 99;
    const lamE = denom > 0.001 ? nu / ((1 + nu) * denom) : 99;
    const G = E * GE;
    const K = E * Math.min(KE, 99);
    const lam = E * lamE;

    const barMaxH = 280;
    const maxRatio = Math.max(GE, KE, Math.abs(lamE), 1);
    const scale = barMaxH / maxRatio;

    const barW = 80;
    const baseY = 400;
    const bars = [
      { label: "G/E", value: GE, color: "#2563eb", x: 220, absVal: (G / 1e9).toFixed(1) + " GPa" },
      { label: "K/E", value: Math.min(KE, maxRatio), color: "#16a34a", x: 420, absVal: (K / 1e9).toFixed(1) + " GPa" },
      { label: "λ/E", value: lamE, color: "#d97706", x: 620, absVal: (lam / 1e9).toFixed(1) + " GPa" },
    ];

    return (
      <g>
        <rect x="54" y="42" width="812" height="420" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="460" y="68" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="700">
          {lang === "en" ? "Moduli ratios vs Poisson ratio" : "Cocientes de modulos vs coeficiente de Poisson"}
        </text>
        <text x="460" y="90" textAnchor="middle" fill="#475569" fontSize="13">
          ν = {nu.toFixed(3)} · E = {(E / 1e9).toFixed(0)} GPa
        </text>

        {/* Baseline */}
        <line x1="160" y1={baseY} x2="760" y2={baseY} stroke="#94a3b8" strokeWidth="1" />

        {bars.map(({ label, value, color, x, absVal }) => {
          const h = Math.min(Math.abs(value) * scale, barMaxH);
          const yTop = value >= 0 ? baseY - h : baseY;
          return (
            <g key={label}>
              <rect x={x - barW / 2} y={yTop} width={barW} height={h} fill={color} opacity={0.7} rx="4" />
              <text x={x} y={baseY + 20} textAnchor="middle" fill={color} fontSize="14" fontWeight="600">{label}</text>
              <text x={x} y={baseY + 36} textAnchor="middle" fill="#475569" fontSize="11">
                {typeof value === "number" ? value.toFixed(3) : "∞"}
              </text>
              <text x={x} y={yTop - 6} textAnchor="middle" fill={color} fontSize="11">{absVal}</text>
            </g>
          );
        })}

        <text x="460" y="460" textAnchor="middle" fill="#0f172a" fontSize="12">
          G = {(G / 1e9).toFixed(1)} GPa · K = {(K / 1e9).toFixed(1)} GPa · λ = {(lam / 1e9).toFixed(1)} GPa
        </text>
      </g>
    );
  },
};

export default profile;
