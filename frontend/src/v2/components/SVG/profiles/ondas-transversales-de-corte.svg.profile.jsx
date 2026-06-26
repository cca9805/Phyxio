import React from "react";
import {
  SVG_SCENE_TYPES,
  SVG_MOTION_TYPES,
} from "@/v2/components/SVG/svgGrammar";
import { createSvgProfileContract } from "@/v2/components/SVG/profiles/svgProfileContracts.js";

const profile = {
  meta: {
    leafId: "ondas-transversales-de-corte",
    title: {
      es: "Ondas transversales de corte",
      en: "Transverse Shear Waves",
    },
  },
  title: {
    es: "Propagacion transversal en un solido",
    en: "Transverse propagation in a solid",
  },
  infoCards: [
    {
      key: "shear-only",
      label: { es: "Solo en solidos", en: "Only in solids" },
      body: {
        es: "Las ondas transversales requieren rigidez a cortante (G > 0). En liquidos y gases G es cero, por lo que no se propagan ondas S.",
        en: "Transverse waves require shear rigidity (G > 0). In liquids and gases G is zero, so S waves do not propagate.",
      },
    },
    {
      key: "vs-less-vp",
      label: { es: "v_s siempre menor que v_p", en: "v_s always less than v_p" },
      body: {
        es: "La velocidad transversal es siempre inferior a la longitudinal en el mismo medio. El cociente v_p/v_s depende solo del coeficiente de Poisson.",
        en: "Transverse velocity is always less than longitudinal velocity in the same medium. The v_p/v_s ratio depends only on the Poisson ratio.",
      },
    },
  ],
  interpretation_binding: {
    target: "v_s",
    magnitudes: ["v_s", "G_shear", "rho_medio", "v_p", "nu_poisson", "lambda_s", "Z_s"],
    formula: "velocidad_onda_s",
  },
  id: "ondas-transversales-de-corte-svg",
  leaf_id: "ondas-transversales-de-corte",
  graph_identity: {
    pregunta_principal: {
      es: "Por que las ondas transversales de corte solo se propagan en solidos y que relacion tiene su velocidad con la rigidez del material?",
      en: "Why do transverse shear waves only propagate in solids and how does their velocity relate to material stiffness?",
      keywords: ["transversal", "corte", "cizalla", "solido", "shear", "rigidez", "velocidad"],
    },
    magnitud_estrella: "lambda_s",
  },
  scene: SVG_SCENE_TYPES.CUSTOM,
  viewBox: "0 0 920 520",
  svgHeight: 600,
  motion: { type: SVG_MOTION_TYPES.NONE },
  graph_contract: createSvgProfileContract({
    leafId: "ondas-transversales-de-corte",
    graphId: "ondas-transversales-de-corte-svg",
    purpose: {
      es: "Visualizar la deformacion de corte que produce el paso de la onda transversal y el movimiento de particulas perpendicular a la direccion de propagacion.",
      en: "Visualise the shear deformation produced by the transverse wave passage and particle motion perpendicular to the propagation direction.",
    },
    level: ["Upper Secondary", "University"],
    expectedInputs: ["G_shear", "rho_medio"],
    acceptedAliases: {
      v_s: ["shear_velocity", "velocidad_s"],
      G_shear: ["shear_modulus", "modulo_cizalla"],
      rho_medio: ["density", "densidad"],
    },
    derivedMagnitudes: ["v_s"],
    targetCandidates: ["v_s", "G_shear"],
    equations: ["v_s = sqrt(G / rho)"],
    hypotheses: [
      { es: "Medio isotropo homogeneo.", en: "Isotropic homogeneous medium." },
      { es: "G > 0 (solido).", en: "G > 0 (solid)." },
    ],
    validityDomain: [
      { es: "Deformaciones infinitesimales en regimen elastico.", en: "Infinitesimal deformations in elastic regime." },
    ],
    visualSimplifications: [
      { es: "Se muestra una fila de particulas con desplazamiento perpendicular exagerado.", en: "A row of particles with exaggerated perpendicular displacement is shown." },
    ],
    alwaysVisible: ["particle_row", "propagation_arrow", "displacement_arrows"],
  }),
  params: {
    schema: [
      { key: "G_shear", default: 30e9 },
      { key: "rho_medio", default: 2700 },
    ],
    derivations: {
      v_s: ({ G_shear, rho_medio }) => Math.sqrt(Number(G_shear ?? 30e9) / Number(rho_medio ?? 2700)),
    },
  },
  render: ({ p = {}, lang = "es" }) => {
    const G = Math.max(1, Number(p.G_shear ?? 30e9));
    const rho = Math.max(1, Number(p.rho_medio ?? 2700));
    const vs = Math.sqrt(G / rho);
    const nParts = 20;
    const x0 = 100;
    const y0 = 260;
    const dx = 36;
    const ampMax = 40;

    return (
      <g>
        <rect x="54" y="42" width="812" height="420" rx="12" fill="#f8fafc" stroke="#cbd5e1" />
        <text x="460" y="68" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="700">
          {lang === "en" ? "Transverse shear wave – particle motion" : "Onda transversal de corte – movimiento de particulas"}
        </text>
        {/* propagation arrow */}
        <line x1={x0} y1={y0 + 90} x2={x0 + nParts * dx} y2={y0 + 90} stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
        <text x={x0 + (nParts * dx) / 2} y={y0 + 115} textAnchor="middle" fill="#475569" fontSize="13">
          {lang === "en" ? "propagation direction" : "direccion de propagacion"}
        </text>
        {/* particles */}
        {Array.from({ length: nParts }, (_, i) => {
          const phase = (i / nParts) * 2 * Math.PI;
          const dy = ampMax * Math.sin(phase);
          const px = x0 + i * dx;
          const py = y0 + dy;
          return (
            <g key={i}>
              <line x1={px} y1={y0} x2={px} y2={py} stroke="#f97316" strokeWidth="1.5" strokeDasharray="3 2" />
              <circle cx={px} cy={py} r="5" fill="#2563eb" />
            </g>
          );
        })}
        {/* equilibrium line */}
        <line x1={x0} y1={y0} x2={x0 + (nParts - 1) * dx} y2={y0} stroke="#64748b" strokeWidth="1" strokeDasharray="5 5" />
        <text x={x0 + (nParts - 1) * dx + 10} y={y0 + 4} fill="#64748b" fontSize="11">
          {lang === "en" ? "equilibrium" : "equilibrio"}
        </text>
        {/* velocity label */}
        <text x="460" y="445" textAnchor="middle" fill="#0f172a" fontSize="14">
          v_s = {Math.round(vs)} m/s
        </text>
      </g>
    );
  },
};

export default profile;
