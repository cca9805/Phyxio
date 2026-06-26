import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "propiedades-elasticas-del-solido",
    title: {
      es: "Propiedades elasticas del solido",
      en: "Elastic Properties of Solids",
    },
  },
  title: {
    es: "Curva tension-deformacion de un solido isotropo",
    en: "Stress-strain curve of an isotropic solid",
  },
  infoCards: [
    {
      key: "hooke-law",
      label: { es: "Ley de Hooke", en: "Hooke Law" },
      body: {
        es: "En regimen elastico lineal, la tension es proporcional a la deformacion. La pendiente de la recta es el modulo de Young.",
        en: "In the linear elastic regime, stress is proportional to strain. The slope of the line is the Young modulus.",
      },
    },
    {
      key: "two-constants",
      label: { es: "Solo dos constantes", en: "Only two constants" },
      body: {
        es: "Un solido isotropo queda completamente descrito por dos constantes elasticas independientes. Las demas se derivan algebraicamente.",
        en: "An isotropic solid is completely described by two independent elastic constants. The others are derived algebraically.",
      },
    },
  ],
  interpretation_binding: {
    target: "modulo_de_young",
    magnitudes: ["modulo_de_young", "modulo_de_cizalla", "modulo_de_compresibilidad", "nu_poisson", "sigma", "epsilon"],
    formula: "modulo_young",
  },
  id: "propiedades-elasticas-del-solido-svg",
  leaf_id: "propiedades-elasticas-del-solido",
  graph_identity: {
    pregunta_principal: {
      es: "Como se relacionan los modulos elasticos de un solido isotropo con su respuesta mecanica a distintos tipos de esfuerzo?",
      en: "How do the elastic moduli of an isotropic solid relate to its mechanical response under different types of stress?",
      keywords: ["elasticidad", "Young", "cizalla", "Poisson", "modulo", "solido", "isotropo"],
    },
    magnitud_estrella: "modulo_de_cizalla",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "propiedades-elasticas-del-solido",
    graphId: "propiedades-elasticas-del-solido-svg",
    purpose: {
      es: "Visualizar la curva tension-deformacion y la deformacion lateral de una barra bajo traccion uniaxial, mostrando el efecto del modulo de Young y del coeficiente de Poisson.",
      en: "Visualise the stress-strain curve and lateral deformation of a bar under uniaxial tension, showing the effect of Young modulus and Poisson ratio.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["modulo_de_young", "nu_poisson", "sigma"],
    acceptedAliases: {
      modulo_de_young: ["young_modulus", "modulo_young"],
      nu_poisson: ["poisson_ratio", "poisson"],
      sigma: ["stress", "tension"],
    },
    derivedMagnitudes: ["epsilon", "modulo_de_cizalla"],
    targetCandidates: ["modulo_de_young", "epsilon"],
    equations: ["sigma = E * epsilon", "E = 2G(1+nu)"],
    hypotheses: [
      { es: "Medio isotropo homogeneo.", en: "Isotropic homogeneous medium." },
      { es: "Regimen elastico lineal.", en: "Linear elastic regime." },
    ],
    validityDomain: [
      { es: "Deformaciones infinitesimales, epsilon inferior a 0.01.", en: "Infinitesimal strains, epsilon below 0.01." },
    ],
    visualSimplifications: [
      { es: "Se muestra una barra rectangular con elongacion y contraccion lateral exageradas.", en: "A rectangular bar with exaggerated elongation and lateral contraction is shown." },
    ],
    alwaysVisible: ["bar", "stress_arrows", "strain_labels"],
  }),
  params: {
    schema: [
      { key: "modulo_de_young", default: 200e9 },
      { key: "nu_poisson", default: 0.3 },
      { key: "sigma", default: 150e6 },
    ],
    derivations: {
      epsilon: ({ modulo_de_young, sigma }) => Number(sigma ?? 150e6) / Number(modulo_de_young ?? 200e9),
      modulo_de_cizalla: ({ modulo_de_young, nu_poisson }) => Number(modulo_de_young ?? 200e9) / (2 * (1 + Number(nu_poisson ?? 0.3))),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const E = Math.max(1e6, Number(p.modulo_de_young ?? p.E_young ?? 200e9));
    const nu = Math.max(-0.99, Math.min(0.499, Number(p.nu_poisson ?? 0.3)));
    const sig = Math.max(0, Number(p.sigma ?? 150e6));
    const eps = sig / E;
    const epsT = -nu * eps;
    const G = E / (2 * (1 + nu));

    const barX = 200;
    const barY = 140;
    const barW = 400;
    const barH = 120;
    const scaleEps = Math.min(eps * 2000, 80);
    const scaleEpsT = Math.min(Math.abs(epsT) * 2000, 30);

    return (
      <g>
        <rect x="54" y="42" width="812" height="420" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="460" y="68" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="700">
          {lang === "en" ? "Uniaxial tension – elastic deformation" : "Traccion uniaxial – deformacion elastica"}
        </text>

        {/* Original bar outline */}
        <rect x={barX} y={barY} width={barW} height={barH} fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="5 5" />

        {/* Deformed bar */}
        <rect
          x={barX}
          y={barY + scaleEpsT}
          width={barW + scaleEps}
          height={barH - 2 * scaleEpsT}
          fill="#dbeafe"
          stroke="#2563eb"
          strokeWidth="2"
          rx="3"
        />

        {/* Stress arrows */}
        <line x1={barX - 50} y1={barY + barH / 2} x2={barX - 5} y2={barY + barH / 2} stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
        <line x1={barX + barW + 50 + scaleEps} y1={barY + barH / 2} x2={barX + barW + 5 + scaleEps} y2={barY + barH / 2} stroke="#dc2626" strokeWidth="2.5" markerStart="url(#arrowhead)" />

        {/* Labels */}
        <text x={barX - 55} y={barY + barH / 2 - 10} fill="#dc2626" fontSize="13" textAnchor="end">
          {lang === "en" ? "tension" : "traccion"}
        </text>

        {/* Elongation annotation */}
        <line x1={barX + barW} y1={barY + barH + 30} x2={barX + barW + scaleEps} y2={barY + barH + 30} stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x={barX + barW + scaleEps / 2} y={barY + barH + 50} textAnchor="middle" fill="#16a34a" fontSize="12">
          {lang === "en" ? "elongation" : "alargamiento"}
        </text>

        {/* Contraction annotation */}
        <line x1={barX + barW / 2} y1={barY} x2={barX + barW / 2} y2={barY + scaleEpsT} stroke="#f97316" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
        <text x={barX + barW / 2 + 60} y={barY + scaleEpsT / 2 + 4} fill="#f97316" fontSize="11">
          {lang === "en" ? "contraction" : "contraccion"}
        </text>

        {/* Values */}
        <text x="460" y="340" textAnchor="middle" fill="#0f172a" fontSize="14">
          E = {(E / 1e9).toFixed(0)} GPa · G = {(G / 1e9).toFixed(1)} GPa · nu = {nu.toFixed(2)}
        </text>
        <text x="460" y="365" textAnchor="middle" fill="#475569" fontSize="13">
          sigma = {(sig / 1e6).toFixed(0)} MPa · epsilon = {eps.toExponential(2)} · epsilon_t = {epsT.toExponential(2)}
        </text>

        {/* Stress-strain mini chart */}
        <line x1="120" y1="420" x2="320" y2="420" stroke="#64748b" strokeWidth="1" />
        <line x1="120" y1="420" x2="120" y2="310" stroke="#64748b" strokeWidth="1" />
        <line x1="120" y1="420" x2={120 + 150} y2={420 - 80} stroke="#2563eb" strokeWidth="2" />
        <text x="220" y="445" textAnchor="middle" fill="#64748b" fontSize="10">epsilon</text>
        <text x="105" y="365" textAnchor="middle" fill="#64748b" fontSize="10" transform="rotate(-90,105,365)">sigma</text>
        <text x="200" y="360" fill="#2563eb" fontSize="10">
          {lang === "en" ? "slope = E" : "pendiente = E"}
        </text>
      </g>
    );
  },
};

export default profile;
